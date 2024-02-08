"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_quote_quote_module_ts"],{

/***/ 91070:
/*!***************************************************!*\
  !*** ./src/app/guards/quote-guard/quote.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteGuard": () => (/* binding */ QuoteGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/core/core.service */ 42771);







class QuoteGuard {
  /**
   * constructor
   * @param router
   */
  constructor(commonService, msalGuard, router, coreService) {
    this.commonService = commonService;
    this.msalGuard = msalGuard;
    this.router = router;
    this.coreService = coreService;
  }
  /**
   * canActivate
   * @returns
   */
  canActivate(next, state) {
    if (this.msalGuard.canActivate(next, state)) {
      return this.checkUserPermission(next, state);
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
  /**
  * checkUserPermission
  * @returns
  */
  checkUserPermission(route, state) {
    return this.commonService.userProfileData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(res => {
      if (res) {
        const automotiveServices = res?.data?.userPermission?.automotiveServices;
        this.commonService.setPermission(automotiveServices);
        const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'carheal quote');
        if (automotiveService) {
          const permissionList = automotiveService.permissions;
          const createCase = this.commonService.hasPermission('case.create', permissionList);
          const url = state.url;
          const caseId = url.split('/case/')[1] ? url.split('/case/')[1].split('/')[0] : null;
          if (!createCase && url !== '/cases' && (!caseId || caseId === '0')) {
            this.router.navigate(['cases']);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
          }
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
        } else {
          this.router.navigate(['quote']);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
        }
      } else {
        this.commonService.showLoading();
        return this.coreService.getUserProfile().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(res => {
          if (res) {
            this.commonService.hideLoading();
            this.commonService.userProfileData.next(res);
            if (res?.data.userProfileImageBlobUrl) {
              this.commonService.avatar.next({
                image: res?.data.userProfileImageBlobUrl
              });
            }
            if (res?.data?.userPermission?.automotiveServices) {
              const automotiveServices = res?.data?.userPermission?.automotiveServices;
              this.commonService.setPermission(automotiveServices);
              const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'carheal quote');
              if (automotiveService) {
                const permissionList = automotiveService.permissions;
                const createCase = this.commonService.hasPermission('case.create', permissionList);
                const url = state.url;
                const caseId = url.split('/case/')[1] ? url.split('/case/')[1].split('/')[0] : null;
                if (!createCase && url !== '/cases' && (!caseId || caseId === '0')) {
                  this.router.navigate(['cases']);
                  return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
              } else {
                this.router.navigate(['quote']);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
              }
            } else {
              this.router.navigate(['quote']);
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
            }
          } else {
            this.commonService.hideLoading();
            this.router.navigate(['quote']);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
          }
        }));
      }
    }));
  }
  static #_ = this.ɵfac = function QuoteGuard_Factory(t) {
    return new (t || QuoteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__.MsalGuard), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_1__.CoreService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: QuoteGuard,
    factory: QuoteGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 65137:
/*!***********************************************!*\
  !*** ./src/app/modules/quote/quote.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteModule": () => (/* binding */ QuoteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_guards_quote_guard_quote_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/quote-guard/quote.guard */ 91070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







const quotesRoutes = [{
  path: '',
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__.MsalGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_quote_chq-cases_chq-cases_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../quote/chq-cases/chq-cases.module */ 24042)).then(m => m.ChqCasesModule)
}, {
  path: 'case/:id',
  canActivate: [src_app_guards_quote_guard_quote_guard__WEBPACK_IMPORTED_MODULE_0__.QuoteGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_shared_history_history_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_quote_chq-new-cases_chq-new-case_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../quote/chq-new-cases/chq-new-case.module */ 20949)).then(m => m.ChqNewCaseModule)
}, {
  path: 'case',
  canActivate: [src_app_guards_quote_guard_quote_guard__WEBPACK_IMPORTED_MODULE_0__.QuoteGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_shared_history_history_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_quote_chq-new-cases_chq-new-case_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../quote/chq-new-cases/chq-new-case.module */ 20949)).then(m => m.ChqNewCaseModule)
}];
class QuoteModule {
  static #_ = this.ɵfac = function QuoteModule_Factory(t) {
    return new (t || QuoteModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: QuoteModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(quotesRoutes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuoteModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_quote_quote_module_ts.js.map