(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_quote_chq-cases_chq-cases_module_ts"], {
    /***/
    24042:
    /*!*************************************************************!*\
      !*** ./src/app/modules/quote/chq-cases/chq-cases.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChqCasesModule": function ChqCasesModule() {
          return (
            /* binding */
            _ChqCasesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chq-cases-table/chq-cases-table.component */
      90733);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/widgets/chq-widgets.module */
      85510);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/icons.module */
      25852);
      /* harmony import */


      var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/resolvers/versionControl.resolver */
      74743);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var casesRoutes = [{
        path: '',
        component: _chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_0__.ChqCasesTableComponent,
        resolve: {
          version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__.VersionControlResolver
        }
      }];

      var _ChqCasesModule = /*#__PURE__*/_createClass(function _ChqCasesModule() {
        _classCallCheck(this, _ChqCasesModule);
      });

      _ChqCasesModule.ɵfac = function ChqCasesModule_Factory(t) {
        return new (t || _ChqCasesModule)();
      };

      _ChqCasesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ChqCasesModule
      });
      _ChqCasesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(casesRoutes), src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ChqCasesModule, {
          declarations: [_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_0__.ChqCasesTableComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule]
        });
      })();
      /***/

    },

    /***/
    74743:
    /*!******************************************************!*\
      !*** ./src/app/resolvers/versionControl.resolver.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VersionControlResolver": function VersionControlResolver() {
          return (
            /* binding */
            _VersionControlResolver
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      53399);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      82426);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/common/common.service */
      69763);

      var _VersionControlResolver = /*#__PURE__*/function () {
        /**
         * contructor
         * @param commonService
         */
        function _VersionControlResolver(commonService) {
          _classCallCheck(this, _VersionControlResolver);

          this.commonService = commonService;
        }
        /**
         * resolve the
         * @returns
         */


        _createClass(_VersionControlResolver, [{
          key: "resolve",
          value: function resolve() {
            var _this = this;

            this.commonService.showLoading();
            return this.commonService.checkVersion().pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (res) {
              _this.commonService.hideLoading();

              var localVersion = localStorage.getItem('appVersion');
              var appVersion = res.buildRevision;

              if (localVersion && localVersion != appVersion) {
                localStorage.setItem('appVersion', appVersion);
                setTimeout(function () {
                  location.reload();
                }, 10);
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version available');
              } else {
                localStorage.setItem('appVersion', appVersion);
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version is not available');
              }
            }), (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(function () {
              _this.commonService.hideLoading();

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('data not available at this time');
            }));
          }
        }]);

        return _VersionControlResolver;
      }();

      _VersionControlResolver.ɵfac = function VersionControlResolver_Factory(t) {
        return new (t || _VersionControlResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
      };

      _VersionControlResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _VersionControlResolver,
        factory: _VersionControlResolver.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_quote_chq-cases_chq-cases_module_ts-es5.js.map