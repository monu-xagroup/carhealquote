"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_claim_garages_garages_module_ts"],{

/***/ 79972:
/*!*********************************************************!*\
  !*** ./src/app/modules/claim/garages/garages.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaragesModule": () => (/* binding */ GaragesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/error-page/error.module */ 88784);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _garage_details_garage_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./garage-details/garage-details.component */ 39090);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/google-maps */ 26715);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ 82846);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular */ 83658);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var _garages_list_garages_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./garages-list/garages-list.component */ 76485);
/* harmony import */ var src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helper/directive/directive.module */ 67798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);

















const claimGaragesRoutes = [{
  path: '',
  component: _garages_list_garages_list_component__WEBPACK_IMPORTED_MODULE_5__.GaragesListComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__.VersionControlResolver
  }
}, {
  path: ':garageId',
  component: _garage_details_garage_details_component__WEBPACK_IMPORTED_MODULE_4__.GarageDetailsComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__.VersionControlResolver
  }
}];
class GaragesModule {
  static #_ = this.ɵfac = function GaragesModule_Factory(t) {
    return new (t || GaragesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: GaragesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(claimGaragesRoutes), src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_12__.GoogleMapsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxTagBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DevExtremeModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_6__.DirectiveModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](GaragesModule, {
    declarations: [
    // GaragesListComponent,
    _garage_details_garage_details_component__WEBPACK_IMPORTED_MODULE_4__.GarageDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_12__.GoogleMapsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxTagBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DevExtremeModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_6__.DirectiveModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_claim_garages_garages_module_ts.js.map