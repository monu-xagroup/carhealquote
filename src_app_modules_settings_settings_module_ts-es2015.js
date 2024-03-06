"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_settings_settings_module_ts"],{

/***/ 29428:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/operations/operations-layout/operations-layout.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationsLayoutComponent": function() { return /* binding */ OperationsLayoutComponent; }
/* harmony export */ });
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/settings/settings.service */ 11145);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);





class OperationsLayoutComponent {
    /**
     * constructor
     * @param router
     */
    constructor(router, settingsService) {
        this.router = router;
        this.settingsService = settingsService;
        this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__.operationsMenus;
    }
    /**
     * on init
     */
    ngOnInit() {
        this.settingsService.isRepairChange.subscribe((isRepair) => {
            this.menuItems =
                src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__.operationsMenus.map((ele) => {
                    if (ele.url === '/settings/repair-type')
                        ele.disabled = !isRepair;
                    return ele;
                });
        });
        this.settingsService.isJobTasksEnabled.subscribe((isEnabled) => {
            this.menuItems =
                src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__.operationsMenus.map((ele) => {
                    if (ele.url === '/settings/jobs-tasks')
                        ele.disabled = !isEnabled;
                    return ele;
                });
        });
    }
    /**
     * navigate to selected route
     * @param item
     */
    navigate(item) {
        const url = item.url;
        {
            this.router.navigate([url]);
        }
    }
}
OperationsLayoutComponent.ɵfac = function OperationsLayoutComponent_Factory(t) { return new (t || OperationsLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService)); };
OperationsLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OperationsLayoutComponent, selectors: [["app-operations-layout"]], decls: 5, vars: 1, consts: [[1, "layout-container"], [1, "tab-header", "fx-0"], [1, "tabs", 3, "menuItems", "menuItemClick"], [1, "tab-content", "mh-0", "fx-1"]], template: function OperationsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "chq-tabs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("menuItemClick", function OperationsLayoutComponent_Template_chq_tabs_menuItemClick_2_listener($event) { return ctx.navigate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuItems", ctx.menuItems);
    } }, directives: [_widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_2__.ChqTabsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: [".layout-container[_ngcontent-%COMP%] {\n  height: calc(100vh - calc(5px + 1.5vw + 58px + 1.6vw) - 76px);\n  display: flex;\n  flex-flow: column;\n}\n.layout-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background: var(--xa-tab-background);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkRBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoib3BlcmF0aW9ucy1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIGNhbGMoNXB4ICsgMS41dncgKyA1OHB4ICsgMS42dncpIC0gNzZweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gIC50YWItY29udGVudCB7ICAgIFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXRhYi1iYWNrZ3JvdW5kKTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 83402:
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": function() { return /* binding */ SettingsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _operations_operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations/operations-layout/operations-layout.component */ 29428);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








const settingsRoutes = [
    {
        path: '',
        component: _operations_operations_layout_operations_layout_component__WEBPACK_IMPORTED_MODULE_0__.OperationsLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_settings_operations_operations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../settings/operations/operations.module */ 92243)).then(m => m.OperationsModule)
    },
    {
        path: 'employees',
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_2__.VersionControlResolver },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-scheduler_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_settings_employee_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../settings/employee/employee.module */ 8203)).then(m => m.EmployeeModule)
    },
];
class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(settingsRoutes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 74743:
/*!******************************************************!*\
  !*** ./src/app/resolvers/versionControl.resolver.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionControlResolver": function() { return /* binding */ VersionControlResolver; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53399);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 82426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
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
        return this.commonService.checkVersion().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            this.commonService.hideLoading();
            const localVersion = localStorage.getItem('appVersion');
            const appVersion = res.buildRevision;
            if (localVersion && localVersion != appVersion) {
                localStorage.setItem('appVersion', appVersion);
                setTimeout(() => {
                    location.reload();
                }, 10);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version available');
            }
            else {
                localStorage.setItem('appVersion', appVersion);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version is not available');
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
            this.commonService.hideLoading();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('data not available at this time');
        }));
    }
}
VersionControlResolver.ɵfac = function VersionControlResolver_Factory(t) { return new (t || VersionControlResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService)); };
VersionControlResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: VersionControlResolver, factory: VersionControlResolver.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_settings_settings_module_ts-es2015.js.map