"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_settings_operations_operations_module_ts"],{

/***/ 36252:
/*!*********************************************!*\
  !*** ./src/app/model/chq-settings-model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingTypeCategories": () => (/* binding */ BookingTypeCategories),
/* harmony export */   "BookingTypeColors": () => (/* binding */ BookingTypeColors)
/* harmony export */ });
const BookingTypeCategories = {
  'Assessment': 'Assessment',
  'Repair': 'Repair',
  'MultiSlots': 'MultiSlots',
  'Other': 'Other',
  'BookingIn': 'Booking In',
  'BookingOut': 'Booking Out'
};
const BookingTypeColors = [{
  value: 'Green',
  key: '#03A31B'
}, {
  value: 'Blue',
  key: '#3B82F6'
}, {
  value: 'Red',
  key: '#B53E3E'
}, {
  value: 'Orange',
  key: '#F88318'
}, {
  value: 'Yellow',
  key: '#FEF301'
}, {
  value: 'Violet',
  key: '#4b0082'
}, {
  value: 'Indigo',
  key: '#e5d0ff'
}];

/***/ }),

/***/ 59994:
/*!************************************************************************************!*\
  !*** ./src/app/modules/settings/operations/booking-type/booking-type.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingTypeComponent": () => (/* binding */ BookingTypeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/chq-settings-model */ 36252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














const _c0 = function (a0) {
  return {
    "background": a0
  };
};
function BookingTypeComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r0.formModel.repairColor == null ? null : ctx_r0.formModel.repairColor.selectedOption.name));
  }
}
function BookingTypeComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r1.formModel.bookingInColor == null ? null : ctx_r1.formModel.bookingInColor.selectedOption.name));
  }
}
function BookingTypeComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r2.formModel.bookingOutColor == null ? null : ctx_r2.formModel.bookingOutColor.selectedOption.name));
  }
}
function BookingTypeComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r3.formModel.assessmentColor == null ? null : ctx_r3.formModel.assessmentColor.selectedOption.name));
  }
}
function BookingTypeComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r4.formModel.otherColor == null ? null : ctx_r4.formModel.otherColor.selectedOption.name));
  }
}
function BookingTypeComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r5.formModel.other1Color == null ? null : ctx_r5.formModel.other1Color.selectedOption.name));
  }
}
function BookingTypeComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r6.formModel.other2Color == null ? null : ctx_r6.formModel.other2Color.selectedOption.name));
  }
}
function BookingTypeComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r7.formModel.other3Color == null ? null : ctx_r7.formModel.other3Color.selectedOption.name));
  }
}
function BookingTypeComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r8.formModel.other4Color == null ? null : ctx_r8.formModel.other4Color.selectedOption.name));
  }
}
const _c1 = function (a0) {
  return {
    "color": a0
  };
};
class BookingTypeComponent {
  /**
     * constructor
     * @param router
     */
  constructor(settingsService, commonService, monitorService, cdr, bookingService) {
    this.settingsService = settingsService;
    this.commonService = commonService;
    this.monitorService = monitorService;
    this.cdr = cdr;
    this.bookingService = bookingService;
    this.bookingTypeColorsLookup = [];
    this.showToast = true;
    this.saveButtonModel = {
      label: 'save',
      type: 'disabled',
      onclick: this.submitForm.bind(this)
    };
    this.newBookingTypeForm = bookingTypeData => {
      return {
        assessment: {
          placeHolder: '',
          label: '',
          name: 'assessment',
          idField: 'assessment',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.assessment : false
          }]
        },
        assessmentDuration: {
          placeHolder: 'time',
          name: 'assessmentDuration',
          label: 'time_min',
          value: bookingTypeData ? bookingTypeData.assessmentDuration : null,
          type: 'number',
          maxLength: 3,
          validation: {
            name: 'assessmentDuration',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'Time should have min 1 characters';
              }
              if (error['maxlength']) {
                return 'Time should have max 3 characters';
              }
              if (error['pattern']) {
                return 'Only numeric characters are allowed';
              }
              if (error['min']) {
                return 'Time should be greater than or equal to 1.';
              }
              return '';
            }
          },
          disabled: bookingTypeData && bookingTypeData.assessment ? false : true
        },
        assessmentColor: {
          options: bookingTypeData ? this.getColorOptions('assessmentColor', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'assessmentColor',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('assessmentColor', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.assessment ? false : true
        },
        repair: {
          placeHolder: '',
          label: '',
          name: 'repair',
          idField: 'repairId',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.isRepair : false
          }]
        },
        repairColor: {
          options: bookingTypeData ? this.getColorOptions('repairColor', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'repairColor',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('repairColor', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.isRepair ? false : true
        },
        bookingIn: {
          placeHolder: '',
          label: '',
          name: 'bookingIn',
          idField: 'repairId',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.isbookingIn : false
          }]
        },
        bookingInColor: {
          options: bookingTypeData ? this.getColorOptions('bookingInColor', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'bookingInColor',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('bookingInColor', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.isbookingIn ? false : true
        },
        bookingInDuration: {
          placeHolder: 'time',
          name: 'bookingInDuration',
          label: 'time_min',
          value: bookingTypeData ? bookingTypeData.bookingInDuration : null,
          type: 'number',
          readonly: true,
          maxLength: 3,
          validation: {
            name: 'bookingInDuration',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'Time should have min 1 characters';
              }
              if (error['maxlength']) {
                return 'Time should have max 3 characters';
              }
              if (error['pattern']) {
                return 'Only numeric characters are allowed';
              }
              if (error['min']) {
                return 'Time should be greater than or equal to 1.';
              }
              return '';
            }
          },
          disabled: bookingTypeData && bookingTypeData.isbookingIn ? false : true
        },
        bookingOut: {
          placeHolder: '',
          label: '',
          name: 'bookingOut',
          idField: 'repairId',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.isbookingOut : false
          }]
        },
        bookingOutColor: {
          options: bookingTypeData ? this.getColorOptions('bookingOutColor', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'bookingOutColor',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('bookingOutColor', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.isbookingOut ? false : true
        },
        bookingOutDuration: {
          placeHolder: 'time',
          name: 'bookingOutDuration',
          label: 'time_min',
          value: bookingTypeData ? bookingTypeData.bookingOutDuration : null,
          type: 'number',
          readonly: true,
          maxLength: 3,
          validation: {
            name: 'bookingOutDuration',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'Time should have min 1 characters';
              }
              if (error['maxlength']) {
                return 'Time should have max 3 characters';
              }
              if (error['pattern']) {
                return 'Only numeric characters are allowed';
              }
              if (error['min']) {
                return 'Time should be greater than or equal to 1.';
              }
              return '';
            }
          },
          disabled: bookingTypeData && bookingTypeData.isbookingOut ? false : true
        },
        other: {
          placeHolder: '',
          label: '',
          name: 'other',
          idField: 'other',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.other : false
          }],
          disabled: bookingTypeData && bookingTypeData.other ? false : true
        },
        otherInput: {
          placeHolder: 'enter_booking_type',
          label: '',
          name: 'otherInput',
          idField: 'otherInput',
          value: bookingTypeData ? bookingTypeData.other : '',
          type: 'text',
          maxLength: 50,
          disabled: bookingTypeData && bookingTypeData.other ? false : true,
          validation: {
            name: 'otherInput',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[a-z\d\s]+$/i)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'This field should have min 4 characters';
              }
              if (error['maxlength']) {
                return 'This field should have max 50 characters';
              }
              if (error['pattern']) {
                return 'Only alphanumberic characters are allowed';
              }
              return '';
            }
          }
        },
        otherDuration: {
          placeHolder: 'time',
          name: 'otherDuration',
          label: 'time_min',
          value: bookingTypeData ? bookingTypeData.otherDuration : 0,
          type: 'number',
          maxLength: 3,
          disabled: bookingTypeData && bookingTypeData.other ? false : true,
          validation: {
            name: 'otherDuration',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'Time should have min 1 characters';
              }
              if (error['maxlength']) {
                return 'Time should have max 3 characters';
              }
              if (error['pattern']) {
                return 'Only numeric characters are allowed';
              }
              if (error['min']) {
                return 'Time should be greater than or equal to 1.';
              }
              return '';
            }
          }
        },
        otherColor: {
          options: bookingTypeData ? this.getColorOptions('otherColor', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'otherColor',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('otherColor', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.other ? false : true
        },
        other1: {
          placeHolder: '',
          label: '',
          name: 'other1',
          idField: 'other1',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.other1 : false
          }],
          disabled: bookingTypeData && bookingTypeData.other1 ? false : true
        },
        other1Input: {
          placeHolder: 'enter_booking_type',
          label: '',
          name: 'other1Input',
          idField: 'other1Input',
          value: bookingTypeData ? bookingTypeData.other1 : '',
          type: 'text',
          maxLength: 50,
          disabled: bookingTypeData && bookingTypeData.other1 ? false : true,
          validation: {
            name: 'other1Input',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[a-z\d\s]+$/i)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'This field should have min 4 characters';
              }
              if (error['maxlength']) {
                return 'This field should have max 50 characters';
              }
              if (error['pattern']) {
                return 'Only alphanumberic characters are allowed';
              }
              return '';
            }
          }
        },
        other1Duration: {
          placeHolder: 'time',
          name: 'other1Duration',
          label: 'time_min',
          value: bookingTypeData ? bookingTypeData.other1Duration : 0,
          type: 'number',
          maxLength: 3,
          disabled: bookingTypeData && bookingTypeData.other1 ? false : true,
          validation: {
            name: 'other1Duration',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'Time should have min 1 characters';
              }
              if (error['maxlength']) {
                return 'Time should have max 3 characters';
              }
              if (error['pattern']) {
                return 'Only numeric characters are allowed';
              }
              if (error['min']) {
                return 'Time should be greater than or equal to 1.';
              }
              return '';
            }
          }
        },
        other1Color: {
          options: bookingTypeData ? this.getColorOptions('other1Color', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'other1Color',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('other1Color', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.other1 ? false : true
        },
        other2: {
          placeHolder: '',
          label: '',
          name: 'other2',
          idField: 'other2',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.other2 : false
          }],
          disabled: bookingTypeData && bookingTypeData.other2 ? false : true
        },
        other2Input: {
          placeHolder: 'enter_booking_type',
          label: '',
          name: 'other2Input',
          idField: 'other2Input',
          value: bookingTypeData ? bookingTypeData.other2 : '',
          type: 'text',
          maxLength: 50,
          disabled: bookingTypeData && bookingTypeData.other2 ? false : true,
          validation: {
            name: 'other2Input',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[a-z\d\s]+$/i)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'This field should have min 4 characters';
              }
              if (error['maxlength']) {
                return 'This field should have max 50 characters';
              }
              if (error['pattern']) {
                return 'Only alphanumberic characters are allowed';
              }
              return '';
            }
          }
        },
        other2Duration: {
          placeHolder: 'time',
          name: 'other2Duration',
          label: 'time_min',
          value: bookingTypeData ? bookingTypeData.other2Duration : 0,
          type: 'number',
          maxLength: 3,
          disabled: bookingTypeData && bookingTypeData.other2 ? false : true,
          validation: {
            name: 'other2Duration',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'Time should have min 1 characters';
              }
              if (error['maxlength']) {
                return 'Time should have max 3 characters';
              }
              if (error['pattern']) {
                return 'Only numeric characters are allowed';
              }
              if (error['min']) {
                return 'Time should be greater than or equal to 1.';
              }
              return '';
            }
          }
        },
        other2Color: {
          options: bookingTypeData ? this.getColorOptions('other2Color', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'other2Color',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('other2Color', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.other2 ? false : true
        },
        other3: {
          placeHolder: '',
          label: '',
          name: 'other3',
          idField: 'other3',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.other3 : false
          }]
        },
        other3Input: {
          placeHolder: 'enter_booking_type',
          label: '',
          name: 'other3Input',
          idField: 'other3Input',
          value: bookingTypeData ? bookingTypeData.other3 : '',
          type: 'text',
          maxLength: 50,
          disabled: bookingTypeData && bookingTypeData.other3 ? false : true,
          validation: {
            name: 'other3Input',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[a-z\d\s]+$/i)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'This field should have min 4 characters';
              }
              if (error['maxlength']) {
                return 'This field should have max 50 characters';
              }
              if (error['pattern']) {
                return 'Only alphanumberic characters are allowed';
              }
              return '';
            }
          }
        },
        other3Duration: {
          placeHolder: 'time',
          name: 'other3Duration',
          label: 'time_min',
          value: bookingTypeData ? bookingTypeData.other3Duration : 0,
          type: 'number',
          maxLength: 3,
          disabled: bookingTypeData && bookingTypeData.other3 ? false : true,
          validation: {
            name: 'other3Duration',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'Time should have min 1 characters';
              }
              if (error['maxlength']) {
                return 'Time should have max 3 characters';
              }
              if (error['pattern']) {
                return 'Only numeric characters are allowed';
              }
              if (error['min']) {
                return 'Time should be greater than or equal to 1.';
              }
              return '';
            }
          }
        },
        other3Color: {
          options: bookingTypeData ? this.getColorOptions('other3Color', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'other3Color',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('other3Color', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.other3 ? false : true
        },
        other4: {
          placeHolder: '',
          label: '',
          name: 'other4',
          idField: 'other4',
          value: '',
          type: 'checkbox',
          options: [{
            label: '',
            id: 1,
            checked: bookingTypeData ? bookingTypeData.other4 : false
          }]
        },
        other4Input: {
          placeHolder: 'enter_booking_type',
          label: '',
          name: 'other4Input',
          idField: 'other4Input',
          value: bookingTypeData ? bookingTypeData.other4 : '',
          type: 'text',
          maxLength: 50,
          disabled: bookingTypeData && bookingTypeData.other4 ? false : true,
          validation: {
            name: 'other4Input',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[a-z\d\s]+$/i)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'This field should have min 4 characters';
              }
              if (error['maxlength']) {
                return 'This field should have max 50 characters';
              }
              if (error['pattern']) {
                return 'Only alphanumberic characters are allowed';
              }
              return '';
            }
          }
        },
        other4Duration: {
          placeHolder: 'time',
          name: 'other4Duration',
          label: 'time_min',
          value: bookingTypeData ? bookingTypeData.other4Duration : 0,
          type: 'number',
          maxLength: 3,
          disabled: bookingTypeData && bookingTypeData.other4 ? false : true,
          validation: {
            name: 'other4Duration',
            validationFunction: () => {
              return _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]);
            },
            validationMessage: error => {
              if (error['minlength']) {
                return 'Time should have min 1 characters';
              }
              if (error['maxlength']) {
                return 'Time should have max 3 characters';
              }
              if (error['pattern']) {
                return 'Only numeric characters are allowed';
              }
              if (error['min']) {
                return 'Time should be greater than or equal to 1.';
              }
              return '';
            }
          }
        },
        other4Color: {
          options: bookingTypeData ? this.getColorOptions('other4Color', bookingTypeData) : [],
          placeHolder: 'color_selection',
          label: '',
          name: 'other4Color',
          displayValue: 'description',
          selectedOption: bookingTypeData ? this.getSelectedValue('other4Color', bookingTypeData) : {},
          isMultiSelect: false,
          showSelectOption: true,
          disabled: bookingTypeData && bookingTypeData.other4 ? false : true
        }
      };
    };
    this.newBookingTypeFormModel = () => {
      return {
        assessment: false,
        assessmentDuration: null,
        assessmentId: null,
        assessmentColor: '',
        isRepair: false,
        repairId: null,
        repairColor: '',
        isbookingIn: false,
        bookingInId: null,
        bookingInDuration: null,
        bookingInColor: '',
        isbookingOut: false,
        bookingOutId: null,
        bookingOutDuration: null,
        bookingOutColor: '',
        other: '',
        otherDuration: 0,
        otherId: null,
        otherColor: '',
        other1: '',
        other1Duration: 0,
        other1Id: null,
        other1Color: '',
        other2: '',
        other2Duration: 0,
        other2Id: null,
        other2Color: '',
        other3: '',
        other3Duration: 0,
        other3Id: null,
        other3Color: '',
        other4: '',
        other4Duration: 0,
        other4Id: null,
        other4Color: ''
      };
    };
    this.formModel = this.newBookingTypeForm();
    this.formData = this.newBookingTypeFormModel();
  }
  /**
   * on init
   */
  ngOnInit() {
    this.monitorService.logEvent('ngOnInit', ['BookingTypeComponent', 'addenda-repair']);
    this.commonService.showLoading();
    this.getBookingTypeColors();
    this.commonService.userProfileData.subscribe(res => {
      this.orgID = res?.data?.organizationDetail?.id;
    });
  }
  /**
   * after view init
   */
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.cdr.detectChanges();
  }
  /**
  * check for form validation and set button type
  * @returns {void}
  */
  checkForFormValidation() {
    if (this.isBookingTypeFormValid()) {
      this.saveButtonModel.type = 'primary';
    } else {
      this.saveButtonModel.type = 'disabled';
    }
  }
  /**
  * check for form validation and set button type
  * @returns {void}
  */
  getBookingTypeColors() {
    this.settingsService.getBookingTypeColors().subscribe({
      next: result => {
        this.bookingTypeColorsLookup = result.data;
        this.getSettings();
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err);
      }
    });
  }
  /**
   * get settings
   */
  getSettings() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this.settingsService.getBookingTypes(`?orgIds=${this.orgID}`), this.bookingService.getCalendarSetting()]).subscribe({
      next: ([result, calenderResult]) => {
        this.enableMultipleSlots = calenderResult?.data?.enableMultipleSlots;
        let bookingTypes = null;
        if (result && result.data && result.data.bookingTypes && result.data.bookingTypes.length) {
          bookingTypes = this.convertSettingsData(result.data.bookingTypes);
          this.formModel = this.newBookingTypeForm(bookingTypes);
          this.settingsService.isRepairChange.emit(bookingTypes.isRepair);
        }
        // else {
        //   this.formData.assessment = true
        //   this.formData.assessmentDuration = 30
        //   this.formModel = this.newBookingTypeForm(this.formData);
        // }
        if (result?.data?.bookingTypes) {
          this.settingsService.isJobTasksEnabled.emit(result?.data?.bookingTypes.length > 0 ? true : false);
        }
        this.commonService.hideLoading();
        // Set Booking type based on Multi-slot status
        if (result.data.bookingTypes.findIndex(el => el.category === 'Booking In') !== -1) {
          this.formModel.bookingIn = {
            ...this.formModel.bookingIn,
            options: this.enableMultipleSlots ? [{
              ...this.formModel.bookingIn.options,
              checked: true
            }] : []
          };
          this.formModel.bookingInDuration = {
            ...this.formModel.bookingInDuration,
            disabled: this.enableMultipleSlots ? false : true
          };
          this.formModel.bookingInColor = {
            ...this.formModel.bookingInColor,
            disabled: this.enableMultipleSlots ? false : true
          };
        }
        if (result.data.bookingTypes.findIndex(el => el.category === 'Booking Out') !== -1) {
          this.formModel.bookingOut = {
            ...this.formModel.bookingOut,
            options: this.enableMultipleSlots ? [{
              ...this.formModel.bookingOut.options,
              checked: true
            }] : []
          };
          this.formModel.bookingOutDuration = {
            ...this.formModel.bookingOutDuration,
            disabled: this.enableMultipleSlots ? false : true
          };
          this.formModel.bookingOutColor = {
            ...this.formModel.bookingOutColor,
            disabled: this.enableMultipleSlots ? false : true
          };
        }
        if (result.data.bookingTypes.findIndex(el => el.category === 'Repair') !== -1) {
          this.formModel.repair = {
            ...this.formModel.repair,
            options: !this.enableMultipleSlots ? [{
              ...this.formModel.repair.options,
              checked: this.enableMultipleSlots ? false : true
            }] : []
          };
          this.formModel.repairColor = {
            ...this.formModel.repairColor,
            disabled: !this.enableMultipleSlots ? false : true,
            selectedOption: this.enableMultipleSlots ? {} : {
              ...this.formModel?.repairColor.selectedOption
            }
          };
        }
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err);
      }
    });
  }
  /**
    * convert settings data
    */
  convertSettingsData(data) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      switch (element.category) {
        case 'Assessment':
          this.formData.assessmentDuration = element.duration;
          this.formData.assessment = true;
          this.formData.assessmentId = element.id;
          this.formData.assessmentColor = element.color;
          break;
        case 'Repair':
          this.formData.isRepair = true;
          this.formData.repairId = element.id;
          this.formData.repairColor = element.color;
          break;
        case 'MultiSlots':
          if (element.name === 'Booking In') {
            this.formData.isbookingIn = true;
            this.formData.bookingInId = element.id;
            this.formData.bookingInColor = element.color;
            this.formData.bookingInDuration = element.duration;
          }
          if (element.name === 'Booking Out') {
            this.formData.isbookingOut = true;
            this.formData.bookingOutId = element.id;
            this.formData.bookingOutColor = element.color;
            this.formData.bookingOutDuration = element.duration;
          }
          break;
        default:
          break;
      }
    }
    const otherData = data.filter(x => x.category.toLowerCase() === 'other');
    for (let i = 0; i < otherData.length; i++) {
      const element = otherData[i];
      if (i === 0) {
        this.formData.other = element.name;
        this.formData.otherDuration = element.duration;
        this.formData.otherId = element.id;
        this.formData.otherColor = element.color;
      } else {
        this.formData[`other${i}`] = element.name;
        this.formData[`other${i}Duration`] = element.duration;
        this.formData[`other${i}Id`] = element.id;
        this.formData[`other${i}Color`] = element.color;
      }
    }
    return this.formData;
  }
  /**
   * check for form validation
   * @returns {void}
   */
  isBookingTypeFormValid() {
    let isValid = true;
    const isOther = this.formModel.other.options.some(opt => opt.checked === true || opt.checked != '');
    const isAssessment = this.formModel.assessment.options.some(opt => opt.checked === true);
    const isRepair = this.formModel.repair.options.some(opt => opt.checked === true);
    const isbookingIn = this.formModel.bookingIn.options.some(opt => opt.checked === true);
    const isbookingOut = this.formModel.bookingOut.options.some(opt => opt.checked === true);
    const isOther1 = this.formModel.other1.options.some(opt => opt.checked === true || opt.checked != '');
    const isOther2 = this.formModel.other2.options.some(opt => opt.checked === true || opt.checked != '');
    const isOther3 = this.formModel.other3.options.some(opt => opt.checked === true || opt.checked != '');
    const isOther4 = this.formModel.other4.options.some(opt => opt.checked === true || opt.checked != '');
    if (isAssessment && (this.formModel.assessmentDuration.value == '' || parseInt(this.formModel.assessmentDuration.value.toString()) < 1 || this.formModel.assessmentColor.selectedOption.name === undefined)) {
      isValid = false;
    }
    if (isbookingIn && (this.formModel.bookingInDuration.value == '' || parseInt(this.formModel.bookingInDuration.value.toString()) < 1 || this.formModel.bookingInColor.selectedOption.name === undefined)) {
      isValid = false;
    }
    if (isbookingOut && (this.formModel.bookingOutDuration.value == '' || parseInt(this.formModel.bookingOutDuration.value.toString()) < 1 || this.formModel.bookingOutColor.selectedOption.name === undefined)) {
      isValid = false;
    }
    if (isOther && (this.formModel.otherInput.value == '' || this.formModel.otherDuration.value == 0 || Object.keys(this.formModel.otherColor.selectedOption).length === 0 || this.formModel.otherColor.selectedOption.name === '')) {
      isValid = false;
    }
    if (isOther1 && (this.formModel.other1Input.value == '' || this.formModel.other1Duration.value == 0 || Object.keys(this.formModel.other1Color.selectedOption).length === 0 || this.formModel.other1Color.selectedOption.name === '')) {
      isValid = false;
    }
    if (isOther2 && (this.formModel.other2Input.value == '' || this.formModel.other2Duration.value == 0 || Object.keys(this.formModel.other2Color.selectedOption).length === 0 || this.formModel.other2Color.selectedOption.name === '')) {
      isValid = false;
    }
    if (isOther3 && (this.formModel.other3Input.value == '' || this.formModel.other3Duration.value == 0 || Object.keys(this.formModel.other3Color.selectedOption).length === 0 || this.formModel.other3Color.selectedOption.name === '')) {
      isValid = false;
    }
    if (isOther4 && (this.formModel.other4Input.value == '' || this.formModel.other4Duration.value == 0 || Object.keys(this.formModel.other4Color.selectedOption).length === 0 || this.formModel.other4Color.selectedOption.name === '')) {
      isValid = false;
    }
    if (isRepair && (Object.keys(this.formModel.repairColor.selectedOption).length === 0 || this.formModel.repairColor.selectedOption.name === '')) {
      isValid = false;
    }
    return isValid;
  }
  /**
  Updates the form model and form data based on the output received.assessmentDuration
  @param {IControlValue} output - The output received from the form control.
  @returns {void}
  */
  onFormUpdate(output) {
    if (output) {
      if (output.type === 'number') {
        this.formModel[output.name].value = parseInt(output.value);
      } else {
        this.formModel[output.name].value = output?.value;
      }
      if (output.name == 'repair') {
        if (this.enableMultipleSlots) {
          this.formModel.repair = {
            ...this.formModel.repair,
            options: [{
              ...this.formModel.repair.options,
              checked: false
            }]
          };
          return;
        }
        if (output.value == true) {
          this.formModel.repairColor = {
            ...this.formModel.repairColor,
            disabled: false
          };
        } else {
          this.formModel.repairColor = {
            ...this.formModel.repairColor,
            selectedOption: {},
            disabled: true
          };
        }
      }
      if (output.name == 'assessment') {
        if (output.value == true) {
          this.formModel.assessmentDuration = {
            ...this.formModel.assessmentDuration,
            disabled: false,
            value: 30
          };
          this.formModel.assessmentColor = {
            ...this.formModel.assessmentColor,
            disabled: false
          };
        } else {
          this.formModel.assessmentDuration = {
            ...this.formModel.assessmentDuration,
            disabled: true,
            value: ''
          };
          this.formModel.assessmentColor = {
            ...this.formModel.assessmentColor,
            selectedOption: {},
            disabled: true
          };
        }
      }
      if (output.name === 'bookingIn') {
        if (!this.enableMultipleSlots) {
          this.formModel.bookingIn = {
            ...this.formModel.bookingIn,
            options: [{
              ...this.formModel.bookingIn.options,
              checked: false
            }]
          };
          return;
        }
        if (output.value == true) {
          this.formModel.bookingInDuration = {
            ...this.formModel.bookingInDuration,
            disabled: false,
            value: 30
          };
          this.formModel.bookingInColor = {
            ...this.formModel.bookingInColor,
            disabled: false
          };
        } else {
          this.formModel.bookingInDuration = {
            ...this.formModel.bookingInDuration,
            disabled: true,
            value: ''
          };
          this.formModel.bookingInColor = {
            ...this.formModel.bookingInColor,
            selectedOption: {},
            disabled: true
          };
        }
      }
      if (output.name === 'bookingOut') {
        if (!this.enableMultipleSlots) {
          this.formModel.bookingOut = {
            ...this.formModel.bookingOut,
            options: [{
              ...this.formModel.bookingOut.options,
              checked: false
            }]
          };
          return;
        }
        if (output.value == true) {
          this.formModel.bookingOutDuration = {
            ...this.formModel.bookingOutDuration,
            disabled: false,
            value: 30
          };
          this.formModel.bookingOutColor = {
            ...this.formModel.bookingOutColor,
            disabled: false
          };
        } else {
          this.formModel.bookingOutDuration = {
            ...this.formModel.bookingOutDuration,
            disabled: true,
            value: ''
          };
          this.formModel.bookingOutColor = {
            ...this.formModel.bookingOutColor,
            selectedOption: {},
            disabled: true
          };
        }
      }
      if (output.name == 'other') {
        if (output.name == 'other' && output.value == true) {
          this.formModel.otherInput = {
            ...this.formModel.otherInput,
            disabled: false
          };
          this.formModel.otherDuration = {
            ...this.formModel.otherDuration,
            disabled: false
          };
          this.formModel.otherColor = {
            ...this.formModel.otherColor,
            disabled: false
          };
        } else {
          this.formModel.otherInput = {
            ...this.formModel.otherInput,
            disabled: true,
            value: ''
          };
          this.formModel.otherDuration = {
            ...this.formModel.otherDuration,
            disabled: true,
            value: ''
          };
          this.formModel.otherColor = {
            ...this.formModel.otherColor,
            selectedOption: {},
            disabled: true
          };
        }
      }
      if (output.name == 'other1') {
        if (output.name == 'other1' && output.value == true) {
          this.formModel.other1Input = {
            ...this.formModel.other1Input,
            disabled: false
          };
          this.formModel.other1Duration = {
            ...this.formModel.other1Duration,
            disabled: false
          };
          this.formModel.other1Color = {
            ...this.formModel.other1Color,
            disabled: false
          };
        } else {
          this.formModel.other1Input = {
            ...this.formModel.other1Input,
            disabled: true,
            value: ''
          };
          this.formModel.other1Duration = {
            ...this.formModel.other1Duration,
            disabled: true,
            value: ''
          };
          this.formModel.other1Color = {
            ...this.formModel.other1Color,
            selectedOption: {},
            disabled: true
          };
        }
      }
      if (output.name == 'other2') {
        if (output.name == 'other2' && output.value == true) {
          this.formModel.other2Input = {
            ...this.formModel.other2Input,
            disabled: false
          };
          this.formModel.other2Duration = {
            ...this.formModel.other2Duration,
            disabled: false
          };
          this.formModel.other2Color = {
            ...this.formModel.other2Color,
            disabled: false
          };
        } else {
          this.formModel.other2Input = {
            ...this.formModel.other2Input,
            disabled: true,
            value: ''
          };
          this.formModel.other2Duration = {
            ...this.formModel.other2Duration,
            disabled: true,
            value: ''
          };
          this.formModel.other2Color = {
            ...this.formModel.other2Color,
            selectedOption: {},
            disabled: true
          };
        }
      }
      if (output.name == 'other3') {
        if (output.name == 'other3' && output.value == true) {
          this.formModel.other3Input = {
            ...this.formModel.other3Input,
            disabled: false
          };
          this.formModel.other3Duration = {
            ...this.formModel.other3Duration,
            disabled: false
          };
          this.formModel.other3Color = {
            ...this.formModel.other3Color,
            disabled: false
          };
        } else {
          this.formModel.other3Input = {
            ...this.formModel.other3Input,
            disabled: true,
            value: ''
          };
          this.formModel.other3Duration = {
            ...this.formModel.other3Duration,
            disabled: true,
            value: ''
          };
          this.formModel.other3Color = {
            ...this.formModel.other3Color,
            selectedOption: {},
            disabled: true
          };
        }
      }
      if (output.name == 'other4') {
        if (output.name == 'other4' && output.value == true) {
          this.formModel.other4Input = {
            ...this.formModel.other4Input,
            disabled: false
          };
          this.formModel.other4Duration = {
            ...this.formModel.other4Duration,
            disabled: false
          };
          this.formModel.other4Color = {
            ...this.formModel.other4Color,
            disabled: false
          };
        } else {
          this.formModel.other4Input = {
            ...this.formModel.other4Input,
            disabled: true,
            value: ''
          };
          this.formModel.other4Duration = {
            ...this.formModel.other4Duration,
            disabled: true,
            value: ''
          };
          this.formModel.other4Color = {
            ...this.formModel.other4Color,
            selectedOption: {},
            disabled: true
          };
        }
      }
      this.checkForFormValidation();
      this.refreshColorOptions();
    }
  }
  /**
   * selected any filter in the dropdown
   * @param $event
   */
  selectFilter($event) {
    this.formModel[$event.name].selectedOption = $event.value;
    this.refreshColorOptions();
    this.onFormUpdate($event);
  }
  /**
     Submits the form data to the server.
     @returns {void}
   */
  submitForm() {
    if (!this.isBookingTypeFormValid()) {
      return;
    }
    this.monitorService.logEvent('submitForm', ['BookingTypeComponent', 'addenda-repair']);
    const isOther = this.formModel.other.options.some(opt => opt.checked === true) || this.formModel.otherInput.value != '';
    const isOther1 = this.formModel.other1.options.some(opt => opt.checked === true) || this.formModel.other1Input.value != '';
    const isOther2 = this.formModel.other2.options.some(opt => opt.checked === true) || this.formModel.other2Input.value != '';
    const isOther3 = this.formModel.other3.options.some(opt => opt.checked === true) || this.formModel.other3Input.value != '';
    const isOther4 = this.formModel.other4.options.some(opt => opt.checked === true) || this.formModel.other4Input.value != '';
    const payload = [];
    const data = {
      assessment: this.formModel.assessment.options.some(opt => opt.checked === true),
      assessmentDuration: this.formModel.assessmentDuration.value ? parseInt(this.formModel.assessmentDuration.value.toString()) : 0,
      assessmentColor: this.formModel.assessmentColor.selectedOption.name,
      assessmentId: this.formData.assessmentId,
      isRepair: this.formModel.repair.options.some(opt => opt.checked === true),
      repairColor: this.formModel.repairColor.selectedOption.name,
      repairId: this.formData.repairId,
      bookingIn: this.formModel.bookingIn.options.some(opt => opt.checked === true),
      bookingInDuration: this.formModel.bookingInDuration.value ? parseInt(this.formModel.bookingInDuration.value.toString()) : 0,
      bookingInColor: this.formModel.bookingInColor.selectedOption.name,
      bookingInId: this.formData.bookingInId,
      bookingOut: this.formModel.bookingOut.options.some(opt => opt.checked === true),
      bookingOutDuration: this.formModel.bookingOutDuration.value ? parseInt(this.formModel.bookingOutDuration.value.toString()) : 0,
      bookingOutColor: this.formModel.bookingOutColor.selectedOption.name,
      bookingOutId: this.formData.bookingOutId,
      other: isOther ? this.formModel.otherInput.value.toString() : '',
      otherDuration: isOther ? parseInt(this.formModel.otherDuration.value.toString()) : 0,
      otherColor: this.formModel.otherColor.selectedOption.name,
      otherId: this.formData.otherId,
      other1: isOther1 ? this.formModel.other1Input.value.toString() : '',
      other1Duration: isOther1 ? parseInt(this.formModel.other1Duration.value.toString()) : 0,
      other1Color: this.formModel.other1Color.selectedOption.name,
      other1Id: this.formData.other1Id,
      other2: isOther2 ? this.formModel.other2Input.value.toString() : '',
      other2Duration: isOther2 ? parseInt(this.formModel.other2Duration.value.toString()) : 0,
      other2Color: this.formModel.other2Color.selectedOption.name,
      other2Id: this.formData.other2Id,
      other3: isOther3 ? this.formModel.other3Input.value.toString() : '',
      other3Duration: isOther3 ? parseInt(this.formModel.other3Duration.value.toString()) : 0,
      other3Color: this.formModel.other3Color.selectedOption.name,
      other3Id: this.formData.other3Id,
      other4: isOther4 ? this.formModel.other4Input.value.toString() : '',
      other4Duration: isOther4 ? parseInt(this.formModel.other4Duration.value.toString()) : 0,
      other4Color: this.formModel.other4Color.selectedOption.name,
      other4Id: this.formData.other4Id
    };
    if (data.assessment) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Assessment,
        name: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Assessment,
        duration: data.assessmentDuration,
        color: data.assessmentColor,
        id: data.assessmentId
      });
    }
    if (data.bookingIn) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.MultiSlots,
        name: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.BookingIn,
        duration: data.bookingInDuration,
        color: data.bookingInColor,
        id: data.bookingInId
      });
    }
    if (data.bookingOut) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.MultiSlots,
        name: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.BookingOut,
        duration: data.bookingOutDuration,
        color: data.bookingOutColor,
        id: data.bookingOutId
      });
    }
    if (data.isRepair) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Repair,
        name: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Repair,
        duration: 0,
        color: data.repairColor,
        id: data.repairId
      });
    }
    if (isOther) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Other,
        name: data.other,
        duration: data.otherDuration,
        id: data.otherId,
        color: data.otherColor
      });
    }
    if (isOther1) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Other,
        name: data.other1,
        duration: data.other1Duration,
        color: data.other1Color,
        id: data.other1Id
      });
    }
    if (isOther2) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Other,
        name: data.other2,
        duration: data.other2Duration,
        color: data.other2Color,
        id: data.other2Id
      });
    }
    if (isOther3) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Other,
        name: data.other3,
        duration: data.other3Duration,
        color: data.other3Color,
        id: data.other3Id
      });
    }
    if (isOther4) {
      payload.push({
        category: src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__.BookingTypeCategories.Other,
        name: data.other4,
        duration: data.other4Duration,
        color: data.other4Color,
        id: data.other4Id
      });
    }
    this.commonService.showLoading();
    this.settingsService.saveNewBookingType({
      'domainId': 3100,
      'bookingTypes': payload
    }, `?orgIds=${this.orgID}`).subscribe({
      next: () => {
        if (this.showToast) {
          this.commonService.showInfoToast(5000, 'New changes will be applied only to new bookings.');
        }
        this.settingsService.isRepairChange.emit(data.isRepair);
        this.settingsService.isJobTasksEnabled.emit(data.isRepair);
        this.formModel = this.newBookingTypeForm();
        this.formData = this.newBookingTypeFormModel();
        this.getSettings();
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err);
      }
    });
  }
  /**
   * retrieve selected value
   * @param category
   * @param values
   */
  getSelectedValue(category, values) {
    const selected = this.bookingTypeColorsLookup.find(x => x.name === values[category]);
    return selected ?? {};
  }
  /**
   * get options which and not assigned
   * @param category
   * @param values
   */
  getColorOptions(category, values) {
    const excludedColors = Object.values(values).filter((value, index) => Object.keys(values)[index] !== category && Object.keys(values)[index].includes('Color'));
    return this.bookingTypeColorsLookup.filter(x => !excludedColors.includes(x.name));
  }
  /**
   * refresh all color selection dropdown
   */
  refreshColorOptions() {
    const colorOptions = Object.values(this.formModel).filter((value, index) => Object.keys(this.formModel)[index].includes('Color'));
    const values = Object.values(this.formModel).filter((value, index) => Object.keys(this.formModel)[index].includes('Color')).filter(x => x.selectedOption?.name).map(y => ({
      'name': y.name,
      'color': y.selectedOption?.name
    })).reduce((acc, cur) => ({
      ...acc,
      [cur.name]: cur.color
    }), {});
    colorOptions.forEach(ele => {
      const options = this.getColorOptions(ele.name, values);
      ele['options'] = [...options];
    });
    this.updateForm();
  }
  /**
   * update form model
   * @param ele
   */
  updateForm() {
    this.formModel.assessmentColor = {
      ...this.formModel.assessmentColor
    };
    this.formModel.repairColor = {
      ...this.formModel.repairColor
    };
    this.formModel.otherColor = {
      ...this.formModel.otherColor
    };
    this.formModel.other1Color = {
      ...this.formModel.other1Color
    };
    this.formModel.other2Color = {
      ...this.formModel.other2Color
    };
    this.formModel.other3Color = {
      ...this.formModel.other3Color
    };
    this.formModel.other4Color = {
      ...this.formModel.other4Color
    };
    this.formModel.bookingInColor = {
      ...this.formModel.bookingInColor
    };
    this.formModel.bookingOutColor = {
      ...this.formModel.bookingOutColor
    };
  }
  /**
  * on Destroy
  */
  ngOnDestroy() {
    this.showToast = false;
    // this.submitForm()
  }
  static #_ = this.ɵfac = function BookingTypeComponent_Factory(t) {
    return new (t || BookingTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__.BookingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: BookingTypeComponent,
    selectors: [["app-booking-type"]],
    decls: 119,
    vars: 68,
    consts: [[1, "page-container-booking-type"], [1, "booking-type-wrapper"], [1, "booking-type-form"], [1, "main-div"], [1, "header-label"], [1, "main-container"], [1, "left-div", "fx-1"], [1, "repair-wrapper", "fx-row", "booking-type-container"], [1, "repair-checkbox"], [3, "inputModel", "controlOutput"], [1, "input-field", "text-only"], [1, "color-dropdown"], [3, "dropdownModel", "selected"], ["class", "color", 4, "ngIf"], [1, "vector"], [1, "time-wrapper"], [1, "time-input", 3, "inputModel", "controlOutput"], [1, "assessment-wrapper", "fx-row", "booking-type-container"], [1, "assessment-checkbox"], [1, "vector", "hr-show-sm"], [1, "right-div", "fx-1"], [1, "other-wrapper", "fx-row", "booking-type-container"], [1, "other-checkbox"], [1, "input-field"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "footer-save-button-wrapper", 3, "buttonModel"], [1, "color"], [3, "ngStyle"]],
    template: function BookingTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_11_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11)(17, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_17_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, BookingTypeComponent_div_18_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_22_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 10)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 15)(28, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_28_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 11)(30, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_30_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, BookingTypeComponent_div_31_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 7)(34, "div", 8)(35, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_35_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 10)(37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 15)(41, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_41_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 11)(43, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_43_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, BookingTypeComponent_div_44_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 17)(47, "div", 18)(48, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_48_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 10)(50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 15)(54, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_54_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 11)(56, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_56_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, BookingTypeComponent_div_57_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 20)(60, "div", 21)(61, "div", 22)(62, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_62_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 23)(64, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_64_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 15)(66, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_66_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 11)(68, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_68_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, BookingTypeComponent_div_69_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 21)(72, "div", 22)(73, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_73_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 23)(75, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_75_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 15)(77, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_77_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 11)(79, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_79_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, BookingTypeComponent_div_80_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 21)(82, "div", 22)(83, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_83_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 23)(85, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_85_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 15)(87, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_87_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 11)(89, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_89_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, BookingTypeComponent_div_90_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 21)(93, "div", 22)(94, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_94_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 23)(96, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_96_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "div", 15)(98, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_98_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "div", 11)(100, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_100_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, BookingTypeComponent_div_101_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 21)(104, "div", 22)(105, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_105_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "div", 23)(107, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_107_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div", 15)(109, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_109_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 11)(111, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_111_listener($event) {
          return ctx.selectFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](112, BookingTypeComponent_div_112_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "div", 24)(114, "div", 25)(115, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](116, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](118, "chq-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 52, "booking_type_header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.repair);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](62, _c1, ctx.enableMultipleSlots ? "#8a8a8a8c" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 54, "repair"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.repairColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.repairColor == null ? null : ctx.formModel.repairColor.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.bookingIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](64, _c1, ctx.enableMultipleSlots ? "" : "#8a8a8a8c"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 56, "booking_in"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.bookingInDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.bookingInColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.bookingInColor == null ? null : ctx.formModel.bookingInColor.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.bookingOut);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](66, _c1, ctx.enableMultipleSlots ? "" : "#8a8a8a8c"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 58, "booking_out"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.bookingOutDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.bookingOutColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.bookingOutColor == null ? null : ctx.formModel.bookingOutColor.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.assessment);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](52, 60, "assessment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.assessmentDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.assessmentColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.assessmentColor == null ? null : ctx.formModel.assessmentColor.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.otherInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.otherDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.otherColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.otherColor == null ? null : ctx.formModel.otherColor.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other1Input);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other1Duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.other1Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.other1Color == null ? null : ctx.formModel.other1Color.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other2Input);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other2Duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.other2Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.other2Color == null ? null : ctx.formModel.other2Color.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other3Input);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other3Duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.other3Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.other3Color == null ? null : ctx.formModel.other3Color.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other4Input);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx.formModel.other4Duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropdownModel", ctx.formModel.other4Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formModel.other4Color == null ? null : ctx.formModel.other4Color.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx.saveButtonModel);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_5__.ChqInputComponent, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: [".page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n  padding: calc(5px + 1vw);\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background: var(--xa-tab-default-content);\n  border-radius: 10px;\n  border: 1px solid var(--xa-form-border);\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: start;\n  padding: 30px 40px;\n  gap: 30px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .repair-wrapper[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color-dropdown[_ngcontent-%COMP%] {\n  width: 180px;\n  max-width: 180px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  width: 85px;\n  max-width: 85px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-width: 180px;\n  max-width: 248px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .input-field.text-only[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .repair-checkbox[_ngcontent-%COMP%], .page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .assessment-checkbox[_ngcontent-%COMP%], .page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .other-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  border: 2px solid var(--xa-dark-gray);\n  border-radius: 50%;\n  margin-bottom: 5px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  border: 2px solid var(--xa-white);\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .span-label[_ngcontent-%COMP%] {\n  color: #0B0E15;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  margin: 30px 0px 0px 40px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-container[_ngcontent-%COMP%] {\n  align-items: end;\n  display: flex;\n  gap: 10px;\n}\n\n.footer-save-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0px;\n  gap: 10px;\n  width: 177px;\n  height: 40px;\n  margin-right: 1.5vw;\n  border-radius: 8px;\n}\n\n.left-div[_ngcontent-%COMP%], .right-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.hr-show-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 1317px) {\n  .hr-show-sm[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9vcGVyYXRpb25zL2Jvb2tpbmctdHlwZS9ib29raW5nLXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3QkFBQTtBQUFKO0FBR007RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFEUjtBQUdRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRFY7QUFJUTtFQUNFLGlCQUFBO0FBRlY7QUFLUTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QUFIVjtBQU1RO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSlY7QUFPUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBTFY7QUFRUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTlY7QUFRVTtFQUNFLG1CQUFBO0FBTlo7QUFTUTtFQUNFLGtCQUFBO0FBUFY7QUFVUTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVJWO0FBU1U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFQWjtBQVdRO0VBQ0UsY0FBQTtBQVRWO0FBWVE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFWVjtBQWdCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFkSjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBaEJGOztBQW1CQTtFQUNFLGFBQUE7QUFoQkY7O0FBbUJBO0VBQ0U7SUFDRSx5QkFBQTtFQWhCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyLWJvb2tpbmctdHlwZSB7XHJcbiAgLmJvb2tpbmctdHlwZS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IGNhbGMoNXB4ICsgMXZ3KTtcclxuXHJcbiAgICAuYm9va2luZy10eXBlLWZvcm0ge1xyXG4gICAgICAubWFpbi1kaXYge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXRhYi1kZWZhdWx0LWNvbnRlbnQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZm9ybS1ib3JkZXIpO1xyXG5cclxuICAgICAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgICAgICAgICBnYXA6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVwYWlyLXdyYXBwZXIge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmVjdG9yIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sb3ItZHJvcGRvd24ge1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aW1lLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogMjQ4cHg7XHJcblxyXG4gICAgICAgICAgJi50ZXh0LW9ubHkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXBhaXItY2hlY2tib3gsIC5hc3Nlc3NtZW50LWNoZWNrYm94LCAub3RoZXItY2hlY2tib3gge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbG9yIHtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveCAuc3Bhbi1sYWJlbCB7XHJcbiAgICAgICAgICBjb2xvcjogIzBCMEUxNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDBweCAwcHggNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm9va2luZy10eXBlLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uZm9vdGVyLXNhdmUtYnV0dG9uLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE4cHggMHB4O1xyXG4gIGdhcDogMTBweDtcclxuICB3aWR0aDogMTc3cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMS41dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubGVmdC1kaXYsIC5yaWdodC1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDMwcHg7XHJcbn1cclxuXHJcbi5oci1zaG93LXNtIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMxN3B4KSB7XHJcbiAgLmhyLXNob3ctc20ge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 90377:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/operations/calendar-settings/calendar-settings.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarSettingsComponent": () => (/* binding */ CalendarSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_xa_forms_xa_checkbox_xa_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widgets/xa-forms/xa-checkbox/xa-checkbox.component */ 78302);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











class CalendarSettingsComponent {
  /**
     * constructor
     * @param router
     */
  constructor(commonService, monitorService, bookingService, settingsService) {
    this.commonService = commonService;
    this.monitorService = monitorService;
    this.bookingService = bookingService;
    this.settingsService = settingsService;
    this.calendarSettingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      MultiSlot: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
      Amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false)
    });
    this.hasRepair = false;
    this.saveButtonModel = {
      label: 'save',
      type: 'primary',
      onclick: this.submitForm.bind(this)
    };
  }
  /**
   * on init
   */
  ngOnInit() {
    this.monitorService.logEvent('ngOnInit', ['BookingTypeComponent', 'addenda-repair']);
    this.commonService.showLoading();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)({
      calendarSettings: this.bookingService.getCalendarSetting()
      // bookingTypes: this.settingsService.getSettings()
    }).subscribe(result => {
      this.commonService.hideLoading();
      // if(result.bookingTypes?.data?.bookingTypes) {
      //   const repairType = result.bookingTypes?.data?.bookingTypes.find(x => x.category?.toLowerCase() === 'repair');
      //   if(repairType) {
      //     this.settingsService.isRepairChange.emit(true);
      //     this.hasRepair = true;
      //     this.saveButtonModel.type = 'primary';
      //   } else {
      //     this.hasRepair = false;
      //     this.saveButtonModel.type = 'disabled';
      //   }
      // }
      // if (result.bookingTypes?.data?.repairType && result.bookingTypes?.data?.repairType.repairTypes) {
      //   this.settingsService.isJobTasksEnabled.emit(result.bookingTypes?.data?.repairType.repairTypes.length > 0 ? true : false)
      // }
      if (result.calendarSettings?.data) {
        this.calendarSettingForm.patchValue({
          'MultiSlot': result.calendarSettings.data.enableMultipleSlots,
          'Amount': result.calendarSettings.data.displayEstimateAndLabourAmounts
        });
        // if(!this.hasRepair) {
        //   this.calendarSettingForm.get('MultiSlot').setValue(false);
        //   this.calendarSettingForm.get('MultiSlot').valueChanges.subscribe((value) => {
        //     if(!this.hasRepair && value) {
        //       this.commonService.showToast(0, 'msg_repair_needed');
        //       this.calendarSettingForm.get('MultiSlot').setValue(false);
        //     }
        //   });
        // }
      }
    });
  }
  /**
     Submits the form data to the server.
     @returns {void}
   */
  submitForm() {
    const data = {
      'enableMultipleSlots': this.calendarSettingForm.value.MultiSlot,
      'displayEstimateAndLabourAmounts': this.calendarSettingForm.value.Amount,
      'domainId': 3100
    };
    this.commonService.showLoading();
    this.bookingService.updateCalendarSetting(data).subscribe({
      next: () => {
        this.commonService.showInfoToast(5000, 'Calendar setting updated.');
        this.commonService.hideLoading();
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
  static #_ = this.ɵfac = function CalendarSettingsComponent_Factory(t) {
    return new (t || CalendarSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_1__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CalendarSettingsComponent,
    selectors: [["app-calendar-settings"]],
    decls: 23,
    vars: 11,
    consts: [[1, "page-container-calendar-setting"], [1, "calendar-setting-wrapper"], [1, "calendar-setting-form", 3, "formGroup"], [1, "main-div"], [1, "header-label"], [1, "sub-header-label"], [1, "main-container"], [1, "left-div", "fx-1"], [1, "repair-wrapper", "fx-row", "calendar-setting-container"], [1, "repair-checkbox"], ["formControlName", "MultiSlot"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "footer-save-button-wrapper", 3, "buttonModel"]],
    template: function CalendarSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "xa-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "chq-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.calendarSettingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, "calendar_setting_multislot_header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 7, "calendar_setting_multislot_subheader"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 9, "multiple_slots"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx.saveButtonModel);
      }
    },
    dependencies: [_widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__.ChqButtonComponent, _widgets_xa_forms_xa_checkbox_xa_checkbox_component__WEBPACK_IMPORTED_MODULE_5__.XaCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%] {\n  padding: calc(5px + 1vw);\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background: var(--xa-tab-default-content);\n  border-radius: 10px;\n  border: 1px solid var(--xa-form-border);\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: start;\n  padding: 30px 40px;\n  gap: 30px;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .repair-wrapper[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color-dropdown[_ngcontent-%COMP%] {\n  width: 180px;\n  max-width: 180px;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  width: 85px;\n  max-width: 85px;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-width: 180px;\n  max-width: 248px;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .input-field.text-only[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .repair-checkbox[_ngcontent-%COMP%], .page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .assessment-checkbox[_ngcontent-%COMP%], .page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .other-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  border: 2px solid var(--xa-dark-gray);\n  border-radius: 50%;\n  margin-bottom: 5px;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  border: 2px solid var(--xa-white);\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .span-label[_ngcontent-%COMP%] {\n  color: #0B0E15;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  margin: 30px 0px 0px 40px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-wrapper[_ngcontent-%COMP%]   .calendar-setting-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .sub-header-label[_ngcontent-%COMP%] {\n  margin: 5px 0px 0px 40px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  color: var(--xa-gray);\n}\n.page-container-calendar-setting[_ngcontent-%COMP%]   .calendar-setting-container[_ngcontent-%COMP%] {\n  align-items: end;\n  display: flex;\n  gap: 10px;\n}\n\n.footer-save-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0px;\n  gap: 10px;\n  width: 177px;\n  height: 40px;\n  margin-right: 1.5vw;\n  border-radius: 8px;\n}\n\n.left-div[_ngcontent-%COMP%], .right-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.hr-show-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 1317px) {\n  .hr-show-sm[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9vcGVyYXRpb25zL2NhbGVuZGFyLXNldHRpbmdzL2NhbGVuZGFyLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0JBQUE7QUFBSjtBQUdNO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FBRFI7QUFHUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQURWO0FBSVE7RUFDRSxpQkFBQTtBQUZWO0FBS1E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBSFY7QUFNUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUpWO0FBT1E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUxWO0FBUVE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU5WO0FBUVU7RUFDRSxtQkFBQTtBQU5aO0FBU1E7RUFDRSxrQkFBQTtBQVBWO0FBVVE7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFSVjtBQVNVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBUFo7QUFXUTtFQUNFLGNBQUE7QUFUVjtBQVlRO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBVlY7QUFhUTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBWFY7QUFpQkU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBZko7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWpCRjs7QUFvQkE7RUFDRSxhQUFBO0FBakJGOztBQW9CQTtFQUNFO0lBQ0UseUJBQUE7RUFqQkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lci1jYWxlbmRhci1zZXR0aW5nIHtcclxuICAuY2FsZW5kYXItc2V0dGluZy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IGNhbGMoNXB4ICsgMXZ3KTtcclxuXHJcbiAgICAuY2FsZW5kYXItc2V0dGluZy1mb3JtIHtcclxuICAgICAgLm1haW4tZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS10YWItZGVmYXVsdC1jb250ZW50KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWZvcm0tYm9yZGVyKTtcclxuXHJcbiAgICAgICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweCA0MHB4O1xyXG4gICAgICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlcGFpci13cmFwcGVyIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZlY3RvciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNiwgMzQsIDUxLCAwLjIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbG9yLWRyb3Bkb3duIHtcclxuICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGltZS13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDI0OHB4O1xyXG5cclxuICAgICAgICAgICYudGV4dC1vbmx5IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVwYWlyLWNoZWNrYm94LCAuYXNzZXNzbWVudC1jaGVja2JveCwgLm90aGVyLWNoZWNrYm94IHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2xvciB7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3ggLnNwYW4tbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICMwQjBFMTU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwcHggMHB4IDQwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1Yi1oZWFkZXItbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDBweCA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ncmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYWxlbmRhci1zZXR0aW5nLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uZm9vdGVyLXNhdmUtYnV0dG9uLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE4cHggMHB4O1xyXG4gIGdhcDogMTBweDtcclxuICB3aWR0aDogMTc3cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMS41dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubGVmdC1kaXYsIC5yaWdodC1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDMwcHg7XHJcbn1cclxuXHJcbi5oci1zaG93LXNtIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMxN3B4KSB7XHJcbiAgLmhyLXNob3ctc20ge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 89959:
/*!********************************************************************************!*\
  !*** ./src/app/modules/settings/operations/jobs-tasks/jobs-tasks.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsTasksComponent": () => (/* binding */ JobsTasksComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var src_app_dialogs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/add-job-dialog/add-job-dialog.component */ 51656);
/* harmony import */ var src_app_dialogs_add_task_dialog_add_task_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/add-task-dialog/add-task-dialog.component */ 54447);
/* harmony import */ var src_app_config_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/constants/app.constants */ 91924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_job_settings_job_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/job-settings/job-settings.service */ 60015);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-toggle/chq-toggle.component */ 65513);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
















function JobsTasksComponent_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "table", 20)(2, "tr", 21)(3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r4.name);
  }
}
const _c0 = function (a0) {
  return {
    "disable": a0
  };
};
function JobsTasksComponent_div_5_div_11_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30)(1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "chq-toggle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ToggleChange", function JobsTasksComponent_div_5_div_11_div_10_div_13_Template_chq_toggle_ToggleChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.onToggleChange(item_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 5, "damage_detection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", item_r5.options.isAIAnalysisEnabled)("name", "damageDetection")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](7, _c0, !(item_r5.options && item_r5.options.uploadImagesOptions !== null && item_r5.options.uploadImagesOptions.minNumOfPhotos >= 1 && ctx_r8.isBodyOrPaint)))("disabled", !(item_r5.options && item_r5.options.uploadImagesOptions !== null && item_r5.options.uploadImagesOptions.minNumOfPhotos >= 1 && ctx_r8.isBodyOrPaint));
  }
}
const _c1 = function (a0) {
  return {
    "border-color": a0
  };
};
function JobsTasksComponent_div_5_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28)(1, "div")(2, "div", 29)(3, "div", 30)(4, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "chq-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ToggleChange", function JobsTasksComponent_div_5_div_11_div_10_Template_chq_toggle_ToggleChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.onToggleChange(item_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 30)(9, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "chq-toggle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ToggleChange", function JobsTasksComponent_div_5_div_11_div_10_Template_chq_toggle_ToggleChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.onToggleChange(item_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, JobsTasksComponent_div_5_div_11_div_10_div_13_Template, 5, 9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 35)(15, "chq-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_11_div_10_Template_chq_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.openJobPopup(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "chq-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_11_div_10_Template_chq_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.deleteJob(item_r5.jobGuid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c1, item_r5.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 12, "photos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", item_r5.options.isAIAnalysisEnabled)("checked", item_r5.options.isUploadPhotosRequired)("name", "photos")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c0, item_r5.options.isAIAnalysisEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 14, "timer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", item_r5.options.isTimerEnabled)("name", "timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.isBodyOrPaint);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r6.editButtonModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r6.deleteButtonModel);
  }
}
function JobsTasksComponent_div_5_div_11_div_12_ng_container_1_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_11_div_12_ng_container_1_tr_5_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const data2_r29 = restoredCtx.$implicit;
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.handleCellClicked(item_r5, data2_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data2_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data2_r29.name);
  }
}
function JobsTasksComponent_div_5_div_11_div_12_ng_container_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 43)(1, "td", 44)(2, "div", 45)(3, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_11_div_12_ng_container_1_tr_6_Template_mat_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const data_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r33.getTaskLengthPerRepair(item_r5, data_r23.name) >= ctx_r33.MAX_TASKS_PER_REPAIR ? "" : ctx_r33.openAddTaskPopup(item_r5.jobGuid, false, item_r5, data_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c0, ctx_r28.getTaskLengthPerRepair(item_r5, data_r23.name) >= ctx_r28.MAX_TASKS_PER_REPAIR))("svgIcon", "plus-active");
  }
}
function JobsTasksComponent_div_5_div_11_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "table", 20)(2, "tr", 21)(3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, JobsTasksComponent_div_5_div_11_div_12_ng_container_1_tr_5_Template, 3, 1, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, JobsTasksComponent_div_5_div_11_div_12_ng_container_1_tr_6_Template, 4, 4, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", data_r23.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", data_r23.tasks.length !== 0)("ngIfElse", _r25);
  }
}
function JobsTasksComponent_div_5_div_11_div_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 20)(1, "tr", 47)(2, "td", 48)(3, "div", 49)(4, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_11_div_12_ng_template_2_Template_mat_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42);
      const data_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.openAddTaskPopup(item_r5.jobGuid, false, item_r5, data_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "plus-active");
  }
}
function JobsTasksComponent_div_5_div_11_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, JobsTasksComponent_div_5_div_11_div_12_ng_container_1_Template, 7, 4, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, JobsTasksComponent_div_5_div_11_div_12_ng_template_2_Template, 5, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r5.repairServiceTypeTasks && item_r5.repairServiceTypeTasks.length)("ngIfElse", _r25);
  }
}
const _c2 = function (a0) {
  return {
    "background": a0
  };
};
const _c3 = function (a0) {
  return {
    "active": a0
  };
};
function JobsTasksComponent_div_5_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23)(1, "div", 11)(2, "div", 12)(3, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_11_Template_mat_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r45.leftClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 14)(5, "div", 22)(6, "div", 24)(7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_11_Template_mat_icon_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.expand(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, JobsTasksComponent_div_5_div_11_div_10_Template, 17, 20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, JobsTasksComponent_div_5_div_11_div_12_Template, 4, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 17)(14, "div", 18)(15, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_11_Template_mat_icon_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.rightClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c0, ctx_r3.startIndex === 0))("svgIcon", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](12, _c2, item_r5.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "dropdown")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](14, _c3, item_r5.expandControl));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r5.expandControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.filterRepairtypes(item_r5.repairServiceTypeTasks));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c0, ctx_r3.lastIndex === ctx_r3.repairTypes.length - 1))("svgIcon", "dropdown");
  }
}
function JobsTasksComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_Template_mat_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r49.leftClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, JobsTasksComponent_div_5_div_7_Template, 5, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 17)(9, "div", 18)(10, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_Template_mat_icon_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r51.rightClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, JobsTasksComponent_div_5_div_11_Template, 16, 18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c0, ctx_r0.startIndex === 0))("svgIcon", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.filterRepairtypes(ctx_r0.jobsData[0].repairServiceTypeTasks));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](8, _c0, ctx_r0.lastIndex === ctx_r0.repairTypes.length - 1))("svgIcon", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.jobsData);
  }
}
function JobsTasksComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 53);
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
class JobsTasksComponent {
  /**
  Constructor for the class.
  */
  constructor(commonService, dialog, monitorService, jobSettingsService, settingsService) {
    this.commonService = commonService;
    this.dialog = dialog;
    this.monitorService = monitorService;
    this.jobSettingsService = jobSettingsService;
    this.settingsService = settingsService;
    this.MAX_TASKS_PER_REPAIR = src_app_config_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__.MAX_TASKS_PER_REPAIR;
    this.addJobButtonModel = {
      label: 'Add Job',
      type: 'primary',
      icon: 'plus-filled'
    };
    this.addTaskButtonModel = {
      label: 'Add Task',
      type: 'primary',
      icon: 'plus-filled'
    };
    this.saveButtonModel = {
      label: 'save',
      type: 'primary'
    };
    this.deleteButtonModel = {
      label: '',
      type: 'outline-danger',
      icon: 'delete'
    };
    this.editButtonModel = {
      label: '',
      type: 'outline',
      icon: 'edit'
    };
    /**
      Constructor for the component.
      @param {CommonService} commonService - The CommonService instance.
      @param {RepairEstimateService} repairEstimateService - The RepairEstimateService instance.
      @param {ActivatedRoute} route - The ActivatedRoute instance.
      @param {MatDialog} dialog - The MatDialog instance.
      @param {BookingService} bookingService - The BookingService instance.
      @param {RepairEstimateOperationService} repairEstimateOperationService - The RepairEstimateOperationService instance.
      @param {MonitorService} monitorService - The MonitorService instance.
      @param {Router} router - The Router instance.
    */
    this.jobsData = [];
    this.mediator = [];
    this.repairTypes = [];
    this.startIndex = 0;
    this.lastIndex = 3;
    this.enabledRepairTypes = [];
    this.jobsLength = 0;
    this.isBodyOrPaint = false;
    this.CallingAPI = false;
    if (this.commonService.accessRight.closed) {
      this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(true);
    }
  }
  /**
   * on init
   */
  ngOnInit() {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.monitorService.logEvent('ngOnInit', ['JobsTasksComponent', 'addenda-repair']);
      _this.commonService.showLoading();
      _this.getJobs();
    })();
  }
  /**
  * get repair Types
  */
  getJobs() {
    this.CallingAPI = true;
    this.jobSettingsService.getJobs().subscribe({
      next: result => {
        if (result) {
          this.CallingAPI = false;
          this.jobsLength = result.data.length;
          if (this.jobsLength >= 20) {
            this.addJobButtonModel.type = 'disabled';
          } else {
            this.addJobButtonModel.type = 'primary';
          }
          result.data = result.data.map(x => {
            x.expandControl = false;
            return x;
          });
          for (let i = 0; i < result.data.length; i++) {
            const taskMaxLength = Math.max(...result.data[i].repairServiceTypeTasks.map(x => x.tasks.length));
            this.repairTypes = [...this.repairTypes, ...result.data[i].repairServiceTypeTasks.filter(x => !this.repairTypes.some(r => r.id === x.id)).map(x => {
              return {
                'id': x.id,
                'name': x.name,
                'description': x.description,
                'tasks': []
              };
            })];
            for (let j = 0; j < result.data[i].repairServiceTypeTasks.length; j++) {
              const currentTaskLength = result.data[i].repairServiceTypeTasks[j].tasks.length;
              if (currentTaskLength < taskMaxLength) {
                const tempObj = {
                  'id': result.data[i].repairServiceTypeTasks[j].tasks.id,
                  'jobTaskGuid': result.data[i].repairServiceTypeTasks[j].tasks.jobTaskGuid,
                  'name': '',
                  'isMandatory': result.data[i].repairServiceTypeTasks[j].tasks.isMandatory,
                  'importFromGTMotive': result.data[i].repairServiceTypeTasks[j].tasks.importFromGTMotive
                };
                for (let index = 0; index < taskMaxLength - currentTaskLength; index++) {
                  result.data[i].repairServiceTypeTasks[j].tasks.push(tempObj);
                }
              }
            }
          }
          if (this.repairTypes.length < 4) {
            this.lastIndex = this.repairTypes.length - 1;
          } else {
            this.lastIndex = 3;
          }
          if (this.jobsLength == 0) {
            this.settingsService.getSettings().subscribe({
              next: result => {
                if (result && result.data && result.data.repairType && result.data.repairType.repairTypes) {
                  this.isBodyOrPaint = result.data.repairType.repairTypes.includes(1) || result.data.repairType.repairTypes.includes(2);
                }
                this.commonService.hideLoading();
              },
              error: err => {
                this.commonService.hideLoading();
                this.monitorService.logException(err);
              }
            });
          } else {
            this.isBodyOrPaint = this.repairTypes.some(x => x.name?.toLowerCase() == 'body' || x.name?.toLowerCase() == 'paint');
          }
          this.enabledRepairTypes = this.repairTypes.map(x => x.id);
          this.jobsData = result.data;
          this.mediator = this.repairTypes.length < 4 ? this.repairTypes : [this.repairTypes[0], this.repairTypes[1], this.repairTypes[2], this.repairTypes[3]];
          this.settingsService.isRepairChange.emit(true);
          this.commonService.hideLoading();
          this.startIndex = 0;
        }
      },
      error: err => {
        this.CallingAPI = false;
        this.commonService.hideLoading();
        this.monitorService.logException(err);
      }
    });
  }
  /**
  * get repair Types
  */
  filterRepairtypes(repairServiceTypeTasks) {
    return repairServiceTypeTasks?.filter(r => this.mediator.some(m => m.id === r.id));
  }
  /**
  * get repair Types
  */
  getTasksLength(jobData) {
    return jobData?.repairServiceTypeTasks.map(r => r.tasks.filter(t => t.name !== '').length).reduce((acc, ele) => acc + ele, 0) || 0;
  }
  /**
  * getTasksPerRepair
  */
  getTasksPerRepair(jobData) {
    const jobTaskGuid = jobData?.repairServiceTypeTasks.map(r => {
      return {
        id: r.id,
        name: r.name,
        tasks: r.tasks.map(task => task.jobTaskGuid).filter((taskguid, index, array) => taskguid != undefined && array.indexOf(taskguid) === index)
      };
    });
    return jobTaskGuid;
  }
  /**
  * getTasksPerRepair
  */
  getTaskLengthPerRepair(jobData, repairName) {
    let jobTaskGuid = jobData?.repairServiceTypeTasks.filter(r => r.name === repairName)[0];
    jobTaskGuid = jobTaskGuid.tasks.map(task => task.jobTaskGuid).filter((taskguid, index, array) => taskguid != undefined && array.indexOf(taskguid) === index);
    return jobTaskGuid.length;
  }
  /**
  * cellClickedCallback
  */
  handleCellClicked(jobData, taskData) {
    if (taskData.id === undefined) return;
    const checkedRepairTypes = jobData?.repairServiceTypeTasks?.flatMap(r => r.tasks.filter(t => t.id === taskData.id).length ? r : null)?.filter(r => r !== null)?.map(r => r.id) || [];
    const data = {
      jobGuid: jobData?.jobGuid,
      createdByUserName: jobData?.createdByUserName,
      taskData,
      checkedRepairTypes,
      enabledRepairTypes: this.enabledRepairTypes,
      tasksLength: this.getTasksLength(jobData),
      tasksPerRepair: this.getTasksPerRepair(jobData)
    };
    this.openAddTaskPopup(data, true);
  }
  /**
    Opens a dialog box for the repair estimate operation component with the specified data and panel class.
    @returns {void}
  */
  openJobPopup(data) {
    if (!data && this.jobsLength >= 20) return;
    const dialogRef = this.dialog.open(src_app_dialogs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_1__.AddJobDialogComponent, {
      data: {
        jobsData: data ? data : null,
        isBodyOrPaint: this.isBodyOrPaint
      },
      width: '564px',
      maxWidth: '564px',
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
        if (response) {
          this.getJobs();
        }
      }
    });
  }
  /**
   Opens a dialog box for the repair estimate operation component with the specified data and panel class.
   @returns {void}
  */
  openAddTaskPopup(data, isEdit = false, item = null, repairType) {
    //if (item && this.getTasksLength(item) >= 20) return
    const dialogRef = this.dialog.open(src_app_dialogs_add_task_dialog_add_task_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AddTaskDialogComponent, {
      data: isEdit ? data : {
        jobGuid: data,
        enabledRepairTypes: this.enabledRepairTypes,
        tasksLength: this.getTasksLength(item),
        tasksPerRepair: this.getTasksPerRepair(item),
        checkedRepairTypes: [repairType.id]
      },
      width: '480px',
      maxWidth: '480px',
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
        if (response) {
          this.commonService.showLoading();
          this.getJobs();
        }
      }
    });
  }
  /**
  * on toggle change
  */
  onToggleChange(data, e) {
    let shouldCallUpdateJob = true;
    if (data != null && data.jobGuid) {
      const jobsData = {
        name: data.name,
        color: data.color,
        options: {
          isUploadPhotosRequired: data?.options?.isUploadPhotosRequired,
          isAIAnalysisEnabled: data?.options?.isAIAnalysisEnabled,
          isTimerEnabled: data?.options?.isTimerEnabled,
          uploadImagesOptions: data?.options?.uploadImagesOptions
        }
      };
      if (e && e.name == 'photos') {
        if (e.checked) {
          shouldCallUpdateJob = false;
          if (data?.options) {
            data.options.isUploadPhotosRequired = true;
          }
          this.openJobPopup(data);
          this.getJobs();
        } else {
          jobsData.options.isUploadPhotosRequired = false;
          jobsData.options.uploadImagesOptions = null;
        }
      } else if (e && e.name == 'timer') {
        if (e.checked) {
          jobsData.options.isTimerEnabled = true;
        } else {
          jobsData.options.isTimerEnabled = false;
        }
      } else if (e && e.name == 'damageDetection') {
        if (e.checked) {
          jobsData.options.isAIAnalysisEnabled = true;
        } else {
          jobsData.options.isAIAnalysisEnabled = false;
        }
      }
      if (shouldCallUpdateJob) {
        this.commonService.showLoading();
        this.jobSettingsService.editJob(jobsData, data.jobGuid).subscribe({
          next: () => {
            this.getJobs();
            this.commonService.hideLoading();
          },
          error: err => {
            this.commonService.hideLoading();
            this.monitorService.logException(err);
          }
        });
      }
    }
  }
  /**
   * expand user -detail
  */
  expand(item) {
    item.expandControl = !item.expandControl;
  }
  /**
   * leftClick
  */
  leftClick() {
    if (this.startIndex === 0) {
      return;
    } else if (this.lastIndex === 0) {
      this.lastIndex = this.repairTypes.length - 1;
      this.startIndex--;
      this.mediator.unshift(this.repairTypes[this.startIndex]);
      this.mediator.pop();
    } else {
      this.startIndex--;
      this.lastIndex--;
      this.mediator.unshift(this.repairTypes[this.startIndex]);
      this.mediator.pop();
    }
    return;
  }
  /**
   * rightClick
  */
  rightClick() {
    if (this.lastIndex === this.repairTypes.length - 1) {
      return;
    } else if (this.startIndex === this.repairTypes.length - 1) {
      this.startIndex = 0;
      this.lastIndex++;
      this.mediator.shift();
      this.mediator.push(this.repairTypes[this.lastIndex]);
    } else {
      this.startIndex++;
      this.lastIndex++;
      this.mediator.shift();
      this.mediator.push(this.repairTypes[this.lastIndex]);
    }
    return;
  }
  /**
  * on Delete Job
  */
  deleteJob(jobGuid) {
    const dialogRef = this.commonService.openConfirmationOkDialog('Confirm Deleting', 'Are you sure you also want to delete all the tasks included in the job?');
    this.monitorService.logEvent('deleteJob', ['JobsTasksComponent', 'addenda-repair']);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.commonService.showLoading();
        this.jobSettingsService.deleteJobsById(jobGuid).subscribe({
          next: () => {
            this.getJobs();
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function JobsTasksComponent_Factory(t) {
    return new (t || JobsTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_job_settings_job_settings_service__WEBPACK_IMPORTED_MODULE_6__.JobSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: JobsTasksComponent,
    selectors: [["app-jobs-tasks"]],
    decls: 11,
    vars: 6,
    consts: [[1, "page-container-jobs-tasks", "fx-col", "h-100"], [1, "add-btn", "d-flex", "fx-0"], [3, "buttonModel", "click"], ["class", "list-container justify-space-between fx-1 overflow-auto", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "list-container", "justify-space-between", "fx-1", "overflow-auto"], [1, "job", "fx-row", "job-header"], [1, "left-container"], [1, "nav-left-toggle"], [3, "ngClass", "svgIcon", "click"], [1, "controls"], [1, "job-content", "fx-1"], [4, "ngFor", "ngForOf"], [1, "right-container"], [1, "nav-right-toggle"], ["class", "job fx-row", 4, "ngFor", "ngForOf"], [1, "table-item"], [1, "table-header"], [1, "frame"], [1, "job", "fx-row"], [1, "collapse-frame", 3, "ngStyle"], [1, "label"], ["size", "sm", "color", "white", 3, "svgIcon", "ngClass", "click"], ["class", "expanded-block", 3, "ngStyle", 4, "ngIf"], [1, "expanded-block", 3, "ngStyle"], [1, "toggle-frame"], [1, "toggle"], [1, "label-toggle"], [3, "disabled", "checked", "name", "ngClass", "ToggleChange"], [3, "checked", "name", "ToggleChange"], ["class", "toggle", 4, "ngIf"], [1, "btn-group"], [1, "editbtn", 3, "buttonModel", "click"], [1, "dltbtn", 3, "buttonModel", "click"], [3, "checked", "name", "ngClass", "disabled", "ToggleChange"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["class", "plus-btn-sticky", 4, "ngIf", "ngIfElse"], [3, "click"], [1, "plus-btn-sticky"], [1, "plus-btn-border"], [1, "plus-buttons-block"], [1, "vector", 3, "ngClass", "svgIcon", "click"], [1, "plus-btn-block"], [1, "plus-btn-border", "remove-top-border"], [1, "add-task-buttons-block"], [3, "svgIcon", "click"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]],
    template: function JobsTasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "chq-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobsTasksComponent_Template_chq_button_click_2_listener() {
          return ctx.openJobPopup(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, JobsTasksComponent_div_5_Template, 12, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, JobsTasksComponent_div_6_Template, 9, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx.addJobButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, "add_job"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.jobsLength >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.jobsLength === 0 && !ctx.CallingAPI);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__.ChqButtonComponent, _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_9__.ChqToggleComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
    styles: [".page-container-jobs-tasks[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  margin: calc(5px + 1vw);\n  margin-bottom: 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]:not(:first-child)   .left-container[_ngcontent-%COMP%]   .nav-left-toggle[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]:not(:first-child)   .right-container[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]:not(:first-child)   .table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%] {\n  background: var(--xa-white);\n  border: 1px solid var(--xa-form-border);\n  border-radius: 10px;\n  margin: calc(5px + 1vw);\n  margin-top: 0;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .nav-left-toggle[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 62px;\n  background: var(--xa-lighter-gray);\n  border-radius: 10px 0px 0px 10px;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  justify-content: center;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .nav-left-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  height: 207px;\n  z-index: 1;\n  position: relative;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .collapse-frame[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 79px;\n  border-radius: 0px 10px 10px 0px;\n  height: 100%;\n  margin-right: 5px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .collapse-frame[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  writing-mode: tb-rl;\n  transform: rotate(180deg);\n  height: 150px;\n  color: var(--xa-white);\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .collapse-frame[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(270deg);\n  transition: 0.5s;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .collapse-frame[_ngcontent-%COMP%]   mat-icon.active[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 2px solid;\n  border-radius: 0px 12px 12px 0px;\n  position: absolute;\n  padding-right: 1rem;\n  height: 204px;\n  background-color: var(--xa-white);\n  top: 0;\n  left: 70px;\n  width: 187px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .toggle-frame[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  height: 24px;\n  gap: 12px;\n  display: flex;\n  padding-top: 0.5rem;\n  padding-left: 1.2rem;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .toggle-frame[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]   .label-toggle[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n  letter-spacing: 0em;\n  text-align: left;\n  width: 106px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  margin-top: 0.5rem;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .editbtn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 40px;\n  top: 153px;\n  left: 104px;\n  padding-left: 30px;\n  border-radius: 8px;\n  border: 1px;\n  gap: 10px;\n  box-shadow: 0px 1px 3px 0px rgba(96, 108, 128, 0.0509803922);\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .dltbtn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 40px;\n  top: 153px;\n  left: 156px;\n  padding-left: 10px;\n  border-radius: 8px;\n  border: 1px;\n  gap: 10px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .nav-right-toggle[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 62px;\n  background: var(--xa-lighter-gray);\n  border-radius: 0px 10px 10px 0px;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  justify-content: center;\n  margin-left: -5px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .nav-right-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(270deg);\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%] {\n  display: flex;\n  max-height: 360px;\n  overflow-x: hidden;\n  margin-bottom: 5px;\n  scrollbar-gutter: stable;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  line-height: 40px;\n  text-align: left;\n  font-size: 16px;\n  padding: 10px 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%]:not(.plus-btn-border) {\n  background-color: #F6F6F6;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 50px;\n  text-align: left;\n  font-size: 14px;\n  padding: 10px 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .plus-buttons-block[_ngcontent-%COMP%] {\n  height: 30px;\n  border: 1px solid var(--xa-light-gray);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   .plus-btn-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background-color: white;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .add-task-buttons-block[_ngcontent-%COMP%] {\n  height: 207px;\n  border: 1px solid var(--xa-light-gray);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 12%;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid rgb(237, 237, 237) !important;\n  border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border: none !important;\n  padding: 10px 2px !important;\n}\n\n  .disable:hover label > span {\n  cursor: not-allowed !important;\n}\n\nmat-icon.disable[_ngcontent-%COMP%] {\n  filter: opacity(0.5);\n  cursor: not-allowed !important;\n}\n\n.job-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  background: white;\n  padding-top: 20px;\n}\n.job-header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  width: 84px;\n  margin: 0 !important;\n}\n.job-header[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9vcGVyYXRpb25zL2pvYnMtdGFza3Mvam9icy10YXNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdRO0VBQ0ksd0JBQUE7QUFEWjtBQUlRO0VBQ0ksNkJBQUE7QUFGWjtBQUtRO0VBQ0ksYUFBQTtBQUhaO0FBWUk7RUFDSSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFWUjtBQVlRO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQVZaO0FBWVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBVmhCO0FBWWdCO0VBQ0ksd0JBQUE7QUFWcEI7QUFjWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFaaEI7QUFjZ0I7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBWnBCO0FBY29CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFaeEI7QUFld0I7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFiNUI7QUFnQndCO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQWQ1QjtBQWlCd0I7RUFDSSx3QkFBQTtBQWY1QjtBQW9CZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWxCcEI7QUFxQndCO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQW5CNUI7QUFxQjRCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbkJoQztBQXdCb0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF0QnhCO0FBd0J3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw0REFBQTtBQXRCNUI7QUF5QndCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQXZCNUI7QUErQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUE3QmhCO0FBOEJnQjtFQUNJLHlCQUFBO0FBNUJwQjtBQWlDUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQS9CWjtBQWdDWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQTlCaEI7QUFpQ29CO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQS9CeEI7QUFtQ2dCO0VBQ0kseUJBQUE7QUFqQ3BCO0FBb0NnQjtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWxDcEI7QUFvQ29CO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWxDeEI7QUFzQ2dCO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFwQ3BCO0FBMkNJO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpDUjtBQTRDSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUExQ1I7QUE0Q1E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0FBMUNaOztBQStDQTtFQUNJLHlCQUFBO0FBNUNKOztBQStDQTs7RUFFSSwrQ0FBQTtFQUNBLHlCQUFBO0FBNUNKOztBQWdESTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7QUE3Q1I7O0FBa0RJO0VBQ0ksOEJBQUE7QUEvQ1I7O0FBbURBO0VBQ0ksb0JBQUE7RUFDQSw4QkFBQTtBQWhESjs7QUFtREE7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWhESjtBQWlESTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQS9DUjtBQWlESTtFQUNJLG9CQUFBO0FBL0NSIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyLWpvYnMtdGFza3Mge1xyXG4gICAgLmFkZC1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogY2FsYyg1cHggKyAxdncpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubGlzdC1jb250YWluZXIgLmpvYjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgLmxlZnQtY29udGFpbmVyIC5uYXYtbGVmdC10b2dnbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmxpc3QtY29udGFpbmVyIC5qb2Ige1xyXG4gICAgLy8gICAgIG1heC1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgLy8gICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC5saXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWZvcm0tYm9yZGVyKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogY2FsYyg1cHggKyAxdncpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgICAgIC5sZWZ0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgICAgIC5uYXYtbGVmdC10b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodGVyLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRyb2xzIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZyYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29sbGFwc2UtZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB0Yi1ybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leHBhbmRlZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMnB4IDEycHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODdweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZS1mcmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwtdG9nZ2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWRpdGJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTUzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoOTYsIDEwOCwgMTI4LCAwLjA1MDk4MDM5MjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGx0YnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAubmF2LXJpZ2h0LXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuam9iLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNjBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIHNjcm9sbGJhci1ndXR0ZXI6IHN0YWJsZTtcclxuICAgICAgICAgICAgLnRhYmxlLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG5cclxuICAgICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mcmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pPnRkOm5vdCgucGx1cy1idG4tYm9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBsdXMtYnV0dG9ucy1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wbHVzLWJ0bi1zdGlja3kge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYWRkLXRhc2stYnV0dG9ucy1ibG9jayB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDdweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1kYXRhLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTIlO1xyXG5cclxuICAgICAgICAubm8tZGF0YS1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGgsXHJcbnRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzcsIDIzNywgMjM3KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAycHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5kaXNhYmxlOmhvdmVyIHtcclxuICAgIGxhYmVsPnNwYW4ge1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxubWF0LWljb24uZGlzYWJsZSB7XHJcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmpvYi1oZWFkZXIgeyAgICBcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAuY29udHJvbHMge1xyXG4gICAgICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmpvYi1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 92243:
/*!******************************************************************!*\
  !*** ./src/app/modules/settings/operations/operations.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationsModule": () => (/* binding */ OperationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _booking_type_booking_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-type/booking-type.component */ 59994);
/* harmony import */ var _jobs_tasks_jobs_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs-tasks/jobs-tasks.component */ 89959);
/* harmony import */ var _operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations-layout/operations-layout.component */ 29428);
/* harmony import */ var _repair_type_repair_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repair-type/repair-type.component */ 98598);
/* harmony import */ var _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduling/scheduling.component */ 64962);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _calendar_settings_calendar_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-settings/calendar-settings.component */ 90377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);

















const casesRoutes = [{
  path: '',
  component: _booking_type_booking_type_component__WEBPACK_IMPORTED_MODULE_3__.BookingTypeComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
  }
}, {
  path: 'repair-type',
  component: _repair_type_repair_type_component__WEBPACK_IMPORTED_MODULE_6__.RepairTypeComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
  }
}, {
  path: 'jobs-tasks',
  component: _jobs_tasks_jobs_tasks_component__WEBPACK_IMPORTED_MODULE_4__.JobsTasksComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
  }
}, {
  path: 'scheduling',
  component: _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_7__.SchedulingComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
  }
}, {
  path: 'calendar',
  component: _calendar_settings_calendar_settings_component__WEBPACK_IMPORTED_MODULE_8__.CalendarSettingsComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
  }
}];
class OperationsModule {
  static #_ = this.ɵfac = function OperationsModule_Factory(t) {
    return new (t || OperationsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: OperationsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(casesRoutes), src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](OperationsModule, {
    declarations: [_operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_5__.OperationsLayoutComponent, _booking_type_booking_type_component__WEBPACK_IMPORTED_MODULE_3__.BookingTypeComponent, _repair_type_repair_type_component__WEBPACK_IMPORTED_MODULE_6__.RepairTypeComponent, _jobs_tasks_jobs_tasks_component__WEBPACK_IMPORTED_MODULE_4__.JobsTasksComponent, _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_7__.SchedulingComponent, _calendar_settings_calendar_settings_component__WEBPACK_IMPORTED_MODULE_8__.CalendarSettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_5__.OperationsLayoutComponent, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule]
  });
})();

/***/ }),

/***/ 98598:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/settings/operations/repair-type/repair-type.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepairTypeComponent": () => (/* binding */ RepairTypeComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-toggle/chq-toggle.component */ 65513);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);












function RepairTypeComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12)(2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 14)(5, "chq-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ToggleChange", function RepairTypeComponent_ng_container_9_Template_chq_toggle_ToggleChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onToggleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", item_r1.checked || false)("name", item_r1.id);
  }
}
class RepairTypeComponent {
  /**
  Constructor for the class.
  @constructor
  @param {CommonService} commonService - Service for common operations.
  @param {MonitorService} monitorService - Service for monitoring operations.
  @param {ChangeDetectorRef} changeDetectorRef - Service to detect changes
  */
  constructor(bookingService, commonService, monitorService, settingsService) {
    this.bookingService = bookingService;
    this.commonService = commonService;
    this.monitorService = monitorService;
    this.settingsService = settingsService;
    this.saveButtonModel = {
      label: 'save',
      type: 'disabled',
      onclick: this.submitForm.bind(this)
    };
    this.repairTypesData = [];
    this.checkedRepairTypes = [];
    this.showToast = true;
    this.commonService.userProfileData.subscribe(res => {
      this.orgID = res?.data?.organizationDetail?.id;
    });
  }
  /**
   * on init
   */
  ngOnInit() {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.monitorService.logEvent('ngOnInit', ['RepairTypeComponent', 'addenda-repair']);
      _this.commonService.showLoading();
      _this.getRepairTypes();
    })();
  }
  /**
   * get repair Types
   */
  getRepairTypes() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([this.bookingService.getRepairTypes(), this.settingsService.getRepairTypes()]).subscribe({
      next: ([result, repairStatus]) => {
        if (result) {
          this.repairTypesData = result.data;
          this.getSettings();
        }
        if (repairStatus?.data?.repairServiceTypes.length > 0) {
          const repairTypesEnabled = repairStatus?.data?.repairServiceTypes;
          repairTypesEnabled.forEach(el => {
            const foundObj = this.repairTypesData.find(obj => obj.id === el.id);
            if (foundObj) {
              foundObj.checked = true;
              Object.assign(foundObj, this.repairTypesData);
            }
            this.onToggleChange({
              checked: true,
              name: el.id.toString()
            });
          });
        }
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err);
      }
    });
  }
  /**
   * get settings
   */
  getSettings() {
    this.settingsService.getBookingTypes().subscribe({
      next: result => {
        if (result && result.data && result.data.repairType && result.data.repairType.bookingRepairId) {
          this.bookingRepairId = result.data.repairType.bookingRepairId;
        }
        if (result && result.data && result.data.repairType && result.data.repairType.repairTypes) {
          this.repairTypesData = this.repairTypesData.map(ele => {
            return {
              ...ele,
              checked: result.data.repairType.repairTypes.includes(ele.id)
            };
          });
          this.checkedRepairTypes = result.data.repairType.repairTypes;
          this.settingsService.isJobTasksEnabled.emit(result.data.repairType.repairTypes.length > 0 ? true : false);
        }
        this.commonService.hideLoading();
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err);
      }
    });
  }
  /**
   * on toggle change
   */
  onToggleChange(e) {
    if (e.checked && !this.checkedRepairTypes.includes(parseInt(e.name))) {
      this.checkedRepairTypes.push(parseInt(e.name));
    } else {
      this.checkedRepairTypes = this.checkedRepairTypes.filter(id => id !== parseInt(e.name));
    }
    this.saveButtonModel.type = this.checkedRepairTypes.length ? 'primary' : 'disabled';
  }
  /**
   * check for form validation
   * @returns {void}
   */
  isRepairTypeFormValid() {
    const isValid = this.checkedRepairTypes.length ? true : false;
    return isValid;
  }
  /**
     Submits the form data to the server.
     @returns {void}
   */
  submitForm() {
    if (!this.isRepairTypeFormValid() || this.saveButtonModel.type === 'disabled') {
      return;
    }
    this.monitorService.logEvent('submitForm', ['RepairTypeComponent', 'addenda-repair']);
    const repairTypeData = {
      bookingRepairId: this.bookingRepairId,
      RepairServiceTypeIds: this.checkedRepairTypes
    };
    this.commonService.showLoading();
    this.settingsService.saveNewRepairType(repairTypeData).subscribe({
      next: result => {
        if (this.showToast) {
          this.commonService.showInfoToast(5000, 'New changes will be applied only to new bookings.');
        }
        this.settingsService.isJobTasksEnabled.emit(this.checkedRepairTypes.length > 0 ? true : false);
        this.commonService.hideLoading();
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err);
      }
    });
  }
  /**
  * on Destroy
  */
  ngOnDestroy() {
    this.showToast = false;
  }
  static #_ = this.ɵfac = function RepairTypeComponent_Factory(t) {
    return new (t || RepairTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RepairTypeComponent,
    selectors: [["app-repair-type"]],
    decls: 16,
    vars: 5,
    consts: [[1, "page-container-repair-type"], [1, "repair-type-wrapper"], [1, "main-div"], [1, "repair-type-title"], [1, "parent-control"], [1, "left-control"], [4, "ngFor", "ngForOf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "footer-save-button-wrapper", 3, "buttonModel"], [1, "toggle"], [1, "label-toggle"], [1, "toggle-button"], [3, "checked", "name", "ToggleChange"]],
    template: function RepairTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form")(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, RepairTypeComponent_ng_container_9_Template, 6, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "chq-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 3, "repair_type_msg"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.repairTypesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx.saveButtonModel);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__.ChqButtonComponent, _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_6__.ChqToggleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: [".page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%] {\n  padding: calc(5px + 1vw);\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: var(--xa-tab-default-content);\n  border: 1px solid var(--xa-form-border);\n  border-radius: 10px;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .repair-type-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  margin: 30px 0px 35px 20px;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .parent-control[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .parent-control[_ngcontent-%COMP%]   .left-control[_ngcontent-%COMP%] {\n  width: 170px;\n  margin-left: 20px;\n  margin-top: 33px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .parent-control[_ngcontent-%COMP%]   .right-control[_ngcontent-%COMP%] {\n  width: 170px;\n  margin-left: 111px;\n  margin-top: 33px;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-bottom: 20px;\n  gap: 12px;\n  margin-right: 5rem;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]   .label-toggle[_ngcontent-%COMP%] {\n  width: 118px;\n  height: 14px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  color: #181B1F;\n  flex: none;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .footer-save-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0px;\n  gap: 10px;\n  width: 177px;\n  height: 40px;\n  margin-right: 1.5vw;\n  border-radius: 8px;\n}\n\n@media (max-width: 800px) {\n  .vector[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9vcGVyYXRpb25zL3JlcGFpci10eXBlL3JlcGFpci10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0JBQUE7QUFBSjtBQUVJO0VBQ0Usc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUFSO0FBR007RUFDRSxhQUFBO0FBRFI7QUFHUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQURWO0FBSVE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZWO0FBTU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBSlI7QUFNUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFKVjtBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFZQTtFQUNFO0lBQ0Usc0JBQUE7RUFURjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyLXJlcGFpci10eXBlIHtcclxuICAucmVwYWlyLXR5cGUtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiBjYWxjKDVweCArIDF2dyk7XHJcblxyXG4gICAgLm1haW4tZGl2IHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtdGFiLWRlZmF1bHQtY29udGVudCk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWZvcm0tYm9yZGVyKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgIC5yZXBhaXItdHlwZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDBweCAzNXB4IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXJlbnQtY29udHJvbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLmxlZnQtY29udHJvbCB7XHJcbiAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMzcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1jb250cm9sIHtcclxuICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMTFweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9nZ2xlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVyZW07XHJcblxyXG4gICAgICAgIC5sYWJlbC10b2dnbGUge1xyXG4gICAgICAgICAgd2lkdGg6IDExOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTgxQjFGO1xyXG4gICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXItc2F2ZS1idXR0b24td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDBweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxNzdweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMS41dnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAudmVjdG9yIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64962:
/*!********************************************************************************!*\
  !*** ./src/app/modules/settings/operations/scheduling/scheduling.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulingComponent": () => (/* binding */ SchedulingComponent)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ 47509);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/weekday */ 18466);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














function SchedulingComponent_div_18_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_18_tr_9_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.toggleDays("work", i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 28)(5, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_18_tr_9_Template_chq_input_controlOutput_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.updateTimePickers($event, "work", "start", i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 28)(7, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_18_tr_9_Template_chq_input_controlOutput_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.updateTimePickers($event, "work", "end", i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", item_r4.checked ? "bg-primary text-white" : "bg-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r4.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !item_r4.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r2.workStartTimePickerModels[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !item_r4.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r2.workEndTimePickerModels[i_r5]);
  }
}
function SchedulingComponent_div_18_tr_37_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](title_r13.days);
  }
}
function SchedulingComponent_div_18_tr_37_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](title_r14.hours);
  }
}
function SchedulingComponent_div_18_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SchedulingComponent_div_18_tr_37_div_6_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SchedulingComponent_div_18_tr_37_div_8_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td")(10, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_18_tr_37_Template_mat_icon_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.deleteWorkHours(item_r10.workScheduleGuid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r10.createdDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r10.effectiveDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r10.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r10.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "trash");
  }
}
function SchedulingComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "div", 14)(2, "div", 15)(3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 17)(7, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_18_Template_chq_input_controlOutput_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.updateDatePickers($event, "work", "start"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, SchedulingComponent_div_18_tr_9_Template, 8, 6, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 21)(11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_18_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.addNewWorkHours());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_18_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.showConfirmApplyDialog("work"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 24)(18, "table", 25)(19, "thead")(20, "tr")(21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, SchedulingComponent_div_18_tr_37_Template, 11, 5, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 11, "add_edit_work_schedule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r0.workStartDateInputModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.workDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 13, "save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 15, "apply_to_the_entire_team"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 17, "creation_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 19, "start_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 21, "days"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 23, "hours"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 25, "action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.employee.workSchedules);
  }
}
function SchedulingComponent_div_19_table_16_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_19_table_16_tr_1_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const i_r25 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.toggleDays("off", i_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 28)(5, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_table_16_tr_1_Template_chq_input_controlOutput_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const i_r25 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.updateTimePickers($event, "off", "start", i_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 28)(7, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_table_16_tr_1_Template_chq_input_controlOutput_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const i_r25 = restoredCtx.index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.updateTimePickers($event, "off", "end", i_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", item_r24.checked ? "bg-primary text-white" : "bg-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r24.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !item_r24.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r23.offStartTimePickerModels[i_r25]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !item_r24.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r23.offEndTimePickerModels[i_r25]);
  }
}
function SchedulingComponent_div_19_table_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SchedulingComponent_div_19_table_16_tr_1_Template, 8, 6, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.offDays);
  }
}
function SchedulingComponent_div_19_tr_47_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r33.days);
  }
}
function SchedulingComponent_div_19_tr_47_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r34.hours);
  }
}
function SchedulingComponent_div_19_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SchedulingComponent_div_19_tr_47_div_8_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, SchedulingComponent_div_19_tr_47_div_12_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td")(14, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_19_tr_47_Template_mat_icon_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const item_r30 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.deleteOffTime(item_r30.offTimeGuid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r30.createdDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r30.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r30.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r30.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r30.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r30.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "trash");
  }
}
function SchedulingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 31)(9, "div", 32)(10, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_Template_chq_input_controlOutput_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.offTimeInputChange($event, "breakType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 34)(12, "div", 35)(13, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_Template_chq_input_controlOutput_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r39.updateDatePickers($event, "off", "start"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 35)(15, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_Template_chq_input_controlOutput_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r40.updateDatePickers($event, "off", "end"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SchedulingComponent_div_19_table_16_Template, 2, 1, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 21)(18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_19_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r41.checkAddOffTimeAllowed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_19_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r42.showConfirmApplyDialog("off"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 39)(25, "table", 40)(26, "thead")(27, "tr")(28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, SchedulingComponent_div_19_tr_47_Template, 15, 7, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 16, "off_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r1.offTimeInputModels.breakType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r1.offStartDateInputModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx_r1.offEndDateInputModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.offTimeInputModels.breakType.selectedOption.durationUnit === "Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.offTimeInputModels.breakType.selectedOption || ctx_r1.offTimeInputModels.breakType.selectedOption.durationUnit === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 18, "save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.offTimeInputModels.breakType.selectedOption || ctx_r1.offTimeInputModels.breakType.selectedOption.durationUnit === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 20, "apply_to_the_entire_team"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 22, "creation_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 24, "start_end_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 26, "days"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 28, "type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 30, "hours"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 32, "actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.employee.offTimes);
  }
}
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
const timeSlotMin = 30;
class SchedulingComponent {
  /**
   * Creates an instance of SchedulingComponent.
   * @constructor
   */
  constructor(route, settingsService, commonService) {
    this.route = route;
    this.settingsService = settingsService;
    this.commonService = commonService;
    this.localTimeZoneString = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01T00:00:00Z').format('HH:mm A');
    this.dateTimeFormats = {
      dateTimeUTC12h: 'YYYY-MM-DD hh:mm A Z',
      dateTimeUTC24h: 'YYYY-MM-DD HH:mm Z',
      dateTime12h: 'YYYY-MM-DD hh:mm A',
      dateTime24h: 'YYYY-MM-DD HH:mm',
      time12h: 'hh:mm A'
    };
    this.daysList = {
      'MON': 'Monday',
      'TUE': 'Tuesday',
      'WED': 'Wednesday',
      'THU': 'Thursday',
      'FRI': 'Friday',
      'SAT': 'Saturday',
      'SUN': 'Sunday'
    };
    this.calendarData = [];
    this.employee = {
      workSchedules: [],
      offTimes: []
    };
    this.employeeInputModel = [];
    this.employeeOffTimeType = [];
    this.workDays = [{
      day: 'MON',
      checked: true
    }, {
      day: 'TUE',
      checked: true
    }, {
      day: 'WED',
      checked: true
    }, {
      day: 'THU',
      checked: true
    }, {
      day: 'FRI',
      checked: true
    }, {
      day: 'SAT',
      checked: true
    }, {
      day: 'SUN',
      checked: false
    }];
    this.offDays = [{
      day: 'MON',
      date: '15',
      checked: true
    }, {
      day: 'TUE',
      date: '16',
      checked: true
    }, {
      day: 'WED',
      date: '17',
      checked: true
    }, {
      day: 'THU',
      date: '18',
      checked: true
    }, {
      day: 'FRI',
      date: '19',
      checked: true
    }, {
      day: 'SAT',
      date: '20',
      checked: true
    }, {
      day: 'SUN',
      date: '21',
      checked: false
    }];
    this.scheduleType = 'work';
    this.workStartDateInputModel = {
      label: 'start_date',
      type: 'date',
      name: 'workStart',
      class: 'col-1',
      placeHolder: 'enter_start_date',
      minDate: new Date(),
      value: new Date()
    };
    this.offStartDateInputModel = {
      label: 'start',
      type: 'date',
      name: 'offStart',
      class: 'col-1',
      placeHolder: 'enter_start_date',
      minDate: new Date(),
      value: new Date()
    };
    this.offEndDateInputModel = {
      label: 'end',
      type: 'date',
      name: 'offEnd',
      class: 'col-1',
      placeHolder: 'enter_end_date',
      minDate: new Date(),
      value: new Date()
    };
    this.startTimePickerModel = {
      label: 'job_start_time',
      type: 'time',
      name: 'jobStart',
      class: 'col-6',
      placeHolder: 'time',
      value: dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 08:00'),
      interval: timeSlotMin
    };
    this.endTimePickerModel = {
      label: 'job_end_time',
      type: 'time',
      name: 'jobStart',
      class: 'col-6',
      placeHolder: 'time',
      value: dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 18:00'),
      interval: timeSlotMin
    };
    this.workStartTimePickerModels = [];
    this.workEndTimePickerModels = [];
    this.offStartTimePickerModels = [];
    this.offEndTimePickerModels = [];
    this.offTimeInputModels = {
      breakType: {
        label: 'break_type',
        type: 'select',
        name: 'breakType',
        class: 'col-6',
        placeHolder: 'select_break_type',
        value: '',
        displayValue: 'label',
        fieldValue: 'value',
        selectedOption: {
          durationUnit: ''
        },
        options: [],
        isMultiSelect: false
      },
      frequencyWeekly: {
        label: 'frequency',
        type: 'select',
        name: 'frequency',
        class: 'col-6',
        placeHolder: 'select_repeat_frequency',
        value: '',
        displayValue: 'label',
        fieldValue: 'value',
        selectedOption: {
          label: 'Do Not Repeat'
        },
        options: [{
          label: 'Do Not Repeat'
        }, {
          label: 'Repeat Every Week'
        }],
        isMultiSelect: false
      },
      frequencyYearly: {
        label: 'frequency',
        type: 'select',
        name: 'frequency',
        class: 'col-6',
        placeHolder: 'select_repeat_frequency',
        value: '',
        displayValue: 'label',
        fieldValue: 'value',
        selectedOption: {
          label: 'Do Not Repeat'
        },
        options: [{
          label: 'Do Not Repeat'
        }, {
          label: 'Repeat Every Year'
        }],
        isMultiSelect: false
      },
      start: {
        label: 'start',
        type: 'date',
        name: 'offStart',
        class: 'col-6',
        placeHolder: 'enter_start_date',
        minDate: new Date(),
        maxDate: new Date(),
        value: new Date()
      },
      end: {
        label: 'end',
        type: 'date',
        name: 'offEnd',
        class: 'col-6',
        placeHolder: 'enter_end_date',
        minDate: new Date(),
        maxDate: new Date(),
        value: new Date()
      }
    };
    this.currentDate = new Date();
    this.editEmployeeFormValid = true;
    this.timeSlotMin = timeSlotMin;
    this.weekendDate = {};
    this.holiday = {};
    this.dinner = {};
  }
  /**
   * ngOnInit
   */
  ngOnInit() {
    this.commonService.userProfileData.subscribe({
      next: profileResult => {
        const employeeId = profileResult.data.userId;
        this.commonService.showLoading();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(this.settingsService.getEmployeeDetails(employeeId)).then(response => {
          this.employee = response.data;
          this.employee.workSchedules = this.convertTimeToLocalTimeZone(this.employee.workSchedules, 'work');
          this.employee.offTimes = this.convertTimeToLocalTimeZone(this.employee.offTimes, 'offtime');
          this.commonService.hideLoading();
        }).catch(() => {
          this.commonService.hideLoading();
        });
        this.settingsService.getEmployeeOffTimeType().subscribe({
          next: result => {
            this.offTimeInputModels.breakType.options = result['data'].map(item => {
              item.type = item.description.indexOf('Days') != -1 ? 'Days' : 'Hours';
              item.label = item.name;
              return item;
            }).filter(x => x.name.toLowerCase() != 'unpaid leave' && x.name.toLowerCase() != 'paid leave');
            //this.offTimeInputModels.breakType.selectedOption = this.offTimeInputModels.breakType.options[0];
          }
        });

        this.workDays.forEach(item => {
          this.workStartTimePickerModels.push({
            ...this.startTimePickerModel
          });
          this.workEndTimePickerModels.push({
            ...this.endTimePickerModel
          });
          this.offStartTimePickerModels.push({
            ...this.startTimePickerModel,
            value: dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 13:00 ')
          });
          this.offEndTimePickerModels.push({
            ...this.endTimePickerModel,
            value: dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 14:00')
          });
        });
      }
    });
  }
  /**
   * toggleDays
   * @param {*} index
   */
  toggleDays(type, index) {
    if (type == 'work') {
      this.workDays[index].checked = !this.workDays[index].checked;
    } else if (type == 'off') {
      this.offDays[index].checked = !this.offDays[index].checked;
    }
  }
  /**
   * updateTimePickers
   *
   * @param {*} event
   * @param {*} type
   * @param {*} startOrEnd
   * @param {*} index
   */
  updateTimePickers(event, type, startOrEnd, index) {
    console.log(event, type, startOrEnd, index);
    if (type === 'work') {
      if (startOrEnd === 'start') {
        this.workStartTimePickerModels[index].value = event.value;
      } else {
        this.workEndTimePickerModels[index].value = event.value;
      }
    } else if (type === 'off') {
      if (startOrEnd === 'start') {
        this.offStartTimePickerModels[index].value = event.value;
      } else {
        this.offEndTimePickerModels[index].value = event.value;
      }
    }
  }
  /**
   * updateDatePickers
   * @param {*} event
   * @param {*} type
   * @param {*} startOrEnd
   */
  updateDatePickers(event, type, startOrEnd) {
    console.log(event, type, startOrEnd);
    if (type === 'work') {
      this.workStartDateInputModel.value = event.value;
    } else if (type === 'off') {
      if (startOrEnd === 'start') {
        this.offStartDateInputModel.value = event.value;
      } else {
        this.offEndDateInputModel.value = event.value;
      }
    }
  }
  /**
   * showConfirmApplyDialog
   * @param {*} type
   */
  showConfirmApplyDialog(type) {
    const pheader = 'Apply to entire Team ?';
    const message = 'Are you sure you want to apply this change to the entire team';
    const dialogRef = this.commonService.openConfirmYesNoDialog(pheader, message);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        if (type === 'work') {
          this.addNewWorkHoursForTeam();
        } else if (type === 'off') {
          this.addNewOffTimeForTeam();
        }
      }
    });
  }
  /**
   * breakTypeChange
   * @param {*} $event
   */
  offTimeInputChange($event, type) {
    console.log($event, type);
    this.offTimeInputModels[type] = {
      ...this.offTimeInputModels[type],
      selectedOption: $event.value
    };
    //    this.offTimeInputModels.breakType.selectedOption = $event.value;
  }
  /**
   * checkDayOverlapInUTCTime
   * @param {*} dateTime
   * @returns {boolean}
   */
  isDayOverlapInUTCTime(dateTime) {
    let returnFlag = false;
    console.log(dayjs__WEBPACK_IMPORTED_MODULE_0__(dateTime).utc().format('HH:MM') > dayjs__WEBPACK_IMPORTED_MODULE_0__(dateTime).format('HH:MM'));
    if (dayjs__WEBPACK_IMPORTED_MODULE_0__(dateTime).utc().format('HH:MM') > dayjs__WEBPACK_IMPORTED_MODULE_0__(dateTime).format('HH:MM')) {
      returnFlag = true;
    }
    return returnFlag;
  }
  /**
   * addNewWorkHours
   */
  addNewWorkHours() {
    if (this.employee.workSchedules.length >= 10) {
      this.showErrorMessage('Max Work Hours Reached', 'Cannot Add more than 10 Work Hours');
      return;
    }
    this.commonService.showLoading();
    const data = {
      'workDays': [],
      'effectiveDate': dayjs__WEBPACK_IMPORTED_MODULE_0__(this.workStartDateInputModel.value).format('YYYY-MM-DD')
    };
    for (const index in this.workDays) {
      const item = this.workDays[index];
      if (item.checked) {
        if (this.isDayOverlapInUTCTime(this.workStartTimePickerModels[index].value)) {
          this.showErrorMessage('Error', 'Job Start Time should be ' + this.localTimeZoneString + ' and beyond');
          this.commonService.hideLoading();
          return;
        }
        if (this.isDayOverlapInUTCTime(this.workEndTimePickerModels[index].value)) {
          this.showErrorMessage('Error', 'Job End Time should be ' + this.localTimeZoneString + ' and beyond');
          this.commonService.hideLoading();
          return;
        }
        data.workDays.push({
          day: this.daysList[item.day],
          timeSlots: [{
            startTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(this.workStartTimePickerModels[index].value).utc().format('HH:mm'),
            endTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(this.workEndTimePickerModels[index].value).utc().format('HH:mm')
          }]
        });
      }
    }
    this.settingsService.addNewWorkHours(this.employee.employeeGuid, data).subscribe({
      next: result => {
        this.commonService.hideLoading();
        if (result.success) {
          this.showSuccessMessage(result.message, result.message);
          this.employee.workSchedules = this.convertTimeToLocalTimeZone(result.data.workSchedules, 'work');
        } else if (result.errorMessages) {
          this.showErrorMessage('Error', result.errorMessages);
        } else {
          this.showErrorMessage('Error', result.Message);
        }
      },
      error: error => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * addNewWorkHoursForTeam
   */
  addNewWorkHoursForTeam() {
    this.commonService.showLoading();
    const data = {
      'workDays': [],
      'effectiveDate': dayjs__WEBPACK_IMPORTED_MODULE_0__(this.workStartDateInputModel.value).format('YYYY-MM-DD')
    };
    for (const index in this.workDays) {
      const item = this.workDays[index];
      if (item.checked) {
        if (this.isDayOverlapInUTCTime(this.workStartTimePickerModels[index].value)) {
          this.showErrorMessage('Error', 'Job Start Time should be ' + this.localTimeZoneString + ' and beyond');
          this.commonService.hideLoading();
          return;
        }
        if (this.isDayOverlapInUTCTime(this.workEndTimePickerModels[index].value)) {
          this.showErrorMessage('Error', 'Job End Time should be ' + this.localTimeZoneString + ' and beyond');
          this.commonService.hideLoading();
          return;
        }
        data.workDays.push({
          day: this.daysList[item.day],
          timeSlots: [{
            startTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(this.workStartTimePickerModels[index].value).utc().format('HH:mm'),
            endTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(this.workEndTimePickerModels[index].value).utc().format('HH:mm')
          }]
        });
      }
    }
    this.settingsService.addNewWorkHoursForTeam(this.employee.employeeGuid, data).subscribe({
      next: result => {
        this.commonService.hideLoading();
        if (result.success) {
          this.showSuccessMessage(result.message, result.data);
        }
      },
      error: error => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * checkAddOffTimeAllowed
   */
  checkAddOffTimeAllowed() {
    console.log(this.offTimeInputModels.breakType.selectedOption.durationUnit);
    let isOverlap = false;
    this.employee.workSchedules.forEach((workSchedule, index) => {
      if (this.employee.workSchedules[index + 1] == undefined) {
        if (new Date(workSchedule['effectiveDate']) <= new Date(this.offStartDateInputModel['formControl'].value)) {
          isOverlap = true;
          return;
        }
      } else {
        if (this.employee.workSchedules[index + 1] && new Date(workSchedule['effectiveDate']) <= new Date(this.offStartDateInputModel['formControl'].value) && new Date(this.employee.workSchedules[index + 1]['effectiveDate']) >= new Date(this.offEndDateInputModel['formControl'].value)) {
          isOverlap = true;
          return;
        }
      }
    });
    if (isOverlap) {
      const dialogRef = this.commonService.openConfirmationOkDialog('Oops!', 'The employee selected is already allocated to a job in the selected period, please check again.');
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.addNewOffTime();
        }
      });
    } else {
      this.addNewOffTime();
    }
  }
  /**
   * addNewOffTime
   */
  addNewOffTime() {
    this.commonService.showLoading();
    const data = {
      'offDays': [],
      'offTimeTypeId': this.offTimeInputModels.breakType.selectedOption['id'],
      'startDate': dayjs__WEBPACK_IMPORTED_MODULE_0__(this.offStartDateInputModel['formControl'].value).format('YYYY-MM-DD'),
      'endDate': dayjs__WEBPACK_IMPORTED_MODULE_0__(this.offEndDateInputModel['formControl'].value).format('YYYY-MM-DD')
    };
    if (this.offTimeInputModels.breakType.selectedOption['durationUnit'] === 'Hours') {
      for (const index in this.offDays) {
        const item = this.offDays[index];
        if (item.checked) {
          if (this.isDayOverlapInUTCTime(this.offStartTimePickerModels[index].value)) {
            this.showErrorMessage('Error', 'Start Time should be ' + this.localTimeZoneString + ' and beyond');
            this.commonService.hideLoading();
            return;
          }
          if (this.isDayOverlapInUTCTime(this.offEndTimePickerModels[index].value)) {
            this.showErrorMessage('Error', 'End Time should be ' + this.localTimeZoneString + ' and beyond');
            this.commonService.hideLoading();
            return;
          }
          data.offDays.push({
            day: this.daysList[item.day],
            startTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(this.offStartTimePickerModels[index].value).utc().format('HH:mm'),
            endTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(this.offEndTimePickerModels[index].value).utc().format('HH:mm')
          });
        }
      }
    } else {
      delete data['offDays'];
    }
    console.log(data, this.offStartDateInputModel, this.offEndDateInputModel, this.offTimeInputModels.breakType);
    //return;
    this.settingsService.addNewOffTime(this.employee.employeeGuid, data).subscribe({
      next: result => {
        this.commonService.hideLoading();
        if (result.success) {
          this.showSuccessMessage(result.message, result.message);
          this.employee.offTimes = this.convertTimeToLocalTimeZone(result.data.offTimes, 'offtime');
        } else if (result.errorMessages) {
          this.showErrorMessage('Error', result.errorMessages);
        } else {
          this.showErrorMessage('Error', result.Message);
        }
      },
      error: error => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * addNewOffTime
   */
  addNewOffTimeForTeam() {
    this.commonService.showLoading();
    const data = {
      'offDays': [],
      'offTimeTypeId': this.offTimeInputModels.breakType.selectedOption['id'],
      'startDate': dayjs__WEBPACK_IMPORTED_MODULE_0__(this.offStartDateInputModel['formControl'].value).format('YYYY-MM-DD'),
      'endDate': dayjs__WEBPACK_IMPORTED_MODULE_0__(this.offEndDateInputModel['formControl'].value).format('YYYY-MM-DD')
    };
    if (this.offTimeInputModels.breakType.selectedOption['durationUnit'] === 'Hours') {
      for (const index in this.offDays) {
        const item = this.offDays[index];
        if (item.checked) {
          if (this.isDayOverlapInUTCTime(this.offStartTimePickerModels[index].value)) {
            this.showErrorMessage('Error', 'Start Time should be ' + this.localTimeZoneString + ' and beyond');
            this.commonService.hideLoading();
            return;
          }
          if (this.isDayOverlapInUTCTime(this.offEndTimePickerModels[index].value)) {
            this.showErrorMessage('Error', 'End Time should be ' + this.localTimeZoneString + ' and beyond');
            this.commonService.hideLoading();
            return;
          }
          data.offDays.push({
            day: this.daysList[item.day],
            startTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(this.offStartTimePickerModels[index].value).utc().format('HH:mm'),
            endTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(this.offEndTimePickerModels[index].value).utc().format('HH:mm')
          });
        }
      }
    } else {
      delete data['offDays'];
    }
    console.log(data, this.offStartDateInputModel, this.offEndDateInputModel, this.offTimeInputModels.breakType);
    //return;
    this.settingsService.addNewOffTimeForTeam(this.employee.employeeGuid, data).subscribe({
      next: result => {
        this.commonService.hideLoading();
        if (result.success) {
          this.showSuccessMessage(result.message, result.data);
        } else if (result.errorMessages) {
          this.showErrorMessage('Error', result.errorMessages);
        } else {
          this.showErrorMessage('Error', result.Message);
        }
      },
      error: error => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * deleteWorkHours
   */
  deleteWorkHours(workScheduleGuid) {
    this.commonService.showLoading();
    this.settingsService.deleteWorkHours(this.employee.employeeGuid, workScheduleGuid).subscribe({
      next: result => {
        this.commonService.hideLoading();
        if (result.success) {
          this.showSuccessMessage(result.message, result.message);
          this.employee.workSchedules = this.convertTimeToLocalTimeZone(result.data.workSchedules, 'work');
        } else {
          this.showErrorMessage('Error', result.Message);
        }
      },
      error: error => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * deleteOffTime
   */
  deleteOffTime(offTimeGuid) {
    this.commonService.showLoading();
    this.settingsService.deleteOffTime(this.employee.employeeGuid, offTimeGuid).subscribe({
      next: result => {
        this.commonService.hideLoading();
        if (result.success) {
          this.showSuccessMessage(result.message, result.message);
          this.employee.offTimes = this.convertTimeToLocalTimeZone(result.data.offTimes, 'offtime');
        } else {
          this.showErrorMessage('Error', result.Message);
        }
      },
      error: error => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * appointmentTimeFormat
   *
   * @param {string} dateTime
   * @returns {string}
   */
  appointmentTimeFormat(dateTime) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0__(dateTime).format('hh:mm A');
  }
  /**
   * onOptionChanged Calendar
   *
   * @param {*} event
   */
  onOptionChanged(event) {
    console.log(event);
    if (event.name === 'currentDate') {
      const currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(event.value).weekday(1).format('YYYY-MM-DD');
      this.selectedCalendarDate = currentDate;
    }
  }
  /**
   * showErrorMessage
   * @param {*} title
   * @param {*} desc
   */
  showErrorMessage(title, desc) {
    this.commonService.showToast(400, desc);
  }
  /**
   * showSuccessMessage
   * @param {*} title
   * @param {*} desc
   */
  showSuccessMessage(title, desc) {
    this.commonService.showInfoToast(5000, desc);
  }
  /**
   * convertTimesToLocal
   * @param {*} obj
   * @param {*} type
   */
  convertTimeToLocalTimeZone(obj, type) {
    if (!obj) return null;
    if (type === 'work') {
      const data = obj.map(workSchedule => {
        return {
          ...workSchedule,
          titles: workSchedule.titles?.map(title => {
            if (!title.hours || title.hours.indexOf(' - ') === -1) return title;
            const hoursArray = title.hours.split(' - ');
            hoursArray[0] = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 ' + hoursArray[0] + ' Z', this.dateTimeFormats.dateTimeUTC12h).format('hh:mm A');
            hoursArray[1] = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 ' + hoursArray[1] + ' Z', this.dateTimeFormats.dateTimeUTC12h).format('hh:mm A');
            return {
              ...title,
              hours: hoursArray.join(' - ')
            };
          })
        };
      });
      return data;
    } else if (type === 'offtime') {
      const data = obj.map(offTime => {
        if (offTime.titles && offTime.titles.length > 0) {
          return {
            ...offTime,
            titles: offTime.titles.map(title => {
              if (!title.hours || title.hours.indexOf(' - ') === -1) return title;
              const hoursArray = title.hours.split(' - ');
              hoursArray[0] = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 ' + hoursArray[0] + ' Z', this.dateTimeFormats.dateTimeUTC12h).format('hh:mm A');
              hoursArray[1] = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 ' + hoursArray[1] + ' Z', this.dateTimeFormats.dateTimeUTC12h).format('hh:mm A');
              return {
                ...title,
                hours: hoursArray.join(' - ')
              };
            })
          };
        } else {
          return offTime;
        }
      });
      return data;
    } else {
      return obj;
    }
  }
  static #_ = this.ɵfac = function SchedulingComponent_Factory(t) {
    return new (t || SchedulingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SchedulingComponent,
    selectors: [["app-scheduling"]],
    decls: 24,
    vars: 13,
    consts: [[1, "page-container-booking-type"], [1, "title"], [1, "booking-type-wrapper"], [1, "form-container"], [1, "row"], [1, "col-12", "radio"], [1, "radio-option"], ["type", "radio", "name", "scheduleType-work", "value", "work", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "scheduleType-off", "value", "off", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "mobile-width-100", "col-12"], [1, "row", 2, "margin-bottom", "12px", "align-items", "flex-end"], [1, "col-7", 2, "font-size", "14px"], [1, "col-5"], [3, "inputModel", "controlOutput"], [1, "work-days-table"], [4, "ngFor", "ngForOf"], [1, "row", "no-margin", "button-container"], ["type", "button", 1, "btn-primary", "d-none", 3, "click"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "mobile-width-100", "col-6", "work-days-details-table-container", "d-none"], ["cellpadding", "0", 1, "work-days-details-table"], [1, "capitalize"], ["type", "button", 1, "mat-icon", "toggle-days-button", 3, "ngClass", "click"], [3, "hidden"], ["color", "red", 3, "svgIcon", "click"], [1, "mobile-width-100", "col-12", "no-padding"], [1, "row", "no-margin"], [1, "col-12"], [2, "font-size", "14px"], [1, "row", "no-margin", 2, "margin-top", "12px"], [1, "col-6"], ["class", "work-days-table", 4, "ngIf"], ["type", "button", 1, "btn-primary", "d-none", 3, "disabled", "click"], ["type", "button", 1, "btn-primary", 3, "disabled", "click"], [1, "mobile-width-100", "col-6", "off-days-details-table-container", "d-none"], [1, "work-days-details-table"]],
    template: function SchedulingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "form", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6)(9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SchedulingComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.scheduleType = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 6)(14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SchedulingComponent_Template_input_ngModelChange_14_listener($event) {
          return ctx.scheduleType = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SchedulingComponent_div_18_Template, 38, 27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, SchedulingComponent_div_19_Template, 48, 34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 7, "team_scheduling"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.scheduleType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 9, "work_schedule"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.scheduleType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 11, "off_time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.scheduleType === "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.scheduleType === "off");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__.ChqInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
    styles: [".page-container-booking-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: calc(5px + 1vw);\n  margin-bottom: 0;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n  background: var(--xa-popup-light-gray);\n  border-radius: 10px;\n  margin: calc(5px + 1vw);\n  padding: 60px 40px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .footer-save-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0px;\n  gap: 10px;\n  width: 177px;\n  height: 40px;\n  margin-right: 1.5vw;\n  border-radius: 8px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.competencies-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 8px;\n  height: 100px;\n  margin: 10px;\n}\n\n  .chq-input-disabled div input {\n  padding: 0px !important;\n  background-color: transparent;\n}\n\n  .competencies-input .checkbox-wrapper {\n  flex-wrap: wrap;\n}\n  .competencies-input label.checkbox {\n  padding-left: 0px !important;\n  padding-right: 40px !important;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: white;\n  border-radius: 8px;\n  height: 60px !important;\n  margin: 10px;\n  min-width: 180px;\n}\n  .competencies-input .checkmark {\n  left: unset !important;\n  right: 5px !important;\n}\n  .competencies-input .span-label {\n  font-weight: 500;\n  text-transform: capitalize;\n  color: black;\n  font-size: 13px;\n}\n  .competencies-input mat-icon {\n  height: 36px !important;\n  border-radius: 8px;\n  width: 36px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n}\n  .competencies-input mat-icon svg {\n  height: 13px;\n}\n\n.schedule-expansion[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border-bottom: 1px solid #000000;\n  border-radius: 0px;\n}\n\n  .right-aligned-header > .mat-content mat-panel-description {\n  flex-direction: row-reverse;\n  padding-right: 10px;\n}\n\n  .mat-expansion-indicator {\n  position: relative;\n  left: -2px;\n  top: -2px;\n}\n\n.toggle-days-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 60px;\n  height: 48px;\n  border-radius: 3px;\n  margin-top: 18px;\n}\n\n.no-margin[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.no-padding[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.edit-employee-headings[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n\ntable.work-days-table[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-left: 10px;\n  width: calc(100% - 20px);\n  border: 1px solid #ABABAB;\n  border-radius: 8px;\n  padding: 0px 0px 14px 14px;\n  margin-bottom: 20px;\n}\ntable.work-days-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 17px;\n  padding-top: 10px;\n}\n\n.work-days-details-table-container[_ngcontent-%COMP%] {\n  height: 700px;\n  overflow: auto;\n}\n\n.off-days-details-table-container[_ngcontent-%COMP%] {\n  height: 800px;\n  margin-bottom: 20px;\n  overflow: auto;\n}\n\ntable.work-days-details-table[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  border-radius: 8px;\n  border-spacing: 0px;\n  text-align: center;\n  overflow: hidden;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #ECECEC;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(26, 34, 51, 0.2);\n  height: 35px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, table.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 0px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n\n.radio[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  accent-color: #1A2233;  \n  transform: scale(1.5);\n  margin-right: 6px;\n}\n.radio-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n  margin-right: 36px;\n}\n\n.employee-calendar[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dx-scheduler-appointment-content[_ngcontent-%COMP%] {\n  width: calc((100vw - 300px) / 7);\n}\n.employee-calendar[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%] {\n  border-top: 8px solid #69A5C9;\n  background-color: #E8F2FC;\n  white-space: break-spaces;\n  width: calc((100vw - 300px) / 7);\n  display: flex;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #69A5C9;\n}\n.employee-calendar[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%], .employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%], .employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  white-space: break-spaces;\n}\n.employee-calendar[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%] {\n  background-color: #E2EFE6;\n  width: 100%;\n  height: 100%;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%]   .template-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 10px;\n  padding-bottom: 0px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #7EB699;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding: 0px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #A09A61;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]:after {\n  content: \"\";\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]   .template-wrap[_ngcontent-%COMP%] {\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.chq-cost-per-hour[_ngcontent-%COMP%] {\n  width: 135px;\n  display: block;\n}\n\n@media (max-width: 820px) {\n  .mobile-width-100[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    flex-basis: 100%;\n  }\n}\na.apply-team[_ngcontent-%COMP%] {\n  color: var(--xa-primary);\n  padding-top: 10px;\n  cursor: pointer;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 35px;\n  padding-left: 10px;\n}\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 85px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9vcGVyYXRpb25zL3NjaGVkdWxpbmcvc2NoZWR1bGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUdJO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQU1JO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKTjs7QUFRRTtFQUNFLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUxKOztBQU9BO0VBQ0ksdUJBQUE7RUFDQSw2QkFBQTtBQUpKOztBQVFFO0VBQ0UsZUFBQTtBQUxKO0FBT0U7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9FO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQUxKO0FBT0U7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMSjtBQU9FO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPRTtFQUNFLFlBQUE7QUFMSjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBTkY7O0FBVUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUFQRjs7QUFVQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFTQTtFQUNFLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFORjtBQVFFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFORjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEY7QUFNRTtFQUNFLHlCQUFBO0FBSko7QUFNRTtFQUNFLDZDQUFBO0VBQ0EsWUFBQTtBQUpKO0FBTUU7RUFDRSxpQkFBQTtBQUpKO0FBTUU7RUFDRSxpQkFBQTtBQUpKO0FBTUU7RUFDRSxnQkFBQTtFQUNBLE1BQUE7QUFKSjs7QUFTQTtFQUNFLG1CQUFBO0FBTkY7O0FBVUU7RUFDRSxxQkFBQSxFQUNBLFNBQUEsRUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFQSjtBQVVFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQVJKOztBQWNBO0VBQ0UsZUFBQTtBQVhGO0FBWUU7RUFDRSxnQ0FBQTtBQVZKO0FBWUc7RUFDQyw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVko7QUFXSTtFQUNFLGNBQUE7QUFUTjtBQVlHO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtBQVZKO0FBYUU7RUFDRSxZQUFBO0FBWEo7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFaSjtBQWFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVhOO0FBYUk7RUFDRSxjQUFBO0FBWE47QUFjRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFaSjtBQWNJO0VBQ0UsY0FBQTtBQVpOO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFjSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpOOztBQWlCQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBZEY7O0FBaUJBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBZEY7QUFDRjtBQWdCQTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZEY7QUFnQkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFkSiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lci1ib29raW5nLXR5cGUge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwOyAgICAgIFxyXG4gICAgICBtYXJnaW46IGNhbGMoNXB4ICsgMXZ3KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICBcclxuICAgIC5ib29raW5nLXR5cGUtd3JhcHBlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IGNhbGMoNXB4ICsgMXZ3KTtcclxuICAgICAgcGFkZGluZzogNjBweCA0MHB4O1xyXG4gIFxyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXItc2F2ZS1idXR0b24td3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDE4cHggMHB4O1xyXG4gICAgICBnYXA6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAxNzdweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuLmNvbXBldGVuY2llcy1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5jaHEtaW5wdXQtZGlzYWJsZWQgZGl2IGlucHV0e1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY29tcGV0ZW5jaWVzLWlucHV0e1xyXG4gIC5jaGVja2JveC13cmFwcGVye1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBsYWJlbC5jaGVja2JveHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICB9XHJcbiAgLmNoZWNrbWFya3tcclxuICAgIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zcGFuLWxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICBtYXQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIG1hdC1pY29uIHN2Z3tcclxuICAgIGhlaWdodDogMTNweDtcclxuICB9XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1leHBhbnNpb257XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAgLnJpZ2h0LWFsaWduZWQtaGVhZGVyID4gLm1hdC1jb250ZW50IG1hdC1wYW5lbC1kZXNjcmlwdGlvbntcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0ycHg7XHJcbiAgdG9wOiAtMnB4O1xyXG59XHJcblxyXG4udG9nZ2xlLWRheXMtYnV0dG9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG59XHJcblxyXG4ubm8tbWFyZ2lue1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm8tcGFkZGluZ3tcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hbGlnbi1jZW50ZXJ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmVkaXQtZW1wbG95ZWUtaGVhZGluZ3N7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxudGFibGUud29yay1kYXlzLXRhYmxle1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQkFCQUI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMTRweCAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHRke1xyXG4gICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG4ud29yay1kYXlzLWRldGFpbHMtdGFibGUtY29udGFpbmVye1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm9mZi1kYXlzLWRldGFpbHMtdGFibGUtY29udGFpbmVye1xyXG4gIGhlaWdodDogODAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxudGFibGUud29yay1kYXlzLWRldGFpbHMtdGFibGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xyXG4gIH1cclxuICB0ZCwgdGh7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMUEyMjMzMzM7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIHRke1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIHRkOmxhc3QtY2hpbGQsIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIHRoZWFkIHRyIHRoIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4ucmFkaW97XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLnJhZGlvLW9wdGlvbntcclxuICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcclxuICAgIGFjY2VudC1jb2xvcjogIzFBMjIzMztcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIElFIDkgKi9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gQ2FsZW5kYXIgRXh0cmEgY3NzXHJcbi5lbXBsb3llZS1jYWxlbmRhcntcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLmR4LXNjaGVkdWxlci1hcHBvaW50bWVudC1jb250ZW50e1xyXG4gICAgd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMzAwcHgpIC8gNyk7XHJcbiAgfVxyXG4gICAud29ya3tcclxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCAjNjlBNUM5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RjJGQztcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICB3aWR0aDogY2FsYygoMTAwdncgLSAzMDBweCkvNyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC5zdWJqZWN0IHNwYW57XHJcbiAgICAgIGNvbG9yOiAjNjlBNUM5O1xyXG4gICAgfVxyXG4gIH1cclxuICAgLndlZWtlbmQsIC5ob2xpZGF5LCAuZGlubmVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICB9XHJcblxyXG4gIC53ZWVrZW5ke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhvbGlkYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFRkU2O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAudGVtcGxhdGUtd3JhcHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLnN1YmplY3Qgc3BhbntcclxuICAgICAgY29sb3I6ICM3RUI2OTk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kaW5uZXJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5zdWJqZWN0IHNwYW57XHJcbiAgICAgIGNvbG9yOiNBMDlBNjE7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICBjb250ZW50OicnO1xyXG4gICAgfVxyXG4gICAgLnRlbXBsYXRlLXdyYXB7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2hxLWNvc3QtcGVyLWhvdXJ7XHJcbiAgd2lkdGg6IDEzNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo4MjBweCl7XHJcbiAgLm1vYmlsZS13aWR0aC0xMDB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgfSBcclxufVxyXG5hLmFwcGx5LXRlYW17XHJcbiAgY29sb3I6IHZhcigtLXhhLXByaW1hcnkpO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDg1cHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_settings_operations_operations_module_ts.js.map