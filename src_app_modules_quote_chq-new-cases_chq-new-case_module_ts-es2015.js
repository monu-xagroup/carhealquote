"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_quote_chq-new-cases_chq-new-case_module_ts"],{

/***/ 72329:
/*!*********************************************************************!*\
  !*** ./src/app/guards/deactivate-gaurd/component-can-deactivate.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentCanDeactivateComponent": function() { return /* binding */ ComponentCanDeactivateComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ComponentCanDeactivateComponent {
}
ComponentCanDeactivateComponent.ɵfac = function ComponentCanDeactivateComponent_Factory(t) { return new (t || ComponentCanDeactivateComponent)(); };
ComponentCanDeactivateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentCanDeactivateComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function ComponentCanDeactivateComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 72484:
/*!****************************************************************!*\
  !*** ./src/app/guards/deactivate-gaurd/form-can-deactivate.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCanDeactivate": function() { return /* binding */ FormCanDeactivate; }
/* harmony export */ });
/* harmony import */ var _component_can_deactivate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-can-deactivate */ 72329);

class FormCanDeactivate extends _component_can_deactivate__WEBPACK_IMPORTED_MODULE_0__.ComponentCanDeactivateComponent {
    /**
     * can Deactiate
     * @returns boolean
     */
    canDeactivate() {
        return !this.checkDataChanged();
    }
}


/***/ }),

/***/ 25806:
/*!**************************************************!*\
  !*** ./src/app/model/chq-repair-dialog-model.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepairEstimateDialogData": function() { return /* binding */ RepairEstimateDialogData; }
/* harmony export */ });
const RepairEstimateDialogData = {
    approve: {
        status: 'Approve Case',
        info: 'Please fill out a reason why you are approving this case.',
        buttonModel: {
            label: 'Approve Case',
            type: 'success',
            icon: 'check',
        },
        imageGallery: false,
        gallery: []
    },
    reject: {
        status: 'Reject Case',
        info: 'Please fill out a reason why you are rejecting this case.',
        buttonModel: {
            label: 'Reject Case',
            type: 'red',
            icon: 'cross',
        },
        imageGallery: false,
        gallery: []
    },
    close: {
        status: 'Close Case',
        info: 'Please fill out a reason why you are closing this case.',
        buttonModel: {
            label: 'Close Case',
            type: 'primary',
            icon: 'folder-plus',
        },
        imageGallery: false,
        gallery: [],
    },
    complete: {
        status: 'Complete Case',
        info: 'Please fill out a reason why you are completing this case.',
        buttonModel: {
            label: 'Complete Case',
            type: 'primary',
            icon: 'folder-plus',
        },
        imageGallery: false,
        gallery: [],
    }
};


/***/ }),

/***/ 20949:
/*!********************************************************************!*\
  !*** ./src/app/modules/quote/chq-new-cases/chq-new-case.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyHammerConfig": function() { return /* binding */ MyHammerConfig; },
/* harmony export */   "ChqNewCaseModule": function() { return /* binding */ ChqNewCaseModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var _chq_new_customer_chq_new_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chq-new-customer/chq-new-customer.component */ 69690);
/* harmony import */ var _chq_new_vehicle_chq_new_vehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chq-new-vehicle/chq-new-vehicle.component */ 37158);
/* harmony import */ var _chq_repair_estimate_chq_repair_estimate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chq-repair-estimate/chq-repair-estimate.component */ 69368);
/* harmony import */ var src_app_guards_deactivate_gaurd_deactivate_gaurd_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/deactivate-gaurd/deactivate-gaurd.guard */ 38080);
/* harmony import */ var src_app_dialogs_form_data_dialog_form_data_dialog_form_data_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialogs/form-data-dialog/form-data-dialog/form-data-dialog.component */ 69327);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/error-page/error.module */ 88784);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_shared_new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/new-photos/new-photos.component */ 4704);
/* harmony import */ var src_app_shared_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/new-documents/new-documents.component */ 64307);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);



















class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.HammerGestureConfig {
}
MyHammerConfig.ɵfac = /*@__PURE__*/ function () { let ɵMyHammerConfig_BaseFactory; return function MyHammerConfig_Factory(t) { return (ɵMyHammerConfig_BaseFactory || (ɵMyHammerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetInheritedFactory"](MyHammerConfig)))(t || MyHammerConfig); }; }();
MyHammerConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: MyHammerConfig, factory: MyHammerConfig.ɵfac });
const casesRoutes = [
    {
        path: '', component: _chq_new_customer_chq_new_customer_component__WEBPACK_IMPORTED_MODULE_2__.ChqNewCustomerComponent,
        canDeactivate: [src_app_guards_deactivate_gaurd_deactivate_gaurd_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard],
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_7__.VersionControlResolver }
    },
    {
        path: 'vehicle',
        component: _chq_new_vehicle_chq_new_vehicle_component__WEBPACK_IMPORTED_MODULE_3__.ChqNewVehicleComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_7__.VersionControlResolver }
    },
    {
        path: 'document',
        component: src_app_shared_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_11__.NewDocumentsComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_7__.VersionControlResolver }
    },
    {
        path: 'photos',
        component: src_app_shared_new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_10__.NewPhotosComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_7__.VersionControlResolver }
    },
    {
        path: 'estimate',
        component: _chq_repair_estimate_chq_repair_estimate_component__WEBPACK_IMPORTED_MODULE_4__.ChqRepairEstimateComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_7__.VersionControlResolver }
    },
    {
        path: 'refresh',
        component: _chq_new_customer_chq_new_customer_component__WEBPACK_IMPORTED_MODULE_2__.ChqNewCustomerComponent
    }
];
class ChqNewCaseModule {
}
ChqNewCaseModule.ɵfac = function ChqNewCaseModule_Factory(t) { return new (t || ChqNewCaseModule)(); };
ChqNewCaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ChqNewCaseModule });
ChqNewCaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [src_app_guards_deactivate_gaurd_deactivate_gaurd_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard,
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.HammerModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(casesRoutes),
            src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule,
            src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_8__.ErrorModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ChqNewCaseModule, { declarations: [_chq_new_customer_chq_new_customer_component__WEBPACK_IMPORTED_MODULE_2__.ChqNewCustomerComponent, _chq_new_vehicle_chq_new_vehicle_component__WEBPACK_IMPORTED_MODULE_3__.ChqNewVehicleComponent, _chq_repair_estimate_chq_repair_estimate_component__WEBPACK_IMPORTED_MODULE_4__.ChqRepairEstimateComponent, src_app_dialogs_form_data_dialog_form_data_dialog_form_data_dialog_component__WEBPACK_IMPORTED_MODULE_6__.FormDataDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.HammerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule,
        src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_8__.ErrorModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule] }); })();


/***/ }),

/***/ 69690:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/quote/chq-new-cases/chq-new-customer/chq-new-customer.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChqNewCustomerComponent": function() { return /* binding */ ChqNewCustomerComponent; }
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 72934);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 87554);
/* harmony import */ var src_app_guards_deactivate_gaurd_form_can_deactivate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/deactivate-gaurd/form-can-deactivate */ 72484);
/* harmony import */ var _chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chq-new-customer-form-data-helper */ 83853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_core_core_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/core/core.service.service */ 85567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-step-header/chq-step-header.component */ 42736);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
















const _c0 = ["companyOrg"];
const _c1 = ["licenseId"];
const _c2 = ["driverPhone"];
const _c3 = ["driverCode"];
const _c4 = ["orgType"];
function ChqNewCustomerComponent_div_0_chq_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_chq_input_14_Template_chq_input_controlOutput_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r10.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r3.formModel.claimNumber);
} }
const _c5 = function (a0) { return { "hide": a0 }; };
function ChqNewCustomerComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "chq-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_div_15_Template_chq_input_controlOutput_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r12.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c5, ctx_r4.isFormConfirmed));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, "car_owner_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r4.formModel.carOwnerSelector);
} }
const _c6 = function (a0) { return { "disable-input disable-controls": a0 }; };
function ChqNewCustomerComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "chq-input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("clicked", function ChqNewCustomerComponent_div_0_div_16_Template_chq_input_clicked_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r16.hideDropdown($event); })("controlOutput", function ChqNewCustomerComponent_div_0_div_16_Template_chq_input_controlOutput_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r18.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "chq-input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_div_16_Template_chq_input_controlOutput_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r19.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r5.isRetailProvider && ctx_r5.isFormConfirmed ? "car_owner_details" : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 4, "company_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r5.formModel.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c6, ctx_r5.formModel.companyName.type === "select"))("inputModel", ctx_r5.formModel.licenseId);
} }
function ChqNewCustomerComponent_div_0_chq_button_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "chq-button", 42);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r8.confirmButtonModel);
} }
function ChqNewCustomerComponent_div_0_chq_button_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "chq-button", 42);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r9.nextButtonModel);
} }
const _c7 = function (a0) { return { "text-mode": a0 }; };
function ChqNewCustomerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "chq-step-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "chq-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r20.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "chq-input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("clicked", function ChqNewCustomerComponent_div_0_Template_chq_input_clicked_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r22.hideDropdown($event); })("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r23.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ChqNewCustomerComponent_div_0_chq_input_14_Template, 1, 1, "chq-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ChqNewCustomerComponent_div_0_div_15_Template, 7, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ChqNewCustomerComponent_div_0_div_16_Template, 10, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "chq-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r24.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "chq-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r25.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "chq-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r26.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "chq-input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("clicked", function ChqNewCustomerComponent_div_0_Template_chq_input_clicked_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r27.hideDropdown($event); })("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r28.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "chq-input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r29.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, ChqNewCustomerComponent_div_0_chq_button_40_Template, 1, 1, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, ChqNewCustomerComponent_div_0_chq_button_41_Template, 1, 1, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](20, _c7, ctx_r0.isFormConfirmed));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chqModel", ctx_r0.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r0.formModel.jobNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 16, "work_provider_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r0.formModel.companyOrgType);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.customerFormData["companyOrgType"] === "Insurance Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isRetailProvider);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.isRetailProvider || ctx_r0.customerFormData[ctx_r0.formModel.carOwnerSelector.name] && ctx_r0.customerFormData[ctx_r0.formModel.carOwnerSelector.name] !== "Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.isRetailProvider && ctx_r0.isFormConfirmed && (ctx_r0.customerFormData[ctx_r0.formModel.carOwnerSelector.name] && ctx_r0.customerFormData[ctx_r0.formModel.carOwnerSelector.name] === "Person") ? "car_owner_details" : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 18, "drivers_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r0.formModel.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r0.formModel.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r0.formModel.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r0.formModel.driverCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx_r0.formModel.driverPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.currentCaseStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isFormConfirmed && !ctx_r0.commonService.isViewOnly);
} }
function ChqNewCustomerComponent_no_access_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "no-access-error");
} }
class ChqNewCustomerComponent extends src_app_guards_deactivate_gaurd_form_can_deactivate__WEBPACK_IMPORTED_MODULE_0__.FormCanDeactivate {
    /**
     * constructor
     * @param router
     */
    constructor(router, commonService, monitorService, caseService, coreService, route) {
        super();
        this.router = router;
        this.commonService = commonService;
        this.monitorService = monitorService;
        this.caseService = caseService;
        this.coreService = coreService;
        this.route = route;
        this.header = _chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.newCaseHeader;
        this.isApiLoading = true;
        this.confirmButtonModel = {
            label: '',
            type: 'primary'
        };
        this.nextButtonModel = {
            label: '',
            type: 'primary'
        };
        this.isFormConfirmed = false;
        this.isRetail = true;
        this.customerFormData = {
            jobNumber: '',
            companyOrgType: '',
            claimNumber: '',
            companyName: '',
            tariffId: 0,
            isTariffEditable: true,
            licenseId: '',
            firstName: '',
            lastName: '',
            companyId: 0,
            partnershipId: 0,
            customerTypeID: 1,
            driverCode: '',
            driverPhone: 0,
            carOwnerSelector: '',
            email: ''
        };
        this.caseId = '0';
        this.caseObjectId = 0;
        this.showNoAccess = false;
        if (this.commonService.accessRight.closed) {
            this.commonService.accessRight = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(true);
        }
        this.commonService.userProfileData.subscribe((res) => {
            if (res && res.data) {
                const { organizationDetail } = res.data;
                if (organizationDetail) {
                    this.currentOrgId = organizationDetail.id;
                }
            }
        });
    }
    /**
     * check data changed
     */
    checkDataChanged() {
        if (this.isFormConfirmed) {
            return false;
        }
        else if (this.originalData) {
            return this.compareObjects(this.originalData, this.customerFormData);
        }
        else if (this.checkDataDirty()) {
            return true;
        }
        return false;
    }
    /**
     * compare objects
     */
    compareObjects(o1, o2) {
        const keys = Object.keys(o1);
        for (const p in keys) {
            const key = keys[p];
            if (o1[key] !== o2[key]) {
                return true;
            }
        }
        return false;
    }
    /**
     * get is Retail
     */
    get isRetailProvider() {
        if (!this.customerFormData.companyOrgType) {
            return false;
        }
        return this.customerFormData['companyOrgType'] === 'Retail';
    }
    /**
     * ngAfterViewInit hook
     * @param fb FormBuilder
     */
    ngAfterViewInit() {
        this.commonService.updatePage('/quote/case/0');
        this.monitorService.logEvent('ngAfterViewInit', ['ChqNewCustomerComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
    }
    /**
     * get is Retail
     */
    get isRetailAndCompanyProvider() {
        if (!this.customerFormData.companyOrgType) {
            return false;
        }
        return this.customerFormData['companyOrgType'] !== 'Retail'
            || (this.customerFormData['companyOrgType'] === 'Retail' && this.customerFormData['carOwnerSelector']
                && this.customerFormData['carOwnerSelector'] !== 'Person');
    }
    /**
     * get retail
     */
    get retail() {
        if (!this.customerFormData.companyOrgType) {
            return '';
        }
        return this.formModel.companyOrgType.selectedOption[this.formModel.companyOrgType.displayValue];
    }
    /**
     * update button
     */
    updateButton() {
        const keys = Object.keys(this.formModel);
        for (const k in keys) {
            const key = keys[k];
            this.formModel[key] = Object.assign(Object.assign({}, this.formModel[key]), { mode: this.isFormConfirmed ? 'value' : 'text' });
        }
        this.isFormConfirmed = !this.isFormConfirmed;
        this.confirmButtonModel = Object.assign(Object.assign({}, this.confirmButtonModel), { label: this.isFormConfirmed ? 'Change details' : 'Confirm', type: this.isFormConfirmed ? 'outline' : 'primary', icon: this.isFormConfirmed ? 'gobackward' : 'check' });
        this.monitorService.logEvent('updateButton', ['ChqNewCustomerComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
    }
    /**
     * setTextMode
     */
    setTextMode() {
        const keys = Object.keys(this.formModel);
        for (const k in keys) {
            const key = keys[k];
            if (key === 'companyOrgType') {
                const selectObj = {};
                const { displayValue, fieldValue } = this.formModel[key];
                selectObj[fieldValue] = this.customerFormData[key];
                selectObj[displayValue] = '';
                selectObj[displayValue] = this.customerFormData[key];
                this.formModel[key] = Object.assign(Object.assign({}, this.formModel[key]), { mode: 'text', selectedOption: selectObj });
            }
            else {
                this.formModel[key] = Object.assign(Object.assign({}, this.formModel[key]), { mode: 'text' });
            }
        }
        this.confirmButtonModel = Object.assign(Object.assign({}, this.confirmButtonModel), { label: 'Change details', type: 'outline', icon: 'gobackward' });
        this.monitorService.logEvent('setTextMode', ['ChqNewCustomerComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
    }
    /**
     * handles confirm click
     * returns void
     */
    confirmData() {
        this.monitorService.logEvent('confirmData', ['ChqNewCustomerComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
        if (this.isFormConfirmed) {
            if (!this.formModel.companyOrgType.observable) {
                this.formModel.companyOrgType.selectedOption.name = '';
                this.formModel.companyOrgType.observable = this.caseService.getProviders();
                setTimeout(() => {
                    this.orgType.triggerObservable();
                });
            }
            this.updateButton();
            return;
        }
        this.commonService.showLoading();
        const formData = {
            'companyOrgType': this.customerFormData['companyOrgType'],
            'caseTypeID': 1,
            'customerTypeID': this.customerFormData['companyOrgType'] === 'Retail' ? this.customerFormData.customerTypeID : null,
            'domainID': 2100,
            'tariffId': this.customerFormData.tariffId,
            'isTariffEditable': this.customerFormData.isTariffEditable,
            'firstName': this.customerFormData.firstName,
            'lastName': this.customerFormData.lastName,
            'countryCode': this.customerFormData.driverCode,
            'mobileNumber': this.customerFormData.driverPhone.toString(),
            'email': this.customerFormData.email,
            'companyId': this.customerFormData.companyId,
            'partnershipId': this.customerFormData.partnershipId,
            'claimNumber': this.customerFormData['companyOrgType'] === 'Insurance Company' ? this.customerFormData.claimNumber : '',
            'companyName': !this.isRetailAndCompanyProvider ? '' : this.customerFormData.companyName,
            'companyLicenseNumber': !this.isRetailAndCompanyProvider ? '' : this.customerFormData.licenseId
        };
        if (!this.commonService.repairPermission) {
            formData['externalID'] = this.customerFormData.jobNumber;
        }
        if (this.caseId != '0') {
            formData.caseId = this.caseObjectId;
            formData.caseGuid = this.caseId;
            this.caseService.updateCase(formData).subscribe({
                next: (result) => {
                    if (result) {
                        this.updateButton();
                        this.router.navigate([`/quote/case/${this.caseId}/vehicle`]);
                    }
                    this.commonService.hideLoading();
                },
                error: (err) => {
                    this.commonService.hideLoading();
                    this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_12__.SeverityLevel.Error);
                }
            });
        }
        else {
            this.caseService.saveNewCase(formData).subscribe({
                next: (result) => {
                    if (result) {
                        this.caseId = result.data.caseGuid;
                        this.commonService.caseId.next(this.caseId);
                        this.caseObjectId = result.data.id;
                        this.header.caseNumber = result.data.caseNumber;
                        this.updateButton();
                        //sessionStorage.setItem('key', result.data.key);
                        this.router.navigate([`/quote/case/${this.caseId}`], { replaceUrl: true });
                        this.router.navigate([`/quote/case/${this.caseId}/vehicle`]);
                    }
                    this.commonService.hideLoading();
                },
                error: (err) => {
                    this.commonService.hideLoading();
                    this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_12__.SeverityLevel.Error);
                }
            });
        }
    }
    /**
     * hide dropdown
     */
    hideDropdown(name) {
        var _a, _b, _c, _d;
        if (name === this.formModel.companyOrgType.name) {
            this.driverCode.closeDropdown();
            (_a = this.companyOrg) === null || _a === void 0 ? void 0 : _a.closeDropdown();
        }
        else if (name === this.formModel.companyName.name) {
            this.driverCode.closeDropdown();
            (_b = this.orgType) === null || _b === void 0 ? void 0 : _b.closeDropdown();
        }
        else {
            (_c = this.orgType) === null || _c === void 0 ? void 0 : _c.closeDropdown();
            (_d = this.companyOrg) === null || _d === void 0 ? void 0 : _d.closeDropdown();
        }
    }
    /**
     * on dropdown observable load
     */
    onObservableLoad(items) {
        var _a;
        this.commonService.hideLoading();
        if (!items) {
            return;
        }
        if (items && items.length > 0) {
            const selectedItem = items.filter((it) => {
                var _a;
                return it.phoneCountryCode === ((_a = this.formModel.driverCode.selectedOption) === null || _a === void 0 ? void 0 : _a.phoneCountryCode);
            });
            if (selectedItem.length > 0) {
                const output = selectedItem[0];
                const validationPattern = output['regExpression'];
                this.formModel.driverCode = Object.assign(Object.assign({}, this.formModel.driverCode), { selectedOption: output });
                this.driverPhone.updateCurrentValidation(validationPattern, true);
            }
            const caseId = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.paramMap.get('id');
            if (!caseId || caseId === '0') {
                this.setPrefillData(items);
            }
        }
    }
    /**
     * get Control Output
    */
    onFormUpdate(output) {
        var _a, _b, _c, _d;
        this.monitorService.logEvent('onFormUpdate', ['ChqNewCustomerComponent', 'addenda-quote', {
                caseId: this.caseId,
                output
            }]);
        if (output.name === 'driverCode') {
            const validationPattern = output.value['regExpression'];
            this.driverPhone.updateCurrentValidation(validationPattern);
        }
        if (output.type === 'select') {
            const oldValue = this.customerFormData[output.name];
            const keyValue = this.formModel[output.name].fieldValue || this.formModel[output.name].displayValue;
            if (((_a = this.formModel[output.name]) === null || _a === void 0 ? void 0 : _a.selectedOption) && ((_b = this.formModel[output.name]) === null || _b === void 0 ? void 0 : _b.selectedOption[keyValue]) === (output === null || output === void 0 ? void 0 : output.value[keyValue])) {
                return;
            }
            this.formModel[output.name] = Object.assign(Object.assign({}, this.formModel[output.name]), { selectedOption: output.value });
            this.customerFormData[output.name] = output.value[keyValue];
            if (output.name === 'companyOrgType') {
                //this.formModel.companyOrgType.label = output.value[this.formModel[output.name].displayValue];
                if (oldValue !== this.customerFormData[output.name]) {
                    setTimeout(() => {
                        var _a, _b;
                        (_a = this.companyOrg) === null || _a === void 0 ? void 0 : _a.setUnTouched();
                        (_b = this.licenseId) === null || _b === void 0 ? void 0 : _b.setUnTouched();
                    });
                }
                if (output.value[keyValue] && output.value[this.formModel[output.name].displayValue] !== 'Insurance Company') {
                    this.formModel['claimNumber'] = Object.assign(Object.assign({}, this.formModel['claimNumber']), { value: '' });
                }
                if (output.value[keyValue] && output.value[this.formModel[output.name].displayValue] !== 'Retail') {
                    this.formModel.companyName = Object.assign(Object.assign({}, this.formModel.companyName), { displayValue: 'companyName', fieldValue: 'companyName', onObservableLoad: this.updateCaseData.bind(this), placeHolder: 'Select...', value: '', type: 'select', observable: this.caseService.getCompanyData(output.value[keyValue], '') });
                    if (this.formModel.companyName.selectedOption && ((_c = this.formModel.companyName.selectedOption) === null || _c === void 0 ? void 0 : _c.tariffId)) {
                        this.customerFormData.companyId = null;
                        this.customerFormData.companyName = null;
                        this.formModel.companyName.selectedOption = {};
                    }
                    this.customerFormData.licenseId = '';
                    this.formModel.licenseId = Object.assign(Object.assign({}, this.formModel.licenseId), { value: '' });
                    setTimeout(() => {
                        var _a;
                        if (oldValue && oldValue !== 'Retail' && this.currentStatus) {
                            (_a = this.companyOrg) === null || _a === void 0 ? void 0 : _a.triggerObservable();
                        }
                    });
                }
                else {
                    if (output.value[keyValue] && output.value[this.formModel[output.name].displayValue] === 'Retail') {
                        this.formModel['claimNumber'] = Object.assign(Object.assign({}, this.formModel['claimNumber']), { value: '' });
                        this.formModel.companyName = Object.assign(Object.assign({}, this.formModel.companyName), { placeHolder: 'Company Name' });
                        this.customerFormData.claimNumber = '';
                        if (this.currentStatus) {
                            this.caseService.getCompanyData(output.value[keyValue], '').subscribe({
                                next: (resp) => {
                                    var _a, _b, _c;
                                    if (resp && ((_a = resp.data) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                        const data = resp.data[0];
                                        this.customerFormData['companyId'] = data['companyId'];
                                        this.customerFormData['tariffId'] = data['tariffId'];
                                        if (this.formModel.companyName.selectedOption && ((_b = this.formModel.companyName.selectedOption) === null || _b === void 0 ? void 0 : _b.tariffId)) {
                                            this.customerFormData.licenseId = '';
                                            this.formModel.licenseId = Object.assign(Object.assign({}, (_c = this.formModel) === null || _c === void 0 ? void 0 : _c.licenseId), { value: '' });
                                        }
                                        if (this.customerFormData[this.formModel.carOwnerSelector.name] === 'Person') {
                                            this.customerFormData['companyName'] = null;
                                            this.formModel.companyName.value = '';
                                        }
                                        this.customerFormData.isTariffEditable = data['isEditable'];
                                        this.customerFormData.partnershipId = data['partnershipId'];
                                        this.formModel.companyName.selectedOption = data[0];
                                        this.checkForFormValidation();
                                    }
                                },
                                error: () => {
                                    this.customerFormData['tariffId'] = 0;
                                    this.customerFormData.isTariffEditable = false;
                                }
                            });
                        }
                    }
                    this.formModel.companyName = Object.assign(Object.assign({}, this.formModel.companyName), { type: 'text' });
                }
            }
            if (output.name === 'companyName' && output.value) {
                this.customerFormData['companyId'] = output.value['companyId'];
                this.customerFormData['tariffId'] = output.value['tariffId'];
                this.customerFormData.isTariffEditable = output.value['isEditable'];
                this.customerFormData.licenseId = output.value['licenseId'].toString();
                this.formModel.licenseId = Object.assign(Object.assign({}, (_d = this.formModel) === null || _d === void 0 ? void 0 : _d.licenseId), { value: output.value['licenseId'].toString() });
                this.customerFormData.partnershipId = output.value['partnershipId'];
            }
            this.customerFormData[this.formModel[output.name]['idField']] = output.value[this.formModel[output.name].displayValue];
        }
        else {
            if (output.name === 'carOwnerSelector' && output.keyFieldValue && this.formModel[output.name]['idField']) {
                this.customerFormData[this.formModel[output.name]['idField']] = output.keyFieldValue;
            }
            if (output.isValid) {
                this.formModel[output.name].value = output.value;
                this.customerFormData[output.name] = output.value;
            }
            else {
                this.formModel[output.name].value = '';
                if (output.name !== 'driverPhone') {
                    this.customerFormData[output.name] = '';
                }
                else {
                    this.customerFormData[output.name] = 0;
                }
            }
        }
        this.customerFormData = Object.assign({}, this.customerFormData);
        this.checkForFormValidation();
    }
    /**
     * navigate to vehicle
     */
    navigateToVehicle() {
        this.monitorService.logEvent('navigateToVehicle', ['ChqNewCustomerComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
        this.router.navigate([`/quote/case/${this.caseId}/vehicle`]);
    }
    /**
     * handle company observable load
     */
    updateCaseData(items) {
        var _a;
        if (items && this.customerFormData.companyId && !this.customerFormData['tariffId']) {
            const selectedItem = items.filter((it) => {
                return it.companyId === this.customerFormData.companyId;
            });
            if (selectedItem.length > 0) {
                this.customerFormData['tariffId'] = selectedItem[0]['tariffId'];
                this.customerFormData.isTariffEditable = selectedItem[0]['isEditable'];
                this.formModel.licenseId = Object.assign(Object.assign({}, (_a = this.formModel) === null || _a === void 0 ? void 0 : _a.licenseId), { value: selectedItem[0]['licenseId'].toString() });
                this.customerFormData.partnershipId = selectedItem[0]['partnershipId'];
                this.formModel.companyName.selectedOption = selectedItem[0];
            }
        }
    }
    /**
     * is case pending
     */
    get currentStatus() {
        var _a, _b, _c;
        if (!((_a = this.caseResponse) === null || _a === void 0 ? void 0 : _a.status) && !this.isFormConfirmed) {
            return true;
        }
        return ['reject', 'rejected', 'approved', 'closed', 'repairestimation'].indexOf((_c = (_b = this.caseResponse) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === -1
            && !this.isFormConfirmed;
    }
    /**
     * is case pending
     */
    get currentCaseStatus() {
        var _a, _b, _c, _d, _e;
        if (!((_a = this.caseResponse) === null || _a === void 0 ? void 0 : _a.status) && this.currentOrgId === ((_c = (_b = this.caseResponse) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.organizationId)) {
            return true;
        }
        else if (this.commonService.isViewOnly) {
            return false;
        }
        return ['reject', 'rejected', 'approved', 'closed', 'repairestimation', 'complete'].indexOf((_e = (_d = this.caseResponse) === null || _d === void 0 ? void 0 : _d.status) === null || _e === void 0 ? void 0 : _e.toLowerCase()) === -1;
    }
    /**
     * load caseDetail
     */
    loadCaseDetails() {
        var _a;
        const keys = Object.keys(this.formModel);
        const caseId = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.paramMap.get('id');
        if (caseId && caseId != '0') {
            this.caseId = caseId;
            this.isApiLoading = true;
            this.commonService.caseId.next(this.caseId);
            this.commonService.showLoading();
            this.caseService.getCaseDetail(this.caseId).subscribe({
                next: (result) => {
                    var _a, _b;
                    this.caseResponse = result.data;
                    this.caseObjectId = this.caseResponse.id;
                    this.commonService.caseStatus.next(this.caseResponse.status);
                    const inspections = this.caseResponse.inspections;
                    if (inspections.length > 0) {
                        this.commonService.inspectionId.next(this.caseResponse.inspections[0].inspectionId);
                    }
                    if (this.currentOrgId != ((_b = (_a = this.caseResponse) === null || _a === void 0 ? void 0 : _a.organizationDetail) === null || _b === void 0 ? void 0 : _b.organizationId)) {
                        this.commonService.isViewOnly = true;
                    }
                    else {
                        this.commonService.isViewOnly = false;
                    }
                    if (!this.currentStatus || this.commonService.isViewOnly) {
                        this.setTextMode();
                        this.isFormConfirmed = true;
                    }
                    this.header.caseNumber = this.caseResponse.caseNumber;
                    this.formDataFromResponse = (0,_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.caseResponseMapper)(this.caseResponse);
                    this.customerFormData = (0,_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.caseDataMapper)(this.formDataFromResponse);
                    this.originalData = JSON.parse(JSON.stringify(this.customerFormData));
                    for (const k in keys) {
                        const obj = this.formModel[keys[k]];
                        const { type, displayValue, fieldValue } = obj;
                        if (this.customerFormData[keys[k]]) {
                            if (type === 'select') {
                                const selectObj = {};
                                selectObj[displayValue] = '';
                                selectObj[fieldValue] = this.customerFormData[keys[k]];
                                if (!this.currentStatus && keys[k] === 'companyOrgType') {
                                    selectObj[displayValue] = this.customerFormData[keys[k]];
                                }
                                this.formModel[keys[k]] = Object.assign(Object.assign({}, this.formModel[keys[k]]), { value: '', selectedOption: selectObj });
                            }
                            else {
                                let selectedOption = {};
                                if (keys[k] === 'companyName') {
                                    selectedOption = { 'companyName': this.customerFormData[keys[k]] };
                                }
                                this.formModel[keys[k]] = Object.assign(Object.assign({}, this.formModel[keys[k]]), { value: this.customerFormData[keys[k]], selectedOption });
                            }
                        }
                    }
                    this.checkRouteParams();
                    this.commonService.hideLoading();
                },
                error: () => {
                    this.commonService.hideLoading();
                },
                complete: () => {
                    this.isApiLoading = false;
                }
            });
        }
        else {
            this.isApiLoading = false;
            if (!this.formModel.companyOrgType.observable) {
                this.formModel.companyOrgType.observable = this.caseService.getProviders();
            }
            for (const k in keys) {
                const key = keys[k];
                if (key !== 'driverCode') {
                    this.formModel[key] = Object.assign(Object.assign({}, this.formModel[key]), { value: '', selectedOption: {} });
                }
                else {
                    this.formModel[key] = Object.assign(Object.assign({}, this.formModel[key]), { value: '', selectedOption: { 'phoneCountryCode': '+91' } });
                    this.customerFormData.driverCode = '+91';
                }
            }
        }
    }
    /**
     * prefill search data
     */
    setPrefillData(items) {
        var _a, _b, _c, _d, _e, _f, _g;
        const prefillData = this.commonService.getSessionStorage('selectedSearchItem');
        if (prefillData) {
            const prefillObj = JSON.parse(prefillData);
            this.formModel.email = Object.assign(Object.assign({}, this.formModel.email), { value: prefillObj.email, selectedOption: {} });
            this.customerFormData.email = prefillObj.email;
            if (prefillObj.firstName) {
                this.customerFormData.firstName = prefillObj.firstName;
                this.formModel.firstName = Object.assign(Object.assign({}, this.formModel.firstName), { value: this.customerFormData.firstName, selectedOption: {} });
            }
            if (prefillObj.lastName) {
                this.customerFormData.lastName = prefillObj.lastName;
                this.formModel.lastName = Object.assign(Object.assign({}, this.formModel.lastName), { value: this.customerFormData.lastName, selectedOption: {} });
            }
            if (prefillObj.phoneNumber) {
                const code = (_a = prefillObj.phoneNumber) === null || _a === void 0 ? void 0 : _a.substring(0, 3);
                const code1 = (_b = prefillObj.phoneNumber) === null || _b === void 0 ? void 0 : _b.substring(0, 4);
                let currentPhoneNumber = '';
                let selectedItem = items.filter((it) => {
                    return it.phoneCountryCode === code;
                });
                if (selectedItem.length === 0) {
                    currentPhoneNumber = (_c = prefillObj.phoneNumber) === null || _c === void 0 ? void 0 : _c.substring(4, (_d = prefillObj.phoneNumber) === null || _d === void 0 ? void 0 : _d.length);
                    selectedItem = items.filter((it) => {
                        return it.phoneCountryCode === code1;
                    });
                }
                else {
                    currentPhoneNumber = (_e = prefillObj.phoneNumber) === null || _e === void 0 ? void 0 : _e.substring(3, (_f = prefillObj.phoneNumber) === null || _f === void 0 ? void 0 : _f.length);
                }
                if (selectedItem.length > 0) {
                    const output = selectedItem[0];
                    const validationPattern = output['regExpression'];
                    this.customerFormData.driverCode = output === null || output === void 0 ? void 0 : output.phoneCountryCode;
                    this.formModel.driverCode = Object.assign(Object.assign({}, this.formModel.driverCode), { selectedOption: output });
                    (_g = this.driverPhone) === null || _g === void 0 ? void 0 : _g.updateCurrentValidation(validationPattern, true);
                }
                this.formModel.driverPhone = Object.assign(Object.assign({}, this.formModel.driverPhone), { value: currentPhoneNumber, selectedOption: {} });
                this.customerFormData.driverPhone = parseInt(currentPhoneNumber);
            }
            if (prefillObj.email || prefillObj.phoneNumber || prefillObj.firstName) {
                if (prefillObj.make || prefillObj.model || prefillObj.vin || prefillObj.plate) {
                    return;
                }
                this.commonService.setSessionStorage('selectedSearchItem', '');
            }
        }
    }
    /**
     * check data
     */
    checkDataDirty() {
        const keys = Object.keys(this.customerFormData);
        const defaultObject = {
            jobNumber: '',
            companyOrgType: '',
            claimNumber: '',
            companyName: '',
            tariffId: 0,
            isTariffEditable: true,
            licenseId: '',
            firstName: '',
            lastName: '',
            companyId: 0,
            partnershipId: 0,
            customerTypeID: 1,
            driverCode: '+91',
            driverPhone: 0,
            carOwnerSelector: '',
            email: ''
        };
        return this.compareObjects(this.customerFormData, defaultObject);
    }
    /**
     * check validation
     */
    checkForFormValidation() {
        const keys = Object.keys(this.customerFormData);
        let keysToAvoid = [];
        if (this.retail === 'Retail') {
            if (this.customerFormData['carOwnerSelector'] === 'Person') {
                keysToAvoid = ['companyName', 'claimNumber', 'licenseId', 'companyId'];
            }
            else if (this.customerFormData['carOwnerSelector'] === 'Company') {
                keysToAvoid = ['claimNumber', 'companyId'];
            }
        }
        else if (this.customerFormData.companyOrgType != 'Insurance Company') {
            keysToAvoid = ['claimNumber'];
        }
        if (this.commonService.repairPermission) {
            keysToAvoid.push('jobNumber');
        }
        let isValid = true;
        for (const k in keys) {
            const prop = keys[k];
            if (prop === 'carOwnerSelector' || prop === 'isTariffEditable' || keysToAvoid.indexOf(prop) !== -1) {
                continue;
            }
            if (!this.customerFormData[prop]) {
                isValid = false;
            }
        }
        if (this.isFormConfirmed) {
            this.confirmButtonModel.type = 'outline';
        }
        else if (!isValid) {
            this.confirmButtonModel.type = 'disabled';
        }
        else {
            if (this.isFormConfirmed) {
                this.confirmButtonModel.type = 'outline';
                return;
            }
            this.confirmButtonModel.type = 'primary';
        }
        this.monitorService.logEvent('checkForFormValidation', ['ChqNewCustomerComponent', 'addenda-quote', {
                validationStatus: isValid ? 'Form is valid' : 'Form is invalid'
            }]);
    }
    /**
     * check route params
     */
    checkRouteParams() {
        this.route.queryParams.subscribe((params) => {
            const codeParam = params['isBack'];
            if (codeParam === 'true' || codeParam === true) {
                this.isFormConfirmed = true;
                this.setTextMode();
            }
            else if (this.currentStatus) {
                if (!this.formModel.companyOrgType.observable) {
                    this.formModel.companyOrgType.observable = this.caseService.getProviders();
                }
            }
        });
    }
    /**
     * onInit lifecycle hook
     */
    ngOnInit() {
        this.monitorService.logEvent('ngOnInit', ['ChqNewCustomerComponent', 'addenda-quote']);
        this.formModel = (0,_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.newCaseForm)();
        if (this.commonService.repairPermission) {
            this.formModel.jobNumber = Object.assign(Object.assign({}, this.formModel.jobNumber), { disabled: true, validation: null });
        }
        this.confirmButtonModel = {
            label: 'Confirm',
            type: 'primary',
            icon: 'check',
            onclick: this.confirmData.bind(this)
        };
        this.nextButtonModel = {
            label: 'Next add vehicle',
            type: 'primary',
            icon: 'plus-filled',
            onclick: this.navigateToVehicle.bind(this)
        };
        if (!this.formModel.driverCode.observable) {
            this.formModel.driverCode.observable = this.coreService.getPhoneNumber();
            this.formModel.driverCode.onObservableLoad = this.onObservableLoad.bind(this);
        }
        this.header.caseNumber = '';
        this.checkForFormValidation();
        this.loadCaseDetails();
        this.commonService.accessRight.subscribe({
            next: (res) => {
                if (!res) {
                    this.showNoAccess = true;
                }
            }
        });
        const container = document.querySelector('.addenda-container');
        if (container) {
            container.scrollTop = 0;
        }
    }
    /**
     * on destroy
     */
    ngOnDestroy() {
        this.monitorService.logEvent('ngOnDestroy', ['ChqNewCustomerComponent', 'addenda-quote']);
        this.commonService.accessRight.unsubscribe();
        this.commonService.isViewOnly = false;
    }
}
ChqNewCustomerComponent.ɵfac = function ChqNewCustomerComponent_Factory(t) { return new (t || ChqNewCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_core_core_service_service__WEBPACK_IMPORTED_MODULE_5__.CoreService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute)); };
ChqNewCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ChqNewCustomerComponent, selectors: [["chq-new-case"]], viewQuery: function ChqNewCustomerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.companyOrg = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.licenseId = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.driverPhone = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.driverCode = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.orgType = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "new-case-container mh-0", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "new-case-container", "mh-0", 3, "ngClass"], [3, "chqModel"], [1, "form-container"], [1, "row"], [1, "job-number", "col-3"], [3, "inputModel", "controlOutput"], [1, "work-provider", "col-6"], [1, "work-input-wrapper", "row"], [1, "col-12", "sub-heading"], [1, "col-6", 3, "inputModel", "clicked", "controlOutput"], ["orgType", ""], ["class", "col-6", 3, "inputModel", "controlOutput", 4, "ngIf"], ["class", "row", 3, "ngClass", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "driver-details", "col-12"], [1, "driver-input-wrapper", "row"], [1, "driver-fields-wrapper"], [1, "driver-field", 3, "inputModel", "controlOutput"], [1, "driver-address-wrapper", "row"], [1, "driver-field", "basis-272", 3, "inputModel", "controlOutput"], [1, "driver-field", "basis-272"], [1, "driver-field", "driver-code-field", "no-padding", 3, "inputModel", "clicked", "controlOutput"], ["driverCode", ""], [1, "driver-field", "no-padding", 3, "inputModel", "controlOutput"], ["driverPhone", ""], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-quote.png"], [1, "footer-button-wrapper"], [3, "buttonModel", 4, "ngIf"], [1, "col-6", 3, "inputModel", "controlOutput"], [1, "row", 3, "ngClass"], [1, "insurer-details", "col-12"], [1, "insurance-input-wrapper", "row"], [1, "company-input", "col-3", 3, "inputModel", "controlOutput"], [1, "company-input", "col-6", 3, "inputModel", "clicked", "controlOutput"], ["companyOrg", ""], [1, "col-6", 3, "ngClass", "inputModel", "controlOutput"], ["licenseId", ""], [3, "buttonModel"]], template: function ChqNewCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ChqNewCustomerComponent_div_0_Template, 42, 22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChqNewCustomerComponent_no_access_error_1_Template, 1, 0, "no-access-error", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isApiLoading && !ctx.showNoAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_6__.ChqStepHeaderComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_7__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__.ChqButtonComponent, _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_9__.NoAccessErrorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: [".new-case-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - calc(5px + 1.5vw + 58px + 1.6vw + 1.5vw));\n  overflow: hidden;\n  overflow-y: auto;\n  padding: 0 calc(5px + 1.5vw);\n  padding-bottom: 1.5vw;\n}\n.new-case-container[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--xa-black);\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex: 1;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .job-number[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .work-provider[_ngcontent-%COMP%] {\n  flex-direction: column;\n  margin-bottom: 15px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .work-provider[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .work-provider[_ngcontent-%COMP%]   .work-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .work-provider[_ngcontent-%COMP%]   .car-owner-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .insurer-details[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  flex-direction: column;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .insurer-details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .insurer-details[_ngcontent-%COMP%]   .insurance-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%] {\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-input-wrapper[_ngcontent-%COMP%], .new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-address-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-input-wrapper[_ngcontent-%COMP%], .new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-address-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field[_ngcontent-%COMP%] {\n  flex: 1 1 120px;\n  padding: 10px;\n  width: 120px;\n}\n@media (max-width: 850px) {\n  .new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field.driver-code-field[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 120px;\n  padding-right: 20px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field.basis-272[_ngcontent-%COMP%] {\n  flex-basis: 272px;\n}\n.new-case-container[_ngcontent-%COMP%]   .hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.new-case-container[_ngcontent-%COMP%]   .disable-input[_ngcontent-%COMP%], .new-case-container[_ngcontent-%COMP%]   .partial-disable-info[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.text-mode[_ngcontent-%COMP%]   .job-number[_ngcontent-%COMP%] {\n  padding-left: 9px;\n}\n  .disable-controls input {\n  opacity: 0.6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNocS1uZXctY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxPQUFBO0FBQ0o7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFFSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVNO0VBQ0UsbUJBQUE7QUFBUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBRFI7QUFLUTtFQUNFLG1CQUFBO0FBSFY7QUFRSTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFOTjtBQVFNO0VBQ0UsbUJBQUE7QUFOUjtBQVNNO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBUFI7QUFXSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFUTjtBQVdNOztFQUVFLG1CQUFBO0FBVFI7QUFZTTs7RUFFRSxhQUFBO0VBQ0EsMkJBQUE7QUFWUjtBQWFNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBWFI7QUFhUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVhWO0FBYVU7RUFMRjtJQU1JLFlBQUE7RUFWVjtBQUNGO0FBWVU7RUFDRSxVQUFBO0FBVlo7QUFhVTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVhaO0FBY1U7RUFDRSxpQkFBQTtBQVpaO0FBb0JFO0VBQ0UsYUFBQTtBQWxCSjtBQXFCRTs7RUFFRSxvQkFBQTtBQW5CSjtBQXdCRTtFQUNFLGlCQUFBO0FBckJKO0FBeUJBO0VBQ0UsdUJBQUE7QUF0QkYiLCJmaWxlIjoiY2hxLW5ldy1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctY2FzZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHggLSBjYWxjKDVweCArIDEuNXZ3ICsgNThweCArIDEuNnZ3ICsgMS41dncpKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogMCBjYWxjKDVweCArIDEuNXZ3KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41dnc7XHJcbiAgLnN1Yi1oZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIC5qb2ItbnVtYmVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAud29yay1wcm92aWRlciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLndvcmstaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXItb3duZXItd3JhcHBlciB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5zdXJlci1kZXRhaWxzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5zdXJhbmNlLWlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyaXZlci1kZXRhaWxzIHtcclxuICAgICAgZmxleDogNDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5kcml2ZXItaW5wdXQtd3JhcHBlcixcclxuICAgICAgLmRyaXZlci1hZGRyZXNzLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcml2ZXItaW5wdXQtd3JhcHBlcixcclxuICAgICAgLmRyaXZlci1hZGRyZXNzLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZHJpdmVyLWZpZWxkcy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmRyaXZlci1maWVsZCB7XHJcbiAgICAgICAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5uby1wYWRkaW5nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmRyaXZlci1jb2RlLWZpZWxkIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmJhc2lzLTI3MiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDI3MnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGlzYWJsZS1pbnB1dCxcclxuICAucGFydGlhbC1kaXNhYmxlLWluZm8ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1tb2RlIHtcclxuICAuam9iLW51bWJlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGlzYWJsZS1jb250cm9scyBpbnB1dCB7XHJcbiAgb3BhY2l0eTogMC42ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 37158:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/quote/chq-new-cases/chq-new-vehicle/chq-new-vehicle.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChqNewVehicleComponent": function() { return /* binding */ ChqNewVehicleComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 74672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 10388);
/* harmony import */ var src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helper/form/vehicle-form.helper */ 60562);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/inspection-service/inspection.service */ 13975);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_labour_labour_rate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/labour/labour-rate.service */ 50356);
/* harmony import */ var src_app_services_mediacollection_service_mediacollection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mediacollection-service/mediacollection.service */ 74178);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-step-header/chq-step-header.component */ 42736);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















const _c0 = ["make"];
const _c1 = ["model"];
const _c2 = ["year"];
function ChqNewVehicleComponent_div_0_chq_button_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "chq-button", 25);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("buttonModel", ctx_r5.confirmButtonModel);
} }
function ChqNewVehicleComponent_div_0_chq_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "chq-button", 25);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("buttonModel", ctx_r6.nextButtonModel);
} }
const _c3 = function (a0) { return { "text-mode": a0 }; };
const _c4 = function (a0) { return { "partial-disable-info": a0 }; };
const _c5 = function (a0) { return { "disable-input disable-controls": a0 }; };
const _c6 = function (a0) { return { "partial-disable-info disable-controls": a0 }; };
function ChqNewVehicleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "chq-step-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "chq-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r7.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "chq-input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clicked", function ChqNewVehicleComponent_div_0_Template_chq_input_clicked_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r9.hideDropdown($event); })("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r10.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "chq-input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clicked", function ChqNewVehicleComponent_div_0_Template_chq_input_clicked_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r11.hideDropdown($event); })("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r12.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "chq-input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clicked", function ChqNewVehicleComponent_div_0_Template_chq_input_clicked_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r13.hideDropdown($event); })("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r14.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "chq-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r15.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "chq-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r16.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "chq-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r17.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, ChqNewVehicleComponent_div_0_chq_button_26_Template, 1, 1, "chq-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, ChqNewVehicleComponent_div_0_chq_button_27_Template, 1, 1, "chq-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](20, _c3, ctx_r0.isFormConfirmed));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("chqModel", ctx_r0.vehicleHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 18, "vehicle_detail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](22, _c4, ctx_r0.searchDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inputModel", ctx_r0.formModel.vin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](24, _c5, ctx_r0.inputDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inputModel", ctx_r0.formModel.make)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](26, _c5, ctx_r0.makeDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inputModel", ctx_r0.formModel.model)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](28, _c5, ctx_r0.modelDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inputModel", ctx_r0.formModel.year)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](30, _c5, ctx_r0.yearDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](32, _c6, ctx_r0.infoDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inputModel", ctx_r0.formModel.licensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inputModel", ctx_r0.formModel.carMilege);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("inputModel", ctx_r0.formModel.registrationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.currentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.isFormConfirmed && !ctx_r0.commonService.isViewOnly);
} }
function ChqNewVehicleComponent_no_access_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "no-access-error");
} }
class ChqNewVehicleComponent {
    /**
     * constructor
     * @param fb ChangeDetectorRef
     */
    constructor(router, commonService, route, caseService, vehicleService, inspectionService, monitorService, labourService, mediaCollectionService, cd) {
        this.router = router;
        this.commonService = commonService;
        this.route = route;
        this.caseService = caseService;
        this.vehicleService = vehicleService;
        this.inspectionService = inspectionService;
        this.monitorService = monitorService;
        this.labourService = labourService;
        this.mediaCollectionService = mediaCollectionService;
        this.cd = cd;
        this.vehicleHeader = src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_0__.newVehicleHeader;
        this.caseId = '0';
        this.status = '';
        this.tariffId = 0;
        this.vehicleFormData = {
            vin: '',
            make: '',
            model: '',
            year: '',
            carMilege: '',
            licensePlate: '',
            registrationDate: ''
        };
        this.isFormConfirmed = false;
        this.serviceName = 'vin';
        this.inputDisabled = true;
        this.infoDisabled = true;
        this.searchDisabled = false;
        this.importTerms = [];
        this.vehicleId = 0;
        this.inspections = {};
        this.domainID = 0;
        this.partnershipId = 0;
        this.labourData = null;
        this.makeDisabled = false;
        this.preventVinCall = false;
        this.caseCreatedDate = '';
        this.umc = '';
        this.originalVin = '';
        this.modelDisabled = false;
        this.yearDisabled = false;
        this.inspectionTemplateId = 0;
        this.showNoAccess = false;
        this.customerName = '';
        this.email = '';
        this.originalTariffObject = {};
        this.userPermission = {};
        this.commonService.eventfromToastComponent$.subscribe((event) => {
            if (event) {
                this.monitorService.logEvent('eventfromToastComponent', ['ChqNewVehicleComponent', 'addenda-quote', {
                        caseId: this.caseId
                    }]);
                this.router.navigate([`/quote/case/${this.caseId}/document`]);
            }
        });
        if (this.commonService.accessRight.closed) {
            this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(true);
        }
        this.commonService.userProfileData.subscribe((res) => {
            if (res && res.data) {
                const { userPermission, vehicleSourceType, organizationDetail } = res.data;
                this.userPermission = userPermission || {};
                this.estimateId = vehicleSourceType;
                if (organizationDetail) {
                    this.currentOrgId = organizationDetail.id;
                }
            }
        });
    }
    /**
     * check gtEstimate permission
     */
    checkGTEstimatePermission() {
        const { orgPackages = [] } = this.userPermission;
        const repairEstimatePackage = orgPackages.filter((orgPackage) => {
            return orgPackage.automotiveServiceName === 'Repair Estimate';
        });
        if (repairEstimatePackage && repairEstimatePackage.length > 0) {
            const { permissions } = repairEstimatePackage[0];
            const gtEstimatePermission = permissions.filter((perm) => {
                return perm.permissionName === 'gt.estimate' || perm.permissionName === 'gt.estimate.vinquery';
            });
            if (gtEstimatePermission && gtEstimatePermission.length > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * process
     */
    process(caseId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.caseId = caseId;
            this.commonService.showLoading();
            yield this.populateReadonlyFields(caseId).then((result) => {
                var _a, _b, _c, _d, _e, _f;
                if (result.data == null) {
                    this.commonService.hideLoading();
                    return;
                }
                this.vehicleId = result.data.vehicleId || 0;
                this.vehicleHeader.caseNumber = result.data.caseNumber;
                const { vinNumber, licensePlateNumber, vehicleMileage, registrationDate, vehicleMake, vehicleModel, modelYear, status, tariffs, domainID, umc, id } = result.data;
                this.id = id;
                if (this.vehicleId != 0) {
                    this.infoDisabled = false;
                    this.searchDisabled = false;
                    this.inputDisabled = false;
                    this.preventVinCall = true;
                    this.originalVin = vinNumber;
                    this.labourData = (tariffs.length > 0) ? tariffs[0] : [];
                }
                this.customerName = (_a = result.data.caseDetail) === null || _a === void 0 ? void 0 : _a.firstName;
                this.email = (_b = result.data.caseDetail) === null || _b === void 0 ? void 0 : _b.email;
                this.vehicleHeader.caseNumber = result.data.caseNumber;
                this.caseCreatedDate = result.data.createdDate;
                this.formModel.vin = Object.assign(Object.assign({}, this.formModel.vin), { value: vinNumber });
                this.status = status;
                this.commonService.caseStatus.next(status);
                this.formModel.licensePlate = Object.assign(Object.assign({}, this.formModel.licensePlate), { value: licensePlateNumber });
                this.formModel.carMilege = Object.assign(Object.assign({}, this.formModel.carMilege), { value: vehicleMileage });
                this.formModel.registrationDate = Object.assign(Object.assign({}, this.formModel.registrationDate), { value: registrationDate });
                this.formModel.make = Object.assign(Object.assign({}, this.formModel.make), { selectedOption: { 'name': vehicleMake } });
                this.formModel.year = Object.assign(Object.assign({}, this.formModel.year), { selectedOption: { 'name': modelYear || result.data.modelYearRange } });
                this.formModel.model = Object.assign(Object.assign({}, this.formModel.model), { selectedOption: { 'modelDescription': vehicleModel } });
                this.umc = umc;
                this.tariffId = (_c = tariffs[0]) === null || _c === void 0 ? void 0 : _c.tariffId;
                this.isTariffEditable = (_d = tariffs[0]) === null || _d === void 0 ? void 0 : _d.isEditable;
                this.partnershipId = (_e = tariffs[0]) === null || _e === void 0 ? void 0 : _e.partnershipId;
                this.domainID = domainID;
                this.inspections = result.data.inspections[0];
                if (this.inspections) {
                    this.commonService.inspectionId.next(this.inspections.inspectionId);
                }
                this.originalTariffObject = {
                    'make': vehicleMake,
                    'partnershipId': this.partnershipId,
                    'registrationDate': dayjs__WEBPACK_IMPORTED_MODULE_1__(registrationDate).format('YYYY-MM-DDT00:00:00')
                };
                this.vehicleFormData = Object.assign(Object.assign({}, this.vehicleFormData), { vin: vinNumber, make: vehicleMake, model: vehicleModel, year: modelYear || result.data.modelYearRange, carMilege: vehicleMileage, licensePlate: licensePlateNumber, registrationDate: registrationDate });
                if (this.currentOrgId != ((_f = result.data.organizationDetail) === null || _f === void 0 ? void 0 : _f.organizationId)) {
                    this.commonService.isViewOnly = true;
                }
                else {
                    this.commonService.isViewOnly = false;
                }
                this.validate();
                this.commonService.hideLoading();
            }).catch(() => {
                this.commonService.hideLoading();
            });
            this.prefillVehicleData();
            /*if (!this.currentStatus || this.isFormConfirmed) {
              this.setTextMode();
              this.isFormConfirmed = true;
              return;
            }*/
            if (this.vehicleId != 0 || this.commonService.isViewOnly) {
                this.setTextMode();
                this.isFormConfirmed = true;
                return;
            }
            yield this.populateDropdowns();
        });
    }
    /**
     * prefill vehicle data
     */
    prefillVehicleData() {
        const prefillData = this.commonService.getSessionStorage('selectedSearchItem');
        if (prefillData) {
            const prefillObj = JSON.parse(prefillData);
            if (prefillObj.vin && !this.vehicleFormData.vin) {
                this.preventVinCall = true;
                this.vehicleFormData.vin = prefillObj.vin;
                this.formModel.vin = Object.assign(Object.assign({}, this.formModel.vin), { value: prefillObj.vin });
            }
            if (prefillObj.make && !this.vehicleFormData.make) {
                this.vehicleFormData.make = prefillObj.make;
                this.formModel.make = Object.assign(Object.assign({}, this.formModel.make), { selectedOption: { 'name': prefillObj.make } });
            }
            if (prefillObj.model && !this.vehicleFormData.model) {
                this.vehicleFormData.model = prefillObj.model;
                this.formModel.model = Object.assign(Object.assign({}, this.formModel.model), { selectedOption: { 'modelDescription': prefillObj.model } });
            }
            if (prefillObj.importInterval && !this.vehicleFormData.year) {
                this.vehicleFormData.year = prefillObj.importInterval;
                this.formModel.year = Object.assign(Object.assign({}, this.formModel.year), { value: prefillObj.importInterval, selectedOption: { 'name': prefillObj.importInterval } });
            }
            if (prefillObj.plate && !this.vehicleFormData.licensePlate) {
                this.vehicleFormData.licensePlate = prefillObj.plate;
                this.formModel.licensePlate = Object.assign(Object.assign({}, this.formModel.licensePlate), { value: prefillObj.plate });
            }
            if (prefillObj.make || prefillObj.model || prefillObj.vin || prefillObj.plate) {
                this.commonService.setSessionStorage('selectedSearchItem', '');
                this.inputDisabled = false;
                this.infoDisabled = false;
                this.makeDisabled = true;
                this.enableDropdowns();
            }
        }
    }
    /**
     * populate make, year, model dropdowns
     */
    populateDropdowns() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            //this.estimateId = this.checkGTEstimatePermission() ? 3 : 1;
            const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.vehicleService.getVehicleMake());
            this.formModel.make = Object.assign(Object.assign({}, this.formModel.make), { options: data.sort((a, b) => a.name.localeCompare(b.name)) });
            const makeList = this.formModel.make.options;
            const selectedMake = makeList.filter(q => q.name === this.vehicleFormData.make);
            if (selectedMake.length > 0) {
                this.vehicleService.getVehicleModel(selectedMake[0].id, this.estimateId).subscribe((data) => {
                    var _a, _b;
                    this.formModel.model = Object.assign(Object.assign({}, this.formModel.model), { options: data });
                    const model = (_a = this.formModel.model.options) === null || _a === void 0 ? void 0 : _a.filter(q => q.umc == this.umc);
                    if (model.length > 0) {
                        (_b = this.vehicleService.getVehicleYearByModel(model[0].id, this.estimateId)) === null || _b === void 0 ? void 0 : _b.subscribe((data) => {
                            this.formModel.year = Object.assign(Object.assign({}, this.formModel.year), { options: data });
                        });
                    }
                });
            }
        });
    }
    /**
     * populate readonly fields
     */
    populateReadonlyFields(caseId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (caseId && caseId != '0') {
                this.caseId = caseId;
                this.commonService.showLoading();
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.caseService.getCaseDetail(caseId));
            }
        });
    }
    /**
     * navigates to next page
     */
    navigateToDocument() {
        this.monitorService.logEvent('navigateToDocument', ['ChqNewVehicleComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
        this.router.navigate([`/quote/case/${this.caseId}/document`]);
    }
    /**
     * onInit lifecycle hook
    */
    ngOnInit() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.formModel = (0,src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_0__.newVehicleForm)();
            this.confirmButtonModel = {
                label: 'Confirm',
                type: 'primary',
                icon: 'check',
                onclick: this.confirmData.bind(this)
            };
            this.nextButtonModel = {
                label: 'Next add documents',
                type: 'primary',
                icon: 'plus-filled',
                onclick: this.navigateToDocument.bind(this)
            };
            const caseId = (_d = (_c = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.snapshot) === null || _c === void 0 ? void 0 : _c.paramMap) === null || _d === void 0 ? void 0 : _d.get('id');
            this.monitorService.logEvent('ngOnInit', ['ChqNewVehicleComponent', 'addenda-quote', {
                    caseId
                }]);
            this.commonService.accessRight.subscribe({
                next: (res) => {
                    if (!res) {
                        this.showNoAccess = true;
                    }
                }
            });
            this.inspectionService.getInspectionTemplateList().subscribe({
                next: (inspectionList) => {
                    const repairInspectionTemplate = inspectionList === null || inspectionList === void 0 ? void 0 : inspectionList.data;
                    if (repairInspectionTemplate.length > 0) {
                        this.inspectionTemplateId = repairInspectionTemplate[0].id;
                    }
                }
            });
            yield this.process(caseId);
            const container = document.querySelector('.addenda-container');
            if (container) {
                container.scrollTop = 0;
            }
        });
    }
    /**
     * ngAfterViewInit hook
     * @param fb FormBuilder
     */
    ngAfterViewInit() {
        this.commonService.updatePage('/quote/case/0', 'vehicle');
        this.monitorService.logEvent('ngAfterViewInit', ['ChqNewVehicleComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
    }
    /**
     * setTextMode
     */
    setTextMode() {
        this.inputDisabled = false;
        this.makeDisabled = false;
        const keys = Object.keys(this.formModel);
        for (const k in keys) {
            const key = keys[k];
            this.formModel[key] = Object.assign(Object.assign({}, this.formModel[key]), { mode: 'text' });
        }
        this.confirmButtonModel = Object.assign(Object.assign({}, this.confirmButtonModel), { label: 'Change car', type: 'outline', icon: 'gobackward' });
    }
    /**
     * check route params
     */
    /*checkRouteParams(caseId): void {
      this.route.queryParams.subscribe((params) => {
        const codeParam = params['isBack']
        if (codeParam === 'true' || codeParam === true) {
          this.isFormConfirmed = true;
        }
  
        this.process(caseId);
      });
    }*/
    /**
      * update button
    */
    updateButton() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const keys = Object.keys(this.formModel);
            for (const k in keys) {
                const key = keys[k];
                this.formModel[key] = Object.assign(Object.assign({}, this.formModel[key]), { mode: this.isFormConfirmed ? 'value' : 'text' });
            }
            if (this.confirmButtonModel.label == 'Change car') {
                this.preventVinCall = true;
                this.vehicleService.getVinDecoder(this.vehicleFormData.vin).subscribe({
                    next: (result) => {
                        if (result === null || result === void 0 ? void 0 : result.success) {
                            this.makeDisabled = true;
                        }
                        else {
                            this.makeDisabled = false;
                        }
                    }
                });
                this.commonService.showLoading();
                yield this.populateDropdowns();
                this.commonService.hideLoading();
            }
            this.isFormConfirmed = !this.isFormConfirmed;
            this.confirmButtonModel = Object.assign(Object.assign({}, this.confirmButtonModel), { label: this.isFormConfirmed ? 'Change car' : 'Confirm', type: this.isFormConfirmed ? 'outline' : 'primary', icon: this.isFormConfirmed ? 'refresh' : 'check' });
        });
    }
    /**
     * handles confirm click
     * returns void
     */
    confirmData() {
        if (this.isFormConfirmed) {
            this.updateButton();
            return;
        }
        this.commonService.showLoading();
        // add/update vehicle
        if (this.vehicleId && this.vehicleFormData.vin === this.originalVin) {
            this.updateVehicle();
        }
        else {
            const formData = {
                'vin': this.vehicleFormData.vin,
                'vehicleCountryId': 1,
                'umc': this.umc,
                'make': this.vehicleFormData.make,
                'model': this.vehicleFormData.model,
                'mileage': Number(this.vehicleFormData.carMilege),
                'firstRegistrationDate': dayjs__WEBPACK_IMPORTED_MODULE_1__(this.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00'),
                'registrationNumber': this.vehicleFormData.licensePlate,
                'condition': 1,
                'ModelYearRange': this.vehicleFormData.year,
                'InspectionTemplateId': this.inspectionTemplateId,
                'CustomerName': this.customerName,
                'CustomerEmail': this.email
            };
            this.vehicleService.addVehicle(formData, this.domainID, this.id).subscribe({
                next: (result) => {
                    if (result) {
                        this.vehicleId = result.id;
                        this.inspections = {};
                        this.inspections.inspectionId = result.inspectionId;
                        this.inspections.inspectionGuid = result.inspectionGuid;
                        this.updateVehicle();
                    }
                },
                error: (err) => {
                    this.commonService.hideLoading();
                }
            });
            //
        }
        //   
    }
    /**
     *
     * @param inspectionId
     */
    updateVehicle() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.monitorService.logEvent('updateVehicle', ['ChqNewVehicleComponent', 'addenda-quote', {
                    caseId: this.caseId
                }]);
            this.commonService.showLoading();
            const formData = {
                'vin': this.vehicleFormData.vin,
                'umc': this.umc,
                'vehicleMake': this.vehicleFormData.make,
                'vehicleModel': this.vehicleFormData.model,
                'modelYearRange': ((_a = this.vinGTMotive) === null || _a === void 0 ? void 0 : _a.modelYearRange) || this.vehicleFormData.year,
                'vehicleID': this.vehicleId,
                'licensePlateNumber': this.vehicleFormData.licensePlate,
                'vehicleMileage': Number(this.vehicleFormData.carMilege),
                'registrationDate': dayjs__WEBPACK_IMPORTED_MODULE_1__(this.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00')
            };
            const inspection = {
                'inspectionID': this.inspections.inspectionId,
                'inspectionGuid': this.inspections.inspectionGuid
            };
            const year = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.vehicleFormData.registrationDate).year().toString();
            //}
            //if(!this.labourData){
            if ((this.originalTariffObject.make != this.vehicleFormData.make
                || this.partnershipId != this.originalTariffObject.partnershipId
                || dayjs__WEBPACK_IMPORTED_MODULE_1__(this.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00') != this.originalTariffObject.registrationDate) ||
                (!((_c = (_b = this.labourData) === null || _b === void 0 ? void 0 : _b.tariffLabourRates) === null || _c === void 0 ? void 0 : _c.length))) {
                yield this.getLabourData(this.tariffId, this.isTariffEditable, this.partnershipId, this.vehicleFormData.make, year);
            }
            //}
            const mainFormData = {
                'vehicle': formData,
                'inspection': inspection,
                'tariff': this.labourData
            };
            this.vehicleService.updateVehicleCase(mainFormData, this.caseId).subscribe({
                next: (result) => {
                    if (result) {
                        if (this.labourData.isEditable) {
                            let showMessage = true;
                            this.labourData.tariffLabourRates.forEach((element) => {
                                if (element.amount > 0) {
                                    showMessage = false;
                                    return;
                                }
                            });
                            if (showMessage) {
                                const action = {
                                    'objectId': this.caseId,
                                    'link': 'here',
                                    'labourData': this.labourData
                                };
                                this.commonService.hideLoading();
                                this.commonService.showInfoToast(500000, 'labour_value_update', action);
                                return;
                            }
                        }
                        this.router.navigate([`/quote/case/${this.caseId}/document`]);
                    }
                    this.commonService.hideLoading();
                },
                error: (err) => {
                    this.commonService.hideLoading();
                }
            });
        });
    }
    /**
     *
     * @param event
     */
    onFormUpdate(output) {
        this.monitorService.logEvent('onFormUpdate', ['ChqNewVehicleComponent', 'addenda-quote', {
                caseId: this.caseId,
                output
            }]);
        if (output.type === 'select') {
            this.formModel[output.name] = Object.assign(Object.assign({}, this.formModel[output.name]), { selectedOption: output.value });
            this.vehicleFormData[output.name] = output.value[this.formModel[output.name].fieldValue];
            if (output.name == 'make') {
                this.vehicleFormData['model'] = '';
                this.vehicleFormData['year'] = null;
                this.modelDisabled = true;
                this.yearDisabled = true;
                this.formModel.year = Object.assign(Object.assign({}, this.formModel.year), { selectedOption: {}, options: [], observable: null });
                //this.formModel.year.options = [];
                this.formModel.model = Object.assign(Object.assign({}, this.formModel.model), { selectedOption: {} });
                if (output.value) {
                    this.formModel.model = Object.assign(Object.assign({}, this.formModel.model), { observable: this.vehicleService.getVehicleModel(output.value.id, this.estimateId), onObservableLoad: this.enableDropdowns.bind(this) });
                    setTimeout(() => {
                        this.model.triggerObservable();
                    });
                }
            }
            else if (output.name == 'model') {
                this.yearDisabled = true;
                this.formModel.year = Object.assign(Object.assign({}, this.formModel.year), { selectedOption: {}, observable: null, options: [] });
                this.vehicleFormData['year'] = null;
                if (output.value) {
                    this.umc = output.value.umc;
                    this.formModel.year = Object.assign(Object.assign({}, this.formModel.year), { observable: this.vehicleService.getVehicleYearByModel(output.value.id, this.estimateId), onObservableLoad: this.enableDropdowns.bind(this) });
                    setTimeout(() => {
                        this.year.triggerObservable();
                    });
                }
            }
        }
        else {
            if (!output.isValid) {
                this.formModel[output.name].value = '';
                this.vehicleFormData[output.name] = '';
            }
            else {
                this.formModel[output.name].value = output.value;
                this.vehicleFormData[output.name] = output.value;
            }
        }
        this.vehicleFormData = Object.assign({}, this.vehicleFormData);
        if (output.name == 'vin') {
            if (output.isValid) {
                this.populateForm();
            }
        }
        this.validate();
    }
    /**
     * function to enable dropdowns
     */
    enableDropdowns() {
        this.modelDisabled = false;
        this.yearDisabled = false;
    }
    /**
     * hide dropdown
     */
    hideDropdown(name) {
        if (name === this.formModel.make.name) {
            this.model.closeDropdown();
            this.year.closeDropdown();
        }
        else if (name === this.formModel.model.name) {
            this.make.closeDropdown();
            this.year.closeDropdown();
        }
        else {
            this.model.closeDropdown();
            this.make.closeDropdown();
        }
    }
    /**
     * check validation
     */
    validate() {
        const keys = Object.keys(this.vehicleFormData);
        this.monitorService.logEvent('validate', ['ChqNewVehicleComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
        let isValid = true;
        for (const k in keys) {
            const prop = keys[k];
            if (!this.vehicleFormData[prop]) {
                isValid = false;
                break;
            }
        }
        if (this.isFormConfirmed) {
            this.confirmButtonModel.type = 'outline';
        }
        else if (!isValid) {
            this.confirmButtonModel.type = 'disabled';
        }
        else {
            this.confirmButtonModel.type = 'primary';
        }
    }
    /**
     * populate vin number d
     */
    populateForm() {
        var _a;
        const vinNumber = (_a = this.formModel.vin.value) === null || _a === void 0 ? void 0 : _a.toLocaleString();
        this.monitorService.logEvent('populateForm', ['ChqNewVehicleComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.from)(vinNumber)
            .pipe()
            .subscribe({
            complete: () => {
                if (vinNumber.length == 17 && !this.isFormConfirmed && !this.preventVinCall) {
                    this.commonService.showLoading();
                    this.vehicleService.getVinDecoder(vinNumber).subscribe({
                        error: () => {
                            this.commonService.hideLoading();
                            this.vinGTMotive = null;
                            this.resetDropdown();
                        },
                        next: (result) => {
                            var _a;
                            if (result === null || result === void 0 ? void 0 : result.success) {
                                this.vinGTMotive = result.data;
                                this.umc = (_a = this.vinGTMotive) === null || _a === void 0 ? void 0 : _a.umc;
                                this.formModel['make'] = Object.assign(Object.assign({}, this.formModel['make']), { selectedOption: { 'name': result.data.vehicleMake } });
                                this.formModel.model = Object.assign(Object.assign({}, this.formModel['model']), { selectedOption: { 'modelDescription': result.data.vehicleModel } });
                                const makeList = this.formModel.make.options;
                                const selectedMake = makeList.filter(q => q.name === result.data.vehicleMake);
                                if (selectedMake.length > 0) {
                                    this.formModel.model = Object.assign(Object.assign({}, this.formModel.model), { observable: this.vehicleService.getVehicleModel(selectedMake[0].id, this.estimateId) });
                                    setTimeout(() => {
                                        this.model.triggerObservable();
                                    });
                                }
                                this.formModel.year = Object.assign(Object.assign({}, this.formModel['year']), { selectedOption: { 'name': result.data.modelYearRange } });
                                this.vehicleFormData['make'] = result.data.vehicleMake;
                                this.vehicleFormData['model'] = result.data.vehicleModel;
                                this.vehicleFormData['year'] = result.data.modelYearRange;
                                this.inputDisabled = false;
                                this.infoDisabled = false;
                                this.makeDisabled = true;
                                this.enableDropdowns();
                            }
                            else {
                                this.vinGTMotive = null;
                                this.commonService.showInfoToast(5000, 'show-info | ' + (result === null || result === void 0 ? void 0 : result.message));
                                this.resetDropdown();
                            }
                            setTimeout(() => {
                                this.make.dropdownValidationMessage = '';
                                this.make.dropdownContainer.dropdownConfig.isTouched = false;
                                this.make.dropdownContainer.dropdownConfig.isDirty = false;
                                this.model.dropdownValidationMessage = '';
                                this.model.dropdownContainer.dropdownConfig.isTouched = false;
                                this.model.dropdownContainer.dropdownConfig.isDirty = false;
                                this.year.dropdownValidationMessage = '';
                                this.year.dropdownContainer.dropdownConfig.isTouched = false;
                                this.year.dropdownContainer.dropdownConfig.isDirty = false;
                            }, 0);
                            this.validate();
                        },
                        complete: () => {
                            this.commonService.hideLoading();
                        }
                    });
                }
                if (this.preventVinCall && vinNumber.length == 17) {
                    this.preventVinCall = false;
                }
            }
        });
    }
    /**
     * reset import term
     */
    resetDropdown() {
        this.inputDisabled = false;
        this.infoDisabled = false;
        this.makeDisabled = false;
        this.vehicleFormData['make'] = '';
        this.vehicleFormData['model'] = '';
        this.vehicleFormData['year'] = null;
        this.formModel.model.options = [];
        this.formModel.year.options = [];
        this.formModel['make'] = Object.assign(Object.assign({}, this.formModel['make']), { selectedOption: {} });
        this.formModel.model = Object.assign(Object.assign({}, this.formModel['model']), { selectedOption: {} });
        this.formModel.year = Object.assign(Object.assign({}, this.formModel['year']), { selectedOption: {} });
    }
    /**
     * is case pending
     */
    get currentStatus() {
        var _a;
        if (!this.status && !this.commonService.isViewOnly) {
            return true;
        }
        else if (this.commonService.isViewOnly) {
            return false;
        }
        return ['reject', 'rejected', 'approved', 'closed', 'repairestimation', 'complete'].indexOf((_a = this.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === -1;
    }
    /**
     * get labour data to show
     */
    getLabourData(tariffId, isEditable, partnershipId, make, year) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.monitorService.logEvent('getLabourData', ['ChqNewVehicleComponent', 'addenda-quote', {
                    caseId: this.caseId
                }]);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.labourService.getLabourData(tariffId, make, dayjs__WEBPACK_IMPORTED_MODULE_1__(this.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00'), this.caseCreatedDate)).then((result) => {
                if (result.data) {
                    this.labourData = {
                        tariffId: result.data.id,
                        tariffDiscountRates: result.data.tariffDiscountRates,
                        tariffLabourRates: result.data.tariffLaborRates,
                        isEditable: isEditable,
                        partnershipId: partnershipId
                    };
                }
            });
        });
    }
    /**
     * get domain id
     */
    getDomainId() {
        this.mediaCollectionService.getMediaTemplate().subscribe({
            next: (response) => {
                if ((response === null || response === void 0 ? void 0 : response.data.length) > 0) {
                    this.domainID = response.data[0].domainID;
                }
            }
        });
    }
    /**
     * on destroy
     */
    ngOnDestroy() {
        this.monitorService.logEvent('ngOnDestroy', ['ChqNewVehicleComponent', 'addenda-quote', {
                caseId: this.caseId
            }]);
        this.formModel = (0,src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_0__.newVehicleForm)();
        this.commonService.accessRight.unsubscribe();
        this.commonService.isViewOnly = false;
    }
}
ChqNewVehicleComponent.ɵfac = function ChqNewVehicleComponent_Factory(t) { return new (t || ChqNewVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_4__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_6__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_labour_labour_rate_service__WEBPACK_IMPORTED_MODULE_7__.LabourRateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_mediacollection_service_mediacollection_service__WEBPACK_IMPORTED_MODULE_8__.MediacollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef)); };
ChqNewVehicleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ChqNewVehicleComponent, selectors: [["chq-new-vehicle"]], viewQuery: function ChqNewVehicleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.make = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.model = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.year = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "new-vehicle-container", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "new-vehicle-container", 3, "ngClass"], [3, "chqModel"], [1, "label"], [1, "search-box", 3, "ngClass"], [1, "col-4", 3, "inputModel", "controlOutput"], [1, "form-container"], [1, "vehicle-brand-wrapper", "row", 3, "ngClass"], ["id", "input-make", 1, "col-4", 3, "inputModel", "ngClass", "clicked", "controlOutput"], ["make", ""], ["id", "input-model", 1, "col-4", 3, "inputModel", "ngClass", "clicked", "controlOutput"], ["model", ""], ["id", "input-year", 1, "col-4", 3, "inputModel", "ngClass", "clicked", "controlOutput"], ["year", ""], [1, "vehicle-info-wrapper", "row", 3, "ngClass"], [1, "col-4", "registration-date", 3, "inputModel", "controlOutput"], [1, "image-car"], ["src", "assets/img/half-car.png"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-quote.png"], [1, "footer-button-wrapper"], [3, "buttonModel", 4, "ngIf"], [3, "buttonModel"]], template: function ChqNewVehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, ChqNewVehicleComponent_div_0_Template, 28, 34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ChqNewVehicleComponent_no_access_error_1_Template, 1, 0, "no-access-error", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_9__.ChqStepHeaderComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_10__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_11__.ChqButtonComponent, _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_12__.NoAccessErrorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: [".new-vehicle-container[_ngcontent-%COMP%] {\n  padding-bottom: 1.5vw;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: block;\n  font-weight: 600;\n}\n.new-vehicle-container[_ngcontent-%COMP%]     .disable-controls input {\n  opacity: 0.6 !important;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .disable-input[_ngcontent-%COMP%], .new-vehicle-container[_ngcontent-%COMP%]   .partial-disable-info[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .registration-date[_ngcontent-%COMP%]     .input-wrapper input {\n  pointer-events: none;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .registration-date[_ngcontent-%COMP%]     .input-wrapper input[readonly] {\n  opacity: 1;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .vehicle-brand-wrapper[_ngcontent-%COMP%], .new-vehicle-container[_ngcontent-%COMP%]   .vehicle-info-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .vehicle-brand-wrapper[_ngcontent-%COMP%]   .extra-position[_ngcontent-%COMP%], .new-vehicle-container[_ngcontent-%COMP%]   .vehicle-info-wrapper[_ngcontent-%COMP%]   .extra-position[_ngcontent-%COMP%] {\n  top: 5px;\n  position: relative;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex: 1;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .image-car[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 654px;\n  position: fixed;\n  bottom: 76px;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n  width: 242px;\n}\n@media (max-height: 640px) {\n  .image-car[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (orientation: portrait) {\n  .search-box[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .search-box[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    max-width: none;\n    width: 375px !important;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n  .form-container[_ngcontent-%COMP%]   .vehicle-brand-wrapper[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .vehicle-info-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 0px !important;\n  }\n  .form-container[_ngcontent-%COMP%]   .vehicle-brand-wrapper[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .vehicle-info-wrapper[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    max-width: none;\n    width: 375px !important;\n    margin-bottom: 20px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNocS1uZXctdmVoaWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFSTtFQUNJLHVCQUFBO0FBQVI7QUFHSTs7RUFFSSxvQkFBQTtBQURSO0FBTVk7RUFDSSxvQkFBQTtBQUpoQjtBQU9ZO0VBQ0ksVUFBQTtBQUxoQjtBQVVJOztFQUVJLG1CQUFBO0FBUlI7QUFVUTs7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxPQUFBO0FBVFI7QUFhUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFYWjtBQWVJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQWVRO0VBQ0ksWUFBQTtBQWJaO0FBa0JBO0VBRVE7SUFDSSx3QkFBQTtFQWhCVjtBQUNGO0FBb0JBO0VBRUk7SUFDSSxnQkFBQTtFQW5CTjtFQXFCTTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VBbkJWOztFQXVCRTtJQUNJLGdCQUFBO0VBcEJOO0VBc0JNOztJQUVJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0VBcEJWO0VBc0JVOztJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBbkJkO0FBQ0YiLCJmaWxlIjoiY2hxLW5ldy12ZWhpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy12ZWhpY2xlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41dnc7XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5kaXNhYmxlLWNvbnRyb2xzIGlucHV0IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlzYWJsZS1pbnB1dCxcclxuICAgIC5wYXJ0aWFsLWRpc2FibGUtaW5mbyB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdHJhdGlvbi1kYXRlIHtcclxuICAgICAgICA6Om5nLWRlZXAgLmlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbcmVhZG9ubHldIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZlaGljbGUtYnJhbmQtd3JhcHBlcixcclxuICAgIC52ZWhpY2xlLWluZm8td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgLmV4dHJhLXBvc2l0aW9uIHtcclxuICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlLWNhciB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NTRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDc2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICBjaHEtaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjQycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XHJcbiAgICAuaW1hZ2UtY2FyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAuY29sLTQge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICAgICAgIC52ZWhpY2xlLWJyYW5kLXdyYXBwZXIsXHJcbiAgICAgICAgLnZlaGljbGUtaW5mby13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAuY29sLTQge1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ 69368:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/quote/chq-new-cases/chq-repair-estimate/chq-repair-estimate.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChqRepairEstimateComponent": function() { return /* binding */ ChqRepairEstimateComponent; }
/* harmony export */ });
/* harmony import */ var src_app_model_chq_repair_dialog_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/chq-repair-dialog-model */ 25806);
/* harmony import */ var src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/widgets/chq-repair-dialog/chq-repair-dialog.component */ 25015);
/* harmony import */ var src_app_widgets_chq_pdf_generator_chq_pdf_generator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/chq-pdf-generator/chq-pdf-generator.component */ 50617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 34122);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 82426);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var src_app_dialogs_gt_motive_estimation_dialog_gt_motive_estimation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/gt-motive-estimation-dialog/gt-motive-estimation-dialog.component */ 14368);
/* harmony import */ var src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/chq-upload-model */ 75983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/repair-estimate/repair-estimate.service */ 87855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/inspection-service/inspection.service */ 13975);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../widgets/chq-step-header/chq-step-header.component */ 42736);
/* harmony import */ var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../widgets/chq-customloader/chq-customloader.component */ 48262);
/* harmony import */ var _widgets_chq_estimate_details_chq_estimate_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-estimate-details/chq-estimate-details.component */ 72076);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/damage-analysis/damage-analysis.component */ 9988);
/* harmony import */ var _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/error-page/no-access-error/no-access-error.component */ 54135);






















const _c0 = ["anchor"];
function ChqRepairEstimateComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "a", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r3.customerData.initial);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r3.customerData.firstName + " " + ctx_r3.customerData.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r3.customerData.countryCode + " " + ctx_r3.customerData.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("href", ctx_r3.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"])("hidden", true)("download", ctx_r3.pdfName);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r3.caseData == null ? null : ctx_r3.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r3.caseData == null ? null : ctx_r3.caseData.vehicleModel);
} }
function ChqRepairEstimateComponent_div_0_chq_estimate_details_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-estimate-details", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("downloadPdf", function ChqRepairEstimateComponent_div_0_chq_estimate_details_5_Template_chq_estimate_details_downloadPdf_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r8.downloadPdf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("estimateResponse", ctx_r4.estimateResponse)("editEstimate", ctx_r4.editEstimate)("estimateSource", ctx_r4.estimateSource)("i18n", ctx_r4.i18n);
} }
function ChqRepairEstimateComponent_div_0_div_11_chq_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_1_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r16.booking("create", ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("buttonModel", ctx_r10.createBooking);
} }
function ChqRepairEstimateComponent_div_0_div_11_chq_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_2_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r18.booking("view", ctx_r18.repairId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("buttonModel", ctx_r11.viewBooking);
} }
function ChqRepairEstimateComponent_div_0_div_11_chq_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_3_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r20.changeCaseStatusDialog(ctx_r20.closeCaseButton); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("buttonModel", ctx_r12.closeCaseButton);
} }
function ChqRepairEstimateComponent_div_0_div_11_chq_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_4_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r22.changeCaseStatusDialog(ctx_r22.approveCaseButton); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("buttonModel", ctx_r13.approveCaseButton);
} }
function ChqRepairEstimateComponent_div_0_div_11_chq_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_5_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r24.changeCaseStatusDialog(ctx_r24.rejectButton); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("buttonModel", ctx_r14.rejectButton);
} }
function ChqRepairEstimateComponent_div_0_div_11_chq_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "chq-button", 30);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("buttonModel", ctx_r15.calculationButton);
} }
function ChqRepairEstimateComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, ChqRepairEstimateComponent_div_0_div_11_chq_button_1_Template, 1, 1, "chq-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, ChqRepairEstimateComponent_div_0_div_11_chq_button_2_Template, 1, 1, "chq-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, ChqRepairEstimateComponent_div_0_div_11_chq_button_3_Template, 1, 1, "chq-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, ChqRepairEstimateComponent_div_0_div_11_chq_button_4_Template, 1, 1, "chq-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, ChqRepairEstimateComponent_div_0_div_11_chq_button_5_Template, 1, 1, "chq-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, ChqRepairEstimateComponent_div_0_div_11_chq_button_6_Template, 1, 1, "chq-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r5.commonService.repairPermission && !ctx_r5.repairId && (ctx_r5.caseStatus == null ? null : ctx_r5.caseStatus.toLowerCase()) !== "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r5.commonService.repairPermission && ctx_r5.repairId);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r5.isPendingApproval() && ctx_r5.isGTEstimate() && (ctx_r5.caseStatus == null ? null : ctx_r5.caseStatus.toLowerCase()) !== "complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r5.isPendingApproval() && ctx_r5.isGTEstimate() && ctx_r5.currentRejStatus && (ctx_r5.caseStatus == null ? null : ctx_r5.caseStatus.toLowerCase()) !== "complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r5.isPendingApproval() && ctx_r5.isGTEstimate() && ctx_r5.currentStatus && (ctx_r5.caseStatus == null ? null : ctx_r5.caseStatus.toLowerCase()) !== "complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r5.isPendingApproval() && ctx_r5.isGTEstimate() && ctx_r5.currentRejStatus && (ctx_r5.caseStatus == null ? null : ctx_r5.caseStatus.toLowerCase()) !== "complete");
} }
function ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-dropdown", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_1_Template_chq_dropdown_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r29.changeCaseStatusDialog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dropdownModel", ctx_r26.dropdownModelFilter);
} }
function ChqRepairEstimateComponent_div_0_div_12_chq_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_12_chq_button_2_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r31.booking("create", ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("buttonModel", ctx_r27.createBooking);
} }
function ChqRepairEstimateComponent_div_0_div_12_chq_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_12_chq_button_3_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3); return ctx_r33.booking("view", ctx_r33.repairId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("buttonModel", ctx_r28.viewBooking);
} }
function ChqRepairEstimateComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_1_Template, 1, 1, "chq-dropdown", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, ChqRepairEstimateComponent_div_0_div_12_chq_button_2_Template, 1, 1, "chq-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, ChqRepairEstimateComponent_div_0_div_12_chq_button_3_Template, 1, 1, "chq-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r6.isPendingApproval() && ctx_r6.isGTEstimate() && (ctx_r6.commonService.repairPermission || (ctx_r6.caseStatus == null ? null : ctx_r6.caseStatus.toLowerCase()) !== "complete" && !ctx_r6.commonService.repairPermission));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r6.commonService.repairPermission && !ctx_r6.repairId && (ctx_r6.caseStatus == null ? null : ctx_r6.caseStatus.toLowerCase()) !== "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r6.commonService.repairPermission && ctx_r6.repairId);
} }
const _c1 = function (a0) { return { "hidden": a0 }; };
function ChqRepairEstimateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "chq-step-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("back", function ChqRepairEstimateComponent_div_0_Template_chq_step_header_back_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r35.handleBack($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, ChqRepairEstimateComponent_div_0_div_2_Template, 19, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, ChqRepairEstimateComponent_div_0_chq_estimate_details_5_Template, 1, 4, "chq-estimate-details", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "chq-customloader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, ChqRepairEstimateComponent_div_0_div_11_Template, 7, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, ChqRepairEstimateComponent_div_0_div_12_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "history", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("toggleExpand", function ChqRepairEstimateComponent_div_0_Template_history_toggleExpand_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r37.getCaseHistory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](10, _c1, ctx_r0.showDamageAnalysis));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("chqModel", ctx_r0.header)("showButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.pageReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.showData);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("showLoading", !ctx_r0.showData);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.estimateResponse && !ctx_r0.commonService.isViewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.estimateResponse && !ctx_r0.commonService.isViewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("history", ctx_r0.history)("isLoading", ctx_r0.isHistoryLoading);
} }
function ChqRepairEstimateComponent_damage_analysis_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "damage-analysis", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("backEvent", function ChqRepairEstimateComponent_damage_analysis_1_Template_damage_analysis_backEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r38.handleBack($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hideNext", true)("caseDetail", ctx_r1.caseResult);
} }
function ChqRepairEstimateComponent_no_access_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "no-access-error");
} }
const repairEstimate = {
    title: 'create_estimate',
    step: 5,
    description: 'create_estimate_msg',
    stepName: 'step_five',
};
class ChqRepairEstimateComponent {
    /**
     * constructor
     * @param fb ChangeDetectorRef
     */
    constructor(cd, commonService, caseService, repairEstimateService, route, monitorService, inspectionService, dialog, router) {
        this.cd = cd;
        this.commonService = commonService;
        this.caseService = caseService;
        this.repairEstimateService = repairEstimateService;
        this.route = route;
        this.monitorService = monitorService;
        this.inspectionService = inspectionService;
        this.dialog = dialog;
        this.router = router;
        this.header = repairEstimate;
        this.customerFormData = {
            jobNumber: '1212',
            companyOrgType: '',
            claimNumber: '',
            companyName: '',
            tariffId: 0,
            isTariffEditable: true,
            licenseId: '',
            companyId: 0,
            partnershipId: 0,
            firstName: 'John',
            lastName: 'Doe',
            driverCode: '+971',
            driverPhone: 502302030,
            carOwnerSelector: 'Person',
            email: ''
        };
        this.isInitCalled = false;
        this.dialogData = src_app_model_chq_repair_dialog_model__WEBPACK_IMPORTED_MODULE_0__.RepairEstimateDialogData;
        this.showGen = true;
        this.pageReady = false;
        this.showData = false;
        this.showInspection = false;
        this.pdfName = '';
        this.showNoAccess = false;
        this.editEstimate = false;
        this.estimateSource = '';
        this.dropdownModelFilter = {
            options: [
                { 'label': 'Edit Calculations', 'dropdownItemIcon': 'edit' },
                { 'label': 'Reject', 'dropdownItemIcon': 'cross', 'color': 'var(--xa-red) !important' },
                { 'label': 'Approve', 'dropdownItemIcon': 'check' },
                //{ 'label': 'Close Case', 'dropdownItemIcon': 'folderplus' },
                { 'label': 'Complete', 'dropdownItemIcon': 'folderplus' }
            ],
            placeHolder: 'Options',
            label: '',
            appearance: 'button',
            placeHolderIcon: 'settings',
            name: 'option',
            displayValue: 'label',
            selectedOption: {}
        };
        this.history = [];
        this.isHistoryLoading = false;
        if (this.commonService.accessRight.closed) {
            this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(true);
        }
        this.commonService.userProfileData.subscribe((res) => {
            if (res && res.data) {
                const { organizationDetail } = res.data;
                if (organizationDetail) {
                    this.currentOrgId = organizationDetail.id;
                }
            }
        });
        this.i18n = this.commonService.geti18nInfo();
    }
    /**
     * CHecks if current browser is mac or not
     * @returns boolean
     */
    get isiOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
    }
    /**
     *
     * @param event visibility listener
     */
    handleVisibilityChange(event) {
        var _a, _b;
        if (!this.isInitCalled || !this.isiOS || !this.orgName) {
            return;
        }
        if (((_b = (_a = this.estimateResponse) === null || _a === void 0 ? void 0 : _a.estimateCharges) === null || _b === void 0 ? void 0 : _b.length) == 0) {
            this.getEstimationDetail(this.orgName);
        }
    }
    /**
     * host listener
     * @param event
     */
    onPopState(event) {
        sessionStorage.setItem('update', '0');
    }
    /**
   * ngAfterViewInit hook
   * @param fb FormBuilder
   */
    ngAfterViewInit() {
        this.commonService.updatePage('/quote/case/0', 'estimate');
        this.cd.detectChanges();
        this.showGen = false;
        this.monitorService.logEvent('ngAfterViewInit', ['ChqRepairEstimateComponent', 'addenda-quote', {
                caseId: this.caseGuid
            }]);
    }
    /**
   * handle back
   */
    handleBack($event) {
        this.showDamageAnalysis = !$event.back;
        if (!this.showDamageAnalysis) {
            // this.triggerCaseHistory();
        }
        this.monitorService.logEvent('handleBack', ['ChqRepairEstimateComponent', 'addenda-quote', {
                caseId: this.caseGuid
            }]);
    }
    /**
   * onInit lifecycle hook
  */
    ngOnInit() {
        var _a;
        this.caseGuid = (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.snapshot.paramMap.get('id');
        //this.checkRouteParams();
        this.getCaseDetail();
        this.isInitCalled = true;
        this.closeCaseButton = {
            //label: 'Close Case',
            label: 'Complete',
            type: 'primary',
            icon: 'folderplus'
        };
        this.approveCaseButton = {
            label: 'Approve',
            type: 'success',
            icon: 'check'
        };
        this.rejectButton = {
            label: 'Reject',
            type: 'outline-danger',
            icon: 'cross'
        };
        this.calculationButton = {
            label: 'Edit Calculations',
            type: 'outline',
            icon: 'edit',
            onclick: this.editGtMotive.bind(this)
        };
        this.createBooking = {
            label: 'Create Booking',
            type: 'outline',
            icon: 'calendar',
        };
        this.viewBooking = {
            label: 'View Booking',
            type: 'outline',
            icon: 'view'
        };
        this.commonService.accessRight.subscribe({
            next: (res) => {
                if (!res) {
                    this.showNoAccess = true;
                }
            }
        });
        const container = document.querySelector('.addenda-container');
        if (container) {
            container.scrollTop = 0;
        }
        this.monitorService.logEvent('ngOnInit', ['ChqRepairEstimateComponent', 'addenda-quote', {
                caseId: this.caseGuid
            }]);
    }
    /**
     * edit gt motive
     */
    editGtMotive() {
        if (this.repairId) {
            this.commonService.showChangeWarningMessage(this.redirectToGtEstimate.bind(this), src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_4__.Modules.repair);
        }
        else {
            this.redirectToGtEstimate();
        }
    }
    /**
   * opens close case dialog
   */
    changeCaseStatusDialog(model) {
        var _a, _b, _c, _d, _e, _f;
        let data = null;
        let status = '';
        if (((_a = model === null || model === void 0 ? void 0 : model.value) === null || _a === void 0 ? void 0 : _a.label) == 'Edit Calculations' || (model === null || model === void 0 ? void 0 : model.label) == 'Edit Calculations') {
            if (this.repairId) {
                this.commonService.showChangeWarningMessage(this.redirectToGtEstimate.bind(this), src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_4__.Modules.repair);
            }
            else {
                this.redirectToGtEstimate();
            }
            return;
        }
        else if (((_b = model === null || model === void 0 ? void 0 : model.value) === null || _b === void 0 ? void 0 : _b.label) == 'Approve' || (model === null || model === void 0 ? void 0 : model.label) == 'Approve') {
            data = this.dialogData.approve;
            status = 'Approved';
        }
        else if (((_c = model === null || model === void 0 ? void 0 : model.value) === null || _c === void 0 ? void 0 : _c.label) == 'Complete' || (model === null || model === void 0 ? void 0 : model.label) == 'Complete') {
            data = this.dialogData.complete;
            status = 'Complete';
        }
        else if (((_d = model === null || model === void 0 ? void 0 : model.value) === null || _d === void 0 ? void 0 : _d.label) == 'Reject' || (model === null || model === void 0 ? void 0 : model.label) == 'Reject') {
            data = this.dialogData.reject;
            status = 'Rejected';
        }
        else if (((_e = model === null || model === void 0 ? void 0 : model.value) === null || _e === void 0 ? void 0 : _e.label) == 'View Booking' || (model === null || model === void 0 ? void 0 : model.label) == 'View Booking') {
            this.booking('view', this.repairId);
            return;
        }
        else if (((_f = model === null || model === void 0 ? void 0 : model.value) === null || _f === void 0 ? void 0 : _f.label) == 'Create Booking' || (model === null || model === void 0 ? void 0 : model.label) == 'Create Booking') {
            this.booking('create', '');
            return;
        }
        this.monitorService.logEvent('changeCaseStatusDialog', ['ChqRepairEstimateComponent', 'addenda-quote', {
                caseId: this.caseGuid,
                status
            }]);
        const dialogRef = this.dialog.open(src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ChqRepairDialogComponent, {
            autoFocus: false,
            data: data
        });
        dialogRef.afterClosed().subscribe({
            next: (data) => {
                this.commonService.showLoading();
                if (!data) {
                    this.commonService.hideLoading();
                    return;
                }
                this.caseService.updateCaseStatus(this.caseGuid, status, data.data).subscribe({
                    next: () => {
                        this.monitorService.logEvent('updateCaseStatus', ['ChqRepairEstimateComponent', 'addenda-quote', {
                                caseId: this.caseGuid,
                                status
                            }]);
                        this.caseStatus = status;
                        // this.childC.pageReady = false;
                        this.toggleOption(status);
                    },
                    complete: () => {
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
   * go to gtEstimate
   */
    redirectToGtEstimate() {
        this.commonService.showLoading();
        this.monitorService.logEvent('redirectToGtEstimate', ['ChqRepairEstimateComponent', 'addenda-quote', {
                caseId: this.caseGuid,
                status
            }]);
        if (this.route.snapshot.queryParams['send'] && this.route.snapshot.queryParams['send'] == 'true') {
            this.router.navigate([], {
                relativeTo: this.route,
                queryParams: { send: 'false' },
                queryParamsHandling: 'merge'
            });
        }
        this.repairEstimateService.createEstimate(this.caseGuid, this.inspectionId, this.vehicleId, this.domainId).subscribe({
            next: (resp) => {
                if (resp) {
                    location.href = resp.data.url;
                    sessionStorage.setItem('update', '1');
                }
            },
            complete: () => {
                this.commonService.hideLoading();
            }
        });
    }
    /**
   * trigger case history
  */
    // triggerCaseHistory(): void {
    //   this.childC.pageReady = false;
    //   this.childC.getCaseHistory(3000);
    //   this.getCaseHistory();
    // }
    /**
   * downloadPdf()
  */
    downloadPdf() {
        this.commonService.showLoading();
        const apiCall = 'getXADownloadUrl';
        this.monitorService.logEvent('downloadPdf', ['ChqRepairEstimateComponent', 'addenda-quote', {
                caseId: this.caseGuid
            }]);
        this.repairEstimateService[apiCall](this.caseGuid).subscribe({
            next: (result) => {
                window.open(result.data.url, '_top');
                this.commonService.hideLoading();
            },
            error: () => {
                this.commonService.hideLoading();
            }
        });
    }
    /**
   * is case rejection/approved
   */
    get currentRejStatus() {
        var _a;
        if (!this.caseStatus) {
            return false;
        }
        return ['approved', 'closed', 'complete'].indexOf((_a = this.caseStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === -1;
    }
    /**
   * is case pending
   */
    get currentStatus() {
        var _a;
        if (!this.caseStatus) {
            return false;
        }
        return ['approved', 'closed', 'complete'].indexOf((_a = this.caseStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === -1;
    }
    /**
   * Get Case History
   */
    getCaseHistory() {
        this.history = [];
        this.isHistoryLoading = true;
        this.caseService.getCaseHistory(this.caseGuid, this.domainId).subscribe({
            next: (response) => {
                this.history = response;
            },
            complete: () => {
                this.isHistoryLoading = false;
            }
        });
    }
    /**
   * get case Detail
  */
    getCaseDetail() {
        this.caseService.getCaseDetail(this.caseGuid).subscribe({
            next: (response) => {
                var _a, _b, _c, _d;
                if (response === null || response === void 0 ? void 0 : response.data) {
                    const { inspections, vehicleId, status, orgName, repairGuid, domainID } = response.data;
                    this.commonService.caseStatus.next(status);
                    this.inspectionId = inspections ? (_a = inspections[0]) === null || _a === void 0 ? void 0 : _a.inspectionId : '';
                    if (['uploadphotos', 'repairestimation', 'closed', 'rejected', 'approved', 'complete', 'pendingapproval', 'readytoinvoice', 'invoiceready'].indexOf(status.toLowerCase()) === -1) {
                        return;
                    }
                    this.vehicleId = vehicleId;
                    this.repairId = repairGuid;
                    this.caseStatus = status;
                    this.domainId = domainID;
                    this.toggleOption(status);
                    this.header.caseNumber = response.data.caseNumber;
                    this.caseResult = response.data;
                    this.customerData = response.data.caseDetail;
                    this.orgName = orgName;
                    this.customerData = Object.assign(Object.assign({}, this.customerData), { initial: ((_b = this.customerData.firstName) === null || _b === void 0 ? void 0 : _b.substring(0, 1).toUpperCase())
                            + ((_c = this.customerData.lastName) === null || _c === void 0 ? void 0 : _c.substring(0, 1).toUpperCase()) });
                    this.pageReady = true;
                    if (this.currentOrgId != ((_d = response.data.organizationDetail) === null || _d === void 0 ? void 0 : _d.organizationId)) {
                        this.commonService.isViewOnly = true;
                    }
                    else {
                        this.commonService.isViewOnly = false;
                    }
                    const isUpdate = sessionStorage.getItem('update') || '0';
                    if (isUpdate === '0') {
                        this.getEstimationDetail(orgName);
                        this.commonService.updatePage('/quote/case/0', 'estimate');
                    }
                    else if (isUpdate === '1' && this.route.snapshot.queryParams['send'] && this.route.snapshot.queryParams['send'] == 'true') {
                        this.repairEstimateService.readUpdateEstimate(this.caseGuid, response.data.inspections[0].inspectionId, response.data.vehicleId, 'put', this.domainId)
                            .subscribe({
                            next: () => {
                                //get call
                                sessionStorage.setItem('update', '0');
                                this.getEstimationDetail(orgName);
                                this.router.navigate([], {
                                    relativeTo: this.route,
                                    queryParams: { send: 'false' },
                                    queryParamsHandling: 'merge'
                                });
                                this.commonService.hideLoading();
                                setTimeout(() => {
                                    this.commonService.updatePage('/quote/case/0', 'estimate');
                                });
                            }
                        });
                    }
                    else {
                        this.getEstimationDetail(orgName);
                    }
                }
            },
            error: () => {
                this.commonService.hideLoading();
            }
        });
    }
    /**
   * get estimation detail
   */
    getEstimationDetail(orgName) {
        this.repairEstimateService.getEstimate(this.caseGuid, this.inspectionId, this.vehicleId, this.domainId).subscribe({
            next: (response) => {
                var _a, _b, _c;
                this.estimateResponse = response.data;
                this.caseData = { 'vehicleMake': this.estimateResponse.make, 'vehicleModel': this.estimateResponse.modelCode };
                this.estimateResponse.orgName = orgName;
                this.estimateSource = (_a = response.data) === null || _a === void 0 ? void 0 : _a.externalSource;
                if (!this.estimateResponse.currencyCode) {
                    this.estimateResponse.currencyCode = this.i18n.currencySymbol;
                }
                if (((_c = (_b = this.estimateResponse) === null || _b === void 0 ? void 0 : _b.estimateCharges) === null || _c === void 0 ? void 0 : _c.length) == 0) {
                    this.commonService.hideLoading();
                    this.showConfirmationPopup();
                }
                else {
                    //this.pageReady = true;
                    this.getInspection();
                    this.showData = true;
                }
                this.commonService.hideLoading();
            },
            error: () => {
                this.commonService.hideLoading();
            }
        });
    }
    /**
   * get inspection call
   */
    getInspection() {
        this.inspectionService.getInspectionTemplateList().subscribe({
            next: (response) => {
                const repairInspectionTemplate = response === null || response === void 0 ? void 0 : response.data;
                if ((repairInspectionTemplate === null || repairInspectionTemplate === void 0 ? void 0 : repairInspectionTemplate.length) > 0) {
                    this.commonService.repairInspectionTemplate = repairInspectionTemplate[0];
                    const inspectionTemplateId = repairInspectionTemplate[0].id;
                    const apiData = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.forkJoin)({
                        inspectionTemplate: this.inspectionService.getInspectionTemplate(inspectionTemplateId),
                        inspectionDetail: this.inspectionService.getInspection(this.inspectionId)
                    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(error)));
                    apiData.subscribe((resultMap) => {
                        var _a, _b, _c, _d;
                        const inspectionTemplateDetail = (_a = resultMap.inspectionTemplate) === null || _a === void 0 ? void 0 : _a.inspectionItemTemplates;
                        const inspectionItems = resultMap.inspectionDetail;
                        const bulkUploadTemplateItem = inspectionTemplateDetail === null || inspectionTemplateDetail === void 0 ? void 0 : inspectionTemplateDetail.filter(step => step.name === 'Bulk Upload Image');
                        this.images = (_b = inspectionItems === null || inspectionItems === void 0 ? void 0 : inspectionItems.inspectionItems) === null || _b === void 0 ? void 0 : _b.filter(q => ((q.name == 'Bulk Upload Image' ||
                            q.inspectionItemTemplateID === bulkUploadTemplateItem[0].id)
                            && q.rawAzureBlobUrl != '')).map(q => q.rawAzureBlobUrl);
                        if (((_c = this.images) === null || _c === void 0 ? void 0 : _c.length) == 0) {
                            this.images = (_d = inspectionItems === null || inspectionItems === void 0 ? void 0 : inspectionItems.inspectionItems) === null || _d === void 0 ? void 0 : _d.filter(q => (q.name != 'Bulk Upload Image' && q.rawAzureBlobUrl != '')).map(q => q.rawAzureBlobUrl);
                        }
                        this.showInspection = true;
                    });
                }
            }
        });
    }
    /**
   * show confirmation popup to navigate to gt estimate if all the estimate charges are 0
   */
    showConfirmationPopup() {
        const dialogRef = this.dialog.open(src_app_dialogs_gt_motive_estimation_dialog_gt_motive_estimation_dialog_component__WEBPACK_IMPORTED_MODULE_3__.GtMotiveEstimationDialogComponent, {
            disableClose: true,
            data: {
                message: 'The estimate values are 0. Press continue to navigate to gtmotive.'
            },
            backdropClass: 'confirmation-popup-backdrop'
        });
        dialogRef.afterClosed().subscribe({
            next: (response) => {
                console.log(response);
                if (response) {
                    this.redirectToGtEstimate();
                }
            }
        });
    }
    /**
   * tooggle options
   * @param status
   */
    toggleOption(status) {
        if (status.toLowerCase() === 'reject' || status.toLowerCase() === 'rejected') {
            this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), {
                options: [
                    { 'label': 'Edit Calculations', 'dropdownItemIcon': 'edit' },
                    { 'label': 'Reject', 'dropdownItemIcon': 'cross', 'color': 'var(--xa-red) !important' },
                    { 'label': 'Approve', 'dropdownItemIcon': 'check' },
                    //{ 'label': 'Close Case', 'dropdownItemIcon': 'folderplus' }
                    { 'label': 'Complete', 'dropdownItemIcon': 'folderplus' }
                ]
            });
        }
        else if (status.toLowerCase() === 'approved') {
            this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), {
                options: [
                    //{ 'label': 'Close Case', 'dropdownItemIcon': 'folderplus' }
                    { 'label': 'Complete', 'dropdownItemIcon': 'folderplus' }
                ]
            });
        }
        else if (status.toLowerCase() === 'complete') {
            this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), {
                options: []
            });
        }
        else {
            this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), {
                options: [
                    { 'label': 'Edit Calculations', 'dropdownItemIcon': 'edit' },
                    { 'label': 'Reject', 'dropdownItemIcon': 'cross', 'color': 'var(--xa-red) !important' },
                    { 'label': 'Approve', 'dropdownItemIcon': 'check' },
                    //{ 'label': 'Close Case', 'dropdownItemIcon': 'folderplus' }
                    { 'label': 'Complete', 'dropdownItemIcon': 'folderplus' }
                ]
            });
        }
    }
    /**
   * navigate to booking
   * @param action
   */
    booking(action, bookingId) {
        if (action === 'create') {
            this.router.navigate(['repair/booking/0'], { queryParams: { 'caseId': this.caseGuid } });
        }
        else {
            this.router.navigate([`repair/booking/${bookingId}`]);
        }
    }
    /**
   * on destroy
   */
    ngOnDestroy() {
        this.commonService.accessRight.unsubscribe();
        this.monitorService.logEvent('ngOnDestroy', ['ChqRepairEstimateComponent', 'addenda-quote']);
        this.commonService.isViewOnly = false;
    }
    /**
      Returns a boolean value indicating whether the estimate source is 'GTmotive'.
      @returns {string} A boolean value indicating whether the estimate source is 'GTmotive'.
    */
    isGTEstimate() {
        if (this.estimateSource === 'GTMotive') {
            return true;
        }
        return false;
    }
    /**
      Returns a boolean value indicating whether the estimate source is 'GTmotive'.
      @returns {string} A boolean value indicating whether the estimate source is 'GTmotive'.
    */
    isPendingApproval() {
        var _a;
        if (((_a = this.caseStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'pendingapproval') {
            return true;
        }
        return false;
    }
}
ChqRepairEstimateComponent.ɵfac = function ChqRepairEstimateComponent_Factory(t) { return new (t || ChqRepairEstimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_8__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_9__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router)); };
ChqRepairEstimateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: ChqRepairEstimateComponent, selectors: [["chq-repair-estimate"]], viewQuery: function ChqRepairEstimateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](src_app_widgets_chq_pdf_generator_chq_pdf_generator_component__WEBPACK_IMPORTED_MODULE_2__.ChqPdfGeneratorComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.elementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.anchor = _t.first);
    } }, hostBindings: function ChqRepairEstimateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("visibilitychange", function ChqRepairEstimateComponent_visibilitychange_HostBindingHandler($event) { return ctx.handleVisibilityChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveDocument"])("popstate", function ChqRepairEstimateComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveWindow"]);
    } }, inputs: { customerFormData: "customerFormData" }, decls: 3, vars: 3, consts: [["class", "estimate-container", 3, "ngClass", 4, "ngIf"], [3, "hideNext", "caseDetail", "backEvent", 4, "ngIf"], [4, "ngIf"], [1, "estimate-container", 3, "ngClass"], [1, "header", 3, "chqModel", "showButton", "back"], ["class", "info-container", 4, "ngIf"], [1, "estimate-block", "row"], [1, "quote-estimate-step", "col-12"], ["serviceType", "repair", 3, "estimateResponse", "editEstimate", "estimateSource", "i18n", "downloadPdf", 4, "ngIf"], [3, "showLoading"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-quote.png"], ["class", "footer-button-wrapper show-md", 4, "ngIf"], ["class", "footer-button-wrapper show-sm", 4, "ngIf"], ["serviceType", "quote", 3, "history", "isLoading", "toggleExpand"], [1, "info-container"], [1, "info-block"], [1, "avatar"], [1, "text-block"], [1, "vehicle-block"], ["src", "assets/img/default_car.png"], [3, "href", "hidden", "download"], ["anchor", ""], ["serviceType", "repair", 3, "estimateResponse", "editEstimate", "estimateSource", "i18n", "downloadPdf"], [1, "footer-button-wrapper", "show-md"], [3, "buttonModel", "click", 4, "ngIf"], [3, "buttonModel", 4, "ngIf"], [3, "buttonModel", "click"], [3, "buttonModel"], [1, "footer-button-wrapper", "show-sm"], ["class", "option-dropdown", 3, "dropdownModel", "selected", 4, "ngIf"], [1, "option-dropdown", 3, "dropdownModel", "selected"], [3, "hideNext", "caseDetail", "backEvent"]], template: function ChqRepairEstimateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, ChqRepairEstimateComponent_div_0_Template, 14, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, ChqRepairEstimateComponent_damage_analysis_1_Template, 1, 2, "damage-analysis", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, ChqRepairEstimateComponent_no_access_error_2_Template, 1, 0, "no-access-error", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showDamageAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_10__.ChqStepHeaderComponent, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_11__.CustomloaderComponent, _widgets_chq_estimate_details_chq_estimate_details_component__WEBPACK_IMPORTED_MODULE_12__.ChqEstimateDetailsComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__.ChqButtonComponent, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.ChqDropdownComponent, _shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_15__.DamageAnalysisComponent, _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_16__.NoAccessErrorComponent], styles: [".estimate-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%], .estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%] {\n  padding: 10px 32px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid var(--xa-light-gray);\n  flex: 1;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%], .estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  display: flex;\n  flex-direction: column;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.25px;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  max-height: 45px;\n  max-width: 102px;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%]   .estimate-tables[_ngcontent-%COMP%] {\n  padding: 20px 20px 0 0;\n  position: relative;\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%]   .image-slider[_ngcontent-%COMP%] {\n  padding: 20px 0 0 10px;\n  position: relative;\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%]   .estimate-tables[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--xa-light-gray);\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%]   .estimate-tables[_ngcontent-%COMP%]   chq-customloader[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 61px;\n  background: rgba(26, 34, 51, 0.2);\n  border-radius: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.avatar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n.show-sm[_ngcontent-%COMP%] {\n  display: none !important;\n}\n@media (max-width: 985px) {\n  .show-md[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .show-sm[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n.quote-estimate-step[_ngcontent-%COMP%]     .estimate-main-container {\n  border: 1px solid var(--xa-form-border);\n  border-radius: 8px;\n  background: var(--xa-white);\n  margin-top: 25px;\n  margin-bottom: 25px;\n  padding: 32px;\n  padding-top: 0;\n}\n.quote-estimate-step[_ngcontent-%COMP%]     .estimate-main-container chq-customloader {\n  margin: auto;\n}\n.quote-estimate-step[_ngcontent-%COMP%]     .estimate-label {\n  margin-top: 25px;\n}\n.quote-estimate-step[_ngcontent-%COMP%]     .estimate-label, .quote-estimate-step[_ngcontent-%COMP%]     .estimate-main-container {\n  margin-left: calc(6px + 1.5vw);\n  margin-right: calc(5px + 1.5vw);\n}\n.option-dropdown[_ngcontent-%COMP%] {\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNocS1yZXBhaXItZXN0aW1hdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDUTs7RUFFSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxPQUFBO0FBQ1o7QUFDWTs7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVoQjtBQUFnQjs7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBR3BCO0FBRVk7O0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ2hCO0FBR1E7RUFDSSxpQkFBQTtBQURaO0FBSVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRlo7QUFNSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBSlI7QUFLUTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQU1RO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQUpaO0FBT1E7RUFDSSw0Q0FBQTtBQUxaO0FBT1k7RUFDSSxZQUFBO0FBTGhCO0FBV0E7RUFDSSx3QkFBQTtBQVJKO0FBV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUko7QUFVSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUlI7QUFZQTtFQUNJLHdCQUFBO0FBVEo7QUFZQTtFQUNJO0lBQ0ksd0JBQUE7RUFUTjs7RUFZRTtJQUNJLHdCQUFBO0VBVE47QUFDRjtBQWFJO0VBQ0ksdUNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBWFI7QUFZUTtFQUNJLFlBQUE7QUFWWjtBQWFJO0VBQ0ksZ0JBQUE7QUFYUjtBQWNJO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBQVpSO0FBMEJBO0VBQ0ksWUFBQTtBQXZCSiIsImZpbGUiOiJjaHEtcmVwYWlyLWVzdGltYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzdGltYXRlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuaW5mby1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgLmluZm8tYmxvY2ssXHJcbiAgICAgICAgLnZlaGljbGUtYmxvY2sge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgLnRleHQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvLWJsb2NrIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmVoaWNsZS1ibG9jayB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5lc3RpbWF0ZS1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLmVzdGltYXRlLXRhYmxlcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwIDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1zbGlkZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXN0aW1hdGUtdGFibGVzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcblxyXG4gICAgICAgICAgICBjaHEtY3VzdG9tbG9hZGVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNob3ctc20ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTg1cHgpIHtcclxuICAgIC5zaG93LW1kIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNob3ctc20ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnF1b3RlLWVzdGltYXRlLXN0ZXAge1xyXG4gICAgOjpuZy1kZWVwICAuZXN0aW1hdGUtbWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWZvcm0tYm9yZGVyKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIGNocS1jdXN0b21sb2FkZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5lc3RpbWF0ZS1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgOjpuZy1kZWVwICAuZXN0aW1hdGUtbGFiZWwsIDo6bmctZGVlcCAgLmVzdGltYXRlLW1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg2cHggKyAxLjV2dyk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDVweCArIDEuNXZ3KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEzNjZweCkge1xyXG4vLyAgICAgLmZvcm0tZm9vdGVyIHtcclxuLy8gICAgICAgICAvL21hcmdpbi1ib3R0b206IDIwcHg7XHJcbi8vICAgICAgICAgei1pbmRleDogMzAwMDtcclxuLy8gICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuLy8gICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5vcHRpb24tZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 74743:
/*!******************************************************!*\
  !*** ./src/app/resolvers/versionControl.resolver.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionControlResolver": function() { return /* binding */ VersionControlResolver; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53399);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 82426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
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
        return this.commonService.checkVersion().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            this.commonService.hideLoading();
            const localVersion = localStorage.getItem('appVersion');
            const appVersion = res.buildRevision;
            if (localVersion && localVersion != appVersion) {
                localStorage.setItem('appVersion', appVersion);
                setTimeout(() => {
                    location.reload();
                }, 10);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version available');
            }
            else {
                localStorage.setItem('appVersion', appVersion);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version is not available');
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
            this.commonService.hideLoading();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('data not available at this time');
        }));
    }
}
VersionControlResolver.ɵfac = function VersionControlResolver_Factory(t) { return new (t || VersionControlResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService)); };
VersionControlResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: VersionControlResolver, factory: VersionControlResolver.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_quote_chq-new-cases_chq-new-case_module_ts-es2015.js.map