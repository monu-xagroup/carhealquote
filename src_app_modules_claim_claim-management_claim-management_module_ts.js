"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_claim_claim-management_claim-management_module_ts"],{

/***/ 13605:
/*!****************************************************************************************************!*\
  !*** ./src/app/dialogs/customer-policy-details-dialog/customer-policy-details-dialog.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPolicyDetailsDialogComponent": () => (/* binding */ CustomerPolicyDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);







class CustomerPolicyDetailsDialogComponent {
  /**
   * constructor
   * @param dialogRef
   * @param data
   * @param changeDedectionRef
   */
  constructor(data, dialogRef, monitorService, commonService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.monitorService = monitorService;
    this.commonService = commonService;
    this.yesButton = {
      label: 'yes',
      type: 'primary',
      onclick: this.handleYes.bind(this)
    };
    this.noButton = {
      label: 'no',
      type: 'outline',
      onclick: this.handleNo.bind(this)
    };
  }
  /**
   * handle clicked on No
   */
  handleNo() {
    this.monitorService.logEvent('handleNo', ['CustomerPolicyDetailsDialogComponent', 'addenda-claim']);
    this.close();
  }
  /**
   * handle clicked on Yes
   */
  handleYes() {
    this.monitorService.logEvent('handleYes', ['CustomerPolicyDetailsDialogComponent', 'addenda-claim']);
    this.dialogRef.close(true);
  }
  /**
   * close
   */
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function CustomerPolicyDetailsDialogComponent_Factory(t) {
    return new (t || CustomerPolicyDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CustomerPolicyDetailsDialogComponent,
    selectors: [["app-customer-policy-details-dialog"]],
    decls: 42,
    vars: 9,
    consts: [[1, "customer-policy-details-container"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], [1, "main-container"], [1, "row"], [1, "col-4", "field-wrapper"], [1, "custom-label"], [1, "input-label"], [1, "row", "pt-3"], [1, "footer", "form-data-footer"], [1, "left", 3, "buttonModel"], [1, "right", 3, "buttonModel"]],
    template: function CustomerPolicyDetailsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Is this the customer you are looking for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerPolicyDetailsDialogComponent_Template_mat_icon_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "CUSTOMER NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "POLICY NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6)(19, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "CHASIS NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9)(24, "div", 6)(25, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "PLATE NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 6)(30, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "MAKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 6)(35, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "MODEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "chq-button", 11)(41, "chq-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.policyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.chasisNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.plateNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.make);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonModel", ctx.noButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonModel", ctx.yesButton);
      }
    },
    dependencies: [_widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__.ChqButtonComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    styles: [".customer-policy-details-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 30px;\n  background-color: var(--xa-popup-light-gray);\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 15px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 36px !important;\n  width: 36px !important;\n  border-radius: 50%;\n  background: var(--xa-black);\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  text-align: center;\n  height: 16px !important;\n  width: 16px !important;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  height: 200px;\n  padding: 16px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .custom-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 12px;\n  text-align: left;\n  color: rgba(26, 34, 51, 0.6980392157);\n  padding: 0px 3px 0px 3px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .field-wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 0px 10px 0px 3px;\n  gap: 10px;\n  margin-top: 15.23px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .pt-3[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 52px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9jdXN0b21lci1wb2xpY3ktZGV0YWlscy1kaWFsb2cvY3VzdG9tZXItcG9saWN5LWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsU0FBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRVE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUFaO0FBRVk7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUFoQjtBQUVnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFBcEI7QUFFb0I7RUFDSSxXQUFBO0FBQXhCO0FBT0k7RUFFSSxhQUFBO0VBQ0EsYUFBQTtBQU5SO0FBU1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFQWjtBQVNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7QUFQaEI7QUFVWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBUmhCO0FBYUk7RUFDSSxpQkFBQTtBQVhSO0FBY0k7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVpSO0FBY1E7RUFDSSxpQkFBQTtBQVpaO0FBZVE7RUFDSSxnQkFBQTtBQWJaIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWVyLXBvbGljeS1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8vIHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jbG9zZS1pY29uIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xyXG5cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0teGEtd2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICAvLyB3aWR0aDogNzU5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIC8vIGdhcDogMzRweDtcclxuXHJcbiAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgLmN1c3RvbS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxQTIyMzNCMjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHggMHB4IDNweFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5wdXQtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggM3B4O1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUuMjNweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wdC0zIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcclxuXHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 80826:
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/settle-claim-dialog/settle-claim-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettleClaimDialogComponent": () => (/* binding */ SettleClaimDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_rich_text_editor_chq_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/chq-rich-text-editor/chq-rich-text-editor.component */ 19245);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);










class SettleClaimDialogComponent {
  /**
   * constructor
   * @param dialogRef
   * @param data
   * @param changeDedectionRef
   */
  constructor(data, dialogRef, monitorService, commonService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.monitorService = monitorService;
    this.commonService = commonService;
    this.isUpdate = false;
    this.subjectInputModel = {
      placeHolder: 'subject',
      label: 'subject',
      name: 'subject',
      value: '',
      type: 'text'
    };
    this.messageModel = {
      placeHolder: 'message',
      label: 'message',
      name: 'message',
      value: '',
      type: 'textarea',
      maxLength: 100
    };
    this.notes = '';
  }
  /**
   * handle close
   */
  continue() {
    this.monitorService.logEvent('continue', ['SettleClaimDialogComponent', 'addenda-repair']);
    this.dialogRef.close({
      'comment': this.messageModel.value
    });
  }
  /**
   * on form update
   * @param output o
   */
  onFormUpdate(output) {
    this.messageModel.value = output.value;
    // if(this.messageModel.value.toString().trim()){
    //   this.sendButton = { ...this.sendButton, type: 'primary' };
    // }else{
    //   this.sendButton = { ...this.sendButton, type: 'disabled' };
    // }
  }
  /**
   * close
   */
  close() {
    this.dialogRef.close();
  }
  /**
   * ng on init
   */
  ngOnInit() {
    this.monitorService.logEvent('ngOnInit', ['SettleClaimDialogComponent', 'addenda-repair']);
    this.sendButton = {
      label: 'send',
      type: 'disabled',
      onclick: this.continue.bind(this),
      icon: 'send'
    };
    this.attachmentButton = {
      label: 'attachment',
      type: 'primary',
      onclick: this.continue.bind(this),
      icon: 'attachment'
    };
    this.messageModel = {
      ...this.messageModel,
      value: this.data?.notes,
      disabled: this.data?.hideUpdate
    };
  }
  static #_ = this.ɵfac = function SettleClaimDialogComponent_Factory(t) {
    return new (t || SettleClaimDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SettleClaimDialogComponent,
    selectors: [["app-settle-claim-dialog"]],
    decls: 19,
    vars: 15,
    consts: [[1, "settle-claim-container"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], [1, "content", "gap-23"], [1, "sub-title"], [1, "input-label", 3, "inputModel", "controlOutput"], [1, "input-label"], [3, "height", "initialValue", "maxCharacterLimit", "currentValue"], [1, "footer", "form-data-footer"], [1, "right", 3, "buttonModel"]],
    template: function SettleClaimDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2)(6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SettleClaimDialogComponent_Template_mat_icon_click_6_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "chq-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function SettleClaimDialogComponent_Template_chq_input_controlOutput_11_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "chq-rich-text-editor", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("currentValue", function SettleClaimDialogComponent_Template_chq_rich_text_editor_currentValue_15_listener($event) {
          return ctx.notes = $event.value;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "chq-button", 10)(18, "chq-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 9, "settle_claim"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 11, "header_message_for_settle_claim"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.subjectInputModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 13, "message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("height", 200)("maxCharacterLimit", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.attachmentButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.sendButton);
      }
    },
    dependencies: [_widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_2__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__.ChqButtonComponent, _widgets_chq_rich_text_editor_chq_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_4__.ChqRichTextEditorComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: [".settle-claim-container[_ngcontent-%COMP%] {\n  padding: 30px;\n  width: 480px;\n  background-color: var(--xa-popup-light-gray);\n  display: flex;\n  flex-direction: column;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 36px !important;\n  width: 36px !important;\n  border-radius: 50%;\n  background: var(--xa-black);\n}\n.settle-claim-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  text-align: center;\n  height: 16px !important;\n  width: 16px !important;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 32px;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--xa-black);\n}\n.settle-claim-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  color: #000000;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .gap-23[_ngcontent-%COMP%] {\n  gap: 23px;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 52px;\n}\n.settle-claim-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9zZXR0bGUtY2xhaW0tZGlhbG9nL3NldHRsZS1jbGFpbS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNSO0FBQ1E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNaO0FBQ1k7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNoQjtBQUNnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDcEI7QUFDb0I7RUFDSSxXQUFBO0FBQ3hCO0FBTUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUpSO0FBTVE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUFKWjtBQU9RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTFo7QUFTSTtFQUNJLFNBQUE7QUFQUjtBQVVJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVVRO0VBQ0ksZ0JBQUE7QUFSWiIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0bGUtY2xhaW0tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogNDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAuY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJsYWNrKTtcclxuXHJcbiAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLXhhLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nYXAtMjMge1xyXG4gICAgICAgIGdhcDogMjNweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 15430:
/*!***********************************************************************!*\
  !*** ./src/app/guards/claim-component-guard/claim-component.guard.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimComponentGuard": () => (/* binding */ ClaimComponentGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);





class ClaimComponentGuard {
  /**
   * constructor
   * @param claimService
   * @param router
   */
  constructor(claimService, commonService, router, route) {
    this.claimService = claimService;
    this.commonService = commonService;
    this.router = router;
    this.route = route;
    this.claimGuid = '';
    //this.claimGuid = this.route.parent?.snapshot.paramMap.get('id');
  }
  /**
   *
   * @param route
   * @param state
   * @returns
   */
  canActivate(route, state) {
    const url = state.url;
    this.claimGuid = route.parent?.params['id'];
    return this.checkStatus(url);
  }
  /**
   * check status
   * @param url
   * @returns
   */
  checkStatus(url) {
    if (!this.claimGuid || this.claimGuid == '0') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true); // No claimGuid, allow navigation
    }
    // Call your web API to fetch the status
    return this.claimService.getClaimDetail(this.claimGuid).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response) {
        this.commonService.claimDetails.next(response);
        return true; // Allow navigation
      }

      return false; // Something went wrong, disallow navigation
    }));
  }
  static #_ = this.ɵfac = function ClaimComponentGuard_Factory(t) {
    return new (t || ClaimComponentGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_0__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ClaimComponentGuard,
    factory: ClaimComponentGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4028:
/*!*************************************************************!*\
  !*** ./src/app/guards/navigation-guard/navigation-guard.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationGuard": () => (/* binding */ NavigationGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NavigationGuard {
  /**
   * Angular calls it when navigating away from the backFromAboutPage
   * Notice it is asynvhronous in our case because we are waiting for the user
   * to confirm or deny
   */
  canDeactivate(component) {
    return component.canDeactivate ? component.canDeactivate() : true; // Allow Navigation;
  }
  static #_ = this.ɵfac = function NavigationGuard_Factory(t) {
    return new (t || NavigationGuard)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NavigationGuard,
    factory: NavigationGuard.ɵfac
  });
}

/***/ }),

/***/ 17542:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/claim/claim-management/claim-documents/claim-documents.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimDocumentsComponent": () => (/* binding */ ClaimDocumentsComponent)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/quote/chq-new-cases/chq-new-customer/chq-new-customer-form-data-helper */ 83853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_media_collection_media_collection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/media-collection/media-collection.service */ 61476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widgets/chq-images-uploader/chq-images-uploader.component */ 39912);











const _c0 = ["imageUploaders"];
function ClaimDocumentsComponent_chq_images_uploader_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "chq-images-uploader", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cardSelection", function ClaimDocumentsComponent_chq_images_uploader_1_Template_chq_images_uploader_cardSelection_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.setObservable($event));
    })("stepSkipped", function ClaimDocumentsComponent_chq_images_uploader_1_Template_chq_images_uploader_stepSkipped_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.stepSkipped());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fileUploaderService", ctx_r0.currentObservable)("footerOptions", ctx_r0.footer)("imageStatusSteps", ctx_r0.imageStatusSteps)("header", ctx_r0.header);
  }
}
function ClaimDocumentsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " No Content Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 10)(7, "div", 10)(8, "div", 10)(9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ClaimDocumentsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
class ClaimDocumentsComponent {
  /**
  * constructor
  * @param router
  */
  constructor(commonService, router, route, monitorService, cd, claimService, mediaCollectionService) {
    this.commonService = commonService;
    this.router = router;
    this.route = route;
    this.monitorService = monitorService;
    this.cd = cd;
    this.claimService = claimService;
    this.mediaCollectionService = mediaCollectionService;
    this.imageStatusSteps = [];
    this.allowExtension = ['jpg', 'jpeg', 'png', 'pdf'];
    this.skipButtonModel = {
      label: 'Skip',
      type: 'primary'
    };
    this.footer = {
      text: 'Next add photos',
      icon: 'review',
      route: 'claim/photos',
      currentStatus: '',
      status: 'UploadDocuments',
      claimId: '',
      isClaimModule: true
    };
    this.header = {
      title: 'Upload Document',
      step: 0,
      description: '',
      stepName: '',
      isClaimModule: true,
      isHeaderOnly: true,
      isReview: true
    };
    this.documentSizeLimit = 5242880;
    this.noDocumentData = false;
    this.claimId = '';
    this.currentClaimStatus = '';
    this.statusUpdated = false;
    if (commonService.pageName.closed) {
      commonService.pageName = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    }
    commonService.pageName.next('document');
  }
  /**
   * on init
   */
  ngOnInit() {
    this.commonService.showLoading();
    const id = this.route.parent?.snapshot.paramMap.get('id');
    this.monitorService.logEvent('ngOnInit', ['ClaimDocumentComponent', 'addenda-claim', {
      claimId: id
    }]);
    this.footer = {
      ...this.footer,
      route: `claim/claim-detail/${id}/photos`,
      claimId: id
    };
    const promiseApi = {
      mediaTemplate: this.mediaCollectionService.getMediaTemplate(),
      claimDetail: this.claimService.getClaimDetail(id)
    };
    const result = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)(promiseApi).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(error)));
    result.subscribe(dict => {
      if (dict) {
        const mediaTemplate = dict.mediaTemplate;
        if (mediaTemplate) {
          const mediaTemplateSelected = mediaTemplate.data;
          if (dict.claimDetail) {
            const {
              claimNumber,
              id,
              claimStatus,
              inspections,
              inspectionId,
              organizationDetail
            } = dict.claimDetail;
            this.commonService.claimDetails.next(dict.claimDetail);
            if (inspectionId) {
              this.commonService.inspectionId.next(inspectionId);
            }
            this.commonService.claimStatus.next(claimStatus);
            if (claimStatus?.toLowerCase() === 'detailsupdated') {
              this.updateStatus();
            } else {
              this.footer = {
                ...this.footer,
                status: ''
              };
            }
            this.footer.currentStatus = claimStatus;
            //this.header.claimNumber = claimNumber;
            this.objectId = id;
            // TODO: Send claim  data in observable
            //this.commonService.claimDetails.next(dict.claimDetail.data);
          }

          if (mediaTemplateSelected.length > 0) {
            const {
              id,
              collectionGuid
            } = mediaTemplateSelected[0];
            this.mediaTemplateId = id;
            //TODO: Change domain id 
            this.domainId = 4100;
            this.collectionGuid = collectionGuid;
            const detailResult = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)({
              mediaTemplateDetail: this.mediaCollectionService.getMediaTemplateById(collectionGuid),
              mediaDetail: this.mediaCollectionService.getMediaDocumentData(id, this.objectId, this.domainId)
            }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(error)));
            detailResult.subscribe(detailDict => {
              if (detailDict) {
                const {
                  mediaTemplateDetail,
                  mediaDetail
                } = detailDict;
                this.mediaTemplate = mediaTemplateDetail.data;
                this.mediaTemplate.mediaTemplates = mediaTemplateDetail.data.mediaTemplates.sort((media, mediab) => {
                  return media.orderNumber - mediab.orderNumber;
                });
                if (mediaDetail?.data) {
                  this.mapMediaTemplate(mediaDetail.data.medias);
                }
                this.getMediaTemplateByObject();
              }
              this.commonService.hideLoading();
            }, err => {
              this.commonService.hideLoading();
              this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
            });
          } else {
            this.commonService.hideLoading();
          }
        } else {
          this.noDocumentData = true;
          this.commonService.hideLoading();
        }
      } else {
        this.noDocumentData = true;
        this.commonService.hideLoading();
      }
    });
    const container = document.querySelector('.addenda-container');
    if (container) {
      container.scrollTop = 0;
    }
  }
  /**
   * media template by id
   */
  getMediaTemplateByObject() {
    this.mediaPartTemplates = this.commonService.getAllChild(this.mediaTemplate?.mediaTemplates, 'mediaPartTemplates', 'mediaTemplateGuid', {
      'parentProp': 'name',
      'childProp': 'parentName'
    });
    for (let i = 0; i < this.mediaPartTemplates.length; i++) {
      const mediaPart = this.mediaPartTemplates[i];
      const documentStep = (0,src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_0__.documentPartMapper)(mediaPart, i);
      const isAdditionalImage = documentStep.stepName.toLowerCase().indexOf('additional document') != -1;
      const isAdditionalDocumentFromReviewPageOnly = isAdditionalImage && !documentStep.url;
      this.imageStatusSteps.push({
        ...documentStep,
        mandatory: mediaPart.mandatory,
        index: i,
        isAdditionalDocumentFromReviewPageOnly,
        contentType: mediaPart.contentType,
        fileName: mediaPart.fileName,
        parentName: mediaPart.parentName,
        isFront: mediaPart.frontSide,
        updatedDate: mediaPart.mediaPartGuid != '00000000-0000-0000-0000-000000000000' ? mediaPart.updatedDate : '',
        uploadedDate: mediaPart.mediaPartGuid != '00000000-0000-0000-0000-000000000000' ? mediaPart.createdDate : '',
        domainId: this.domainId,
        objectId: this.objectId,
        sizeLimit: mediaPart.sizeLimit,
        allowExtension: mediaPart.allowExtension,
        uploadedPartGuid: mediaPart.mediaPartGuid != '00000000-0000-0000-0000-000000000000' ? mediaPart.mediaPartGuid : '',
        uploadedGuid: mediaPart.mediaGuid != '00000000-0000-0000-0000-000000000000' ? mediaPart.mediaGuid : '',
        partTemplateGuid: mediaPart.mediaPartTemplateGuid,
        templateGuid: mediaPart['mediaTemplateGuid'],
        isLocked: mediaPart.isLocked
      });
      this.checkRouteParams();
    }
  }
  /**
   * check route params
   */
  checkRouteParams() {
    //TODO: 
    this.route.queryParams?.subscribe(params => {
      // const codeParam = params['fromPersonal']  
      // if (codeParam === 'true' || codeParam === true){
      //   this.imageStatusSteps = this.imageStatusSteps.filter((step:UploadStepModel)=>{
      //     return step.stepName.indexOf('Vehicle Registration') != -1;
      //   });
      // }
    });
  }
  /**
   * ng after view init
   */
  ngAfterViewInit() {
    console.log('after view init');
  }
  /**
   * map media template Data
   * @param mediaData
   */
  mapMediaTemplate(mediaData) {
    if (this.mediaTemplate) {
      try {
        for (let i = 0; i < this.mediaTemplate.mediaTemplates.length; i++) {
          const media = this.mediaTemplate.mediaTemplates[i];
          const mediaDataTemplate = mediaData.find(x => x.mediaTemplateGuid == media.mediaTemplateGuid);
          if (mediaDataTemplate) {
            for (let j = 0; j < media.mediaPartTemplates.length; j++) {
              const mediaPart = media.mediaPartTemplates[j];
              const mediaDataPart = mediaDataTemplate.mediaParts.find(x => x.mediaPartTemplateGuid == mediaPart.mediaPartTemplateGuid);
              mediaPart.fileName = mediaDataPart.fileName;
              mediaPart.contentType = mediaDataPart.contentType;
              mediaPart.mediaGuid = mediaDataTemplate.mediaGuid;
              mediaPart.mediaPartGuid = mediaDataPart.mediaPartGuid;
              mediaPart.createdDate = mediaDataPart.createdDate;
              mediaPart.updatedDate = mediaDataPart.updatedDate;
              mediaPart.image = mediaDataPart.getURL;
              mediaPart.isUploadSuccess = false;
              mediaPart.isLocked = mediaDataPart.isLocked;
              if (mediaPart.mediaPartGuid && mediaPart.mediaPartGuid != '00000000-0000-0000-0000-000000000000') {
                mediaPart.isUploadSuccess = true;
              }
            }
          }
        }
        this.mediaTemplate = {
          ...this.mediaTemplate
        };
      } catch (error) {
        console.log(error);
      }
    }
  }
  /**
   * set current Observable
   */
  setObservable($event) {
    if ($event.uploadedGuid && $event.uploadedPartGuid) {
      this.currentObservable = this.updateFile.bind(this);
    } else {
      this.currentObservable = this.uploadFile.bind(this);
    }
  }
  /**
   * handled if step is skipped
   */
  stepSkipped() {
    if (this.footer.currentStatus?.toLowerCase() === 'detailsupdated') {
      this.updateStatus();
    }
  }
  /**
   * update status
   */
  updateStatus() {
    if (!this.statusUpdated) {
      this.statusUpdated = true;
      this.monitorService.logEvent('updateStatus', ['ClaimDocumentComponent', 'addenda-claim', {
        claimId: this.footer.claimId
      }]);
      this.claimService.updateClaimStatus(this.footer.claimId, 'UploadDocuments').subscribe({
        next: () => {
          this.footer = {
            ...this.footer,
            status: ''
          };
        }
      });
    }
  }
  /**
   * upload file
   */
  uploadFile(currentStep) {
    const obj = {
      mediaCollectionId: this.mediaTemplate.collectionGuid,
      domainId: this.domainId,
      objectId: this.objectId,
      mediaTemplateId: currentStep.templateGuid,
      mediaPartTemplateId: currentStep.partTemplateGuid
    };
    this.monitorService.logEvent('uploadFile', ['ClaimDocumentComponent', 'addenda-claim', {
      obj
    }]);
    currentStep.uploadInProgress = true;
    currentStep.isSkipped = false;
    currentStep.isUploadFailed = false;
    currentStep.isUploadSuccess = false;
    const messageForUploading = `Your photo is currently uploading won’t be long and we’ll 
    notify you when its uploaded, you can continue to take your photos.`;
    this.commonService.showNotification(messageForUploading);
    this.mediaCollectionService.uploadDocument(currentStep.imageFile, obj).subscribe({
      next: res => {
        const responseData = res?.data;
        this.imageStatusSteps.forEach(el => {
          if (el.partTemplateGuid === currentStep.partTemplateGuid) {
            el.url = responseData?.blobUrl;
          }
        });
        const mediaPartTemplate = this.mediaPartTemplates?.find(x => x.mediaPartTemplateGuid == responseData?.mediaPartTemplateId);
        if (mediaPartTemplate) {
          mediaPartTemplate.mediaGuid = responseData.mediaGuid;
          mediaPartTemplate.mediaPartGuid = responseData.mediaPartGuid;
          if (this.currentClaimStatus?.toLowerCase() === 'detailsupdated') {
            this.updateStatus();
          }
          this.imageUploaders.updateUploadStatus('success', currentStep, null, responseData);
        }
      },
      error: err => {
        if (err.status != 401) {
          try {
            this.imageUploaders.updateUploadStatus('failed', currentStep, err);
          } catch (e) {
            this.imageUploaders.updateUploadStatus('failed', currentStep);
          }
        }
        this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
      },
      complete: () => this.commonService.hideLoading()
    });
  }
  /**
   * update existing document
   */
  updateFile(currentStep) {
    const obj = {
      objectId: this.objectId,
      mediaGuid: currentStep.uploadedGuid,
      mediaPartGuid: currentStep.uploadedPartGuid
    };
    this.monitorService.logEvent('updateFile', ['ClaimDocumentComponent', 'addenda-claim', {
      obj
    }]);
    currentStep.uploadInProgress = true;
    currentStep.isSkipped = false;
    currentStep.isUploadFailed = false;
    currentStep.isUploadSuccess = false;
    this.mediaCollectionService.updateDocument(currentStep.imageFile, obj).subscribe({
      next: res => {
        this.imageUploaders.updateUploadStatus('success', currentStep);
      },
      error: err => {
        if (err.status != 401) {
          try {
            this.imageUploaders.updateUploadStatus('failed', currentStep, err);
          } catch (e) {
            this.imageUploaders.updateUploadStatus('failed', currentStep);
          }
        }
        this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
      },
      complete: () => this.commonService.hideLoading()
    });
  }
  static #_ = this.ɵfac = function ClaimDocumentsComponent_Factory(t) {
    return new (t || ClaimDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_2__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_3__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_media_collection_media_collection_service__WEBPACK_IMPORTED_MODULE_4__.MediaCollectionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ClaimDocumentsComponent,
    selectors: [["claim-documents"]],
    viewQuery: function ClaimDocumentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.imageUploaders = _t.first);
      }
    },
    decls: 4,
    vars: 3,
    consts: [[3, "fileUploaderService", "footerOptions", "imageStatusSteps", "header", "cardSelection", "stepSkipped", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], ["class", "footer-full-wrapper", 4, "ngIf"], [3, "fileUploaderService", "footerOptions", "imageStatusSteps", "header", "cardSelection", "stepSkipped"], ["imageUploaders", ""], [1, "wrapper"], [1, "no-document-div"], ["alt", "no-doc", "src", "assets/icons/no-document.svg"], [1, "no-vehicle-content"], [1, "empty-wrapper"], [1, "step-container"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["alt", "add-claim", "src", "assets/img/addenda-claims.png"]],
    template: function ClaimDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClaimDocumentsComponent_chq_images_uploader_1_Template, 2, 4, "chq-images-uploader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClaimDocumentsComponent_div_2_Template, 10, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClaimDocumentsComponent_div_3_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageStatusSteps && ctx.imageStatusSteps.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.noDocumentData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.noDocumentData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_5__.ChqImagesUploaderComponent],
    styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 215px;\n}\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9jbGFpbS1tYW5hZ2VtZW50L2NsYWltLWRvY3VtZW50cy9jbGFpbS1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmVtcHR5LXdyYXBwZXJ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG59XHJcblxyXG4uc3RlcC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTVweCAxMXB4O1xyXG4gICAgaGVpZ2h0OjI1JTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuLm5vLWRvY3VtZW50LWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDIxNXB4O1xyXG4gICAgfVxyXG4gICAgLm5vLXZlaGljbGUtY29udGVudHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 35775:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/claim/claim-management/claim-images/claim-images/claim-images.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimImagesComponent": () => (/* binding */ ClaimImagesComponent)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/quote/chq-new-cases/chq-new-customer/chq-new-customer-form-data-helper */ 83853);
/* harmony import */ var src_app_shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/damage-analysis/damage-analysis.component */ 9988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/inspection/inspection.service */ 62190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../widgets/chq-images-uploader/chq-images-uploader.component */ 39912);
/* harmony import */ var _shared_add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/add-photos/add-photos.component */ 62119);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
















const _c0 = ["imageUploaders"];
function ClaimImagesComponent_div_0_add_photos_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "add-photos", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mode", function ClaimImagesComponent_div_0_add_photos_2_Template_add_photos_mode_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.handleMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("photosHeader", ctx_r1.addPhotosHeader)("hidden", ctx_r1.hideContent)("showSPI", true);
  }
}
function ClaimImagesComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 13)(8, "div", 13)(9, "div", 13)(10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, "no_photos_configured"), " ");
  }
}
function ClaimImagesComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function ClaimImagesComponent_div_0_chq_images_uploader_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "chq-images-uploader", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("handleDeleteAllEvent", function ClaimImagesComponent_div_0_chq_images_uploader_5_Template_chq_images_uploader_handleDeleteAllEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.handleDeleteAll());
    })("backToUpload", function ClaimImagesComponent_div_0_chq_images_uploader_5_Template_chq_images_uploader_backToUpload_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.setInitialMode());
    })("updateMassUpload", function ClaimImagesComponent_div_0_chq_images_uploader_5_Template_chq_images_uploader_updateMassUpload_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.updateCurrentStatus($event));
    })("stepSkipped", function ClaimImagesComponent_div_0_chq_images_uploader_5_Template_chq_images_uploader_stepSkipped_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.stepSkipped());
    })("completeUploadProcess", function ClaimImagesComponent_div_0_chq_images_uploader_5_Template_chq_images_uploader_completeUploadProcess_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.completeUploadProcess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r4.showDamageAnalysis || !ctx_r4.showUploading)("currentAdditionalModeMultiple", ctx_r4.currentAdditionalModeMultiple)("fileUploaderService", ctx_r4.currentObservable)("footerOptions", ctx_r4.footer)("isMassUpload", ctx_r4.isMultipleUpload)("showReTakeDelete", true)("imageStatusSteps", ctx_r4.imageStatusSteps)("header", ctx_r4.photosHeader)("inspectionId", ctx_r4.inspectionId)("inspection", "photos");
  }
}
function ClaimImagesComponent_div_0_damage_analysis_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "damage-analysis", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("backEvent", function ClaimImagesComponent_div_0_damage_analysis_6_Template_damage_analysis_backEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.handleBack($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isBulkUpload", ctx_r5.isMultipleUpload)("minPhotoRequired", ctx_r5.minimumPhotosRequired)("claimDetail", ctx_r5.claimData)("steps", ctx_r5.imageStatusSteps)("isRepairModule", false)("isClaimModule", true);
  }
}
function ClaimImagesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ClaimImagesComponent_div_0_add_photos_2_Template, 1, 3, "add-photos", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ClaimImagesComponent_div_0_div_3_Template, 11, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ClaimImagesComponent_div_0_div_4_Template, 4, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ClaimImagesComponent_div_0_chq_images_uploader_5_Template, 2, 10, "chq-images-uploader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ClaimImagesComponent_div_0_damage_analysis_6_Template, 1, 6, "damage-analysis", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.showUploading === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.noImagesData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.noImagesData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.showUploading === true || ctx_r0.isMultipleUpload || ctx_r0.imageStatusSteps && ctx_r0.imageStatusSteps.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.showDamageAnalysis);
  }
}
class ClaimImagesComponent {
  /**
  * constructor
  * @param router
  */
  constructor(cd, commonService, route, router, claimService, monitorService, inspectionService, defaultAITimeout, enableAIRecursion, recursionMaxRetries) {
    this.cd = cd;
    this.commonService = commonService;
    this.route = route;
    this.router = router;
    this.claimService = claimService;
    this.monitorService = monitorService;
    this.inspectionService = inspectionService;
    this.defaultAITimeout = defaultAITimeout;
    this.enableAIRecursion = enableAIRecursion;
    this.recursionMaxRetries = recursionMaxRetries;
    this.photosHeader = {
      title: 'Upload Images',
      step: 0,
      description: '',
      stepName: 'Back / Bulk Upload',
      rightActionText: 'Delete all and Start Over',
      rightActionIcon: 'delete',
      showTitle: true,
      isClaimModule: true
    };
    this.imageStatusSteps = [];
    this.showUploading = false;
    this.isMultipleUpload = false;
    this.triggerMassUpload = false;
    this.claimId = '0';
    this.minimumPhotosRequired = 0;
    this.hideContent = true;
    this.currentAdditionalModeMultiple = false;
    this.hideUploaders = false;
    this.noImagesData = false;
    this.inspectionTemplatesJSONString = '';
    this.currentClaimStatus = '';
    this.originalSteps = [];
    this.showNoAccess = false;
    this.footer = {
      text: '',
      icon: '',
      route: '',
      status: 'UploadPhotos',
      currentStatus: '',
      showButton: false,
      showUploadOption: false,
      isClaimModule: true
    };
    // public footer: FooterModel = {
    //   text: 'Next create estimate',
    //   icon: 'boardview',
    //   route: 'case/gt',
    //   status: 'UploadPhotos',
    //   caseId: '',
    //   currentStatus: '',
    //   showButton: true,
    //   showUploadOption: true
    // }
    this.statusUpdated = false;
    this.retryCounter = 0;
    this.currentRetryCount = 0;
    this.imageLoading = {};
    this.damageImageStatusSteps = [];
    if (commonService.pageName.closed) {
      commonService.pageName = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(null);
    }
    this.commonService.userProfileData.subscribe(res => {
      if (res && res.data) {
        const {
          userPermission
        } = res.data;
        this.userPermission = userPermission;
      }
    });
    commonService.pageName.next('photos');
  }
  /**
   * handle back
   */
  handleBack($event) {
    this.showDamageAnalysis = !$event.back;
  }
  /**
   * on init
   */
  ngOnInit() {
    const currentObjectId = this.route.parent?.snapshot.paramMap.get('id');
    this.addPhotosHeader = {
      ...this.photosHeader,
      isHeaderOnly: false
    };
    this.monitorService.logEvent('ngOnInit', ['ClaimImagesComponent', 'addenda-claim', {
      claimId: currentObjectId
    }]);
    this.footer = {
      ...this.footer,
      handleBack: this.handleBack.bind(this),
      route: `claim/claim-detail/${currentObjectId}/garages`,
      // text: (this.checkClaimPermission('claim.selfapproval') 
      //   || this.checkClaimPermission('claim.submitforapproval')) 
      //   ? 'Go to Garages' : 'Submit for review'
      text: 'Go to Garages',
      hideNext: this.checkClaimPermission('claim.selfapproval') || this.checkClaimPermission('claim.submitforapproval') ? false : true
    };
    this.loadApiData(currentObjectId);
    const container = document.querySelector('.addenda-container');
    if (container) {
      container.scrollTop = 0;
    }
    this.currentObservable = this.uploadFile.bind(this);
  }
  /**
   * claim permission
   * @param permissionName
   */
  checkClaimPermission(permissionName) {
    const automotiveService = this.userPermission?.automotiveServices;
    const permissionList = automotiveService?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda claims')?.permissions;
    return this.commonService.hasPermission(permissionName, permissionList);
  }
  /**
   * update title according to option selected
   * @param $event
   */
  handleUpdateMode($event) {
    if ($event.mode === 'single') {
      this.photosHeader = {
        ...this.photosHeader,
        title: 'back_smart_photo'
      };
    } else {
      this.photosHeader = {
        ...this.photosHeader,
        title: 'back_bulk_upload'
      };
    }
  }
  /**
   * load damage analysis after all
   * @param $event
   */
  completeUploadProcess($event) {
    if ($event && (this.currentClaimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.UploadDocuments || this.currentClaimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.DetailsUpdated)) {
      this.loadDamageAnalysis();
    }
  }
  /**
   * handle delete all
   */
  handleDeleteAll() {
    this.setInitialMode();
  }
  /**
   * ngAfterViewInit hook
   */
  ngAfterViewInit() {
    //this.commonService.updatePage('/quote/case/0', 'photos');
    this.cd.detectChanges();
    this.monitorService.logEvent('ngAfterViewInit', ['ClaimImagesComponent', 'addenda-claim']);
  }
  /**
   * update page status
   */
  updateCurrentStatus($event) {
    this.monitorService.logEvent('updateCurrentStatus', ['ClaimImagesComponent', 'addenda-claim', {
      caseId: $event
    }]);
    if ($event.initial) {
      this.setInitialMode();
      return;
    }
    this.showUploading = true;
    // if ((this.footer.repairId && this.footer.from == Modules.quote)
    // || (this.footer.caseId && this.footer.from == Modules.repair)) {
    //   this.commonService.showChangeWarningMessage(this.uploadBulkUploadFile.bind(this, $event.steps),
    //     this.footer.from == Modules.quote ? 'Repair' : 'Quote');
    // } else {
    //   this.uploadBulkUploadFile($event.steps);
    // }
    this.uploadBulkUploadFile($event.steps);
  }
  /**
  * upload bulk file
  * @param uploads
  */
  uploadBulkUploadFile(uploads) {
    for (let i = 0; i < uploads?.length; i++) {
      const img = new Image();
      img.src = uploads[i].image;
      img.onload = () => {
        const uploadObject = {
          'height': img.height,
          'width': img.width,
          'inspectionId': this.inspectionId,
          'templateId': this.inspectionTemplateId,
          'type': this.vehicelType || '',
          'isBulk': true
        };
        const step = uploads[i];
        step.uploadInProgress = true;
        step.isSkipped = false;
        step.isUploadFailed = false;
        step.isUploadSuccess = false;
        this.monitorService.logEvent('uploadBulkUploadFile', ['ClaimImagesComponent', 'addenda-claim', {
          uploadObject
        }]);
        this.inspectionService.uploadImageBulk(uploadObject, step.imageFile).subscribe({
          next: data => {
            step.url = data.rawImage?.rawAzureBlobUrl;
            step.inspectionItem = data;
            step.procedureSteps = 'Bulk Upload Image';
            this.imageUploaders.updateUploadStatus('success', step, null, data);
            this.footer = {
              ...this.footer,
              showUploadOption: false
            };
            //TODO: 
            // if ((this.currentClaimStatus?.toLowerCase() === 'detailsupdated' || this.currentClaimStatus?.toLowerCase() === 'uploaddocuments')) {
            //   this.updateStatus();
            // }
          },

          error: err => {
            if (err.status != 401) {
              this.imageUploaders.imageStatusSteps = this.imageUploaders.imageStatusSteps.filter(ig => {
                return ig.index !== step.index || ig.stepName !== step.stepName || ig.uploadInProgress !== true;
              });
              this.imageUploaders.updateUploadStatus('failed', step, err, null, true);
            }
            this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
          }
        });
      };
    }
  }
  /**
   * upload photos
   */
  uploadFile(currentStep) {
    const uploadObject = {
      'height': currentStep.imageHeight,
      'width': currentStep.imageWidth,
      'inspectionId': this.inspectionId,
      'templateId': this.inspectionTemplateId,
      'inspectionitemId': currentStep.inspectionItem.id,
      'type': this.vehicelType || '',
      'isBulk': false,
      'isSPI': true,
      'domainId': 4100,
      'objectId': this.objectId
    };
    this.monitorService.logEvent('uploadFile', ['ChqNewPhotosComponent', 'addenda-quote', {
      uploadObject
    }]);
    currentStep.uploadInProgress = true;
    currentStep.isSkipped = false;
    currentStep.isUploadFailed = false;
    currentStep.isUploadSuccess = false;
    this.commonService.inProgressSteps.next(1);
    this.footer = {
      ...this.footer,
      showUploadOption: false
    };
    this.commonService.showNotification(`Your photo ‘${currentStep.stepName}’ is currently uploading won’t be long and we’ll notify 
       you when its uploaded, you can continue to take your photos.`);
    this.inspectionService.uploadImageBulk(uploadObject, currentStep.imageFile).subscribe({
      next: data => {
        const msg = `Your photo ‘${currentStep.stepName}’ is uploaded successfully.`;
        this.commonService.showNotification(msg);
        const inspectionItem = this.inspectionItemTemplates?.find(x => x.inspectionItem.id == data?.id);
        inspectionItem.inspectionItem.rawAzureBlobUrl = data.rawImage?.rawAzureBlobUrl;
        if (inspectionItem) {
          currentStep.url = data.rawImage?.rawAzureBlobUrl;
          this.imageUploaders.updateUploadStatus('success', currentStep, null, data);
        }
        //TODO: 
        // if ((this.footer.currentStatus?.toLowerCase() === 'uploaddocuments') || this.footer.currentStatus?.toLowerCase() === 'detailsupdated') {
        //   this.updateStatus();
        // }
      },

      error: err => {
        if (err.status != 401) {
          const msg = `Your photo ‘${currentStep.stepName}’ failed to upload. Please try to upload again.`;
          this.commonService.showNotification(msg);
          this.imageUploaders.updateUploadStatus('failed', currentStep, err);
          this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
        }
      }
    });
  }
  /**
   * set to initial mode
   */
  setInitialMode() {
    this.showUploading = false;
    this.imageStatusSteps = [];
    this.triggerMassUpload = false;
    this.isBulkUploaded = false;
    this.imageUploaders.isReviewSection = false;
    this.isMultipleUpload = false;
    this.currentAdditionalModeMultiple = false;
  }
  /**
   * reload inspection and map
   */
  reloadInspection() {
    this.commonService.showLoading();
    this.inspectionTemplates = JSON.parse(this.inspectionTemplatesJSONString);
    if (this.inspectionId) {
      this.inspectionService.getInspection(this.inspectionId).subscribe({
        next: inspectionDetailResponse => {
          if (inspectionDetailResponse) {
            this.mapInspection(inspectionDetailResponse);
            this.getInspectionTemplateByObject();
            this.isMultipleUpload = false;
            this.isBulkUploaded = false;
            this.currentAdditionalModeMultiple = false;
            this.triggerMassUpload = false;
            setTimeout(() => {
              this.hideContent = false;
              this.showUploading = true;
            });
          }
        },
        complete: () => {
          this.commonService.hideLoading();
        }
      });
    }
  }
  /**
   *handle mode selection
   * @param $event
   */
  handleMode($event) {
    this.monitorService.logEvent('handleMode', ['ClaimImagesComponent', 'addenda-claim', {
      $event
    }]);
    if (!this.inspectionId) {
      this.handleUpdateMode({
        'mode': 'error',
        'id': this.claimId
      });
      return;
    }
    this.handleUpdateMode($event);
    if ($event.mode === 'single') {
      if (this.imageStatusSteps?.length === 0) {
        this.isMultipleUpload = false;
        this.isBulkUploaded = false;
        this.currentAdditionalModeMultiple = false;
        this.triggerMassUpload = false;
        this.minimumPhotosRequired = this.inspectionItemTemplates.filter(value => {
          return value.isSkipEnabled !== true;
        }).length;
        this.reloadInspection();
      } else {
        this.isMultipleUpload = false;
        this.showUploading = true;
        this.isBulkUploaded = false;
        this.currentAdditionalModeMultiple = false;
        this.minimumPhotosRequired = this.currentInspectionTemplate.minImageLimit;
        this.triggerMassUpload = false;
      }
      this.currentObservable = this.uploadFile.bind(this);
    } else {
      this.imageStatusSteps = [];
      this.currentObservable = this.uploadBulkUploadFile.bind(this);
      this.isMultipleUpload = true;
      this.triggerMassUpload = true;
      this.showUploading = true;
    }
  }
  /**
   * map inspection from api
   * @param inspectionData
   */
  mapInspection(inspectionData) {
    if (inspectionData) {
      try {
        this.inspection = inspectionData;
        this.uploadType = this.inspection.uploadType;
        let currentMode = 'SPI';
        if (this.uploadType) {
          this.footer = {
            ...this.footer,
            showUploadOption: false
          };
        }
        if (this.uploadType === 'Bulk') {
          currentMode = 'BULK';
        }
        const bulkUploadTemplateItem = this.inspectionTemplates?.filter(step => step.name === 'Bulk Upload Image');
        const bulkUploadedItemsWithImages = this.inspection.inspectionItems?.filter(step => {
          return (step.name === 'Bulk Upload Image' || step.inspectionItemTemplateID === bulkUploadTemplateItem[0]?.id) && step.rawAzureBlobUrl;
        });
        if (bulkUploadedItemsWithImages?.length > 0 || this.uploadType === 'Bulk') {
          const massUploadItems = [];
          this.handleUpdateMode({
            'mode': 'multiple'
          });
          for (const i in bulkUploadedItemsWithImages) {
            const currentObj = {
              ...bulkUploadTemplateItem[0],
              name: bulkUploadedItemsWithImages[i].name || bulkUploadTemplateItem[0].name,
              inspectionItem: bulkUploadedItemsWithImages[i]
            };
            massUploadItems.push(currentObj);
          }
          this.inspectionItemTemplates = massUploadItems;
        } else {
          this.handleUpdateMode({
            'mode': 'single'
          });
          this.inspectionTemplates?.map(chqInspectionStep => {
            const item = this.inspection.inspectionItems?.find(el => el.inspectionItemTemplateID == chqInspectionStep.id);
            if (item) {
              chqInspectionStep['inspectionItem'] = item;
            }
          });
          this.inspectionItemTemplates = this.inspectionTemplates?.filter(step => step.name != 'Bulk Upload Image');
        }
        if (bulkUploadTemplateItem?.length > 0) this.inspectionTemplateId = bulkUploadTemplateItem[0].id;
        this.inspectionItemTemplates?.map(x => {
          if (x.inspectionItem?.rawAzureBlobUrl) {
            x.isUploadSuccess = true;
            x.image = x.inspectionItem?.rawAzureBlobUrl;
            x.isLocked = x.inspectionItem?.isLocked;
          } else {
            if (!x.inspectionItem) {
              x.inspectionItem = {
                rawAzureBlobUrl: ''
              };
            }
            x.inspectionItem.rawAzureBlobUrl = '';
            x.isUploadFailed = false;
            x.isUploadSuccess = false;
            x.uploadInProgress = false;
          }
        });
        if (this.uploadType) {
          if (currentMode === 'SPI') {
            this.isMultipleUpload = false;
            this.showUploading = true;
            if (this.addPhotosHeader.isRepairModule) {
              this.photosHeader = {
                ...this.photosHeader,
                title: 'back_smart_photo'
              };
            }
            this.minimumPhotosRequired = this.inspectionItemTemplates?.filter(value => {
              return value.isSkipEnabled !== true;
            }).length;
            this.currentObservable = this.uploadFile.bind(this);
          } else {
            this.currentObservable = this.uploadBulkUploadFile.bind(this);
            this.isMultipleUpload = true;
            this.minimumPhotosRequired = this.currentInspectionTemplate.minImageLimit;
            this.triggerMassUpload = true;
            this.isBulkUploaded = true;
            if (this.addPhotosHeader.isRepairModule) {
              this.photosHeader = {
                ...this.photosHeader,
                title: 'bulk_upload'
              };
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  /**
   * inspection detail by id
   */
  getInspectionTemplateByObject() {
    for (let i = 0; i < this.inspectionItemTemplates?.length; i++) {
      const templatePart = this.inspectionItemTemplates[i];
      const inspectionStep = (0,src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.inspectionpartPartMapper)(templatePart, i);
      const isAdditionalImage = inspectionStep.stepName?.toLowerCase().indexOf('additional photo') != -1;
      const isMassUpload = inspectionStep.stepName?.toLowerCase().indexOf('bulk upload image') != -1;
      const isAdditionalDocumentFromReviewPageOnly = isAdditionalImage && !inspectionStep.url;
      this.imageStatusSteps.push({
        ...inspectionStep,
        mandatory: !templatePart.isSkipEnabled,
        index: i,
        isAdditionalDocumentFromReviewPageOnly,
        isMassUpload,
        updatedDate: inspectionStep.url ? templatePart?.inspectionItem?.updatedDate : '',
        uploadedDate: inspectionStep.url ? templatePart?.inspectionItem?.created : '',
        domainId: this.domainId,
        objectId: this.objectId,
        uploadedPartGuid: '',
        uploadedGuid: ''
      });
    }
  }
  /**
   * update status
   */
  updateStatus() {
    if (!this.statusUpdated) {
      this.statusUpdated = true;
      this.monitorService.logEvent('updateStatus', ['ClaimImagesComponent', 'addenda-claim', {
        claimId: this.footer.claimId
      }]);
      this.claimService.updateClaimStatus(this.footer.claimId, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.UploadPhotos).subscribe({
        next: () => {
          this.currentClaimStatus = this.footer.currentStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.UploadPhotos;
          this.commonService.claimStatus.next(this.currentClaimStatus);
          this.claimData.claimStatus = this.currentClaimStatus;
          this.footer = {
            ...this.footer,
            status: '',
            hideNext: this.checkClaimPermission('claim.submitted')
          };
          this.commonService.showInfoToast(5000, 'Please go to loss detail page to see the severity');
        }
      });
    }
  }
  /**
   * handled if step is skipped
   */
  stepSkipped() {
    // if ((this.currentClaimStatus?.toLowerCase() === 'detailsupdated' || this.currentClaimStatus?.toLowerCase() === 'uploaddocuments')) {
    //   this.updateStatus();
    // }
  }
  /**
   * load server details
   */
  loadApiData(id) {
    if (id && id != '0') {
      this.claimId = id;
      this.commonService.showLoading();
      this.inspectionService.getInspectionTemplateList().subscribe({
        next: inspectionList => {
          let inspectionTemplateId = 0;
          const claimInspectionTemplate = inspectionList?.data;
          if (claimInspectionTemplate?.length > 0) {
            this.commonService.claimInspectionTemplate = claimInspectionTemplate[0];
            inspectionTemplateId = claimInspectionTemplate[0].id;
          }
          const promiseApi = {};
          promiseApi.inspectionTemplate = this.inspectionService.getInspectionTemplate(inspectionTemplateId);
          this.commonService.userProfileData.subscribe(res => {
            if (res && res.data) {
              const {
                organizationDetail
              } = res.data;
              this.currentOrgId = organizationDetail.id;
            }
          });
          promiseApi.claimDetail = this.claimService.getClaimDetail(id);
          const serverDetails = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)(promiseApi).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(error)));
          serverDetails.subscribe({
            next: resultMap => {
              if (resultMap.inspectionTemplate) {
                const inspectionTemplateDetail = resultMap.inspectionTemplate.inspectionItemTemplates;
                this.currentInspectionTemplate = resultMap.inspectionTemplate;
                if (resultMap.inspectionDetail) {
                  this.inspectionDetail = resultMap.inspectionDetail;
                }
                this.inspectionTemplates = inspectionTemplateDetail;
                this.inspectionTemplatesJSONString = JSON.stringify(this.inspectionTemplates);
                if (resultMap.claimDetail) {
                  const {
                    id,
                    claimGuid,
                    claimStatus,
                    fnolId,
                    domainID,
                    domainId,
                    inspections,
                    inspectionId,
                    vehicleModel,
                    vehicleId
                  } = resultMap.claimDetail;
                  this.claimData = resultMap.claimDetail;
                  this.commonService.claimDetails.next(resultMap.claimDetail);
                  this.vehicelType = vehicleModel;
                  this.vehicleId = vehicleId;
                  this.domainId = domainID || domainId;
                  this.commonService.claimStatus.next(claimStatus);
                  this.currentClaimStatus = claimStatus;
                  this.footer = {
                    ...this.footer,
                    status: '',
                    claimId: claimGuid
                  };
                  if (fnolId && (claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.UploadDocuments || claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.DetailsUpdated)) {
                    this.updateStatus();
                  }
                  // if (this.currentClaimStatus.toLowerCase() === CLAIM_STATUS.UploadPhotos && this.checkClaimPermission('claim.submitted')) {
                  //   this.footer.text = 'Submit for review'
                  // } else {
                  //   this.footer.hideNext = true;
                  // }
                  this.footer.currentStatus = claimStatus;
                  if (inspections?.length > 0) {
                    this.inspectionId = inspections[0].inspectionId;
                    this.commonService.inspectionId.next(this.inspectionId);
                  } else {
                    this.inspectionId = inspectionId;
                    this.commonService.inspectionId.next(this.inspectionId);
                  }
                  this.objectId = id;
                  // TODO:// Send claim data in observable
                  //this.commonService.repairDetails.next(resultMap.bookingDetail.data)
                }

                if (this.inspectionId) {
                  this.inspectionService.getInspection(this.inspectionId).subscribe({
                    next: inspectionDetailResponse => {
                      if (inspectionDetailResponse) {
                        this.mapInspection(inspectionDetailResponse);
                        this.noImagesData = false;
                        this.getInspectionTemplateByObject();
                        setTimeout(() => {
                          this.hideContent = false;
                          if (this.isBulkUploaded) {
                            this.showUploading = true;
                            this.isMultipleUpload = true;
                            this.currentAdditionalModeMultiple = true;
                          }
                          if (this.uploadType) {
                            this.imageUploaders.goToReview();
                          }
                        });
                      }
                    },
                    error: () => {
                      this.noImagesData = true;
                    },
                    complete: () => {
                      this.commonService.hideLoading();
                    }
                  });
                } else {
                  this.noImagesData = true;
                  this.hideContent = false;
                  this.commonService.hideLoading();
                }
              } else {
                this.noImagesData = true;
                this.commonService.hideLoading();
              }
            }
          });
        },
        error: () => {
          this.noImagesData = true;
          this.commonService.hideLoading();
        }
      });
    }
  }
  /**
   * get all not analysed images
   */
  get notAnalysedFiles() {
    return this.damageImageStatusSteps.length === 0 || this.damageImageStatusSteps.filter(currentStep => {
      return currentStep.analysisStatus?.toLowerCase() === 'analysis in progress';
    }).length > 0;
  }
  /**
   * get unanalysed images
   */
  get unAnalysedFiles() {
    return this.damageImageStatusSteps.filter(currentStep => {
      return currentStep.analysisStatus === 'Analysis in Progress';
    }).length > 0;
  }
  /**
   * load damage analysis for claim modules
   */
  loadDamageAnalysis() {
    const detail = this.inspectionService.getDamageReport(this.inspectionId);
    detail.subscribe({
      next: result => {
        if (result) {
          this.getDamageStepsByObject(result?.damageDetails);
          if (!this.notAnalysedFiles && (this.currentClaimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.UploadDocuments || this.currentClaimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.DetailsUpdated)) {
            // update claim status to upload photos
            // 
            this.updateStatus();
          } else if (this.currentClaimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.UploadDocuments || this.currentClaimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_0__.CLAIM_STATUS.DetailsUpdated) {
            this.loadDamageReportInRecursion(this.claimId);
          }
        }
        this.commonService.hideLoading();
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
      }
    });
  }
  /**
   * inspection detail by id
   */
  getDamageStepsByObject(damageParts) {
    const damageSteps = [];
    for (let i = 0; i < damageParts?.length; i++) {
      const templatePart = damageParts[i];
      const damageStep = (0,src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.damagePartMapper)(templatePart, i);
      // if (this.deletedId && this.deletedId.indexOf(damageStep.inspectionItem[0]?.inspectionItemId) !== -1) {
      //   continue;
      // }
      damageSteps.push({
        ...damageStep,
        mandatory: true,
        isMassUpload: false,
        uploadedPartGuid: '',
        uploadedGuid: ''
      });
    }
    this.damageImageStatusSteps = [...damageSteps];
  }
  /**
   * recursive damage report call
   */
  loadDamageReportInRecursion(caseId) {
    if (!this.enableAIRecursion) {
      return;
    }
    if (!this.unAnalysedFiles) {
      return;
    }
    if (this.currentRetryCount >= this.recursionMaxRetries) {
      //if (this.footerOptions?.isClaimModule) {
      //update status
      //}
      this.updateStatus();
      return;
    }
    this.currentTimeoutVariable = setTimeout(() => {
      this.loadDamageAnalysis();
      this.currentRetryCount++;
    }, this.defaultAITimeout);
  }
  //
  /**
   * destroy
   */
  ngOnDestroy() {
    console.log('ng on destroy');
  }
  static #_ = this.ɵfac = function ClaimImagesComponent_Factory(t) {
    return new (t || ClaimImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_4__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_6__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_AI_TIMEOUT), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_2__.ENABLE_AI_RECURSION), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_2__.RECURSION_MAX_RETRIES));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ClaimImagesComponent,
    selectors: [["app-claim-images"]],
    viewQuery: function ClaimImagesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.imageUploaders = _t.first);
      }
    },
    decls: 1,
    vars: 1,
    consts: [["class", "photo-container", 4, "ngIf"], [1, "photo-container"], [3, "photosHeader", "hidden", "showSPI", "mode", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], ["class", "footer-full-wrapper", 4, "ngIf"], [3, "hidden", "currentAdditionalModeMultiple", "fileUploaderService", "footerOptions", "isMassUpload", "showReTakeDelete", "imageStatusSteps", "header", "inspectionId", "inspection", "handleDeleteAllEvent", "backToUpload", "updateMassUpload", "stepSkipped", "completeUploadProcess", 4, "ngIf"], [3, "isBulkUpload", "minPhotoRequired", "claimDetail", "steps", "isRepairModule", "isClaimModule", "backEvent", 4, "ngIf"], [3, "photosHeader", "hidden", "showSPI", "mode"], [1, "wrapper"], [1, "no-document-div"], ["src", "assets/icons/no-document.svg"], [1, "no-vehicle-content"], [1, "empty-wrapper"], [1, "step-container"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png"], [3, "hidden", "currentAdditionalModeMultiple", "fileUploaderService", "footerOptions", "isMassUpload", "showReTakeDelete", "imageStatusSteps", "header", "inspectionId", "inspection", "handleDeleteAllEvent", "backToUpload", "updateMassUpload", "stepSkipped", "completeUploadProcess"], ["imageUploaders", ""], [3, "isBulkUpload", "minPhotoRequired", "claimDetail", "steps", "isRepairModule", "isClaimModule", "backEvent"]],
    template: function ClaimImagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ClaimImagesComponent_div_0_Template, 7, 5, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_7__.ChqImagesUploaderComponent, _shared_add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_8__.AddPhotosComponent, src_app_shared_damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_2__.DamageAnalysisComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
    styles: [".photo-container[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  margin-right: calc(5px + 1.5vw);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 215px;\n}\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9jbGFpbS1tYW5hZ2VtZW50L2NsYWltLWltYWdlcy9jbGFpbS1pbWFnZXMvY2xhaW0taW1hZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7RUFDQSwrQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksMkNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRFI7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQURSIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWNvbnRhaW5lciB7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNnB4ICsgMS41dncpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDVweCArIDEuNXZ3KTtcclxufVxyXG5cclxuLndyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5lbXB0eS13cmFwcGVye1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxufVxyXG5cclxuLnN0ZXAtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTFweDtcclxuICAgIGhlaWdodDoyNSU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbi5uby1kb2N1bWVudC1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTVweDtcclxuICAgIH1cclxuICAgIC5uby12ZWhpY2xlLWNvbnRlbnR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 63392:
/*!***************************************************************************!*\
  !*** ./src/app/modules/claim/claim-management/claim-management.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimManagementModule": () => (/* binding */ ClaimManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! devextreme-angular */ 30763);
/* harmony import */ var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/error-page/error.module */ 88784);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy-details/policy-details.component */ 33839);
/* harmony import */ var _common_layout_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-layout/common-layout/common-layout.component */ 49699);
/* harmony import */ var _claim_documents_claim_documents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim-documents/claim-documents.component */ 17542);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/google-maps */ 26715);
/* harmony import */ var _estimate_claim_estimate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../estimate/claim-estimate.component */ 59532);
/* harmony import */ var _garages_garage_details_garage_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../garages/garage-details/garage-details.component */ 39090);
/* harmony import */ var _claim_images_claim_images_claim_images_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./claim-images/claim-images/claim-images.component */ 35775);
/* harmony import */ var _loss_detail_loss_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loss-detail/loss-detail.component */ 66140);
/* harmony import */ var _policy_details_customer_details_view_customer_details_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./policy-details/customer-details-view/customer-details-view.component */ 10338);
/* harmony import */ var src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/helper/directive/directive.module */ 67798);
/* harmony import */ var src_app_dialogs_settle_claim_dialog_settle_claim_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dialogs/settle-claim-dialog/settle-claim-dialog.component */ 80826);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var src_app_guards_claim_component_guard_claim_component_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/guards/claim-component-guard/claim-component.guard */ 15430);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/helper/pipe.module */ 39816);
/* harmony import */ var src_app_guards_navigation_guard_navigation_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/guards/navigation-guard/navigation-guard */ 4028);
/* harmony import */ var src_app_dialogs_customer_policy_details_dialog_customer_policy_details_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dialogs/customer-policy-details-dialog/customer-policy-details-dialog.component */ 13605);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _third_party_registered_garages_registered_garage_assignment_action_registered_garage_assignment_action_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./third-party-registered-garages/registered-garage-assignment-action/registered-garage-assignment-action.component */ 25123);
/* harmony import */ var _fraud_detection_fraud_detection_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fraud-detection/fraud-detection.component */ 98571);
/* harmony import */ var src_app_shared_history_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/history/history.component */ 65504);
/* harmony import */ var _third_party_registered_garages_registered_garage_request_estimate_action_registered_garage_request_estimate_action_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./third-party-registered-garages/registered-garage-request-estimate-action/registered-garage-request-estimate-action.component */ 4165);
/* harmony import */ var _third_party_registered_garages_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./third-party-registered-garages/common-layout/common-layout.component */ 66543);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _third_party_registered_garages_registered_garage_request_invoice_action_registered_garage_request_invoice_action_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./third-party-registered-garages/registered-garage-request-invoice-action/registered-garage-request-invoice-action.component */ 71201);
/* harmony import */ var _third_party_registered_garages_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./third-party-registered-garages/verify-otp/verify-otp.component */ 10969);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-otp-input */ 79306);
/* harmony import */ var _garages_garages_list_garages_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../garages/garages-list/garages-list.component */ 76485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 22560);






































const claimRoutes = [{
  path: '',
  canActivate: [src_app_guards_claim_component_guard_claim_component_guard__WEBPACK_IMPORTED_MODULE_14__.ClaimComponentGuard],
  component: _policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_3__.PolicyDetailsComponent,
  canDeactivate: [src_app_guards_navigation_guard_navigation_guard__WEBPACK_IMPORTED_MODULE_17__.NavigationGuard]
}, {
  path: 'loss-detail',
  canActivate: [src_app_guards_claim_component_guard_claim_component_guard__WEBPACK_IMPORTED_MODULE_14__.ClaimComponentGuard],
  component: _loss_detail_loss_detail_component__WEBPACK_IMPORTED_MODULE_10__.LossDetailComponent,
  canDeactivate: [src_app_guards_navigation_guard_navigation_guard__WEBPACK_IMPORTED_MODULE_17__.NavigationGuard]
}, {
  path: 'document',
  component: _claim_documents_claim_documents_component__WEBPACK_IMPORTED_MODULE_5__.ClaimDocumentsComponent,
  canActivate: [src_app_guards_claim_component_guard_claim_component_guard__WEBPACK_IMPORTED_MODULE_14__.ClaimComponentGuard],
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__.VersionControlResolver
  }
}, {
  path: 'photos',
  component: _claim_images_claim_images_claim_images_component__WEBPACK_IMPORTED_MODULE_9__.ClaimImagesComponent,
  canActivate: [src_app_guards_claim_component_guard_claim_component_guard__WEBPACK_IMPORTED_MODULE_14__.ClaimComponentGuard],
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__.VersionControlResolver
  }
}, {
  path: 'garages',
  component: _garages_garages_list_garages_list_component__WEBPACK_IMPORTED_MODULE_26__.GaragesListComponent,
  canActivate: [src_app_guards_claim_component_guard_claim_component_guard__WEBPACK_IMPORTED_MODULE_14__.ClaimComponentGuard],
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__.VersionControlResolver
  }
}, {
  path: 'garages/:garageId/garage-details',
  canActivate: [src_app_guards_claim_component_guard_claim_component_guard__WEBPACK_IMPORTED_MODULE_14__.ClaimComponentGuard],
  component: _garages_garage_details_garage_details_component__WEBPACK_IMPORTED_MODULE_8__.GarageDetailsComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__.VersionControlResolver
  }
}, {
  path: 'estimate',
  component: _estimate_claim_estimate_component__WEBPACK_IMPORTED_MODULE_7__.ClaimEstimateComponent,
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_27__.MsalGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_claim_estimate_estimate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../estimate/estimate.module */ 97573)).then(m => m.EstimateModule)
}, {
  path: 'customer-view',
  component: _policy_details_customer_details_view_customer_details_view_component__WEBPACK_IMPORTED_MODULE_11__.CustomerDetailsViewComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_6__.VersionControlResolver
  }
}];
class ClaimManagementModule {
  static #_ = this.ɵfac = function ClaimManagementModule_Factory(t) {
    return new (t || ClaimManagementModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
    type: ClaimManagementModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
    providers: [src_app_guards_navigation_guard_navigation_guard__WEBPACK_IMPORTED_MODULE_17__.NavigationGuard],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule.forChild(claimRoutes), src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
    // MatDatepickerModule,
    // MatIconModule,
    src_app_material_module__WEBPACK_IMPORTED_MODULE_15__.MaterialModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_0__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_32__.DxDateBoxModule,
    // MatProgressSpinnerModule,
    _angular_google_maps__WEBPACK_IMPORTED_MODULE_33__.GoogleMapsModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_12__.DirectiveModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_34__.ScrollingModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__.MatExpansionModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_36__.NgOtpInputModule, src_app_shared_history_history_component__WEBPACK_IMPORTED_MODULE_21__.HistoryComponent, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_16__.PipeModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](ClaimManagementModule, {
    declarations: [_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_3__.PolicyDetailsComponent, _common_layout_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_4__.CommonLayoutComponent, _claim_documents_claim_documents_component__WEBPACK_IMPORTED_MODULE_5__.ClaimDocumentsComponent, _garages_garages_list_garages_list_component__WEBPACK_IMPORTED_MODULE_26__.GaragesListComponent, _claim_images_claim_images_claim_images_component__WEBPACK_IMPORTED_MODULE_9__.ClaimImagesComponent, _loss_detail_loss_detail_component__WEBPACK_IMPORTED_MODULE_10__.LossDetailComponent, _policy_details_customer_details_view_customer_details_view_component__WEBPACK_IMPORTED_MODULE_11__.CustomerDetailsViewComponent, src_app_dialogs_settle_claim_dialog_settle_claim_dialog_component__WEBPACK_IMPORTED_MODULE_13__.SettleClaimDialogComponent, _third_party_registered_garages_registered_garage_assignment_action_registered_garage_assignment_action_component__WEBPACK_IMPORTED_MODULE_19__.RegisteredGarageAssignmentActionComponent, src_app_dialogs_customer_policy_details_dialog_customer_policy_details_dialog_component__WEBPACK_IMPORTED_MODULE_18__.CustomerPolicyDetailsDialogComponent, _fraud_detection_fraud_detection_component__WEBPACK_IMPORTED_MODULE_20__.FraudDetectionComponent, _third_party_registered_garages_registered_garage_request_estimate_action_registered_garage_request_estimate_action_component__WEBPACK_IMPORTED_MODULE_22__.RegisteredGarageRequestEstimateActionComponent, _third_party_registered_garages_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_23__.ThirdPartyCommonLayoutComponent, _third_party_registered_garages_registered_garage_request_invoice_action_registered_garage_request_invoice_action_component__WEBPACK_IMPORTED_MODULE_24__.RegisteredGarageRequestInvoiceActionComponent, _third_party_registered_garages_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_25__.VerifyOtpComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
    // MatDatepickerModule,
    // MatIconModule,
    src_app_material_module__WEBPACK_IMPORTED_MODULE_15__.MaterialModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_0__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_32__.DxDateBoxModule,
    // MatProgressSpinnerModule,
    _angular_google_maps__WEBPACK_IMPORTED_MODULE_33__.GoogleMapsModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_12__.DirectiveModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_34__.ScrollingModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__.MatExpansionModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_36__.NgOtpInputModule, src_app_shared_history_history_component__WEBPACK_IMPORTED_MODULE_21__.HistoryComponent, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_16__.PipeModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule]
  });
})();

/***/ }),

/***/ 66140:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/claim/claim-management/loss-detail/loss-detail.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LossDetailComponent": () => (/* binding */ LossDetailComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var src_app_dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialogs/reject-claim-dialog/reject-claim-dialog.component */ 6288);
/* harmony import */ var src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helper/form/claim-form.helper */ 43941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../helper/directive/claim-roles.directive */ 65872);

























const _c0 = ["accidentDate"];
const _c1 = ["state"];
const _c2 = ["model"];
const _c3 = ["year"];
const _c4 = ["uploader"];
function LossDetailComponent_ng_container_61_div_28_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span")(1, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LossDetailComponent_ng_container_61_div_28_span_8_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ii_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().index;
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.handleFileRemove(i_r7, ii_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "cross");
  }
}
function LossDetailComponent_ng_container_61_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 40)(4, "span")(5, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LossDetailComponent_ng_container_61_div_28_Template_mat_icon_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const f_r13 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.handleFileDownload(f_r13.blobUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span")(7, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LossDetailComponent_ng_container_61_div_28_Template_mat_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const f_r13 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.handleFilePreview(f_r13.blobUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, LossDetailComponent_ng_container_61_div_28_span_8_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r13 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](f_r13 == null ? null : f_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "download-arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r10.showSaveButton && ctx_r10.isEditAllowed);
  }
}
function LossDetailComponent_ng_container_61_chq_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "chq-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LossDetailComponent_ng_container_61_chq_button_29_Template_chq_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.handleAddFileClick($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r11.UploadAttachmentButtonModel);
  }
}
function LossDetailComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 24)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 4)(6, "chq-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "chq-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 4)(9, "chq-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "chq-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r30.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 4)(12, "chq-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r31.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "chq-input", 5, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_13_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r32.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 4)(16, "chq-input", 5, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_16_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r33.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "chq-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_18_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r34.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 4)(20, "div", 29)(21, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 31)(25, "chq-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_ng_container_61_Template_chq_input_controlOutput_25_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r35.onOtherVehicleFormUpdate($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 32)(27, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, LossDetailComponent_ng_container_61_div_28_Template, 9, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, LossDetailComponent_ng_container_61_chq_button_29_Template, 1, 1, "chq-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function LossDetailComponent_ng_container_61_Template_input_change_30_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const i_r7 = restoredCtx.index;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.handleUpload($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 13, "other_vehicle_involved"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.vehicleOwnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.insuranceCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.vehicleChasisNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.vehicleRegistrationNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](23, 15, "is_other_vehicle_involved_at_fault"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", item_r6.faultType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.file[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.file[i_r7].length < 3 && ctx_r1.showSaveButton && ctx_r1.isEditAllowed);
  }
}
function LossDetailComponent_chq_button_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "chq-button", 43);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r2.addvehicleInvoledButtonModel);
  }
}
function LossDetailComponent_ng_container_70_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "chq-button", 45);
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r37.cancelButtonModel);
  }
}
function LossDetailComponent_ng_container_70_chq_button_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "chq-button", 45);
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r38.editDetailsModel);
  }
}
function LossDetailComponent_ng_container_70_chq_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "chq-button", 45);
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r39.saveButtonModel);
  }
}
function LossDetailComponent_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LossDetailComponent_ng_container_70_chq_button_1_Template, 1, 1, "chq-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LossDetailComponent_ng_container_70_chq_button_2_Template, 1, 1, "chq-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, LossDetailComponent_ng_container_70_chq_button_3_Template, 1, 1, "chq-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.showSaveButton && ctx_r3.isEditAllowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.showEditDetailsButtons && ctx_r3.isEditAllowed && ctx_r3.showEditDeleteButtonsClaim && !ctx_r3.commonService.isViewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.showSaveButton && ctx_r3.isEditAllowed);
  }
}
function LossDetailComponent_ng_container_71_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "chq-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LossDetailComponent_ng_container_71_chq_button_1_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r42.openRejectClaimPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r40.rejectButtonModel);
  }
}
function LossDetailComponent_ng_container_71_ng_container_2_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "chq-button", 45);
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r44.approveButtonModel);
  }
}
function LossDetailComponent_ng_container_71_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LossDetailComponent_ng_container_71_ng_container_2_chq_button_1_Template, 1, 1, "chq-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimManager");
  }
}
function LossDetailComponent_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LossDetailComponent_ng_container_71_chq_button_1_Template, 1, 1, "chq-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, LossDetailComponent_ng_container_71_ng_container_2_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimManager");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r4.claimDetails == null ? null : ctx_r4.claimDetails.claimStatus) !== ctx_r4.claimStatus.EstimateRejected);
  }
}
function LossDetailComponent_ng_container_72_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "chq-button", 45);
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r45.settleClaimButtonModel);
  }
}
function LossDetailComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, LossDetailComponent_ng_container_72_chq_button_1_Template, 1, 1, "chq-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimManager");
  }
}
const _c5 = function (a0, a1) {
  return {
    "text-mode bg-tab-default-content": a0,
    "page-wrapper": a1
  };
};
dayjs__WEBPACK_IMPORTED_MODULE_1__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
class LossDetailComponent {
  /**
  * constructor
  * @param router
  */
  constructor(router, commonService, monitorService, formBuilder, translateService, calendarService, claimsService, route, vehicleService, dialog) {
    this.router = router;
    this.commonService = commonService;
    this.monitorService = monitorService;
    this.formBuilder = formBuilder;
    this.translateService = translateService;
    this.calendarService = calendarService;
    this.claimsService = claimsService;
    this.route = route;
    this.vehicleService = vehicleService;
    this.dialog = dialog;
    this.isFormConfirmed = false;
    this.maxThirdPartyVehiclesInvolved = 3;
    this.thirdPartyInsuranceCompanies = [];
    this.additionalInfoMakeList = [];
    this.file = [];
    this.currentStatus = '';
    this.showEditDetailsButtons = false;
    this.showSaveButton = false;
    this.isSaveButtonClicked = false; // To Prevent showing cancle conformation popup on save button click
    this.showEditDeleteButtonsClaim = true;
    this.isEditAllowed = false;
    this.userDetails = {};
    this.canShowApproveRejectButton = false;
    this.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS;
    this.saveButtonModel = {
      label: 'save',
      type: 'disabled',
      onclick: this.save.bind(this)
    };
    this.editDetailsModel = {
      label: 'edit_details',
      type: 'outline',
      onclick: this.editDetails.bind(this)
    };
    this.cancelButtonModel = {
      label: 'cancel',
      type: 'outline',
      onclick: this.cancel.bind(this)
    };
    this.deleteButtonModel = {
      label: 'delete',
      type: 'outline-danger',
      onclick: this.delete.bind(this)
    };
    this.addvehicleInvoledButtonModel = {
      label: 'add_vehicle_involved',
      type: 'outline',
      icon: 'plus-active',
      onclick: this.addvehicleInvoled.bind(this)
    };
    this.UploadAttachmentButtonModel = {
      label: 'upload_attachment',
      type: 'outline',
      icon: 'attachment'
    };
    //claim status
    this.rejectButtonModel = {
      label: 'reject',
      type: 'outline-danger'
    };
    this.approveButtonModel = {
      label: 'approve',
      type: 'primary',
      onclick: this.approve.bind(this)
    };
    this.settleClaimButtonModel = {
      label: 'settle_claim',
      type: 'primary',
      onclick: this.settleClaim.bind(this)
    };
    this.route.parent?.params?.subscribe(data => {
      this.claimGuid = this.route.parent?.snapshot.paramMap.get('id');
      this.commonService.showLoading();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([this.getThirdPartyInsuranceCompanies(), this.getadditionalInfoMakeList()]).subscribe(result => {
        this.addvehicleInvoled();
        this.getClaimDetails();
      });
    });
    this.commonService.userProfileData.subscribe(res => {
      if (res?.data) {
        const {
          userPermission
        } = res.data;
        this.userPermission = userPermission;
      }
    });
  }
  /**
   * editing permissions
   */
  editPermissions() {
    const validStatuses = [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.Submitted, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ClaimSubmittedForApproval];
    if (validStatuses.includes(this.currentStatus)) {
      if (!this.checkClaimPermission('claim.selfapproval')) {
        return false;
      }
    }
    if (this.claimDetails?.assigneeId) {
      // if assignee is not user id then he cannot edit unless he is a manager.
      if (this.commonService.userId !== this.claimDetails?.assigneeId && !this.checkClaimPermission('claim.selfapproval')) {
        return false;
      }
    }
    return true;
  }
  /**
   * show approve reject buttons
   */
  showApproveRejectButtons() {
    if (this.commonService.isThirdPartyExternalGarage && this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.RepairEstimation || !this.commonService.isThirdPartyExternalGarage && this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.EstimateApproved || !this.commonService.isThirdPartyExternalGarage && this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.EstimateRejected) {
      return true;
    }
    return false;
  }
  /**
   * claim permission
   * @param permissionName
   */
  checkClaimPermission(permissionName) {
    const automotiveService = this.userPermission?.automotiveServices;
    const permissionList = automotiveService?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda claims')?.permissions;
    return this.commonService.hasPermission(permissionName, permissionList);
  }
  /**
   * Called from the navigation guard when navigating away from the page
   * Here we show the confirmation dialog
   */
  canDeactivate() {
    if (this.isEditAllowed && this.showSaveButton && !this.isSaveButtonClicked) {
      const dialogRef = this.commonService.openConfirmationOkDialog(this.translateService.instant('confirm_cancel'), this.translateService.instant('confirm_cancel_message'));
      return dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(response => {
        if (response) {
          return true; // Allow Navigation
        }

        return false; // Disallow Navigation
      }));
    } else {
      return true; // Allow Navigation
    }
  }
  /**
   * on init
   */
  ngOnInit() {
    var _this = this;
    this.formModel = (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_6__.newLossDetailsForm)();
    // Call setMode with text so that when calling the API field should not show as editable
    this.setMode('text');
    this.formModel = {
      ...this.formModel,
      additionalVehicleDetails: []
    };
    // Set Dropdown data
    if (!this.formModel.intimationType.observable) {
      this.formModel.intimationType.observable = this.claimsService.getLookup('CLMIntimationType');
      this.formModel.intimationType.onObservableLoad = this.onObservableLoad.bind(this, 'intimationType');
    }
    if (!this.formModel.subIntimationType.observable) {
      this.formModel.subIntimationType.observable = this.claimsService.getLookup('CLMSubIntimationType');
      this.formModel.subIntimationType.onObservableLoad = this.onObservableLoad.bind(this, 'subIntimationType');
    }
    if (!this.formModel.lossImpactZone.observable) {
      this.formModel.lossImpactZone.observable = this.claimsService.getLookup('CLMLossImpactZone');
      this.formModel.lossImpactZone.onObservableLoad = this.onObservableLoad.bind(this, 'lossImpactZone');
    }
    if (!this.formModel.natureofLoss.observable) {
      this.formModel.natureofLoss.observable = this.claimsService.getLookup('CLMNatureOfLoss');
      this.formModel.natureofLoss.onObservableLoad = this.onObservableLoad.bind(this, 'natureofLoss');
    }
    if (!this.formModel.causeOfLoss.observable) {
      this.formModel.causeOfLoss.observable = this.claimsService.getLookup('CLMCauseOfLoss');
      this.formModel.causeOfLoss.onObservableLoad = this.onObservableLoad.bind(this, 'causeOfLoss');
    }
    if (!this.formModel.repairType.observable) {
      this.formModel.repairType.observable = this.claimsService.getLookup('CLMRepairType');
      this.formModel.repairType.onObservableLoad = this.onObservableLoad.bind(this, 'repairType');
    }
    if (!this.formModel.lossSeverity.observable) {
      this.formModel.lossSeverity.observable = this.claimsService.getLookup('CLMLossSeverity');
      this.formModel.lossSeverity.onObservableLoad = this.onObservableLoad.bind(this, 'lossSeverity');
    }
    if (!this.formModel.damageType.observable) {
      this.formModel.damageType.observable = this.claimsService.getLookup('CLMDamageType');
      this.formModel.damageType.onObservableLoad = this.onObservableLoad.bind(this, 'damageType');
    }
    if (!this.formModel.country.observable) {
      this.formModel.country.observable = this.claimsService.getCountries();
      this.formModel.country.onObservableLoad = this.onObservableLoad.bind(this, 'country');
    }
    const date = dayjs__WEBPACK_IMPORTED_MODULE_1__().toDate();
    this.formModel.lossDateTime = {
      ...this.formModel.lossDateTime,
      maxDate: date,
      value: date,
      validation: {
        name: 'lossDateTime',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, this.isValidDateValidator(date, 'Loss date cannot be in the future')]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'required_date';
          } else if (error['message']) {
            return error['message'];
          } else {
            return '';
          }
        }
      }
    };
    this.commonService.userProfileData.subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (res && res.data) {
          const {
            vehicleSourceType
          } = res.data;
          _this.vehicleSourceTypeId = vehicleSourceType;
          _this.userDetails = res.data;
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  /**
   * check route params
   */
  checkRouteParams() {
    this.route.queryParams.subscribe(params => {
      const codeParam = params['mode'];
      if (codeParam === 'edit' && this.isEditAllowed === true) {
        this.setMode('value');
        if (!this.claimDetails?.lossDetails?.countryID && this.userDetails?.organizationDetail?.countryId) {
          this.populateDropdownData('country', this.userDetails.organizationDetail.countryId);
        }
      } else if (this.currentStatus) {
        this.setMode('text');
      }
    });
  }
  /**
   * @returns {void}
  */
  setMode(mode = 'text') {
    const keys = Object.keys(this.formModel);
    //this.formModel.additionalVehicleDetails;
    const keyToSkip = ['claimCreationDate'.toLowerCase(), 'lossSeverity'.toLowerCase()];
    keys.forEach(key => {
      if (key.toLowerCase() == 'additionalvehicledetails') {
        this.formModel.additionalVehicleDetails.forEach((vehicle, index) => {
          Object.keys(vehicle).forEach(k => {
            this.formModel.additionalVehicleDetails[index][k] = {
              ...this.formModel.additionalVehicleDetails[index][k],
              mode: mode
            };
          });
        });
      } else {
        if (!keyToSkip.includes(key.toLowerCase())) {
          this.formModel[key] = {
            ...this.formModel[key],
            mode: mode
          };
        }
      }
    });
    if (mode === 'value') {
      this.showSaveButton = true;
      this.showEditDetailsButtons = false;
    } else {
      this.showSaveButton = false;
      this.showEditDetailsButtons = true;
    }
  }
  /**
     * @returns {void}
    */
  editDetails() {
    // Bug 25826: Claim Manager is able to edit Claims created from FNOL/File a Claim without assigning
    if (this.checkClaimPermission('claim.selfapproval') && (this.commonService.claimWorkflowStage.includes('2Stage') || this.commonService.claimWorkflowStage.includes('3Stage')) && [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ClaimAuthenticated].includes(this.currentStatus)) {
      const dialog = this.commonService.openConfirmYesNoDialogBig('', 'msg_manager_review');
      dialog.afterClosed().subscribe(data => {
        if (data) {
          this.claimsService.updateClaimStatus(this.claimGuid, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ApprovalReviewInProgress).subscribe({
            next: response => {
              if (response) {
                this.commonService.showInfoToast(3000, `Status set to ${src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ApprovalReviewInProgress}`);
                this.currentStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ApprovalReviewInProgress;
                this.setMode('value');
                if (!this.claimDetails?.lossDetails?.countryID && this.userDetails?.organizationDetail?.countryId) {
                  this.populateDropdownData('country', this.userDetails.organizationDetail.countryId);
                }
              } else {
                this.router.navigate(['/claim/my-claim']);
              }
            }
          });
        } else {
          this.router.navigate(['/claim/my-claim']);
        }
      });
    } else {
      if (this.isEditAllowed) {
        this.setMode('value');
        if (!this.claimDetails?.lossDetails?.countryID && this.userDetails?.organizationDetail?.countryId) {
          this.populateDropdownData('country', this.userDetails.organizationDetail.countryId);
        }
      }
    }
  }
  /**
   * @returns {void}
  */
  onObservableLoad(type, items) {
    this.formModel[type] = {
      ...this.formModel[type],
      options: items
    };
    this.populateDropdownData(type);
  }
  /**
   * @returns {void}
  */
  getadditionalInfoMakeList() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.vehicleService.getVehicleMake()).then(response => {
      if (response) {
        this.additionalInfoMakeList = response || [];
      }
    }).catch(err => {
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_20__.SeverityLevel.Error);
    });
  }
  /**
   * @returns {void}
  */
  getThirdPartyInsuranceCompanies() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.claimsService.getLookup('CLMThirdPartyInsuranceCompany')).then(response => {
      if (response) {
        this.thirdPartyInsuranceCompanies = response.data || [];
      }
    }).catch(err => {
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_20__.SeverityLevel.Error);
    });
  }
  /**
   * @returns {void}
  */
  isValidDateValidator(maxDate, message) {
    return control => {
      if (new Date(control.value) > new Date(maxDate)) {
        return {
          invalid: true,
          message
        };
      }
      return null;
    };
  }
  /**
   * @returns {void}
  */
  canEdit() {
    return [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.Draft.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ClaimAuthenticated.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.DetailsUpdated.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.UploadDocuments.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.UploadPhotos.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.Submitted.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.Assigned.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ReviewInProgress.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.AssignedBack.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ApprovalReviewInProgress.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ClaimSubmittedForApproval.toLowerCase()].includes(this.currentStatus?.toLowerCase()?.trim()) ? true : false;
  }
  /**
   * @returns {void}
  */
  getClaimDetails() {
    this.commonService.showLoading();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.claimsService.getClaimDetail(this.claimGuid)).then(response => {
      this.commonService.hideLoading();
      // Set Loss date and time max date:
      if (response?.customerDetails?.expiryDate) {
        if (dayjs__WEBPACK_IMPORTED_MODULE_1__().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_1__(response.customerDetails.expiryDate))) {
          this.formModel.lossDateTime = {
            ...this.formModel.lossDateTime,
            maxDate: dayjs__WEBPACK_IMPORTED_MODULE_1__(response.customerDetails.expiryDate).toDate(),
            value: dayjs__WEBPACK_IMPORTED_MODULE_1__(response.customerDetails.expiryDate).toDate()
          };
          this.formModel.lossDateTime.formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, this.isValidDateValidator(response.customerDetails.expiryDate, 'Loss date and time can\'t be after policy expiry date.')]));
        }
      }
      if (response) {
        this.claimDetails = response;
        this.currentStatus = response.claimStatus;
        this.isEditAllowed = this.canEdit();
        this.commonService.claimDetails.next(response);
        this.commonService.claimStatus.next(this.currentStatus);
        // This indicates the policy has just been updated from the DRAFT status to claim authenticated from Customer Details Section from FNOL
        // change to Review in Progress for Stage2 claim reviewer and Approval Review in Progress for Stage1 manager
        if (this.currentStatus == src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ClaimAuthenticated && response.fnolId) {
          if (this.checkClaimPermission('claim.submitforapproval') && this.commonService.claimWorkflowStage.includes('2Stage') || this.checkClaimPermission('claim.selfapproval') && this.commonService.claimWorkflowStage.includes('1Stage')) {
            const status = this.checkClaimPermission('claim.submitforapproval') ? src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ReviewInProgress : src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ApprovalReviewInProgress;
            this.updateStatusToReviewOrApprovalInProgress(status);
          } else if (this.checkClaimPermission('claim.selfapproval') && this.commonService.claimWorkflowStage.includes('2Stage')) {
            const dialog = this.commonService.openConfirmYesNoDialogBig('', 'msg_manager_review');
            dialog.afterClosed().subscribe(data => {
              if (data) {
                this.updateStatusToReviewOrApprovalInProgress(src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.ApprovalReviewInProgress);
              }
            });
          }
        }
        this.showEditDeleteButtonsClaim = this.editPermissions();
        this.canShowApproveRejectButton = this.showApproveRejectButtons();
        this.prepopulateFormData();
      }
      this.checkRouteParams();
    }).catch(err => {
      this.commonService.hideLoading();
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_20__.SeverityLevel.Error);
    });
  }
  /**
   * update status to review in progress
   */
  updateStatusToReviewOrApprovalInProgress(status) {
    this.claimsService.updateClaimStatus(this.claimGuid, status).subscribe({
      next: response => {
        if (response) {
          this.commonService.showInfoToast(3000, `Status set to ${status}`);
          this.claimDetails.claimStatus = this.currentStatus = status;
          this.commonService.claimStatus.next(this.currentStatus);
          this.commonService.claimDetails.next(this.claimDetails);
        }
      }
    });
  }
  /**
  Handles the click event for the "Add File" button.
  @param {Event} event - The click event.
  @returns {void}
  */
  handleAddFileClick(event, index) {
    this.uploader.toArray()[index].nativeElement.click();
  }
  /**
  @returns {void}
  */
  handleFileDownload(url) {
    const urls = url.split('/');
    const fileName = urls[urls?.length - 1]?.split('?')[0];
    this.commonService.showLoading();
    this.commonService.getFileBlob(url).subscribe({
      next: value => {
        this.commonService.hideLoading();
        const blob = new Blob([value.res], {
          type: 'application/octet-stream'
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(blob, fileName);
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err);
      }
    });
  }
  /**
  @returns {void}
  */
  handleFilePreview(url) {
    window.open(url, '_blank');
  }
  /**
   * checks file size
   * @param blob
   * @returns boolean
   */
  checkFileSize(img) {
    this.monitorService.logEvent('checkFileSize', ['LossDetailComponent', 'addenda-claim', {
      fileSize: img.size
    }]);
    if (img.size > this.commonService.maxileSize) {
      return false;
    }
    return true;
  }
  /**
   * checkx filename
   * @param filename
   * @returns
   */
  isValidImageFile(filename) {
    const regex = new RegExp('^.*\\.[a-zA-Z]+$', 'gm');
    this.monitorService.logEvent('isValidImageFile', ['LossDetailComponent', 'addenda-claim', {
      fileName: filename
    }]);
    if (regex.test(filename)) {
      const extension = filename.split('.').pop();
      return ['png', 'jpg', 'jpeg', 'pdf'].includes(extension?.toLowerCase());
    }
    return false;
  }
  /**
   * handle file upload
   * @param event
  */
  handleUpload(event, index) {
    const currentFile = event.target.files || event.srcElement.files;
    this.monitorService.logEvent('handleUpload', ['LossDetailComponent', 'addenda-claim', {
      event
    }]);
    if (currentFile !== null && currentFile !== '' && currentFile.length > 0) {
      if (!this.checkFileSize(currentFile[0])) {
        const message = this.translateService.instant('file_size_5mb_error_message');
        this.commonService.showToast(0, message);
        this.uploader.toArray()[index].nativeElement.value = null;
        return;
      }
      if (!this.isValidImageFile(currentFile[0].name)) {
        const message = this.translateService.instant('upload_type_not_supported');
        this.commonService.showToast(0, message);
        this.uploader.toArray()[index].nativeElement.value = null;
        return;
      }
      this.commonService.showLoading();
      this.claimsService.uploadDocument({
        claimGuid: this.claimGuid,
        files: currentFile
      }).subscribe({
        next: result => {
          this.commonService.hideLoading();
          if (result?.data?.length > 0) {
            this.file[index].push(result.data[0]);
          }
        },
        error: err => {
          this.commonService.hideLoading();
          this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_20__.SeverityLevel.Error);
        }
      });
    } else {
      this.checkForFormValidation();
      return;
    }
  }
  /**
    Removes a file from the component's state.
    @param {any} event - The event object that triggered the function.
    @returns {void}
  */
  handleFileRemove(index, innerindex) {
    this.commonService.openDeleteDialog('', this.translateService.instant('attachment_delete_confirmation'), this.translateService.instant('delete'), this.translateService.instant('cancel')).afterClosed().subscribe(data => {
      if (data) {
        this.monitorService.logEvent('handleFileRemove', ['LossDetailComponent', 'addenda-claims']);
        this.commonService.showLoading();
        this.claimsService.removeDocument({
          documentUrl: this.file[index][innerindex].blobUrl
        }).subscribe({
          next: result => {
            this.commonService.hideLoading();
            this.file[index].splice(innerindex, 1);
          },
          error: err => {
            this.commonService.hideLoading();
            this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_20__.SeverityLevel.Error);
          }
        });
      }
    });
  }
  /**
   * @returns {void}
  */
  prepopulateFormData() {
    if (this.claimDetails) {
      const lossDetails = this.claimDetails?.lossDetails || {};
      if (this.claimDetails?.claimantAtFault === true || this.claimDetails?.claimantAtFault === false) {
        this.formModel.claimantAtFault.value = this.claimDetails?.claimantAtFault ? 'At Fault' : 'Non Fault';
      }
      if (lossDetails.claimCreationDate) {
        this.formModel.claimCreationDate = {
          ...this.formModel.claimCreationDate,
          value: lossDetails.claimCreationDate
        };
      }
      if (lossDetails.lossDate) {
        this.formModel.lossDateTime = {
          ...this.formModel.lossDateTime,
          value: dayjs__WEBPACK_IMPORTED_MODULE_1__.utc(lossDetails.lossDate).local().format()
        };
      }
      if (lossDetails.lossLocation) {
        this.formModel.lossLocation = {
          ...this.formModel.lossLocation,
          value: lossDetails.lossLocation
        };
      }
      if (lossDetails.salvageAmount) {
        this.formModel.salvageAmount = {
          ...this.formModel.salvageAmount,
          value: lossDetails.salvageAmount
        };
      }
      if (lossDetails.isTotalLoss) {
        this.formModel.totalLoss = {
          ...this.formModel.totalLoss,
          value: 'Yes'
        };
      }
      if (lossDetails.lossDescription) {
        this.formModel.lossDescription = {
          ...this.formModel.lossDescription,
          value: lossDetails.lossDescription
        };
      }
      if (lossDetails.lossLocationLatitude) {
        this.lossLocationLatitude = lossDetails.lossLocationLatitude;
      }
      if (lossDetails.lossLocationLongitude) {
        this.lossLocationLongitude = lossDetails.lossLocationLongitude;
      }
      if (lossDetails.isCarAtDifferentLoc === true || lossDetails.isCarAtDifferentLoc === false) {
        this.formModel.isCarLocationDifferent.value = lossDetails.isCarAtDifferentLoc ? 'Yes' : 'No';
        this.setCarLocationValidation(this.formModel.isCarLocationDifferent.value);
      }
      if (lossDetails.policeReferenceNo) {
        this.formModel.policeReferenceNumber = {
          ...this.formModel.policeReferenceNumber,
          value: lossDetails.policeReferenceNo
        };
      }
      if (lossDetails.carLocation) {
        this.formModel.vehicleLocation = {
          ...this.formModel.vehicleLocation,
          value: lossDetails.carLocation
        };
      }
      if (lossDetails.carLocationLatitude) {
        this.carLocationLatitude = lossDetails.carLocationLatitude;
      }
      if (lossDetails.carLocationLongitude) {
        this.carLocationLongitude = lossDetails.carLocationLongitude;
      }
      this.populateDropdownData('state');
      this.populateDropdownData('country');
      this.populateDropdownData('intimationType');
      this.populateDropdownData('subIntimationType');
      this.populateDropdownData('natureofLoss');
      this.populateDropdownData('lossSeverity');
      this.populateDropdownData('damageType');
      this.populateDropdownData('lossImpactZone');
      this.populateDropdownData('causeOfLoss');
      this.populateDropdownData('repairType');
      if (lossDetails?.additionalLossDetails?.length > 0) {
        // Add no of additional vehicle which got from API
        lossDetails.additionalLossDetails.forEach((element, index) => {
          if (!this.formModel.additionalVehicleDetails[index]) {
            const newVehicleDetail = (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_6__.newVehicleDetailsForm)();
            newVehicleDetail.make.options = this.additionalInfoMakeList;
            newVehicleDetail.insuranceCompany.options = this.thirdPartyInsuranceCompanies;
            this.formModel.additionalVehicleDetails[index] = newVehicleDetail;
            this.file[index] = [];
          }
        });
        // Prepopulate data
        lossDetails.additionalLossDetails.forEach((element, index) => {
          if (element.vinNum) {
            this.formModel.additionalVehicleDetails[index].vehicleChasisNumber = {
              ...this.formModel.additionalVehicleDetails[index].vehicleChasisNumber,
              value: element.vinNum
            };
          }
          if (element.vehicleOwnerName) {
            this.formModel.additionalVehicleDetails[index].vehicleOwnerName = {
              ...this.formModel.additionalVehicleDetails[index].vehicleOwnerName,
              value: element.vehicleOwnerName
            };
          }
          if (element.plateNo) {
            this.formModel.additionalVehicleDetails[index].vehicleRegistrationNum = {
              ...this.formModel.additionalVehicleDetails[index].vehicleRegistrationNum,
              value: element.plateNo
            };
          }
          if (element.policyNo) {
            this.formModel.additionalVehicleDetails[index].policyNumber = {
              ...this.formModel.additionalVehicleDetails[index].policyNumber,
              value: element.policyNo
            };
          }
          if (element.isOtherVehicleFault) {
            this.formModel.additionalVehicleDetails[index].faultType = {
              ...this.formModel.additionalVehicleDetails[index].faultType,
              value: 'At Fault'
            };
          }
          if (element.insuranceCompanyName) {
            const selected = this.formModel.additionalVehicleDetails[index].insuranceCompany.options.find(ele => ele.name === element.insuranceCompanyName);
            if (selected) {
              this.formModel.additionalVehicleDetails[index].insuranceCompany = {
                ...this.formModel.additionalVehicleDetails[index].insuranceCompany,
                selectedOption: selected
              };
            }
          }
          if (element.make) {
            const selected = this.formModel.additionalVehicleDetails[index].make.options.find(ele => ele.name === element.make);
            if (selected) {
              this.formModel.additionalVehicleDetails[index].make = {
                ...this.formModel.additionalVehicleDetails[index].make,
                selectedOption: selected
              };
              this.formModel.additionalVehicleDetails[index].model = {
                ...this.formModel.additionalVehicleDetails[index].model,
                observable: this.vehicleService.getVehicleModel(selected.id, this.vehicleSourceTypeId),
                onObservableLoad: this.onObservableLoadModel.bind(this, index),
                selectedOption: {}
              };
              setTimeout(() => {
                this.model.toArray()[index].triggerObservable();
              });
            }
          }
          if (element?.lossDocuments?.length > 0) {
            this.file[index] = element.lossDocuments;
          }
        });
      }
      setTimeout(() => {
        this.checkForFormValidation();
      });
    }
  }
  /**
   * @returns {void}
  */
  onObservableLoadModel(index, items) {
    this.formModel.additionalVehicleDetails[index].model = {
      ...this.formModel.additionalVehicleDetails[index].model,
      options: items
    };
    if (this.claimDetails?.lossDetails?.additionalLossDetails[index]?.model) {
      const selected = items.find(ele => ele.modelDescription === this.claimDetails.lossDetails.additionalLossDetails[index].model);
      if (selected) {
        this.formModel.additionalVehicleDetails[index].model = {
          ...this.formModel.additionalVehicleDetails[index].model,
          selectedOption: selected
        };
        this.formModel.additionalVehicleDetails[index].year = {
          ...this.formModel.additionalVehicleDetails[index].year,
          observable: this.vehicleService.getVehicleYearByModel(selected.id, this.vehicleSourceTypeId),
          onObservableLoad: this.onObservableLoadYear.bind(this, index),
          selectedOption: {}
        };
        setTimeout(() => {
          this.year.toArray()[index].triggerObservable();
        });
      }
    }
  }
  /**
   * @returns {void}
  */
  onObservableLoadYear(index, items) {
    this.formModel.additionalVehicleDetails[index].year = {
      ...this.formModel.additionalVehicleDetails[index].year,
      options: items
    };
    if (this.claimDetails?.lossDetails?.additionalLossDetails[index]?.year) {
      const selected = items.find(ele => ele.name === this.claimDetails.lossDetails.additionalLossDetails[index].year);
      if (selected) {
        this.formModel.additionalVehicleDetails[index].year = {
          ...this.formModel.additionalVehicleDetails[index].year,
          selectedOption: selected
        };
      }
    }
  }
  /**
   * @returns {void}
  */
  populateDropdownData(dropdownType, countryId = '') {
    switch (dropdownType) {
      case 'state':
        {
          if (this.claimDetails?.lossDetails?.stateId && this.formModel.state?.options?.length > 0) {
            const selectedState = this.formModel.state?.options.find(ele => ele.id === this.claimDetails.lossDetails.stateId);
            if (selectedState) {
              this.formModel.state = {
                ...this.formModel.state,
                selectedOption: selectedState
              };
            }
          }
          break;
        }
      case 'country':
        {
          if ((this.claimDetails?.lossDetails?.countryID || countryId) && this.formModel.country?.options?.length > 0) {
            const selectedCountry = this.formModel.country?.options.find(ele => ele.id === this.claimDetails.lossDetails.countryID || ele.id === countryId);
            if (selectedCountry) {
              this.formModel.country = {
                ...this.formModel.country,
                selectedOption: selectedCountry
              };
              this.formModel.state = {
                ...this.formModel.state,
                observable: this.claimsService.getStates(selectedCountry.id),
                onObservableLoad: this.onObservableLoad.bind(this, 'state'),
                selectedOption: {}
              };
              setTimeout(() => {
                this.state.triggerObservable();
              }, 100);
            }
          }
          break;
        }
      case 'intimationType':
        {
          if (this.claimDetails?.lossDetails?.intimationTypeID && this.formModel.intimationType?.options?.length > 0) {
            const selectedintimationType = this.formModel.intimationType?.options.find(ele => ele.id === this.claimDetails.lossDetails.intimationTypeID);
            if (selectedintimationType) {
              this.formModel.intimationType = {
                ...this.formModel.intimationType,
                selectedOption: selectedintimationType
              };
            }
          }
          break;
        }
      case 'subIntimationType':
        {
          if (this.claimDetails?.lossDetails?.subIntimationTypeId && this.formModel.subIntimationType?.options?.length > 0) {
            const selectedSubintimationType = this.formModel.subIntimationType?.options.find(ele => ele.id === this.claimDetails.lossDetails.subIntimationTypeId);
            if (selectedSubintimationType) {
              this.formModel.subIntimationType = {
                ...this.formModel.subIntimationType,
                selectedOption: selectedSubintimationType
              };
            }
          }
          break;
        }
      case 'natureofLoss':
        {
          if (this.claimDetails?.lossDetails?.natureOfLossId && this.formModel.natureofLoss?.options?.length > 0) {
            const selected = this.formModel.natureofLoss?.options.find(ele => ele.id === this.claimDetails.lossDetails.natureOfLossId);
            if (selected) {
              this.formModel.natureofLoss = {
                ...this.formModel.natureofLoss,
                selectedOption: selected
              };
            }
          }
          break;
        }
      case 'lossSeverity':
        {
          if (this.claimDetails?.lossDetails?.lossSeverityId && this.formModel.lossSeverity?.options?.length > 0) {
            const selected = this.formModel.lossSeverity?.options.find(ele => ele.id === this.claimDetails.lossDetails.lossSeverityId);
            if (selected) {
              this.formModel.lossSeverity = {
                ...this.formModel.lossSeverity,
                selectedOption: selected
              };
            }
          }
          break;
        }
      case 'lossImpactZone':
        {
          if (this.claimDetails?.lossDetails?.lossImpactZoneId && this.formModel.lossImpactZone?.options?.length > 0) {
            const selected = this.formModel.lossImpactZone?.options.find(ele => ele.id === this.claimDetails.lossDetails.lossImpactZoneId);
            if (selected) {
              this.formModel.lossImpactZone = {
                ...this.formModel.lossImpactZone,
                selectedOption: selected
              };
            }
          }
          break;
        }
      case 'causeOfLoss':
        {
          if (this.claimDetails?.lossDetails?.causeOfLoss && this.formModel.causeOfLoss?.options?.length > 0) {
            const selected = this.formModel.causeOfLoss?.options.find(ele => ele.name === this.claimDetails.lossDetails.causeOfLoss);
            if (selected) {
              this.formModel.causeOfLoss = {
                ...this.formModel.causeOfLoss,
                selectedOption: selected
              };
            }
          }
          break;
        }
      case 'repairType':
        {
          if (this.claimDetails?.lossDetails?.repairTypeId && this.formModel.repairType?.options?.length > 0) {
            const selected = this.formModel.repairType?.options.find(ele => ele.id === this.claimDetails.lossDetails.repairTypeId);
            if (selected) {
              this.formModel.repairType = {
                ...this.formModel.repairType,
                selectedOption: selected
              };
            }
          }
          break;
        }
      case 'damageType':
        {
          if (this.claimDetails?.lossDetails?.damageTypeId && this.formModel.damageType?.options?.length > 0) {
            const selected = this.formModel.damageType?.options.find(ele => ele.id === this.claimDetails.lossDetails.damageTypeId);
            if (selected) {
              this.formModel.damageType = {
                ...this.formModel.damageType,
                selectedOption: selected
              };
            }
          }
          break;
        }
      default:
        {
          return;
        }
    }
    this.checkForFormValidation();
  }
  /**
   * on form update
   * @param output o
   */
  onFormUpdate(output) {
    var _this2 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (output.type === 'select') {
        _this2.formModel[output.name] = {
          ..._this2.formModel[output.name],
          selectedOption: output.value
        };
        // GET states of selected country
        if (output.name === 'country' && output.value?.id) {
          _this2.formModel.state = {
            ..._this2.formModel.state,
            observable: _this2.claimsService.getStates(output.value.id),
            selectedOption: {}
          };
          setTimeout(() => {
            _this2.state.triggerObservable();
          }, 100);
        }
      } else if (output.name === 'lossLocation') {
        // If user selected from dropdown output.value will be complete object if user type it and not select from dropdown value will be string
        if (output.value instanceof Object) {
          _this2.formModel[output.name].value = output.value.name + ', ' + output.value.formatted_address;
          _this2.lossLocationLatitude = output.value.geometry.location.lat();
          _this2.lossLocationLongitude = output.value.geometry.location.lng();
        } else {
          _this2.formModel[output.name].value = output.value;
        }
      } else if (output.name === 'vehicleLocation') {
        // If user selected from dropdown output.value will be complete object if user type it and not select from dropdown value will be string
        if (output.value instanceof Object) {
          _this2.formModel[output.name].value = output.value.name + ', ' + output.value.formatted_address;
          _this2.carLocationLatitude = output.value.geometry.location.lat();
          _this2.carLocationLongitude = output.value.geometry.location.lng();
        } else {
          _this2.formModel[output.name].value = output.value;
        }
      } else {
        _this2.formModel[output.name].value = output.value;
        if (output.name === 'totalLoss') {
          _this2.setSalvageAmountValidation(output.value);
        }
        if (output.name === 'isCarLocationDifferent') {
          _this2.setCarLocationValidation(output.value);
        }
      }
      _this2.checkForFormValidation();
    })();
  }
  /**
   * on form update
   * @param output o
   */
  onOtherVehicleFormUpdate(output, index) {
    var _this3 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (output.type === 'select') {
        _this3.formModel.additionalVehicleDetails[index][output.name] = {
          ..._this3.formModel.additionalVehicleDetails[index][output.name],
          selectedOption: output.value
        };
        if (output.name === 'make' && output.value?.id) {
          _this3.formModel.additionalVehicleDetails[index].model = {
            ..._this3.formModel.additionalVehicleDetails[index].model,
            observable: _this3.vehicleService.getVehicleModel(output.value.id, _this3.vehicleSourceTypeId),
            selectedOption: {}
          };
          setTimeout(() => {
            _this3.model.toArray()[index].triggerObservable();
          });
        } else if (output.name === 'model' && output.value?.id) {
          _this3.formModel.additionalVehicleDetails[index].year = {
            ..._this3.formModel.additionalVehicleDetails[index].year,
            observable: _this3.vehicleService.getVehicleYearByModel(output.value?.id, _this3.vehicleSourceTypeId),
            selectedOption: {}
          };
          setTimeout(() => {
            _this3.year.toArray()[index].triggerObservable();
          });
        }
      } else {
        _this3.formModel.additionalVehicleDetails[index][output.name].value = output.value;
      }
      _this3.checkForFormValidation();
    })();
  }
  /**
   * check for form validation and set button type
   * @returns {void}
  */
  checkForFormValidation() {
    if (this.isFormValid()) {
      this.saveButtonModel.type = 'primary';
    } else {
      this.saveButtonModel.type = 'disabled';
    }
  }
  /**
   * check for form validation
   * @returns {void}
   */
  isFormValid() {
    let isValid = true;
    if (!this.formModel.lossDateTime?.formControl?.valid || !this.formModel.intimationType.selectedOption || !this.formModel.subIntimationType.selectedOption || !this.formModel.natureofLoss.selectedOption || !this.formModel.lossLocation?.formControl?.valid || !this.lossLocationLatitude || !this.lossLocationLongitude || !this.formModel.causeOfLoss.selectedOption || !this.formModel.salvageAmount?.formControl?.valid || !this.formModel.salvageAmount.value && this.formModel.totalLoss.value === 'Yes' || (!this.formModel.vehicleLocation.value || !this.carLocationLatitude || !this.carLocationLongitude) && this.formModel.isCarLocationDifferent.value === 'Yes' || !this.formModel.policeReferenceNumber.value || !this.formModel.policeReferenceNumber?.formControl?.valid) {
      isValid = false;
    }
    this.formModel.additionalVehicleDetails.forEach(form => {
      if (!form.vehicleRegistrationNum.formControl?.valid || !form.vehicleChasisNumber.formControl.valid || !form.vehicleOwnerName.formControl.valid || !form.policyNumber.formControl.valid) {
        isValid = false;
      }
    });
    return isValid;
  }
  /**
   * setSalvageAmountValidation
   */
  setSalvageAmountValidation(value) {
    if (value === 'Yes') {
      this.formModel.salvageAmount.required = true;
      this.formModel.salvageAmount.disabled = false;
      this.formModel.salvageAmount.formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]));
    } else {
      this.formModel.salvageAmount.required = false;
      this.formModel.salvageAmount.disabled = true;
      this.formModel.salvageAmount.formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]));
    }
    this.checkForFormValidation();
  }
  /**
   * setCarLocationValidation
   */
  setCarLocationValidation(value) {
    if (value === 'Yes') {
      this.formModel.vehicleLocation.required = true;
      this.formModel.vehicleLocation.disabled = false;
    } else {
      this.formModel.vehicleLocation = {
        ...this.formModel.vehicleLocation,
        required: false,
        disabled: true,
        value: ''
      };
      this.carLocationLatitude = '';
      this.carLocationLongitude = '';
    }
    this.checkForFormValidation();
  }
  /**
   * submit form
   */
  save() {
    var _this4 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.isFormValid()) {
        return;
      }
      const additionalVehicleDetails = [];
      _this4.formModel.additionalVehicleDetails.forEach((form, index) => {
        const vDetails = {
          vehicleOwnerName: form.vehicleOwnerName.value,
          insuranceCompanyName: form.insuranceCompany.selectedOption?.name,
          plateNo: form.vehicleRegistrationNum.value,
          policyNo: form.policyNumber.value,
          vinNum: form.vehicleChasisNumber.value,
          make: form.make.selectedOption?.name || '',
          model: form.model.selectedOption?.modelDescription || '',
          year: form.year.selectedOption?.name || '',
          isOtherVehicleFault: form.faultType.value === 'At Fault' ? true : false,
          lossDocuments: _this4.file[index]
        };
        if (_this4.claimDetails?.lossDetails?.additionalLossDetails?.[index]) {
          vDetails.id = _this4.claimDetails.lossDetails.additionalLossDetails[index].id;
          vDetails.vehicleGuid = _this4.claimDetails.lossDetails.additionalLossDetails[index].vehicleGuid;
          vDetails.vehicleType = _this4.claimDetails.lossDetails.additionalLossDetails[index].vehicleType;
          vDetails.claimId = _this4.claimDetails.lossDetails.additionalLossDetails[index].claimId;
        }
        additionalVehicleDetails.push(vDetails);
      });
      const lossDate = _this4.formModel.lossDateTime.value || '';
      const lossDetails = {
        lossDate: lossDate ? dayjs__WEBPACK_IMPORTED_MODULE_1__(lossDate).local().utc().format() : null,
        claimCreationDate: _this4.claimDetails?.lossDetails?.claimCreationDate,
        stateId: _this4.formModel.state.selectedOption?.id,
        // cityId: this.formModel.city.selectedOption?.id,
        intimationTypeID: _this4.formModel.intimationType.selectedOption?.id,
        subIntimationTypeId: _this4.formModel.subIntimationType.selectedOption?.id,
        damageTypeId: _this4.formModel.damageType?.selectedOption?.id,
        natureOfLossId: _this4.formModel.natureofLoss.selectedOption?.id,
        lossSeverityId: _this4.claimDetails?.lossDetails?.lossSeverityId,
        lossImpactZoneId: _this4.formModel.lossImpactZone.selectedOption?.id,
        lossLocation: _this4.formModel.lossLocation.value,
        causeOfLoss: _this4.formModel.causeOfLoss.selectedOption?.name,
        isTotalLoss: _this4.formModel.totalLoss.value === 'Yes' ? true : false,
        salvageAmount: _this4.formModel.salvageAmount.value ? Number(_this4.formModel.salvageAmount.value) : 0,
        repairTypeId: _this4.formModel.repairType.selectedOption?.id,
        lossDescription: _this4.formModel.lossDescription.value,
        additionalLossDetails: additionalVehicleDetails,
        lossLocationLatitude: '' + _this4.lossLocationLatitude,
        lossLocationLongitude: '' + _this4.lossLocationLongitude,
        countryID: _this4.formModel.country.selectedOption?.id,
        isCarAtDifferentLoc: _this4.formModel.isCarLocationDifferent.value ? _this4.formModel.isCarLocationDifferent.value === 'Yes' ? true : false : null,
        carLocation: _this4.formModel.vehicleLocation.value || '',
        policeReferenceNo: _this4.formModel.policeReferenceNumber.value || null,
        carLocationLatitude: '' + _this4.carLocationLatitude,
        carLocationLongitude: '' + _this4.carLocationLongitude
      };
      _this4.commonService.showLoading();
      // this.claimDetails.customerDetails.categoryId = 1
      (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(_this4.claimsService.updateClaimDetails({
        ..._this4.claimDetails,
        claimantAtFault: _this4.formModel.claimantAtFault.value ? _this4.formModel.claimantAtFault.value == 'At Fault' ? true : false : null,
        lossDetails: lossDetails
      })).then( /*#__PURE__*/function () {
        var _ref2 = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this4.commonService.hideLoading();
          if (response && _this4.currentStatus?.toLowerCase() == 'claimauthenticated') {
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(_this4.claimsService.updateClaimStatus(_this4.claimGuid, 'DetailsUpdated')).then(response => {
              console.log(response);
            });
          }
          _this4.isSaveButtonClicked = true;
          _this4.router.navigate([`/claim/claim-detail/${_this4.claimGuid}/document`]);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).catch(err => {
        _this4.commonService.hideLoading();
        _this4.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_20__.SeverityLevel.Error);
      });
    })();
  }
  /**
   * hide dropdown
   */
  resetFrom() {
    const keys = Object.keys(this.formModel);
    this.formModel.additionalVehicleDetails;
    keys.forEach(key => {
      if (key.toLowerCase() !== 'additionalvehicledetails') {
        if (key === 'lossDateTime') {
          this.formModel[key] = {
            ...this.formModel[key],
            value: dayjs__WEBPACK_IMPORTED_MODULE_1__().toDate()
          };
        } else if (key === 'totalLoss') {
          this.formModel[key] = {
            ...this.formModel[key],
            value: 'No'
          };
        } else {
          this.formModel[key] = {
            ...this.formModel[key],
            value: '',
            selectedOption: {}
          };
        }
      }
    });
    this.formModel.additionalVehicleDetails = [];
    this.addvehicleInvoled();
    this.lossLocationLatitude = '';
    this.lossLocationLongitude = '';
  }
  /**
   * Cancel booking
   */
  cancel() {
    const dialogRef = this.commonService.openConfirmationOkDialog(this.translateService.instant('confirm_cancel'), this.translateService.instant('confirm_cancel_message'));
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetFrom();
        this.prepopulateFormData();
        this.setMode('text');
      }
    });
  }
  /**
  * delete booking
  */
  delete() {
    // console.log('delete');
  }
  /**
  * Cupload Registration Card
  */
  addvehicleInvoled() {
    const newVehicleDetail = (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_6__.newVehicleDetailsForm)();
    newVehicleDetail.make.options = this.additionalInfoMakeList;
    newVehicleDetail.insuranceCompany.options = this.thirdPartyInsuranceCompanies;
    this.file.push([]);
    this.formModel.additionalVehicleDetails.push(newVehicleDetail);
  }
  //status thing
  /**
    Opens a dialog box for the reject claim operation component with the specified data and panel class.
    @returns {void}
  */
  openRejectClaimPopup(data) {
    const dialogRef = this.dialog.open(src_app_dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_5__.RejectClaimDialogComponent, {
      data: {
        'claimGuid': this.claimGuid
      },
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
        if (response) {
          this.currentStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.Rejected;
          if (this.claimDetails) {
            this.claimDetails.claimStatus = this.currentStatus;
            this.commonService.claimDetails.next(this.claimDetails);
          }
          this.canShowApproveRejectButton = this.showApproveRejectButtons();
          this.commonService.claimStatus.next(this.currentStatus);
        }
      }
    });
  }
  /**
         * Approve claim
         */
  approve() {
    const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_action'), this.translateService.instant('msg_approve_claim'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimsService.updateClaimStatus(this.claimGuid, 'Approved', 'Claim Approved').subscribe({
          next: response => {
            if (response) {
              this.currentStatus = this.claimDetails.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.Approved;
              this.commonService.claimDetails.next(this.claimDetails);
              this.commonService.claimStatus.next(this.currentStatus);
              this.canShowApproveRejectButton = this.showApproveRejectButtons();
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  /**
    * settleClaim
  */
  settleClaim() {
    const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_action'), this.translateService.instant('msg_settle_claim'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimsService.updateClaimStatus(this.claimGuid, 'Completed', 'Settled').subscribe({
          next: response => {
            if (response) {
              this.claimDetails.claimStatus = this.currentStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_4__.CLAIM_STATUS.Complete;
              this.commonService.claimDetails.next(this.claimDetails);
              this.commonService.claimStatus.next(this.claimDetails.claimStatus);
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function LossDetailComponent_Factory(t) {
    return new (t || LossDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_8__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_9__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_10__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_11__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: LossDetailComponent,
    selectors: [["app-loss-detail"]],
    viewQuery: function LossDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c4, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.accidentDateControl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.state = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.model = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.year = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.uploader = _t);
      }
    },
    decls: 73,
    vars: 47,
    consts: [[1, "main-wrapper"], [1, "page-container-loss-details", 3, "ngClass"], [1, "form-container", "gap-32"], [1, "title"], [1, "row"], [1, "col-6", 3, "inputModel", "controlOutput"], [1, "totalloss-container", "col-6", "gap-10"], [1, "totalloss-label"], [1, "totalloss-layout"], [3, "inputModel", "controlOutput"], [1, "col-12", "jurisdiction"], ["state", ""], [1, "col-12", 3, "inputModel", "controlOutput"], [1, "totalloss-container", "col-12", "gap-10"], [1, "control-container"], [4, "ngFor", "ngForOf"], ["class", "col-4", 3, "buttonModel", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png", "alt", "addenda-claims"], [1, "footer-button-wrapper"], [4, "chqClaimRoles"], [4, "ngIf"], [1, "vehicle-details-wrapper", "mb-0"], [1, "vehicle-sub-title"], [1, "col-6", "fx-col", 3, "inputModel", "controlOutput"], ["model", ""], ["year", ""], [1, "col-6", "gap-10"], [1, "atfault-vehicle-title"], [1, "towing-layout"], [1, "col-6", "file-view-wrapper"], [1, ""], ["class", "file-proof", 4, "ngFor", "ngForOf"], [3, "buttonModel", "click", 4, "ngIf"], ["hidden", "", "type", "file", "accept", "image/png, image/jpg, image/jpeg, application/pdf", 3, "change"], ["uploader", ""], [1, "file-proof"], [1, "file-name"], [1, "action-icons"], [3, "svgIcon", "click"], [3, "buttonModel", "click"], [1, "col-4", 3, "buttonModel"], [3, "buttonModel", 4, "ngIf"], [3, "buttonModel"], [3, "buttonModel", "click", 4, "chqClaimRoles"], [3, "buttonModel", 4, "chqClaimRoles"]],
    template: function LossDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 4)(7, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_7_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_8_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 4)(10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 8)(15, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_15_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 4)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_20_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "chq-input", 5, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_21_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 4)(24, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_24_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_25_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 4)(27, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_27_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_28_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 4)(30, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_30_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_31_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 4)(33, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_33_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_34_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 4)(36, "div", 6)(37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 8)(41, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_41_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_42_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 4)(44, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_44_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_45_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "div")(47, "chq-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_47_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 4)(49, "div", 13)(50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 8)(54, "chq-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_54_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "div", 4)(56, "chq-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function LossDetailComponent_Template_chq_input_controlOutput_56_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, LossDetailComponent_ng_container_61_Template, 32, 17, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, LossDetailComponent_chq_button_63_Template, 1, 1, "chq-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "div", 17)(65, "div", 18)(66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](67, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, LossDetailComponent_ng_container_70_Template, 4, 3, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](71, LossDetailComponent_ng_container_71_Template, 3, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](72, LossDetailComponent_ng_container_72_Template, 2, 1, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction2"](44, _c5, ctx.isFormConfirmed, !ctx.isFormConfirmed));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 32, "loss_details"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.lossDateTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.claimCreationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](13, 34, "is_claimant_at_fault"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.claimantAtFault);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](19, 36, "jurisdiction"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.intimationType);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.subIntimationType);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.damageType);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.natureofLoss);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.lossSeverity);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.lossImpactZone);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.lossLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.causeOfLoss);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](39, 38, "total_loss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.totalLoss);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.salvageAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.repairType);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.policeReferenceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.lossDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](52, 40, "is_car_location_different_than_loss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.isCarLocationDifferent);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](59, 42, "additional_loss_details"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.formModel.additionalVehicleDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.maxThirdPartyVehiclesInvolved > ctx.formModel.additionalVehicleDetails.length && ctx.showSaveButton && ctx.isEditAllowed);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimEditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.canShowApproveRejectButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx.claimDetails == null ? null : ctx.claimDetails.claimStatus) === ctx.claimStatus.SettlementInitiated);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_12__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__.ChqButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_14__.ClaimRolesDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
    styles: [".page-container-loss-details[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: 1px solid var(--xa-form-border);\n  border-radius: 10px;\n  padding: 30px 25px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  line-height: 25px;\n  font-weight: 700;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .title.text-mode[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  border-bottom: 1px solid var(--xa-lighter-gray);\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .jurisdiction[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .totalloss-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n  position: relative;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  font-weight: 700;\n  color: var(--xa-red);\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-input-wrapper[_ngcontent-%COMP%], .page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-address-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field[_ngcontent-%COMP%] {\n  flex: 1 1 120px;\n  padding: 0 10px;\n  width: 120px;\n}\n@media (max-width: 850px) {\n  .page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field[_ngcontent-%COMP%] {\n    padding: 0 6px;\n  }\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.contact-code-field[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 120px;\n  padding: 0 20px 0px 0;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.basis-272[_ngcontent-%COMP%] {\n  flex-basis: 272px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .totalloss-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .totalloss-container[_ngcontent-%COMP%]   .totalloss-layout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .totalloss-container[_ngcontent-%COMP%]   .totalloss-layout[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .totalloss-container[_ngcontent-%COMP%]   .totalloss-layout[_ngcontent-%COMP%]   chq-button[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .totalloss-container[_ngcontent-%COMP%]   .totalloss-layout[_ngcontent-%COMP%]   chq-button.no-opacity[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .totalloss-container[_ngcontent-%COMP%]   .totalloss-layout[_ngcontent-%COMP%]   .fault-button-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .totalloss-container[_ngcontent-%COMP%]   .totalloss-layout[_ngcontent-%COMP%]   .fault-button-layout[_ngcontent-%COMP%]   .button-top-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-align: center;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]     .input-wrapper .checkbox-wrapper .checkbox .span-label {\n  font-size: 16px;\n  font-weight: 400;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .file-proof[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 8px;\n  border: 1px solid #CED0D4;\n  background: var(--xa-white);\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .file-proof[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .file-proof[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 5px;\n  border-radius: 100%;\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .file-proof[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-red) !important;\n  height: 10px;\n  width: 10px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .file-view-wrapper[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  padding-bottom: 4px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .file-view-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.page-container-loss-details[_ngcontent-%COMP%]   .control-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n  .dx-texteditor-input {\n  font-size: 1em !important;\n}\n\n  .disable-controls input {\n  opacity: 0.6;\n}\n\n.disable-input[_ngcontent-%COMP%], .partial-disable-info[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--xa-tab-background);\n  margin: calc(5px + 1.5vw);\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n}\n\n.text-mode[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .text-mode[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  border-bottom: 1px solid var(--xa-lighter-gray);\n  padding-left: 0px !important;\n}\n.text-mode[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.text-mode[_ngcontent-%COMP%]     chq-dropdown, .text-mode[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n\n.gap-32[_ngcontent-%COMP%] {\n  gap: 32px;\n}\n\n.gap-10[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.vehicle-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.vehicle-details-wrapper[_ngcontent-%COMP%] {\n  padding: 22px 12px 22px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  gap: 32px;\n  display: grid;\n  margin-bottom: 25px;\n}\n.vehicle-details-wrapper[_ngcontent-%COMP%]   .vehicle-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  text-transform: uppercase;\n}\n.vehicle-details-wrapper[_ngcontent-%COMP%]   .atfault-vehicle-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  text-transform: uppercase;\n}\n\n.upload-attachment-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9jbGFpbS1tYW5hZ2VtZW50L2xvc3MtZGV0YWlsL2xvc3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0FBQ047QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUpKO0FBUU07O0VBRUUsYUFBQTtFQUNBLDJCQUFBO0FBTlI7QUFTTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVBSO0FBU1E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQVjtBQVNVO0VBTEY7SUFNSSxjQUFBO0VBTlY7QUFDRjtBQVFVO0VBQ0UsVUFBQTtBQU5aO0FBU1U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFQWjtBQVVVO0VBQ0UsaUJBQUE7QUFSWjtBQWNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBWk47QUFjTTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBWlI7QUFjUTtFQUNFLGtCQUFBO0FBWlY7QUFlUTtFQUNFLFlBQUE7QUFiVjtBQWVVO0VBQ0UsVUFBQTtBQWJaO0FBaUJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQWZWO0FBaUJVO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBZlo7QUF3QlU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF0Qlo7QUE0QkU7RUFLRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQTlCSjtBQStCSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTdCTjtBQWlDTTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUEvQlI7QUFrQ0k7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaENOO0FBbUNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFqQ0o7QUFrQ0k7RUFDRSxnQkFBQTtBQWhDTjtBQW1DRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFqQ0o7O0FBcUNBO0VBQ0UseUJBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsWUFBQTtBQWxDRjs7QUFxQ0E7O0VBRUUsb0JBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0Usd0JBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsMENBQUE7RUFDQSx5QkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxvQ0FBQTtBQWxDRjs7QUF1Q0U7O0VBRUUsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0FBcENKO0FBdUNFO0VBQ0UsMEJBQUE7QUFyQ0o7QUF3Q0U7O0VBRUUscUJBQUE7QUF0Q0o7O0FBMENBO0VBQ0UsU0FBQTtBQXZDRjs7QUEwQ0E7RUFDRSxTQUFBO0FBdkNGOztBQTBDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsdUNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0FBekNGO0FBMENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQXhDSjtBQTJDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUF6Q0o7O0FBOENFO0VBQ0UsV0FBQTtBQTNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lci1sb3NzLWRldGFpbHMge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZm9ybS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMzBweCAyNXB4O1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICYudGV4dC1tb2RlIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuanVyaXNkaWN0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC50b3RhbGxvc3MtbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcclxuXHJcbiAgICAgIC5jb250YWN0LWlucHV0LXdyYXBwZXIsXHJcbiAgICAgIC5jb250YWN0LWFkZHJlc3Mtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWN0LWZpZWxkcy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmNvbnRhY3QtZmllbGQge1xyXG4gICAgICAgICAgZmxleDogMSAxIDEyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLm5vLXBhZGRpbmcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuY29udGFjdC1jb2RlLWZpZWxkIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4IDBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYmFzaXMtMjcyIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMjcycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvdGFsbG9zcy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnRvdGFsbG9zcy1sYXlvdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGNocS1pbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaHEtYnV0dG9uIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAgICAgICAmLm5vLW9wYWNpdHkge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZhdWx0LWJ1dHRvbi1sYXlvdXQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBnYXA6IDVweDtcclxuXHJcbiAgICAgICAgICAuYnV0dG9uLXRvcC10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgLmNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgICAgIC5jaGVja2JveCB7XHJcbiAgICAgICAgICAuc3Bhbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmZpbGUtcHJvb2Yge1xyXG4gICAgLy8gZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLy8gcGFkZGluZzogNXB4IDA7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDRUQwRDQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC5maWxlLW5hbWUge1xyXG4gICAgICBmb250LWZhbWlseTogSW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLWljb25zIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmaWxsOiB2YXIoLS14YS1yZWQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maWxlLXZpZXctd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udHJvbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG59XHJcbjo6bmctZGVlcCAuZHgtdGV4dGVkaXRvci1pbnB1dCB7IFxyXG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGlzYWJsZS1jb250cm9scyBpbnB1dCB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uZGlzYWJsZS1pbnB1dCxcclxuLnBhcnRpYWwtZGlzYWJsZS1pbmZvIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdGFiLWJhY2tncm91bmQpO1xyXG4gIG1hcmdpbjogY2FsYyg1cHggKyAxLjV2dyk7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCk7XHJcbn1cclxuXHJcbi50ZXh0LW1vZGUge1xyXG5cclxuICAudGl0bGUsXHJcbiAgLmluZm8tdGl0bGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS14YS1saWdodGVyLWdyYXkpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIGNocS1kcm9wZG93bixcclxuICBjaHEtaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmdhcC0zMiB7XHJcbiAgZ2FwOiAzMnB4O1xyXG59XHJcblxyXG4uZ2FwLTEwIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi52ZWhpY2xlLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi52ZWhpY2xlLWRldGFpbHMtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMjJweCAxMnB4IDIycHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLy8gYmFja2dyb3VuZDogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjYpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjYsIDM0LCA1MSwgMC4yKTtcclxuICBnYXA6IDMycHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgLnZlaGljbGUtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIC5hdGZhdWx0LXZlaGljbGUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbn1cclxuXHJcbi51cGxvYWQtYXR0YWNobWVudC1idXR0b24ge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 10338:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/claim/claim-management/policy-details/customer-details-view/customer-details-view.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsViewComponent": () => (/* binding */ CustomerDetailsViewComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var src_app_dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/reject-claim-dialog/reject-claim-dialog.component */ 6288);
/* harmony import */ var src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helper/form/claim-form.helper */ 43941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helper/directive/claim-roles.directive */ 65872);















function CustomerDetailsViewComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, ctx_r0.claimDetails == null ? null : ctx_r0.claimDetails.customerDetails == null ? null : ctx_r0.claimDetails.customerDetails.expiryDate, "dd/MM/yyyy"), " ");
  }
}
function CustomerDetailsViewComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " N/A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CustomerDetailsViewComponent_ng_container_127_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "chq-button", 29);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buttonModel", ctx_r5.editButtonModel);
  }
}
function CustomerDetailsViewComponent_ng_container_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CustomerDetailsViewComponent_ng_container_127_chq_button_1_Template, 1, 1, "chq-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chqClaimRoles", "claimEditor");
  }
}
function CustomerDetailsViewComponent_ng_container_128_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "chq-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CustomerDetailsViewComponent_ng_container_128_chq_button_1_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.openRejectClaimPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buttonModel", ctx_r6.rejectButtonModel);
  }
}
function CustomerDetailsViewComponent_ng_container_128_ng_container_2_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "chq-button", 29);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buttonModel", ctx_r10.approveButtonModel);
  }
}
function CustomerDetailsViewComponent_ng_container_128_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CustomerDetailsViewComponent_ng_container_128_ng_container_2_chq_button_1_Template, 1, 1, "chq-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chqClaimRoles", "claimManager");
  }
}
function CustomerDetailsViewComponent_ng_container_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CustomerDetailsViewComponent_ng_container_128_chq_button_1_Template, 1, 1, "chq-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CustomerDetailsViewComponent_ng_container_128_ng_container_2_Template, 2, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chqClaimRoles", "claimManager");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r3.claimDetails == null ? null : ctx_r3.claimDetails.claimStatus) !== ctx_r3.claimStatus.EstimateRejected);
  }
}
function CustomerDetailsViewComponent_ng_container_129_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "chq-button", 29);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buttonModel", ctx_r11.settleClaimButtonModel);
  }
}
function CustomerDetailsViewComponent_ng_container_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CustomerDetailsViewComponent_ng_container_129_chq_button_1_Template, 1, 1, "chq-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chqClaimRoles", "claimManager");
  }
}
class CustomerDetailsViewComponent {
  /**
   * constructor
   * @param router
   */
  constructor(router, route, commonService, claimService, monitorService, translateService, dialog) {
    this.router = router;
    this.route = route;
    this.commonService = commonService;
    this.claimService = claimService;
    this.monitorService = monitorService;
    this.translateService = translateService;
    this.dialog = dialog;
    this.status = '';
    this.roleName = '';
    this.showEditDeleteButtonsClaim = true;
    this.canShowApproveRejectButton = false;
    this.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS;
    this.rejectButtonModel = {
      label: 'reject',
      type: 'outline-danger'
    };
    this.approveButtonModel = {
      label: 'approve',
      type: 'primary',
      onclick: this.approve.bind(this)
    };
    this.settleClaimButtonModel = {
      label: 'settle_claim',
      type: 'primary',
      onclick: this.settleClaim.bind(this)
    };
    this.findGarageButtonModel = {
      label: 'Edit',
      type: 'outline',
      icon: 'edit'
    };
    this.submitForApprovalButtonModel = {
      label: 'Submit for Approval',
      type: 'primary',
      onclick: this.submitForApproval.bind(this)
    };
    this.editButtonModel = {
      label: 'Edit Details',
      type: 'outline',
      onclick: this.editDetails.bind(this)
    };
    this.statusTextDict = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.STATUS_TEXT_DICT;
    this.commonService.userProfileData.subscribe(res => {
      if (res?.data) {
        const {
          userPermission
        } = res.data;
        this.userPermission = userPermission;
      }
    });
  }
  /**
   * @returns {void}
  */
  canEdit() {
    return [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Draft.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ClaimAuthenticated.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.DetailsUpdated.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.UploadDocuments.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.UploadPhotos.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Submitted.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Assigned.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ReviewInProgress.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.AssignedBack.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ApprovalReviewInProgress.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ClaimSubmittedForApproval.toLowerCase()].includes(this.status?.toLowerCase()?.trim());
  }
  /**
   * show approve reject buttons
   */
  showApproveRejectButtons() {
    if (this.commonService.isThirdPartyExternalGarage && this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.RepairEstimation || !this.commonService.isThirdPartyExternalGarage && this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.EstimateApproved || !this.commonService.isThirdPartyExternalGarage && this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.EstimateRejected) {
      return true;
    }
    return false;
  }
  /**
   * editing permissions
   */
  editPermissions() {
    const validStatuses = [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Submitted, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ClaimSubmittedForApproval];
    if (validStatuses.includes(this.status)) {
      // if not manager
      if (!this.checkClaimPermission('claim.selfapproval')) {
        return false;
      }
    } else if (!this.canEdit()) {
      return false;
    }
    if (this.claimDetails?.assigneeId) {
      // if assignee is not user id then he cannot edit unless he is a manager.
      if (this.commonService.userId !== this.claimDetails?.assigneeId && !this.checkClaimPermission('claim.selfapproval')) {
        return false;
      }
    }
    return true;
  }
  /**
   * claim permission
   * @param permissionName
   */
  checkClaimPermission(permissionName) {
    const automotiveService = this.userPermission?.automotiveServices;
    const permissionList = automotiveService?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda claims')?.permissions;
    return this.commonService.hasPermission(permissionName, permissionList);
  }
  /**
     * on init
     */
  ngOnInit() {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.formModel = (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.viewClaimDetailsForm)();
      _this.policyFormModel = (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.viewPolicyDetailsForm)();
      _this.roleName = _this.commonService.roleName;
      _this.route.parent?.params?.subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.claimGuid = _this.route.parent?.snapshot.paramMap.get('id');
          if (_this.claimGuid !== '0') {
            yield _this.getClaimDetails();
            _this.showEditDeleteButtonsClaim = _this.editPermissions();
            _this.canShowApproveRejectButton = _this.showApproveRejectButtons();
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * get details data
   */
  /**
   * @returns {void}
  */
  getClaimDetails() {
    var _this2 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.commonService.showLoading();
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this2.claimService.getClaimDetail(_this2.claimGuid)).then(response => {
        if (response) {
          _this2.claimDetails = response;
          _this2.status = _this2.claimDetails?.claimStatus;
          _this2.commonService.claimStatus.next(_this2.status);
          _this2.commonService.claimDetails.next(_this2.claimDetails);
          //if status is 'assigned' and the user is claim reviewer then it should be changed to 'Review In Progress'
          let newStatus = '';
          if (_this2.checkClaimPermission('claim.submitforapproval') && _this2.status === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Assigned) {
            newStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ReviewInProgress;
          } else if (_this2.checkClaimPermission('claim.selfapproval') && _this2.status === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ClaimSubmittedForApproval) {
            newStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ApprovalReviewInProgress;
          }
          if (newStatus != '') {
            _this2.claimService.updateClaimStatus(_this2.claimGuid, newStatus).subscribe({
              next: response => {
                if (response) {
                  _this2.commonService.showInfoToast(3000, `Status set to ${newStatus}`);
                  _this2.status = newStatus;
                  _this2.commonService.claimStatus.next(_this2.status);
                }
              }
            });
          }
        }
        _this2.commonService.hideLoading();
      }).catch(() => {
        _this2.commonService.hideLoading();
      });
    })();
  }
  /**
    Opens a dialog box for the reject claim operation component with the specified data and panel class.
    @returns {void}
  */
  openRejectClaimPopup(data) {
    const dialogRef = this.dialog.open(src_app_dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_2__.RejectClaimDialogComponent, {
      data: {
        'claimGuid': this.claimGuid
      },
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
        if (response) {
          this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Rejected;
          this.commonService.claimStatus.next(this.status);
          this.canShowApproveRejectButton = this.showApproveRejectButtons();
        }
      }
    });
  }
  /**
   * Approve claim
   */
  approve() {
    const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_action'), this.translateService.instant('msg_approve_claim'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimService.updateClaimStatus(this.claimGuid, 'Approved', 'Claim Approved').subscribe({
          next: response => {
            if (response) {
              this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Approved;
              this.commonService.claimStatus.next(this.status);
              this.claimDetails.claimStatus = this.status;
              this.canShowApproveRejectButton = this.showApproveRejectButtons();
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  /**
   * settleClaim
   */
  settleClaim() {
    const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_action'), this.translateService.instant('msg_settle_claim'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimService.updateClaimStatus(this.claimGuid, 'Completed', 'Settled').subscribe({
          next: response => {
            if (response) {
              this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Complete;
              this.claimDetails.claimStatus = this.status;
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  /**
   * submitForApproval
   */
  submitForApproval() {
    const dialogRef = this.commonService.openConfirmationOkDialog(this.translateService.instant('confirm_action'), this.translateService.instant('msg_submit_approve_claim'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimService.updateClaimStatus(this.claimGuid, 'ClaimSubmittedForApproval').subscribe({
          next: response => {
            if (response) {
              this.status = 'ClaimSubmittedForApproval';
              this.commonService.claimStatus.next(this.status);
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  /**
  * edit Details
  */
  editDetails() {
    //this.claimDetails
    // Bug 25826: Claim Manager is able to edit Claims created from FNOL/File a Claim without assigning
    if (this.checkClaimPermission('claim.selfapproval') && (this.commonService.claimWorkflowStage.includes('2Stage') || this.commonService.claimWorkflowStage.includes('3Stage')) && [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ClaimAuthenticated].includes(this.status)) {
      const dialog = this.commonService.openConfirmYesNoDialogBig('', 'msg_manager_review');
      dialog.afterClosed().subscribe(data => {
        if (data) {
          this.claimService.updateClaimStatus(this.claimGuid, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ApprovalReviewInProgress).subscribe({
            next: response => {
              if (response) {
                this.commonService.showInfoToast(3000, `Status set to ${src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ApprovalReviewInProgress}`);
                this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ApprovalReviewInProgress;
                this.commonService.claimStatus.next(this.status);
                this.router.navigate([`/claim/claim-detail/${this.claimGuid}`]);
              } else {
                this.router.navigate(['/claim/my-claim']);
              }
            }
          });
        } else {
          this.router.navigate(['/claim/my-claim']);
        }
      });
    } else {
      this.router.navigate([`/claim/claim-detail/${this.claimGuid}`]);
    }
  }
  static #_ = this.ɵfac = function CustomerDetailsViewComponent_Factory(t) {
    return new (t || CustomerDetailsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_5__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_6__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: CustomerDetailsViewComponent,
    selectors: [["app-customer-details-view"]],
    decls: 130,
    vars: 81,
    consts: [[1, "main-wrapper"], [1, "page-container-claim-details", "page-wrapper"], [1, "row", "main-container"], [1, "col-6"], [1, "claim-details"], [1, "header-container", "row"], [1, "title", "col-10"], [1, "vector"], [1, "form-container", "gap-32"], [1, "status-wrapper"], [1, "status-label"], [1, "case-status-wrapper"], [1, "row", "vehicle-details"], [1, "col-6", "vehicle-details-col"], [1, "row", "vehicle-details", 2, "margin-bottom", "52px"], ["class", "case-status expires", 4, "ngIf"], [1, "row", "customer-details"], [1, "col-6", "customer-details-col"], [1, "row", "customer-details", 2, "margin-bottom", "52px"], [1, "col-6", "phone-details"], [1, "row"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png", "alt", "image"], [1, "footer-button-wrapper"], [4, "ngIf"], [1, "case-status", "expires"], [3, "buttonModel", 4, "chqClaimRoles"], [3, "buttonModel"], [3, "buttonModel", "click", 4, "chqClaimRoles"], [3, "buttonModel", "click"]],
    template: function CustomerDetailsViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 11)(16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 13)(26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 12)(32, "div", 13)(33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 13)(39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 14)(45, "div", 13)(46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](51, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 13)(53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 3)(60, "div", 4)(61, "div", 5)(62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 8)(67, "div", 9)(68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, CustomerDetailsViewComponent_div_72_Template, 3, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, CustomerDetailsViewComponent_div_73_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 16)(75, "div", 17)(76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 17)(82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 16)(88, "div", 17)(89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 17)(95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 18)(101, "div", 17)(102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div", 19)(108, "div", 20)(109, "div", 3)(110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "div", 3)(116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 21)(122, "div", 22)(123, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](124, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](127, CustomerDetailsViewComponent_ng_container_127_Template, 2, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](128, CustomerDetailsViewComponent_ng_container_128_Template, 3, 2, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](129, CustomerDetailsViewComponent_ng_container_129_Template, 2, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 41, "claim_#"), " ", ctx.claimDetails == null ? null : ctx.claimDetails.claimNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 43, "status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("case-status ", ctx.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.statusTextDict[ctx.status], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 45, "vehiclechasis_num"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.vehicleMetaData == null ? null : ctx.claimDetails.vehicleMetaData.vinNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 47, "vehicle_registration_plate_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.vehicleMetaData == null ? null : ctx.claimDetails.vehicleMetaData.plateNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 49, "make"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.vehicleMetaData == null ? null : ctx.claimDetails.vehicleMetaData.make);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 51, "model"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.vehicleMetaData == null ? null : ctx.claimDetails.vehicleMetaData.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](48, 53, "registration_date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](51, 55, ctx.claimDetails == null ? null : ctx.claimDetails.vehicleMetaData == null ? null : ctx.claimDetails.vehicleMetaData.registrationDate, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](55, 58, "manufacturing_date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](58, 60, ctx.claimDetails == null ? null : ctx.claimDetails.vehicleMetaData == null ? null : ctx.claimDetails.vehicleMetaData.manufacturingDate, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](64, 63, "policy_#"), " ", ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.policyNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](70, 65, "expires"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.expiryDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.expiryDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](78, 67, "insured_first_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.policyHolderFirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](84, 69, "insured_last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.policyHolderLastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](91, 71, "insurance_org_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.insuranceOrganizationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](97, 73, "loss_jurisdiction"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.lossDetails == null ? null : ctx.claimDetails.lossDetails.lossLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](104, 75, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.policyHolderEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](112, 77, "code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.policyMobileCountryCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](118, 79, "mobile_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.claimDetails == null ? null : ctx.claimDetails.customerDetails == null ? null : ctx.claimDetails.customerDetails.policyHolderMobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showEditDeleteButtonsClaim && !ctx.commonService.isViewOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.canShowApproveRejectButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.claimDetails == null ? null : ctx.claimDetails.claimStatus) === ctx.claimStatus.SettlementInitiated);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_8__.ClaimRolesDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: [".page-container-claim-details[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 30px 25px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%] {\n  border: 1px solid #D7D7D7;\n  background: rgba(255, 255, 255, 0.6980392157);\n  border-radius: 10px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  margin-top: 12.03px;\n  margin-left: 14.72px;\n  padding: 10px 0px 10px 0px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0px;\n  text-align: left;\n  margin-top: 0.5rem;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  margin-right: 0;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .vector[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(26, 34, 51, 0.1019607843);\n  margin: 10px 10px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-left: 15px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .status-wrapper[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  height: auto;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n  width: 52px;\n  height: 12px;\n  padding: 0px 3px 0px 3px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-details-col[_ngcontent-%COMP%], .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .customer-details-col[_ngcontent-%COMP%], .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .vehicle-details-col[_ngcontent-%COMP%], .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .customer-details-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-details-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1), .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .customer-details-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1), .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .vehicle-details-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1), .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .customer-details-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .phone-details[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%], .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .phone-details[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .phone-details[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1), .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .phone-details[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .case-status-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .case-status-wrapper[_ngcontent-%COMP%]   .case-status[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  font-weight: 500;\n  border-radius: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  min-width: 75px;\n  text-align: center;\n  font-size: 12px !important;\n  line-height: 15px !important;\n  margin-top: 1rem;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-input-wrapper[_ngcontent-%COMP%], .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-address-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field[_ngcontent-%COMP%] {\n  flex: 1 1 120px;\n  padding: 0 10px;\n  width: 120px;\n}\n@media (max-width: 850px) {\n  .page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field[_ngcontent-%COMP%] {\n    padding: 0 6px;\n  }\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.contact-code-field[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 120px;\n  padding: 0 20px 0px 0;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.basis-272[_ngcontent-%COMP%] {\n  flex-basis: 272px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .gap-32[_ngcontent-%COMP%] {\n  gap: 32px;\n}\n\n.case-status[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 10px;\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 12px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  min-width: 75px;\n  text-align: center;\n}\n\n.approved[_ngcontent-%COMP%], .Approved[_ngcontent-%COMP%] {\n  background-color: var(--xa-approve);\n  color: var(--xa-black-medium);\n}\n\n.expires[_ngcontent-%COMP%], .Expires[_ngcontent-%COMP%] {\n  background-color: #79bfea;\n  color: var(--xa-white);\n}\n\n.RepairEstimated[_ngcontent-%COMP%] {\n  background-color: --xa-repair-estimate;\n  color: var(--xa-black-medium);\n}\n\n.GarageAssignmentRequestedRejected[_ngcontent-%COMP%], .rejected[_ngcontent-%COMP%], .Rejected[_ngcontent-%COMP%], .reject[_ngcontent-%COMP%], .Reject[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n\n.closed[_ngcontent-%COMP%], .Closed[_ngcontent-%COMP%], .Completed[_ngcontent-%COMP%], .completed[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-black-medium);\n}\n\n.Complete[_ngcontent-%COMP%], .complete[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-header);\n  color: var(--xa-white);\n}\n\n.draft[_ngcontent-%COMP%], .Draft[_ngcontent-%COMP%] {\n  background-color: var(--xa-draft);\n  color: var(--xa-black-medium);\n}\n\n.repairestimation[_ngcontent-%COMP%], .RepairEstimation[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-estimate);\n  color: var(--xa-black-medium);\n}\n\n.EstimateRejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-sunset-orange);\n  color: var(--xa-white);\n}\n\n.EstimateApproved[_ngcontent-%COMP%] {\n  background-color: var(--xa-dp-light-green);\n  color: var(--xa-white);\n}\n\n.ClaimAuthenticated[_ngcontent-%COMP%] {\n  background-color: #00B8D9;\n  color: var(--xa-white);\n}\n\n.uploaddocuments[_ngcontent-%COMP%], .UploadDocuments[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-document);\n  color: var(--xa-white);\n}\n\n.addphotos[_ngcontent-%COMP%], .AddPhotos[_ngcontent-%COMP%], .uploadPhotos[_ngcontent-%COMP%], .UploadPhotos[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-photo);\n  color: var(--xa-white);\n}\n\n.vehicledetails[_ngcontent-%COMP%], .DetailsUpdated[_ngcontent-%COMP%], .VehicleDetails[_ngcontent-%COMP%] {\n  background-color: var(--xa-vehicle-detail);\n  color: var(--xa-white);\n}\n\n.pendingapproval[_ngcontent-%COMP%], .PendingApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black);\n}\n\n.ReviewInProgress[_ngcontent-%COMP%] {\n  background-color: #FFF95D;\n  color: var(--xa-black-medium);\n}\n\n.readytoinvoice[_ngcontent-%COMP%], .ReadyToInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-ready-to-invoice);\n  color: var(--xa-black);\n}\n\n.Assigned[_ngcontent-%COMP%] {\n  background-color: #4301FE;\n  color: var(--xa-white);\n}\n\n.AssignedBack[_ngcontent-%COMP%] {\n  background-color: var(--xa-secondary);\n  color: var(--xa-white);\n}\n\n.Active[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n\n.Submitted[_ngcontent-%COMP%] {\n  background-color: #09C269;\n  color: var(--xa-white);\n}\n\n.invoiceReady[_ngcontent-%COMP%], .InvoiceReady[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n\n.GarageAssignedforClaim[_ngcontent-%COMP%] {\n  background-color: var(--xa-bluesh-grey);\n  color: var(--xa-white);\n}\n\n.RepairInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black-medium);\n}\n\n.RepairInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n\n.SettlementInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n\n.ClaimSubmittedForApproval[_ngcontent-%COMP%] {\n  background-color: #D2F0AB;\n  color: var(--xa-black-medium);\n}\n\n.ApprovalReviewInProgress[_ngcontent-%COMP%] {\n  background-color: #ECDBB7;\n  color: var(--xa-black-medium);\n}\n\n.GarageAssignmentRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-garage-requested);\n  color: var(--xa-black-medium);\n}\n\n.AssignedBackFromReview[_ngcontent-%COMP%] {\n  background-color: var(--xa-assigned-back-review);\n  color: var(--xa-white);\n}\n\n.AssignedBackFromApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-assigned-back-approval);\n  color: var(--xa-black-medium);\n}\n\n.InvoiceRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-request-invoice);\n  color: var(--xa-black-medium);\n}\n\n.EstimateRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-request-estimate);\n  color: var(--xa-black-medium);\n}\n\n.dashboard-no-data-found[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n}\n.dashboard-no-data-found[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light[_ngcontent-%COMP%] {\n  border: 1px solid #e3e3e3;\n  background: #4c6bd2;\n  padding: 10px;\n  color: #fff;\n  overflow: visible;\n}\n.apexcharts-tooltip.apexcharts-theme-light[_ngcontent-%COMP%]   .arrow_box[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.apexcharts-tooltip.apexcharts-theme-light[_ngcontent-%COMP%]   .tootip-heading[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n.apexcharts-tooltip.apexcharts-theme-light[_ngcontent-%COMP%]   .tootip-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 8px;\n}\n.apexcharts-tooltip.apexcharts-theme-light[_ngcontent-%COMP%]   .tootip-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.apexcharts-tooltip.apexcharts-theme-light[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: var(--xa-white);\n  border-radius: 8px;\n  height: 100%;\n  min-height: 180px;\n  box-sizing: border-box;\n}\n.card[_ngcontent-%COMP%]   .fnol-data[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  align-self: stretch;\n}\n.card[_ngcontent-%COMP%]   .fnol-data[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 43px;\n  width: 43px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 23px;\n  color: var(--xa-primary);\n  display: block;\n  margin: 10px 0;\n}\n@media (max-width: 1200px) {\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9jbGFpbS1tYW5hZ2VtZW50L3BvbGljeS1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMtdmlldy9jdXN0b21lci1kZXRhaWxzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFUTtFQUNJLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQUFaO0FBRVk7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFBaEI7QUFFZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFwQjtBQUdnQjtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURwQjtBQUtZO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7QUFIaEI7QUFNWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFKaEI7QUFPb0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFMeEI7QUFVb0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBUnhCO0FBVXdCO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FBUjVCO0FBYXdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVg1QjtBQWE0QjtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQVhoQztBQWlCZ0I7RUFDSSxhQUFBO0FBZnBCO0FBaUJvQjtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQWZ4QjtBQW9Cb0I7O0VBRUksYUFBQTtFQUNBLDJCQUFBO0FBbEJ4QjtBQXFCb0I7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFuQnhCO0FBcUJ3QjtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQW5CNUI7QUFxQjRCO0VBTEo7SUFNUSxjQUFBO0VBbEI5QjtBQUNGO0FBb0I0QjtFQUNJLFVBQUE7QUFsQmhDO0FBcUI0QjtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQW5CaEM7QUFzQjRCO0VBQ0ksaUJBQUE7QUFwQmhDO0FBNkJRO0VBQ0ksU0FBQTtBQTNCWjs7QUFnQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUE3Qko7O0FBZ0NBOztFQUVJLG1DQUFBO0VBQ0EsNkJBQUE7QUE3Qko7O0FBZ0NBOztFQUVJLHlCQUFBO0VBQ0Esc0JBQUE7QUE3Qko7O0FBZ0NBO0VBQ0ksc0NBQUE7RUFDQSw2QkFBQTtBQTdCSjs7QUFnQ0E7Ozs7O0VBS0ksK0JBQUE7RUFDQSxzQkFBQTtBQTdCSjs7QUFnQ0E7Ozs7RUFJSSxnQ0FBQTtFQUNBLDZCQUFBO0FBN0JKOztBQWdDQTs7RUFFSSx5Q0FBQTtFQUNBLHNCQUFBO0FBN0JKOztBQWdDQTs7RUFFSSxpQ0FBQTtFQUNBLDZCQUFBO0FBN0JKOztBQWdDQTs7RUFFSSwyQ0FBQTtFQUNBLDZCQUFBO0FBN0JKOztBQWdDQTtFQUNJLHlDQUFBO0VBQ0Esc0JBQUE7QUE3Qko7O0FBZ0NBO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtBQTdCSjs7QUFnQ0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBN0JKOztBQWdDQTs7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0FBN0JKOztBQWdDQTs7OztFQUlJLHdDQUFBO0VBQ0Esc0JBQUE7QUE3Qko7O0FBZ0NBOzs7RUFHSSwwQ0FBQTtFQUNBLHNCQUFBO0FBN0JKOztBQWdDQTs7RUFFSSw0Q0FBQTtFQUNBLHNCQUFBO0FBN0JKOztBQWdDQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7QUE3Qko7O0FBZ0NBOztFQUVJLDRDQUFBO0VBQ0Esc0JBQUE7QUE3Qko7O0FBZ0NBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQTdCSjs7QUFnQ0E7RUFDSSxxQ0FBQTtFQUNBLHNCQUFBO0FBN0JKOztBQWdDQTtFQUNJLGdDQUFBO0VBQ0Esc0JBQUE7QUE3Qko7O0FBaUNBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQTlCSjs7QUFpQ0E7O0VBRUkseUNBQUE7RUFDQSxzQkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSx1Q0FBQTtFQUNBLHNCQUFBO0FBOUJKOztBQWlDQTtFQUNJLDRDQUFBO0VBQ0EsNkJBQUE7QUE5Qko7O0FBaUNBO0VBQ0kseUNBQUE7RUFDQSxzQkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSxnQ0FBQTtFQUNBLHNCQUFBO0FBOUJKOztBQWlDQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7QUE5Qko7O0FBaUNBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSw0Q0FBQTtFQUNBLDZCQUFBO0FBOUJKOztBQWlDQTtFQUNJLGdEQUFBO0VBQ0Esc0JBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksa0RBQUE7RUFDQSw2QkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSwyQ0FBQTtFQUNBLDZCQUFBO0FBOUJKOztBQWlDQTtFQUNJLDRDQUFBO0VBQ0EsNkJBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7QUE5Qko7QUFnQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQTlCUjs7QUFrQ0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQS9CSjtBQWlDSTtFQUNJLGdCQUFBO0FBL0JSO0FBa0NJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWhDUjtBQW1DSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQWpDUjtBQW9DSTtFQUNJLGVBQUE7QUFsQ1I7QUFxQ0k7RUFDSSw4QkFBQTtBQW5DUjs7QUF1Q0E7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBcENKO0FBc0NJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQXBDUjtBQXNDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBcENaOztBQXlDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUF0Q0o7QUF3Q0k7RUFQSjtJQVFRLGVBQUE7RUFyQ047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lci1jbGFpbS1kZXRhaWxzIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcblxyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICAuY2xhaW0tZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEN0Q3RDc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkZCMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyLjAzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTQuNzJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZWRpdC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmVjdG9yIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNiwgMzQsIDUxLCAwLjEwMTk2MDc4NDMpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5zdGF0dXMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICg1MnB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAoMTJweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHggMHB4IDNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnZlaGljbGUtZGV0YWlscywgLmN1c3RvbWVyLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC52ZWhpY2xlLWRldGFpbHMtY29sLCAuY3VzdG9tZXItZGV0YWlscy1jb2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDIycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5waG9uZS1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbC02IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAyMnB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FzZS1zdGF0dXMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhc2Utc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdC1pbnB1dC13cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWFkZHJlc3Mtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWZpZWxkcy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm5vLXBhZGRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5jb250YWN0LWNvZGUtZmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5iYXNpcy0yNzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDI3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdhcC0zMiB7XHJcbiAgICAgICAgICAgIGdhcDogMzJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXNlLXN0YXR1cyB7XHJcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogNzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFwcHJvdmVkLFxyXG4uQXBwcm92ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYXBwcm92ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLmV4cGlyZXMsXHJcbi5FeHBpcmVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OWJmZWE7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uUmVwYWlyRXN0aW1hdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICgtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLkdhcmFnZUFzc2lnbm1lbnRSZXF1ZXN0ZWRSZWplY3RlZCxcclxuLnJlamVjdGVkLFxyXG4uUmVqZWN0ZWQsXHJcbi5yZWplY3QsXHJcbi5SZWplY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVkKTtcclxuICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi5jbG9zZWQsXHJcbi5DbG9zZWQsXHJcbi5Db21wbGV0ZWQsXHJcbi5jb21wbGV0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYmx1ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLkNvbXBsZXRlLFxyXG4uY29tcGxldGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVwYWlyLWhlYWRlcik7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uZHJhZnQsXHJcbi5EcmFmdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1kcmFmdCk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLnJlcGFpcmVzdGltYXRpb24sXHJcbi5SZXBhaXJFc3RpbWF0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLkVzdGltYXRlUmVqZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtc3Vuc2V0LW9yYW5nZSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uRXN0aW1hdGVBcHByb3ZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1kcC1saWdodC1ncmVlbik7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uQ2xhaW1BdXRoZW50aWNhdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEI4RDk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4udXBsb2FkZG9jdW1lbnRzLFxyXG4uVXBsb2FkRG9jdW1lbnRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXVwbG9hZC1kb2N1bWVudCk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uYWRkcGhvdG9zLFxyXG4uQWRkUGhvdG9zLFxyXG4udXBsb2FkUGhvdG9zLFxyXG4uVXBsb2FkUGhvdG9zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4udmVoaWNsZWRldGFpbHMsXHJcbi5EZXRhaWxzVXBkYXRlZCxcclxuLlZlaGljbGVEZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXZlaGljbGUtZGV0YWlsKTtcclxuICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi5wZW5kaW5nYXBwcm92YWwsXHJcbi5QZW5kaW5nQXBwcm92YWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcGVuZGluZy1hcHByb3ZhbCk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG59XHJcblxyXG4uUmV2aWV3SW5Qcm9ncmVzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOTVEO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5yZWFkeXRvaW52b2ljZSxcclxuLlJlYWR5VG9JbnZvaWNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlYWR5LXRvLWludm9pY2UpO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxufVxyXG5cclxuLkFzc2lnbmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzAxRkU7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uQXNzaWduZWRCYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uQWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWJsdWUpO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuXHJcbi5TdWJtaXR0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5QzI2OTtcclxuICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi5pbnZvaWNlUmVhZHksXHJcbi5JbnZvaWNlUmVhZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtaW52b2ljZS1yZWFkeSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uR2FyYWdlQXNzaWduZWRmb3JDbGFpbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlc2gtZ3JleSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uUmVwYWlySW5pdGlhdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBlbmRpbmctYXBwcm92YWwpO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5SZXBhaXJJbnZvaWNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWludm9pY2UtcmVhZHkpO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLlNldHRsZW1lbnRJbml0aWF0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYmx1ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uQ2xhaW1TdWJtaXR0ZWRGb3JBcHByb3ZhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJGMEFCO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5BcHByb3ZhbFJldmlld0luUHJvZ3Jlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDREJCNztcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcblxyXG4uR2FyYWdlQXNzaWdubWVudFJlcXVlc3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1nYXJhZ2UtcmVxdWVzdGVkKTtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcblxyXG4uQXNzaWduZWRCYWNrRnJvbVJldmlldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1hc3NpZ25lZC1iYWNrLXJldmlldyk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uQXNzaWduZWRCYWNrRnJvbUFwcHJvdmFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWFzc2lnbmVkLWJhY2stYXBwcm92YWwpO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5JbnZvaWNlUmVxdWVzdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlcXVlc3QtaW52b2ljZSk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLkVzdGltYXRlUmVxdWVzdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlcXVlc3QtZXN0aW1hdGUpO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtbm8tZGF0YS1mb3VuZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIHJnYmEoMjYsIDM0LCA1MSwgMC43MCkpO1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcGV4Y2hhcnRzLXRvb2x0aXAuYXBleGNoYXJ0cy10aGVtZS1saWdodCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gICAgYmFja2dyb3VuZDogIzRjNmJkMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgIC5hcnJvd19ib3gge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvb3RpcC1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAudG9vdGlwLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvb3RpcC12YWx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIC5mbm9sLWRhdGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXByaW1hcnkpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 33839:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/claim/claim-management/policy-details/policy-details.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyDetailsComponent": () => (/* binding */ PolicyDetailsComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helper/form/claim-form.helper */ 43941);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helper/form/vehicle-form.helper */ 60562);
/* harmony import */ var src_app_dialogs_customer_policy_details_dialog_customer_policy_details_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialogs/customer-policy-details-dialog/customer-policy-details-dialog.component */ 13605);
/* harmony import */ var src_app_dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialogs/reject-claim-dialog/reject-claim-dialog.component */ 6288);
/* harmony import */ var src_app_dialogs_settle_claim_dialog_settle_claim_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialogs/settle-claim-dialog/settle-claim-dialog.component */ 80826);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var src_app_dialogs_existing_claim_dialog_existing_claim_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dialogs/existing-claim-dialog/existing-claim-dialog.component */ 64431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/core/core.service */ 42771);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/inspection/inspection.service */ 62190);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);


























const _c0 = ["driverPhone"];
const _c1 = ["driverCode"];
const _c2 = ["make"];
const _c3 = ["model"];
const _c4 = ["year"];
const _c5 = ["license"];
const _c6 = ["regDate"];
const _c7 = ["vehicleType"];
const _c8 = ["searchBox"];
const _c9 = ["searchInputData"];
const _c10 = ["driverDetailsPhone"];
const _c11 = function (a0) {
  return {
    "disable-input disable-controls": a0
  };
};
function PolicyDetailsComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 50)(1, "div", 14)(2, "chq-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_div_85_Template_chq_input_controlOutput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r12.onDriverFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "chq-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_div_85_Template_chq_input_controlOutput_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r14.onDriverFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 17)(5, "div", 18)(6, "div", 19)(7, "div", 21)(8, "div", 19)(9, "chq-input", 22, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_div_85_Template_chq_input_controlOutput_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r15.onDriverFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "chq-input", 24, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_div_85_Template_chq_input_controlOutput_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r16.onDriverFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "chq-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_div_85_Template_chq_input_controlOutput_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r17.onDriverFormUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](6, _c11, ctx_r9.shouldOpenPopup ? false : true));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx_r9.formModel.driverData.driverFirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx_r9.formModel.driverData.driverLastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx_r9.formModel.driverData.driverDetailsCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx_r9.formModel.driverData.driverMobNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx_r9.formModel.driverData.driverDLNumber);
  }
}
const _c12 = function (a0, a1) {
  return {
    "text-mode bg-tab-default-content": a0,
    "page-wrapper": a1
  };
};
const _c13 = function (a0) {
  return {
    "text-mode": a0
  };
};
const _c14 = function (a0) {
  return {
    "hide": a0
  };
};
dayjs__WEBPACK_IMPORTED_MODULE_1__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
class PolicyDetailsComponent {
  /**
  * constructor
  * @param router
  */
  constructor(router, commonService, coreService, vehicleService, route, translateService, claimsService, monitorService, inspectionService, dialog) {
    this.router = router;
    this.commonService = commonService;
    this.coreService = coreService;
    this.vehicleService = vehicleService;
    this.route = route;
    this.translateService = translateService;
    this.claimsService = claimsService;
    this.monitorService = monitorService;
    this.inspectionService = inspectionService;
    this.dialog = dialog;
    this.isFormConfirmed = false;
    this.isEdit = false;
    this.inputDisabled = true;
    this.policyInputDisabled = true;
    this.infoDisabled = true;
    this.searchDisabled = false;
    this.inspectionTemplateId = 0;
    this.makeDisabled = false;
    this.preventVinCall = false;
    this.modelDisabled = false;
    this.yearDisabled = false;
    this.umc = '';
    this.validVehicleFields = [];
    this.employeeList = [];
    this.towingDisabled = true;
    this.repairTypeDisabled = true;
    this.isApiLoading = true;
    this.documentSteps = [];
    this.serviceTypeString = '';
    this.repairTypesString = '--';
    this.assigneeString = '--';
    this.mode = '';
    this.subscriptions = [];
    this.userPermission = {};
    this.registrationDate = '';
    this.manufacturingDate = '';
    this.showDelete = false;
    this.canNavigate = false;
    this.inspectionId = '';
    this.shouldOpenPopup = false;
    this.shouldPopulateForm = false;
    this.driverCodeData = [];
    this.currentSearchValue = '';
    this.currentSelectedValue = '';
    this.isSaveButtonClicked = false;
    this.isCancelButtonClicked = false;
    this.formHasSameValues = false;
    this.saveButtonModel = {
      label: 'save',
      type: 'disabled',
      onclick: this.submitForm.bind(this)
    };
    this.cancelButtonModel = {
      label: 'cancel',
      type: 'outline',
      onclick: this.cancel.bind(this)
    };
    this.deleteButtonModel = {
      label: 'delete',
      type: 'outline-danger',
      onclick: this.delete.bind(this)
    };
    this.uploadRegCardButtonModel = {
      label: 'upload_registration',
      type: 'outline',
      icon: 'camera',
      onclick: this.uploadRegCard.bind(this)
    };
    this.rejectButtonModel = {
      label: 'reject',
      type: 'outline-danger'
    };
    this.approveButtonModel = {
      label: 'approve',
      type: 'primary',
      onclick: this.approve.bind(this)
    };
    this.settleClaimButtonModel = {
      label: 'settle_claim',
      type: 'primary',
      onclick: this.settleClaim.bind(this)
    };
    this.submitForApprovalButtonModel = {
      label: 'Submit for Approval',
      type: 'primary',
      onclick: this.submitForApproval.bind(this)
    };
    this.vehicleFormData = {
      vin: '',
      vehicleRegistrationNum: '',
      make: '',
      model: '',
      year: '',
      vehicleType: '',
      registrationDate: '',
      manufacturingDate: '',
      Id: 0
    };
    this.customerFormData = {
      policyNumber: '',
      policyExpiryDate: '',
      driverCode: '',
      mobNumber: '',
      policyCategory: '',
      insuranceProductName: '',
      claimIntimationDate: '',
      insurerFirstName: '',
      insurerLastName: '',
      email: '',
      policyHolderAddPermanent: '',
      policyHolderAddCurrent: '',
      insuranceOrgName: '',
      sumInsured: 0,
      gracePeriodDays: 0
    };
    this.driverFormData = {
      isOwner: 'Owner',
      driverFirstName: '',
      driverLastName: '',
      driverDLNumber: '',
      driverDetailsCode: '',
      driverMobNumber: ''
    };
    this.isOwner = false;
    this.shouldPopulateEditForm = false;
    this.commonService.userProfileData.subscribe(res => {
      if (res && res.data) {
        const {
          userPermission,
          vehicleSourceType
        } = res.data;
        this.userPermission = userPermission || {};
        this.estimateId = vehicleSourceType;
      }
    });
  }
  /**
   * Called from the navigation guard when navigating away from the page
   * Here we show the confirmation dialog
   */
  canDeactivate() {
    if (!this.isSaveButtonClicked && !this.isCancelButtonClicked) {
      const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_cancel'), this.translateService.instant('confirm_cancel_message'));
      return dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(response => {
        if (response) {
          return true;
        }
        return false;
      }));
    } else {
      return true;
    }
  }
  /**
   * on init
   */
  ngOnInit() {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.formModel = {
        ..._this.formModel,
        policyData: (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.newCustomerPolicyDetailsForm)(),
        vehicleData: (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.newCustomerVehicleDetailsForm)(),
        driverData: (0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.newCustomerDriverDetailsForm)()
      };
      _this.formModel.policyData.isPermanentAddSameAsCurrent.options = [{
        label: 'permanent_address_is_same_as_current',
        value: '1',
        checked: false
      }];
      _this.formModel.vehicleData.make = {
        ..._this.formModel.vehicleData.make,
        validation: {
          name: 'make',
          validationFunction: () => {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([]);
          }
        }
      };
      _this.formModel.vehicleData.model = {
        ..._this.formModel.vehicleData.model,
        validation: {
          name: 'model',
          validationFunction: () => {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([]);
          }
        }
      };
      _this.formModel.vehicleData.year = {
        ..._this.formModel.vehicleData.year,
        validation: {
          name: 'year',
          validationFunction: () => {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([]);
          }
        }
      };
      _this.inspectionService.getInspectionTemplateList().subscribe({
        next: inspectionList => {
          const claimInspectionTemplate = inspectionList?.data;
          if (claimInspectionTemplate.length > 0) {
            _this.commonService.repairInspectionTemplate = claimInspectionTemplate[0];
            _this.inspectionTemplateId = claimInspectionTemplate[0].id;
          }
        }
      });
      _this.formModel.policyData.searchInputData = {
        ..._this.formModel.policyData.searchInputData,
        onIconClick: _this.onClickSearchIcon.bind(_this)
      };
      _this.driverCodeData = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)(_this.coreService.getPhoneNumber());
      _this.formModel.policyData.driverCode = {
        ..._this.formModel.policyData.driverCode,
        options: _this.driverCodeData.sort((a, b) => a.name.localeCompare(b.name))
      };
      _this.formModel.driverData.driverDetailsCode = {
        ..._this.formModel.driverData.driverDetailsCode,
        options: _this.driverCodeData.sort((a, b) => a.name.localeCompare(b.name))
      };
      _this.route.parent?.params?.subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.claimGuid = _this.route.parent?.snapshot.paramMap.get('id');
          if (_this.claimGuid !== '0') {
            _this.isEdit = true;
            _this.shouldPopulateEditForm = true;
            _this.showDelete = true;
            yield _this.getClaimDetails();
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * after view init
   */
  ngAfterViewInit() {
    this.searchInputData?.setValidatorForPolicyChasisPlateNumber([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
  }
  /**
   * @returns {void}
  */
  getClaimDetails() {
    var _this2 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.commonService.showLoading();
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)(_this2.claimsService.getClaimDetail(_this2.claimGuid)).then(response => {
        _this2.commonService.hideLoading();
        if (response) {
          _this2.status = response.claimStatus;
          // Deep clone of response
          _this2.result = JSON.parse(JSON.stringify(response));
          _this2.shouldOpenPopup = true;
          _this2.prepopulateFormData(JSON.parse(JSON.stringify(response)));
        }
      }).catch(() => {
        _this2.shouldOpenPopup = false;
        _this2.commonService.hideLoading();
      });
    })();
  }
  /**
   * Deep Clone of formModel
   */
  deepClone(obj, cache = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    // Check if the object has already been cloned
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    if (Array.isArray(obj)) {
      const arrCopy = obj.map(item => this.deepClone(item, cache));
      cache.set(obj, arrCopy);
      return arrCopy;
    }
    const objCopy = {};
    cache.set(obj, objCopy);
    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        objCopy[key] = this.deepClone(obj[key], cache);
      }
    }
    return objCopy;
  }
  /**
   * get FormModel sValues
   */
  getFormModelValues(formModelvalue) {
    const vehicleData = {
      'vehicleType': formModelvalue?.vehicleData?.vehicleType?.selectedOption?.name,
      'make': formModelvalue?.vehicleData?.make?.selectedOption?.name,
      'model': formModelvalue?.vehicleData?.model?.selectedOption?.modelDescription,
      'year': formModelvalue?.vehicleData?.year?.selectedOption?.name,
      'vinNum': formModelvalue?.vehicleData?.vin?.value,
      'plateNo': formModelvalue?.vehicleData?.vehicleRegistrationNum?.value,
      'manufacturingDate': formModelvalue?.vehicleData?.manufacturingDate?.value ? dayjs__WEBPACK_IMPORTED_MODULE_1__(formModelvalue?.vehicleData?.manufacturingDate?.value.toString()).format('YYYY-MM-DDT00:00:00') : null,
      'registrationDate': formModelvalue?.vehicleData?.registrationDate?.value ? dayjs__WEBPACK_IMPORTED_MODULE_1__(formModelvalue?.vehicleData?.registrationDate?.value.toString()).format('YYYY-MM-DDT00:00:00') : null
    };
    const customerDetailsData = {
      'policyNo': formModelvalue?.policyData?.policyNumber?.value,
      'ExpiryDate': formModelvalue?.policyData?.policyExpiryDate?.value,
      'policyHolderFirstName': formModelvalue?.policyData?.insurerFirstName?.value,
      'policyHolderLastName': formModelvalue?.policyData?.insurerLastName?.value,
      'insuranceOrganizationName': formModelvalue?.policyData?.insuranceOrgName?.value,
      'policyHolderAddress1': formModelvalue?.policyData?.policyHolderAddPermanent?.value,
      'policyHolderAddress2': formModelvalue?.policyData?.policyHolderAddCurrent?.value,
      'policyMobileCountryCode': formModelvalue?.policyData?.driverCode?.selectedOption?.phoneCountryCode,
      'policyHolderMobileNumber': formModelvalue?.policyData?.mobNumber?.value,
      'policyHolderEmail': formModelvalue?.policyData?.email?.value,
      'policyCategory': formModelvalue?.policyData?.policyCategory?.selectedOption?.name,
      'categoryId': formModelvalue?.policyData?.policyCategory?.selectedOption?.id,
      'insuranceProductName': formModelvalue?.policyData?.insuranceProductName?.selectedOption?.name,
      'claimIntimationDate': formModelvalue?.policyData?.claimIntimationDate?.value ? dayjs__WEBPACK_IMPORTED_MODULE_1__(formModelvalue?.policyData?.claimIntimationDate?.value.toString()).format('YYYY-MM-DDT00:00:00') : null,
      'sumAssured': formModelvalue?.policyData?.sumInsured?.value
    };
    const customerData = {
      'inspectionId': this.result?.inspectionId || this.formModel.vehicleData['inspectionID'],
      'domainId': 4100,
      'customerDetails': customerDetailsData,
      'vehicleMetaData': vehicleData
    };
    return customerData;
  }
  /**
   * @returns {void}
  */
  prepopulateFormData(result) {
    if (result) {
      this.isOwner = result.driverDetails && result.driverDetails?.firstName == null ? true : false;
      this.inspectionId = result.inspectionId;
      this.setFormValues(result);
      this.checkForFormValidation();
    }
  }
  /**
   * add vehicle
   */
  addVehicle() {
    var _this3 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formData = {
        'vin': _this3.vehicleFormData.vin,
        'vehicleCountryId': 1,
        'umc': _this3.umc,
        'make': _this3.vehicleFormData.make,
        'model': _this3.vehicleFormData.model,
        'type': _this3.vehicleFormData.vehicleType,
        'firstRegistrationDate': dayjs__WEBPACK_IMPORTED_MODULE_1__(_this3.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00'),
        'manufacturingDate': dayjs__WEBPACK_IMPORTED_MODULE_1__(_this3.vehicleFormData.manufacturingDate).format('YYYY-MM-DDT00:00:00'),
        'registrationNumber': _this3.vehicleFormData.vehicleRegistrationNum,
        'condition': 1,
        'ModelYearRange': _this3.vehicleFormData.year,
        'InspectionTemplateId': _this3.inspectionTemplateId,
        'CustomerName': _this3.customerFormData.insurerFirstName,
        'CustomerEmail': _this3.customerFormData.email
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)(_this3.vehicleService.addVehicle(formData, 4100, 0)).then(result => {
        if (result) {
          _this3.vehicleId = result.id;
          _this3.vehicleFormData.inspectionID = result.inspectionId;
          _this3.vehicleFormData.inspectionGuid = result.inspectionGuid;
        }
      }).catch(err => {
        _this3.commonService.hideLoading();
        throw err;
      });
    })();
  }
  /**
   * populate make, year, model dropdowns
   */
  populateDropdowns() {
    var _this4 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const policyCategoryData = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)(_this4.claimsService.getClaimLookups('CLMPolicyType'));
      _this4.formModel.policyData.policyCategory = {
        ..._this4.formModel.policyData.policyCategory,
        options: policyCategoryData.data.sort((a, b) => a.name.localeCompare(b.name))
      };
      const vehicleTypeData = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)(_this4.claimsService.getClaimLookups('CLMVehicleType'));
      _this4.formModel.vehicleData.vehicleType = {
        ..._this4.formModel.vehicleData.vehicleType,
        options: vehicleTypeData.data.sort((a, b) => a.name.localeCompare(b.name))
      };
      _this4.commonService.showLoading();
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)(_this4.vehicleService.getVehicleMake());
      _this4.formModel.vehicleData.make = {
        ..._this4.formModel.vehicleData.make,
        options: data.sort((a, b) => a.name.localeCompare(b.name))
      };
      const makeList = _this4.formModel.vehicleData.make.options;
      const selectedMake = makeList.filter(q => q.name === _this4.vehicleFormData.make);
      if (selectedMake.length > 0) {
        _this4.vehicleService.getVehicleModel(selectedMake[0].id, _this4.estimateId).subscribe(data => {
          _this4.formModel.vehicleData.model = {
            ..._this4.formModel.vehicleData.model,
            options: data
          };
          const model = _this4.formModel.vehicleData.model.options?.filter(q => q.umc == _this4.umc || q.modelDescription == _this4.vehicleFormData.model);
          if (model.length > 0) {
            _this4.vehicleService.getVehicleYearByModel(model[0].id, _this4.estimateId)?.subscribe(data => {
              _this4.formModel.vehicleData.year = {
                ..._this4.formModel.vehicleData.year,
                options: data
              };
            });
          }
        });
      }
      _this4.commonService.hideLoading();
    })();
  }
  /**
   * on dropdown observable load
   */
  onObservableLoad(items) {
    this.commonService.hideLoading();
    if (!items) {
      return;
    }
    if (items && items.length > 0) {
      const selectedItem = items.filter(it => {
        return it.phoneCountryCode === this.formModel.policyData.driverCode.selectedOption?.phoneCountryCode;
      });
      if (selectedItem.length > 0) {
        const output = selectedItem[0];
        const validationPattern = output['regExpression'];
        this.formModel.policyData.driverCode = {
          ...this.formModel.policyData.driverCode,
          selectedOption: output
        };
        if (this.driverPhone) {
          this.driverPhone.updateCurrentValidation(validationPattern, true);
        }
      }
    }
  }
  /**
   * on form update
   * @param output o
   */
  onFormUpdate(output) {
    var _this5 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (output.name === 'searchInputData') {
        if (output.value == '') return;
        _this5.formModel.policyData['searchInputData'].value = output.value;
        _this5.currentSearchValue = output.value;
        if (_this5.isEdit && _this5.currentSearchValue != '') {
          _this5.shouldPopulateEditForm = false;
        }
        if (_this5.currentSearchValue == '' && _this5.saveButtonModel.type == 'primary') {
          _this5.searchInputData.setValidatorForPolicyChasisPlateNumber([]);
        }
      }
      if (output.name === 'driverCode') {
        const validationPattern = output.value['regExpression'];
        _this5.driverPhone?.updateCurrentValidation(validationPattern);
        _this5.formModel.policyData.mobNumber = {
          ..._this5.formModel.policyData.mobNumber,
          disabled: false
        };
      }
      if (output.type === 'select') {
        const keyValue = _this5.formModel.policyData[output.name].fieldValue || _this5.formModel.policyData[output.name].displayValue;
        if (_this5.formModel[output.name]?.selectedOption && _this5.formModel[output.name]?.selectedOption[keyValue] === output?.value[keyValue]) {
          return;
        }
        _this5.formModel.policyData[output.name] = {
          ..._this5.formModel.policyData[output.name],
          selectedOption: output.value
        };
        _this5.customerFormData[output.name] = output.value[keyValue];
        _this5.customerFormData[_this5.formModel.policyData[output.name]['idField']] = output.value[_this5.formModel.policyData[output.name].displayValue];
      } else {
        if (output.isValid) {
          _this5.formModel.policyData[output.name].value = output.value;
          _this5.customerFormData[output.name] = output.value;
        } else {
          _this5.formModel.policyData[output.name].value = '';
          _this5.customerFormData[output.name] = '';
        }
      }
      _this5.customerFormData = {
        ..._this5.customerFormData
      };
      _this5.checkForFormValidation();
    })();
  }
  /**
   * on form update
   * @param output o
   */
  onDriverFormUpdate(output) {
    var _this6 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (output.name === 'driverDetailsCode') {
        const validationPattern = output.value['regExpression'];
        _this6.driverDetailsPhone?.updateCurrentValidation(validationPattern);
        _this6.formModel.driverData.driverMobNumber = {
          ..._this6.formModel.driverData.driverMobNumber,
          disabled: false
        };
      }
      if (output.type === 'select') {
        const keyValue = _this6.formModel.driverData[output.name].fieldValue || _this6.formModel.driverData[output.name].displayValue;
        if (_this6.formModel[output.name]?.selectedOption && _this6.formModel[output.name]?.selectedOption[keyValue] === output?.value[keyValue]) {
          return;
        }
        _this6.formModel.driverData[output.name] = {
          ..._this6.formModel.driverData[output.name],
          selectedOption: output.value
        };
        _this6.driverFormData[output.name] = output.value[keyValue];
        _this6.driverFormData[_this6.formModel.driverData[output.name]['idField']] = output.value[_this6.formModel.driverData[output.name].displayValue];
      } else {
        if (output.isValid) {
          _this6.formModel.driverData[output.name].value = output.value;
          _this6.driverFormData[output.name] = output.value;
          if (output.name === 'isOwner') {
            if (output.value == 'Owner') {
              _this6.formModel.driverData.driverFirstName = {
                ..._this6.formModel.driverData.driverFirstName,
                value: '',
                required: false,
                validation: {
                  name: 'driverFirstName',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([]);
                  }
                }
              };
              _this6.formModel.driverData.driverLastName = {
                ..._this6.formModel.driverData.driverLastName,
                value: '',
                required: false,
                validation: {
                  name: 'driverLastName',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([]);
                  }
                }
              };
              _this6.formModel.driverData.driverDLNumber = {
                ..._this6.formModel.driverData.driverDLNumber,
                required: false,
                value: '',
                validation: {
                  name: 'driverDLNumber',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([]);
                  }
                }
              };
              _this6.formModel.driverData.driverDetailsCode = {
                ..._this6.formModel.driverData.driverDetailsCode,
                required: false,
                selectedOption: {},
                validation: {
                  name: 'driverDetailsCode',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([]);
                  }
                }
              };
              _this6.formModel.driverData.driverMobNumber = {
                ..._this6.formModel.driverData.driverMobNumber,
                required: false,
                value: '',
                validation: {
                  name: 'driverMobNumber',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([]);
                  }
                }
              };
            } else {
              _this6.formModel.driverData.driverFirstName = {
                ..._this6.formModel.driverData.driverFirstName,
                required: true,
                validation: {
                  name: 'driverFirstName',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[a-zA-Z]+$')]);
                  },
                  validationMessage: error => {
                    if (error['required']) {
                      return 'Driver first name is required';
                    }
                    if (error['maxlength']) {
                      return 'Driver First Name should have not more than 50 characters';
                    }
                    if (error['pattern']) {
                      return 'only_alphabets_allowed';
                    }
                    return '';
                  }
                }
              };
              _this6.formModel.driverData.driverLastName = {
                ..._this6.formModel.driverData.driverLastName,
                required: true,
                validation: {
                  name: 'driverLastName',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[a-zA-Z]+$')]);
                  },
                  validationMessage: error => {
                    if (error['required']) {
                      return 'Driver last name is required';
                    }
                    if (error['maxlength']) {
                      return 'Driver Last Name should have not more than 50 characters';
                    }
                    if (error['pattern']) {
                      return 'only_alphabets_allowed';
                    }
                    return '';
                  }
                }
              };
              _this6.formModel.driverData.driverDLNumber = {
                ..._this6.formModel.driverData.driverDLNumber,
                required: true,
                validation: {
                  name: 'driverDLNumber',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
                  },
                  validationMessage: error => {
                    if (error['required']) {
                      return 'Driver DL number is required';
                    }
                    return '';
                  }
                }
              };
              _this6.formModel.driverData.driverDetailsCode = {
                ..._this6.formModel.driverData.driverDetailsCode,
                required: true,
                validation: {
                  name: 'phoneCountryCode',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
                  },
                  validationMessage: error => {
                    if (error['required']) {
                      return 'required_code';
                    }
                    return '';
                  }
                }
              };
              _this6.formModel.driverData.driverMobNumber = {
                ..._this6.formModel.driverData.driverMobNumber,
                required: true,
                validation: {
                  name: 'driverMobNumber',
                  validationFunction: () => {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[0-9]+[0-9 ,.\'-]+$')]);
                  },
                  validationMessage: error => {
                    if (error['required']) {
                      return 'required_mobile_number';
                    }
                    if (error['pattern']) {
                      return 'valid_mobile_number';
                    }
                    return '';
                  }
                }
              };
            }
          }
        } else {
          _this6.formModel.driverData[output.name].value = '';
          _this6.driverFormData[output.name] = '';
        }
      }
      _this6.driverFormData = {
        ..._this6.driverFormData
      };
      _this6.checkForFormValidation();
    })();
  }
  /**
     * on Search form Update
     * @param output o
     */
  onSearchFormUpdate(output) {
    if (output) {
      if (output.name === 'selectAndSearchDetails') {
        this.formModel.policyData['selectAndSearchDetails'].value = output.value;
        this.formModel.policyData['searchInputData'].value = '';
        this.currentSelectedValue = output.value;
        const category = output.value;
        if (category === 'Policy Number') {
          this.searchInputData.setValidatorForPolicyChasisPlateNumber([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
        } else if (category === 'Chasis Number') {
          this.searchInputData.setValidatorForPolicyChasisPlateNumber([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.minLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[a-hA-Hj-nJ-NpPr-zR-Z0-9]+$')], 'Chasis Number');
        } else if (category === 'Plate Number') {
          this.searchInputData.setValidatorForPolicyChasisPlateNumber([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[a-zA-Z0-9]*$'), (0,src_app_helper_form_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_4__.licensePlateValidator)()], 'Plate Number');
        }
      }
    } else {
      this.formModel.policyData['selectAndSearchDetails'].value = 'Policy Number';
    }
  }
  /**
   * check for form validation
   */
  compareAddresses() {
    if (this.formModel.policyData.policyHolderAddCurrent.value && this.formModel.policyData.policyHolderAddPermanent.value) {
      if (this.formModel.policyData.policyHolderAddCurrent.value.toLocaleString().trim() === this.formModel.policyData.policyHolderAddPermanent.value.toLocaleString().trim()) {
        this.formModel.policyData.isPermanentAddSameAsCurrent = {
          ...this.formModel.policyData.isPermanentAddSameAsCurrent,
          options: [{
            label: 'permanent_address_is_same_as_current',
            value: '1',
            checked: true
          }]
        };
      } else {
        this.formModel.policyData.isPermanentAddSameAsCurrent = {
          ...this.formModel.policyData.isPermanentAddSameAsCurrent,
          options: [{
            label: 'permanent_address_is_same_as_current',
            value: '1',
            checked: false
          }]
        };
      }
    }
  }
  /**
   * check for form validation
   */
  checkForFormValidationCustomer() {
    const keys = Object.keys(this.customerFormData);
    let isValid = true;
    for (const k in keys) {
      const prop = keys[k];
      if (prop == 'insuranceProductName' || prop == 'lossJurisdiction' || prop == 'phoneCountryCode' || prop === 'searchInputData' || prop === 'gracePeriodDays') {
        continue;
      }
      if (!this.customerFormData[prop]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
  /**
   * check validation  for vehicle
   * @returns boolean
   */
  checkForFormValidationVehicle() {
    const keys = Object.keys(this.vehicleFormData);
    let isValid = true;
    for (const k in keys) {
      const prop = keys[k];
      if (prop == 'Id') {
        continue;
      }
      if (!this.vehicleFormData[prop]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
  /**
   * check validation  for driver details
   * @returns boolean
   */
  checkForFormValidationDriver() {
    const keys = Object.keys(this.driverFormData);
    let isValid = true;
    for (const k in keys) {
      const prop = keys[k];
      if (prop.toLowerCase() == 'isowner' && this.driverFormData[prop]?.toLowerCase() == 'owner') {
        isValid = true;
        break;
      }
      if (!this.driverFormData[prop]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
  /**
   * check for form validation
  */
  checkForFormValidation() {
    if (this.isFormConfirmed) {
      this.saveButtonModel.type = 'outline';
      return false;
    }
    if (this.checkForFormValidationCustomer() && this.checkForFormValidationVehicle() && this.checkForFormValidationDriver()) {
      this.canNavigate = true;
      this.saveButtonModel.type = 'primary';
      return true;
    } else {
      this.saveButtonModel.type = 'disabled';
    }
    return false;
  }
  /**
   * on form update vehicle
   */
  onFormUpdateVehicle(output) {
    this.monitorService.logEvent('onFormUpdateVehicle', ['PolicyDetailsComponent', 'addenda-claim', {
      claimId: this.claimGuid,
      output
    }]);
    if (output.type === 'select') {
      this.formModel.vehicleData[output.name] = {
        ...this.formModel.vehicleData[output.name],
        selectedOption: output.value
      };
      this.vehicleFormData[output.name] = output.value[this.formModel.vehicleData[output.name].fieldValue];
      if (output.name == 'make') {
        this.vehicleFormData['model'] = null;
        this.vehicleFormData['year'] = null;
        this.vehicleFormData['vehicleType'] = null;
        this.modelDisabled = true;
        this.yearDisabled = true;
        this.formModel.vehicleData.year = {
          ...this.formModel.vehicleData.year,
          selectedOption: {},
          options: [],
          observable: null
        };
        this.formModel.vehicleData.year.options = [];
        this.formModel.vehicleData.model = {
          ...this.formModel.vehicleData.model,
          selectedOption: {},
          options: [],
          observable: null
        };
        this.formModel.vehicleData.vehicleType = {
          ...this.formModel.vehicleData.vehicleType,
          selectedOption: {},
          options: [],
          observable: null
        };
        if (output.value) {
          this.formModel.vehicleData.model = {
            ...this.formModel.vehicleData.model,
            observable: this.vehicleService.getVehicleModel(output.value.id, this.estimateId),
            onObservableLoad: this.enableDropdowns.bind(this)
          };
          setTimeout(() => {
            this.model?.triggerObservable();
          });
        }
      } else if (output.name == 'model') {
        this.yearDisabled = true;
        this.formModel.vehicleData.year = {
          ...this.formModel.vehicleData.year,
          selectedOption: {},
          observable: null,
          options: []
        };
        this.vehicleFormData['year'] = null;
        if (output.value) {
          this.umc = output.value.umc;
          this.formModel.vehicleData.year = {
            ...this.formModel.vehicleData.year,
            observable: this.vehicleService.getVehicleYearByModel(output.value.id, this.estimateId),
            onObservableLoad: this.enableDropdowns.bind(this)
          };
          setTimeout(() => {
            this.year?.triggerObservable();
          });
        }
      }
    } else {
      if (!output.isValid) {
        this.formModel.vehicleData[output.name].value = '';
        this.vehicleFormData[output.name] = '';
      } else {
        this.formModel.vehicleData[output.name].value = output.value;
        this.vehicleFormData[output.name] = output.value;
      }
      const currentValidVehicleField = this.validVehicleFields.find(q => q.field == output.name);
      if (currentValidVehicleField != null) {
        currentValidVehicleField.valid = output.isValid;
      } else {
        this.validVehicleFields.push({
          valid: output.isValid,
          field: output.name
        });
      }
    }
    this.vehicleFormData = {
      ...this.vehicleFormData
    };
    this.checkForFormValidation();
  }
  /**
   * reset import term
   */
  resetVehicleDropdown(enableControls = true) {
    this.vehicleFormData['make'] = '';
    this.vehicleFormData['model'] = '';
    this.vehicleFormData['year'] = null;
    this.vehicleFormData['vehicleType'] = '';
    this.formModel.vehicleData.model.options = [];
    this.formModel.vehicleData.year.options = [];
    this.formModel.vehicleData['make'] = {
      ...this.formModel.vehicleData['make'],
      selectedOption: {}
    };
    this.formModel.vehicleData.model = {
      ...this.formModel.vehicleData['model'],
      selectedOption: {}
    };
    this.formModel.vehicleData.year = {
      ...this.formModel.vehicleData['year'],
      selectedOption: {}
    };
    this.formModel.vehicleData.vehicleType = {
      ...this.formModel.vehicleData['vehicleType'],
      selectedOption: {}
    };
    this.formModel.vehicleData.vin = {
      ...this.formModel.vehicleData.vin,
      value: ''
    };
    this.formModel.vehicleData.vehicleRegistrationNum = {
      ...this.formModel.vehicleData.vehicleRegistrationNum,
      value: ''
    };
    this.formModel.vehicleData.registrationDate = {
      ...this.formModel.vehicleData.registrationDate,
      value: ''
    };
    this.formModel.vehicleData.manufacturingDate = {
      ...this.formModel.vehicleData.manufacturingDate,
      value: ''
    };
  }
  /**
   * reset import term
   */
  resetPolicyDropdown(enableControls = true) {
    this.formModel.policyData.policyNumber = {
      ...this.formModel.policyData.policyNumber,
      value: ''
    };
    this.formModel.policyData.insurerFirstName = {
      ...this.formModel.policyData.insurerFirstName,
      value: ''
    };
    this.formModel.policyData.insurerLastName = {
      ...this.formModel.policyData.insurerLastName,
      value: ''
    };
    this.formModel.policyData.policyExpiryDate = {
      ...this.formModel.policyData.policyExpiryDate,
      value: ''
    };
    this.formModel.policyData.insuranceOrgName = {
      ...this.formModel.policyData.insuranceOrgName,
      value: ''
    };
    this.formModel.policyData.lossJurisdiction = {
      ...this.formModel.policyData.lossJurisdiction,
      value: ''
    };
    this.formModel.policyData.policyHolderAddCurrent = {
      ...this.formModel.policyData.policyHolderAddCurrent,
      value: ''
    };
    this.formModel.policyData.policyHolderAddPermanent = {
      ...this.formModel.policyData.policyHolderAddPermanent,
      value: ''
    };
    this.formModel.policyData.isPermanentAddSameAsCurrent = {
      ...this.formModel.policyData.isPermanentAddSameAsCurrent,
      value: ''
    };
    this.formModel.policyData.email = {
      ...this.formModel.policyData.email,
      value: ''
    };
    this.formModel.policyData.mobNumber = {
      ...this.formModel.policyData.mobNumber,
      value: ''
    };
    this.formModel.policyData.sumInsured = {
      ...this.formModel.policyData.sumInsured,
      value: ''
    };
    this.formModel.policyData.isPermanentAddSameAsCurrent = {
      ...this.formModel.policyData.isPermanentAddSameAsCurrent,
      options: [{
        label: 'permanent_address_is_same_as_current',
        value: '1',
        checked: false
      }]
    };
    this.customerFormData['driverCode'] = '';
    this.customerFormData['policyCategory'] = '';
    this.customerFormData['insuranceProductName'] = '';
    this.formModel.policyData.driverCode.options = [];
    this.formModel.policyData.policyCategory.options = [];
    this.formModel.policyData.insuranceProductName.options = [];
    this.formModel.policyData['driverCode'] = {
      ...this.formModel.policyData['driverCode'],
      selectedOption: {}
    };
    this.formModel.policyData.policyCategory = {
      ...this.formModel.policyData['policyCategory'],
      selectedOption: {}
    };
    this.formModel.policyData.insuranceProductName = {
      ...this.formModel.policyData['insuranceProductName'],
      selectedOption: {}
    };
  }
  /**
   * reset import term
   */
  resetDriverDropdown(enableControls = true) {
    this.formModel.driverData.driverFirstName = {
      ...this.formModel.driverData.driverFirstName,
      value: ''
    };
    this.formModel.driverData.driverLastName = {
      ...this.formModel.driverData.driverLastName,
      value: ''
    };
    this.formModel.driverData.driverMobNumber = {
      ...this.formModel.driverData.driverMobNumber,
      value: ''
    };
    this.formModel.driverData.driverDLNumber = {
      ...this.formModel.driverData.driverDLNumber,
      value: ''
    };
    this.formModel.driverData.isOwner = {
      ...this.formModel.driverData.isOwner,
      value: 'Owner'
    }, this.driverFormData['driverDetailsCode'] = '';
    this.formModel.driverData.driverDetailsCode.options = [];
    this.formModel.driverData['driverDetailsCode'] = {
      ...this.formModel.driverData['driverDetailsCode'],
      selectedOption: {}
    };
  }
  /**
  * function to enable dropdowns
  */
  enableDropdowns() {
    this.modelDisabled = false;
    this.yearDisabled = false;
  }
  /**
   * populate policy number
   */
  populatePolicyForm(data) {
    var _this7 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.commonService.showLoading();
      let searchTypeDetail;
      if (_this7.formModel.policyData.selectAndSearchDetails.value === 'Chasis Number') {
        searchTypeDetail = 2;
      } else if (_this7.formModel.policyData.selectAndSearchDetails.value === 'Plate Number') {
        searchTypeDetail = 3;
      } else {
        searchTypeDetail = 1;
      }
      const headers = {
        searchType: searchTypeDetail,
        searchValue: data
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)(_this7.claimsService.getPolicyDetails(headers)).then( /*#__PURE__*/function () {
        var _ref2 = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          if (result && result?.success && result.data != null) {
            _this7.shouldOpenPopup = true;
            yield _this7.populateDropdowns();
            _this7.customerDetailsPopupData = result;
            _this7.commonService.hideLoading();
          } else {
            _this7.shouldOpenPopup = false;
            _this7.commonService.showInfoToast(5000, 'show-info | ' + 'Entered value does not exist in our database. Please check and enter again');
            _this7.commonService.hideLoading();
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).catch(err => {
        _this7.commonService.hideLoading();
      });
    })();
  }
  /**
   * populate policy number
   */
  setFormValues(result) {
    var _this8 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.isEdit && _this8.shouldPopulateEditForm) {
        _this8.registrationDate = result.vehicleMetaData?.registrationDate;
        _this8.manufacturingDate = result.vehicleMetaData?.manufacturingDate;
        _this8.sumInsured = result.customerDetails?.sumAssured;
        const {
          vinNumber,
          plateNumber,
          registrationDate,
          make,
          model,
          year,
          manufacturingDate,
          vehicleType
        } = result.vehicleMetaData;
        _this8.formModel = {
          ..._this8.formModel,
          policyData: {
            ...(0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.newCustomerPolicyDetailsForm)(result.customerDetails),
            driverCode: {
              ..._this8.formModel.policyData.driverCode,
              selectedOption: {
                'phoneCountryCode': result.customerDetails?.policyMobileCountryCode
              }
            },
            policyCategory: {
              ..._this8.formModel.policyData.policyCategory,
              selectedOption: {
                'name': result.customerDetails?.category,
                'id': result.customerDetails?.categoryId
              },
              disabled: true
            },
            isPermanentAddSameAsCurrent: {
              ..._this8.formModel.policyData.isPermanentAddSameAsCurrent,
              options: [{
                label: 'permanent_address_is_same_as_current',
                value: '1',
                checked: false
              }]
            },
            policyHolderAddPermanent: {
              ..._this8.formModel.policyData.policyHolderAddPermanent,
              value: result.customerDetails?.policyHolderAddress1
            },
            policyHolderAddCurrent: {
              ..._this8.formModel.policyData.policyHolderAddCurrent,
              value: result.customerDetails?.policyHolderAddress2
            },
            insuranceProductName: {
              ..._this8.formModel.policyData.insuranceProductName,
              selectedOption: {
                'name': result.customerDetails?.insuranceProductName
              },
              disabled: true
            },
            searchInputData: {
              ..._this8.formModel.policyData.searchInputData,
              onIconClick: _this8.onClickSearchIcon.bind(_this8)
            },
            selectAndSearchDetails: {
              ..._this8.formModel.policyData.selectAndSearchDetails
            }
          },
          driverData: {
            ...(0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.newCustomerDriverDetailsForm)(result.driverDetails),
            driverDetailsCode: {
              ..._this8.formModel.driverData.driverDetailsCode,
              selectedOption: {
                'phoneCountryCode': result.driverDetails?.countryCode
              }
            },
            isOwner: {
              ..._this8.formModel.driverData.isOwner,
              value: _this8.isOwner ? 'Owner' : 'Other'
            }
          }
        };
        _this8.customerFormData.policyCategory = result.customerDetails?.category;
        _this8.customerFormData.driverCode = _this8.formModel.policyData.driverCode.selectedOption.phoneCountryCode;
        _this8.formModel.vehicleData.vin = {
          ..._this8.formModel.vehicleData.vin,
          value: result.vehicleMetaData?.vinNum,
          disabled: true
        };
        _this8.formModel.vehicleData.vehicleRegistrationNum = {
          ..._this8.formModel.vehicleData.vehicleRegistrationNum,
          value: result.vehicleMetaData?.plateNo,
          disabled: true
        };
        _this8.formModel.vehicleData.registrationDate = {
          ..._this8.formModel.vehicleData.registrationDate,
          value: registrationDate,
          disabled: true
        };
        _this8.formModel.vehicleData.manufacturingDate = {
          ..._this8.formModel.vehicleData.manufacturingDate,
          value: manufacturingDate,
          disabled: true
        };
        _this8.formModel.vehicleData.make = {
          ..._this8.formModel.vehicleData.make,
          selectedOption: {
            'name': make
          },
          disabled: true
        };
        _this8.formModel.vehicleData.year = {
          ..._this8.formModel.vehicleData.year,
          disabled: true,
          selectedOption: {
            'name': year
          }
        };
        _this8.formModel.vehicleData.model = {
          ..._this8.formModel.vehicleData.model,
          selectedOption: {
            'modelDescription': model
          },
          disabled: true
        };
        _this8.formModel.vehicleData.vehicleType = {
          ..._this8.formModel.vehicleData.vehicleType,
          selectedOption: {
            'name': result.vehicleMetaData?.vehicleType
          },
          disabled: true
        };
        _this8.vehicleFormData.vehicleType = _this8.formModel.vehicleData.vehicleType.selectedOption.name;
        _this8.vehicleFormData = {
          ..._this8.vehicleFormData,
          vin: vinNumber,
          make: make,
          model: model,
          year: year,
          manufacturingDate: manufacturingDate,
          registrationDate: registrationDate,
          vehicleRegistrationNum: plateNumber,
          vehicleType: vehicleType
        };
        _this8.driverFormData = {
          ..._this8.driverFormData,
          isOwner: _this8.isOwner ? 'Owner' : 'Others',
          driverFirstName: result.driverDetails?.firstName || '',
          driverLastName: result.driverDetails?.lastName || '',
          driverDLNumber: result.driverDetails?.licenseNumber || '',
          driverDetailsCode: result.driverDetails?.countryCode || 0,
          driverMobNumber: result.driverDetails?.phoneNumber || ''
        };
      } else {
        _this8.registrationDate = result.data?.registrationDate;
        _this8.manufacturingDate = result.data?.manufacturingDate;
        _this8.sumInsured = result.data?.sumAssured;
        const {
          vinNumber,
          plateNumber,
          registrationDate,
          make,
          model,
          year,
          manufacturingDate,
          vehicleType
        } = result.data;
        _this8.formModel = {
          ..._this8.formModel,
          policyData: {
            ...(0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.newCustomerPolicyDetailsForm)(result.data),
            driverCode: {
              ..._this8.formModel.policyData.driverCode,
              selectedOption: {
                'phoneCountryCode': result.data.policyMobileCountryCode ? result.data.policyMobileCountryCode : '+91'
              },
              disabled: result.data.policyMobileCountryCode ? true : false
            },
            policyCategory: {
              ..._this8.formModel.policyData.policyCategory,
              selectedOption: _this8.formModel.policyData.policyCategory.options.find(ele => ele.name == result.data.category),
              disabled: true
            },
            isPermanentAddSameAsCurrent: {
              ..._this8.formModel.policyData.isPermanentAddSameAsCurrent,
              options: [{
                label: 'permanent_address_is_same_as_current',
                value: '1',
                checked: false
              }]
            },
            insuranceProductName: {
              ..._this8.formModel.policyData.insuranceProductName,
              selectedOption: {
                'name': result.data.insuranceProductName
              },
              disabled: true
            },
            claimIntimationDate: {
              ..._this8.formModel.policyData.claimIntimationDate,
              value: new Date()
            },
            searchInputData: {
              ..._this8.formModel.policyData.searchInputData,
              onIconClick: _this8.onClickSearchIcon.bind(_this8)
            },
            selectAndSearchDetails: {
              ..._this8.formModel.policyData.selectAndSearchDetails
            }
          },
          driverData: {
            ...(0,src_app_helper_form_claim_form_helper__WEBPACK_IMPORTED_MODULE_3__.newCustomerDriverDetailsForm)(result.customerDetails),
            driverDetailsCode: {
              ..._this8.formModel.driverData.driverDetailsCode
            },
            isOwner: {
              ..._this8.formModel.driverData.isOwner,
              value: 'Owner'
            }
          }
        };
        _this8.formModel.vehicleData.vin = {
          ..._this8.formModel.vehicleData.vin,
          value: vinNumber,
          disabled: true
        };
        _this8.formModel.vehicleData.vehicleRegistrationNum = {
          ..._this8.formModel.vehicleData.vehicleRegistrationNum,
          value: plateNumber,
          disabled: true
        };
        _this8.formModel.vehicleData.registrationDate = {
          ..._this8.formModel.vehicleData.registrationDate,
          value: registrationDate,
          disabled: true
        };
        _this8.formModel.vehicleData.manufacturingDate = {
          ..._this8.formModel.vehicleData.manufacturingDate,
          value: manufacturingDate,
          disabled: true
        };
        _this8.formModel.vehicleData.make = {
          ..._this8.formModel.vehicleData.make,
          selectedOption: {
            'name': make
          },
          disabled: true
        };
        _this8.formModel.vehicleData.year = {
          ..._this8.formModel.vehicleData.year,
          disabled: true,
          selectedOption: {
            'name': year
          }
        };
        _this8.formModel.vehicleData.model = {
          ..._this8.formModel.vehicleData.model,
          selectedOption: {
            'modelDescription': model
          },
          disabled: true
        };
        _this8.formModel.vehicleData.vehicleType = {
          ..._this8.formModel.vehicleData.vehicleType,
          selectedOption: {
            'name': vehicleType,
            'description': vehicleType
          },
          disabled: true
        };
        _this8.customerFormData.policyCategory = result.data.category;
        _this8.customerFormData.driverCode = _this8.formModel.policyData?.driverCode?.selectedOption?.phoneCountryCode;
        _this8.driverFormData.driverDetailsCode = _this8.formModel.driverData?.driverDetailsCode?.selectedOption?.phoneCountryCode;
        _this8.vehicleFormData.vehicleType = _this8.formModel.vehicleData.vehicleType.selectedOption.name;
        _this8.vehicleFormData = {
          ..._this8.vehicleFormData,
          vin: vinNumber,
          make: make,
          model: model,
          year: year,
          manufacturingDate: manufacturingDate,
          registrationDate: registrationDate,
          vehicleRegistrationNum: plateNumber,
          vehicleType: vehicleType
        };
      }
      if (_this8.driverCodeData && _this8.driverCodeData.length > 0) {
        const selectedItem = _this8.driverCodeData.filter(it => {
          return it.phoneCountryCode === _this8.customerFormData.driverCode;
        });
        const selectedDriverItem = _this8.driverCodeData.filter(it => {
          return it.phoneCountryCode === _this8.driverFormData.driverDetailsCode;
        });
        if (selectedItem.length > 0) {
          const output = selectedItem[0];
          const validationPattern = output['regExpression'];
          _this8.formModel.policyData.driverCode = {
            ..._this8.formModel.policyData.driverCode,
            selectedOption: output
          };
          if (_this8.driverPhone) {
            _this8.driverPhone.updateCurrentValidation(validationPattern, true);
          }
        }
        if (selectedDriverItem.length > 0) {
          const output = selectedDriverItem[0];
          const validationPattern = output['regExpression'];
          _this8.formModel.driverData.driverDetailsCode = {
            ..._this8.formModel.driverData.driverDetailsCode,
            selectedOption: output
          };
          if (_this8.driverDetailsPhone) {
            _this8.driverDetailsPhone.updateCurrentValidation(validationPattern, true);
          }
        }
        _this8.formModel.policyData.mobNumber = {
          ..._this8.formModel.policyData.mobNumber,
          value: _this8.isEdit && _this8.shouldPopulateEditForm ? result.customerDetails.policyHolderMobileNumber : result.data.policyHolderMobileNumber
        };
        _this8.customerFormData.mobNumber = _this8.isEdit && _this8.shouldPopulateEditForm ? result.customerDetails.policyHolderMobileNumber : result.data.policyHolderMobileNumber;
      }
      yield _this8.compareAddresses();
      _this8.previousFormModel = _this8.deepClone(_this8.formModel);
    })();
  }
  /**
   * Save claim
   */
  submitForm() {
    var _this9 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this9.saveButtonModel.type === 'disabled') {
        return;
      }
      _this9.monitorService.logEvent('submitForm', ['PolicyDetailsComponent', 'addenda-claim']);
      _this9.commonService.showLoading();
      const vehicleData = {
        'vehicleType': _this9.formModel.vehicleData.vehicleType.selectedOption?.name,
        'make': _this9.formModel.vehicleData.make.selectedOption?.name,
        'model': _this9.formModel.vehicleData.model.selectedOption?.modelDescription,
        'year': _this9.formModel.vehicleData.year.selectedOption?.name,
        'vinNum': _this9.vehicleFormData.vin,
        'plateNo': _this9.vehicleFormData.vehicleRegistrationNum,
        'manufacturingDate': _this9.vehicleFormData.manufacturingDate ? dayjs__WEBPACK_IMPORTED_MODULE_1__(_this9.vehicleFormData.manufacturingDate).format('YYYY-MM-DDT00:00:00') : null,
        'registrationDate': _this9.vehicleFormData.registrationDate ? dayjs__WEBPACK_IMPORTED_MODULE_1__(_this9.vehicleFormData.registrationDate).format('YYYY-MM-DDT00:00:00') : null
      };
      const customerDetailsData = {
        'policyNo': _this9.customerFormData.policyNumber,
        'ExpiryDate': _this9.customerFormData.policyExpiryDate,
        'policyHolderFirstName': _this9.customerFormData.insurerFirstName,
        'policyHolderLastName': _this9.customerFormData.insurerLastName,
        'insuranceOrganizationName': _this9.customerFormData.insuranceOrgName,
        'policyHolderAddress1': _this9.customerFormData.policyHolderAddPermanent,
        'policyHolderAddress2': _this9.customerFormData.policyHolderAddCurrent,
        'policyMobileCountryCode': _this9.formModel.policyData.driverCode.selectedOption?.phoneCountryCode,
        'policyHolderMobileNumber': _this9.customerFormData.mobNumber,
        'policyHolderEmail': _this9.customerFormData.email,
        'policyCategory': _this9.formModel.policyData.policyCategory.selectedOption?.name,
        'categoryId': _this9.formModel.policyData.policyCategory.selectedOption?.id,
        'insuranceProductName': _this9.customerFormData.insuranceProductName,
        'claimIntimationDate': _this9.customerFormData.claimIntimationDate ? dayjs__WEBPACK_IMPORTED_MODULE_1__(_this9.customerFormData.claimIntimationDate).format('YYYY-MM-DDT00:00:00') : null,
        'sumAssured': _this9.formModel.policyData.sumInsured.value,
        'gracePeriodDays': parseInt(_this9.formModel.policyData?.gracePeriodDays?.value?.toLocaleString())
      };
      let driverDetails;
      _this9.formModel.driverData.isOwner.value == 'Owner' ? driverDetails = {
        'isOwner': true
      } : driverDetails = {
        'FirstName': _this9.formModel.driverData.driverFirstName.value,
        'LastName': _this9.formModel.driverData.driverLastName.value,
        'LicenseNumber': _this9.formModel.driverData.driverDLNumber.value,
        'PhoneNumber': _this9.formModel.driverData.driverMobNumber.value,
        'CountryCode': _this9.formModel.driverData.driverDetailsCode.selectedOption.phoneCountryCode,
        'isOwner': false
      };
      const customerData = {
        'inspectionId': _this9.result?.inspectionId || _this9.vehicleFormData.inspectionID,
        'domainId': 4100,
        'customerDetails': customerDetailsData,
        'vehicleMetaData': vehicleData,
        'driverDetails': driverDetails
      };
      try {
        if (!_this9.inspectionId) {
          yield _this9.addVehicle();
          customerData.inspectionId = _this9.vehicleFormData.inspectionID;
          _this9.inspectionId = customerData.inspectionID;
        }
      } catch (err) {
        return;
      }
      _this9.isSaveButtonClicked = true;
      if (!_this9.claimGuid || _this9.claimGuid == '0') {
        _this9.claimsService.createClaim(customerData).subscribe({
          next: result => {
            _this9.commonService.hideLoading();
            _this9.router.navigate(['/claim/claim-detail/' + result.data.claimGuid + '/loss-detail'], {
              queryParams: {
                mode: 'edit'
              }
            });
          },
          error: err => {
            _this9.commonService.hideLoading();
            _this9.monitorService.logException(err);
          }
        });
      } else {
        vehicleData.id = _this9.result?.vehicleMetaData?.id || 0;
        vehicleData.vehicleGuid = _this9.result?.vehicleMetaData?.vehicleGuid || null;
        customerData.claimGuid = _this9.claimGuid;
        customerData.id = _this9.result?.id || 0;
        customerData.fnolId = _this9.result?.fnolId || null;
        customerData.orgId = _this9.result?.orgId || 0;
        customerData.lossDetails = _this9.result?.lossDetails ? _this9.result.lossDetails?.lossDate !== null && _this9.result.lossDetails?.registrationDate !== null ? _this9.result?.lossDetails : null : null;
        _this9.claimsService.updateClaimDetails(customerData).subscribe({
          next: result => {
            _this9.commonService.hideLoading();
            _this9.router.navigate(['/claim/claim-detail/' + result.data.claimGuid + '/loss-detail']);
          },
          error: err => {
            _this9.commonService.hideLoading();
            _this9.monitorService.logException(err);
          }
        });
      }
    })();
  }
  /**
  * Cancel claim
  */
  cancel() {
    this.isCancelButtonClicked = true;
    const dialogRef = this.commonService.openConfirmYesNoDialogBig('confirm_cancel', 'confirm_cancel_message');
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.claimGuid != '0') {
          this.router.navigate([`/claim/claim-detail/${this.claimGuid}/customer-view`]);
        } else {
          this.router.navigate(['/claim/my-claim']);
        }
      }
    });
  }
  /**
  * Delete claim
  */
  delete() {
    console.log('delete');
  }
  /**
  * Upload Registration Card
  */
  uploadRegCard() {
    console.log('uploadRegCard');
  }
  /**
  *
  * @param searchtext
  */
  onClickSearchIcon(searchtext) {
    var _this10 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (searchtext === '') {
        return;
      }
      if (_this10.status && _this10.status !== src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_8__.CLAIM_STATUS.Draft) {
        const message = _this10.translateService.instant('policy_warning_message');
        _this10.commonService.showToast(0, message);
      } else {
        if (_this10.currentSelectedValue === 'Policy Number' && _this10.formModel.policyData.policyNumber.value == _this10.currentSearchValue || _this10.currentSelectedValue === 'Chasis Number' && _this10.formModel.vehicleData.vin.value == _this10.currentSearchValue || _this10.currentSelectedValue === 'Plate Number' && _this10.formModel.vehicleData.vehicleRegistrationNum.value == _this10.currentSearchValue) return;
        yield _this10.populatePolicyForm(searchtext);
        if (!(_this10.customerDetailsPopupData && _this10.customerDetailsPopupData.data && _this10.shouldOpenPopup)) return;
        if (_this10.customerDetailsPopupData.data.inProgressClaim && _this10.customerDetailsPopupData.data.inProgressClaim !== null) {
          _this10.openExistingClaimDialogPopup(_this10.customerDetailsPopupData.data.inProgressClaim);
        } else {
          _this10.openCustomerDetailsPopup();
        }
      }
    })();
  }
  /**
  *
  * @param searchtext
  */
  openCustomerDetailsPopup() {
    var _this11 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dialogRef = _this11.dialog.open(src_app_dialogs_customer_policy_details_dialog_customer_policy_details_dialog_component__WEBPACK_IMPORTED_MODULE_5__.CustomerPolicyDetailsDialogComponent, {
        data: {
          policyNumber: _this11.customerDetailsPopupData.data.policyNo,
          make: _this11.customerDetailsPopupData.data.make,
          model: _this11.customerDetailsPopupData.data.model,
          chasisNum: _this11.customerDetailsPopupData.data.vinNumber,
          plateNum: _this11.customerDetailsPopupData.data.plateNumber,
          customerName: _this11.customerDetailsPopupData.data.policyHolderFirstName + ' ' + _this11.customerDetailsPopupData.data.policyHolderLastName
        },
        width: '779px',
        maxWidth: '779px',
        height: 'auto',
        panelClass: 'operation-panel',
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe({
        next: function () {
          var _ref3 = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
            if (response == true) {
              if (_this11.claimGuid != '0') {
                const resetDialogRef = _this11.commonService.openConfirmYesNoDialogBig('confirm_reset', 'reset_policy_message');
                resetDialogRef.afterClosed().subscribe(result => {
                  if (result == true) {
                    _this11.setFormValues(_this11.customerDetailsPopupData);
                    _this11.checkForFormValidation();
                  }
                });
              } else {
                _this11.setFormValues(_this11.customerDetailsPopupData);
                _this11.checkForFormValidation();
              }
            }
          });
          return function next(_x3) {
            return _ref3.apply(this, arguments);
          };
        }()
      });
    })();
  }
  //status thing
  /**
    Opens a dialog box for the reject claim operation component with the specified data and panel class.
    @returns {void}
  */
  openRejectClaimPopup(data) {
    const dialogRef = this.dialog.open(src_app_dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_6__.RejectClaimDialogComponent, {
      data: {
        'claimGuid': this.claimGuid
      },
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
        if (response) {
          this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_8__.CLAIM_STATUS.Rejected;
        }
      }
    });
  }
  /**
  * Approve claim
  */
  approve() {
    const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_action'), this.translateService.instant('msg_approve_claim'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimsService.updateClaimStatus(this.claimGuid, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_8__.CLAIM_STATUS.Approved, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_8__.CLAIM_STATUS.ClaimApproved).subscribe({
          next: response => {
            if (response) {
              this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_8__.CLAIM_STATUS.ClaimApproved;
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  /**
  * settleClaim
  */
  settleClaim() {
    const dialogRef = this.dialog.open(src_app_dialogs_settle_claim_dialog_settle_claim_dialog_component__WEBPACK_IMPORTED_MODULE_7__.SettleClaimDialogComponent, {
      data: null,
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
        //
      }
    });
  }
  /**
  * submitForApproval
  */
  submitForApproval() {
    const dialogRef = this.commonService.openConfirmYesNoDialogBig(this.translateService.instant('confirm_action'), this.translateService.instant('msg_submit_approve_claim'));
    dialogRef.afterClosed().subscribe(action => {
      if (action) {
        this.commonService.showLoading();
        this.claimsService.updateClaimStatus(this.claimGuid, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_8__.CLAIM_STATUS.ClaimSubmittedForApproval).subscribe({
          next: response => {
            if (response) {
              this.status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_8__.CLAIM_STATUS.ClaimSubmittedForApproval;
            }
            this.commonService.hideLoading();
          },
          error: () => {
            this.commonService.hideLoading();
          }
        });
      }
    });
  }
  /**
    Opens a dialog box for the Existing Caim component with the specified data and panel class.
    @returns {void}
  */
  openExistingClaimDialogPopup(inProgressClaim) {
    const dialogRef = this.dialog.open(src_app_dialogs_existing_claim_dialog_existing_claim_dialog_component__WEBPACK_IMPORTED_MODULE_9__.ExistingClaimDialogComponent, {
      data: inProgressClaim,
      width: '565px',
      maxWidth: '565px',
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe({
      next: response => {
        if (response) {
          this.openCustomerDetailsPopup();
        } else {
          this.router.navigate(['/claim/my-claim']);
        }
      }
    });
  }
  static #_ = this.ɵfac = function PolicyDetailsComponent_Factory(t) {
    return new (t || PolicyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_11__.CoreService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_12__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_13__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_14__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_15__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: PolicyDetailsComponent,
    selectors: [["app-policy-details"]],
    viewQuery: function PolicyDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c10, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.driverPhone = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.driverCode = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.make = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.model = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.year = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.license = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.regDate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.vehicleType = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.searchBox = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.searchInputData = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.driverDetailsPhone = _t.first);
      }
    },
    decls: 94,
    vars: 130,
    consts: [[1, "main-wrapper"], [1, "page-container-claim-details", 3, "ngClass"], [1, "form-container", "gap-32"], [1, "title", 3, "ngClass"], [1, "search-container", "gap-10"], [1, "search-title"], [1, "fault-layout"], [3, "inputModel", "controlOutput"], [1, "input-wrapper"], ["row", ""], ["searchInputData", ""], [1, "sub-title", 3, "ngClass"], [1, "required"], [1, "title"], [1, "row", 3, "ngClass"], [1, "col-6", 3, "inputModel", "controlOutput"], [1, "col-6", "registration-date", 3, "inputModel", "controlOutput"], [1, "contact-container"], [1, "row", "col-12", "gap-32"], [1, "contact-fields-wrapper"], [1, "contact-field", "basis-272", "email", 3, "inputModel", "controlOutput"], [1, "contact-field", "basis-272"], [1, "contact-field", "contact-code-field", "no-padding", 3, "inputModel", "controlOutput"], ["driverCode", ""], [1, "contact-field", "no-padding", 3, "inputModel", "controlOutput"], ["driverPhone", ""], [1, "row"], [1, "col-6", 3, "inputModel", "ngClass", "controlOutput"], [1, "col-4", 3, "inputModel", "ngClass", "controlOutput"], [1, "col-2", 3, "inputModel", "ngClass", "controlOutput"], ["companyOrg", ""], [1, "col-6", "registration-date", 3, "inputModel", "ngClass", "controlOutput"], [1, "checkbox-label", 3, "inputModel", "ngClass", "controlOutput"], ["id", "input-make", 1, "col-6", 3, "inputModel", "ngClass", "controlOutput"], ["id", "input-model", 1, "col-6", 3, "inputModel", "ngClass", "controlOutput"], ["make", ""], ["model", ""], ["year", ""], ["regDate", ""], [1, "control-container"], [1, "vehicle-details-wrapper", "mb-0"], [1, "fault-container", "gap-10"], [3, "inputModel", "ngClass", "controlOutput"], ["class", "display-content", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png", "alt", "image"], [1, "footer-button-wrapper"], [3, "buttonModel"], [1, "display-content"], ["driverDetailsCode", ""], ["driverDetailsPhone", ""]],
    template: function PolicyDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 6)(11, "chq-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_11_listener($event) {
          return ctx.onSearchFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 8, 9)(14, "chq-input", 7, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_14_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 11)(17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 14)(25, "chq-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_25_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "chq-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_26_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "div", 19)(30, "chq-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_30_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 21)(32, "div", 19)(33, "chq-input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_33_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "chq-input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_35_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 26)(41, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_41_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "chq-input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_42_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](43, "chq-input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_43_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "div", 14)(45, "chq-input", 15, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_45_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "div", 26)(48, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_48_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "chq-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_49_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "div")(51, "chq-input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_51_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](52, "div", 26)(53, "chq-input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_53_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "chq-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_54_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](55, "div", 26)(56, "chq-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_56_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](57, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_57_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](61, "div", 26)(62, "chq-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_62_listener($event) {
          return ctx.onFormUpdateVehicle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](63, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_63_listener($event) {
          return ctx.onFormUpdateVehicle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "div", 14)(65, "chq-input", 33, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_65_listener($event) {
          return ctx.onFormUpdateVehicle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](67, "chq-input", 34, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_67_listener($event) {
          return ctx.onFormUpdateVehicle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](69, "div", 26)(70, "chq-input", 27, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_70_listener($event) {
          return ctx.onFormUpdateVehicle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](72, "chq-input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_72_listener($event) {
          return ctx.onFormUpdateVehicle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](73, "div", 26)(74, "chq-input", 27, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_74_listener($event) {
          return ctx.onFormUpdateVehicle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](76, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_76_listener($event) {
          return ctx.onFormUpdateVehicle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](80, "div", 39)(81, "div", 40)(82, "div", 41)(83, "div", 6)(84, "chq-input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("controlOutput", function PolicyDetailsComponent_Template_chq_input_controlOutput_84_listener($event) {
          return ctx.onDriverFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](85, PolicyDetailsComponent_div_85_Template, 14, 8, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](86, "div", 44)(87, "div", 45)(88, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](89, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](92, "chq-button", 49)(93, "chq-button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](77, _c12, ctx.isFormConfirmed, !ctx.isFormConfirmed));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](80, _c13, ctx.isFormConfirmed));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 63, "policy_details"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 65, "select_and_search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.selectAndSearchDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.searchInputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](82, _c14, ctx.isFormConfirmed));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](20, 67, "mandatory_fields"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](23, 69, "customer_information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](84, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.insurerFirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.insurerLastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.driverCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.mobNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](39, 71, "policy_information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.policyNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](86, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.policyExpiryDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](88, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.gracePeriodDays)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](90, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](92, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.insuranceOrgName);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.policyHolderAddPermanent)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](94, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.policyHolderAddCurrent)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](96, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.isPermanentAddSameAsCurrent)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](98, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.policyCategory)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](100, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.claimIntimationDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](102, _c11, ctx.shouldOpenPopup ? false : true));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.insuranceProductName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](104, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.policyData.sumInsured)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](106, _c11, ctx.sumInsured ? true : false));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](60, 73, "vehicle_information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleData.vin)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](108, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleData.vehicleRegistrationNum)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](110, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](112, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleData.make)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](114, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleData.model)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](116, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleData.year)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](118, _c11, ctx.policyInputDisabled))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](120, _c11, ctx.policyInputDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleData.vehicleType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](122, _c11, ctx.shouldOpenPopup ? false : true));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleData.registrationDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](124, _c11, ctx.shouldOpenPopup ? ctx.registrationDate ? true : false : true));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.vehicleData.manufacturingDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](126, _c11, ctx.shouldOpenPopup ? ctx.manufacturingDate ? true : false : true));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](79, 75, "driver_details"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inputModel", ctx.formModel.driverData.isOwner)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](128, _c11, ctx.shouldOpenPopup ? false : true));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.formModel.driverData.isOwner.value === "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("buttonModel", ctx.cancelButtonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("buttonModel", ctx.saveButtonModel);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_16__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_17__.ChqButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe],
    styles: [".page-container-claim-details[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: 1px solid var(--xa-form-border);\n  border-radius: 10px;\n  padding: 30px 25px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-weight: 700;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .title.text-mode[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  border-bottom: 1px solid var(--xa-lighter-gray);\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .fault-title[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  font-weight: 700;\n  color: var(--xa-red);\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 146px;\n  padding: 0px 20px 0px 20px;\n  border-radius: 10px;\n  gap: 16px;\n  background-color: #ecedf2;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  line-height: 20px;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .input-wrapper mat-icon {\n  top: 10px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-input-wrapper[_ngcontent-%COMP%], .page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-address-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field[_ngcontent-%COMP%] {\n  flex: 1 1 120px;\n  padding: 0 10px;\n  width: 120px;\n}\n@media (max-width: 850px) {\n  .page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field[_ngcontent-%COMP%] {\n    padding: 0 6px;\n  }\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.contact-code-field[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 120px;\n  padding: 0 20px 0px 0;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-fields-wrapper[_ngcontent-%COMP%]   .contact-field.basis-272[_ngcontent-%COMP%] {\n  flex-basis: 272px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .fault-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .fault-container[_ngcontent-%COMP%]   .fault-layout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .fault-container[_ngcontent-%COMP%]   .fault-layout[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .fault-container[_ngcontent-%COMP%]   .fault-layout[_ngcontent-%COMP%]   chq-button[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .fault-container[_ngcontent-%COMP%]   .fault-layout[_ngcontent-%COMP%]   chq-button.no-opacity[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .fault-container[_ngcontent-%COMP%]   .fault-layout[_ngcontent-%COMP%]   .fault-button-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .fault-container[_ngcontent-%COMP%]   .fault-layout[_ngcontent-%COMP%]   .fault-button-layout[_ngcontent-%COMP%]   .button-top-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-align: center;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]     .input-wrapper .checkbox-wrapper .checkbox .span-label {\n  font-size: 16px;\n  font-weight: 400;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .control-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details-wrapper[_ngcontent-%COMP%] {\n  padding: 22px 12px 22px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  gap: 32px;\n  display: grid;\n  margin-bottom: 25px;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details-wrapper[_ngcontent-%COMP%]   .vehicle-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  text-transform: uppercase;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details-wrapper[_ngcontent-%COMP%]   .atfault-vehicle-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  text-transform: uppercase;\n}\n.page-container-claim-details[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .vehicle-details-wrapper[_ngcontent-%COMP%]   .display-content[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n  .disable-controls input {\n  opacity: 0.6;\n}\n\n.disable-input[_ngcontent-%COMP%], .partial-disable-info[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--xa-tab-background);\n  margin: calc(5px + 1.5vw);\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n}\n\n.text-mode[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .text-mode[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  border-bottom: 1px solid var(--xa-lighter-gray);\n  padding-left: 0px !important;\n}\n.text-mode[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.text-mode[_ngcontent-%COMP%]     chq-dropdown, .text-mode[_ngcontent-%COMP%]   chq-input[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n\n.gap-32[_ngcontent-%COMP%] {\n  gap: 32px;\n}\n\n.gap-10[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9jbGFpbS1tYW5hZ2VtZW50L3BvbGljeS1kZXRhaWxzL3BvbGljeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0FBQ047QUFHRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUhKO0FBS0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQUhOO0FBS007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFIUjtBQU1NO0VBQ0csZ0JBQUE7QUFKVDtBQU1VO0VBQ0UsU0FBQTtBQUpaO0FBV007O0VBRUUsYUFBQTtFQUNBLDJCQUFBO0FBVFI7QUFZTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVZSO0FBWVE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFWVjtBQVlVO0VBTEY7SUFNSSxjQUFBO0VBVFY7QUFDRjtBQVdVO0VBQ0UsVUFBQTtBQVRaO0FBWVU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFWWjtBQWFVO0VBQ0UsaUJBQUE7QUFYWjtBQWlCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQWZOO0FBaUJNO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFmUjtBQWlCUTtFQUNFLGtCQUFBO0FBZlY7QUFrQlE7RUFDRSxZQUFBO0FBaEJWO0FBa0JVO0VBQ0UsVUFBQTtBQWhCWjtBQW9CUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFsQlY7QUFvQlU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFsQlo7QUEyQlU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF6Qlo7QUErQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBN0JOO0FBZ0NJO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQTlCTjtBQStCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUE3QlI7QUFnQ007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBOUJSO0FBaUNNO0VBQ0UsaUJBQUE7QUEvQlI7O0FBcUNBO0VBQ0UsWUFBQTtBQWxDRjs7QUFxQ0E7O0VBRUUsK0JBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0Usd0JBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsMENBQUE7RUFDQSx5QkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxvQ0FBQTtBQWxDRjs7QUFzQ0U7O0VBRUUsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0FBbkNKO0FBc0NFO0VBQ0UsMEJBQUE7QUFwQ0o7QUF1Q0U7O0VBRUUscUJBQUE7QUFyQ0o7O0FBeUNBO0VBQ0UsU0FBQTtBQXRDRjs7QUF5Q0E7RUFDRSxTQUFBO0FBdENGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyLWNsYWltLWRldGFpbHMge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZm9ybS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMzBweCAyNXB4O1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICYudGV4dC1tb2RlIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmF1bHQtdGl0bGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIC5zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IDE0NnB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgZ2FwOiAxNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZGYyO1xyXG5cclxuICAgICAgLnNlYXJjaC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgOjpuZy1kZWVwIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgdG9wOjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgICAgLmNvbnRhY3QtaW5wdXQtd3JhcHBlcixcclxuICAgICAgLmNvbnRhY3QtYWRkcmVzcy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhY3QtZmllbGRzLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuY29udGFjdC1maWVsZCB7XHJcbiAgICAgICAgICBmbGV4OiAxIDEgMTIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYubm8tcGFkZGluZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5jb250YWN0LWNvZGUtZmllbGQge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5iYXNpcy0yNzIge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAyNzJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmF1bHQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5mYXVsdC1sYXlvdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGNocS1pbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaHEtYnV0dG9uIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAgICAgICAmLm5vLW9wYWNpdHkge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZhdWx0LWJ1dHRvbi1sYXlvdXQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBnYXA6IDVweDtcclxuXHJcbiAgICAgICAgICAuYnV0dG9uLXRvcC10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgLmNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgICAgIC5jaGVja2JveCB7XHJcbiAgICAgICAgICAuc3Bhbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udHJvbC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlaGljbGUtZGV0YWlscy13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMjJweCAxMnB4IDIycHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcbiAgICAgIGdhcDogMzJweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgLnZlaGljbGUtc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuYXRmYXVsdC12ZWhpY2xlLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGlzcGxheS1jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmRpc2FibGUtY29udHJvbHMgaW5wdXQge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLmRpc2FibGUtaW5wdXQsXHJcbi5wYXJ0aWFsLWRpc2FibGUtaW5mbyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdGFiLWJhY2tncm91bmQpO1xyXG4gIG1hcmdpbjogY2FsYyg1cHggKyAxLjV2dyk7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCk7XHJcbn1cclxuXHJcbi50ZXh0LW1vZGUge1xyXG4gIC50aXRsZSxcclxuICAuaW5mby10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgY2hxLWRyb3Bkb3duLFxyXG4gIGNocS1pbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FwLTMyIHtcclxuICBnYXA6IDMycHg7XHJcbn1cclxuXHJcbi5nYXAtMTAge1xyXG4gIGdhcDogMTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 59532:
/*!********************************************************************!*\
  !*** ./src/app/modules/claim/estimate/claim-estimate.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimEstimateComponent": () => (/* binding */ ClaimEstimateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class ClaimEstimateComponent {
  static #_ = this.ɵfac = function ClaimEstimateComponent_Factory(t) {
    return new (t || ClaimEstimateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClaimEstimateComponent,
    selectors: [["app-claim-estimate"]],
    decls: 2,
    vars: 0,
    consts: [[1, "estimate-container"]],
    template: function ClaimEstimateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: [".estimate-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 81px - (58px + 1.6vw));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9lc3RpbWF0ZS9jbGFpbS1lc3RpbWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZXN0aW1hdGUtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODFweCAtIChjYWxjKDU4cHggKyAxLjZ2dykpKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_claim_claim-management_claim-management_module_ts.js.map