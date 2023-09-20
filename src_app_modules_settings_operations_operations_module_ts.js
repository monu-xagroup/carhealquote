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
    'Other': 'Other'
};
const BookingTypeColors = [
    { value: 'Green', key: '#03A31B' },
    { value: 'Blue', key: '#3B82F6' },
    { value: 'Red', key: '#B53E3E' },
    { value: 'Orange', key: '#F88318' },
    { value: 'Yellow', key: '#FEF301' },
    { value: 'Violet', key: '#4b0082' },
    { value: 'Indigo', key: '#e5d0ff' },
];


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_model_chq_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/chq-settings-model */ 36252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












const _c0 = function (a0) { return { "background": a0 }; };
function BookingTypeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, ctx_r0.formModel.repairColor == null ? null : ctx_r0.formModel.repairColor.selectedOption.name));
} }
function BookingTypeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, ctx_r1.formModel.assessmentColor == null ? null : ctx_r1.formModel.assessmentColor.selectedOption.name));
} }
function BookingTypeComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, ctx_r2.formModel.otherColor == null ? null : ctx_r2.formModel.otherColor.selectedOption.name));
} }
function BookingTypeComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, ctx_r3.formModel.other1Color == null ? null : ctx_r3.formModel.other1Color.selectedOption.name));
} }
function BookingTypeComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, ctx_r4.formModel.other2Color == null ? null : ctx_r4.formModel.other2Color.selectedOption.name));
} }
function BookingTypeComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, ctx_r5.formModel.other3Color == null ? null : ctx_r5.formModel.other3Color.selectedOption.name));
} }
function BookingTypeComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, ctx_r6.formModel.other4Color == null ? null : ctx_r6.formModel.other4Color.selectedOption.name));
} }
class BookingTypeComponent {
    /**
       * constructor
       * @param router
       */
    constructor(settingsService, commonService, monitorService, cdr) {
        this.settingsService = settingsService;
        this.commonService = commonService;
        this.monitorService = monitorService;
        this.cdr = cdr;
        this.bookingTypeColorsLookup = [];
        this.showToast = true;
        this.saveButtonModel = {
            label: 'save',
            type: 'disabled',
            onclick: this.submitForm.bind(this)
        };
        this.newBookingTypeForm = (bookingTypeData) => {
            return {
                assessment: {
                    placeHolder: '',
                    label: '',
                    name: 'assessment',
                    idField: 'assessment',
                    value: '',
                    type: 'checkbox',
                    options: [{ label: '', id: 1, checked: bookingTypeData ? bookingTypeData.assessment : false }],
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]);
                        },
                        validationMessage: (error) => {
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
                    options: [{ label: '', id: 1, checked: bookingTypeData ? bookingTypeData.isRepair : false }],
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
                other: {
                    placeHolder: '',
                    label: '',
                    name: 'other',
                    idField: 'other',
                    value: '',
                    type: 'checkbox',
                    options: [{ label: '', id: 1, checked: bookingTypeData ? bookingTypeData.other : false }],
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[a-z\d\s]+$/i)]);
                        },
                        validationMessage: (error) => {
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]);
                        },
                        validationMessage: (error) => {
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
                    options: [{ label: '', id: 1, checked: bookingTypeData ? bookingTypeData.other1 : false }],
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[a-z\d\s]+$/i)]);
                        },
                        validationMessage: (error) => {
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]);
                        },
                        validationMessage: (error) => {
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
                    disabled: bookingTypeData && bookingTypeData.other1 ? false : true,
                },
                other2: {
                    placeHolder: '',
                    label: '',
                    name: 'other2',
                    idField: 'other2',
                    value: '',
                    type: 'checkbox',
                    options: [{ label: '', id: 1, checked: bookingTypeData ? bookingTypeData.other2 : false }],
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[a-z\d\s]+$/i)]);
                        },
                        validationMessage: (error) => {
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]);
                        },
                        validationMessage: (error) => {
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
                    options: [{ label: '', id: 1, checked: bookingTypeData ? bookingTypeData.other3 : false }],
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[a-z\d\s]+$/i)]);
                        },
                        validationMessage: (error) => {
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]);
                        },
                        validationMessage: (error) => {
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
                    options: [{ label: '', id: 1, checked: bookingTypeData ? bookingTypeData.other4 : false }]
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[a-z\d\s]+$/i)]);
                        },
                        validationMessage: (error) => {
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
                            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]);
                        },
                        validationMessage: (error) => {
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
                },
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
        }
        else {
            this.saveButtonModel.type = 'disabled';
        }
    }
    /**
   * check for form validation and set button type
   * @returns {void}
  */
    getBookingTypeColors() {
        this.settingsService.getBookingTypeColors().subscribe({
            next: (result) => {
                this.bookingTypeColorsLookup = result.data;
                this.getSettings();
            }, error: (err) => {
                this.commonService.hideLoading();
                this.monitorService.logException(err);
            }
        });
    }
    /**
     * get settings
     */
    getSettings() {
        this.settingsService.getSettings().subscribe({
            next: (result) => {
                let bookingTypes = null;
                if (result && result.data && result.data.bookingTypes && result.data.bookingTypes.length) {
                    bookingTypes = this.convertSettingsData(result.data.bookingTypes);
                    this.formModel = this.newBookingTypeForm(bookingTypes);
                    this.settingsService.isRepairChange.emit(bookingTypes.isRepair);
                }
                else {
                    this.formData.assessment = true;
                    this.formData.assessmentDuration = 30;
                    this.formModel = this.newBookingTypeForm(this.formData);
                }
                if (result && result.data && result.data.repairType && result.data.repairType.repairTypes) {
                    this.settingsService.isJobTasksEnabled.emit(result.data.repairType.repairTypes.length > 0 ? true : false);
                }
                this.commonService.hideLoading();
            },
            error: (err) => {
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
            }
            else {
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
        const isOther = this.formModel.other.options.some((opt) => opt.checked === true || opt.checked != '');
        const isAssessment = this.formModel.assessment.options.some((opt) => opt.checked === true);
        const isRepair = this.formModel.repair.options.some((opt) => opt.checked === true);
        const isOther1 = this.formModel.other1.options.some((opt) => opt.checked === true || opt.checked != '');
        const isOther2 = this.formModel.other2.options.some((opt) => opt.checked === true || opt.checked != '');
        const isOther3 = this.formModel.other3.options.some((opt) => opt.checked === true || opt.checked != '');
        const isOther4 = this.formModel.other4.options.some((opt) => opt.checked === true || opt.checked != '');
        if (isAssessment && (this.formModel.assessmentDuration.value == '' || parseInt(this.formModel.assessmentDuration.value.toString()) < 1 || this.formModel.assessmentColor.selectedOption.name === undefined)) {
            isValid = false;
        }
        if (isOther && (this.formModel.otherInput.value == '' || this.formModel.otherDuration.value == 0 || (Object.keys(this.formModel.otherColor.selectedOption).length === 0 || this.formModel.otherColor.selectedOption.name === ''))) {
            isValid = false;
        }
        if (isOther1 && (this.formModel.other1Input.value == '' || this.formModel.other1Duration.value == 0 || (Object.keys(this.formModel.other1Color.selectedOption).length === 0 || this.formModel.other1Color.selectedOption.name === ''))) {
            isValid = false;
        }
        if (isOther2 && (this.formModel.other2Input.value == '' || this.formModel.other2Duration.value == 0 || (Object.keys(this.formModel.other2Color.selectedOption).length === 0 || this.formModel.other2Color.selectedOption.name === ''))) {
            isValid = false;
        }
        if (isOther3 && (this.formModel.other3Input.value == '' || this.formModel.other3Duration.value == 0 || (Object.keys(this.formModel.other3Color.selectedOption).length === 0 || this.formModel.other3Color.selectedOption.name === ''))) {
            isValid = false;
        }
        if (isOther4 && (this.formModel.other4Input.value == '' || this.formModel.other4Duration.value == 0 || (Object.keys(this.formModel.other4Color.selectedOption).length === 0 || this.formModel.other4Color.selectedOption.name === ''))) {
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
            }
            else {
                this.formModel[output.name].value = output.value;
            }
            if (output.name == 'repair') {
                if (output.value == true) {
                    this.formModel.repairColor = Object.assign(Object.assign({}, this.formModel.repairColor), { disabled: false });
                }
                else {
                    this.formModel.repairColor = Object.assign(Object.assign({}, this.formModel.repairColor), { selectedOption: {}, disabled: true });
                }
            }
            if (output.name == 'assessment') {
                if (output.value == true) {
                    this.formModel.assessmentDuration = Object.assign(Object.assign({}, this.formModel.assessmentDuration), { disabled: false, value: 30 });
                    this.formModel.assessmentColor = Object.assign(Object.assign({}, this.formModel.assessmentColor), { disabled: false });
                }
                else {
                    this.formModel.assessmentDuration = Object.assign(Object.assign({}, this.formModel.assessmentDuration), { disabled: true, value: '' });
                    this.formModel.assessmentColor = Object.assign(Object.assign({}, this.formModel.assessmentColor), { selectedOption: {}, disabled: true });
                }
            }
            if (output.name == 'other') {
                if (output.name == 'other' && output.value == true) {
                    this.formModel.otherInput = Object.assign(Object.assign({}, this.formModel.otherInput), { disabled: false });
                    this.formModel.otherDuration = Object.assign(Object.assign({}, this.formModel.otherDuration), { disabled: false });
                    this.formModel.otherColor = Object.assign(Object.assign({}, this.formModel.otherColor), { disabled: false });
                }
                else {
                    this.formModel.otherInput = Object.assign(Object.assign({}, this.formModel.otherInput), { disabled: true, value: '' });
                    this.formModel.otherDuration = Object.assign(Object.assign({}, this.formModel.otherDuration), { disabled: true, value: '' });
                    this.formModel.otherColor = Object.assign(Object.assign({}, this.formModel.otherColor), { selectedOption: {}, disabled: true });
                }
            }
            if (output.name == 'other1') {
                if (output.name == 'other1' && output.value == true) {
                    this.formModel.other1Input = Object.assign(Object.assign({}, this.formModel.other1Input), { disabled: false });
                    this.formModel.other1Duration = Object.assign(Object.assign({}, this.formModel.other1Duration), { disabled: false });
                    this.formModel.other1Color = Object.assign(Object.assign({}, this.formModel.other1Color), { disabled: false });
                }
                else {
                    this.formModel.other1Input = Object.assign(Object.assign({}, this.formModel.other1Input), { disabled: true, value: '' });
                    this.formModel.other1Duration = Object.assign(Object.assign({}, this.formModel.other1Duration), { disabled: true, value: '' });
                    this.formModel.other1Color = Object.assign(Object.assign({}, this.formModel.other1Color), { selectedOption: {}, disabled: true });
                }
            }
            if (output.name == 'other2') {
                if (output.name == 'other2' && output.value == true) {
                    this.formModel.other2Input = Object.assign(Object.assign({}, this.formModel.other2Input), { disabled: false });
                    this.formModel.other2Duration = Object.assign(Object.assign({}, this.formModel.other2Duration), { disabled: false });
                    this.formModel.other2Color = Object.assign(Object.assign({}, this.formModel.other2Color), { disabled: false });
                }
                else {
                    this.formModel.other2Input = Object.assign(Object.assign({}, this.formModel.other2Input), { disabled: true, value: '' });
                    this.formModel.other2Duration = Object.assign(Object.assign({}, this.formModel.other2Duration), { disabled: true, value: '' });
                    this.formModel.other2Color = Object.assign(Object.assign({}, this.formModel.other2Color), { selectedOption: {}, disabled: true });
                }
            }
            if (output.name == 'other3') {
                if (output.name == 'other3' && output.value == true) {
                    this.formModel.other3Input = Object.assign(Object.assign({}, this.formModel.other3Input), { disabled: false });
                    this.formModel.other3Duration = Object.assign(Object.assign({}, this.formModel.other3Duration), { disabled: false });
                    this.formModel.other3Color = Object.assign(Object.assign({}, this.formModel.other3Color), { disabled: false });
                }
                else {
                    this.formModel.other3Input = Object.assign(Object.assign({}, this.formModel.other3Input), { disabled: true, value: '' });
                    this.formModel.other3Duration = Object.assign(Object.assign({}, this.formModel.other3Duration), { disabled: true, value: '' });
                    this.formModel.other3Color = Object.assign(Object.assign({}, this.formModel.other3Color), { selectedOption: {}, disabled: true });
                }
            }
            if (output.name == 'other4') {
                if (output.name == 'other4' && output.value == true) {
                    this.formModel.other4Input = Object.assign(Object.assign({}, this.formModel.other4Input), { disabled: false });
                    this.formModel.other4Duration = Object.assign(Object.assign({}, this.formModel.other4Duration), { disabled: false });
                    this.formModel.other4Color = Object.assign(Object.assign({}, this.formModel.other4Color), { disabled: false });
                }
                else {
                    this.formModel.other4Input = Object.assign(Object.assign({}, this.formModel.other4Input), { disabled: true, value: '' });
                    this.formModel.other4Duration = Object.assign(Object.assign({}, this.formModel.other4Duration), { disabled: true, value: '' });
                    this.formModel.other4Color = Object.assign(Object.assign({}, this.formModel.other4Color), { selectedOption: {}, disabled: true });
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
        const isOther = (this.formModel.other.options.some((opt) => opt.checked === true) || this.formModel.otherInput.value != '');
        const isOther1 = (this.formModel.other1.options.some((opt) => opt.checked === true) || this.formModel.other1Input.value != '');
        const isOther2 = (this.formModel.other2.options.some((opt) => opt.checked === true) || this.formModel.other2Input.value != '');
        const isOther3 = (this.formModel.other3.options.some((opt) => opt.checked === true) || this.formModel.other3Input.value != '');
        const isOther4 = (this.formModel.other4.options.some((opt) => opt.checked === true) || this.formModel.other4Input.value != '');
        const payload = [];
        const data = {
            assessment: this.formModel.assessment.options.some((opt) => opt.checked === true),
            assessmentDuration: this.formModel.assessmentDuration.value ? parseInt(this.formModel.assessmentDuration.value.toString()) : 0,
            assessmentColor: this.formModel.assessmentColor.selectedOption.name,
            assessmentId: this.formData.assessmentId,
            isRepair: this.formModel.repair.options.some((opt) => opt.checked === true),
            repairColor: this.formModel.repairColor.selectedOption.name,
            repairId: this.formData.repairId,
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
            other4Id: this.formData.other4Id,
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
        if (payload.length == 0)
            return;
        this.commonService.showLoading();
        this.settingsService.saveNewBookingType({
            'bookingTypes': payload
        }).subscribe({
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
            error: (err) => {
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
        return selected !== null && selected !== void 0 ? selected : {};
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
        const values = Object.values(this.formModel).filter((value, index) => Object.keys(this.formModel)[index].includes('Color'))
            .filter(x => { var _a; return (_a = x.selectedOption) === null || _a === void 0 ? void 0 : _a.name; })
            .map(y => { var _a; return ({ 'name': y.name, 'color': (_a = y.selectedOption) === null || _a === void 0 ? void 0 : _a.name }); })
            .reduce((acc, cur) => (Object.assign(Object.assign({}, acc), { [cur.name]: cur.color })), {});
        colorOptions.forEach((ele) => {
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
        this.formModel.assessmentColor = Object.assign({}, this.formModel.assessmentColor);
        this.formModel.repairColor = Object.assign({}, this.formModel.repairColor);
        this.formModel.otherColor = Object.assign({}, this.formModel.otherColor);
        this.formModel.other1Color = Object.assign({}, this.formModel.other1Color);
        this.formModel.other2Color = Object.assign({}, this.formModel.other2Color);
        this.formModel.other3Color = Object.assign({}, this.formModel.other3Color);
        this.formModel.other4Color = Object.assign({}, this.formModel.other4Color);
    }
    /**
    * on Destroy
    */
    ngOnDestroy() {
        this.showToast = false;
        this.submitForm();
    }
}
BookingTypeComponent.ɵfac = function BookingTypeComponent_Factory(t) { return new (t || BookingTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef)); };
BookingTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: BookingTypeComponent, selectors: [["app-booking-type"]], decls: 94, vars: 42, consts: [[1, "page-container-booking-type"], [1, "booking-type-wrapper"], [1, "booking-type-form"], [1, "main-div"], [1, "header-label"], [1, "main-container"], [1, "left-div", "fx-1"], [1, "repair-wrapper", "fx-row", "booking-type-container"], [1, "repair-checkbox"], [3, "inputModel", "controlOutput"], [1, "input-field", "text-only"], [1, "color-dropdown"], [3, "dropdownModel", "selected"], ["class", "color", 4, "ngIf"], [1, "vector"], [1, "assessment-wrapper", "fx-row", "booking-type-container"], [1, "assessment-checkbox"], [1, "time-wrapper"], [1, "time-input", 3, "inputModel", "controlOutput"], [1, "other-wrapper", "fx-row", "booking-type-container"], [1, "other-checkbox"], [1, "input-field"], [1, "vector", "hr-show-sm"], [1, "right-div", "fx-1"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "footer-save-button-wrapper", 3, "buttonModel"], [1, "color"], [3, "ngStyle"]], template: function BookingTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_11_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_17_listener($event) { return ctx.selectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, BookingTypeComponent_div_18_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_22_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "chq-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_28_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_30_listener($event) { return ctx.selectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, BookingTypeComponent_div_31_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_35_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_37_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "chq-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_39_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_41_listener($event) { return ctx.selectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, BookingTypeComponent_div_42_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_46_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_48_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "chq-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_50_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_52_listener($event) { return ctx.selectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, BookingTypeComponent_div_53_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_58_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_60_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "chq-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_62_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_64_listener($event) { return ctx.selectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, BookingTypeComponent_div_65_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_69_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_71_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "chq-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_73_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_75_listener($event) { return ctx.selectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, BookingTypeComponent_div_76_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_80_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_82_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "chq-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function BookingTypeComponent_Template_chq_input_controlOutput_84_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "chq-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function BookingTypeComponent_Template_chq_dropdown_selected_86_listener($event) { return ctx.selectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, BookingTypeComponent_div_87_Template, 2, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "chq-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 36, "booking_type_header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.repair);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 38, "repair"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropdownModel", ctx.formModel.repairColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formModel.repairColor == null ? null : ctx.formModel.repairColor.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.assessment);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 40, "assessment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.assessmentDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropdownModel", ctx.formModel.assessmentColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formModel.assessmentColor == null ? null : ctx.formModel.assessmentColor.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.otherInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.otherDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropdownModel", ctx.formModel.otherColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formModel.otherColor == null ? null : ctx.formModel.otherColor.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other1Input);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other1Duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropdownModel", ctx.formModel.other1Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formModel.other1Color == null ? null : ctx.formModel.other1Color.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other2Input);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other2Duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropdownModel", ctx.formModel.other2Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formModel.other2Color == null ? null : ctx.formModel.other2Color.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other3Input);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other3Duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropdownModel", ctx.formModel.other3Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formModel.other3Color == null ? null : ctx.formModel.other3Color.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other4Input);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputModel", ctx.formModel.other4Duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropdownModel", ctx.formModel.other4Color);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formModel.other4Color == null ? null : ctx.formModel.other4Color.selectedOption.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx.saveButtonModel);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_4__.ChqInputComponent, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.ChqDropdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_6__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n  padding: calc(5px + 1.5vw);\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background: var(--xa-tab-default-content);\n  border-radius: 10px;\n  border: 1px solid var(--xa-form-border);\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: start;\n  padding: 30px 40px;\n  grid-gap: 30px;\n  gap: 30px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .repair-wrapper[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color-dropdown[_ngcontent-%COMP%] {\n  width: 180px;\n  max-width: 180px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  width: 85px;\n  max-width: 85px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-width: 180px;\n  max-width: 248px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .input-field.text-only[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .repair-checkbox[_ngcontent-%COMP%], .page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .assessment-checkbox[_ngcontent-%COMP%], .page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .other-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  border: 2px solid var(--xa-dark-gray);\n  border-radius: 50%;\n  margin-bottom: 5px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  border: 2px solid var(--xa-white);\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .span-label[_ngcontent-%COMP%] {\n  color: #0B0E15;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  margin: 30px 0px 0px 40px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-container[_ngcontent-%COMP%] {\n  align-items: end;\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.footer-save-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0px;\n  grid-gap: 10px;\n  gap: 10px;\n  width: 177px;\n  height: 40px;\n  margin-right: 1.5vw;\n  border-radius: 8px;\n}\n.left-div[_ngcontent-%COMP%], .right-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 30px;\n  gap: 30px;\n}\n.hr-show-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1317px) {\n  .hr-show-sm[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBCQUFBO0FBQUo7QUFHTTtFQUNFLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQURSO0FBR1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBRFY7QUFJUTtFQUNFLGlCQUFBO0FBRlY7QUFLUTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QUFIVjtBQU1RO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSlY7QUFPUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBTFY7QUFRUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTlY7QUFRVTtFQUNFLG1CQUFBO0FBTlo7QUFTUTtFQUNFLGtCQUFBO0FBUFY7QUFVUTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVJWO0FBU1U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFQWjtBQVdRO0VBQ0UsY0FBQTtBQVRWO0FBWVE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFWVjtBQWdCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBZEo7QUFtQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoQkY7QUFtQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQWhCRjtBQW1CQTtFQUNFLGFBQUE7QUFoQkY7QUFtQkE7RUFDRTtJQUNFLHlCQUFBO0VBaEJGO0FBQ0YiLCJmaWxlIjoiYm9va2luZy10eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyLWJvb2tpbmctdHlwZSB7XHJcbiAgLmJvb2tpbmctdHlwZS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IGNhbGMoNXB4ICsgMS41dncpO1xyXG5cclxuICAgIC5ib29raW5nLXR5cGUtZm9ybSB7XHJcbiAgICAgIC5tYWluLWRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtdGFiLWRlZmF1bHQtY29udGVudCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1mb3JtLWJvcmRlcik7XHJcblxyXG4gICAgICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgICAgICAgIGdhcDogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXBhaXItd3JhcHBlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52ZWN0b3Ige1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjYsIDM0LCA1MSwgMC4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2xvci1kcm9wZG93biB7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWUtd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICAgIG1heC13aWR0aDogODVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyNDhweDtcclxuXHJcbiAgICAgICAgICAmLnRleHQtb25seSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlcGFpci1jaGVja2JveCwgLmFzc2Vzc21lbnQtY2hlY2tib3gsIC5vdGhlci1jaGVja2JveCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sb3Ige1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94IC5zcGFuLWxhYmVsIHtcclxuICAgICAgICAgIGNvbG9yOiAjMEIwRTE1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggMHB4IDBweCA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib29raW5nLXR5cGUtY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5mb290ZXItc2F2ZS1idXR0b24td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMThweCAwcHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHdpZHRoOiAxNzdweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjV2dztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5sZWZ0LWRpdiwgLnJpZ2h0LWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMzBweDtcclxufVxyXG5cclxuLmhyLXNob3ctc20ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzE3cHgpIHtcclxuICAuaHItc2hvdy1zbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var src_app_dialogs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/add-job-dialog/add-job-dialog.component */ 51656);
/* harmony import */ var src_app_dialogs_add_task_dialog_add_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/add-task-dialog/add-task-dialog.component */ 54447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_jobs_settings_job_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/jobs-settings/job-settings.service */ 31651);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-toggle/chq-toggle.component */ 65513);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);















const _c0 = function (a0) { return { "disable": a0 }; };
function JobsTasksComponent_div_5_div_1_div_10_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "chq-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ToggleChange", function JobsTasksComponent_div_5_div_1_div_10_div_13_Template_chq_toggle_ToggleChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r7.onToggleChange(item_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, "damage_detection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", item_r3.options.isAIAnalysisEnabled)("name", "damageDetection")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, !(item_r3.options && item_r3.options.uploadImagesOptions !== null && item_r3.options.uploadImagesOptions.minNumOfPhotos >= 1 && ctx_r6.isBodyOrPaint)))("disabled", !(item_r3.options && item_r3.options.uploadImagesOptions !== null && item_r3.options.uploadImagesOptions.minNumOfPhotos >= 1 && ctx_r6.isBodyOrPaint));
} }
const _c1 = function (a0) { return { "border-color": a0 }; };
function JobsTasksComponent_div_5_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "chq-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ToggleChange", function JobsTasksComponent_div_5_div_1_div_10_Template_chq_toggle_ToggleChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r11.onToggleChange(item_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "chq-toggle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ToggleChange", function JobsTasksComponent_div_5_div_1_div_10_Template_chq_toggle_ToggleChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r14.onToggleChange(item_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, JobsTasksComponent_div_5_div_1_div_10_div_13_Template, 5, 9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_1_div_10_Template_chq_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r16.openJobPopup(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "chq-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_1_div_10_Template_chq_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r18.deleteJob(item_r3.jobGuid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c1, item_r3.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 12, "photos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r3.options.isAIAnalysisEnabled)("checked", item_r3.options.isUploadPhotosRequired)("name", "photos")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c0, item_r3.options.isAIAnalysisEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 14, "timer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", item_r3.options.isTimerEnabled)("name", "timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.isBodyOrPaint);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r4.editButtonModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r4.deleteButtonModel);
} }
function JobsTasksComponent_div_5_div_1_div_11_ng_container_1_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_1_div_11_ng_container_1_tr_5_Template_td_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30); const data2_r27 = restoredCtx.$implicit; const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r28.handleCellClicked(item_r3, data2_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data2_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data2_r27.name);
} }
function JobsTasksComponent_div_5_div_1_div_11_ng_container_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_1_div_11_ng_container_1_tr_6_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const data_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r31.openAddTaskPopup(item_r3.jobGuid, false, item_r3, data_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c0, ctx_r26.getTasksLength(item_r3) >= 20))("svgIcon", "plus-active");
} }
function JobsTasksComponent_div_5_div_1_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, JobsTasksComponent_div_5_div_1_div_11_ng_container_1_tr_5_Template, 3, 1, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, JobsTasksComponent_div_5_div_1_div_11_ng_container_1_tr_6_Template, 4, 4, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r21.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r21.tasks.length !== 0)("ngIfElse", _r23);
} }
function JobsTasksComponent_div_5_div_1_div_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_1_div_11_ng_template_2_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const data_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r37.openAddTaskPopup(item_r3.jobGuid, false, item_r3, data_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "plus-active");
} }
function JobsTasksComponent_div_5_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, JobsTasksComponent_div_5_div_1_div_11_ng_container_1_Template, 7, 4, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, JobsTasksComponent_div_5_div_1_div_11_ng_template_2_Template, 5, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.repairServiceTypeTasks && item_r3.repairServiceTypeTasks.length)("ngIfElse", _r23);
} }
const _c2 = function (a0) { return { "background": a0 }; };
const _c3 = function (a0) { return { "active": a0 }; };
function JobsTasksComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_1_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r42.leftClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_1_Template_mat_icon_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43); const item_r3 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r44.expand(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, JobsTasksComponent_div_5_div_1_div_10_Template, 17, 20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, JobsTasksComponent_div_5_div_1_div_11_Template, 4, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_div_5_div_1_Template_mat_icon_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r45.rightClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c0, ctx_r2.startIndex === 0))("svgIcon", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c2, item_r3.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "dropdown")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c3, item_r3.expandControl));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.expandControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.filterRepairtypes(item_r3.repairServiceTypeTasks));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c0, ctx_r2.lastIndex === ctx_r2.repairTypes.length - 1))("svgIcon", "dropdown");
} }
function JobsTasksComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, JobsTasksComponent_div_5_div_1_Template, 15, 18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.jobsData);
} }
function JobsTasksComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
} }
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
            icon: 'delete',
        };
        this.editButtonModel = {
            label: '',
            type: 'outline',
            icon: 'edit',
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
            this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(true);
        }
    }
    /**
     * on init
     */
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.monitorService.logEvent('ngOnInit', ['JobsTasksComponent', 'addenda-repair']);
            this.commonService.showLoading();
            this.getJobs();
        });
    }
    /**
   * get repair Types
   */
    getJobs() {
        this.CallingAPI = true;
        this.jobSettingsService.getJobs().subscribe({
            next: (result) => {
                if (result) {
                    this.CallingAPI = false;
                    this.jobsLength = result.data.length;
                    if (this.jobsLength >= 20) {
                        this.addJobButtonModel.type = 'disabled';
                    }
                    else {
                        this.addJobButtonModel.type = 'primary';
                    }
                    result.data = result.data.map((x) => {
                        x.expandControl = false;
                        return x;
                    });
                    for (let i = 0; i < result.data.length; i++) {
                        const taskMaxLength = Math.max(...result.data[i].repairServiceTypeTasks.map(x => x.tasks.length));
                        this.repairTypes = [...this.repairTypes, ...result.data[i].repairServiceTypeTasks.filter(x => !this.repairTypes.some(r => r.id === x.id)).map((x) => {
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
                                for (let index = 0; index < (taskMaxLength - currentTaskLength); index++) {
                                    result.data[i].repairServiceTypeTasks[j].tasks.push(tempObj);
                                }
                            }
                        }
                    }
                    if (this.repairTypes.length < 4) {
                        this.lastIndex = this.repairTypes.length - 1;
                    }
                    if (this.jobsLength == 0) {
                        this.settingsService.getSettings().subscribe({
                            next: (result) => {
                                if (result && result.data && result.data.repairType && result.data.repairType.repairTypes) {
                                    this.isBodyOrPaint = result.data.repairType.repairTypes.includes(1) || result.data.repairType.repairTypes.includes(2);
                                }
                                this.commonService.hideLoading();
                            },
                            error: (err) => {
                                this.commonService.hideLoading();
                                this.monitorService.logException(err);
                            }
                        });
                    }
                    else {
                        this.isBodyOrPaint = this.repairTypes.some(x => { var _a, _b; return ((_a = x.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == 'body' || ((_b = x.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == 'paint'; });
                    }
                    this.enabledRepairTypes = this.repairTypes.map(x => x.id);
                    this.jobsData = result.data;
                    this.mediator = this.repairTypes.length < 4 ? this.repairTypes : [this.repairTypes[0], this.repairTypes[1], this.repairTypes[2], this.repairTypes[3]];
                    this.settingsService.isRepairChange.emit(true);
                    this.commonService.hideLoading();
                }
            },
            error: (err) => {
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
        return repairServiceTypeTasks === null || repairServiceTypeTasks === void 0 ? void 0 : repairServiceTypeTasks.filter(r => this.mediator.some(m => m.id === r.id));
    }
    /**
    * get repair Types
    */
    getTasksLength(jobData) {
        return (jobData === null || jobData === void 0 ? void 0 : jobData.repairServiceTypeTasks.map(r => r.tasks.filter(t => t.name !== '').length).reduce((acc, ele) => acc + ele, 0)) || 0;
    }
    /**
   * cellClickedCallback
   */
    handleCellClicked(jobData, taskData) {
        var _a, _b, _c;
        if (taskData.id === undefined)
            return;
        const checkedRepairTypes = ((_c = (_b = (_a = jobData === null || jobData === void 0 ? void 0 : jobData.repairServiceTypeTasks) === null || _a === void 0 ? void 0 : _a.flatMap(r => r.tasks.filter(t => t.id === taskData.id).length ? r : null)) === null || _b === void 0 ? void 0 : _b.filter(r => r !== null)) === null || _c === void 0 ? void 0 : _c.map(r => r.id)) || [];
        const data = {
            jobGuid: jobData === null || jobData === void 0 ? void 0 : jobData.jobGuid,
            createdByUserName: jobData === null || jobData === void 0 ? void 0 : jobData.createdByUserName,
            taskData,
            checkedRepairTypes,
            enabledRepairTypes: this.enabledRepairTypes,
            tasksLength: this.getTasksLength(jobData)
        };
        this.openAddTaskPopup(data, true);
    }
    /**
      Opens a dialog box for the repair estimate operation component with the specified data and panel class.
      @returns {void}
    */
    openJobPopup(data) {
        if (!data && this.jobsLength >= 20)
            return;
        const dialogRef = this.dialog.open(src_app_dialogs_add_job_dialog_add_job_dialog_component__WEBPACK_IMPORTED_MODULE_0__.AddJobDialogComponent, {
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
            next: (response) => {
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
        if (item && this.getTasksLength(item) >= 20)
            return;
        const dialogRef = this.dialog.open(src_app_dialogs_add_task_dialog_add_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__.AddTaskDialogComponent, {
            data: isEdit ? data : {
                jobGuid: data,
                enabledRepairTypes: this.enabledRepairTypes,
                tasksLength: this.getTasksLength(item),
                checkedRepairTypes: [repairType.id]
            },
            width: '480px',
            maxWidth: '480px',
            height: 'auto',
            panelClass: 'operation-panel',
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe({
            next: (response) => {
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
        var _a, _b, _c, _d;
        let shouldCallUpdateJob = true;
        if (data != null && data.jobGuid) {
            const jobsData = {
                name: data.name,
                color: data.color,
                options: {
                    isUploadPhotosRequired: (_a = data === null || data === void 0 ? void 0 : data.options) === null || _a === void 0 ? void 0 : _a.isUploadPhotosRequired,
                    isAIAnalysisEnabled: (_b = data === null || data === void 0 ? void 0 : data.options) === null || _b === void 0 ? void 0 : _b.isAIAnalysisEnabled,
                    isTimerEnabled: (_c = data === null || data === void 0 ? void 0 : data.options) === null || _c === void 0 ? void 0 : _c.isTimerEnabled,
                    uploadImagesOptions: (_d = data === null || data === void 0 ? void 0 : data.options) === null || _d === void 0 ? void 0 : _d.uploadImagesOptions
                }
            };
            if (e && e.name == 'photos') {
                if (e.checked) {
                    shouldCallUpdateJob = false;
                    if (data === null || data === void 0 ? void 0 : data.options) {
                        data.options.isUploadPhotosRequired = true;
                    }
                    this.openJobPopup(data);
                    this.getJobs();
                }
                else {
                    jobsData.options.isUploadPhotosRequired = false;
                    jobsData.options.uploadImagesOptions = null;
                }
            }
            else if (e && e.name == 'timer') {
                if (e.checked) {
                    jobsData.options.isTimerEnabled = true;
                }
                else {
                    jobsData.options.isTimerEnabled = false;
                }
            }
            else if (e && e.name == 'damageDetection') {
                if (e.checked) {
                    jobsData.options.isAIAnalysisEnabled = true;
                }
                else {
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
                    error: (err) => {
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
        }
        else if (this.lastIndex === 0) {
            this.lastIndex = this.repairTypes.length - 1;
            this.startIndex--;
            this.mediator.unshift(this.repairTypes[this.startIndex]);
            this.mediator.pop();
        }
        else {
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
        }
        else if (this.startIndex === this.repairTypes.length - 1) {
            this.startIndex = 0;
            this.lastIndex++;
            this.mediator.shift();
            this.mediator.push(this.repairTypes[this.lastIndex]);
        }
        else {
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
        dialogRef.afterClosed().subscribe((result) => {
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
}
JobsTasksComponent.ɵfac = function JobsTasksComponent_Factory(t) { return new (t || JobsTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_jobs_settings_job_settings_service__WEBPACK_IMPORTED_MODULE_4__.JobSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingsService)); };
JobsTasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: JobsTasksComponent, selectors: [["app-jobs-tasks"]], decls: 11, vars: 6, consts: [[1, "page-container-jobs-tasks", "fx-col", "h-100"], [1, "add-btn", "d-flex", "fx-0"], [3, "buttonModel", "click"], ["class", "list-container justify-space-between fx-1 overflow-auto", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "list-container", "justify-space-between", "fx-1", "overflow-auto"], ["class", "job fx-row", 4, "ngFor", "ngForOf"], [1, "job", "fx-row"], [1, "left-container"], [1, "nav-left-toggle"], [3, "ngClass", "svgIcon", "click"], [1, "controls"], [1, "frame"], [1, "collapse-frame", 3, "ngStyle"], [1, "label"], ["size", "sm", "color", "white", 3, "svgIcon", "ngClass", "click"], ["class", "expanded-block", 3, "ngStyle", 4, "ngIf"], ["class", "job-content fx-1", 4, "ngFor", "ngForOf"], [1, "right-container"], [1, "nav-right-toggle"], [1, "expanded-block", 3, "ngStyle"], [1, "toggle-frame"], [1, "toggle"], [1, "label-toggle"], [3, "disabled", "checked", "name", "ngClass", "ToggleChange"], [3, "checked", "name", "ToggleChange"], ["class", "toggle", 4, "ngIf"], [1, "btn-group"], [1, "editbtn", 3, "buttonModel", "click"], [1, "dltbtn", 3, "buttonModel", "click"], [3, "checked", "name", "ngClass", "disabled", "ToggleChange"], [1, "job-content", "fx-1"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "table-item"], [1, "table-header"], [4, "ngFor", "ngForOf"], ["class", "plus-btn-sticky", 4, "ngIf", "ngIfElse"], [3, "click"], [1, "plus-btn-sticky"], [1, "plus-btn-border"], [1, "plus-buttons-block"], [1, "vector", 3, "ngClass", "svgIcon", "click"], [1, "plus-btn-block"], [1, "plus-btn-border", "remove-top-border"], [1, "add-task-buttons-block"], [3, "svgIcon", "click"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]], template: function JobsTasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "chq-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobsTasksComponent_Template_chq_button_click_2_listener() { return ctx.openJobPopup(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, JobsTasksComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, JobsTasksComponent_div_6_Template, 9, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx.addJobButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, "add_job"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.jobsLength >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.jobsLength === 0 && !ctx.CallingAPI);
    } }, directives: [_widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_6__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_7__.ChqToggleComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".page-container-jobs-tasks[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  margin: calc(5px + 1.5vw);\n  margin-bottom: 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]:not(:first-child)   .left-container[_ngcontent-%COMP%]   .nav-left-toggle[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]:not(:first-child)   .right-container[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]:not(:first-child)   .table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\n  max-height: 360px;\n  overflow: auto;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%] {\n  background: var(--xa-white);\n  border: 1px solid var(--xa-form-border);\n  border-radius: 10px;\n  margin: calc(5px + 1.5vw);\n  margin-top: 0;\n  padding-top: 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .nav-left-toggle[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 62px;\n  background: var(--xa-lighter-gray);\n  border-radius: 10px 0px 0px 10px;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  justify-content: center;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .nav-left-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  height: 207px;\n  z-index: 1;\n  position: relative;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .collapse-frame[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 79px;\n  border-radius: 0px 10px 10px 0px;\n  height: 100%;\n  margin-right: 5px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .collapse-frame[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  writing-mode: tb-rl;\n  transform: rotate(180deg);\n  height: 150px;\n  color: var(--xa-white);\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .collapse-frame[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(270deg);\n  transition: 0.5s;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .collapse-frame[_ngcontent-%COMP%]   mat-icon.active[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 2px solid;\n  border-radius: 0px 12px 12px 0px;\n  position: absolute;\n  padding-right: 1rem;\n  height: 204px;\n  background-color: var(--xa-white);\n  top: 0;\n  left: 70px;\n  width: 187px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .toggle-frame[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  height: 24px;\n  grid-gap: 12px;\n  gap: 12px;\n  display: flex;\n  padding-top: 0.5rem;\n  padding-left: 1.2rem;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .toggle-frame[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]   .label-toggle[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n  letter-spacing: 0em;\n  text-align: left;\n  width: 106px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  margin-top: 0.5rem;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .editbtn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 40px;\n  top: 153px;\n  left: 104px;\n  padding-left: 30px;\n  border-radius: 8px;\n  border: 1px;\n  grid-gap: 10px;\n  gap: 10px;\n  box-shadow: 0px 1px 3px 0px rgba(96, 108, 128, 0.0509803922);\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .expanded-block[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .dltbtn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 40px;\n  top: 153px;\n  left: 156px;\n  padding-left: 10px;\n  border-radius: 8px;\n  border: 1px;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .nav-right-toggle[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 62px;\n  background: var(--xa-lighter-gray);\n  border-radius: 0px 10px 10px 0px;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  justify-content: center;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .nav-right-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(270deg);\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  line-height: 40px;\n  text-align: left;\n  font-size: 16px;\n  padding: 10px 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%]:not(.plus-btn-border) {\n  background-color: #F6F6F6;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 50px;\n  text-align: left;\n  font-size: 14px;\n  padding: 10px 20px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .plus-buttons-block[_ngcontent-%COMP%] {\n  height: 30px;\n  border: 1px solid var(--xa-light-gray);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   .plus-btn-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background-color: white;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .add-task-buttons-block[_ngcontent-%COMP%] {\n  height: 207px;\n  border: 1px solid var(--xa-light-gray);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 12%;\n}\n.page-container-jobs-tasks[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 2px solid #ededed !important;\n  border-collapse: collapse;\n}\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border: none !important;\n  padding: 10px 2px !important;\n}\n  .disable:hover label > span {\n  cursor: not-allowed !important;\n}\nmat-icon.disable[_ngcontent-%COMP%] {\n  filter: opacity(0.5);\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMtdGFza3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHUTtFQUNJLHdCQUFBO0FBRFo7QUFJUTtFQUNJLDZCQUFBO0FBRlo7QUFLUTtFQUNJLGFBQUE7QUFIWjtBQU9JO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBTFI7QUFRSTtFQUNJLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBTlI7QUFRUTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFOWjtBQVFZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQU5oQjtBQVFnQjtFQUNJLHdCQUFBO0FBTnBCO0FBVVk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBUmhCO0FBVWdCO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVJwQjtBQVVvQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBUnhCO0FBV3dCO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVDVCO0FBWXdCO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQVY1QjtBQWF3QjtFQUNJLHdCQUFBO0FBWDVCO0FBZ0JnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBZHBCO0FBaUJ3QjtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBZjVCO0FBaUI0QjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWZoQztBQW9Cb0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFsQnhCO0FBb0J3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsNERBQUE7QUFsQjVCO0FBcUJ3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBbkI1QjtBQTJCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUF6QmhCO0FBMkJnQjtFQUNJLHlCQUFBO0FBekJwQjtBQStCWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQTdCaEI7QUFnQ29CO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTlCeEI7QUFrQ2dCO0VBQ0kseUJBQUE7QUFoQ3BCO0FBbUNnQjtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWpDcEI7QUFtQ29CO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWpDeEI7QUFxQ2dCO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFuQ3BCO0FBMENJO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXhDUjtBQTJDSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUF6Q1I7QUEyQ1E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQXpDWjtBQThDQTtFQUNJLHlCQUFBO0FBM0NKO0FBOENBOztFQUVJLG9DQUFBO0VBQ0EseUJBQUE7QUEzQ0o7QUErQ0k7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0FBNUNSO0FBaURJO0VBQ0ksOEJBQUE7QUE5Q1I7QUFrREE7RUFDSSxvQkFBQTtFQUNBLDhCQUFBO0FBL0NKIiwiZmlsZSI6ImpvYnMtdGFza3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXItam9icy10YXNrcyB7XHJcbiAgICAuYWRkLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luOiBjYWxjKDVweCArIDEuNXZ3KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtY29udGFpbmVyIC5qb2I6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgIC5sZWZ0LWNvbnRhaW5lciAubmF2LWxlZnQtdG9nZ2xlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWNvbnRhaW5lciAuam9iIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1mb3JtLWJvcmRlcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW46IGNhbGMoNXB4ICsgMS41dncpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgIC5sZWZ0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgICAgIC5uYXYtbGVmdC10b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodGVyLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRyb2xzIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZyYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29sbGFwc2UtZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB0Yi1ybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leHBhbmRlZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMnB4IDEycHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODdweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZS1mcmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwtdG9nZ2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWRpdGJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTUzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoOTYsIDEwOCwgMTI4LCAwLjA1MDk4MDM5MjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGx0YnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAubmF2LXJpZ2h0LXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5qb2ItY29udGVudCB7XHJcbiAgICAgICAgICAgIC50YWJsZS1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRyOm50aC1jaGlsZChldmVuKT50ZDpub3QoLnBsdXMtYnRuLWJvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wbHVzLWJ1dHRvbnMtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGx1cy1idG4tc3RpY2t5IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC10YXNrLWJ1dHRvbnMtYmxvY2sge1xyXG4gICAgICAgIGhlaWdodDogMjA3cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubm8tZGF0YS13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEyJTtcclxuXHJcbiAgICAgICAgLm5vLWRhdGEtY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRoLFxyXG50ZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM3LCAyMzcsIDIzNykgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRyOmxhc3QtY2hpbGQge1xyXG4gICAgdGQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGlzYWJsZTpob3ZlciB7XHJcbiAgICBsYWJlbD5zcGFuIHtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1pY29uLmRpc2FibGUge1xyXG4gICAgZmlsdGVyOiBvcGFjaXR5KDAuNSk7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var _booking_type_booking_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-type/booking-type.component */ 59994);
/* harmony import */ var _jobs_tasks_jobs_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs-tasks/jobs-tasks.component */ 89959);
/* harmony import */ var _operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations-layout/operations-layout.component */ 29428);
/* harmony import */ var _repair_type_repair_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repair-type/repair-type.component */ 98598);
/* harmony import */ var _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduling/scheduling.component */ 64962);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
















const casesRoutes = [
    {
        path: '',
        component: _booking_type_booking_type_component__WEBPACK_IMPORTED_MODULE_3__.BookingTypeComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver }
    },
    {
        path: 'repair-type',
        component: _repair_type_repair_type_component__WEBPACK_IMPORTED_MODULE_6__.RepairTypeComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver }
    },
    {
        path: 'jobs-tasks',
        component: _jobs_tasks_jobs_tasks_component__WEBPACK_IMPORTED_MODULE_4__.JobsTasksComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver }
    },
    {
        path: 'scheduling',
        component: _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_7__.SchedulingComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver }
    },
];
class OperationsModule {
}
OperationsModule.ɵfac = function OperationsModule_Factory(t) { return new (t || OperationsModule)(); };
OperationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: OperationsModule });
OperationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(casesRoutes),
            src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule
        ], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](OperationsModule, { declarations: [_operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_5__.OperationsLayoutComponent,
        _booking_type_booking_type_component__WEBPACK_IMPORTED_MODULE_3__.BookingTypeComponent,
        _repair_type_repair_type_component__WEBPACK_IMPORTED_MODULE_6__.RepairTypeComponent,
        _jobs_tasks_jobs_tasks_component__WEBPACK_IMPORTED_MODULE_4__.JobsTasksComponent,
        _scheduling_scheduling_component__WEBPACK_IMPORTED_MODULE_7__.SchedulingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_5__.OperationsLayoutComponent,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule] }); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widgets/chq-toggle/chq-toggle.component */ 65513);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function RepairTypeComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "chq-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ToggleChange", function RepairTypeComponent_ng_container_9_Template_chq_toggle_ToggleChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.onToggleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r1.checked || false)("name", item_r1.id);
} }
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
    }
    /**
     * on init
     */
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.monitorService.logEvent('ngOnInit', ['RepairTypeComponent', 'addenda-repair']);
            this.commonService.showLoading();
            this.getRepairTypes();
        });
    }
    /**
     * get repair Types
     */
    getRepairTypes() {
        this.bookingService.getRepairTypes().subscribe({
            next: (result) => {
                if (result) {
                    this.repairTypesData = result.data;
                    this.getSettings();
                }
            },
            error: (err) => {
                this.commonService.hideLoading();
                this.monitorService.logException(err);
            }
        });
    }
    /**
     * get settings
     */
    getSettings() {
        this.settingsService.getSettings().subscribe({
            next: (result) => {
                if (result && result.data && result.data.repairType && result.data.repairType.bookingRepairId) {
                    this.bookingRepairId = result.data.repairType.bookingRepairId;
                }
                if (result && result.data && result.data.repairType && result.data.repairType.repairTypes) {
                    this.repairTypesData = this.repairTypesData.map((ele) => {
                        return Object.assign(Object.assign({}, ele), { checked: result.data.repairType.repairTypes.includes(ele.id) });
                    });
                    this.checkedRepairTypes = result.data.repairType.repairTypes;
                    this.settingsService.isJobTasksEnabled.emit(result.data.repairType.repairTypes.length > 0 ? true : false);
                }
                this.commonService.hideLoading();
            },
            error: (err) => {
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
        }
        else {
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
            repairtypes: this.checkedRepairTypes
        };
        this.commonService.showLoading();
        this.settingsService.saveNewRepairType(repairTypeData).subscribe({
            next: (result) => {
                if (this.showToast) {
                    this.commonService.showInfoToast(5000, 'New changes will be applied only to new bookings.');
                }
                this.settingsService.isJobTasksEnabled.emit(this.checkedRepairTypes.length > 0 ? true : false);
                this.commonService.hideLoading();
            },
            error: (err) => {
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
        this.submitForm();
    }
}
RepairTypeComponent.ɵfac = function RepairTypeComponent_Factory(t) { return new (t || RepairTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_0__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_2__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService)); };
RepairTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RepairTypeComponent, selectors: [["app-repair-type"]], decls: 16, vars: 5, consts: [[1, "page-container-repair-type"], [1, "repair-type-wrapper"], [1, "main-div"], [1, "repair-type-title"], [1, "parent-control"], [1, "left-control"], [4, "ngFor", "ngForOf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "footer-save-button-wrapper", 3, "buttonModel"], [1, "toggle"], [1, "label-toggle"], [1, "toggle-button"], [3, "checked", "name", "ToggleChange"]], template: function RepairTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RepairTypeComponent_ng_container_9_Template, 6, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "chq-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "repair_type_msg"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.repairTypesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonModel", ctx.saveButtonModel);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__.ChqButtonComponent, _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_5__.ChqToggleComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%] {\n  padding: calc(5px + 1.5vw);\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: var(--xa-tab-default-content);\n  border: 1px solid var(--xa-form-border);\n  border-radius: 10px;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .repair-type-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  margin: 30px 0px 35px 20px;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .parent-control[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .parent-control[_ngcontent-%COMP%]   .left-control[_ngcontent-%COMP%] {\n  width: 170px;\n  margin-left: 20px;\n  margin-top: 33px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .parent-control[_ngcontent-%COMP%]   .right-control[_ngcontent-%COMP%] {\n  width: 170px;\n  margin-left: 111px;\n  margin-top: 33px;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-bottom: 20px;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-right: 5rem;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .repair-type-wrapper[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]   .label-toggle[_ngcontent-%COMP%] {\n  width: 118px;\n  height: 14px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  color: #181B1F;\n  flex: none;\n}\n.page-container-repair-type[_ngcontent-%COMP%]   .footer-save-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0px;\n  grid-gap: 10px;\n  gap: 10px;\n  width: 177px;\n  height: 40px;\n  margin-right: 1.5vw;\n  border-radius: 8px;\n}\n@media (max-width: 800px) {\n  .vector[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGFpci10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMEJBQUE7QUFBSjtBQUVJO0VBQ0Usc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUFSO0FBR007RUFDRSxhQUFBO0FBRFI7QUFHUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFEVjtBQUlRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGVjtBQU1NO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU1RO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUpWO0FBVUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVlBO0VBQ0U7SUFDRSxzQkFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoicmVwYWlyLXR5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXItcmVwYWlyLXR5cGUge1xyXG4gIC5yZXBhaXItdHlwZS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IGNhbGMoNXB4ICsgMS41dncpO1xyXG5cclxuICAgIC5tYWluLWRpdiB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXRhYi1kZWZhdWx0LWNvbnRlbnQpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1mb3JtLWJvcmRlcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAucmVwYWlyLXR5cGUtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwcHggMzVweCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFyZW50LWNvbnRyb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5sZWZ0LWNvbnRyb2wge1xyXG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3B4O1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQtY29udHJvbCB7XHJcbiAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTExcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo1cmVtO1xyXG5cclxuICAgICAgICAubGFiZWwtdG9nZ2xlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMThweDtcclxuICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogIzE4MUIxRjtcclxuICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLXNhdmUtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMThweCAwcHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICB3aWR0aDogMTc3cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnZlY3RvciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */"] });


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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ 65635);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 4557);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/weekday */ 8472);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 74672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














function SchedulingComponent_div_18_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_18_tr_9_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r6.toggleDays("work", i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_18_tr_9_Template_chq_input_controlOutput_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r8.updateTimePickers($event, "work", "start", i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_18_tr_9_Template_chq_input_controlOutput_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r9.updateTimePickers($event, "work", "end", i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
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
} }
function SchedulingComponent_div_18_tr_37_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](title_r13.days);
} }
function SchedulingComponent_div_18_tr_37_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](title_r14.hours);
} }
function SchedulingComponent_div_18_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_18_tr_37_Template_mat_icon_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const item_r10 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r15.deleteWorkHours(item_r10.workScheduleGuid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
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
} }
function SchedulingComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_18_Template_chq_input_controlOutput_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r17.updateDatePickers($event, "work", "start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, SchedulingComponent_div_18_tr_9_Template, 8, 6, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_18_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.addNewWorkHours(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_18_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.showConfirmApplyDialog("work"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, SchedulingComponent_div_18_tr_37_Template, 11, 5, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
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
} }
function SchedulingComponent_div_19_table_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_19_table_16_tr_1_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const i_r25 = restoredCtx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r26.toggleDays("off", i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_table_16_tr_1_Template_chq_input_controlOutput_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const i_r25 = restoredCtx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r28.updateTimePickers($event, "off", "start", i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_table_16_tr_1_Template_chq_input_controlOutput_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const i_r25 = restoredCtx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r29.updateTimePickers($event, "off", "end", i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
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
} }
function SchedulingComponent_div_19_table_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SchedulingComponent_div_19_table_16_tr_1_Template, 8, 6, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.offDays);
} }
function SchedulingComponent_div_19_tr_47_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r33.days);
} }
function SchedulingComponent_div_19_tr_47_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r34.hours);
} }
function SchedulingComponent_div_19_tr_47_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_19_tr_47_Template_mat_icon_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36); const item_r30 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r35.deleteOffTime(item_r30.offTimeGuid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
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
} }
function SchedulingComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_Template_chq_input_controlOutput_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r37.offTimeInputChange($event, "breakType"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_Template_chq_input_controlOutput_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r39.updateDatePickers($event, "off", "start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "chq-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("controlOutput", function SchedulingComponent_div_19_Template_chq_input_controlOutput_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r40.updateDatePickers($event, "off", "end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SchedulingComponent_div_19_table_16_Template, 2, 1, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_19_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r41.checkAddOffTimeAllowed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SchedulingComponent_div_19_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r42.showConfirmApplyDialog("off"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, SchedulingComponent_div_19_tr_47_Template, 15, 7, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
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
} }
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
        this.daysList = { 'MON': 'Monday', 'TUE': 'Tuesday', 'WED': 'Wednesday', 'THU': 'Thursday', 'FRI': 'Friday', 'SAT': 'Saturday', 'SUN': 'Sunday' };
        this.calendarData = [];
        this.employee = { workSchedules: [], offTimes: [] };
        this.employeeInputModel = [];
        this.employeeOffTimeType = [];
        this.workDays = [
            { day: 'MON', checked: true },
            { day: 'TUE', checked: true },
            { day: 'WED', checked: true },
            { day: 'THU', checked: true },
            { day: 'FRI', checked: true },
            { day: 'SAT', checked: true },
            { day: 'SUN', checked: false },
        ];
        this.offDays = [
            { day: 'MON', date: '15', checked: true },
            { day: 'TUE', date: '16', checked: true },
            { day: 'WED', date: '17', checked: true },
            { day: 'THU', date: '18', checked: true },
            { day: 'FRI', date: '19', checked: true },
            { day: 'SAT', date: '20', checked: true },
            { day: 'SUN', date: '21', checked: false },
        ];
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
                selectedOption: { durationUnit: '' },
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
                selectedOption: { label: 'Do Not Repeat' },
                options: [{ label: 'Do Not Repeat' }, { label: 'Repeat Every Week' }],
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
                selectedOption: { label: 'Do Not Repeat' },
                options: [{ label: 'Do Not Repeat' }, { label: 'Repeat Every Year' }],
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
            },
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
            next: (profileResult) => {
                const employeeId = profileResult.data.userId;
                this.commonService.showLoading();
                (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(this.settingsService.getEmployeeDetails(employeeId)).then((response) => {
                    this.employee = response.data;
                    this.employee.workSchedules = this.convertTimeToLocalTimeZone(this.employee.workSchedules, 'work');
                    this.employee.offTimes = this.convertTimeToLocalTimeZone(this.employee.offTimes, 'offtime');
                    this.commonService.hideLoading();
                }).catch(() => {
                    this.commonService.hideLoading();
                });
                this.settingsService.getEmployeeOffTimeType().subscribe({
                    next: (result) => {
                        this.offTimeInputModels.breakType.options = result['data'].map((item) => {
                            item.type = item.description.indexOf('Days') != -1 ? 'Days' : 'Hours';
                            item.label = item.name;
                            return item;
                        }).filter(x => x.name.toLowerCase() != 'unpaid leave' && x.name.toLowerCase() != 'paid leave');
                        //this.offTimeInputModels.breakType.selectedOption = this.offTimeInputModels.breakType.options[0];
                    }
                });
                this.workDays.forEach((item) => {
                    this.workStartTimePickerModels.push(Object.assign({}, this.startTimePickerModel));
                    this.workEndTimePickerModels.push(Object.assign({}, this.endTimePickerModel));
                    this.offStartTimePickerModels.push(Object.assign(Object.assign({}, this.startTimePickerModel), { value: dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 13:00 ') }));
                    this.offEndTimePickerModels.push(Object.assign(Object.assign({}, this.endTimePickerModel), { value: dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 14:00') }));
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
        }
        else if (type == 'off') {
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
            }
            else {
                this.workEndTimePickerModels[index].value = event.value;
            }
        }
        else if (type === 'off') {
            if (startOrEnd === 'start') {
                this.offStartTimePickerModels[index].value = event.value;
            }
            else {
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
        }
        else if (type === 'off') {
            if (startOrEnd === 'start') {
                this.offStartDateInputModel.value = event.value;
            }
            else {
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
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                if (type === 'work') {
                    this.addNewWorkHoursForTeam();
                }
                else if (type === 'off') {
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
        this.offTimeInputModels[type] = Object.assign(Object.assign({}, this.offTimeInputModels[type]), { selectedOption: $event.value });
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
            'effectiveDate': dayjs__WEBPACK_IMPORTED_MODULE_0__(this.workStartDateInputModel.value).format('YYYY-MM-DD'),
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
            next: (result) => {
                this.commonService.hideLoading();
                if (result.success) {
                    this.showSuccessMessage(result.message, result.message);
                    this.employee.workSchedules = this.convertTimeToLocalTimeZone(result.data.workSchedules, 'work');
                }
                else if (result.errorMessages) {
                    this.showErrorMessage('Error', result.errorMessages);
                }
                else {
                    this.showErrorMessage('Error', result.Message);
                }
            },
            error: (error) => {
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
            'effectiveDate': dayjs__WEBPACK_IMPORTED_MODULE_0__(this.workStartDateInputModel.value).format('YYYY-MM-DD'),
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
            next: (result) => {
                this.commonService.hideLoading();
                if (result.success) {
                    this.showSuccessMessage(result.message, result.data);
                }
            },
            error: (error) => {
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
            }
            else {
                if (this.employee.workSchedules[index + 1] && new Date(workSchedule['effectiveDate']) <= new Date(this.offStartDateInputModel['formControl'].value) && new Date(this.employee.workSchedules[index + 1]['effectiveDate']) >= new Date(this.offEndDateInputModel['formControl'].value)) {
                    isOverlap = true;
                    return;
                }
            }
        });
        if (isOverlap) {
            const dialogRef = this.commonService.openConfirmationOkDialog('Oops!', 'The employee selected is already allocated to a job in the selected period, please check again.');
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.addNewOffTime();
                }
            });
        }
        else {
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
        }
        else {
            delete data['offDays'];
        }
        console.log(data, this.offStartDateInputModel, this.offEndDateInputModel, this.offTimeInputModels.breakType);
        //return;
        this.settingsService.addNewOffTime(this.employee.employeeGuid, data).subscribe({
            next: (result) => {
                this.commonService.hideLoading();
                if (result.success) {
                    this.showSuccessMessage(result.message, result.message);
                    this.employee.offTimes = this.convertTimeToLocalTimeZone(result.data.offTimes, 'offtime');
                }
                else if (result.errorMessages) {
                    this.showErrorMessage('Error', result.errorMessages);
                }
                else {
                    this.showErrorMessage('Error', result.Message);
                }
            },
            error: (error) => {
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
        }
        else {
            delete data['offDays'];
        }
        console.log(data, this.offStartDateInputModel, this.offEndDateInputModel, this.offTimeInputModels.breakType);
        //return;
        this.settingsService.addNewOffTimeForTeam(this.employee.employeeGuid, data).subscribe({
            next: (result) => {
                this.commonService.hideLoading();
                if (result.success) {
                    this.showSuccessMessage(result.message, result.data);
                }
                else if (result.errorMessages) {
                    this.showErrorMessage('Error', result.errorMessages);
                }
                else {
                    this.showErrorMessage('Error', result.Message);
                }
            },
            error: (error) => {
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
            next: (result) => {
                this.commonService.hideLoading();
                if (result.success) {
                    this.showSuccessMessage(result.message, result.message);
                    this.employee.workSchedules = this.convertTimeToLocalTimeZone(result.data.workSchedules, 'work');
                }
                else {
                    this.showErrorMessage('Error', result.Message);
                }
            },
            error: (error) => {
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
            next: (result) => {
                this.commonService.hideLoading();
                if (result.success) {
                    this.showSuccessMessage(result.message, result.message);
                    this.employee.offTimes = this.convertTimeToLocalTimeZone(result.data.offTimes, 'offtime');
                }
                else {
                    this.showErrorMessage('Error', result.Message);
                }
            },
            error: (error) => {
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
        if (!obj)
            return null;
        if (type === 'work') {
            const data = obj.map((workSchedule) => {
                var _a;
                return Object.assign(Object.assign({}, workSchedule), { titles: (_a = workSchedule.titles) === null || _a === void 0 ? void 0 : _a.map((title) => {
                        if (!title.hours || title.hours.indexOf(' - ') === -1)
                            return title;
                        const hoursArray = title.hours.split(' - ');
                        hoursArray[0] = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 ' + hoursArray[0] + ' Z', this.dateTimeFormats.dateTimeUTC12h).format('hh:mm A');
                        hoursArray[1] = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 ' + hoursArray[1] + ' Z', this.dateTimeFormats.dateTimeUTC12h).format('hh:mm A');
                        return Object.assign(Object.assign({}, title), { hours: hoursArray.join(' - ') });
                    }) });
            });
            return data;
        }
        else if (type === 'offtime') {
            const data = obj.map((offTime) => {
                if (offTime.titles && offTime.titles.length > 0) {
                    return Object.assign(Object.assign({}, offTime), { titles: offTime.titles.map((title) => {
                            if (!title.hours || title.hours.indexOf(' - ') === -1)
                                return title;
                            const hoursArray = title.hours.split(' - ');
                            hoursArray[0] = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 ' + hoursArray[0] + ' Z', this.dateTimeFormats.dateTimeUTC12h).format('hh:mm A');
                            hoursArray[1] = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 ' + hoursArray[1] + ' Z', this.dateTimeFormats.dateTimeUTC12h).format('hh:mm A');
                            return Object.assign(Object.assign({}, title), { hours: hoursArray.join(' - ') });
                        }) });
                }
                else {
                    return offTime;
                }
            });
            return data;
        }
        else {
            return obj;
        }
    }
}
SchedulingComponent.ɵfac = function SchedulingComponent_Factory(t) { return new (t || SchedulingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService)); };
SchedulingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SchedulingComponent, selectors: [["app-scheduling"]], decls: 24, vars: 13, consts: [[1, "page-container-booking-type"], [1, "title"], [1, "booking-type-wrapper"], [1, "form-container"], [1, "row"], [1, "col-12", "radio"], [1, "radio-option"], ["type", "radio", "name", "scheduleType-work", "value", "work", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "scheduleType-off", "value", "off", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "mobile-width-100", "col-12"], [1, "row", 2, "margin-bottom", "12px", "align-items", "flex-end"], [1, "col-7", 2, "font-size", "14px"], [1, "col-5"], [3, "inputModel", "controlOutput"], [1, "work-days-table"], [4, "ngFor", "ngForOf"], [1, "row", "no-margin", "button-container"], ["type", "button", 1, "btn-primary", "d-none", 3, "click"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "mobile-width-100", "col-6", "work-days-details-table-container", "d-none"], ["cellpadding", "0", 1, "work-days-details-table"], [1, "capitalize"], ["type", "button", 1, "mat-icon", "toggle-days-button", 3, "ngClass", "click"], [3, "hidden"], ["color", "red", 3, "svgIcon", "click"], [1, "mobile-width-100", "col-12", "no-padding"], [1, "row", "no-margin"], [1, "col-12"], [2, "font-size", "14px"], [1, "row", "no-margin", 2, "margin-top", "12px"], [1, "col-6"], ["class", "work-days-table", 4, "ngIf"], ["type", "button", 1, "btn-primary", "d-none", 3, "disabled", "click"], ["type", "button", 1, "btn-primary", 3, "disabled", "click"], [1, "mobile-width-100", "col-6", "off-days-details-table-container", "d-none"], [1, "work-days-details-table"]], template: function SchedulingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SchedulingComponent_Template_input_ngModelChange_9_listener($event) { return ctx.scheduleType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SchedulingComponent_Template_input_ngModelChange_14_listener($event) { return ctx.scheduleType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SchedulingComponent_div_18_Template, 38, 27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, SchedulingComponent_div_19_Template, 48, 34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__.ChqInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".page-container-booking-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: calc(5px + 1.5vw);\n  margin-bottom: 0;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n  background: var(--xa-popup-light-gray);\n  border-radius: 10px;\n  margin: calc(5px + 1.5vw);\n  padding: 60px 40px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .footer-save-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0px;\n  grid-gap: 10px;\n  gap: 10px;\n  width: 177px;\n  height: 40px;\n  margin-right: 1.5vw;\n  border-radius: 8px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.competencies-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 8px;\n  height: 100px;\n  margin: 10px;\n}\n  .chq-input-disabled div input {\n  padding: 0px !important;\n  background-color: transparent;\n}\n  .competencies-input .checkbox-wrapper {\n  flex-wrap: wrap;\n}\n  .competencies-input label.checkbox {\n  padding-left: 0px !important;\n  padding-right: 40px !important;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: white;\n  border-radius: 8px;\n  height: 60px !important;\n  margin: 10px;\n  min-width: 180px;\n}\n  .competencies-input .checkmark {\n  left: unset !important;\n  right: 5px !important;\n}\n  .competencies-input .span-label {\n  font-weight: 500;\n  text-transform: capitalize;\n  color: black;\n  font-size: 13px;\n}\n  .competencies-input mat-icon {\n  height: 36px !important;\n  border-radius: 8px;\n  width: 36px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n}\n  .competencies-input mat-icon svg {\n  height: 13px;\n}\n.schedule-expansion[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border-bottom: 1px solid #000000;\n  border-radius: 0px;\n}\n  .right-aligned-header > .mat-content mat-panel-description {\n  flex-direction: row-reverse;\n  padding-right: 10px;\n}\n  .mat-expansion-indicator {\n  position: relative;\n  left: -2px;\n  top: -2px;\n}\n.toggle-days-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 60px;\n  height: 48px;\n  border-radius: 3px;\n  margin-top: 18px;\n}\n.no-margin[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n.align-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.edit-employee-headings[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\ntable.work-days-table[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-left: 10px;\n  width: calc(100% - 20px);\n  border: 1px solid #ABABAB;\n  border-radius: 8px;\n  padding: 0px 0px 14px 14px;\n  margin-bottom: 20px;\n}\ntable.work-days-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 17px;\n  padding-top: 10px;\n}\n.work-days-details-table-container[_ngcontent-%COMP%] {\n  height: 700px;\n  overflow: auto;\n}\n.off-days-details-table-container[_ngcontent-%COMP%] {\n  height: 800px;\n  margin-bottom: 20px;\n  overflow: auto;\n}\ntable.work-days-details-table[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  border-radius: 8px;\n  border-spacing: 0px;\n  text-align: center;\n  overflow: hidden;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #ECECEC;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-right: 1px solid #1A223333;\n  height: 35px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, table.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 0px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n.radio[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  accent-color: #1A2233;\n  \n  \n  transform: scale(1.5);\n  margin-right: 6px;\n}\n.radio-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n  margin-right: 36px;\n}\n.employee-calendar[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dx-scheduler-appointment-content[_ngcontent-%COMP%] {\n  width: calc((100vw - 300px) / 7);\n}\n.employee-calendar[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%] {\n  border-top: 8px solid #69A5C9;\n  background-color: #E8F2FC;\n  white-space: break-spaces;\n  width: calc((100vw - 300px)/7);\n  display: flex;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #69A5C9;\n}\n.employee-calendar[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%], .employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%], .employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  white-space: break-spaces;\n}\n.employee-calendar[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%] {\n  background-color: #E2EFE6;\n  width: 100%;\n  height: 100%;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%]   .template-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 10px;\n  padding-bottom: 0px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #7EB699;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding: 0px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #A09A61;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]:after {\n  content: \"\";\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]   .template-wrap[_ngcontent-%COMP%] {\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.chq-cost-per-hour[_ngcontent-%COMP%] {\n  width: 135px;\n  display: block;\n}\n@media (max-width: 820px) {\n  .mobile-width-100[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    flex-basis: 100%;\n  }\n}\na.apply-team[_ngcontent-%COMP%] {\n  color: var(--xa-primary);\n  padding-top: 10px;\n  cursor: pointer;\n}\n.button-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 35px;\n  padding-left: 10px;\n}\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 85px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQU47QUFHSTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRE47QUFNSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpOO0FBUUU7RUFDRSxnQkFBQTtBQUxKO0FBUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUxKO0FBT0E7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0FBSko7QUFRRTtFQUNFLGVBQUE7QUFMSjtBQU9FO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUFMSjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTEo7QUFPRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0U7RUFDRSxZQUFBO0FBTEo7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBTkY7QUFVQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQRjtBQVVBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQVBGO0FBVUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBUEY7QUFTQTtFQUNFLG1CQUFBO0FBTkY7QUFTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTkY7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBTkY7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFORjtBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUxGO0FBUUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxGO0FBTUU7RUFDRSx5QkFBQTtBQUpKO0FBTUU7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7QUFKSjtBQU1FO0VBQ0UsaUJBQUE7QUFKSjtBQU1FO0VBQ0UsaUJBQUE7QUFKSjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0FBSko7QUFTQTtFQUNFLG1CQUFBO0FBTkY7QUFVRTtFQUNFLHFCQUFBO0VBQzJCLFNBQUE7RUFDSSwwQkFBQTtFQUMvQixxQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFRRTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVlBO0VBQ0UsZUFBQTtBQVRGO0FBVUU7RUFDRSxnQ0FBQTtBQVJKO0FBVUc7RUFDQyw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBUko7QUFTSTtFQUNFLGNBQUE7QUFQTjtBQVVHO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtBQVJKO0FBV0U7RUFDRSxZQUFBO0FBVEo7QUFZRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFWSjtBQVdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVROO0FBV0k7RUFDRSxjQUFBO0FBVE47QUFZRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFWSjtBQVlJO0VBQ0UsY0FBQTtBQVZOO0FBWUk7RUFDRSxXQUFBO0FBVk47QUFZSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZOO0FBZUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQVpGO0FBZUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFaRjtBQUNGO0FBY0E7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVpGO0FBZUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFaRjtBQWNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBWkoiLCJmaWxlIjoic2NoZWR1bGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lci1ib29raW5nLXR5cGUge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwOyAgICAgIFxyXG4gICAgICBtYXJnaW46IGNhbGMoNXB4ICsgMS41dncpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJvb2tpbmctdHlwZS13cmFwcGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogY2FsYyg1cHggKyAxLjV2dyk7XHJcbiAgICAgIHBhZGRpbmc6IDYwcHggNDBweDtcclxuICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyLXNhdmUtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxOHB4IDBweDtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICB3aWR0aDogMTc3cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjV2dztcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbi5jb21wZXRlbmNpZXMtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG59XHJcbjo6bmctZGVlcCAuY2hxLWlucHV0LWRpc2FibGVkIGRpdiBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNvbXBldGVuY2llcy1pbnB1dHtcclxuICAuY2hlY2tib3gtd3JhcHBlcntcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgbGFiZWwuY2hlY2tib3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgfVxyXG4gIC5jaGVja21hcmt7XHJcbiAgICBsZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc3Bhbi1sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgbWF0LWljb24ge1xyXG4gICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBtYXQtaWNvbiBzdmd7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2NoZWR1bGUtZXhwYW5zaW9ue1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5yaWdodC1hbGlnbmVkLWhlYWRlciA+IC5tYXQtY29udGVudCBtYXQtcGFuZWwtZGVzY3JpcHRpb257XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMnB4O1xyXG4gIHRvcDogLTJweDtcclxufVxyXG5cclxuLnRvZ2dsZS1kYXlzLWJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxufVxyXG5cclxuLm5vLW1hcmdpbntcclxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmd7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYWxpZ24tY2VudGVye1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0LWVtcGxveWVlLWhlYWRpbmdze1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbnRhYmxlLndvcmstZGF5cy10YWJsZXtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQUJBQkFCO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAwcHggMHB4IDE0cHggMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICB0ZHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuLndvcmstZGF5cy1kZXRhaWxzLXRhYmxlLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5vZmYtZGF5cy1kZXRhaWxzLXRhYmxlLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDgwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlLndvcmstZGF5cy1kZXRhaWxzLXRhYmxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcclxuICB9XHJcbiAgdGQsIHRoe1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzFBMjIzMzMzO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxuICB0ZHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICB0ZDpsYXN0LWNoaWxkLCB0aDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4gIH1cclxuICB0aGVhZCB0ciB0aCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuLnJhZGlve1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbi5yYWRpby1vcHRpb257XHJcbiAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgICBhY2NlbnQtY29sb3I6ICMxQTIyMzM7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcblxyXG4gIGxhYmVse1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIENhbGVuZGFyIEV4dHJhIGNzc1xyXG4uZW1wbG95ZWUtY2FsZW5kYXJ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIC5keC1zY2hlZHVsZXItYXBwb2ludG1lbnQtY29udGVudHtcclxuICAgIHdpZHRoOiBjYWxjKCgxMDB2dyAtIDMwMHB4KSAvIDcpO1xyXG4gIH1cclxuICAgLndvcmt7XHJcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgIzY5QTVDOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEYyRkM7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gICAgd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMzAwcHgpLzcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAuc3ViamVjdCBzcGFue1xyXG4gICAgICBjb2xvcjogIzY5QTVDOTtcclxuICAgIH1cclxuICB9XHJcbiAgIC53ZWVrZW5kLCAuaG9saWRheSwgLmRpbm5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgfVxyXG5cclxuICAud2Vla2VuZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5ob2xpZGF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRUZFNjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLnRlbXBsYXRlLXdyYXB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5zdWJqZWN0IHNwYW57XHJcbiAgICAgIGNvbG9yOiAjN0VCNjk5O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGlubmVye1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAuc3ViamVjdCBzcGFue1xyXG4gICAgICBjb2xvcjojQTA5QTYxO1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgY29udGVudDonJztcclxuICAgIH1cclxuICAgIC50ZW1wbGF0ZS13cmFwe1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNocS1jb3N0LXBlci1ob3Vye1xyXG4gIHdpZHRoOiAxMzVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ODIwcHgpe1xyXG4gIC5tb2JpbGUtd2lkdGgtMTAwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIH0gXHJcbn1cclxuYS5hcHBseS10ZWFte1xyXG4gIGNvbG9yOiB2YXIoLS14YS1wcmltYXJ5KTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiA4NXB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_settings_operations_operations_module_ts.js.map