"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_claim_claim-list_claim-list_module_ts"],{

/***/ 32434:
/*!***************************************************************!*\
  !*** ./src/app/modules/claim/claim-list/claim-list.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimListModule": () => (/* binding */ ClaimListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _claim_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-list.component */ 16340);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ 82846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







const claimListRoutes = [{
  path: '',
  component: _claim_list_component__WEBPACK_IMPORTED_MODULE_0__.ClaimListComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_1__.VersionControlResolver
  }
}];
class ClaimListModule {
  static #_ = this.ɵfac = function ClaimListModule_Factory(t) {
    return new (t || ClaimListModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ClaimListModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(claimListRoutes), devextreme_angular__WEBPACK_IMPORTED_MODULE_5__.DxTagBoxModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimListModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_5__.DxTagBoxModule]
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
//# sourceMappingURL=src_app_modules_claim_claim-list_claim-list_module_ts.js.map