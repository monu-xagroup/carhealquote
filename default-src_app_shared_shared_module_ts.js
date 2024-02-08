"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["default-src_app_shared_shared_module_ts"],{

/***/ 9138:
/*!******************************************************************!*\
  !*** ./src/app/config/display/registered-garage-table-config.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisteredGarageTableConfig": () => (/* binding */ RegisteredGarageTableConfig)
/* harmony export */ });
const RegisteredGarageTableConfig = {
  columns: [{
    id: 'Id',
    width: '0px',
    style: 'display: none',
    header: {
      text: 'Id',
      tooltip: '',
      style: 'display: none; max-width: 0'
    },
    cellStyle: 'display: none; max-width: 0',
    selector: {
      field: 'paymentId'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'SerialNo',
    sortable: false,
    header: {
      text: 'serial_no',
      tooltip: ''
    },
    selector: {
      field: 'serialNo'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'DocumentName',
    sortable: false,
    selector: {
      field: 'name'
    },
    header: {
      text: 'name',
      tooltip: '',
      style: 'text-align: center;'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'Date',
    sortable: false,
    selector: {
      field: 'date'
    },
    header: {
      text: 'date',
      tooltip: '',
      style: 'text-align: center;'
    },
    cellStyle: 'justify-content: center;',
    widget: {
      type: 'dateTime',
      dateFormat: 'dd/MM/YYYY hh:mm a'
    }
  }, {
    id: 'Attachment',
    sortable: false,
    selector: {
      field: 'url'
    },
    header: {
      text: 'attachment',
      tooltip: 'attachment',
      style: 'text-align: center;'
    },
    childColumns: [{
      id: 'Download',
      // disableColumns: true,
      selector: {
        field: 'url'
      },
      widget: {
        type: 'icon',
        config: {
          svgIcon: 'download-arrow'
        }
      }
    }, {
      id: 'Preview',
      selector: {
        field: 'url'
      },
      // disableColumns: true,
      widget: {
        type: 'icon',
        config: {
          svgIcon: 'eye'
        }
      }
    }],
    cellStyle: 'justify-content: center;'
  }]
};

/***/ }),

/***/ 19313:
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/claim-garage-assignment/claim-garage-assignment.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimGarageAssignmentComponent": () => (/* binding */ ClaimGarageAssignmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);








function ClaimGarageAssignmentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.garageDetails.Type);
  }
}
function ClaimGarageAssignmentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.garageDetails.Address);
  }
}
function ClaimGarageAssignmentComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.garageDetails.GarageMobileNumber);
  }
}
function ClaimGarageAssignmentComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.garageDetails.Distance);
  }
}
class ClaimGarageAssignmentComponent {
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
      label: 'cancel',
      type: 'outline',
      onclick: this.handleCancel.bind(this)
    };
    this.garageDetails = {};
    this.garageDetails = data.garageDetails || {};
  }
  /**
   * handle clicked on No
   */
  handleCancel() {
    this.monitorService.logEvent('handleCancel', ['ClaimGarageAssignmentComponent', 'addenda-claim']);
    this.close();
  }
  /**
   * handle clicked on Yes
   */
  handleYes() {
    this.monitorService.logEvent('handleYes', ['ClaimGarageAssignmentComponent', 'addenda-claim']);
    this.dialogRef.close(true);
  }
  /**
   * close
   */
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function ClaimGarageAssignmentComponent_Factory(t) {
    return new (t || ClaimGarageAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ClaimGarageAssignmentComponent,
    selectors: [["app-claim-garage-assignment"]],
    decls: 22,
    vars: 9,
    consts: [[1, "claim-garage-assignment"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], [1, "main-container"], [1, "hint-text"], [1, "garage-info-wrapper"], [1, "info-group"], [1, "avtar", 3, "src"], [1, "card-wrapper"], [1, "title-wrap"], ["class", "status-wrap", 4, "ngIf"], ["class", "address-wrap", 4, "ngIf"], ["class", "contact-group row", 4, "ngIf"], ["class", "location-group row", 4, "ngIf"], [1, "footer", "form-data-footer"], [1, "left", 3, "buttonModel"], [1, "right", 3, "buttonModel"], [1, "status-wrap"], [1, "label-wrap"], [1, "address-wrap"], [1, "contact-group", "row"], [1, "phone-icon", 3, "svgIcon"], [1, "contact"], [1, "location-group", "row"], [1, "location-icon", 3, "svgIcon"], [1, "distance"]],
    template: function ClaimGarageAssignmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Do you want to assign this claim to this garage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimGarageAssignmentComponent_Template_mat_icon_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Once Assigned, the garage cannot be re-assigned for this claim until rejected by garage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ClaimGarageAssignmentComponent_div_15_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ClaimGarageAssignmentComponent_div_16_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ClaimGarageAssignmentComponent_div_17_Template, 4, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ClaimGarageAssignmentComponent_div_18_Template, 4, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "chq-button", 16)(21, "chq-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.garageDetails.LogoUrl || "assets/img/xa_logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.garageDetails.Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.garageDetails.Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.garageDetails.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.garageDetails.GarageMobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.garageDetails.Distance);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonModel", ctx.noButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonModel", ctx.yesButton);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__.ChqButtonComponent],
    styles: [".claim-garage-assignment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 15px;\n  background-color: var(--xa-popup-light-gray);\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 36px !important;\n  width: 36px !important;\n  border-radius: 50%;\n  background: var(--xa-black);\n  margin-left: 10px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  text-align: center;\n  height: 16px !important;\n  width: 16px !important;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .hint-text[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: 26px;\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  display: flex;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%] {\n  gap: 9px;\n  display: flex;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .avtar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 61px;\n  border-radius: 7px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0px;\n  text-align: left;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .status-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .status-wrap[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 12px;\n  padding: 3px 8px 3px 8px;\n  border-radius: 4px;\n  opacity: 0.6;\n  background: #A3A7AD;\n  margin: 3px 0px 3px 0px;\n  width: auto;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .address-wrap[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #A3A7AD;\n  width: 320px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .contact-group[_ngcontent-%COMP%]   .phone-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: flex;\n  padding-top: 2.03px;\n  color: #A3A7AD;\n  padding-left: 10px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .contact-group[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #A3A7AD;\n  padding-left: 8px;\n  padding-top: 2.3px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .location-group[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: flex;\n  padding-top: 2.03px;\n  color: #A3A7AD;\n  padding-left: 10px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .location-group[_ngcontent-%COMP%]   .distance[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 14px;\n  color: #A3A7AD;\n  padding-left: 8px;\n  padding-top: 2.3px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .garage-status-icon[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 26px;\n  background: var(--xa-lighter-gray);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  margin-left: 10px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .garage-info-wrapper[_ngcontent-%COMP%]   .garage-status-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.claim-garage-assignment[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9jbGFpbS1nYXJhZ2UtYXNzaWdubWVudC9jbGFpbS1nYXJhZ2UtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUNaO0FBQVk7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUVoQjtBQUFnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFcEI7QUFBb0I7RUFDSSxXQUFBO0FBRXhCO0FBTVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUpaO0FBTVE7RUFDSSw4QkFBQTtFQUNBLGFBQUE7QUFKWjtBQUtZO0VBQ0ksUUFBQTtFQUNBLGFBQUE7QUFIaEI7QUFLZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSHBCO0FBTWdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUpwQjtBQU1vQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUp4QjtBQU9vQjtFQUNJLGFBQUE7QUFMeEI7QUFNd0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFKNUI7QUFRb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQU54QjtBQVV3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUjVCO0FBV3dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUNUI7QUFjd0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVo1QjtBQWV3QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFiNUI7QUFtQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBakJoQjtBQWtCZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWhCcEI7QUFzQkk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFwQlI7QUFxQlE7RUFDSSxpQkFBQTtBQW5CWjtBQXNCUTtFQUNJLGdCQUFBO0FBcEJaIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYWltLWdhcmFnZS1hc3NpZ25tZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8gcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5jbG9zZS1pY29uIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0teGEtd2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICAuaGludC10ZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIHJnYmEoMjYsIDM0LCA1MSwgMC43MCkpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogSW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdhcmFnZS1pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5pbmZvLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGdhcDogOXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAuYXZ0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjFweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHggM3B4IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNweCAwcHggM3B4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWRkcmVzcy13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBob25lLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuMDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQTNBN0FEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyLjNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvY2F0aW9uLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxvY2F0aW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuMDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQTNBN0FEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGlzdGFuY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNBM0E3QUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyLjNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdhcmFnZS1zdGF0dXMtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 64431:
/*!**********************************************************************************!*\
  !*** ./src/app/dialogs/existing-claim-dialog/existing-claim-dialog.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExistingClaimDialogComponent": () => (/* binding */ ExistingClaimDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);








class ExistingClaimDialogComponent {
  /**
   * constructor
   * @param dialogRef
   * @param data
   * @param changeDedectionRef
   */
  constructor(data, dialogRef, monitorService, commonService, translateService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.monitorService = monitorService;
    this.commonService = commonService;
    this.translateService = translateService;
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
    this.monitorService.logEvent('handleNo', ['ExistingClaimDialogComponent', 'addenda-claim']);
    this.close();
  }
  /**
   * handle clicked on Yes
   */
  handleYes() {
    this.monitorService.logEvent('handleYes', ['ExistingClaimDialogComponent', 'addenda-claim']);
    this.dialogRef.close(true);
  }
  /**
   * handle split for existing claim number
   */
  splitExistingClaimData(ind) {
    return this.translateService.instant('existing_claim').split('{{existingClaim}}')[ind];
  }
  /**
   * close
   */
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function ExistingClaimDialogComponent_Factory(t) {
    return new (t || ExistingClaimDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ExistingClaimDialogComponent,
    selectors: [["app-existing-claim-dialog"]],
    decls: 13,
    vars: 7,
    consts: [[1, "customer-policy-details-container"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], [1, "title"], [3, "href"], [1, "footer", "form-data-footer"], [1, "left", 3, "buttonModel"]],
    template: function ExistingClaimDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExistingClaimDialogComponent_Template_mat_icon_click_3_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "chq-button", 7)(12, "chq-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.splitExistingClaimData(0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "claim/claim-detail/", ctx.data.claimGuid, "/customer-view?mode=readonly", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.claimNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.splitExistingClaimData(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonModel", ctx.noButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonModel", ctx.yesButton);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__.ChqButtonComponent],
    styles: [".customer-policy-details-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 36px !important;\n  width: 36px !important;\n  border-radius: 50%;\n  background: var(--xa-black);\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  text-align: center;\n  height: 16px !important;\n  width: 16px !important;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 45px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  gap: 18px;\n}\n.customer-policy-details-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 48px;\n  margin-right: 4px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9leGlzdGluZy1jbGFpbS1kaWFsb2cvZXhpc3RpbmctY2xhaW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtBQUFKO0FBR0k7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUFEUjtBQUdRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFEWjtBQUdZO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFEaEI7QUFHZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBRHBCO0FBR29CO0VBQ0ksV0FBQTtBQUR4QjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQU5SO0FBU0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFQUjtBQVNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUFoiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tZXItcG9saWN5LWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8gcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG5cclxuICAgICAgICAuY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJsYWNrKTtcclxuXHJcbiAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLXhhLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGdhcDogMThweDtcclxuXHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogODhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 90671:
/*!************************************************************************************************!*\
  !*** ./src/app/dialogs/garage-assignment-preference/garage-assignment-preference.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GarageAssignmentPreferenceComponent": () => (/* binding */ GarageAssignmentPreferenceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);






class GarageAssignmentPreferenceComponent {
  /**
   * constructor
   * @param dialogRef
   * @param data
   * @param changeDedectionRef
   */
  constructor(dialogRef, monitorService, commonService) {
    this.dialogRef = dialogRef;
    this.monitorService = monitorService;
    this.commonService = commonService;
    this.yesButton = {
      label: 'yes',
      type: 'primary',
      onclick: this.handleYes.bind(this)
    };
    this.noButton = {
      label: 'cancel',
      type: 'outline',
      onclick: this.handleCancel.bind(this)
    };
  }
  /**
   * handle clicked on No
   */
  handleCancel() {
    this.monitorService.logEvent('handleCancel', ['GarageAssignmentPreferenceComponent', 'addenda-claim']);
    this.close();
  }
  /**
   * handle clicked on Yes
   */
  handleYes() {
    this.monitorService.logEvent('handleYes', ['GarageAssignmentPreferenceComponent', 'addenda-claim']);
    this.dialogRef.close(true);
  }
  /**
   * close
   */
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function GarageAssignmentPreferenceComponent_Factory(t) {
    return new (t || GarageAssignmentPreferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GarageAssignmentPreferenceComponent,
    selectors: [["app-garage-assignment-preference"]],
    decls: 10,
    vars: 3,
    consts: [[1, "garage-assignment-preference"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], [1, "main-container"], [1, "preference-text"], [1, "footer", "form-data-footer"], [1, "left", 3, "buttonModel"], [1, "right", 3, "buttonModel"]],
    template: function GarageAssignmentPreferenceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GarageAssignmentPreferenceComponent_Template_mat_icon_click_3_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Do you want to save this garage preference for this Policy holder?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "chq-button", 7)(9, "chq-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonModel", ctx.noButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonModel", ctx.yesButton);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__.ChqButtonComponent],
    styles: [".garage-assignment-preference[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 36px !important;\n  width: 36px !important;\n  border-radius: 50%;\n  background: var(--xa-black);\n  margin-left: 10px;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  text-align: center;\n  height: 16px !important;\n  width: 16px !important;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .preference-text[_ngcontent-%COMP%] {\n  color: var(--carheal-colors-black, #1A2233);\n  text-align: center;\n  font-family: Inter;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 25px;\n  letter-spacing: -0.25px;\n  margin: 33px 0px;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.garage-assignment-preference[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9nYXJhZ2UtYXNzaWdubWVudC1wcmVmZXJlbmNlL2dhcmFnZS1hc3NpZ25tZW50LXByZWZlcmVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQUVSO0FBRFE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBR1o7QUFGWTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBSWhCO0FBRmdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUlwQjtBQUZvQjtFQUNJLFdBQUE7QUFJeEI7QUFJUTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRlo7QUFNSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUpSO0FBS1E7RUFDSSxpQkFBQTtBQUhaO0FBTVE7RUFDSSxnQkFBQTtBQUpaIiwic291cmNlc0NvbnRlbnQiOlsiLmdhcmFnZS1hc3NpZ25tZW50LXByZWZlcmVuY2Uge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgICAgLmNsb3NlLWljb24ge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDM2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS14YS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIC5wcmVmZXJlbmNlLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY2FyaGVhbC1jb2xvcnMtYmxhY2ssICMxQTIyMzMpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAzM3B4IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 15423:
/*!******************************************************************************************************!*\
  !*** ./src/app/dialogs/registered-garage-view-estimate/registered-garage-view-estimate.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisteredGarageViewEstimateComponent": () => (/* binding */ RegisteredGarageViewEstimateComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_config_display_registered_garage_table_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/display/registered-garage-table-config */ 9138);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_xa_button_xa_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/xa-button/xa-button.component */ 74678);
/* harmony import */ var _widgets_xa_table_xa_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/xa-table/xa-table.component */ 26435);
/* harmony import */ var _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/directive/claim-roles.directive */ 65872);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);













function RegisteredGarageViewEstimateComponent_div_12_xa_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "xa-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisteredGarageViewEstimateComponent_div_12_xa_button_1_Template_xa_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.handleRejectEstimateThirdParty());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "reject_estimate"), "");
  }
}
function RegisteredGarageViewEstimateComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisteredGarageViewEstimateComponent_div_12_xa_button_1_Template, 4, 3, "xa-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("chqClaimRoles", "claimRequestEstimate");
  }
}
class RegisteredGarageViewEstimateComponent {
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
    this.tableConfig = src_app_config_display_registered_garage_table_config__WEBPACK_IMPORTED_MODULE_0__.RegisteredGarageTableConfig;
    this.tableData = [];
    /**
      Handles a cell click event.
      @param {TableRowData} row - The row data.
      @param {Partial} column - The column data.
      @returns {void}
    */
    this.handleCellClick = (row, column, event) => {
      if (column.id === 'Download') {
        const urls = row[4]?.result.value.split('/');
        const fileName = urls[urls?.length - 1]?.split('?')[0];
        this.commonService.showLoading();
        this.commonService.getFileBlob(row[4]?.result?.value).subscribe({
          next: value => {
            this.commonService.hideLoading();
            const blob = new Blob([value.res], {
              type: 'application/octet-stream'
            });
            file_saver__WEBPACK_IMPORTED_MODULE_1__(blob, fileName);
          },
          error: err => {
            this.commonService.hideLoading();
            this.monitorService.logException(err);
          }
        });
      } else if (column.id === 'Preview') {
        window.open(row[4]?.result?.value, '_blank');
      }
    };
    this.i18n = this.commonService.geti18nInfo();
    this.tableData = data.list;
  }
  /**
  * close
  */
  close() {
    this.dialogRef.close();
  }
  /**
  * close
  */
  handleRejectEstimateThirdParty() {
    this.dialogRef.close('rejectEstimate');
  }
  static #_ = this.ɵfac = function RegisteredGarageViewEstimateComponent_Factory(t) {
    return new (t || RegisteredGarageViewEstimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_2__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RegisteredGarageViewEstimateComponent,
    selectors: [["app-registered-garage-view-estimate"]],
    decls: 13,
    vars: 7,
    consts: [[1, "third-party-view-estimate-container"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], [1, "table-container", "payment-list"], [1, "table-wrapper"], ["paymentTableWrapper", ""], [3, "config", "tableData", "cellClicked", "i18n"], ["paymentTable", ""], ["class", "footer form-data-footer", 4, "ngIf"], [1, "footer", "form-data-footer"], ["type", "outline", "color", "danger", 3, "click", 4, "chqClaimRoles"], ["type", "outline", "color", "danger", 3, "click"]],
    template: function RegisteredGarageViewEstimateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisteredGarageViewEstimateComponent_Template_mat_icon_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "xa-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RegisteredGarageViewEstimateComponent_div_12_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.tableConfig)("tableData", ctx.tableData)("cellClicked", ctx.handleCellClick)("i18n", ctx.i18n);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.showRejectEstimate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _widgets_xa_button_xa_button_component__WEBPACK_IMPORTED_MODULE_4__.XaButton, _widgets_xa_table_xa_table_component__WEBPACK_IMPORTED_MODULE_5__.XaTable, _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_6__.ClaimRolesDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: [".third-party-view-estimate-container[_ngcontent-%COMP%] {\n  padding: 30px;\n  gap: 26px;\n  background-color: var(--xa-popup-light-gray);\n  display: flex;\n  flex-direction: column;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 36px !important;\n  width: 36px !important;\n  border-radius: 50%;\n  background: var(--xa-black);\n  margin-left: 15px;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  text-align: center;\n  height: 16px !important;\n  width: 16px !important;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  min-height: 120px;\n  overflow: auto;\n  max-height: 60vh;\n  height: auto;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]     thead {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]     .mat-column-Attachment > div {\n  display: flex;\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]     .mat-column-Attachment > div mat-icon {\n  margin: 0 10px;\n  text-align: center;\n  align-items: center;\n  display: flex;\n  width: auto;\n}\n@media (max-width: 1200px) {\n  .third-party-view-estimate-container[_ngcontent-%COMP%]     .mat-column-Attachment > div mat-icon {\n    margin: 0 6px;\n  }\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]     .mat-column-Attachment > div   [data-mat-icon-name=download-arrow] svg {\n  height: 18px;\n  fill: var(--xa-black);\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]     .mat-column-Attachment > div   [data-mat-icon-name=eye] path {\n  fill: var(--xa-black);\n}\n.third-party-view-estimate-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9yZWdpc3RlcmVkLWdhcmFnZS12aWV3LWVzdGltYXRlL3JlZ2lzdGVyZWQtZ2FyYWdlLXZpZXctZXN0aW1hdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQURZO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFHaEI7QUFEZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBR3BCO0FBRG9CO0VBQ0ksV0FBQTtBQUd4QjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFIUjtBQU1JO0VBQ0ksYUFBQTtBQUpSO0FBS1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBSFo7QUFJWTtFQU5KO0lBT1EsYUFBQTtFQURkO0FBQ0Y7QUFJWTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUZoQjtBQU1ZO0VBQ0kscUJBQUE7QUFKaEI7QUFRSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQU5SIiwic291cmNlc0NvbnRlbnQiOlsiLnRoaXJkLXBhcnR5LXZpZXctZXN0aW1hdGUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBnYXA6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmNsb3NlLWljb24ge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDM2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS14YS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtd3JhcHBlciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIHRoZWFkIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWNvbHVtbi1BdHRhY2htZW50ID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIFtkYXRhLW1hdC1pY29uLW5hbWU9XCJkb3dubG9hZC1hcnJvd1wiXSB7XHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS14YS1ibGFjaylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICA6Om5nLWRlZXAgW2RhdGEtbWF0LWljb24tbmFtZT1cImV5ZVwiXSB7XHJcbiAgICAgICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7091:
/*!************************************************************************************************************!*\
  !*** ./src/app/dialogs/request-missing-information-dialog/request-missing-information-dialog.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestMissingInformationDialogComponent": () => (/* binding */ RequestMissingInformationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);












function RequestMissingInformationDialogComponent_ng_container_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequestMissingInformationDialogComponent_ng_container_10_span_2_Template_mat_icon_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const data_r2 = restoredCtx.$implicit;
      const ind_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.removeMissingDataField(data_r2, ind_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "cross");
  }
}
function RequestMissingInformationDialogComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RequestMissingInformationDialogComponent_ng_container_10_span_2_Template, 4, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.missingInfoFieldsModel.selectedOption);
  }
}
class RequestMissingInformationDialogComponent {
  /**
   * constructor
   * @param dialogRef
   * @param data
   * @param changeDedectionRef
   */
  constructor(data, dialogRef, monitorService, commonService, claimService, route) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.monitorService = monitorService;
    this.commonService = commonService;
    this.claimService = claimService;
    this.route = route;
    this.subscriptions = [];
    this.isUpdate = false;
    this.notesModel = {
      placeHolder: 'notes',
      label: 'notes',
      name: 'notes',
      value: '',
      type: 'textarea',
      maxLength: 100
    };
    this.missingInfoModel = {
      placeHolder: 'select_dot',
      label: 'Select_missing_information_category',
      name: 'Select_missing_information_category',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'missingInformation',
      fieldValue: 'id',
      options: [{
        id: 'Customer Details',
        name: 'Customer Details'
      }, {
        id: 'Loss Details',
        name: 'Loss Details'
      }, {
        id: 'Documents',
        name: 'Documents'
      }, {
        id: 'Vehicle Images',
        name: 'Vehicle Images'
      }],
      errorWhenEmpty: true
    };
    this.missingInfoFieldsModel = {
      placeHolder: 'select_dot',
      label: 'select_missing_information',
      name: 'select_missing_information',
      value: 0,
      disabled: true,
      type: 'select',
      isMultiSelect: true,
      displayValue: 'name',
      idField: 'missingInformation',
      fieldValue: 'id',
      selectedOption: [],
      options: [],
      errorWhenEmpty: true
    };
    this.nameDict = {
      'PolicyNo': 'POLICY NUMBER',
      'ExpiryDate': 'POLICY EXPIRY DATE',
      'PolicyHolderFirstName': 'INSURER FIRST NAME',
      'PolicyHolderLastName': 'INSURER LAST NAME',
      'InsuranceOrganizationName': 'INSURANCE ORG NAME',
      'PolicyHolderAddress1': 'POLICY HOLDER ADDRESS (PERMANENT)',
      'PolicyHolderAddress2': 'POLICY HOLDER ADDRESS (CURRENT)',
      'PolicyMobileCountryCode': 'CODE',
      'PolicyHolderMobileNumber': 'MOBILE NUMBER',
      'PolicyHolderEmail': 'EMAIL ADDRESS',
      'Category': 'POLICY CATEGORY',
      'InsuranceProductName': 'INSURANCE PRODUCT NAME',
      'TypeOfInformation': 'TYPE OF INFORMATION',
      'DateOfBirth': '',
      'PremiumAmount': '',
      'ClaimIntimationDate': 'CLAIM INTIMATION DATE',
      //loss detail
      'LossDate': 'LOSS DATE TIME',
      'ClaimCreationDate': 'CLAIM CREATION DATE',
      'RegistrationDate': 'REGISTRATION DATE',
      'State': 'STATE',
      'City': 'CITY',
      'IntimationType': 'INTIMATION TYPE',
      'SubIntimationType': 'SUB INTIMATION TYPE',
      'DamageType': 'DAMAGE TYPE',
      'NatureOfLoss': 'NATURE OF LOSS',
      'LossSeverity': 'LOSS SEVERITY',
      'LossImpactZone': '',
      'LossLocation': '',
      'LossLocationLatitude': '',
      'LossLocationLongitude': '',
      'CauseOfLoss': 'CAUSE OF LOSS',
      'SalvageAmount': 'SALVAGE AMOUNT',
      'IsTotalLoss': 'TOTAL LOSS',
      'RepairType': 'REPAIR TYPE',
      'LossDescription': 'LOSS DESCRIPTION',
      'AdditionalLossDetails': 'ADDITIONAL LOSS DETAILS'
    };
    this.claimDetails = null;
    this.customerFields = [];
    this.lossDetailsFiels = [];
    this.documentFields = [];
    this.imagesFields = [];
  }
  /**
   * handle close
   */
  continue() {
    this.monitorService.logEvent('continue', ['RequestMissingInformationDialogComponent', 'addenda-repair']);
    this.send();
  }
  /**
   * on form update
   * @param output o
   */
  onFormUpdate(output) {
    if (output.name === 'Select_missing_information_category') {
      this.missingInfoModel = {
        ...this.missingInfoModel,
        selectedOption: output.value
      };
      this.getMissingFields(output.value.name);
    } else if (output.name === 'select_missing_information') {
      this.missingInfoFieldsModel = {
        ...this.missingInfoFieldsModel,
        selectedOption: output.value
      };
      if (output.value.length > 0) {
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
    } else {
      this.notesModel.value = output.value;
    }
  }
  /**
   * handle close
   */
  cancel() {
    this.monitorService.logEvent('cancel', ['RequestMissingInformationDialogComponent', 'addenda-repair']);
    this.dialogRef.close({
      'delete': true
    });
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
    this.monitorService.logEvent('ngOnInit', ['RequestMissingInformationDialogComponent', 'addenda-repair']);
    this.sendButton = {
      label: 'send',
      type: 'disabled',
      onclick: this.continue.bind(this),
      icon: 'check'
    };
    this.cancelButton = {
      label: 'cancel',
      type: 'outline',
      onclick: this.cancel.bind(this)
    };
    this.notesModel = {
      ...this.notesModel,
      value: this.data?.notes,
      disabled: this.data?.hideUpdate
    };
    this.missingInfoModel = {
      ...this.missingInfoModel,
      value: this.data?.missingInformation,
      disabled: this.data?.hideUpdate
    };
    this.missingInfoFieldsModel = {
      ...this.missingInfoFieldsModel,
      value: this.data?.missingInformation,
      disabled: this.data?.hideUpdate
    };
    const claimDetails$ = this.commonService.claimDetails.subscribe({
      next: response => {
        this.claimDetails = response;
      }
    });
    this.subscriptions.push(claimDetails$);
  }
  /**
   * removeMissingDataField
   * @param data
   * @param index
   */
  removeMissingDataField(data, index) {
    this.missingInfoFieldsModel.selectedOption.splice(index, 1);
    this.missingInfoFieldsModel = {
      ...this.missingInfoFieldsModel,
      selectedOption: this.missingInfoFieldsModel.selectedOption
    };
  }
  /**
   *
   */
  getMissingFields(type) {
    this.commonService.showLoading();
    switch (type) {
      case 'Customer Details':
        if (this.customerFields.length === 0) {
          this.getCustomMissingFields('CustomerDetailsDTO');
        } else {
          this.updateMissingInfoDropdownOption(this.customerFields, 'Customer Details');
        }
        break;
      case 'Loss Details':
        if (this.lossDetailsFiels.length === 0) {
          this.getCustomMissingFields('LossDetailsDTO');
        } else {
          this.updateMissingInfoDropdownOption(this.lossDetailsFiels, 'Loss Details');
        }
        break;
      case 'Documents':
        if (this.documentFields.length === 0) {
          this.getDocumentMissingFields();
        } else {
          this.updateMissingInfoDropdownOption(this.documentFields, 'Documents');
        }
        break;
      case 'Vehicle Images':
        if (this.imagesFields.length === 0) {
          this.getMediaMissingFields(this.claimDetails.inspectionId);
        } else {
          this.updateMissingInfoDropdownOption(this.imagesFields, 'Photos');
        }
        break;
    }
  }
  /**
   *
   * @param type
   */
  getCustomMissingFields(type) {
    const subs1 = this.claimService.getMissingCustomFields(type).subscribe({
      next: response => {
        if (type === 'CustomerDetailsDTO') {
          this.customerFields = response.data;
          this.updateMissingInfoDropdownOption(this.customerFields, 'Customer Details');
        } else {
          this.lossDetailsFiels = response.data;
          this.updateMissingInfoDropdownOption(this.lossDetailsFiels, 'Loss Details');
        }
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
    this.subscriptions.push(subs1);
  }
  /**
  *
  *
  */
  getDocumentMissingFields() {
    const subs2 = this.claimService.getMissingDocumentFields().subscribe({
      next: response => {
        this.documentFields = response.data;
        this.updateMissingInfoDropdownOption(this.documentFields, 'Documents');
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
    this.subscriptions.push(subs2);
  }
  /**
   *
   * @param InspectionId
   */
  getMediaMissingFields(InspectionId) {
    const subs3 = this.claimService.getMissingMediaFields(InspectionId).subscribe({
      next: response => {
        this.imagesFields = response.data;
        this.updateMissingInfoDropdownOption(this.imagesFields, 'Photos');
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
    this.subscriptions.push(subs3);
  }
  /**
   *
   * @param optionArray
   * @param type
   */
  updateMissingInfoDropdownOption(optionArray, type) {
    this.missingInfoFieldsModel = {
      ...this.missingInfoFieldsModel,
      disabled: false,
      options: optionArray.map(x => {
        return {
          id: x,
          name: this.nameDict[x.replace(/\s/g, '')] ? this.nameDict[x.replace(/\s/g, '')] : x.toUpperCase(),
          type: type
        };
      })
    };
    this.commonService.hideLoading();
  }
  /**
   *
   *
   */
  send() {
    const fieldCategoryObj = new Object();
    this.missingInfoFieldsModel.selectedOption.forEach(item => {
      if (fieldCategoryObj[item.type]) {
        fieldCategoryObj[item.type].push(item.id);
      } else {
        fieldCategoryObj[item.type] = [item.id];
      }
    });
    const MissingFieldsDTO = Object.keys(fieldCategoryObj).map(x => {
      return {
        'key': x,
        'value': fieldCategoryObj[x]
      };
    });
    const param = {
      'ClaimGuid': this.claimDetails.claimGuid,
      'Notes': this.notesModel.value,
      'MissingFieldsDTO': MissingFieldsDTO
    };
    this.commonService.showLoading();
    this.claimService.sendMissingInfo(param).subscribe({
      next: response => {
        this.commonService.hideLoading();
        this.commonService.showInfoToast(1000, response.message);
        this.dialogRef.close({
          'comment': this.notesModel.value
        });
      }
    });
  }
  /**
   * on destroy
   */
  ngOnDestroy() {
    if (this.subscriptions) this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  static #_ = this.ɵfac = function RequestMissingInformationDialogComponent_Factory(t) {
    return new (t || RequestMissingInformationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_2__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RequestMissingInformationDialogComponent,
    selectors: [["app-request-missing-information-dialog"]],
    decls: 15,
    vars: 10,
    consts: [[1, "request-missing-info-container"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], [1, "content", "gap-23"], [1, "checkbox-label", 3, "inputModel", "controlOutput"], [4, "ngIf"], ["tabindex", "-1", 3, "inputModel", "controlOutput"], [1, "footer", "form-data-footer"], [1, "left", 3, "buttonModel"], [1, "right", 3, "buttonModel"], [1, "tag-wrapper"], ["class", "tag-tile", 4, "ngFor", "ngForOf"], [1, "tag-tile"], [1, "tag-label"]],
    template: function RequestMissingInformationDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2)(6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RequestMissingInformationDialogComponent_Template_mat_icon_click_6_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function RequestMissingInformationDialogComponent_Template_chq_input_controlOutput_8_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "chq-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function RequestMissingInformationDialogComponent_Template_chq_input_controlOutput_9_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, RequestMissingInformationDialogComponent_ng_container_10_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "chq-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function RequestMissingInformationDialogComponent_Template_chq_input_controlOutput_11_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "chq-button", 9)(14, "chq-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 8, "request_missing_information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.missingInfoModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.missingInfoFieldsModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.missingInfoFieldsModel.selectedOption.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.notesModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.cancelButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.sendButton);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_3__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_4__.ChqButtonComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: [".request-missing-info-container[_ngcontent-%COMP%] {\n  padding: 30px;\n  width: 480px;\n  background-color: var(--xa-popup-light-gray);\n  display: flex;\n  flex-direction: column;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  height: 36px !important;\n  width: 36px !important;\n  border-radius: 50%;\n  background: var(--xa-black);\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  text-align: center;\n  height: 16px !important;\n  width: 16px !important;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 32px;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--xa-black);\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  gap: 6px;\n  max-height: 19.2vh;\n  overflow-y: auto;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]   .tag-tile[_ngcontent-%COMP%] {\n  gap: 4px;\n  display: flex;\n  background-color: rgba(26, 34, 51, 0.1019607843);\n  color: #0B0E15;\n  border-radius: 8px;\n  padding: 0px 8px;\n  align-items: center;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]   .tag-tile[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 14px;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .gap-23[_ngcontent-%COMP%] {\n  gap: 23px;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 52px;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.request-missing-info-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncy9yZXF1ZXN0LW1pc3NpbmctaW5mb3JtYXRpb24tZGlhbG9nL3JlcXVlc3QtbWlzc2luZy1pbmZvcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNSO0FBQ1E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNaO0FBQ1k7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNoQjtBQUFnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFcEI7QUFBb0I7RUFDSSxXQUFBO0FBRXhCO0FBS0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUhSO0FBSVE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUFGWjtBQUtRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIWjtBQUtZO0VBQ0ksUUFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIaEI7QUFLZ0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFIcEI7QUFTSTtFQUNJLFNBQUE7QUFQUjtBQVVJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVVRO0VBQ0ksaUJBQUE7QUFSWjtBQVVRO0VBQ0ksZ0JBQUE7QUFSWiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1ZXN0LW1pc3NpbmctaW5mby1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA0ODBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAuY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6dmFyKC0teGEtYmxhY2spO1xyXG5cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgZmlsbDp2YXIoLS14YS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhZy13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBnYXA6IDZweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTkuMnZoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLnRhZy10aWxlIHtcclxuICAgICAgICAgICAgICAgIGdhcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTIyMzMxQTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMEIwRTE1O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRhZy1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdhcC0yM3tcclxuICAgICAgICBnYXA6IDIzcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MnB4O1xyXG5cclxuICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 62119:
/*!***********************************************************!*\
  !*** ./src/app/shared/add-photos/add-photos.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPhotosComponent": () => (/* binding */ AddPhotosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/inspection/inspection.service */ 62190);
/* harmony import */ var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/repair-estimate/repair-estimate.service */ 87855);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/chq-step-header/chq-step-header.component */ 42736);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














function AddPhotosComponent_chq_step_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-step-header", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chqModel", ctx_r0.photosHeader);
  }
}
function AddPhotosComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "chq-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "smart_photo_inspection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 6, "open_your_camera"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 8, "add_photo_msg"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r7.cameraButtonModel);
  }
}
function AddPhotosComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "chq-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "bulk_upload"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 6, "upload_device"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 8, "bulk_msg"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r8.bulkUploadButtonModel);
  }
}
function AddPhotosComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddPhotosComponent_div_2_div_2_Template, 11, 10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddPhotosComponent_div_2_div_3_Template, 11, 10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showSPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.hideBulk);
  }
}
function AddPhotosComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, ctx_r2.repairUnapproved ? "start_job" : "bulk_spi_disabled"), " ");
  }
}
function AddPhotosComponent_chq_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-button", 19);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r3.cancelButtonModel);
  }
}
function AddPhotosComponent_chq_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-button", 24);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r4.nextButton);
  }
}
function AddPhotosComponent_chq_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-button", 19);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r5.notifyButtonModel);
  }
}
function AddPhotosComponent_chq_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-button", 24);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r6.addPartButtonModel);
  }
}
const photosHeader = {
  title: 'add_damage_photos',
  step: 4,
  description: 'damage_photos_msg',
  stepName: 'step_four'
};
class AddPhotosComponent {
  /**
   * constructor
   */
  constructor(monitorService, commonService, route, dialog, caseService, router, inspectionService, estimateService, calendarService) {
    this.monitorService = monitorService;
    this.commonService = commonService;
    this.route = route;
    this.dialog = dialog;
    this.caseService = caseService;
    this.router = router;
    this.inspectionService = inspectionService;
    this.estimateService = estimateService;
    this.calendarService = calendarService;
    this.mode = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.showEstimate = false;
    this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.completeRepair = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.nextButton = {
      label: 'Next create estimate',
      type: 'primary',
      color: 'primary',
      icon: 'boardview'
    };
    this.photosHeader = photosHeader;
    this.notifyButtonModel = {
      label: 'notify',
      type: 'outline',
      icon: 'send',
      onclick: () => {
        this.notify.emit();
      }
    };
    this.addPartButtonModel = {
      label: 'Complete Repair',
      type: 'disabled',
      onclick: () => {
        this.completeRepair.emit();
      }
    };
    this.cameraButtonModel = {
      label: 'camera_upload',
      type: 'primary',
      icon: 'camera',
      color: 'primary',
      onclick: this.allowSingleUpload.bind(this)
    };
    this.bulkUploadButtonModel = {
      label: 'btn_bulk_upload',
      type: 'primary',
      icon: 'upload',
      color: 'primary',
      onclick: this.allowMultipleUpload.bind(this)
    };
    this.cancelButtonModel = {
      label: 'Cancel Booking',
      type: 'outline-danger',
      onclick: this.cancelBooking.bind(this)
    };
  }
  /**
   * initialize single Upload
   */
  allowSingleUpload() {
    this.mode.emit({
      'mode': 'single'
    });
  }
  /**
   * show delete
   */
  get showDelete() {
    if (this.repairData?.repairGuid && this.repairData?.status?.toLowerCase() === 'draft') {
      return true;
    } else if (this.repairData?.repairGuid && this.repairData?.repairGuidisRepairCreatedFromCase == true && this.repairData?.status?.toLowerCase() == 'repairestimation') {
      return true;
    }
    return false;
  }
  /**
   * detects changes in input attributes
   * @param changes
   */
  ngOnChanges(changes) {
    this.monitorService.logEvent('allowMultipleUpload', ['ChqAddPhotosComponent', 'addenda-quote', {
      changes
    }]);
    if (changes) {
      if (changes['caseNumber'] && changes['caseNumber'].currentValue) {
        this.photosHeader = {
          ...this.photosHeader,
          caseNumber: this.caseNumber
        };
      }
      if (changes['activateRepairButton'] && changes['activateRepairButton'].currentValue) {
        this.addPartButtonModel = {
          ...this.addPartButtonModel,
          type: 'primary'
        };
      }
      if (changes['isRepairComplete'] && changes['isRepairComplete'].currentValue) {
        this.addPartButtonModel = {
          ...this.addPartButtonModel,
          label: 'go_invoice'
        };
      }
    }
  }
  /**
   * initialize multiple Upload
   */
  allowMultipleUpload() {
    this.monitorService.logEvent('allowMultipleUpload', ['ChqAddPhotosComponent', 'addenda-quote']);
    this.mode.emit({
      'mode': 'multiple'
    });
  }
  /**
   * go to gtEstimate
   */
  redirectToGtEstimate() {
    this.commonService.showLoading();
    const {
      status,
      caseGuid,
      inspections,
      vehicleId,
      domainID
    } = this.caseData;
    let inspectionId = 0;
    if (inspections?.length > 0) {
      inspectionId = inspections[0].inspectionId;
    }
    if (status?.toLowerCase() === 'uploaddocuments') {
      this.monitorService.logEvent('redirectToGtEstimate', ['ChqDamageAnalysisComponent', 'addenda-quote', {
        caseId: caseGuid
      }]);
      this.caseService.updateCaseStatus(caseGuid, 'UploadPhotos').subscribe({
        next: resp => {
          this.estimateService.createEstimate(caseGuid, inspectionId, vehicleId, domainID).subscribe({
            next: resp => {
              if (resp) {
                if (resp?.data?.url) {
                  location.href = resp?.data?.url;
                  sessionStorage.setItem('update', '1');
                }
              }
            },
            complete: () => {
              this.commonService.hideLoading();
            }
          });
        },
        error: () => {
          this.commonService.hideLoading();
        }
      });
    } else if (status?.toLowerCase() === 'uploadphotos') {
      this.monitorService.logEvent('redirectToGtEstimate', ['ChqDamageAnalysisComponent', 'addenda-quote', {
        caseId: caseGuid
      }]);
      this.estimateService.createEstimate(caseGuid, inspectionId, vehicleId, domainID).subscribe({
        next: resp => {
          if (resp) {
            if (resp?.data) {
              location.href = resp.data.url;
              sessionStorage.setItem('update', '1');
            }
          }
        },
        complete: () => {
          this.commonService.hideLoading();
        }
      });
    } else {
      this.monitorService.logEvent('skipped_redirectToGtEstimate', ['ChqDamageAnalysisComponent', 'addenda-quote', {
        caseId: caseGuid
      }]);
      this.router.navigate([`/case/${caseGuid}/estimate`]);
    }
  }
  /**
   * oninit
   */
  ngOnInit() {
    const repairData = this.repairData;
    this.nextButton.onclick = this.redirectToGtEstimate.bind(this);
  }
  /**
   * Cancel booking
   */
  cancelBooking() {
    this.commonService.openDeleteDialog().afterClosed().subscribe(data => {
      if (data) {
        this.commonService.showLoading();
        this.calendarService.deleteRepair(this.repairData?.repairGuid).subscribe({
          next: () => {
            this.commonService.hideLoading();
            this.router.navigate(['/repair/booking-journal']);
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function AddPhotosComponent_Factory(t) {
    return new (t || AddPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_2__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_3__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_4__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AddPhotosComponent,
    selectors: [["add-photos"]],
    inputs: {
      caseNumber: "caseNumber",
      caseData: "caseData",
      showNotify: "showNotify",
      showComplete: "showComplete",
      showEstimate: "showEstimate",
      repairUnapproved: "repairUnapproved",
      repairData: "repairData",
      photosHeader: "photosHeader",
      activateRepairButton: "activateRepairButton",
      showSPI: "showSPI",
      hideBulk: "hideBulk",
      isRepairComplete: "isRepairComplete"
    },
    outputs: {
      mode: "mode",
      notify: "notify",
      completeRepair: "completeRepair"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
    decls: 13,
    vars: 8,
    consts: [[1, "add-photo-container"], [3, "chqModel", 4, "ngIf"], ["class", "photo-container", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper", "wrapper-flex"], [1, "image-wrapper"], [3, "src"], [1, "footer-button-wrapper"], [3, "buttonModel", 4, "ngIf"], ["class", "margin-right", 3, "buttonModel", 4, "ngIf"], [3, "chqModel"], [1, "photo-container"], [1, "card-container"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-title"], [1, "card-action"], [1, "card-description"], [3, "buttonModel"], [1, "wrapper"], [1, "no-document-div"], ["src", "assets/icons/no-document.svg"], [1, "no-vehicle-content"], [1, "margin-right", 3, "buttonModel"]],
    template: function AddPhotosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddPhotosComponent_chq_step_header_1_Template, 1, 1, "chq-step-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddPhotosComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddPhotosComponent_div_3_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AddPhotosComponent_chq_button_9_Template, 1, 1, "chq-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AddPhotosComponent_chq_button_10_Template, 1, 1, "chq-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, AddPhotosComponent_chq_button_11_Template, 1, 1, "chq-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AddPhotosComponent_chq_button_12_Template, 1, 1, "chq-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.photosHeader.isRepairModule !== true && ctx.photosHeader.isClaimModule !== true || ctx.photosHeader.isHeaderOnly === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.showSPI || !ctx.hideBulk) && !ctx.repairUnapproved && !ctx.commonService.isViewOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showSPI && ctx.hideBulk || ctx.repairUnapproved || ctx.commonService.isViewOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "assets/img/", +ctx.photosHeader.isRepairModule ? "addenda-repair.png" : +ctx.photosHeader.isClaimModule ? "addenda-claims.png" : "addenda-quote.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showDelete && (ctx.photosHeader == null ? null : ctx.photosHeader.isRepairModule));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showEstimate && !ctx.photosHeader.isRepairModule);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showNotify);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showComplete);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _widgets_chq_step_header_chq_step_header_component__WEBPACK_IMPORTED_MODULE_6__.ChqStepHeaderComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: [".photo-container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 170px - 1.5vw - (5px + 1.5vw + 48px + 1.6vw));\n  justify-content: space-evenly;\n  border: 1px solid var(--xa-form-border);\n  border-radius: 8px;\n  background: var(--xa-card-dark);\n  margin-top: calc(18px + 1.5vh);\n  margin-bottom: calc(12px + 1.5vh);\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 27px;\n}\n\n.wrapper-flex[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid var(--xa-light-gray);\n  padding: 16px;\n  width: 202px;\n  background-color: var(--xa-white);\n  border-radius: 8px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.card-action[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 21px;\n  margin: 0;\n  color: var(--xa-black-medium);\n}\n\n.card-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 18px;\n  margin-bottom: 30px;\n  color: var(--xa-dark-gray);\n}\n\n.image-car[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 654px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 50px;\n}\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2FkZC1waG90b3MvYWRkLXBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0VBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLE9BQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUdJO0VBQ0ksZ0JBQUE7QUFBUjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSwyQ0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFJSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCAtIChjYWxjKDEuNXZ3KSkgLSAoY2FsYyg1cHggKyAxLjV2dyArIDQ4cHggKyAxLjZ2dykpKTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZm9ybS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtY2FyZC1kYXJrKTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoMThweCArIDEuNXZoKTtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMTJweCArIDEuNXZoKTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjdweDtcclxufVxyXG5cclxuLndyYXBwZXItZmxleHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFyZ2luLXJpZ2h0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogMjAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhcmQtYWN0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcblxyXG4uY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxufVxyXG5cclxuLmltYWdlLWNhciB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNjU0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZW1wdHktd3JhcHBlcntcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbn1cclxuXHJcbi5zdGVwLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDExcHg7XHJcbiAgICBoZWlnaHQ6MjUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG4ubm8tZG9jdW1lbnQtZGl2e1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubm8tdmVoaWNsZS1jb250ZW50e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 88784:
/*!***************************************************!*\
  !*** ./src/app/shared/error-page/error.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorModule": () => (/* binding */ ErrorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);











class ErrorModule {
  static #_ = this.ɵfac = function ErrorModule_Factory(t) {
    return new (t || ErrorModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ErrorModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ErrorModule, {
    declarations: [_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_1__.NoAccessErrorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_1__.NoAccessErrorComponent]
  });
})();

/***/ }),

/***/ 54135:
/*!********************************************************************************!*\
  !*** ./src/app/shared/error-page/no-access-error/no-access-error.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAccessErrorComponent": () => (/* binding */ NoAccessErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NoAccessErrorComponent {
  static #_ = this.ɵfac = function NoAccessErrorComponent_Factory(t) {
    return new (t || NoAccessErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NoAccessErrorComponent,
    selectors: [["no-access-error"]],
    decls: 3,
    vars: 0,
    consts: [[1, "main-container"], [1, ""], ["src", "assets/img/no-access.png"]],
    template: function NoAccessErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Vycm9yLXBhZ2Uvbm8tYWNjZXNzLWVycm9yL25vLWFjY2Vzcy1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 64307:
/*!*****************************************************************!*\
  !*** ./src/app/shared/new-documents/new-documents.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewDocumentsComponent": () => (/* binding */ NewDocumentsComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/quote/chq-new-cases/chq-new-customer/chq-new-customer-form-data-helper */ 83853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_media_collection_media_collection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/media-collection/media-collection.service */ 61476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/chq-images-uploader/chq-images-uploader.component */ 39912);
/* harmony import */ var _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error-page/no-access-error/no-access-error.component */ 54135);














const _c0 = ["imageUploaders"];
function NewDocumentsComponent_div_0_chq_images_uploader_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "chq-images-uploader", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cardSelection", function NewDocumentsComponent_div_0_chq_images_uploader_1_Template_chq_images_uploader_cardSelection_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.setObservable($event));
    })("stepSkipped", function NewDocumentsComponent_div_0_chq_images_uploader_1_Template_chq_images_uploader_stepSkipped_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.stepSkipped());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fileUploaderService", ctx_r2.currentObservable)("footerOptions", ctx_r2.footer)("imageStatusSteps", ctx_r2.imageStatusSteps)("header", ctx_r2.documentHeader);
  }
}
function NewDocumentsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " No Content Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "div", 11)(7, "div", 11)(8, "div", 11)(9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function NewDocumentsComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("src", "assets/img/", +ctx_r4.documentHeader.isRepairModule ? "addenda-repair.png" : "addenda-quote.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function NewDocumentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NewDocumentsComponent_div_0_chq_images_uploader_1_Template, 2, 4, "chq-images-uploader", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NewDocumentsComponent_div_0_div_2_Template, 10, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NewDocumentsComponent_div_0_div_3_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.imageStatusSteps && ctx_r0.imageStatusSteps.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.noDocumentData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.noDocumentData);
  }
}
function NewDocumentsComponent_no_access_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "no-access-error");
  }
}
const newDocumentHeader = {
  title: 'add_documents',
  step: 3,
  description: 'add_documents_msg',
  stepName: 'step_three'
};
class NewDocumentsComponent {
  /**
   * constructor
   * @param fb ChangeDetectorRef
   */
  constructor(cd, commonService, route, caseService, monitorService, bookingService, mediaCollectionService) {
    this.cd = cd;
    this.commonService = commonService;
    this.route = route;
    this.caseService = caseService;
    this.monitorService = monitorService;
    this.bookingService = bookingService;
    this.mediaCollectionService = mediaCollectionService;
    this.documentHeader = newDocumentHeader;
    this.imageStatusSteps = [];
    this.allowExtension = ['jpg', 'jpeg', 'png'];
    this.skipButtonModel = {
      label: 'Skip',
      type: 'primary'
    };
    this.footer = {
      text: 'Next add photos',
      icon: 'review',
      route: 'quote/case/photos',
      currentStatus: '',
      status: 'UploadDocuments',
      caseId: ''
    };
    this.documentSizeLimit = 5242880;
    this.noDocumentData = false;
    this.repairId = '';
    this.currentRepairStatus = '';
    this.showNoAccess = false;
    this.statusUpdated = false;
    if (commonService.pageName.closed) {
      commonService.pageName = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(null);
    }
    commonService.pageName.next('document');
    if (this.commonService.accessRight.closed) {
      this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(true);
    }
  }
  /**
   * ngAfterViewInit hook
   * @param fb FormBuilder
   */
  ngAfterViewInit() {
    this.commonService.updatePage('/quote/case/0', 'document');
    this.cd.detectChanges();
    this.monitorService.logEvent('ngAfterViewInit', ['ChqNewDocumentsComponent', 'addenda-quote']);
  }
  /**
   * check route params
   */
  checkRouteParams() {
    this.route.queryParams?.subscribe(params => {
      const codeParam = params['fromPersonal'];
      if (codeParam === 'true' || codeParam === true) {
        this.imageStatusSteps = this.imageStatusSteps.filter(step => {
          return step.stepName.indexOf('Vehicle Registration') != -1;
        });
      }
    });
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
   * media template by id
   */
  getMediaTemplateByObject() {
    this.mediaPartTemplates = this.commonService.getAllChild(this.mediaTemplate?.mediaTemplates, 'mediaPartTemplates', 'mediaTemplateGuid', {
      'parentProp': 'name',
      'childProp': 'parentName'
    });
    for (let i = 0; i < this.mediaPartTemplates.length; i++) {
      const mediaPart = this.mediaPartTemplates[i];
      const documentStep = (0,src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_1__.documentPartMapper)(mediaPart, i);
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
        templateGuid: mediaPart['mediaTemplateGuid']
      });
      this.checkRouteParams();
    }
  }
  /**
   * update repair status
   */
  updateRepairStatus(repairId) {
    var _this = this;
    if (!this.statusUpdated) {
      this.statusUpdated = true;
      this.bookingService.updateRepairStatus('UploadDocuments', repairId, '').subscribe({
        next: () => {
          this.currentRepairStatus = 'UploadDocuments';
          this.footer.currentStatus = this.currentRepairStatus;
          this.commonService.showLoading();
          this.bookingService.getRepairDetailByGuid(this.repairId).subscribe({
            next: function () {
              var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
                if (result?.data) {
                  _this.commonService.repairDetails.next(result.data);
                  _this.commonService.bookingId.next(result.data.repairNumber);
                  _this.commonService.hideLoading();
                }
              });
              return function next(_x) {
                return _ref.apply(this, arguments);
              };
            }(),
            error: err => {
              this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_11__.SeverityLevel.Error);
              this.commonService.hideLoading();
            }
          });
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
    this.monitorService.logEvent('uploadFile', ['ChqNewDocumentsComponent', 'addenda-quote', {
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
          if (location.href.includes('repair') && this.currentRepairStatus?.toLowerCase() === 'draft') {
            this.updateRepairStatus(this.repairId);
          }
          if (location.href.includes('quote') && this.footer.currentStatus?.toLowerCase() === 'vehicledetails') {
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
    this.monitorService.logEvent('updateFile', ['ChqNewDocumentsComponent', 'addenda-quote', {
      obj
    }]);
    currentStep.uploadInProgress = true;
    currentStep.isSkipped = false;
    currentStep.isUploadFailed = false;
    currentStep.isUploadSuccess = false;
    this.mediaCollectionService.updateDocument(currentStep.imageFile, obj).subscribe({
      next: res => {
        this.imageUploaders.updateUploadStatus('success', currentStep, null, res);
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
   * update status
   */
  updateStatus() {
    if (!this.statusUpdated) {
      this.statusUpdated = true;
      this.monitorService.logEvent('updateStatus', ['ChqNewDocumentsComponent', 'addenda-quote', {
        caseId: this.footer.caseId
      }]);
      this.caseService.updateCaseStatus(this.footer.caseId, 'UploadDocuments').subscribe({
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
   * ngOnInit hook
   */
  ngOnInit() {
    this.commonService.showLoading();
    const id = this.route.parent?.snapshot.paramMap.get('id');
    this.monitorService.logEvent('ngOnInit', ['ChqNewDocumentsComponent', 'addenda-quote', {
      caseId: id
    }]);
    this.footer = {
      ...this.footer,
      route: `quote/case/${id}/photos`,
      caseId: id
    };
    this.commonService.accessRight.subscribe({
      next: res => {
        if (!res) {
          this.showNoAccess = true;
        }
      }
    });
    const promiseApi = {
      mediaTemplate: this.mediaCollectionService.getMediaTemplate()
    };
    let isRepair = false;
    if (location.href.includes('repair')) {
      promiseApi.bookingDetail = this.bookingService.getRepairDetailByGuid(id);
      isRepair = true;
    } else {
      this.commonService.userProfileData.subscribe(res => {
        if (res && res.data) {
          const {
            organizationDetail
          } = res.data;
          this.currentOrgId = organizationDetail.id;
        }
      });
      promiseApi.caseDetail = this.caseService.getCaseDetail(id);
    }
    const result = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)(promiseApi).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(error)));
    result.subscribe(dict => {
      if (dict) {
        const mediaTemplate = dict.mediaTemplate;
        if (mediaTemplate) {
          const mediaTemplateSelected = mediaTemplate.data;
          if (dict.caseDetail) {
            const {
              caseNumber,
              id,
              status,
              inspections,
              repairGuid,
              organizationDetail
            } = dict.caseDetail.data;
            if (this.currentOrgId != organizationDetail?.organizationId) {
              this.commonService.isViewOnly = true;
            } else {
              this.commonService.isViewOnly = false;
            }
            if (inspections.length > 0) {
              this.commonService.inspectionId.next(inspections[0].inspectionId);
            }
            this.commonService.caseStatus.next(status);
            this.commonService.caseDetail.next(dict.caseDetail.data);
            if (status.toLowerCase() === 'vehicledetails') {
              //   this.updateStatus();
            } else {
              this.footer = {
                ...this.footer,
                status: ''
              };
            }
            this.footer.currentStatus = status;
            this.documentHeader.caseNumber = caseNumber;
            this.objectId = id;
            if (repairGuid) {
              this.footer.repairId = repairGuid;
              this.footer.from = 'Quote';
            }
          }
          if (dict.bookingDetail) {
            const {
              id,
              status,
              repairGuid,
              quoteId,
              repairNumber,
              isRepairCreatedFromCase,
              bookings
            } = dict.bookingDetail.data;
            this.objectId = id;
            this.repairId = repairGuid;
            //adding
            if (quoteId) {
              this.footer.caseId = quoteId;
              this.footer.from = 'Repair';
            }
            this.footer.isRepairCreatedFromCase = isRepairCreatedFromCase;
            this.footer.repairId = repairGuid;
            this.footer.currentStatus = status;
            this.commonService.repairStatus.next(status);
            //
            this.currentRepairStatus = status;
            // Send booking data in observable
            this.commonService.repairDetails.next(dict.bookingDetail.data);
            this.commonService.bookingId.next(repairNumber);
          }
          if (mediaTemplateSelected.length > 0) {
            const {
              id,
              collectionGuid
            } = mediaTemplateSelected[0];
            this.mediaTemplateId = id;
            this.domainId = 2100;
            if (isRepair) {
              this.domainId = 3100;
            }
            this.collectionGuid = collectionGuid;
            const detailResult = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)({
              mediaTemplateDetail: this.mediaCollectionService.getMediaTemplateById(collectionGuid),
              mediaDetail: this.mediaCollectionService.getMediaDocumentData(id, this.objectId, this.domainId)
            }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(error)));
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
                if (mediaDetail.data) {
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
   * handled if step is skipped
   */
  stepSkipped() {
    if (location.href.includes('repair') && this.currentRepairStatus?.toLowerCase() === 'draft') {
      this.updateRepairStatus(this.repairId);
    }
    if (location.href.includes('quote') && this.footer.currentStatus?.toLowerCase() === 'vehicledetails') {
      this.updateStatus();
    }
  }
  /**
   * on destroy
  */
  ngOnDestroy() {
    this.monitorService.logEvent('ngOnDestroy', ['ChqNewDocumentComponent', 'addenda-quote']);
    this.commonService.accessRight.unsubscribe();
    if (location.href.includes('quote')) {
      this.commonService.isViewOnly = false;
    }
  }
  static #_ = this.ɵfac = function NewDocumentsComponent_Factory(t) {
    return new (t || NewDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_media_collection_media_collection_service__WEBPACK_IMPORTED_MODULE_6__.MediaCollectionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: NewDocumentsComponent,
    selectors: [["new-documents"]],
    viewQuery: function NewDocumentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.imageUploaders = _t.first);
      }
    },
    inputs: {
      documentHeader: "documentHeader"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [3, "fileUploaderService", "footerOptions", "imageStatusSteps", "header", "cardSelection", "stepSkipped", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], ["class", "footer-full-wrapper", 4, "ngIf"], [3, "fileUploaderService", "footerOptions", "imageStatusSteps", "header", "cardSelection", "stepSkipped"], ["imageUploaders", ""], [1, "wrapper"], [1, "no-document-div"], ["src", "assets/icons/no-document.svg"], [1, "no-vehicle-content"], [1, "empty-wrapper"], [1, "step-container"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], [3, "src"]],
    template: function NewDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NewDocumentsComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NewDocumentsComponent_no_access_error_1_Template, 1, 0, "no-access-error", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_7__.ChqImagesUploaderComponent, _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_8__.NoAccessErrorComponent],
    styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 215px;\n}\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25ldy1kb2N1bWVudHMvbmV3LWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZW1wdHktd3JhcHBlcntcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbn1cclxuXHJcbi5zdGVwLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDExcHg7XHJcbiAgICBoZWlnaHQ6MjUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG4ubm8tZG9jdW1lbnQtZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjE1cHg7XHJcbiAgICB9XHJcbiAgICAubm8tdmVoaWNsZS1jb250ZW50e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4704:
/*!***********************************************************!*\
  !*** ./src/app/shared/new-photos/new-photos.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPhotosComponent": () => (/* binding */ NewPhotosComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/chq-upload-model */ 75983);
/* harmony import */ var src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/quote/chq-new-cases/chq-new-customer/chq-new-customer-form-data-helper */ 83853);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/inspection/inspection.service */ 62190);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/repair-estimate/repair-estimate.service */ 87855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/chq-images-uploader/chq-images-uploader.component */ 39912);
/* harmony import */ var _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _helper_directive_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helper/directive/has-permission/has-permission.directive */ 70115);
/* harmony import */ var _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../add-photos/add-photos.component */ 62119);
/* harmony import */ var _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../damage-analysis/damage-analysis.component */ 9988);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





















const _c0 = ["imageUploaders"];
function NewPhotosComponent_div_0_ng_container_1_add_photos_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "add-photos", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("mode", function NewPhotosComponent_div_0_ng_container_1_add_photos_1_Template_add_photos_mode_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r8.handleMode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("caseData", ctx_r7.caseData)("caseNumber", ctx_r7.photosHeader.caseNumber)("showSPI", ctx_r7.checkRepairTypes)("photosHeader", ctx_r7.addPhotosHeader)("hidden", ctx_r7.hideContent)("showEstimate", ctx_r7.showEstimateButton)("repairData", ctx_r7.repairDetail);
  }
}
function NewPhotosComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, NewPhotosComponent_div_0_ng_container_1_add_photos_1_Template, 1, 7, "add-photos", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.showUploading === false);
  }
}
function NewPhotosComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "div", 15)(8, "div", 15)(9, "div", 15)(10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "no_photos_configured"), " ");
  }
}
function NewPhotosComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("src", "assets/img/", +ctx_r4.photosHeader.isRepairModule ? "addenda-repair.png" : "addenda-quote.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function NewPhotosComponent_div_0_chq_images_uploader_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-images-uploader", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("handleDeleteAllEvent", function NewPhotosComponent_div_0_chq_images_uploader_4_Template_chq_images_uploader_handleDeleteAllEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.handleDeleteAll());
    })("backToUpload", function NewPhotosComponent_div_0_chq_images_uploader_4_Template_chq_images_uploader_backToUpload_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.setInitialMode());
    })("updateMassUpload", function NewPhotosComponent_div_0_chq_images_uploader_4_Template_chq_images_uploader_updateMassUpload_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r14.updateCurrentStatus($event));
    })("stepSkipped", function NewPhotosComponent_div_0_chq_images_uploader_4_Template_chq_images_uploader_stepSkipped_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.stepSkipped());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r5.showDamageAnalysis || !ctx_r5.showUploading)("currentAdditionalModeMultiple", ctx_r5.currentAdditionalModeMultiple)("fileUploaderService", ctx_r5.currentObservable)("footerOptions", ctx_r5.footer)("isMassUpload", ctx_r5.isMultipleUpload)("showReTakeDelete", true)("imageStatusSteps", ctx_r5.imageStatusSteps)("header", ctx_r5.photosHeader)("inspectionId", ctx_r5.inspectionId)("inspection", "photos");
  }
}
function NewPhotosComponent_div_0_damage_analysis_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "damage-analysis", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("backEvent", function NewPhotosComponent_div_0_damage_analysis_5_Template_damage_analysis_backEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r16.handleBack($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isBulkUpload", ctx_r6.isMultipleUpload)("minPhotoRequired", ctx_r6.minimumPhotosRequired)("caseDetail", ctx_r6.partialCaseDetail || ctx_r6.repairDetail)("steps", ctx_r6.imageStatusSteps)("isRepairModule", ctx_r6.photosHeader.isRepairModule);
  }
}
const _c1 = function (a0) {
  return {
    "photo-container": a0
  };
};
function NewPhotosComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, NewPhotosComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, NewPhotosComponent_div_0_div_2_Template, 11, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, NewPhotosComponent_div_0_div_3_Template, 4, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, NewPhotosComponent_div_0_chq_images_uploader_4_Template, 2, 10, "chq-images-uploader", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, NewPhotosComponent_div_0_damage_analysis_5_Template, 1, 5, "damage-analysis", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](6, _c1, ctx_r0.photosHeader.isRepairModule));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqPermission", "newBooking");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.noImagesData);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.noImagesData);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.showUploading === true || ctx_r0.isMultipleUpload || ctx_r0.imageStatusSteps && ctx_r0.imageStatusSteps.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.showDamageAnalysis);
  }
}
function NewPhotosComponent_no_access_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "no-access-error");
  }
}
const photosHeader = {
  title: 'add_damage_photos',
  step: 4,
  description: 'damage_photos_msg',
  stepName: 'step_four'
};
class NewPhotosComponent {
  /**
   * constructor
   * @param fb ChangeDetectorRef
   */
  constructor(cd, commonService, route, router, caseService, monitorService, inspectionService, bookingService, estimateService) {
    this.cd = cd;
    this.commonService = commonService;
    this.route = route;
    this.router = router;
    this.caseService = caseService;
    this.monitorService = monitorService;
    this.inspectionService = inspectionService;
    this.bookingService = bookingService;
    this.estimateService = estimateService;
    this.photosHeader = photosHeader;
    this.currentUploadMode = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    this.imageStatusSteps = [];
    this.showUploading = false;
    this.isMultipleUpload = false;
    this.triggerMassUpload = false;
    this.caseStatus = '';
    this.caseId = '0';
    this.bookingId = '';
    this.minimumPhotosRequired = 0;
    this.hideContent = true;
    this.currentAdditionalModeMultiple = false;
    this.hideUploaders = false;
    this.repairTypes = [];
    this.repairType = '';
    this.noImagesData = false;
    this.repairId = '';
    this.inspectionTemplatesJSONString = '';
    this.currentRepairStatus = '';
    this.originalSteps = [];
    this.showNoAccess = false;
    this.footer = {
      text: 'Next create estimate',
      icon: 'boardview',
      route: 'case/gt',
      status: 'UploadPhotos',
      caseId: '',
      currentStatus: '',
      showButton: true,
      showUploadOption: true
    };
    this.showRepairRecommendation = false;
    this.statusUpdated = false;
    if (commonService.pageName.closed) {
      commonService.pageName = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(null);
    }
    commonService.pageName.next('photos');
    if (this.commonService.accessRight.closed) {
      this.commonService.accessRight = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(true);
    }
  }
  /**
   * handle back
   */
  handleBack($event) {
    this.showDamageAnalysis = !$event.back;
  }
  /**
   * check repair types
   */
  get checkRepairTypes() {
    if (location.href.indexOf('repair') === -1) {
      return true;
    }
    if (this.repairType !== 'repair') {
      return true;
    }
    return this.repairTypes.filter(v => {
      return v.repairServiceType === 'Body' || v.repairServiceType === 'Paint';
    }).length > 0;
  }
  /**
   * go to gtEstimate
   */
  redirectToGtEstimate() {
    this.commonService.showLoading();
    if (this.caseStatus?.toLowerCase() === 'uploaddocuments' || this.caseStatus?.toLowerCase() === 'uploadphotos') {
      this.estimateService.createEstimate(this.caseId, this.inspectionId, this.vehicleId, this.domainId).subscribe({
        next: resp => {
          if (resp) {
            if (resp?.data?.url) {
              location.href = resp.data.url;
              sessionStorage.setItem('update', '1');
            }
          }
        },
        complete: () => {
          this.commonService.hideLoading();
        }
      });
    } else {
      this.router.navigate([`/quote/case/${this.caseId}/estimate`]);
    }
  }
  /**
   * update page status
   */
  updateCurrentStatus($event) {
    this.monitorService.logEvent('updateCurrentStatus', ['ChqNewPhotosComponent', 'addenda-quote', {
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
   * handle delete all
   */
  handleDeleteAll() {
    this.setInitialMode();
  }
  /**
   * ngAfterViewInit hook
   */
  ngAfterViewInit() {
    this.commonService.updatePage('/quote/case/0', 'photos');
    this.cd.detectChanges();
    this.monitorService.logEvent('ngAfterViewInit', ['ChqNewPhotosComponent', 'addenda-quote']);
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
        this.monitorService.logEvent('uploadBulkUploadFile', ['ChqNewPhotosComponent', 'addenda-quote', {
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
            if (location.href.includes('repair') && (this.currentRepairStatus?.toLowerCase() === 'draft' || this.currentRepairStatus?.toLowerCase() === 'uploaddocuments')) {
              this.updateRepairStatus(this.repairId);
            }
            if (location.href.includes('quote') && this.footer.currentStatus?.toLowerCase() === 'uploaddocuments') {
              this.updateStatus();
            }
          },
          error: err => {
            if (err.status != 401) {
              this.imageUploaders.imageStatusSteps = this.imageUploaders.imageStatusSteps.filter(ig => {
                return ig.index !== step.index || ig.stepName !== step.stepName || ig.uploadInProgress !== true;
              });
              this.imageUploaders.updateUploadStatus('failed', step, err, null, true);
            }
            this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_16__.SeverityLevel.Error);
          }
        });
      };
    }
  }
  /**
   * update repair status
   */
  updateRepairStatus(repairId) {
    var _this = this;
    if (!this.statusUpdated) {
      this.statusUpdated = true;
      this.bookingService.updateRepairStatus('UploadPhotos', repairId, '').subscribe({
        next: () => {
          this.currentRepairStatus = 'UploadPhotos';
          this.footer.currentStatus = this.currentRepairStatus;
          this.commonService.showLoading();
          this.bookingService.getRepairDetailByGuid(this.repairId).subscribe({
            next: function () {
              var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
                if (result?.data) {
                  _this.commonService.repairDetails.next(result.data);
                  _this.commonService.bookingId.next(result.data.repairNumber);
                  _this.commonService.hideLoading();
                }
              });
              return function next(_x) {
                return _ref.apply(this, arguments);
              };
            }(),
            error: err => {
              this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_16__.SeverityLevel.Error);
              this.commonService.hideLoading();
            }
          });
        }
      });
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
      'isBulk': false
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
        if (location.href.includes('repair') && (this.currentRepairStatus == 'Draft' || this.currentRepairStatus === 'UploadDocuments')) {
          this.updateRepairStatus(this.repairId);
        }
        if (location.href.includes('quote') && this.footer.currentStatus?.toLowerCase() === 'uploaddocuments') {
          this.updateStatus();
        }
      },
      error: err => {
        if (err.status != 401) {
          const msg = `Your photo ‘${currentStep.stepName}’ failed to upload. Please try to upload again.`;
          this.commonService.showNotification(msg);
          this.imageUploaders.updateUploadStatus('failed', currentStep, err);
          this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_16__.SeverityLevel.Error);
        }
      }
    });
  }
  /**
   * on destroy
   */
  ngOnDestroy() {
    this.commonService.pageName.unsubscribe();
    this.commonService.accessRight.unsubscribe();
    if (location.href.includes('quote')) {
      this.commonService.isViewOnly = false;
    }
    this.monitorService.logEvent('ngOnDestroy', ['ChqNewPhotosComponent', 'addenda-quote']);
  }
  /**
   * showRepairButton
   */
  get showEstimateButton() {
    return this.currentInspectionTemplate?.minImageLimit === 0 && this.inspectionItemTemplates?.filter(value => {
      return value.isSkipEnabled !== true;
    }).length === 0;
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
          return (step.name === 'Bulk Upload Image' || step.inspectionItemTemplateID === bulkUploadTemplateItem[0].id) && step.rawAzureBlobUrl;
        });
        if (bulkUploadedItemsWithImages?.length > 0 || this.uploadType === 'Bulk') {
          const massUploadItems = [];
          this.currentUploadMode.emit({
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
          this.currentUploadMode.emit({
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
      const inspectionStep = (0,src_app_modules_quote_chq_new_cases_chq_new_customer_chq_new_customer_form_data_helper__WEBPACK_IMPORTED_MODULE_2__.inspectionpartPartMapper)(templatePart, i);
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
      this.monitorService.logEvent('updateStatus', ['ChqNewPhotosComponent', 'addenda-quote']);
      this.caseService.updateCaseStatus(this.caseId, 'UploadPhotos').subscribe({
        next: () => {
          this.footer = {
            ...this.footer,
            status: ''
          };
          this.partialCaseDetail.status = 'UploadPhotos';
        }
      });
    }
  }
  /**
   * handled if step is skipped
   */
  stepSkipped() {
    if (location.href.includes('repair') && (this.currentRepairStatus?.toLowerCase() === 'draft' || this.currentRepairStatus?.toLowerCase() === 'uploaddocuments')) {
      this.updateRepairStatus(this.repairId);
    }
    if (location.href.includes('quote') && this.footer.currentStatus?.toLowerCase() === 'uploaddocuments') {
      this.updateStatus();
    }
  }
  /**
   * load server details
   */
  loadApiData(id) {
    if (id && id != '0') {
      this.caseId = id;
      this.bookingId = id;
      this.commonService.showLoading();
      this.inspectionService.getInspectionTemplateList().subscribe({
        next: inspectionList => {
          let isRepair = false;
          let inspectionTemplateId = 0;
          if (location.href.includes('repair')) {
            isRepair = true;
          }
          const repairInspectionTemplate = inspectionList?.data;
          if (repairInspectionTemplate?.length > 0) {
            this.commonService.repairInspectionTemplate = repairInspectionTemplate[0];
            inspectionTemplateId = repairInspectionTemplate[0].id;
          }
          const promiseApi = {};
          promiseApi.inspectionTemplate = this.inspectionService.getInspectionTemplate(inspectionTemplateId);
          if (isRepair) {
            promiseApi.bookingDetail = this.bookingService.getRepairDetailByGuid(id);
          } else {
            this.commonService.userProfileData.subscribe(res => {
              if (res && res.data) {
                const {
                  organizationDetail
                } = res.data;
                this.currentOrgId = organizationDetail.id;
              }
            });
            promiseApi.caseDetail = this.caseService.getCaseDetail(id);
          }
          const serverDetails = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)(promiseApi).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(error)));
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
                if (resultMap.caseDetail) {
                  const {
                    caseNumber,
                    id,
                    status,
                    statusId,
                    domainID,
                    inspections,
                    vehicleModel,
                    vehicleId,
                    organizationDetail
                  } = resultMap.caseDetail.data;
                  this.caseData = resultMap.caseDetail.data;
                  this.partialCaseDetail = resultMap.caseDetail.data;
                  if (this.currentOrgId != organizationDetail?.organizationId) {
                    this.commonService.isViewOnly = true;
                  } else {
                    this.commonService.isViewOnly = false;
                  }
                  this.vehicelType = vehicleModel;
                  this.vehicleId = vehicleId;
                  this.domainId = domainID;
                  this.commonService.caseStatus.next(status);
                  this.commonService.caseDetail.next(resultMap.caseDetail?.data);
                  this.caseStatus = status;
                  if (status?.toLowerCase() === 'uploaddocuments') {
                    //this.updateStatus();
                  } else {
                    this.footer = {
                      ...this.footer,
                      status: '',
                      caseId: id
                    };
                  }
                  this.footer.currentStatus = status;
                  if (inspections?.length > 0) {
                    this.inspectionId = inspections[0].inspectionId;
                    this.commonService.inspectionId.next(this.inspectionId);
                  }
                  this.photosHeader.caseNumber = caseNumber;
                  if (this.caseData.repairGuid) {
                    this.footer.repairId = this.caseData.repairGuid;
                    this.footer.from = src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__.Modules.quote;
                  }
                  this.objectId = id;
                }
                if (resultMap.bookingDetail) {
                  const {
                    id,
                    vehicle,
                    repairServiceTypes,
                    repairGuid,
                    domainId,
                    status,
                    quoteId,
                    repairType,
                    repairNumber,
                    isRepairCreatedFromCase
                  } = resultMap.bookingDetail.data;
                  this.repairDetail = resultMap.bookingDetail.data;
                  const {
                    vehicleModel,
                    vehicleId
                  } = vehicle;
                  this.objectId = id;
                  this.domainId = domainId;
                  this.repairId = repairGuid;
                  this.currentRepairStatus = status;
                  this.repairTypes = repairServiceTypes;
                  this.repairType = repairType;
                  this.inspectionId = vehicle.inspectionId;
                  this.vehicelType = vehicleModel;
                  this.vehicleId = vehicleId;
                  this.footer = {
                    ...this.footer,
                    currentStatus: status,
                    isRepairModule: true,
                    caseId: quoteId,
                    from: src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__.Modules.repair,
                    repairTypes: repairServiceTypes,
                    isRepairCreatedFromCase: isRepairCreatedFromCase,
                    repairId: repairGuid
                  };
                  // Send booking data in observable
                  this.commonService.repairDetails.next(resultMap.bookingDetail.data);
                  this.commonService.bookingId.next(repairNumber);
                  this.commonService.repairStatus.next(status);
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
   * oninit
   */
  ngOnInit() {
    const currentObjectId = this.route.parent?.snapshot.paramMap.get('id');
    this.addPhotosHeader = {
      ...this.photosHeader,
      isHeaderOnly: false
    };
    this.monitorService.logEvent('ngOnInit', ['ChqNewPhotosComponent', 'addenda-quote', {
      caseId: currentObjectId,
      repairId: currentObjectId
    }]);
    this.footer = {
      ...this.footer,
      caseId: this.photosHeader.isRepairModule ? '' : currentObjectId,
      repairId: this.photosHeader.isRepairModule ? currentObjectId : '',
      handleBack: this.handleBack.bind(this),
      finalRedirection: this.redirectToGtEstimate.bind(this)
    };
    this.commonService.accessRight.subscribe({
      next: res => {
        if (!res) {
          this.showNoAccess = true;
        }
      }
    });
    this.loadApiData(currentObjectId);
    const container = document.querySelector('.addenda-container');
    if (container) {
      container.scrollTop = 0;
    }
    this.currentObservable = this.uploadFile.bind(this);
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
   *handle mode selection
   * @param $event
   */
  handleMode($event) {
    this.monitorService.logEvent('handleMode', ['ChqNewPhotosComponent', 'addenda-quote', {
      $event
    }]);
    if (!this.inspectionId) {
      this.currentUploadMode.emit({
        'mode': 'error',
        'id': this.bookingId
      });
      return;
    }
    this.currentUploadMode.emit($event);
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
  static #_ = this.ɵfac = function NewPhotosComponent_Factory(t) {
    return new (t || NewPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_5__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_inspection_inspection_service__WEBPACK_IMPORTED_MODULE_6__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_8__.RepairEstimateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: NewPhotosComponent,
    selectors: [["new-photos"]],
    viewQuery: function NewPhotosComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.imageUploaders = _t.first);
      }
    },
    inputs: {
      photosHeader: "photosHeader"
    },
    outputs: {
      currentUploadMode: "currentUploadMode"
    },
    decls: 2,
    vars: 2,
    consts: [[3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], [4, "chqPermission"], ["class", "wrapper", 4, "ngIf"], ["class", "footer-full-wrapper", 4, "ngIf"], [3, "hidden", "currentAdditionalModeMultiple", "fileUploaderService", "footerOptions", "isMassUpload", "showReTakeDelete", "imageStatusSteps", "header", "inspectionId", "inspection", "handleDeleteAllEvent", "backToUpload", "updateMassUpload", "stepSkipped", 4, "ngIf"], [3, "isBulkUpload", "minPhotoRequired", "caseDetail", "steps", "isRepairModule", "backEvent", 4, "ngIf"], [3, "caseData", "caseNumber", "showSPI", "photosHeader", "hidden", "showEstimate", "repairData", "mode", 4, "ngIf"], [3, "caseData", "caseNumber", "showSPI", "photosHeader", "hidden", "showEstimate", "repairData", "mode"], [1, "wrapper"], [1, "no-document-div"], ["src", "assets/icons/no-document.svg"], [1, "no-vehicle-content"], [1, "empty-wrapper"], [1, "step-container"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], [3, "src"], [3, "hidden", "currentAdditionalModeMultiple", "fileUploaderService", "footerOptions", "isMassUpload", "showReTakeDelete", "imageStatusSteps", "header", "inspectionId", "inspection", "handleDeleteAllEvent", "backToUpload", "updateMassUpload", "stepSkipped"], ["imageUploaders", ""], [3, "isBulkUpload", "minPhotoRequired", "caseDetail", "steps", "isRepairModule", "backEvent"]],
    template: function NewPhotosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, NewPhotosComponent_div_0_Template, 6, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, NewPhotosComponent_no_access_error_1_Template, 1, 0, "no-access-error", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.showNoAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showNoAccess);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_9__.ChqImagesUploaderComponent, _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_10__.NoAccessErrorComponent, _helper_directive_has_permission_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__.HasPermissionDirective, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_12__.AddPhotosComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_13__.DamageAnalysisComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
    styles: [".photo-container[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  margin-right: calc(5px + 1vw);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 215px;\n}\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25ldy1waG90b3MvbmV3LXBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLDJDQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQURSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFEUiIsInNvdXJjZXNDb250ZW50IjpbIi5waG90by1jb250YWluZXIge1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDZweCArIDEuNXZ3KTtcclxuICAgIG1hcmdpbi1yaWdodDogY2FsYyg1cHggKyAxdncpO1xyXG59XHJcblxyXG4ud3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmVtcHR5LXdyYXBwZXJ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG59XHJcblxyXG4uc3RlcC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTVweCAxMXB4O1xyXG4gICAgaGVpZ2h0OjI1JTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuLm5vLWRvY3VtZW50LWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDIxNXB4O1xyXG4gICAgfVxyXG4gICAgLm5vLXZlaGljbGUtY29udGVudHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var src_app_guards_deactivate_guard_deactivate_guard_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/deactivate-guard/deactivate-guard.guard */ 84605);
/* harmony import */ var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/error-page/error.module */ 88784);
/* harmony import */ var _new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-documents/new-documents.component */ 64307);
/* harmony import */ var _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-photos/new-photos.component */ 4704);
/* harmony import */ var _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-photos/add-photos.component */ 62119);
/* harmony import */ var _icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons.module */ 25852);
/* harmony import */ var _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./damage-analysis/damage-analysis.component */ 9988);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/directive/directive.module */ 67798);
/* harmony import */ var _repair_recommendation_repair_recommendation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repair-recommendation/repair-recommendation.component */ 53281);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dialogs_request_missing_information_dialog_request_missing_information_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogs/request-missing-information-dialog/request-missing-information-dialog.component */ 7091);
/* harmony import */ var _dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialogs/reject-claim-dialog/reject-claim-dialog.component */ 6288);
/* harmony import */ var _dialogs_claim_garage_assignment_claim_garage_assignment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialogs/claim-garage-assignment/claim-garage-assignment.component */ 19313);
/* harmony import */ var _dialogs_garage_assignment_preference_garage_assignment_preference_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialogs/garage-assignment-preference/garage-assignment-preference.component */ 90671);
/* harmony import */ var _dialogs_existing_claim_dialog_existing_claim_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialogs/existing-claim-dialog/existing-claim-dialog.component */ 64431);
/* harmony import */ var _dialogs_registered_garage_reject_claim_registered_garage_reject_claim_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dialogs/registered-garage-reject-claim/registered-garage-reject-claim.component */ 9927);
/* harmony import */ var _claim_assign_modal_claim_assign_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./claim-assign-modal/claim-assign-modal.component */ 88318);
/* harmony import */ var _dialogs_confirm_dialog_big_confirm_dialog_big_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dialogs/confirm-dialog-big/confirm-dialog-big.component */ 77594);
/* harmony import */ var _dialogs_registered_garage_view_estimate_registered_garage_view_estimate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dialogs/registered-garage-view-estimate/registered-garage-view-estimate.component */ 15423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
























class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    providers: [src_app_guards_deactivate_guard_deactivate_guard_guard__WEBPACK_IMPORTED_MODULE_1__.CanDeactivateGuard],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _icons_module__WEBPACK_IMPORTED_MODULE_6__.IconsModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__.NewDocumentsComponent, _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__.NewPhotosComponent, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__.AddPhotosComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__.DamageAnalysisComponent, _repair_recommendation_repair_recommendation_component__WEBPACK_IMPORTED_MODULE_9__.RepairRecommendationComponent, _dialogs_request_missing_information_dialog_request_missing_information_dialog_component__WEBPACK_IMPORTED_MODULE_10__.RequestMissingInformationDialogComponent, _dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_11__.RejectClaimDialogComponent, _dialogs_claim_garage_assignment_claim_garage_assignment_component__WEBPACK_IMPORTED_MODULE_12__.ClaimGarageAssignmentComponent, _dialogs_garage_assignment_preference_garage_assignment_preference_component__WEBPACK_IMPORTED_MODULE_13__.GarageAssignmentPreferenceComponent, _dialogs_existing_claim_dialog_existing_claim_dialog_component__WEBPACK_IMPORTED_MODULE_14__.ExistingClaimDialogComponent, _dialogs_registered_garage_reject_claim_registered_garage_reject_claim_component__WEBPACK_IMPORTED_MODULE_15__.RegisteredGarageRejectClaimComponent, _claim_assign_modal_claim_assign_modal_component__WEBPACK_IMPORTED_MODULE_16__.ClaimAssignModalComponent, _dialogs_confirm_dialog_big_confirm_dialog_big_component__WEBPACK_IMPORTED_MODULE_17__.ConfirmDialogBigComponent, _dialogs_registered_garage_view_estimate_registered_garage_view_estimate_component__WEBPACK_IMPORTED_MODULE_18__.RegisteredGarageViewEstimateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _icons_module__WEBPACK_IMPORTED_MODULE_6__.IconsModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule],
    exports: [_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__.NewDocumentsComponent, _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__.NewPhotosComponent, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__.AddPhotosComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__.DamageAnalysisComponent, _repair_recommendation_repair_recommendation_component__WEBPACK_IMPORTED_MODULE_9__.RepairRecommendationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _dialogs_request_missing_information_dialog_request_missing_information_dialog_component__WEBPACK_IMPORTED_MODULE_10__.RequestMissingInformationDialogComponent, _dialogs_reject_claim_dialog_reject_claim_dialog_component__WEBPACK_IMPORTED_MODULE_11__.RejectClaimDialogComponent, _dialogs_claim_garage_assignment_claim_garage_assignment_component__WEBPACK_IMPORTED_MODULE_12__.ClaimGarageAssignmentComponent, _dialogs_garage_assignment_preference_garage_assignment_preference_component__WEBPACK_IMPORTED_MODULE_13__.GarageAssignmentPreferenceComponent, _dialogs_existing_claim_dialog_existing_claim_dialog_component__WEBPACK_IMPORTED_MODULE_14__.ExistingClaimDialogComponent, _dialogs_registered_garage_reject_claim_registered_garage_reject_claim_component__WEBPACK_IMPORTED_MODULE_15__.RegisteredGarageRejectClaimComponent, _dialogs_registered_garage_view_estimate_registered_garage_view_estimate_component__WEBPACK_IMPORTED_MODULE_18__.RegisteredGarageViewEstimateComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_shared_module_ts.js.map