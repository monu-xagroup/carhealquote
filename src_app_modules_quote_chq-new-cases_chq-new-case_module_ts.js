"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_quote_chq-new-cases_chq-new-case_module_ts"],{

/***/ 36007:
/*!*********************************************************************!*\
  !*** ./src/app/guards/deactivate-guard/component-can-deactivate.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentCanDeactivateComponent": () => (/* binding */ ComponentCanDeactivateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ComponentCanDeactivateComponent {
  static #_ = this.ɵfac = function ComponentCanDeactivateComponent_Factory(t) {
    return new (t || ComponentCanDeactivateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ComponentCanDeactivateComponent,
    selectors: [["ng-component"]],
    decls: 0,
    vars: 0,
    template: function ComponentCanDeactivateComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 63674:
/*!****************************************************************!*\
  !*** ./src/app/guards/deactivate-guard/form-can-deactivate.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCanDeactivate": () => (/* binding */ FormCanDeactivate)
/* harmony export */ });
/* harmony import */ var _component_can_deactivate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-can-deactivate */ 36007);

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

/***/ 60562:
/*!****************************************************!*\
  !*** ./src/app/helper/form/vehicle-form.helper.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carMileageValidator": () => (/* binding */ carMileageValidator),
/* harmony export */   "licensePlateValidator": () => (/* binding */ licensePlateValidator),
/* harmony export */   "newVehicleForm": () => (/* binding */ newVehicleForm),
/* harmony export */   "newVehicleHeader": () => (/* binding */ newVehicleHeader)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);

const newVehicleForm = () => {
  const model = {
    vin: {
      placeHolder: 'Search VIN',
      name: 'vin',
      label: 'Vin Number',
      type: 'text',
      value: 0,
      icon: 'search',
      maxLength: 17,
      validation: {
        name: 'vin',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-hA-Hj-nJ-NpPr-zR-Z0-9]+$')]);
        },
        validationMessage: error => {
          if (error['pattern']) {
            return 'Invalid characters';
          }
          if (error['minlength']) {
            return 'Vin should have 17 characters';
          }
          return '';
        }
      }
    },
    make: {
      placeHolder: 'Make',
      name: 'make',
      label: 'Make',
      options: [{}],
      displayValue: 'name',
      fieldValue: 'name',
      type: 'select',
      value: 0,
      validation: {
        name: 'make',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please select make';
          }
          return '';
        }
      }
    },
    model: {
      placeHolder: 'Model',
      name: 'model',
      label: 'Model',
      options: [{}],
      displayValue: 'modelDescription',
      fieldValue: 'modelDescription',
      type: 'select',
      value: 0,
      validation: {
        name: 'model',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please select model';
          }
          return '';
        }
      }
    },
    year: {
      placeHolder: 'Import Interval',
      label: 'Import Interval',
      name: 'year',
      //selectedOption: '',
      options: [{}],
      displayValue: 'name',
      fieldValue: 'name',
      type: 'select',
      value: 0,
      validation: {
        name: 'year',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please select year';
          }
          return '';
        }
      }
    },
    licensePlate: {
      placeHolder: 'License Plate',
      label: 'License Plate',
      name: 'licensePlate',
      value: 0,
      type: 'text',
      maxLength: 12,
      validation: {
        name: 'licensePlate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-zA-Z0-9]*$'), licensePlateValidator()]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter license plate';
          }
          if (error['maxlength']) {
            return 'License plate should have not more than 12 characters';
          }
          if (error['pattern']) {
            return 'Only alphanumberic characters are allowed';
          }
          if (error['invalidLicensePlate']) {
            return 'License plate should not be 0';
          }
          return '';
        }
      }
    },
    carMilege: {
      placeHolder: 'Car Mileage',
      label: 'Car Mileage',
      name: 'carMilege',
      value: 0,
      type: 'text',
      maxLength: 7,
      validation: {
        name: 'carMilege',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]*$')]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter car mileage';
          }
          if (error['maxlength']) {
            return 'Car mileage should have not more than 7 characters';
          }
          if (error['pattern']) {
            return 'Only numeric characters are allowed';
          }
          if (error['invalidCarMileage']) {
            return 'Car mileage should be greater than 0';
          }
          return '';
        }
      }
    },
    registrationDate: {
      placeHolder: 'Registration date',
      label: 'Registration date',
      name: 'registrationDate',
      value: '',
      type: 'date',
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
      minDate: new Date('1980-01-01'),
      validation: {
        name: 'registrationDate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter date';
          }
          return '';
        }
      }
    },
    manufacturingDate: {
      placeHolder: 'Manufacturing  date',
      label: 'Manufacturing  date',
      name: 'manufacturingDate',
      value: '',
      type: 'date',
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
      minDate: new Date('1980-01-01'),
      validation: {
        name: 'manufacturingDate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter date';
          }
          return '';
        }
      }
    }
  };
  return model;
};
const newVehicleHeader = {
  title: 'Add vehicle',
  step: 2,
  description: 'Add your customers vehicle below',
  stepName: 'Step Two'
};
/**
 *
 * @returns
 */
function carMileageValidator() {
  const result = {
    'invalidCarMileage': false
  };
  return control => {
    if (control.value && control.value < 1) {
      result['invalidCarMileage'] = true;
      return result;
    }
    return null;
  };
}
/**
 * License plate Validator
 * @returns
 */
function licensePlateValidator() {
  const result = {
    'invalidLicensePlate': false
  };
  return control => {
    if (control.value === '0') {
      result['invalidLicensePlate'] = true;
      return result;
    }
    return null;
  };
}

/***/ }),

/***/ 25806:
/*!**************************************************!*\
  !*** ./src/app/model/chq-repair-dialog-model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepairEstimateDialogData": () => (/* binding */ RepairEstimateDialogData)
/* harmony export */ });
const RepairEstimateDialogData = {
  approve: {
    status: 'Approve Case',
    info: 'Please fill out a reason why you are approving this case.',
    buttonModel: {
      label: 'Approve Case',
      type: 'success',
      icon: 'check'
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
      icon: 'cross'
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
      icon: 'folder-plus'
    },
    imageGallery: false,
    gallery: []
  },
  complete: {
    status: 'Complete Case',
    info: 'Please fill out a reason why you are completing this case.',
    buttonModel: {
      label: 'Complete Case',
      type: 'primary',
      icon: 'folder-plus'
    },
    imageGallery: false,
    gallery: []
  },
  exportToDMS: {
    status: 'Export to DMS',
    info: 'Please fill out following information.',
    buttonModel: {
      label: 'Export to DMS',
      type: 'primary',
      icon: 'folder-plus'
    },
    imageGallery: false,
    gallery: []
  }
};

/***/ }),

/***/ 20949:
/*!********************************************************************!*\
  !*** ./src/app/modules/quote/chq-new-cases/chq-new-case.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChqNewCaseModule": () => (/* binding */ ChqNewCaseModule),
/* harmony export */   "MyHammerConfig": () => (/* binding */ MyHammerConfig)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var _chq_new_customer_chq_new_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chq-new-customer/chq-new-customer.component */ 69690);
/* harmony import */ var _chq_new_vehicle_chq_new_vehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chq-new-vehicle/chq-new-vehicle.component */ 37158);
/* harmony import */ var _chq_repair_estimate_chq_repair_estimate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chq-repair-estimate/chq-repair-estimate.component */ 69368);
/* harmony import */ var src_app_guards_deactivate_guard_deactivate_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/deactivate-guard/deactivate-guard.guard */ 84605);
/* harmony import */ var src_app_dialogs_form_data_dialog_form_data_dialog_form_data_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialogs/form-data-dialog/form-data-dialog/form-data-dialog.component */ 69327);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/error-page/error.module */ 88784);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_shared_new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/new-photos/new-photos.component */ 4704);
/* harmony import */ var src_app_shared_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/new-documents/new-documents.component */ 64307);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_shared_history_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/history/history.component */ 65504);
/* harmony import */ var src_app_shared_session_refresh_session_refresh_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/session-refresh/session-refresh.component */ 2893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);






















class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.HammerGestureConfig {
  constructor() {
    super(...arguments);
    this.overrides = {
      'swipe': {
        // override default settings
        velocity: 0.4,
        threshold: 20,
        direction: hammerjs__WEBPACK_IMPORTED_MODULE_7__.DIRECTION_ALL,
        enabled: true
      }
    };
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵMyHammerConfig_BaseFactory;
    return function MyHammerConfig_Factory(t) {
      return (ɵMyHammerConfig_BaseFactory || (ɵMyHammerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetInheritedFactory"](MyHammerConfig)))(t || MyHammerConfig);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({
    token: MyHammerConfig,
    factory: MyHammerConfig.ɵfac
  });
}
const casesRoutes = [{
  path: '',
  component: _chq_new_customer_chq_new_customer_component__WEBPACK_IMPORTED_MODULE_2__.ChqNewCustomerComponent,
  canDeactivate: [src_app_guards_deactivate_guard_deactivate_guard_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard],
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_8__.VersionControlResolver
  }
}, {
  path: 'vehicle',
  component: _chq_new_vehicle_chq_new_vehicle_component__WEBPACK_IMPORTED_MODULE_3__.ChqNewVehicleComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_8__.VersionControlResolver
  }
}, {
  path: 'document',
  component: src_app_shared_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_12__.NewDocumentsComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_8__.VersionControlResolver
  }
}, {
  path: 'photos',
  component: src_app_shared_new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_11__.NewPhotosComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_8__.VersionControlResolver
  }
}, {
  path: 'estimate',
  component: _chq_repair_estimate_chq_repair_estimate_component__WEBPACK_IMPORTED_MODULE_4__.ChqRepairEstimateComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_8__.VersionControlResolver
  }
}, {
  path: 'refresh',
  component: _chq_new_customer_chq_new_customer_component__WEBPACK_IMPORTED_MODULE_2__.ChqNewCustomerComponent
}, {
  path: 'integration',
  component: src_app_shared_session_refresh_session_refresh_component__WEBPACK_IMPORTED_MODULE_14__.SessionRefreshComponent
}];
class ChqNewCaseModule {
  static #_ = this.ɵfac = function ChqNewCaseModule_Factory(t) {
    return new (t || ChqNewCaseModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: ChqNewCaseModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    providers: [src_app_guards_deactivate_guard_deactivate_guard_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard, {
      provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.HammerModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(casesRoutes), src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_9__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, src_app_shared_history_history_component__WEBPACK_IMPORTED_MODULE_13__.HistoryComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ChqNewCaseModule, {
    declarations: [_chq_new_customer_chq_new_customer_component__WEBPACK_IMPORTED_MODULE_2__.ChqNewCustomerComponent, _chq_new_vehicle_chq_new_vehicle_component__WEBPACK_IMPORTED_MODULE_3__.ChqNewVehicleComponent, _chq_repair_estimate_chq_repair_estimate_component__WEBPACK_IMPORTED_MODULE_4__.ChqRepairEstimateComponent, src_app_dialogs_form_data_dialog_form_data_dialog_form_data_dialog_component__WEBPACK_IMPORTED_MODULE_6__.FormDataDialogComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.HammerModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_9__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, src_app_shared_history_history_component__WEBPACK_IMPORTED_MODULE_13__.HistoryComponent]
  });
})();

/***/ }),

/***/ 69690:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/quote/chq-new-cases/chq-new-customer/chq-new-customer.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChqNewCustomerComponent": () => (/* binding */ ChqNewCustomerComponent)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 76317);
/* harmony import */ var src_app_guards_deactivate_guard_form_can_deactivate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/deactivate-guard/form-can-deactivate */ 63674);
/* harmony import */ var _chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chq-new-customer-form-data-helper */ 83853);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var src_app_config_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/constants/app.constants */ 91924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/core/core.service */ 42771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-step-header/chq-step-header.component */ 42736);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



















const _c0 = ["companyOrg"];
const _c1 = ["licenseId"];
const _c2 = ["driverPhone"];
const _c3 = ["driverCode"];
const _c4 = ["orgType"];
function ChqNewCustomerComponent_div_0_chq_input_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "chq-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_chq_input_14_Template_chq_input_controlOutput_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r10.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r3.formModel.claimNumber);
  }
}
const _c5 = function (a0) {
  return {
    "hide": a0
  };
};
function ChqNewCustomerComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "chq-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_div_15_Template_chq_input_controlOutput_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r12.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](5, _c5, ctx_r4.isFormConfirmed));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 3, "car_owner_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r4.formModel.carOwnerSelector);
  }
}
const _c6 = function (a0) {
  return {
    "disable-input disable-controls": a0
  };
};
function ChqNewCustomerComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 5)(1, "div", 35)(2, "div", 36)(3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "chq-input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("clicked", function ChqNewCustomerComponent_div_0_div_16_Template_chq_input_clicked_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r16.hideDropdown($event));
    })("controlOutput", function ChqNewCustomerComponent_div_0_div_16_Template_chq_input_controlOutput_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r18.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "chq-input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_div_16_Template_chq_input_controlOutput_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r5.isRetailProvider && ctx_r5.isFormConfirmed ? "car_owner_details" : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "company_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r5.formModel.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](6, _c6, ctx_r5.formModel.companyName.type === "select"))("inputModel", ctx_r5.formModel.licenseId);
  }
}
function ChqNewCustomerComponent_div_0_chq_button_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "chq-button", 42);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("buttonModel", ctx_r8.confirmButtonModel);
  }
}
function ChqNewCustomerComponent_div_0_chq_button_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "chq-button", 42);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("buttonModel", ctx_r9.nextButtonModel);
  }
}
const _c7 = function (a0) {
  return {
    "text-mode": a0
  };
};
function ChqNewCustomerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "chq-step-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "form", 4)(3, "div", 5)(4, "div", 6)(5, "chq-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r20.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 5)(7, "div", 8)(8, "div", 9)(9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "chq-input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("clicked", function ChqNewCustomerComponent_div_0_Template_chq_input_clicked_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r22.hideDropdown($event));
    })("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r23.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ChqNewCustomerComponent_div_0_chq_input_14_Template, 1, 1, "chq-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, ChqNewCustomerComponent_div_0_div_15_Template, 7, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ChqNewCustomerComponent_div_0_div_16_Template, 10, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 5)(18, "div", 16)(19, "div", 17)(20, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 18)(24, "chq-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r24.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "chq-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r25.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 20)(27, "div", 18)(28, "chq-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r26.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 22)(30, "div", 18)(31, "chq-input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("clicked", function ChqNewCustomerComponent_div_0_Template_chq_input_clicked_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r27.hideDropdown($event));
    })("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "chq-input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ChqNewCustomerComponent_div_0_Template_chq_input_controlOutput_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r29.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 27)(36, "div", 28)(37, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, ChqNewCustomerComponent_div_0_chq_button_40_Template, 1, 1, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, ChqNewCustomerComponent_div_0_chq_button_41_Template, 1, 1, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](20, _c7, ctx_r0.isFormConfirmed));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("chqModel", ctx_r0.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r0.formModel.jobNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 16, "work_provider_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r0.formModel.companyOrgType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.customerFormData["companyOrgType"] === "Insurance Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isRetailProvider);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.isRetailProvider || ctx_r0.customerFormData[ctx_r0.formModel.carOwnerSelector.name] && ctx_r0.customerFormData[ctx_r0.formModel.carOwnerSelector.name] !== "Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.isRetailProvider && ctx_r0.isFormConfirmed && ctx_r0.customerFormData[ctx_r0.formModel.carOwnerSelector.name] && ctx_r0.customerFormData[ctx_r0.formModel.carOwnerSelector.name] === "Person" ? "car_owner_details" : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 18, "drivers_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r0.formModel.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r0.formModel.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r0.formModel.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r0.formModel.driverCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx_r0.formModel.driverPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.claimNumberEditAllowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isFormConfirmed && !ctx_r0.commonService.isViewOnly);
  }
}
function ChqNewCustomerComponent_no_access_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "no-access-error");
  }
}
class ChqNewCustomerComponent extends src_app_guards_deactivate_guard_form_can_deactivate__WEBPACK_IMPORTED_MODULE_0__.FormCanDeactivate {
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
    this.claimNumberEditNotAllowedForRepairStatuses = src_app_config_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__.claimNumberEditNotAllowedForRepairStatuses;
    this.claimNumberEditAllowed = true;
    this.isExternal = true;
    this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.menuItems;
    if (this.commonService.accessRight.closed) {
      this.commonService.accessRight = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(true);
    }
    this.commonService.userProfileData.subscribe(res => {
      if (res && res.data) {
        const {
          organizationDetail
        } = res.data;
        if (organizationDetail) {
          this.currentOrgId = organizationDetail.id;
          this.countryCode = organizationDetail.countryCode;
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
    } else if (this.originalData) {
      return this.compareObjects(this.originalData, this.customerFormData);
    } else if (this.checkDataDirty()) {
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
    return this.customerFormData['companyOrgType'] !== 'Retail' || this.customerFormData['companyOrgType'] === 'Retail' && this.customerFormData['carOwnerSelector'] && this.customerFormData['carOwnerSelector'] !== 'Person';
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
    const status = this.commonService.repairPermission && this.caseResponse?.repairGuid ? this.caseResponse?.repairStatus?.toLowerCase() : this.caseResponse?.status?.toLowerCase();
    for (const k in keys) {
      const key = keys[k];
      if (this.claimNumberEditNotAllowedForRepairStatuses.indexOf(status) !== -1 || !this.currentCaseStatus) {
        if (key === 'claimNumber') {
          this.formModel[key] = {
            ...this.formModel[key],
            disabled: false,
            mode: this.isFormConfirmed ? 'value' : 'text'
          };
        } else {
          this.formModel[key] = {
            ...this.formModel[key],
            disabled: true,
            mode: this.isFormConfirmed ? 'value' : 'text'
          };
        }
      } else {
        this.formModel[key] = {
          ...this.formModel[key],
          mode: this.isFormConfirmed ? 'value' : 'text'
        };
      }
    }
    this.isFormConfirmed = !this.isFormConfirmed;
    this.confirmButtonModel = {
      ...this.confirmButtonModel,
      label: this.isFormConfirmed ? 'Change details' : 'Confirm',
      type: this.isFormConfirmed ? 'outline' : 'primary',
      icon: this.isFormConfirmed ? 'gobackward' : 'check'
    };
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
        const {
          displayValue,
          fieldValue
        } = this.formModel[key];
        selectObj[fieldValue] = this.customerFormData[key];
        selectObj[displayValue] = '';
        selectObj[displayValue] = this.customerFormData[key];
        this.formModel[key] = {
          ...this.formModel[key],
          mode: 'text',
          selectedOption: selectObj
        };
      } else {
        this.formModel[key] = {
          ...this.formModel[key],
          mode: 'text'
        };
      }
    }
    this.confirmButtonModel = {
      ...this.confirmButtonModel,
      label: 'Change details',
      type: 'outline',
      icon: 'gobackward'
    };
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
        this.formModel.companyOrgType.observable = this.caseService.getProviders(this.orgId);
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
        next: result => {
          if (result) {
            this.updateButton();
            this.router.navigate([`/quote/case/${this.caseId}/vehicle`]);
          }
          this.commonService.hideLoading();
        },
        error: err => {
          this.commonService.hideLoading();
          this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_14__.SeverityLevel.Error);
        }
      });
    } else {
      this.caseService.saveNewCase(formData).subscribe({
        next: result => {
          if (result) {
            this.caseId = result.data.caseGuid;
            this.commonService.caseId.next(this.caseId);
            this.caseObjectId = result.data.id;
            this.header.caseNumber = result.data.caseNumber;
            this.updateButton();
            //sessionStorage.setItem('key', result.data.key);
            this.router.navigate([`/quote/case/${this.caseId}`], {
              replaceUrl: true
            });
            this.router.navigate([`/quote/case/${this.caseId}/vehicle`]);
          }
          this.commonService.hideLoading();
        },
        error: err => {
          this.commonService.hideLoading();
          this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_14__.SeverityLevel.Error);
        }
      });
    }
  }
  /**
   * hide dropdown
   */
  hideDropdown(name) {
    if (name === this.formModel.companyOrgType.name) {
      this.driverCode.closeDropdown();
      this.companyOrg?.closeDropdown();
    } else if (name === this.formModel.companyName.name) {
      this.driverCode.closeDropdown();
      this.orgType?.closeDropdown();
    } else {
      this.orgType?.closeDropdown();
      this.companyOrg?.closeDropdown();
    }
  }
  /**
   * on dropdown observable load
   */
  onObservableLoad(items) {
    this.commonService.hideLoading();
    if (!items) {
      return;
    }
    if (items && items.length > 0) {
      const selectedItem = items.filter(it => {
        return it.phoneCountryCode === this.formModel.driverCode.selectedOption?.phoneCountryCode;
      });
      if (selectedItem.length > 0) {
        const output = selectedItem[0];
        const validationPattern = output['regExpression'];
        this.formModel.driverCode = {
          ...this.formModel.driverCode,
          selectedOption: output
        };
        this.driverPhone.updateCurrentValidation(validationPattern, true);
      }
      const caseId = this.route.parent?.snapshot.paramMap.get('id');
      if (!caseId || caseId === '0') {
        this.setPrefillData(items);
      }
    }
  }
  /**
   * get Control Output
  */
  onFormUpdate(output) {
    this.monitorService.logEvent('onFormUpdate', ['ChqNewCustomerComponent', 'addenda-quote', {
      caseId: this.caseId,
      output
    }]);
    if (output.name === 'companyOrgType' && output.value.name === 'Retail' && this.formModel.carOwnerSelector.value === '') {
      this.formModel.carOwnerSelector.value = 'Person';
      this.customerFormData['carOwnerSelector'] = 'Person';
    }
    if (output.name === 'driverCode') {
      const validationPattern = output.value['regExpression'];
      this.driverPhone.updateCurrentValidation(validationPattern);
    }
    if (output.type === 'select') {
      const oldValue = this.customerFormData[output.name];
      const keyValue = this.formModel[output.name].fieldValue || this.formModel[output.name].displayValue;
      if (this.formModel[output.name]?.selectedOption && this.formModel[output.name]?.selectedOption[keyValue] === output?.value[keyValue]) {
        return;
      }
      this.formModel[output.name] = {
        ...this.formModel[output.name],
        selectedOption: output.value
      };
      this.customerFormData[output.name] = output.value[keyValue];
      if (output.name === 'companyOrgType') {
        //this.formModel.companyOrgType.label = output.value[this.formModel[output.name].displayValue];
        if (oldValue !== this.customerFormData[output.name]) {
          setTimeout(() => {
            this.companyOrg?.setUnTouched();
            this.licenseId?.setUnTouched();
          });
        }
        if (output.value[keyValue] && output.value[this.formModel[output.name].displayValue] !== 'Insurance Company') {
          this.formModel['claimNumber'] = {
            ...this.formModel['claimNumber'],
            value: ''
          };
        }
        if (output.value[keyValue] && output.value[this.formModel[output.name].displayValue] !== 'Retail') {
          this.formModel.companyName = {
            ...this.formModel.companyName,
            displayValue: 'companyName',
            fieldValue: 'companyName',
            onObservableLoad: this.updateCaseData.bind(this),
            placeHolder: 'Select...',
            value: '',
            type: 'select',
            observable: this.caseService.getCompanyData(output.value[keyValue], this.orgId)
          };
          if (this.formModel.companyName.selectedOption && this.formModel.companyName.selectedOption?.tariffId) {
            this.customerFormData.companyId = null;
            this.customerFormData.companyName = null;
            this.formModel.companyName.selectedOption = {};
          }
          this.customerFormData.licenseId = '';
          this.formModel.licenseId = {
            ...this.formModel.licenseId,
            value: ''
          };
          setTimeout(() => {
            if (oldValue && oldValue !== 'Retail' && this.currentStatus) {
              this.companyOrg?.triggerObservable();
            }
          });
        } else {
          if (output.value[keyValue] && output.value[this.formModel[output.name].displayValue] === 'Retail') {
            this.formModel['claimNumber'] = {
              ...this.formModel['claimNumber'],
              value: ''
            };
            this.formModel.companyName = {
              ...this.formModel.companyName,
              placeHolder: 'Company Name'
            };
            this.customerFormData.claimNumber = '';
            if (this.currentStatus) {
              this.caseService.getCompanyData(output.value[keyValue], this.orgId).subscribe({
                next: resp => {
                  if (resp && resp.data?.length > 0) {
                    const data = resp.data[0];
                    this.customerFormData['companyId'] = data['companyId'];
                    this.customerFormData['tariffId'] = data['tariffId'];
                    if (this.formModel.companyName.selectedOption && this.formModel.companyName.selectedOption?.tariffId) {
                      this.customerFormData.licenseId = '';
                      this.formModel.licenseId = {
                        ...this.formModel?.licenseId,
                        value: ''
                      };
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
          this.formModel.companyName = {
            ...this.formModel.companyName,
            type: 'text'
          };
        }
      }
      if (output.name === 'companyName' && output.value) {
        this.customerFormData['companyId'] = output.value['companyId'];
        this.customerFormData['tariffId'] = output.value['tariffId'];
        this.customerFormData.isTariffEditable = output.value['isEditable'];
        this.customerFormData.licenseId = output.value['licenseId'].toString();
        this.formModel.licenseId = {
          ...this.formModel?.licenseId,
          value: output.value['licenseId'].toString()
        };
        this.customerFormData.partnershipId = output.value['partnershipId'];
      }
      this.customerFormData[this.formModel[output.name]['idField']] = output.value[this.formModel[output.name].displayValue];
    } else {
      if (output.name === 'carOwnerSelector' && output.keyFieldValue && this.formModel[output.name]['idField']) {
        this.customerFormData[this.formModel[output.name]['idField']] = output.keyFieldValue;
      }
      if (output.isValid) {
        this.formModel[output.name].value = output.value;
        this.customerFormData[output.name] = output.value;
      } else {
        this.formModel[output.name].value = '';
        if (output.name !== 'driverPhone') {
          this.customerFormData[output.name] = '';
        } else {
          this.customerFormData[output.name] = 0;
        }
      }
    }
    this.customerFormData = {
      ...this.customerFormData
    };
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
    if (items && this.customerFormData.companyId && !this.customerFormData['tariffId']) {
      const selectedItem = items.filter(it => {
        return it.companyId === this.customerFormData.companyId;
      });
      if (selectedItem.length > 0) {
        this.customerFormData['tariffId'] = selectedItem[0]['tariffId'];
        this.customerFormData.isTariffEditable = selectedItem[0]['isEditable'];
        this.formModel.licenseId = {
          ...this.formModel?.licenseId,
          value: selectedItem[0]['licenseId'].toString()
        };
        this.customerFormData.partnershipId = selectedItem[0]['partnershipId'];
        this.formModel.companyName.selectedOption = selectedItem[0];
      }
    }
  }
  /**
   * is case pending
   */
  get currentStatus() {
    if (!this.caseResponse?.status && !this.isFormConfirmed) {
      return true;
    }
    return ['reject', 'rejected', 'approved', 'closed', 'repairestimation'].indexOf(this.caseResponse?.status?.toLowerCase()) === -1 && !this.isFormConfirmed;
  }
  /**
   * is case pending
   */
  get currentCaseStatus() {
    if (!this.caseResponse?.status && this.currentOrgId === this.caseResponse?.organizationDetail?.organizationId) {
      return true;
    } else if (this.commonService.isViewOnly) {
      return false;
    }
    return ['reject', 'rejected', 'approved', 'closed', 'repairestimation', 'complete'].indexOf(this.caseResponse?.status?.toLowerCase()) === -1;
  }
  /**
   * load caseDetail
   */
  loadCaseDetails() {
    const keys = Object.keys(this.formModel);
    const caseId = this.route.parent?.snapshot.paramMap.get('id');
    if (caseId && caseId != '0') {
      this.caseId = caseId;
      this.isApiLoading = true;
      this.commonService.caseId.next(this.caseId);
      this.commonService.showLoading();
      this.caseService.getCaseDetail(this.caseId).subscribe({
        next: result => {
          this.caseResponse = result.data;
          const status = this.commonService.repairPermission && this.caseResponse?.repairGuid ? this.caseResponse?.repairStatus?.toLowerCase() : this.caseResponse?.status?.toLowerCase();
          if (this.claimNumberEditNotAllowedForRepairStatuses.indexOf(status) !== -1) {
            this.claimNumberEditAllowed = false;
          } else {
            this.claimNumberEditAllowed = true;
          }
          this.caseObjectId = this.caseResponse.id;
          this.orgId = this.caseResponse.orgId;
          this.commonService.caseStatus.next(this.caseResponse.status);
          const inspections = this.caseResponse.inspections;
          if (inspections.length > 0) {
            this.commonService.inspectionId.next(this.caseResponse.inspections[0].inspectionId);
          }
          if (this.currentOrgId != this.caseResponse?.organizationDetail?.organizationId) {
            this.commonService.isViewOnly = true;
          } else {
            this.commonService.isViewOnly = false;
          }
          if (!this.currentStatus || this.commonService.isViewOnly) {
            this.setTextMode();
            this.isFormConfirmed = true;
          }
          this.header.caseNumber = this.caseResponse.caseNumber;
          this.formDataFromResponse = (0,_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.caseResponseMapper)(this.caseResponse);
          this.customerFormData = (0,_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.caseDataMapper)(this.formDataFromResponse, this.isExternal);
          this.originalData = JSON.parse(JSON.stringify(this.customerFormData));
          for (const k in keys) {
            const obj = this.formModel[keys[k]];
            const {
              type,
              displayValue,
              fieldValue
            } = obj;
            if (this.customerFormData[keys[k]]) {
              if (type === 'select') {
                const selectObj = {};
                selectObj[displayValue] = '';
                selectObj[fieldValue] = this.customerFormData[keys[k]];
                if (!this.currentStatus && keys[k] === 'companyOrgType') {
                  selectObj[displayValue] = this.customerFormData[keys[k]];
                }
                this.formModel[keys[k]] = {
                  ...this.formModel[keys[k]],
                  value: '',
                  selectedOption: selectObj
                };
              } else {
                let selectedOption = {};
                if (keys[k] === 'companyName') {
                  selectedOption = {
                    'companyName': this.customerFormData[keys[k]]
                  };
                }
                this.formModel[keys[k]] = {
                  ...this.formModel[keys[k]],
                  value: this.customerFormData[keys[k]],
                  selectedOption
                };
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
    } else {
      this.isApiLoading = false;
      if (!this.formModel.companyOrgType.observable) {
        this.formModel.companyOrgType.observable = this.caseService.getProviders(this.orgId);
      }
      for (const k in keys) {
        const key = keys[k];
        if (key !== 'driverCode') {
          this.formModel[key] = {
            ...this.formModel[key],
            value: '',
            selectedOption: {}
          };
        } else {
          this.formModel[key] = {
            ...this.formModel[key],
            value: '',
            selectedOption: {
              'phoneCountryCode': this.countryCode ?? '+91'
            }
          };
          this.customerFormData.driverCode = this.countryCode ?? '+91';
        }
      }
    }
  }
  /**
   * prefill search data
   */
  setPrefillData(items) {
    const prefillData = this.commonService.getSessionStorage('selectedSearchItem');
    if (prefillData) {
      const prefillObj = JSON.parse(prefillData);
      this.formModel.email = {
        ...this.formModel.email,
        value: prefillObj.email,
        selectedOption: {}
      };
      this.customerFormData.email = prefillObj.email;
      if (prefillObj.firstName) {
        this.customerFormData.firstName = prefillObj.firstName;
        this.formModel.firstName = {
          ...this.formModel.firstName,
          value: this.customerFormData.firstName,
          selectedOption: {}
        };
      }
      if (prefillObj.lastName) {
        this.customerFormData.lastName = prefillObj.lastName;
        this.formModel.lastName = {
          ...this.formModel.lastName,
          value: this.customerFormData.lastName,
          selectedOption: {}
        };
      }
      if (prefillObj.phoneNumber) {
        const code = prefillObj.phoneNumber?.substring(0, 3);
        const code1 = prefillObj.phoneNumber?.substring(0, 4);
        let currentPhoneNumber = '';
        let selectedItem = items.filter(it => {
          return it.phoneCountryCode === code;
        });
        if (selectedItem.length === 0) {
          currentPhoneNumber = prefillObj.phoneNumber?.substring(4, prefillObj.phoneNumber?.length);
          selectedItem = items.filter(it => {
            return it.phoneCountryCode === code1;
          });
        } else {
          currentPhoneNumber = prefillObj.phoneNumber?.substring(3, prefillObj.phoneNumber?.length);
        }
        if (selectedItem.length > 0) {
          const output = selectedItem[0];
          const validationPattern = output['regExpression'];
          this.customerFormData.driverCode = output?.phoneCountryCode;
          this.formModel.driverCode = {
            ...this.formModel.driverCode,
            selectedOption: output
          };
          this.driverPhone?.updateCurrentValidation(validationPattern, true);
        }
        this.formModel.driverPhone = {
          ...this.formModel.driverPhone,
          value: currentPhoneNumber,
          selectedOption: {}
        };
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
      driverCode: this.countryCode ?? '+91',
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
    let keysToAvoid = ['claimNumber'];
    if (this.retail === 'Retail') {
      if (this.customerFormData['carOwnerSelector'] === 'Person') {
        keysToAvoid = ['companyName', 'claimNumber', 'licenseId', 'companyId'];
      } else if (this.customerFormData['carOwnerSelector'] === 'Company') {
        keysToAvoid = ['claimNumber', 'companyId'];
      }
    } else if (this.customerFormData.companyOrgType != 'Insurance Company') {
      keysToAvoid = ['claimNumber'];
    }
    if (this.commonService.repairPermission) {
      keysToAvoid.push('jobNumber');
    }
    keysToAvoid.push('caseTypeID');
    let isValid = true;
    for (const k in keys) {
      const prop = keys[k];
      if (prop === 'claimNumber' && this.formModel.claimNumber?.formControl) {
        const claimValid = this.formModel.claimNumber?.formControl?.valid;
        if (!claimValid) {
          isValid = false;
          continue;
        }
      }
      if (prop === 'carOwnerSelector' || prop === 'isTariffEditable' || keysToAvoid.indexOf(prop) !== -1) {
        continue;
      }
      if (!this.customerFormData[prop]) {
        isValid = false;
      }
    }
    if (this.isFormConfirmed) {
      this.confirmButtonModel.type = 'outline';
    } else if (!isValid) {
      this.confirmButtonModel.type = 'disabled';
    } else {
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
    this.route.queryParams.subscribe(params => {
      const codeParam = params['isBack'];
      if (codeParam === 'true' || codeParam === true) {
        this.isFormConfirmed = true;
        this.setTextMode();
      } else if (this.currentStatus) {
        if (!this.formModel.companyOrgType.observable) {
          this.formModel.companyOrgType.observable = this.caseService.getProviders(this.orgId);
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
    this.commonService.userProfileData.subscribe({
      next: res => {
        if (res) {
          const automotiveServices = res?.data?.userPermission?.automotiveServices;
          const permissionList = automotiveServices.find(x => x.automotiveServiceName.toLowerCase() === 'carheal quote')?.permissions;
          const quoteMenus = this.menuItems.find(x => x.name === 'quote')?.childMenu;
          if (quoteMenus && quoteMenus?.length > 0 && permissionList && permissionList?.length > 0) {
            this.isExternal = this.commonService.hasPermission('case.external', permissionList);
          }
          this.formModel = (0,_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.newCaseForm)();
          if (!this.formModel.driverCode.observable) {
            this.formModel.driverCode.observable = this.coreService.getPhoneNumber();
            this.formModel.driverCode.onObservableLoad = this.onObservableLoad.bind(this);
          }
          if (this.commonService.repairPermission) {
            this.formModel.jobNumber = {
              ...this.formModel.jobNumber,
              disabled: true,
              validation: null
            };
          }
          this.checkForFormValidation();
          this.loadCaseDetails();
        }
      }
    });
    this.header.caseNumber = '';
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
    this.commonService.accessRight.subscribe({
      next: res => {
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
  static #_ = this.ɵfac = function ChqNewCustomerComponent_Factory(t) {
    return new (t || ChqNewCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_7__.CoreService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: ChqNewCustomerComponent,
    selectors: [["chq-new-case"]],
    viewQuery: function ChqNewCustomerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c4, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.companyOrg = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.licenseId = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.driverPhone = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.driverCode = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.orgType = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 2,
    consts: [["class", "new-case-container mt-0 mh-0", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "new-case-container", "mt-0", "mh-0", 3, "ngClass"], [3, "chqModel"], [1, "form-container"], [1, "row"], [1, "job-number", "col-3"], [3, "inputModel", "controlOutput"], [1, "work-provider", "col-6"], [1, "work-input-wrapper", "row"], [1, "col-12", "sub-heading"], [1, "col-6", 3, "inputModel", "clicked", "controlOutput"], ["orgType", ""], ["class", "col-6", 3, "inputModel", "controlOutput", 4, "ngIf"], ["class", "row", 3, "ngClass", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "driver-details", "col-12"], [1, "driver-input-wrapper", "row"], [1, "driver-fields-wrapper"], [1, "driver-field", 3, "inputModel", "controlOutput"], [1, "driver-address-wrapper", "row"], [1, "driver-field", "basis-272", 3, "inputModel", "controlOutput"], [1, "driver-field", "basis-272"], [1, "driver-field", "driver-code-field", "no-padding", 3, "inputModel", "clicked", "controlOutput"], ["driverCode", ""], [1, "driver-field", "no-padding", 3, "inputModel", "controlOutput"], ["driverPhone", ""], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-quote.png"], [1, "footer-button-wrapper"], [3, "buttonModel", 4, "ngIf"], [1, "col-6", 3, "inputModel", "controlOutput"], [1, "row", 3, "ngClass"], [1, "insurer-details", "col-12"], [1, "insurance-input-wrapper", "row"], [1, "company-input", "col-3", 3, "inputModel", "controlOutput"], [1, "company-input", "col-6", 3, "inputModel", "clicked", "controlOutput"], ["companyOrg", ""], [1, "col-6", 3, "ngClass", "inputModel", "controlOutput"], ["licenseId", ""], [3, "buttonModel"]],
    template: function ChqNewCustomerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, ChqNewCustomerComponent_div_0_Template, 42, 22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ChqNewCustomerComponent_no_access_error_1_Template, 1, 0, "no-access-error", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isApiLoading && !ctx.showNoAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_8__.ChqStepHeaderComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_9__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_10__.ChqButtonComponent, _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_11__.NoAccessErrorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
    styles: [".new-case-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px - 1vw);\n  overflow: hidden;\n  overflow-y: auto;\n  padding: 0 calc(5px + 1vw) 1vw calc(5px + 1vw);\n}\n.new-case-container[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--xa-black);\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex: 1;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .job-number[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .work-provider[_ngcontent-%COMP%] {\n  flex-direction: column;\n  margin-bottom: 15px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .work-provider[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .work-provider[_ngcontent-%COMP%]   .work-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .work-provider[_ngcontent-%COMP%]   .car-owner-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .insurer-details[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  flex-direction: column;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .insurer-details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .insurer-details[_ngcontent-%COMP%]   .insurance-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%] {\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-input-wrapper[_ngcontent-%COMP%], .new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-address-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-input-wrapper[_ngcontent-%COMP%], .new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-address-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field[_ngcontent-%COMP%] {\n  flex: 1 1 120px;\n  padding: 10px;\n  width: 120px;\n}\n@media (max-width: 850px) {\n  .new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field.driver-code-field[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 120px;\n  padding-right: 20px;\n}\n.new-case-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .driver-details[_ngcontent-%COMP%]   .driver-fields-wrapper[_ngcontent-%COMP%]   .driver-field.basis-272[_ngcontent-%COMP%] {\n  flex-basis: 272px;\n}\n.new-case-container[_ngcontent-%COMP%]   .hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.new-case-container[_ngcontent-%COMP%]   .disable-input[_ngcontent-%COMP%], .new-case-container[_ngcontent-%COMP%]   .partial-disable-info[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.text-mode[_ngcontent-%COMP%]   .job-number[_ngcontent-%COMP%] {\n  padding-left: 9px;\n}\n\n  .disable-controls input {\n  opacity: 0.6 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9xdW90ZS9jaHEtbmV3LWNhc2VzL2NocS1uZXctY3VzdG9tZXIvY2hxLW5ldy1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxPQUFBO0FBQ0o7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFFSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVNO0VBQ0UsbUJBQUE7QUFBUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBRFI7QUFLUTtFQUNFLG1CQUFBO0FBSFY7QUFRSTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFOTjtBQVFNO0VBQ0UsbUJBQUE7QUFOUjtBQVNNO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBUFI7QUFXSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFUTjtBQVdNOztFQUVFLG1CQUFBO0FBVFI7QUFZTTs7RUFFRSxhQUFBO0VBQ0EsMkJBQUE7QUFWUjtBQWFNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBWFI7QUFhUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVhWO0FBYVU7RUFMRjtJQU1JLFlBQUE7RUFWVjtBQUNGO0FBWVU7RUFDRSxVQUFBO0FBVlo7QUFhVTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVhaO0FBY1U7RUFDRSxpQkFBQTtBQVpaO0FBb0JFO0VBQ0UsYUFBQTtBQWxCSjtBQXFCRTs7RUFFRSxvQkFBQTtBQW5CSjs7QUF3QkU7RUFDRSxpQkFBQTtBQXJCSjs7QUF5QkE7RUFDRSx1QkFBQTtBQXRCRiIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctY2FzZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4IC0gMXZ3KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogMCBjYWxjKDVweCArIDF2dykgMXZ3IGNhbGMoNXB4ICsgMXZ3KTtcclxuICAuc3ViLWhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgLmpvYi1udW1iZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC53b3JrLXByb3ZpZGVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAud29yay1pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhci1vd25lci13cmFwcGVyIHtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnN1cmVyLWRldGFpbHMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnN1cmFuY2UtaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZHJpdmVyLWRldGFpbHMge1xyXG4gICAgICBmbGV4OiA0O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLmRyaXZlci1pbnB1dC13cmFwcGVyLFxyXG4gICAgICAuZHJpdmVyLWFkZHJlc3Mtd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRyaXZlci1pbnB1dC13cmFwcGVyLFxyXG4gICAgICAuZHJpdmVyLWFkZHJlc3Mtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcml2ZXItZmllbGRzLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuZHJpdmVyLWZpZWxkIHtcclxuICAgICAgICAgIGZsZXg6IDEgMSAxMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLm5vLXBhZGRpbmcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuZHJpdmVyLWNvZGUtZmllbGQge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYmFzaXMtMjcyIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMjcycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5kaXNhYmxlLWlucHV0LFxyXG4gIC5wYXJ0aWFsLWRpc2FibGUtaW5mbyB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LW1vZGUge1xyXG4gIC5qb2ItbnVtYmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5kaXNhYmxlLWNvbnRyb2xzIGlucHV0IHtcclxuICBvcGFjaXR5OiAwLjYgIWltcG9ydGFudDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 37158:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/quote/chq-new-cases/chq-new-vehicle/chq-new-vehicle.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChqNewVehicleComponent": () => (/* binding */ ChqNewVehicleComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helper/form/vehicle-form.helper */ 60562);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/inspection/inspection.service */ 62190);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_labour_rate_labour_rate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/labour-rate/labour-rate.service */ 21126);
/* harmony import */ var src_app_services_media_collection_media_collection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/media-collection/media-collection.service */ 61476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../widgets/chq-step-header/chq-step-header.component */ 42736);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 38699);




















const _c0 = ["make"];
const _c1 = ["model"];
const _c2 = ["year"];
function ChqNewVehicleComponent_div_0_chq_button_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "chq-button", 25);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r5.confirmButtonModel);
  }
}
function ChqNewVehicleComponent_div_0_chq_button_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "chq-button", 25);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r6.nextButtonModel);
  }
}
const _c3 = function (a0) {
  return {
    "text-mode": a0
  };
};
const _c4 = function (a0) {
  return {
    "partial-disable-info": a0
  };
};
const _c5 = function (a0) {
  return {
    "disable-input disable-controls": a0
  };
};
const _c6 = function (a0) {
  return {
    "partial-disable-info disable-controls": a0
  };
};
function ChqNewVehicleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "chq-step-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5)(6, "chq-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r7.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "form", 7)(8, "div", 8)(9, "chq-input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("clicked", function ChqNewVehicleComponent_div_0_Template_chq_input_clicked_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r9.hideDropdown($event));
    })("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r10.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "chq-input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("clicked", function ChqNewVehicleComponent_div_0_Template_chq_input_clicked_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.hideDropdown($event));
    })("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r12.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "chq-input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("clicked", function ChqNewVehicleComponent_div_0_Template_chq_input_clicked_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.hideDropdown($event));
    })("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r14.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 15)(16, "chq-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "chq-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r16.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "chq-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function ChqNewVehicleComponent_div_0_Template_chq_input_controlOutput_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.onFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 19)(22, "div", 20)(23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, ChqNewVehicleComponent_div_0_chq_button_26_Template, 1, 1, "chq-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, ChqNewVehicleComponent_div_0_chq_button_27_Template, 1, 1, "chq-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](20, _c3, ctx_r0.isFormConfirmed));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqModel", ctx_r0.vehicleHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 18, "vehicle_detail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](22, _c4, ctx_r0.searchDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r0.formModel.vin);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](24, _c5, ctx_r0.inputDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r0.formModel.make)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](26, _c5, ctx_r0.makeDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r0.formModel.model)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](28, _c5, ctx_r0.modelDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r0.formModel.year)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](30, _c5, ctx_r0.yearDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](32, _c6, ctx_r0.infoDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r0.formModel.licensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r0.formModel.carMilege);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r0.formModel.registrationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.currentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.isFormConfirmed && !ctx_r0.commonService.isViewOnly);
  }
}
function ChqNewVehicleComponent_no_access_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "no-access-error");
  }
}
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
    this.vehicleHeader = src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_1__.newVehicleHeader;
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
    this.commonService.eventfromToastComponent$.subscribe(event => {
      if (event) {
        this.monitorService.logEvent('eventfromToastComponent', ['ChqNewVehicleComponent', 'addenda-quote', {
          caseId: this.caseId
        }]);
        this.router.navigate([`/quote/case/${this.caseId}/document`]);
      }
    });
    if (this.commonService.accessRight.closed) {
      this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(true);
    }
    this.commonService.userProfileData.subscribe(res => {
      if (res && res.data) {
        const {
          userPermission,
          vehicleSourceType,
          organizationDetail
        } = res.data;
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
    const {
      orgPackages = []
    } = this.userPermission;
    const repairEstimatePackage = orgPackages.filter(orgPackage => {
      return orgPackage.automotiveServiceName === 'Repair Estimate';
    });
    if (repairEstimatePackage && repairEstimatePackage.length > 0) {
      const {
        permissions
      } = repairEstimatePackage[0];
      const gtEstimatePermission = permissions.filter(perm => {
        return perm.permissionName === 'gt.estimate' || perm.permissionName === 'gt.estimate.vinquery';
      });
      if (gtEstimatePermission && gtEstimatePermission.length > 0) {
        return true;
      }
    }
    return false;
  }
  /**
   * check vin query permission
   */
  checkVINQueryPermission() {
    const {
      orgPackages = []
    } = this.userPermission;
    const repairEstimatePackage = orgPackages.filter(orgPackage => {
      return orgPackage.automotiveServiceName?.toLowerCase() === 'vehicle identification';
    });
    if (repairEstimatePackage && repairEstimatePackage.length > 0) {
      const {
        permissions
      } = repairEstimatePackage[0];
      const gtEstimatePermission = permissions.filter(perm => {
        return perm.permissionName === 'gt.data.vincoding';
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
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.caseId = caseId;
      _this.commonService.showLoading();
      yield _this.populateReadonlyFields(caseId).then(result => {
        if (result.data == null) {
          _this.commonService.hideLoading();
          return;
        }
        _this.vehicleId = result.data.vehicleId || 0;
        _this.vehicleHeader.caseNumber = result.data.caseNumber;
        const {
          vinNumber,
          licensePlateNumber,
          vehicleMileage,
          registrationDate,
          vehicleMake,
          vehicleModel,
          modelYear,
          status,
          tariffs,
          domainID,
          umc,
          id
        } = result.data;
        _this.id = id;
        if (_this.vehicleId != 0) {
          _this.infoDisabled = false;
          _this.searchDisabled = false;
          _this.inputDisabled = false;
          _this.preventVinCall = true;
          _this.originalVin = vinNumber;
          _this.labourData = tariffs.length > 0 ? tariffs[0] : [];
        }
        _this.customerName = result.data.caseDetail?.firstName;
        _this.email = result.data.caseDetail?.email;
        _this.vehicleHeader.caseNumber = result.data.caseNumber;
        _this.caseCreatedDate = result.data.createdDate;
        _this.formModel.vin = {
          ..._this.formModel.vin,
          value: vinNumber
        };
        _this.status = status;
        _this.commonService.caseStatus.next(status);
        _this.commonService.caseDetail.next(result?.data);
        _this.formModel.licensePlate = {
          ..._this.formModel.licensePlate,
          value: licensePlateNumber
        };
        _this.formModel.carMilege = {
          ..._this.formModel.carMilege,
          value: vehicleMileage
        };
        _this.formModel.registrationDate = {
          ..._this.formModel.registrationDate,
          value: registrationDate
        };
        _this.formModel.make = {
          ..._this.formModel.make,
          selectedOption: {
            'name': vehicleMake
          }
        };
        _this.formModel.year = {
          ..._this.formModel.year,
          selectedOption: {
            'name': modelYear || result.data.modelYearRange
          }
        };
        _this.formModel.model = {
          ..._this.formModel.model,
          selectedOption: {
            'modelDescription': vehicleModel
          }
        };
        _this.umc = umc;
        _this.tariffId = tariffs[0]?.tariffId;
        _this.isTariffEditable = tariffs[0]?.isEditable;
        _this.partnershipId = tariffs[0]?.partnershipId;
        _this.domainID = domainID;
        _this.inspections = result.data.inspections[0];
        if (_this.inspections) {
          _this.commonService.inspectionId.next(_this.inspections.inspectionId);
        }
        _this.originalTariffObject = {
          'make': vehicleMake,
          'partnershipId': _this.partnershipId,
          'registrationDate': dayjs__WEBPACK_IMPORTED_MODULE_2__(registrationDate).format('YYYY-MM-DDT00:00:00')
        };
        _this.vehicleFormData = {
          ..._this.vehicleFormData,
          vin: vinNumber,
          make: vehicleMake,
          model: vehicleModel,
          year: modelYear || result.data.modelYearRange,
          carMilege: vehicleMileage,
          licensePlate: licensePlateNumber,
          registrationDate: registrationDate
        };
        if (_this.currentOrgId != result.data.organizationDetail?.organizationId) {
          _this.commonService.isViewOnly = true;
        } else {
          _this.commonService.isViewOnly = false;
        }
        _this.validate();
        _this.commonService.hideLoading();
      }).catch(() => {
        _this.commonService.hideLoading();
      });
      _this.prefillVehicleData();
      /*if (!this.currentStatus || this.isFormConfirmed) {
        this.setTextMode();
        this.isFormConfirmed = true;
        return;
      }*/
      if (_this.vehicleId != 0 || _this.commonService.isViewOnly) {
        _this.setTextMode();
        _this.isFormConfirmed = true;
        return;
      }
      yield _this.populateDropdowns();
    })();
  }
  /**
   * prefill vehicle data
   */
  prefillVehicleData() {
    const prefillData = this.commonService.getSessionStorage('selectedSearchItem');
    if (prefillData && prefillData !== 'null' && prefillData !== 'undefined') {
      const prefillObj = JSON.parse(prefillData);
      if (prefillObj.vin && !this.vehicleFormData.vin) {
        this.preventVinCall = true;
        this.vehicleFormData.vin = prefillObj.vin;
        this.formModel.vin = {
          ...this.formModel.vin,
          value: prefillObj.vin
        };
      }
      if (prefillObj.make && !this.vehicleFormData.make) {
        this.vehicleFormData.make = prefillObj.make;
        this.formModel.make = {
          ...this.formModel.make,
          selectedOption: {
            'name': prefillObj.make
          }
        };
      }
      if (prefillObj.model && !this.vehicleFormData.model) {
        this.vehicleFormData.model = prefillObj.model;
        this.formModel.model = {
          ...this.formModel.model,
          selectedOption: {
            'modelDescription': prefillObj.model
          }
        };
      }
      if (prefillObj.importInterval && !this.vehicleFormData.year) {
        this.vehicleFormData.year = prefillObj.importInterval;
        this.formModel.year = {
          ...this.formModel.year,
          value: prefillObj.importInterval,
          selectedOption: {
            'name': prefillObj.importInterval
          }
        };
      }
      if (prefillObj.plate && !this.vehicleFormData.licensePlate) {
        this.vehicleFormData.licensePlate = prefillObj.plate;
        this.formModel.licensePlate = {
          ...this.formModel.licensePlate,
          value: prefillObj.plate
        };
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
    var _this2 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.estimateId = this.checkGTEstimatePermission() ? 3 : 1;
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this2.vehicleService.getVehicleMake());
      _this2.formModel.make = {
        ..._this2.formModel.make,
        options: data.sort((a, b) => a.name.localeCompare(b.name))
      };
      const makeList = _this2.formModel.make.options;
      const selectedMake = makeList.filter(q => q.name === _this2.vehicleFormData.make);
      if (selectedMake.length > 0) {
        _this2.vehicleService.getVehicleModel(selectedMake[0].id, _this2.estimateId).subscribe(data => {
          _this2.formModel.model = {
            ..._this2.formModel.model,
            options: data
          };
          const model = _this2.formModel.model.options?.filter(q => q.umc == _this2.umc);
          if (model.length > 0) {
            _this2.vehicleService.getVehicleYearByModel(model[0].id, _this2.estimateId)?.subscribe(data => {
              _this2.formModel.year = {
                ..._this2.formModel.year,
                options: data
              };
            });
          }
        });
      }
    })();
  }
  /**
   * populate readonly fields
   */
  populateReadonlyFields(caseId) {
    var _this3 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (caseId && caseId != '0') {
        _this3.caseId = caseId;
        _this3.commonService.showLoading();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this3.caseService.getCaseDetail(caseId));
      }
    })();
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
    var _this4 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.formModel = (0,src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_1__.newVehicleForm)();
      _this4.confirmButtonModel = {
        label: 'Confirm',
        type: 'primary',
        icon: 'check',
        onclick: _this4.confirmData.bind(_this4)
      };
      _this4.nextButtonModel = {
        label: 'Next add documents',
        type: 'primary',
        icon: 'plus-filled',
        onclick: _this4.navigateToDocument.bind(_this4)
      };
      const caseId = _this4.route?.parent?.snapshot?.paramMap?.get('id');
      _this4.monitorService.logEvent('ngOnInit', ['ChqNewVehicleComponent', 'addenda-quote', {
        caseId
      }]);
      _this4.commonService.accessRight.subscribe({
        next: res => {
          if (!res) {
            _this4.showNoAccess = true;
          }
        }
      });
      _this4.inspectionService.getInspectionTemplateList().subscribe({
        next: inspectionList => {
          const repairInspectionTemplate = inspectionList?.data;
          if (repairInspectionTemplate.length > 0) {
            _this4.inspectionTemplateId = repairInspectionTemplate[0].id;
          }
        }
      });
      yield _this4.process(caseId);
      const container = document.querySelector('.addenda-container');
      if (container) {
        container.scrollTop = 0;
      }
    })();
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
      this.formModel[key] = {
        ...this.formModel[key],
        mode: 'text'
      };
    }
    this.confirmButtonModel = {
      ...this.confirmButtonModel,
      label: 'Change car',
      type: 'outline',
      icon: 'gobackward'
    };
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
    var _this5 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const keys = Object.keys(_this5.formModel);
      for (const k in keys) {
        const key = keys[k];
        _this5.formModel[key] = {
          ..._this5.formModel[key],
          mode: _this5.isFormConfirmed ? 'value' : 'text'
        };
      }
      if (_this5.confirmButtonModel.label == 'Change car') {
        if (_this5.checkVINQueryPermission()) {
          _this5.preventVinCall = true;
          _this5.vehicleService.getVinDecoder(_this5.vehicleFormData.vin).subscribe({
            next: result => {
              if (result?.success) {
                _this5.makeDisabled = true;
              } else {
                _this5.makeDisabled = false;
              }
            }
          });
        } else {
          _this5.makeDisabled = false;
        }
        _this5.commonService.showLoading();
        yield _this5.populateDropdowns();
        _this5.commonService.hideLoading();
      }
      _this5.isFormConfirmed = !_this5.isFormConfirmed;
      _this5.confirmButtonModel = {
        ..._this5.confirmButtonModel,
        label: _this5.isFormConfirmed ? 'Change car' : 'Confirm',
        type: _this5.isFormConfirmed ? 'outline' : 'primary',
        icon: _this5.isFormConfirmed ? 'refresh' : 'check'
      };
    })();
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
    } else {
      const formData = {
        'vin': this.vehicleFormData.vin,
        'vehicleCountryId': 1,
        'umc': this.umc,
        'make': this.vehicleFormData.make,
        'model': this.vehicleFormData.model,
        'mileage': Number(this.vehicleFormData.carMilege),
        'firstRegistrationDate': dayjs__WEBPACK_IMPORTED_MODULE_2__(this.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00'),
        'registrationNumber': this.vehicleFormData.licensePlate,
        'condition': 1,
        'ModelYearRange': this.vehicleFormData.year,
        'InspectionTemplateId': this.inspectionTemplateId,
        'CustomerName': this.customerName,
        'CustomerEmail': this.email
      };
      this.vehicleService.addVehicle(formData, this.domainID, this.id).subscribe({
        next: result => {
          if (result) {
            this.vehicleId = result.id;
            this.inspections = {};
            this.inspections.inspectionId = result.inspectionId;
            this.inspections.inspectionGuid = result.inspectionGuid;
            this.updateVehicle();
          }
        },
        error: err => {
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
    var _this6 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.monitorService.logEvent('updateVehicle', ['ChqNewVehicleComponent', 'addenda-quote', {
        caseId: _this6.caseId
      }]);
      _this6.commonService.showLoading();
      const formData = {
        'vin': _this6.vehicleFormData.vin,
        'umc': _this6.umc,
        'vehicleMake': _this6.vehicleFormData.make,
        'vehicleModel': _this6.vehicleFormData.model,
        'modelYearRange': _this6.vinGTMotive?.modelYearRange || _this6.vehicleFormData.year,
        'vehicleID': _this6.vehicleId,
        'licensePlateNumber': _this6.vehicleFormData.licensePlate,
        'vehicleMileage': Number(_this6.vehicleFormData.carMilege),
        'registrationDate': dayjs__WEBPACK_IMPORTED_MODULE_2__(_this6.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00')
      };
      const inspection = {
        'inspectionID': _this6.inspections.inspectionId,
        'inspectionGuid': _this6.inspections.inspectionGuid
      };
      const year = dayjs__WEBPACK_IMPORTED_MODULE_2__(_this6.vehicleFormData.registrationDate).year().toString();
      //}
      //if(!this.labourData){
      if (_this6.originalTariffObject.make != _this6.vehicleFormData.make || _this6.partnershipId != _this6.originalTariffObject.partnershipId || dayjs__WEBPACK_IMPORTED_MODULE_2__(_this6.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00') != _this6.originalTariffObject.registrationDate || !_this6.labourData?.tariffLabourRates?.length) {
        yield _this6.getLabourData(_this6.tariffId, _this6.isTariffEditable, _this6.partnershipId, _this6.vehicleFormData.make, year);
      }
      //}
      const mainFormData = {
        'vehicle': formData,
        'inspection': inspection,
        'tariff': _this6.labourData
      };
      _this6.vehicleService.updateVehicleCase(mainFormData, _this6.caseId).subscribe({
        next: result => {
          if (result) {
            if (_this6.labourData.isEditable) {
              let showMessage = true;
              _this6.labourData.tariffLabourRates.forEach(element => {
                if (element.amount > 0) {
                  showMessage = false;
                  return;
                }
              });
              if (showMessage) {
                const action = {
                  'objectId': _this6.caseId,
                  'link': 'here',
                  'labourData': _this6.labourData
                };
                _this6.commonService.hideLoading();
                const message = !_this6.isTariffEditable ? 'labour_value_update_not_editable' : 'labour_value_update';
                _this6.commonService.showInfoToast(500000, message, action);
                return;
              }
            }
            _this6.router.navigate([`/quote/case/${_this6.caseId}/document`]);
          }
          _this6.commonService.hideLoading();
        },
        error: err => {
          _this6.commonService.hideLoading();
        }
      });
    })();
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
      this.formModel[output.name] = {
        ...this.formModel[output.name],
        selectedOption: output.value
      };
      this.vehicleFormData[output.name] = output.value[this.formModel[output.name].fieldValue];
      if (output.name == 'make') {
        this.vehicleFormData['model'] = '';
        this.vehicleFormData['year'] = null;
        this.modelDisabled = true;
        this.yearDisabled = true;
        this.formModel.year = {
          ...this.formModel.year,
          selectedOption: {},
          options: [],
          observable: null
        };
        //this.formModel.year.options = [];
        this.formModel.model = {
          ...this.formModel.model,
          selectedOption: {}
        };
        if (output.value) {
          this.formModel.model = {
            ...this.formModel.model,
            observable: this.vehicleService.getVehicleModel(output.value.id, this.estimateId),
            onObservableLoad: this.enableDropdowns.bind(this)
          };
          setTimeout(() => {
            this.model.triggerObservable();
          });
        }
      } else if (output.name == 'model') {
        this.yearDisabled = true;
        this.formModel.year = {
          ...this.formModel.year,
          selectedOption: {},
          observable: null,
          options: []
        };
        this.vehicleFormData['year'] = null;
        if (output.value) {
          this.umc = output.value.umc;
          this.formModel.year = {
            ...this.formModel.year,
            observable: this.vehicleService.getVehicleYearByModel(output.value.id, this.estimateId),
            onObservableLoad: this.enableDropdowns.bind(this)
          };
          setTimeout(() => {
            this.year.triggerObservable();
          });
        }
      }
    } else {
      if (!output.isValid) {
        this.formModel[output.name].value = '';
        this.vehicleFormData[output.name] = '';
      } else {
        this.formModel[output.name].value = output.value;
        this.vehicleFormData[output.name] = output.value;
      }
    }
    this.vehicleFormData = {
      ...this.vehicleFormData
    };
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
    } else if (name === this.formModel.model.name) {
      this.make.closeDropdown();
      this.year.closeDropdown();
    } else {
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
    } else if (!isValid) {
      this.confirmButtonModel.type = 'disabled';
      this.nextButtonModel.type = 'disabled';
    } else {
      this.confirmButtonModel.type = 'primary';
      this.nextButtonModel.type = 'primary';
    }
  }
  /**
   * populate vin number d
   */
  populateForm() {
    const vinNumber = this.formModel.vin.value?.toLocaleString();
    this.monitorService.logEvent('populateForm', ['ChqNewVehicleComponent', 'addenda-quote', {
      caseId: this.caseId
    }]);
    if (this.checkVINQueryPermission()) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.from)(vinNumber).pipe().subscribe({
        complete: () => {
          if (vinNumber.length == 17 && !this.isFormConfirmed && !this.preventVinCall) {
            this.commonService.showLoading();
            this.vehicleService.getVinDecoder(vinNumber).subscribe({
              error: () => {
                this.commonService.hideLoading();
                this.vinGTMotive = null;
                this.resetDropdown();
              },
              next: result => {
                if (result?.success) {
                  this.vinGTMotive = result.data;
                  this.umc = this.vinGTMotive?.umc;
                  this.formModel['make'] = {
                    ...this.formModel['make'],
                    selectedOption: {
                      'name': result.data.vehicleMake
                    }
                  };
                  this.formModel.model = {
                    ...this.formModel['model'],
                    selectedOption: {
                      'modelDescription': result.data.vehicleModel
                    }
                  };
                  const makeList = this.formModel.make.options;
                  const selectedMake = makeList.filter(q => q.name === result.data.vehicleMake);
                  if (selectedMake.length > 0) {
                    this.formModel.model = {
                      ...this.formModel.model,
                      observable: this.vehicleService.getVehicleModel(selectedMake[0].id, this.estimateId)
                    };
                    setTimeout(() => {
                      this.model.triggerObservable();
                    });
                  }
                  this.formModel.year = {
                    ...this.formModel['year'],
                    selectedOption: {
                      'name': result.data.modelYearRange
                    }
                  };
                  this.vehicleFormData['make'] = result.data.vehicleMake;
                  this.vehicleFormData['model'] = result.data.vehicleModel;
                  this.vehicleFormData['year'] = result.data.modelYearRange;
                  this.inputDisabled = false;
                  this.infoDisabled = false;
                  this.makeDisabled = true;
                  this.enableDropdowns();
                } else {
                  this.vinGTMotive = null;
                  this.commonService.showInfoToast(5000, 'show-info | ' + result?.message);
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
    } else {
      this.inputDisabled = false;
      this.infoDisabled = false;
      this.makeDisabled = false;
      this.enableDropdowns();
    }
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
    this.formModel['make'] = {
      ...this.formModel['make'],
      selectedOption: {}
    };
    this.formModel.model = {
      ...this.formModel['model'],
      selectedOption: {}
    };
    this.formModel.year = {
      ...this.formModel['year'],
      selectedOption: {}
    };
  }
  /**
   * is case pending
   */
  get currentStatus() {
    if (!this.status && !this.commonService.isViewOnly) {
      return true;
    } else if (this.commonService.isViewOnly) {
      return false;
    }
    return ['reject', 'rejected', 'approved', 'closed', 'repairestimation', 'complete'].indexOf(this.status?.toLowerCase()) === -1;
  }
  /**
   * get labour data to show
   */
  getLabourData(tariffId, isEditable, partnershipId, make, year) {
    var _this7 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.monitorService.logEvent('getLabourData', ['ChqNewVehicleComponent', 'addenda-quote', {
        caseId: _this7.caseId
      }]);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this7.labourService.getLabourData(tariffId, make, dayjs__WEBPACK_IMPORTED_MODULE_2__(_this7.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00'), _this7.caseCreatedDate)).then(result => {
        if (result.data) {
          _this7.labourData = {
            tariffId: result.data.id,
            tariffDiscountRates: result.data.tariffDiscountRates,
            tariffLabourRates: result.data.tariffLaborRates,
            isEditable: isEditable,
            partnershipId: partnershipId
          };
        }
      });
    })();
  }
  /**
   * get domain id
   */
  getDomainId() {
    this.mediaCollectionService.getMediaTemplate().subscribe({
      next: response => {
        if (response?.data.length > 0) {
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
    this.formModel = (0,src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_1__.newVehicleForm)();
    this.commonService.accessRight.unsubscribe();
    this.commonService.isViewOnly = false;
  }
  static #_ = this.ɵfac = function ChqNewVehicleComponent_Factory(t) {
    return new (t || ChqNewVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_5__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_6__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_7__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_labour_rate_labour_rate_service__WEBPACK_IMPORTED_MODULE_8__.LabourRateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_media_collection_media_collection_service__WEBPACK_IMPORTED_MODULE_9__.MediaCollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: ChqNewVehicleComponent,
    selectors: [["chq-new-vehicle"]],
    viewQuery: function ChqNewVehicleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.make = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.model = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.year = _t.first);
      }
    },
    decls: 2,
    vars: 2,
    consts: [["class", "new-vehicle-container", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "new-vehicle-container", 3, "ngClass"], [3, "chqModel"], [1, "label"], [1, "search-box", 3, "ngClass"], [1, "col-4", 3, "inputModel", "controlOutput"], [1, "form-container"], [1, "vehicle-brand-wrapper", "row", 3, "ngClass"], ["id", "input-make", 1, "col-4", 3, "inputModel", "ngClass", "clicked", "controlOutput"], ["make", ""], ["id", "input-model", 1, "col-4", 3, "inputModel", "ngClass", "clicked", "controlOutput"], ["model", ""], ["id", "input-year", 1, "col-4", 3, "inputModel", "ngClass", "clicked", "controlOutput"], ["year", ""], [1, "vehicle-info-wrapper", "row", 3, "ngClass"], [1, "col-4", "registration-date", 3, "inputModel", "controlOutput"], [1, "image-car"], ["src", "assets/img/half-car.png"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-quote.png"], [1, "footer-button-wrapper"], [3, "buttonModel", 4, "ngIf"], [3, "buttonModel"]],
    template: function ChqNewVehicleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ChqNewVehicleComponent_div_0_Template, 28, 34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ChqNewVehicleComponent_no_access_error_1_Template, 1, 0, "no-access-error", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_10__.ChqStepHeaderComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__.ChqButtonComponent, _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_13__.NoAccessErrorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
    styles: [".new-vehicle-container[_ngcontent-%COMP%] {\n  padding-bottom: 1.5vw;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: block;\n  font-weight: 600;\n}\n.new-vehicle-container[_ngcontent-%COMP%]     .disable-controls input {\n  opacity: 0.6 !important;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .disable-input[_ngcontent-%COMP%], .new-vehicle-container[_ngcontent-%COMP%]   .partial-disable-info[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .registration-date[_ngcontent-%COMP%]     .input-wrapper input {\n  pointer-events: none;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .registration-date[_ngcontent-%COMP%]     .input-wrapper input[readonly] {\n  opacity: 1;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .vehicle-brand-wrapper[_ngcontent-%COMP%], .new-vehicle-container[_ngcontent-%COMP%]   .vehicle-info-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .vehicle-brand-wrapper[_ngcontent-%COMP%]   .extra-position[_ngcontent-%COMP%], .new-vehicle-container[_ngcontent-%COMP%]   .vehicle-info-wrapper[_ngcontent-%COMP%]   .extra-position[_ngcontent-%COMP%] {\n  top: 5px;\n  position: relative;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex: 1;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .image-car[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 654px;\n  position: fixed;\n  bottom: 60px;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n}\n.new-vehicle-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n  width: 242px;\n}\n\n@media (max-height: 640px) {\n  .image-car[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (orientation: portrait) {\n  .search-box[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .search-box[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    max-width: none;\n    width: 375px !important;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n  .form-container[_ngcontent-%COMP%]   .vehicle-brand-wrapper[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .vehicle-info-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 0px !important;\n  }\n  .form-container[_ngcontent-%COMP%]   .vehicle-brand-wrapper[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .vehicle-info-wrapper[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    max-width: none;\n    width: 375px !important;\n    margin-bottom: 20px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9xdW90ZS9jaHEtbmV3LWNhc2VzL2NocS1uZXctdmVoaWNsZS9jaHEtbmV3LXZlaGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNSO0FBRUk7RUFDSSx1QkFBQTtBQUFSO0FBR0k7O0VBRUksb0JBQUE7QUFEUjtBQU1ZO0VBQ0ksb0JBQUE7QUFKaEI7QUFPWTtFQUNJLFVBQUE7QUFMaEI7QUFVSTs7RUFFSSxtQkFBQTtBQVJSO0FBVVE7O0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0FBUFo7QUFXSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsT0FBQTtBQVRSO0FBYVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBWFo7QUFlSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBYlI7QUFlUTtFQUNJLFlBQUE7QUFiWjs7QUFrQkE7RUFFUTtJQUNJLHdCQUFBO0VBaEJWO0FBQ0Y7QUFvQkE7RUFFSTtJQUNJLGdCQUFBO0VBbkJOO0VBcUJNO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7RUFuQlY7RUF1QkU7SUFDSSxnQkFBQTtFQXJCTjtFQXVCTTs7SUFFSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtFQXJCVjtFQXVCVTs7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQXBCZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy12ZWhpY2xlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41dnc7XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5kaXNhYmxlLWNvbnRyb2xzIGlucHV0IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjYgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlzYWJsZS1pbnB1dCxcclxuICAgIC5wYXJ0aWFsLWRpc2FibGUtaW5mbyB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdHJhdGlvbi1kYXRlIHtcclxuICAgICAgICA6Om5nLWRlZXAgLmlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbcmVhZG9ubHldIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZlaGljbGUtYnJhbmQtd3JhcHBlcixcclxuICAgIC52ZWhpY2xlLWluZm8td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgLmV4dHJhLXBvc2l0aW9uIHtcclxuICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlLWNhciB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NTRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICBjaHEtaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjQycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XHJcbiAgICAuaW1hZ2UtY2FyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAuY29sLTQge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICAgICAgIC52ZWhpY2xlLWJyYW5kLXdyYXBwZXIsXHJcbiAgICAgICAgLnZlaGljbGUtaW5mby13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAuY29sLTQge1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 69368:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/quote/chq-new-cases/chq-repair-estimate/chq-repair-estimate.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChqRepairEstimateComponent": () => (/* binding */ ChqRepairEstimateComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_app_model_chq_repair_dialog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/chq-repair-dialog-model */ 25806);
/* harmony import */ var src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/chq-repair-dialog/chq-repair-dialog.component */ 25015);
/* harmony import */ var src_app_widgets_chq_pdf_generator_chq_pdf_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/widgets/chq-pdf-generator/chq-pdf-generator.component */ 50617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_dialogs_gt_motive_estimation_dialog_gt_motive_estimation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialogs/gt-motive-estimation-dialog/gt-motive-estimation-dialog.component */ 14368);
/* harmony import */ var src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/chq-upload-model */ 75983);
/* harmony import */ var src_app_dialogs_estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialogs/estimate-approval/estimate-approval.component */ 40313);
/* harmony import */ var src_app_dialogs_request_approval_dialog_request_approval_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialogs/request-approval-dialog/request-approval-dialog.component */ 2868);
/* harmony import */ var src_app_config_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/constants/app.constants */ 91924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/repair-estimate/repair-estimate.service */ 87855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/inspection/inspection.service */ 62190);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_message_message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/message/message.service */ 7849);
/* harmony import */ var src_app_services_media_collection_media_collection_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/media-collection/media-collection.service */ 61476);
/* harmony import */ var src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/core/core.service */ 42771);
/* harmony import */ var _shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/damage-analysis/damage-analysis.component */ 9988);
/* harmony import */ var _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../widgets/chq-step-header/chq-step-header.component */ 42736);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../widgets/chq-custom-loader/chq-custom-loader.component */ 55309);
/* harmony import */ var _widgets_chq_estimate_details_chq_estimate_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../widgets/chq-estimate-details/chq-estimate-details.component */ 72076);
/* harmony import */ var _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _shared_history_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/history/history.component */ 65504);































const _c0 = ["anchor"];
function ChqRepairEstimateComponent_div_0_div_2_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 26)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r9.customerData.initial);
  }
}
function ChqRepairEstimateComponent_div_0_div_2_div_1_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r10.customerData.firstName + " " + ctx_r10.customerData.lastName);
  }
}
function ChqRepairEstimateComponent_div_0_div_2_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r11.customerData.countryCode + " " + ctx_r11.customerData.mobileNumber);
  }
}
function ChqRepairEstimateComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, ChqRepairEstimateComponent_div_0_div_2_div_1_div_1_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](3, ChqRepairEstimateComponent_div_0_div_2_div_1_label_3_Template, 2, 1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](4, ChqRepairEstimateComponent_div_0_div_2_div_1_span_4_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r7.customerData.initial && ctx_r7.customerData.initial !== "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r7.customerData.firstName && ctx_r7.customerData.firstName !== "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r7.customerData.mobileNumber && ctx_r7.customerData.mobileNumber !== "-");
  }
}
function ChqRepairEstimateComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, ChqRepairEstimateComponent_div_0_div_2_div_1_Template, 5, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](5, "a", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r3.customerData.firstName !== "-" || ctx_r3.customerData.lastName !== "-" || ctx_r3.customerData.mobileNumber && ctx_r3.customerData.mobileNumber !== "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("href", ctx_r3.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"])("hidden", true)("download", ctx_r3.pdfName);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r3.caseData == null ? null : ctx_r3.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r3.caseData == null ? null : ctx_r3.caseData.vehicleModel);
  }
}
function ChqRepairEstimateComponent_div_0_chq_estimate_details_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-estimate-details", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("downloadPdf", function ChqRepairEstimateComponent_div_0_chq_estimate_details_5_Template_chq_estimate_details_downloadPdf_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r12.downloadPdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("estimateResponse", ctx_r4.estimateResponse)("editEstimate", ctx_r4.editEstimate)("estimateSource", ctx_r4.estimateSource)("i18n", ctx_r4.i18n)("repairGuid", ctx_r4.repairId);
  }
}
function ChqRepairEstimateComponent_div_0_div_11_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_1_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r21.booking("create", ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r14.createBooking);
  }
}
function ChqRepairEstimateComponent_div_0_div_11_chq_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_2_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r23.booking("view", ctx_r23.repairId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r15.viewBooking);
  }
}
function ChqRepairEstimateComponent_div_0_div_11_chq_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_3_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r25.handleRequestStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r16.requestStatusModel);
  }
}
function ChqRepairEstimateComponent_div_0_div_11_chq_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_11_chq_button_4_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r27.changeCaseStatusDialog(ctx_r27.closeCaseButton));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r17.closeCaseButton);
  }
}
function ChqRepairEstimateComponent_div_0_div_11_chq_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "chq-button", 33);
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r18.calculationButton);
  }
}
function ChqRepairEstimateComponent_div_0_div_11_chq_dropdown_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-dropdown", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("selected", function ChqRepairEstimateComponent_div_0_div_11_chq_dropdown_6_Template_chq_dropdown_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r29.handleSelectedOption($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("dropdownModel", ctx_r19.dropdownApprovalModelFilter);
  }
}
function ChqRepairEstimateComponent_div_0_div_11_chq_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "chq-button", 33);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r20.closeEstimateButton);
  }
}
function ChqRepairEstimateComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, ChqRepairEstimateComponent_div_0_div_11_chq_button_1_Template, 1, 1, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, ChqRepairEstimateComponent_div_0_div_11_chq_button_2_Template, 1, 1, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](3, ChqRepairEstimateComponent_div_0_div_11_chq_button_3_Template, 1, 1, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](4, ChqRepairEstimateComponent_div_0_div_11_chq_button_4_Template, 1, 1, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, ChqRepairEstimateComponent_div_0_div_11_chq_button_5_Template, 1, 1, "chq-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](6, ChqRepairEstimateComponent_div_0_div_11_chq_dropdown_6_Template, 1, 1, "chq-dropdown", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](7, ChqRepairEstimateComponent_div_0_div_11_chq_button_7_Template, 1, 1, "chq-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.commonService.repairPermission && !ctx_r5.repairId && (ctx_r5.caseStatus == null ? null : ctx_r5.caseStatus.toLowerCase()) !== "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.commonService.repairPermission && ctx_r5.repairId);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.isGTEstimate() && ctx_r5.repairNotInvoiced() && !ctx_r5.isExternal);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r5.isPendingApproval() && ctx_r5.isGTEstimate() && (ctx_r5.caseStatus == null ? null : ctx_r5.caseStatus.toLowerCase()) !== "complete" || (ctx_r5.caseIntegrationStatus == null ? null : ctx_r5.caseIntegrationStatus.toLowerCase()) === "fail");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r5.isPendingApproval() && ctx_r5.isGTEstimate() && ctx_r5.currentRejStatus && (ctx_r5.caseStatus == null ? null : ctx_r5.caseStatus.toLowerCase()) !== "complete" || (ctx_r5.caseIntegrationStatus == null ? null : ctx_r5.caseIntegrationStatus.toLowerCase()) === "fail");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.repairNotInvoiced() && (ctx_r5.estimateResponse == null ? null : ctx_r5.estimateResponse.estimateCharges == null ? null : ctx_r5.estimateResponse.estimateCharges.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.isExternal);
  }
}
function ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-dropdown", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("selected", function ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_1_Template_chq_dropdown_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r36.changeCaseStatusDialog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("dropdownModel", ctx_r31.dropdownModelFilter);
  }
}
function ChqRepairEstimateComponent_div_0_div_12_chq_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_12_chq_button_2_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r38.booking("create", ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r32.createBooking);
  }
}
function ChqRepairEstimateComponent_div_0_div_12_chq_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function ChqRepairEstimateComponent_div_0_div_12_chq_button_3_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r40.booking("view", ctx_r40.repairId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r33.viewBooking);
  }
}
function ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "chq-dropdown", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("selected", function ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_4_Template_chq_dropdown_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r42.handleSelectedOption($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("dropdownModel", ctx_r34.dropdownApprovalModelFilter);
  }
}
function ChqRepairEstimateComponent_div_0_div_12_chq_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "chq-button", 33);
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("buttonModel", ctx_r35.closeEstimateButton);
  }
}
function ChqRepairEstimateComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_1_Template, 1, 1, "chq-dropdown", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, ChqRepairEstimateComponent_div_0_div_12_chq_button_2_Template, 1, 1, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](3, ChqRepairEstimateComponent_div_0_div_12_chq_button_3_Template, 1, 1, "chq-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](4, ChqRepairEstimateComponent_div_0_div_12_chq_dropdown_4_Template, 1, 1, "chq-dropdown", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, ChqRepairEstimateComponent_div_0_div_12_chq_button_5_Template, 1, 1, "chq-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r6.isPendingApproval() && ctx_r6.isGTEstimate() && (ctx_r6.commonService.repairPermission || (ctx_r6.caseStatus == null ? null : ctx_r6.caseStatus.toLowerCase()) !== "complete" && !ctx_r6.commonService.repairPermission));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r6.commonService.repairPermission && !ctx_r6.repairId && (ctx_r6.caseStatus == null ? null : ctx_r6.caseStatus.toLowerCase()) !== "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r6.commonService.repairPermission && ctx_r6.repairId);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r6.repairNotInvoiced() && (ctx_r6.estimateResponse == null ? null : ctx_r6.estimateResponse.estimateCharges == null ? null : ctx_r6.estimateResponse.estimateCharges.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r6.isExternal && (ctx_r6.caseStatus == null ? null : ctx_r6.caseStatus.toLowerCase()) === "complete");
  }
}
const _c1 = function (a0) {
  return {
    "hidden": a0
  };
};
function ChqRepairEstimateComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 3)(1, "chq-step-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("back", function ChqRepairEstimateComponent_div_0_Template_chq_step_header_back_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r44.handleBack($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, ChqRepairEstimateComponent_div_0_div_2_Template, 11, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, ChqRepairEstimateComponent_div_0_chq_estimate_details_5_Template, 1, 5, "chq-estimate-details", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](6, "chq-custom-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "div", 10)(8, "div", 11)(9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](10, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](11, ChqRepairEstimateComponent_div_0_div_11_Template, 8, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](12, ChqRepairEstimateComponent_div_0_div_12_Template, 6, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "history", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("toggleExpand", function ChqRepairEstimateComponent_div_0_Template_history_toggleExpand_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r46.getHistory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](10, _c1, ctx_r0.showDamageAnalysis));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("chqModel", ctx_r0.header)("showButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.pageReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.showData);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("showLoading", !ctx_r0.showData);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.estimateResponse && !ctx_r0.commonService.isViewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.estimateResponse && !ctx_r0.commonService.isViewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("history", ctx_r0.history)("isLoading", ctx_r0.isHistoryLoading);
  }
}
function ChqRepairEstimateComponent_damage_analysis_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "damage-analysis", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("backEvent", function ChqRepairEstimateComponent_damage_analysis_1_Template_damage_analysis_backEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r47.handleBack($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("hideNext", true)("caseDetail", ctx_r1.caseResult);
  }
}
function ChqRepairEstimateComponent_no_access_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "no-access-error");
  }
}
const repairEstimate = {
  title: 'create_estimate',
  step: 5,
  description: 'create_estimate_msg',
  stepName: 'step_five'
};
class ChqRepairEstimateComponent {
  /**
   * constructor
   */
  constructor(cd, commonService, caseService, repairEstimateService, route, monitorService, inspectionService, dialog, datePipe, translationService, messageService, mediaService, router, coreService) {
    this.cd = cd;
    this.commonService = commonService;
    this.caseService = caseService;
    this.repairEstimateService = repairEstimateService;
    this.route = route;
    this.monitorService = monitorService;
    this.inspectionService = inspectionService;
    this.dialog = dialog;
    this.datePipe = datePipe;
    this.translationService = translationService;
    this.messageService = messageService;
    this.mediaService = mediaService;
    this.router = router;
    this.coreService = coreService;
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
    this.dialogData = src_app_model_chq_repair_dialog_model__WEBPACK_IMPORTED_MODULE_1__.RepairEstimateDialogData;
    this.showGen = true;
    this.caseIntegrationStatus = '';
    this.pageReady = false;
    this.repairStatus = '';
    this.showData = false;
    this.showInspection = false;
    this.pdfName = '';
    this.showNoAccess = false;
    this.editEstimate = false;
    this.estimateSource = '';
    this.requestStatusModel = {
      label: 'self_approval',
      type: 'outline',
      icon: 'clock-new'
    };
    this.dropdownApprovalModelFilter = {
      options: [{
        dropdownItemIcon: 'whatsapp',
        color: 'var(xa-white) !important;',
        label: this.translationService.instant('whatsapp')
      }, {
        dropdownItemIcon: 'email',
        color: 'var(xa-white) !important;',
        label: this.translationService.instant('email')
      }, {
        dropdownItemIcon: 'sms',
        color: 'var(xa-white) !important;',
        label: this.translationService.instant('sms')
      }],
      placeHolder: 'request_approval',
      label: '',
      hideDropdownIcon: true,
      appearance: 'button',
      placeHolderIcon: 'send',
      name: 'option',
      displayValue: 'label',
      selectedOption: {}
    };
    this.dropdownModelFilter = {
      options: [{
        'label': 'Edit Calculations',
        'dropdownItemIcon': 'edit'
      },
      //{ 'label': 'Close Case', 'dropdownItemIcon': 'folderplus' },
      {
        'label': 'Complete',
        'dropdownItemIcon': 'folderplus'
      }],
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
    this.isExternal = false;
    // assign below
    this.repairGuid = '';
    this.claimNumber = '';
    this.organizationName = '';
    this.organizationEmail = '';
    this.organizationPhone = '';
    this.organizationCountryCode = '';
    if (this.commonService.accessRight.closed) {
      this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_26__.BehaviorSubject(true);
    }
    this.commonService.userProfileData.subscribe(res => {
      if (res && res.data) {
        const {
          organizationDetail
        } = res.data;
        if (organizationDetail) {
          this.currentOrgId = organizationDetail.id;
        }
      }
    });
    this.i18n = this.commonService.geti18nInfo();
    this.subscription = this.commonService.userProfileData.subscribe({
      next: res => {
        if (res) {
          const permissionList = res?.data.userPermission.automotiveServices[0].permissions;
          this.isExternal = this.commonService.hasPermission('case.external', permissionList);
          if (this.isExternal) {
            this.closeCaseButton.label = 'Export to DMS';
          }
        }
      }
    });
    this.getMediaTemplate();
  }
  /**
   * Get MediaTemplate
   */
  getMediaTemplate() {
    this.mediaService.getMediaTemplate().subscribe(data => {
      if (data?.data?.length > 0) {
        const {
          id,
          collectionGuid
        } = data.data[0];
        this.collectionId = id;
        this.mediaCollectionGuid = collectionGuid;
      }
    });
  }
  /**
   * check if repair is invoiced or not
   * @returns
   */
  repairNotInvoiced() {
    if (this.repairStatus?.toLowerCase() === 'invoiced' || this.repairStatus?.toLowerCase() === 'paid' || this.repairStatus?.toLowerCase() === 'closed' || this.caseStatus?.toLowerCase() === 'complete' || this.repairStatus?.toLowerCase() === 'readytoinvoice') {
      return false;
    }
    return true;
  }
  /**
   * handleSelectedOption
   */
  handleSelectedOption($event) {
    this.showRequestApprovalDialog($event?.value?.label);
  }
  /**
   * show email dialog
   *
   */
  showRequestApprovalDialog(channel) {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.commonService.showLoading();
      const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.firstValueFrom)(_this.caseService.getQuoteTemplateDetails(1, _this.caseGuid, _this.domainId, 'CaseEstimateApprovalRequest', _this.collectionId, _this.caseId, _this.inspectionId));
      _this.commonService.hideLoading();
      const subjectText = `<strong class='text-black-medium'>Request approval: </strong> Case ID: <strong class='text-black-medium'>${_this.header.caseNumber}</strong> for <strong class='text-black-medium'>${res[0].data?.vehicleMake} </strong>
      <strong class='text-black-medium'>${res[0].data.vehicleModel}  </strong>
      <strong class='text-black-medium'>${res[0].data.licensePlateNumber}</strong>
      ${_this.claimNumber ? ` Claim Number: <strong class='text-black-medium'> / ${_this.claimNumber} </strong>` : ''}`;
      let title = 'send_message';
      let emailSubject = '';
      let body = '';
      if (channel?.toLowerCase() === 'email') {
        title = 'send_email';
        emailSubject = subjectText;
        body = res[1].data.body.replace('{{firstname}} {{lastname}}', _this.organizationName).replace('{{fullname}}', _this.organizationName).replace('{{make}}', res[0].data.vehicleMake).replace('{{model}}', res[0].data.vehicleModel).replace('{{licensenumber}}', res[0].data.licensePlateNumber).replace('{{message}}', '').replace('{{orgname}}', res[0].data.organizationDetail?.nameOfOrganization).replace('{{orgcontactnumber}}', res[0].data.organizationDetail?.phoneNumber).replace('{{claimnumber}}', res[0].data?.claimNumber).replace('{{zip-file-url}}', '<span class="email-body-download-link-color">Download Documents</span>');
      } else if (channel?.toLowerCase() === 'whatsapp') {
        body = res[1].data.whatsAppBody.replace('{{firstname}} {{lastname}}', _this.organizationName).replace('{{make}}', res[0].data.vehicleMake).replace('{{model}}', res[0].data.vehicleModel).replace('{{licensenumber}}', res[0].data.licensePlateNumber).replace('{{message}}', '').replace('{{orgname}}', res[0].data.organizationDetail?.nameOfOrganization).replace('{{orgcontactnumber}}', res[0].data.organizationDetail?.phoneNumber).replace('{{approvalurl}}', 'Approve/Reject');
        if (res[0].data.customer?.claimNumber) {
          body = body.replace('{{claimnumber}}', res[0].data.customer?.claimNumber);
        } else {
          body = body.replace('/{{claimnumber}}', '');
        }
      } else if (channel?.toLowerCase() === 'sms') {
        body = res[1].data.smsBody.replace('{{estimateurl}}', '').replace('{{approvalurl}}', '');
      } else if (channel.toLocaleLowerCase().indexOf('send to insurance') !== -1) {
        title = 'Send To Insurance Company';
        channel = 'send_to_insurance_company';
      }
      const estimateReport = _this.estimateResponse?.estimateDocumentTypes.map(el => {
        return {
          key: el.key,
          value: el?.label ?? el.value
        };
      });
      const dialogRef = _this.dialog.open(src_app_dialogs_request_approval_dialog_request_approval_dialog_component__WEBPACK_IMPORTED_MODULE_7__.RequestApprovalDialogComponent, {
        data: {
          title: title,
          email: _this.organizationEmail,
          emailSubject: emailSubject,
          channel: channel?.toLowerCase(),
          body: body,
          code: _this.organizationCountryCode,
          phone: _this.organizationPhone,
          estimateDocumentTypes: estimateReport,
          mediaData: res,
          inspectionId: _this.inspectionId,
          mediaCollectionGuid: _this.mediaCollectionGuid,
          estimateType: _this.estimateResponse?.externalSource,
          repairGuid: _this.repairGuid,
          templateKey: src_app_config_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.QuoteTemplateKey
        },
        backdropClass: 'confirmation-popup-backdrop',
        maxHeight: '90vh',
        minWidth: '629px',
        width: channel?.toLowerCase() === 'email' ? '53.9375rem' : '629px',
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe({
        next: response => {
          if (response) {
            console.log('response:', response);
            response.templateKey = 'CaseEstimateApprovalRequest';
            _this.commonService.showLoading();
            _this.messageService.sendQuoteApprovalMessage(response, _this.caseGuid).subscribe({
              next: () => {
                const emailMessage = _this.translationService.instant('request_approval_msg');
                _this.commonService.showInfoToast(1000, emailMessage);
                _this.commonService.hideLoading();
                _this.getCaseDetail();
              },
              error: () => {
                _this.commonService.hideLoading();
              }
            });
          }
        }
      });
    })();
  }
  /**
   * handle request status
   */
  handleRequestStatus() {
    //todo
    const dialogRef = this.dialog.open(src_app_dialogs_estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_6__.EstimateApprovalComponent, {
      width: '629px',
      maxWidth: '629px',
      autoFocus: false,
      data: {
        'caseGuid': this.caseGuid,
        'isCase': true
      }
    });
    dialogRef.afterClosed().subscribe({
      next: res => {
        //todo
        if (res) {
          this.getCaseDetail();
        }
      }
    });
  }
  /**
   * CHecks if current browser is mac or not
   * @returns boolean
   */
  get isiOS() {
    return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)
    // iPad on iOS 13 detection
    || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
  }
  /**
   *
   * @param event visibility listener
   */
  handleVisibilityChange(event) {
    if (!this.isInitCalled || !this.isiOS || !this.orgName) {
      return;
    }
    if (this.estimateResponse?.estimateCharges?.length == 0) {
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
    this.caseGuid = this.route.parent?.snapshot.paramMap.get('id');
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
      icon: 'calendar'
    };
    this.viewBooking = {
      label: 'View Booking',
      type: 'outline',
      icon: 'view'
    };
    this.closeEstimateButton = {
      label: 'Close Estimate',
      type: 'primary',
      icon: 'cross',
      onclick: this.redirectToCaseList.bind(this)
    };
    this.commonService.accessRight.subscribe({
      next: res => {
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
    if (this.isExternal) {
      this.closeCaseButton.label = 'Export to DMS';
    }
  }
  /**
   * edit gt motive
   */
  editGtMotive() {
    if (this.repairId) {
      this.commonService.showChangeWarningMessage(this.redirectToGtEstimate.bind(this), src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_5__.Modules.repair);
    } else {
      this.redirectToGtEstimate();
    }
  }
  /**
  * opens close case dialog
  */
  changeCaseStatusDialog(model) {
    let data = null;
    let status = '';
    if (model?.value?.label == 'Edit Calculations' || model?.label == 'Edit Calculations') {
      if (this.repairId) {
        this.commonService.showChangeWarningMessage(this.redirectToGtEstimate.bind(this), src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_5__.Modules.repair);
      } else {
        this.redirectToGtEstimate();
      }
      return;
    } else if (model?.value?.label == 'Approve' || model?.label == 'Approve') {
      data = this.dialogData.approve;
      status = 'Approved';
    } else if (model?.value?.label == 'Complete' || model?.label == 'Complete') {
      data = this.dialogData.complete;
      status = 'Complete';
    } else if (model?.value?.label == 'Reject' || model?.label == 'Reject') {
      data = this.dialogData.reject;
      status = 'Rejected';
    } else if (model?.value?.label == 'View Booking' || model?.label == 'View Booking') {
      this.booking('view', this.repairId);
      return;
    } else if (model?.value?.label == 'Create Booking' || model?.label == 'Create Booking') {
      this.booking('create', '');
      return;
    } else if (model?.value?.label == 'Close Estimate' || model?.label == 'Close Estimate') {
      this.redirectToCaseList();
      return;
    } else if (model?.value?.label == 'Export to DMS' || model?.label == 'Export to DMS') {
      data = this.dialogData.exportToDMS;
      status = 'Complete';
    } else if (model?.value?.value === 'requestStatus') {
      this.handleRequestStatus();
      return;
    }
    this.monitorService.logEvent('changeCaseStatusDialog', ['ChqRepairEstimateComponent', 'addenda-quote', {
      caseId: this.caseGuid,
      status
    }]);
    const dialogRef = this.dialog.open(src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ChqRepairDialogComponent, {
      autoFocus: false,
      data: data
    });
    dialogRef.afterClosed().subscribe({
      next: data => {
        this.commonService.showLoading();
        if (!data) {
          this.commonService.hideLoading();
          return;
        }
        if (status === 'Complete') {
          if (this.isExternal) {
            this.commonService.hideLoading();
            sessionStorage.setItem('case-to-complete-reason', JSON.stringify(data));
            this.router.navigate([`quote/case/${this.caseGuid}/integration`]);
            return;
          }
        }
        this.caseService.updateCaseStatus(this.caseGuid, status, data.comment).subscribe({
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
        queryParams: {
          send: 'false'
        },
        queryParamsHandling: 'merge'
      });
    }
    this.repairEstimateService.createEstimate(this.caseGuid, this.inspectionId, this.vehicleId, this.domainId).subscribe({
      next: resp => {
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
  * downloadPdf()
  */
  downloadPdf() {
    this.commonService.showLoading();
    const apiCall = 'getXADownloadUrl';
    this.monitorService.logEvent('downloadPdf', ['ChqRepairEstimateComponent', 'addenda-quote', {
      caseId: this.caseGuid
    }]);
    this.repairEstimateService[apiCall](this.caseGuid, new Date().toString()).subscribe({
      next: result => {
        window.open(result.data.url, '_blank');
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
    if (!this.caseStatus) {
      return false;
    }
    return ['approved', 'closed', 'complete'].indexOf(this.caseStatus?.toLowerCase()) === -1;
  }
  /**
  * is case pending
  */
  get currentStatus() {
    if (!this.caseStatus) {
      return false;
    }
    return ['approved', 'closed', 'complete'].indexOf(this.caseStatus?.toLowerCase()) === -1;
  }
  /**
  * Get history
  */
  getHistory() {
    this.history = [];
    this.isHistoryLoading = true;
    this.coreService.getHistory(this.caseId, this.domainId).subscribe({
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
  * get case Detail
  */
  getCaseDetail() {
    this.caseService.getCaseDetail(this.caseGuid).subscribe({
      next: response => {
        console.log('response:', response);
        if (response?.data) {
          const {
            inspections,
            vehicleId,
            status,
            repairStatus,
            orgName,
            repairGuid,
            domainID,
            integrationStatus,
            caseDetail
          } = response.data;
          this.repairGuid = repairGuid;
          this.organizationName = caseDetail.firstName + ' ' + caseDetail.lastName;
          this.organizationEmail = caseDetail.email;
          this.organizationCountryCode = caseDetail.countryCode;
          this.organizationPhone = caseDetail.mobileNumber;
          this.caseId = response.data.id;
          this.commonService.caseStatus.next(status);
          this.commonService.caseDetail.next(response?.data);
          this.inspectionId = inspections ? inspections[0]?.inspectionId : '';
          this.caseIntegrationStatus = integrationStatus;
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
          this.customerData = {
            ...this.customerData,
            initial: this.customerData.firstName?.substring(0, 1).toUpperCase() + this.customerData.lastName?.substring(0, 1).toUpperCase()
          };
          this.pageReady = true;
          if (this.currentOrgId != response.data.organizationDetail?.organizationId) {
            this.commonService.isViewOnly = true;
          } else {
            this.commonService.isViewOnly = false;
          }
          const isUpdate = sessionStorage.getItem('update') || '0';
          if (isUpdate === '0') {
            this.getEstimationDetail(orgName);
            this.commonService.updatePage('/quote/case/0', 'estimate');
          } else if (isUpdate === '1' && this.route.snapshot.queryParams['send'] && this.route.snapshot.queryParams['send'] == 'true') {
            this.repairEstimateService.readUpdateEstimate(this.caseGuid, response.data.inspections[0].inspectionId, response.data.vehicleId, 'put', this.domainId).subscribe({
              next: () => {
                //get call
                sessionStorage.setItem('update', '0');
                this.getEstimationDetail(orgName);
                this.router.navigate([], {
                  relativeTo: this.route,
                  queryParams: {
                    send: 'false'
                  },
                  queryParamsHandling: 'merge'
                });
                this.commonService.hideLoading();
                setTimeout(() => {
                  this.commonService.updatePage('/quote/case/0', 'estimate');
                });
              }
            });
          } else {
            this.getEstimationDetail(orgName);
            sessionStorage.setItem('update', '0');
          }
          if (integrationStatus && integrationStatus !== '') {
            if (integrationStatus.toLowerCase() != 'fail') {
              this.calculationButton.type = 'disabled';
            } else {
              this.calculationButton.type = 'outline';
            }
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
      next: response => {
        this.estimateResponse = response.data;
        this.caseData = {
          'vehicleMake': this.estimateResponse.make,
          'vehicleModel': this.estimateResponse.modelCode
        };
        this.estimateResponse.orgName = orgName;
        this.estimateSource = response.data?.externalSource;
        if (!this.estimateResponse.currencyCode) {
          this.estimateResponse.currencyCode = this.i18n.currencySymbol;
        }
        if (this.estimateResponse?.estimateCharges?.length == 0) {
          this.commonService.hideLoading();
          this.showConfirmationPopup();
        } else {
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
      next: response => {
        const repairInspectionTemplate = response?.data;
        if (repairInspectionTemplate?.length > 0) {
          this.commonService.repairInspectionTemplate = repairInspectionTemplate[0];
          const inspectionTemplateId = repairInspectionTemplate[0].id;
          const apiData = (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.forkJoin)({
            inspectionTemplate: this.inspectionService.getInspectionTemplate(inspectionTemplateId),
            inspectionDetail: this.inspectionService.getInspection(this.inspectionId)
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_29__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(error)));
          apiData.subscribe(resultMap => {
            const inspectionTemplateDetail = resultMap.inspectionTemplate?.inspectionItemTemplates;
            const inspectionItems = resultMap.inspectionDetail;
            const bulkUploadTemplateItem = inspectionTemplateDetail?.filter(step => step.name === 'Bulk Upload Image');
            this.images = inspectionItems?.inspectionItems?.filter(q => (q.name == 'Bulk Upload Image' || q.inspectionItemTemplateID === bulkUploadTemplateItem[0].id) && q.rawAzureBlobUrl != '').map(q => q.rawAzureBlobUrl);
            if (this.images?.length == 0) {
              this.images = inspectionItems?.inspectionItems?.filter(q => q.name != 'Bulk Upload Image' && q.rawAzureBlobUrl != '').map(q => q.rawAzureBlobUrl);
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
    const dialogRef = this.dialog.open(src_app_dialogs_gt_motive_estimation_dialog_gt_motive_estimation_dialog_component__WEBPACK_IMPORTED_MODULE_4__.GtMotiveEstimationDialogComponent, {
      disableClose: true,
      data: {
        message: 'The estimate values are 0. Press continue to navigate to gtmotive.'
      },
      backdropClass: 'confirmation-popup-backdrop'
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
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
    if (this.isExternal) {
      this.dropdownModelFilter = {
        ...this.dropdownModelFilter,
        ...{
          options: [{
            'label': 'Edit Calculations',
            'dropdownItemIcon': 'edit'
          }, {
            'label': 'Complete',
            'dropdownItemIcon': 'folderplus'
          }, {
            'label': 'Close Estimate',
            'dropdownItemIcon': 'cross'
          }]
        }
      };
    } else {
      if (status.toLowerCase() === 'reject' || status.toLowerCase() === 'rejected') {
        this.dropdownModelFilter = {
          ...this.dropdownModelFilter,
          ...{
            options: [{
              'label': 'Edit Calculations',
              'dropdownItemIcon': 'edit'
            }, {
              'label': this.translationService.instant('self_approval'),
              'dropdownItemIcon': 'clock-new',
              'value': 'requestStatus'
            },
            //{ 'label': 'Close Case', 'dropdownItemIcon': 'folderplus' }
            {
              'label': 'Complete',
              'dropdownItemIcon': 'folderplus'
            }]
          }
        };
      } else if (status.toLowerCase() === 'approved') {
        this.dropdownModelFilter = {
          ...this.dropdownModelFilter,
          ...{
            options: [
            //{ 'label': 'Close Case', 'dropdownItemIcon': 'folderplus' }
            {
              'label': this.translationService.instant('self_approval'),
              'dropdownItemIcon': 'clock-new',
              'value': 'requestStatus'
            }, {
              'label': 'Complete',
              'dropdownItemIcon': 'folderplus'
            }]
          }
        };
      } else if (status.toLowerCase() === 'complete') {
        this.dropdownModelFilter = {
          ...this.dropdownModelFilter,
          ...{
            options: []
          }
        };
      } else {
        this.dropdownModelFilter = {
          ...this.dropdownModelFilter,
          ...{
            options: [{
              'label': 'Edit Calculations',
              'dropdownItemIcon': 'edit'
            }, {
              'label': this.translationService.instant('self_approval'),
              'dropdownItemIcon': 'clock-new',
              'value': 'requestStatus'
            },
            //{ 'label': 'Close Case', 'dropdownItemIcon': 'folderplus' }
            {
              'label': 'Complete',
              'dropdownItemIcon': 'folderplus'
            }]
          }
        };
      }
    }
  }
  /**
  * navigate to booking
  * @param action
  */
  booking(action, bookingId) {
    if (action === 'create') {
      this.router.navigate(['repair/booking/0'], {
        queryParams: {
          'caseId': this.caseGuid
        }
      });
    } else {
      this.router.navigate([`repair/booking/${bookingId}`]);
    }
  }
  /**
  * redirect to case list
  */
  redirectToCaseList() {
    this.router.navigate(['cases']);
  }
  /**
  * on destroy
  */
  ngOnDestroy() {
    this.commonService.accessRight.unsubscribe();
    this.monitorService.logEvent('ngOnDestroy', ['ChqRepairEstimateComponent', 'addenda-quote']);
    this.commonService.isViewOnly = false;
    this.subscription.unsubscribe();
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
    if (this.caseStatus?.toLowerCase() === 'pendingapproval') {
      return true;
    }
    return false;
  }
  static #_ = this.ɵfac = function ChqRepairEstimateComponent_Factory(t) {
    return new (t || ChqRepairEstimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_10__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_11__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_12__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_13__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_33__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_message_message_service__WEBPACK_IMPORTED_MODULE_14__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_media_collection_media_collection_service__WEBPACK_IMPORTED_MODULE_15__.MediaCollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_16__.CoreService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
    type: ChqRepairEstimateComponent,
    selectors: [["chq-repair-estimate"]],
    viewQuery: function ChqRepairEstimateComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵviewQuery"](src_app_widgets_chq_pdf_generator_chq_pdf_generator_component__WEBPACK_IMPORTED_MODULE_3__.ChqPdfGeneratorComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵloadQuery"]()) && (ctx.elementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵloadQuery"]()) && (ctx.anchor = _t.first);
      }
    },
    hostBindings: function ChqRepairEstimateComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("visibilitychange", function ChqRepairEstimateComponent_visibilitychange_HostBindingHandler($event) {
          return ctx.handleVisibilityChange($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresolveDocument"])("popstate", function ChqRepairEstimateComponent_popstate_HostBindingHandler($event) {
          return ctx.onPopState($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      customerFormData: "customerFormData"
    },
    decls: 3,
    vars: 3,
    consts: [["class", "estimate-container", 3, "ngClass", 4, "ngIf"], [3, "hideNext", "caseDetail", "backEvent", 4, "ngIf"], [4, "ngIf"], [1, "estimate-container", 3, "ngClass"], [1, "header", 3, "chqModel", "showButton", "back"], ["class", "info-container", 4, "ngIf"], [1, "estimate-block", "row"], [1, "quote-estimate-step", "col-12"], ["serviceType", "quote", 3, "estimateResponse", "editEstimate", "estimateSource", "i18n", "repairGuid", "downloadPdf", 4, "ngIf"], [3, "showLoading"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-quote.png"], ["class", "footer-button-wrapper show-md", 4, "ngIf"], ["class", "footer-button-wrapper show-sm", 4, "ngIf"], ["serviceType", "quote", 3, "history", "isLoading", "toggleExpand"], [1, "info-container"], ["class", "info-block", 4, "ngIf"], [1, "vehicle-block"], ["src", "assets/img/front-right.png", "alt", "Car"], [1, "text-block"], [3, "href", "hidden", "download"], ["anchor", ""], [1, "info-block"], ["class", "avatar", 4, "ngIf"], [1, "avatar"], ["serviceType", "quote", 3, "estimateResponse", "editEstimate", "estimateSource", "i18n", "repairGuid", "downloadPdf"], [1, "footer-button-wrapper", "show-md"], [3, "buttonModel", "click", 4, "ngIf"], [3, "buttonModel", 4, "ngIf"], ["class", "communication-dropdown", 3, "dropdownModel", "selected", 4, "ngIf"], [3, "buttonModel", "click"], [3, "buttonModel"], [1, "communication-dropdown", 3, "dropdownModel", "selected"], [1, "footer-button-wrapper", "show-sm"], ["class", "option-dropdown", 3, "dropdownModel", "selected", 4, "ngIf"], [1, "option-dropdown", 3, "dropdownModel", "selected"], [3, "hideNext", "caseDetail", "backEvent"]],
    template: function ChqRepairEstimateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](0, ChqRepairEstimateComponent_div_0_Template, 14, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, ChqRepairEstimateComponent_damage_analysis_1_Template, 1, 2, "damage-analysis", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, ChqRepairEstimateComponent_no_access_error_2_Template, 1, 0, "no-access-error", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.showDamageAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_33__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgIf, _shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_17__.DamageAnalysisComponent, _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_18__.ChqStepHeaderComponent, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_19__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_20__.ChqButtonComponent, _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_21__.CustomLoaderComponent, _widgets_chq_estimate_details_chq_estimate_details_component__WEBPACK_IMPORTED_MODULE_22__.ChqEstimateDetailsComponent, _shared_error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_23__.NoAccessErrorComponent, _shared_history_history_component__WEBPACK_IMPORTED_MODULE_24__.HistoryComponent],
    styles: [".estimate-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%], .estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%] {\n  padding: 10px 32px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid var(--xa-light-gray);\n  flex: 1;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%], .estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  display: flex;\n  flex-direction: column;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.25px;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  max-height: 45px;\n  max-width: 102px;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.estimate-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .vehicle-block[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%]   .estimate-tables[_ngcontent-%COMP%] {\n  padding: 20px 20px 0 0;\n  position: relative;\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%]   .image-slider[_ngcontent-%COMP%] {\n  padding: 20px 0 0 10px;\n  position: relative;\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%]   .estimate-tables[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--xa-light-gray);\n}\n.estimate-container[_ngcontent-%COMP%]   .estimate-block[_ngcontent-%COMP%]   .estimate-tables[_ngcontent-%COMP%]   chq-custom-loader[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 61px;\n  background: rgba(26, 34, 51, 0.2);\n  border-radius: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.avatar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n\n.show-sm[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n@media (max-width: 985px) {\n  .show-md[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .show-sm[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n.quote-estimate-step[_ngcontent-%COMP%]     .estimate-main-container {\n  border: 1px solid var(--xa-form-border);\n  border-radius: 8px;\n  background: var(--xa-white);\n  margin-top: 25px;\n  margin-bottom: 25px;\n  padding: 32px;\n  padding-top: 0;\n}\n.quote-estimate-step[_ngcontent-%COMP%]     .estimate-main-container chq-custom-loader {\n  margin: auto;\n}\n.quote-estimate-step[_ngcontent-%COMP%]     .estimate-label {\n  margin-top: 25px;\n}\n.quote-estimate-step[_ngcontent-%COMP%]     .estimate-label, .quote-estimate-step[_ngcontent-%COMP%]     .estimate-main-container {\n  margin-left: calc(6px + 1vw);\n  margin-right: calc(5px + 1vw);\n}\n\n.option-dropdown[_ngcontent-%COMP%] {\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9xdW90ZS9jaHEtbmV3LWNhc2VzL2NocS1yZXBhaXItZXN0aW1hdGUvY2hxLXJlcGFpci1lc3RpbWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNROztFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLE9BQUE7QUFDWjtBQUNZOztFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRWhCO0FBQWdCOztFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHcEI7QUFFWTs7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDaEI7QUFHUTtFQUNJLGlCQUFBO0FBRFo7QUFJUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFGWjtBQU1JO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFKUjtBQUtRO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQUhaO0FBTVE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBSlo7QUFPUTtFQUNJLDRDQUFBO0FBTFo7QUFPWTtFQUNJLFlBQUE7QUFMaEI7O0FBV0E7RUFDSSx3QkFBQTtBQVJKOztBQVdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVJKO0FBVUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJSOztBQVlBO0VBQ0ksd0JBQUE7QUFUSjs7QUFZQTtFQUNJO0lBQ0ksd0JBQUE7RUFUTjtFQVlFO0lBQ0ksd0JBQUE7RUFWTjtBQUNGO0FBY0k7RUFDSSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFaUjtBQWFRO0VBQ0ksWUFBQTtBQVhaO0FBY0k7RUFDSSxnQkFBQTtBQVpSO0FBZUk7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FBYlI7O0FBMkJBO0VBQ0ksWUFBQTtBQXhCSiIsInNvdXJjZXNDb250ZW50IjpbIi5lc3RpbWF0ZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmluZm8tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgIC5pbmZvLWJsb2NrLFxyXG4gICAgICAgIC52ZWhpY2xlLWJsb2NrIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgICAgIC50ZXh0LWJsb2NrIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mby1ibG9jayB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZlaGljbGUtYmxvY2sge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXN0aW1hdGUtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIC5lc3RpbWF0ZS10YWJsZXMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2Utc2xpZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDAgMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVzdGltYXRlLXRhYmxlcyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG5cclxuICAgICAgICAgICAgY2hxLWN1c3RvbS1sb2FkZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDM0LCA1MSwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvdy1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODVweCkge1xyXG4gICAgLnNob3ctbWQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc2hvdy1zbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXVvdGUtZXN0aW1hdGUtc3RlcCB7XHJcbiAgICA6Om5nLWRlZXAgIC5lc3RpbWF0ZS1tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZm9ybS1ib3JkZXIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgY2hxLWN1c3RvbS1sb2FkZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5lc3RpbWF0ZS1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgOjpuZy1kZWVwICAuZXN0aW1hdGUtbGFiZWwsIDo6bmctZGVlcCAgLmVzdGltYXRlLW1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg2cHggKyAxdncpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyg1cHggKyAxdncpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTM2NnB4KSB7XHJcbi8vICAgICAuZm9ybS1mb290ZXIge1xyXG4vLyAgICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMjBweDtcclxuLy8gICAgICAgICB6LWluZGV4OiAzMDAwO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLm9wdGlvbi1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ }),

/***/ 2893:
/*!*********************************************************************!*\
  !*** ./src/app/shared/session-refresh/session-refresh.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionRefreshComponent": () => (/* binding */ SessionRefreshComponent)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);






class SessionRefreshComponent {
  /**
   * Constructor
   * @param caseService
   */
  constructor(caseService, router, route, commonService, monitorService) {
    this.caseService = caseService;
    this.router = router;
    this.route = route;
    this.commonService = commonService;
    this.monitorService = monitorService;
  }
  /**
   * ng oninit
   */
  ngOnInit() {
    const completeCaseGuid = this.route.parent?.snapshot.paramMap.get('id');
    if (completeCaseGuid) {
      const localStorageCleared = sessionStorage.getItem('localStorageCleared');
      const reason = sessionStorage.getItem('case-to-complete-reason');
      if (localStorageCleared !== 'yes') {
        this.commonService.clearData();
        sessionStorage.setItem('localStorageCleared', 'yes');
        sessionStorage.setItem('case-to-complete-reason', reason);
      } else {
        sessionStorage.setItem('case-to-complete-reason', '');
      }
      const obj = JSON.parse(reason);
      const deliveryDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(obj?.deliveryDate).format('YYYY-MM-DDT00:00:00');
      this.caseService.updateCaseStatus(completeCaseGuid, 'Complete', obj?.comment).subscribe({
        next: resp => {
          this.monitorService.logEvent('updateCaseStatus', ['ChqRepairEstimateComponent', 'addenda-quote', {
            caseId: completeCaseGuid,
            status
          }]);
          sessionStorage.setItem('localStorageCleared', '');
          sessionStorage.setItem('case-to-complete-reason', '');
          this.router.navigate(['cases']);
        },
        error: () => {
          sessionStorage.setItem('localStorageCleared', '');
          sessionStorage.setItem('case-to-complete-reason', '');
          this.router.navigate(['cases']);
        }
      });
    } else {
      sessionStorage.setItem('localStorageCleared', '');
      sessionStorage.setItem('case-to-complete-reason', '');
      this.router.navigate(['cases']);
    }
  }
  static #_ = this.ɵfac = function SessionRefreshComponent_Factory(t) {
    return new (t || SessionRefreshComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_1__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SessionRefreshComponent,
    selectors: [["session-refresh"]],
    decls: 4,
    vars: 0,
    consts: [[1, "loading-container"], ["src", "assets/img/addenda-quote.png"]],
    template: function SessionRefreshComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...Integration in progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
    },
    styles: [".loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  gap: 42px;\n}\n.loading-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 482px;\n  height: 76px;\n}\n.loading-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Nlc3Npb24tcmVmcmVzaC9zZXNzaW9uLXJlZnJlc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdhcDogNDJweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0ODJweDtcclxuICAgICAgICBoZWlnaHQ6IDc2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_quote_chq-new-cases_chq-new-case_module_ts.js.map