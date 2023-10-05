(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_repair_module_ts"],{

/***/ 17771:
/*!*************************************************************!*\
  !*** ./src/app/config/route-mapper/reapir-status-mapper.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseStatusMapper": () => (/* binding */ CaseStatusMapper),
/* harmony export */   "ReapirStatusMapper": () => (/* binding */ ReapirStatusMapper)
/* harmony export */ });
const ReapirStatusMapper = {
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
const CaseStatusMapper = {
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

/***/ }),

/***/ 88271:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/repair/add-customers/customer-layout/customer-layout.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerLayoutComponent": () => (/* binding */ CustomerLayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var src_app_dialogs_labour_rate_labour_rate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/labour-rate/labour-rate.component */ 35235);
/* harmony import */ var src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/chq-upload-model */ 75983);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/inspection-service/inspection.service */ 13975);
/* harmony import */ var src_app_services_message_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message/messages.service */ 95231);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/repair-estimate/repair-estimate.service */ 87855);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _shared_history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/history/history.component */ 65504);



















const _c0 = ["tabs"];
const _c1 = ["tabMain"];
const _c2 = ["userDetail"];
function CustomerLayoutComponent_ng_container_6_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "make"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r11.caseData.vehicleMake, " ");
  }
}
function CustomerLayoutComponent_ng_container_6_div_1_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r13.caseData.vehicleModel);
  }
}
function CustomerLayoutComponent_ng_container_6_div_1_div_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "license_plate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r14.caseData.licensePlate);
  }
}
function CustomerLayoutComponent_ng_container_6_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_container_6_div_1_div_22_span_1_Template, 7, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, CustomerLayoutComponent_ng_container_6_div_1_div_22_span_2_Template, 7, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.caseData == null ? null : ctx_r12.caseData.vehicleModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.caseData == null ? null : ctx_r12.caseData.licensePlate);
  }
}
const _c3 = function (a0) {
  return {
    "expand-main-wrapper": a0
  };
};
const _c4 = function (a0) {
  return {
    "width": a0
  };
};
function CustomerLayoutComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 15)(1, "div", 16, 17)(3, "div", 18)(4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 20)(7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 22)(14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, CustomerLayoutComponent_ng_container_6_div_1_div_15_Template, 6, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 25)(17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, CustomerLayoutComponent_ng_container_6_div_1_div_22_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 28)(24, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_container_6_div_1_Template_mat_icon_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.expand());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](15, _c3, ctx_r9.expandUserDetail))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](17, _c4, ctx_r9.expandUserDetail ? ctx_r9.containerWidth : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r9.customerData.firstName, " ", ctx_r9.customerData.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 11, "booking_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r9.bookingId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.caseData == null ? null : ctx_r9.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 13, "status"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r9.statusDesc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.caseData == null ? null : ctx_r9.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", !ctx_r9.expandUserDetail ? "dropdown" : "dropdown-up");
  }
}
function CustomerLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_container_6_div_1_Template, 25, 19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.showUserSection);
  }
}
function CustomerLayoutComponent_ng_template_7_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "status"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r19.statusDesc);
  }
}
function CustomerLayoutComponent_ng_template_7_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "make"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r20.caseData.vehicleMake);
  }
}
function CustomerLayoutComponent_ng_template_7_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "year"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r21.caseData.year);
  }
}
function CustomerLayoutComponent_ng_template_7_div_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "model"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r22.caseData.vehicleModel);
  }
}
function CustomerLayoutComponent_ng_template_7_div_1_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "license_plate"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r23.caseData.licensePlate);
  }
}
const _c5 = function (a0) {
  return {
    "expand": a0
  };
};
function CustomerLayoutComponent_ng_template_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 15)(1, "div", 16, 17)(3, "div", 18)(4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 20)(7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 28)(14, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_template_7_div_1_Template_mat_icon_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r24.expand());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 32)(16, "div", 33)(17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_template_7_div_1_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r26.openLabourRate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 22)(22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, CustomerLayoutComponent_ng_template_7_div_1_span_23_Template, 5, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, CustomerLayoutComponent_ng_template_7_div_1_span_24_Template, 5, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, CustomerLayoutComponent_ng_template_7_div_1_span_25_Template, 5, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, CustomerLayoutComponent_ng_template_7_div_1_span_26_Template, 5, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, CustomerLayoutComponent_ng_template_7_div_1_span_27_Template, 5, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](18, _c3, ctx_r17.expandUserDetail))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](20, _c4, ctx_r17.expandUserDetail ? ctx_r17.containerWidth : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r17.customerData.firstName, " ", ctx_r17.customerData.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 14, "booking_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r17.bookingId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", !ctx_r17.expandUserDetail ? "dropdown" : "dropdown-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](22, _c5, ctx_r17.expandUserDetail));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 16, "labour_rate_discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r17.caseData == null ? null : ctx_r17.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r17.caseData == null ? null : ctx_r17.caseData.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r17.caseData == null ? null : ctx_r17.caseData.vehicleModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r17.caseData == null ? null : ctx_r17.caseData.licensePlate);
  }
}
function CustomerLayoutComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_template_7_div_1_Template, 28, 24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.showUserSection);
  }
}
function CustomerLayoutComponent_chq_tabs_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "chq-tabs", 3, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_chq_tabs_10_Template_chq_tabs_menuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", "default")("menuItems", ctx_r4.menuItems);
  }
}
function CustomerLayoutComponent_chq_tabs_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "chq-tabs", 3, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_chq_tabs_11_Template_chq_tabs_menuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r31.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", "default")("menuItems", ctx_r5.menuRepairItems);
  }
}
function CustomerLayoutComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CustomerLayoutComponent_no_access_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "no-access-error");
  }
}
function CustomerLayoutComponent_history_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "history", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("toggleExpand", function CustomerLayoutComponent_history_15_Template_history_toggleExpand_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r33.onHistoryExpand($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("history", ctx_r8.history)("isLoading", ctx_r8.isHistoryLoading);
  }
}
class CustomerLayoutComponent {
  /**
   * constructor
   * @param router
   */
  constructor(router, caseService, route, commonService, cdr, inspectionService, messageService, translateService, repairEstimateService, monitorService, dialog, datePipe) {
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
    this.datePipe = datePipe;
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
    };
    // sample history data
    this.history = [];
    this.workProvider = '';
    this.isCompany = false;
    this.isHistoryLoading = false;
    this.subscriptions = [];
    this.isNoShow = false;
    this.repairType = '';
    this.roleName = '';
    this.showNoAccess = false;
    this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerMenus;
    this.repairMenuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.repairMenus;
    this.menuRepairItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.menuRepairItems;
    this.commonService.inProgressSteps.subscribe(length => {
      this.stepInProgress = length > 0;
    });
  }
  /**
   * get current status
   */
  get currentStatus() {
    if (this.status && ['draft', 'uploaddocuments', 'uploadphotos'].indexOf(this.status?.toLowerCase()) === -1) {
      return true;
    }
    return false;
  }
  /**
   * map inspection from api
   */
  onHistoryExpand(event) {
    // Get latest History when history is expanded
    if (event) {
      this.getCaseHistory(this.repairGuid, this.domainId);
    }
  }
  /**
   * map inspection from api
   * @param inspectionData
   */
  mapInspection(inspectionData, item) {
    if (inspectionData) {
      try {
        const inspection = inspectionData;
        if (this.commonService.repairInspectionTemplate) {
          const template = this.commonService.repairInspectionTemplate;
          if (inspection?.uploadType) {
            if (inspection?.uploadType.toLowerCase() === 'spi') {
              const minimumPhotosRequired = inspection.inspectionItems?.filter(value => {
                return value.isSkipEnabled !== true;
              }).length;
              const currentPhotos = inspection.inspectionItems?.filter(currentStep => {
                return currentStep.rawAzureBlobUrl;
              });
              if (currentPhotos.length < minimumPhotosRequired) {
                this.commonService.showToast(0, `All ${minimumPhotosRequired} sides images are mandatory and cannot skip to next section.`);
                return;
              }
            } else {
              const minimumBulkPhotosRequired = template?.minImageLimit;
              const bulkUploadedItemsWithImages = inspection.inspectionItems.filter(step => {
                return step.rawAzureBlobUrl != null && step.rawAzureBlobUrl != '';
              });
              if (bulkUploadedItemsWithImages.length < minimumBulkPhotosRequired) {
                this.commonService.showToast(0, `All ${minimumBulkPhotosRequired} sides images are mandatory and cannot skip to next section.`);
                return;
              }
            }
          }
          const queryParam = location.search;
          const url = item.url;
          this.tabs?.setActiveMenu(item);
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
  getCaseHistory(caseId, domainId) {
    this.history = [];
    this.isHistoryLoading = true;
    this.caseService.getCaseHistory(caseId, domainId).subscribe({
      next: response => {
        if (response) {
          let allHistoryData = [];
          for (let i = 0; i < response.length; i++) {
            allHistoryData = [...allHistoryData, ...response[i].auditTrailResponseDetails];
          }
          const data = allHistoryData.map(x => ({
            ...x,
            auditDate: this.datePipe.transform(x.actionedOn, 'dd/MM/YYYY')
          }));
          const mergedHistory = [];
          for (let i = 0; i < data.length; i++) {
            const isExist = mergedHistory.find(x => x.auditDate === data[i].auditDate);
            if (isExist) {
              isExist['auditTrailResponseDetails'].push(data[i]);
            } else {
              const obj = {
                auditDate: data[i].auditDate,
                auditTrailResponseDetails: [data[i]]
              };
              mergedHistory.push(obj);
            }
          }
          this.history = mergedHistory;
        }
      },
      complete: () => {
        this.isHistoryLoading = false;
      }
    });
  }
  /**
   * get current inspectionitems length
   */
  getInspectionItems(id, item) {
    this.commonService.showLoading();
    this.inspectionService.getInspection(id).subscribe({
      next: inspectionDetailResponse => {
        if (inspectionDetailResponse) {
          this.mapInspection(inspectionDetailResponse, item);
        }
        this.commonService.hideLoading();
      },
      complete: () => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * on init
   */
  ngOnInit() {
    const urlSegments = this.router.url.split('/');
    let lastSegment = urlSegments.length > 0 ? urlSegments[urlSegments.length - 1] : '';
    if (lastSegment.indexOf('?') != -1) {
      lastSegment = lastSegment.substring(0, lastSegment.indexOf('?'));
    }
    const repairSegments = ['parts', 'invoices', 'repair-stages', 'invoicesEdit'];
    if (repairSegments.includes(lastSegment)) {
      this.activeItem = 'Repair';
    }
    this.route?.params.subscribe(value => {
      if (value && value['id']) {
        this.repairGuid = value['id'];
        if (this.repairGuid !== '0') {
          // Get Case History when domainId is available
          const idSub$ = this.commonService.domainId.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.filter)(value => value !== null)).subscribe({
            next: data => {
              this.getCaseHistory(this.repairGuid, data);
              this.domainId = data;
            }
          });
          this.subscriptions.push(idSub$);
        }
      }
    });
    const accessRight$ = this.commonService.accessRightRepair.subscribe({
      next: res => {
        if (!res) {
          this.showNoAccess = true;
        }
      }
    });
    const bookingId$ = this.commonService.bookingId.subscribe({
      next: bookingId => {
        this.bookingId = bookingId;
        this.cdr.detectChanges();
      }
    });
    const activeItem$ = this.commonService.activeItem.subscribe({
      next: activeItem => {
        if (activeItem) {
          this.activeItem = activeItem;
        }
      }
    });
    const repairDetails$ = this.commonService.repairDetails.subscribe({
      next: repairDetails => {
        this.showHideTopHeader();
        if (repairDetails) {
          this.status = repairDetails.status;
          this.statusDesc = repairDetails?.statusDescription;
          this.customerData.firstName = repairDetails.customer?.firstName || '';
          this.customerData.lastName = repairDetails.customer?.lastName || '';
          this.customerData.mobileNumber = (repairDetails.customer?.countryCode || '') + ' ' + repairDetails.customer?.mobileNumber || '';
          this.customerData.email = repairDetails.customer?.email || '';
          this.workProvider = repairDetails.customer?.companyOrgType || '';
          this.isCompany = repairDetails.customer?.customerTypeName !== 'Person' || false;
          this.caseData.vehicleMake = repairDetails.vehicle?.vehicleMake || '';
          this.caseData.vehicleModel = repairDetails.vehicle?.vehicleModel || '';
          this.caseData.licensePlate = repairDetails.vehicle?.licensePlateNumber || '';
          this.caseData.year = repairDetails.vehicle?.modelYearRange || '';
          this.inspectionId = repairDetails.vehicle?.inspectionId;
          this.repairTypes = repairDetails.repairServiceTypes;
          this.repairType = repairDetails.repairType;
          this.domainId = repairDetails.domainId;
          if (this.currentOrganizationId != repairDetails.organizationDetail?.organizationId) {
            this.commonService.isViewOnly = true;
          } else {
            this.commonService.isViewOnly = false;
          }
          const urlSegments = this.router.url.split('/');
          let currentLastSegment = urlSegments.length > 0 ? urlSegments[urlSegments.length - 1] : '';
          if (currentLastSegment.includes('photos')) {
            if (!this.inspectionId) {
              this.displayMissingInspectionMessage(this.repairGuid);
              return;
            }
          }
          const queryParam = location.search;
          if (currentLastSegment === 'invoices' && !queryParam.includes('isBack=true')) {
            const isGenerated = this.status?.toLowerCase() === 'paid' || this.status?.toLowerCase() === 'invoiced' || this.status?.toLowerCase() === 'complete';
            let type = 1;
            if (isGenerated) {
              if (this.workProvider === 'Retail' && !this.isCompany) {
                type = 2;
              }
              this.router.navigate([`/repair/booking/${this.repairGuid}/invoicesEdit`], {
                queryParams: {
                  formType: type
                }
              });
              return;
            }
          }
          this.vehicleId = repairDetails.vehicle?.vehicleId;
          this.caseId = repairDetails.quoteId;
          this.domainId = repairDetails.domainId;
          this.repairObjectId = repairDetails.id;
          if (this.repairType?.toLowerCase() === 'assessment') {
            this.repairMenuItems[1].disabled = true;
          } else {
            this.repairMenuItems[1].disabled = false;
          }
          this.isNoShow = repairDetails?.booking?.isNoShow;
          if (currentLastSegment.indexOf('?') != -1) {
            currentLastSegment = currentLastSegment.substring(0, currentLastSegment.indexOf('?'));
          }
          if (this.roleName?.toLowerCase() === 'technician' && currentLastSegment === 'invoices') {
            this.router.navigate([`/repair/booking/${this.repairGuid}/repair-stages`]);
            return;
          }
          const repairSegments = ['parts', 'invoices', 'repair-stages', 'invoicesEdit'];
          if (repairSegments.includes(currentLastSegment)) {
            this.getEstimationDetail(repairDetails.estimateSource);
          }
          this.cdr.detectChanges();
        }
      }
    });
    const userPermission$ = this.commonService.userProfileData.subscribe(res => {
      if (res?.data) {
        const automotiveServices = res?.data?.userPermission?.automotiveServices;
        const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda repair');
        this.roleName = automotiveService.roleName.toLowerCase();
        this.commonService.roleName = this.roleName;
        if (this.roleName?.toLowerCase() == 'technician') {
          this.menuRepairItems = this.menuRepairItems.filter(q => q.name != 'Invoices');
        }
        const organizationDetail = res.data.organizationDetail;
        if (organizationDetail) {
          this.currentOrganizationId = organizationDetail.id;
        }
      }
    });
    this.subscriptions.push(bookingId$);
    this.subscriptions.push(activeItem$);
    this.subscriptions.push(repairDetails$);
    this.subscriptions.push(userPermission$);
    this.subscriptions.push(accessRight$);
  }
  /**
  * estimate
  */
  getEstimationDetail(source) {
    if (source === 'GTMotive') {
      this.getGTEstimationDetail();
    } else {
      this.getManualEstimationDetail();
    }
  }
  /**
   * get estimation detail
   */
  getGTEstimationDetail() {
    if (this.vehicleId && this.inspectionId) {
      this.monitorService.logEvent('getGTEstimationDetail', ['CustomerLayoutComponent', 'addenda-repair'], {
        repairGuid: this.repairGuid,
        caseGuid: this.caseId,
        inspectionId: this.inspectionId,
        vehicleId: this.vehicleId
      });
      this.commonService.showLoading();
      this.repairEstimateService.getEstimate(this.caseId, this.inspectionId, this.vehicleId, this.domainId).subscribe({
        next: response => {
          if (response?.data?.estimateCharges?.length > 0) {
            this.estimationOperationLength = true;
          }
          this.commonService.hideLoading();
        },
        error: () => {
          this.commonService.hideLoading();
        }
      });
    }
  }
  /**
   * get manual estimate
   */
  getManualEstimationDetail() {
    if (this.vehicleId && this.inspectionId) {
      this.monitorService.logEvent('getManualEstimationDetail', ['EstimateComponent', 'addenda-repair'], {
        repairGuid: this.repairGuid,
        inspectionId: this.inspectionId,
        vehicleId: this.vehicleId
      });
      this.commonService.showLoading();
      this.repairEstimateService.getRepairEstimate(this.repairGuid, this.inspectionId, this.vehicleId).subscribe({
        next: response => {
          if (response?.estimateCharges?.length) {
            this.estimationOperationLength = true;
          }
          this.commonService.hideLoading();
        },
        error: () => {
          this.commonService.hideLoading();
        }
      });
    }
  }
  /**
   * navigate to selected route
   * @param item
   */
  navigate(item) {
    const queryParam = location.search;
    const url = item.url;
    const currentUrl = location.pathname;
    if (url.includes('/repair-stages')) {
      const statusList = ['draft', 'uploaddocuments', 'uploadphotos', 'repairestimation', 'pendingapproval', 'rejected'];
      if (statusList.includes(this.status?.toLowerCase())) {
        this.commonService.hideLoading();
        this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('start_job'));
        return;
      }
      if (this.isNoShow) {
        this.commonService.hideLoading();
        this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('stages_no_allowed'));
        return;
      }
      if (this.repairType?.toLowerCase() !== 'repair') {
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
      if (this.status?.toLowerCase() === 'rejected') {
        this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('invoice_access'));
        return;
      }
    }
    if (currentUrl.includes('/document')) {
      if (this.stepInProgress) {
        const module = currentUrl.includes('/photos') ? 'images' : 'documents';
        this.commonService.showToast(0, `Please wait until all ${module} are uploaded.`);
        return;
      }
    }
    if (currentUrl.includes('/photos')) {
      if (this.stepInProgress) {
        const module = currentUrl.includes('/photos') ? 'images' : 'documents';
        this.commonService.showToast(0, `Please wait until all ${module} are uploaded.`);
        return;
      }
      if (url.includes('/estimate')) {
        this.getInspectionItems(this.inspectionId, item);
        return;
      }
    }
    if (url.includes('invoices')) {
      const isGenerated = this.status?.toLowerCase() === 'paid' || this.status?.toLowerCase() === 'invoiced' || this.status?.toLowerCase() === 'complete';
      let type = 1;
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
    } else if (currentUrl === '/repair/booking' || currentUrl === '/repair/booking/0' || currentUrl === `/repair/booking/${this.repairGuid}`) {
      if (url === '/repair/booking/{bookingId}') {
        return;
      }
      if (this.roleName?.toLowerCase() === 'technician' || this.status?.toLowerCase() === 'complete') {
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
      this.tabs?.setActiveMenu(item);
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
  changeTab(item) {
    let url = '';
    const queryParam = location.search;
    if (item.disabled) {
      return;
    }
    if (item.name == 'Booking') {
      url = '/repair/booking/' + this.repairGuid;
      this.repairMenuItems.filter(q => q.name == 'Repair')[0].active = false;
    } else {
      if (!this.currentStatus) {
        // && !this.estimationOperationLength) {
        return;
      }
      url = '/repair/booking/' + this.repairGuid + '/parts';
      this.repairMenuItems.filter(q => q.name == 'Booking')[0].active = false;
    }
    item.active = true;
    this.repairMenuItems = [...this.repairMenuItems];
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
  displayMissingInspectionMessage(bookingId) {
    this.commonService.openAlertDialog('Notification', 'Please add your vehicle in order to add car images.').afterClosed().subscribe({
      next: result => {
        if (result) {
          this.router.navigate([`repair/booking/${bookingId}`]);
        }
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * expand user -detail
  */
  expand() {
    this.containerWidth = `${this.userDetail?.nativeElement.offsetWidth}px`;
    this.expandUserDetail = !this.expandUserDetail;
  }
  /**
   * Show Hide User section based on active menu item
   */
  showHideTopHeader() {
    if (this.repairGuid && this.repairGuid != '0') {
      this.showUserSection = true;
    } else {
      this.showUserSection = false;
    }
  }
  /**
   * open labour rate popup
   */
  openLabourRate() {
    this.monitorService.logEvent('openLabourRate', ['CustomerLayoutComponent', 'addenda-repair']);
    let dialogRef = this.dialog.open(src_app_dialogs_labour_rate_labour_rate_component__WEBPACK_IMPORTED_MODULE_0__.ChqLabourRateComponent, {
      data: {
        'repairId': this.repairGuid,
        'from': src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__.Modules.repair
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      dialogRef = null;
      if (result) {
        this.commonService.labourData.next(result);
        this.commonService.isRefreshRepairEstimateDetails.next(true);
      }
    });
  }
  /**
   * on destroy
   */
  ngOnDestroy() {
    this.monitorService.logEvent('ngOnDestroy', ['CustomerLayoutComponent', 'addenda-repair', {
      repairId: this.repairGuid
    }]);
    if (this.subscriptions) this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.commonService.activeItem.next(null);
    this.commonService.repairDetails.next(null);
    this.commonService.accessRightRepair.next(true);
    this.commonService.isViewOnly = false;
  }
}
CustomerLayoutComponent.ɵfac = function CustomerLayoutComponent_Factory(t) {
  return new (t || CustomerLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_message_messages_service__WEBPACK_IMPORTED_MODULE_6__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_8__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe));
};
CustomerLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: CustomerLayoutComponent,
  selectors: [["app-customer-layout"]],
  viewQuery: function CustomerLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.tabMain = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.userDetail = _t.first);
    }
  },
  decls: 16,
  vars: 9,
  consts: [[1, "page-container", "mh-0", "mt-0", "fx-col"], [1, "tab-container", "fx-0"], [1, "main-tab-wrapper"], [3, "mode", "menuItems", "menuItemClick"], ["tabMain", ""], [1, "user-wrapper"], [4, "ngIf", "ngIfElse"], ["expanding", ""], [1, "tab-wrapper"], [3, "mode", "menuItems", "menuItemClick", 4, "ngIf"], [1, "tab-content", "fx-1"], ["class", "tab-wrapper", 4, "ngIf"], [4, "ngIf"], ["serviceType", "repair", 3, "history", "isLoading", "toggleExpand", 4, "ngIf"], ["class", "user-detail-container fx-col", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "user-detail-container", "fx-col", 3, "ngClass", "ngStyle"], [1, "user-detail-wrapper"], ["userDetail", ""], [1, "user-detail"], [1, "heading-text"], [2, "font-weight", "500"], [1, "title"], [1, "vehicle-detail"], [1, "make-status", "fx-row"], ["class", "fx-row align-center", 4, "ngIf"], [1, "fx-row", "align-center"], [1, "heading-label"], ["class", "fx-row", 4, "ngIf"], [1, "arrow-drop"], [3, "svgIcon", "click"], [1, "fx-row"], ["style", "font-weight: 500;", 4, "ngIf"], [1, "user-detail-expand-wrapper", 3, "ngClass"], [1, "user-detail-more", "fx-col"], [1, "labour-container", 3, "click"], [1, "vehicle-detail-expand", "fx-col"], ["tabs", ""], ["serviceType", "repair", 3, "history", "isLoading", "toggleExpand"]],
  template: function CustomerLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "chq-tabs", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_Template_chq_tabs_menuItemClick_3_listener($event) {
        return ctx.changeTab($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, CustomerLayoutComponent_ng_container_6_Template, 2, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, CustomerLayoutComponent_ng_template_7_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, CustomerLayoutComponent_chq_tabs_10_Template, 2, 2, "chq-tabs", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, CustomerLayoutComponent_chq_tabs_11_Template, 2, 2, "chq-tabs", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, CustomerLayoutComponent_div_13_Template, 2, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, CustomerLayoutComponent_no_access_error_14_Template, 1, 0, "no-access-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, CustomerLayoutComponent_history_15_Template, 1, 2, "history", 13);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", "underline")("menuItems", ctx.repairMenuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.expandUserDetail)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.activeItem === "Booking");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.activeItem === "Repair");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.repairGuid !== "0");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__.ChqTabsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_10__.NoAccessErrorComponent, _shared_history_history_component__WEBPACK_IMPORTED_MODULE_11__.HistoryComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: [".page-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (58px + 1.6vw));\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\n  background-color: var(--xa-popup-light-gray);\n  padding-top: 0.5vw;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   chq-tabs[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 82px;\n  margin-right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%] {\n  background: var(--xa-bold-gray);\n  border-radius: 10px;\n  margin: 2px calc(5px + 1.5vw);\n  padding: 10px;\n  z-index: 1;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container.expand-main-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .fx-row[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .fx-row[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .arrow-drop[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  overflow: hidden;\n  margin-top: 5px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .labour-container[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--xa-blue);\n  cursor: pointer;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .labour-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .phone-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 8px;\n  gap: 5px;\n  width: 198px;\n  height: 40px;\n  cursor: pointer;\n  border: 0.4px solid #1B03A3;\n  border-radius: 39px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  font-size: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .phone-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 14px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .vehicle-detail-expand[_ngcontent-%COMP%] {\n  gap: 8px;\n  font-size: 12px;\n  line-height: 20px;\n  color: var(--xa-dark-gray);\n  font-weight: 500;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .vehicle-detail-expand[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper.expand[_ngcontent-%COMP%] {\n  display: block;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background: var(--xa-tab-background);\n  overflow: auto;\n}\n\n.heading-text[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  font-weight: 700;\n  line-height: 20px;\n  max-width: 20ch;\n  word-break: break-all;\n}\n\n.heading-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--xa-dark-gray);\n  font-size: 16px !important;\n}\n\nchq-tabs[_ngcontent-%COMP%]     button {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n}\n\n@media screen and (min-device-width: 700px) and (max-device-width: 940px) {\n  .main-tab-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 6px;\n  }\n  .user-detail-container[_ngcontent-%COMP%] {\n    padding: 12px !important;\n  }\n  .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%] {\n    gap: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvYWRkLWN1c3RvbWVycy9jdXN0b21lci1sYXlvdXQvY3VzdG9tZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7QUFDSjtBQUNJO0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1E7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFaO0FBRVk7RUFDSSxpQkFBQTtBQUFoQjtBQUdZO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFGaEI7QUFJZ0I7RUFTSSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBRUEsVUFBQTtBQVhwQjtBQURvQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQUd4QjtBQVNvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVB4QjtBQVN3Qjs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBUDVCO0FBUzRCOztFQUNJLGVBQUE7QUFOaEM7QUFTNEI7O0VBQ0ksU0FBQTtBQU5oQztBQWF3QjtFQUNJLDBCQUFBO0FBWDVCO0FBY3dCO0VBQ0ksa0JBQUE7QUFaNUI7QUFnQm9CO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWR4QjtBQWdCd0I7RUFDSSxTQUFBO0FBZDVCO0FBZ0I0QjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFkaEM7QUFnQmdDO0VBQ0ksK0JBQUE7QUFkcEM7QUFvQmdDOztFQUVJLHNCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFFQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQXhCcEM7QUEwQm9DOztFQUNJLFlBQUE7RUFDQSxXQUFBO0FBdkJ4QztBQTZCZ0M7RUFDSSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQTNCcEM7QUE2Qm9DO0VBQ0ksc0JBQUE7QUEzQnhDO0FBa0N3QjtFQUNJLGNBQUE7QUFoQzVCO0FBeUNRO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXZDWjtBQTJDSTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQXpDUjs7QUE2Q0E7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FBMUNKOztBQThDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBM0NSOztBQStDQTtFQUNJO0lBQ0ksa0JBQUE7RUE1Q047RUErQ0U7SUFDSSx3QkFBQTtFQTdDTjtFQWdEVTtJQUNJLFFBQUE7RUE5Q2Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NnB4IC0gKGNhbGMoNThweCArIDEuNnZ3KSkpO1xyXG5cclxuICAgIC50YWItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC41dnc7XHJcblxyXG4gICAgICAgIC5tYWluLXRhYi13cmFwcGVyIHtcclxuICAgICAgICAgICAgLy9tYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBjaHEtdGFicyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAvL21pbi13aWR0aDogY2FsYygyOTZweCArIDEwdncpO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogODJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAudXNlci1kZXRhaWwtY29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5leHBhbmQtbWFpbi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJvbGQtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweCBjYWxjKDVweCArIDEuNXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbWluLXdpZHRoOiBjYWxjKDI5NnB4ICsgMTB2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvL3JpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudXNlci1kZXRhaWwtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVzZXItZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmVoaWNsZS1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ4LXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcnJvdy1kcm9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXItZGV0YWlsLWV4cGFuZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVzZXItZGV0YWlsLW1vcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJvdXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbWFpbC1waG9uZS1jb250YWluZXItd3JhcHBlciB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbWFpbC1jb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBob25lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjMUIwM0EzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzOXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52ZWhpY2xlLWRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZlaGljbGUtZGV0YWlsLWV4cGFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZXhwYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDZweCArIDEuNXZ3KTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFiLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXRhYi1iYWNrZ3JvdW5kKTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIG1heC13aWR0aDogMjBjaDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLmhlYWRpbmctbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmNocS10YWJzIHtcclxuICAgIDo6bmctZGVlcCBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogOTQwcHgpIHtcclxuICAgIC5tYWluLXRhYi13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAudXNlci1kZXRhaWwtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIC52ZWhpY2xlLWRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZngtcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDkwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 11121:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/repair/booking-journal/booking-journal/booking-journal.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingJournalComponent": () => (/* binding */ BookingJournalComponent)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/timezone */ 72197);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! devextreme-angular/ui/scheduler */ 9282);
/* harmony import */ var devextreme_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/localization */ 41906);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/route-mapper/reapir-status-mapper */ 17771);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../booking-preview/booking-preview.component */ 72994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! devextreme-angular/core */ 46209);
/* harmony import */ var devextreme_angular_ui_draggable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! devextreme-angular/ui/draggable */ 16987);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helper/directive/has-permission.directive */ 22406);































const _c0 = ["filter"];
const _c1 = ["draftcustomer"];
function BookingJournalComponent_chq_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_chq_button_2_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.newBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r0.newBookingButton);
  }
}
function BookingJournalComponent_chq_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_chq_button_3_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.openDraftCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r1.draftButton);
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
const _c2 = function (a0, a1, a2, a3) {
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
    const dataCell_r28 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction4"](2, _c2, ctx_r23.disabledDate[dataCell_r28.startDate.toDateString()], ctx_r23.weekendDate[dataCell_r28.startDate.toDateString()], ctx_r23.isReadOnlyPermission, ctx_r23.lunchTime[dataCell_r28.startDate.toString()]));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r23.currentView === "month" ? dataCell_r28.startDate.getDate() : "", " ");
  }
}
const _c3 = function (a0) {
  return {
    "flex-column": a0
  };
};
function BookingJournalComponent_dx_scheduler_29_div_2_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "p", 50);
  }
  if (rf & 2) {
    const dateCell_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](2, _c3, ctx_r30.getDateText(dateCell_r29.date).length > 105))("innerHtml", ctx_r30.getDateText(dateCell_r29.date), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
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
    const dateCell_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, dateCell_r29.date, "d EEE"), " ");
  }
}
function BookingJournalComponent_dx_scheduler_29_div_2_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dateCell_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", dateCell_r29.text, " ");
  }
}
const _c4 = function (a0) {
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
    const dateCell_r29 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](4, _c4, ctx_r24.disabledDate[dateCell_r29.date.toDateString()]));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r24.currentView !== "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r24.currentView !== "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r24.currentView === "month");
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
    const timeCell_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", timeCell_r36.text ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, timeCell_r36.date, "HH:mm") : "", " ");
  }
}
function BookingJournalComponent_dx_scheduler_29_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 52)(2, "div", 53)(3, "div", 54)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const model_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background", model_r37.targetedAppointmentData.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", model_r37.targetedAppointmentData.Customer == null ? null : model_r37.targetedAppointmentData.Customer.FirstName, " ", model_r37.targetedAppointmentData.Customer == null ? null : model_r37.targetedAppointmentData.Customer.LastName, "");
  }
}
function BookingJournalComponent_dx_scheduler_29_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 55)(2, "div", 56)(3, "div", 54)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 57)(7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 60)(12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_dx_scheduler_29_div_5_Template_button_click_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const model_r38 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r39.handleContextMenu("preview", $event, model_r38.targetedAppointmentData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const model_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("border-left", "12px solid " + model_r38.targetedAppointmentData.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", model_r38.targetedAppointmentData.Customer == null ? null : model_r38.targetedAppointmentData.Customer.FirstName, " ", model_r38.targetedAppointmentData.Customer == null ? null : model_r38.targetedAppointmentData.Customer.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Work Provider: ", model_r38.targetedAppointmentData.WorkProviderDto == null ? null : model_r38.targetedAppointmentData.WorkProviderDto.CompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Status: ", model_r38.targetedAppointmentData.DisplayStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "show");
  }
}
const _c5 = function () {
  return ["day", "week", "month"];
};
function BookingJournalComponent_dx_scheduler_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dx-scheduler", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onAppointmentFormOpening", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentFormOpening_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r41.onAppointmentFormOpening($event));
    })("onAppointmentUpdating", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentUpdating_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r43.onAppointmentUpdating($event));
    })("onAppointmentUpdated", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentUpdated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r44.onAppointmentUpdated($event));
    })("onAppointmentClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r45.onAppointmentClick($event));
    })("onAppointmentDblClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentDblClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r46.onAppointmentDblClick($event));
    })("onOptionChanged", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onOptionChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r47.onOptionChanged($event));
    })("onCellClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onCellClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r48.onCellClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, BookingJournalComponent_dx_scheduler_29_div_1_Template, 2, 7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BookingJournalComponent_dx_scheduler_29_div_2_Template, 4, 6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, BookingJournalComponent_dx_scheduler_29_div_3_Template, 3, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, BookingJournalComponent_dx_scheduler_29_div_4_Template, 6, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, BookingJournalComponent_dx_scheduler_29_div_5_Template, 14, 7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "dxo-appointment-dragging", 45)(7, "dxo-scrolling", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("width", ctx_r5.calendarWidth)("height", ctx_r5.calendarHeight)("editing", true)("dataSource", ctx_r5.calendarData)("views", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](23, _c5))("currentView", ctx_r5.currentView)("adaptivityEnabled", ctx_r5.isSmallScreen)("firstDayOfWeek", 1)("startDayHour", 0)("endDayHour", 24)("currentDate", ctx_r5.currentDate)("cellDuration", 30)("useDropDownViewSwitcher", false)("crossScrollingEnabled", true)("showCurrentTimeIndicator", true)("maxAppointmentsPerCell", ctx_r5.maxAppointmentsPerCell);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", "customer")("onAdd", ctx_r5.onAppointmentAdd);
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
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "chq-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_58_Template_chq_input_controlOutput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r49.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r10.filterModal[7]);
  }
}
function BookingJournalComponent_hr_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 23);
  }
}
function BookingJournalComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "chq-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_60_Template_chq_input_controlOutput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r51.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r12.filterModal[4]);
  }
}
function BookingJournalComponent_hr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr");
  }
}
function BookingJournalComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "chq-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_62_Template_chq_input_controlOutput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r53.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r14.filterModal[5]);
  }
}
function BookingJournalComponent_hr_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr");
  }
}
function BookingJournalComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const customer_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](customer_r55.licensePlateNumber);
  }
}
const _c6 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function BookingJournalComponent_dx_draggable_85_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const customer_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](4, 1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](7, _c6, customer_r55.cost, ctx_r57.i18n.currencySymbol, ctx_r57.i18n.digitsInfo, ctx_r57.i18n.locale, ctx_r57.i18n.position)), " ");
  }
}
function BookingJournalComponent_dx_draggable_85_a_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_dx_draggable_85_a_19_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r63);
      const customer_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r61.handleDraftAction("delete", $event, customer_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "trash");
  }
}
const _c7 = function (a0) {
  return {
    "disabled": a0
  };
};
const _c8 = function (a0) {
  return [a0];
};
function BookingJournalComponent_dx_draggable_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dx-draggable", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onDragStart", function BookingJournalComponent_dx_draggable_85_Template_dx_draggable_onDragStart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r64.onItemDragStart($event));
    })("onDragEnd", function BookingJournalComponent_dx_draggable_85_Template_dx_draggable_onDragEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r65);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r66.onItemDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68)(4, "div", 54)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 57)(8, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, BookingJournalComponent_dx_draggable_85_span_11_Template, 4, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, BookingJournalComponent_dx_draggable_85_span_12_Template, 5, 13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div")(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 70)(17, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, BookingJournalComponent_dx_draggable_85_a_19_Template, 2, 1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const customer_r55 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("clone", true)("group", "customer")("data", customer_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", customer_r55.firstName, " ", customer_r55.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](10, 17, customer_r55.createdDate, "dd/MM/yyyy hh:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", customer_r55.statusClass === "RepairEstimation");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", customer_r55.statusClass === "RepairEstimation");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("status ", customer_r55.statusClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", customer_r55.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](20, _c7, !ctx_r18.hasQuotePermission && customer_r55.draftCustomerType === "Quote"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](22, _c8, customer_r55.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqPermission", "bookingJournal");
  }
}
const _c9 = function (a0) {
  return {
    "margin-right": a0
  };
};
const _c10 = function (a0) {
  return {
    "two-per-row": a0
  };
};
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
(0,devextreme_localization__WEBPACK_IMPORTED_MODULE_3__.locale)('en');
class BookingJournalComponent {
  /**
   * Constructor
   */
  constructor(router, route, formBuilder, dialog, calendarService, commonService, datePipe, cdr, bookingService, caseService, xaCurrencyPipe, translateService) {
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
    this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight;
    // calc(((((100vh - (50px + 2 * (5px + 0.8vw))) - (5px + 1.5vw)) - 1.5vw) - 90px))
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
  get isiOS() {
    return false;
    return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)
    // iPad on iOS 13 detection
    || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
  }
  /**
   * detect change in windows resize
   */
  getScreenSize() {
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
    this.scheduler?.instance.getDataSource().reload();
  }
  /**
   * on init
   */
  ngOnInit() {
    this.windowInnerWidth = window.innerWidth;
    this.commonService.userProfileData.subscribe(res => {
      this.userDetail = res?.data;
      const automotiveServices = res?.data?.userPermission?.automotiveServices;
      this.hasQuotePermission = automotiveServices?.some(x => x.automotiveServiceName === 'Carheal Quote');
      this.userIsBM = this.userDetail?.roleDetail.some(x => x.name == 'Bodyshop Manager');
      if (this.userDetail?.organizationDetail?.id) {
        this.filterForm.get('OrgName').setValue(this.userDetail?.organizationDetail.id);
      }
      const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda repair');
      if (automotiveService && this.noPermissionRoles['bookingJournal'].includes(automotiveService.roleName.toLowerCase())) {
        this.isReadOnlyPermission = false;
      } else {
        this.isReadOnlyPermission = true;
      }
    });
    this.route.queryParams.subscribe(params => {
      if (params['bookInDate']) {
        this.currentDate = new Date(params['bookInDate']);
      }
    });
  }
  /**
  * function
  */
  ngAfterViewInit() {
    this.getCalendarData(this.generateFilterQuery());
    this.cdr.detectChanges();
  }
  /**
   * Check and pull draft customer data
   */
  openDraftCustomer() {
    if (this.draftDataLoaded) {
      this.showDraftCustomer();
    } else {
      this.commonService.showLoading();
      this.calendarService.getDraftCustomer()?.subscribe({
        next: result => {
          this.draftData = result.data
          // .filter(x => !this.bookingIdList.some(y => y === x.bookingGuid))
          .map(x => {
            const statusTrimmed = x.status?.replace(/\s/g, '');
            let routeToRedirect = '/';
            if (x.draftCustomerType === 'Repair') {
              routeToRedirect += src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__.ReapirStatusMapper[statusTrimmed?.toLowerCase()] || src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__.ReapirStatusMapper.others;
              routeToRedirect = routeToRedirect.replace('{{repairGUID}}', x.repairGuid);
            } else if (x.draftCustomerType === 'Quote') {
              routeToRedirect += src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper[statusTrimmed?.toLowerCase()] || src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper.others;
              routeToRedirect = routeToRedirect.replace('{{caseGUID}}', x.caseGuid);
            }
            return {
              ...x,
              url: routeToRedirect,
              statusClass: statusTrimmed
            };
          }).sort(function (a, b) {
            return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
          });
          this.commonService.hideLoading();
          this.draftDataLoaded = true;
          this.showDraftCustomer();
        }
      });
    }
  }
  /**
   * open draft customer panel
   */
  showDraftCustomer(open = true) {
    if (open) {
      this.draftCustomer.open();
    }
    this.calendarWidth = window.innerWidth - 400 + 'px';
    this.calendarHeight = this.defaultHeight;
    this.showCalendar = false;
    setTimeout(() => {
      this.showCalendar = true;
      setTimeout(() => {
        this.scrollToCurrentTime();
      }, 0);
    }, 0);
  }
  /**
   * Check if user is bm , then call api otherwise return observable
   */
  getOrgIfBM() {
    if (this.userIsBM) {
      return this.caseService.getOrganizations();
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null);
    }
  }
  /**
   * pull data and open filter panel
   */
  openFilter() {
    if (this.filterDataLoaded) {
      this.filter.toggle();
    } else {
      this.commonService.showLoading();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([this.bookingService.getBookingRepairTypes(`?orgIds=${this.userDetail?.organizationDetail.id}`), this.getOrgIfBM(), this.caseService.getProvidersByOrgId(`?orgIds=${this.userDetail?.organizationDetail.id}`), this.bookingService.getEmployeesByCompetencies(null, this.calendarCurrentStartDate, this.calendarCurrentEndDate, this.userDetail?.organizationDetail.id)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([bookingRepairType, orgList, workProvider, employeeList]) => {
        return {
          bookingRepairType,
          orgList,
          workProvider,
          employeeList
        };
      })).subscribe(result => {
        if (result?.bookingRepairType?.data) this.filterModal[0].options = result?.bookingRepairType?.data.BookingTypes.map(x => {
          return {
            label: x.name,
            value: x.name
          };
        });
        if (this.userIsBM) {
          this.filterModal[1] = {
            ...this.filterModal[1],
            selectedOption: {
              'label': this.userDetail?.organizationDetail.name,
              'value': this.userDetail?.organizationDetail.id
            },
            options: result.orgList.data.map(x => {
              return {
                label: x.name,
                value: x.id
              };
            })
          };
        } else {
          this.filterModal[1] = {
            ...this.filterModal[1],
            selectedOption: {
              'label': this.userDetail?.organizationDetail.name,
              'value': this.userDetail?.organizationDetail.id
            },
            options: [{
              'label': this.userDetail?.organizationDetail.name,
              'value': this.userDetail?.organizationDetail.id
            }],
            disabled: true
          };
        }
        if (result?.workProvider?.data) this.filterModal[3].options = result?.workProvider?.data.map(x => {
          return {
            label: x,
            value: x
          };
        });
        if (result?.employeeList?.data) {
          this.filterModal[5] = {
            ...this.filterModal[5],
            options: result.employeeList?.data.map(x => {
              return {
                label: `${x.firstName} ${x.lastName}`,
                value: x.employeeId
              };
            })
          };
        }
        if (result.bookingRepairType.data.RepairType && result.bookingRepairType.data.RepairType.length > 0) {
          this.filterModal[6].options = result.bookingRepairType.data.RepairType[0].RepairTypes.map(x => {
            return {
              label: x.name,
              value: x.id,
              icon: this.getRepairTpeIcon(x.name)
            };
          });
        }
        this.filter.toggle();
        this.commonService.hideLoading();
        this.filterDataLoaded = true;
      });
    }
  }
  /**
  * getRepairTpeIcon
  */
  getRepairTpeIcon(name) {
    const iconMapper = {
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
  getDisplayStatus(status) {
    const statusMapper = {
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
  refreshCalendarData() {
    this.calendarData = [];
    this.getCalendarData(this.generateFilterQuery());
  }
  /**
  * function
  */
  generateFilterQuery() {
    this.calendarCurrentStartDate = this.calendarCurrentStartDate || new Date(this.scheduler.instance.getStartViewDate().toDateString()).toISOString();
    this.calendarCurrentEndDate = this.calendarCurrentEndDate || new Date(new Date(this.scheduler.instance.getEndViewDate().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
    let startDate = this.calendarCurrentStartDate;
    let endDate = this.calendarCurrentEndDate;
    if (this.isFromCalendar) {
      startDate = new Date(this.scheduler.instance.getStartViewDate().toDateString()).toISOString();
      endDate = new Date(new Date(this.scheduler.instance.getEndViewDate().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
      this.calendarCurrentStartDate = startDate;
      this.calendarCurrentEndDate = endDate;
      this.isFromCalendar = false;
    }
    const filterValue = this.filterForm.value;
    let query = `?$filter=((StartDate ge ${startDate} and StartDate le ${endDate}) or (EndDate ge ${startDate} and EndDate le ${endDate}) or (StartDate le ${startDate} and EndDate ge ${endDate}))`;
    if (filterValue['Booking']) {
      if (filterValue['Booking'].includes('bookingIn') && filterValue['Booking'].includes('bookingOut')) {
        query = `?$filter=((StartDate ge ${startDate} and StartDate le ${endDate}) and (EndDate ge ${startDate} and EndDate le ${endDate}))`;
      } else if (filterValue['Booking'].includes('bookingIn')) {
        query = `?$filter=((StartDate ge ${startDate} and StartDate le ${endDate}))`;
      } else if (filterValue['Booking'].includes('bookingOut')) {
        query = `?$filter=((EndDate ge ${startDate} and EndDate le ${endDate}))`;
      }
    }
    Object.keys(filterValue).forEach(key => {
      switch (key) {
        case 'OrgName':
          if (filterValue[key]) {
            query += ` and (OrgId eq ${filterValue[key]})`;
          }
          break;
        case 'TypeName':
          if (filterValue[key] && filterValue[key].length > 0) {
            query += ` and (${filterValue[key].map(x => key + ' eq \'' + x + '\'').join(' or ')})`;
          }
          break;
        case 'WorkProviderDto':
          if (filterValue[key] && filterValue[key].length > 0) {
            query += ` and (${filterValue[key].map(x => 'WorkProviderDto/CompanyOrgType eq \'' + x + '\'').join(' or ')})`;
          }
          break;
        case 'WorkProviderName':
          if (filterValue[key] && filterValue[key].length > 0) {
            query += ` and (${filterValue[key].map(x => 'WorkProviderDto/CompanyName eq \'' + x + '\'').join(' or ')})`;
          }
          break;
        case 'CustomerName':
          if (filterValue[key] && filterValue[key].length > 0) {
            query += ` and (${filterValue[key].map(x => 'Customer/Email eq \'' + x + '\'').join(' or ')})`;
          }
          break;
        case 'Assignees':
          if (filterValue[key] && filterValue[key].length > 0) {
            const partialQuery = `${filterValue[key].map(x => 'c/AssigneeId eq ' + x).join(' or ')}`;
            query += ` and Assignees/any(c: (${partialQuery}))`;
          }
          break;
        case 'RepairType':
          if (filterValue[key] && filterValue[key].length > 0) {
            const partialQuery = `${filterValue[key].map(x => 'c/RepairServiceTypeId eq ' + x).join(' or ')}`;
            query += ` and RepairServiceTypes/any(c: (${partialQuery}))`;
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
  calculateSum(arr, key) {
    return arr.reduce((total, current) => {
      return total + current[key];
    }, 0);
  }
  /**
   * getCalendarData
   * @param query
   */
  getCalendarData(query) {
    this.totalEstimate = 0;
    this.totalLabour = 0;
    this.totalBooking = 0;
    // this.setDisabledCell();
    this.bookingIdList = [];
    this.disabledDate = {};
    this.weekendDate = {};
    this.startHour = 0;
    this.endHour = 24;
    this.commonService.showLoading();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([this.calendarService.getCalendarData(query), this.calendarService.getSchedule(this.userDetail?.userId, this.calendarCurrentStartDate, this.calendarCurrentEndDate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null)))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([calendarData, scheduleData]) => {
      const updatedValue = [];
      calendarData.value.forEach(orgValue => {
        const mappedData = {
          ...orgValue,
          StartDate: dayjs__WEBPACK_IMPORTED_MODULE_0__(orgValue.StartDate).toDate(),
          EndDate: dayjs__WEBPACK_IMPORTED_MODULE_0__(orgValue.EndDate).toDate(),
          Color: orgValue.BookingTypeColor,
          Icon: orgValue.TypeName === 'Assessment' ? 'booking-type-assessment' : 'booking-type-repair',
          DisplayStatus: this.getDisplayStatus(orgValue.StatusName)
        };
        if (!this.isSameDay(mappedData.StartDate, mappedData.EndDate)) {
          mappedData.allDay = true;
        }
        updatedValue.push(mappedData);
        this.bookingIdList.push(mappedData.BookingGuid);
        const startDate = this.currentView === 'month' ? new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1) : new Date(this.calendarCurrentStartDate);
        const endDate = this.currentView === 'month' ? new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0, 11, 59, 59) : new Date(this.calendarCurrentEndDate);
        if (this.checkDateRange(startDate, endDate, mappedData.StartDate)) {
          this.totalEstimate += mappedData.EstimateCost || 0;
          this.totalLabour += mappedData.LabourCost || 0;
          this.totalBooking++;
        }
      });
      return {
        calendarData: updatedValue,
        scheduleData
      };
    })).subscribe(result => {
      this.calendarData = [...result.calendarData];
      this.commonService.hideLoading();
      this.checkSchedule(result.scheduleData);
      this.scrollToCurrentTime();
    });
  }
  /**
   *
   */
  scrollToCurrentTime() {
    const currentDate = new Date();
    let scrollToHour = currentDate.getHours() > 0 ? currentDate.getHours() - 1 : currentDate.getHours();
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
  checkSchedule(scheduleData) {
    let startHour;
    let endHour;
    scheduleData?.data?.calenderDays?.forEach(element => {
      if (element.breaks && element.breaks.length > 0) {
        let startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} ${element.breaks[0].startTime} Z`, 'YYYY-MM-DD hh:mm A Z');
        const endTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} ${element.breaks[0].endTime} Z`, 'YYYY-MM-DD hh:mm A Z');
        do {
          const stringDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(startTime.toDate()).toDate().toString();
          this.lunchTime[stringDate] = true;
          startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(startTime.toDate()).add(30, 'm');
        } while (startTime < endTime);
      }
      const date = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} 00:00 AM Z`, 'YYYY-MM-DD hh:mm A Z');
      if (element.isOff) {
        this.disabledDate[date.toDate().toDateString()] = true;
      }
      if (element.isWeekend) {
        this.weekendDate[date.toDate().toDateString()] = true;
      }
      if (element.timeSlots && element.timeSlots.length > 0) {
        const startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} ${element.timeSlots[0].startTime} Z`, 'YYYY-MM-DD HH:mm Z');
        const endTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} ${element.timeSlots[0].endTime} Z`, 'YYYY-MM-DD HH:mm Z');
        if (!startHour || startHour > startTime.toDate().getHours()) {
          startHour = startTime.toDate().getHours();
        }
        if (!endHour || endHour < endTime.toDate().getHours()) {
          endHour = endTime.toDate().getHours();
          if (endTime.toDate().getMinutes() > 0 && endHour < 24) {
            endHour = endHour + 1;
          }
        }
      }
    });
    this.startHour = startHour || 0;
    this.endHour = endHour || 24;
    // this.showCalendar = false;
    // setTimeout(() => {
    //   this.showCalendar = true;
    // }, 0);
  }
  /**
   *
   * @param date
   * @returns
   */
  getStringDate(date) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0__(date).format('YYYYMMDDHHmm');
  }
  /**
   * isSameDay
   * @param startDate
   * @param endDate
   * @returns
   */
  isSameDay(startDate, endDate) {
    const formattedStartDate = this.datePipe.transform(startDate, 'yyyy-MM-dd');
    const formattedEndDate = this.datePipe.transform(endDate, 'yyyy-MM-dd');
    return formattedStartDate === formattedEndDate;
  }
  /**
   * newBooking
   */
  newBooking() {
    this.router.navigate(['/repair/booking/0']);
  }
  /**
   * handleContextMenu
   * @param type
   * @param e
   * @param appointment
   */
  handleContextMenu(type, e, appointment) {
    if (type === 'preview') {
      if (!this.previewOpen) {
        this.openPreview(appointment);
      }
    } else if (type === 'delete') {
      this.scheduler.instance.deleteAppointment(this.calendarData[this.calendarData.findIndex(x => x.Id == appointment.Id)]);
    }
  }
  /**
   * cancelEvent
   * @param e
   */
  cancelEvent(e) {
    e.cancel = true;
  }
  /**
   *
   * @param appointment
   */
  openPreview(appointment) {
    this.previewOpen = true;
    appointment.isReadOnlyPermission = this.isReadOnlyPermission;
    const dialogRef = this.dialog.open(_booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__.BookingPreviewComponent, {
      data: appointment,
      maxHeight: '90vh',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.previewOpen = false;
      if (result?.success && (result.type === 'delete' || result.type === 'refresh')) {
        this.refreshCalendarData();
        this.draftClose();
        this.draftData = [];
        this.draftDataLoaded = false;
      }
    });
  }
  /**
     * onAppointmentClick
     * @param e
     */
  onAppointmentClick(e) {
    setTimeout(() => {
      if (!this.isDoubleClick && !this.previewOpen) {
        this.openPreview(e.appointmentData);
      }
    }, 500);
    this.isDoubleClick = false;
    e.cancel = true;
  }
  /**
     * onAppointmentDblClick
     * @param e
     */
  onAppointmentDblClick(e) {
    this.isDoubleClick = true;
    const routeToRedirect = src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__.ReapirStatusMapper[e.appointmentData.StatusName?.replace(/\s/g, '').toLowerCase()] || src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__.ReapirStatusMapper.others;
    this.router.navigate([routeToRedirect.replace('{{repairGUID}}', e.appointmentData.ObjectGuid)]);
    e.cancel = true;
  }
  /**
   * onOptionChanged
   * @param e
   */
  onOptionChanged(e) {
    if (e.name === 'currentView') {
      this.currentView = e.value;
      localStorage.setItem('currentView', this.currentView);
      this.isFromCalendar = true;
      setTimeout(() => {
        this.draftClose();
        this.draftData = [];
        this.draftDataLoaded = false;
        this.refreshCalendarData();
      }, 100);
      this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight;
    } else if (e.name === 'currentDate') {
      this.currentDate = e.value;
      this.isFromCalendar = true;
      setTimeout(() => {
        this.draftClose();
        this.draftData = [];
        this.draftDataLoaded = false;
        this.refreshCalendarData();
      }, 100);
    }
  }
  /**
   * onCellClick
   * @param e
   */
  onCellClick(e) {
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
  checkDateAndOpen(e) {
    if (this.isPastDate(e.cellData.startDate)) {
      e.cancel = true;
      this.commonService.showInfoToast(5000, 'cannot_past_date');
    } else {
      const isValidAppointment = this.isValidAppointment(e.component, e.cellData);
      if (!isValidAppointment) {
        e.cancel = true;
        this.notifyDisableDate();
      } else {
        const startDate = this.datePipe.transform(e.cellData.startDate, 'yyyy-MM-ddTHH:mm:ss');
        const endDate = this.datePipe.transform(e.cellData.endDate, 'yyyy-MM-ddTHH:mm:ss');
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
  onAppointmentFormOpening(e) {
    e.cancel = true;
    const startDate = e.appointmentData.startDate;
    if (!this.isValidAppointmentDate(startDate)) {
      e.cancel = true;
      this.notifyDisableDate();
    }
  }
  /**
   *
   * @param e
   */
  onAppointmentAdding(e) {
    const isValidAppointment = this.isValidAppointment(e.component, e.appointmentData);
    if (!isValidAppointment) {
      e.cancel = true;
      this.notifyDisableDate();
    }
  }
  /**
   *
   * @param e
   */
  onAppointmentUpdating(e) {
    const allowedStatus = ['draft', 'vehicledetails', 'uploaddocuments', 'uploadphotos', 'repairestimation', 'pendingapproval', 'approved', 'reject', 'rejected', 'repairinprogress'];
    const statusTrimmed = e.oldData.StatusName.toLowerCase().replace(/\s/g, '');
    if (!this.isReadOnlyPermission && allowedStatus.includes(statusTrimmed)) {
      const isValidAppointment = this.isValidAppointment(e.component, e.newData);
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
        const message = this.translateService.instant('cannot_update_datetime_for_status', {
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
  onAppointmentUpdated(e) {
    if (!this.isReadOnlyPermission) {
      const startDate = new Date(e.appointmentData.StartDate.getTime());
      let endDate = new Date(e.appointmentData.EndDate.getTime());
      if (e.appointmentData.allDay && startDate.getDate() == endDate.getDate()) {
        endDate = new Date(e.appointmentData.StartDate.getTime());
        endDate.setDate(endDate.getDate() + 1);
      }
      this.patchBooking(startDate, endDate, e.appointmentData.BookingGuid).subscribe({
        next: () => {
          this.commonService.hideLoading();
          this.refreshCalendarData();
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
  patchBooking(startDate, endDate, bookingGuid) {
    const patchValue = [{
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
  notifyDisableDate() {
    this.commonService.showInfoToast(5000, 'cannot_disabled_date');
  }
  /**
   *
   * @param date
   * @returns
   */
  isHoliday(date) {
    const localeDate = date.toLocaleDateString();
    const holidays = this.calendarService.getHolidays();
    return holidays.filter(holiday => holiday.toLocaleDateString() === localeDate).length > 0;
  }
  /**
   *
   * @param date
   * @returns
   */
  isWeekend(date) {
    const day = date.getDay();
    return day === 0;
  }
  /**
   *
   * @param date
   * @returns
   */
  isDisableDate(date) {
    return this.isHoliday(date); // || this.isWeekend(date) || this.isPastDate(date);
  }
  /**
   *
   * @param date
   * @returns
   */
  isPastDate(date) {
    return date < new Date();
  }
  /**
   *
   * @param date
   * @returns
   */
  isDisabledDateCell(date) {
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
  isValidAppointment(component, appointmentData) {
    const startDate = new Date(appointmentData.StartDate || appointmentData.startDate);
    const endDate = new Date(appointmentData.EndDate || appointmentData.endDate);
    return this.isValidAppointmentInterval(startDate, endDate, 30);
  }
  /**
   *
   * @param startDate
   * @param endDate
   * @param cellDuration
   * @returns
   */
  isValidAppointmentInterval(startDate, endDate, cellDuration) {
    const edgeEndDate = new Date(endDate.getTime());
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
  isValidAppointmentDate(date) {
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
  applyDisableDatesToDateEditors(form) {
    const holidays = this.calendarService.getHolidays();
    const startDateEditor = form.getEditor('startDate');
    startDateEditor.option('disabledDates', holidays);
    const endDateEditor = form.getEditor('endDate');
    endDateEditor.option('disabledDates', holidays);
  }
  /**
   *
   * @param currentDate
   * @returns
   */
  getDateText(currentDate) {
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    const filteredData = this.calendarData.filter(x => this.checkDateRange(startDate, endDate, x.StartDate)).map(a => a);
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
  checkDateRange(start, end, current) {
    if (start <= current && current <= end) {
      return true;
    }
    return false;
  }
  /**
   *
   * @param output
   */
  onFormUpdate(output) {
    if (output.name === 'TypeName' || output.name === 'Booking' || output.name === 'WorkProviderDto' || output.name === 'RepairType') {
      // eslint-disable-next-line prefer-const
      let prevValue = this.filterForm.get(output.name).value || [];
      if (output.value) {
        if (prevValue.indexOf(output.keyFieldValue) === -1) {
          prevValue.push(output.keyFieldValue);
        }
      } else {
        const index = prevValue.indexOf(output.keyFieldValue);
        prevValue.splice(index, 1);
      }
      this.filterForm.get(output.name).setValue(prevValue);
      if (output.name === 'WorkProviderDto') {
        this.showProviderChild = prevValue.length > 1 || prevValue.length == 1 && !prevValue.includes('Retail');
      }
      if (prevValue.length > 0 && output.name === 'WorkProviderDto') {
        this.filterModal[4] = {
          ...this.filterModal[4],
          value: '',
          selectedOption: ''
        };
        this.filterForm.get('CustomerName').setValue('');
        this.filterModal[7] = {
          ...this.filterModal[7],
          value: '',
          options: [],
          selectedOption: ''
        };
        this.filterForm.get('WorkProviderName').setValue('');
        this.commonService.showLoading();
        let query = `?$orderBy=CreatedDate desc&$filter=(OrgId eq ${this.filterForm.get('OrgName').value})`;
        query += `and (${prevValue.map(x => {
          return `CompanyOrgType eq '${x}'`;
        }).join(' or ')})`;
        const orgQuery = `?orgId=${this.filterForm.get('OrgName').value}`;
        prevValue.forEach(value => {
          this.caseService.getCompanyData(value, orgQuery).subscribe({
            next: result => {
              const concatArray = this.filterModal[7].options.concat(result.data.map(x => {
                return {
                  label: x.companyName || x.partnershipName,
                  value: x.companyName || x.partnershipName
                };
              }));
              this.filterModal[7] = {
                ...this.filterModal[7],
                options: concatArray
              };
            }
          });
        });
        this.calendarService.getCustomer(query).subscribe({
          next: result => {
            this.commonService.hideLoading();
            if (result) {
              //company name and license number
              this.filterModal[4] = {
                ...this.filterModal[4],
                options: result.value.filter((value, index, self) => {
                  return self.findIndex(o => o.ContactId === value.ContactId) === index;
                }).map(x => {
                  return {
                    label: x.FirstName + ' ' + x.LastName,
                    value: x.Email,
                    html: `<div class='workflow-customer-item'><span class='name'>${x.FirstName + ' ' + x.LastName}</span><span class='email'>${x.Email}</span></div>`
                  };
                })
              };
            } else {
              this.filterModal[4] = {
                ...this.filterModal[4],
                options: []
              };
            }
          },
          error: () => {
            this.filterModal[4] = {
              ...this.filterModal[4],
              options: []
            };
            this.commonService.hideLoading();
          }
        });
      } else {
        this.filterModal[4] = {
          ...this.filterModal[4],
          options: []
        };
      }
    } else if (output.name === 'Assignees') {
      this.filterModal[5] = {
        ...this.filterModal[5],
        selectedOption: output.value
      };
      this.filterForm.get(output.name).setValue(output.value.map(x => {
        return x.value;
      }));
    } else if (output.name === 'CustomerName') {
      this.filterModal[4] = {
        ...this.filterModal[4],
        selectedOption: output.value
      };
      this.filterForm.get(output.name).setValue(output.value.map(x => {
        return x.value;
      }));
    } else if (output.name === 'WorkProviderName') {
      this.filterModal[7] = {
        ...this.filterModal[7],
        selectedOption: output.value
      };
      this.filterForm.get(output.name).setValue(output.value.map(x => {
        return x.value;
      }));
    } else if (output.name === 'OrgName') {
      this.filterModal[1] = {
        ...this.filterModal[1],
        selectedOption: output.value
      };
      this.filterForm.get(output.name).setValue(output.value.value);
      this.filterModal[0] = {
        ...this.filterModal[0],
        options: []
      };
      this.filterModal[3] = {
        ...this.filterModal[3],
        options: []
      };
      this.filterModal[4] = {
        ...this.filterModal[4],
        options: []
      };
      this.filterModal[5] = {
        ...this.filterModal[5],
        options: []
      };
      this.filterModal[6] = {
        ...this.filterModal[6],
        options: []
      };
      this.filterModal[7] = {
        ...this.filterModal[7],
        options: []
      };
      this.filterForm.get('WorkProviderDto').setValue('');
      this.filterForm.get('WorkProviderName').setValue('');
      this.filterForm.get('CustomerName').setValue('');
      if (this.filterForm.get(output.name).value) {
        this.getWorkProviders(this.filterForm.get(output.name).value);
        this.applyButton = {
          ...this.applyButton,
          type: 'primary'
        };
      } else {
        this.applyButton = {
          ...this.applyButton,
          type: 'disabled'
        };
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
  formatLabel(value) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value} `;
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
  applyFilter() {
    this.refreshCalendarData();
    this.filter.close();
  }
  /**
   *
   */
  resetFilter() {
    this.filterForm.reset();
    for (let index = 0; index < this.filterModal.length; index++) {
      if (!this.filterModal[index].disabled) {
        this.filterModal[index] = {
          ...this.filterModal[index],
          value: '',
          selectedOption: '',
          options: this.filterModal[index].options?.map(x => {
            x.checked = false;
            return x;
          })
        };
      }
    }
    this.showProviderChild = false;
    if (this.userDetail?.organizationDetail?.id) {
      this.filterForm.get('OrgName').setValue(this.userDetail?.organizationDetail.id);
      this.filterModal[1] = {
        ...this.filterModal[1],
        selectedOption: {
          'label': this.userDetail?.organizationDetail.name,
          'value': this.userDetail?.organizationDetail.id
        }
      };
      if (this.filterForm.get('OrgName').value) {
        this.getWorkProviders(this.filterForm.get('OrgName').value);
      }
    }
    this.applyButton = {
      ...this.applyButton,
      type: 'primary'
    };
    // this.refreshCalendarData();
    // this.filter.close();
  }
  /*Draft customer*/
  /**
   *
   * @param e
   */
  onItemDragStart(e) {
    e.itemData = e.fromData;
  }
  /**
   *
   * @param e
   */
  onItemDragEnd(e) {
    if (e.toData) {
      e.cancel = true;
    }
  }
  /**
   *
   * @param e
   */
  onAppointmentAdd(e) {
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
  addAppointmentFromDraft(e) {
    if (this.isPastDate(e.itemData.StartDate)) {
      e.cancel = true;
      this.commonService.showInfoToast(5000, 'cannot_past_date');
    } else {
      const isValidAppointment = this.isValidAppointment(e.component, e.itemData);
      if (!isValidAppointment) {
        e.cancel = true;
        this.notifyDisableDate();
      } else {
        if (e.itemData.draftCustomerType === 'Quote') {
          if (e.itemData.status == 'Repair Estimation') {
            const startDate = this.datePipe.transform(e.itemData.StartDate, 'yyyy-MM-ddTHH:mm:ss');
            const endDate = this.datePipe.transform(e.itemData.EndDate, 'yyyy-MM-ddTHH:mm:ss');
            this.router.navigate(['repair/booking/0'], {
              queryParams: {
                'caseId': e.itemData.caseGuid,
                'startDate': startDate,
                'endDate': endDate
              }
            });
          } else {
            this.router.navigate([`/quote/case/${e.itemData.caseGuid}`]);
          }
        } else if (e.itemData.draftCustomerType === 'Repair') {
          this.patchBooking(e.itemData.StartDate, e.itemData.EndDate, e.itemData.bookingGuid).subscribe({
            next: () => {
              this.commonService.hideLoading();
              this.draftDataLoaded = false;
              this.refreshCalendarData();
              this.openDraftCustomer();
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
  handleDraftAction(type, e, customer) {
    if (type === 'preview') {
      if (customer.draftCustomerType == 'Repair') {
        this.router.navigate([`/repair/booking/${customer.repairGuid}`]);
      } else if (customer.draftCustomerType == 'Quote') {
        this.router.navigate([`/quote/case/${customer.caseGuid}`]);
      }
    } else if (type === 'delete') {
      this.commonService.openDeleteDialog('customer').afterClosed().subscribe(data => {
        if (data) {
          this.commonService.showLoading();
          this.calendarService.deleteDraftCustomer(customer.id).subscribe({
            next: () => {
              this.commonService.hideLoading();
              this.draftDataLoaded = false;
              this.openDraftCustomer();
            }
          });
        }
      });
    }
  }
  /**
   *
   */
  draftClose() {
    this.draftCustomer.close();
    this.calendarWidth = '100%';
    this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight;
  }
  /**
   * get work providers
   * @param orgId
   */
  getWorkProviders(orgId) {
    this.commonService.showLoading();
    // this.caseService.getProvidersByOrgId(`?orgIds=${orgId}`).subscribe({
    //   next: (result) => {
    //     this.commonService.hideLoading();
    //     this.filterModal[3].options = result.data.map((x) => { return { label: x, value: x } });
    //   },
    //   error: (err) => {
    //     this.commonService.hideLoading();
    //   }
    // });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([this.bookingService.getBookingRepairTypes(`?orgIds=${orgId}`), this.caseService.getProvidersByOrgId(`?orgIds=${orgId}`), this.bookingService.getEmployeesByCompetencies(null, this.calendarCurrentStartDate, this.calendarCurrentEndDate, orgId)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([bookingRepairType, workProvider, employeeList]) => {
      return {
        bookingRepairType,
        workProvider,
        employeeList
      };
    })).subscribe(result => {
      if (result?.bookingRepairType?.data) this.filterModal[0].options = result?.bookingRepairType?.data.BookingTypes.map(x => {
        return {
          label: x.name,
          value: x.name
        };
      });
      if (result?.workProvider?.data) this.filterModal[3].options = result?.workProvider?.data.map(x => {
        return {
          label: x,
          value: x
        };
      });
      if (result?.employeeList?.data) {
        this.filterModal[5] = {
          ...this.filterModal[5],
          options: result?.employeeList?.data?.map(x => {
            return {
              label: `${x.firstName} ${x.lastName}`,
              value: x.employeeId
            };
          })
        };
      }
      if (result.bookingRepairType.data.RepairType && result.bookingRepairType.data.RepairType.length > 0) {
        this.filterModal[6].options = result.bookingRepairType.data.RepairType[0].RepairTypes.map(x => {
          return {
            label: x.name,
            value: x.id,
            icon: this.getRepairTpeIcon(x.name)
          };
        });
      }
      this.commonService.hideLoading();
    });
  }
}
BookingJournalComponent.ɵfac = function BookingJournalComponent_Factory(t) {
  return new (t || BookingJournalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_8__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.XaCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService));
};
BookingJournalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: BookingJournalComponent,
  selectors: [["chr-booking-journal"]],
  viewQuery: function BookingJournalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_24__.DxSchedulerComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
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
      const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BookingJournalComponent_chq_button_2_Template, 1, 1, "chq-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, BookingJournalComponent_chq_button_3_Template, 1, 1, "chq-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "chq-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_4_listener() {
        return ctx.openFilter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 4)(6, "span")(7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "E");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "xaCurrency");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span")(15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "L");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "xaCurrency");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span")(23, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, BookingJournalComponent_ng_container_25_Template, 3, 3, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, BookingJournalComponent_ng_template_26_Template, 2, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, BookingJournalComponent_dx_scheduler_29_Template, 8, 24, "dx-scheduler", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "mat-sidenav-container", 10)(31, "mat-sidenav", 11, 12)(33, "div", 13)(34, "div", 14)(35, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 16)(39, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_39_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r67);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](32);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](_r6.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "form", 19)(42, "div", 20)(43, "div", 21)(44, "chq-input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_44_listener($event) {
        return ctx.onFormUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "hr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 24)(47, "div", 21)(48, "chq-input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_48_listener($event) {
        return ctx.onFormUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, BookingJournalComponent_hr_49_Template, 1, 0, "hr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 24)(51, "div", 21)(52, "chq-input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_52_listener($event) {
        return ctx.onFormUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, BookingJournalComponent_hr_53_Template, 1, 0, "hr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 24)(55, "div", 21)(56, "chq-input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_56_listener($event) {
        return ctx.onFormUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, BookingJournalComponent_hr_57_Template, 1, 0, "hr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, BookingJournalComponent_div_58_Template, 3, 1, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, BookingJournalComponent_hr_59_Template, 1, 0, "hr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, BookingJournalComponent_div_60_Template, 3, 1, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, BookingJournalComponent_hr_61_Template, 1, 0, "hr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](62, BookingJournalComponent_div_62_Template, 3, 1, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, BookingJournalComponent_hr_63_Template, 1, 0, "hr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "div", 24)(65, "div", 21)(66, "chq-input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_66_listener($event) {
        return ctx.onFormUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "div", 30)(68, "div", 20)(69, "div", 31)(70, "chq-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_70_listener() {
        return ctx.applyFilter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "div", 31)(72, "chq-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_72_listener() {
        return ctx.resetFilter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "mat-sidenav-container", 32)(74, "mat-sidenav", 33, 34)(76, "div", 35)(77, "div", 14)(78, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](80, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "div", 16)(82, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_82_listener() {
        return ctx.draftClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](83, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](84, BookingJournalComponent_div_84_Template, 9, 6, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](85, BookingJournalComponent_dx_draggable_85_Template, 20, 24, "dx-draggable", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "div", 38)(87, "div", 39)(88, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](89, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](63, _c9, ctx.isiOS));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqPermission", "bookingJournal");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqPermission", "bookingJournal");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.totalBooking === 1)("ngIfElse", _r3);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, devextreme_angular__WEBPACK_IMPORTED_MODULE_24__.DxSchedulerComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_26__.DxoAppointmentDraggingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_26__.DxoScrollingComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_27__.DxTemplateDirective, devextreme_angular_ui_draggable__WEBPACK_IMPORTED_MODULE_28__.DxDraggableComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__.ChqButtonComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavContainer, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_13__.HasPermissionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe, src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.XaCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
  styles: ["[_nghost-%COMP%]  .mat-drawer-container {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-drawer-backdrop {\n  position: fixed;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav {\n  position: fixed;\n  width: 300px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav.filter-sidenav {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .mat-drawer-inner-container {\n  overflow-x: hidden;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .filter-container {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action button {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action button .mat-icon {\n  height: 16px;\n  width: 16px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .checkbox {\n  align-items: center !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .input-label {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper {\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper label {\n  min-width: 74px;\n  max-width: 95%;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper label .span-label {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .dropdown-item .checkbox-wrapper label {\n  width: 100%;\n  height: auto;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container hr {\n  margin: 20px 0;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container hr.no-line {\n  border: none;\n  margin: 10px 0;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container mat-slider {\n  width: 100%;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .two-per-row label {\n  min-width: 133px !important;\n  width: auto !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .footer .row {\n  width: 92%;\n}\n\n.calendar-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n.calendar-header-container[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n}\n.calendar-header-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-left: auto;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n\n.approved[_ngcontent-%COMP%], .Approved[_ngcontent-%COMP%] {\n  color: var(--xa-approve);\n}\n\n.PendingApproval[_ngcontent-%COMP%], .pendingapproval[_ngcontent-%COMP%] {\n  color: var(--xa-pending-approval);\n}\n\n.rejected[_ngcontent-%COMP%], .Rejected[_ngcontent-%COMP%], .reject[_ngcontent-%COMP%], .Reject[_ngcontent-%COMP%] {\n  color: var(--xa-red);\n}\n\n.closed[_ngcontent-%COMP%], .Closed[_ngcontent-%COMP%], .Complete[_ngcontent-%COMP%], .complete[_ngcontent-%COMP%] {\n  color: var(--xa-blue);\n}\n\n.draft[_ngcontent-%COMP%], .Draft[_ngcontent-%COMP%] {\n  color: var(--xa-draft);\n}\n\n.noshow[_ngcontent-%COMP%], .NoShow[_ngcontent-%COMP%] {\n  color: var(--xa-noshow);\n}\n\n.repairestimation[_ngcontent-%COMP%], .RepairEstimation[_ngcontent-%COMP%] {\n  color: var(--xa-repair-estimate);\n}\n\n.uploaddocuments[_ngcontent-%COMP%], .UploadDocuments[_ngcontent-%COMP%] {\n  color: var(--xa-upload-document);\n}\n\n.addphotos[_ngcontent-%COMP%], .AddPhotos[_ngcontent-%COMP%], .uploadPhotos[_ngcontent-%COMP%], .UploadPhotos[_ngcontent-%COMP%] {\n  color: var(--xa-upload-photo);\n}\n\n.vehicledetails[_ngcontent-%COMP%], .VehicleDetails[_ngcontent-%COMP%] {\n  color: var(--xa-vehicle-detail);\n}\n\n.total[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  gap: 0.2vw;\n  font-size: 0.8rem;\n}\n@media (max-width: 1250px) {\n  .total[_ngcontent-%COMP%] {\n    top: 100px;\n    width: 100%;\n  }\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 3px 6px;\n  gap: 0.4vw;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n  word-break: break-all;\n  white-space: break-spaces;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .has-background[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-gray);\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 14px;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.has-background) {\n  background: black;\n  color: white;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.has-background[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-gray);\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: calc(50vh - 170px);\n}\n.no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvYm9va2luZy1qb3VybmFsL2Jvb2tpbmctam91cm5hbC9ib29raW5nLWpvdXJuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBUjtBQUVRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBQVo7QUFHUTtFQUNJLGtCQUFBO0FBRFo7QUFJUTtFQUNJLDJCQUFBO0VBQ0Esa0NBQUE7QUFGWjtBQUtRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUhoQjtBQU9nQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTHBCO0FBT29CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFMeEI7QUFhWTtFQUNJLDhCQUFBO0FBWGhCO0FBZ0JvQjtFQUNJLG1CQUFBO0FBZHhCO0FBaUJvQjtFQUNJLGVBQUE7QUFmeEI7QUFpQndCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFmNUI7QUFpQjRCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFmaEM7QUFzQjRCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFwQmhDO0FBMkJZO0VBQ0ksY0FBQTtBQXpCaEI7QUEyQmdCO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUF6QnBCO0FBNkJZO0VBQ0ksV0FBQTtBQTNCaEI7QUErQmdCO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtBQTdCcEI7QUFrQ1E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBaENaO0FBa0NZO0VBQ0ksVUFBQTtBQWhDaEI7O0FBaURBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTlDSjtBQWdESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBOUNSO0FBaURJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBL0NSOztBQW9FQTs7RUFFSSx3QkFBQTtBQWpFSjs7QUFvRUE7O0VBRUksaUNBQUE7QUFqRUo7O0FBb0VBOzs7O0VBSUksb0JBQUE7QUFqRUo7O0FBb0VBOzs7O0VBSUkscUJBQUE7QUFqRUo7O0FBb0VBOztFQUVJLHNCQUFBO0FBakVKOztBQW9FQTs7RUFFSSx1QkFBQTtBQWpFSjs7QUFvRUE7O0VBRUksZ0NBQUE7QUFqRUo7O0FBb0VBOztFQUVJLGdDQUFBO0FBakVKOztBQW9FQTs7OztFQUlJLDZCQUFBO0FBakVKOztBQW9FQTs7RUFFSSwrQkFBQTtBQWpFSjs7QUFxRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBbEVKO0FBb0VJO0VBVEo7SUFVUSxVQUFBO0lBQ0EsV0FBQTtFQWpFTjtBQUNGO0FBbUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQWpFUjtBQW1FUTtFQUNJLHdDQUFBO0FBakVaO0FBb0VRO0VBQ0ksaUJBQUE7QUFsRVo7QUFvRVk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFsRWhCO0FBcUVZO0VBQ0ksd0NBQUE7QUFuRWhCOztBQXlFQTtFQUNJLGtCQUFBO0FBdEVKOztBQXlFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBdEVKO0FBd0VJO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtBQXRFUiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0OjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDUwMSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5tYXQtZHJhd2VyLWJhY2tkcm9wIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1zaWRlbmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgICAgICAmLmZpbHRlci1zaWRlbmF2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJGNjtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKDE1cHggKyAwLjh2dyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDU1cHggKyAwLjh2dyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgICAgIC5jaGVja2JveCB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jdXN0b20tY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tib3gtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGFuLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2JveC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICYubm8tbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXQtc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudHdvLXBlci1yb3cge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTMzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbi8vICAgICAuY2FsZW5kYXItaGVhZGVyLWNvbnRhaW5lciB7XHJcbi8vICAgICAgICAgLmZpbHRlciB7XHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbi8vICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4uY2FsZW5kYXItaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIC8vIGNocS1idXR0b24ge1xyXG4gICAgICAgIC8vICAgICBidXR0b24ge1xyXG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcclxuICAgICAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YXR1cyBjb2xvciBmb3IgZHJhZnQgY3VzdG9tZXJcclxuLmFwcHJvdmVkLFxyXG4uQXBwcm92ZWQge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWFwcHJvdmUpO1xyXG59XHJcblxyXG4uUGVuZGluZ0FwcHJvdmFsLFxyXG4ucGVuZGluZ2FwcHJvdmFsIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1wZW5kaW5nLWFwcHJvdmFsKTtcclxufVxyXG5cclxuLnJlamVjdGVkLFxyXG4uUmVqZWN0ZWQsXHJcbi5yZWplY3QsXHJcbi5SZWplY3Qge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbn1cclxuXHJcbi5jbG9zZWQsXHJcbi5DbG9zZWQsXHJcbi5Db21wbGV0ZSxcclxuLmNvbXBsZXRlIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxufVxyXG5cclxuLmRyYWZ0LFxyXG4uRHJhZnQge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWRyYWZ0KTtcclxufVxyXG5cclxuLm5vc2hvdyxcclxuLk5vU2hvdyB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtbm9zaG93KTtcclxufVxyXG5cclxuLnJlcGFpcmVzdGltYXRpb24sXHJcbi5SZXBhaXJFc3RpbWF0aW9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1yZXBhaXItZXN0aW1hdGUpO1xyXG59XHJcblxyXG4udXBsb2FkZG9jdW1lbnRzLFxyXG4uVXBsb2FkRG9jdW1lbnRzIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS11cGxvYWQtZG9jdW1lbnQpO1xyXG59XHJcblxyXG4uYWRkcGhvdG9zLFxyXG4uQWRkUGhvdG9zLFxyXG4udXBsb2FkUGhvdG9zLFxyXG4uVXBsb2FkUGhvdG9zIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS11cGxvYWQtcGhvdG8pO1xyXG59XHJcblxyXG4udmVoaWNsZWRldGFpbHMsXHJcbi5WZWhpY2xlRGV0YWlscyB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtdmVoaWNsZS1kZXRhaWwpO1xyXG59XHJcblxyXG5cclxuLnRvdGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMnZ3O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgICAgZ2FwOiAwLjR2dztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuXHJcbiAgICAgICAgLmhhcy1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtbGlnaHRlci1ncmF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuXHJcbiAgICAgICAgICAgICY6bm90KC5oYXMtYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuaGFzLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtbGlnaHRlci1ncmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1hcmdpbi1yaWdodCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5uby1kYXRhLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYyg1MHZoIC0gMTcwcHgpO1xyXG5cclxuICAgIC5uby1kYXRhLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 72994:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/repair/booking-journal/booking-preview/booking-preview.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPreviewComponent": () => (/* binding */ BookingPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/route-mapper/reapir-status-mapper */ 17771);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../widgets/chq-toggle/chq-toggle.component */ 65513);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helper/directive/has-permission.directive */ 22406);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
















function BookingPreviewComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
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
    const repairType_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", ctx_r10.iconMapper[repairType_r11.RepairServiceTypeName])("matTooltip", repairType_r11.RepairServiceTypeName);
  }
}
function BookingPreviewComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, BookingPreviewComponent_div_92_ng_container_5_Template, 2, 2, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "repair_type"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.data.RepairServiceTypes);
  }
}
function BookingPreviewComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "stage"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.data.Stage || "-");
  }
}
function BookingPreviewComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 25)(5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
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
const _c0 = function () {
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
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
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
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingPreviewComponent_div_121_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.deleteBooking(ctx_r15.data.BookingGuid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BookingPreviewComponent_div_121_button_2_Template, 5, 4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chqPermission", "newBooking");
  }
}
function BookingPreviewComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 34)(3, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36)(7, "chq-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ToggleChange", function BookingPreviewComponent_div_122_Template_chq_toggle_ToggleChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.onToggleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "arrived"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r8.isArrived)("name", "arrived");
  }
}
function BookingPreviewComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 34)(3, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36)(7, "chq-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ToggleChange", function BookingPreviewComponent_div_123_Template_chq_toggle_ToggleChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onToggleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "no_show"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r9.isNoShow)("name", "noshow");
  }
}
const _c1 = function (a0) {
  return {
    "background-color": a0
  };
};
class BookingPreviewComponent {
  constructor(dialog, dialogRef, data, router, calendarService, commonService) {
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
    };
    // Close dialog ref on route changes
    router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationStart), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.dialogRef.close()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe();
  }
  /**
   * booking url
   */
  get bookingStatusUrl() {
    const {
      StatusName,
      ObjectGuid
    } = this.data;
    let routeToRedirect = src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_0__.ReapirStatusMapper[StatusName?.replace(/\s/g, '')?.toLowerCase()] || src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_0__.ReapirStatusMapper.others;
    routeToRedirect = routeToRedirect.replace('{{repairGUID}}', ObjectGuid);
    return routeToRedirect;
  }
  /**
   * show delete
   */
  get showDelete() {
    if (this.status?.toLowerCase() === 'draft') {
      return true;
    } else if (this.isRepairCreatedFromCase == true && this.status?.toLowerCase() == 'repairestimation') {
      return true;
    }
    return false;
  }
  /**
   * detects changes in input attributes
   * @param changes
   */
  ngOnInit() {
    this.isArrived = this.data.IsArrived;
    this.isNoShow = this.data.IsNoShow;
    this.status = this.data.StatusName;
    this.isRepairCreatedFromCase = this.data.IsRepairCreatedFromCase;
    this.calculateTimeDifference();
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === 'Escape') {
        this.dialogRef.close({
          'success': this.changesMade,
          'type': 'refresh'
        });
      }
    });
    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close({
        'success': this.changesMade,
        'type': 'refresh'
      });
    });
  }
  /**
  * detects changes in input attributes
  * @param changes
  */
  ngOnChanges() {
    this.isArrived = this.data.IsArrived;
    this.isNoShow = this.data.IsNoShow;
    this.status = this.data.StatusName;
    this.isRepairCreatedFromCase = this.data.IsRepairCreatedFromCase;
    this.calculateTimeDifference();
  }
  calculateTimeDifference() {
    const currentDate = new Date();
    const bookingInDate = this.data.StartDate;
    const canActivateDate = new Date(bookingInDate.getTime() - 30 * 60000);
    if (currentDate > canActivateDate) {
      this.isArrivedVisible = true;
    }
    if (currentDate > bookingInDate) {
      this.isNoShowVisible = true;
      this.isArrivedVisible = false;
    }
  }
  deleteBooking(id) {
    this.commonService.openDeleteDialog().afterClosed().subscribe(data => {
      if (data) {
        this.commonService.showLoading();
        this.calendarService.deleteBooking(id).subscribe({
          next: () => {
            this.dialogRef.close({
              'success': true,
              'type': 'delete',
              'id': id
            });
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  onToggleChange(e) {
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
    const patchValue = [{
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
      next: () => {
        this.commonService.hideLoading();
        this.changesMade = true;
      },
      error: () => {
        e.cancel = true;
      }
    });
  }
  joinAssignees(Assignees) {
    return Assignees?.map(x => x.AssigneeName).join(', ');
  }
  closeDialog() {
    this.dialogRef.close({
      'success': this.changesMade,
      'type': 'refresh'
    });
  }
}
BookingPreviewComponent.ɵfac = function BookingPreviewComponent_Factory(t) {
  return new (t || BookingPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
};
BookingPreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: BookingPreviewComponent,
  selectors: [["booking-preview"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  decls: 124,
  vars: 81,
  consts: [[1, "dialog-with-header", "large-width"], [1, "header", 3, "ngStyle"], [1, "title"], [1, "action"], ["color", "white", 3, "svgIcon", "click"], [1, "mat-typography"], [1, "booking-preview-wrapper"], [1, "booking-preview-content"], [1, "section-header"], [1, "section-title"], ["color", "black-medium", 3, "svgIcon"], [1, "detail-row"], [1, "detail-col"], [1, "info-content", "short-text"], [1, "info-content"], [4, "ngIf", "ngIfElse"], ["emptyAssignee", ""], ["class", "detail-row", 4, "ngIf"], ["class", "detail-col", 4, "ngIf"], [1, "booking-preview-action"], [1, "section-header", "transparent"], ["class", "button button-outline", 3, "routerLink", "queryParams", 4, "chqPermission"], ["inner", "", 1, "info-content"], [4, "ngFor", "ngForOf"], [3, "svgIcon", "matTooltip"], [1, "icon-container"], ["matTooltipPosition", "above", 1, "icon-wrapper", 3, "matTooltip"], [3, "svgIcon"], [1, "button", "button-outline", 3, "routerLink", "queryParams"], ["aria-hidden", " false", "aria-label", "edit icon", 3, "svgIcon"], ["class", "action-btn", 4, "ngIf"], [1, "action-btn"], ["class", "button-outline-danger", 3, "click", 4, "chqPermission"], [1, "button-outline-danger", 3, "click"], [1, "toggle"], [1, "label-toggle"], [1, "toggle-button"], [3, "checked", "name", "ToggleChange"]],
  template: function BookingPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "button")(7, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingPreviewComponent_Template_mat_icon_click_7_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-content", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 12)(25, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 11)(31, "div", 12)(32, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 8)(38, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 11)(44, "div", 12)(45, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 11)(51, "div", 12)(52, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 11)(58, "div", 12)(59, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 11)(65, "div", 12)(66, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 8)(72, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 11)(78, "div", 12)(79, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](81, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, BookingPreviewComponent_ng_container_82_Template, 3, 1, "ng-container", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, BookingPreviewComponent_ng_template_83_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 11)(86, "div", 12)(87, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, BookingPreviewComponent_div_92_Template, 6, 4, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, BookingPreviewComponent_div_93_Template, 7, 4, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 11)(95, "div", 12)(96, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](98, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](101, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 11)(103, "div", 12)(104, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](106, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](109, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, BookingPreviewComponent_div_111_Template, 7, 5, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 19)(113, "div", 20)(114, "div", 9)(115, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](117, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 11)(119, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, BookingPreviewComponent_a_120_Template, 4, 6, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](121, BookingPreviewComponent_div_121_Template, 3, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, BookingPreviewComponent_div_122_Template, 8, 5, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, BookingPreviewComponent_div_123_Template, 8, 5, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](84);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_3__.ChqToggleComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_4__.HasPermissionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".booking-preview-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 16px 25px;\n  gap: 25px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 calc(100% - 140px);\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  color: var(--xa-dark-gray);\n  gap: 5px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--xa-black);\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 140px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  width: 100%;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-col[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-col[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex: 1 1 auto;\n}\n.toggle[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.button-outline[_ngcontent-%COMP%], .button-outline-danger[_ngcontent-%COMP%] {\n  width: 155px !important;\n  height: 33px !important;\n  justify-content: flex-start !important;\n  filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n}\n.button-outline[_ngcontent-%COMP%]:hover, .button-outline-danger[_ngcontent-%COMP%]:hover {\n  filter: drop-shadow(10px 1px 3px rgba(96, 108, 128, 0.05));\n}\n\na.button-outline[_ngcontent-%COMP%] {\n  height: 11px !important;\n  width: 128px !important;\n  text-decoration: none;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.icon-wrapper[_ngcontent-%COMP%] {\n  background: var(--xa-lighter-gray);\n  padding: 6px 4px;\n  height: 25px;\n  width: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvYm9va2luZy1qb3VybmFsL2Jvb2tpbmctcHJldmlldy9ib29raW5nLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUNSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtBQUNaO0FBRVE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBQVo7QUFJSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFGUjtBQUtJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFIUjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUpKO0FBTUk7RUFDSSxjQUFBO0FBSlI7QUFNUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsUUFBQTtBQUxaOztBQVVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVBKO0FBU0k7RUFDSSxlQUFBO0FBUFI7O0FBV0E7O0VBRUksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EseURBQUE7QUFSSjtBQVVJOztFQUNJLDBEQUFBO0FBUFI7O0FBV0E7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFSSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBUEo7O0FBU0E7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTkoiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va2luZy1wcmV2aWV3LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDE2cHggMjVweDtcclxuICAgIGdhcDogMjVweDtcclxuXHJcbiAgICAuYm9va2luZy1wcmV2aWV3LWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMSAxIGNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogMTZweDtcclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mby1jb250ZW50IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJvb2tpbmctcHJldmlldy1hY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMSAxIDE0MHB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXRhaWwtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5kZXRhaWwtY29sIHtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAvL2NvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuICAgIC50b2dnbGUtYnV0dG9uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24tb3V0bGluZSxcclxuLmJ1dHRvbi1vdXRsaW5lLWRhbmdlciB7XHJcbiAgICB3aWR0aDogMTU1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggM3B4IHJnYmEoOTYsIDEwOCwgMTI4LCAwLjA1KSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxMHB4IDFweCAzcHggcmdiYSg5NiwgMTA4LCAxMjgsIDAuMDUpKTtcclxuICAgIH1cclxufVxyXG5cclxuYS5idXR0b24tb3V0bGluZSB7XHJcbiAgICBoZWlnaHQ6IDExcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMjhweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbi5pY29uLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtbGlnaHRlci1ncmF5KTtcclxuICAgIHBhZGRpbmc6IDZweCA0cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 94526:
/*!*********************************************************************!*\
  !*** ./src/app/modules/repair/lounge-list/lounge-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoungeListComponent": () => (/* binding */ LoungeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Outbound/outbound.service */ 33938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widgets/chq-customloader/chq-customloader.component */ 48262);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);













function LoungeListComponent_div_7_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function LoungeListComponent_div_7_img_5_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.avatar = "");
    })("load", function LoungeListComponent_div_7_img_5_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.orgImageLoading = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.orgLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function LoungeListComponent_div_7_ng_template_6_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.orgName);
  }
}
function LoungeListComponent_div_7_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LoungeListComponent_div_7_ng_template_6_label_0_Template, 2, 1, "label", 25);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.orgName);
  }
}
function LoungeListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "a", 16)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoungeListComponent_div_7_img_5_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoungeListComponent_div_7_ng_template_6_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "chq-customloader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.orgLogoUrl)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showLoading", ctx_r0.orgImageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 7, "outbound_dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 9, "last_refreshed"), ": ", ctx_r0.LastRefreshed, " ");
  }
}
function LoungeListComponent_mat_card_9_th_30_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", ctx_r14.jobIconDictionary[repair_r15.Name] ? ctx_r14.jobIconDictionary[repair_r15.Name] : "gears");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("color", "black");
  }
}
function LoungeListComponent_mat_card_9_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoungeListComponent_mat_card_9_th_30_button_5_Template, 2, 2, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "repair_types"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r10.RepairServiceTypes);
  }
}
function LoungeListComponent_mat_card_9_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 52)(1, "div", 53)(2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", job_r17.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](job_r17.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", job_r17.CompletePercentage, "%");
  }
}
function LoungeListComponent_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "table", 31)(5, "tr", 32)(6, "th", 33)(7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 33)(13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 33)(19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 33)(25, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LoungeListComponent_mat_card_9_th_30_Template, 6, 4, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th", 33)(32, "div", 37)(33, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 39)(38, "div", 40)(39, "div", 41)(40, "table", 42)(41, "tr", 43)(42, "th", 44)(43, "div", 45)(44, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function LoungeListComponent_mat_card_9_Template_img_load_44_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const item_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](item_r10.ImageUrlFirstLoad = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "chq-customloader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, LoungeListComponent_mat_card_9_th_46_Template, 6, 4, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "th", 44)(48, "div", 45)(49, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function LoungeListComponent_mat_card_9_Template_img_load_49_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const item_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](item_r10.ImageUrlLastLoad = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "chq-customloader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", item_r10.OutboundStatus === null || item_r10.OutboundStatus === "Repair Not Started" || item_r10.OutboundStatus === "Repair In Progress" ? "card-gray" : item_r10.OutboundStatus === "Ready To PickUp" ? "card-yellow" : item_r10.OutboundStatus === "Picked Up" ? "card-green" : "card-gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 17, "work_provider"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.VehicleInsurerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 19, "driver_owner_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 21, "vehicle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", item_r10.VehicleMake, " ", item_r10.VehicleName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 23, "plate_number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.VehicleLicensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r10.RepairServiceTypes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 27, item_r10.OutboundStatus.split(" ").join(""))));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r10.ImageUrlFirst === null ? "assets/img/front-left.png" : item_r10.ImageUrlFirst, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showLoading", item_r10.ImageUrlFirstLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r10.Jobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r10.ImageUrlLast === null ? "assets/img/front-left.png" : item_r10.ImageUrlLast, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showLoading", item_r10.ImageUrlLastLoad);
  }
}
function LoungeListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
  }
}
class LoungeListComponent {
  /**
     * Creates an instance.
     * @constructor
     * @param {DatePipe} datePipe
     * @param {CommonService} CommonService
     * @param {OutboundService} OutboundService
     */
  constructor(datePipe, commonService, OutboundService, document) {
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
    this.i18n = this.commonService.geti18nInfo();
    this.commonService.userProfileData.subscribe({
      next: res => {
        if (res) {
          this.orgLogoUrl = res?.data.organizationDetail?.logoUrl;
          this.orgName = res?.data.organizationDetail?.name;
          if (!this.orgLogoUrl) {
            this.orgImageLoading = false;
          }
        }
      }
    });
  }
  /**
   * ngOnInit
   */
  ngOnInit() {
    this.chkScreenMode();
    this.elem = document.documentElement;
    this.getOutboundData(true);
  }
  /**
   * getOutboundData
   */
  getOutboundData(flag) {
    this.CallingAPI = true;
    if (flag) this.commonService.showLoading();
    const StartDate = new Date(new Date().toDateString()).toISOString();
    const EndDate = new Date(new Date(new Date().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
    const query = `$filter=BookingEndDate ge ${StartDate} and BookingEndDate lt ${EndDate} or PickUpDate ge ${StartDate} and PickUpDate lt ${EndDate}`;
    this.subs.push(this.OutboundService.getDeparturesDetails(query).subscribe({
      next: data => {
        this.CallingAPI = false;
        this.outboundData = [];
        data.value.forEach(item => {
          if (item?.Jobs?.length > 0) {
            if (item.PickUpDate !== null) {
              if (!(new Date(StartDate) < new Date(item.PickUpDate) && new Date(EndDate) > new Date(item.PickUpDate))) {
                return;
              }
            }
            item['ImageUrlFirstLoad'] = true;
            item['ImageUrlLastLoad'] = true;
            this.outboundData.push(item);
          }
        });
        this.LastRefreshed = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
        this.commonService.hideLoading();
        clearTimeout(this.currentDateTimeout);
        this.currentDateTimeout = setTimeout(() => {
          this.updateCurrentDateTime();
        }, 60 * 1000);
        setTimeout(() => {
          const nodes = document.querySelectorAll('.card');
          if (this.FocusedRepairIndex == 0) {
            document.querySelector('.lounge-content').scrollTop = 0;
          } else {
            nodes[this.FocusedRepairIndex].scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 500);
        clearTimeout(this.loungeTimeout);
        this.loungeTimeout = setTimeout(() => {
          this.getOutboundData(false);
        }, 300000);
      },
      error: error => {
        this.CallingAPI = false;
        clearTimeout(this.loungeTimeout);
      }
    }));
  }
  /**
   * updateCurrentDateTime
   */
  updateCurrentDateTime() {
    this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
    this.autoScrollLastVisibleNode();
    clearTimeout(this.currentDateTimeout);
    this.currentDateTimeout = setTimeout(() => {
      this.updateCurrentDateTime();
    }, 60 * 1000);
  }
  /**
   * autoScrollLastVisibleNode
   */
  autoScrollLastVisibleNode() {
    const container = document.querySelector('.lounge-content');
    const nodes = document.querySelectorAll('.card');
    if (container === null || container === undefined || nodes === null || nodes === undefined) {
      return;
    }
    if (this.FocusedRepairIndex == nodes.length - 1) {
      this.FocusedRepairIndex = 0;
      container.scrollTop = 0;
      return;
    }
    let visibleHeight = 0;
    const totalHeight = container.clientHeight;
    for (let i = this.FocusedRepairIndex; i < nodes.length; i++) {
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
  fullscreenmodes(event) {
    this.chkScreenMode();
  }
  /**
   * check screen mode
   */
  chkScreenMode() {
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
  openFullscreen() {
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
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    clearTimeout(this.loungeTimeout);
  }
}
LoungeListComponent.ɵfac = function LoungeListComponent_Factory(t) {
  return new (t || LoungeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};
LoungeListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: LoungeListComponent,
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
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService])],
  decls: 15,
  vars: 8,
  consts: [[1, "page-container", "lounge-list-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "lounge-list-header"], [1, "header-content", "fx-row", "justify-space-between", "align-center"], [1, "last-updated"], [3, "buttonModel", "click"], ["class", "fullscreen", 4, "ngIf"], [1, "lounge-content"], ["class", "card block", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], [1, "fullscreen"], [1, "lounge-header", "fx-0", "fx-col", "justify-center"], [1, "lounge-header-content", "align-center", "fx-row"], ["routerLink", "/", 1, "xa-logo-wrapper"], [1, "menu-image"], [3, "src", "error", "load", 4, "ngIf", "ngIfElse"], ["name", ""], [3, "showLoading"], [1, "lounge-title-wrapper"], [1, "lounge-date-wrapper"], [1, "last-updated", "fx-0", "flex", "justify-end"], [3, "src", "error", "load"], ["class", "org-name", 4, "ngIf"], [1, "org-name"], [1, "card", "block", 3, "ngClass"], [1, "card-container"], [1, "card-header"], [1, "card-header-container", "align-center", "fx-row"], [1, "card-head-table"], [1, "head-row"], [1, "head-item"], [1, "header-title"], [1, "header-content-data"], ["class", "head-item", 4, "ngIf"], [1, "repair-state"], [1, "repair-state-btn"], [1, "card-content"], [1, "job-list-container", "fx-row", "align-center"], [1, "jobs-list"], [1, "card-table"], [1, "card-row"], [1, "card-job"], [1, "img-container"], ["alt", "", 3, "src", "load"], ["class", "card-job text-white", 4, "ngFor", "ngForOf"], [1, "fx-row", 2, "display", "flex !important", "padding-top", "5px", "flex-wrap", "wrap"], ["class", "outbound-icon-btn", 4, "ngFor", "ngForOf"], [1, "outbound-icon-btn"], [3, "svgIcon"], [1, "card-job", "text-white"], [1, "card-job-content", "block"], [1, "job-name"], [1, "job-percent"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
  template: function LoungeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "chq-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoungeListComponent_Template_chq_button_click_6_listener() {
        return ctx.openFullscreen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoungeListComponent_div_7_Template, 17, 11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LoungeListComponent_mat_card_9_Template, 51, 29, "mat-card", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LoungeListComponent_div_10_Template, 9, 6, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 6, "last_refreshed"), ": ", ctx.LastRefreshed, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.FullscreenButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFullScreen);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.outboundData);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.outboundData.length === 0 && !ctx.CallingAPI);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__.ChqButtonComponent, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_4__.CustomloaderComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.LowerCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".lounge-list-container[_ngcontent-%COMP%] {\n  background: var(--xa-popup-light-gray);\n  height: calc(100vh - 76px - (58px + 1.6vw));\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  overflow-y: auto;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n  background-color: rgba(26, 34, 51, 0.0509803922);\n  border-radius: 10px;\n  width: calc(98vw - 100px);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%] {\n  text-align: left;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .header-content-data[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  font-size: 16px;\n  font-weight: 700;\n  display: inline-block;\n  word-break: break-all;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  margin: 0px 2px;\n  max-width: 45px;\n  max-height: 35px;\n  background-color: rgba(31, 32, 35, 0.0784313725);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .repair-state[_ngcontent-%COMP%]   .repair-state-btn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  font-family: \"Inter\";\n  font-style: normal;\n  pointer-events: none;\n  min-width: 168px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .repair-state[_ngcontent-%COMP%]   .lap-btn[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n  border: 2px solid var(--xa-white);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 0;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  position: relative;\n  overflow: hidden;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .card-job-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  padding: 10px 9px;\n  height: 105px;\n  width: 128px;\n  border-radius: 10px;\n  border: 2px solid var(--xa-white);\n  font-size: 12px;\n  font-weight: 400;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .card-job-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  word-break: break-all;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 118px;\n  width: 148px;\n  border-radius: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 148px;\n  height: 118px;\n  border-radius: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-move-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%] {\n  border: 1px solid #03A31B;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #1B9235;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%] {\n  border: 1px solid #D2A120;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #D2A600;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%] {\n  border: 1px solid #1a2233;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%] {\n  background-color: #1B03A3;\n  color: var(--xa-white);\n  min-height: 81px;\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: transparent;\n  padding: 0px 15px 0px 40px;\n  height: 100%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .lounge-title-wrapper[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  position: relative;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  max-height: 60px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 14px;\n  color: var(--xa-black-dark);\n  padding: 8px 4px;\n  text-align: center;\n  border: 1px solid var(--xa-light-gray);\n  border-radius: 8px;\n  display: flex;\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: var(--xa-white);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvbG91bmdlLWxpc3QvbG91bmdlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLDJDQUFBO0FBQ0o7QUFHUTtFQUNJLGVBQUE7QUFEWjtBQUdZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEaEI7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9RO0VBQ0ksZUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUxaO0FBVWdCO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0FBUnBCO0FBVW9CO0VBQ0ksOEJBQUE7QUFSeEI7QUFVd0I7RUFDSSxXQUFBO0FBUjVCO0FBVTRCO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVJoQztBQVVnQztFQUNJLGdCQUFBO0FBUnBDO0FBVW9DO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBUnhDO0FBV29DO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBVHhDO0FBYW9DO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0FBWHhDO0FBYXdDO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFYNUM7QUFpQndDO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFmNUM7QUFrQndDO0VBQ0ksK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBaEI1QztBQXlCZ0I7RUFDSSxnQ0FBQTtBQXZCcEI7QUF5Qm9CO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUF2QnhCO0FBeUJ3QjtFQUNJLGlCQUFBO0FBdkI1QjtBQTJCZ0M7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUF6QnBDO0FBMkJvQztFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXpCeEM7QUEyQndDO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXpCNUM7QUEyQjRDO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQXpCaEQ7QUE2QndDO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBM0I1QztBQTZCNEM7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBM0JoRDtBQW9Dd0I7RUFDSSw2QkFBQTtBQWxDNUI7QUF5Q1E7RUFDSSxhQUFBO0FBdkNaO0FBeUNRO0VBQ0kseUJBQUE7QUF2Q1o7QUF3Q1k7RUFDSSw2QkFBQTtBQXRDaEI7QUF5Q1k7RUFDSSx5QkFBQTtBQXZDaEI7QUEyQ1E7RUFDSSx5QkFBQTtBQXpDWjtBQTBDWTtFQUNJLDZCQUFBO0FBeENoQjtBQTJDWTtFQUNJLHlCQUFBO0FBekNoQjtBQTZDUTtFQUNJLHlCQUFBO0FBM0NaO0FBNENZO0VBQ0ksNkJBQUE7QUExQ2hCO0FBNkNZO0VBQ0kseUJBQUE7QUEzQ2hCO0FBK0NRO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQTdDWjtBQStDWTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7QUE3Q2hCO0FBbURRO0VBQ0ksZUFBQTtBQWpEWjtBQW9EUTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFsRFo7QUFvRFk7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBbERoQjtBQW9EZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFsRHBCO0FBcURnQjtFQUNJLHFCQUFBO0FBbkRwQjtBQXFEb0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbkR4QjtBQXFEd0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFuRDVCO0FBc0R3QjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBcEQ1QiIsInNvdXJjZXNDb250ZW50IjpbIi5sb3VuZ2UtbGlzdC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NnB4IC0gKGNhbGMoNThweCArIDEuNnZ3KSkpO1xyXG5cclxuICAgIC5sb3VuZ2UtbGlzdC1oZWFkZXIge1xyXG5cclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJ2aCAxdnc7XHJcblxyXG4gICAgICAgICAgICAubGFzdC11cGRhdGVkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAubG91bmdlLWNvbnRlbnQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnZoIDF2dztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMjIzMzBEO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDJ2dyAtIDEwMHB4KTtcclxuICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAuY2FyZC1jb250YWluZXJ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC1oZWFkLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGVhZC1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1jb250ZW50LWRhdGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm91dGJvdW5kLWljb24tYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMDIzMTQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpci1zdGF0ZXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpci1zdGF0ZS1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFwLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuam9iLWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2JzLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGFibGUge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC1yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLWpvYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtam9iLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9iLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9icy1tb3ZlLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZ3JlZW4ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNBMzFCO1xyXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50eyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCOTIzNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jYXJkLXllbGxvdyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkExMjA7XHJcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnR7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QyQTYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jYXJkLWdyYXkge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWEyMjMzO1xyXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50eyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzc3RDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vLWRhdGEtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBcclxuICAgICAgICAgICAgLm5vLWRhdGEtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZ1bGxzY3JlZW4ge1xyXG4gICAgICAgIC5sYXN0LXVwZGF0ZWQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJ2aCAxdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG91bmdlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjAzQTM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgxcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5sb3VuZ2UtaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmxvdW5nZS10aXRsZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC54YS1sb2dvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZW51LWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcmctbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 79666:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/repair/outbound/check-in-task/check-in-task.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckInTaskComponent": () => (/* binding */ CheckInTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/Outbound/outbound.service */ 33938);
/* harmony import */ var src_app_dialogs_comment_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/comment-dialog/comment-dialog.component */ 8358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














function CheckInTaskComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "label_mandatory"));
  }
}
function CheckInTaskComponent_tr_29_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CheckInTaskComponent_tr_29_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CheckInTaskComponent_tr_29_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CheckInTaskComponent_tr_29_span_6_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r11 = ctx.$implicit;
    const ind_r12 = ctx.index;
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", repair_r11.repairServiceTypeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ind_r12 !== task_r3.repairJobMappings.length - 1);
  }
}
function CheckInTaskComponent_tr_29_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, task_r3.completedDate, "dd/MM/yyyy hh:mm:ss"));
  }
}
function CheckInTaskComponent_tr_29_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 40);
  }
}
function CheckInTaskComponent_tr_29_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 41);
  }
}
function CheckInTaskComponent_tr_29_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 42);
  }
}
function CheckInTaskComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 21)(1, "td", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CheckInTaskComponent_tr_29_span_4_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CheckInTaskComponent_tr_29_span_6_Template, 3, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 27)(8, "div", 23)(9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CheckInTaskComponent_tr_29_div_11_Template, 3, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 30)(13, "span", 23)(14, "div", 31)(15, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckInTaskComponent_tr_29_Template_mat_icon_click_15_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const task_r3 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.showCommentDialog(task_r3 == null ? null : task_r3.notes, task_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CheckInTaskComponent_tr_29_div_16_Template, 1, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 34)(18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CheckInTaskComponent_tr_29_span_19_Template, 1, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CheckInTaskComponent_tr_29_span_20_Template, 1, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r3.isMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", task_r3.repairJobMappings);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r3.modifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r3.completedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r3 == null ? null : task_r3.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r3.completedBy !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r3.completedBy === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 10, "task_done"), " ");
  }
}
function CheckInTaskComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "no_task_found"));
  }
}
class CheckInTaskComponent {
  /**
  * constructor
  */
  constructor(dialog, dialogRef, data, router, OutboundService, commonService) {
    this.dialog = dialog;
    this.dialogRef = dialogRef;
    this.data = data;
    this.OutboundService = OutboundService;
    this.commonService = commonService;
    this.subs = [];
    this.ListOfRepairs = [];
    this.CallingAPI = false;
    this.allMandatoryTasks = 0;
    // Close dialog ref on route changes
    router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.dialogRef.close()), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe();
  }
  /**
  * ngOnInit
  */
  ngOnInit() {
    this.getTaskDetails();
  }
  /**
  * getTaskDetails
  */
  getTaskDetails() {
    const repairId = this.data.repair.RepairGuid;
    const jobId = this.data.job.JobGuid;
    this.CallingAPI = true;
    this.commonService.showLoading();
    this.subs.push(this.OutboundService.getTaskDetails(repairId, jobId).subscribe({
      next: data => {
        this.ListOfRepairs = data;
        this.allMandatoryTasks = this.ListOfRepairs.filter(task => {
          return task.isMandatory === true;
        }).length;
        this.CallingAPI = false;
        this.commonService.hideLoading();
      },
      error: error => {
        this.CallingAPI = false;
      }
    }));
  }
  /**
   * insert/update comment
   */
  showCommentDialog(currentNote, currentJob) {
    let note = '';
    if (currentNote) {
      note = currentNote;
    }
    this.dialog.open(src_app_dialogs_comment_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CommentDialogComponent, {
      data: {
        notes: note,
        hideUpdate: true
      },
      panelClass: 'comment-modalbox',
      autoFocus: false
    }).afterClosed().subscribe({
      next: data => {
        if (!data) {
          return;
        }
        if (data.delete) {
          data.comment = '';
        }
        currentJob.isNoteLoading = true;
      }
    });
  }
  /**
     * ngOnDestroy
     */
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
CheckInTaskComponent.ɵfac = function CheckInTaskComponent_Factory(t) {
  return new (t || CheckInTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
};
CheckInTaskComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CheckInTaskComponent,
  selectors: [["app-check-in-task"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__.OutboundService])],
  decls: 31,
  vars: 20,
  consts: [[1, "dialog-with-header"], [1, "header"], [1, "title"], [1, "action"], [1, "close-dailog-btn"], ["color", "white", 3, "svgIcon", "mat-dialog-close"], [1, "mat-content-dialog"], [1, "repair-card", "border-10"], [1, "repair-table-header"], ["class", "mandatory-div", 4, "ngIf"], [1, "repair-dialog-table"], [1, "task-hearder"], [1, "task-hearder-item", "task_Name_column"], [1, "task-hearder-item", "repair_type_column"], [1, "task-hearder-item", "modified_column"], [1, "task-hearder-item", "note_column"], [1, "task-hearder-item", "status_column"], ["class", "task-data-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mandatory-div"], [1, "mandatory-text", "text-danger"], [1, "task-data-row"], [1, "task-data-item", "task_Name_column"], [1, "task-data"], ["class", "text-danger", 4, "ngIf"], [1, "task-data-item", "repair_type_column"], ["class", "task-data", 4, "ngFor", "ngForOf"], [1, "task-data-item", "modified_column"], [1, "modified_name"], ["class", "span-date", 4, "ngIf"], [1, "task-data-item", "note_column"], [1, "comment-div"], ["aria-hidden", "false", "aria-label", "unchecked icon", 3, "svgIcon", "click"], ["class", "red-icon", 4, "ngIf"], [1, "task-data-item", "status_column"], [1, "col-2", "relate-spinner"], ["class", "checked", 4, "ngIf"], ["class", "circle", 4, "ngIf"], [1, "text-danger"], [1, "span-date"], [1, "red-icon"], [1, "checked"], [1, "circle"], [1, "not-found-task"]],
  template: function CheckInTaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-dialog-content", 6)(8, "mat-card", 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CheckInTaskComponent_div_10_Template, 4, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 10)(12, "tr", 11)(13, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "table", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, CheckInTaskComponent_tr_29_Template, 23, 12, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CheckInTaskComponent_div_30_Template, 4, 3, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.job.JobName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "cross");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.allMandatoryTasks > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 10, "item_name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 12, "repair_type"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 14, "modified_by"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 16, "notes"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 18, "done"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ListOfRepairs);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ListOfRepairs.length === 0 && !ctx.CallingAPI);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: [".dialog-with-header[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 1015px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #4c6bd2;\n  color: var(--xa-white);\n}\n.dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .close-dailog-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.4784313725);\n  width: 40px;\n  height: 40px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n  height: 30px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   .ml-25[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n  vertical-align: sub;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n  height: 30px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .task-hearder-item[_ngcontent-%COMP%] {\n  text-align: left;\n  color: var(--xa-dark-gray);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 35px;\n  letter-spacing: -0.25px;\n  height: 36px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .task_Name_column[_ngcontent-%COMP%] {\n  width: 314px;\n  padding-left: 25px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .repair_type_column[_ngcontent-%COMP%] {\n  width: 184px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .modified_column[_ngcontent-%COMP%] {\n  width: 136px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .note_column[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .status_column[_ngcontent-%COMP%] {\n  width: 114px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  height: 61px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%]   .task-data[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%]   .task-data[_ngcontent-%COMP%]   .comment-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%]   .task-data[_ngcontent-%COMP%]   .comment-div[_ngcontent-%COMP%]   .red-icon[_ngcontent-%COMP%] {\n  height: 7px;\n  width: 7px;\n  position: absolute;\n  background: var(--xa-red);\n  top: -1px;\n  left: 12px;\n  border-radius: 50%;\n  border: 2px solid var(--xa-white);\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task_Name_column[_ngcontent-%COMP%] {\n  width: 314px;\n  padding-left: 25px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .repair_type_column[_ngcontent-%COMP%] {\n  width: 184px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .modified_column[_ngcontent-%COMP%] {\n  width: 136px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .note_column[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .status_column[_ngcontent-%COMP%] {\n  width: 114px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--xa-white-light);\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: var(--xa-table-light);\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .not-found-task[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--xa-gray);\n  margin-top: 20px;\n}\n\n.ml-25[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n\n.round[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.checked[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--xa-repair-header);\n  background-color: var(--xa-repair-header);\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  cursor: pointer;\n  margin-right: 4px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-light-radio-gray);\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  cursor: pointer;\n  margin-right: 4px;\n}\n\n.checked[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n}\n\n.checked[_ngcontent-%COMP%]:after {\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 10px;\n  border: solid var(--xa-white);\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.relate-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.mandatory-div[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.mandatory-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  padding-left: 20px;\n  line-height: 20px;\n}\n\n.span-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 14px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvb3V0Ym91bmQvY2hlY2staW4tdGFzay9jaGVjay1pbi10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQUNSO0FBRVk7RUFDSSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBaEI7QUFTWTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQVBoQjtBQVNnQjtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBwQjtBQVdZO0VBQ0kseUJBQUE7QUFUaEI7QUFXZ0I7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFUcEI7QUFXb0I7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFUeEI7QUFXd0I7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFUNUI7QUFZd0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFWNUI7QUFhd0I7RUFDSSxZQUFBO0FBWDVCO0FBY3dCO0VBQ0ksWUFBQTtBQVo1QjtBQWV3QjtFQUNJLFdBQUE7QUFiNUI7QUFnQndCO0VBQ0ksWUFBQTtBQWQ1QjtBQW9CWTtFQUNJLHlCQUFBO0FBbEJoQjtBQW9CZ0I7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFsQnBCO0FBb0JvQjtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFsQnhCO0FBc0I2QjtFQUNHLFlBQUE7RUFDQSxXQUFBO0FBcEJoQztBQXVCNkI7RUFDRyxrQkFBQTtBQXJCaEM7QUFzQmdDO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBcEJwQztBQTBCb0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUF4QnhCO0FBMkJvQjtFQUNJLFlBQUE7QUF6QnhCO0FBNEJvQjtFQUNJLFlBQUE7QUExQnhCO0FBNkJvQjtFQUNJLFdBQUE7QUEzQnhCO0FBOEJvQjtFQUNJLFlBQUE7QUE1QnhCO0FBZ0NnQjtFQUNJLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTlCcEI7QUFpQ2dCO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBL0JwQjtBQW9DUTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFsQ1o7O0FBdUNBO0VBQ0ksaUJBQUE7QUFwQ0o7O0FBdUNBO0VBQ0ksa0JBQUE7QUFwQ0o7O0FBeUNFO0VBQ0Usb0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdENKOztBQXlDQTtFQUNJLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUF0Q0o7O0FBeUNBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxnQkFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBdENKOztBQXlDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBdENKIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy13aXRoLWhlYWRlcntcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAxNXB4O1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzZiZDI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuXHJcbiAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgIC5jbG9zZS1kYWlsb2ctYnRue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jb250ZW50LWRpYWxvZ3tcclxuXHJcbiAgICAgICAgLnJlcGFpci1jYXJkIHtcclxuXHJcbiAgICAgICAgICAgIC50YXNrLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmZjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAubWwtMjUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJlcGFpci10YWJsZS1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZmO1xyXG5cclxuICAgICAgICAgICAgICAgIC5yZXBhaXItZGlhbG9nLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGFzay1oZWFyZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhc2staGVhcmRlci1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFza19OYW1lX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpcl90eXBlX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGlmaWVkX2NvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub3RlX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhdHVzX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJlcGFpci1kaWFsb2ctdGFibGUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAudGFzay1kYXRhLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYxcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50YXNrLWRhdGEtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFzay1kYXRhIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29tbWVudC1kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGFza19OYW1lX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmVwYWlyX3R5cGVfY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTg0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubW9kaWZpZWRfY29sdW1uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdGVfY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXNfY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50YXNrLWRhdGEtcm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGFzay1kYXRhLXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdGFibGUtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ub3QtZm91bmQtdGFzayB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ncmF5KTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tbC0yNXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ucm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuY2hlY2tlZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtcmVwYWlyLWhlYWRlcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZXBhaXItaGVhZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5jaXJjbGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtbGlnaHQtcmFkaW8tZ3JheSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uY2hlY2tlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY2hlY2tlZDphZnRlciB7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIHZhcigtLXhhLXdoaXRlKTtcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5yZWxhdGUtc3Bpbm5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFuZGF0b3J5LWRpdntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYW5kYXRvcnktdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnNwYW4tZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 10250:
/*!************************************************************************!*\
  !*** ./src/app/modules/repair/outbound/outbound/outbound.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboundComponent": () => (/* binding */ OutboundComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Outbound/outbound.service */ 33938);
/* harmony import */ var _check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-in-task/check-in-task.component */ 79666);
/* harmony import */ var src_app_dialogs_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialogs/notify-dialog/notify-dialog.component */ 15058);
/* harmony import */ var src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/route-mapper/reapir-status-mapper */ 17771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-customloader/chq-customloader.component */ 48262);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! devextreme-angular */ 30763);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





















function OutboundComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_button_19_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.changeCurrentDate(day_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", day_r3.getDay() === ctx_r0.currentWeek.getDay() ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 3, day_r3, "dd EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](6, 6, day_r3, "MMM"));
  }
}
function OutboundComponent_div_21_mat_card_20_th_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const assignee_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](assignee_r19.AssigneeName);
  }
}
function OutboundComponent_div_21_mat_card_20_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th")(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, OutboundComponent_div_21_mat_card_20_th_27_div_5_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, "assigned"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", repairs_r7.Assignees);
  }
}
function OutboundComponent_div_21_mat_card_20_th_36_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 5, type_r22.Name === null ? "Others" : type_r22.Name)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", ctx_r21.jobIconDictionary[type_r22.Name] ? ctx_r21.jobIconDictionary[type_r22.Name] : "gears");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("color", "black");
  }
}
function OutboundComponent_div_21_mat_card_20_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th")(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, OutboundComponent_div_21_mat_card_20_th_36_div_5_Template, 5, 7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, "repair_types"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", repairs_r7.RepairServiceTypes);
  }
}
function OutboundComponent_div_21_mat_card_20_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 69)(3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 3, repairs_r7.IsTowedIn ? "towed_in" : "not_towed_in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", "towing");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("color", repairs_r7.IsTowedIn ? "black" : "dark-gray-disabled");
  }
}
function OutboundComponent_div_21_mat_card_20_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_div_40_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](42);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r25.move_scroll("left", _r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function OutboundComponent_div_21_mat_card_20_th_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th")(1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_th_49_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31);
      const job_r27 = restoredCtx.$implicit;
      const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r29.openJobpopup(repairs_r7, job_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div")(3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("background-color", job_r27.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](job_r27.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", job_r27.CompletePercentage, "%");
  }
}
function OutboundComponent_div_21_mat_card_20_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 74)(1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_div_54_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](42);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r32.move_scroll("right", _r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function OutboundComponent_div_21_mat_card_20_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Pick up date cannot set as past date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function OutboundComponent_div_21_mat_card_20_chq_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "chq-button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_chq_button_64_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r36);
      const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r34.openEmailForNotify(repairs_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("buttonModel", ctx_r17.notifyButton);
  }
}
const _c0 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function OutboundComponent_div_21_mat_card_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card", 31)(1, "table", 32)(2, "tr", 33)(3, "th")(4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_Template_div_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38);
      const repairs_r7 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r37.bookingStatusUrl(repairs_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th")(10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th")(16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "th")(22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, OutboundComponent_div_21_mat_card_20_th_27_Template, 6, 4, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "th")(29, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 38)(33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, OutboundComponent_div_21_mat_card_20_th_36_Template, 6, 4, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, OutboundComponent_div_21_mat_card_20_th_37_Template, 6, 5, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 39)(39, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, OutboundComponent_div_21_mat_card_20_div_40_Template, 3, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 42, 43)(43, "table", 44)(44, "tr", 45)(45, "th")(46, "div", 46)(47, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("load", function OutboundComponent_div_21_mat_card_20_Template_img_load_47_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38);
      const repairs_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](repairs_r7.ImageUrlFirstLoad = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "chq-customloader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](49, OutboundComponent_div_21_mat_card_20_th_49_Template, 7, 4, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "th")(51, "div", 46)(52, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("load", function OutboundComponent_div_21_mat_card_20_Template_img_load_52_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38);
      const repairs_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](repairs_r7.ImageUrlLastLoad = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "chq-customloader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, OutboundComponent_div_21_mat_card_20_div_54_Template, 3, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 52)(56, "div", 53)(57, "div", 54)(58, "div", 55)(59, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "dx-date-box", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onValueChanged", function OutboundComponent_div_21_mat_card_20_Template_dx_date_box_onValueChanged_62_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38);
      const repairs_r7 = restoredCtx.$implicit;
      const j_r8 = restoredCtx.index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r41.updateInput($event, repairs_r7.RepairGuid, j_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, OutboundComponent_div_21_mat_card_20_span_63_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, OutboundComponent_div_21_mat_card_20_chq_button_64_Template, 1, 1, "chq-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "div", 60)(66, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const repairs_r7 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](42);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", repairs_r7.OutboundStatus === null || repairs_r7.OutboundStatus === "Repair Not Started" || repairs_r7.OutboundStatus === "Repair In Progress" ? "card-table-gray" : repairs_r7.OutboundStatus === "Ready To PickUp" ? "card-table-yellow" : repairs_r7.OutboundStatus === "Picked Up" ? "card-table-green" : "card-table-gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", repairs_r7.OutboundStatus === null || repairs_r7.OutboundStatus === "Repair Not Started" || repairs_r7.OutboundStatus === "Repair In Progress" ? "header-table-gray" : repairs_r7.OutboundStatus === "Ready To PickUp" ? "header-table-yellow" : repairs_r7.OutboundStatus === "Picked Up" ? "header-table-green" : "card-table-gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 43, "booking_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](repairs_r7.RepairNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 45, "work_provider"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](repairs_r7.VehicleInsurerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 47, "driver_owner_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](repairs_r7.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 49, "vehicle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", repairs_r7.VehicleMake, " ", repairs_r7.VehicleName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", repairs_r7.Assignees.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 51, "cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBindV"](35, 53, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](65, _c0, repairs_r7.TotalAmount, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", repairs_r7.RepairServiceTypes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", repairs_r7.IsTowedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.checkJobWrapperScroll("left", _r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", repairs_r7.ImageUrlFirst === null ? "assets/img/front-left.png" : repairs_r7.ImageUrlFirst, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("showLoading", repairs_r7.ImageUrlFirstLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", repairs_r7.Jobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", repairs_r7.ImageUrlLast === null ? "assets/img/front-left.png" : repairs_r7.ImageUrlLast, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("showLoading", repairs_r7.ImageUrlLastLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.checkJobWrapperScroll("right", _r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](61, 59, ctx_r6.PickUpDateTextBox.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", repairs_r7.PickUpDate)("acceptCustomValue", false)("invalidDateMessage", "")("max", ctx_r6.PickUpDateTextBox.maxDate)("min", ctx_r6.PickUpDateTextBox.minDate)("validationError", false)("validationMessageMode", "none")("disabled", !ctx_r6.isTechnician ? repairs_r7.OutboundStatus !== "Ready To PickUp" : true)("showClearButton", false)("useMaskBehavior", true)("openOnFieldClick", true)("adaptivityEnabled", true)("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", repairs_r7 == null ? null : repairs_r7.PickupDateError);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r6.isTechnician ? !repairs_r7.IsPickedUp && repairs_r7.PickUpDate !== null && repairs_r7.OutboundStatus === "Ready To PickUp" && repairs_r7.CommunicationTypes.length > 0 : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](68, 61, "initial_booking_out_date"), ": ", ctx_r6.date_format(repairs_r7.BookingEndDate), " | ", repairs_r7.LagInDays, " ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](69, 63, "days"), "");
  }
}
function OutboundComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 25)(10, "div", 26)(11, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "directions_car");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, OutboundComponent_div_21_mat_card_20_Template, 70, 71, "mat-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](5, 6, ctx_r1.currentWeek, "EEEE, d MMMM y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 9, "last_refreshed"), ": ", ctx_r1.lastUpdated, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.departures.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBindV"](19, 11, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](17, _c0, ctx_r1.TotalAmount, ctx_r1.i18n.currencySymbol, ctx_r1.i18n.digitsInfo, ctx_r1.i18n.locale, ctx_r1.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.departures);
  }
}
function OutboundComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 77)(1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
  }
}
class OutboundComponent {
  /**
     * Creates an instance of DeparturesComponent.
     * @constructor
     * @param {Router} router
     * @param {OutboundService} OutboundService
     *  @param {MatDialog} dialog
     *  @param {DatePipe} datePipe
     * @param {CommonService} CommonService
     */
  constructor(OutboundService, router, dialog, datePipe, bookingService, commonService) {
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
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_1__().add(6, 'month').toDate(),
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
    this.lastUpdated = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
    this.CallingAPI = false;
    this.isTechnician = false;
    this.TotalAmount = 0;
    this.i18n = this.commonService.geti18nInfo();
    this.getWeekDates(new Date(this.currentWeek));
  }
  /**
     * ngOnInit
     */
  ngOnInit() {
    this.getDeparturesDetails();
    this.commonService.userProfileData.subscribe(res => {
      if (res?.data) {
        const automotiveServices = res?.data?.userPermission?.automotiveServices;
        const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda repair');
        if (automotiveService && automotiveService.roleName.toLowerCase() === 'technician') {
          this.isTechnician = true;
        } else {
          this.isTechnician = false;
        }
      }
    });
  }
  /**
   * getOutBoundData
   */
  getDeparturesDetails() {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.CallingAPI = true;
      _this.commonService.showLoading();
      _this.departures = [];
      const StartDate = new Date(_this.currentWeek.toDateString()).toISOString();
      const EndDate = new Date(new Date(_this.currentWeek.toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
      const query = `$filter=BookingEndDate ge ${StartDate} and BookingEndDate lt ${EndDate} or PickUpDate ge ${StartDate} and PickUpDate lt ${EndDate}`;
      _this.subs.push(_this.OutboundService.getDeparturesDetails(query).subscribe({
        next: data => {
          _this.CallingAPI = false;
          _this.TotalAmount = 0;
          data.value.forEach(el => {
            if (el?.Jobs?.length > 0) {
              if (el.PickUpDate !== null) {
                if (!(new Date(StartDate) < new Date(el.PickUpDate) && new Date(EndDate) > new Date(el.PickUpDate))) {
                  return;
                }
              }
              el['ImageUrlFirstLoad'] = true;
              el['ImageUrlLastLoad'] = true;
              _this.TotalAmount += el.TotalAmount;
              _this.departures.push(el);
            }
          });
          _this.lastUpdated = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
          _this.commonService.hideLoading();
          clearTimeout(_this.IntervalGetOutBound);
          _this.IntervalGetOutBound = setTimeout(() => {
            _this.getDeparturesDetails();
          }, 300000);
        },
        error: error => {
          _this.CallingAPI = false;
          clearTimeout(_this.IntervalGetOutBound);
        }
      }));
    })();
  }
  /**
     * date_format
     * return date format
     * example 28 Wednesday, of June 2023
     *@param date data
  
     * @returns {string}
     */
  date_format(date) {
    return dayjs__WEBPACK_IMPORTED_MODULE_1__(date).format('D dddd, of MMMM YYYY');
  }
  /**
  * updateInput
  * update pickup date
  */
  updateInput(e, repairId, repairIndex) {
    if (new Date(e.value).getTime() === new Date(e.previousValue).getTime()) return;
    this.departures[repairIndex]['PickupDateError'] = false;
    if (new Date(e.value) < new Date()) {
      this.departures[repairIndex]['PickupDateError'] = true;
      return;
    }
    const pickupDate = new Date(e.value).toISOString();
    if (new Date(pickupDate) == new Date(this.departures[repairIndex].PickUpDate)) {
      return;
    }
    this.commonService.showLoading();
    this.subs.push(this.OutboundService.setPickupDate(repairId, pickupDate, false).subscribe({
      next: data => {
        this.commonService.showInfoToast(1000, data.message);
        this.commonService.hideLoading();
        this.departures[repairIndex]['PickUpDate'] = pickupDate;
      }
    }));
  }
  /**
   * openJobpopup
   * @param { string } jobId
   */
  openJobpopup(repair, job) {
    this.dialog.open(_check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_3__.CheckInTaskComponent, {
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
  getWeekNumber(date) {
    const currentDate = date;
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil(days / 7);
    return weekNumber;
  }
  /**
    * getWeekDates
    * change months as well when month about to end
    */
  getWeekDates(date) {
    const daysInWeek = 7;
    const dates = [];
    const week = date.getDay() == 0 ? daysInWeek : date.getDay();
    const start_date = new Date(date.setDate(date.getDate() - week + 1));
    for (let i = 0; i < daysInWeek; i++) {
      const temp_date = new Date(start_date);
      const new_date = new Date(temp_date.setDate(start_date.getDate() + i));
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
  changeCurrentWeek(direction) {
    if (direction === 'left') {
      const temp_date = this.dates[0];
      this.currentWeek = new Date(temp_date.setDate(temp_date.getDate() - 7));
    } else {
      const temp_date = this.dates[6];
      this.currentWeek = new Date(temp_date.setDate(temp_date.getDate() + 1));
    }
    this.getWeekDates(new Date(this.currentWeek));
    this.departures = [];
    this.getDeparturesDetails();
  }
  /**
  * TodayWeek
  */
  TodayWeek() {
    this.currentWeek = new Date();
    this.getWeekDates(new Date(this.currentWeek));
    this.departures = [];
    this.getDeparturesDetails();
  }
  /**
  * changeCurrentDate
  *@param day { date }
  */
  changeCurrentDate(day) {
    this.currentWeek = day;
    this.departures = [];
    this.getDeparturesDetails();
  }
  /**
   * move_scroll
   */
  move_scroll(direction, el) {
    if (direction === 'left') {
      el.scrollLeft = el.scrollLeft - 160;
    } else {
      el.scrollLeft = el.scrollLeft + 160;
    }
  }
  /**
   * checkJobWrapperScroll
   */
  checkJobWrapperScroll(direction, el) {
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
  openEmailForNotify(RepairData) {
    var _this2 = this;
    this.commonService.showLoading();
    this.bookingService.getRepairDetailByGuid(RepairData.RepairGuid).subscribe({
      next: function () {
        var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          if (result?.data) {
            _this2.openEmailForNotifyInner(RepairData.RepairGuid, result.data.domainId, result.data.booking.communicationTypeId, result.data.communicationEvents);
          }
          _this2.commonService.hideLoading();
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      error: function () {
        var _ref2 = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error) {
          _this2.commonService.hideLoading();
        });
        return function error(_x2) {
          return _ref2.apply(this, arguments);
        };
      }()
    });
  }
  /**
   * openEmailForNotify
   *
   */
  openEmailForNotifyInner(RepairGuid, domainId, communicationList, communicatedList) {
    this.dialog.open(src_app_dialogs_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_4__.NotifyDialogComponent, {
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
  bookingStatusUrl(repair) {
    const {
      RepairStatus,
      RepairGuid
    } = repair;
    const status = RepairStatus.split(' ').join('');
    let routeToRedirect = src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_5__.ReapirStatusMapper[status?.toLowerCase()] || src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_5__.ReapirStatusMapper.others;
    routeToRedirect = routeToRedirect.replace('{{repairGUID}}', RepairGuid);
    this.router.navigate([routeToRedirect]);
  }
  /**
     * ngOnDestroy
     */
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    clearTimeout(this.IntervalGetOutBound);
  }
}
OutboundComponent.ɵfac = function OutboundComponent_Factory(t) {
  return new (t || OutboundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_2__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_6__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService));
};
OutboundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: OutboundComponent,
  selectors: [["app-outbound"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([src_app_services_Outbound_outbound_service__WEBPACK_IMPORTED_MODULE_2__.OutboundService])],
  decls: 27,
  vars: 23,
  consts: [[1, "page-container", "outbound-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "outbound-header"], [1, "fx-row", "date-filter-wrapper", 2, "padding-bottom", "26px"], [1, "fx-row", "change-week-btn", "align-center"], [1, "fx-row", "align-center", "week-days-tile"], ["type", "button", 1, "btn", "btn-left", 3, "click"], ["color", "black", "svgIcon", "arrow-left"], [1, "week-tile-content"], ["type", "button", 1, "btn", "btn-right", 3, "click"], ["color", "black", "svgIcon", "arrow-right"], ["type", "button", 1, "btn", "current-week-btn", 3, "click"], [1, "fx-row", "week-tiles"], ["type", "button", "class", "day-tile", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "outbound-container-wrapper"], ["class", "outbound-card", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], ["type", "button", 1, "day-tile", 3, "ngClass", "click"], [1, "outbound-card"], [1, "card-header", "fx-row", "justify-space-between"], [1, "fx-col", "left-content"], [1, "last-updated"], [1, "fx-row", "right-content"], [1, "fx-row", "align-center", "repair-count"], ["color", "dark-gray"], [1, "fx-row", "align-center", "total-amount"], ["svgIcon", "double-database", 2, "margin-right", "8px"], ["class", "card border-10", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", "border-10", 3, "ngClass"], [1, "header-table", "border-top-10", 2, "padding-bottom", "8px", 3, "ngClass"], [2, "text-align", "left", "padding", "10px", "display", "flex", "justify-content", "space-between"], [1, "header-type-text"], [1, "header-content", "link", 3, "click"], [1, "header-content"], [4, "ngIf"], [1, "flex", "align-center", "header-content"], [1, "outbound-card-content", "border-bottom-10"], [1, "outbound-jobs-container", "fx-row", "align-center"], ["class", "move-left-wrapper", 4, "ngIf"], [1, "outbound-jobs-wrapper"], ["job_scroll_wrapper", ""], [1, "outbound-table", "border-bottom-10"], [1, "flex", "align-center"], [1, "img-container"], ["alt", "", 1, "rapair-car-img", 3, "src", "load"], [3, "showLoading"], [4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "load"], ["class", "move-right-wrapper", 4, "ngIf"], [1, "date-card", "flex", "align-end"], [1, "date-selector"], [1, "input-wrapper", "flex", "align-end"], [1, "pickup_wrapper"], [1, "input-label", "text-muted", "uppercase"], ["type", "datetime", 3, "value", "acceptCustomValue", "invalidDateMessage", "max", "min", "validationError", "validationMessageMode", "disabled", "showClearButton", "useMaskBehavior", "openOnFieldClick", "adaptivityEnabled", "pickerType", "onValueChanged"], ["class", "pickupDate-error input-label text-muted", 4, "ngIf"], ["class", "notify-btn", 3, "buttonModel", "click", 4, "ngIf"], [1, "day-counter"], [1, "text-muted"], ["class", "flex", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "flex", "align-center", 2, "flex-wrap", "wrap"], ["class", "header-repair-type", 4, "ngFor", "ngForOf"], [1, "header-repair-type"], ["matTooltipPosition", "above", 1, "outbound-icon-btn", 3, "matTooltip"], [3, "svgIcon"], [1, "is-towing"], [1, "move-left-wrapper"], ["type", "button", 1, "jobs-move-btn", 3, "click"], [1, "outbound-header-card", 3, "click"], [1, "uppercase"], [1, "move-right-wrapper"], [1, "pickupDate-error", "input-label", "text-muted"], [1, "notify-btn", 3, "buttonModel", "click"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
  template: function OutboundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_5_listener() {
        return ctx.changeCurrentWeek("left");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_13_listener() {
        return ctx.changeCurrentWeek("right");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_15_listener() {
        return ctx.TodayWeek();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, OutboundComponent_button_19_Template, 7, 9, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, OutboundComponent_div_21_Template, 21, 23, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, OutboundComponent_div_22_Template, 9, 6, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 16)(24, "div", 17)(25, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate5"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 9, ctx.dates[0], "dd"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](10, 12, ctx.dates[6], "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](11, 15, ctx.dates[0], "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](12, 18, ctx.dates[0], "YY"), " (", ctx.currentWeekNumber, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 21, "today"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.dates);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.departures.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.departures.length === 0 && !ctx.CallingAPI);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__.ChqButtonComponent, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_9__.CustomloaderComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, devextreme_angular__WEBPACK_IMPORTED_MODULE_18__.DxDateBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.XaCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
  styles: [".outbound-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (58px + 1.6vw));\n  overflow-y: auto;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  padding-top: 5px;\n  z-index: 1;\n  background: var(--xa-popup-light-gray);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: space-around;\n  background: var(--xa-popup-light-gray);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  justify-content: center;\n  gap: 25px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .week-tile-content[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex: none;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .current-week-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 61px;\n  background-color: #f4f5fd;\n  border: 1px solid var(--xa-light-gray) !important;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%] {\n  background-color: #f4f5fd;\n  border: 1px solid var(--xa-light-gray) !important;\n  display: grid;\n  min-height: 70px;\n  height: auto;\n  border-radius: 0px;\n  font-size: 16px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile.active[_ngcontent-%COMP%] {\n  background-color: #4c6bd2;\n  color: var(--xa-white);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%]:first-child {\n  border-radius: 8px 0 0 8px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 8px 8px 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n\n.header-type-text[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n.border-10[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.border-top-10[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.border-bottom-10[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  color: var(--xa-gray);\n  line-height: 21.23px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%] {\n  gap: 34px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .repair-count[_ngcontent-%COMP%] {\n  gap: 6px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .repair-count[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 332.15px;\n  margin: 15px;\n  background-color: rgba(26, 34, 51, 0.0509803922);\n  width: calc(100% - 30px);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%] {\n  min-height: 68px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  max-width: 240px;\n  display: inline-block;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 700;\n  word-break: break-all;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-repair-type[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-repair-type[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  width: 30px;\n  height: 30px;\n  background-color: rgba(31, 32, 35, 0.0784313725);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .is-towing[_ngcontent-%COMP%] {\n  margin: 18px 0px 0px 0px;\n  padding-right: 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .is-towing[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  width: 30px;\n  height: 30px;\n  background-color: rgba(31, 32, 35, 0.0784313725);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-gray[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-green[_ngcontent-%COMP%] {\n  background-color: #1B9235;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-yellow[_ngcontent-%COMP%] {\n  background-color: #D2A600;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  position: relative;\n  overflow: hidden;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 126px;\n  width: 144px;\n  border-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 126px;\n  width: 144px;\n  border-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 100px;\n  border-radius: 10px;\n  border: 2px solid var(--xa-white);\n  font-size: 12px;\n  font-weight: normal;\n  padding: 13px 14px;\n  margin: 16px auto;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  cursor: pointer;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .jobs-move-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin: 0px 20px 20px 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   .pickupDate-error[_ngcontent-%COMP%] {\n  color: var(--xa-red);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .notify-btn[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .day-counter[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-gray[_ngcontent-%COMP%] {\n  border: 1px solid #1a2233;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-gray[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-green[_ngcontent-%COMP%] {\n  border: 1px solid #03A31B;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-green[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-yellow[_ngcontent-%COMP%] {\n  border: 1px solid #D2A120;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-yellow[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvb3V0Ym91bmQvb3V0Ym91bmQvb3V0Ym91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwyQ0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBQVI7QUFFUTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0FBQVo7QUFFWTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBQWhCO0FBRWdCO0VBQ0ksU0FBQTtBQUFwQjtBQUVvQjtFQUNJLDZCQUFBO0FBQXhCO0FBR29CO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFEeEI7QUFJb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUZ4QjtBQU1nQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpREFBQTtBQUpwQjtBQVVnQjtFQUNHLHlCQUFBO0VBQ0MsaURBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUnBCO0FBV2dCO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQVRwQjtBQVlnQjtFQUNJLDBCQUFBO0FBVnBCO0FBYWdCO0VBQ0ksMEJBQUE7QUFYcEI7O0FBbUJBO0VBQ0ksOEJBQUE7QUFoQko7O0FBbUJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBaEJKOztBQW1CQTtFQUNJLG1CQUFBO0FBaEJKOztBQW1CQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFoQko7O0FBa0JBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtBQWZKOztBQXFCSTtFQUNJLG1CQUFBO0FBbEJSO0FBb0JRO0VBQ0ksWUFBQTtBQWxCWjtBQXFCZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQW5CcEI7QUFzQmdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQXBCcEI7QUF3Qlk7RUFDSSxTQUFBO0FBdEJoQjtBQXVCZ0I7RUFDSSxRQUFBO0FBckJwQjtBQXNCb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXBCeEI7QUF5Qm9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF2QnhCO0FBOEJRO0VBQ1Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3QkFBQTtBQTVCaEI7QUE4QmdCO0VBQ0ksZ0JBQUE7QUE1QnBCO0FBOEJvQjtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBNUJ4QjtBQStCb0I7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUE3QnhCO0FBZ0NvQjtFQUNJLGtCQUFBO0FBOUJ4QjtBQWdDd0I7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7QUE5QjVCO0FBa0NvQjtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUFoQ3hCO0FBa0N3QjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtBQWhDNUI7QUFxQ2dCO0VBQ0kseUJBQUE7QUFuQ3BCO0FBcUNnQjtFQUNJLHlCQUFBO0FBbkNwQjtBQXFDZ0I7RUFDSSx5QkFBQTtBQW5DcEI7QUF1Q29CO0VBQ0ksOEJBQUE7QUFyQ3hCO0FBdUN3QjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQXJDNUI7QUF1QzRCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFyQ2hDO0FBeUNvQztFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXZDeEM7QUF5Q3dDO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkM1QztBQXlDNEM7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkNoRDtBQTJDd0M7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQTFDNUM7QUFpRHdCO0VBQ0ksNkJBQUE7QUEvQzVCO0FBb0RvQjtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7QUFsRHhCO0FBd0RnQztFQUNJLGVBQUE7QUF0RHBDO0FBeURnQztFQUNJLG9CQUFBO0FBdkRwQztBQTJENEI7RUFDSSxpQkFBQTtBQXpEaEM7QUE2RHdCO0VBQ0ksMEJBQUE7QUEzRDVCO0FBZ0U0QjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQTlEaEM7QUFzRVE7RUFDSSx5QkFBQTtBQXBFWjtBQXFFWTtFQUNJLDZCQUFBO0FBbkVoQjtBQXNFUTtFQUNJLHlCQUFBO0FBcEVaO0FBcUVZO0VBQ0ksNkJBQUE7QUFuRWhCO0FBc0VRO0VBQ0kseUJBQUE7QUFwRVo7QUFxRVk7RUFDSSw2QkFBQTtBQW5FaEI7QUF3RUk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBdEVSO0FBd0VRO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtBQXRFWiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3V0Ym91bmQtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCAtIChjYWxjKDU4cHggKyAxLjZ2dykpKTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgLm91dGJvdW5kLWhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuXHJcbiAgICAgICAgLmRhdGUtZmlsdGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XHJcblxyXG4gICAgICAgICAgICAuY2hhbmdlLXdlZWstYnRuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogMjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAud2Vlay1kYXlzLXRpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLndlZWstdGlsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jdXJyZW50LXdlZWstYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAud2Vlay10aWxlcyB7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRheS10aWxle1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGF5LXRpbGUuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2YmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRheS10aWxlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZGF5LXRpbGU6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci10eXBlLXRleHR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItMTB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyLXRvcC0xMHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4uYm9yZGVyLWJvdHRvbS0xMHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm91dGJvdW5kLWNvbnRhaW5lci13cmFwcGVye1xyXG4gICAgXHJcblxyXG4gICAgLm91dGJvdW5kLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIC5jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLmxlZnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxhc3QtdXBkYXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMS4yM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmlnaHQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICAucmVwYWlyLWNvdW50IHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRvdGFsLWFtb3VudCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMzIuMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTIyMzMwRDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2OHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXJlcGFpci10eXBle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtaWNvbi1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjAyMzE0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmlzLXRvd2luZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxOHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1pY29uLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMDIzMTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlLWdyYXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc3N0Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlLWdyZWVuIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI5MjM1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci10YWJsZS15ZWxsb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkE2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm91dGJvdW5kLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm91dGJvdW5kLWpvYnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1qb2JzLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1oZWFkZXItY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTNweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvYnMtbW92ZS1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpY2t1cF93cmFwcGVye1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0LWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waWNrdXBEYXRlLWVycm9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3RpZnktYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0LW11dGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRheS1jb3VudGVyIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtbXV0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNhcmQtdGFibGUtZ3JheSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYTIyMzM7XHJcbiAgICAgICAgICAgIC5vdXRib3VuZC1jYXJkLWNvbnRlbnR7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGFibGUtZ3JlZW4ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNBMzFCO1xyXG4gICAgICAgICAgICAub3V0Ym91bmQtY2FyZC1jb250ZW50eyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLXRhYmxlLXllbGxvdyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkExMjA7ICBcclxuICAgICAgICAgICAgLm91dGJvdW5kLWNhcmQtY29udGVudHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vLWRhdGEtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcblxyXG4gICAgICAgIC5uby1kYXRhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 86474:
/*!*************************************************!*\
  !*** ./src/app/modules/repair/repair.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepairModule": () => (/* binding */ RepairModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth-guard/auth.guard */ 20489);
/* harmony import */ var src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helper/directive.module */ 20363);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/chq-widgets.module */ 85510);
/* harmony import */ var _add_customers_customer_layout_customer_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-customers/customer-layout/customer-layout.component */ 88271);
/* harmony import */ var _booking_journal_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-journal/booking-journal/booking-journal.component */ 11121);
/* harmony import */ var _estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estimate-approval/estimate-approval.component */ 8542);
/* harmony import */ var _lounge_list_lounge_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lounge-list/lounge-list.component */ 94526);
/* harmony import */ var _outbound_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./outbound/outbound/outbound.component */ 10250);
/* harmony import */ var _workflow_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow/workflow/workflow.component */ 40712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);

















const repairRoutes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'booking-journal'
}, {
  path: 'booking',
  canActivate: [src_app_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_repair_add-customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/add-customers/customers.module */ 65206)).then(m => m.AddRepairCustomersModule)
}, {
  path: 'booking/:id',
  component: _add_customers_customer_layout_customer_layout_component__WEBPACK_IMPORTED_MODULE_4__.CustomerLayoutComponent,
  canActivate: [src_app_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_repair_add-customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/add-customers/customers.module */ 65206)).then(m => m.AddRepairCustomersModule)
}, {
  path: 'customers',
  canActivate: [src_app_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_repair_customer_customer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../repair/customer/customer.module */ 922)).then(m => m.CustomerTableModule)
}, {
  path: 'booking-journal',
  component: _booking_journal_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_5__.BookingJournalComponent,
  canActivate: [src_app_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_resolvers_versionControl_resolver_ts-node_modules_devextreme-angular_fesm2015-8db258"), __webpack_require__.e("src_app_modules_repair_booking-journal_booking-journal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/booking-journal/booking-journal.module */ 53018)).then(m => m.BookingJournalModule)
}, {
  path: 'workflow',
  component: _workflow_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_9__.WorkflowComponent,
  canActivate: [src_app_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_resolvers_versionControl_resolver_ts-node_modules_angular_material_fesm2020_b-11c988"), __webpack_require__.e("src_app_modules_repair_workflow_workflow_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/workflow/workflow.module */ 95885)).then(m => m.WorkflowModule)
}, {
  path: 'outbound',
  component: _outbound_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_8__.OutboundComponent,
  canActivate: [src_app_guards_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_resolvers_versionControl_resolver_ts-node_modules_angular_material_fesm2020_b-11c988"), __webpack_require__.e("src_app_modules_repair_outbound_outbound_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/outbound/outbound.module */ 73688)).then(m => m.OutboundModule)
}, {
  path: 'lounge',
  component: _lounge_list_lounge_list_component__WEBPACK_IMPORTED_MODULE_7__.LoungeListComponent,
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__.MsalGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_resolvers_versionControl_resolver_ts-node_modules_angular_material_fesm2020_b-11c988"), __webpack_require__.e("src_app_modules_repair_lounge-list_lounge-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/lounge-list/lounge-list.module */ 36071)).then(m => m.LoungeListModule)
}];
class RepairModule {}
RepairModule.ɵfac = function RepairModule_Factory(t) {
  return new (t || RepairModule)();
};
RepairModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: RepairModule
});
RepairModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(repairRoutes), _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_1__.DirectiveModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](RepairModule, {
    declarations: [_estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_6__.EstimateApprovalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_1__.DirectiveModule]
  });
})();

/***/ }),

/***/ 40712:
/*!************************************************************************!*\
  !*** ./src/app/modules/repair/workflow/workflow/workflow.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowComponent": () => (/* binding */ WorkflowComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/route-mapper/reapir-status-mapper */ 17771);
/* harmony import */ var src_app_services_Workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Workflow/workflow.service */ 52385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-customloader/chq-customloader.component */ 48262);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helper/directive/has-permission.directive */ 22406);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);






















const _c0 = ["filter"];
function WorkflowComponent_chq_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "chq-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WorkflowComponent_chq_button_24_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.openFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("buttonModel", ctx_r0.filterButton);
  }
}
const _c1 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function WorkflowComponent_div_25_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 39)(1, "div", 40)(2, "div", 41)(3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div")(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const items_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("background-color", items_r8.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](items_r8.WaterfallRepairs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBindV"](8, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](11, _c1, items_r8.ManualCost, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](items_r8.JobName);
  }
}
function WorkflowComponent_div_25_td_7_mat_card_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, repair_r13.LastestTaskUpdatedRepairType ? repair_r13.LastestTaskUpdatedRepairType : "Others")));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", ctx_r15.jobIconDictionary[repair_r13.LastestTaskUpdatedRepairType] ? ctx_r15.jobIconDictionary[repair_r13.LastestTaskUpdatedRepairType] : "gears");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("color", "black");
  }
}
function WorkflowComponent_div_25_td_7_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card", 45)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WorkflowComponent_div_25_td_7_mat_card_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const repair_r13 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.bookingStatusUrl(repair_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 47)(3, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("load", function WorkflowComponent_div_25_td_7_mat_card_1_Template_img_load_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const repair_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](repair_r13.isloaded = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "chq-customloader", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 50)(6, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, WorkflowComponent_div_25_td_7_mat_card_1_button_17_Template, 4, 7, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const repair_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", repair_r13.ImageUrl !== null && repair_r13.ImageUrl !== "" ? repair_r13.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("showLoading", !repair_r13.isloaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 17, repair_r13.Assignees.length === 0 ? "No Assignee" : repair_r13.Assignees.length > 1 ? "Multi Assignees" : "Single Assignee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", repair_r13.Assignees.length > 1 ? "multi-users" : "single-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("color", repair_r13.Assignees.length === 0 ? "dark-gray-disabled" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 19, repair_r13.JobStatusColor === "Transparent" ? "job_not_started" : repair_r13.JobStatusColor === "Green" ? "job_start_today" : "job_start_in_past"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("color", repair_r13.JobStatusColor === "Transparent" ? "dark-gray-disabled" : repair_r13.JobStatusColor === "Green" ? "green-medium" : "dark-red2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matTooltip", ctx_r12.PartTypetoolTip(repair_r13.PartGeneralStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", ctx_r12.PartTypeIcon(repair_r13.PartGeneralStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 21, repair_r13.IsAttentionRequired ? "attention_required" : "attention_not_required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("color", repair_r13.IsAttentionRequired === null ? "dark-gray-disabled" : repair_r13.IsAttentionRequired ? "dark-red2" : "dark-gray-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", repair_r13.LastestTaskUpdatedRepairType && repair_r13.LastestTaskUpdatedRepairType !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 23, repair_r13.IsTowedIn ? "towed_in" : "not_towed_in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", "towing");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("color", repair_r13.IsTowedIn ? "black" : "dark-gray-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 25, "due_out"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 27, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](27, 29, repair_r13.BookingOutDate, "dd/MM/yy HH:mm")));
  }
}
function WorkflowComponent_div_25_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, WorkflowComponent_div_25_td_7_mat_card_1_Template, 28, 32, "mat-card", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", items_r10.WaterfallRepairs);
  }
}
function WorkflowComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 35)(1, "table", 36)(2, "thead", 37)(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, WorkflowComponent_div_25_th_4_Template, 11, 17, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "tbody")(6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, WorkflowComponent_div_25_td_7_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.workflowData);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.workflowData);
  }
}
function WorkflowComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
  }
}
class WorkflowComponent {
  /**
   * constructor.
   * @constructor
   * @param {WorkflowService} workflowService
   * @param {commonService} commonService
   * @param {caseService} caseService
   * @param {formBuilder} formBuilder
   */
  constructor(workflowService, router, commonService, caseService, translateService, formBuilder) {
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
    this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
    this.userDetail = null;
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
  ngOnInit() {
    this.commonService.userProfileData.subscribe(res => {
      this.userDetail = res?.data;
      this.userIsBM = this.userDetail?.roleDetail.some(x => x.name == 'Bodyshop Manager');
      if (this.userDetail?.organizationDetail?.id) {
        this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
      }
    });
  }
  /**
   * ngAfterViewInit
   */
  ngAfterViewInit() {
    this.getWorkflowDetails(this.generateFilterQuery());
    this.IntervalGetWorkflow = setInterval(() => {
      this.getWorkflowDetails(this.generateFilterQuery());
    }, 300000);
  }
  /**
   * getWorkflowData
   */
  getWorkflowDetails(query) {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.commonService.showLoading();
      _this.CallingAPI = true;
      if (query !== '?$filter=') {
        _this.subs.push(_this.workflowService.getWorkflowDetailsWithQuery(query).subscribe({
          next: data => {
            _this.workflowData = _this.getTotals(data.value);
            if (_this.workflowData) {
              _this.workflowData.map(value => value?.WaterfallRepairs.map(child => child.isLoaded = false));
            }
            _this.CallingAPI = false;
            _this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
            _this.commonService.hideLoading();
          },
          error: () => {
            _this.CallingAPI = false;
          }
        }));
      } else {
        _this.subs.push(_this.workflowService.getWorkflowDetails().subscribe({
          next: data => {
            _this.workflowData = _this.getTotals(data.value);
            if (_this.workflowData) {
              _this.workflowData.map(value => value?.WaterfallRepairs.map(child => child.isLoaded = false));
            }
            _this.CallingAPI = false;
            _this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
            _this.commonService.hideLoading();
          },
          error: () => {
            _this.CallingAPI = false;
          }
        }));
      }
    })();
  }
  /**
   * calculate totalCost and totalCount of all repairs
   */
  getTotals(data) {
    this.totalCost = 0;
    this.totalCount = 0;
    data.forEach(item => {
      this.totalCount += item.WaterfallRepairs.length;
      item['ManualCost'] = 0;
      item.WaterfallRepairs.forEach(itm => {
        this.totalCost += itm.EstimateCost;
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
  current_date_format() {
    return dayjs__WEBPACK_IMPORTED_MODULE_1__().format('D dddd, of MMMM YYYY');
  }
  /**
   * pull data and open filter panel
   */
  openFilter() {
    if (this.filterDataLoaded) {
      this.filter.open();
    } else {
      this.commonService.showLoading();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([this.getOrgIfBM(), this.workflowService.getCustomer(this.userDetail.organizationDetail.id)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(([orgList, CustomerList]) => {
        return {
          orgList,
          CustomerList
        };
      })).subscribe(result => {
        if (this.userIsBM) {
          this.filterModal[0] = {
            ...this.filterModal[0],
            selectedOption: {
              'label': this.userDetail?.organizationDetail.name,
              'value': this.userDetail?.organizationDetail.id
            },
            options: result.orgList.data.map(x => {
              return {
                label: x.name,
                value: x.id
              };
            })
          };
        } else {
          this.filterModal[0] = {
            ...this.filterModal[0],
            selectedOption: {
              'label': this.userDetail?.organizationDetail.name,
              'value': this.userDetail?.organizationDetail.id
            },
            options: [{
              'label': this.userDetail?.organizationDetail.name,
              'value': this.userDetail?.organizationDetail.id
            }],
            disabled: true
          };
        }
        this.filterModal[1] = {
          ...this.filterModal[1],
          options: result.CustomerList.filter((value, index, self) => {
            return self.findIndex(o => o.contactId === value.contactId) === index;
          }).map(x => {
            const name = x.firstName + ' ' + x.lastName;
            const label = x.isIndividual ? name : x.companyName;
            const subLabel = x.isIndividual ? x.email : x.licenseNumber;
            return {
              label: x.isIndividual ? name : x.companyName,
              subLabel: x.isIndividual ? x.email : x.licenseNumber,
              value: x.id,
              html: `<div class='workflow-customer-item'><span class='name'>${label}</span><span class='email'>${subLabel}</span></div>`
            };
          })
        };
        this.filter.open();
        this.commonService.hideLoading();
        this.filterDataLoaded = true;
      });
    }
  }
  /**
   * Check if user is bm , then call api otherwise return observable
   */
  getOrgIfBM() {
    if (this.userIsBM) {
      return this.caseService.getOrganizations();
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(null);
    }
  }
  /**
   * get customer list
   * @param orgId
   */
  getCustomer(orgId) {
    this.commonService.showLoading();
    this.workflowService.getCustomer(orgId).subscribe({
      next: data => {
        this.filterModal[1] = {
          ...this.filterModal[1],
          options: data.filter((value, index, self) => {
            return self.findIndex(o => o.contactId === value.contactId) === index;
          }).map(x => {
            const name = x.firstName + ' ' + x.lastName;
            const label = x.isIndividual ? name : x.companyName;
            const subLabel = x.isIndividual ? x.email : x.licenseNumber;
            return {
              label: x.isIndividual ? name : x.companyName,
              subLabel: x.isIndividual ? x.email : x.licenseNumber,
              value: x.id,
              html: `<div class='workflow-customer-item'><span class='name'>${label}</span><span class='email'>${subLabel}</span></div>`
            };
          })
        };
        console.log(this.filterModal[1]);
        this.commonService.hideLoading();
      },
      error: () => {
        this.commonService.showLoading();
      }
    });
  }
  /**
  * function
  */
  generateFilterQuery() {
    const filterValue = this.filterForm.value;
    let query = '?$filter=';
    if (filterValue.OrgName && filterValue.OrgName > 0) {
      query += `OrgId eq ${filterValue.OrgName}`;
    }
    if (filterValue.CustomerId && filterValue.CustomerId.length > 0) {
      if (query !== '?$filter=') {
        query += '&';
      } else {
        query = '?';
      }
      query += '$expand=WaterfallRepairs($filter=';
      query += `(${filterValue.CustomerId.map(x => 'CustomerId eq ' + x + '').join(' or ')}))`;
    }
    return query;
  }
  /**
   *
   * @param output
   */
  onFormUpdate(output) {
    if (output.name === 'CustomerId') {
      this.filterModal[1] = {
        ...this.filterModal[1],
        selectedOption: output.value
      };
      this.filterForm.get(output.name).setValue(output.value.map(x => {
        return x.value;
      }));
    } else if (output.name === 'OrgName') {
      this.filterModal[0] = {
        ...this.filterModal[0],
        selectedOption: output.value
      };
      if (output.value) {
        this.filterForm.get(output.name).setValue(output.value.value);
        this.getCustomer(output.value.value);
      } else {
        this.filterModal[1] = {
          ...this.filterModal[1],
          value: '',
          selectedOption: '',
          options: []
        };
      }
    }
  }
  /**
   *
   */
  applyFilter() {
    this.workflowData = [];
    this.getWorkflowDetails(this.generateFilterQuery());
    this.filter.close();
  }
  /**
   *
   */
  resetFilter() {
    this.filterForm.reset();
    for (let index = 0; index < this.filterModal.length; index++) {
      this.filterModal[index] = {
        ...this.filterModal[index],
        value: '',
        selectedOption: '',
        options: this.filterModal[index].options?.map(x => {
          x.checked = false;
          return x;
        })
      };
    }
    if (this.userDetail?.organizationDetail?.id) {
      this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
      this.filterModal[0] = {
        ...this.filterModal[0],
        selectedOption: {
          'label': this.userDetail?.organizationDetail.name,
          'value': this.userDetail?.organizationDetail.id
        }
      };
      this.getCustomer(this.userDetail?.organizationDetail.id);
    }
  }
  /**
   * PartTypeIcon
   *  @param type {string}
   *
   *  @returns {string}
   */
  PartTypeIcon(type) {
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
  PartTypetoolTip(type) {
    let Tooltip = '';
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
  bookingStatusUrl(repair) {
    const {
      Status,
      RepairGuid
    } = repair;
    let routeToRedirect = src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_2__.ReapirStatusMapper[Status?.toLowerCase()] || src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_2__.ReapirStatusMapper.others;
    routeToRedirect = routeToRedirect.replace('{{repairGUID}}', RepairGuid);
    this.router.navigate([routeToRedirect]);
  }
  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    clearInterval(this.IntervalGetWorkflow);
  }
}
WorkflowComponent.ɵfac = function WorkflowComponent_Factory(t) {
  return new (t || WorkflowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_Workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__.WorkflowService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_5__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder));
};
WorkflowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: WorkflowComponent,
  selectors: [["app-workflow"]],
  viewQuery: function WorkflowComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([src_app_services_Workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__.WorkflowService])],
  decls: 54,
  vars: 34,
  consts: [[1, "page-container", "workflow-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0"], [1, "fx-row", "date-filter-container"], [1, "text-muted", 2, "display", "block"], [1, "current-data"], [1, "", 3, "innerHTML"], [1, "updated-date"], [1, "flex", "align-center", 2, "gap", "25px", "margin-left", "auto"], [1, "flex", "align-center"], ["color", "dark-gray", 2, "margin-right", "8px"], ["svgIcon", "double-database", 2, "margin-right", "8px"], [3, "buttonModel", "click", 4, "chqPermission"], ["class", "fx-1", "style", "overflow: auto;", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [3, "inputModel", "controlOutput"], [1, "customer-list-w", 3, "inputModel", "controlOutput"], [1, "footer"], [1, "col-6"], [3, "buttonModel", "click"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], [1, "fx-1", 2, "overflow", "auto"], [1, "workflow-table"], [1, "workflow-table-thead"], ["class", "right-border", 4, "ngFor", "ngForOf"], [1, "right-border"], [1, "workflow-header-card"], [1, ""], [1, "bg-white", "rounded-icon"], [1, "uppercase"], ["class", "workflow-details-card", 4, "ngFor", "ngForOf"], [1, "workflow-details-card"], [1, "detail-card-link", 3, "click"], [1, "img-container"], ["alt", "", 3, "src", "load"], [3, "showLoading"], [1, "workflow-repair-items", "flex", 2, "padding", "5px 0px", "gap", "5px"], ["matTooltipPosition", "above", 1, "repair-items", 2, "padding", "1px 6px", 3, "matTooltip"], [1, "svg-17px", 3, "svgIcon"], ["svgIcon", "clock2"], ["svgIcon", "flag-circle", 1, "svg-17px"], ["class", "repair-items", "style", "padding:1px 6px;", "matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf"], [3, "svgIcon"], [1, "due-date-span", 2, "margin-top", "6px"], [1, "repairType-custom-class", 3, "svgIcon"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
  template: function WorkflowComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 7)(12, "span", 8)(13, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "directions_car");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "label")(16, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "label")(21, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "xaCurrency");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, WorkflowComponent_chq_button_24_Template, 1, 1, "chq-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, WorkflowComponent_div_25_Template, 8, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, WorkflowComponent_div_26_Template, 9, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "mat-sidenav-container", 14)(28, "mat-sidenav", 15, 16)(30, "div", 17)(31, "div", 18)(32, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, " Filters ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 20)(35, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WorkflowComponent_Template_button_click_35_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](29);
        return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r3.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "mat-icon", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "form", 23)(38, "div", 24)(39, "div", 25)(40, "chq-input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("controlOutput", function WorkflowComponent_Template_chq_input_controlOutput_40_listener($event) {
        return ctx.onFormUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 24)(42, "div", 25)(43, "chq-input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("controlOutput", function WorkflowComponent_Template_chq_input_controlOutput_43_listener($event) {
        return ctx.onFormUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 28)(45, "div", 24)(46, "div", 29)(47, "chq-button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WorkflowComponent_Template_chq_button_click_47_listener() {
        return ctx.applyFilter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 29)(49, "chq-button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function WorkflowComponent_Template_chq_button_click_49_listener() {
        return ctx.resetFilter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 31)(51, "div", 32)(52, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 18, "current_date"), ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", ctx.current_date_format(), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 20, "last_refreshed"), ": ", ctx.LastRefreshedDate, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.totalCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBindV"](23, 22, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](28, _c1, ctx.totalCost, ctx.i18n.currencySymbol, ctx.i18n.digitsInfo, ctx.i18n.locale, ctx.i18n.position)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("chqPermission", "workflow");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.workflowData.length === 0 || ctx.totalCost === 0 && ctx.totalCount === 0) && !ctx.CallingAPI);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hasBackdrop", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("mode", "over")("position", "end");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", "cross");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.filterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("inputModel", ctx.filterModal[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("inputModel", ctx.filterModal[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("buttonModel", ctx.applyButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("buttonModel", ctx.resetButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_8__.CustomloaderComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavContainer, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_9__.HasPermissionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.XaCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: [".mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .mat-drawer-backdrop {\n  position: fixed;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav.filter-sidenav[_ngcontent-%COMP%] {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 74px;\n  width: 74px;\n  max-width: 95%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .span-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr.no-line[_ngcontent-%COMP%] {\n  border: none;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .two-per-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 133px !important;\n  width: auto !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 92%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .customer-list-w[_ngcontent-%COMP%]     .checkbox-wrapper label {\n  display: flex;\n  align-items: center;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .workflow-customer-item .email {\n  display: block;\n  font-style: italic;\n  opacity: 0.7;\n}\n\n.workflow-table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -25px;\n  background-color: var(--xa-popup-light-gray);\n  display: contents;\n}\n.workflow-table[_ngcontent-%COMP%]   .workflow-table-thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n  background-color: var(--xa-popup-light-gray);\n}\n.workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(26, 34, 51, 0.2) 40%, rgba(255, 255, 255, 0) 0%);\n  background-position: top right;\n  background-size: 2px 35px;\n  width: 195px;\n  background-repeat: repeat-y;\n}\n.workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%]:last-child {\n  background-size: 0px;\n  padding-right: 0px;\n}\n.workflow-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  min-height: 330px;\n}\n.workflow-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 100px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 13px 14px;\n  margin: 16px auto;\n  margin-top: 0px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px;\n}\n.workflow-table[_ngcontent-%COMP%]   th.Green[_ngcontent-%COMP%] {\n  background-color: var(--xa-green-medium);\n}\n.workflow-table[_ngcontent-%COMP%]   th.Red[_ngcontent-%COMP%] {\n  background-color: var(--xa-green-medium);\n}\n.workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.workflow-details-card[_ngcontent-%COMP%] {\n  width: 160px;\n  border-radius: 10px;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  font-size: 10px;\n  margin: auto;\n  margin-bottom: 20px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: auto;\n  color: black;\n  text-align: center;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workflow-details-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  max-height: 77px;\n  min-height: 77px;\n  object-fit: contain;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .workflow-repair-items[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n  line-height: 4px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .repairType-custom-class[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 18px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .due-date-span[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  float: left;\n  padding-left: 3px;\n}\n\n.rounded-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  margin-right: 10px;\n  position: relative;\n  left: 40%;\n}\n\n.workflow-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (58px + 1.6vw));\n}\n.workflow-container[_ngcontent-%COMP%]   .fx-0[_ngcontent-%COMP%]   .date-filter-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 15px 30px;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n\n.svg-17px[_ngcontent-%COMP%] {\n  width: 17px;\n}\n\n.main-content[_ngcontent-%COMP%]   .addenda-container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n\nspan.text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n\n.current-data[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.updated-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvd29ya2Zsb3cvd29ya2Zsb3cvd29ya2Zsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFFSTtFQUNJLGVBQUE7QUFBUjtBQUdJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFEUjtBQUdRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBRFo7QUFJUTtFQUNJLGtCQUFBO0FBRlo7QUFLUTtFQUNJLDJCQUFBO0VBQ0Esa0NBQUE7QUFIWjtBQU1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUpaO0FBTVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpoQjtBQVFnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTnBCO0FBUW9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFOeEI7QUFZUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFWWjtBQVlnQjtFQUNJLG1CQUFBO0FBVnBCO0FBYWdCO0VBQ0ksZUFBQTtBQVhwQjtBQWFvQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQVh4QjtBQWF3QjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWDVCO0FBa0J3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBaEI1QjtBQXNCWTtFQUNJLGNBQUE7QUFwQmhCO0FBc0JnQjtFQUNJLFlBQUE7QUFwQnBCO0FBd0JZO0VBQ0ksV0FBQTtBQXRCaEI7QUEwQmdCO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtBQXhCcEI7QUE2QlE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBM0JaO0FBNkJZO0VBQ0ksVUFBQTtBQTNCaEI7QUFnQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUE5Qlo7QUFvQ1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBbENaOztBQXdDQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7QUF1Q0k7RUFDSSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7QUFyQ1I7QUF5Q0k7RUFDSSx1RkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUF2Q1I7QUEwQ0k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBeENSO0FBNkNRO0VBQ0ksaUJBQUE7QUEzQ1o7QUErQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUE3Q1I7QUFnREk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUE5Q1I7QUFnRFE7RUFDSSxZQUFBO0FBOUNaO0FBaURRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUEvQ1o7QUFtREk7RUFDSSx3Q0FBQTtBQWpEUjtBQW9ESTtFQUNJLHdDQUFBO0FBbERSO0FBcURJO0VBQ0ksbUJBQUE7QUFuRFI7O0FBdURBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFwREo7QUFzREk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFwRFI7QUF1REk7RUFDSSxrQkFBQTtBQXJEUjtBQXdESTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBdERSO0FBeURJO0VBQ0ksZUFBQTtBQXZEUjtBQTBESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBeERSO0FBMERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF4RFo7QUEyRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXpEWjtBQTZESTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBM0RSOztBQStEQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBNURKOztBQWdFQTtFQUNJLDJDQUFBO0FBN0RKO0FBaUVRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQS9EWjtBQW1FSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFqRVI7QUFtRVE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0FBakVaOztBQXNFQTtFQUNJLFdBQUE7QUFuRUo7O0FBcUVBO0VBQ0ksOEJBQUE7QUFsRUo7O0FBcUVBO0VBQ0ksMEJBQUE7QUFsRUo7O0FBcUVBO0VBQ0ksZUFBQTtBQWxFSjs7QUFxRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFsRUoiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogNTAxICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWJhY2tkcm9we1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXNpZGVuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgICAgICYuZmlsdGVyLXNpZGVuYXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGMoMTVweCArIDAuOHZ3KTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNTVweCArIDAuOHZ3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIC5pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2hlY2tib3gtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwYW4tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5uby1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hdC1zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50d28tcGVyLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMzNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJGNjtcclxuICAgICAgICAgICAgei1pbmRleDogNTAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN1c3RvbWVyLWxpc3QtdyB7XHJcbiAgICAgICAgOjpuZy1kZWVwIC5jaGVja2JveC13cmFwcGVyIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDo6bmctZGVlcCAud29ya2Zsb3ctY3VzdG9tZXItaXRlbSBcclxuICAgIHtcclxuICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ud29ya2Zsb3ctdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcblxyXG4gICAgLndvcmtmbG93LXRhYmxlLXRoZWFke1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5yaWdodC1ib3JkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMUEyMjMzMzMgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAycHggMzVweDtcclxuICAgICAgICB3aWR0aDogMTk1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1ib3JkZXI6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIC53b3JrZmxvdy1oZWFkZXItY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDExNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aC5HcmVlbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtZ3JlZW4tbWVkaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICB0aC5SZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWdyZWVuLW1lZGl1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53b3JrZmxvdy1kZXRhaWxzLWNhcmQge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuZGV0YWlsLWNhcmQtbGluayB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzdweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3N3B4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmtmbG93LXJlcGFpci1pdGVtc3tcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0cHg7XHJcblxyXG4gICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVwYWlyVHlwZS1jdXN0b20tY2xhc3N7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kdWUtZGF0ZS1zcGFuIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJvdW5kZWQtaWNvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQwJTtcclxufVxyXG5cclxuXHJcbi53b3JrZmxvdy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NnB4IC0gKGNhbGMoNThweCArIDEuNnZ3KSkpO1xyXG5cclxuICAgIC5meC0wIHtcclxuXHJcbiAgICAgICAgLmRhdGUtZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uby1kYXRhLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG5cclxuICAgICAgICAubm8tZGF0YS1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN2Zy0xN3B4e1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbn1cclxuLm1haW4tY29udGVudCAuYWRkZW5kYS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNwYW4udGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxufVxyXG5cclxuLmN1cnJlbnQtZGF0YSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi51cGRhdGVkLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 33938:
/*!*******************************************************!*\
  !*** ./src/app/services/Outbound/outbound.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboundService": () => (/* binding */ OutboundService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class OutboundService {
  /**
   * @constructor
   * @param {HttpClient} http
   */
  constructor(http) {
    this.http = http;
  }
  /**
   * getDeparturesDetails
   * @param {string} query
   */
  getDeparturesDetails(query) {
    //return of(departuresData)
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/departures?${query}`;
    return this.http.get(url);
  }
  /**
   * setPickupDate
   * @param {string} date
   * @param {string} repairId
   */
  setPickupDate(repairId, date, isPickedup) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/departures/${repairId}/pickupdate`;
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
  getTaskDetails(repairId, jobId) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/departures/tasks/${repairId}/${jobId}`;
    return this.http.get(url);
  }
  /**
   * setRepairStatusComplete
   * @param {string} repairId
   */
  setRepairStatusComplete(repairId) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/repair/${repairId}/status`;
    return this.http.put(url, {
      'status': 'Complete',
      'reason': 'repair complete'
    });
  }
}
OutboundService.ɵfac = function OutboundService_Factory(t) {
  return new (t || OutboundService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
OutboundService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OutboundService,
  factory: OutboundService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 52385:
/*!*******************************************************!*\
  !*** ./src/app/services/Workflow/workflow.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowService": () => (/* binding */ WorkflowService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class WorkflowService {
  /**
   * @constructor
   * @param {HttpClient} http
   */
  constructor(http) {
    this.http = http;
  }
  /**
     * getWaterfallDetails
     * @returns {Observable<any>}
     */
  getWorkflowDetails() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/waterfall`;
    return this.http.get(url);
  }
  // eslint-disable-next-line require-jsdoc
  getWorkflowDetailsWithQuery(query) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/waterfall${query}`;
    return this.http.get(url);
  }
  /**
  * getDraftCustomer
  * @returns Observable
  */
  getCustomer(id) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/waterfallcustomer?$filter=OrgId eq ${id}`;
    return this.http.get(url);
  }
}
WorkflowService.ɵfac = function WorkflowService_Factory(t) {
  return new (t || WorkflowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
WorkflowService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: WorkflowService,
  factory: WorkflowService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 95231:
/*!******************************************************!*\
  !*** ./src/app/services/message/messages.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesService": () => (/* binding */ MessagesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _file_service_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file-service/file.service */ 25001);




class MessagesService {
  /**
   * constructor
   * @param http
   */
  constructor(http, fileService) {
    this.http = http;
    this.fileService = fileService;
  }
  /**
   * send approval message
   */
  sendApprovalMessage(data, repairGuid) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/message/${repairGuid}/estimate-approval`;
    return this.http.post(url, data);
  }
  /**
   * get message template
   */
  getMessageTemplate(repairId, domainId, id) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.xaAggregationApi}/repaircommunicationtemplate/${repairId}/${domainId}/${id}`;
    return this.http.get(url);
  }
  /**
   * set message
   */
  setMessage(body, repairId) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/message/${repairId}/send-message`;
    return this.http.post(url, body);
  }
  /**
   * send customer message
   */
  sendFreeCommunicationMessage(emailBody, reportProgress, observe) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.messageApi}/Message/email`;
    const formData = new FormData();
    formData.append('ToEmail', emailBody.email?.join(','));
    if (emailBody.cc) {
      formData.append('CCEmail', emailBody.cc);
    }
    formData.append('Content', emailBody.message);
    formData.append('Subject', emailBody.subject);
    formData.append('ObjectId', emailBody.objectId);
    if (emailBody.files && emailBody.files.length > 0) {
      emailBody.files.forEach(file => {
        formData.append('files', file);
      });
    }
    return this.fileService.uploadFile(url, formData, reportProgress, observe);
  }
}
MessagesService.ɵfac = function MessagesService_Factory(t) {
  return new (t || MessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_file_service_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService));
};
MessagesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MessagesService,
  factory: MessagesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 72197:
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/timezone.js ***!
  \***********************************************/
/***/ (function(module) {

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
      a = function (t, n, i) {
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
      u = function (e, n) {
        for (var i = a(e, n), r = [], u = 0; u < i.length; u += 1) {
          var f = i[u],
            s = f.type,
            m = f.value,
            c = t[s];
          c >= 0 && (r[c] = parseInt(m, 10));
        }
        var d = r[3],
          l = 24 === d ? 0 : d,
          v = r[0] + "-" + r[1] + "-" + r[2] + " " + l + ":" + r[4] + ":" + r[5] + ":000",
          h = +e;
        return (o.utc(v).valueOf() - (h -= h % 1e3)) / 6e4;
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
        f = o(a).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i.getTimezoneOffset() / 15) - u, !0);
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
      var n = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
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

/***/ })

}]);
//# sourceMappingURL=src_app_modules_repair_repair_module_ts.js.map