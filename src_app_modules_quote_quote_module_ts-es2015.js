"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_quote_quote_module_ts"],{

/***/ 65137:
/*!***********************************************!*\
  !*** ./src/app/modules/quote/quote.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteModule": function() { return /* binding */ QuoteModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/msal-angular */ 84689);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






const quotesRoutes = [
    {
        path: '',
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_0__.MsalGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_quote_chq-cases_chq-cases_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../quote/chq-cases/chq-cases.module */ 24042)).then(m => m.ChqCasesModule)
    },
    {
        path: 'case/:id',
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_0__.MsalGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_quote_chq-new-cases_chq-new-case_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../quote/chq-new-cases/chq-new-case.module */ 20949)).then(m => m.ChqNewCaseModule)
    },
    {
        path: 'case',
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_0__.MsalGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_quote_chq-new-cases_chq-new-case_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../quote/chq-new-cases/chq-new-case.module */ 20949)).then(m => m.ChqNewCaseModule)
    },
];
class QuoteModule {
}
QuoteModule.ɵfac = function QuoteModule_Factory(t) { return new (t || QuoteModule)(); };
QuoteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: QuoteModule });
QuoteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(quotesRoutes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuoteModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_quote_quote_module_ts-es2015.js.map