(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_repair_module_ts"],{

/***/ 93620:
/*!*************************************************************!*\
  !*** ./src/app/config/route-mapper/repair-status-mapper.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseStatusMapper": () => (/* binding */ CaseStatusMapper),
/* harmony export */   "RepairStatusMapper": () => (/* binding */ RepairStatusMapper)
/* harmony export */ });
const RepairStatusMapper = {
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

/***/ 1500:
/*!*****************************************************!*\
  !*** ./src/app/helper/form/customer-form.helper.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookingInValidator": () => (/* binding */ bookingInValidator),
/* harmony export */   "bookingOutValidators": () => (/* binding */ bookingOutValidators),
/* harmony export */   "endDateValidators": () => (/* binding */ endDateValidators),
/* harmony export */   "hourValidator": () => (/* binding */ hourValidator),
/* harmony export */   "minutesValidator": () => (/* binding */ minutesValidator),
/* harmony export */   "newProfileForm": () => (/* binding */ newProfileForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const newProfileForm = () => {
  return {
    search: {
      placeHolder: 'Search',
      name: 'search',
      label: '',
      type: 'search',
      value: 0,
      icon: 'cross',
      preIcon: 'search'
    },
    vehicleLocation: {
      placeHolder: '',
      label: '',
      name: 'vehicleLocation',
      idField: 'vehicleLocation',
      value: 'Vehicle with customer',
      type: 'radio',
      options: [{
        label: 'Vehicle with customer',
        id: 1,
        value: 1,
        checked: true
      }, {
        label: 'Vehicle in yard',
        id: 2,
        value: 2,
        checked: false
      }]
    },
    serviceType: {
      placeHolder: 'select_dot',
      name: 'serviceType',
      label: 'type_of_service',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'serviceType',
      fieldValue: 'id',
      options: [],
      errorWhenEmpty: true,
      validation: {
        name: 'serviceType',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'warning_service_type';
          }
          return '';
        }
      }
    },
    repairTypes: {
      placeHolder: 'select_dot',
      name: 'repairTypes',
      label: 'types_of_repair',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'repairName',
      fieldValue: 'id',
      errorWhenEmpty: true,
      isMultiSelect: true,
      options: []
    },
    bookingInDate: {
      placeHolder: 'start_date',
      label: 'start_date',
      name: 'bookingInDate',
      value: null,
      disabled: true,
      type: 'datetime',
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().add(10, 'year').toDate(),
      minDate: new Date(new Date().setHours(0, 0, 0, 0))
    },
    bookingOutDate: {
      placeHolder: 'end_date',
      label: 'end_date',
      name: 'bookingOutDate',
      value: null,
      disabled: true,
      type: 'datetime',
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().add(10, 'year').toDate()
    },
    towedIn: {
      placeHolder: '',
      label: '',
      name: 'towedIn',
      idField: 'towedIn',
      value: 'Not Towed In',
      type: 'radio',
      options: [{
        label: 'Not Towed In',
        id: 1
      }, {
        label: 'Towed In/Non-Drivable',
        id: 2
      }]
    },
    notes: {
      placeHolder: 'notes',
      label: 'notes',
      name: 'notes',
      value: '',
      type: 'textarea',
      maxLength: 500
    },
    communicationChannel: {
      placeHolder: '',
      label: '',
      name: 'communicationChannel',
      idField: 'communicationChannel',
      value: 'Whatsapp',
      type: 'checkbox',
      options: [{
        label: 'WhatsApp',
        id: 1,
        value: 1,
        checked: false
      }, {
        label: 'Email',
        id: 2,
        value: 2,
        checked: false
      }, {
        label: 'SMS',
        id: 3,
        value: 3,
        checked: false
      }],
      validation: {
        name: 'communicationChannel',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'required_comm_chan';
          }
          return '';
        }
      }
    },
    jobAllocation: {
      placeHolder: '',
      label: '',
      name: 'jobAllocation',
      idField: 'jobAllocation',
      value: '',
      type: 'checkbox',
      options: [{
        label: 'job_assignation',
        id: 1,
        value: 1,
        checked: false
      }]
    },
    assignedTo: {
      placeHolder: 'select_dot',
      name: 'assignedTo',
      label: 'assigned_to',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'assignedTo',
      fieldValue: 'id',
      errorWhenEmpty: true,
      validation: {
        name: 'assignedTo',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'required_assign_to';
          }
          return '';
        }
      },
      options: []
    },
    estimatedEffortHour: {
      placeHolder: 'total_estimated_effort_hour',
      label: 'total_estimated_effort_hour',
      name: 'estimatedEffortHour',
      value: 0,
      type: 'text',
      maxLength: 4,
      icon: 'clock-new',
      validation: {
        name: 'estimatedEffortHour',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([hourValidator()]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter estimated effort hour(s)';
          }
          if (error['invalidTimeFormat']) {
            return 'Hours should be between 00 - 23';
          }
          return '';
        }
      }
    },
    estimatedEffortMinutes: {
      placeHolder: 'total_estimated_effort_min',
      label: 'total_estimated_effort_min',
      name: 'estimatedEffortMinutes',
      value: 0,
      type: 'text',
      maxLength: 4,
      icon: 'clock-new',
      validation: {
        name: 'estimatedEffortMinutes',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([minutesValidator()]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter estimated effort minutes(s)';
          }
          if (error['invalidTimeFormat']) {
            return 'Minutes should be between 00 - 59';
          }
          return '';
        }
      }
    },
    isDeliveryTypeEnable: {
      placeHolder: '',
      type: 'checkbox',
      label: '',
      name: 'isDeliveryTypeEnable',
      value: true,
      options: [{
        label: 'delivery_service_required',
        id: 1,
        value: false,
        checked: false
      }]
    }
  };
};
/**
 * hours validator
 * @returns
 */
function hourValidator() {
  return control => {
    const regex = /^([01][0-9]|2[0-3])$/;
    const value = control.value;
    if (!value || regex.test(value)) {
      return null;
    } else {
      return {
        'invalidTimeFormat': true
      };
    }
  };
}
/**
 * minutes  validator
 * @returns
 */
function minutesValidator() {
  return control => {
    const regex = /^([0-5][0-9])$/;
    const value = control.value;
    if (!value || regex.test(value)) {
      return null;
    } else {
      return {
        'invalidTimeFormat': true
      };
    }
  };
}
/**
 * minutes  validator
 * @returns
 */
function bookingInValidator() {
  return control => {
    const inputDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(control.value).format('YYYY-MM-DDTHH:mm');
    const currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DDTHH:mm');
    if (inputDate < currentDate) {
      return {
        'invalidDateFormat': true
      };
    }
    return null;
  };
}
/**
 *
 * @param confirmEmailInput
 * @returns
 */
function bookingOutValidators(bookingInControl) {
  let bookingDateOut;
  let bookingDateIn;
  return control => {
    if (!bookingDateOut) {
      bookingDateOut = control;
      bookingDateIn = bookingInControl.formControl;
      bookingDateIn.valueChanges.subscribe(() => {
        if (bookingDateIn.status == 'VALID') {
          bookingDateOut.updateValueAndValidity({
            onlySelf: true,
            emitEvent: false
          });
        }
      });
    }
    if (new Date(bookingDateIn.value) > new Date(bookingDateOut.value)) {
      return {
        invalid: true
      };
    }
    return null;
  };
}
/**
 *
 * @param start date control name
 * @returns
 */
function endDateValidators(controlName) {
  return control => {
    if (!control || !control.parent) {
      return null;
    }
    const startDateValue = control.parent.get(controlName).value;
    const endDatevalue = control.value;
    if (new Date(startDateValue) > new Date(endDatevalue)) {
      return {
        invalid: true
      };
    }
    return null;
  };
}

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_dialogs_labour_rate_labour_rate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/labour-rate/labour-rate.component */ 35235);
/* harmony import */ var src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/chq-upload-model */ 75983);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var src_app_helper_form_customer_form_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helper/form/customer-form.helper */ 1500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/inspection/inspection.service */ 62190);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/repair-estimate/repair-estimate.service */ 87855);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/core/core.service */ 42771);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _shared_history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/history/history.component */ 65504);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);




















const _c0 = ["tabs"];
const _c1 = ["tabMain"];
const _c2 = ["userDetail"];
function CustomerLayoutComponent_div_5_ng_container_1_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "make"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r12.caseData.vehicleMake, " ");
  }
}
function CustomerLayoutComponent_div_5_ng_container_1_div_1_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r14.caseData.vehicleModel);
  }
}
function CustomerLayoutComponent_div_5_ng_container_1_div_1_div_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "license_plate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r15.caseData.licensePlate);
  }
}
function CustomerLayoutComponent_div_5_ng_container_1_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CustomerLayoutComponent_div_5_ng_container_1_div_1_div_22_span_1_Template, 7, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, CustomerLayoutComponent_div_5_ng_container_1_div_1_div_22_span_2_Template, 7, 4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.caseData == null ? null : ctx_r13.caseData.vehicleModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.caseData == null ? null : ctx_r13.caseData.licensePlate);
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
function CustomerLayoutComponent_div_5_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16)(1, "div", 17, 18)(3, "div", 19)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 21)(7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 23)(14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, CustomerLayoutComponent_div_5_ng_container_1_div_1_div_15_Template, 6, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 26)(17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, CustomerLayoutComponent_div_5_ng_container_1_div_1_div_22_Template, 3, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 29)(24, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CustomerLayoutComponent_div_5_ng_container_1_div_1_Template_mat_icon_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r16.expand());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](15, _c3, ctx_r10.expandUserDetail))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](17, _c4, ctx_r10.expandUserDetail ? ctx_r10.containerWidth : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r10.customerData.firstName, " ", ctx_r10.customerData.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 11, "booking_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r10.bookingId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r10.caseData == null ? null : ctx_r10.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 13, "status"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r10.statusDesc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r10.caseData == null ? null : ctx_r10.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", !ctx_r10.expandUserDetail ? "dropdown" : "dropdown-up");
  }
}
function CustomerLayoutComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CustomerLayoutComponent_div_5_ng_container_1_div_1_Template, 25, 19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.showUserSection);
  }
}
function CustomerLayoutComponent_div_5_ng_template_2_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "status"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r20.statusDesc);
  }
}
function CustomerLayoutComponent_div_5_ng_template_2_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "make"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r21.caseData.vehicleMake);
  }
}
function CustomerLayoutComponent_div_5_ng_template_2_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "year"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r22.caseData.year);
  }
}
function CustomerLayoutComponent_div_5_ng_template_2_div_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "model"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r23.caseData.vehicleModel);
  }
}
function CustomerLayoutComponent_div_5_ng_template_2_div_1_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "license_plate"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r24.caseData.licensePlate);
  }
}
function CustomerLayoutComponent_div_5_ng_template_2_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matTooltip", ctx_r25.noShowReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "no_show"), " ");
  }
}
const _c5 = function (a0) {
  return {
    "expand": a0
  };
};
function CustomerLayoutComponent_div_5_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16)(1, "div", 17, 18)(3, "div", 19)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 21)(7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 29)(14, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CustomerLayoutComponent_div_5_ng_template_2_div_1_Template_mat_icon_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r26.expand());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 33)(16, "div", 34)(17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CustomerLayoutComponent_div_5_ng_template_2_div_1_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.openLabourRate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 23)(22, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, CustomerLayoutComponent_div_5_ng_template_2_div_1_span_23_Template, 5, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, CustomerLayoutComponent_div_5_ng_template_2_div_1_span_24_Template, 5, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, CustomerLayoutComponent_div_5_ng_template_2_div_1_span_25_Template, 5, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, CustomerLayoutComponent_div_5_ng_template_2_div_1_span_26_Template, 5, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, CustomerLayoutComponent_div_5_ng_template_2_div_1_span_27_Template, 5, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 37)(29, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, CustomerLayoutComponent_div_5_ng_template_2_div_1_div_31_Template, 3, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](20, _c3, ctx_r18.expandUserDetail))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](22, _c4, ctx_r18.expandUserDetail ? ctx_r18.containerWidth : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r18.customerData.firstName, " ", ctx_r18.customerData.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 16, "booking_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r18.bookingId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", !ctx_r18.expandUserDetail ? "dropdown" : "dropdown-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](24, _c5, ctx_r18.expandUserDetail));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 18, "labour_rate_discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r18.caseData == null ? null : ctx_r18.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r18.caseData == null ? null : ctx_r18.caseData.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r18.caseData == null ? null : ctx_r18.caseData.vehicleModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r18.caseData == null ? null : ctx_r18.caseData.licensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r18.caseData.vehicleLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r18.noShowReason);
  }
}
function CustomerLayoutComponent_div_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CustomerLayoutComponent_div_5_ng_template_2_div_1_Template, 32, 26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.showUserSection);
  }
}
function CustomerLayoutComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CustomerLayoutComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, CustomerLayoutComponent_div_5_ng_template_2_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.expandUserDetail)("ngIfElse", _r8);
  }
}
function CustomerLayoutComponent_chq_tabs_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "chq-tabs", 3, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_chq_tabs_7_Template_chq_tabs_menuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r30.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", "default")("menuItems", ctx_r2.menuItems);
  }
}
function CustomerLayoutComponent_chq_tabs_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "chq-tabs", 3, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_chq_tabs_8_Template_chq_tabs_menuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r33.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", "default")("menuItems", ctx_r3.menuRepairItems);
  }
}
function CustomerLayoutComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CustomerLayoutComponent_no_access_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "no-access-error");
  }
}
function CustomerLayoutComponent_history_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "history", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("toggleExpand", function CustomerLayoutComponent_history_12_Template_history_toggleExpand_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.onHistoryExpand($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("history", ctx_r6.history)("isLoading", ctx_r6.isHistoryLoading);
  }
}
class CustomerLayoutComponent {
  /**
   * constructor
   */
  constructor(router, route, commonService, cdr, inspectionService, translateService, repairEstimateService, monitorService, dialog, datePipe, coreService) {
    this.router = router;
    this.route = route;
    this.commonService = commonService;
    this.cdr = cdr;
    this.inspectionService = inspectionService;
    this.translateService = translateService;
    this.repairEstimateService = repairEstimateService;
    this.monitorService = monitorService;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.coreService = coreService;
    this.activeItem = 'Booking';
    this.bookingId = '';
    this.repairGuid = '0';
    this.objectId = 0;
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
    this.hasRepairType = false;
    this.roleName = '';
    this.showNoAccess = false;
    this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerMenus;
    this.repairMenuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.repairMenus;
    this.menuRepairItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.menuRepairItems;
    this.commonService.inProgressSteps.subscribe(length => {
      this.stepInProgress = length > 0;
    });
    this.router.events.subscribe({
      next: event => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.NavigationEnd) {
          this.setActiveTabFromUrl(this.router.url);
        }
      }
    });
    this.setActiveTabFromUrl(this.router.url);
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
   * setActiveTabFromUrl
   */
  setActiveTabFromUrl(url) {
    const urlArray = url.split('/');
    const urlCheck = urlArray[urlArray.length - 1].split('?')[0].trim();
    const repairTabData = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.menuRepairItems.filter(item => item.url.indexOf(urlCheck) !== -1 || item.childMenuLinks && item.childMenuLinks?.indexOf(urlCheck) !== -1);
    const customerMenuData = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerMenus.filter(item => item.url.indexOf(urlCheck) !== -1 || item.childMenuLinks && item.childMenuLinks?.indexOf(urlCheck) !== -1);
    if (repairTabData.length > 0 && customerMenuData.length > 0) {
      this.activeItem = 'Booking';
    } else if (repairTabData.length > 0) {
      this.activeItem = 'Repair';
    } else {
      this.activeItem = 'Booking';
    }
  }
  /**
   * Get latest History when history is expanded
   */
  onHistoryExpand(event) {
    if (event) {
      this.getHistory(this.objectId, this.domainId);
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
   * Get history
   */
  getHistory(objectId, domainId) {
    this.history = [];
    this.isHistoryLoading = true;
    this.coreService.getHistory(objectId, domainId).subscribe({
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
    const customerForm = (0,src_app_helper_form_customer_form_helper__WEBPACK_IMPORTED_MODULE_3__.newProfileForm)();
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
          this.caseData.vehicleLocation = customerForm.vehicleLocation?.options?.filter(item => item.id === repairDetails?.vehicleLocation)[0]?.label || '';
          this.inspectionId = repairDetails.vehicle?.inspectionId;
          this.repairTypes = repairDetails.repairServiceTypes;
          this.domainId = repairDetails.domainId;
          this.noShowReason = repairDetails.noShowReason;
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
          this.objectId = repairDetails.id;
          this.hasRepairType = !!(repairDetails?.startDate && repairDetails?.endDate);
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
      if (!this.hasRepairType) {
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
      if (!this.hasRepairType) {
        this.commonService.showInfoToast(5000, 'Please update Repair Start and End Date to proceed');
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
  static #_ = this.ɵfac = function CustomerLayoutComponent_Factory(t) {
    return new (t || CustomerLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_5__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_6__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_7__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_8__.CoreService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: CustomerLayoutComponent,
    selectors: [["customer-layout"]],
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
    decls: 13,
    vars: 8,
    consts: [[1, "page-container", "mh-0", "mt-0", "fx-col"], [1, "tab-container", "fx-0"], [1, "main-tab-wrapper"], [3, "mode", "menuItems", "menuItemClick"], ["tabMain", ""], ["class", "user-wrapper", 4, "ngIf"], [1, "tab-wrapper"], [3, "mode", "menuItems", "menuItemClick", 4, "ngIf"], [1, "tab-content", "fx-1"], ["class", "tab-wrapper", 4, "ngIf"], [4, "ngIf"], ["serviceType", "repair", 3, "history", "isLoading", "toggleExpand", 4, "ngIf"], [1, "user-wrapper"], [4, "ngIf", "ngIfElse"], ["expanding", ""], ["class", "user-detail-container fx-col", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "user-detail-container", "fx-col", 3, "ngClass", "ngStyle"], [1, "user-detail-wrapper"], ["userDetail", ""], [1, "user-detail"], [1, "heading-text"], [2, "font-weight", "500"], [1, "title"], [1, "vehicle-detail"], [1, "make-status", "fx-row"], ["class", "fx-row align-center", 4, "ngIf"], [1, "fx-row", "align-center"], [1, "heading-label"], ["class", "fx-row", 4, "ngIf"], [1, "arrow-drop"], [3, "svgIcon", "click"], [1, "fx-row"], ["style", "font-weight: 500;", 4, "ngIf"], [1, "user-detail-expand-wrapper", 3, "ngClass"], [1, "user-detail-more", "fx-col"], [1, "labour-container", 3, "click"], [1, "vehicle-detail-expand", "fx-col"], [1, "fx-row", 2, "gap", "12px"], [1, "status-pill", "with-customer"], ["class", "status-pill no-show", 3, "matTooltip", 4, "ngIf"], [1, "status-pill", "no-show", 3, "matTooltip"], ["tabs", ""], ["serviceType", "repair", 3, "history", "isLoading", "toggleExpand"]],
    template: function CustomerLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "chq-tabs", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_Template_chq_tabs_menuItemClick_3_listener($event) {
          return ctx.changeTab($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CustomerLayoutComponent_div_5_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, CustomerLayoutComponent_chq_tabs_7_Template, 2, 2, "chq-tabs", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, CustomerLayoutComponent_chq_tabs_8_Template, 2, 2, "chq-tabs", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, CustomerLayoutComponent_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, CustomerLayoutComponent_no_access_error_11_Template, 1, 0, "no-access-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, CustomerLayoutComponent_history_12_Template, 1, 2, "history", 11);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", "underline")("menuItems", ctx.repairMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.customerData.firstName && ctx.statusDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__.ChqTabsComponent, _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_10__.NoAccessErrorComponent, _shared_history_history_component__WEBPACK_IMPORTED_MODULE_11__.HistoryComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
    styles: [".page-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\n  background-color: var(--xa-popup-light-gray);\n  padding-top: 0.5vw;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   chq-tabs[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 82px;\n  margin-right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%] {\n  background: var(--xa-bold-gray);\n  border-radius: 10px;\n  margin: 2px calc(5px + 1vw);\n  padding: 10px;\n  z-index: 1;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container.expand-main-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .fx-row[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .fx-row[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .arrow-drop[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  overflow: hidden;\n  margin-top: 5px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .labour-container[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--xa-blue);\n  cursor: pointer;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .labour-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .phone-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 8px;\n  gap: 5px;\n  width: 198px;\n  height: 40px;\n  cursor: pointer;\n  border: 0.4px solid #1B03A3;\n  border-radius: 39px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  font-size: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .phone-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 14px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .vehicle-detail-expand[_ngcontent-%COMP%] {\n  gap: 8px;\n  font-size: 12px;\n  line-height: 20px;\n  color: var(--xa-dark-gray);\n  font-weight: 500;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .vehicle-detail-expand[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper.expand[_ngcontent-%COMP%] {\n  display: block;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background: var(--xa-tab-background);\n  overflow: auto;\n}\n\n.heading-text[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  font-weight: 700;\n  line-height: 20px;\n  max-width: 20ch;\n  word-break: break-all;\n}\n\n.heading-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--xa-dark-gray);\n  font-size: 16px !important;\n}\n\nchq-tabs[_ngcontent-%COMP%]     button {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2px 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #DBDDE2;\n}\n\n.with-customer[_ngcontent-%COMP%] {\n  color: #1B03A3;\n  background-color: #EFF3FF;\n}\n\n.in-yard[_ngcontent-%COMP%] {\n  color: #1B03A3;\n  background-color: #EFF3FF;\n}\n\n.no-show[_ngcontent-%COMP%] {\n  color: #EF4444;\n  background-color: #FEF2F2;\n}\n\n@media screen and (min-device-width: 700px) and (max-device-width: 940px) {\n  .main-tab-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 6px;\n  }\n  .user-detail-container[_ngcontent-%COMP%] {\n    padding: 12px !important;\n  }\n  .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%] {\n    gap: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvYWRkLWN1c3RvbWVycy9jdXN0b21lci1sYXlvdXQvY3VzdG9tZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSjtBQUNJO0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1E7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFaO0FBRVk7RUFDSSxpQkFBQTtBQUFoQjtBQUdZO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFGaEI7QUFJZ0I7RUFTSSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBRUEsVUFBQTtBQVhwQjtBQURvQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQUd4QjtBQVNvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVB4QjtBQVN3Qjs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBUDVCO0FBUzRCOztFQUNJLGVBQUE7QUFOaEM7QUFTNEI7O0VBQ0ksU0FBQTtBQU5oQztBQWF3QjtFQUNJLDBCQUFBO0FBWDVCO0FBY3dCO0VBQ0ksa0JBQUE7QUFaNUI7QUFnQm9CO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWR4QjtBQWdCd0I7RUFDSSxTQUFBO0FBZDVCO0FBZ0I0QjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFkaEM7QUFnQmdDO0VBQ0ksK0JBQUE7QUFkcEM7QUFvQmdDOztFQUVJLHNCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFFQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQXhCcEM7QUEwQm9DOztFQUNJLFlBQUE7RUFDQSxXQUFBO0FBdkJ4QztBQTZCZ0M7RUFDSSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQTNCcEM7QUE2Qm9DO0VBQ0ksc0JBQUE7QUEzQnhDO0FBa0N3QjtFQUNJLGNBQUE7QUFoQzVCO0FBeUNRO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXZDWjtBQTJDSTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQXpDUjs7QUE2Q0E7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FBMUNKOztBQThDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBM0NSOztBQThDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQTNDRjs7QUE2Q0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUExQ0Y7O0FBNENBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBekNGOztBQTJDQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQXhDRjs7QUEyQ0E7RUFDSTtJQUNJLGtCQUFBO0VBeENOO0VBMkNFO0lBQ0ksd0JBQUE7RUF6Q047RUE0Q1U7SUFDSSxRQUFBO0VBMUNkO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xyXG5cclxuICAgIC50YWItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC41dnc7XHJcblxyXG4gICAgICAgIC5tYWluLXRhYi13cmFwcGVyIHtcclxuICAgICAgICAgICAgLy9tYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBjaHEtdGFicyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAvL21pbi13aWR0aDogY2FsYygyOTZweCArIDEwdncpO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogODJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAudXNlci1kZXRhaWwtY29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5leHBhbmQtbWFpbi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJvbGQtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweCBjYWxjKDVweCArIDF2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvL21pbi13aWR0aDogY2FsYygyOTZweCArIDEwdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXItZGV0YWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51c2VyLWRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZlaGljbGUtZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5meC1yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXJyb3ctZHJvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLWRldGFpbC1leHBhbmQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51c2VyLWRldGFpbC1tb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFib3VyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW1haWwtcGhvbmUtY29udGFpbmVyLXdyYXBwZXIge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW1haWwtY29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waG9uZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTk4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC40cHggc29saWQgIzFCMDNBMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzlweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVoaWNsZS1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52ZWhpY2xlLWRldGFpbC1leHBhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmV4cGFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFiLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg2cHggKyAxLjV2dyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYi1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS10YWItYmFja2dyb3VuZCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwY2g7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbi5oZWFkaW5nLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5jaHEtdGFicyB7XHJcbiAgICA6Om5nLWRlZXAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxufVxyXG4uc3RhdHVzLXBpbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMnB4IDEycHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEREUyO1xyXG59XHJcbi53aXRoLWN1c3RvbWVyIHtcclxuICBjb2xvcjogIzFCMDNBMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0ZGO1xyXG59XHJcbi5pbi15YXJkIHtcclxuICBjb2xvcjogIzFCMDNBMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0ZGO1xyXG59XHJcbi5uby1zaG93IHtcclxuICBjb2xvcjogI0VGNDQ0NDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGMkYyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogOTQwcHgpIHtcclxuICAgIC5tYWluLXRhYi13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAudXNlci1kZXRhaWwtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIC52ZWhpY2xlLWRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZngtcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDkwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/timezone */ 72197);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! devextreme-angular/ui/scheduler */ 9282);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ 73886);
/* harmony import */ var devextreme_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/localization */ 41906);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/route-mapper/repair-status-mapper */ 93620);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../booking-preview/booking-preview.component */ 72994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! devextreme-angular/core */ 46209);
/* harmony import */ var devextreme_angular_ui_draggable__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! devextreme-angular/ui/draggable */ 16987);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _helper_directive_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../helper/directive/has-permission/has-permission.directive */ 70115);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);



































const _c0 = ["filter"];
const _c1 = ["draftcustomer"];
const _c2 = ["searchField"];
function BookingJournalComponent_chq_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "chq-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_chq_button_2_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.newBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r0.newBookingButton);
  }
}
function BookingJournalComponent_chq_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "chq-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_chq_button_3_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.openDraftCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r1.draftButton);
  }
}
const _c3 = function (a0) {
  return {
    "disabled": a0
  };
};
function BookingJournalComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_div_7_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.move_scroll("left", _r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](1, _c3, !ctx_r22.checkWrapperScroll("left", _r23)));
  }
}
function BookingJournalComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_div_7_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.move_scroll("right", _r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](1, _c3, !ctx_r24.checkWrapperScroll("right", _r23)));
  }
}
function BookingJournalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingJournalComponent_div_7_div_1_Template, 2, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 49, 50)(4, "chq-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_7_Template_chq_input_controlOutput_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.onBookingTypeChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, BookingJournalComponent_div_7_div_5_Template, 2, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.checkWrapperScroll("both", _r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx_r2.bookingTypeModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.checkWrapperScroll("both", _r23));
  }
}
const _c4 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function BookingJournalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 55)(1, "span")(2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span")(8, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBindV"](6, 2, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](14, _c4, ctx_r3.totalEstimate, ctx_r3.i18n.currencySymbol, ctx_r3.i18n.digitsInfo, ctx_r3.i18n.locale, ctx_r3.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBindV"](12, 8, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](20, _c4, ctx_r3.totalLabour, ctx_r3.i18n.currencySymbol, ctx_r3.i18n.digitsInfo, ctx_r3.i18n.locale, ctx_r3.i18n.position)));
  }
}
const _c5 = function (a0, a1, a2, a3) {
  return {
    "disable-date": a0,
    "weekend": a1,
    "readonly": a2,
    "dinner": a3
  };
};
function BookingJournalComponent_dx_scheduler_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dataCell_r36 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction4"](2, _c5, ctx_r31.disabledDate[dataCell_r36.startDate.toDateString()], ctx_r31.weekendDate[dataCell_r36.startDate.toDateString()], ctx_r31.isReadOnlyPermission, ctx_r31.lunchTime[dataCell_r36.startDate.toString()]));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r31.currentView === "month" ? dataCell_r36.startDate.getDate() : "", " ");
  }
}
const _c6 = function (a0) {
  return {
    "flex-column": a0
  };
};
function BookingJournalComponent_dx_scheduler_10_div_2_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "p", 66);
  }
  if (rf & 2) {
    const dateCell_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c6, ctx_r38.getDateText(dateCell_r37.date).length > 105))("innerHtml", ctx_r38.getDateText(dateCell_r37.date), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function BookingJournalComponent_dx_scheduler_10_div_2_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "p", 66);
  }
  if (rf & 2) {
    const dateCell_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c6, ctx_r39.getDateText(dateCell_r37.date).length > 120))("innerHtml", ctx_r39.getDateText(dateCell_r37.date), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function BookingJournalComponent_dx_scheduler_10_div_2_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dateCell_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, dateCell_r37.date, "d EEE"), " ");
  }
}
function BookingJournalComponent_dx_scheduler_10_div_2_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dateCell_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", dateCell_r37.text, " ");
  }
}
const _c7 = function (a0) {
  return {
    "disable-date": a0
  };
};
function BookingJournalComponent_dx_scheduler_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingJournalComponent_dx_scheduler_10_div_2_p_1_Template, 1, 4, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, BookingJournalComponent_dx_scheduler_10_div_2_p_2_Template, 1, 4, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, BookingJournalComponent_dx_scheduler_10_div_2_p_3_Template, 3, 4, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, BookingJournalComponent_dx_scheduler_10_div_2_p_4_Template, 2, 1, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dateCell_r37 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](5, _c7, ctx_r32.disabledDate[dateCell_r37.date.toDateString()]));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r32.showCostDetail && ctx_r32.currentView !== "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r32.showCostDetail && ctx_r32.currentView !== "month" && ctx_r32.containsOnlyBookingInOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r32.currentView !== "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r32.currentView === "month");
  }
}
function BookingJournalComponent_dx_scheduler_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const timeCell_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", timeCell_r46.text ? _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, timeCell_r46.date, "HH:mm") : "", " ");
  }
}
function BookingJournalComponent_dx_scheduler_10_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 75);
  }
  if (rf & 2) {
    const model_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("background", model_r47.targetedAppointmentData.StageColor);
  }
}
function BookingJournalComponent_dx_scheduler_10_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const model_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", model_r47.targetedAppointmentData.TypeName === "Booking In" ? "login" : "logout")("color", model_r47.targetedAppointmentData.TextColor);
  }
}
const _c8 = function (a0) {
  return {
    hovered: a0
  };
};
function BookingJournalComponent_dx_scheduler_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingJournalComponent_dx_scheduler_10_div_4_div_1_Template, 1, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("mouseover", function BookingJournalComponent_dx_scheduler_10_div_4_Template_div_mouseover_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r53);
      const model_r47 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r52.mouseEnter(model_r47.targetedAppointmentData.ObjectId));
    })("mouseout", function BookingJournalComponent_dx_scheduler_10_div_4_Template_div_mouseout_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r53);
      const model_r47 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r54.mouseLeave(model_r47.targetedAppointmentData.ObjectId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 71)(4, "div", 72)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, BookingJournalComponent_dx_scheduler_10_div_4_span_8_Template, 2, 2, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const model_r47 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](9, _c8, ctx_r34.hovered === model_r47.targetedAppointmentData.ObjectId));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", model_r47.targetedAppointmentData.TypeName === "Booking Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("background", model_r47.targetedAppointmentData.TypeName === "Repair" ? (tmp_2_0 = model_r47.targetedAppointmentData == null ? null : model_r47.targetedAppointmentData.Color) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "#3B82F6" : model_r47.targetedAppointmentData.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", model_r47.targetedAppointmentData.TextColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", model_r47.targetedAppointmentData.Customer == null ? null : model_r47.targetedAppointmentData.Customer.FirstName, " ", model_r47.targetedAppointmentData.Customer == null ? null : model_r47.targetedAppointmentData.Customer.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", model_r47.targetedAppointmentData.TypeName === "Booking In" || model_r47.targetedAppointmentData.TypeName === "Booking Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](model_r47.targetedAppointmentData.TypeName);
  }
}
function BookingJournalComponent_dx_scheduler_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 78)(2, "div", 79)(3, "div", 72)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 80)(7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 83)(12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_dx_scheduler_10_div_5_Template_button_click_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57);
      const model_r55 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r56.handleContextMenu("preview", $event, model_r55.targetedAppointmentData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "mat-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const model_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("border-left", "12px solid " + model_r55.targetedAppointmentData.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", model_r55.targetedAppointmentData.Customer == null ? null : model_r55.targetedAppointmentData.Customer.FirstName, " ", model_r55.targetedAppointmentData.Customer == null ? null : model_r55.targetedAppointmentData.Customer.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Work Provider: ", model_r55.targetedAppointmentData.WorkProviderDto == null ? null : model_r55.targetedAppointmentData.WorkProviderDto.CompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Status: ", model_r55.targetedAppointmentData.DisplayStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "show");
  }
}
function BookingJournalComponent_dx_scheduler_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dx-scheduler", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onAppointmentFormOpening", function BookingJournalComponent_dx_scheduler_10_Template_dx_scheduler_onAppointmentFormOpening_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r58.onAppointmentFormOpening($event));
    })("onAppointmentUpdating", function BookingJournalComponent_dx_scheduler_10_Template_dx_scheduler_onAppointmentUpdating_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r60.onAppointmentUpdating($event));
    })("onAppointmentUpdated", function BookingJournalComponent_dx_scheduler_10_Template_dx_scheduler_onAppointmentUpdated_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r61.onAppointmentUpdated($event));
    })("onAppointmentClick", function BookingJournalComponent_dx_scheduler_10_Template_dx_scheduler_onAppointmentClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r62.onAppointmentClick($event));
    })("onAppointmentDblClick", function BookingJournalComponent_dx_scheduler_10_Template_dx_scheduler_onAppointmentDblClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r63.onAppointmentDblClick($event));
    })("onOptionChanged", function BookingJournalComponent_dx_scheduler_10_Template_dx_scheduler_onOptionChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r64.onOptionChanged($event));
    })("onCellClick", function BookingJournalComponent_dx_scheduler_10_Template_dx_scheduler_onCellClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r65.onCellClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingJournalComponent_dx_scheduler_10_div_1_Template, 2, 7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, BookingJournalComponent_dx_scheduler_10_div_2_Template, 5, 7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, BookingJournalComponent_dx_scheduler_10_div_3_Template, 3, 4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, BookingJournalComponent_dx_scheduler_10_div_4_Template, 11, 11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, BookingJournalComponent_dx_scheduler_10_div_5_Template, 14, 7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "dxo-appointment-dragging", 61)(7, "dxo-scrolling", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", ctx_r4.calendarWidth)("height", ctx_r4.calendarHeight)("editing", true)("dataSource", ctx_r4.calendarData)("views", ctx_r4.schedulerViews)("currentView", ctx_r4.currentView)("adaptivityEnabled", ctx_r4.isSmallScreen)("firstDayOfWeek", 1)("startDayHour", 0)("endDayHour", 24)("currentDate", ctx_r4.currentDate)("cellDuration", 30)("useDropDownViewSwitcher", false)("crossScrollingEnabled", true)("showCurrentTimeIndicator", true)("maxAppointmentsPerCell", ctx_r4.maxAppointmentsPerCell);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "dataCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "dateCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "timeCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "appointment-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "appointment-tooltip-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("group", "customer")("onAdd", ctx_r4.onAppointmentAdd);
  }
}
function BookingJournalComponent_hr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "hr", 22);
  }
}
function BookingJournalComponent_hr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "hr");
  }
}
function BookingJournalComponent_hr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "hr", 22);
  }
}
function BookingJournalComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 20)(1, "div", 5)(2, "chq-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_36_Template_chq_input_controlOutput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r66.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx_r9.filterModal[7]);
  }
}
function BookingJournalComponent_hr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "hr", 22);
  }
}
function BookingJournalComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 20)(1, "div", 5)(2, "chq-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_38_Template_chq_input_controlOutput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r68.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx_r11.filterModal[4]);
  }
}
function BookingJournalComponent_hr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "hr");
  }
}
function BookingJournalComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 20)(1, "div", 5)(2, "chq-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_40_Template_chq_input_controlOutput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r71);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r70.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx_r13.filterModal[5]);
  }
}
function BookingJournalComponent_input_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "input", 85, 86);
  }
}
function BookingJournalComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 87)(1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
  }
}
function BookingJournalComponent_dx_draggable_70_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_dx_draggable_70_a_12_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r79);
      const customer_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r77.handleDraftAction("delete", $event, customer_r73));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "trash");
  }
}
function BookingJournalComponent_dx_draggable_70_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 101)(1, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const customer_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](customer_r73.VehicleLocation);
  }
}
function BookingJournalComponent_dx_draggable_70_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 101)(1, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "No Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const customer_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matTooltip", customer_r73.NoShowReason);
  }
}
const _c9 = function (a0) {
  return {
    "disable-drag": a0
  };
};
const _c10 = function (a0) {
  return [a0];
};
function BookingJournalComponent_dx_draggable_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "dx-draggable", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onDragStart", function BookingJournalComponent_dx_draggable_70_Template_dx_draggable_onDragStart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r82.onItemDragStart($event));
    })("onDragEnd", function BookingJournalComponent_dx_draggable_70_Template_dx_draggable_onDragEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r83);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r84.onItemDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 93)(4, "div", 94)(5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 96)(10, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "mat-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, BookingJournalComponent_dx_draggable_70_a_12_Template, 2, 1, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 99)(14, "div", 100)(15, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, " License Plate:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, BookingJournalComponent_dx_draggable_70_div_19_Template, 3, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 100)(21, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, " Amount:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](25, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, BookingJournalComponent_dx_draggable_70_div_26_Template, 3, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 104)(28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const customer_r73 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("clone", true)("group", "customer")("data", customer_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "drag-menu")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](32, _c9, customer_r73.NumberOfBookings > 0 || !(ctx_r17.bookingTypeModal.options && ctx_r17.bookingTypeModal.options.length > 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matTooltip", customer_r73.FirstName + " " + customer_r73.LastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", customer_r73.FirstName, " ", customer_r73.LastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate1"]("status-pill ", customer_r73.StatusClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", customer_r73.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](34, _c3, !ctx_r17.hasQuotePermission && customer_r73.DraftCustomerType === "Quote"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](36, _c10, customer_r73.Url));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqPermission", "bookingJournal");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](customer_r73.LicensePlateNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", customer_r73.VehicleLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBindV"](25, 23, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](38, _c4, customer_r73.Cost, ctx_r17.i18n.currencySymbol, ctx_r17.i18n.digitsInfo, ctx_r17.i18n.locale, ctx_r17.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", customer_r73.NoShowReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", customer_r73.TimeAgo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](32, 29, customer_r73.CreatedDate, "dd/MM/yyyy hh:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", customer_r73.Source, " ");
  }
}
const _c11 = function (a0) {
  return {
    "margin-right": a0
  };
};
const _c12 = function (a0) {
  return {
    "draft-open": a0
  };
};
const _c13 = function (a0) {
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
  constructor(router, route, formBuilder, dialog, calendarService, commonService, datePipe, cdr, bookingService, caseService, settingsService, xaCurrencyPipe, translateService) {
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
    this.settingsService = settingsService;
    this.xaCurrencyPipe = xaCurrencyPipe;
    this.translateService = translateService;
    this.currentDate = new Date();
    this.startHour = 0;
    this.endHour = 24;
    this.schedulerViews = ['day', 'week', 'month'];
    this.containsOnlyBookingInOut = false;
    this.filterButton = {
      label: 'filter',
      type: 'outline',
      icon: 'filter'
    };
    this.draftButton = {
      label: 'customers',
      type: 'outline',
      icon: 'person-add'
    };
    this.newBookingButton = {
      label: 'new_booking',
      type: 'primary',
      icon: 'plus-active'
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
    this.currentView = localStorage.getItem('currentView') || 'week';
    this.calendarWidth = '100%';
    this.defaultHeight = 'calc(100vh - (5px + 0.8vw))';
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
    this.bookingTypeModal = {
      placeHolder: 'booking_type',
      name: 'OutsideTypeName',
      label: '',
      value: '',
      type: 'checkbox',
      options: []
    };
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
    this.hovered = 0;
    this.multiSlotBooking = false;
    this.showCostDetail = false;
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
    this.draftData = [];
    this.draftPageNumber = 1;
    this.draftDataCount = 0;
    this.draftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      Search: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])
    });
    this.searchVisible = false;
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
    this.commonService.showLoading();
    this.bookingService.getCalendarSetting().subscribe({
      next: result => {
        if (result?.data) {
          this.multiSlotBooking = result.data.enableMultipleSlots;
          //this.showCostDetail = result.data.displayEstimateAndLabourAmounts;
          this.showCostDetail = !this.multiSlotBooking;
          this.getCalendarRequiredData();
        }
      },
      error: err => {
        this.getCalendarRequiredData();
      }
    });
    this.cdr.detectChanges();
  }
  /**
   *
   */
  getCalendarRequiredData() {
    this.getCalendarData(this.generateFilterQuery());
    this.settingsService.getBookingTypes(`?orgIds=${this.userDetail?.organizationDetail.id}`).subscribe({
      next: result => {
        if (result?.data) {
          this.bookingTypeModal.options = [];
          result.data.bookingTypes.forEach(x => {
            this.bookingTypeModal.options.push({
              label: x.name,
              value: x.name
            });
          });
        }
      }
    });
  }
  /**
   * Check if user is bm , then call api otherwise return observable
   */
  getOrgIfBM() {
    if (this.userIsBM) {
      return this.caseService.getOrganizations();
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(null);
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
      (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([this.settingsService.getBookingTypes(`?orgIds=${this.userDetail?.organizationDetail.id}`), this.settingsService.getRepairTypes(`?orgIds=${this.userDetail?.organizationDetail.id}`), this.getOrgIfBM(), this.caseService.getProvidersByOrgId(`?orgIds=${this.userDetail?.organizationDetail.id}`), this.bookingService.getEmployeesByCompetencies(null, this.calendarCurrentStartDate, this.calendarCurrentEndDate, this.userDetail?.organizationDetail.id)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([bookingTypes, repairTypes, orgList, workProvider, employeeList]) => {
        return {
          bookingTypes,
          repairTypes,
          orgList,
          workProvider,
          employeeList
        };
      })).subscribe(result => {
        if (result?.bookingTypes?.data) this.filterModal[0].options = result?.bookingTypes?.data?.bookingTypes.map(x => {
          return {
            label: x.name,
            value: x.name
          };
        });
        if (this.bookingTypeModal.value) {
          this.filterModal[0].options.forEach(option => {
            if (this.bookingTypeModal.value.some(q => q == option.value)) {
              option.checked = true;
            } else {
              option.checked = false;
            }
          });
          this.filterModal[0] = {
            ...this.filterModal[0],
            value: this.bookingTypeModal.value
          };
        }
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
        if (result.repairTypes.data.repairServiceTypes && result.repairTypes.data.repairServiceTypes.length > 0) {
          this.filterModal[6].options = result.repairTypes.data.repairServiceTypes.map(x => {
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
      return current[key] != null ? total + current[key] : total;
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
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([this.calendarService.getCalendarData(query), this.calendarService.getSchedule(this.userDetail?.userId, this.calendarCurrentStartDate, this.calendarCurrentEndDate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(null)))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([calendarData, scheduleData]) => {
      const updatedValue = [];
      calendarData.value.forEach(orgValue => {
        const mappedData = {
          ...orgValue,
          StartDate: dayjs__WEBPACK_IMPORTED_MODULE_0__(orgValue.StartDate).toDate(),
          EndDate: dayjs__WEBPACK_IMPORTED_MODULE_0__(orgValue.EndDate).toDate(),
          Color: orgValue.BookingTypeColor,
          TextColor: ['#B18C6A', '#3B82F6', '#03A31B', '#4B0082', '#807BD5', '#BD0EAC', '#B53E3E', '#F88318', '#7D4C02', '#B18C6A', '#154697'].includes(orgValue.BookingTypeColor) ? 'white' : 'black',
          StageColor: orgValue.IndicatorColor || 'var(--xa-dp-dark-gray)',
          Icon: orgValue.TypeName === 'Assessment' ? 'booking-type-assessment' : 'booking-type-repair',
          BookingType: orgValue.TypeName,
          DisplayStatus: this.getDisplayStatus(orgValue.StatusName)
        };
        if (!this.isSameDay(mappedData.StartDate, mappedData.EndDate)) {
          mappedData.allDay = true;
        }
        updatedValue.push(mappedData);
        this.bookingIdList.push(mappedData.BookingGuid);
        if (!this.multiSlotBooking) {
          const startDate = this.currentView === 'month' ? new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1) : new Date(this.calendarCurrentStartDate);
          const endDate = this.currentView === 'month' ? new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0, 11, 59, 59) : new Date(this.calendarCurrentEndDate);
          if (this.checkDateRange(startDate, endDate, mappedData.StartDate)) {
            this.totalEstimate += mappedData.EstimateCost || 0;
            this.totalLabour += mappedData.LabourCost || 0;
            this.totalBooking++;
          }
        }
        if (this.containsOnlyBookingInOut) {
          this.totalEstimate += mappedData.EstimateCost || 0;
          this.totalLabour += mappedData.LabourCost || 0;
        }
      });
      return {
        calendarData: updatedValue,
        scheduleData
      };
    })).subscribe(result => {
      const sorted = result.calendarData.sort(this.customSortFunction);
      this.calendarData = [...sorted];
      this.commonService.hideLoading();
      this.checkSchedule(result.scheduleData);
      this.scrollToCurrentTime();
    });
  }
  /**
   *
   * @param a
   * @param b
   * @returns
   */
  customSortFunction(a, b) {
    if (a.TypeName < b.TypeName) {
      return -1;
    } else if (a.TypeName > b.TypeName) {
      return 1;
    } else {
      return 0;
    }
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
    const routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper[e.appointmentData.StatusName?.replace(/\s/g, '').toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper.others;
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
      if (e.oldData.TypeName === 'Repair' || e.oldData.TypeName === 'Booking In' || e.oldData.TypeName === 'Booking Out') {
        this.commonService.showInfoToast(2000, 'Cannot update ' + e.oldData.TypeName + ' booking.');
        e.cancel = true;
      }
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
    return date < new Date(new Date().setHours(0, 0, 0, 0));
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
  onBookingTypeChanged(output) {
    const prevValue = this.filterForm.get('TypeName').value || [];
    if (output.value) {
      if (prevValue.indexOf(output.keyFieldValue) === -1) {
        prevValue.push(output.keyFieldValue);
      }
    } else {
      const index = prevValue.indexOf(output.keyFieldValue);
      prevValue.splice(index, 1);
    }
    this.filterForm.get('TypeName').setValue(prevValue);
    this.containsOnlyBookingInOut = prevValue?.length > 0 ? prevValue.every(item => item === 'Booking In' || item === 'Booking Out') : false;
    this.filterModal[0].options.forEach(option => {
      if (prevValue.some(q => q == option.value)) {
        option.checked = true;
      } else {
        option.checked = false;
      }
    });
    this.filterModal[0] = {
      ...this.filterModal[0],
      value: [...prevValue]
    };
    this.bookingTypeModal = {
      ...this.bookingTypeModal,
      value: [...prevValue]
    };
    this.refreshCalendarData();
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
      if (output.name === 'TypeName') {
        this.filterModal[0] = {
          ...this.filterModal[0],
          value: [...prevValue]
        };
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
        prevValue.forEach(value => {
          this.caseService.getCompanyData(value, parseInt(this.filterForm.get('OrgName').value)).subscribe({
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
  applyFilter() {
    const prevValue = this.filterForm.get('TypeName').value || [];
    this.bookingTypeModal.options.forEach(option => {
      if (prevValue.some(q => q == option.value)) {
        option.checked = true;
      } else {
        option.checked = false;
      }
    });
    this.bookingTypeModal = {
      ...this.bookingTypeModal,
      value: [...prevValue]
    };
    this.containsOnlyBookingInOut = prevValue?.length > 0 ? prevValue.every(item => item === 'Booking In' || item === 'Booking Out') : false;
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
    this.bookingTypeModal = {
      ...this.bookingTypeModal,
      value: '',
      options: this.bookingTypeModal.options?.map(x => {
        x.checked = false;
        return x;
      })
    };
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
    this.refreshCalendarData();
    this.filter.close();
  }
  /**
   * get work providers
   * @param orgId
   */
  getWorkProviders(orgId) {
    this.commonService.showLoading();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([this.settingsService.getBookingTypes(`?orgIds=${orgId}`), this.settingsService.getRepairTypes(`?orgIds=${orgId}`), this.caseService.getProvidersByOrgId(`?orgIds=${orgId}`), this.bookingService.getEmployeesByCompetencies(null, this.calendarCurrentStartDate, this.calendarCurrentEndDate, orgId)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([bookingTypes, repairTypes, workProvider, employeeList]) => {
      return {
        bookingTypes,
        repairTypes,
        workProvider,
        employeeList
      };
    })).subscribe(result => {
      if (result?.bookingTypes?.data) this.filterModal[0].options = result?.bookingTypes?.data?.bookingTypes.map(x => {
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
      if (result.repairTypes.data.repairServiceTypes && result.repairTypes.data.repairServiceTypes.length > 0) {
        this.filterModal[6].options = result.repairTypes.data.repairServiceTypes.map(x => {
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
  /**
   *
   */
  mouseEnter(bookingId) {
    this.hovered = bookingId;
  }
  /**
   *
   */
  mouseLeave(bookingId) {
    this.hovered = 0;
  }
  /**
   * Check and pull draft customer data
   */
  openDraftCustomer() {
    if (this.draftDataLoaded) {
      if (this.draftForm.controls.Search.value !== '') {
        this.draftForm.controls.Search.setValue('');
        this.searchVisible = false;
        this.commonService.showLoading();
        this.filterDraft(true);
      } else {
        this.showDraftCustomer();
      }
    } else {
      this.commonService.showLoading();
      this.getDraftCustomerData(true);
    }
  }
  /**
   * open draft customer panel
   */
  showDraftCustomer(open = true) {
    if (open) {
      this.draftCustomer.open();
    }
    this.calendarWidth = window.innerWidth - 510 + 'px';
    this.calendarHeight = this.defaultHeight;
    this.showCalendar = false;
    setTimeout(() => {
      this.showCalendar = true;
      setTimeout(() => {
        this.scrollToCurrentTime();
        // document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        // document.getElementsByTagName('html')[0].scrollTo(10000, 10000);
      }, 0);
    }, 0);
  }
  /**
   *
   */
  getDraftCustomerData(openDraft = false) {
    let queryParams = `$count=true&$top=${10}&$skip=${(this.draftPageNumber - 1) * 10}&$orderby=CreatedDate desc`;
    const searchValue = this.draftForm.controls.Search.value;
    queryParams = this.draftForm.controls.Search.value ? queryParams + `&$filter=contains(concat(concat(FirstName, ' '), LastName), '${searchValue}') or contains(LicensePlateNumber, '${searchValue}')` : queryParams;
    this.calendarService.getDraftCustomer(queryParams)?.subscribe({
      next: result => {
        this.draftDataCount = result['@odata.count'];
        const mappedData = result.value.map(x => {
          const statusTrimmed = x.Status?.replace(/\s/g, '');
          let routeToRedirect = '/';
          if (x.DraftCustomerType === 'Repair') {
            routeToRedirect += src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper[statusTrimmed?.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper.others;
            routeToRedirect = routeToRedirect.replace('{{repairGUID}}', x.RepairGuid);
          } else if (x.DraftCustomerType === 'Quote') {
            routeToRedirect += src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper[statusTrimmed?.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper.others;
            routeToRedirect = routeToRedirect.replace('{{caseGUID}}', x.CaseGuid);
          }
          return {
            ...x,
            Url: routeToRedirect,
            StatusClass: statusTrimmed,
            TimeAgo: dayjs__WEBPACK_IMPORTED_MODULE_0__(x.CreatedDate).fromNow()
          };
        });
        // .sort(function (a, b) {
        //   return new Date(b.CreatedDate).getTime() - new Date(a.CreatedDate).getTime();
        // });
        this.draftData = [...this.draftData, ...mappedData];
        if (openDraft) {
          this.commonService.hideLoading();
          this.showDraftCustomer();
        }
        this.draftDataLoaded = true;
        if (this.draftPageNumber * 10 >= this.draftDataCount) {
          this.scrollView.instance.release(true);
        } else {
          this.scrollView.instance.release(false);
        }
      }
    });
  }
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
        if (e.itemData.DraftCustomerType === 'Quote') {
          if (e.itemData.Status == 'Repair Estimation') {
            const startDate = this.datePipe.transform(e.itemData.StartDate, 'yyyy-MM-ddTHH:mm:ss');
            const endDate = this.datePipe.transform(e.itemData.EndDate, 'yyyy-MM-ddTHH:mm:ss');
            this.router.navigate(['repair/booking/0'], {
              queryParams: {
                'caseId': e.itemData.CaseGuid,
                'startDate': startDate,
                'endDate': endDate
              }
            });
          } else {
            this.router.navigate([`/quote/case/${e.itemData.CaseGuid}`]);
          }
        } else if (e.itemData.DraftCustomerType === 'Repair') {
          const startDate = this.datePipe.transform(e.itemData.StartDate, 'yyyy-MM-ddTHH:mm:ss');
          const endDate = this.datePipe.transform(e.itemData.EndDate, 'yyyy-MM-ddTHH:mm:ss');
          this.router.navigate([`repair/booking/${e.itemData.RepairGuid}`], {
            queryParams: {
              'mode': 'booking',
              'startDate': startDate,
              'endDate': endDate
            }
          });
          // this.patchBooking(e.itemData.StartDate, e.itemData.EndDate, e.itemData.bookingGuid).subscribe({
          //   next: () => {
          //     this.commonService.hideLoading();
          //     this.draftDataLoaded = false;
          //     this.refreshCalendarData();
          //     this.openDraftCustomer();
          //   }
          // });
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
      if (customer.DraftCustomerType == 'Repair') {
        this.router.navigate([`/repair/booking/${customer.RepairGuid}`]);
      } else if (customer.DraftCustomerType == 'Quote') {
        this.router.navigate([`/quote/case/${customer.CaseGuid}`]);
      }
    } else if (type === 'delete') {
      this.commonService.openDeleteDialog('customer').afterClosed().subscribe(data => {
        if (data) {
          this.commonService.showLoading();
          this.calendarService.deleteDraftCustomer(customer.Id).subscribe({
            next: () => {
              this.commonService.hideLoading();
              this.draftPageNumber = 1;
              this.draftData = [];
              this.draftDataLoaded = false;
              this.draftDataCount = 0;
              this.scrollView.instance.release(false);
              this.getDraftCustomerData();
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
    // document.getElementsByTagName('html')[0].style.overflow = ''
  }
  /**
   *
   * @param e
   */
  updateBottomContent(e) {
    this.draftPageNumber++;
    this.getDraftCustomerData();
  }
  /**
   *
   * @param e
   */
  refreshDraft(e) {
    this.draftPageNumber = 1;
    this.draftData = [];
    this.getDraftCustomerData();
  }
  /**
   *
   */
  showInput() {
    this.searchVisible = true;
    setTimeout(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.fromEvent)(this.searchField.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.debounceTime)(1500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(event => {
        this.filterDraft();
      })).subscribe();
    }, 1000);
  }
  /**
   *
   */
  filterDraft(openDraft = false) {
    this.draftPageNumber = 1;
    this.draftData = [];
    this.draftDataLoaded = false;
    this.draftDataCount = 0;
    this.scrollView.instance.release(false);
    this.getDraftCustomerData(openDraft);
  }
  /*Draft customer end*/
  /**
  *
  * @param direction
  * @param el
  */
  move_scroll(direction, el) {
    if (direction === 'left') {
      this.commonService.scrollTo(el, 'left', 100);
    } else {
      this.commonService.scrollTo(el, 'right', 100);
    }
  }
  /**
  *
  * @param direction
  * @param el
  * @returns
  */
  checkWrapperScroll(direction, el) {
    if (direction === 'left') {
      return el.scrollLeft > 0;
    } else if (direction == 'right') {
      return el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
    } else if (direction == 'both') {
      return el.scrollWidth > el.clientWidth;
    }
    return false;
  }
  static #_ = this.ɵfac = function BookingJournalComponent_Factory(t) {
    return new (t || BookingJournalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_8__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_11__.XaCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: BookingJournalComponent,
    selectors: [["chr-booking-journal"]],
    viewQuery: function BookingJournalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_30__.DxSchedulerComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_31__.DxScrollViewComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.scheduler = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.draftCustomer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.scrollView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
      }
    },
    hostBindings: function BookingJournalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("resize", function BookingJournalComponent_resize_HostBindingHandler($event) {
          return ctx.getScreenSize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService])],
    decls: 75,
    vars: 55,
    consts: [[1, "calendar-header-container", 3, "ngClass"], [1, "filter"], [3, "buttonModel", "click", 4, "chqPermission"], [3, "buttonModel", "click"], [1, "row", "custom-checkbox", "total", 3, "ngClass"], [1, "col-12"], ["class", "booking-type-scroll-wrapper", 4, "ngIf"], ["class", "total-amount", 4, "ngIf"], [1, "booking-calendar", "mh-0", 3, "ngClass"], ["startDateExpr", "StartDate", "endDateExpr", "EndDate", "dateCellTemplate", "dateCellTemplate", "timeCellTemplate", "timeCellTemplate", "dataCellTemplate", "dataCellTemplate", "appointmentTemplate", "appointment-template", "appointmentTooltipTemplate", "appointment-tooltip-template", 3, "width", "height", "editing", "dataSource", "views", "currentView", "adaptivityEnabled", "firstDayOfWeek", "startDayHour", "endDayHour", "currentDate", "cellDuration", "useDropDownViewSwitcher", "crossScrollingEnabled", "showCurrentTimeIndicator", "maxAppointmentsPerCell", "onAppointmentFormOpening", "onAppointmentUpdating", "onAppointmentUpdated", "onAppointmentClick", "onAppointmentDblClick", "onOptionChanged", "onCellClick", 4, "ngIf"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "row"], [3, "inputModel", "controlOutput"], [1, "no-line"], [1, "row", "custom-checkbox"], [3, "ngClass", "inputModel", "controlOutput"], ["class", "no-line", 4, "ngIf"], [4, "ngIf"], [1, "two-per-row", 3, "inputModel", "controlOutput"], ["class", "row", 4, "ngIf"], [1, "footer"], [1, "col-6"], [1, "draft-sidenav-container", 3, "hasBackdrop"], [1, "draft-sidenav", 3, "mode", "position"], ["draftcustomer", ""], [1, "draft-container"], [1, "header-wrapper"], [1, "action", "search", 2, "display", "flex", "align-items", "center"], [3, "formGroup"], [1, "xa-form-group"], ["type", "text", "formControlName", "Search", "placeholder", "Search", "name", "Search", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], ["reachBottomText", "Loading...", 3, "scrollByThumb", "showScrollbar", "onReachBottom"], ["class", "item dx-card dx-theme-text-color dx-theme-background-color", "handle", ".draggable", 3, "clone", "group", "data", "onDragStart", "onDragEnd", 4, "ngFor", "ngForOf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", "Addenda Repair"], [1, "booking-type-scroll-wrapper"], ["class", "scroll-btn", 3, "ngClass", "click", 4, "ngIf"], [1, "booking-type-wrapper"], ["job_scroll_wrapper", ""], [1, "booking-filters", 3, "inputModel", "controlOutput"], [1, "scroll-btn", 3, "ngClass", "click"], ["color", "black", "svgIcon", "arrow-left"], ["color", "black", "svgIcon", "arrow-right"], [1, "total-amount"], [2, "background-color", "#5F6571"], ["startDateExpr", "StartDate", "endDateExpr", "EndDate", "dateCellTemplate", "dateCellTemplate", "timeCellTemplate", "timeCellTemplate", "dataCellTemplate", "dataCellTemplate", "appointmentTemplate", "appointment-template", "appointmentTooltipTemplate", "appointment-tooltip-template", 3, "width", "height", "editing", "dataSource", "views", "currentView", "adaptivityEnabled", "firstDayOfWeek", "startDayHour", "endDayHour", "currentDate", "cellDuration", "useDropDownViewSwitcher", "crossScrollingEnabled", "showCurrentTimeIndicator", "maxAppointmentsPerCell", "onAppointmentFormOpening", "onAppointmentUpdating", "onAppointmentUpdated", "onAppointmentClick", "onAppointmentDblClick", "onOptionChanged", "onCellClick"], [3, "ngClass", 4, "dxTemplate", "dxTemplateOf"], [4, "dxTemplate", "dxTemplateOf"], ["style", "display: flex; flex-direction: row;", "class", "outer-wrapper", 3, "ngClass", 4, "dxTemplate", "dxTemplateOf"], [3, "group", "onAdd"], ["mode", "virtual"], [3, "ngClass"], ["class", "calendar-header header-info", 3, "ngClass", "innerHtml", 4, "ngIf"], ["class", "calendar-header date-info", 4, "ngIf"], [1, "calendar-header", "header-info", 3, "ngClass", "innerHtml"], [1, "calendar-header", "date-info"], [1, "outer-wrapper", 2, "display", "flex", "flex-direction", "row", 3, "ngClass"], ["class", "template-color", 3, "background", 4, "ngIf"], [1, "template-wrap", 3, "ngClass", "mouseover", "mouseout"], [1, "template-content-wrap"], [1, "subject"], [1, "type"], ["class", "booking-type", 4, "ngIf"], [1, "template-color"], [1, "booking-type"], [3, "svgIcon", "color"], [1, "tooltip-template-wrap"], [1, "tooltip-content-wrap"], [1, "booking-detail"], [1, "assigned"], [1, "status"], [1, "context-menu"], ["color", "black", 3, "svgIcon"], ["type", "text", "formControlName", "Search", "placeholder", "Search", "name", "Search"], ["searchField", ""], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""], ["handle", ".draggable", 1, "item", "dx-card", "dx-theme-text-color", "dx-theme-background-color", 3, "clone", "group", "data", "onDragStart", "onDragEnd"], [1, "draft-wrap"], ["color", "light-gray", 1, "draggable", 3, "svgIcon", "ngClass"], [1, "draft-content-wrap"], [1, "heading"], [1, "subject", 3, "matTooltip"], [1, "draft-action-menu"], [3, "ngClass", "routerLink"], [3, "click", 4, "chqPermission"], [1, "content"], [1, "content-row"], [1, "content-column"], [1, "value"], ["class", "content-column", 4, "ngIf"], [1, "badge"], ["color", "red", 3, "svgIcon"], [1, "vehicle-location"], [1, "no-show", 3, "matTooltip"]],
    template: function BookingJournalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, BookingJournalComponent_chq_button_2_Template, 1, 1, "chq-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, BookingJournalComponent_chq_button_3_Template, 1, 1, "chq-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_4_listener() {
          return ctx.openFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, BookingJournalComponent_div_7_Template, 6, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, BookingJournalComponent_div_8_Template, 13, 26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, BookingJournalComponent_dx_scheduler_10_Template, 8, 23, "dx-scheduler", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "mat-sidenav-container", 10)(12, "mat-sidenav", 11, 12)(14, "div", 13)(15, "div", 14)(16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 16)(20, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r85);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](13);
          return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](_r5.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "form", 19)(23, "div", 20)(24, "div", 5)(25, "chq-input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_25_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](26, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 23)(28, "div", 5)(29, "chq-input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_29_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](30, BookingJournalComponent_hr_30_Template, 1, 0, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, BookingJournalComponent_hr_31_Template, 1, 0, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 23)(33, "div", 5)(34, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_34_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, BookingJournalComponent_hr_35_Template, 1, 0, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, BookingJournalComponent_div_36_Template, 3, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, BookingJournalComponent_hr_37_Template, 1, 0, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, BookingJournalComponent_div_38_Template, 3, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, BookingJournalComponent_hr_39_Template, 1, 0, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, BookingJournalComponent_div_40_Template, 3, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "div", 29)(42, "div", 20)(43, "div", 30)(44, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_44_listener() {
          return ctx.applyFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 30)(46, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_46_listener() {
          return ctx.resetFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "mat-sidenav-container", 31)(48, "mat-sidenav", 32, 33)(50, "div", 34)(51, "div", 35)(52, "div", 14)(53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 16)(57, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_57_listener() {
          return ctx.draftClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div", 14)(60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 36)(63, "form", 37)(64, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](65, BookingJournalComponent_input_65_Template, 2, 0, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](66, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_66_listener() {
          return ctx.showInput();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](67, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](68, BookingJournalComponent_div_68_Template, 9, 6, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "dx-scroll-view", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onReachBottom", function BookingJournalComponent_Template_dx_scroll_view_onReachBottom_69_listener($event) {
          return ctx.updateBottomContent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, BookingJournalComponent_dx_draggable_70_Template, 35, 44, "dx-draggable", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "div", 43)(72, "div", 44)(73, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](74, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](47, _c11, ctx.isiOS));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqPermission", "bookingJournal");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqPermission", "bookingJournal");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx.filterButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](49, _c12, _r14 == null ? null : _r14.opened));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bookingTypeModal.options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.containsOnlyBookingInOut);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](51, _c11, ctx.isiOS));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 43, "filters"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.filterModal[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](53, _c13, ctx.filterModal[0].options.length < 3 || (ctx.filterModal[0].options[2] == null ? null : ctx.filterModal[0].options[2].label.length) > 12))("inputModel", ctx.filterModal[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.filterModal[0].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.filterModal[3].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.filterModal[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showProviderChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showProviderChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.filterForm.get("WorkProviderDto").value && ctx.filterForm.get("WorkProviderDto").value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.filterForm.get("WorkProviderDto").value && ctx.filterForm.get("WorkProviderDto").value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.filterModal[5].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.filterModal[5].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx.applyButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx.resetButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](55, 45, "customers"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx.draftData.length, " of ", ctx.draftDataCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.draftForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.searchVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (!ctx.draftData || ctx.draftData.length === 0) && ctx.draftDataLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("scrollByThumb", true)("showScrollbar", "onHover");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.draftData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterLink, devextreme_angular__WEBPACK_IMPORTED_MODULE_30__.DxSchedulerComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_32__.DxoAppointmentDraggingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_32__.DxoScrollingComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_33__.DxTemplateDirective, devextreme_angular_ui_draggable__WEBPACK_IMPORTED_MODULE_34__.DxDraggableComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_31__.DxScrollViewComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_12__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__.ChqButtonComponent, _helper_directive_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_14__.HasPermissionDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltip, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__.MatSidenavContainer, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe, src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_11__.XaCurrencyPipe],
    styles: ["[_nghost-%COMP%]  .mat-drawer-container {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-drawer-backdrop {\n  position: fixed;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav {\n  position: fixed;\n  width: 400px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav.filter-sidenav {\n  background-color: #F1F2F6;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .mat-drawer-inner-container {\n  overflow-x: hidden;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .filter-container {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action button {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action button .mat-icon {\n  height: 16px;\n  width: 16px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action.search .xa-form-group {\n  display: flex;\n  outline: 1px solid gray;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action.search .xa-form-group input {\n  height: 26px;\n  width: 200px;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action.search .xa-form-group input:focus-visible {\n  outline: none;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action.search .xa-form-group button {\n  padding: 10px;\n  background: var(--xa-white);\n  outline: 1px solid #868FA0;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action.search .xa-form-group button .mat-icon svg path {\n  fill: #868FA0 !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .checkbox {\n  align-items: center !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .input-label {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper {\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper label {\n  min-width: 74px;\n  max-width: 95%;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper label .span-label {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .dropdown-item .checkbox-wrapper label {\n  width: 100%;\n  height: auto;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container hr {\n  margin: 20px 0;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container hr.no-line {\n  border: none;\n  margin: 10px 0;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container mat-slider {\n  width: 100%;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .two-per-row label {\n  min-width: 133px !important;\n  width: auto !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .footer .row {\n  width: 92%;\n}\n\n.calendar-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n.calendar-header-container[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n}\n.calendar-header-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-left: auto;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n\n.approved[_ngcontent-%COMP%], .Approved[_ngcontent-%COMP%] {\n  color: var(--xa-approve);\n}\n.approved.status-pill[_ngcontent-%COMP%], .Approved.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-approve);\n  color: var(--xa-white);\n}\n\n.PendingApproval[_ngcontent-%COMP%], .pendingapproval[_ngcontent-%COMP%] {\n  color: var(--xa-pending-approval);\n}\n.PendingApproval.status-pill[_ngcontent-%COMP%], .pendingapproval.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-pending-approval);\n  color: var(--xa-white);\n}\n\n.rejected[_ngcontent-%COMP%], .Rejected[_ngcontent-%COMP%], .reject[_ngcontent-%COMP%], .Reject[_ngcontent-%COMP%] {\n  color: var(--xa-red);\n}\n.rejected.status-pill[_ngcontent-%COMP%], .Rejected.status-pill[_ngcontent-%COMP%], .reject.status-pill[_ngcontent-%COMP%], .Reject.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-red);\n  color: var(--xa-white);\n}\n\n.closed[_ngcontent-%COMP%], .Closed[_ngcontent-%COMP%], .Complete[_ngcontent-%COMP%], .complete[_ngcontent-%COMP%] {\n  color: var(--xa-blue);\n}\n.closed.status-pill[_ngcontent-%COMP%], .Closed.status-pill[_ngcontent-%COMP%], .Complete.status-pill[_ngcontent-%COMP%], .complete.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-blue);\n  color: var(--xa-white);\n}\n\n.draft[_ngcontent-%COMP%], .Draft[_ngcontent-%COMP%] {\n  color: var(--xa-draft);\n}\n.draft.status-pill[_ngcontent-%COMP%], .Draft.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-draft);\n  color: var(--xa-white);\n}\n\n.noshow[_ngcontent-%COMP%], .NoShow[_ngcontent-%COMP%] {\n  color: var(--xa-noshow);\n}\n.noshow.status-pill[_ngcontent-%COMP%], .NoShow.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-noshow);\n  color: var(--xa-white);\n}\n\n.repairestimation[_ngcontent-%COMP%], .RepairEstimation[_ngcontent-%COMP%] {\n  color: var(--xa-repair-estimate);\n}\n.repairestimation.status-pill[_ngcontent-%COMP%], .RepairEstimation.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-repair-estimate);\n  color: var(--xa-white);\n}\n\n.uploaddocuments[_ngcontent-%COMP%], .UploadDocuments[_ngcontent-%COMP%] {\n  color: var(--xa-upload-document);\n}\n.uploaddocuments.status-pill[_ngcontent-%COMP%], .UploadDocuments.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-upload-document);\n  color: var(--xa-white);\n}\n\n.addphotos[_ngcontent-%COMP%], .AddPhotos[_ngcontent-%COMP%], .uploadPhotos[_ngcontent-%COMP%], .UploadPhotos[_ngcontent-%COMP%] {\n  color: var(--xa-upload-photo);\n}\n.addphotos.status-pill[_ngcontent-%COMP%], .AddPhotos.status-pill[_ngcontent-%COMP%], .uploadPhotos.status-pill[_ngcontent-%COMP%], .UploadPhotos.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-upload-photo);\n  color: var(--xa-white);\n}\n\n.vehicledetails[_ngcontent-%COMP%], .VehicleDetails[_ngcontent-%COMP%] {\n  color: var(--xa-vehicle-detail);\n}\n.vehicledetails.status-pill[_ngcontent-%COMP%], .VehicleDetails.status-pill[_ngcontent-%COMP%] {\n  background: var(--xa-vehicle-detail);\n  color: var(--xa-white);\n}\n\n.total-amount[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.total[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 72px;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  gap: 0.2vw;\n  font-size: 0.8rem;\n  width: calc(100vw - 640px);\n}\n.total[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n}\n.total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .scroll-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  padding: 8px 8px 6px 7px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  height: 17px;\n}\n.total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .scroll-btn.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .scroll-btn.disabled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .scroll-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 500px;\n  overflow: hidden;\n  padding: 0 10px;\n}\n@media (max-width: 1450px) {\n  .total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n    max-width: 260px;\n  }\n}\n@media (max-width: 1150px) {\n  .total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n@media (max-width: 1040px) {\n  .total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n    max-width: 100px;\n  }\n}\n@media (max-width: 1020px) {\n  .total[_ngcontent-%COMP%]   .booking-type-scroll-wrapper[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n@media (max-width: 1024px) {\n  .total[_ngcontent-%COMP%] {\n    top: 105px;\n    width: 100%;\n  }\n  .total[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.total.draft-open[_ngcontent-%COMP%] {\n  top: 105px;\n  width: 100%;\n}\n.total.draft-open[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n  display: block;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 3px 6px;\n  gap: 0.4vw;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n  word-break: break-all;\n  white-space: break-spaces;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .has-background[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-gray);\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 14px;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.has-background) {\n  background: black;\n  color: white;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.has-background[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-gray);\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.margin-draft[_ngcontent-%COMP%] {\n  margin-right: 400px;\n}\n\n.no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: calc(50vh - 170px);\n}\n.no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n\n.draft-wrap[_ngcontent-%COMP%]   .draft-content-wrap[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: #464D59;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvYm9va2luZy1qb3VybmFsL2Jvb2tpbmctam91cm5hbC9ib29raW5nLWpvdXJuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBUjtBQUVRO0VBQ0kseUJBQUE7QUFBWjtBQUdRO0VBQ0ksa0JBQUE7QUFEWjtBQUlRO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSFo7QUFLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSGhCO0FBT2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMcEI7QUFPb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUx4QjtBQVVvQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUnhCO0FBVXdCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVI1QjtBQVU0QjtFQUNJLGFBQUE7QUFSaEM7QUFZd0I7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBVjVCO0FBY29DO0VBQ0ksd0JBQUE7QUFaeEM7QUF3Qlk7RUFDSSw4QkFBQTtBQXRCaEI7QUEyQm9CO0VBQ0ksbUJBQUE7QUF6QnhCO0FBNEJvQjtFQUNJLGVBQUE7QUExQnhCO0FBNEJ3QjtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBMUI1QjtBQTRCNEI7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQTFCaEM7QUFpQzRCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUEvQmhDO0FBc0NZO0VBQ0ksY0FBQTtBQXBDaEI7QUFzQ2dCO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFwQ3BCO0FBd0NZO0VBQ0ksV0FBQTtBQXRDaEI7QUEwQ2dCO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtBQXhDcEI7QUE2Q1E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBM0NaO0FBNkNZO0VBQ0ksVUFBQTtBQTNDaEI7O0FBNERBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXpESjtBQTJESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBekRSO0FBNERJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBMURSOztBQStFQTs7RUFFSSx3QkFBQTtBQTVFSjtBQThFSTs7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0FBM0VSOztBQStFQTs7RUFFSSxpQ0FBQTtBQTVFSjtBQThFSTs7RUFDSSxzQ0FBQTtFQUNBLHNCQUFBO0FBM0VSOztBQStFQTs7OztFQUlJLG9CQUFBO0FBNUVKO0FBOEVJOzs7O0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQXpFUjs7QUE2RUE7Ozs7RUFJSSxxQkFBQTtBQTFFSjtBQTRFSTs7OztFQUNJLDBCQUFBO0VBQ0Esc0JBQUE7QUF2RVI7O0FBMkVBOztFQUVJLHNCQUFBO0FBeEVKO0FBMEVJOztFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7QUF2RVI7O0FBMkVBOztFQUVJLHVCQUFBO0FBeEVKO0FBMEVJOztFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7QUF2RVI7O0FBMkVBOztFQUVJLGdDQUFBO0FBeEVKO0FBMEVJOztFQUNJLHFDQUFBO0VBQ0Esc0JBQUE7QUF2RVI7O0FBMkVBOztFQUVJLGdDQUFBO0FBeEVKO0FBMEVJOztFQUNJLHFDQUFBO0VBQ0Esc0JBQUE7QUF2RVI7O0FBMkVBOzs7O0VBSUksNkJBQUE7QUF4RUo7QUEwRUk7Ozs7RUFDSSxrQ0FBQTtFQUNBLHNCQUFBO0FBckVSOztBQXlFQTs7RUFFSSwrQkFBQTtBQXRFSjtBQXdFSTs7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0FBckVSOztBQXlFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBdEVKOztBQXlFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQXRFSjtBQXdFSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBdEVSO0FBeUVJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUF2RVI7QUF5RVE7RUFDSSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXZFWjtBQXlFWTtFQUNJLG9CQUFBO0FBdkVoQjtBQXlFZ0I7RUFDSSxZQUFBO0FBdkVwQjtBQTJFWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBekVoQjtBQTZFUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTNFWjtBQTZFWTtFQU5KO0lBT1EsZ0JBQUE7RUExRWQ7QUFDRjtBQTRFWTtFQVZKO0lBV1EsZ0JBQUE7RUF6RWQ7QUFDRjtBQTJFWTtFQWRKO0lBZVEsZ0JBQUE7RUF4RWQ7QUFDRjtBQTBFWTtFQWxCSjtJQW1CUSxnQkFBQTtFQXZFZDtBQUNGO0FBMkVJO0VBbkVKO0lBb0VRLFVBQUE7SUFDQSxXQUFBO0VBeEVOO0VBMEVNO0lBQ0ksY0FBQTtFQXhFVjtBQUNGO0FBMkVJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUF6RVI7QUEyRVE7RUFDSSxjQUFBO0FBekVaO0FBNkVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQTNFUjtBQTZFUTtFQUNJLHdDQUFBO0FBM0VaO0FBOEVRO0VBQ0ksaUJBQUE7QUE1RVo7QUE4RVk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUE1RWhCO0FBK0VZO0VBQ0ksd0NBQUE7QUE3RWhCOztBQW1GQTtFQUNJLGtCQUFBO0FBaEZKOztBQW1GQTtFQUNJLG1CQUFBO0FBaEZKOztBQW1GQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBaEZKO0FBa0ZJO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtBQWhGUjs7QUFvRkE7RUFDSSxjQUFBO0FBakZKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogNTAxICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLm1hdC1kcmF3ZXItYmFja2Ryb3Age1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXNpZGVuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcblxyXG4gICAgICAgICYuZmlsdGVyLXNpZGVuYXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKDE1cHggKyAwLjh2dyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDU1cHggKyAwLjh2dyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnhhLWZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICM4NjhGQTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjODY4RkEwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcblxyXG4gICAgICAgICAgICAuY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY3VzdG9tLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuaW5wdXQtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDc0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Bhbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tib3gtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLm5vLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWF0LXNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnR3by1wZXItcm93IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA1MDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjhweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4vLyAgICAgLmNhbGVuZGFyLWhlYWRlci1jb250YWluZXIge1xyXG4vLyAgICAgICAgIC5maWx0ZXIge1xyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4vLyAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLmNhbGVuZGFyLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAvLyBjaHEtYnV0dG9uIHtcclxuICAgICAgICAvLyAgICAgYnV0dG9uIHtcclxuICAgICAgICAvLyAgICAgICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGF0dXMgY29sb3IgZm9yIGRyYWZ0IGN1c3RvbWVyXHJcbi5hcHByb3ZlZCxcclxuLkFwcHJvdmVkIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1hcHByb3ZlKTtcclxuXHJcbiAgICAmLnN0YXR1cy1waWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1hcHByb3ZlKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uUGVuZGluZ0FwcHJvdmFsLFxyXG4ucGVuZGluZ2FwcHJvdmFsIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1wZW5kaW5nLWFwcHJvdmFsKTtcclxuXHJcbiAgICAmLnN0YXR1cy1waWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1wZW5kaW5nLWFwcHJvdmFsKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVqZWN0ZWQsXHJcbi5SZWplY3RlZCxcclxuLnJlamVjdCxcclxuLlJlamVjdCB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtcmVkKTtcclxuXHJcbiAgICAmLnN0YXR1cy1waWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1yZWQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9zZWQsXHJcbi5DbG9zZWQsXHJcbi5Db21wbGV0ZSxcclxuLmNvbXBsZXRlIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuXHJcbiAgICAmLnN0YXR1cy1waWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ibHVlKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJhZnQsXHJcbi5EcmFmdCB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZHJhZnQpO1xyXG5cclxuICAgICYuc3RhdHVzLXBpbGwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWRyYWZ0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubm9zaG93LFxyXG4uTm9TaG93IHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ub3Nob3cpO1xyXG5cclxuICAgICYuc3RhdHVzLXBpbGwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLW5vc2hvdyk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlcGFpcmVzdGltYXRpb24sXHJcbi5SZXBhaXJFc3RpbWF0aW9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1yZXBhaXItZXN0aW1hdGUpO1xyXG5cclxuICAgICYuc3RhdHVzLXBpbGwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgIH1cclxufVxyXG5cclxuLnVwbG9hZGRvY3VtZW50cyxcclxuLlVwbG9hZERvY3VtZW50cyB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtdXBsb2FkLWRvY3VtZW50KTtcclxuXHJcbiAgICAmLnN0YXR1cy1waWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS11cGxvYWQtZG9jdW1lbnQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGRwaG90b3MsXHJcbi5BZGRQaG90b3MsXHJcbi51cGxvYWRQaG90b3MsXHJcbi5VcGxvYWRQaG90b3Mge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XHJcblxyXG4gICAgJi5zdGF0dXMtcGlsbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtdXBsb2FkLXBob3RvKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udmVoaWNsZWRldGFpbHMsXHJcbi5WZWhpY2xlRGV0YWlscyB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtdmVoaWNsZS1kZXRhaWwpO1xyXG5cclxuICAgICYuc3RhdHVzLXBpbGwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXZlaGljbGUtZGV0YWlsKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG90YWwtYW1vdW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDcycHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjJ2dztcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA2NDBweCk7XHJcblxyXG4gICAgLmNvbC0xMiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib29raW5nLXR5cGUtc2Nyb2xsLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgICAgICAuc2Nyb2xsLWJ0biB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQTIyMzMzMztcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA2cHggN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG5cclxuICAgICAgICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvb2tpbmctdHlwZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwNDBweCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjBweCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgdG9wOiAxMDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgY2hxLWlucHV0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZHJhZnQtb3BlbiB7XHJcbiAgICAgICAgdG9wOiAxMDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgY2hxLWlucHV0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gICAgICAgIGdhcDogMC40dnc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcblxyXG4gICAgICAgIC5oYXMtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAmOm5vdCguaGFzLWJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmhhcy1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXJnaW4tcmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWRyYWZ0IHtcclxuICAgIG1hcmdpbi1yaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5uby1kYXRhLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYyg1MHZoIC0gMTcwcHgpO1xyXG5cclxuICAgIC5uby1kYXRhLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRyYWZ0LXdyYXAgLmRyYWZ0LWNvbnRlbnQtd3JhcCAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICM0NjRENTk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/route-mapper/repair-status-mapper */ 93620);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/chq-toggle/chq-toggle.component */ 65513);
/* harmony import */ var _helper_directive_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helper/directive/has-permission/has-permission.directive */ 70115);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);

















function BookingPreviewComponent_div_0_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.joinAssignees(ctx_r1.data.assignees));
  }
}
function BookingPreviewComponent_div_0_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingPreviewComponent_div_0_div_84_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const repairType_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", ctx_r11.iconMapper[repairType_r12.repairServiceTypeName])("matTooltip", repairType_r12.repairServiceTypeName);
  }
}
function BookingPreviewComponent_div_0_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, BookingPreviewComponent_div_0_div_84_ng_container_5_Template, 2, 2, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, "repair_type"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.data.repairServiceTypes);
  }
}
function BookingPreviewComponent_div_0_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 28)(5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "parts"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", ctx_r5.data.repairPartsGeneralStatus || "Not Ordered");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", ctx_r5.partsIconMapper[ctx_r5.data.repairPartsGeneralStatus || "Not Ordered"]);
  }
}
const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};
function BookingPreviewComponent_div_0_div_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, booking_r13.bookingTypeColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](booking_r13.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 3, booking_r13.startDate, "EE d, h:mm a"));
  }
}
function BookingPreviewComponent_div_0_a_137_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "edit_booking"));
  }
}
function BookingPreviewComponent_div_0_a_137_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "view_booking"));
  }
}
const _c1 = function () {
  return {
    mode: "edit"
  };
};
function BookingPreviewComponent_div_0_a_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BookingPreviewComponent_div_0_a_137_label_2_Template, 3, 3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BookingPreviewComponent_div_0_a_137_label_3_Template, 3, 3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r7.bookingStatusUrl)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.data.isReadOnlyPermission);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.data.isReadOnlyPermission);
  }
}
function BookingPreviewComponent_div_0_div_138_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingPreviewComponent_div_0_div_138_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.deleteBooking(ctx_r17.data.bookingGuid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, "cancel_booking"));
  }
}
function BookingPreviewComponent_div_0_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BookingPreviewComponent_div_0_div_138_button_2_Template, 5, 4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("chqPermission", "newBooking");
  }
}
function BookingPreviewComponent_div_0_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 38)(3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 40)(7, "chq-toggle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ToggleChange", function BookingPreviewComponent_div_0_div_139_Template_chq_toggle_ToggleChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.onToggleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "arrived"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r9.isArrived)("name", "arrived");
  }
}
function BookingPreviewComponent_div_0_div_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 38)(3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 40)(7, "chq-toggle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ToggleChange", function BookingPreviewComponent_div_0_div_140_Template_chq_toggle_ToggleChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.onToggleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "no_show"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r10.isNoShow)("name", "noshow");
  }
}
function BookingPreviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "button")(7, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingPreviewComponent_div_0_Template_mat_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-dialog-content", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 12)(24, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 11)(30, "div", 12)(31, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 9)(38, "div", 10)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 11)(43, "div", 12)(44, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 11)(50, "div", 12)(51, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 11)(57, "div", 12)(58, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 11)(64, "div", 12)(65, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 9)(72, "div", 10)(73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 11)(77, "div", 12)(78, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, BookingPreviewComponent_div_0_ng_container_81_Template, 3, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, BookingPreviewComponent_div_0_ng_template_82_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, BookingPreviewComponent_div_0_div_84_Template, 6, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, BookingPreviewComponent_div_0_div_86_Template, 7, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 20)(88, "div", 11)(89, "div", 12)(90, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 9)(96, "div", 10)(97, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 11)(101, "div", 12)(102, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](104, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](107, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 11)(109, "div", 12)(110, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](112, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](115, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 11)(117, "div", 12)(118, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](120, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 22)(124, "div", 10)(125, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](127, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](129, BookingPreviewComponent_div_0_div_129_Template, 8, 8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "div", 22)(131, "div", 10)(132, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](134, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 11)(136, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](137, BookingPreviewComponent_div_0_a_137_Template, 4, 6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](138, BookingPreviewComponent_div_0_div_138_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](139, BookingPreviewComponent_div_0_div_139_Template, 8, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](140, BookingPreviewComponent_div_0_div_140_Template, 8, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](83);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](87, _c0, ctx_r0.data.bookingTypeColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 43, "booking_details"), " - ", ctx_r0.data.typeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 45, "customer_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 47, "first_name"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r0.data.customer == null ? null : ctx_r0.data.customer.firstName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 49, "last_name"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r0.data.customer == null ? null : ctx_r0.data.customer.lastName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 51, "work_provider"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r0.data.workProviderDto == null ? null : ctx_r0.data.workProviderDto.companyName) || (ctx_r0.data.workProviderDto == null ? null : ctx_r0.data.workProviderDto.companyOrgType) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 53, "vehicle_detail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 55, "car_make"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r0.data.vehicle == null ? null : ctx_r0.data.vehicle.vehicleMake) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](53, 57, "car_model"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r0.data.vehicle == null ? null : ctx_r0.data.vehicle.vehicleModel) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](60, 59, "license_plate"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r0.data.vehicle == null ? null : ctx_r0.data.vehicle.licensePlateNumber) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](67, 61, "import_interval"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r0.data.vehicle == null ? null : ctx_r0.data.vehicle.vehicleId) ? (ctx_r0.data.vehicle == null ? null : ctx_r0.data.vehicle.modelYearRange) || "-" : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](75, 63, "repair_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](80, 65, "assigned_to"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data.assignees == null ? null : ctx_r0.data.assignees.length) > 0)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.data.repairServiceTypes && ctx_r0.data.repairServiceTypes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.data.repairServiceTypes && ctx_r0.data.repairServiceTypes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](92, 67, "stage"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.data.stage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.data.stage || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](99, 69, "booking_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](104, 71, "booking_in"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](107, 73, ctx_r0.data.startDate, "EE d, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](112, 76, "booking_out"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](115, 78, ctx_r0.data.endDate, "EE d, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](120, 81, "status"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.data.displayStatus || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](127, 83, "related_bookings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.data.relatedBookings);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](134, 85, "actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("chqPermission", "viewBooking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.data.isReadOnlyPermission && ctx_r0.showDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data.typeName === "Repair" || ctx_r0.data.typeName === "Booking In" || ctx_r0.data.typeName === "Booking Out") && ctx_r0.isArrivedVisible && !ctx_r0.data.isReadOnlyPermission);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.data.typeName === "Repair" || ctx_r0.data.typeName === "Booking In" || ctx_r0.data.typeName === "Booking Out") && ctx_r0.data.statusName === "Draft" && ctx_r0.isNoShowVisible && !ctx_r0.data.isReadOnlyPermission);
  }
}
class BookingPreviewComponent {
  constructor(dialog, dialogRef, data, router, calendarService, commonService, bookingService) {
    this.dialog = dialog;
    this.dialogRef = dialogRef;
    this.data = data;
    this.router = router;
    this.calendarService = calendarService;
    this.commonService = commonService;
    this.bookingService = bookingService;
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
    this.pageReady = false;
    this.changesMade = false;
    this.partsIconMapper = {
      'Ordered': 'parts-ordered',
      'Arrived Partially': 'parts-arrived-partial',
      'Arrived': 'parts-arrived',
      'Ordered Partially': 'parts-ordered-partial',
      'Not Ordered': 'parts-not-ordered'
    };
    // Close dialog ref on route changes
    router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationStart), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.dialogRef.close()), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe();
  }
  /**
   * booking url
   */
  get bookingStatusUrl() {
    const {
      statusName,
      objectGuid
    } = this.data;
    let routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__.RepairStatusMapper[statusName?.replace(/\s/g, '')?.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__.RepairStatusMapper.others;
    routeToRedirect = routeToRedirect.replace('{{repairGUID}}', objectGuid);
    return routeToRedirect;
  }
  /**
   * show delete
   */
  get showDelete() {
    if (this.status?.toLowerCase() === 'draft' || this.isRepairCreatedFromCase && this.status?.toLowerCase() == 'repairestimation') {
      return true;
    }
    return false;
  }
  /**
   * detects changes in input attributes
   * @param changes
   */
  ngOnInit() {
    this.commonService.showLoading();
    this.bookingService.getBookingByGuid(this.data.BookingGuid).subscribe({
      next: result => {
        if (result?.data) {
          this.commonService.hideLoading();
          this.pageReady = true;
          this.data = result.data;
          this.data.displayStatus = this.getDisplayStatus(this.data.statusName);
          this.isArrived = this.data.isArrived;
          this.isNoShow = this.data.isNoShow;
          this.status = this.data.statusName;
          this.isRepairCreatedFromCase = this.data.isRepairCreatedFromCase;
          this.calculateTimeDifference();
        }
      },
      error: err => {
        this.commonService.hideLoading();
        this.dialogRef.close({
          'success': this.changesMade,
          'type': 'refresh'
        });
      }
    });
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
  calculateTimeDifference() {
    const currentDate = new Date();
    const bookingInDate = new Date(this.data.startDate);
    const canActivateDate = new Date(bookingInDate.getTime() - 30 * 60000);
    if (currentDate > canActivateDate) {
      this.isArrivedVisible = true;
    }
    if (currentDate > bookingInDate) {
      this.isNoShowVisible = true;
      this.isArrivedVisible = false;
    }
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
  deleteBooking(id) {
    this.commonService.openDeleteDialog().afterClosed().subscribe(data => {
      if (data) {
        this.commonService.showLoading();
        this.bookingService.deleteBooking(id).subscribe({
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
    this.calendarService.updateBooking(this.data.bookingGuid, patchValue).subscribe({
      next: () => {
        this.commonService.hideLoading();
        this.changesMade = true;
      },
      error: () => {
        e.cancel = true;
      }
    });
  }
  joinAssignees(assignees) {
    return assignees?.map(x => x.assigneeName).join(', ');
  }
  closeDialog() {
    this.dialogRef.close({
      'success': this.changesMade,
      'type': 'refresh'
    });
  }
  static #_ = this.ɵfac = function BookingPreviewComponent_Factory(t) {
    return new (t || BookingPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_3__.BookingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BookingPreviewComponent,
    selectors: [["booking-preview"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService])],
    decls: 1,
    vars: 1,
    consts: [["class", "dialog-with-header", 4, "ngIf"], [1, "dialog-with-header"], [1, "header", 3, "ngStyle"], [1, "title"], [1, "action"], ["color", "white", 3, "svgIcon", "click"], [1, "mat-typography"], [1, "booking-preview-wrapper"], [1, "booking-preview-content"], [1, "section-header"], [1, "section-title"], [1, "detail-row"], [1, "detail-col"], [1, "label-content"], [1, "info-content", "short-text"], [1, "info-content"], [4, "ngIf", "ngIfElse"], ["emptyAssignee", ""], ["class", "detail-row", 4, "ngIf"], ["class", "detail-col", 4, "ngIf"], [1, "booking-preview-action"], [1, "stage-content", 3, "ngClass"], [1, "section-header", "transparent"], ["class", "detail-row", 4, "ngFor", "ngForOf"], ["class", "button button-outline", 3, "routerLink", "queryParams", 4, "chqPermission"], ["inner", "", 1, "info-content"], [4, "ngFor", "ngForOf"], [3, "svgIcon", "matTooltip"], [1, "icon-container"], ["matTooltipPosition", "above", 1, "icon-wrapper", 3, "matTooltip"], [3, "svgIcon"], [1, "stage-content", 3, "ngStyle"], [1, "button", "button-outline", 3, "routerLink", "queryParams"], ["aria-hidden", " false", "aria-label", "edit icon", 3, "svgIcon"], ["class", "action-btn", 4, "ngIf"], [1, "action-btn"], ["class", "button-outline-danger", 3, "click", 4, "chqPermission"], [1, "button-outline-danger", 3, "click"], [1, "toggle"], [1, "label-toggle"], [1, "toggle-button"], [3, "checked", "name", "ToggleChange"]],
    template: function BookingPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BookingPreviewComponent_div_0_Template, 141, 89, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pageReady);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_4__.ChqToggleComponent, _helper_directive_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_5__.HasPermissionDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
    styles: [".dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n}\n\n.booking-preview-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 calc(100% - 125px);\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 16px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 125px;\n  flex-direction: column;\n  gap: 16px;\n  background-color: var(--xa-popup-light-gray);\n  padding: 16px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .stage-content[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 400;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .stage-content.closed[_ngcontent-%COMP%] {\n  background: var(--xa-blue);\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--xa-black);\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-col[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-col[_ngcontent-%COMP%]   .label-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  display: flex;\n  align-items: center;\n  color: var(--xa-dark-gray);\n  gap: 5px;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex: 1 1 auto;\n}\n.toggle[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.button-outline[_ngcontent-%COMP%], .button-outline-danger[_ngcontent-%COMP%] {\n  width: 155px !important;\n  height: 33px !important;\n  justify-content: flex-start !important;\n  filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n}\n.button-outline[_ngcontent-%COMP%]:hover, .button-outline-danger[_ngcontent-%COMP%]:hover {\n  filter: drop-shadow(10px 1px 3px rgba(96, 108, 128, 0.05));\n}\n\na.button-outline[_ngcontent-%COMP%] {\n  height: 11px !important;\n  width: 128px !important;\n  text-decoration: none;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.icon-wrapper[_ngcontent-%COMP%] {\n  background: var(--xa-lighter-gray);\n  padding: 6px 4px;\n  height: 25px;\n  width: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvYm9va2luZy1qb3VybmFsL2Jvb2tpbmctcHJldmlldy9ib29raW5nLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxzQkFBQTtBQURaOztBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBSEo7QUFLSTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtBQUpSO0FBT0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTFI7QUFPUTtFQUNJLDBCQUFBO0FBTFo7QUFTSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBUFI7QUFVSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBUlI7O0FBWUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQVRKO0FBV0k7RUFDSSxjQUFBO0FBVFI7QUFXUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0FBVFo7O0FBY0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBWEo7QUFhSTtFQUNJLGVBQUE7QUFYUjs7QUFlQTs7RUFFSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5REFBQTtBQVpKO0FBY0k7O0VBQ0ksMERBQUE7QUFYUjs7QUFlQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQVpKOztBQWVBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFaSjs7QUFlQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFaSjs7QUFlQTtFQUNJLFdBQUE7QUFaSiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctd2l0aC1oZWFkZXIge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib29raW5nLXByZXZpZXctd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAuYm9va2luZy1wcmV2aWV3LWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMSAxIGNhbGMoMTAwJSAtIDEyNXB4KTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib29raW5nLXByZXZpZXctYWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDEgMSAxMjVweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFnZS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICYuY2xvc2VkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRldGFpbC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5kZXRhaWwtY29sIHtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgICAgICAgLmxhYmVsLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgICAudG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uLW91dGxpbmUsXHJcbi5idXR0b24tb3V0bGluZS1kYW5nZXIge1xyXG4gICAgd2lkdGg6IDE1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMzcHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDNweCByZ2JhKDk2LCAxMDgsIDEyOCwgMC4wNSkpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMTBweCAxcHggM3B4IHJnYmEoOTYsIDEwOCwgMTI4LCAwLjA1KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmEuYnV0dG9uLW91dGxpbmUge1xyXG4gICAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTI4cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtbGlnaHRlci1ncmF5KTtcclxuICAgIHBhZGRpbmc6IDZweCA0cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/outbound/outbound.service */ 23864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widgets/chq-custom-loader/chq-custom-loader.component */ 55309);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);














function LoungeListComponent_div_4_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function LoungeListComponent_div_4_img_5_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.avatar = "");
    })("load", function LoungeListComponent_div_4_img_5_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.orgImageLoading = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r3.orgLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function LoungeListComponent_div_4_ng_template_6_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r9.orgName);
  }
}
function LoungeListComponent_div_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, LoungeListComponent_div_4_ng_template_6_label_0_Template, 2, 1, "label", 25);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.orgName);
  }
}
function LoungeListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "a", 15)(4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, LoungeListComponent_div_4_img_5_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LoungeListComponent_div_4_ng_template_6_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "chq-custom-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 21)(13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.orgLogoUrl)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showLoading", ctx_r0.orgImageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 7, "outbound_dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 9, "last_refreshed"), ": ", ctx_r0.LastRefreshed, "");
  }
}
function LoungeListComponent_mat_card_6_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r12.getHeaderTableDarkClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10.CustomerName);
  }
}
function LoungeListComponent_mat_card_6_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th")(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Customer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10.CompanyName);
  }
}
function LoungeListComponent_mat_card_6_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 41)(1, "div", 53)(2, "div", 54)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const job_r17 = ctx.$implicit;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r14.getHeaderTableClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", job_r17.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", job_r17.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](job_r17.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", job_r17.CompletePercentage, "%");
  }
}
const _c0 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function LoungeListComponent_mat_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "table", 31)(5, "tr", 32)(6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, LoungeListComponent_mat_card_6_th_7_Template, 3, 2, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th")(9, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Make & Model:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th")(13, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Plate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 36)(17, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, LoungeListComponent_mat_card_6_th_21_Template, 4, 1, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 38)(23, "div", 39)(24, "button", 40)(25, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 42)(30, "div", 43)(31, "div", 44)(32, "table", 45)(33, "tr", 46)(34, "th", 47)(35, "div", 48)(36, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function LoungeListComponent_mat_card_6_Template_img_load_36_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const item_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](item_r10.ImageUrlFirstLoad = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "chq-custom-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, LoungeListComponent_mat_card_6_th_38_Template, 9, 6, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10.VehicleMake + " " + item_r10.VehicleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10.VehicleLicensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBindV"](20, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction5"](24, _c0, item_r10.TotalAmount, ctx_r1.i18n.currencySymbol, ctx_r1.i18n.digitsInfo, ctx_r1.i18n.locale, ctx_r1.i18n.position)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.CompanyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10, "text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 22, item_r10.IsDeliveryTypeEnable && item_r10.DeliveryDTO ? "picked_up" : item_r10.OutboundStatus.split(" ").join(""))));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r10.ImageUrlFirst === null ? "assets/img/front-left.png" : item_r10.ImageUrlFirst, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showLoading", item_r10.ImageUrlFirstLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r10.Jobs);
  }
}
function LoungeListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
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
    this.timeInterval = null;
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
    this.timeInterval = setInterval(() => {
      this.updateDate();
    }, 1000);
  }
  /**
     * getCardTableClass
     */
  getCardTableClass(repairs) {
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
  getHeaderTableDarkClass(repairs, type = 'background') {
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
  getHeaderTableClass(repairs) {
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
  updateDate() {
    this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
  }
  /**
   * getOutboundData
   */
  getOutboundData(flag) {
    this.CallingAPI = true;
    if (flag) this.commonService.showLoading();
    const StartDate = new Date(new Date().toDateString()).toISOString();
    const EndDate = new Date(new Date(new Date().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
    const query = `$filter=RepairEndDate ge ${StartDate} and RepairEndDate lt ${EndDate} or PickUpDate ge ${StartDate} and PickUpDate lt ${EndDate}`;
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
    clearInterval(this.timeInterval);
  }
  static #_ = this.ɵfac = function LoungeListComponent_Factory(t) {
    return new (t || LoungeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LoungeListComponent,
    selectors: [["app-lounge-list"]],
    hostBindings: function LoungeListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fullscreenchange", function LoungeListComponent_fullscreenchange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("webkitfullscreenchange", function LoungeListComponent_webkitfullscreenchange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("mozfullscreenchange", function LoungeListComponent_mozfullscreenchange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("MSFullscreenChange", function LoungeListComponent_MSFullscreenChange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("onwebkitfullscreenchange", function LoungeListComponent_onwebkitfullscreenchange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService])],
    decls: 12,
    vars: 4,
    consts: [[1, "page-container", "lounge-list-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "lounge-list-header"], [1, "header-content", "fx-row", "justify-space-between", "align-center"], [2, "margin-left", "auto", 3, "buttonModel", "click"], ["class", "fullscreen", 4, "ngIf"], [1, "lounge-content"], ["class", "card block", 4, "ngFor", "ngForOf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], [1, "fullscreen"], [1, "lounge-header", "fx-0", "fx-col", "justify-center"], [1, "lounge-header-content", "align-center", "fx-row"], [1, "xa-logo-wrapper"], [1, "menu-image"], [3, "src", "error", "load", 4, "ngIf", "ngIfElse"], ["name", ""], [3, "showLoading"], [1, "lounge-title-wrapper"], [1, "date-container"], [1, "lounge-date-wrapper"], [1, "lounge-last-refresh"], [3, "src", "error", "load"], ["class", "org-name", 4, "ngIf"], [1, "org-name"], [1, "card", "block"], [1, "card-container"], [1, "card-header"], [1, "card-header-container", "align-center", "fx-row"], [1, "card-head-table", 3, "ngClass"], [1, "head-row", 3, "ngClass"], [1, "head-row-col-1"], ["class", "header-customerName", 3, "ngClass", 4, "ngIf"], [1, "sub-text"], [1, "header-amount"], [4, "ngIf"], [1, "head-item", 2, "margin-left", "auto"], [1, "repair-state"], [1, "repair-state-btn"], [3, "ngClass"], [1, "card-content", 3, "ngClass"], [1, "job-list-container", "fx-row", "align-center"], [1, "jobs-list"], [1, "card-table"], [1, "card-row"], [1, "card-job", 3, "ngClass"], [1, "outbound-header-card", 2, "justify-content", "center"], ["alt", "", 1, "rapair-car-img", 3, "src", "load"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "header-customerName", 3, "ngClass"], [1, "header-content-data"], [1, "outbound-header-card", 3, "matTooltip"], [1, "outbound-content"], ["svgIcon", "checked", 2, "width", "15px", "height", "15px"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
    template: function LoungeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoungeListComponent_Template_chq_button_click_3_listener() {
          return ctx.openFullscreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, LoungeListComponent_div_4_Template, 18, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LoungeListComponent_mat_card_6_Template, 39, 30, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, LoungeListComponent_div_7_Template, 9, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonModel", ctx.FullscreenButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.outboundData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.outboundData.length === 0 && !ctx.CallingAPI);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__.ChqButtonComponent, _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_4__.CustomLoaderComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_7__.LowerCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_5__.XaCurrencyPipe],
    styles: [".lounge-list-container[_ngcontent-%COMP%] {\n  background: #F1F2F6;\n  height: calc(100vh - 110px);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--xa-gray);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  overflow-y: auto;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n  background-color: #fff;\n  border-radius: 10px;\n  width: calc(98vw - 100px);\n  box-shadow: none;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n  border-radius: 10px 10px 0px 0px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px 10px 0px 0px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  text-align: left;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 0.625rem;\n  gap: 0.5rem;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-row-col-1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-row-col-1[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n  font-weight: 400;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .header-content-data[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  font-size: 16px;\n  font-weight: 700;\n  display: inline-block;\n  word-break: break-all;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  margin: 0px 2px;\n  max-width: 45px;\n  max-height: 35px;\n  background: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .repair-state[_ngcontent-%COMP%]   .repair-state-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 12px;\n  font-family: \"Inter\";\n  font-style: normal;\n  pointer-events: none;\n  border-radius: 22px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .repair-state[_ngcontent-%COMP%]   .lap-btn[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n  border: 2px solid var(--xa-white);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .card-job-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  padding: 10px 9px;\n  height: 100px;\n  width: 128px;\n  border-radius: 10px;\n  border: 2px solid var(--xa-white);\n  font-size: 12px;\n  font-weight: 400;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .card-job-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  word-break: break-all;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  width: 124px;\n  border-radius: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 100px;\n  border-radius: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-move-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%] {\n  border: 1px solid #03A31B;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #1B9235;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%] {\n  border: 1px solid #D2A120;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #D2A600;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%] {\n  border: 1px solid #1a2233;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  gap: 0.4375rem;\n  flex-direction: column;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-date-wrapper[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-last-refresh[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%] {\n  background-color: #1B03A3;\n  color: var(--xa-white);\n  min-height: 81px;\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: transparent;\n  padding: 0px 15px 0px 40px;\n  height: 100%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .lounge-title-wrapper[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  position: relative;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  max-height: 60px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 14px;\n  color: var(--xa-black-dark);\n  padding: 8px 4px;\n  text-align: center;\n  border: 1px solid var(--xa-light-gray);\n  border-radius: 8px;\n  display: flex;\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: var(--xa-white);\n}\n\n.border-right-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 1px;\n  height: 30px;\n  background: #0B0E15;\n}\n\n.header-customerName[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border-radius: 0.625rem;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  padding: 16px;\n}\n\n.header-table-gray[_ngcontent-%COMP%] {\n  background-color: #E1E0E5;\n}\n\n.header-table-gray-dark[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n\n.header-table-gray-dark-text[_ngcontent-%COMP%] {\n  color: #78777D;\n}\n\n.header-table-green[_ngcontent-%COMP%] {\n  background-color: #85E194;\n}\n\n.header-table-green-dark[_ngcontent-%COMP%] {\n  background-color: #03A31B;\n}\n.header-table-green-dark[_ngcontent-%COMP%]:is(button) {\n  border: 2px solid #FFF;\n}\n\n.header-table-green-dark-text[_ngcontent-%COMP%] {\n  color: #03A31B;\n}\n\n.header-table-yellow[_ngcontent-%COMP%] {\n  background-color: #E0C173;\n}\n\n.header-table-yellow-dark[_ngcontent-%COMP%] {\n  background-color: #D2A120;\n}\n.header-table-yellow-dark[_ngcontent-%COMP%]:is(button) {\n  border: 2px solid #FFF;\n}\n\n.header-table-yellow-dark-text[_ngcontent-%COMP%] {\n  color: #D2A120;\n}\n\n.outbound-header-card[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 74px;\n  border-radius: 0.625rem;\n  background-color: #F1F2F6;\n  font-size: 12px;\n  font-weight: normal;\n  margin: 16px auto;\n  color: #0B0E15;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 16px 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  border-radius: 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #F9FAFB;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  font-weight: 800;\n  font-size: 16px;\n  text-align: left;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .color-block[_ngcontent-%COMP%] {\n  display: block;\n  height: 10px;\n  border-top-right-radius: 0.625rem;\n  border-top-left-radius: 0.625rem;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin: 0;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  color: #E5E7EB;\n  font-size: 12px;\n  font-weight: 500;\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvbG91bmdlLWxpc3QvbG91bmdlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFHUTtFQUNJLGVBQUE7QUFEWjtBQUdZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQURoQjtBQU9JO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUxSO0FBT1E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFMWjtBQVVnQjtFQUVJLG1CQUFBO0VBQ0EsZ0NBQUE7QUFUcEI7QUFXb0I7RUFDSSw4QkFBQTtBQVR4QjtBQVd3QjtFQUNJLFdBQUE7RUFDQSxnQ0FBQTtBQVQ1QjtBQVU0QjtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVJoQztBQVNnQztFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFQbEM7QUFRa0M7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTnBDO0FBU2dDO0VBQ0ksZ0JBQUE7QUFQcEM7QUFTb0M7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFQeEM7QUFVb0M7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFSeEM7QUFZb0M7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFWeEM7QUFZd0M7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVY1QztBQWdCd0M7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUFmNUM7QUFrQndDO0VBQ0ksK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBaEI1QztBQXlCZ0I7RUFDSSxnQ0FBQTtBQXZCcEI7QUF5Qm9CO0VBQ0ksV0FBQTtBQXZCeEI7QUEwQndCO0VBQ0ksaUJBQUE7QUF4QjVCO0FBNEJnQztFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTFCcEM7QUE0Qm9DO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBMUJ4QztBQTRCd0M7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBMUI1QztBQTRCNEM7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FBMUJoRDtBQThCd0M7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE1QjVDO0FBOEI0QztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUE1QmhEO0FBcUN3QjtFQUNJLDZCQUFBO0FBbkM1QjtBQTBDUTtFQUNJLGFBQUE7QUF4Q1o7QUEwQ1E7RUFDSSx5QkFBQTtBQXhDWjtBQXlDWTtFQUNJLDZCQUFBO0FBdkNoQjtBQTBDWTtFQUNJLHlCQUFBO0FBeENoQjtBQTRDUTtFQUNJLHlCQUFBO0FBMUNaO0FBMkNZO0VBQ0ksNkJBQUE7QUF6Q2hCO0FBNENZO0VBQ0kseUJBQUE7QUExQ2hCO0FBOENRO0VBQ0kseUJBQUE7QUE1Q1o7QUE2Q1k7RUFDSSw2QkFBQTtBQTNDaEI7QUE4Q1k7RUFDSSx5QkFBQTtBQTVDaEI7QUFnRFE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBOUNaO0FBZ0RZO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtBQTlDaEI7QUFvRFE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQWxEWjtBQW9EWTtFQUNFLGdCQUFBO0FBbERkO0FBcURZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBbkRkO0FBdURRO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQXJEWjtBQXVEWTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFyRGhCO0FBdURnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQXJEcEI7QUF3RGdCO0VBQ0kscUJBQUE7QUF0RHBCO0FBd0RvQjtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF0RHhCO0FBd0R3QjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQXRENUI7QUF5RHdCO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUF2RDVCOztBQWtFQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBL0RGOztBQWlFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUE5REY7O0FBZ0VBO0VBQ0UseUJBQUE7QUE3REY7O0FBK0RBO0VBQ0UseUJBQUE7QUE1REY7O0FBOERBO0VBQ0UsY0FBQTtBQTNERjs7QUE2REE7RUFDRSx5QkFBQTtBQTFERjs7QUE0REE7RUFDRSx5QkFBQTtBQXpERjtBQTBERTtFQUNFLHNCQUFBO0FBeERKOztBQTJEQTtFQUNFLGNBQUE7QUF4REY7O0FBMERBO0VBQ0UseUJBQUE7QUF2REY7O0FBeURBO0VBQ0UseUJBQUE7QUF0REY7QUF1REU7RUFDRSxzQkFBQTtBQXJESjs7QUF3REE7RUFDRSxjQUFBO0FBckRGOztBQXVEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQXJERjtBQXVERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFyREo7QUFzREk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcEROO0FBcURNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBbkRSO0FBc0RJO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBETjtBQXVERTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtBQXJESjtBQXVERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFyREo7QUFzREk7RUFDRSxrQkFBQTtBQXBETjtBQXNESTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQXBETjs7QUF3REE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFyREYiLCJzb3VyY2VzQ29udGVudCI6WyIubG91bmdlLWxpc3QtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYyRjY7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcblxyXG4gICAgLmxvdW5nZS1saXN0LWhlYWRlciB7XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnZoIDF2dztcclxuXHJcbiAgICAgICAgICAgIC5sYXN0LXVwZGF0ZWQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAubG91bmdlLWNvbnRlbnQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJ2aCAxdnc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnZ3IC0gMTAwcHgpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWNvbnRhaW5lcntcclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtaGVhZC10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWQtcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGVhZC1yb3ctY29sLTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWQtaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQtZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm91dGJvdW5kLWljb24tYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpci1zdGF0ZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwYWlyLXN0YXRlLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWluLXdpZHRoOiAxNjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYXAtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2ItbGlzdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvYnMtbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC10YWJsZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtam9iIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtam9iLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9iLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2JzLW1vdmUtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZ3JlZW4ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNBMzFCO1xyXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI5MjM1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC15ZWxsb3cge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJBMTIwO1xyXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJBNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1ncmF5IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzFhMjIzMztcclxuICAgICAgICAgICAgLmNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzc3RDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vLWRhdGEtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcblxyXG4gICAgICAgICAgICAubm8tZGF0YS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZnVsbHNjcmVlbiB7XHJcbiAgICAgICAgLmRhdGUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDAuNDM3NXJlbTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIC5sb3VuZ2UtZGF0ZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG91bmdlLWxhc3QtcmVmcmVzaCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvdW5nZS1oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIwM0EzO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuXHJcbiAgICAgICAgICAgIC5sb3VuZ2UtaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAubG91bmdlLXRpdGxlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAueGEtbG9nby13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tZW51LWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub3JnLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmJvcmRlci1yaWdodC1saW5lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjMEIwRTE1O1xyXG59XHJcbi5oZWFkZXItY3VzdG9tZXJOYW1lIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG4uaGVhZGVyLXRhYmxlLWdyYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUUwRTU7XHJcbn1cclxuLmhlYWRlci10YWJsZS1ncmF5LWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODc3N0Q7XHJcbn1cclxuLmhlYWRlci10YWJsZS1ncmF5LWRhcmstdGV4dCB7XHJcbiAgY29sb3I6ICM3ODc3N0Q7XHJcbn1cclxuLmhlYWRlci10YWJsZS1ncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1RTE5NDtcclxufVxyXG4uaGVhZGVyLXRhYmxlLWdyZWVuLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM0EzMUI7XHJcbiAgJjppcyhidXR0b24pIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XHJcbiAgfVxyXG59XHJcbi5oZWFkZXItdGFibGUtZ3JlZW4tZGFyay10ZXh0IHtcclxuICBjb2xvcjogIzAzQTMxQjtcclxufVxyXG4uaGVhZGVyLXRhYmxlLXllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwQzE3MztcclxufVxyXG4uaGVhZGVyLXRhYmxlLXllbGxvdy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJBMTIwO1xyXG4gICY6aXMoYnV0dG9uKSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xyXG4gIH1cclxufVxyXG4uaGVhZGVyLXRhYmxlLXllbGxvdy1kYXJrLXRleHQge1xyXG4gIGNvbG9yOiAjRDJBMTIwO1xyXG59XHJcbi5vdXRib3VuZC1oZWFkZXItY2FyZCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNzRweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIC8vbWFyZ2luLXRvcDogMHB4O1xyXG4gIGNvbG9yOiMwQjBFMTUgO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAub3V0Ym91bmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZzogMTZweCA4cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDRweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogI0Y5RkFGQjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI2LCAzNCwgNTEsIDAuNzApO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xvci1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIH1cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc3ViLXRleHQge1xyXG4gIGNvbG9yOiAjRTVFN0VCO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

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
/* harmony import */ var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/outbound/outbound.service */ 23864);
/* harmony import */ var src_app_dialogs_comment_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/comment-dialog/comment-dialog.component */ 8358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 82156);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, task_r3.updatedDate, "dd/MM/yyyy hh:mm:ss"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r3.completedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", task_r3.updatedDate);
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
  static #_ = this.ɵfac = function CheckInTaskComponent_Factory(t) {
    return new (t || CheckInTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CheckInTaskComponent,
    selectors: [["app-check-in-task"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__.OutboundService])],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: [".dialog-with-header[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 1015px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #4c6bd2;\n  color: var(--xa-white);\n}\n.dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .close-dailog-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.4784313725);\n  width: 40px;\n  height: 40px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n  height: 30px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   .ml-25[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n  vertical-align: sub;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n  height: 30px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .task-hearder-item[_ngcontent-%COMP%] {\n  text-align: left;\n  color: var(--xa-dark-gray);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 35px;\n  letter-spacing: -0.25px;\n  height: 36px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .task_Name_column[_ngcontent-%COMP%] {\n  width: 314px;\n  padding-left: 25px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .repair_type_column[_ngcontent-%COMP%] {\n  width: 184px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .modified_column[_ngcontent-%COMP%] {\n  width: 136px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .note_column[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .status_column[_ngcontent-%COMP%] {\n  width: 114px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  height: 61px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%]   .task-data[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%]   .task-data[_ngcontent-%COMP%]   .comment-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%]   .task-data[_ngcontent-%COMP%]   .comment-div[_ngcontent-%COMP%]   .red-icon[_ngcontent-%COMP%] {\n  height: 7px;\n  width: 7px;\n  position: absolute;\n  background: var(--xa-red);\n  top: -1px;\n  left: 12px;\n  border-radius: 50%;\n  border: 2px solid var(--xa-white);\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task_Name_column[_ngcontent-%COMP%] {\n  width: 314px;\n  padding-left: 25px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .repair_type_column[_ngcontent-%COMP%] {\n  width: 184px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .modified_column[_ngcontent-%COMP%] {\n  width: 136px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .note_column[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .status_column[_ngcontent-%COMP%] {\n  width: 114px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--xa-white-light);\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: var(--xa-table-light);\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .not-found-task[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--xa-gray);\n  margin-top: 20px;\n}\n\n.ml-25[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n\n.round[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.checked[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--xa-repair-header);\n  background-color: var(--xa-repair-header);\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  cursor: pointer;\n  margin-right: 4px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-light-radio-gray);\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  cursor: pointer;\n  margin-right: 4px;\n}\n\n.checked[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n}\n\n.checked[_ngcontent-%COMP%]:after {\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 10px;\n  border: solid var(--xa-white);\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.relate-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.mandatory-div[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.mandatory-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  padding-left: 20px;\n  line-height: 20px;\n}\n\n.span-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 14px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvb3V0Ym91bmQvY2hlY2staW4tdGFzay9jaGVjay1pbi10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQUNSO0FBRVk7RUFDSSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBaEI7QUFTWTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQVBoQjtBQVNnQjtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBwQjtBQVdZO0VBQ0kseUJBQUE7QUFUaEI7QUFXZ0I7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFUcEI7QUFXb0I7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFUeEI7QUFXd0I7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFUNUI7QUFZd0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFWNUI7QUFhd0I7RUFDSSxZQUFBO0FBWDVCO0FBY3dCO0VBQ0ksWUFBQTtBQVo1QjtBQWV3QjtFQUNJLFdBQUE7QUFiNUI7QUFnQndCO0VBQ0ksWUFBQTtBQWQ1QjtBQW9CWTtFQUNJLHlCQUFBO0FBbEJoQjtBQW9CZ0I7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFsQnBCO0FBb0JvQjtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFsQnhCO0FBc0I2QjtFQUNHLFlBQUE7RUFDQSxXQUFBO0FBcEJoQztBQXVCNkI7RUFDRyxrQkFBQTtBQXJCaEM7QUFzQmdDO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBcEJwQztBQTBCb0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUF4QnhCO0FBMkJvQjtFQUNJLFlBQUE7QUF6QnhCO0FBNEJvQjtFQUNJLFlBQUE7QUExQnhCO0FBNkJvQjtFQUNJLFdBQUE7QUEzQnhCO0FBOEJvQjtFQUNJLFlBQUE7QUE1QnhCO0FBZ0NnQjtFQUNJLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTlCcEI7QUFpQ2dCO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBL0JwQjtBQW9DUTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFsQ1o7O0FBdUNBO0VBQ0ksaUJBQUE7QUFwQ0o7O0FBdUNBO0VBQ0ksa0JBQUE7QUFwQ0o7O0FBeUNFO0VBQ0Usb0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdENKOztBQXlDQTtFQUNJLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUF0Q0o7O0FBeUNBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxnQkFBQTtBQXRDSjs7QUF5Q0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBdENKOztBQXlDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBdENKIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy13aXRoLWhlYWRlcntcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAxNXB4O1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzZiZDI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuXHJcbiAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgIC5jbG9zZS1kYWlsb2ctYnRue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jb250ZW50LWRpYWxvZ3tcclxuXHJcbiAgICAgICAgLnJlcGFpci1jYXJkIHtcclxuXHJcbiAgICAgICAgICAgIC50YXNrLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmZjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAubWwtMjUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJlcGFpci10YWJsZS1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZmO1xyXG5cclxuICAgICAgICAgICAgICAgIC5yZXBhaXItZGlhbG9nLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGFzay1oZWFyZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhc2staGVhcmRlci1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFza19OYW1lX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpcl90eXBlX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGlmaWVkX2NvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub3RlX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhdHVzX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJlcGFpci1kaWFsb2ctdGFibGUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAudGFzay1kYXRhLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYxcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50YXNrLWRhdGEtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFzay1kYXRhIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29tbWVudC1kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGFza19OYW1lX2NvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmVwYWlyX3R5cGVfY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTg0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubW9kaWZpZWRfY29sdW1uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdGVfY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXNfY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50YXNrLWRhdGEtcm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGFzay1kYXRhLXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdGFibGUtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ub3QtZm91bmQtdGFzayB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ncmF5KTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tbC0yNXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ucm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuY2hlY2tlZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtcmVwYWlyLWhlYWRlcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZXBhaXItaGVhZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5jaXJjbGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtbGlnaHQtcmFkaW8tZ3JheSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uY2hlY2tlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY2hlY2tlZDphZnRlciB7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIHZhcigtLXhhLXdoaXRlKTtcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5yZWxhdGUtc3Bpbm5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFuZGF0b3J5LWRpdntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYW5kYXRvcnktdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnNwYW4tZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

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
/* harmony import */ var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/outbound/outbound.service */ 23864);
/* harmony import */ var _check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-in-task/check-in-task.component */ 79666);
/* harmony import */ var src_app_dialogs_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialogs/notify-dialog/notify-dialog.component */ 15058);
/* harmony import */ var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/route-mapper/repair-status-mapper */ 93620);
/* harmony import */ var _delivery_service_delivery_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../delivery-service/delivery-service.component */ 82181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../widgets/chq-custom-loader/chq-custom-loader.component */ 55309);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular */ 30763);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);






















function OutboundComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 4, ctx_r0.dates[0], "dd"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](4, 7, ctx_r0.dates[6], "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 10, ctx_r0.dates[6], "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 13, ctx_r0.dates[0], "YY"), "");
  }
}
function OutboundComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate5"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 5, ctx_r2.dates[0], "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 8, ctx_r2.dates[0], "MMM"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](4, 11, ctx_r2.dates[6], "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 14, ctx_r2.dates[6], "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 17, ctx_r2.dates[0], "YY"), "");
  }
}
function OutboundComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_button_16_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const day_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.changeCurrentDate(day_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", day_r6.getDay() === (ctx_r3.selectedDay == null ? null : ctx_r3.selectedDay.getDay()) ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 2, day_r6, "dd EEE"));
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Customer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](repairs_r12.CompanyName);
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th")(1, "div", 60)(2, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, repairs_r12.IsTowedIn ? "towed_in" : "not_towed_in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "towing");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("color", repairs_r12.IsTowedIn ? "black" : "dark-gray-disabled");
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_div_18_div_3_mat_card_18_div_22_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](24);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r24.move_scroll("left", _r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_th_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 50)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_div_18_div_3_mat_card_18_th_31_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const job_r26 = restoredCtx.$implicit;
      const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.openJobpopup(repairs_r12, job_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 65)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const job_r26 = ctx.$implicit;
    const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r18.getHeaderTableClass(repairs_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matTooltip", job_r26.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", job_r26.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](job_r26.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", job_r26.CompletePercentage, "%");
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_div_18_div_3_mat_card_18_div_32_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](24);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r32.move_scroll("right", _r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_div_35_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Please set a future Date and Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_div_35_chq_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "chq-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_div_18_div_3_mat_card_18_div_35_chq_button_7_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38);
      const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r36.openEmailForNotify(repairs_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("buttonModel", ctx_r35.notifyButton);
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "dx-date-box", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onValueChanged", function OutboundComponent_div_18_div_3_mat_card_18_div_35_Template_dx_date_box_onValueChanged_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const repairs_r12 = ctx_r40.$implicit;
      const j_r13 = ctx_r40.index;
      const date_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r39.updateInput($event, repairs_r12.RepairGuid, date_r10, j_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, OutboundComponent_div_18_div_3_mat_card_18_div_35_span_6_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, OutboundComponent_div_18_div_3_mat_card_18_div_35_chq_button_7_Template, 1, 1, "chq-button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 17, ctx_r20.PickUpDateTextBox.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", repairs_r12.PickUpDate)("acceptCustomValue", false)("displayFormat", "dd/MM/yyyy - hh:mm a")("invalidDateMessage", "")("max", ctx_r20.PickUpDateTextBox.maxDate)("min", ctx_r20.PickUpDateTextBox.minDate)("validationError", false)("validationMessageMode", "none")("disabled", !ctx_r20.isTechnician ? repairs_r12.OutboundStatus !== "Ready To PickUp" : true)("showClearButton", false)("useMaskBehavior", true)("openOnFieldClick", true)("adaptivityEnabled", true)("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", repairs_r12 == null ? null : repairs_r12.PickupDateError);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r20.isTechnician ? !repairs_r12.IsPickedUp && repairs_r12.PickUpDate !== null && repairs_r12.OutboundStatus === "Ready To PickUp" && repairs_r12.CommunicationTypes.length > 0 : false);
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_div_36_chq_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "chq-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_div_18_div_3_mat_card_18_div_36_chq_button_6_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r48);
      const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r46.openDeliveryServiceDialog(repairs_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("buttonModel", ctx_r44.deliveryServiceButtonModel);
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_div_36_chq_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "chq-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_div_18_div_3_mat_card_18_div_36_chq_button_7_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r51);
      const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r49.openDeliveryServiceDialog(repairs_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("buttonModel", ctx_r45.deliveryServiceCompleteButtonModel);
  }
}
function OutboundComponent_div_18_div_3_mat_card_18_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 67)(1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_div_18_div_3_mat_card_18_div_36_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54);
      const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r52.openDeliveryServiceDialog(repairs_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "dx-date-box", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, OutboundComponent_div_18_div_3_mat_card_18_div_36_chq_button_6_Template, 1, 1, "chq-button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, OutboundComponent_div_18_div_3_mat_card_18_div_36_chq_button_7_Template, 1, 1, "chq-button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repairs_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 13, ctx_r21.DeliveryDateTextBox.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", repairs_r12.DeliveryDTO == null ? null : repairs_r12.DeliveryDTO.DeliveryDate)("acceptCustomValue", false)("invalidDateMessage", "")("validationError", false)("validationMessageMode", "none")("disabled", true)("useMaskBehavior", true)("openOnFieldClick", true)("adaptivityEnabled", true)("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !repairs_r12.DeliveryDTO);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", repairs_r12.DeliveryDTO);
  }
}
const _c0 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function OutboundComponent_div_18_div_3_mat_card_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 36)(1, "table", 37)(2, "tr", 38)(3, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_div_18_div_3_mat_card_18_Template_th_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r57);
      const repairs_r12 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r56.bookingStatusUrl(repairs_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th")(6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Make & Model:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th")(10, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Plate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "th", 41)(14, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, OutboundComponent_div_18_div_3_mat_card_18_th_18_Template, 4, 1, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, OutboundComponent_div_18_div_3_mat_card_18_th_19_Template, 5, 5, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 43)(21, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, OutboundComponent_div_18_div_3_mat_card_18_div_22_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 46, 47)(25, "table", 48)(26, "tr", 49)(27, "th", 50)(28, "div", 51)(29, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("load", function OutboundComponent_div_18_div_3_mat_card_18_Template_img_load_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r57);
      const repairs_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](repairs_r12.ImageUrlFirstLoad = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "chq-custom-loader", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, OutboundComponent_div_18_div_3_mat_card_18_th_31_Template, 9, 6, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, OutboundComponent_div_18_div_3_mat_card_18_div_32_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 55)(34, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, OutboundComponent_div_18_div_3_mat_card_18_div_35_Template, 8, 19, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, OutboundComponent_div_18_div_3_mat_card_18_div_36_Template, 8, 15, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 58)(38, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const repairs_r12 = ctx.$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](24);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r11.getCardTableClass(repairs_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r11.getHeaderTableDarkClass(repairs_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r11.getHeaderTableDarkClass(repairs_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](repairs_r12.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](repairs_r12.VehicleMake + " " + repairs_r12.VehicleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](repairs_r12.VehicleLicensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBindV"](17, 20, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](28, _c0, repairs_r12.TotalAmount, ctx_r11.i18n.currencySymbol, ctx_r11.i18n.digitsInfo, ctx_r11.i18n.locale, ctx_r11.i18n.position)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", repairs_r12.CompanyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", repairs_r12.IsTowedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r11.getHeaderTableClass(repairs_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r11.checkJobWrapperScroll("left", _r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r11.getHeaderTableClass(repairs_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", repairs_r12.ImageUrlFirst === null ? "assets/img/front-left.png" : repairs_r12.ImageUrlFirst, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("showLoading", repairs_r12.ImageUrlFirstLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", repairs_r12.Jobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r11.checkJobWrapperScroll("right", _r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !repairs_r12.IsDeliveryTypeEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", repairs_r12.IsDeliveryTypeEnable);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](40, 26, "initial_booking_out_date"), ": ", ctx_r11.date_format(repairs_r12.BookingEndDate), "");
  }
}
function OutboundComponent_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 32)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 33)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, OutboundComponent_div_18_div_3_mat_card_18_Template, 41, 34, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r9.groupedByDate[date_r10].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBindV"](10, 7, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](18, _c0, ctx_r9.calculateTotalAmount(ctx_r9.groupedByDate[date_r10]), ctx_r9.i18n.currencySymbol, ctx_r9.i18n.digitsInfo, ctx_r9.i18n.locale, ctx_r9.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](14, 13, date_r10, "EEEE, d MMMM y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 16, "last_refreshed"), ": ", ctx_r9.lastUpdated, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r9.groupedByDate[date_r10])("ngForTrackBy", ctx_r9.trackByFn);
  }
}
function OutboundComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, OutboundComponent_div_18_div_3_Template, 19, 24, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r4.objectKeys(ctx_r4.groupedByDate));
  }
}
function OutboundComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 79)(1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
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
    this.DeliveryDateTextBox = {
      placeHolder: 'delivery_date_time',
      label: 'delivery_date_time',
      name: '',
      type: 'datetime',
      value: ''
    };
    this.notifyButton = {
      label: 'notify',
      type: 'outline',
      icon: 'send'
    };
    this.deliveryServiceButtonModel = {
      label: 'Delivery Details',
      type: 'outline',
      icon: 'view',
      iconColor: 'black'
    };
    this.deliveryServiceCompleteButtonModel = {
      label: 'Delivery Complete',
      type: 'outline',
      icon: 'check',
      iconColor: 'black'
    };
    this.currentWeek = dayjs__WEBPACK_IMPORTED_MODULE_1__().toDate();
    this.currentWeekNumber = 1;
    this.dates = [];
    this.IntervalGetOutBound = null;
    this.lastUpdated = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
    this.CallingAPI = false;
    this.isTechnician = false;
    this.isDriver = false;
    this.TotalAmount = 0;
    this.i18n = this.commonService.geti18nInfo();
    this.getWeekDates(new Date(this.currentWeek));
  }
  /**
     * objectKeys
     */
  objectKeys(obj) {
    return Object.keys(obj);
  }
  /**
     * trackByFn
     */
  trackByFn(index, item) {
    return index;
  }
  /**
     * getCardTableClass
     */
  getCardTableClass(repairs) {
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
  getHeaderTableDarkClass(repairs) {
    if (repairs.OutboundStatus === null || repairs.OutboundStatus === 'Repair Not Started' || repairs.OutboundStatus === 'Repair In Progress') {
      return 'header-table-gray-dark';
    } else if ((!repairs.IsDeliveryTypeEnable || repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null) && repairs.OutboundStatus === 'Ready To PickUp') {
      return 'header-table-yellow-dark';
    } else if (repairs.OutboundStatus === 'Picked Up' || repairs.DeliveryDTO !== null) {
      return 'header-table-green-dark';
    } else {
      return 'card-table-gray-dark';
    }
  }
  /**
     * getHeaderTableClass
     */
  getHeaderTableClass(repairs) {
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
     * calculate TotalAmount for group repairs
     */
  calculateTotalAmount(repairsForDate) {
    return repairsForDate.reduce((total, repair) => total + repair.TotalAmount, 0);
  }
  /**
     * ngOnInit
     */
  ngOnInit() {
    this.getDeparturesDetails(this.getStartOfWeekDay, this.getEndOfWeekDay);
    this.commonService.userProfileData.subscribe(res => {
      if (res?.data) {
        const automotiveServices = res?.data?.userPermission?.automotiveServices;
        const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda repair');
        if (automotiveService && automotiveService.roleName.toLowerCase() === 'technician') {
          this.isTechnician = true;
        } else {
          this.isTechnician = false;
        }
        if (automotiveService && automotiveService.roleName.toLowerCase() === 'driver') {
          this.isDriver = true;
        } else {
          this.isDriver = false;
        }
      }
    });
  }
  /**
   * getOutBoundData
   */
  getDeparturesDetails(currentDayOfWeek, endDayOfWeek) {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.CallingAPI = true;
      _this.commonService.showLoading();
      _this.departures = [];
      const StartDate = currentDayOfWeek ? currentDayOfWeek : new Date(_this.currentWeek.toDateString()).toISOString();
      const EndDate = endDayOfWeek ? endDayOfWeek : new Date(new Date(_this.currentWeek.toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
      const query = `$filter=RepairEndDate ge ${StartDate} and RepairEndDate lt ${EndDate} or PickUpDate ge ${StartDate} and PickUpDate lt ${EndDate}`;
      _this.subs.push(_this.OutboundService.getDeparturesDetails(query).subscribe({
        next: data => {
          _this.CallingAPI = false;
          _this.TotalAmount = 0;
          data?.value?.forEach(el => {
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
          // Group the data by PickUpDate
          _this.groupedByDate = _this.groupByDate(_this.departures);
          _this.lastUpdated = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
          _this.commonService.hideLoading();
          clearTimeout(_this.IntervalGetOutBound);
          _this.IntervalGetOutBound = setTimeout(() => {
            if (_this.selectedDay) {
              _this.getDeparturesDetails();
            } else {
              _this.getDeparturesDetails(_this.getStartOfWeekDay, _this.getEndOfWeekDay);
            }
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
     *
     * group objects based on date
     *
  */
  groupByDate(data) {
    const groups = {};
    data.forEach(repair => {
      // Determine the date to use for grouping
      const groupDate = repair.PickUpDate || repair.RepairEndDate;
      // Format the date without time for grouping
      const formattedDate = new Date(groupDate).toLocaleDateString();
      // Add the repair to the corresponding group
      if (!groups[formattedDate]) {
        groups[formattedDate] = [];
      }
      groups[formattedDate].push(repair);
    });
    // Sort the groups by date in ascending order
    const sortedGroups = Object.keys(groups).sort((a, b) => {
      const dateA = a ? new Date(a).getTime() : 0;
      const dateB = b ? new Date(b).getTime() : 0;
      return dateA - dateB;
    });
    // Create a new object with sorted groups
    const result = {};
    sortedGroups.forEach(date => {
      result[date] = groups[date];
    });
    return result;
  }
  /**
   * get start Of Week Day
   */
  get getStartOfWeekDay() {
    return dayjs__WEBPACK_IMPORTED_MODULE_1__().startOf('week').add(1, 'day').toISOString();
  }
  /**
   * get End Of Week Day
   */
  get getEndOfWeekDay() {
    return dayjs__WEBPACK_IMPORTED_MODULE_1__().endOf('week').add(1, 'day').toISOString();
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
  updateInput(e, repairId, groupDate, repairIndex) {
    if (new Date(e.value).getTime() === new Date(e.previousValue).getTime()) return;
    this.groupedByDate[groupDate][repairIndex]['PickupDateError'] = false;
    if (new Date(e.value) < new Date()) {
      this.groupedByDate[groupDate][repairIndex]['PickupDateError'] = true;
      return;
    }
    const pickupDate = new Date(e.value).toISOString();
    if (new Date(pickupDate) == new Date(this.groupedByDate[groupDate][repairIndex].PickUpDate)) {
      return;
    }
    this.commonService.showLoading();
    this.subs.push(this.OutboundService.setPickupDate(repairId, pickupDate, false).subscribe({
      next: data => {
        this.commonService.showInfoToast(1000, data.message);
        this.commonService.hideLoading();
        this.groupedByDate[groupDate][repairIndex]['PickUpDate'] = pickupDate;
      }
    }));
  }
  /**
   * openJobpopup
   * @param { string } jobId
   */
  openJobpopup(repair, job) {
    if (this.isDriver) return;
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
    this.selectedDay = null;
    if (direction === 'left') {
      const temp_date = this.dates[0];
      this.currentWeek = new Date(temp_date.setDate(temp_date.getDate() - 7));
    } else {
      const temp_date = this.dates[6];
      this.currentWeek = new Date(temp_date.setDate(temp_date.getDate() + 1));
    }
    this.getWeekDates(new Date(this.currentWeek));
    this.departures = [];
    this.getDeparturesDetails(dayjs__WEBPACK_IMPORTED_MODULE_1__(this.currentWeek).startOf('week').add(1, 'day').toISOString(), dayjs__WEBPACK_IMPORTED_MODULE_1__(this.currentWeek).endOf('week').add(1, 'day').toISOString());
  }
  /**
  * TodayWeek
  */
  TodayWeek() {
    this.currentWeek = new Date();
    this.selectedDay = this.currentWeek;
    this.getWeekDates(new Date(this.currentWeek));
    this.departures = [];
    this.getDeparturesDetails();
  }
  /**
  * changeCurrentDate
  *@param day { date }
  */
  changeCurrentDate(day) {
    if (this.selectedDay?.getTime() === day.getTime()) {
      // If the clicked day is the same as the currently selected day, unselect it
      this.selectedDay = null;
    } else {
      // Otherwise, select the clicked day
      this.selectedDay = day;
    }
    this.currentWeek = day;
    this.departures = [];
    if (this.selectedDay) {
      this.getDeparturesDetails();
    } else {
      this.currentWeek = new Date();
      this.getWeekDates(new Date(this.currentWeek));
      this.departures = [];
      this.getDeparturesDetails(dayjs__WEBPACK_IMPORTED_MODULE_1__(this.currentWeek).startOf('week').add(1, 'day').toISOString(), dayjs__WEBPACK_IMPORTED_MODULE_1__(this.currentWeek).endOf('week').add(1, 'day').toISOString());
    }
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
            _this2.openEmailForNotifyInner(RepairData.RepairGuid, result.data.domainId, result.data.communicationTypeIds, result.data.communicationEvents);
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
    if (this.isDriver) return;
    const {
      RepairStatus,
      RepairGuid
    } = repair;
    const status = RepairStatus.split(' ').join('');
    let routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_5__.RepairStatusMapper[status?.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_5__.RepairStatusMapper.others;
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
  /**
   * check same month
   * @returns
   */
  sameMonth() {
    const startMonth = this.datePipe.transform(this.dates[0], 'MMM');
    const endMonth = this.datePipe.transform(this.dates[6], 'MMM');
    if (startMonth === endMonth) return true;
    return false;
  }
  /**
   * openDeliveryServiceDialog
   * @param {*} outboundData
   */
  openDeliveryServiceDialog(outboundData) {
    let deliveryData = null;
    if (outboundData.DeliveryDTO) {
      deliveryData = {
        deliveryDate: outboundData.DeliveryDTO.DeliveryDate,
        delieveredBy: outboundData.DeliveryDTO.DelieveredBy,
        deliveryAttachmentDTOs: outboundData.DeliveryDTO.DeliveryAttachmentDTOs.map((item, key) => {
          return {
            attachmentUrl: item.AttachmentUrl,
            deliveryAttachmentGuid: item.DeliveryAttachmentGuid,
            name: item.Name
          };
        })
      };
    }
    const dialogRef = this.dialog.open(_delivery_service_delivery_service_component__WEBPACK_IMPORTED_MODULE_6__.DeliveryServiceComponent, {
      data: {
        ...deliveryData,
        repairGuid: outboundData.RepairGuid,
        formEditable: !deliveryData,
        repairStatus: outboundData.RepairStatus
      },
      maxHeight: '90vh',
      minHeight: '400px',
      minWidth: '400px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getDeparturesDetails();
      }
    });
  }
  static #_ = this.ɵfac = function OutboundComponent_Factory(t) {
    return new (t || OutboundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_2__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: OutboundComponent,
    selectors: [["app-outbound"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_2__.OutboundService])],
    decls: 24,
    vars: 8,
    consts: [[1, "page-container", "outbound-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "outbound-header"], [1, "fx-row", "date-filter-wrapper"], [1, "fx-row", "change-week-btn", "align-center"], [4, "ngIf", "ngIfElse"], ["elseDiffMonth", ""], [1, "fx-row", "align-center", "week-days-tile"], ["type", "button", 1, "btn", "btn-left", 3, "click"], ["color", "black", "svgIcon", "arrow-left"], ["type", "button", 1, "btn", "current-week-btn", 3, "click"], ["type", "button", 1, "btn", "btn-right", 3, "click"], ["color", "black", "svgIcon", "arrow-right"], [1, "fx-row", "week-tiles"], ["type", "button", "class", "day-tile", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "outbound-container-wrapper"], ["class", "outbound-card", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], [1, "week-tile-content", "week-header-date"], ["type", "button", 1, "day-tile", 3, "ngClass", "click"], [1, "outbound-card"], [1, "card-header", "fx-row", "justify-space-between", 2, "margin-left", "15px"], [1, "fx-col", "left-content"], ["class", "table-wrapper", 4, "ngFor", "ngForOf"], [1, "table-wrapper"], [1, "card-header", "fx-row", "justify-space-between"], [1, "fx-row", "right-content"], [1, "fx-row", "align-center", "repair-count"], ["svgIcon", "carvana", 2, "height", "16px", "width", "16px"], [1, "fx-row", "align-center", "total-amount"], [1, "fx-row", "left-content", 2, "gap", "20px", "align-items", "center"], [1, "last-updated"], ["class", "card", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "card", 3, "ngClass"], [1, "header-table", "border-top-10", 3, "ngClass"], [2, "text-align", "left", "display", "flex", "align-items", "center", "gap", "0.75rem", 3, "ngClass"], [1, "header-customerName", 3, "click"], [1, "sub-text"], [1, "header-amount"], [4, "ngIf"], [1, "outbound-card-content", "border-bottom-10", 3, "ngClass"], [1, "outbound-jobs-container", "fx-row", "align-center"], ["class", "scroll-btn", 3, "click", 4, "ngIf"], [1, "outbound-jobs-wrapper"], ["job_scroll_wrapper", ""], [1, "outbound-table", "border-bottom-10"], [1, "flex", "align-center"], [3, "ngClass"], [1, "outbound-header-card", 2, "justify-content", "center"], ["alt", "", 1, "rapair-car-img", 3, "src", "load"], [3, "showLoading"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "date-card", "flex", "align-end"], [1, "date-selector"], ["class", "input-wrapper flex align-end", 4, "ngIf"], [1, "day-counter"], [1, "text-muted"], [1, "is-towing"], ["matTooltipPosition", "above", 1, "outbound-icon-btn", 3, "matTooltip"], [3, "svgIcon"], [1, "scroll-btn", 3, "click"], [1, "outbound-header-card", 3, "matTooltip", "click"], [1, "outbound-content"], ["svgIcon", "checked", 2, "width", "15px", "height", "15px"], [1, "input-wrapper", "flex", "align-end"], [1, "pickup_wrapper"], [1, "input-label", "text-muted", "uppercase"], ["type", "datetime", 3, "value", "acceptCustomValue", "displayFormat", "invalidDateMessage", "max", "min", "validationError", "validationMessageMode", "disabled", "showClearButton", "useMaskBehavior", "openOnFieldClick", "adaptivityEnabled", "pickerType", "onValueChanged"], ["class", "pickupDate-error input-label text-muted", 4, "ngIf"], ["class", "notify-btn", 3, "buttonModel", "click", 4, "ngIf"], [1, "pickupDate-error", "input-label", "text-muted"], [1, "notify-btn", 3, "buttonModel", "click"], [1, "pickup_wrapper", 3, "click"], ["displayFormat", "dd/MM/yyyy - hh:mm a", "type", "datetime", 3, "value", "acceptCustomValue", "invalidDateMessage", "validationError", "validationMessageMode", "disabled", "useMaskBehavior", "openOnFieldClick", "adaptivityEnabled", "pickerType"], ["style", "margin-left: 20px;", 3, "buttonModel", "click", 4, "ngIf"], [2, "margin-left", "20px", 3, "buttonModel", "click"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
    template: function OutboundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, OutboundComponent_ng_container_4_Template, 7, 16, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, OutboundComponent_ng_template_5_Template, 7, 20, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_8_listener() {
          return ctx.changeCurrentWeek("left");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_10_listener() {
          return ctx.TodayWeek();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_13_listener() {
          return ctx.changeCurrentWeek("right");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, OutboundComponent_button_16_Template, 4, 5, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, OutboundComponent_div_18_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, OutboundComponent_div_19_Template, 9, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.sameMonth())("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 6, "today"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.departures.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.departures.length === 0 && !ctx.CallingAPI);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_9__.ChqButtonComponent, _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_10__.CustomLoaderComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DxDateBoxComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_11__.XaCurrencyPipe],
    styles: [".outbound-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px);\n  overflow-y: auto;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  padding-top: 5px;\n  z-index: 1;\n  background: var(--xa-popup-light-gray);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 15px;\n  gap: 0.625rem;\n  justify-content: space-between;\n  background: var(--xa-popup-light-gray);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 25px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .week-tile-content[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex: none;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .current-week-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 61px;\n  background-color: #f4f5fd;\n  border: 1px solid var(--xa-light-gray) !important;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.625rem 0.5625rem;\n  align-items: flex-start;\n  gap: 0.5625rem;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.44);\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);\n  padding: 0.75rem 0.625rem;\n  display: grid;\n  height: auto;\n  border-radius: 0.625rem;\n  font-size: 16px;\n  color: rgba(26, 34, 51, 0.7);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile.active[_ngcontent-%COMP%] {\n  background-color: #4c6bd2;\n  color: var(--xa-white);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n\n.header-type-text[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n.border-10[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.border-top-10[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.border-bottom-10[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin: 15px;\n  margin-top: 0;\n  margin-right: 35px;\n  margin-left: 0;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--xa-gray);\n  line-height: 21.23px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .repair-count[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 6px 12px;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n  border-radius: 22px;\n  border: 1px solid #ccd1da;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .repair-count[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 6px 12px;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  border-radius: 22px;\n  border: 1px solid #ccd1da;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 1.625rem;\n  background-color: #fff;\n  border-radius: 0.625rem;\n  padding-bottom: 0px;\n  box-shadow: none !important;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-customerName[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 0.625rem;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-amount[_ngcontent-%COMP%] {\n  font-weight: 700 !important;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  max-width: 240px;\n  display: inline-block;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 700;\n  word-break: break-all;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-repair-type[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-repair-type[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  width: 30px;\n  height: 30px;\n  background-color: rgba(31, 32, 35, 0.0784313725);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .is-towing[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .is-towing[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  width: 30px;\n  height: 30px;\n  background-color: rgba(31, 32, 35, 0.0784313725);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-radius: 0.625rem;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #fff;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-gray[_ngcontent-%COMP%] {\n  background-color: #C5C4CA !important;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-gray-dark[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-green[_ngcontent-%COMP%] {\n  background-color: #85E194 !important;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-green-dark[_ngcontent-%COMP%] {\n  background-color: #03A31B;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-yellow[_ngcontent-%COMP%] {\n  background-color: #E0C173 !important;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-yellow-dark[_ngcontent-%COMP%] {\n  background-color: #D2A120;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px 4px;\n  position: relative;\n  overflow: hidden;\n  background-color: #F9FAFB;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  width: 124px;\n  border-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 124px;\n  border-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 74px;\n  border-radius: 0.625rem;\n  background-color: #F1F2F6;\n  font-size: 12px;\n  font-weight: normal;\n  margin: 16px auto;\n  color: #0B0E15;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 10px 5px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  border-radius: 8px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #F9FAFB;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  font-weight: 800;\n  font-size: 16px;\n  text-align: left;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%]   .color-block[_ngcontent-%COMP%] {\n  display: block;\n  height: 10px;\n  border-top-right-radius: 0.625rem;\n  border-top-left-radius: 0.625rem;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin: 0;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .jobs-move-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .scroll-btn[_ngcontent-%COMP%] {\n  padding: 0rem 0.45rem;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  box-shadow: 0px 1px 3px 0px rgba(96, 108, 128, 0.05);\n  border-radius: 0.5rem;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .scroll-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin: 0px 20px 20px 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.19rem;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-left: 2px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   .pickupDate-error[_ngcontent-%COMP%] {\n  color: var(--xa-red);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   dx-date-box[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .day-counter[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-gray[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-green[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-yellow[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n\n.border-right-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 30px;\n  background: #0B0E15;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  margin: 15px;\n  border: 1px solid rgba(26, 34, 51, 0.4);\n  background-color: #F1F2F6;\n  border-radius: 0.625rem;\n  padding: 0.8125rem 1rem;\n}\n\n.week-header-date[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  color: #E5E7EB;\n  font-size: 12px;\n  font-weight: 500;\n  margin-right: 6px;\n}\n\n[_nghost-%COMP%]     .notify-btn {\n  padding-left: 5px;\n}\n[_nghost-%COMP%]     .notify-btn button.button-outline {\n  border-radius: 22px !important;\n  border: 1px solid #F3F4F6 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvb3V0Ym91bmQvb3V0Ym91bmQvb3V0Ym91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBQVI7QUFFUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0FBQVo7QUFFWTtFQUVJLHVCQUFBO0VBQ0EsU0FBQTtBQURoQjtBQUdnQjtFQUNJLFNBQUE7QUFEcEI7QUFHb0I7RUFDSSw2QkFBQTtBQUR4QjtBQUlvQjtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBRnhCO0FBS29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFIeEI7QUFPZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaURBQUE7QUFMcEI7QUFTWTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQVBkO0FBUWdCO0VBQ0kscUNBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQVBwQjtBQVdnQjtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFUcEI7O0FBeUJBO0VBQ0ksOEJBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBdEJKOztBQXlCQTtFQUNJLG1CQUFBO0FBdEJKOztBQXlCQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUF0Qko7O0FBd0JBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtBQXJCSjs7QUEyQkk7RUFDSSxtQkFBQTtBQXhCUjtBQTBCUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBeEJaO0FBMEJnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBeEJwQjtBQTJCZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBekJwQjtBQTZCWTtFQUNJLFFBQUE7QUEzQmhCO0FBNEJnQjtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTFCbEI7QUEyQm9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF6QnhCO0FBNkJnQjtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTNCbEI7QUE0Qm9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUExQnhCO0FBaUNRO0VBRVEsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBR0EsbUJBQUE7RUFDQSwyQkFBQTtBQWxDaEI7QUFvQ2dCO0VBRUksV0FBQTtBQW5DcEI7QUFxQ29CO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFuQ3RCO0FBcUNvQjtFQUNFLDJCQUFBO0FBbkN0QjtBQXNDb0I7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQXBDeEI7QUF1Q29CO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBckN4QjtBQXdDb0I7RUFDSSxrQkFBQTtBQXRDeEI7QUF3Q3dCO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0FBdEM1QjtBQTBDb0I7RUFFSSxtQkFBQTtBQXpDeEI7QUEyQ3dCO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0FBekM1QjtBQTRDb0I7RUFDRSx1QkFBQTtBQTFDdEI7QUEyQ3NCO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXpDeEI7QUE4Q2dCO0VBQ0ksb0NBQUE7QUE1Q3BCO0FBOENnQjtFQUNJLHlCQUFBO0FBNUNwQjtBQThDZ0I7RUFDSSxvQ0FBQTtBQTVDcEI7QUE4Q2dCO0VBQ0kseUJBQUE7QUE1Q3BCO0FBOENnQjtFQUNJLG9DQUFBO0FBNUNwQjtBQThDZ0I7RUFDSSx5QkFBQTtBQTVDcEI7QUFnRG9CO0VBQ0ksOEJBQUE7QUE5Q3hCO0FBZ0R3QjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQTlDNUI7QUFnRDRCO0VBRUksV0FBQTtBQS9DaEM7QUFtRG9DO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFqRHhDO0FBbUR3QztFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWpENUM7QUFtRDRDO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWpEaEQ7QUFxRHdDO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBcEQ1QztBQXNENEM7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBcEQ5QztBQXFEOEM7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbkRoRDtBQW9EZ0Q7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFsRGxEO0FBcUQ4QztFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFuRGhEO0FBc0Q0QztFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtBQXBEOUM7QUFzRDRDO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQXBEOUM7QUFxRDhDO0VBQ0Usa0JBQUE7QUFuRGhEO0FBcUQ4QztFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQW5EaEQ7QUE0RHdCO0VBQ0ksNkJBQUE7QUExRDVCO0FBNER3QjtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0RBQUE7RUFDQSxxQkFBQTtBQTFEMUI7QUEyRDBCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUF6RDVCO0FBOERvQjtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7QUE1RHhCO0FBZ0U0QjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUE5RDlCO0FBK0RnQztFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQTdEcEM7QUFnRWdDO0VBQ0ksb0JBQUE7QUE5RHBDO0FBZ0VnQztFQUNFLG1CQUFBO0FBOURsQztBQXFFd0I7RUFDSSwwQkFBQTtBQW5FNUI7QUF3RTRCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBdEVoQztBQWdGWTtFQUNJLDZCQUFBO0FBOUVoQjtBQW1GWTtFQUNJLDZCQUFBO0FBakZoQjtBQXNGWTtFQUNJLDZCQUFBO0FBcEZoQjtBQXlGSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUF2RlI7QUF5RlE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0FBdkZaOztBQTJGQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF4RkY7O0FBMEZBO0VBQ0UsWUFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBdkZGOztBQXlGQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF0RkE7O0FBd0ZBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBckZBOztBQXVGQTtFQUNFLGlCQUFBO0FBcEZGO0FBc0ZFO0VBQ0UsOEJBQUE7RUFDQSxvQ0FBQTtBQXBGSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3V0Ym91bmQtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAub3V0Ym91bmQtaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG5cclxuICAgICAgICAuZGF0ZS1maWx0ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGdhcDogMC42MjVyZW07XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XHJcblxyXG4gICAgICAgICAgICAuY2hhbmdlLXdlZWstYnRuIHtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogMjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAud2Vlay1kYXlzLXRpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLndlZWstdGlsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jdXJyZW50LXdlZWstYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAud2Vlay10aWxlcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjU2MjVyZW07XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgZ2FwOiAwLjU2MjVyZW07XHJcbiAgICAgICAgICAgICAgICAuZGF5LXRpbGV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ0KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAwLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDI2LCAzNCwgNTEsIDAuNzApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGF5LXRpbGUuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2YmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLmRheS10aWxlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAuZGF5LXRpbGU6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLXR5cGUtdGV4dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJvcmRlci0xMHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItdG9wLTEwe1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5ib3JkZXItYm90dG9tLTEwe1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ub3V0Ym91bmQtY29udGFpbmVyLXdyYXBwZXJ7XHJcblxyXG5cclxuICAgIC5vdXRib3VuZC1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgLmxlZnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxhc3QtdXBkYXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMS4yM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmlnaHQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgICAgICAgIC5yZXBhaXItY291bnQge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2QxZGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudG90YWwtYW1vdW50IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjZDFkYTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgLy8gbWluLWhlaWdodDogMzMyLjE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAuNjg3NXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWluLWhlaWdodDogNjhweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1jdXN0b21lck5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWFtb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXJlcGFpci10eXBle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtaWNvbi1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjAyMzE0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaXMtdG93aW5ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW46IDE4cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtaWNvbi1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjAyMzE0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlLWdyYXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDNUM0Q0EgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItdGFibGUtZ3JheS1kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3NzdEO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci10YWJsZS1ncmVlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg1RTE5NCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci10YWJsZS1ncmVlbi1kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNBMzFCO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci10YWJsZS15ZWxsb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEMxNzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItdGFibGUteWVsbG93LWRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMkExMjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm91dGJvdW5kLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm91dGJvdW5kLWpvYnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm91dGJvdW5kLWpvYnMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RkFGQjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm91dGJvdW5kLWhlYWRlci1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzBCMEUxNSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjlGQUZCO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjYsIDM0LCA1MSwgMC43MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbG9yLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9icy1tb3ZlLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zY3JvbGwtYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcmVtIDAuNDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNiwgMzQsIDUxLCAwLjIwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSg5NiwgMTA4LCAxMjgsIDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waWNrdXBfd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAwLjE5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC1sYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waWNrdXBEYXRlLWVycm9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHgtZGF0ZS1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtbXV0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXktY291bnRlciB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtbXV0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLXRhYmxlLWdyYXkge1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMWEyMjMzO1xyXG4gICAgICAgICAgICAub3V0Ym91bmQtY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGFibGUtZ3JlZW4ge1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDNBMzFCO1xyXG4gICAgICAgICAgICAub3V0Ym91bmQtY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGFibGUteWVsbG93IHtcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI0QyQTEyMDtcclxuICAgICAgICAgICAgLm91dGJvdW5kLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uby1kYXRhLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG5cclxuICAgICAgICAubm8tZGF0YS1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYm9yZGVyLXJpZ2h0LWxpbmUge1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwQjBFMTU7XHJcbn1cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuNDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgcGFkZGluZzogMC44MTI1cmVtIDFyZW07XHJcbn1cclxuLndlZWstaGVhZGVyLWRhdGUge1xyXG5mb250LXNpemU6IDEuMTI1cmVtO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5zdWItdGV4dCB7XHJcbmNvbG9yOiAjRTVFN0VCO1xyXG5mb250LXNpemU6IDEycHg7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbm1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubm90aWZ5LWJ0biB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcblxyXG4gIGJ1dHRvbi5idXR0b24tb3V0bGluZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjNGNEY2ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helper/directive/directive.module */ 67798);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/widgets.module */ 50546);
/* harmony import */ var _add_customers_customer_layout_customer_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-customers/customer-layout/customer-layout.component */ 88271);
/* harmony import */ var _booking_journal_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-journal/booking-journal/booking-journal.component */ 11121);
/* harmony import */ var _estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimate-approval/estimate-approval.component */ 8542);
/* harmony import */ var _lounge_list_lounge_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lounge-list/lounge-list.component */ 94526);
/* harmony import */ var _outbound_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./outbound/outbound/outbound.component */ 10250);
/* harmony import */ var _workflow_lounge_workflow_lounge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workflow-lounge/workflow-lounge.component */ 31224);
/* harmony import */ var _workflow_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow/workflow/workflow.component */ 40712);
/* harmony import */ var src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/guards/repair-guard/repair.guard */ 17946);
/* harmony import */ var src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/helper/pipe.module */ 39816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);



















const repairRoutes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'booking-journal'
}, {
  path: 'booking',
  canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_repair_add-customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/add-customers/customers.module */ 65206)).then(m => m.AddRepairCustomersModule)
}, {
  path: 'booking/:id',
  component: _add_customers_customer_layout_customer_layout_component__WEBPACK_IMPORTED_MODULE_3__.CustomerLayoutComponent,
  canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_repair_add-customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/add-customers/customers.module */ 65206)).then(m => m.AddRepairCustomersModule)
}, {
  path: 'customers',
  canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_repair_customer_customer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../repair/customer/customer.module */ 922)).then(m => m.CustomerTableModule)
}, {
  path: 'booking-journal',
  component: _booking_journal_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__.BookingJournalComponent,
  canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_repair_booking-journal_booking-journal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../repair/booking-journal/booking-journal.module */ 53018)).then(m => m.BookingJournalModule)
}, {
  path: 'workflow',
  component: _workflow_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_9__.WorkflowComponent,
  canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_repair_workflow_workflow_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../repair/workflow/workflow.module */ 95885)).then(m => m.WorkflowModule)
}, {
  path: 'outbound',
  component: _outbound_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_7__.OutboundComponent,
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_repair_outbound_outbound_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../repair/outbound/outbound.module */ 73688)).then(m => m.OutboundModule)
}, {
  path: 'lounge',
  component: _lounge_list_lounge_list_component__WEBPACK_IMPORTED_MODULE_6__.LoungeListComponent,
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_repair_lounge-list_lounge-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../repair/lounge-list/lounge-list.module */ 36071)).then(m => m.LoungeListModule)
}, {
  path: 'workflow-lounge',
  component: _workflow_lounge_workflow_lounge_component__WEBPACK_IMPORTED_MODULE_8__.WorkflowLoungeComponent,
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_repair_workflow-lounge_workflow-lounge_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../repair/workflow-lounge/workflow-lounge.module */ 76252)).then(m => m.WorkflowLoungeModule)
}];
class RepairModule {
  static #_ = this.ɵfac = function RepairModule_Factory(t) {
    return new (t || RepairModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: RepairModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(repairRoutes), _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_11__.PipeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](RepairModule, {
    declarations: [_estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_5__.EstimateApprovalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_11__.PipeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]
  });
})();

/***/ }),

/***/ 31224:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/repair/workflow-lounge/workflow-lounge.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowLoungeComponent": () => (/* binding */ WorkflowLoungeComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/workflow/workflow.service */ 71923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widgets/chq-custom-loader/chq-custom-loader.component */ 55309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);















const _c0 = ["filter"];
const _c1 = ["horizontalRow"];
const _c2 = ["verticalRow"];
function WorkflowLoungeComponent_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-icon", 15);
  }
}
function WorkflowLoungeComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-icon", 16);
  }
}
function WorkflowLoungeComponent_div_7_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("error", function WorkflowLoungeComponent_div_7_img_5_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.avatar = "");
    })("load", function WorkflowLoungeComponent_div_7_img_5_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.orgImageLoading = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r6.orgLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function WorkflowLoungeComponent_div_7_ng_template_6_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r12.orgName);
  }
}
function WorkflowLoungeComponent_div_7_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, WorkflowLoungeComponent_div_7_ng_template_6_label_0_Template, 2, 1, "label", 30);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.orgName);
  }
}
function WorkflowLoungeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "a", 20)(4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WorkflowLoungeComponent_div_7_img_5_Template, 1, 1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WorkflowLoungeComponent_div_7_ng_template_6_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "chq-custom-loader", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 26)(13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.orgLogoUrl)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showLoading", ctx_r2.orgImageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 7, "workflow_dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 9, "last_refreshed"), ": ", ctx_r2.LastRefreshedDate, "");
  }
}
const _c3 = function (a0) {
  return {
    "width.px": a0
  };
};
function WorkflowLoungeComponent_div_8_tr_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("load", function WorkflowLoungeComponent_div_8_tr_4_div_12_Template_img_load_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const repair_r19 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](repair_r19.isloaded = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 52)(5, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const repair_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", repair_r19.ImageUrl !== null && repair_r19.ImageUrl !== "" ? repair_r19.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c3, ctx_r18.horizontalRowHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 5, "due_out"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 9, repair_r19.RepairEndDate, "dd/MM/yy")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", repair_r19.VehicleMake + " " + repair_r19.VehicleModel, " ");
  }
}
const _c4 = function (a0, a1, a2) {
  return {
    "min-height": a0,
    "height": a1,
    "max-height": a2
  };
};
function WorkflowLoungeComponent_div_8_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 37)(1, "div", 38)(2, "div", 39, 40)(4, "div", 41)(5, "div", 42)(6, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, WorkflowLoungeComponent_div_8_tr_4_div_12_Template, 12, 14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](8, _c4, ctx_r13.calculatedHeight, ctx_r13.calculatedHeight, ctx_r13.calculatedHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", items_r14.IsJobFromMaster ? items_r14.Color : "#DCDDE2")("color", items_r14.IsJobFromMaster ? "" : "#0B0E15");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](items_r14.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](items_r14.WaterfallRepairs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", items_r14.WaterfallRepairs);
  }
}
function WorkflowLoungeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "tbody", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WorkflowLoungeComponent_div_8_tr_4_Template, 13, 12, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fullscreen-table", ctx_r3.isFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.workflowData);
  }
}
const _c5 = function (a0) {
  return {
    "repair-not-started": a0
  };
};
function WorkflowLoungeComponent_div_9_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", null, 60)(2, "div", 61)(3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const items_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", items_r25.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c5, items_r25.JobName.toLowerCase() === "repair not started"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](items_r25.WaterfallRepairs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 5, items_r25.JobName));
  }
}
const _c6 = function (a0) {
  return {
    "height.px": a0
  };
};
function WorkflowLoungeComponent_div_9_td_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 65)(2, "div", 50)(3, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("load", function WorkflowLoungeComponent_div_9_td_7_ng_container_1_Template_img_load_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const repair_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](repair_r30.isloaded = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 52)(5, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const repair_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", repair_r30.ImageUrl !== null && repair_r30.ImageUrl !== "" ? repair_r30.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c6, ctx_r29.verticalRowWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("visibility", repair_r30.RepairEndDate ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 7, "due_out"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 11, repair_r30.RepairEndDate, "dd/MM/yy")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", repair_r30.VehicleMake + " " + repair_r30.VehicleModel, " ");
  }
}
function WorkflowLoungeComponent_div_9_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WorkflowLoungeComponent_div_9_td_7_ng_container_1_Template, 12, 16, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", items_r27.WaterfallRepairs);
  }
}
function WorkflowLoungeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55)(1, "table", 56)(2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WorkflowLoungeComponent_div_9_th_4_Template, 8, 9, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "tbody")(6, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WorkflowLoungeComponent_div_9_td_7_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("fullscreen-table", ctx_r4.isFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.workflowData);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.workflowData);
  }
}
function WorkflowLoungeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
  }
}
class WorkflowLoungeComponent {
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
    this.autoScrollInterval = null;
    this.timeInterval = null;
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
    this.subs = [];
    this.FullscreenButton = {
      label: 'view_full_screen',
      type: 'outline',
      icon: 'fullscreen'
    };
    this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('MMMM DD, YYYY hh:mm a');
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
    this.timeInterval = setInterval(() => {
      this.updateDate();
    }, 1000);
    this.commonService.userProfileData.subscribe(res => {
      this.userDetail = res?.data;
      this.userIsBM = this.userDetail?.roleDetail.some(x => x.name == 'Bodyshop Manager');
      if (this.userDetail?.organizationDetail?.id) {
        this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
      }
    });
    this.chkScreenMode();
  }
  /**
   * update Date
   */
  updateDate() {
    this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('MMMM DD, YYYY hh:mm a');
  }
  /**
   * move_scroll
   */
  move_scroll(direction, el) {
    if (direction === 'left') {
      el.scrollLeft = el.scrollLeft - 250;
    } else {
      el.scrollLeft = el.scrollLeft + 250;
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
   * auto scroll horizontally
   */
  horizontalScroll() {
    const parentContainer = document.querySelector('.workflow-table-container');
    const container = document.querySelector('.scroll-items-row');
    const nodes = container.querySelectorAll('.card-container');
    if (container === null || container === undefined || nodes === null || nodes === undefined) {
      return;
    }
    let visibleWidth = 0;
    let longestNodeIndex = 0;
    let longestNodeLength = 0;
    const totalWidth = parentContainer.clientWidth;
    for (let i = 0; i < nodes.length; i++) {
      visibleWidth = 0;
      if (longestNodeLength < nodes[i].children.length) {
        longestNodeLength = nodes[i].children.length;
        longestNodeIndex = i;
      }
    }
    for (let i = this.FocusedRepairHorizontalIndex; i < nodes[longestNodeIndex].children.length; i++) {
      if (i === nodes[longestNodeIndex].children.length - 1) {
        this.FocusedRepairHorizontalIndex = 0;
        parentContainer.scrollLeft = 0;
      }
      visibleWidth += nodes[longestNodeIndex].children[i].clientWidth + nodes[longestNodeIndex].children[i + 1]?.clientWidth ?? 0;
      if (visibleWidth >= totalWidth) {
        this.FocusedRepairHorizontalIndex = i;
        nodes[longestNodeIndex].children[i].scrollIntoView({
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
  verticalScroll() {
    const parentContainer = document.querySelector('.vertical-workflow-table');
    const container = document.querySelector('.vertical-card-container');
    const nodes = container.querySelectorAll('.vertical-card');
    if (container === null || container === undefined || nodes === null || nodes === undefined) {
      return;
    }
    let visibleHeight = 0;
    let longestNodeIndex = 0;
    let longestNodeLength = 0;
    const totalHeight = parentContainer.clientHeight;
    for (let i = 0; i < nodes.length; i++) {
      visibleHeight = 0;
      if (longestNodeLength < nodes[i].children.length) {
        longestNodeLength = nodes[i].children.length;
        longestNodeIndex = i;
      }
    }
    for (let i = this.FocusedRepairIndex; i < nodes[longestNodeIndex].children.length; i++) {
      if (i === nodes[longestNodeIndex].children.length - 1) {
        this.FocusedRepairIndex = 0;
        parentContainer.scrollTop = 0;
      }
      visibleHeight += nodes[longestNodeIndex].children[i].clientHeight;
      if (visibleHeight >= totalHeight) {
        this.FocusedRepairIndex = i;
        nodes[longestNodeIndex].children[i].scrollIntoView({
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
  ngAfterViewInit() {
    //call autoScroll every 1 mins
    this.autoScrollInterval = setInterval(() => {
      if (this.isFullScreen) {
        if (this.verticalView) {
          this.verticalScroll();
        } else {
          this.horizontalScroll();
        }
      }
    }, 10000);
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
              _this.workflowData = _this.workflowData.filter(x => x.JobName !== 'REPAIR NOT STARTED');
              _this.calculatedHeight = `${100 / _this.workflowData.length}%`;
              _this.workflowData.map(value => value?.WaterfallRepairs.map(child => child.isLoaded = false));
            }
            _this.CallingAPI = false;
            _this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
            setTimeout(() => {
              _this.horizontalRowHeight = _this.horizontalRow?.nativeElement?.offsetHeight;
              _this.commonService.hideLoading();
            });
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
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([this.getOrgIfBM(), this.workflowService.getCustomer(this.userDetail.organizationDetail.id)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([orgList, CustomerList]) => {
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
              value: x.isIndividual ? x.contactId : x.companyId,
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
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
              value: x.isIndividual ? x.contactId : x.companyId,
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
    if (filterValue.CustomerId && filterValue.CustomerId.length > 0 || filterValue.CompanyId && filterValue.CompanyId.length > 0) {
      if (query !== '?$filter=') {
        query += '&';
      } else {
        query = '?';
      }
      query += '$expand=WaterfallRepairs($filter=(';
      if (filterValue.CustomerId.length > 0) query += `${filterValue.CustomerId.map(x => 'ContactId eq ' + x + '').join(' or ')}`;
      if (filterValue.CustomerId.length > 0 && filterValue.CompanyId.length > 0) query += ' or ';
      if (filterValue.CompanyId.length > 0) query += `${filterValue.CompanyId.map(x => 'CompanyId eq ' + x + '').join(' or ')}`;
      query += '))';
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
      this.filterForm.get(output.name).setValue(output.value.filter(x => x.isIndividual).map(x => {
        return x.value;
      }));
      this.filterForm.get('CompanyId').setValue(output.value.filter(x => !x.isIndividual).map(x => {
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
    const elem = document.documentElement;
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
  changeView() {
    if (!this.verticalView) {
      setTimeout(() => {
        this.verticalRowWidth = this.verticalRow?.nativeElement?.offsetWidth * 0.6;
      });
    }
    this.verticalView = !this.verticalView;
  }
  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    clearInterval(this.IntervalGetWorkflow);
    clearInterval(this.autoScrollInterval);
    clearInterval(this.timeInterval);
  }
  static #_ = this.ɵfac = function WorkflowLoungeComponent_Factory(t) {
    return new (t || WorkflowLoungeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__.WorkflowService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: WorkflowLoungeComponent,
    selectors: [["app-workflow-lounge"]],
    viewQuery: function WorkflowLoungeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.horizontalRow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.verticalRow = _t.first);
      }
    },
    hostBindings: function WorkflowLoungeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("fullscreenchange", function WorkflowLoungeComponent_fullscreenchange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"])("webkitfullscreenchange", function WorkflowLoungeComponent_webkitfullscreenchange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"])("mozfullscreenchange", function WorkflowLoungeComponent_mozfullscreenchange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"])("MSFullscreenChange", function WorkflowLoungeComponent_MSFullscreenChange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"])("onwebkitfullscreenchange", function WorkflowLoungeComponent_onwebkitfullscreenchange_HostBindingHandler($event) {
          return ctx.fullscreenmodes($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__.WorkflowService])],
    decls: 15,
    vars: 7,
    consts: [[1, "page-container", "workflow-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "lounge-list-header"], [1, "header-content", "fx-row", "justify-space-between", "align-center"], [2, "margin-left", "auto", 3, "buttonModel", "click"], [1, "alignment-btn", 3, "click"], ["svgIcon", "horizontal-alignment", 4, "ngIf"], ["svgIcon", "vertical-alignment", 4, "ngIf"], ["class", "fullscreen", 4, "ngIf"], ["class", "workflow-table-container", 3, "fullscreen-table", 4, "ngIf"], ["class", "vertical-workflow-table", 3, "fullscreen-table", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], ["svgIcon", "horizontal-alignment"], ["svgIcon", "vertical-alignment"], [1, "fullscreen"], [1, "lounge-header", "fx-0", "fx-col", "justify-center"], [1, "lounge-header-content", "align-center", "fx-row"], [1, "xa-logo-wrapper"], [1, "menu-image"], ["alt", "", 3, "src", "error", "load", 4, "ngIf", "ngIfElse"], ["name", ""], [3, "showLoading"], [1, "lounge-title-wrapper"], [1, "date-container"], [1, "lounge-date-wrapper"], [1, "lounge-last-refresh"], ["alt", "", 3, "src", "error", "load"], ["class", "org-name", 4, "ngIf"], [1, "org-name"], [1, "workflow-table-container"], ["aria-describedby", "horizontal", 1, "horizontal-workflow-table"], [1, "d-none"], [1, "scroll-items-row"], ["class", "job-item-row", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "job-item-row", 3, "ngStyle"], [1, "job-item-cards"], [1, "workflow-row-container"], ["horizontalRow", ""], [1, "workflow-header-card"], [1, "card-content"], [1, "uppercase"], [1, "rounded-icon"], [1, "card-container"], ["cardContainer", ""], ["class", "workflow-details-card", 4, "ngFor", "ngForOf"], [1, "workflow-details-card"], [1, "detail-card-link"], [1, "img-container"], ["alt", "", 3, "src", "ngStyle", "load"], [1, "repair-items-container"], [1, "due-date-span"], [1, "info-span"], [1, "vertical-workflow-table"], ["aria-describedby", "vertical view", 1, "vertical-table"], [4, "ngFor", "ngForOf"], [1, "vertical-card-container"], ["class", "vertical-card", 4, "ngFor", "ngForOf"], ["verticalRow", ""], [1, "header-container", 3, "ngClass"], [1, "count"], [1, "title"], [1, "vertical-card"], [1, "repair-container"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
    template: function WorkflowLoungeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WorkflowLoungeComponent_Template_chq_button_click_3_listener() {
          return ctx.openFullscreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WorkflowLoungeComponent_Template_div_click_4_listener() {
          return ctx.changeView();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WorkflowLoungeComponent_mat_icon_5_Template, 1, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WorkflowLoungeComponent_mat_icon_6_Template, 1, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WorkflowLoungeComponent_div_7_Template, 18, 11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WorkflowLoungeComponent_div_8_Template, 5, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, WorkflowLoungeComponent_div_9_Template, 8, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, WorkflowLoungeComponent_div_10_Template, 9, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 11)(12, "div", 12)(13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx.FullscreenButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0 && !ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0 && ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.workflowData.length === 0 || ctx.totalCost === 0 && ctx.totalCount === 0) && !ctx.CallingAPI);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__.ChqButtonComponent, _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_6__.CustomLoaderComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: [".rounded-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  min-width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  position: relative;\n  background: rgba(255, 255, 255, 0.4);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  margin: 1vh 1vw;\n  gap: 10px;\n}\n.workflow-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20px;\n}\n.workflow-container[_ngcontent-%COMP%]   .due-date-span[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  text-align: left;\n  font-size: 10px;\n  font-weight: 500;\n  word-break: break-word;\n}\n.workflow-container[_ngcontent-%COMP%]   .info-span[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  text-align: left;\n  font-size: 10px;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px - 2vh - 40px);\n  overflow: auto;\n  margin: 0 0.5vw;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: var(--xa-popup-light-gray);\n  border-spacing: 0;\n  padding: 0;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(26, 34, 51, 0.2) 40%, rgba(255, 255, 255, 0) 0%);\n  background-position: top right;\n  background-size: 2px 35px;\n  width: 195px;\n  background-repeat: repeat-y;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%]:last-child {\n  background-size: 0px;\n  padding-right: 0px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]:first-child {\n  margin-top: 0 !important;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 1vh);\n  margin: 0.5vh 0;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5625rem;\n  height: 100%;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%] {\n  min-width: 205px;\n  max-width: 205px;\n  border-radius: 0.625rem;\n  font-size: 12px;\n  font-weight: normal;\n  position: sticky;\n  left: 0;\n  background-color: white;\n  z-index: 1;\n  box-shadow: inset 0px 0px 0px 3px var(--xa-light-gray);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 205px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 6px;\n  flex: 1;\n  justify-content: space-between;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: center;\n  color: var(--xa-white);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 0px !important;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%] {\n  background: var(--xa-white);\n  border-radius: 8px;\n  overflow: hidden;\n  min-width: 205px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 10px;\n  padding: 0;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  cursor: auto;\n  color: black;\n  text-align: center;\n  height: 100%;\n  gap: 5px;\n  padding-right: 5px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  flex: 1;\n  justify-content: center;\n  width: 121px;\n  gap: 0.25vh;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--xa-lighter-gray);\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .workflow-repair-items[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 1.625rem;\n  height: 1.625rem;\n  font-size: 16px;\n  line-height: 4px;\n  padding: 5px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .due-date-span-customer[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  float: left;\n  padding-left: 3px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 500;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .status-span[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 500;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  min-width: 16px;\n  min-height: 16px;\n  max-width: 16px;\n  max-height: 16px;\n  background: var(--xa-bold-gray);\n  border-radius: 5px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%] {\n  color: #FFF;\n  background: var(--xa-primary);\n  margin-bottom: 0.75vw;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%] {\n  height: 5.0625rem;\n  padding: 0px 30px;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  position: relative;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  max-height: 60px;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 14px;\n  color: var(--xa-black-dark);\n  padding: 8px 4px;\n  text-align: center;\n  border: 1px solid var(--xa-light-gray);\n  border-radius: 8px;\n  display: flex;\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: var(--xa-white);\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .lounge-title-wrapper[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  letter-spacing: -0.01563rem;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  gap: 0.4375rem;\n  flex-direction: column;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-date-wrapper[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-last-refresh[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px - 2vh - 40px);\n  overflow: auto;\n  padding: 0 0.375vw;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  height: 100%;\n  width: 100%;\n  border-spacing: 0;\n  padding: 0;\n  background: #F4F5FD;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: #F4F5FD;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 0.375vw 0.75vw 0.375vw;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  gap: 10px;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 10px 11px;\n  display: flex;\n  height: 96px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 12px;\n  color: var(--xa-white);\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container.repair-not-started[_ngcontent-%COMP%] {\n  background: var(--xa-light-gray);\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  position: relative;\n  background: var(--xa-white);\n  color: var(--xa-black);\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%] {\n  background: var(--xa-white);\n  border-radius: 10px;\n  padding: 0.5vw;\n  margin-bottom: 10px;\n  scroll-margin-top: 130px;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  background: var(--xa-lighter-gray);\n  border-radius: 10px;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  object-fit: contain;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25vw;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  min-width: 26px;\n  min-height: 26px;\n  max-width: 26px;\n  max-height: 26px;\n  background: var(--xa-bold-gray);\n  border-radius: 5px;\n}\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n.workflow-container[_ngcontent-%COMP%]   .fullscreen-table[_ngcontent-%COMP%] {\n  height: calc(100vh - 50px);\n}\n\n.svg-17px[_ngcontent-%COMP%] {\n  width: 17px;\n}\n\n.main-content[_ngcontent-%COMP%]   .addenda-container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n\nspan.text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n\n.Approved[_ngcontent-%COMP%] {\n  color: var(--xa-approve);\n}\n\n.PendingApproval[_ngcontent-%COMP%] {\n  color: var(--xa-pending-approval);\n}\n\n.RepairEstimation[_ngcontent-%COMP%] {\n  color: var(--xa-repair-estimate);\n}\n\n.UploadPhotos[_ngcontent-%COMP%] {\n  color: var(--xa-upload-photo);\n}\n\n.UploadDocuments[_ngcontent-%COMP%] {\n  color: var(--xa-upload-document);\n}\n\n.Draft[_ngcontent-%COMP%] {\n  color: var(--xa-draft);\n}\n\n.card-container-fs[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex-wrap: wrap;\n}\n\n.scroll-btn-fs[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.workflow-header-card-fs[_ngcontent-%COMP%] {\n  height: auto !important;\n  justify-content: flex-start !important;\n}\n\n.workflow-row-container-fs[_ngcontent-%COMP%] {\n  align-items: stretch !important;\n}\n\n.fullscreen-tbody[_ngcontent-%COMP%] {\n  height: calc(100vh - 140px) !important;\n}\n.fullscreen-tbody[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5625rem;\n  width: calc(100vw - 120px);\n}\n\n.alignment-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  display: flex;\n  background: #FFF;\n  box-shadow: 0px 1px 3px 0px var(--xa-light-gray);\n}\n.alignment-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvd29ya2Zsb3ctbG91bmdlL3dvcmtmbG93LWxvdW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFLSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBRk47QUFHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFPRTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUxKO0FBUUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUEo7QUFRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFOTjtBQW1DTTtFQUNFLG1CQUFBO0FBakNSO0FBb0NNO0VBQ0UsdUZBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBbENSO0FBcUNNO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQW5DUjtBQXVDUTtFQUNFLHdCQUFBO0FBckNWO0FBdUNRO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQXJDVjtBQXNDVTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQXBDWjtBQXNDWTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLHNEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBcENkO0FBcUNjO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7QUFuQ2hCO0FBb0NnQjtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbENsQjtBQXNDYztFQUNFLFlBQUE7QUFwQ2hCO0FBdUNjO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFyQ2hCO0FBeUNZO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUF2Q2Q7QUF3Q2M7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBdENoQjtBQXlDYztFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQXZDaEI7QUEwQ2dCO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUF4Q2xCO0FBMENrQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXhDcEI7QUE0Q2dCO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0FBMUNsQjtBQTJDa0I7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBekNwQjtBQStDZ0I7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQTdDbEI7QUFnRGdCO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTlDbEI7QUFnRGtCO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUE5Q3BCO0FBbURnQjtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqRGxCO0FBb0RnQjtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWxEbEI7QUEyRE07RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUF6RFY7QUEyRFU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQXpEWjtBQWlFRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUEvREo7QUFpRUk7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0FBL0ROO0FBbUVFO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFqRUo7QUFrRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBaEVOO0FBa0VNO0VBQ0UsOEJBQUE7QUFoRVI7QUFrRVE7RUFDRSxxQkFBQTtBQWhFVjtBQWtFVTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFoRWQ7QUFrRWM7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFoRWxCO0FBbUVjO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUFqRWxCO0FBc0VRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBcEVWO0FBdUVRO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFyRVY7QUF1RVU7RUFDRSxnQkFBQTtBQXJFWjtBQXdFVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXRFWjtBQTZFRTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBM0VKO0FBNEVJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBMUVOO0FBNEVNO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBMUVSO0FBNkVNO0VBQ0UsaUNBQUE7QUEzRVI7QUFnRkk7RUFDRSxlQUFBO0FBOUVOO0FBaUZJO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0FBL0VOO0FBa0ZJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBaEZOO0FBa0ZNO0VBQ0UsZ0NBQUE7QUFoRlI7QUFtRk07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBakZSO0FBb0ZNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsRlI7QUFzRkk7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFwRlI7QUFxRlE7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0FBbkZWO0FBb0ZVO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFsRlo7QUFzRlE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQXBGWjtBQXFGWTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQW5GaEI7QUFxRmdCO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFuRmxCO0FBMEZFO0VBQ0UsMEJBQUE7QUF4Rko7O0FBNEZBO0VBQ0UsV0FBQTtBQXpGRjs7QUE0RkE7RUFDRSw4QkFBQTtBQXpGRjs7QUE0RkE7RUFDRSwwQkFBQTtBQXpGRjs7QUE0RkE7RUFDRSx3QkFBQTtBQXpGRjs7QUE0RkE7RUFDRSxpQ0FBQTtBQXpGRjs7QUE0RkE7RUFDRSxnQ0FBQTtBQXpGRjs7QUE0RkE7RUFDRSw2QkFBQTtBQXpGRjs7QUE0RkE7RUFDRSxnQ0FBQTtBQXpGRjs7QUE0RkE7RUFDRSxzQkFBQTtBQXpGRjs7QUE2RkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUExRkY7O0FBNkZBO0VBQ0Usd0JBQUE7QUExRkY7O0FBNkZBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBQTFGRjs7QUE2RkE7RUFDRSwrQkFBQTtBQTFGRjs7QUE2RkE7RUFDRSxzQ0FBQTtBQTFGRjtBQTRGRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUExRko7O0FBOEZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtBQTNGSjtBQTRGSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBMUZOIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kZWQtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogMzBweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ud29ya2Zsb3ctY29udGFpbmVyIHtcclxuXHJcbiAgLmxvdW5nZS1saXN0LWhlYWRlciB7XHJcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW46IDF2aCAxdnc7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgLmxhc3QtdXBkYXRlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHhcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5kdWUtZGF0ZS1zcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tc3BhbiB7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLndvcmtmbG93LXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCAtIDJ2aCAtIDQwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgMC41dnc7XHJcbiAgICAuaG9yaXpvbnRhbC13b3JrZmxvdy10YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG4gICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgLy8gdGJvZHkge1xyXG4gICAgICAvLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC8vICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLy8gICB0cjpsYXN0LWNoaWxkIHtcclxuICAgICAgLy8gICAgIGdhcDogMC41cmVtO1xyXG4gICAgICAvLyAgIH1cclxuXHJcbiAgICAgIC8vICAgdHI6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLy8gdHIge1xyXG4gICAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC8vICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLy8gdGguR3JlZW4ge1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWdyZWVuLW1lZGl1bSk7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIHRoLlJlZCB7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtZ3JlZW4tbWVkaXVtKTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yaWdodC1ib3JkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMUEyMjMzMzMgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAycHggMzVweDtcclxuICAgICAgICB3aWR0aDogMTk1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmlnaHQtYm9yZGVyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmpvYi1pdGVtLXJvdyB7XHJcbiAgICAgICAgLmpvYi1pdGVtLWNhcmRzOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmpvYi1pdGVtLWNhcmRzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxdmgpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjV2aCAwO1xyXG4gICAgICAgICAgLndvcmtmbG93LXJvdy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDAuNTYyNXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLndvcmtmbG93LWhlYWRlci1jYXJkIHtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwNXB4O1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjA1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggM3B4IHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMjA1cHg7XHJcbiAgICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAud29ya2Zsb3ctZGV0YWlscy1jYXJkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlsLWNhcmQtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLnJlcGFpci1pdGVtcy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDAuMjV2aDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodGVyLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAud29ya2Zsb3ctcmVwYWlyLWl0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kdWUtZGF0ZS1zcGFuLWN1c3RvbWVyIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zdGF0dXMtc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlcGFpci1pdGVtcyB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTZweDtcclxuICAgICAgICAgIG1heC13aWR0aDogMTZweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ib2xkLWdyYXkpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgLm5vLWRhdGEtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcblxyXG4gICAgLm5vLWRhdGEtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mdWxsc2NyZWVuIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtcHJpbWFyeSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1dnc7XHJcbiAgICAubG91bmdlLWhlYWRlciB7XHJcbiAgICAgIGhlaWdodDogNS4wNjI1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuXHJcbiAgICAgIC5sb3VuZ2UtaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLnhhLWxvZ28td3JhcHBlciB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgLm1lbnUtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAub3JnLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDRweDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgIC5sb3VuZ2UtdGl0bGUtd3JhcHBlciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTU2M3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZ2FwOiAwLjQzNzVyZW07XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgIC5sb3VuZ2UtZGF0ZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG91bmdlLWxhc3QtcmVmcmVzaCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC52ZXJ0aWNhbC13b3JrZmxvdy10YWJsZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCAtIDJ2aCAtIDQwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDAuMzc1dnc7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjRGNUZEO1xyXG5cclxuICAgICAgdGhlYWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y0RjVGRDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGgsIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAuMzc1dncgMC43NXZ3IDAuMzc1dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgKiB7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTFweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG5cclxuICAgICAgJi5yZXBhaXItbm90LXN0YXJ0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY291bnQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcGFpci1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgc2Nyb2xsLW1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgIC5pbWctY29udGFpbmVyIHsgICAgICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodGVyLWdyYXkpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlcGFpci1pdGVtcy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDAuMjV2dztcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAucmVwYWlyLWl0ZW1zIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJvbGQtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZ1bGxzY3JlZW4tdGFibGUge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ZnLTE3cHgge1xyXG4gIHdpZHRoOiAxN3B4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IC5hZGRlbmRhLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zcGFuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG59XHJcblxyXG4uQXBwcm92ZWQge1xyXG4gIGNvbG9yOiB2YXIoLS14YS1hcHByb3ZlKTtcclxufVxyXG5cclxuLlBlbmRpbmdBcHByb3ZhbCB7XHJcbiAgY29sb3I6IHZhcigtLXhhLXBlbmRpbmctYXBwcm92YWwpO1xyXG59XHJcblxyXG4uUmVwYWlyRXN0aW1hdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbn1cclxuXHJcbi5VcGxvYWRQaG90b3Mge1xyXG4gIGNvbG9yOiB2YXIoLS14YS11cGxvYWQtcGhvdG8pO1xyXG59XHJcblxyXG4uVXBsb2FkRG9jdW1lbnRzIHtcclxuICBjb2xvcjogdmFyKC0teGEtdXBsb2FkLWRvY3VtZW50KTtcclxufVxyXG5cclxuLkRyYWZ0IHtcclxuICBjb2xvcjogdmFyKC0teGEtZHJhZnQpO1xyXG59XHJcblxyXG4vLyBGdWxsc2NyZWVuIENsYXNzZXNcclxuLmNhcmQtY29udGFpbmVyLWZzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNjcm9sbC1idG4tZnMge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndvcmtmbG93LWhlYWRlci1jYXJkLWZzIHtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndvcmtmbG93LXJvdy1jb250YWluZXItZnMge1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsc2NyZWVuLXRib2R5IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCkgIWltcG9ydGFudDtcclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNTYyNXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTIwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmFsaWdubWVudC1idG4ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/route-mapper/repair-status-mapper */ 93620);
/* harmony import */ var src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/workflow/workflow.service */ 71923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _helper_directive_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../helper/directive/has-permission/has-permission.directive */ 70115);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);





















const _c0 = ["filter"];
function WorkflowComponent_chq_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_chq_button_25_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.openFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r0.filterButton);
  }
}
function WorkflowComponent_mat_icon_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-icon", 39);
  }
}
function WorkflowComponent_mat_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-icon", 40);
  }
}
const _c1 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function WorkflowComponent_div_29_table_1_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const items_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](7, _c1, items_r11.ManualCost, ctx_r13.i18n.currencySymbol, ctx_r13.i18n.digitsInfo, ctx_r13.i18n.locale, ctx_r13.i18n.position)));
  }
}
function WorkflowComponent_div_29_table_1_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_div_29_table_1_div_4_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.move_scroll("left", _r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function WorkflowComponent_div_29_table_1_div_4_mat_card_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "due_out"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 6, repair_r21.RepairEndDate, "dd/MM/yy")), "");
  }
}
function WorkflowComponent_div_29_table_1_div_4_mat_card_12_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repair_r21.CustomerFirstName + " " + repair_r21.CustomerLastName);
  }
}
function WorkflowComponent_div_29_table_1_div_4_mat_card_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repair_r21.VehicleMake + " " + repair_r21.VehicleModel);
  }
}
function WorkflowComponent_div_29_table_1_div_4_mat_card_12_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", repair_r21.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r26.statusMap[repair_r21.Status]);
  }
}
function WorkflowComponent_div_29_table_1_div_4_mat_card_12_div_9_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 5, repair_r21.LastestTaskUpdatedRepairType ? repair_r21.LastestTaskUpdatedRepairType : "Others")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r32.jobIconDictionary[repair_r21.LastestTaskUpdatedRepairType] ? ctx_r32.jobIconDictionary[repair_r21.LastestTaskUpdatedRepairType] : "gears");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", "black");
  }
}
function WorkflowComponent_div_29_table_1_div_4_mat_card_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 72)(1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "mat-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_div_29_table_1_div_4_mat_card_12_div_9_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const repair_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.navigate("parts", repair_r21, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_div_29_table_1_div_4_mat_card_12_div_9_Template_button_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const repair_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.navigate("estimate", repair_r21, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, WorkflowComponent_div_29_table_1_div_4_mat_card_12_div_9_button_12_Template, 4, 7, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "mat-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const repair_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 13, repair_r21.Assignees.length === 0 ? "No Assignee" : repair_r21.Assignees.length > 1 ? "Multi Assignees" : "Single Assignee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", repair_r21.Assignees.length > 1 ? "multi-users" : "single-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r21.Assignees.length === 0 ? "dark-gray-disabled" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 15, repair_r21.JobStatusColor === "Transparent" ? "job_not_started" : repair_r21.JobStatusColor === "Green" ? "job_start_today" : "job_start_in_past"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r21.JobStatusColor === "Transparent" ? "dark-gray-disabled" : repair_r21.JobStatusColor === "Green" ? "green-medium" : "dark-red2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", ctx_r27.PartTypetoolTip(repair_r21.PartGeneralStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r27.PartTypeIcon(repair_r21.PartGeneralStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 17, repair_r21.IsAttentionRequired ? "attention_required" : "attention_not_required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r21.IsAttentionRequired === null ? "dark-gray-disabled" : repair_r21.IsAttentionRequired ? "dark-red2" : "dark-gray-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repair_r21.LastestTaskUpdatedRepairType && repair_r21.LastestTaskUpdatedRepairType !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 19, repair_r21.IsTowedIn ? "towed_in" : "not_towed_in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "towing");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r21.IsTowedIn ? "black" : "dark-gray-disabled");
  }
}
function WorkflowComponent_div_29_table_1_div_4_mat_card_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card", 62)(1, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_div_29_table_1_div_4_mat_card_12_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41);
      const repair_r21 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.bookingStatusUrl(repair_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 64)(3, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("load", function WorkflowComponent_div_29_table_1_div_4_mat_card_12_Template_img_load_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41);
      const repair_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](repair_r21.isLoaded = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, WorkflowComponent_div_29_table_1_div_4_mat_card_12_span_5_Template, 5, 9, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, WorkflowComponent_div_29_table_1_div_4_mat_card_12_span_6_Template, 2, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, WorkflowComponent_div_29_table_1_div_4_mat_card_12_span_7_Template, 2, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, WorkflowComponent_div_29_table_1_div_4_mat_card_12_span_8_Template, 2, 2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, WorkflowComponent_div_29_table_1_div_4_mat_card_12_div_9_Template, 16, 21, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const repair_r21 = ctx.$implicit;
    const items_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", repair_r21.ImageUrl !== null && repair_r21.ImageUrl !== "" ? repair_r21.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", items_r11.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !items_r11.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !items_r11.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !items_r11.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", items_r11.IsJobFromMaster);
  }
}
function WorkflowComponent_div_29_table_1_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_div_29_table_1_div_4_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r45);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r44.move_scroll("right", _r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function WorkflowComponent_div_29_table_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "div", 51)(4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, WorkflowComponent_div_29_table_1_div_4_div_8_Template, 4, 13, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, WorkflowComponent_div_29_table_1_div_4_div_9_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, WorkflowComponent_div_29_table_1_div_4_mat_card_12_Template, 10, 6, "mat-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, WorkflowComponent_div_29_table_1_div_4_div_13_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const items_r11 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background-color", items_r11.IsJobFromMaster ? items_r11.Color : "#DCDDE2")("color", items_r11.IsJobFromMaster ? "" : "#0B0E15");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](items_r11.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](items_r11.WaterfallRepairs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", items_r11.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.checkJobWrapperScroll("left", _r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", items_r11.WaterfallRepairs);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.checkJobWrapperScroll("right", _r15));
  }
}
function WorkflowComponent_div_29_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "tbody")(3, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, WorkflowComponent_div_29_table_1_div_4_Template, 14, 10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.workflowData);
  }
}
const _c2 = function (a0) {
  return {
    "repair-not-started": a0
  };
};
function WorkflowComponent_div_29_table_2_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 85)(1, "div", 86)(2, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const items_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background-color", items_r48.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c2, items_r48.JobName.toLowerCase() === "repair not started"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](items_r48.WaterfallRepairs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](items_r48.JobName);
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, repair_r53.Assignees.length === 0 ? "No Assignee" : repair_r53.Assignees.length > 1 ? "Multi Assignees" : "Single Assignee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", repair_r53.Assignees.length > 1 ? "multi-users" : "single-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r53.Assignees.length === 0 ? "dark-gray-disabled" : "black");
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, repair_r53.JobStatusColor === "Transparent" ? "job_not_started" : repair_r53.JobStatusColor === "Green" ? "job_start_today" : "job_start_in_past"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r53.JobStatusColor === "Transparent" ? "dark-gray-disabled" : repair_r53.JobStatusColor === "Green" ? "green-medium" : "dark-red2");
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", ctx_r57.PartTypetoolTip(repair_r53.PartGeneralStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r57.PartTypeIcon(repair_r53.PartGeneralStatus));
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, repair_r53.IsAttentionRequired ? "attention_required" : "attention_not_required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r53.IsAttentionRequired === null ? "dark-gray-disabled" : repair_r53.IsAttentionRequired ? "dark-red2" : "dark-gray-disabled");
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 5, repair_r53.LastestTaskUpdatedRepairType ? repair_r53.LastestTaskUpdatedRepairType : "Others")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r59.jobIconDictionary[repair_r53.LastestTaskUpdatedRepairType] ? ctx_r59.jobIconDictionary[repair_r53.LastestTaskUpdatedRepairType] : "gears");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", "black");
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, repair_r53.IsTowedIn ? "towed_in" : "not_towed_in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "towing");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r53.IsTowedIn ? "black" : "dark-gray-disabled");
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repair_r53.CustomerFirstName + " " + repair_r53.CustomerLastName);
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repair_r53.VehicleMake + " " + repair_r53.VehicleModel);
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", repair_r53.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r63.statusMap[repair_r53.Status]);
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repair_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "due_out"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 6, repair_r53.RepairEndDate, "dd/MM/yy")), " ");
  }
}
function WorkflowComponent_div_29_table_2_td_6_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card", 62)(1, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_div_29_table_2_td_6_mat_card_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r76);
      const repair_r53 = restoredCtx.$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r75.bookingStatusUrl(repair_r53));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 64)(3, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("load", function WorkflowComponent_div_29_table_2_td_6_mat_card_1_Template_img_load_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r76);
      const repair_r53 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](repair_r53.isloaded = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_5_Template, 3, 5, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_6_Template, 3, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_7_Template, 2, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_8_Template, 3, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_9_Template, 4, 7, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, WorkflowComponent_div_29_table_2_td_6_mat_card_1_div_10_Template, 3, 5, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, WorkflowComponent_div_29_table_2_td_6_mat_card_1_span_11_Template, 2, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, WorkflowComponent_div_29_table_2_td_6_mat_card_1_span_12_Template, 2, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, WorkflowComponent_div_29_table_2_td_6_mat_card_1_span_13_Template, 2, 2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, WorkflowComponent_div_29_table_2_td_6_mat_card_1_span_14_Template, 5, 9, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const repair_r53 = ctx.$implicit;
    const items_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", repair_r53.ImageUrl !== null && repair_r53.ImageUrl !== "" ? repair_r53.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("flex-direction", items_r50.IsJobFromMaster ? "row" : "column");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repair_r53.LastestTaskUpdatedRepairType && repair_r53.LastestTaskUpdatedRepairType !== "" && items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !items_r50.IsJobFromMaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repair_r53.RepairEndDate && items_r50.IsJobFromMaster);
  }
}
function WorkflowComponent_div_29_table_2_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WorkflowComponent_div_29_table_2_td_6_mat_card_1_Template, 15, 13, "mat-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", items_r50.WaterfallRepairs);
  }
}
function WorkflowComponent_div_29_table_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 82)(1, "thead", 83)(2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, WorkflowComponent_div_29_table_2_th_3_Template, 6, 7, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "tbody")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, WorkflowComponent_div_29_table_2_td_6_Template, 2, 1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r9.workflowData);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r9.workflowData);
  }
}
function WorkflowComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WorkflowComponent_div_29_table_1_Template, 5, 1, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, WorkflowComponent_div_29_table_2_Template, 7, 2, "table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r3.verticalView);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.verticalView);
  }
}
function WorkflowComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 91)(1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
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
    this.subs = [];
    this.verticalView = false;
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
   * move_scroll
   */
  move_scroll(direction, el) {
    if (direction === 'left') {
      el.scrollLeft = el.scrollLeft - 250;
    } else {
      el.scrollLeft = el.scrollLeft + 250;
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
      if (item.JobName !== 'REPAIR NOT STARTED') {
        this.totalCount += item.WaterfallRepairs.length;
        item['ManualCost'] = 0;
        item.WaterfallRepairs.forEach(itm => {
          this.totalCost += itm.EstimateCost;
          item.ManualCost += itm.EstimateCost;
        });
      }
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
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([this.getOrgIfBM(), this.workflowService.getCustomer(this.userDetail.organizationDetail.id)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(([orgList, CustomerList]) => {
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
              value: x.isIndividual ? x.contactId : x.companyId,
              isIndividual: x.isIndividual,
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(null);
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
              value: x.isIndividual ? x.contactId : x.companyId,
              isIndividual: x.isIndividual,
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
    if (filterValue.CustomerId && filterValue.CustomerId.length > 0 || filterValue.CompanyId && filterValue.CompanyId.length > 0) {
      if (query !== '?$filter=') {
        query += '&';
      } else {
        query = '?';
      }
      query += '$expand=WaterfallRepairs($filter=(';
      if (filterValue.CustomerId.length > 0) query += `${filterValue.CustomerId.map(x => 'ContactId eq ' + x + '').join(' or ')}`;
      if (filterValue.CustomerId.length > 0 && filterValue.CompanyId.length > 0) query += ' or ';
      if (filterValue.CompanyId.length > 0) query += `${filterValue.CompanyId.map(x => 'CompanyId eq ' + x + '').join(' or ')}`;
      query += '))';
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
      this.filterForm.get(output.name).setValue(output.value.filter(x => x.isIndividual).map(x => {
        return x.value;
      }));
      this.filterForm.get('CompanyId').setValue(output.value.filter(x => !x.isIndividual).map(x => {
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
      RepairGuid,
      JobId
    } = repair;
    let routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_2__.RepairStatusMapper[Status?.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_2__.RepairStatusMapper.others;
    routeToRedirect = routeToRedirect.replace('{{repairGUID}}', RepairGuid);
    if (Status?.toLowerCase() === 'repairinprogress') {
      this.router.navigate([routeToRedirect], {
        queryParams: {
          selectedJob: JobId
        }
      });
      return;
    }
    this.router.navigate([routeToRedirect]);
  }
  /**
   * navigation to route
   * @param route
   * @param event
   */
  navigate(route, repair, event) {
    event.stopPropagation();
    const {
      RepairGuid,
      IsAttentionRequired
    } = repair;
    let redirectUrl = `repair/booking/{{repairGUID}}/${route}`;
    redirectUrl = redirectUrl.replace('{{repairGUID}}', RepairGuid);
    if (!IsAttentionRequired) {
      return;
    }
    if (IsAttentionRequired) {
      this.workflowService.updateAttentionRequired(RepairGuid).subscribe();
    }
    this.router.navigate([redirectUrl]);
  }
  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    clearInterval(this.IntervalGetWorkflow);
  }
  static #_ = this.ɵfac = function WorkflowComponent_Factory(t) {
    return new (t || WorkflowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__.WorkflowService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_5__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: WorkflowComponent,
    selectors: [["app-workflow"]],
    viewQuery: function WorkflowComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__.WorkflowService])],
    decls: 58,
    vars: 36,
    consts: [[1, "page-container", "workflow-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0"], [1, "fx-row", "date-container"], [1, "current-data"], [1, "", 3, "innerHTML"], [1, "updated-date"], [1, "fx-row", "date-filter-container"], [1, "flex", "align-center", 2, "gap", "25px"], [1, "flex", "align-center"], ["color", "dark-gray", 2, "margin-right", "8px"], ["svgIcon", "double-database", 2, "margin-right", "8px"], [1, "flex", "align-center", 2, "gap", "10px"], [3, "buttonModel", "click", 4, "chqPermission"], [1, "alignment-btn", 3, "click"], ["svgIcon", "horizontal-alignment", 4, "ngIf"], ["svgIcon", "vertical-alignment", 4, "ngIf"], ["class", "fx-1 workflow-table-container", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [3, "inputModel", "controlOutput"], [1, "customer-list-w", 3, "inputModel", "controlOutput"], [1, "footer"], [1, "col-6"], [3, "buttonModel", "click"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], ["svgIcon", "horizontal-alignment"], ["svgIcon", "vertical-alignment"], [1, "fx-1", "workflow-table-container"], ["class", "workflow-table horizontal", "aria-labelledby", "horizontal table", 4, "ngIf"], ["class", "workflow-table vertical", "aria-labelledby", "vertical table", 4, "ngIf"], ["aria-labelledby", "horizontal table", 1, "workflow-table", "horizontal"], [1, "d-none"], [1, "job-item-row"], ["class", "job-item-cards", 4, "ngFor", "ngForOf"], [1, "job-item-cards"], [1, "workflow-row-container"], [1, "workflow-header-card"], [1, "card-content"], [1, "uppercase"], [1, "rounded-icon"], ["style", "text-align: left;", 4, "ngIf"], ["class", "scroll-btn", 3, "click", 4, "ngIf"], [1, "card-container"], ["cardContainer", ""], ["class", "workflow-details-card", 4, "ngFor", "ngForOf"], [2, "text-align", "left"], [1, "scroll-btn", 3, "click"], ["color", "black", "svgIcon", "arrow-left"], [1, "workflow-details-card"], [1, "detail-card-link", 3, "click"], [1, "img-container"], ["alt", "", 3, "src", "load"], [1, "repair-items-container"], ["class", "due-date-span", 4, "ngIf"], ["class", "status-span", 3, "ngClass", 4, "ngIf"], ["class", "workflow-repair-items", 4, "ngIf"], [1, "due-date-span"], [1, "status-span", 3, "ngClass"], [1, "workflow-repair-items"], ["matTooltipPosition", "above", 1, "repair-items", 3, "matTooltip"], [1, "svg-17px", 3, "svgIcon"], ["svgIcon", "clock2"], ["matTooltipPosition", "above", 1, "repair-items", 3, "matTooltip", "click"], ["svgIcon", "flag-circle", 1, "svg-17px"], ["class", "repair-items", "matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf"], [3, "svgIcon"], [1, "repairType-custom-class", 3, "svgIcon"], ["color", "black", "svgIcon", "arrow-right"], ["aria-labelledby", "vertical table", 1, "workflow-table", "vertical"], [1, "workflow-table-thead"], ["class", "right-border", 4, "ngFor", "ngForOf"], [1, "right-border"], [1, "workflow-header-card", 3, "ngClass"], [1, "bg-white", "rounded-icon"], [1, "workflow-repair-items", "flex", 2, "padding", "5px 0px", "gap", "5px"], ["class", "due-date-span", "style", "margin-top: 6px;", 4, "ngIf"], [1, "due-date-span", 2, "margin-top", "6px"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
    template: function WorkflowComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 6)(11, "span", 7)(12, "span", 8)(13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "directions_car");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "label")(16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "label")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "xaCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, WorkflowComponent_chq_button_25_Template, 1, 1, "chq-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_div_click_26_listener() {
          return ctx.verticalView = !ctx.verticalView;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, WorkflowComponent_mat_icon_27_Template, 1, 0, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, WorkflowComponent_mat_icon_28_Template, 1, 0, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, WorkflowComponent_div_29_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, WorkflowComponent_div_30_Template, 9, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-sidenav-container", 18)(32, "mat-sidenav", 19, 20)(34, "div", 21)(35, "div", 22)(36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, " Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 24)(39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](33);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r5.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "form", 27)(42, "div", 28)(43, "div", 29)(44, "chq-input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function WorkflowComponent_Template_chq_input_controlOutput_44_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 28)(46, "div", 29)(47, "chq-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function WorkflowComponent_Template_chq_input_controlOutput_47_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 32)(49, "div", 28)(50, "div", 33)(51, "chq-button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_chq_button_click_51_listener() {
          return ctx.applyFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 33)(53, "chq-button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_chq_button_click_53_listener() {
          return ctx.resetFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 35)(55, "div", 36)(56, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 20, "current_date"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx.current_date_format(), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 22, "last_refreshed"), ": ", ctx.LastRefreshedDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.totalCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](23, 24, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](30, _c1, ctx.totalCost, ctx.i18n.currencySymbol, ctx.i18n.digitsInfo, ctx.i18n.locale, ctx.i18n.position)));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chqPermission", "workflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.verticalView);
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _helper_directive_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_8__.HasPermissionDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContainer, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_17__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.XaCurrencyPipe],
    styles: [".mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .mat-drawer-backdrop {\n  position: fixed;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav.filter-sidenav[_ngcontent-%COMP%] {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 74px;\n  width: 74px;\n  max-width: 95%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .span-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr.no-line[_ngcontent-%COMP%] {\n  border: none;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .two-per-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 133px !important;\n  width: auto !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 92%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .customer-list-w[_ngcontent-%COMP%]     .checkbox-wrapper label {\n  display: flex;\n  align-items: center;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .workflow-customer-item .email {\n  display: block;\n  font-style: italic;\n  opacity: 0.7;\n}\n\n.workflow-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px);\n}\n.workflow-container[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  gap: 23px;\n  margin: 15px 20px;\n}\n.workflow-container[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .current-data[_ngcontent-%COMP%], .workflow-container[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--xa-gray);\n}\n.workflow-container[_ngcontent-%COMP%]   .date-filter-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 0.625rem;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  background: #FFF;\n  margin: 15px 20px;\n  justify-content: space-between;\n}\n.workflow-container[_ngcontent-%COMP%]   .date-filter-container[_ngcontent-%COMP%]   span.text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  font-weight: 500;\n}\n.workflow-container[_ngcontent-%COMP%]   .date-filter-container[_ngcontent-%COMP%]   .alignment-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  display: flex;\n  background: #FFF;\n  box-shadow: 0px 1px 3px 0px var(--xa-light-gray);\n}\n.workflow-container[_ngcontent-%COMP%]   .date-filter-container[_ngcontent-%COMP%]   .alignment-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%] {\n  padding: 0 20px 15px;\n  overflow: auto;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .workflow-table[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--xa-popup-light-gray);\n  display: contents;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .rounded-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 30px;\n  max-height: 30px;\n  font-weight: bold;\n  position: relative;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  height: calc(100vh - 222px);\n  display: flex;\n  flex-direction: row;\n  gap: 0.5625rem;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%] {\n  gap: 0.5625rem;\n  position: sticky;\n  left: 0;\n  z-index: 5;\n  background: #F1F2F6;\n  width: 100%;\n  min-height: 330px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5625rem;\n  align-items: center;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%] {\n  min-width: 8.5rem;\n  max-width: 8.5rem;\n  height: 4.75rem;\n  border-radius: 0.625rem;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 0.625rem 0.6875rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 3px solid rgba(26, 34, 51, 0.2);\n  position: sticky;\n  top: 0;\n  background-color: white;\n  z-index: 1;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5625rem;\n  width: 100%;\n  overflow: scroll;\n  padding: 5px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 0px !important;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%] {\n  min-width: 15.875rem;\n  min-height: 100px;\n  border-radius: 0.625rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 10px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  gap: 0.4rem;\n  text-decoration: none;\n  cursor: pointer;\n  color: black;\n  text-align: center;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-right: 0.4rem;\n  gap: 10px;\n  margin: 10px 0;\n  max-height: 80px;\n  overflow: auto;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 100px;\n  width: 130px;\n  object-fit: fill;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .workflow-repair-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 5px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 1.625rem;\n  height: 1.625rem;\n  font-size: 16px;\n  line-height: 4px;\n  padding: 1px 6px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .repairType-custom-class[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 18px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .due-date-span[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  float: left;\n  padding-left: 3px;\n  text-align: left;\n  font-size: 0.625rem;\n  font-weight: 500;\n  flex: 1;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .status-span[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 3px;\n  text-align: left;\n  font-size: 0.625rem;\n  font-weight: 700;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .scroll-btn[_ngcontent-%COMP%] {\n  height: 98px;\n  cursor: pointer;\n  font-size: 1.125rem;\n  padding: 0rem 0.45rem;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  box-shadow: 0px 1px 3px 0px rgba(96, 108, 128, 0.05);\n  border-radius: 0.5rem;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .scroll-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   .rounded-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-table-thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n  background-color: var(--xa-popup-light-gray);\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 0 !important;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 0 !important;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(26, 34, 51, 0.2) 40%, rgba(255, 255, 255, 0) 0%);\n  background-position: top right;\n  background-size: 2px 35px;\n  background-repeat: repeat-y;\n  padding: 0 10px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%]:last-child {\n  background-size: 0px;\n  padding-right: 0px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 120px;\n  min-height: 78px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 10px 4px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  margin: 0px auto 10px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card.repair-not-started[_ngcontent-%COMP%] {\n  background: var(--xa-light-gray);\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  font-size: 10px;\n  margin: auto;\n  margin-bottom: 10px;\n  min-width: 130px;\n  max-width: 130px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: auto;\n  color: black;\n  text-align: center;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 75px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  width: 100%;\n  max-width: 130px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .workflow-repair-items[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background: var(--xa-bold-gray);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  fill: var(--xa-black);\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   .repairType-custom-class[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 18px;\n}\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .due-date-span[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  float: left;\n  padding-left: 3px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n\n.svg-17px[_ngcontent-%COMP%] {\n  width: 17px;\n}\n\n.main-content[_ngcontent-%COMP%]   .addenda-container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n\n.car-item-row[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n  gap: 0.5625rem !important;\n  margin-left: -37px;\n}\n\n.Approved[_ngcontent-%COMP%] {\n  color: var(--xa-approve);\n}\n\n.PendingApproval[_ngcontent-%COMP%] {\n  color: var(--xa-pending-approval);\n}\n\n.RepairEstimation[_ngcontent-%COMP%] {\n  color: var(--xa-repair-estimate);\n}\n\n.UploadPhotos[_ngcontent-%COMP%] {\n  color: var(--xa-upload-photo);\n}\n\n.UploadDocuments[_ngcontent-%COMP%] {\n  color: var(--xa-upload-document);\n}\n\n.Draft[_ngcontent-%COMP%] {\n  color: var(--xa-draft);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvd29ya2Zsb3cvd29ya2Zsb3cvd29ya2Zsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFFSTtFQUNJLGVBQUE7QUFBUjtBQUdJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFEUjtBQUdRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBRFo7QUFJUTtFQUNJLGtCQUFBO0FBRlo7QUFLUTtFQUNJLDJCQUFBO0VBQ0Esa0NBQUE7QUFIWjtBQU1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUpaO0FBTVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpoQjtBQVFnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTnBCO0FBUW9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFOeEI7QUFZUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFWWjtBQVlnQjtFQUNJLG1CQUFBO0FBVnBCO0FBYWdCO0VBQ0ksZUFBQTtBQVhwQjtBQWFvQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQVh4QjtBQWF3QjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWDVCO0FBa0J3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBaEI1QjtBQXNCWTtFQUNJLGNBQUE7QUFwQmhCO0FBc0JnQjtFQUNJLFlBQUE7QUFwQnBCO0FBd0JZO0VBQ0ksV0FBQTtBQXRCaEI7QUEwQmdCO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtBQXhCcEI7QUE2QlE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBM0JaO0FBNkJZO0VBQ0ksVUFBQTtBQTNCaEI7QUFnQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUE5Qlo7QUFvQ1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBbENaOztBQXVDQTtFQUNJLDJCQUFBO0FBcENKO0FBcUNJO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0FBbkNSO0FBb0NRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFsQ1o7QUFxQ0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQW5DUjtBQXFDUTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUFuQ1o7QUFzQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0FBcENaO0FBcUNZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFuQ2Q7QUF5Q0k7RUFDSSxvQkFBQTtFQUVBLGNBQUE7QUF4Q1I7QUEwQ1E7RUFDSSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQXhDWjtBQTJDUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF6Q1o7QUE2Q1k7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUEzQ2hCO0FBNENnQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQTFDcEI7QUEyQ29CO0VBQ0ksV0FBQTtBQXpDeEI7QUEwQ3dCO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXhDNUI7QUEwQzRCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFFQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUF4Q2hDO0FBeUNnQztFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdkNsQztBQXlDZ0M7RUFDSSxZQUFBO0FBdkNwQztBQTBDZ0M7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQXhDcEM7QUE0QzRCO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBMUNoQztBQTJDZ0M7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBekNwQztBQTRDZ0M7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUEzQ3BDO0FBOENvQztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTVDeEM7QUE4Q3dDO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTVDMUM7QUFnRG9DO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBOUN4QztBQWtEb0M7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFoRHhDO0FBbURvQztFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFFBQUE7QUFqRHRDO0FBb0RvQztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbER4QztBQW9Ed0M7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWxENUM7QUFxRHdDO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFuRDVDO0FBdURvQztFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQXJEeEM7QUF1RG9DO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBckR4QztBQXdEb0M7RUFDSSxlQUFBO0FBdER4QztBQTJENEI7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxvREFBQTtFQUNBLHFCQUFBO0FBekRoQztBQTBEZ0M7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXhEcEM7QUFnRVk7RUFDSSxvQ0FBQTtBQTlEaEI7QUFtRVk7RUFDSSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7QUFqRWhCO0FBb0VZO0VBQ0ksMEJBQUE7QUFsRWhCO0FBcUVZO0VBQ0ksMkJBQUE7QUFuRWhCO0FBc0VZO0VBQ0ksdUZBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBcEVoQjtBQXVFWTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFyRWhCO0FBd0VZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQXRFaEI7QUF1RWdCO0VBQ0ksWUFBQTtBQXJFcEI7QUF3RWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUF0RXBCO0FBd0VnQjtFQUNJLGdDQUFBO0FBdEVwQjtBQTBFWTtFQUNJLG1CQUFBO0FBeEVoQjtBQTJFWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBekVoQjtBQTJFZ0I7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF6RXBCO0FBNEVnQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQTFFcEI7QUE0RW9CO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUExRXhCO0FBZ0ZnQjtFQUNJLGVBQUE7QUE5RXBCO0FBaUZnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBL0VwQjtBQWlGb0I7RUFDSSxlQUFBO0FBL0V4QjtBQWtGb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBaEZ4QjtBQW1Gb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWpGeEI7QUFxRmdCO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFuRnBCO0FBMEZJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQXhGUjtBQTBGUTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7QUF4Rlo7O0FBNkZBO0VBQ0ksV0FBQTtBQTFGSjs7QUE2RkE7RUFDSSw4QkFBQTtBQTFGSjs7QUE2RkE7RUFDSSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQTFGSjs7QUE4RkE7RUFDRSx3QkFBQTtBQTNGRjs7QUE2RkE7RUFDRSxpQ0FBQTtBQTFGRjs7QUE0RkE7RUFDRSxnQ0FBQTtBQXpGRjs7QUEyRkE7RUFDRSw2QkFBQTtBQXhGRjs7QUEwRkE7RUFDRSxnQ0FBQTtBQXZGRjs7QUF5RkE7RUFDRSxzQkFBQTtBQXRGRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB6LWluZGV4OiA1MDEgIWltcG9ydGFudDtcclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItYmFja2Ryb3B7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtc2lkZW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAgICAgJi5maWx0ZXItc2lkZW5hdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWx0ZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogY2FsYygxNXB4ICsgMC44dncpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg1NXB4ICsgMC44dncpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgLmlucHV0LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jaGVja2JveC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Bhbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tib3gtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLm5vLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWF0LXNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnR3by1wZXItcm93IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA1MDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjhweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tZXItbGlzdC13IHtcclxuICAgICAgICA6Om5nLWRlZXAgLmNoZWNrYm94LXdyYXBwZXIgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLndvcmtmbG93LWN1c3RvbWVyLWl0ZW1cclxuICAgIHtcclxuICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53b3JrZmxvdy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xyXG4gICAgLmRhdGUtY29udGFpbmVyIHtcclxuICAgICAgICBnYXA6IDIzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDIwcHg7XHJcbiAgICAgICAgLmN1cnJlbnQtZGF0YSwgLnVwZGF0ZWQtZGF0ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWdyYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXRlLWZpbHRlci1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNiwgMzQsIDUxLCAwLjIwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAyMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgc3Bhbi50ZXh0LW11dGVkIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWxpZ25tZW50LWJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud29ya2Zsb3ctdGFibGUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMTVweDtcclxuICAgICAgICBcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgLndvcmtmbG93LXRhYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50czsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm91bmRlZC1pY29uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvcml6b250YWwgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMjJweCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGdhcDogMC41NjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgLmpvYi1pdGVtLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAwLjU2MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0YxRjJGNjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLmpvYi1pdGVtLWNhcmRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53b3JrZmxvdy1yb3ctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDAuNTYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndvcmtmbG93LWhlYWRlci1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDguNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDguNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMC42ODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjYsIDM0LCA1MSwgMC4yMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMC41NjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndvcmtmbG93LWRldGFpbHMtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXRhaWwtY2FyZC1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBhaXItaXRlbXMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud29ya2Zsb3ctcmVwYWlyLWl0ZW1ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBhaXJUeXBlLWN1c3RvbS1jbGFzc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmR1ZS1kYXRlLXNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLXNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDByZW0gMC40NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDk2LCAxMDgsIDEyOCwgMC4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIC5yb3VuZGVkLWljb24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmVydGljYWwgeyAgICAgICAgXHJcbiAgICAgICAgICAgIC53b3JrZmxvdy10YWJsZS10aGVhZHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aDpmaXJzdC1jaGlsZCwgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoOmxhc3QtY2hpbGQsIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmlnaHQtYm9yZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMUEyMjMzMzMgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMnB4IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLnJpZ2h0LWJvcmRlcjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoIC53b3JrZmxvdy1oZWFkZXItY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDc4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAxMHB4OyAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYucmVwYWlyLW5vdC1zdGFydGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAud29ya2Zsb3ctZGV0YWlscy1jYXJkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlsLWNhcmQtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC53b3JrZmxvdy1yZXBhaXItaXRlbXN7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5yZXBhaXItaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ib2xkLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucmVwYWlyVHlwZS1jdXN0b20tY2xhc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kdWUtZGF0ZS1zcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vLWRhdGEtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcblxyXG4gICAgICAgIC5uby1kYXRhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3ZnLTE3cHh7XHJcbiAgICB3aWR0aDogMTdweDtcclxufVxyXG5cclxuLm1haW4tY29udGVudCAuYWRkZW5kYS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXItaXRlbS1yb3cge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgZ2FwOiAwLjU2MjVyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzdweDtcclxufVxyXG5cclxuXHJcbi5BcHByb3ZlZCB7XHJcbiAgY29sb3I6IHZhcigtLXhhLWFwcHJvdmUpO1xyXG59XHJcbi5QZW5kaW5nQXBwcm92YWwge1xyXG4gIGNvbG9yOiB2YXIoLS14YS1wZW5kaW5nLWFwcHJvdmFsKTtcclxufVxyXG4uUmVwYWlyRXN0aW1hdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbn1cclxuLlVwbG9hZFBob3RvcyB7XHJcbiAgY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XHJcbn1cclxuLlVwbG9hZERvY3VtZW50cyB7XHJcbiAgY29sb3I6IHZhcigtLXhhLXVwbG9hZC1kb2N1bWVudCk7XHJcbn1cclxuLkRyYWZ0IHtcclxuICBjb2xvcjogdmFyKC0teGEtZHJhZnQpO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 23864:
/*!*******************************************************!*\
  !*** ./src/app/services/outbound/outbound.service.ts ***!
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
  static #_ = this.ɵfac = function OutboundService_Factory(t) {
    return new (t || OutboundService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: OutboundService,
    factory: OutboundService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 71923:
/*!*******************************************************!*\
  !*** ./src/app/services/workflow/workflow.service.ts ***!
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
  /**
   * update attention
   * @param repairguid
   * @param obj
   * @returns
   */
  updateAttentionRequired(repairguid) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/repair/${repairguid}`;
    const obj = [{
      'path': 'isAttentionRequired',
      'op': 'replace',
      'value': 'false'
    }];
    return this.http.patch(url, obj);
  }
  static #_ = this.ɵfac = function WorkflowService_Factory(t) {
    return new (t || WorkflowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: WorkflowService,
    factory: WorkflowService.ɵfac,
    providedIn: 'root'
  });
}

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

/***/ })

}]);
//# sourceMappingURL=src_app_modules_repair_repair_module_ts.js.map