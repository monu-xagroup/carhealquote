"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_claim-settings_settings-layout_claim-settings-layout_module_ts"],{

/***/ 40338:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/claim-settings/settings-layout/claim-settings-fraud-detection/claim-settings-fraud-detection.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSettingsFraudDetectionComponent": () => (/* binding */ ClaimSettingsFraudDetectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ClaimSettingsFraudDetectionComponent {
  static #_ = this.ɵfac = function ClaimSettingsFraudDetectionComponent_Factory(t) {
    return new (t || ClaimSettingsFraudDetectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClaimSettingsFraudDetectionComponent,
    selectors: [["app-claim-settings-fraud-detection"]],
    decls: 2,
    vars: 0,
    template: function ClaimSettingsFraudDetectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "claim-settings-fraud-detection works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 67862:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/claim-settings/settings-layout/claim-settings-garages/claim-settings-garages.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSettingsGaragesComponent": () => (/* binding */ ClaimSettingsGaragesComponent)
/* harmony export */ });
/* harmony import */ var src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helper/form/claim-form.helper */ 43941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);









function ClaimSettingsGaragesComponent_chq_button_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "chq-button", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx_r0.saveButtonModel);
  }
}
class ClaimSettingsGaragesComponent {
  /**
  * constructor
  * @param router
  */
  constructor(commonService, monitorService, cdr) {
    this.commonService = commonService;
    this.monitorService = monitorService;
    this.cdr = cdr;
    this.saveButtonModel = {
      label: 'save',
      type: 'disabled'
      // onclick: this.submitForm.bind(this)
    };

    this.showSaveBtn = false;
  }
  /**
   * on init
   */
  ngOnInit() {
    this.formModel = (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_0__.newSettingsGarageForm)();
  }
  static #_ = this.ɵfac = function ClaimSettingsGaragesComponent_Factory(t) {
    return new (t || ClaimSettingsGaragesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_2__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ClaimSettingsGaragesComponent,
    selectors: [["app-claim-settings-garages"]],
    decls: 18,
    vars: 8,
    consts: [[1, "page-container-claim-settings-garage"], [1, "claim-settings-garage-form"], [1, "main-div"], [1, "header-label"], [1, "main-container"], [1, "fx-row", "claim-settings-garage-container"], [1, "input-label"], [1, "assignment-wrapper", 3, "inputModel"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png"], ["class", "footer-save-button-wrapper", 3, "buttonModel", 4, "ngIf"], [1, "footer-save-button-wrapper", 3, "buttonModel"]],
    template: function ClaimSettingsGaragesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "chq-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ClaimSettingsGaragesComponent_chq_button_17_Template, 1, 1, "chq-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, "settings_garages_header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 6, "assignment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.formModel.assignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSaveBtn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_3__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__.ChqButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: [".page-container-claim-settings-garage[_ngcontent-%COMP%]   .claim-settings-garage-form[_ngcontent-%COMP%] {\n  padding: calc(5px + 1.5vw);\n}\n.page-container-claim-settings-garage[_ngcontent-%COMP%]   .claim-settings-garage-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%] {\n  background: var(--xa-tab-default-content);\n  border-radius: 10px;\n  border: 1px solid var(--xa-form-border);\n}\n.page-container-claim-settings-garage[_ngcontent-%COMP%]   .claim-settings-garage-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n}\n.page-container-claim-settings-garage[_ngcontent-%COMP%]   .claim-settings-garage-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-settings-garage-container[_ngcontent-%COMP%] {\n  gap: 40px;\n}\n.page-container-claim-settings-garage[_ngcontent-%COMP%]   .claim-settings-garage-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-settings-garage-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0px;\n  text-align: left;\n}\n.page-container-claim-settings-garage[_ngcontent-%COMP%]   .claim-settings-garage-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-settings-garage-container[_ngcontent-%COMP%]   .assignment-wrapper[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 20px;\n}\n.page-container-claim-settings-garage[_ngcontent-%COMP%]   .claim-settings-garage-form[_ngcontent-%COMP%]   .main-div[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  margin: 30px 0px 0px 40px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS1zZXR0aW5ncy9zZXR0aW5ncy1sYXlvdXQvY2xhaW0tc2V0dGluZ3MtZ2FyYWdlcy9jbGFpbS1zZXR0aW5ncy1nYXJhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksMEJBQUE7QUFBUjtBQUVRO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FBQVo7QUFFWTtFQUNJLGtCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksU0FBQTtBQUNwQjtBQUNvQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUN4QjtBQUVvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQXhCO0FBS1k7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSGhCIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyLWNsYWltLXNldHRpbmdzLWdhcmFnZSB7XHJcbiAgICAuY2xhaW0tc2V0dGluZ3MtZ2FyYWdlLWZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGMoNXB4ICsgMS41dncpO1xyXG5cclxuICAgICAgICAubWFpbi1kaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS10YWItZGVmYXVsdC1jb250ZW50KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZm9ybS1ib3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgICAgICAgICAgICAgIC5jbGFpbS1zZXR0aW5ncy1nYXJhZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXNzaWdubWVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweCAwcHggNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 67165:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/claim-settings/settings-layout/claim-settings-layout.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSettingsLayoutModule": () => (/* binding */ ClaimSettingsLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_guards_claim_guard_claim_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/claim-guard/claim.guard */ 87854);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _claim_settings_fraud_detection_claim_settings_fraud_detection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./claim-settings-fraud-detection/claim-settings-fraud-detection.component */ 40338);
/* harmony import */ var _claim_settings_garages_claim_settings_garages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./claim-settings-garages/claim-settings-garages.component */ 67862);
/* harmony import */ var _claim_settings_layout_claim_settings_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim-settings-layout/claim-settings-layout.component */ 6629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);














const claimRoutes = [{
  path: '',
  canActivate: [src_app_guards_claim_guard_claim_guard__WEBPACK_IMPORTED_MODULE_0__.ClaimGuard],
  component: _claim_settings_garages_claim_settings_garages_component__WEBPACK_IMPORTED_MODULE_4__.ClaimSettingsGaragesComponent
}, {
  path: 'fraud-detection',
  canActivate: [src_app_guards_claim_guard_claim_guard__WEBPACK_IMPORTED_MODULE_0__.ClaimGuard],
  component: _claim_settings_fraud_detection_claim_settings_fraud_detection_component__WEBPACK_IMPORTED_MODULE_3__.ClaimSettingsFraudDetectionComponent
}];
class ClaimSettingsLayoutModule {
  static #_ = this.ɵfac = function ClaimSettingsLayoutModule_Factory(t) {
    return new (t || ClaimSettingsLayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ClaimSettingsLayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(claimRoutes), src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ClaimSettingsLayoutModule, {
    declarations: [_claim_settings_layout_claim_settings_layout_component__WEBPACK_IMPORTED_MODULE_5__.ClaimSettingsLayoutComponent, _claim_settings_garages_claim_settings_garages_component__WEBPACK_IMPORTED_MODULE_4__.ClaimSettingsGaragesComponent, _claim_settings_fraud_detection_claim_settings_fraud_detection_component__WEBPACK_IMPORTED_MODULE_3__.ClaimSettingsFraudDetectionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _claim_settings_layout_claim_settings_layout_component__WEBPACK_IMPORTED_MODULE_5__.ClaimSettingsLayoutComponent, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_claim-settings_settings-layout_claim-settings-layout_module_ts.js.map