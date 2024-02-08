"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_claim_estimate_estimate_module_ts"],{

/***/ 58032:
/*!************************************************************************!*\
  !*** ./src/app/dialogs/estimate-decline/estimate-decline.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimateDeclineComponent": () => (/* binding */ EstimateDeclineComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);









class EstimateDeclineComponent {
  /**
   * constructor
   * @param dialogRef
   * @param data
   * @param changeDedectionRef
   */
  constructor(monitorService, data, dialogRef, commonService) {
    this.monitorService = monitorService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.commonService = commonService;
    this.notesModel = {
      placeHolder: 'Notes',
      label: 'Notes',
      name: 'notes',
      value: '',
      type: 'textarea',
      maxLength: 100
    };
  }
  /**
   * handle close
   */
  continue() {
    this.monitorService.logEvent('continue', ['EstimateDeclineComponent', 'addenda-repair']);
    this.dialogRef.close({
      'comment': this.notesModel.value
    });
  }
  /**
   * ng on init
   */
  ngOnInit() {
    this.sendButton = {
      label: 'send',
      type: 'disabled',
      onclick: this.continue.bind(this)
    };
    this.cancelButton = {
      label: 'cancel',
      type: 'outline-danger',
      onclick: this.close.bind(this)
    };
  }
  /**
   * close
   */
  close() {
    this.dialogRef.close();
  }
  /**
   * on form update
   * @param output o
   */
  onFormUpdate(output) {
    this.notesModel.value = output.value;
    if (this.notesModel.value.toString().trim()) {
      this.sendButton = {
        ...this.sendButton,
        type: 'primary'
      };
    } else {
      this.sendButton = {
        ...this.sendButton,
        type: 'disabled'
      };
    }
  }
  static #_ = this.ɵfac = function EstimateDeclineComponent_Factory(t) {
    return new (t || EstimateDeclineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EstimateDeclineComponent,
    selectors: [["app-estimate-decline"]],
    decls: 12,
    vars: 7,
    consts: [[1, "message-container"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], [1, "content"], ["tabindex", "-1", 3, "inputModel", "controlOutput"], [1, "footer", "form-data-footer"], [1, "left", 3, "buttonModel"], [1, "right", 3, "buttonModel"]],
    template: function EstimateDeclineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EstimateDeclineComponent_Template_mat_icon_click_6_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("controlOutput", function EstimateDeclineComponent_Template_chq_input_controlOutput_8_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "chq-button", 7)(11, "chq-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "decline_claim"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputModel", ctx.notesModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("buttonModel", ctx.cancelButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("buttonModel", ctx.sendButton);
      }
    },
    dependencies: [_widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_2__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__.ChqButtonComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".message-container[_ngcontent-%COMP%] {\n  padding: 30px;\n  width: 480px;\n  background-color: var(--xa-popup-light-gray);\n  display: flex;\n  flex-direction: column;\n}\n.message-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.message-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 36px !important;\n  width: 36px !important;\n  border-radius: 50%;\n  background: var(--xa-black);\n}\n.message-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  text-align: center;\n  height: 16px !important;\n  width: 16px !important;\n}\n.message-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.message-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.message-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 32px;\n}\n.message-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--xa-black);\n}\n.message-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 52px;\n}\n.message-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.message-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9lc3RpbWF0ZS1kZWNsaW5lL2VzdGltYXRlLWRlY2xpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNSO0FBQ1E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNaO0FBRVk7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUFoQjtBQUNnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDcEI7QUFDb0I7RUFDSSxXQUFBO0FBQ3hCO0FBTUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUpSO0FBS1E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUFIWjtBQU9JO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9RO0VBQ0ksaUJBQUE7QUFMWjtBQU9RO0VBQ0ksZ0JBQUE7QUFMWiIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDQ4MHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIC5jbG9zZS1pY29uIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDp2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgZmlsbDp2YXIoLS14YS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcclxuXHJcbiAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 94194:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/claim/estimate/estimate-details/estimate-details.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimateDetailsComponent": () => (/* binding */ EstimateDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_app_dialogs_estimate_decline_estimate_decline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/estimate-decline/estimate-decline.component */ 58032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_estimate_details_chq_estimate_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widgets/chq-estimate-details/chq-estimate-details.component */ 72076);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helper/directive/claim-roles.directive */ 65872);














function EstimateDetailsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("estiamte-status ", ctx_r0.estimateStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.estimateStatus, " ");
  }
}
function EstimateDetailsComponent_ng_container_22_ng_container_1_chq_dropdown_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "chq-dropdown", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function EstimateDetailsComponent_ng_container_22_ng_container_1_chq_dropdown_2_Template_chq_dropdown_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.handleSelectedOptionAskRevision($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropdownModel", ctx_r4.dropdownAskRevisionModelFilter);
  }
}
function EstimateDetailsComponent_ng_container_22_ng_container_1_chq_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EstimateDetailsComponent_ng_container_22_ng_container_1_chq_button_3_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.openDeclineModel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx_r5.rejectEstimateButtonModel);
  }
}
function EstimateDetailsComponent_ng_container_22_ng_container_1_chq_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "chq-button", 8);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx_r6.approveButtonModel);
  }
}
function EstimateDetailsComponent_ng_container_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EstimateDetailsComponent_ng_container_22_ng_container_1_Template_chq_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.editEstimate = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EstimateDetailsComponent_ng_container_22_ng_container_1_chq_dropdown_2_Template, 1, 1, "chq-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EstimateDetailsComponent_ng_container_22_ng_container_1_chq_button_3_Template, 1, 1, "chq-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, EstimateDetailsComponent_ng_container_22_ng_container_1_chq_button_4_Template, 1, 1, "chq-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx_r2.cancelEditedModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.estimateChangeList.length === ctx_r2.estimateAddRevisionList.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.showRejectedButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.showApprovedButton());
  }
}
function EstimateDetailsComponent_ng_container_22_ng_container_2_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EstimateDetailsComponent_ng_container_22_ng_container_2_chq_button_1_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.editEstimate = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx_r13.addRevisionButtonModel);
  }
}
function EstimateDetailsComponent_ng_container_22_ng_container_2_chq_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EstimateDetailsComponent_ng_container_22_ng_container_2_chq_button_2_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.openDeclineModel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx_r14.rejectEstimateButtonModel);
  }
}
function EstimateDetailsComponent_ng_container_22_ng_container_2_chq_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "chq-button", 8);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx_r15.approveButtonModel);
  }
}
function EstimateDetailsComponent_ng_container_22_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EstimateDetailsComponent_ng_container_22_ng_container_2_chq_button_1_Template, 1, 1, "chq-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EstimateDetailsComponent_ng_container_22_ng_container_2_chq_button_2_Template, 1, 1, "chq-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EstimateDetailsComponent_ng_container_22_ng_container_2_chq_button_3_Template, 1, 1, "chq-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("chqClaimRoles", "claimAssignBack");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("chqClaimRoles", "claimAssignBack");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("chqClaimRoles", "claimAssignBack");
  }
}
function EstimateDetailsComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EstimateDetailsComponent_ng_container_22_ng_container_1_Template, 5, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EstimateDetailsComponent_ng_container_22_ng_container_2_Template, 4, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.editEstimate);
  }
}
class EstimateDetailsComponent {
  /**
   *
   * @param commonService
   * @param translationService
   */
  constructor(commonService, translationService, claimService, dialog, route, router) {
    this.commonService = commonService;
    this.translationService = translationService;
    this.claimService = claimService;
    this.dialog = dialog;
    this.route = route;
    this.router = router;
    this.userDetail = null;
    this.estimateResponse = {};
    this.editEstimate = false;
    this.estimateSource = '';
    this.addRevisionButtonModel = {
      label: 'add_revision',
      type: 'outline',
      icon: 'send'
    };
    this.rejectEstimateButtonModel = {
      label: 'reject_estimate',
      type: 'outline-danger'
    };
    this.approveButtonModel = {
      label: 'approve_estimate',
      type: 'primary',
      onclick: () => this.setApproveRejectEstimate('Approved', null, false)
    };
    this.cancelEditedModel = {
      label: 'cancel',
      type: 'outline-danger'
    };
    this.estimateReportButtonModel = {
      label: 'insurance_estimate_report',
      type: 'outline'
    };
    this.estimateLogButtonModel = {
      label: 'estimate_log',
      type: 'outline',
      icon: 'viewFile',
      onclick: () => {
        this.router.navigate(['claim/claim-detail/' + this.claimId + '/estimate/estimate-log']);
      }
    };
    this.dropdownAskRevisionModelFilter = {
      options: [{
        dropdownItemIcon: 'send',
        color: 'var(xa-white) !important;',
        label: this.translationService.instant('garage')
      }, {
        dropdownItemIcon: 'email',
        color: 'var(xa-white) !important;',
        label: this.translationService.instant('email')
      }, {
        dropdownItemIcon: 'whatsapp',
        color: 'var(xa-white) !important;',
        label: this.translationService.instant('whatsapp')
      }],
      placeHolder: 'ask_for_revision',
      label: '',
      hideDropdownIcon: true,
      appearance: 'button',
      placeHolderIcon: 'send',
      name: 'option',
      displayValue: 'label',
      selectedOption: {}
    };
    this.claimId = '0';
    this.defaultRadioInputModel = {
      placeHolder: '',
      label: '',
      name: '',
      idField: '',
      value: '',
      type: 'radio',
      options: [{
        label: 'Approved',
        id: 1
      }, {
        label: 'Rejected',
        id: 2
      }]
    };
    this.subscriptions = [];
    this.fetchAPI = false;
    this.estimateAddRevisionList = [];
    this.i18n = this.commonService.geti18nInfo();
  }
  /**
    * ngOnInit
    */
  ngOnInit() {
    this.commonService.userProfileData.subscribe(res => {
      this.userDetail = res?.data;
    });
    this.route?.parent?.parent.params.subscribe(value => {
      if (value && value['id']) {
        this.claimId = value['id'];
      }
    });
    this.getClaimDetails();
  }
  /**
   * getClaimDetails
   *
   */
  getClaimDetails() {
    this.fetchAPI = true;
    this.commonService.showLoading();
    const claimDetails$ = this.claimService.getClaimDetail(this.claimId).subscribe({
      next: response => {
        this.commonService.hideLoading();
        this.claimDetails = response;
        this.getLatestEstimate();
        this.commonService.claimDetails.next(response);
        this.commonService.claimStatus.next(response.claimStatus);
      },
      error: () => {
        this.fetchAPI = false;
        this.commonService.hideLoading();
      }
    });
    this.subscriptions.push(claimDetails$);
  }
  /**
   *
   */
  getLatestEstimate() {
    this.commonService.showLoading();
    this.claimService.getLatestEstimateDetails(this.claimDetails.id).subscribe({
      next: response => {
        this.commonService.hideLoading();
        this.estimateAddRevisionList = [];
        this.estimateChangeList = response.data.estimate.estimateCharges.map(x => {
          if (x.status) {
            this.estimateAddRevisionList.push({
              'estimateChargeId': x.id,
              'status': x.status,
              'notes': x.notes
            });
          }
          x['radioInputModel'] = {
            ...this.defaultRadioInputModel,
            value: x.status
          };
          return x;
        });
        this.estimateResponse = {
          ...response.data.estimate,
          estimateCharges: this.estimateChangeList
        };
        this.estimateStatus = response.data.status;
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * back
   */
  back() {
    this.router.navigate(['claim/claim-detail/' + this.claimId + '/customer-view']);
  }
  /**
    Handles the click event on an icon.
    @param {object} output
  */
  radioButtonClicked(output) {
    if (output.$event.value === 'Rejected') {
      this.dialog.open(src_app_dialogs_estimate_decline_estimate_decline_component__WEBPACK_IMPORTED_MODULE_0__.EstimateDeclineComponent, {
        data: {
          type: 'askRevision'
        },
        height: 'auto',
        panelClass: 'operation-panel',
        disableClose: true,
        autoFocus: false
      }).afterClosed().subscribe({
        next: response => {
          if (response) {
            this.estimateAddRevisionList = this.estimateAddRevisionList.filter(x => x['estimateChargeId'] !== output.row.id);
            this.estimateAddRevisionList.push({
              'estimateChargeId': output.row.id,
              'status': 'Rejected',
              'notes': response.comment
            });
            output.row = {
              ...output.row,
              notes: response.comment,
              status: 'Rejected',
              radioInputModel: {
                ...this.defaultRadioInputModel,
                value: 'Rejected'
              }
            };
          } else {
            this.estimateAddRevisionList = this.estimateAddRevisionList.filter(x => x['estimateChargeId'] !== output.row.id);
            output.row = {
              ...output.row,
              notes: null,
              status: null,
              radioInputModel: {
                ...this.defaultRadioInputModel,
                value: null
              }
            };
          }
          this.updateEstimateCharge(output);
        }
      });
    } else {
      this.estimateAddRevisionList = this.estimateAddRevisionList.filter(x => x['estimateChargeId'] !== output.row.id);
      this.estimateAddRevisionList.push({
        'estimateChargeId': output.row.id,
        'status': 'Approved',
        'notes': null
      });
      output.row = {
        ...output.row,
        notes: null,
        status: 'Approved',
        radioInputModel: {
          ...this.defaultRadioInputModel,
          value: 'Approved'
        }
      };
      this.updateEstimateCharge(output);
    }
  }
  /**
   * updateEstimateCharge()
  */
  updateEstimateCharge(output) {
    this.estimateChangeList = this.estimateChangeList.map(x => {
      if (x.id === output.row.id) {
        x = output.row;
      }
      return x;
    });
    this.estimateResponse = {
      ...this.estimateResponse,
      estimateCharges: this.estimateChangeList
    };
  }
  /**
   * handleSelectedOptionAskRevision
   * @param{ $event }
   *
   */
  handleSelectedOptionAskRevision($event) {
    if ($event.value.dropdownItemIcon === 'send') {
      this.commonService.openConfirmYesNoDialogBig('', 'send_estimate_revision_message_garage').afterClosed().subscribe(data => {
        if (data) {
          this.editEstimateRevision();
        }
      });
    } else {
      // send ask for revision notification 
    }
  }
  /**
   * openDeclineModel
   *
   */
  openDeclineModel() {
    this.dialog.open(src_app_dialogs_estimate_decline_estimate_decline_component__WEBPACK_IMPORTED_MODULE_0__.EstimateDeclineComponent, {
      data: {
        type: 'Rejected'
      },
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    }).afterClosed().subscribe({
      next: response => {
        if (response) {
          this.commonService.openConfirmYesNoDialogBig('', 'reject_garage_confirmation_message', '', 'yes', 'assigned_another_garage_message').afterClosed().subscribe(data => {
            if (data === false) {
              this.setApproveRejectEstimate('Rejected', response.comment, true);
            } else if (data) {
              this.setApproveRejectEstimate('Rejected', response.comment, false);
            }
          });
        }
      }
    });
  }
  /**
   * setApproveRejectEstimate
   *
   */
  setApproveRejectEstimate(status, comment, isUnassign) {
    this.commonService.showLoading();
    this.claimService.approveRejectEstimate(this.claimDetails.id, {
      status: status,
      reason: comment,
      isReassigned: isUnassign,
      domainId: this.claimDetails.domainId
    }).subscribe({
      next: () => {
        this.commonService.hideLoading();
        this.estimateStatus = status;
        if (status === 'Rejected') {
          if (isUnassign) {
            this.commonService.showLoading();
            this.claimService.updateClaimStatus(this.claimDetails.claimGuid, 'GarageAssignmentRequestedRejected').subscribe({
              next: () => {
                this.commonService.hideLoading();
                this.router.navigate(['claim/claim-detail/' + this.claimId + '/garages']);
              },
              error: () => this.commonService.hideLoading()
            });
          }
        }
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * editEstimateRevision
   *
   */
  editEstimateRevision() {
    this.commonService.showLoading();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(this.claimService.editEstimateAddRevision(this.claimDetails.id, {
      domainId: this.claimDetails.domainId,
      revisions: this.estimateAddRevisionList
    })).then(response => {
      this.commonService.hideLoading();
      this.getLatestEstimate();
      this.editEstimate = false;
      this.commonService.showInfoToast(1000, response.data);
    }).catch(() => {
      this.commonService.hideLoading();
    });
  }
  /**
   * showApprovedButton
   */
  showApprovedButton() {
    let isApproved = true;
    this.estimateChangeList.forEach(x => {
      if (x.status !== 'Approved') {
        isApproved = false;
      }
    });
    return isApproved;
  }
  /**
   * showApprovedButton
   */
  showRejectedButton() {
    let isRejected = true;
    this.estimateChangeList.forEach(x => {
      if (x.status !== 'Rejected') {
        isRejected = false;
      }
    });
    return isRejected;
  }
  /**
   * on destroy
   */
  ngOnDestroy() {
    if (this.subscriptions) this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  static #_ = this.ɵfac = function EstimateDetailsComponent_Factory(t) {
    return new (t || EstimateDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_2__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: EstimateDetailsComponent,
    selectors: [["app-estimate-details"]],
    decls: 23,
    vars: 15,
    consts: [[1, "page-container"], [1, "header-estimate"], [1, "back-wrapper", "row"], [3, "svgIcon", "click"], [1, "estimate-header", "fx-row", "align-center"], [1, "header-label"], [1, "header-toolbar"], [4, "ngIf"], [3, "buttonModel"], [1, "estimate-container"], ["serviceType", "claim", 3, "estimateResponse", "editEstimate", "estimateSource", "i18n", "radioButtonClicked"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png", "alt", ""], [1, "footer-button-wrapper", "show-md"], [3, "buttonModel", "click"], [3, "dropdownModel", "selected", 4, "ngIf"], [3, "buttonModel", "click", 4, "ngIf"], [3, "buttonModel", 4, "ngIf"], [3, "dropdownModel", "selected"], [3, "buttonModel", "click", 4, "chqClaimRoles"], [3, "buttonModel", 4, "chqClaimRoles"]],
    template: function EstimateDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EstimateDetailsComponent_Template_mat_icon_click_3_listener() {
          return ctx.back();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EstimateDetailsComponent_ng_container_12_Template, 3, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "chq-button", 8)(14, "chq-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9)(16, "chq-estimate-details", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("radioButtonClicked", function EstimateDetailsComponent_Template_chq_estimate_details_radioButtonClicked_16_listener($event) {
          return ctx.radioButtonClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, EstimateDetailsComponent_ng_container_22_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "left-arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 11, "back"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 13, "estimate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.estimateStatus !== "Pending Approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx.estimateLogButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonModel", ctx.estimateReportButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("estimateResponse", ctx.estimateResponse)("editEstimate", ctx.editEstimate)("estimateSource", ctx.estimateSource)("i18n", ctx.i18n);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.estimateStatus === "Pending Approval");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__.ChqButtonComponent, _widgets_chq_estimate_details_chq_estimate_details_component__WEBPACK_IMPORTED_MODULE_5__.ChqEstimateDetailsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_6__.ClaimRolesDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".page-container[_ngcontent-%COMP%] {\n  width: calc(100% - 14px);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  height: 112px;\n  z-index: 9;\n  background: var(--xa-popup-light-gray);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .back-wrapper[_ngcontent-%COMP%] {\n  padding: 25px 2px 10px 40px;\n  border-radius: 8px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%] {\n  padding: 0px 35px;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .estiamte-status[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  font-weight: 500;\n  height: 15px;\n  border-radius: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  min-width: 75px;\n  text-align: center;\n  font-size: 12px !important;\n  line-height: 15px !important;\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .Approved[_ngcontent-%COMP%] {\n  background-color: var(--xa-approve);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .Rejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .RepairInProgress[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .RepairInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .Invoiced[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .invoiced[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .readytoinvoice[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .ReadytoInvoice[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .ReadyToInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-ready-to-invoice);\n  color: var(--xa-black);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .closed[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .Closed[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .Completed[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .Complete[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%]   .header-toolbar[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-header);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.82) !important;\n  border: 1px solid var(--xa-form-border);\n  border-radius: 10px;\n  padding: 30px 25px;\n  margin-left: calc(6px + 1.5vw);\n  margin-right: calc(5px + 1.5vw);\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]     .estimate-label {\n  display: none;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]     chq-estimate-details .estimate-main-container .estimate-details-block .table-parent .icon-wrapper   chq-input .input-wrapper   .radio .radio-option .Approved {\n  color: var(--xa-repair-header) !important;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]     chq-estimate-details .estimate-main-container .estimate-details-block .table-parent .icon-wrapper   chq-input .input-wrapper   .radio .radio-option .Rejected {\n  color: var(--xa-red) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9lc3RpbWF0ZS9lc3RpbWF0ZS1kZXRhaWxzL2VzdGltYXRlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBQ1I7QUFDUTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ1o7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7QUFBWjtBQUVZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQWhCO0FBR1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRGhCO0FBR2dCO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFEcEI7QUFJZ0I7RUFDSSxtQ0FBQTtFQUNBLDZCQUFBO0FBRnBCO0FBS2dCO0VBQ0ksK0JBQUE7RUFDQSxzQkFBQTtBQUhwQjtBQU1nQjs7RUFFSSw0Q0FBQTtFQUNBLDZCQUFBO0FBSnBCO0FBT2dCOztFQUVJLHlDQUFBO0VBQ0Esc0JBQUE7QUFMcEI7QUFRZ0I7OztFQUdJLDRDQUFBO0VBQ0Esc0JBQUE7QUFOcEI7QUFTZ0I7Ozs7RUFJSSxnQ0FBQTtFQUNBLHNCQUFBO0FBUHBCO0FBVWdCOztFQUVJLHlDQUFBO0VBQ0Esc0JBQUE7QUFScEI7QUFjSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFaUjtBQWNRO0VBQ0ksYUFBQTtBQVpaO0FBMEI0QztFQUNJLHlDQUFBO0FBeEJoRDtBQTBCNEM7RUFDSSwrQkFBQTtBQXhCaEQiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0cHgpO1xyXG5cclxuICAgIC5oZWFkZXItZXN0aW1hdGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuXHJcbiAgICAgICAgLmJhY2std3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMnB4IDEwcHggNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5lc3RpbWF0ZS1oZWFkZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMzVweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAuaGVhZGVyLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdG9vbGJhciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZXN0aWFtdGUtc3RhdHVze1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5BcHByb3ZlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYXBwcm92ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5SZWplY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5SZXBhaXJJblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgLlJlcGFpckluaXRpYXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcGVuZGluZy1hcHByb3ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLkludm9pY2VkLFxyXG4gICAgICAgICAgICAgICAgLmludm9pY2VkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1pbnZvaWNlLXJlYWR5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZWFkeXRvaW52b2ljZSxcclxuICAgICAgICAgICAgICAgIC5SZWFkeXRvSW52b2ljZSxcclxuICAgICAgICAgICAgICAgIC5SZWFkeVRvSW52b2ljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVhZHktdG8taW52b2ljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VkLFxyXG4gICAgICAgICAgICAgICAgLkNsb3NlZCxcclxuICAgICAgICAgICAgICAgIC5Db21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICAuY29tcGxldGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5Db21wbGV0ZSxcclxuICAgICAgICAgICAgICAgIC5jb21wbGV0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVwYWlyLWhlYWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmVzdGltYXRlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWZvcm0tYm9yZGVyKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg2cHggKyAxLjV2dyk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDVweCArIDEuNXZ3KTtcclxuICAgIFxyXG4gICAgICAgIDo6bmctZGVlcCAuZXN0aW1hdGUtbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Om5nLWRlZXAgY2hxLWVzdGltYXRlLWRldGFpbHMge1xyXG4gICAgICAgICAgICAuZXN0aW1hdGUtbWFpbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgLmVzdGltYXRlLWRldGFpbHMtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIC50YWJsZS1wYXJlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCBjaHEtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5yYWRpbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYWRpby1vcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQXBwcm92ZWQgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXJlcGFpci1oZWFkZXIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWplY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1yZWQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 67266:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/claim/estimate/estimate-table/estimate-table.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimateTableComponent": () => (/* binding */ EstimateTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);







function EstimateTableComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, "status")));
  }
}
function EstimateTableComponent_tbody_32_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 21)(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EstimateTableComponent_tbody_32_tr_1_Template_td_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const estimate_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.openEstimate(estimate_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const estimate_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](estimate_r4.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 6, estimate_r4.createdDate, "M/d/yy - h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](estimate_r4.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](estimate_r4.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "viewFile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 9, "view_estimate"), " ");
  }
}
function EstimateTableComponent_tbody_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EstimateTableComponent_tbody_32_tr_1_Template, 14, 11, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.estimateData);
  }
}
function EstimateTableComponent_tbody_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, "no_estimate_available"));
  }
}
class EstimateTableComponent {
  /**
   *
   * @param commonService
   * @param translateService
   */
  constructor(route, commonService, translateService, claimService, router) {
    this.route = route;
    this.commonService = commonService;
    this.translateService = translateService;
    this.claimService = claimService;
    this.router = router;
    this.estimateData = [];
    this.claimId = '0';
    this.subscriptions = [];
    this.fetchAPI = false;
    this.i18n = this.commonService.geti18nInfo();
  }
  /**
    * ngOnInit
    */
  ngOnInit() {
    this.route?.parent?.parent.params.subscribe(value => {
      if (value && value['id']) {
        this.claimId = value['id'];
        this.getClaimDetails();
      }
    });
  }
  /**
   * getClaimDetails
   *
   */
  getClaimDetails() {
    this.fetchAPI = true;
    this.commonService.showLoading();
    const claimDetails$ = this.claimService.getClaimDetail(this.claimId).subscribe({
      next: response => {
        this.commonService.hideLoading();
        this.claimDetails = response;
        this.getEstimateLog();
        this.commonService.claimDetails.next(response);
        this.commonService.claimStatus.next(response.claimStatus);
      },
      error: () => {
        this.fetchAPI = false;
        this.commonService.hideLoading();
      }
    });
    this.subscriptions.push(claimDetails$);
  }
  /**
   * back
   */
  back() {
    this.router.navigate(['claim/claim-detail/' + this.claimId + '/estimate/']);
  }
  /**
   * getEstimateLog
   *
   */
  getEstimateLog() {
    this.fetchAPI = true;
    this.commonService.showLoading();
    const subs$ = this.claimService.getEstimateLog(this.claimDetails.id).subscribe({
      next: response => {
        this.commonService.hideLoading();
        this.fetchAPI = false;
        this.estimateData = response.data;
      },
      error: () => {
        this.fetchAPI = false;
        this.commonService.hideLoading();
      }
    });
    this.subscriptions.push(subs$);
  }
  /**
   *
   * @param estimate
   */
  openEstimate(estimate) {
    window.open(estimate.blobUrl, '_blank');
  }
  /**
   * on destroy
   */
  ngOnDestroy() {
    if (this.subscriptions) this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  static #_ = this.ɵfac = function EstimateTableComponent_Factory(t) {
    return new (t || EstimateTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_1__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EstimateTableComponent,
    selectors: [["app-estimate-table"]],
    decls: 38,
    vars: 25,
    consts: [[1, "page-container"], [1, "header-estimate"], [1, "back-wrapper", "row"], [3, "svgIcon", "click"], [1, "estimate-header"], [1, "estimate-container"], [1, "toolbar-container"], [1, "toolbar-wrapper", "row"], ["class", "part-status col-6", 4, "ngIf"], [1, "table-container"], [1, "main-table"], [1, "header-item"], ["width", "15%", 1, "header-item"], [4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png", "alt", ""], [1, "part-status", "col-6"], [1, "part-status-label"], ["class", "estimate-data-row", 4, "ngFor", "ngForOf"], [1, "estimate-data-row"], [1, "data-item"], [1, "data-item", "align-center", "flex", "link", 3, "click"], ["color", "black", 3, "svgIcon"], ["colspan", "7", 1, "no-parts"]],
    template: function EstimateTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EstimateTableComponent_Template_mat_icon_click_3_listener() {
          return ctx.back();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EstimateTableComponent_div_13_Template, 5, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "table", 10)(16, "thead")(17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, EstimateTableComponent_tbody_32_Template, 2, 1, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, EstimateTableComponent_tbody_33_Template, 5, 3, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 14)(35, "div", 15)(36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "left-arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 11, "back_estimate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 13, "estimate_log"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.estimateData == null ? null : ctx.estimateData.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 15, "username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 17, "date_and_time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 19, "version"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 21, "source"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 23, "action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.estimateData == null ? null : ctx.estimateData.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.estimateData == null ? null : ctx.estimateData.length) === 0 && !ctx.fetchAPI);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".page-container[_ngcontent-%COMP%] {\n  width: calc(100% - 14px);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  height: 112px;\n  z-index: 9;\n  background: var(--xa-popup-light-gray);\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .back-wrapper[_ngcontent-%COMP%] {\n  padding: 25px 2px 10px 40px;\n  border-radius: 8px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .header-estimate[_ngcontent-%COMP%]   .estimate-header[_ngcontent-%COMP%] {\n  padding: 0px 35px;\n  font-weight: 700;\n  font-size: 20px;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.82) !important;\n  border: 1px solid var(--xa-form-border);\n  border-radius: 10px;\n  padding: 30px 25px;\n  margin-left: calc(6px + 1.5vw);\n  margin-right: calc(5px + 1.5vw);\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  overflow: scroll;\n  margin-top: 30px;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--xa-light-gray);\n  background: white;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--xa-black);\n  text-align: left;\n  padding: 10px;\n  gap: 10px;\n  height: 34px;\n  -moz-appearance: none;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: rgba(26, 34, 51, 0.1);\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td.link[_ngcontent-%COMP%]:hover, .page-container[_ngcontent-%COMP%]   .estimate-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9lc3RpbWF0ZS9lc3RpbWF0ZS10YWJsZS9lc3RpbWF0ZS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUFDUjtBQUNRO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDWjtBQUVRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBWjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdEQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUZSO0FBSVE7RUFDSSxhQUFBO0FBRlo7QUFLUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhaO0FBS1k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFIaEI7QUFLZ0I7O0VBRUksNkNBQUE7RUFDQSxpQkFBQTtBQUhwQjtBQUtvQjs7OztFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUR4QjtBQUlvQjs7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0FBRHhCO0FBSW9COztFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUR4QjtBQUtvQjs7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUFGeEIiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0cHgpOyAgICBcclxuXHJcbiAgICAuaGVhZGVyLWVzdGltYXRlIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDExMnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XHJcblxyXG4gICAgICAgIC5iYWNrLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDJweCAxMHB4IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZXN0aW1hdGUtaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDM1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lc3RpbWF0ZS1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MikgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1mb3JtLWJvcmRlcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNnB4ICsgMS41dncpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyg1cHggKyAxLjV2dyk7XHJcbiAgICBcclxuICAgICAgICAudG9vbGJhci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGhlYWQsXHJcbiAgICAgICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNiwgMzQsIDUxLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGQubGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 97573:
/*!***********************************************************!*\
  !*** ./src/app/modules/claim/estimate/estimate.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimateModule": () => (/* binding */ EstimateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _claim_estimate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-estimate.component */ 59532);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/error-page/error.module */ 88784);
/* harmony import */ var _estimate_table_estimate_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estimate-table/estimate-table.component */ 67266);
/* harmony import */ var _estimate_details_estimate_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimate-details/estimate-details.component */ 94194);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var src_app_dialogs_estimate_decline_estimate_decline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialogs/estimate-decline/estimate-decline.component */ 58032);
/* harmony import */ var src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helper/directive/directive.module */ 67798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);















const claimEstimateRoutes = [{
  path: '',
  component: _estimate_details_estimate_details_component__WEBPACK_IMPORTED_MODULE_5__.EstimateDetailsComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__.VersionControlResolver
  }
}, {
  path: 'estimate-log',
  component: _estimate_table_estimate_table_component__WEBPACK_IMPORTED_MODULE_4__.EstimateTableComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__.VersionControlResolver
  }
}];
class EstimateModule {
  static #_ = this.ɵfac = function EstimateModule_Factory(t) {
    return new (t || EstimateModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: EstimateModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(claimEstimateRoutes), src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_3__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EstimateModule, {
    declarations: [_claim_estimate_component__WEBPACK_IMPORTED_MODULE_0__.ClaimEstimateComponent, _estimate_table_estimate_table_component__WEBPACK_IMPORTED_MODULE_4__.EstimateTableComponent, _estimate_details_estimate_details_component__WEBPACK_IMPORTED_MODULE_5__.EstimateDetailsComponent, src_app_dialogs_estimate_decline_estimate_decline_component__WEBPACK_IMPORTED_MODULE_7__.EstimateDeclineComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_3__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_claim_estimate_estimate_module_ts.js.map