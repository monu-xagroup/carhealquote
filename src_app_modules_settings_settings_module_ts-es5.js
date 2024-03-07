(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_settings_settings_module_ts"], {
    /***/
    29428:
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/settings/operations/operations-layout/operations-layout.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OperationsLayoutComponent": function OperationsLayoutComponent() {
          return (
            /* binding */
            _OperationsLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/model/menu */
      38588);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/settings/settings.service */
      11145);
      /* harmony import */


      var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */
      77782);

      var _OperationsLayoutComponent = /*#__PURE__*/function () {
        /**
         * constructor
         * @param router
         */
        function _OperationsLayoutComponent(router, settingsService) {
          _classCallCheck(this, _OperationsLayoutComponent);

          this.router = router;
          this.settingsService = settingsService;
          this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__.operationsMenus;
        }
        /**
         * on init
         */


        _createClass(_OperationsLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.settingsService.isRepairChange.subscribe(function (isRepair) {
              _this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__.operationsMenus.map(function (ele) {
                if (ele.url === '/settings/repair-type') ele.disabled = !isRepair;
                return ele;
              });
            });
            this.settingsService.isJobTasksEnabled.subscribe(function (isEnabled) {
              _this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__.operationsMenus.map(function (ele) {
                if (ele.url === '/settings/jobs-tasks') ele.disabled = !isEnabled;
                return ele;
              });
            });
          }
          /**
           * navigate to selected route
           * @param item
           */

        }, {
          key: "navigate",
          value: function navigate(item) {
            var url = item.url;
            {
              this.router.navigate([url]);
            }
          }
        }]);

        return _OperationsLayoutComponent;
      }();

      _OperationsLayoutComponent.ɵfac = function OperationsLayoutComponent_Factory(t) {
        return new (t || _OperationsLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
      };

      _OperationsLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _OperationsLayoutComponent,
        selectors: [["app-operations-layout"]],
        decls: 5,
        vars: 1,
        consts: [[1, "layout-container"], [1, "tab-header", "fx-0"], [1, "tabs", 3, "menuItems", "menuItemClick"], [1, "tab-content", "mh-0", "fx-1"]],
        template: function OperationsLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "chq-tabs", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("menuItemClick", function OperationsLayoutComponent_Template_chq_tabs_menuItemClick_2_listener($event) {
              return ctx.navigate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuItems", ctx.menuItems);
          }
        },
        directives: [_widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_2__.ChqTabsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
        styles: [".layout-container[_ngcontent-%COMP%] {\n  height: calc(100vh - calc(5px + 1.5vw + 58px + 1.6vw) - 76px);\n  display: flex;\n  flex-flow: column;\n}\n.layout-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background: var(--xa-tab-background);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkRBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoib3BlcmF0aW9ucy1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gY2FsYyg1cHggKyAxLjV2dyArIDU4cHggKyAxLjZ2dykgLSA3NnB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAudGFiLWNvbnRlbnQgeyAgICBcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXRhYi1iYWNrZ3JvdW5kKTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    83402:
    /*!*****************************************************!*\
      !*** ./src/app/modules/settings/settings.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsModule": function SettingsModule() {
          return (
            /* binding */
            _SettingsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _operations_operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./operations/operations-layout/operations-layout.component */
      29428);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/resolvers/versionControl.resolver */
      74743);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var settingsRoutes = [{
        path: '',
        component: _operations_operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_0__.OperationsLayoutComponent,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_settings_operations_operations_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../settings/operations/operations.module */
          92243)).then(function (m) {
            return m.OperationsModule;
          });
        }
      }, {
        path: 'employees',
        resolve: {
          version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_2__.VersionControlResolver
        },
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-scheduler_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_settings_employee_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../settings/employee/employee.module */
          8203)).then(function (m) {
            return m.EmployeeModule;
          });
        }
      }];

      var _SettingsModule = /*#__PURE__*/_createClass(function _SettingsModule() {
        _classCallCheck(this, _SettingsModule);
      });

      _SettingsModule.ɵfac = function SettingsModule_Factory(t) {
        return new (t || _SettingsModule)();
      };

      _SettingsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _SettingsModule
      });
      _SettingsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(settingsRoutes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_SettingsModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
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
            var _this2 = this;

            this.commonService.showLoading();
            return this.commonService.checkVersion().pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(function (res) {
              _this2.commonService.hideLoading();

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
              _this2.commonService.hideLoading();

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
//# sourceMappingURL=src_app_modules_settings_settings_module_ts-es5.js.map