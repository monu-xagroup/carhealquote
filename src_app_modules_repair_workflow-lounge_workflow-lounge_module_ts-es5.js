(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_workflow-lounge_workflow-lounge_module_ts"], {
    /***/76252: (
    /*!**************************************************************************!*\
      !*** ./src/app/modules/repair/workflow-lounge/workflow-lounge.module.ts ***!
      \**************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"WorkflowLoungeModule": function WorkflowLoungeModule() {
          return /* binding */_WorkflowLoungeModule;
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */54364);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/forms */1707);
      /* harmony import */
      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/material/badge */90330);
      /* harmony import */
      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/material/card */42118);
      /* harmony import */
      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/material/datepicker */42937);
      /* harmony import */
      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/material/icon */52529);
      /* harmony import */
      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/material/sidenav */86608);
      /* harmony import */
      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @angular/material/tooltip */50298);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/router */71258);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @ngx-translate/core */70325);
      /* harmony import */
      var src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/app/helper/directive.module */20363);
      /* harmony import */
      var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/resolvers/versionControl.resolver */74743);
      /* harmony import */
      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/shared.module */44466);
      /* harmony import */
      var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/widgets/chq-widgets.module */85510);
      /* harmony import */
      var _workflow_lounge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./workflow-lounge.component */31224);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/core */2316);
      var workflowRoutes = [{
        path: '',
        component: _workflow_lounge_component__WEBPACK_IMPORTED_MODULE_4__.WorkflowLoungeComponent,
        resolve: {
          version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_1__.VersionControlResolver
        }
      }];
      var _WorkflowLoungeModule = /*#__PURE__*/_createClass(function _WorkflowLoungeModule() {
        _classCallCheck(this, _WorkflowLoungeModule);
      });
      _WorkflowLoungeModule.ɵfac = function WorkflowLoungeModule_Factory(t) {
        return new (t || _WorkflowLoungeModule)();
      };
      _WorkflowLoungeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _WorkflowLoungeModule
      });
      _WorkflowLoungeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(workflowRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_WorkflowLoungeModule, {
          declarations: [_workflow_lounge_component__WEBPACK_IMPORTED_MODULE_4__.WorkflowLoungeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]
        });
      })();

      /***/
    })
  }]);
})();
//# sourceMappingURL=src_app_modules_repair_workflow-lounge_workflow-lounge_module_ts-es5.js.map