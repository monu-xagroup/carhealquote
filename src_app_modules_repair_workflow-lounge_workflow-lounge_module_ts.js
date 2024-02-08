"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_workflow-lounge_workflow-lounge_module_ts"],{

/***/ 76252:
/*!**************************************************************************!*\
  !*** ./src/app/modules/repair/workflow-lounge/workflow-lounge.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowLoungeModule": () => (/* binding */ WorkflowLoungeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 83335);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helper/directive/directive.module */ 67798);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _workflow_lounge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workflow-lounge.component */ 31224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);

















const workflowRoutes = [{
  path: '',
  component: _workflow_lounge_component__WEBPACK_IMPORTED_MODULE_4__.WorkflowLoungeComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_1__.VersionControlResolver
  }
}];
class WorkflowLoungeModule {
  static #_ = this.ɵfac = function WorkflowLoungeModule_Factory(t) {
    return new (t || WorkflowLoungeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: WorkflowLoungeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(workflowRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WorkflowLoungeModule, {
    declarations: [_workflow_lounge_component__WEBPACK_IMPORTED_MODULE_4__.WorkflowLoungeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]
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

/***/ })

}]);
//# sourceMappingURL=src_app_modules_repair_workflow-lounge_workflow-lounge_module_ts.js.map