(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_outbound_outbound_module_ts"], {
    /***/73688: (
    /*!************************************************************!*\
      !*** ./src/app/modules/repair/outbound/outbound.module.ts ***!
      \************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"OutboundModule": function OutboundModule() {
          return /* binding */_OutboundModule;
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _outbound_outbound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./outbound/outbound.component */10250);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/material/badge */90330);
      /* harmony import */
      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/material/icon */52529);
      /* harmony import */
      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/material/card */42118);
      /* harmony import */
      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/material/datepicker */42937);
      /* harmony import */
      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/shared/shared.module */44466);
      /* harmony import */
      var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/widgets/chq-widgets.module */85510);
      /* harmony import */
      var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/resolvers/versionControl.resolver */74743);
      /* harmony import */
      var _check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./check-in-task/check-in-task.component */79666);
      /* harmony import */
      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/material/dialog */22213);
      /* harmony import */
      var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! devextreme-angular */84097);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @ngx-translate/core */70325);
      /* harmony import */
      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/material/tooltip */50298);
      /* harmony import */
      var src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/helper/directive.module */20363);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/core */2316);
      var outboundRoutes = [{
        path: '',
        component: _outbound_outbound_component__WEBPACK_IMPORTED_MODULE_0__.OutboundComponent,
        resolve: {
          version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__.VersionControlResolver
        }
      }];
      var _OutboundModule = /*#__PURE__*/_createClass(function _OutboundModule() {
        _classCallCheck(this, _OutboundModule);
      });
      _OutboundModule.ɵfac = function OutboundModule_Factory(t) {
        return new (t || _OutboundModule)();
      };
      _OutboundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _OutboundModule
      });
      _OutboundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__.MatBadgeModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxDateBoxModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(outboundRoutes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_5__.DirectiveModule]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_OutboundModule, {
          declarations: [_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_0__.OutboundComponent, _check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_4__.CheckInTaskComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__.MatBadgeModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxDateBoxModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_5__.DirectiveModule]
        });
      })();

      /***/
    })
  }]);
})();
//# sourceMappingURL=src_app_modules_repair_outbound_outbound_module_ts-es5.js.map