"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["default-src_app_modules_claim_garages_garage-details_garage-details_component_ts-src_app_modu-68e44a"],{

/***/ 39090:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/claim/garages/garage-details/garage-details.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GarageDetailsComponent": () => (/* binding */ GarageDetailsComponent)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/display/claims-table-config */ 69281);
/* harmony import */ var src_app_dialogs_claim_garage_assignment_claim_garage_assignment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialogs/claim-garage-assignment/claim-garage-assignment.component */ 19313);
/* harmony import */ var src_app_dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialogs/reject-claim-dialog/reject-claim-dialog.component */ 6288);
/* harmony import */ var src_app_widgets_xa_paginator_xa_paginator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/xa-paginator/xa-paginator.component */ 29685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_helper_pipe_number_suffix_number_suffix_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helper/pipe/number-suffix/number-suffix.pipe */ 79933);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_chart_chq_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-chart/chq-chart.component */ 4501);
/* harmony import */ var _widgets_xa_button_xa_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../widgets/xa-button/xa-button.component */ 74678);
/* harmony import */ var _widgets_xa_table_xa_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../widgets/xa-table/xa-table.component */ 26435);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../helper/directive/claim-roles.directive */ 65872);


























function GarageDetailsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GarageDetailsComponent_div_0_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r15.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "left-arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 2, "back_garage"), "");
  }
}
function GarageDetailsComponent_div_0_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "internal-garage");
  }
}
function GarageDetailsComponent_div_0_div_10_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "registered-garage");
  }
}
function GarageDetailsComponent_div_0_div_10_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, GarageDetailsComponent_div_0_div_10_ng_template_4_div_0_Template, 2, 1, "div", 47);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](7);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r19.garageDetails.Status === ctx_r19.garageRegistrationStatus.registered)("ngIfElse", _r20);
  }
}
function GarageDetailsComponent_div_0_div_10_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "unregistered-garages");
  }
}
function GarageDetailsComponent_div_0_div_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, GarageDetailsComponent_div_0_div_10_ng_template_6_div_0_Template, 2, 1, "div", 51);
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r21.garageDetails.Status === ctx_r21.garageRegistrationStatus.unregistered);
  }
}
function GarageDetailsComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, GarageDetailsComponent_div_0_div_10_div_3_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, GarageDetailsComponent_div_0_div_10_ng_template_4_Template, 1, 2, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, GarageDetailsComponent_div_0_div_10_ng_template_6_Template, 1, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](5);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r5.garageDetails.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r5.garageDetails.Status === ctx_r5.garageRegistrationStatus.internal)("ngIfElse", _r18);
  }
}
function GarageDetailsComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r6.garageDetails.Address);
  }
}
function GarageDetailsComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r7.garageDetails.GarageMobileNumber);
  }
}
function GarageDetailsComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("svgIcon", "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r8.garageDetails.Distance);
  }
}
function GarageDetailsComponent_div_0_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "chq-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("buttonModel", ctx_r24.assignButtonModel);
  }
}
function GarageDetailsComponent_div_0_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 65)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMapInterpolate1"]("assigned-tag ", ctx_r25.claimDetails.claimStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r25.status);
  }
}
function GarageDetailsComponent_div_0_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "chq-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("buttonModel", ctx_r26.feedbackModel);
  }
}
function GarageDetailsComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, GarageDetailsComponent_div_0_div_14_div_1_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, GarageDetailsComponent_div_0_div_14_div_2_Template, 3, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, GarageDetailsComponent_div_0_div_14_div_3_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r9.showAssignButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r9.showAssignedTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx_r9.claimDetails == null ? null : ctx_r9.claimDetails.garageDetails == null ? null : ctx_r9.claimDetails.garageDetails.reason) && (ctx_r9.claimDetails == null ? null : ctx_r9.claimDetails.claimStatus) === ctx_r9.CLAIM_STATUS.GarageAssignmentRequestedRejected && ctx_r9.showAssignedTag);
  }
}
function GarageDetailsComponent_div_0_chq_chart_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "chq-chart", 67, 68);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("series", ctx_r10.donutChartOptions.series)("chart", ctx_r10.donutChartOptions.chart)("labels", ctx_r10.donutChartOptions.labels)("responsive", ctx_r10.donutChartOptions.responsive)("colors", ctx_r10.donutChartOptions.colors)("stroke", ctx_r10.donutChartOptions.stroke)("dataLabels", ctx_r10.donutChartOptions.dataLabels)("plotOptions", ctx_r10.donutChartOptions.plotOptions)("states", ctx_r10.donutChartOptions.states)("legend", ctx_r10.donutChartOptions.legend)("tooltip", ctx_r10.donutChartOptions.tooltip);
  }
}
function GarageDetailsComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p", 71);
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
function GarageDetailsComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 72)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "chq-chart", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Value ", ctx_r12.i18n.currencySymbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("series", ctx_r12.barChartOptions.series)("chart", ctx_r12.barChartOptions.chart)("dataLabels", ctx_r12.barChartOptions.dataLabels)("plotOptions", ctx_r12.barChartOptions.plotOptions)("responsive", ctx_r12.barChartOptions.responsive)("xaxis", ctx_r12.barChartOptions.xaxis)("yaxis", ctx_r12.barChartOptions.yaxis)("legend", ctx_r12.barChartOptions.legend)("fill", ctx_r12.barChartOptions.fill)("stroke", ctx_r12.barChartOptions.stroke)("tooltip", ctx_r12.barChartOptions.tooltip);
  }
}
function GarageDetailsComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p", 71);
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
function GarageDetailsComponent_div_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 75)(1, "xa-paginator", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("paginationChange", function GarageDetailsComponent_div_0_div_46_Template_xa_paginator_paginationChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r29.handlePaginationChangeReapir($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pagination", ctx_r14.pagination);
  }
}
function GarageDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, GarageDetailsComponent_div_0_div_1_Template, 5, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 14)(8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, GarageDetailsComponent_div_0_div_10_Template, 8, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, GarageDetailsComponent_div_0_div_11_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, GarageDetailsComponent_div_0_div_12_Template, 4, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, GarageDetailsComponent_div_0_div_13_Template, 4, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, GarageDetailsComponent_div_0_div_14_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 22)(17, "div", 23)(18, "div", 24)(19, "div", 25)(20, "div")(21, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, GarageDetailsComponent_div_0_chq_chart_25_Template, 2, 11, "chq-chart", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, GarageDetailsComponent_div_0_div_26_Template, 8, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 30)(28, "div", 31)(29, "div", 32)(30, "div")(31, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](34, GarageDetailsComponent_div_0_div_34_Template, 4, 12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, GarageDetailsComponent_div_0_div_35_Template, 8, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "div", 34)(37, "div", 35)(38, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 37)(42, "div", 38)(43, "div", 39)(44, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](45, "xa-table", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, GarageDetailsComponent_div_0_div_46_Template, 3, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r0.hideBackButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("src", ctx_r0.garageDetails.LogoUrl || "assets/img/xa_logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r0.garageDetails.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.garageDetails.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.garageDetails.Address);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.garageDetails.GarageMobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.garageDetails.Distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.claimGuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](23, 21, "assigned_and_completed_claims"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.haveDataForDonutChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r0.haveDataForDonutChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](33, 23, "approved_repair_and_unapproved_repair"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.haveDataForBarChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r0.haveDataForBarChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](40, 25, "assigned_claims_for_repair_under_the_garage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("config", ctx_r0.tableConfig)("tableData", ctx_r0.tableData)("cellClicked", ctx_r0.handleCellClick)("i18n", ctx_r0.i18n)("sortChanged", ctx_r0.handleSortChangeRepair);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx_r0.tableData == null ? null : ctx_r0.tableData.length) > 0 && ctx_r0.pagination.count > ctx_r0.pagination.pageSize);
  }
}
function GarageDetailsComponent_ng_container_6_xa_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "xa-button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GarageDetailsComponent_ng_container_6_xa_button_1_Template_xa_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r33.openRejectClaimPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "reject"), "");
  }
}
function GarageDetailsComponent_ng_container_6_ng_container_2_xa_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "xa-button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GarageDetailsComponent_ng_container_6_ng_container_2_xa_button_1_Template_xa_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r36.approve());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "approve"), "");
  }
}
function GarageDetailsComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, GarageDetailsComponent_ng_container_6_ng_container_2_xa_button_1_Template, 4, 3, "xa-button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("chqClaimRoles", "claimManager");
  }
}
function GarageDetailsComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, GarageDetailsComponent_ng_container_6_xa_button_1_Template, 4, 3, "xa-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, GarageDetailsComponent_ng_container_6_ng_container_2_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("chqClaimRoles", "claimManager");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx_r1.claimDetails == null ? null : ctx_r1.claimDetails.claimStatus) !== ctx_r1.CLAIM_STATUS.EstimateRejected);
  }
}
function GarageDetailsComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "xa-button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GarageDetailsComponent_ng_container_7_Template_xa_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r38.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 1, "reassign"), "");
  }
}
function GarageDetailsComponent_ng_container_8_xa_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "xa-button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GarageDetailsComponent_ng_container_8_xa_button_1_Template_xa_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r41.settleClaim());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "settle_claim"));
  }
}
function GarageDetailsComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, GarageDetailsComponent_ng_container_8_xa_button_1_Template, 4, 3, "xa-button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("chqClaimRoles", "claimManager");
  }
}
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);
class GarageDetailsComponent {
  /**
   * constructor
   */
  constructor(commonService, dialog, router, numberSuffixPipe, route, claimsService, monitorService, translateService, sanitized) {
    this.commonService = commonService;
    this.dialog = dialog;
    this.router = router;
    this.numberSuffixPipe = numberSuffixPipe;
    this.route = route;
    this.claimsService = claimsService;
    this.monitorService = monitorService;
    this.translateService = translateService;
    this.sanitized = sanitized;
    this.CLAIM_STATUS = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS;
    // Gblobal Variables
    this.claimId = '';
    this.garageId = '';
    this.claimGuid = '';
    this.garageDetails = {};
    this.gotAPIResponse = false;
    this.claimDetails = {};
    this.garageRegistrationStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.GARAGE_REGISTRATION_STATUS;
    // Table Variables
    this.configData = src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_3__.ClaimAGarageTableConfig;
    this.pagination = src_app_widgets_xa_paginator_xa_paginator_component__WEBPACK_IMPORTED_MODULE_6__.defaultPagination;
    this.hideBackButton = true;
    this.orderBy = '';
    this.sortDirection = '';
    this.haveDataForDonutChart = false;
    this.haveDataForBarChart = false;
    this.showAssignButton = false;
    this.showAssignedTag = false;
    this.showReassignButton = false;
    this.is1Stage = false;
    this.userDetails = {};
    this.requestForEnum = {
      requestForInvoice: 1,
      requestForEstimate: 2
    };
    // Buttons
    this.assignButtonModel = {
      label: 'Assign',
      type: 'primary',
      icon: '',
      onclick: this.assignGarage.bind(this)
    };
    this.feedbackModel = {
      label: 'feedback',
      type: 'outline',
      icon: 'feedback',
      onclick: this.handleFeedbackClick.bind(this)
    };
    this.isThirdPartyExternalGarage = false;
    this.reassign = false;
    this.hideButtonsOnReassign = false;
    this.status = '';
    this.getDonutChartOptions = () => {
      return {
        series: [],
        chart: {
          type: 'donut',
          height: 350
        },
        labels: [],
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#fff']
          },
          formatter: value => {
            return value.toFixed(2) + '%';
          }
        },
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
        stroke: {
          width: 0
        },
        legend: {
          show: true,
          position: 'bottom'
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
        },
        tooltip: {
          y: {
            formatter: value => {
              return value + '%';
            }
          }
        }
      };
    };
    this.getBarChartOptions = () => {
      return {
        series: [],
        chart: {
          type: 'bar',
          height: 350,
          stacked: false,
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
              return this.numberSuffixPipe.formatInThousand(value);
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
          onDatasetHover: {
            highlightDataSeries: false
          },
          followCursor: true
        }
      };
    };
    this.handleCellClick = (row, column, event) => {
      const target = event.target;
      if (column.id === 'ClaimNo') {
        const claimId = row.find(c => c.id === 'ClaimGuid')?.result?.value;
        this.router.navigate(['claim/claim-detail/' + claimId + '/customer-view']);
      }
      if (column.id === 'Action') {
        const claimId = row.find(c => c.id === 'ClaimGuid')?.result?.value;
        let actionType = null;
        if (target.id === 'request-invoice') {
          actionType = this.requestForEnum.requestForInvoice;
        } else if (target.id === 'request-estimate') {
          actionType = this.requestForEnum.requestForEstimate;
        }
        this.monitorService.logEvent('handleCellClick', ['GarageDetailsComponent', 'addenda-claim']);
        this.commonService.showLoading();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.claimsService.requestForEstimate(claimId, actionType)).then(response => {
          this.commonService.hideLoading();
          if (response) {
            this.commonService.showInfoToast(5000, response?.message);
          }
        }).catch(err => {
          this.commonService.hideLoading();
          this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_18__.SeverityLevel.Error);
        });
      }
    };
    this.handleSortChangeRepair = sort => {
      if (sort) {
        this.orderBy = sort.active;
        this.sortDirection = sort.direction;
        this.getClaims(true);
      }
    };
    this.donutChartOptions = this.getDonutChartOptions();
    this.barChartOptions = this.getBarChartOptions();
    this.i18n = this.commonService.geti18nInfo();
    this.route.parent?.params?.subscribe(data => {
      this.claimGuid = this.route.parent?.snapshot.paramMap.get('id');
      this.garageId = this.route.snapshot.paramMap.get('garageId');
    });
    this.route.queryParams.subscribe(params => {
      const codeParam = params['assigned'];
      if (codeParam === 'true') {
        this.hideBackButton = true;
      } else {
        this.hideBackButton = false;
      }
      const reassign = params['reassign'];
      if (reassign === 'true') {
        this.reassign = true;
      } else {
        this.reassign = false;
      }
    });
    this.commonService.userProfileData.subscribe(res => {
      if (res?.data) {
        this.userDetails = res.data;
        const workFlowPackage = res.data.userPermission?.orgPackages?.filter(orgPackage => {
          return orgPackage.automotiveServiceName === 'Addenda Claim Workflow';
        });
        if (workFlowPackage && workFlowPackage.length > 0) {
          const {
            permissions
          } = workFlowPackage[0];
          const singleTire = permissions.filter(perm => {
            return perm.permissionName?.includes('1Stage');
          });
          if (singleTire && singleTire.length > 0) {
            this.is1Stage = true;
          }
        }
      }
    });
  }
  /**
   * ng on init
   */
  ngOnInit() {
    this.pagination = {
      ...this.pagination,
      pageSize: 10
    };
    this.tableConfig = this.configData;
    this.garageDetails = {};
    this.commonService.showLoading();
    const funArry = [this.getClaims(), this.getGraphData()];
    if (this.claimGuid) {
      funArry.push(this.getClaimDetails());
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.forkJoin)(funArry).subscribe(result => {
      this.getGarageDetails();
    });
  }
  /**
   * @returns {void}
  */
  getGraphData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.claimsService.getGarageDashboardDetail({
      garageId: this.garageId,
      StartDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().startOf('month').format('YYYY-MM-DD'),
      EndDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().utc().format('YYYY-MM-DD')
    })).then(response => {
      if (response) {
        const data = response.data;
        if (data.assigned || data.completed) {
          this.haveDataForDonutChart = true;
          this.donutChartOptions = {
            ...this.donutChartOptions,
            series: [data.assigned, data.completed, data.others || 0],
            labels: [this.translateService.instant('assigned'), this.translateService.instant('completed'), this.translateService.instant('others')],
            colors: ['#008ffb', '#00e396', '#FFB200']
          };
        }
        if (!data.repairStatusDTOs) data.repairStatusDTOs = [];
        data.repairStatusDTOs = data.repairStatusDTOs.filter(ele => ele.approved > 0 || ele.unApproved > 0);
        if (data.repairStatusDTOs && data.repairStatusDTOs.length > 0) {
          this.haveDataForBarChart = true;
          this.barChartOptions = {
            ...this.barChartOptions,
            series: [{
              name: this.translateService.instant('approved_repairs'),
              data: data.repairStatusDTOs.map(ele => ele.approved),
              color: '#FFB200'
            }, {
              name: this.translateService.instant('unApproved_repairs'),
              data: data.repairStatusDTOs.map(ele => ele.unApproved),
              color: '#483cf4'
            }],
            xaxis: {
              ...this.barChartOptions.xaxis,
              categories: data.repairStatusDTOs.map(ele => this.translateService.instant('week') + ' ' + ele.weekName)
            }
          };
        }
      }
    }).catch(err => {
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_18__.SeverityLevel.Error);
    });
  }
  /**
   * @returns {void}
  */
  getClaimDetails() {
    this.commonService.showLoading();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.claimsService.getClaimDetail(this.claimGuid)).then(response => {
      this.commonService.hideLoading();
      if (response) {
        this.claimId = response?.id;
        this.claimDetails = response;
        this.commonService.claimDetails.next(this.claimDetails);
        this.commonService.claimStatus.next(this.claimDetails?.claimStatus);
        this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.STATUS_TEXT_DICT[this.claimDetails.claimStatus];
        this.isThirdPartyExternalGarage = response.garageDetails?.garageStatus === 'Registered';
        // When CM not satisfied with claim and want to reassign to another garage
        if (this.reassign && this.claimDetails?.garageDetails?.garageId && this.claimDetails.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.RepairEstimation && this.claimDetails?.garageDetails?.garageId !== Number(this.garageId)) {
          this.showAssignButton = true;
          this.hideButtonsOnReassign = true;
        } else if (this.claimDetails?.isEligibleForGarageReAssign) {
          //1st: When garage has not performed any action then user should be able to assign claims to another garage 
          if (this.claimDetails?.garageDetails?.garageId == this.garageId) {
            this.showAssignedTag = true;
            this.showReassignButton = true;
          } else {
            this.showAssignButton = true;
          }
        } else if (this.claimDetails?.garageDetails?.garageId && this.claimDetails.claimStatus !== src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.GarageAssignmentRequestedRejected) {
          this.showAssignedTag = true;
        } else if (this.claimDetails?.garageDetails?.garageId && this.claimDetails.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.GarageAssignmentRequestedRejected && this.claimDetails?.garageDetails?.garageId == this.garageId) {
          this.showReassignButton = true;
          this.showAssignedTag = true;
        } else {
          if (this.claimDetails?.fnolId) {
            if (this.claimDetails.claimStatus !== src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Draft) {
              this.showAssignButton = true;
            }
          } else {
            const automotiveServices = this.userDetails?.userPermission?.automotiveServices;
            const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda claims');
            const permissionList = automotiveService?.permissions;
            const anyPermisson = ['claim.garageassignment'].some(itemP => permissionList.map(item => item.permissionName).includes(itemP));
            if (this.is1Stage && this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.UploadPhotos) {
              this.showAssignButton = true;
            } else if (this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.ClaimSubmittedForApproval || this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.ApprovalReviewInProgress) {
              this.showAssignButton = true;
            } else if (anyPermisson && this.claimDetails.createdUserId === this.userDetails?.id && this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.UploadPhotos) {
              this.showAssignButton = true;
            } else if (this.claimDetails.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.GarageAssignmentRequestedRejected && this.claimDetails?.garageDetails?.garageId !== this.garageId) {
              this.showAssignButton = true;
            }
          }
        }
      }
    }).catch(err => {
      this.commonService.hideLoading();
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_18__.SeverityLevel.Error);
    });
  }
  /**
   * @returns {void}
  */
  getGarageDetails() {
    this.commonService.showLoading();
    const payload = {};
    if (this.claimGuid && this.claimDetails) {
      let latitudeToPass = this.claimDetails.lossDetails.lossLocationLatitude;
      let longitudeToPass = this.claimDetails.lossDetails.lossLocationLongitude;
      if (this.claimDetails?.lossDetails?.isCarAtDifferentLoc && this.claimDetails?.lossDetails?.carLocationLatitude && this.claimDetails?.lossDetails?.carLocationLongitude) {
        latitudeToPass = this.claimDetails.lossDetails.carLocationLatitude;
        longitudeToPass = this.claimDetails.lossDetails.carLocationLongitude;
      }
      if (latitudeToPass && longitudeToPass) {
        payload.Latitude = latitudeToPass;
        payload.Longitude = longitudeToPass;
      }
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.claimsService.getGarageList(`$filter=id eq ${this.garageId}`, payload)).then(response => {
      this.gotAPIResponse = true;
      this.commonService.hideLoading();
      if (response) {
        this.garageDetails = response?.value?.[0] || {};
        this.garageDetails.GarageMobileNumber = '';
        if (this.garageDetails.CountryCode) {
          this.garageDetails.GarageMobileNumber += this.garageDetails.CountryCode;
        }
        if (this.garageDetails.Phone) {
          this.garageDetails.GarageMobileNumber += this.garageDetails.Phone;
        }
      }
      setTimeout(() => {
        if (!this.claimId) {
          const elLayout = document.getElementsByClassName('page-container-garages-details')[0];
          if (elLayout) {
            elLayout.style.paddingLeft = '0px';
            elLayout.style.paddingRight = '0px';
            elLayout.style.paddingTop = '0px';
          }
        }
      });
    }).catch(err => {
      this.commonService.hideLoading();
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_18__.SeverityLevel.Error);
    });
  }
  /**
   * handlePaginationChange
   * @param event
   */
  handlePaginationChangeReapir(event) {
    const pagination = {
      pageSize: event.pageSize,
      offset: event.offset,
      currentPage: event.currentPage
    };
    this.pagination.currentPage = event.currentPage;
    this.pagination = {
      ...this.pagination,
      ...pagination
    };
    this.getClaims(true);
  }
  /**
   * getClaims
   */
  getClaims(showLoading = false) {
    if (showLoading) this.commonService.showLoading();
    let sort = '';
    if (this.orderBy && this.sortDirection) {
      sort = `&$orderby=${this.orderBy} ${this.sortDirection}`;
    }
    const pagination = this.pagination;
    const skip = (pagination.currentPage - 1) * pagination.pageSize;
    const queryParams = `&$top=${pagination.pageSize}&$skip=${skip}`;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.claimsService.getClaimsOfAGarage(`$filter=GarageId eq ${this.garageId}${sort}${queryParams}&count=true`)).then(response => {
      if (showLoading) this.commonService.hideLoading();
      if (response) {
        this.tableData = response.value?.map((item, ind) => {
          item['sno'] = skip + ind + 1;
          if (item.Status === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.GarageAssignedforClaim) {
            item.Action = this.sanitized.bypassSecurityTrustHtml('<button type="button" id="request-estimate" class="button-outline action-button"> <label id="request-estimate">Request for Estimate</label> </button>');
          } else if (item.Status === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Approved) {
            item.Action = this.sanitized.bypassSecurityTrustHtml('<button type="button" id="request-invoice" class="button-outline action-button"> <label id="request-invoice">Request for Invoice</label> </button>');
          } else {
            item.Action = null;
          }
          item.Status = '<span class="col-xa-orange2">' + item.Status + '</span>';
          return item;
        });
        this.pagination = {
          ...this.pagination,
          count: response['@odata.count'] || 0
        };
      }
    }).catch(err => {
      this.commonService.hideLoading();
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_18__.SeverityLevel.Error);
    });
  }
  /**
  * gback to garage list
  */
  back() {
    if (this.claimGuid) {
      this.router.navigate([`claim/claim-detail/${this.claimGuid}/garages`], {
        queryParams: {
          reassign: this.reassign
        }
      });
    } else {
      this.router.navigate(['claim/garages']);
    }
  }
  /**
  * assignGarage
  */
  assignGarage() {
    if (this.claimId && this.garageId) {
      const dialogRef = this.dialog.open(src_app_dialogs_claim_garage_assignment_claim_garage_assignment_component__WEBPACK_IMPORTED_MODULE_4__.ClaimGarageAssignmentComponent, {
        data: {
          garageDetails: this.garageDetails
        },
        panelClass: 'claim-garage-assignment'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.commonService.showLoading();
          let payload = {};
          let type = '';
          if (this.claimDetails.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.GarageAssignmentRequestedRejected || this.claimDetails.isEligibleForGarageReAssign || this.reassign) {
            payload = {
              'GAGuid': this.claimDetails.garageDetails?.garageGuid,
              'garageId': this.claimDetails.garageDetails?.garageId,
              'garageStatus': this.garageDetails?.Status,
              'claimId': this.claimId,
              'newGAGuid': this.garageDetails?.GarageGuid,
              'newGarageId': this.garageId
            };
            type = 'put';
          } else {
            payload = {
              'GAGuid': this.garageDetails?.GarageGuid,
              'garageId': this.garageId,
              'garageStatus': this.garageDetails?.Status,
              'claimId': this.claimId
            };
            type = 'post';
          }
          (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.claimsService.assignGarage(type, payload)).then(response => {
            this.commonService.hideLoading();
            this.claimDetails.garageDetails = {
              id: this.garageId,
              garageGuid: this.garageDetails?.GarageGuid
            };
            this.showAssignButton = false;
            this.showAssignedTag = true;
            this.commonService.claimStatus.next(src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.GarageAssignmentRequested);
            this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.STATUS_TEXT_DICT[src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.GarageAssignmentRequested];
            this.claimDetails.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.GarageAssignmentRequested;
            this.reassign = false;
            // As per userstory: User Story 24416: Addenda Claims | Assignment of Garage
            // const preferenceDialogRef = this.dialog.open(GarageAssignmentPreferenceComponent, {
            //   data: {
            //     garageDetails: this.garageDetails
            //   },
            //   width: '50%',
            //   height: '50%',
            //   panelClass: 'claim-garage-preference'
            // });
            // preferenceDialogRef.afterClosed().subscribe((result) => {
            //   if(result) {
            //     //TODO Call Preference API
            //     console.log('Call Preference API.')
            //   }
            // })
          }).catch(() => {
            this.commonService.hideLoading();
          });
        }
      });
    }
  }
  /**
     * Cancel booking
     */
  handleFeedbackClick() {
    this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('feedback'), this.claimDetails?.garageDetails?.reason, '', this.translateService.instant('ok'), '', false);
  }
  /**
    Opens a dialog box for the reject claim operation component with the specified data and panel class.
    @returns {void}
  */
  openRejectClaimPopup(data) {
    const dialogRef = this.dialog.open(src_app_dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_5__.RejectClaimDialogComponent, {
      data: {
        'claimGuid': this.claimGuid
      },
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
        if (response) {
          this.claimDetails.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Rejected;
          this.commonService.claimStatus.next(src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Rejected);
          this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.STATUS_TEXT_DICT[src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Rejected];
        }
      }
    });
  }
  /**
     * Approve claim
     */
  approve() {
    const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_action'), this.translateService.instant('msg_approve_claim'), '', this.translateService.instant('ok'), this.translateService.instant('cancel'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimsService.updateClaimStatus(this.claimGuid, 'Approved', 'Claim Approved').subscribe({
          next: response => {
            if (response) {
              this.claimDetails.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Approved;
              this.commonService.claimStatus.next(src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Approved);
              this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.STATUS_TEXT_DICT[src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Approved];
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  /**
    * settleClaim
  */
  settleClaim() {
    const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_action'), this.translateService.instant('msg_settle_claim'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimsService.updateClaimStatus(this.claimGuid, 'Completed', 'Settled').subscribe({
          next: response => {
            if (response) {
              this.claimDetails.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_2__.CLAIM_STATUS.Complete;
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function GarageDetailsComponent_Factory(t) {
    return new (t || GarageDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_helper_pipe_number_suffix_number_suffix_pipe__WEBPACK_IMPORTED_MODULE_8__.NumberSuffixPipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_9__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_10__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: GarageDetailsComponent,
    selectors: [["app-garage-details"]],
    decls: 9,
    vars: 4,
    consts: [["class", "page-container-garages-details", 4, "ngIf"], [1, "footer-full-wrapper", "estimate-details-footer"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png", "alt", "addenda-claims"], [1, "footer-button-wrapper"], [4, "ngIf"], [1, "page-container-garages-details"], ["class", "back-wrapper row", 3, "click", 4, "ngIf"], [1, "main-container"], [1, "rectangle"], [1, "garage-info-wrapper"], [1, "info-group"], [1, "avtar", 3, "src"], [1, "card-wrapper"], [1, "title-wrap"], ["class", "status-wrap", 4, "ngIf"], ["class", "address-wrap", 4, "ngIf"], ["class", "contact-group row", 4, "ngIf"], ["class", "location-group row", 4, "ngIf"], ["class", "right-section-wrapper", 4, "ngIf"], [1, "vector"], [1, "chart-wrapper", "row"], [1, "col-5"], [1, "assigned-claims"], [1, "card"], [1, "graph-title"], [1, "mt-30"], [3, "series", "chart", "labels", "responsive", "colors", "stroke", "dataLabels", "plotOptions", "states", "legend", "tooltip", 4, "ngIf"], ["class", "no-data-found", 4, "ngIf"], [1, "col-7"], [1, "repair-claims"], [1, "card", "customer-graph-container"], ["class", "customers-graph", 4, "ngIf"], [1, "claim-list-wrapper", "fx-col"], [1, "claim-list-header", "fx-row"], [1, "header-text", "graph-title"], [1, "claim-list-content"], [1, "tab-content", "fx-1"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "cellClicked", "i18n", "sortChanged"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "back-wrapper", "row", 3, "click"], [3, "svgIcon"], [1, "status-wrap"], [1, "label-wrap"], ["class", "garage-status-icon", 4, "ngIf", "ngIfElse"], ["registered", ""], ["unregistered", ""], [1, "garage-status-icon"], ["class", "garage-status-icon", 4, "ngIf"], [1, "address-wrap"], [1, "contact-group", "row"], [1, "phone-icon", 3, "svgIcon"], [1, "contact"], [1, "location-group", "row"], [1, "location-icon", 3, "svgIcon"], [1, "distance"], [1, "right-section-wrapper"], ["class", "assign-btn", 4, "ngIf"], ["class", "assigned-text-wrapper", 4, "ngIf"], ["class", "feedback-button", 4, "ngIf"], [1, "assign-btn"], [3, "buttonModel"], [1, "assigned-text-wrapper"], [1, "feedback-button"], [3, "series", "chart", "labels", "responsive", "colors", "stroke", "dataLabels", "plotOptions", "states", "legend", "tooltip"], ["chart", ""], [1, "no-data-found"], [1, "no-data-svg", 3, "svgIcon"], [1, "no-data-text"], [1, "customers-graph"], [1, "currency-value"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "yaxis", "legend", "fill", "stroke", "tooltip"], [1, "pagination-wrapper"], [3, "pagination", "paginationChange"], ["paginator", ""], ["type", "outline", "color", "danger", 3, "click", 4, "chqClaimRoles"], ["type", "outline", "color", "danger", 3, "click"], [3, "click", 4, "chqClaimRoles"], [3, "click"], ["type", "primary", "color", "primary", 3, "click", 4, "chqClaimRoles"], ["type", "primary", "color", "primary", 3, "click"]],
    template: function GarageDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, GarageDetailsComponent_div_0_Template, 47, 27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, GarageDetailsComponent_ng_container_6_Template, 3, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, GarageDetailsComponent_ng_container_7_Template, 5, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, GarageDetailsComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.gotAPIResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.hideButtonsOnReassign && ctx.isThirdPartyExternalGarage && (ctx.claimDetails == null ? null : ctx.claimDetails.claimStatus) === ctx.CLAIM_STATUS.RepairEstimation || !ctx.isThirdPartyExternalGarage && (ctx.claimDetails == null ? null : ctx.claimDetails.claimStatus) === ctx.CLAIM_STATUS.EstimateApproved || !ctx.isThirdPartyExternalGarage && (ctx.claimDetails == null ? null : ctx.claimDetails.claimStatus) === ctx.CLAIM_STATUS.EstimateRejected);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showReassignButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx.claimDetails == null ? null : ctx.claimDetails.claimStatus) === ctx.CLAIM_STATUS.SettlementInitiated);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_11__.ChqButtonComponent, _widgets_chq_chart_chq_chart_component__WEBPACK_IMPORTED_MODULE_12__.ChqChartComponent, _widgets_xa_button_xa_button_component__WEBPACK_IMPORTED_MODULE_13__.XaButton, _widgets_xa_table_xa_table_component__WEBPACK_IMPORTED_MODULE_14__.XaTable, src_app_widgets_xa_paginator_xa_paginator_component__WEBPACK_IMPORTED_MODULE_6__.XaPaginator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_15__.ClaimRolesDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
    styles: [".page-container-garages-details[_ngcontent-%COMP%] {\n  padding: calc(5px + 1.5vw);\n  border: #D7D7D7;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .back-wrapper[_ngcontent-%COMP%] {\n  padding: 10px 2px 10px 2px;\n  border-radius: 8px;\n  gap: 10px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #D7D7D7;\n  background: rgba(255, 255, 255, 0.6980392157);\n  padding: calc(10px + 1.5vw);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  border-radius: 9.22px;\n  background: #FFFFFF;\n  padding: 19px 14px 19px 14px;\n  border: 1px solid #D7D7D7;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  display: flex;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%] {\n  gap: 9px;\n  display: flex;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .avtar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 61px;\n  border-radius: 7px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0px;\n  text-align: left;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .status-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .status-wrap[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 12px;\n  padding: 3px 8px 3px 8px;\n  border-radius: 4px;\n  opacity: 0.6;\n  background: #A3A7AD;\n  margin: 3px 0px 3px 0px;\n  width: auto;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .address-wrap[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #A3A7AD;\n  width: 320px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .contact-group[_ngcontent-%COMP%]   .phone-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: flex;\n  padding-top: 2.03px;\n  color: #A3A7AD;\n  padding-left: 10px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .contact-group[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #A3A7AD;\n  padding-left: 8px;\n  padding-top: 2.3px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .location-group[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: flex;\n  padding-top: 2.03px;\n  color: #A3A7AD;\n  padding-left: 10px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .location-group[_ngcontent-%COMP%]   .distance[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  color: #A3A7AD;\n  padding-left: 8px;\n  padding-top: 2.3px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .garage-status-icon[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 26px;\n  background: var(--xa-lighter-gray);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  margin-left: 10px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .garage-status-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .assign-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  top: 49.65px;\n  left: 837px;\n  padding: 10px 12px 10px 12px;\n  border-radius: 8px;\n  gap: 10px;\n  display: flex;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .right-section-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .feedback-button[_ngcontent-%COMP%]     button {\n  padding: 6px 16px;\n  height: auto;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .feedback-button[_ngcontent-%COMP%]     mat-icon {\n  height: 13px;\n  width: 13px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(26, 34, 51, 0.1019607843);\n  margin: 10px 10px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%]   .assigned-claims[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 16px;\n  gap: 12px;\n  background: rgba(26, 34, 51, 0.0509803922);\n  border-radius: 8px;\n  box-sizing: border-box;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%]   .repair-claims[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background: rgba(26, 34, 51, 0.0509803922);\n  padding: 16px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%]   .no-data-found[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .chart-wrapper[_ngcontent-%COMP%]   .no-data-found[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]     .action-button {\n  padding: 10px 10px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]     .action-button label {\n  font-size: 12px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .graph-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 19px;\n  display: block;\n  margin: 0 0 10px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .mt-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .currency-value[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  transform: rotate(-90deg);\n  left: -30px;\n  top: calc(50% - 25px);\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n  font-size: 12px;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .assigned-tag[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 20px;\n  padding: 6px 16px;\n  border-radius: 16px;\n  text-align: center;\n  text-transform: uppercase;\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .approved[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Approved[_ngcontent-%COMP%] {\n  background-color: var(--xa-approve);\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .RepairEstimated[_ngcontent-%COMP%] {\n  background-color: --xa-repair-estimate;\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .GarageAssignmentRequestedRejected[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .rejected[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Rejected[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .reject[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Reject[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .GarageAssignmentRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-garage-requested);\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .closed[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Closed[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Completed[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Complete[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-header);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .repairestimation[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .RepairEstimation[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-estimate);\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .pendingapproval[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .PendingApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .readytoinvoice[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .ReadyToInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-ready-to-invoice);\n  color: var(--xa-black);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Assigned[_ngcontent-%COMP%] {\n  background-color: #4301FE;\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .AssignedBack[_ngcontent-%COMP%] {\n  background-color: var(--xa-secondary);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Active[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .Submitted[_ngcontent-%COMP%] {\n  background-color: #09C269;\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .invoiceReady[_ngcontent-%COMP%], .page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .InvoiceReady[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .GarageAssignedforClaim[_ngcontent-%COMP%] {\n  background-color: var(--xa-bluesh-grey);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .RepairInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .RepairInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .SettlementInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .ClaimSubmittedForApproval[_ngcontent-%COMP%] {\n  background-color: #D2F0AB;\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .ApprovalReviewInProgress[_ngcontent-%COMP%] {\n  background-color: #ECDBB7;\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .AssignedBackFromReview[_ngcontent-%COMP%] {\n  background-color: var(--xa-assigned-back-review);\n  color: var(--xa-white);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .AssignedBackFromApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-assigned-back-approval);\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .InvoiceRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-request-invoice);\n  color: var(--xa-black-medium);\n}\n.page-container-garages-details[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .EstimateRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-request-estimate);\n  color: var(--xa-black-medium);\n}\n\n  .claim-summary {\n  height: calc(100vh - (58px + 1.6vw) - 76px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n  .claim-summary .card-btn {\n  margin-top: 10px;\n  margin-right: 8px;\n}\n  .claim-summary .card-btn   button {\n  width: auto !important;\n  padding: 6px 12px;\n  height: 32px !important;\n  margin-right: 6px;\n  margin-bottom: 10px;\n}\n  .claim-summary .card-btn   .button-secondary {\n  color: #fff;\n}\n  .claim-summary .mat-content {\n  flex: initial;\n}\n  .claim-summary .dashbord-filter-dropdown > div {\n  margin-bottom: 15px;\n}\n  .claim-summary .dashbord-filter-dropdown > div .ml-10 {\n  margin-left: 10px;\n}\n  .claim-summary .action-btn button {\n  margin-top: 25px;\n  width: auto !important;\n}\n  .claim-summary .card {\n  padding: 16px;\n  background-color: var(--xa-white);\n  border-radius: 8px;\n  height: 100%;\n  min-height: 180px;\n  box-sizing: border-box;\n}\n  .claim-summary .card .fnol-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  align-self: stretch;\n}\n  .claim-summary .card .fnol-data mat-icon {\n  height: 43px;\n  width: 43px;\n}\n  .claim-summary .card .fnol-data p {\n  color: #1B03A3;\n  text-align: center;\n  font-family: Inter;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.5px;\n}\n  .claim-summary .card-title {\n  font-weight: 800;\n  font-size: 23px;\n  color: var(--xa-primary);\n  display: block;\n  margin: 10px 0;\n}\n@media (max-width: 1200px) {\n    .claim-summary .card-title {\n    font-size: 20px;\n  }\n}\n  .claim-summary .card-action {\n  color: var(--colors-gray-70, --xa-dark-gray);\n  font-size: 20px;\n  letter-spacing: 0.5px;\n  margin: 0;\n}\n  .claim-summary .card-description {\n  color: var(--colors-gray-70, --xa-dark-gray);\n  font-size: 32px;\n  letter-spacing: 0.5px;\n  margin: 5px 0 0;\n  font-weight: 700;\n}\n  .claim-summary .card-description span {\n  color: var(--xa-primary);\n}\n  .claim-summary .mt-30 {\n  margin-top: 30px;\n}\n  .claim-summary .repair-details-total {\n  margin-left: 50px;\n}\n  .claim-summary .repair-details-total .bottom-total {\n  color: var(--colors-gray-60, rgba(26, 34, 51, 0.6));\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n  .claim-summary .repair-details-total .bottom-title {\n  color: var(--primary-color, var(--xa-primary));\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n  display: block;\n}\n  .claim-summary .customers-graph {\n  margin-left: -10px;\n  position: relative;\n}\n  .claim-summary .customer-graph-container {\n  overflow-y: auto;\n  padding-left: 30px;\n}\n  .claim-summary .customer-graph-container .graph-title {\n  margin-bottom: 41px;\n}\n  .claim-summary .customer-graph-container-hori {\n  overflow: auto;\n  padding-left: 30px;\n  height: 400px;\n  min-height: 100%;\n}\n  .claim-summary .customer-graph-container-hori .graph-title {\n  margin-bottom: 41px;\n}\n  .claim-summary .inner-loading {\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  height: 30px !important;\n  width: 30px !important;\n}\n  .claim-summary .filter-section .mat-expansion-panel-header {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  max-height: 48px !important;\n  padding: 0 10px;\n  background: var(--colors-background, --xa-popup-light-gray) !important;\n}\n  .claim-summary .filter-section .mat-expansion-panel-body {\n  padding: 0 14px 16px;\n}\n  .claim-summary .filter-section mat-accordion {\n  width: 100%;\n  padding: 0px 14px;\n}\n  .claim-summary .filter-section .mat-expansion-panel {\n  box-shadow: none !important;\n  border-radius: 0 !important;\n  border-bottom: 0.4px solid var(--colors-gray-40, rgba(26, 34, 51, 0.4));\n  background: var(--colors-background, --xa-popup-light-gray) !important;\n}\n  .claim-summary .filter-section .mat-expansion-panel.mat-expanded {\n  border-radius: 9px;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25) !important;\n  border-bottom: 0 !important;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: #4c6bd2;\n  padding: 10px;\n  color: #fff;\n  overflow: visible;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .arrow_box {\n  min-width: 100px;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-heading {\n  font-size: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-label {\n  font-size: 10px;\n  margin-right: 8px;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-value {\n  font-size: 12px;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .justify-content-between {\n  justify-content: space-between;\n}\n  .claim-summary .search-dropdown {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  width: 100%;\n  gap: 5px;\n}\n  .claim-summary .search-dropdown .input-label {\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--xa-dark-gray);\n  padding: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n  .claim-summary .search-dropdown   .dx-texteditor.dx-editor-outlined {\n  border-radius: 8px;\n  border: none;\n}\n  .claim-summary .search-dropdown   .dx-tag-container.dx-texteditor-input-container {\n  padding: 12px 16px;\n}\n  .claim-summary .search-dropdown .dx-button-has-icon .dx-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n}\n  .claim-summary .search-dropdown .dx-widget.dx-button:hover {\n  background: none !important;\n}\n  .claim-summary .customer-name {\n  justify-content: initial !important;\n  flex-direction: initial !important;\n}\n  .claim-summary .customer-tags {\n  font-size: 16px;\n}\n  .claim-summary .dx-texteditor-container {\n  max-width: 400px;\n}\n  .claim-summary mat-icon.calendar-icon {\n  top: 33px !important;\n}\n  .claim-summary .mat-expansion-indicator {\n  line-height: 0;\n}\n  .claim-summary .mat-expansion-indicator:after {\n  vertical-align: super;\n}\n@media (max-width: 991px) {\n    .claim-summary .mt-30 {\n    margin-top: 18px;\n  }\n    .claim-summary .col-5,   .claim-summary .col-7 {\n    padding: 0;\n    flex-basis: 100%;\n    max-width: 100%;\n    margin-bottom: 12px;\n  }\n    .claim-summary .col-3 {\n    flex-basis: 50%;\n    max-width: 50%;\n    margin-bottom: 12px;\n  }\n}\n  .claim-summary .dashboard-no-data-found {\n  text-align: center;\n  font-size: 14px;\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n}\n  .claim-summary .dashboard-no-data-found .mat-icon {\n  width: 100px;\n  height: 100px;\n}\n  .claim-summary .date-filter input[readonly] {\n  opacity: 1;\n}\n  .claim-summary .claim-list-wrapper .claim-list-header {\n  justify-content: space-between;\n}\n  .claim-summary .claim-list-wrapper .claim-list-header .header-text {\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 0.5px;\n}\n  .claim-summary .claim-list-wrapper .claim-list-content .tab-content {\n  background-color: transparent;\n  padding: 10px 0px 0px 0px;\n}\n\n  .dx-dropdownlist-popup-wrapper   .dx-list-select-all {\n  display: none;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-list-select-all-label {\n  margin-left: 20px;\n  font-size: 12px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-indeterminate .dx-checkbox-icon::before {\n  background-color: #76d672;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-checked .dx-checkbox-icon {\n  color: #fff;\n  background-color: #76d672;\n  border: 1px solid #76d672 !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-list-item-content {\n  font-size: 12px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-icon {\n  height: 16px;\n  width: 16px;\n  border-radius: 3px;\n  position: absolute;\n  left: 15px;\n  right: 0;\n  color: #fff;\n  overflow: hidden;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-checked .dx-checkbox-icon::before {\n  font-size: 12px;\n  top: 35%;\n  font-weight: 700;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-widget {\n  font-size: 16px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-overlay-content {\n  border: 1px solid #19191b !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-placeholder::before {\n  padding: 12px 16px;\n}\n  .dx-dropdownlist-popup-wrapper .dx-popup-content {\n  max-height: 300px !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-template-wrapper {\n  display: inherit;\n}\n  .dx-dropdownlist-popup-wrapper .customer-list-name,   .dx-dropdownlist-popup-wrapper .customer-list-email {\n  color: var(--xa-black);\n  word-break: break-word;\n  white-space: normal;\n}\n  .dx-dropdownlist-popup-wrapper .customer-list-email {\n  opacity: 0.7;\n  font-style: italic;\n}\n\n  .dx-placeholder {\n  font-size: 16px;\n}\n\n  .dx-placeholder::before {\n  padding: 8px 9px;\n}\n\n  .dx-texteditor-input {\n  font-size: 16px;\n  font-family: \"Inter\" !important;\n  height: 19px;\n}\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n\n.disable-input[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9nYXJhZ2VzL2dhcmFnZS1kZXRhaWxzL2dhcmFnZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFHQSxlQUFBO0FBREo7QUFHSTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRFI7QUFJSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDJCQUFBO0FBRlI7QUFJUTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUFGWjtBQUlZO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0FBRmhCO0FBR2dCO0VBQ0ksUUFBQTtFQUNBLGFBQUE7QUFEcEI7QUFHb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRHhCO0FBSW9CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUZ4QjtBQUl3QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUY1QjtBQUt3QjtFQUNJLGFBQUE7QUFINUI7QUFJNEI7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFGaEM7QUFNd0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUo1QjtBQVE0QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTmhDO0FBUzRCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQaEM7QUFZNEI7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVZoQztBQWE0QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFYaEM7QUFpQmdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWZwQjtBQWdCb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWR4QjtBQWtCZ0I7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFqQnBCO0FBb0JnQjtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFsQnBCO0FBc0JvQjtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQXBCeEI7QUFzQm9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFwQnhCO0FBMEJZO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7QUF4QmhCO0FBMkJZO0VBQ0ksbUJBQUE7QUF6QmhCO0FBMEJnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXhCcEI7QUEyQmdCO0VBQ0ksa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUF6QnBCO0FBMkJnQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FBekJwQjtBQTBCb0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXhCeEI7QUE2Qlk7RUFDSSxrQkFBQTtBQTNCaEI7QUE0QmdCO0VBQ0ksZUFBQTtBQTFCcEI7QUFpQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUEvQlI7QUFrQ0k7RUFDSSxnQkFBQTtBQWhDUjtBQW1DSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtBQWpDUjtBQXFDSTtFQUNJLGNBQUE7QUFuQ1I7QUF1Q1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFyQ1o7QUF3Q1E7O0VBRUksbUNBQUE7RUFDQSw2QkFBQTtBQXRDWjtBQXlDUTtFQUNJLHNDQUFBO0VBQ0EsNkJBQUE7QUF2Q1o7QUEwQ1E7Ozs7O0VBS0ksK0JBQUE7RUFDQSxzQkFBQTtBQXhDWjtBQTBDUTtFQUNJLDRDQUFBO0VBQ0EsNkJBQUE7QUF4Q1o7QUEyQ1E7Ozs7RUFJSSxnQ0FBQTtFQUNBLDZCQUFBO0FBekNaO0FBNENROztFQUVJLHlDQUFBO0VBQ0Esc0JBQUE7QUExQ1o7QUE2Q1E7O0VBRUksMkNBQUE7RUFDQSw2QkFBQTtBQTNDWjtBQTZDUTs7RUFFSSw0Q0FBQTtFQUNBLHNCQUFBO0FBM0NaO0FBNkNROztFQUVJLDRDQUFBO0VBQ0Esc0JBQUE7QUEzQ1o7QUE4Q1E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBNUNaO0FBK0NRO0VBQ0kscUNBQUE7RUFDQSxzQkFBQTtBQTdDWjtBQWdEUTtFQUNJLGdDQUFBO0VBQ0Esc0JBQUE7QUE5Q1o7QUFrRFE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBaERaO0FBbURROztFQUVJLHlDQUFBO0VBQ0Esc0JBQUE7QUFqRFo7QUFvRFE7RUFDSSx1Q0FBQTtFQUNBLHNCQUFBO0FBbERaO0FBcURRO0VBQ0ksNENBQUE7RUFDQSw2QkFBQTtBQW5EWjtBQXNEUTtFQUNJLHlDQUFBO0VBQ0Esc0JBQUE7QUFwRFo7QUF1RFE7RUFDSSxnQ0FBQTtFQUNBLHNCQUFBO0FBckRaO0FBd0RRO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtBQXREWjtBQXlEUTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7QUF2RFo7QUEwRFE7RUFDSSxnREFBQTtFQUNBLHNCQUFBO0FBeERaO0FBMkRRO0VBQ0ksa0RBQUE7RUFDQSw2QkFBQTtBQXpEWjtBQTREUTtFQUNJLDJDQUFBO0VBQ0EsNkJBQUE7QUExRFo7QUE2RFE7RUFDSSw0Q0FBQTtFQUNBLDZCQUFBO0FBM0RaOztBQWlFQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTlESjtBQWdFSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUE5RFI7QUFnRVE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBOURaO0FBaUVRO0VBQ0ksV0FBQTtBQS9EWjtBQW1FSTtFQUNJLGFBQUE7QUFqRVI7QUFvRUk7RUFDSSxtQkFBQTtBQWxFUjtBQW9FUTtFQUNJLGlCQUFBO0FBbEVaO0FBdUVRO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQXJFWjtBQXlFSTtFQUNJLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUF2RVI7QUF5RVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQXZFWjtBQXlFWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBdkVoQjtBQTBFWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0FBMUVoQjtBQStFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUE3RVI7QUErRVE7RUFQSjtJQVFRLGVBQUE7RUE1RVY7QUFDRjtBQWlGSTtFQUNJLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQS9FUjtBQWtGSTtFQUNJLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaEZSO0FBa0ZRO0VBQ0ksd0JBQUE7QUFoRlo7QUFvRkk7RUFDSSxnQkFBQTtBQWxGUjtBQXVGSTtFQUNJLGlCQUFBO0FBckZSO0FBdUZRO0VBQ0ksbURBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFyRlo7QUF3RlE7RUFDSSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXRGWjtBQTBGSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUF4RlI7QUEyRkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBekZSO0FBMkZRO0VBQ0ksbUJBQUE7QUF6Rlo7QUE2Rkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUEzRlI7QUE2RlE7RUFDSSxtQkFBQTtBQTNGWjtBQStGSTtFQUNJLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBN0ZSO0FBaUdRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxzRUFBQTtBQS9GWjtBQWtHUTtFQUNJLG9CQUFBO0FBaEdaO0FBbUdRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBakdaO0FBb0dRO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHVFQUFBO0VBQ0Esc0VBQUE7QUFsR1o7QUFxR1E7RUFDSSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkJBQUE7QUFuR1o7QUF1R0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXJHUjtBQW9IUTtFQUNJLGdCQUFBO0FBbEhaO0FBcUhRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQW5IWjtBQXNIUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQXBIWjtBQXVIUTtFQUNJLGVBQUE7QUFySFo7QUF3SFE7RUFDSSw4QkFBQTtBQXRIWjtBQTJISTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUF6SFI7QUEySFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUF6SFo7QUE0SFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUExSFo7QUE2SFE7RUFDSSxrQkFBQTtBQTNIWjtBQThIUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQTVIWjtBQWdJWTtFQUNJLDJCQUFBO0FBOUhoQjtBQW1JSTtFQUNJLG1DQUFBO0VBQ0Esa0NBQUE7QUFqSVI7QUFvSUk7RUFDSSxlQUFBO0FBbElSO0FBcUlJO0VBQ0ksZ0JBQUE7QUFuSVI7QUFzSUk7RUFDSSxvQkFBQTtBQXBJUjtBQXVJSTtFQUNJLGNBQUE7QUFySVI7QUF1SVE7RUFDSSxxQkFBQTtBQXJJWjtBQTBJSTtFQUNJO0lBQ0ksZ0JBQUE7RUF4SVY7RUEySU07O0lBRUksVUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBeklWO0VBNElNO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQTFJVjtBQUNGO0FBNklJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7QUEzSVI7QUE2SVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQTNJWjtBQWdKUTtFQUNJLFVBQUE7QUE5SVo7QUFtSlE7RUFDSSw4QkFBQTtBQWpKWjtBQW1KWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWpKaEI7QUFzSlk7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0FBcEpoQjs7QUEySkk7RUFFSSxhQUFBO0FBekpSO0FBNEpJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBMUpSO0FBNkpJO0VBRUkseUJBQUE7QUE1SlI7QUErSkk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQTdKUjtBQWdLSTtFQUNJLGVBQUE7QUE5SlI7QUFpS0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWhLUjtBQW1LSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFqS1I7QUFvS0k7RUFDSSxlQUFBO0FBbEtSO0FBcUtJO0VBQ0ksb0NBQUE7QUFuS1I7QUFzS0k7RUFDSSxrQkFBQTtBQXBLUjtBQXVLSTtFQUNJLDRCQUFBO0FBcktSO0FBd0tJO0VBQ0ksZ0JBQUE7QUF0S1I7QUF5S0k7O0VBRUksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBdktSO0FBMEtJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBeEtSOztBQTRLQTtFQUNJLGVBQUE7QUF6S0o7O0FBNEtBO0VBQ0ksZ0JBQUE7QUF6S0o7O0FBNEtBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQXpLSjs7QUE0S0E7RUFHSSxlQUFBO0FBM0tKOztBQThLQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQTNLSiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lci1nYXJhZ2VzLWRldGFpbHMge1xyXG4gICAgcGFkZGluZzogY2FsYyg1cHggKyAxLjV2dyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS14YS10YWItYmFja2dyb3VuZCk7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogI0Q3RDdENztcclxuXHJcbiAgICAuYmFjay13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDJweCAxMHB4IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDdEN0Q3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkZCMjtcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKDEwcHggKyAxLjV2dyk7XHJcblxyXG4gICAgICAgIC5yZWN0YW5nbGUge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5LjIycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE5cHggMTRweCAxOXB4IDE0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEN0Q3RDc7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgICAgICAgICAgLmdhcmFnZS1pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC5pbmZvLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXZ0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGl0bGUtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4IDNweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQTNBN0FEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkcmVzcy13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waG9uZS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMi4wM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQTNBN0FEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxvY2F0aW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyLjAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXN0YW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5nYXJhZ2Utc3RhdHVzLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodGVyLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYXNzaWduLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6ICgxMTZweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAoNDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0OS42NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDgzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTJweCAxMHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yaWdodC1zZWN0aW9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mZWVkYmFjay1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Om5nLWRlZXAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmVjdG9yIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNiwgMzQsIDUxLCAwLjEwMTk2MDc4NDMpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAuYXNzaWduZWQtY2xhaW1zIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFBMjIzMzBEO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXBhaXItY2xhaW1zIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNiwgMzQsIDUxLCAwLjA1MDk4MDM5MjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubm8tZGF0YS1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIHJnYmEoMjYsIDM0LCA1MSwgMC43MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6bmctZGVlcCAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZ3JhcGgtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm10LTIwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyZW5jeS12YWx1ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIHJnYmEoMjYsIDM0LCA1MSwgMC43KSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hc3NpZ25lZC10ZXh0LXdyYXBwZXIge1xyXG4gICAgICAgIC5hc3NpZ25lZC10YWcge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogSW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXBwcm92ZWQsXHJcbiAgICAgICAgLkFwcHJvdmVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYXBwcm92ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJlcGFpckVzdGltYXRlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICgtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkdhcmFnZUFzc2lnbm1lbnRSZXF1ZXN0ZWRSZWplY3RlZCxcclxuICAgICAgICAucmVqZWN0ZWQsXHJcbiAgICAgICAgLlJlamVjdGVkLFxyXG4gICAgICAgIC5yZWplY3QsXHJcbiAgICAgICAgLlJlamVjdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5HYXJhZ2VBc3NpZ25tZW50UmVxdWVzdGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtZ2FyYWdlLXJlcXVlc3RlZCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIC5jbG9zZWQsXHJcbiAgICAgICAgLkNsb3NlZCxcclxuICAgICAgICAuQ29tcGxldGVkLFxyXG4gICAgICAgIC5jb21wbGV0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuQ29tcGxldGUsXHJcbiAgICAgICAgLmNvbXBsZXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVwYWlyLWhlYWRlcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVwYWlyZXN0aW1hdGlvbixcclxuICAgICAgICAuUmVwYWlyRXN0aW1hdGlvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGVuZGluZ2FwcHJvdmFsLFxyXG4gICAgICAgIC5QZW5kaW5nQXBwcm92YWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wZW5kaW5nLWFwcHJvdmFsKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlYWR5dG9pbnZvaWNlLFxyXG4gICAgICAgIC5SZWFkeVRvSW52b2ljZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlYWR5LXRvLWludm9pY2UpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkFzc2lnbmVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMDFGRTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Bc3NpZ25lZEJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWJsdWUpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5TdWJtaXR0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDlDMjY5O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmludm9pY2VSZWFkeSxcclxuICAgICAgICAuSW52b2ljZVJlYWR5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtaW52b2ljZS1yZWFkeSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuR2FyYWdlQXNzaWduZWRmb3JDbGFpbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWJsdWVzaC1ncmV5KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5SZXBhaXJJbml0aWF0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wZW5kaW5nLWFwcHJvdmFsKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUmVwYWlySW52b2ljZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWludm9pY2UtcmVhZHkpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlNldHRsZW1lbnRJbml0aWF0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5DbGFpbVN1Ym1pdHRlZEZvckFwcHJvdmFsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRjBBQjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuQXBwcm92YWxSZXZpZXdJblByb2dyZXNzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDREJCNztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuQXNzaWduZWRCYWNrRnJvbVJldmlldyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWFzc2lnbmVkLWJhY2stcmV2aWV3KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkFzc2lnbmVkQmFja0Zyb21BcHByb3ZhbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWFzc2lnbmVkLWJhY2stYXBwcm92YWwpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkludm9pY2VSZXF1ZXN0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZXF1ZXN0LWludm9pY2UpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkVzdGltYXRlUmVxdWVzdGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVxdWVzdC1lc3RpbWF0ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2xhaW0tc3VtbWFyeSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoNThweCArIDEuNnZ3KSAtIDc2cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICAgIC5jYXJkLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Om5nLWRlZXAgLmJ1dHRvbi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXNoYm9yZC1maWx0ZXItZHJvcGRvd24+ZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAubWwtMTAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1idG4ge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIC5mbm9sLWRhdGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcblxyXG4gICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFCMDNBMztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcclxuICAgICAgICAgICAgICAgIC8vZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgLy9mb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLXByaW1hcnkpO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICAuY2FyZC1hY3Rpb24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3JheS03MCwgLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubXQtMzAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLnJlcGFpci1kZXRhaWxzLXRvdGFsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHJcbiAgICAgICAgLmJvdHRvbS10b3RhbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3JheS02MCwgcmdiYSgyNiwgMzQsIDUxLCAwLjYpKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm90dG9tLXRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsIHZhcigtLXhhLXByaW1hcnkpKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lcnMtZ3JhcGgge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbWVyLWdyYXBoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblxyXG4gICAgICAgIC5ncmFwaC10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci1ncmFwaC1jb250YWluZXItaG9yaSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgLmdyYXBoLXRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmlubmVyLWxvYWRpbmcge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXItc2VjdGlvbiB7XHJcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZCwgLS14YS1wb3B1cC1saWdodC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweCAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0LWFjY29yZGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNHB4IHNvbGlkIHZhcigtLWNvbG9ycy1ncmF5LTQwLCByZ2JhKDI2LCAzNCwgNTEsIDAuNCkpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZCwgLS14YS1wb3B1cC1saWdodC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwubWF0LWV4cGFuZGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcGV4Y2hhcnRzLXRvb2x0aXAuYXBleGNoYXJ0cy10aGVtZS1saWdodCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGM2YmQyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgLy8gLmFycm93X2JveDpiZWZvcmUge1xyXG4gICAgICAgIC8vICAgICB3aWR0aDogMDtcclxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIC8vICAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjNGM2YmQyO1xyXG4gICAgICAgIC8vICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyAgICAgbGVmdDogLTRweDtcclxuICAgICAgICAvLyAgICAgei1pbmRleDogOTtcclxuICAgICAgICAvLyAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLmFycm93X2JveCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9vdGlwLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvb3RpcC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9vdGlwLXZhbHVlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgLnNlYXJjaC1kcm9wZG93biB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICAgIC5pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6bmctZGVlcCAuZHgtdGV4dGVkaXRvci5keC1lZGl0b3Itb3V0bGluZWQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6bmctZGVlcCAuZHgtdGFnLWNvbnRhaW5lci5keC10ZXh0ZWRpdG9yLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5keC1idXR0b24taGFzLWljb24gLmR4LWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZHgtd2lkZ2V0LmR4LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci1uYW1lIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci10YWdzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmR4LXRleHRlZGl0b3ItY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uLmNhbGVuZGFyLWljb24ge1xyXG4gICAgICAgIHRvcDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAubXQtMzAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbC01LFxyXG4gICAgICAgIC5jb2wtNyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2wtMyB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXNoYm9hcmQtbm8tZGF0YS1mb3VuZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIHJnYmEoMjYsIDM0LCA1MSwgMC43MCkpO1xyXG5cclxuICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRlLWZpbHRlciB7XHJcbiAgICAgICAgaW5wdXRbcmVhZG9ubHldIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNsYWltLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgLmNsYWltLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xhaW0tbGlzdC1jb250ZW50IHtcclxuICAgICAgICAgICAgLnRhYi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC1kcm9wZG93bmxpc3QtcG9wdXAtd3JhcHBlciB7XHJcbiAgICA6Om5nLWRlZXAgLmR4LWxpc3Qtc2VsZWN0LWFsbCB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtbGlzdC1zZWxlY3QtYWxsLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC1jaGVja2JveC1pbmRldGVybWluYXRlIC5keC1jaGVja2JveC1pY29uOjpiZWZvcmUge1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZkNjcyO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtY2hlY2tib3gtY2hlY2tlZCAuZHgtY2hlY2tib3gtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2ZDY3MjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzZkNjcyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtY2hlY2tib3gtaWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1ncmF5KSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LWNoZWNrYm94LWNoZWNrZWQgLmR4LWNoZWNrYm94LWljb246OmJlZm9yZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC13aWRnZXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LW92ZXJsYXktY29udGVudCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5MTkxYiAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC1wbGFjZWhvbGRlcjo6YmVmb3JlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmR4LXBvcHVwLWNvbnRlbnQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC10ZW1wbGF0ZS13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci1saXN0LW5hbWUsXHJcbiAgICAuY3VzdG9tZXItbGlzdC1lbWFpbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbWVyLWxpc3QtZW1haWwge1xyXG4gICAgICAgIG9wYWNpdHk6IC43O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtcGxhY2Vob2xkZXI6OmJlZm9yZSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LXRleHRlZGl0b3ItaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTlweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gICAgLy9vdmVyZmxvdzogYXV0bztcclxuICAgIC8vb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1pbnB1dCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 76485:
/*!******************************************************************************!*\
  !*** ./src/app/modules/claim/garages/garages-list/garages-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaragesListComponent": () => (/* binding */ GaragesListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 35004);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/google-maps */ 26715);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
















const _c0 = ["scroller"];
function GaragesListComponent_div_0_div_15_ng_container_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "internal-garage");
  }
}
function GaragesListComponent_div_0_div_15_ng_container_4_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "registered-garage");
  }
}
function GaragesListComponent_div_0_div_15_ng_container_4_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, GaragesListComponent_div_0_div_15_ng_container_4_ng_template_11_div_0_Template, 2, 1, "div", 32);
  }
  if (rf & 2) {
    const garage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", garage_r6.Status === ctx_r10.garageRegistrationStatus.registered)("ngIfElse", _r11);
  }
}
function GaragesListComponent_div_0_div_15_ng_container_4_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "unregistered-garages");
  }
}
function GaragesListComponent_div_0_div_15_ng_container_4_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, GaragesListComponent_div_0_div_15_ng_container_4_ng_template_13_div_0_Template, 2, 1, "div", 41);
  }
  if (rf & 2) {
    const garage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", garage_r6.Status === ctx_r12.garageRegistrationStatus.unregistered);
  }
}
function GaragesListComponent_div_0_div_15_ng_container_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const garage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](garage_r6.Type);
  }
}
function GaragesListComponent_div_0_div_15_ng_container_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const garage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", garage_r6.CountryCode, " ", garage_r6.Phone, "");
  }
}
function GaragesListComponent_div_0_div_15_ng_container_4_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const garage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](garage_r6.Distance);
  }
}
function GaragesListComponent_div_0_div_15_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GaragesListComponent_div_0_div_15_ng_container_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const garage_r6 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.onViewClick(garage_r6.Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 29)(6, "div", 30)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, GaragesListComponent_div_0_div_15_ng_container_4_div_10_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, GaragesListComponent_div_0_div_15_ng_container_4_ng_template_11_Template, 1, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, GaragesListComponent_div_0_div_15_ng_container_4_ng_template_13_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, GaragesListComponent_div_0_div_15_ng_container_4_div_15_Template, 3, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, GaragesListComponent_div_0_div_15_ng_container_4_div_18_Template, 4, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, GaragesListComponent_div_0_div_15_ng_container_4_div_19_Template, 4, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const garage_r6 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", garage_r6.LogoUrl || "assets/img/xa_logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](garage_r6.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", garage_r6.Status === ctx_r4.garageRegistrationStatus.internal)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", garage_r6.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](garage_r6.Address);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", garage_r6.Phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", garage_r6.Distance && ctx_r4.claimId);
  }
}
function GaragesListComponent_div_0_div_15_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "map-marker", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mapMouseover", function GaragesListComponent_div_0_div_15_ng_container_7_Template_map_marker_mapMouseover_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
      const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.openInfoWindow(_r26, _r27));
    })("mapMouseout", function GaragesListComponent_div_0_div_15_ng_container_7_Template_map_marker_mapMouseout_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
      const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.closeInfoWindow(_r26, _r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "map-info-window", null, 52)(5, "div", 53)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const markerPosition_r25 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("position", markerPosition_r25.position)("options", ctx_r5.markerOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](markerPosition_r25 == null ? null : markerPosition_r25.garage == null ? null : markerPosition_r25.garage.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", markerPosition_r25 == null ? null : markerPosition_r25.garage == null ? null : markerPosition_r25.garage.Address, " ");
  }
}
function GaragesListComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "cdk-virtual-scroll-viewport", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, GaragesListComponent_div_0_div_15_ng_container_4_Template, 20, 8, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 22)(6, "google-map", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, GaragesListComponent_div_0_div_15_ng_container_7_Template, 10, 4, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cdkVirtualForOf", ctx_r1.garageList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("center", ctx_r1.center)("zoom", ctx_r1.zoom)("options", ctx_r1.mapOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.markerPositions);
  }
}
function GaragesListComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "estimate-no-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, "no_result_dashboard"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 5, "no_repair_type_dashboard"), " ");
  }
}
function GaragesListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "chq-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function GaragesListComponent_div_0_Template_chq_input_controlOutput_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "chq-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function GaragesListComponent_div_0_Template_chq_input_controlOutput_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4)(8, "chq-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function GaragesListComponent_div_0_Template_chq_input_controlOutput_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "chq-button", 7)(11, "chq-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "chq-tabs", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("menuItemClick", function GaragesListComponent_div_0_Template_chq_tabs_menuItemClick_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, GaragesListComponent_div_0_div_15_Template, 8, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, GaragesListComponent_div_0_div_16_Template, 9, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r0.searchFilterByLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r0.searchGarageNameFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r0.searchGarageTypeFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx_r0.findGarageButtonModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx_r0.resetFilterModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mode", "button")("menuItems", ctx_r0.menuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.garageList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.garageList.length === 0);
  }
}
class GaragesListComponent {
  /**
   * constructor
   * @param router
   */
  constructor(router, dialog, claimsService, commonService, route, translationService) {
    this.router = router;
    this.dialog = dialog;
    this.claimsService = claimsService;
    this.commonService = commonService;
    this.route = route;
    this.translationService = translationService;
    this.searchFilterByLocation = {
      placeHolder: 'enter_location',
      label: 'search_by_location',
      name: 'location',
      type: 'placesearch',
      value: '',
      required: false
    };
    this.radius = 30;
    this.searchGarageNameFilter = {
      placeHolder: 'enter_name',
      label: 'by_garage_name',
      name: 'garageName',
      type: 'text',
      value: '',
      required: false
    };
    this.searchGarageTypeFilter = {
      placeHolder: 'enter_type',
      label: 'by_garage_type',
      name: 'garageType',
      type: 'select',
      value: '',
      required: false,
      options: [{
        name: src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.GARAGE_REGISTRATION_STATUS.internal
      }, {
        name: src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.GARAGE_REGISTRATION_STATUS.registered
      }, {
        name: src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.GARAGE_REGISTRATION_STATUS.unregistered
      }],
      displayValue: 'name'
    };
    this.findGarageButtonModel = {
      label: 'find_garage',
      type: 'disabled',
      icon: '',
      onclick: this.applyFilter.bind(this)
    };
    this.resetFilterModel = {
      label: 'reset',
      type: 'disabled',
      icon: '',
      onclick: this.resetFilter.bind(this)
    };
    this.gotAPIResponse = false;
    this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__.garagesMenus;
    this.zoom = 4;
    this.markerOptions = {
      draggable: false
    };
    this.markerPositions = [];
    this.mapOptions = {
      streetViewControl: false
    };
    this.claimId = '';
    this.claimDetails = {};
    this.garageList = [];
    this.activeMenu = 'All';
    this.itemsPerScroll = 5;
    this.skipCounter = 0;
    this.totalCount = 0;
    this.garageRegistrationStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.GARAGE_REGISTRATION_STATUS;
    this.reassign = false;
    this.route.parent?.params?.subscribe(data => {
      this.claimId = this.route.parent?.snapshot.paramMap.get('id');
    });
    this.route.queryParams.subscribe(params => {
      const codeParam = params['reassign'];
      if (codeParam === 'true') {
        this.reassign = true;
      } else {
        this.reassign = false;
      }
    });
  }
  /**
  * on init
  */
  ngOnInit() {
    this.getClaimDetails();
  }
  /**
   * @returns {void}
  */
  getClaimDetails() {
    if (this.claimId) {
      this.commonService.showLoading();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(this.claimsService.getClaimDetail(this.claimId)).then(response => {
        if (response) {
          this.claimDetails = response;
          if (!this.reassign && !this.claimDetails?.isEligibleForGarageReAssign && this.claimDetails?.claimStatus !== src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.GarageAssignmentRequestedRejected && this.claimDetails?.garageDetails?.garageId) {
            this.router.navigate([`claim/claim-detail/${this.claimId}/garages/${this.claimDetails.garageDetails.garageId}/garage-details`], {
              queryParams: {
                assigned: 'true'
              }
            });
          } else {
            // Show map center near to loss location
            if (this.claimDetails?.lossDetails.lossLocationLatitude && this.claimDetails?.lossDetails.lossLocationLongitude) {
              const myLatlng = new google.maps.LatLng(parseFloat(this.claimDetails?.lossDetails.lossLocationLatitude), parseFloat(this.claimDetails?.lossDetails.lossLocationLongitude));
              this.center = myLatlng.toJSON();
            }
            this.markerPositions = [];
            this.skipCounter = 0;
            this.getGarageList(true);
          }
        }
      }).catch(() => {
        this.commonService.hideLoading();
      });
    } else {
      this.getGarageList(true);
    }
  }
  /**
   * getGarageList
   */
  getGarageList(isReset = false) {
    if (this.claimId) {
      if (!this.claimDetails?.lossDetails?.lossLocationLatitude || !this.claimDetails?.lossDetails?.lossLocationLongitude || !this.claimDetails?.vehicleMetaData?.make) {
        this.commonService.hideLoading();
        this.displayMissingLocationMessage(this.claimId);
        return;
      }
    }
    const queryArry = [];
    const andFilter = [];
    if (this.searchGarageNameFilter.value) {
      const value = '' + this.searchGarageNameFilter.value;
      queryArry.push(`contains(tolower(Name),'${value.toLowerCase()}') `);
    }
    if (this.searchGarageTypeFilter.selectedOption?.name) {
      const value = '' + this.searchGarageTypeFilter.selectedOption.name;
      queryArry.push(`Status eq '${value}'`);
    }
    if (this.activeMenu === 'Multi-brand' || this.activeMenu === 'OEM Dealer') {
      andFilter.push(`Type eq '${this.activeMenu}'`);
    }
    // As per Sriram and Jayesh request 29.12.2023
    //andFilter.push('PartnershipTypeLookupName eq \'Garage\'');
    if (this.claimDetails?.vehicleMetaData?.make) {
      andFilter.push(`(PartnershipBrandsAttendeds/any(makeObj: tolower(makeObj/Make) eq '${this.claimDetails.vehicleMetaData.make.toLowerCase()}') OR PartnershipBrandsAttendeds/any(makeObj: tolower(makeObj/Make) eq 'all'))`);
    }
    let latitudeToPass = this.claimDetails?.lossDetails?.lossLocationLatitude;
    let longitudeToPass = this.claimDetails?.lossDetails?.lossLocationLongitude;
    if (this.latitude && this.longitude) {
      latitudeToPass = this.latitude;
      longitudeToPass = this.longitude;
    } else if (this.claimDetails?.lossDetails?.isCarAtDifferentLoc && this.claimDetails?.lossDetails?.carLocationLatitude && this.claimDetails?.lossDetails?.carLocationLongitude) {
      latitudeToPass = this.claimDetails.lossDetails.carLocationLatitude;
      longitudeToPass = this.claimDetails.lossDetails.carLocationLongitude;
    }
    const payload = {};
    if (latitudeToPass && longitudeToPass) {
      payload.Latitude = latitudeToPass;
      payload.Longitude = longitudeToPass;
      andFilter.push(`dDistance le ${this.radius}`);
    }
    let query = `$count=true&$top=${this.itemsPerScroll}&skip=${this.skipCounter}&$orderby=Name asc`;
    if (queryArry.length > 0 || andFilter.length > 0) {
      query += '&$filter=( ';
      if (queryArry.length > 0) {
        query += '( ' + queryArry.join('and ') + ' )';
      }
      if (queryArry.length > 0 && andFilter.length > 0) {
        query += ' and ';
      }
      if (andFilter.length > 0) {
        query += '( ' + andFilter.join('and ') + ' )';
      }
      query += ' )';
    }
    this.commonService.showLoading();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(this.claimsService.getGarageList(query, payload)).then(response => {
      setTimeout(() => {
        if (this.scroller && this.scroller.elementScrolled) {
          this.scroller.elementScrolled().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(() => this.scroller.measureScrollOffset('bottom')), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(([y1, y2]) => y2 < y1 && y2 < 100), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throttleTime)(1000)).subscribe(() => {
            this.skipCounter += this.itemsPerScroll;
            if (this.skipCounter < this.totalCount) this.getGarageList();
          });
        }
      }, 1000);
      this.commonService.hideLoading();
      this.gotAPIResponse = true;
      if (response) {
        let newList = response.value;
        //let newList = response;
        newList = newList.map(ele => {
          ele.GarageMobileNumber = '';
          if (ele.CountryCode) ele.GarageMobileNumber += ele.CountryCode;
          if (ele.Phone) ele.GarageMobileNumber += ele.Phone;
          return ele;
        });
        this.totalCount = response['@odata.count'];
        if (isReset) {
          this.garageList = [...newList];
        } else {
          this.garageList = [...this.garageList, ...newList];
        }
        newList.forEach(ele => {
          if (ele.Latitude && ele.Longitude) {
            this.addMarker(ele.Latitude, ele.Longitude, ele);
          }
        });
        setTimeout(() => {
          if (!this.claimId) {
            const elLayout = document.getElementsByClassName('layout-container')[0];
            if (elLayout) {
              elLayout.style.paddingLeft = '0px';
              elLayout.style.paddingRight = '0px';
            }
            const elMain = document.getElementsByClassName('main-div')[0];
            if (elMain) {
              elMain.style.marginLeft = '0px';
              elMain.style.marginRight = '0px';
            }
          }
        });
      }
    }).catch(() => {
      this.commonService.hideLoading();
    });
    // }
  }
  /**
    Displays a confirmation message to the user asking them to add their vehicle before adding an estimate.
    @param {string} bookingId - The ID of the booking to add an estimate for.
    @returns {void}
  */
  displayMissingLocationMessage(claimId) {
    let message = this.translationService.instant('please_add_loss_location_to_assign_garage');
    if (!this.claimDetails?.vehicleMetaData?.make) {
      message = this.translationService.instant('please_add_vehicle_make_to_assign_garage');
    }
    this.commonService.openAlertDialog('Notification', message).afterClosed().subscribe({
      next: result => {
        if (result) {
          if (!this.claimDetails?.vehicleMetaData?.make) this.router.navigate([`/claim/claim-detail/${claimId}`]);else this.router.navigate([`/claim/claim-detail/${claimId}/loss-detail`], {
            queryParams: {
              mode: 'edit'
            }
          });
        }
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * addMarker
   */
  addMarker(lat, lng, garage) {
    const myLatlng = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
    this.center = myLatlng.toJSON();
    // this.markerPositions.push(myLatlng)
    this.markerPositions.push({
      position: myLatlng.toJSON(),
      garage: garage
    });
  }
  /**
   * resetFilter
   */
  applyFilter() {
    this.markerPositions = [];
    // this.garageList = [];
    this.skipCounter = 0;
    this.getGarageList(true);
  }
  /**
   * resetFilter
   */
  resetFilter() {
    this.searchFilterByLocation = {
      ...this.searchFilterByLocation,
      value: ''
    };
    this.searchGarageNameFilter = {
      ...this.searchGarageNameFilter,
      value: ''
    };
    this.searchGarageTypeFilter = {
      ...this.searchGarageTypeFilter,
      selectedOption: {}
    };
    this.latitude = null;
    this.longitude = null;
    this.markerPositions = [];
    // this.garageList = [];
    this.skipCounter = 0;
    this.getGarageList(true);
  }
  /**
   * onFormUpdate
   */
  onFormUpdate(output) {
    console.log('output', output);
    if (output.name === 'garageType') {
      this.searchGarageTypeFilter = {
        ...this.searchGarageTypeFilter,
        selectedOption: output.value
      };
    } else if (output.name === 'garageName') {
      this.searchGarageNameFilter.value = output.value;
    } else if (output.name === 'location') {
      if (typeof output.value === 'string') {
        this.searchFilterByLocation.value = output.value;
      } else {
        this.searchFilterByLocation.value = output.value.name + ', ' + output.value.formatted_address;
        this.latitude = output.value.geometry.location.lat();
        this.longitude = output.value.geometry.location.lng();
      }
    }
    this.checkForFormValidation();
  }
  /**
   * onViewClick
   */
  onViewClick(garageId) {
    if (this.claimId) {
      this.router.navigate([`claim/claim-detail/${this.claimId}/garages/${garageId}/garage-details`], {
        queryParams: {
          reassign: this.reassign
        }
      });
    } else {
      this.router.navigate([`/claim/garages/${garageId}`]);
    }
  }
  /**
   * navigate to selected route
   * @param item
   */
  navigate(item) {
    this.menuItems.forEach(item => item.active = false);
    const selectedMenuIndex = this.menuItems.findIndex(e => e.name == item.name);
    this.menuItems[selectedMenuIndex].active = true;
    this.activeMenu = this.menuItems[selectedMenuIndex].name;
    this.markerPositions = [];
    // this.garageList = [];
    this.skipCounter = 0;
    this.getGarageList(true);
  }
  /**
   * @param item
   */
  openInfoWindow(marker, mapInfoWindow) {
    mapInfoWindow.open(marker);
  }
  /**
   * @param item
   */
  closeInfoWindow(marker, mapInfoWindow) {
    mapInfoWindow.close();
  }
  /**
   * Check For Form Validation
   */
  checkForFormValidation() {
    let buttonType = 'disabled';
    const garageNmae = this.searchGarageNameFilter.value;
    if (this.searchFilterByLocation.value && this.latitude && this.longitude || garageNmae && garageNmae.length >= 4 || this.searchGarageTypeFilter.selectedOption?.name) {
      buttonType = 'primary';
    }
    this.findGarageButtonModel.type = buttonType;
    let resetButtonType = 'disabled';
    if (this.searchFilterByLocation.value || garageNmae || this.searchGarageTypeFilter.selectedOption?.name) {
      resetButtonType = 'primary';
    }
    this.resetFilterModel.type = resetButtonType;
  }
  static #_ = this.ɵfac = function GaragesListComponent_Factory(t) {
    return new (t || GaragesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_2__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: GaragesListComponent,
    selectors: [["app-claim-garages"]],
    viewQuery: function GaragesListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
      }
    },
    decls: 1,
    vars: 1,
    consts: [["class", "page-container-claim-garages", 4, "ngIf"], [1, "page-container-claim-garages"], [1, "layout-container"], [1, "row", "layout-filter-dropdown"], [1, "col"], [3, "inputModel", "controlOutput"], [1, "col-auto", "d-flex", "button-wrapper"], [1, "find-button", 3, "buttonModel"], [1, "main-div"], [1, "tab-header", "fx-0"], [1, "tabs", 3, "mode", "menuItems", "menuItemClick"], ["class", "row w-100", 4, "ngIf"], ["class", "row justify-center", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png"], [1, "row", "w-100"], [1, "frame-wrapper", "col"], ["itemSize", "10"], ["scroller", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "col", "pl-3", "map-container", "pr-0"], ["width", "100%", 1, "my-google-map", 3, "center", "zoom", "options"], [4, "ngFor", "ngForOf"], [1, "info-wrapper", 3, "click"], [1, "info-group"], [1, "img-section"], [1, "avtar", 3, "src"], [1, "card-wrapper"], [1, "title-wrap"], [1, "icon-section-title", "d-flex"], ["class", "garage-status-icon", 4, "ngIf", "ngIfElse"], ["registered", ""], ["unregistered", ""], ["class", "status-wrap", 4, "ngIf"], [1, "address-wrap"], ["class", "contact-group row", 4, "ngIf"], ["class", "location-group row", 4, "ngIf"], [1, "garage-status-icon"], [3, "svgIcon"], ["class", "garage-status-icon", 4, "ngIf"], [1, "status-wrap"], [1, "label-wrap"], [1, "contact-group", "row"], [1, "phone-icon", 3, "svgIcon"], [1, "contact"], [1, "location-group", "row"], [1, "location-icon", 3, "svgIcon"], [1, "distance"], [3, "position", "options", "mapMouseover", "mapMouseout"], ["marker", "mapMarker"], ["infoWindow", "mapInfoWindow"], [1, "mapName"], [1, "mapDis"], [1, "row", "justify-center"], [1, "no-data-found"], [1, "no-data-svg", 3, "svgIcon"], [1, "no-data-text"]],
    template: function GaragesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, GaragesListComponent_div_0_Template, 21, 9, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.gotAPIResponse);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_4__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__.ChqButtonComponent, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_6__.ChqTabsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_google_maps__WEBPACK_IMPORTED_MODULE_18__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_18__.MapInfoWindow, _angular_google_maps__WEBPACK_IMPORTED_MODULE_18__.MapMarker, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkVirtualScrollViewport, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
    styles: [".page-container-claim-garages[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%] {\n  background: #f1f2f6;\n  padding: calc(5px + 1.5vw);\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%]   .layout-filter-dropdown[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  overflow: auto;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%]   .layout-filter-dropdown[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .ml-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%]   .layout-filter-dropdown[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 17px 0px 6px 15px;\n  border-radius: 8px;\n  gap: 10px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background: var(--xa-tab-default-content);\n  border-radius: 10px;\n  border: 1px solid var(--xa-form-border);\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: start;\n  padding: 20px;\n  gap: 30px;\n  padding-bottom: 0px;\n  margin: calc(5px + 1.5vw);\n  margin-top: 0px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  flex-basis: 50%;\n  max-width: unset;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .no-data-found[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .no-data-found[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  border-radius: 9.22px;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 9.701086998px 0px rgba(0, 0, 0, 0.1019607843);\n  gap: 9px;\n  padding: 15px;\n  display: flex;\n  margin-bottom: 19px;\n  cursor: pointer;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%] {\n  padding-right: 25px;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 1px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .icons-wrapper[_ngcontent-%COMP%]   .view-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 1px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  width: 100%;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .avtar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 61px;\n  border-radius: 7px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  width: 100%;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0px;\n  text-align: left;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .icon-section-title[_ngcontent-%COMP%] {\n  gap: 9px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .garage-status-icon[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 28px;\n  background: var(--xa-lighter-gray);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  padding: 6px 4px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .garage-status-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 16px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .recommended[_ngcontent-%COMP%] {\n  color: #201177;\n  font-size: 8px;\n  font-weight: bold;\n  font-family: \"Inter\";\n  padding: 3px 8px 3px 8px;\n  background: rgba(32, 17, 119, 0.1215686275);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 23px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .status-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .status-wrap[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 12px;\n  padding: 3px 8px 3px 8px;\n  border-radius: 4px;\n  opacity: 0.6;\n  background: var(--xa-draft);\n  margin: 3px 0px 3px 0px;\n  width: auto;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .address-wrap[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #A3A7AD;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .contact-group[_ngcontent-%COMP%]   .phone-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: flex;\n  padding-top: 2.03px;\n  color: #A3A7AD;\n  padding-left: 10px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .contact-group[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #A3A7AD;\n  padding-left: 8px;\n  padding-top: 2.3px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .location-group[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: flex;\n  padding-top: 2.03px;\n  color: #A3A7AD;\n  padding-left: 10px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .frame-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .location-group[_ngcontent-%COMP%]   .distance[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  color: #A3A7AD;\n  padding-left: 8px;\n  padding-top: 2.3px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  min-height: 500px;\n  height: 100%;\n  min-width: 450px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .cdk-virtual-scrollable[_ngcontent-%COMP%] {\n  contain: none;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper {\n  min-width: 95%;\n  padding: 6px;\n}\n.page-container-claim-garages[_ngcontent-%COMP%]   .map-container[_ngcontent-%COMP%]     google-map > div {\n  min-width: 300px;\n}\n@media (max-width: 991px) {\n  .page-container-claim-garages[_ngcontent-%COMP%]   .map-container[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9nYXJhZ2VzL2dhcmFnZXMtbGlzdC9nYXJhZ2VzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtQkFBQTtFQUdBLDBCQUFBO0FBRlI7QUFLUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUhaO0FBS1k7RUFDSSxpQkFBQTtBQUhoQjtBQU1ZO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSmhCO0FBUUk7RUFDSSxtQkFBQTtBQU5SO0FBU0k7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBUFI7QUFXWTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFUaEI7QUFhUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FBWFo7QUFZWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBVmhCO0FBY1E7RUFJSSxrQkFBQTtBQWZaO0FBZ0JZO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlFQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBZGhCO0FBZWdCO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7QUFicEI7QUFlb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFieEI7QUFnQm9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZHhCO0FBa0JnQjtFQUNJLGFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQWhCcEI7QUFpQm9CO0VBQ0ksV0FBQTtBQWZ4QjtBQWlCb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBZnhCO0FBa0JvQjtFQUdJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBbEJ4QjtBQW9Cd0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWxCNUI7QUFvQndCO0VBQ0ksUUFBQTtBQWxCNUI7QUFvQndCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWxCNUI7QUFtQjRCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFqQmhDO0FBb0J3QjtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbEI1QjtBQXFCd0I7RUFDSSxhQUFBO0FBbkI1QjtBQW9CNEI7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFsQmhDO0FBc0J3QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFwQjVCO0FBMEI0QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBeEJoQztBQTJCNEI7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXpCaEM7QUE4QjRCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUE1QmhDO0FBK0I0QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE3QmhDO0FBMENRO0VBQ0ksZ0JBQUE7QUF4Q1o7QUE0Q0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTFDUjtBQTRDSTtFQUNJLGFBQUE7QUExQ1I7QUE0Q0k7RUFFSSxjQUFBO0VBQ0EsWUFBQTtBQTNDUjtBQThDUTtFQUNJLGdCQUFBO0FBNUNaO0FBK0NJO0VBQ0k7SUFDSSxnQkFBQTtFQTdDVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyLWNsYWltLWdhcmFnZXMge1xyXG4gICAgLmxheW91dC1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYyZjY7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIC8vIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKDVweCArIDEuNXZ3KTtcclxuICAgICAgICAvLyB3aWR0aDogOTAlO1xyXG5cclxuICAgICAgICAubGF5b3V0LWZpbHRlci1kcm9wZG93bj5kaXYge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5tbC0xMCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZpbmQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxN3B4IDBweCA2cHggMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1kaXYge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXRhYi1kZWZhdWx0LWNvbnRlbnQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZm9ybS1ib3JkZXIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBjYWxjKDVweCArIDEuNXZ3KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cclxuICAgICAgICAgICAgLmNvbC02IHtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uby1kYXRhLWZvdW5kIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3JheS03MCwgcmdiYSgyNiwgMzQsIDUxLCAwLjcwKSk7XHJcbiAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mcmFtZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgLy8gd2lkdGg6ICg0OTBweCk7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogKDYxMnB4KTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAuaW5mby13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDkuMjJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDkuNzAxMDg2OTk4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDE5NjA3ODQzKTtcclxuICAgICAgICAgICAgICAgIGdhcDogOXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgLmljb25zLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNoYXJlLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52aWV3LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmluZm8tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLmltZy1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdnRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogKDMzN3B4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAoMTA5cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGl0bGUtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uLXNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdhcmFnZS1zdGF0dXMtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlY29tbWVuZGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjAxMTc3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweCAzcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIwMTE3NzFGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0dXMtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweCAzcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtZHJhZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkcmVzcy13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waG9uZS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMi4wM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQTNBN0FEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxvY2F0aW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyLjAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXN0YW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLmZyYW1lLXdyYXBwZXIgfiAuY29sLWF1dG8ge1xyXG4gICAgICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLnByLTAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuICAgIC5jZGstdmlydHVhbC1zY3JvbGxhYmxlIHtcclxuICAgICAgICBjb250YWluOiBub25lO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5NSU7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgfVxyXG4gICAgLm1hcC1jb250YWluZXIge1xyXG4gICAgICAgIDo6bmctZGVlcCBnb29nbGUtbWFwID4gZGl2IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAubWFwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

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

/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_claim_garages_garage-details_garage-details_component_ts-src_app_modu-68e44a.js.map