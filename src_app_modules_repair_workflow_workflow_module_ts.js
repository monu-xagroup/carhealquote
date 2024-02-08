"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_workflow_workflow_module_ts"],{

/***/ 95885:
/*!************************************************************!*\
  !*** ./src/app/modules/repair/workflow/workflow.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowModule": () => (/* binding */ WorkflowModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _workflow_workflow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workflow/workflow.component */ 40712);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helper/directive/directive.module */ 67798);
/* harmony import */ var src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helper/pipe.module */ 39816);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);













const workflowRoutes = [{
  path: '',
  component: _workflow_workflow_component__WEBPACK_IMPORTED_MODULE_2__.WorkflowComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__.VersionControlResolver
  }
}];
class WorkflowModule {
  static #_ = this.ɵfac = function WorkflowModule_Factory(t) {
    return new (t || WorkflowModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: WorkflowModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(workflowRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_4__.DirectiveModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](WorkflowModule, {
    declarations: [_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_2__.WorkflowComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_4__.DirectiveModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule]
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
//# sourceMappingURL=src_app_modules_repair_workflow_workflow_module_ts.js.map