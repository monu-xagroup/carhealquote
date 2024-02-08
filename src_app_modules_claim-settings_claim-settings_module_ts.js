"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_claim-settings_claim-settings_module_ts"],{

/***/ 97187:
/*!*****************************************************************!*\
  !*** ./src/app/modules/claim-settings/claim-settings.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSettingsModule": () => (/* binding */ ClaimSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _settings_layout_claim_settings_layout_claim_settings_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-layout/claim-settings-layout/claim-settings-layout.component */ 6629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const claimRoutes = [{
  path: '',
  component: _settings_layout_claim_settings_layout_claim_settings_layout_component__WEBPACK_IMPORTED_MODULE_1__.ClaimSettingsLayoutComponent,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_helper_form_claim-form_helper_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_claim-settings_settings-layout_claim-settings-layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../claim-settings/settings-layout/claim-settings-layout.module */ 67165)).then(m => m.ClaimSettingsLayoutModule)
}];
class ClaimSettingsModule {
  static #_ = this.ɵfac = function ClaimSettingsModule_Factory(t) {
    return new (t || ClaimSettingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ClaimSettingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(claimRoutes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimSettingsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 6629:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/claim-settings/settings-layout/claim-settings-layout/claim-settings-layout.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSettingsLayoutComponent": () => (/* binding */ ClaimSettingsLayoutComponent)
/* harmony export */ });
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);




class ClaimSettingsLayoutComponent {
  /**
   * constructor
   * @param router
   */
  constructor(router) {
    this.router = router;
    this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_0__.claimSettingsMenus;
  }
  /**
   * on init
   */
  ngOnInit() {
    console.log('ngOnInit');
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
  static #_ = this.ɵfac = function ClaimSettingsLayoutComponent_Factory(t) {
    return new (t || ClaimSettingsLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ClaimSettingsLayoutComponent,
    selectors: [["app-claim-settings-layout"]],
    decls: 6,
    vars: 2,
    consts: [[1, "layout-container"], [1, "tab-header", "fx-0"], [3, "menuItems", "mode", "menuItemClick"], ["tabMain", ""], [1, "tab-content", "mh-0", "fx-1"]],
    template: function ClaimSettingsLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "chq-tabs", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("menuItemClick", function ClaimSettingsLayoutComponent_Template_chq_tabs_menuItemClick_2_listener($event) {
          return ctx.navigate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("menuItems", ctx.menuItems)("mode", "underline");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_1__.ChqTabsComponent],
    styles: [".layout-container[_ngcontent-%COMP%] {\n  height: calc(100vh - (5px + 1.5vw + 58px + 1.6vw) - 76px);\n  display: flex;\n  flex-flow: column;\n}\n.layout-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background: var(--xa-tab-background);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS1zZXR0aW5ncy9zZXR0aW5ncy1sYXlvdXQvY2xhaW0tc2V0dGluZ3MtbGF5b3V0L2NsYWltLXNldHRpbmdzLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBQUNOIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gY2FsYyg1cHggKyAxLjV2dyArIDU4cHggKyAxLjZ2dykgLSA3NnB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBcclxuICAgIC50YWItY29udGVudCB7ICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS10YWItYmFja2dyb3VuZCk7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_claim-settings_claim-settings_module_ts.js.map