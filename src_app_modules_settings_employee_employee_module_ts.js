"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_settings_employee_employee_module_ts"],{

/***/ 65364:
/*!********************************************************!*\
  !*** ./src/app/config/display/settings-list-config.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsListConfig": () => (/* binding */ SettingsListConfig)
/* harmony export */ });
const SettingsListConfig = {
    columns: [
        {
            id: 'EmployeeGuid',
            width: '0px',
            style: 'display: none',
            header: {
                text: 'EmployeeGuid',
                tooltip: '',
                style: 'display: none; max-width: 0'
            },
            cellStyle: 'display: none; max-width: 0',
            selector: {
                field: 'EmployeeGuid',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'EmployeeId',
            width: '0px',
            style: 'display: none',
            header: {
                text: 'EmployeeId',
                tooltip: '',
                style: 'display: none; max-width: 0'
            },
            cellStyle: 'display: none; max-width: 0',
            selector: {
                field: 'EmployeeId',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'FirstName',
            sortable: true,
            header: {
                text: 'name',
                tooltip: '',
            },
            selector: {
                field: ['FirstName', 'LastName'],
            },
            widget: {
                type: 'text',
            }
        },
        {
            id: 'OrgName',
            sortable: true,
            header: {
                text: 'organization',
                tooltip: '',
            },
            selector: {
                field: 'OrgName',
            },
            widget: {
                type: 'text',
            }
        },
        {
            id: 'PhoneNumber',
            sortable: true,
            selector: {
                field: 'PhoneNumber',
            },
            header: {
                text: 'mobile',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'Email',
            sortable: true,
            selector: {
                field: 'Email',
            },
            header: {
                text: 'email',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'RoleName',
            sortable: true,
            selector: {
                field: 'RoleName',
            },
            header: {
                text: 'roles',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'Competencies',
            sortable: true,
            width: '200px',
            selector: {
                field: 'Competencies',
            },
            header: {
                text: 'competencies',
                tooltip: '',
            },
            widget: {
                type: 'iconGroup'
            },
            config: {
                style: 'min-width: 200px;'
            }
        }
    ]
};


/***/ }),

/***/ 2882:
/*!************************************************************************************!*\
  !*** ./src/app/modules/settings/employee/edit-employee/edit-employee.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEmployeeComponent": () => (/* binding */ EditEmployeeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 74672);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/weekday */ 8472);
/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 4557);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ 65635);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_rich_text_editor_chq_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-rich-text-editor/chq-rich-text-editor.component */ 19245);
/* harmony import */ var devextreme_angular_ui_scheduler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular/ui/scheduler */ 20330);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular/core */ 55643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 52529);


















const _c0 = ["dxScheduler"];
function EditEmployeeComponent_form_6_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, item_r10.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r10.value);
} }
const _c1 = function (a0, a1) { return { "chq-input-disabled": a0, "chq-cost-per-hour": a1 }; };
function EditEmployeeComponent_form_6_ng_container_7_chq_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "chq-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_ng_container_7_chq_input_3_Template_chq_input_controlOutput_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r16.validateEditEmployee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const item_r10 = ctx_r18.$implicit;
    const i_r11 = ctx_r18.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c1, item_r10.disabled, i_r11 === 6));
} }
function EditEmployeeComponent_form_6_ng_container_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 41);
} }
function EditEmployeeComponent_form_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, EditEmployeeComponent_form_6_ng_container_7_div_2_Template, 6, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, EditEmployeeComponent_form_6_ng_container_7_chq_input_3_Template, 1, 5, "chq-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, EditEmployeeComponent_form_6_ng_container_7_div_4_Template, 1, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](item_r10.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r11 !== 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r11 === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r11 === 5);
} }
function EditEmployeeComponent_form_6_div_31_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const dataCell_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r23.holiday[dataCell_r19.startDate.toDateString()]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("svgIcon", "microbe-circle")("color", "light-green1");
} }
function EditEmployeeComponent_form_6_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EditEmployeeComponent_form_6_div_31_div_1_ng_container_1_Template, 5, 3, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataCell_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r21.holiday[dataCell_r19.startDate.toDateString()]);
} }
function EditEmployeeComponent_form_6_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataCell_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r22.dinner[dataCell_r19.startDate.toLocaleDateString() + " " + dataCell_r19.startDate.toLocaleTimeString()]);
} }
const _c2 = function (a0, a1, a2) { return { "holiday": a0, "weekend": a1, "dinner": a2 }; };
function EditEmployeeComponent_form_6_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EditEmployeeComponent_form_6_div_31_div_1_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, EditEmployeeComponent_form_6_div_31_div_2_Template, 4, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataCell_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](3, _c2, ctx_r3.holiday[dataCell_r19.startDate.toDateString()], ctx_r3.weekendDate[dataCell_r19.startDate.toDateString()], ctx_r3.dinner[dataCell_r19.startDate.toLocaleDateString() + " " + dataCell_r19.startDate.toLocaleTimeString()]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r20 < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.dinner.hasOwnProperty(dataCell_r19.startDate.toLocaleDateString() + " " + dataCell_r19.startDate.toLocaleTimeString()));
} }
function EditEmployeeComponent_form_6_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateCell_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 1, dateCell_r27.date, "d E"), " ");
} }
function EditEmployeeComponent_form_6_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeCell_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", timeCell_r28.text ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, timeCell_r28.date, "HH:mm") : "", " ");
} }
function EditEmployeeComponent_form_6_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", model_r29.appointmentData.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](model_r29.appointmentData.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("svgIcon", model_r29.appointmentData.icon)("color", model_r29.appointmentData.iconColor);
} }
function EditEmployeeComponent_form_6_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r30 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"](" ", model_r30.appointmentData.label, " - ", ctx_r7.appointmentTimeFormat(model_r30.appointmentData.startTime), " - ", ctx_r7.appointmentTimeFormat(model_r30.appointmentData.endTime), " ");
} }
function EditEmployeeComponent_form_6_div_52_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditEmployeeComponent_form_6_div_52_tr_9_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const i_r34 = restoredCtx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r35.toggleDays("work", i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "chq-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_div_52_tr_9_Template_chq_input_controlOutput_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const i_r34 = restoredCtx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r37.updateTimePickers($event, "work", "start", i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "chq-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_div_52_tr_9_Template_chq_input_controlOutput_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const i_r34 = restoredCtx.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r38.updateTimePickers($event, "work", "end", i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", item_r33.checked ? "bg-primary text-white" : "bg-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r33.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !item_r33.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r31.workStartTimePickerModels[i_r34]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !item_r33.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r31.workEndTimePickerModels[i_r34]);
} }
function EditEmployeeComponent_form_6_div_52_tr_33_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](title_r42.days);
} }
function EditEmployeeComponent_form_6_div_52_tr_33_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](title_r43.hours);
} }
function EditEmployeeComponent_form_6_div_52_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, EditEmployeeComponent_form_6_div_52_tr_33_div_6_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, EditEmployeeComponent_form_6_div_52_tr_33_div_8_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditEmployeeComponent_form_6_div_52_tr_33_Template_mat_icon_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const item_r39 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r44.deleteWorkHours(item_r39.workScheduleGuid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r39.createdDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r39.effectiveDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", item_r39.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", item_r39.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("svgIcon", "trash");
} }
function EditEmployeeComponent_form_6_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "chq-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_div_52_Template_chq_input_controlOutput_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r46.updateDatePickers($event, "work", "start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, EditEmployeeComponent_form_6_div_52_tr_9_Template, 8, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditEmployeeComponent_form_6_div_52_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r48.addNewWorkHours(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "table", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, EditEmployeeComponent_form_6_div_52_tr_33_Template, 11, 5, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 10, "add_edit_work_schedule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r8.workStartDateInputModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r8.workDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 12, "save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 14, "creation_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 16, "start_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 18, "days"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 20, "hours"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 22, "actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r8.employee.workSchedules);
} }
function EditEmployeeComponent_form_6_div_53_table_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditEmployeeComponent_form_6_div_53_table_16_tr_1_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55); const i_r53 = restoredCtx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r54.toggleDays("off", i_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "chq-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_div_53_table_16_tr_1_Template_chq_input_controlOutput_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55); const i_r53 = restoredCtx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r56.updateTimePickers($event, "off", "start", i_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "chq-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_div_53_table_16_tr_1_Template_chq_input_controlOutput_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55); const i_r53 = restoredCtx.index; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r57.updateTimePickers($event, "off", "end", i_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    const i_r53 = ctx.index;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", item_r52.checked ? "bg-primary text-white" : "bg-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r52.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !item_r52.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r51.offStartTimePickerModels[i_r53]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !item_r52.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r51.offEndTimePickerModels[i_r53]);
} }
function EditEmployeeComponent_form_6_div_53_table_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EditEmployeeComponent_form_6_div_53_table_16_tr_1_Template, 8, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r49.offDays);
} }
function EditEmployeeComponent_form_6_div_53_tr_43_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r61.days);
} }
function EditEmployeeComponent_form_6_div_53_tr_43_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r62.hours);
} }
function EditEmployeeComponent_form_6_div_53_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, EditEmployeeComponent_form_6_div_53_tr_43_div_8_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, EditEmployeeComponent_form_6_div_53_tr_43_div_12_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditEmployeeComponent_form_6_div_53_tr_43_Template_mat_icon_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r64); const item_r58 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r63.deleteOffTime(item_r58.offTimeGuid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r58.createdDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r58.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r58.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", item_r58.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r58.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", item_r58.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("svgIcon", "trash");
} }
function EditEmployeeComponent_form_6_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h3", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "chq-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_div_53_Template_chq_input_controlOutput_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r65.offTimeInputChange($event, "breakType"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "chq-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_div_53_Template_chq_input_controlOutput_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r67.updateDatePickers($event, "off", "start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "chq-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("controlOutput", function EditEmployeeComponent_form_6_div_53_Template_chq_input_controlOutput_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r68.updateDatePickers($event, "off", "end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, EditEmployeeComponent_form_6_div_53_table_16_Template, 2, 1, "table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditEmployeeComponent_form_6_div_53_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r69.checkAddOffTimeAllowed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "table", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, EditEmployeeComponent_form_6_div_53_tr_43_Template, 15, 7, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 13, "off_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r9.offTimeInputModels.breakType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r9.offStartDateInputModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r9.offEndDateInputModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.offTimeInputModels.breakType.selectedOption.durationUnit === "Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r9.offTimeInputModels.breakType.selectedOption || ctx_r9.offTimeInputModels.breakType.selectedOption.durationUnit === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 15, "creation_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 17, "start_end_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](32, 19, "days"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 21, "type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](38, 23, "hours"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 25, "actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r9.employee.offTimes);
} }
const _c3 = function () { return ["week"]; };
function EditEmployeeComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, EditEmployeeComponent_form_6_ng_container_7_Template, 5, 6, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "chq-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "chq-rich-text-editor", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("currentValue", function EditEmployeeComponent_form_6_Template_chq_rich_text_editor_currentValue_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r70.notes = $event.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditEmployeeComponent_form_6_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r72.updateEmployeeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "dx-scheduler", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onOptionChanged", function EditEmployeeComponent_form_6_Template_dx_scheduler_onOptionChanged_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r73.onOptionChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, EditEmployeeComponent_form_6_div_31_Template, 3, 7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, EditEmployeeComponent_form_6_div_32_Template, 4, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, EditEmployeeComponent_form_6_div_33_Template, 3, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, EditEmployeeComponent_form_6_div_34_Template, 6, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, EditEmployeeComponent_form_6_div_35_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function EditEmployeeComponent_form_6_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r74.scheduleType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function EditEmployeeComponent_form_6_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r75.scheduleType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, EditEmployeeComponent_form_6_div_52_Template, 34, 24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, EditEmployeeComponent_form_6_div_53_Template, 44, 27, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r0.activeMenuName !== "Employee Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 34, "update_employee_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.employeeInputModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 36, "employee_competencies"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inputModel", ctx_r0.employeeCompetenciesModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 38, "notes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("height", 200)("initialValue", ctx_r0.employee.notes)("maxCharacterLimit", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r0.editEmployeeFormValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 40, "save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r0.activeMenuName !== "Employee Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 42, "update_employee_schedule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx_r0.calendarData)("views", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](50, _c3))("firstDayOfWeek", 1)("startDayHour", 0)("endDayHour", 24)("currentDate", ctx_r0.currentDate)("cellDuration", ctx_r0.timeSlotMin)("showCurrentTimeIndicator", true)("showAllDayPanel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dxTemplateOf", "dataCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dxTemplateOf", "dateCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dxTemplateOf", "timeCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dxTemplateOf", "appointment-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dxTemplateOf", "appointment-tooltip-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 44, "add_edit_schedule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.scheduleType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 46, "work_schedule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.scheduleType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](51, 48, "off_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.scheduleType === "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.scheduleType === "off");
} }
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_1__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
const timeSlotMin = 30;
class EditEmployeeComponent {
    /**
     * constructor
     */
    constructor(route, settingsService, commonService, translateService) {
        this.route = route;
        this.settingsService = settingsService;
        this.commonService = commonService;
        this.translateService = translateService;
        this.localTimeZoneString = dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01T00:00:00Z').format('HH:mm A');
        this.menuItems = [
            {
                name: 'Employee Details',
                active: true
            },
            {
                name: 'Employee Schedule',
                active: false
            },
        ];
        this.activeMenuName = this.menuItems[0].name;
        this.dateTimeFormats = {
            dateTimeUTC12h: 'YYYY-MM-DD hh:mm A Z',
            dateTimeUTC24h: 'YYYY-MM-DD HH:mm Z',
            dateTime12h: 'YYYY-MM-DD hh:mm A',
            dateTime24h: 'YYYY-MM-DD HH:mm',
            time12h: 'hh:mm A'
        };
        this.organizationCurrenyName = '';
        this.daysList = { 'MON': 'Monday', 'TUE': 'Tuesday', 'WED': 'Wednesday', 'THU': 'Thursday', 'FRI': 'Friday', 'SAT': 'Saturday', 'SUN': 'Sunday' };
        this.competenciesList = [];
        this.calendarData = [];
        this.employeeInputModel = [];
        this.employeeOffTimeType = [];
        this.employeeCompetenciesIcons = [
            {
                'name': 'Body',
                'svg': 'car',
                'backgroundColor': '#00B5AA'
            },
            {
                'name': 'Maintenance',
                'svg': 'house',
                'backgroundColor': '#91C009'
            },
            {
                'name': 'Paint',
                'svg': 'paint-nozzle',
                'backgroundColor': '#2B88DE'
            },
            {
                'name': 'Mechanical',
                'svg': 'mechanical',
                'backgroundColor': '#CE6DD0'
            },
            {
                'name': 'Diagnosis',
                'svg': 'diagnosis',
                'backgroundColor': '#B53E3E'
            },
            {
                'name': 'Tyres',
                'svg': 'tyres',
                'backgroundColor': '#AAC7FA'
            },
            {
                'name': 'Electrical',
                'svg': 'bolt-car',
                'backgroundColor': '#8F2BDE'
            },
            {
                'name': 'Others',
                'svg': 'gears',
                'backgroundColor': '#D2A120'
            },
        ];
        this.employeeCompetenciesModel = {
            type: 'checkbox',
            options: [],
            name: 'competencies',
            placeHolder: '',
            label: '',
            value: ''
        };
        this.inputModelData = {
            'firstName': {
                label: 'first_name',
                type: 'text',
                disabled: true,
                placeHolder: '',
                name: 'firstName',
                class: 'col-4'
            },
            'lastName': {
                label: 'last_name',
                type: 'text',
                disabled: true,
                placeHolder: '',
                name: 'lastName',
                class: 'col-4'
            },
            'orgName': {
                label: 'organization',
                type: 'text',
                disabled: true,
                placeHolder: '',
                name: 'orgName',
                class: 'col-4'
            },
            'email': {
                label: 'email',
                type: 'text',
                disabled: true,
                placeHolder: '',
                name: 'email',
                class: 'col-4 ipad-col-4-to-col-8'
            },
            'countryCode': {
                label: 'code',
                type: 'text',
                disabled: true,
                placeHolder: '',
                name: 'countryCode',
                class: 'col-1'
            },
            'mobileNumber': {
                label: 'mobile_number',
                type: 'text',
                disabled: true,
                placeHolder: '',
                name: 'mobileNumber',
                class: 'col-3'
            },
            'costPerHour': {
                label: 'cost_per_hour',
                type: 'number',
                name: 'costPerHour',
                placeHolder: '',
                class: 'col-4',
                maxLength: 8,
                pattern: /^(?:\d{0,5}\.\d{1,2})$|^\d{0,5}$/
            },
            'roleName': {
                label: 'job_role',
                type: 'text',
                disabled: true,
                placeHolder: '',
                name: 'roleName',
                class: 'col-4'
            }
        };
        this.notes = '';
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
            placeHolder: 'enter_date',
            minDate: new Date(),
            value: new Date()
        };
        this.offStartDateInputModel = {
            label: 'start',
            type: 'date',
            name: 'offStart',
            class: 'col-1',
            placeHolder: 'enter_date',
            minDate: new Date(),
            value: new Date()
        };
        this.offEndDateInputModel = {
            label: 'end',
            type: 'date',
            name: 'offEnd',
            class: 'col-1',
            placeHolder: 'enter_date',
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
                label: 'state',
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
        this.currencySymbol = '';
        this.currencySymbol = this.commonService.getCurrencySymbol();
    }
    /**
     * ngOnInit
     */
    ngOnInit() {
        const employeeId = this.route.snapshot.params['id'];
        this.commonService.showLoading();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(this.settingsService.getEmployeeDetails(employeeId)).then((response) => {
            this.employee = response.data;
            this.employee.workSchedules = this.convertTimeToLocalTimeZone(this.employee.workSchedules, 'work');
            this.employee.offTimes = this.convertTimeToLocalTimeZone(this.employee.offTimes, 'offtime');
            const competenciesChecked = response.data.competencies.map(item => item.name);
            this.employee.notes = response.data.notes ? atob(response.data.notes) : '';
            console.log(response);
            const employeeInputModel = [];
            Object.keys(this.inputModelData).forEach((key) => {
                if (this.inputModelData[key].name === 'costPerHour') {
                    this.inputModelData[key].label = `${this.translateService.instant('cost_per_hour')} (${this.currencySymbol})`;
                }
                employeeInputModel.push(Object.assign(Object.assign({}, this.inputModelData[key]), { value: this.employee[key] }));
            });
            this.employeeCompetenciesIcons.forEach((key) => {
                this.employeeCompetenciesModel.options.push({
                    label: key.name,
                    icon: key.svg,
                    name: key.name,
                    value: key.name,
                    color: 'white',
                    backgroundColor: key.backgroundColor,
                    checked: competenciesChecked.indexOf(key.name) != -1
                });
            });
            this.employeeInputModel = employeeInputModel;
            const currentMonday = dayjs__WEBPACK_IMPORTED_MODULE_0__().clone().weekday(1).format('YYYY-MM-DD');
            this.selectedCalendarDate = currentMonday;
            this.getEmployeeCalendar(currentMonday);
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
                });
                //this.offTimeInputModels.breakType.selectedOption = this.offTimeInputModels.breakType.options[0];
            }
        });
        this.settingsService.getCompetencies().subscribe({
            next: (result) => { console.log(result); this.competenciesList = result; }
        });
        this.workDays.forEach((item) => {
            this.workStartTimePickerModels.push(Object.assign({}, this.startTimePickerModel));
            this.workEndTimePickerModels.push(Object.assign({}, this.endTimePickerModel));
            this.offStartTimePickerModels.push(Object.assign(Object.assign({}, this.startTimePickerModel), { value: dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 13:00 ') }));
            this.offEndTimePickerModels.push(Object.assign(Object.assign({}, this.endTimePickerModel), { value: dayjs__WEBPACK_IMPORTED_MODULE_0__('2023-01-01 14:00') }));
        });
    }
    /**
     * tab change of chq-tabs
     * @param {*} event
     */
    tabChange(event) {
        console.log(event);
        this.menuItems.map(menuItem => menuItem.name == event.name ? menuItem.active = true : menuItem.active = false);
        this.activeMenuName = event.name;
        setTimeout(() => this.dxScheduler.instance.repaint(), 300);
    }
    /**
     * @date 5/31/2023 - 11:26:59 AM
     *
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
     * updateEmployeeDetails
     */
    updateEmployeeDetails() {
        const notesLength = this.removeTags(this.notes);
        console.log(notesLength, notesLength.length);
        if (notesLength.length > 500) {
            this.showErrorMessage('Notes Length', 'Notes cannot be more than 500 Characters');
            return;
        }
        const data = { notes: btoa(this.notes), costPerHour: this.employeeInputModel.filter(item => item.name == 'costPerHour')[0].formControl.value };
        if (parseInt(data.costPerHour) <= 0) {
            this.showErrorMessage('Invalid Cost Per Hour', 'Cost Per Hour should be more than 0');
            return;
        }
        this.commonService.showLoading();
        //console.log(data);return;
        this.settingsService.updateEmployeeDetails(this.employee.employeeGuid, data).subscribe({
            next: (result) => {
                console.log('result', result);
                this.commonService.hideLoading();
            },
            error: (error) => {
                this.commonService.hideLoading();
            }
        });
        const competenciesChecked = this.employeeCompetenciesModel.options.filter(option => option.checked).map(item => item.name);
        const competenciesCheckedId = this.competenciesList.filter(item => competenciesChecked.indexOf(item.name) != -1).map(item => item.competenciesId);
        const updateCompetenciesData = { competenciesIDs: competenciesCheckedId, userID: this.employee.employeeId };
        this.settingsService.updateCompetencies(updateCompetenciesData).subscribe({
            next: (result) => {
                console.log('result', result);
            },
            error: (error) => {
                this.commonService.hideLoading();
            }
        });
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
                    this.getEmployeeCalendar(this.selectedCalendarDate);
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
                    this.getEmployeeCalendar(this.selectedCalendarDate);
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
                    this.getEmployeeCalendar(this.selectedCalendarDate);
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
                    this.getEmployeeCalendar(this.selectedCalendarDate);
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
     * getEmployeeCalendar
     */
    getEmployeeCalendar(fromDate) {
        this.commonService.showLoading();
        this.settingsService.getEmployeeCalendar(this.employee.employeeGuid, fromDate).subscribe({
            next: (result) => {
                var _a, _b;
                this.commonService.hideLoading();
                this.weekendDate = {};
                this.holiday = {};
                this.dinner = {};
                console.log(result);
                //return;
                const calendarData = [];
                (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.calenderDays) === null || _b === void 0 ? void 0 : _b.forEach((calenderDays) => {
                    if (calenderDays.isWeekend) {
                        this.weekendDate[new Date(calenderDays.date).toDateString()] = true;
                    }
                    if (calenderDays.breaks) {
                        calenderDays.breaks.map((breakData) => {
                            const endTimeDayjs = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${calenderDays.date} ${breakData.endTime} Z`, this.dateTimeFormats.dateTimeUTC12h);
                            const startTimeDayjs = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${calenderDays.date} ${breakData.startTime} Z`, this.dateTimeFormats.dateTimeUTC12h);
                            const timeDiff = endTimeDayjs.diff(startTimeDayjs, 'minutes');
                            const timeSlots = Math.ceil(timeDiff / this.timeSlotMin);
                            for (let i = 0; i < timeSlots; i++) {
                                const dateData = startTimeDayjs.add(i * this.timeSlotMin, 'minutes').format('YYYY-MM-DD HH:mm');
                                this.dinner[new Date(dateData).toLocaleDateString() + ' ' + new Date(dateData).toLocaleTimeString()] = breakData.label;
                            }
                        });
                    }
                    if (calenderDays.isOff) {
                        this.holiday[new Date(calenderDays.date).toDateString()] = calenderDays.offTimeLabel;
                    }
                    if (calenderDays.timeSlots) {
                        calenderDays.timeSlots.map((timeSlot) => {
                            calendarData.push({
                                startTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(`${calenderDays.date} ${timeSlot.startTime} Z`, this.dateTimeFormats.dateTimeUTC12h),
                                endTime: dayjs__WEBPACK_IMPORTED_MODULE_0__(`${calenderDays.date} ${timeSlot.endTime} Z`, this.dateTimeFormats.dateTimeUTC12h),
                                type: 'work',
                                label: 'Work Slot',
                                icon: 'briefcase-circle',
                                iconColor: 'light-blue1'
                            });
                        });
                    }
                });
                console.log(JSON.stringify(calendarData));
                this.calendarData = calendarData;
                setTimeout(() => this.dxScheduler.instance.repaint(), 300);
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
            this.getEmployeeCalendar(currentDate);
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
     * removeTags
     * @param {*} str
     * @returns {*}
     */
    removeTags(str) {
        if ((str === null) || (str === ''))
            return '';
        else
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    /**
     * validateEditEmployee
     * @param {*} event
     */
    validateEditEmployee(event) {
        this.editEmployeeFormValid = event.isValid;
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
EditEmployeeComponent.ɵfac = function EditEmployeeComponent_Factory(t) { return new (t || EditEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService)); };
EditEmployeeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: EditEmployeeComponent, selectors: [["app-edit-employee"]], viewQuery: function EditEmployeeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.dxScheduler = _t.first);
    } }, decls: 11, vars: 2, consts: [[1, "layout-container"], [1, "tab-header", "fx-0"], [1, "tabs", 3, "menuItems", "menuItemClick"], [1, "tab-content", "mh-0", "fx-1"], [1, "page-container-booking-type"], [1, "booking-type-wrapper"], ["class", "form-container", "style", "padding:20px", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "form-container", 2, "padding", "20px"], [3, "hidden"], [1, "row", "no-margin"], [1, "edit-employee-headings"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "competencies-input", 3, "inputModel"], [1, "col-12", "edit-employee-headings"], [1, "col-8", "mobile-width-100"], [3, "height", "initialValue", "maxCharacterLimit", "currentValue"], [1, "row", "no-margin", 2, "margin-top", "36px", "margin-bottom", "30px"], ["type", "button", 1, "btn-primary", "col-12", 2, "max-width", "180px", 3, "disabled", "click"], [1, "employee-calendar"], ["width", "100%", "currentView", "week", "startDateExpr", "startTime", "endDateExpr", "endTime", "dateCellTemplate", "dateCellTemplate", "timeCellTemplate", "timeCellTemplate", "dataCellTemplate", "dataCellTemplate", "appointmentTemplate", "appointment-template", "appointmentTooltipTemplate", "appointment-tooltip-template", "maxAppointmentsPerCell", "2", 3, "dataSource", "views", "firstDayOfWeek", "startDayHour", "endDayHour", "currentDate", "cellDuration", "showCurrentTimeIndicator", "showAllDayPanel", "onOptionChanged"], ["dxScheduler", ""], [3, "ngClass", 4, "dxTemplate", "dxTemplateOf"], [4, "dxTemplate", "dxTemplateOf"], ["id", "add-schedule"], [1, "col-12", "radio"], [1, "radio-option"], ["type", "radio", "name", "scheduleType-work", "value", "work", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "scheduleType-off", "value", "off", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [2, "margin-bottom", "50px"], ["class", "input-wrapper", 4, "ngIf"], [3, "inputModel", "ngClass", "controlOutput", 4, "ngIf"], ["style", "width: 100%;", 4, "ngIf"], [1, "input-wrapper"], [1, "input-label"], [3, "inputModel", "ngClass", "controlOutput"], [2, "width", "100%"], [3, "ngClass"], ["class", "template-wrap employee-calendar-template-wrap", 4, "ngIf"], [1, "template-wrap", "employee-calendar-template-wrap"], [4, "ngIf"], [1, "subject"], [3, "svgIcon", "color"], [1, "calendar-header", "date-info"], [1, "template-wrap", "employee-calendar-template-wrap", 3, "ngClass"], [1, "tooltip-template-wrap"], [1, "tooltip-content-wrap"], [1, "mobile-width-100", "col-6"], [1, "row", 2, "margin-bottom", "12px", "align-items", "flex-end"], [1, "col-7", 2, "font-size", "14px"], [1, "col-5"], [3, "inputModel", "controlOutput"], [1, "work-days-table"], ["type", "button", 1, "btn-primary", "col-12", 2, "max-width", "85px", "margin-bottom", "35px", 3, "click"], [1, "mobile-width-100", "col-6", "work-days-details-table-container"], ["cellpadding", "0", 1, "work-days-details-table"], [1, "capitalize"], ["type", "button", 1, "mat-icon", "toggle-days-button", 3, "ngClass", "click"], ["color", "red", 3, "svgIcon", "click"], [1, "mobile-width-100", "col-6", "no-padding"], [1, "col-12"], [2, "font-size", "14px"], [1, "col-6"], ["class", "work-days-table", "style", "margin-top: 24px;margin-left: 10px;width: calc(100% - 20px);", 4, "ngIf"], [1, "row", "no-margin", 2, "margin-top", "20px"], ["type", "button", 1, "btn-primary", 2, "min-width", "85px", "margin-left", "10px", "margin-bottom", "35px", 3, "disabled", "click"], [1, "mobile-width-100", "col-6", "off-days-details-table-container"], [1, "work-days-details-table"], [1, "work-days-table", 2, "margin-top", "24px", "margin-left", "10px", "width", "calc(100% - 20px)"]], template: function EditEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "chq-tabs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("menuItemClick", function EditEmployeeComponent_Template_chq_tabs_menuItemClick_2_listener($event) { return ctx.tabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, EditEmployeeComponent_form_6_Template, 54, 51, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("menuItems", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.employeeInputModel.length > 0);
    } }, directives: [_widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_6__.ChqTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_7__.ChqInputComponent, _widgets_chq_rich_text_editor_chq_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_8__.ChqRichTextEditorComponent, devextreme_angular_ui_scheduler__WEBPACK_IMPORTED_MODULE_15__.DxSchedulerComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_16__.DxTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".layout-container[_ngcontent-%COMP%] {\n  height: calc(100vh - calc(5px + 1.5vw + 58px + 1.6vw) - 76px);\n  display: flex;\n  flex-flow: column;\n}\n.layout-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background: var(--xa-tab-background);\n  overflow: auto;\n}\n#add-schedule[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 25px;\n  font-weight: 700;\n  margin-top: 30px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%] {\n  margin-top: calc(5px + 1.5vw);\n  box-sizing: border-box;\n  margin-top: 18.5px;\n  background: var(--xa-tab-default-content);\n  margin: calc(5px + 1.5vw);\n  border: 1px solid #D7D7D7;\n  border-radius: 10px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-left: 34px;\n  grid-gap: 20px;\n  gap: 20px;\n  width: 577px;\n  left: 144px;\n  top: 268.29px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .assessment-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px;\n  grid-gap: 8px;\n  gap: 8px;\n  margin-top: 34px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .assessment-wrapper[_ngcontent-%COMP%]   .assessment-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n  width: 130px;\n  height: 19.73px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .assessment-wrapper[_ngcontent-%COMP%]   .assessment-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px;\n  width: 240.5px;\n  height: 58.19px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .assessment-wrapper[_ngcontent-%COMP%]   .assessment-time[_ngcontent-%COMP%]   .time-input[_ngcontent-%COMP%] {\n  width: 212px;\n  height: 75px;\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  z-index: 1;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%] {\n  width: 525.51px;\n  height: 0px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  flex: none;\n  flex-grow: 0;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .repair-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px;\n  grid-gap: 8px;\n  gap: 8px;\n  margin-bottom: 0.9rem;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .repair-wrapper[_ngcontent-%COMP%]   .repair-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n  width: 130px;\n  height: 19.73px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .handover-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 577px;\n  height: 58.13px;\n  padding-bottom: 180px;\n  grid-gap: 8px;\n  gap: 8px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .handover-wrapper[_ngcontent-%COMP%]   .handover-checkbox[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 17.88px;\n  left: 0px;\n  top: 228.19px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .handover-wrapper[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 176px;\n  height: 40px;\n  left: 36px;\n  top: 201.09px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .handover-wrapper[_ngcontent-%COMP%]   .handover-save-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10px;\n  width: 85px;\n  height: 40px;\n  background: #1B03A3;\n  border-radius: 8px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .handover-wrapper[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 18px;\n  width: 240.5px;\n  height: 52.75px;\n  left: 336.5px;\n  top: 196.38px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .handover-wrapper[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n  width: 212px;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .booking-type-wrapper[_ngcontent-%COMP%]   .booking-type-form[_ngcontent-%COMP%]   .handover-wrapper[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%]   .time-dropdown[_ngcontent-%COMP%] {\n  width: 212px;\n  height: 75px;\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  z-index: 1;\n}\n.page-container-booking-type[_ngcontent-%COMP%]   .footer-save-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0px;\n  grid-gap: 10px;\n  gap: 10px;\n  width: 177px;\n  height: 40px;\n  margin-right: 1.5vw;\n  border-radius: 8px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.competencies-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 8px;\n  height: 100px;\n  margin: 10px;\n}\n  .chq-input-disabled div input {\n  padding: 0px !important;\n  background-color: transparent;\n  opacity: 1 !important;\n}\n  .competencies-input .checkbox-wrapper {\n  flex-wrap: wrap;\n}\n  .competencies-input label.checkbox {\n  padding-left: 0px !important;\n  padding-right: 40px !important;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: white;\n  border-radius: 8px;\n  height: 60px !important;\n  margin: 10px;\n  min-width: 180px;\n}\n  .competencies-input .checkmark {\n  left: unset !important;\n  right: 5px !important;\n}\n  .competencies-input .span-label {\n  font-weight: 500;\n  text-transform: capitalize;\n  color: black;\n  font-size: 13px;\n}\n  .competencies-input mat-icon {\n  height: 36px !important;\n  border-radius: 8px;\n  width: 36px;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n}\n  .competencies-input mat-icon svg {\n  height: 13px;\n}\n.schedule-expansion[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border-bottom: 1px solid #000000;\n  border-radius: 0px;\n}\n  .right-aligned-header > .mat-content mat-panel-description {\n  flex-direction: row-reverse;\n  padding-right: 10px;\n}\n  .mat-expansion-indicator {\n  position: relative;\n  left: -2px;\n  top: -2px;\n}\n.toggle-days-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 60px;\n  height: 48px;\n  border-radius: 3px;\n  margin-top: 18px;\n}\n.no-margin[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n.align-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.edit-employee-headings[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\ntable.work-days-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ABABAB;\n  border-radius: 8px;\n  padding: 0px 0px 14px 14px;\n  margin-bottom: 20px;\n}\ntable.work-days-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 17px;\n  padding-top: 10px;\n}\n.work-days-details-table-container[_ngcontent-%COMP%] {\n  height: 700px;\n  overflow: auto;\n}\n.off-days-details-table-container[_ngcontent-%COMP%] {\n  height: 800px;\n  margin-bottom: 20px;\n  overflow: auto;\n}\ntable.work-days-details-table[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  border-radius: 8px;\n  border-spacing: 0px;\n  text-align: center;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #ECECEC;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-right: 1px solid #1A223333;\n  height: 35px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, table.work-days-details-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 0px;\n}\ntable.work-days-details-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n.radio[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  accent-color: #1A2233;\n  \n  \n  transform: scale(1.5);\n  margin-right: 6px;\n}\n.radio-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n  margin-right: 36px;\n}\n.employee-calendar[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dx-scheduler-appointment-content[_ngcontent-%COMP%] {\n  width: calc((100vw - 300px) / 7);\n}\n.employee-calendar[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%] {\n  border-top: 8px solid #69A5C9;\n  background-color: #E8F2FC;\n  white-space: break-spaces;\n  width: calc((100vw - 300px)/7);\n  display: flex;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #69A5C9;\n}\n.employee-calendar[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%], .employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%], .employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  white-space: break-spaces;\n}\n.employee-calendar[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%] {\n  background-color: #E2EFE6;\n  width: 100%;\n  height: 100%;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%]   .template-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 10px;\n  padding-bottom: 0px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .holiday[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #7EB699;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding: 0px;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #A09A61;\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]:after {\n  content: \"\";\n}\n.employee-calendar[_ngcontent-%COMP%]   .dinner[_ngcontent-%COMP%]   .template-wrap[_ngcontent-%COMP%] {\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.chq-cost-per-hour[_ngcontent-%COMP%] {\n  width: 135px;\n  display: block;\n}\n@media (max-width: 820px) {\n  .mobile-width-100[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    flex-basis: 100%;\n  }\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.input-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: auto;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n  position: relative;\n}\n.input-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  word-break: break-all;\n}\n.row[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\n  max-width: 8.33333337% !important;\n}\n@media (max-width: 850px) {\n  .ipad-col-4-to-col-8[_ngcontent-%COMP%] {\n    flex-basis: 66.66666666% !important;\n    max-width: 66.66666666% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2REFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0UsaUJBQUE7QUFDRjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNOO0FBRUk7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBUjtBQUVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSxnQkFBQTtBQUFWO0FBRVU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBWjtBQUdVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFEWjtBQUdZO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRGQ7QUFNUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUpWO0FBT1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLHFCQUFBO0FBTFY7QUFPVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxaO0FBU1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQVBWO0FBU1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQVBaO0FBVVU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBUlo7QUFhVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFYWjtBQWNVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFaWjtBQWNZO0VBQ0UsWUFBQTtBQVpkO0FBZVk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFiZDtBQW9CSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWxCTjtBQXNCRTtFQUNFLGdCQUFBO0FBbkJKO0FBc0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFuQko7QUFxQkE7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFsQko7QUFzQkU7RUFDRSxlQUFBO0FBbkJKO0FBcUJFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBcUJFO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQW5CSjtBQXFCRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQW5CSjtBQXFCRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQW5CSjtBQXFCRTtFQUNFLFlBQUE7QUFuQko7QUF1QkE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQXBCRjtBQXdCQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFyQkY7QUF3QkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBckJGO0FBd0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBckJGO0FBd0JBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQXJCRjtBQXdCQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFyQkY7QUF1QkE7RUFDRSxtQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBdUJBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBc0JFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQXBCSjtBQXVCQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBcEJGO0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQW5CRjtBQXNCQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQW5CRjtBQW9CRTtFQUNFLHlCQUFBO0FBbEJKO0FBb0JFO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0FBbEJKO0FBb0JFO0VBQ0UsaUJBQUE7QUFsQko7QUFvQkU7RUFDRSxpQkFBQTtBQWxCSjtBQW9CRTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtBQWxCSjtBQXVCQTtFQUNFLG1CQUFBO0FBcEJGO0FBd0JFO0VBQ0UscUJBQUE7RUFDMkIsU0FBQTtFQUNJLDBCQUFBO0VBQy9CLHFCQUFBO0VBQ0EsaUJBQUE7QUFuQko7QUFzQkU7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBcEJKO0FBMEJBO0VBQ0UsZUFBQTtBQXZCRjtBQXdCRTtFQUNFLGdDQUFBO0FBdEJKO0FBd0JHO0VBQ0MsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQXRCSjtBQXVCSTtFQUNFLGNBQUE7QUFyQk47QUF3Qkc7RUFDQyxrQkFBQTtFQUNBLHlCQUFBO0FBdEJKO0FBeUJFO0VBQ0UsWUFBQTtBQXZCSjtBQTBCRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF4Qko7QUF5Qkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdkJOO0FBeUJJO0VBQ0UsY0FBQTtBQXZCTjtBQTBCRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF4Qko7QUEwQkk7RUFDRSxjQUFBO0FBeEJOO0FBMEJJO0VBQ0UsV0FBQTtBQXhCTjtBQTBCSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXhCTjtBQTZCQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBMUJGO0FBNkJBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBMUJGO0FBQ0Y7QUE2QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUEzQkY7QUE0QkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBMUJKO0FBNkJFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQTNCSjtBQStCQTtFQUNFLGlDQUFBO0FBNUJGO0FBK0JBO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLGtDQUFBO0VBNUJGO0FBQ0YiLCJmaWxlIjoiZWRpdC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSBjYWxjKDVweCArIDEuNXZ3ICsgNThweCArIDEuNnZ3KSAtIDc2cHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gIC50YWItY29udGVudCB7ICAgIFxyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtdGFiLWJhY2tncm91bmQpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcbiNhZGQtc2NoZWR1bGUge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5wYWdlLWNvbnRhaW5lci1ib29raW5nLXR5cGUge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJvb2tpbmctdHlwZS13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYyg1cHggKyAxLjV2dyk7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE4LjVweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtdGFiLWRlZmF1bHQtY29udGVudCk7XHJcbiAgICAgIG1hcmdpbjogY2FsYyg1cHggKyAxLjV2dyk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEN0Q3RDc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgXHJcbiAgICAgIC5ib29raW5nLXR5cGUtZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzRweDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDU3N3B4O1xyXG4gICAgICAgIGxlZnQ6IDE0NHB4O1xyXG4gICAgICAgIHRvcDogMjY4LjI5cHg7XHJcbiAgXHJcbiAgICAgICAgLmFzc2Vzc21lbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgXHJcbiAgICAgICAgICAuYXNzZXNzbWVudC1jaGVja2JveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTkuNzNweDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5hc3Nlc3NtZW50LXRpbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjQwLjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1OC4xOXB4O1xyXG4gIFxyXG4gICAgICAgICAgICAudGltZS1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIxMnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnZlY3RvciB7XHJcbiAgICAgICAgICB3aWR0aDogNTI1LjUxcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjYsIDM0LCA1MSwgMC4yKTtcclxuICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yZXBhaXItd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcclxuICBcclxuICAgICAgICAgIC5yZXBhaXItY2hlY2tib3gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE5LjczcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5oYW5kb3Zlci13cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiA1NzdweDtcclxuICAgICAgICAgIGhlaWdodDogNTguMTNweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxODBweDtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gIFxyXG4gICAgICAgICAgLmhhbmRvdmVyLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTcuODhweDtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDIyOC4xOXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAzNnB4O1xyXG4gICAgICAgICAgICB0b3A6IDIwMS4wOXB4O1xyXG4gIFxyXG4gICAgICAgICAgICBjaHEtaW5wdXQge31cclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5oYW5kb3Zlci1zYXZlLWJ0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxQjAzQTM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC50aW1lLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0MC41cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTIuNzVweDtcclxuICAgICAgICAgICAgbGVmdDogMzM2LjVweDtcclxuICAgICAgICAgICAgdG9wOiAxOTYuMzhweDtcclxuICBcclxuICAgICAgICAgICAgY2hxLWlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLnRpbWUtZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMTJweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvb3Rlci1zYXZlLWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMThweCAwcHg7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgd2lkdGg6IDE3N3B4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMS41dnc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4uY29tcGV0ZW5jaWVzLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46MTBweDtcclxufVxyXG46Om5nLWRlZXAgLmNocS1pbnB1dC1kaXNhYmxlZCBkaXYgaW5wdXR7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jb21wZXRlbmNpZXMtaW5wdXR7XHJcbiAgLmNoZWNrYm94LXdyYXBwZXJ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIGxhYmVsLmNoZWNrYm94e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gIH1cclxuICAuY2hlY2ttYXJre1xyXG4gICAgbGVmdDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNwYW4tbGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIG1hdC1pY29uIHtcclxuICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgbWF0LWljb24gc3Zne1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnNjaGVkdWxlLWV4cGFuc2lvbntcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAucmlnaHQtYWxpZ25lZC1oZWFkZXIgPiAubWF0LWNvbnRlbnQgbWF0LXBhbmVsLWRlc2NyaXB0aW9ue1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTJweDtcclxuICB0b3A6IC0ycHg7XHJcbn1cclxuXHJcbi50b2dnbGUtZGF5cy1idXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5uby1tYXJnaW57XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5ne1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFsaWduLWNlbnRlcntcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZWRpdC1lbXBsb3llZS1oZWFkaW5nc3tcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG50YWJsZS53b3JrLWRheXMtdGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0FCQUJBQjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMHB4IDBweCAxNHB4IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgdGR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi53b3JrLWRheXMtZGV0YWlscy10YWJsZS1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ub2ZmLWRheXMtZGV0YWlscy10YWJsZS1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiA4MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZS53b3JrLWRheXMtZGV0YWlscy10YWJsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xyXG4gIH1cclxuICB0ZCwgdGh7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMUEyMjMzMzM7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIHRke1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIHRkOmxhc3QtY2hpbGQsIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIHRoZWFkIHRyIHRoIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4ucmFkaW97XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLnJhZGlvLW9wdGlvbntcclxuICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcclxuICAgIGFjY2VudC1jb2xvcjogIzFBMjIzMztcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIElFIDkgKi9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gQ2FsZW5kYXIgRXh0cmEgY3NzXHJcbi5lbXBsb3llZS1jYWxlbmRhcntcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLmR4LXNjaGVkdWxlci1hcHBvaW50bWVudC1jb250ZW50e1xyXG4gICAgd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMzAwcHgpIC8gNyk7XHJcbiAgfVxyXG4gICAud29ya3tcclxuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCAjNjlBNUM5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RjJGQztcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICB3aWR0aDogY2FsYygoMTAwdncgLSAzMDBweCkvNyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC5zdWJqZWN0IHNwYW57XHJcbiAgICAgIGNvbG9yOiAjNjlBNUM5O1xyXG4gICAgfVxyXG4gIH1cclxuICAgLndlZWtlbmQsIC5ob2xpZGF5LCAuZGlubmVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICB9XHJcblxyXG4gIC53ZWVrZW5ke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhvbGlkYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFRkU2O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAudGVtcGxhdGUtd3JhcHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLnN1YmplY3Qgc3BhbntcclxuICAgICAgY29sb3I6ICM3RUI2OTk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kaW5uZXJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5zdWJqZWN0IHNwYW57XHJcbiAgICAgIGNvbG9yOiNBMDlBNjE7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICBjb250ZW50OicnO1xyXG4gICAgfVxyXG4gICAgLnRlbXBsYXRlLXdyYXB7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2hxLWNvc3QtcGVyLWhvdXJ7XHJcbiAgd2lkdGg6IDEzNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo4MjBweCl7XHJcbiAgLm1vYmlsZS13aWR0aC0xMDB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgfSBcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBsYWJlbHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICBzcGFue1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG59XHJcblxyXG4ucm93IC5jb2wtMXtcclxuICBtYXgtd2lkdGg6IDguMzMzMzMzMzclICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCl7XHJcbiAgLmlwYWQtY29sLTQtdG8tY29sLTh7XHJcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NiUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 8203:
/*!**************************************************************!*\
  !*** ./src/app/modules/settings/employee/employee.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeModule": () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-view/list-view.component */ 491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/error-page/error.module */ 88784);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ 2882);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 79243);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ 20330);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);






//import { GridViewComponent } from './grid-view/grid-view.component';













const casesRoutes = [
    {
        path: '',
        component: _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_0__.ListViewComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_5__.VersionControlResolver },
    },
    // { 
    //   path: 'grid-view', 
    //   component: GridViewComponent, 
    //   resolve: { version: VersionControlResolver }
    // },
    {
        path: 'edit/:id',
        component: _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_6__.EditEmployeeComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_5__.VersionControlResolver }
    },
];
class EmployeeModule {
}
EmployeeModule.ɵfac = function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); };
EmployeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: EmployeeModule });
EmployeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(casesRoutes),
            src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_4__.ErrorModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxSchedulerModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule
        ], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EmployeeModule, { declarations: [_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_0__.ListViewComponent,
        //GridViewComponent,
        _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_6__.EditEmployeeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_4__.ErrorModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxSchedulerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule] }); })();


/***/ }),

/***/ 491:
/*!****************************************************************************!*\
  !*** ./src/app/modules/settings/employee/list-view/list-view.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListViewComponent": () => (/* binding */ ListViewComponent)
/* harmony export */ });
/* harmony import */ var src_app_config_display_settings_list_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/display/settings-list-config */ 65364);
/* harmony import */ var src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/widgets/chq-paginator/chq-paginator.component */ 7772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-mat-table/chq-mat-table.component */ 63298);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);













const _c0 = ["org"];
function ListViewComponent_chq_dropdown_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-dropdown", 3, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("clicked", function ListViewComponent_chq_dropdown_5_Template_chq_dropdown_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r4.hideDropdown(ctx_r4.dropdownModelOrganization.name); })("selected", function ListViewComponent_chq_dropdown_5_Template_chq_dropdown_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r6.selectFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dropdownModel", ctx_r1.dropdownModelOrganization);
} }
function ListViewComponent_chq_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ListViewComponent_chq_input_6_Template_chq_input_controlOutput_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r7.updateInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r2.nameTextBox);
} }
class ListViewComponent {
    /**
     * constructor
     * @param router
     */
    constructor(settingsService, commonService, cd, monitorService, caseService, router) {
        this.settingsService = settingsService;
        this.commonService = commonService;
        this.cd = cd;
        this.monitorService = monitorService;
        this.caseService = caseService;
        this.router = router;
        this.pageChanged = false;
        this.pagination = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__.defaultPagination;
        this.totalCount = 100;
        this.configData = src_app_config_display_settings_list_config__WEBPACK_IMPORTED_MODULE_0__.SettingsListConfig;
        this.queryParams = '';
        this.userEmailDetail = '';
        this.input = { org: false, name: false };
        this.applyButtonModel = {
            label: 'apply',
            type: 'primary',
            icon: ''
        };
        this.resetButtonModel = {
            label: 'reset_all',
            type: 'outline',
            icon: ''
        };
        this.dropdownModelFilter = {
            options: [{ label: 'Select...' }, { label: 'Name' }, { label: 'Organization' }],
            placeHolder: 'select_dot',
            label: 'select_type',
            name: 'filterDropdown',
            displayValue: 'label',
            selectedOption: { 'label': 'Select...' }
        };
        this.dropdownModelOrganization = {
            options: [],
            placeHolder: 'organization',
            label: 'select_organization',
            name: 'orgDropdown',
            displayValue: 'name',
            selectedOption: []
        };
        this.nameTextBox = {
            placeHolder: 'name',
            label: 'enter_name',
            name: 'name',
            type: 'text',
            value: '',
            required: false
        };
        this.handleSortChange = (sort) => {
            if (sort) {
                this.pagination = Object.assign(Object.assign({}, this.pagination), { orderBy: sort.active, sortDirection: sort.direction });
                this.commonService.showLoading();
                this.getEmployees();
            }
        };
        /**
         * cellClickedCallback
         */
        this.cellClickedCallback = (row, col, $event) => {
            var _a, _b;
            console.log(row, col);
            const employeeId = (_b = (_a = row.filter(item => item.id == 'EmployeeGuid')[0]) === null || _a === void 0 ? void 0 : _a.result.value) !== null && _b !== void 0 ? _b : 0;
            if (employeeId != 0)
                this.router.navigate([`/settings/employees/edit/${employeeId}`]);
        };
        this.i18n = this.commonService.geti18nInfo();
    }
    /**
       * ngOnInit
       */
    ngOnInit() {
        var _a, _b, _c;
        this.monitorService.logEvent('ngOnInit', ['ListViewComponent', 'addenda-repair']);
        this.tableConfig = this.configData;
        this.applyButtonModel.onclick = this.filterCases.bind(this);
        this.resetButtonModel.onclick = this.resetFilter.bind(this);
        this.commonService.showLoading();
        this.applyButtonModel.type = 'disabled';
        this.userEmailDetail = (_b = (_a = this.commonService.userProfileData.value) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.email;
        this.userOrg = (_c = this.commonService.userProfileData.value) === null || _c === void 0 ? void 0 : _c.data.organizationDetail;
        this.caseService.getBMOrganizations().subscribe({
            next: (response) => {
                this.organizationList = response.data;
                this.dropdownModelOrganization = Object.assign(Object.assign({}, this.dropdownModelOrganization), { options: this.organizationList });
                this.getEmployees();
            },
            error: (err) => {
                this.monitorService.logEvent('getOrganizations', ['ListViewComponent', 'addenda-repair', {
                        err
                    }]);
                this.getEmployees();
                this.commonService.hideLoading();
            }
        });
    }
    /**
    * handlePaginationChange
    * @param event
    */
    handlePaginationChange(event) {
        const pagination = {
            pageSize: event.pageSize,
            offset: event.offset,
            currentPage: event.currentPage
        };
        this.pagination.currentPage = event.currentPage;
        this.pagination = Object.assign(Object.assign({}, this.pagination), pagination);
        this.pageChanged = true;
        this.getEmployees();
    }
    /**
     * filter hide
     */
    hideDropdown(name) {
        if (name === 'filterDropdown') {
            if (this.org) {
                this.org.closeDropdown();
            }
        }
    }
    /**
    * filter cases
    */
    filterCases() {
        var _a, _b, _c;
        const selectedFilter = (_a = this.dropdownModelFilter.selectedOption) === null || _a === void 0 ? void 0 : _a.label;
        this.queryParams = '';
        switch (selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.toLowerCase()) {
            case 'name':
                if (this.nameTextBox.value != '') {
                    const empName = this.nameTextBox.value;
                    this.queryParams = `(contains(tolower(FirstName),'${empName}')) or (contains(tolower(LastName),'${empName}'))`;
                }
                break;
            case 'organization':
                this.queryParams += `OrgName eq '${(_c = (_b = this.dropdownModelOrganization) === null || _b === void 0 ? void 0 : _b.selectedOption) === null || _c === void 0 ? void 0 : _c.name}' OR `;
                break;
            default:
                break;
        }
        if (this.queryParams != '') {
            if (this.queryParams.indexOf('OR') !== -1) {
                this.queryParams = this.queryParams.substring(0, this.queryParams.lastIndexOf('OR'));
            }
        }
        this.monitorService.logEvent('filter employee', ['ListViewComponent', 'addenda-repair', {
                selectedFilter
            }]);
        this.getEmployees();
    }
    /**
     * selected any filter in the dropdown
     * @param $event
     */
    selectFilter($event) {
        var _a;
        this.monitorService.logEvent('selectFilter', ['ListViewComponent', 'addenda-repair', {
                $event
            }]);
        if (($event === null || $event === void 0 ? void 0 : $event.name) == 'filterDropdown') {
            this.nameTextBox.value = '';
            this.dropdownModelFilter.selectedOption = $event.value;
            this.dropdownModelOrganization.selectedOption = [];
            switch ((_a = $event.value[this.dropdownModelFilter.displayValue]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
                case 'organization':
                    this.hideShowDropdown('org');
                    this.dropdownModelOrganization = Object.assign(Object.assign({}, this.dropdownModelOrganization), { selectedOption: this.userOrg });
                    this.dropdownModelOrganization.selectedOption ? this.applyButtonModel.type = 'primary' : this.applyButtonModel.type = 'disabled';
                    this.filterCases();
                    break;
                case 'name':
                    this.applyButtonModel.type = 'disabled';
                    this.hideShowDropdown('name');
                    break;
                default:
                    this.applyButtonModel.type = 'disabled';
                    this.hideShowDropdown('');
                    break;
            }
        }
        else if (($event === null || $event === void 0 ? void 0 : $event.name) == 'orgDropdown') {
            $event.value != undefined ? this.applyButtonModel.type = 'primary' : this.applyButtonModel.type = 'disabled';
            this.dropdownModelOrganization.selectedOption = $event.value;
        }
        if (($event === null || $event === void 0 ? void 0 : $event.name) == 'filterDropdown') {
            ListViewComponent.filterDetail['mainFilter'] = $event;
        }
        else {
            ListViewComponent.filterDetail['subFilter'] = $event;
        }
    }
    /**
     *
     * @param event
     */
    updateInput(event) {
        this.nameTextBox.value = event.value;
        if (event.value != '') {
            this.applyButtonModel.type = 'primary';
        }
        else {
            this.applyButtonModel.type = 'disabled';
        }
    }
    /**
     * hide show dropdown
    */
    hideShowDropdown(key) {
        this.input[key] = true;
        Object.keys(this.input).forEach((value) => {
            if (value != key) {
                this.input[value] = false;
            }
        });
    }
    /**
     * reset Filter
     */
    resetFilter() {
        this.applyButtonModel.type = 'disabled';
        this.nameTextBox = Object.assign(Object.assign({}, this.nameTextBox), { value: '' });
        const obj = {
            name: 'filterDropdown',
            type: 'select',
            value: { label: 'Select...' }
        };
        this.selectFilter(obj);
        this.filterCases();
    }
    /**
    * getEmployeeList
    */
    getEmployees() {
        this.commonService.showLoading();
        this.settingsService.getEmployees(this.pagination, this.queryParams).subscribe({
            next: (response) => {
                this.tableData = response ? response === null || response === void 0 ? void 0 : response.value : [];
                if (this.userEmailDetail && (response === null || response === void 0 ? void 0 : response.value.map((item) => (item.Email)).includes(this.userEmailDetail))) {
                    let tempArr;
                    // eslint-disable-next-line prefer-const
                    tempArr = this.tableData;
                    const record = this.tableData.find((ele) => ele.Email === this.userEmailDetail);
                    this.tableData = tempArr.filter(item => item.Email !== this.userEmailDetail);
                    this.tableData.unshift(record);
                }
                this.pagination.count = response ? response['@odata.count'] : 0;
                this.pagination = Object.assign({}, this.pagination);
                this.cd.detectChanges();
                this.commonService.hideLoading();
            },
            error: () => {
                this.commonService.hideLoading();
            }
        });
    }
}
ListViewComponent.currentPage = 1;
ListViewComponent.filterDetail = [];
ListViewComponent.ɵfac = function ListViewComponent_Factory(t) { return new (t || ListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_5__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
ListViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ListViewComponent, selectors: [["app-list-view"]], viewQuery: function ListViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.org = _t.first);
    } }, decls: 18, vars: 11, consts: [[1, "employee-list"], [1, "filter-section"], [1, "menu-section"], [3, "dropdownModel", "clicked", "selected"], ["filter", ""], [3, "dropdownModel", "clicked", "selected", 4, "ngIf"], [3, "inputModel", "controlOutput", 4, "ngIf"], [3, "buttonModel"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "pageChanged", "sortChanged", "cellClicked", "i18n"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], ["org", ""], [3, "inputModel", "controlOutput"]], template: function ListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "chq-dropdown", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("clicked", function ListViewComponent_Template_chq_dropdown_clicked_3_listener() { return ctx.hideDropdown(ctx.dropdownModelFilter.name); })("selected", function ListViewComponent_Template_chq_dropdown_selected_3_listener($event) { return ctx.selectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ListViewComponent_chq_dropdown_5_Template, 2, 1, "chq-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ListViewComponent_chq_input_6_Template, 1, 1, "chq-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "chq-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "chq-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Reset All");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "chq-mat-table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dropdownModel", ctx.dropdownModelFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.input.org);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.input.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx.applyButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx.resetButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx.tableConfig)("tableData", ctx.tableData)("pageChanged", ctx.pageChanged)("sortChanged", ctx.sortChanged)("cellClicked", ctx.cellClickedCallback)("i18n", ctx.i18n);
    } }, directives: [_widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.ChqDropdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_8__.ChqMatTableComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_9__.ChqInputComponent], styles: [".employee-list {\n  padding-bottom: 1.5vw;\n}\n.employee-list .filter-section {\n  display: flex;\n  justify-content: flex-end;\n}\n.employee-list .filter-section .dropdown-container.dropdown-edit-mode {\n  top: 0px !important;\n}\n.employee-list .filter-section .input-wrapper {\n  position: inherit !important;\n  top: 0 !important;\n}\n.employee-list .filter-section chq-dropdown,\n.employee-list .filter-section chq-input {\n  width: 180px;\n  margin-top: 4px;\n}\n.employee-list .menu-section {\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.employee-list .Hold {\n  background-color: var(--xa-sunset-orange);\n  color: var(--xa-white);\n}\n.employee-list .selected-label .content {\n  margin-right: 15px;\n}\nmat-cell:first-of-type,\nmat-header-cell:first-of-type,\nmat-footer-cell:first-of-type {\n  padding-left: 0;\n  padding-right: 0 !important;\n}\nchq-mat-table .mat-icon {\n  width: 18.74px;\n  height: 15.64px;\n  margin-right: 6px;\n}\nchq-mat-table .mat-icon > svg > g > path {\n  fill: #4C6BD2 !important;\n}\nchq-mat-table .mat-icon > svg > path {\n  fill: #4C6BD2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUNSO0FBQ1E7RUFDSSxtQkFBQTtBQUNaO0FBQ1E7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0FBQ1o7QUFFUTs7RUFFSSxZQUFBO0VBQ0EsZUFBQTtBQUFaO0FBSUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFGUjtBQUtJO0VBQ0kseUNBQUE7RUFDQSxzQkFBQTtBQUhSO0FBT1E7RUFDSSxrQkFBQTtBQUxaO0FBV0E7OztFQUdJLGVBQUE7RUFDQSwyQkFBQTtBQVJKO0FBV0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUko7QUFZWTtFQUNJLHdCQUFBO0FBVmhCO0FBY1E7RUFDSSx3QkFBQTtBQVpaIiwiZmlsZSI6Imxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXBsb3llZS1saXN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjV2dztcclxuXHJcbiAgICAuZmlsdGVyLXNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgLmRyb3Bkb3duLWNvbnRhaW5lci5kcm9wZG93bi1lZGl0LW1vZGUge1xyXG4gICAgICAgICAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hxLWRyb3Bkb3duLFxyXG4gICAgICAgIGNocS1pbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVudS1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5Ib2xkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1zdW5zZXQtb3JhbmdlKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpXHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdGVkLWxhYmVsIHtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLFxyXG5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcclxubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5jaHEtbWF0LXRhYmxlIC5tYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogMTguNzRweDtcclxuICAgIGhlaWdodDogMTUuNjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG5cclxuICAgID5zdmcge1xyXG4gICAgICAgID5nIHtcclxuICAgICAgICAgICAgPnBhdGgge1xyXG4gICAgICAgICAgICAgICAgZmlsbDogIzRDNkJEMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+cGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6ICM0QzZCRDIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_settings_employee_employee_module_ts.js.map