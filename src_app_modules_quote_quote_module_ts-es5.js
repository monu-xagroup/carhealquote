(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_quote_quote_module_ts"], {
    /***/
    65137:
    /*!***********************************************!*\
      !*** ./src/app/modules/quote/quote.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuoteModule": function QuoteModule() {
          return (
            /* binding */
            _QuoteModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @azure/msal-angular */
      84689);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var quotesRoutes = [{
        path: '',
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_0__.MsalGuard],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_modules_quote_chq-cases_chq-cases_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../quote/chq-cases/chq-cases.module */
          24042)).then(function (m) {
            return m.ChqCasesModule;
          });
        }
      }, {
        path: 'case/:id',
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_0__.MsalGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_quote_chq-new-cases_chq-new-case_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../quote/chq-new-cases/chq-new-case.module */
          20949)).then(function (m) {
            return m.ChqNewCaseModule;
          });
        }
      }, {
        path: 'case',
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_0__.MsalGuard],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_quote_chq-new-cases_chq-new-case_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../quote/chq-new-cases/chq-new-case.module */
          20949)).then(function (m) {
            return m.ChqNewCaseModule;
          });
        }
      }];

      var _QuoteModule = /*#__PURE__*/_createClass(function _QuoteModule() {
        _classCallCheck(this, _QuoteModule);
      });

      _QuoteModule.ɵfac = function QuoteModule_Factory(t) {
        return new (t || _QuoteModule)();
      };

      _QuoteModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _QuoteModule
      });
      _QuoteModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(quotesRoutes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_QuoteModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_quote_quote_module_ts-es5.js.map