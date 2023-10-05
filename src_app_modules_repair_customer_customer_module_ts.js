"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_customer_customer_module_ts"],{

/***/ 47941:
/*!***********************************************************!*\
  !*** ./src/app/config/display/customer-details-config.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CasesTableConfig": () => (/* binding */ CasesTableConfig),
/* harmony export */   "ReapirTableConfig": () => (/* binding */ ReapirTableConfig)
/* harmony export */ });
const ReapirTableConfig = {
  columns: [{
    id: 'Id',
    sortable: true,
    header: {
      text: 'booking_id',
      tooltip: ''
    },
    selector: {
      field: 'RepairNumber'
    },
    widget: {
      type: 'text'
    },
    cellStyle: 'text-decoration: underline; color: var(--xa-primary);'
  }, {
    id: 'CreatedDate',
    sortable: true,
    header: {
      text: 'creation_date',
      tooltip: ''
    },
    selector: {
      field: 'CreatedDate'
    },
    widget: {
      type: 'dateTime'
    }
  }, {
    id: 'VehicleMake',
    sortable: true,
    header: {
      text: 'vehicle_make',
      tooltip: ''
    },
    selector: {
      field: 'VehicleMake'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'VehicleModel',
    sortable: true,
    header: {
      text: 'vehicle_model',
      tooltip: ''
    },
    selector: {
      field: 'VehicleModel'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'LicensePlateNumber',
    sortable: true,
    header: {
      text: 'license_plate',
      tooltip: ''
    },
    selector: {
      field: 'LicensePlateNumber'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'BookingType',
    sortable: true,
    header: {
      text: 'booking_type',
      tooltip: ''
    },
    selector: {
      field: 'BookingType'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'RepairType',
    sortable: true,
    header: {
      text: 'repair_type',
      tooltip: ''
    },
    selector: {
      field: 'RepairType'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'TotalInvoiceAmount',
    sortable: true,
    header: {
      text: 'total_amount_invoiced',
      tooltip: ''
    },
    selector: {
      field: 'FormattedTotalAmount'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'PaidAmount',
    sortable: true,
    header: {
      text: 'paid_amount',
      tooltip: ''
    },
    selector: {
      field: 'FormattedPaidAmount'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'AmountDue',
    sortable: true,
    header: {
      text: 'due_amount',
      tooltip: ''
    },
    selector: {
      field: 'FormattedDueAmount'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'Status',
    sortable: true,
    header: {
      text: 'status',
      tooltip: ''
    },
    selector: {
      field: 'Status'
    },
    widget: {
      type: 'text'
    }
  }]
};
const CasesTableConfig = {
  columns: [{
    id: 'Id',
    sortable: true,
    header: {
      text: 'estimate_id',
      tooltip: ''
    },
    selector: {
      field: 'EstimateNumber'
    },
    widget: {
      type: 'text'
    },
    cellStyle: 'text-decoration: underline; color: var(--xa-primary);'
  }, {
    id: 'CreatedDate',
    sortable: true,
    header: {
      text: 'creation_date',
      tooltip: ''
    },
    selector: {
      field: 'CreatedDate'
    },
    widget: {
      type: 'dateTime'
    }
  }, {
    id: 'VehicleMake',
    sortable: true,
    header: {
      text: 'vehicle_make',
      tooltip: ''
    },
    selector: {
      field: 'VehicleMake'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'VehicleModel',
    sortable: true,
    header: {
      text: 'vehicle_model',
      tooltip: ''
    },
    selector: {
      field: 'VehicleModel'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'LicensePlateNumber',
    sortable: true,
    header: {
      text: 'license_plate',
      tooltip: ''
    },
    selector: {
      field: 'LicensePlateNumber'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'TotalEstimateAmount ',
    sortable: true,
    header: {
      text: 'total_estimate_amount',
      tooltip: ''
    },
    selector: {
      field: 'FormattedTotalEstimateAmount'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'EstimationStatus',
    sortable: true,
    header: {
      text: 'estimation_status',
      tooltip: ''
    },
    selector: {
      field: 'EstimationStatus'
    },
    widget: {
      type: 'text'
    }
  }]
};

/***/ }),

/***/ 18869:
/*!*********************************************************!*\
  !*** ./src/app/config/display/customer-table-config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCompanyTableConfig": () => (/* binding */ CustomerCompanyTableConfig),
/* harmony export */   "CustomerTableConfig": () => (/* binding */ CustomerTableConfig)
/* harmony export */ });
const CustomerTableConfig = {
  columns: [{
    id: 'ContactId',
    sortable: true,
    header: {
      text: 'id',
      tooltip: ''
    },
    selector: {
      field: 'ContactId'
    },
    widget: {
      type: 'text'
    },
    cellStyle: 'text-decoration: underline; color: var(--xa-primary);'
  }, {
    id: 'CreatedDate',
    sortable: true,
    header: {
      text: 'creation_date',
      tooltip: ''
    },
    selector: {
      field: 'CreatedDate'
    },
    widget: {
      type: 'dateTime'
    }
  }, {
    id: 'FirstName',
    sortable: true,
    selector: {
      field: 'FirstName'
    },
    header: {
      text: 'first_name',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'LastName',
    sortable: true,
    selector: {
      field: 'LastName'
    },
    header: {
      text: 'last_name',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'MobileNumber',
    sortable: true,
    selector: {
      field: 'MobileNumber'
    },
    header: {
      text: 'mobile_number',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'Email',
    sortable: true,
    selector: {
      field: 'Email'
    },
    header: {
      text: 'email_address',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'Amount',
    sortable: true,
    selector: {
      field: 'FormattedTotalAmount'
    },
    cellStyle: 'justify-content:center;',
    header: {
      text: 'total_amount_invoiced',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'AmountReceived',
    sortable: true,
    cellStyle: 'justify-content:center;',
    selector: {
      field: 'FormattedPaidAmount'
    },
    header: {
      text: 'paid_amount',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'AmountDue',
    sortable: true,
    cellStyle: 'justify-content:center;',
    selector: {
      field: 'FormattedDueAmount'
    },
    header: {
      text: 'due_amount',
      tooltip: ''
    },
    widget: {
      type: 'html'
    }
  }]
};
const CustomerCompanyTableConfig = {
  columns: [{
    id: 'ContactId',
    sortable: true,
    header: {
      text: 'id',
      tooltip: ''
    },
    selector: {
      field: 'ContactId'
    },
    widget: {
      type: 'text'
    },
    cellStyle: 'text-decoration: underline; color: var(--xa-primary);'
  }, {
    id: 'CreatedDate',
    sortable: true,
    header: {
      text: 'creation_date',
      tooltip: ''
    },
    selector: {
      field: 'CreatedDate'
    },
    widget: {
      type: 'dateTime'
    }
  }, {
    id: 'CompanyName',
    sortable: true,
    selector: {
      field: 'FormattedCompanyName'
    },
    header: {
      text: 'company_name',
      tooltip: ''
    },
    widget: {
      type: 'html'
    }
  }, {
    id: 'Amount',
    sortable: true,
    selector: {
      field: 'FormattedTotalAmount'
    },
    header: {
      text: 'total_amount_invoiced',
      tooltip: ''
    },
    widget: {
      type: 'text'
    },
    cellStyle: 'justify-content:center;'
  }, {
    id: 'AmountReceived',
    sortable: true,
    selector: {
      field: 'FormattedPaidAmount'
    },
    header: {
      text: 'paid_amount',
      tooltip: ''
    },
    widget: {
      type: 'text'
    },
    cellStyle: 'justify-content:center;'
  }, {
    id: 'AmountDue',
    sortable: true,
    selector: {
      field: 'FormattedDueAmount'
    },
    header: {
      text: 'due_amount',
      tooltip: ''
    },
    widget: {
      type: 'html'
    },
    cellStyle: 'justify-content:center;'
  }]
};

/***/ }),

/***/ 89179:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/repair/customer/customer-details/customer-details.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsComponent": () => (/* binding */ CustomerDetailsComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../widgets/chq-paginator/chq-paginator.component */ 7772);
/* harmony import */ var src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/display/customer-details-config */ 47941);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/route-mapper/reapir-status-mapper */ 17771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customer/customer.service */ 72541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-mat-table/chq-mat-table.component */ 63298);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





















function CustomerDetailsComponent_chq_tabs_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "chq-tabs", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("menuItemClick", function CustomerDetailsComponent_chq_tabs_9_Template_chq_tabs_menuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("mode", "button")("menuItems", ctx_r0.customerDetailsMenus);
  }
}
const _c0 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function CustomerDetailsComponent_div_10_mat_accordion_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-accordion")(1, "mat-expansion-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("opened", function CustomerDetailsComponent_div_10_mat_accordion_1_Template_mat_expansion_panel_opened_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r8.panelOpenState = true);
    })("closed", function CustomerDetailsComponent_div_10_mat_accordion_1_Template_mat_expansion_panel_closed_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-expansion-panel-header")(3, "mat-panel-title")(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p", 16)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div")(12, "p", 17)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "p", 17)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "p", 17)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "p", 17)(31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "p", 17)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "p", 17)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "p", 17)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.userDetails == null ? null : ctx_r6.userDetails.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 17, "contact_id"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 19, "creation_date"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](17, 21, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.createdDate, "dd/MM/YYYY hh:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 24, "total_invoiced"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBindV"](23, 26, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](54, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amount, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](27, 32, "paid_amount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBindV"](29, 34, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](60, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amountReceived, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](33, 40, "due_amount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBindV"](35, 42, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](66, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amountDue, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](39, 48, "contact_name"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](44, 50, "contact_phone"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactPhoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](49, 52, "contact_email"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactEmail, "");
  }
}
function CustomerDetailsComponent_div_10_mat_accordion_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-accordion")(1, "mat-expansion-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("opened", function CustomerDetailsComponent_div_10_mat_accordion_2_Template_mat_expansion_panel_opened_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.panelOpenState = true);
    })("closed", function CustomerDetailsComponent_div_10_mat_accordion_2_Template_mat_expansion_panel_closed_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-expansion-panel-header")(3, "mat-panel-title")(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p", 16)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div")(12, "p", 17)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "p", 17)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.firstName, " ", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 8, "contact_id"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.contactId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 10, "email"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 12, "phone_number"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails.mobileNumber, "");
  }
}
function CustomerDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CustomerDetailsComponent_div_10_mat_accordion_1_Template, 51, 72, "mat-accordion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CustomerDetailsComponent_div_10_mat_accordion_2_Template, 22, 14, "mat-accordion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.userType === "company");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.userType === "individual");
  }
}
function CustomerDetailsComponent_section_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22)(1, "chq-paginator", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("paginationChange", function CustomerDetailsComponent_section_12_div_4_Template_chq_paginator_paginationChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r16.handlePaginationChangeReapir($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pagination", ctx_r14.paginationRepair);
  }
}
function CustomerDetailsComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section")(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "chq-mat-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CustomerDetailsComponent_section_12_div_4_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("config", ctx_r2.tableConfigRepair)("tableData", ctx_r2.tableDataRepair)("cellClicked", ctx_r2.handleCellClickRepair)("sortChanged", ctx_r2.handleSortChangeRepair)("pageChanged", ctx_r2.pageChangedRepair)("i18n", ctx_r2.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r2.tableDataRepair == null ? null : ctx_r2.tableDataRepair.length) > 0 && ctx_r2.paginationRepair.count > ctx_r2.paginationRepair.pageSize);
  }
}
function CustomerDetailsComponent_section_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22)(1, "chq-paginator", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("paginationChange", function CustomerDetailsComponent_section_13_div_4_Template_chq_paginator_paginationChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r20.handlePaginationChangeCase($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pagination", ctx_r18.paginationCase);
  }
}
function CustomerDetailsComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section")(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "chq-mat-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CustomerDetailsComponent_section_13_div_4_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("config", ctx_r3.tableConfigCase)("tableData", ctx_r3.tableDataCase)("cellClicked", ctx_r3.handleCellClickCase)("sortChanged", ctx_r3.handleSortChangeCase)("pageChanged", ctx_r3.pageChangedCase)("i18n", ctx_r3.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r3.tableDataCase == null ? null : ctx_r3.tableDataCase.length) > 0 && ctx_r3.paginationCase.count > ctx_r3.paginationCase.pageSize);
  }
}
const PATHS = {
  repair: 'repair-order',
  cases: 'estimates'
};
const caseStatusMapper = src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper;
const reapirStatusMapper = src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_4__.ReapirStatusMapper;
class CustomerDetailsComponent {
  /**
    Constructor for the CustomerService class.
    @constructor
    @param {CustomerService} customerService - The CustomerService instance to be used in the constructor.
    @param {CommonService} commonService - The CommonService instance to be used in the constructor.
    @param {Router} router - The Router instance.
  */
  constructor(monitorService, customerService, route, commonService, router, xaCurrencyPipe) {
    this.monitorService = monitorService;
    this.customerService = customerService;
    this.route = route;
    this.commonService = commonService;
    this.router = router;
    this.xaCurrencyPipe = xaCurrencyPipe;
    this.panelOpenState = false;
    this.pageChangedRepair = false;
    this.paginationRepair = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__.defaultPagination;
    this.totalCountRepair = 0;
    this.configDataRepair = src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_2__.ReapirTableConfig;
    this.pageChangedCase = false;
    this.paginationCase = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__.defaultPagination;
    this.totalCountCase = 0;
    this.configDataCase = src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_2__.CasesTableConfig;
    this.userDetails = {};
    this.customerId = '';
    this.uniqueId = '';
    this.userType = '';
    this.haveQuotePermissions = false;
    this.userDetailsLoading = false;
    // Tabs Menu
    this.customerDetailsMenus = src_app_model_menu__WEBPACK_IMPORTED_MODULE_3__.customerDetailsMenus;
    this.activeTab = '';
    this.tabOptions = PATHS;
    /**
      @description Handles a cell click event for a repair table.
      @param {TableRowData} row - The row data for the clicked cell.
      @param {Partial} column - The column data for the clicked cell.
      @returns {void}
    */
    this.handleCellClickRepair = (row, column) => {
      if (column.id === 'Id') {
        const id = row.find(ele => ele.id === column.id)?.result?.value;
        if (id) {
          const clickedRawData = this.tableDataRepair.find(ele => ele.RepairNumber === id);
          if (clickedRawData) {
            const routeToRedirect = reapirStatusMapper[clickedRawData.Status.toLowerCase()] || reapirStatusMapper.others;
            this.router.navigate([routeToRedirect.replace('{{repairGUID}}', clickedRawData.RepairGuid)]);
          }
        }
      }
    };
    /**
      @description Handles a cell click event for a case.
      @param {TableRowData} row - The row data for the clicked cell.
      @param {Partial} column - The column data for the clicked cell.
      @returns {void}
    */
    this.handleCellClickCase = (row, column) => {
      if (column.id === 'Id') {
        const id = row.find(ele => ele.id === column.id)?.result?.value;
        if (id) {
          const clickedRawData = this.tableDataCase.find(ele => ele.EstimateNumber === id);
          if (clickedRawData) {
            const routeToRedirect = caseStatusMapper[clickedRawData.EstimationStatus.toLowerCase()] || caseStatusMapper.others;
            this.router.navigate([routeToRedirect.replace('{{caseGUID}}', clickedRawData.CaseGuid)]);
          }
        }
      }
    };
    /**
      A function that handles a change in the sorting of data for a repair table.
      @param {Sort} sort - The new sorting criteria.
      @returns {void}
    */
    this.handleSortChangeRepair = sort => {
      if (sort) {
        this.paginationRepair = {
          ...this.paginationRepair,
          ...{
            orderBy: sort.active,
            sortDirection: sort.direction
          }
        };
        this.getRepairOrders();
      }
    };
    /**
      @description Handles a change in the sorting of data for a case table.
      @param {Sort} sort - The new sorting criteria.
      @returns {void}
    */
    this.handleSortChangeCase = sort => {
      if (sort) {
        this.paginationCase = {
          ...this.paginationCase,
          ...{
            orderBy: sort.active,
            sortDirection: sort.direction
          }
        };
        this.getCases();
      }
    };
    this.i18n = this.commonService.geti18nInfo();
  }
  /**
    Lifecycle hook that is called after the component is initialized.
    @returns {Promise} A promise that resolves when the initialization is complete.
  */
  ngOnInit() {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.monitorService.logEvent('ngOnInit', ['CustomerDetailsComponent', 'addenda-repair']);
      _this.commonService.userProfileData.subscribe(res => {
        const automotiveServices = res?.data?.userPermission?.automotiveServices || [];
        _this.haveQuotePermissions = automotiveServices.find(ele => ele.automotiveServiceName === 'Carheal Quote');
      });
      _this.route.params.subscribe(params => {
        _this.customerId = params['contactId'];
        _this.uniqueId = params['id'];
        _this.userType = params['userType'];
        _this.activeTab = params['orderType'];
        _this.tableConfigRepair = _this.configDataRepair;
        _this.tableConfigCase = _this.configDataCase;
        _this.paginationRepair = {
          ..._this.paginationRepair,
          ...{
            count: _this.totalCountRepair,
            currentPage: CustomerDetailsComponent.currentPageRepair,
            orderBy: 'CreatedDate',
            sortDirection: 'desc'
          }
        };
        _this.paginationCase = {
          ..._this.paginationCase,
          ...{
            count: _this.totalCountCase,
            currentPage: CustomerDetailsComponent.currentPageCase,
            orderBy: 'CreatedDate',
            sortDirection: 'desc'
          }
        };
        if (_this.activeTab === PATHS.repair) _this.getRepairOrders();else _this.getCases();
        _this.getUserDetails();
      });
    })();
  }
  /**
    Get Customer details
    @returns {Promise} A promise that resolves when the repair orders are retrieved and the table data is updated.
  */
  getUserDetails() {
    var _this2 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.userType === 'company') {
        _this2.userDetailsLoading = true;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(_this2.customerService.getCompanyDetails(_this2.customerId)).then(response => {
          if (response?.data) {
            _this2.userDetails = response.data;
            if (!_this2.userDetails.amount) _this2.userDetails.amount = 0;
            if (!_this2.userDetails.amountReceived) _this2.userDetails.amountReceived = 0;
            if (!_this2.userDetails.amountDue) _this2.userDetails.amountDue = 0;
            _this2.userDetailsLoading = false;
          }
        }).catch(err => {
          _this2.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
        });
      } else {
        _this2.userDetailsLoading = true;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(_this2.customerService.getCustomerDetails(_this2.uniqueId)).then(response => {
          if (response?.data) {
            _this2.userDetails = response.data;
            _this2.userDetailsLoading = false;
          }
        }).catch(err => {
          _this2.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
        });
      }
    })();
  }
  /**
    Retrieves repair orders from the customer service and updates the table data for the repair orders.
    @returns {Promise} A promise that resolves when the repair orders are retrieved and the table data is updated.
  */
  getRepairOrders() {
    var _this3 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.commonService.showLoading();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(_this3.customerService.getReapirOrders(_this3.customerId, _this3.userType, _this3.paginationRepair)).then(response => {
        const result = response.value;
        result.map(ele => {
          ele.AmountDue = ele.TotalInvoiceAmount - ele.PaidAmount;
          ele.FormattedTotalAmount = ele.TotalInvoiceAmount ? _this3.xaCurrencyPipe.transform(ele.TotalInvoiceAmount, _this3.i18n.currencySymbol, _this3.i18n.digitsInfo, _this3.i18n.locale, _this3.i18n.position) : '-';
          ele.FormattedPaidAmount = ele.PaidAmount ? _this3.xaCurrencyPipe.transform(ele.PaidAmount, _this3.i18n.currencySymbol, _this3.i18n.digitsInfo, _this3.i18n.locale, _this3.i18n.position) : '-';
          ele.FormattedDueAmount = ele.TotalInvoiceAmount ? _this3.xaCurrencyPipe.transform(ele.AmountDue, _this3.i18n.currencySymbol, _this3.i18n.digitsInfo, _this3.i18n.locale, _this3.i18n.position) : '-';
        });
        _this3.tableDataRepair = result;
        _this3.paginationRepair = {
          ..._this3.paginationRepair,
          count: response['@odata.count'] || 0
        };
        _this3.commonService.hideLoading();
      }).catch(err => {
        _this3.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
        _this3.commonService.hideLoading();
      });
    })();
  }
  /**
    Retrieves cases from the customer service and updates the table data with the response.
    @returns {Promise} A promise that resolves when the cases are retrieved and the table data is updated.
  */
  getCases() {
    var _this4 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.commonService.showLoading();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(_this4.customerService.getCases(_this4.customerId, _this4.userType, _this4.paginationCase)).then(response => {
        const result = response.value;
        result.map(ele => {
          ele.FormattedTotalEstimateAmount = ele.TotalEstimateAmount ? _this4.xaCurrencyPipe.transform(ele.TotalEstimateAmount, _this4.i18n.currencySymbol, _this4.i18n.digitsInfo, _this4.i18n.locale, _this4.i18n.position) : '-';
        });
        _this4.tableDataCase = result;
        _this4.paginationCase = {
          ..._this4.paginationCase,
          count: response['@odata.count'] || 0
        };
        _this4.commonService.hideLoading();
      }).catch(err => {
        _this4.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
        _this4.commonService.hideLoading();
      });
    })();
  }
  /**
   * handlePaginationChange
   * @param event
   */
  handlePaginationChangeReapir(event) {
    const pagination = {
      pageSize: event.pageSize,
      offset: event.offset,
      currentPage: event.currentPage
    };
    this.paginationRepair.currentPage = event.currentPage;
    this.paginationRepair = {
      ...this.paginationRepair,
      ...pagination
    };
    this.pageChangedRepair = true;
    this.getRepairOrders();
  }
  /**
   * handlePaginationChange
   * @param event
   */
  handlePaginationChangeCase(event) {
    const pagination = {
      pageSize: event.pageSize,
      offset: event.offset,
      currentPage: event.currentPage
    };
    this.paginationCase.currentPage = event.currentPage;
    this.paginationCase = {
      ...this.paginationCase,
      ...pagination
    };
    this.pageChangedCase = true;
    this.getCases();
  }
  /**
    Navigates to the specified menu item's URL using the Angular Router.
    @param {menuItem} item - The menu item to navigate to.
    @returns {void}
  */
  navigate(item) {
    const url = item.url;
    if (this.userType && this.customerId) {
      this.router.navigate([url.replace('{userType}', this.userType).replace('{customerId}', this.customerId).replace('{id}', this.uniqueId)]);
    }
  }
  /**
    Navigates to the customer listing based on usertype using the Angular Router.
    @returns {void}
  */
  handleBackClick() {
    this.router.navigate(['/repair/customers/{userType}'.replace('{userType}', this.userType)]);
  }
}
CustomerDetailsComponent.currentPageRepair = 1;
CustomerDetailsComponent.currentPageCase = 1;
CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) {
  return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_5__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_8__.XaCurrencyPipe));
};
CustomerDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CustomerDetailsComponent,
  selectors: [["customer-details"]],
  decls: 19,
  vars: 11,
  consts: [[1, "main-customer-details", "fx-col"], [1, "header", "d-flex", "align-center", "position-relative", "fx-0"], [1, ""], [1, "back-section", "d-flex", "align-center", 3, "click"], [1, "cross", 3, "svgIcon"], [3, "mode", "menuItems", "menuItemClick", 4, "ngIf"], ["class", "user-details", 4, "ngIf"], [1, "table-section", "fx-1"], [4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [3, "mode", "menuItems", "menuItemClick"], [1, "user-details"], [3, "opened", "closed"], [1, "sub-heading"], [1, "expanded-sub-heading"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "cellClicked", "sortChanged", "pageChanged", "i18n"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "pagination-wrapper"], [3, "pagination", "paginationChange"], ["paginator", ""]],
  template: function CustomerDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CustomerDetailsComponent_Template_div_click_3_listener() {
        return ctx.handleBackClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, CustomerDetailsComponent_chq_tabs_9_Template, 1, 2, "chq-tabs", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, CustomerDetailsComponent_div_10_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, CustomerDetailsComponent_section_12_Template, 5, 7, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, CustomerDetailsComponent_section_13_Template, 5, 7, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "footer")(15, "div", 9)(16, "div", 10)(17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", "left-arrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 7, "back"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 9, ctx.userType), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.haveQuotePermissions);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.userDetails && !ctx.userDetailsLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.tabOptions.repair);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.tabOptions.cases);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_9__.ChqMatTableComponent, src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__.ChqPaginatorComponent, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_10__.ChqTabsComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelTitle, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_8__.XaCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: [".main-customer-details[_ngcontent-%COMP%] {\n  height: calc(100vh - (5px + 1.5vw) - (5px + 1.5vw + 58px + 1.6vw) - 76px);\n}\n.main-customer-details[_ngcontent-%COMP%]   .table-section[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.main-customer-details[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--xa-gray);\n}\n.main-customer-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  min-height: 64px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .pagination-wrapper[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .back-section[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n  text-transform: capitalize;\n  cursor: pointer;\n}\n.main-customer-details[_ngcontent-%COMP%]   .back-section[_ngcontent-%COMP%]     mat-icon {\n  margin-left: 5px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  width: 32%;\n  position: absolute;\n  right: 0;\n  top: 9px;\n  z-index: 1;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 9px;\n  color: var(--xa-black-medium);\n  margin-bottom: 0px;\n  margin-top: 5px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  opacity: 0.6;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .expanded-sub-heading[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 10px;\n  color: var(--xa-black-medium);\n  margin-bottom: 0px;\n  margin-top: 8px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .expanded-sub-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  opacity: 0.6;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 11px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0 20px 16px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]     .mat-expansion-indicator::after {\n  color: var(--xa-black);\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  background: var(--xa-bold-gray);\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expanded[_ngcontent-%COMP%] {\n  background: var(--xa-white);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvY3VzdG9tZXIvY3VzdG9tZXItZGV0YWlscy9jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUVBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksdUNBQUE7QUFFUjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtBQUNaO0FBR0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFEUjtBQUVRO0VBQ0ksZ0JBQUE7QUFBWjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBWjtBQUNZO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FBQ2hCO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFaO0FBQ1k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFDaEI7QUFHUTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFEWjtBQUdRO0VBQ0ksaUJBQUE7QUFEWjtBQUdRO0VBQ0ksbUJBQUE7QUFEWjtBQUdRO0VBQ0ksb0JBQUE7QUFEWjtBQUdRO0VBQ0ksc0JBQUE7QUFEWjtBQUdRO0VBQ0ksK0JBQUE7QUFEWjtBQUdRO0VBQ0ksMkJBQUE7QUFEWiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWN1c3RvbWVyLWRldGFpbHMge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDVweCArIDEuNXZ3KSAtICg1cHggKyAxLjV2dyArIDU4cHggKyAxLjZ2dykgLSA3NnB4KTtcclxuICAgIC50YWJsZS1zZWN0aW9uIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1ib3R0b20ge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS14YS1ncmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5iYWNrLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIDo6bmctZGVlcCBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWRldGFpbHMge1xyXG4gICAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5leHBhbmRlZC1zdWItaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtcGFuZWwtdGl0bGUge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJvbGQtZ3JheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtZXhwYW5kZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS13aGl0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 85537:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/repair/customer/customer-list/customer-table.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerTableComponent": () => (/* binding */ CustomerTableComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../widgets/chq-paginator/chq-paginator.component */ 7772);
/* harmony import */ var src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/display/customer-table-config */ 18869);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customer/customer.service */ 72541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../widgets/chq-mat-table/chq-mat-table.component */ 63298);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);























const _c0 = ["companyName"];
const _c1 = ["workProvider"];
function CustomerTableComponent_div_3_chq_dropdown_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "chq-dropdown", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selected", function CustomerTableComponent_div_3_chq_dropdown_3_Template_chq_dropdown_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.selectFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dropdownModel", ctx_r7.dropdownModelCompany);
  }
}
function CustomerTableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 12)(1, "chq-dropdown", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selected", function CustomerTableComponent_div_3_Template_chq_dropdown_selected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r11.selectFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CustomerTableComponent_div_3_chq_dropdown_3_Template, 2, 1, "chq-dropdown", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "chq-button", 16)(5, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dropdownModel", ctx_r0.dropdownModelFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.input.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r0.applyButtonModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r0.resetButtonModel);
  }
}
function CustomerTableComponent_div_4_chq_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "chq-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function CustomerTableComponent_div_4_chq_input_3_Template_chq_input_controlOutput_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.updateInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx_r14.nameTextBox);
  }
}
function CustomerTableComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 12)(1, "chq-dropdown", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selected", function CustomerTableComponent_div_4_Template_chq_dropdown_selected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.selectFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CustomerTableComponent_div_4_chq_input_3_Template, 1, 1, "chq-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "chq-button", 16)(5, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dropdownModel", ctx_r1.dropdownModelFilterPerson);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.input.personName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r1.applyButtonModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r1.resetButtonModel);
  }
}
const _c2 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function CustomerTableComponent_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](ctx_r19.dueAmountPersonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBindV"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](10, _c2, ctx_r19.totalDueAmountPerson, ctx_r19.i18n.currencySymbol, ctx_r19.i18n.digitsInfo, ctx_r19.i18n.locale, ctx_r19.i18n.position)));
  }
}
function CustomerTableComponent_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r20.totalDueAmountPerson);
  }
}
function CustomerTableComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 23)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, CustomerTableComponent_div_6_span_4_Template, 3, 16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, CustomerTableComponent_div_6_span_5_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 3, "total_due_amount"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.totalDueAmountPerson !== "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.totalDueAmountPerson === "-");
  }
}
function CustomerTableComponent_div_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](ctx_r21.dueAmountCompanyClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBindV"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](10, _c2, ctx_r21.totalDueAmountCompany, ctx_r21.i18n.currencySymbol, ctx_r21.i18n.digitsInfo, ctx_r21.i18n.locale, ctx_r21.i18n.position)));
  }
}
function CustomerTableComponent_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r22.totalDueAmountCompany);
  }
}
function CustomerTableComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 23)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, CustomerTableComponent_div_7_span_4_Template, 3, 16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, CustomerTableComponent_div_7_span_5_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 3, "total_due_amount"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.totalDueAmountCompany !== "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.totalDueAmountCompany === "-");
  }
}
function CustomerTableComponent_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 30)(1, "chq-paginator", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("paginationChange", function CustomerTableComponent_div_9_div_3_Template_chq_paginator_paginationChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.handlePaginationChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("pagination", ctx_r23.pagination);
  }
}
function CustomerTableComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "chq-mat-table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CustomerTableComponent_div_9_div_3_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("config", ctx_r4.tableConfig)("tableData", ctx_r4.tableData)("sortChanged", ctx_r4.handleSortChange)("pageChanged", ctx_r4.pageChanged)("cellClicked", ctx_r4.handleCellClick)("i18n", ctx_r4.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r4.tableData == null ? null : ctx_r4.tableData.length) > 0 && ctx_r4.pagination.count > ctx_r4.pagination.pageSize);
  }
}
function CustomerTableComponent_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 30)(1, "chq-paginator", 31, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("paginationChange", function CustomerTableComponent_div_10_div_3_Template_chq_paginator_paginationChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.handlePaginationChangeCompany($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("pagination", ctx_r27.paginationCompany);
  }
}
function CustomerTableComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "chq-mat-table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CustomerTableComponent_div_10_div_3_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("config", ctx_r5.tableConfigCompany)("tableData", ctx_r5.tableDataCompany)("sortChanged", ctx_r5.handleSortChangeCompany)("pageChanged", ctx_r5.pageChangedCompany)("cellClicked", ctx_r5.handleCellClickCompany)("i18n", ctx_r5.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r5.tableDataCompany == null ? null : ctx_r5.tableDataCompany.length) > 0 && ctx_r5.paginationCompany.count > ctx_r5.pagination.pageSize);
  }
}
const ACTIVE_PATHS = {
  COMPANY: 'company',
  PERSONAL: 'individual'
};
class CustomerTableComponent {
  /**
   * constructor
   * @param monitorService
   * @param commonService
   * @param tableDataSer
   */
  constructor(monitorService, commonService, tableDataSer, router, route, caseService, xaCurrencyPipe, calendarService) {
    this.monitorService = monitorService;
    this.commonService = commonService;
    this.tableDataSer = tableDataSer;
    this.router = router;
    this.route = route;
    this.caseService = caseService;
    this.xaCurrencyPipe = xaCurrencyPipe;
    this.calendarService = calendarService;
    // Personal Customer list variables
    this.pageChanged = false;
    this.pagination = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__.defaultPagination;
    this.configData = src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_2__.CustomerTableConfig;
    this.textToSearch = '';
    this.input = {
      personName: false,
      companyName: false
    };
    // Tabs Menu
    this.customerListMenus = src_app_model_menu__WEBPACK_IMPORTED_MODULE_3__.customerListMenus;
    this.activeTab = '';
    this.activeTabOptions = ACTIVE_PATHS;
    // Company Customer list variables
    this.pageChangedCompany = false;
    this.paginationCompany = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__.defaultPagination;
    this.configDataCompany = src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_2__.CustomerCompanyTableConfig;
    this.workProviderFromBooking = [];
    this.selectedCompanyForFilter = [];
    // Extra Variables
    this.dueAmountPersonClass = '';
    this.dueAmountCompanyClass = '';
    this.totalDueAmountCompany = 0;
    this.totalDueAmountPerson = 0;
    this.showTotalDueAmountCompany = false;
    this.showTotalDueAmountPerson = false;
    this.applyButtonModel = {
      label: 'apply',
      type: 'disabled',
      icon: '',
      onclick: this.applyFilter.bind(this)
    };
    this.resetButtonModel = {
      label: 'reset_all',
      type: 'outline',
      icon: '',
      onclick: this.reSetFilter.bind(this)
    };
    // Company Filter
    this.dropdownModelFilter = {
      options: [],
      placeHolder: 'select_type',
      label: 'select_type',
      name: 'filterDropdown',
      displayValue: 'label',
      selectedOption: {
        label: ''
      }
    };
    this.dropdownModelCompany = {
      options: [],
      placeHolder: 'company_name',
      label: 'company_name',
      name: 'companyDropdown',
      displayValue: 'companyName',
      keyFieldName: 'CompanyId',
      selectedOption: [],
      isMultiSelect: true
    };
    //PERSONAL Filters
    this.dropdownModelFilterPerson = {
      options: [{
        label: 'Retail - Individual'
      }],
      placeHolder: 'select_type',
      label: 'select_type',
      name: 'filterDropdownPerson',
      displayValue: 'label',
      selectedOption: {
        label: ''
      }
    };
    this.nameTextBox = {
      placeHolder: 'customer_name',
      label: 'customer_name',
      name: 'name',
      type: 'text',
      value: '',
      required: false
    };
    /**
      Handles a change in the sorting of the customer data.
      @param {Sort} sort - The new sorting criteria.
      @returns {void}
    */
    this.handleSortChange = sort => {
      if (sort) {
        this.pagination = {
          ...this.pagination,
          ...{
            orderBy: sort.active,
            sortDirection: sort.direction
          }
        };
        this.getCustomers();
      }
    };
    /**
      Handles a change in the sorting of company customers.
      @param {Sort} sort - The new sorting criteria.
      @returns {void}
    */
    this.handleSortChangeCompany = sort => {
      if (sort) {
        this.paginationCompany = {
          ...this.paginationCompany,
          ...{
            orderBy: sort.active,
            sortDirection: sort.direction
          }
        };
        this.getCompanyCustomers();
      }
    };
    /**
      Handles a cell click event.
      @param {TableRowData} row - The row data.
      @param {Partial} column - The column data.
      @returns {void}
    */
    this.handleCellClick = (row, column) => {
      if (column.id === 'ContactId') {
        const customerId = row.find(ele => ele.id === column.id)?.result?.value;
        if (customerId) {
          const customerDetails = this.tableData.find(ele => ele.ContactId === customerId);
          if (customerDetails) this.commonService.customerDetails.next(customerDetails);
          if (customerId) this.router.navigate([`/repair/customers/individual/${customerId}/${customerDetails.Id}/repair-order`]);
        }
      }
    };
    /**
      Handles a cell click event for a company column.
      @param {TableRowData} row - The row data for the clicked cell.
      @param {Partial} column - The column data for the clicked cell.
      @returns {void}
    */
    this.handleCellClickCompany = (row, column) => {
      if (column.id === 'ContactId') {
        const companyId = row.find(ele => ele.id === column.id)?.result?.value;
        if (companyId) {
          const customerDetails = this.tableDataCompany.find(ele => ele.ContactId === companyId);
          if (customerDetails) this.commonService.customerDetails.next(customerDetails);
          if (companyId) this.router.navigate([`/repair/customers/company/${companyId}/${customerDetails.Id}/repair-order`]);
        }
      }
    };
    this.i18n = this.commonService.geti18nInfo();
  }
  /**
   * on init
   */
  ngOnInit() {
    var _this = this;
    this.monitorService.logEvent('ngOnInit', ['CustomerTableComponent', 'addenda-repair']);
    this.tableConfig = this.configData;
    this.tableConfigCompany = this.configDataCompany;
    this.route.params.subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        _this.activeTab = params['userType'];
        if (_this.activeTab === ACTIVE_PATHS.PERSONAL) {
          _this.pagination = {
            ..._this.pagination,
            ...{
              count: 0,
              currentPage: CustomerTableComponent.currentPage,
              orderBy: 'CreatedDate',
              sortDirection: 'desc'
            }
          };
          const paginationInfo = {
            currentPage: CustomerTableComponent.currentPage,
            offset: _this.pagination.pageSize * (CustomerTableComponent.currentPage - 1),
            pageSize: _this.pagination.pageSize
          };
          _this.handlePaginationChange(paginationInfo);
          _this.getTotalDueAmountPerson();
        } else {
          _this.paginationCompany = {
            ..._this.paginationCompany,
            ...{
              count: 0,
              currentPage: CustomerTableComponent.currentPageCompnay,
              orderBy: 'CreatedDate',
              sortDirection: 'desc'
            }
          };
          _this.commonService.showLoading();
          const responseB = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this.tableDataSer.getCompanyWorkProviders('$apply=groupby((CompanyOrgType))'));
          if (responseB && responseB.length > 0) {
            _this.workProviderFromBooking = responseB.map(ele => ele.CompanyOrgType);
          }
          _this.getCompanyCustomers();
          _this.getTotalDueAmountCompany();
          if (!_this.dropdownModelFilter.observable) {
            _this.dropdownModelFilter = {
              ..._this.dropdownModelFilter,
              observable: _this.caseService.getProviders(),
              onObservableLoad: _this.onObservableLoadWorkProviderData.bind(_this)
            };
            _this.workProvider.dropdownModel.observable = _this.caseService.getProviders();
            _this.workProvider.getObservable();
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.subscription = this.commonService.userProfileData.subscribe(res => {
      this.userDetail = res?.data;
    });
  }
  /**
    @returns {void} ngOnDestroy for GenerateInvoicesComponent
  */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
    Retrieves a list of customers for a company.
    @returns {Promise} A promise that resolves with the list of customers.
  */
  getCompanyCustomers() {
    var _this2 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.commonService.showLoading();
      let queryParams = '';
      if (_this2.selectedCompanyForFilter?.length > 0) {
        queryParams = `$filter=(${_this2.selectedCompanyForFilter.map(x => {
          return `ContactId eq ${x.CompanyId}`;
        }).join(' or ')})`;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this2.tableDataSer.getCompanyCustomers(_this2.paginationCompany, queryParams)).then(response => {
        const result = response.value;
        result.map(ele => {
          let dueAmountClass = '';
          ele.AmountDue = ele.Amount - ele.AmountReceived;
          if (ele.Amount && ele.AmountDue !== undefined) {
            const dueAmountPrecent = ele.AmountDue * 100 / ele.Amount;
            if (dueAmountPrecent >= 30) dueAmountClass = 'color-xa-dark-red';
            if (dueAmountPrecent <= 10 && dueAmountPrecent > 0) dueAmountClass = 'col-xa-orange2';
            if (dueAmountPrecent == 0) dueAmountClass = 'color-xa-repair-header';
          }
          ele.FormattedTotalAmount = ele.Amount ? _this2.xaCurrencyPipe.transform(ele.Amount, _this2.i18n.currencySymbol, _this2.i18n.digitsInfo, _this2.i18n.locale, _this2.i18n.position) : '-';
          ele.FormattedPaidAmount = ele.AmountReceived ? _this2.xaCurrencyPipe.transform(ele.AmountReceived, _this2.i18n.currencySymbol, _this2.i18n.digitsInfo, _this2.i18n.locale, _this2.i18n.position) : '-';
          ele.FormattedDueAmount = ele.Amount ? '<span class="' + dueAmountClass + '">' + _this2.xaCurrencyPipe.transform(ele.AmountDue, _this2.i18n.currencySymbol, _this2.i18n.digitsInfo, _this2.i18n.locale, _this2.i18n.position) : '-' + '</span>';
          ele.FormattedCompanyName = ele.CompanyName ? `<span class="company-name">${ele.CompanyName}${ele.LicenseNumber ? '-<i>' + ele.LicenseNumber + '</i>' : ''}</span>` : '';
        });
        _this2.tableDataCompany = result;
        _this2.paginationCompany = {
          ..._this2.paginationCompany,
          count: response['@odata.count'] || 0
        };
        _this2.commonService.hideLoading();
      }).catch(err => {
        _this2.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
        _this2.commonService.hideLoading();
      });
    })();
  }
  /**
    Retrieves customer data from a table data service and sets it to the table data property.
    If an error occurs, the apply button type is set to primary and the loading spinner is hidden.
    @returns {Promise} A promise that resolves to the customer data or rejects with an error.
  */
  getCustomers() {
    var _this3 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFilter = _this3.dropdownModelFilterPerson.selectedOption?.label;
      let queryParams = '';
      switch (selectedFilter?.toLowerCase()) {
        case 'retail - individual':
          if (_this3.textToSearch != '') {
            // To Fix typescript error convert the value to string by appending ''
            const empName = encodeURIComponent(_this3.textToSearch.toString());
            queryParams = `$filter=(contains(tolower(FirstName),'${empName.toLowerCase()}')) or (contains(tolower(LastName),'${empName.toLowerCase()}'))`;
          }
          break;
        default:
          break;
      }
      _this3.commonService.showLoading();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this3.tableDataSer.getCustomers(_this3.pagination, queryParams)).then(response => {
        const result = response.value;
        result.map(ele => {
          let dueAmountClass = '';
          ele.AmountDue = ele.Amount - ele.AmountReceived;
          if (ele.Amount && ele.AmountDue !== undefined) {
            const dueAmountPrecent = ele.AmountDue * 100 / ele.Amount;
            if (dueAmountPrecent >= 30) dueAmountClass = 'color-xa-dark-red';
            if (dueAmountPrecent <= 10 && dueAmountPrecent > 0) dueAmountClass = 'col-xa-orange2';
            if (dueAmountPrecent == 0) dueAmountClass = 'color-xa-repair-header';
          }
          ele.FormattedTotalAmount = ele.Amount ? _this3.xaCurrencyPipe.transform(ele.Amount, _this3.i18n.currencySymbol, _this3.i18n.digitsInfo, _this3.i18n.locale, _this3.i18n.position) : '-';
          ele.FormattedPaidAmount = ele.AmountReceived ? _this3.xaCurrencyPipe.transform(ele.AmountReceived, _this3.i18n.currencySymbol, _this3.i18n.digitsInfo, _this3.i18n.locale, _this3.i18n.position) : '-';
          ele.FormattedDueAmount = ele.Amount && ele.AmountDue !== undefined ? '<span class="' + dueAmountClass + '">' + _this3.xaCurrencyPipe.transform(ele.AmountDue, _this3.i18n.currencySymbol, _this3.i18n.digitsInfo, _this3.i18n.locale, _this3.i18n.position) + '</span>' : '-';
        });
        _this3.tableData = result;
        _this3.pagination = {
          ..._this3.pagination,
          count: response['@odata.count'] || 0
        };
        _this3.commonService.hideLoading();
      }).catch(err => {
        _this3.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
        _this3.commonService.hideLoading();
      });
    })();
  }
  /**
    @returns {Promise} A promise that resolves to the customer data or rejects with an error.
  */
  getTotalDueAmountCompany() {
    var _this4 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.showTotalDueAmountCompany = false;
      let query = '$apply=';
      if (_this4.selectedCompanyForFilter?.length > 0) {
        query += `filter(${_this4.selectedCompanyForFilter.map(x => {
          return `ContactId eq ${x.CompanyId}`;
        }).join(' or ')})/`;
      }
      query += 'aggregate(Amount with sum as TotalAmount, AmountReceived with sum as TotalAmountReceived)';
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this4.tableDataSer.getTotalDueAmountCompany(query)).then(response => {
        if (response && response[0]) {
          _this4.showTotalDueAmountCompany = true;
          _this4.dueAmountCompanyClass = '';
          _this4.totalDueAmountCompany = response[0].TotalAmount ? response[0].TotalAmount - response[0].TotalAmountReceived : '-';
          if (response[0].TotalAmount) {
            const dueAmountPrecent = _this4.totalDueAmountCompany * 100 / response[0].TotalAmount;
            if (dueAmountPrecent >= 30) _this4.dueAmountCompanyClass = 'color-xa-dark-red';
            if (dueAmountPrecent <= 10 && dueAmountPrecent > 0) _this4.dueAmountCompanyClass = 'col-xa-orange2';
            if (dueAmountPrecent == 0) _this4.dueAmountCompanyClass = 'color-xa-repair-header';
          }
        }
      }).catch(err => {
        _this4.showTotalDueAmountCompany = true;
        _this4.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
      });
    })();
  }
  /**
    @returns {Promise} A promise that resolves to the customer data or rejects with an error.
  */
  getTotalDueAmountPerson() {
    var _this5 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.showTotalDueAmountPerson = false;
      let query = '$apply=';
      const selectedFilter = _this5.dropdownModelFilterPerson.selectedOption?.label;
      switch (selectedFilter?.toLowerCase()) {
        case 'retail - individual':
          if (_this5.textToSearch != '') {
            // To Fix typescript error convert the value to string by appending ''
            const empName = encodeURIComponent(_this5.textToSearch.toString());
            query += `filter(contains(tolower(FirstName),'${empName.toLowerCase()}') or contains(tolower(LastName),'${empName.toLowerCase()}'))/`;
          }
          break;
        default:
          break;
      }
      query += 'aggregate(Amount with sum as TotalAmount, AmountReceived with sum as TotalAmountReceived)';
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this5.tableDataSer.getTotalDueAmountPerson(query)).then(response => {
        if (response && response[0]) {
          _this5.showTotalDueAmountPerson = true;
          _this5.dueAmountPersonClass = '';
          _this5.totalDueAmountPerson = response[0].TotalAmount ? response[0].TotalAmount - response[0].TotalAmountReceived : '-';
          if (response[0].TotalAmount) {
            const dueAmountPrecent = _this5.totalDueAmountPerson * 100 / response[0].TotalAmount;
            if (dueAmountPrecent >= 30) _this5.dueAmountPersonClass = 'color-xa-dark-red';
            if (dueAmountPrecent <= 10 && dueAmountPrecent > 0) _this5.dueAmountPersonClass = 'col-xa-orange2';
            if (dueAmountPrecent == 0) _this5.dueAmountPersonClass = 'color-xa-repair-header';
          }
        }
      }).catch(err => {
        _this5.showTotalDueAmountPerson = true;
        _this5.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
      });
    })();
  }
  /**
   * page change
   * @param event
   */
  handlePaginationChange(event) {
    const pagination = {
      pageSize: event.pageSize,
      offset: event.offset,
      currentPage: event.currentPage
    };
    this.pagination.currentPage = event.currentPage;
    this.pagination = {
      ...this.pagination,
      ...pagination
    };
    this.pageChanged = true;
    this.getCustomers();
  }
  /**
   * page change
   * @param event
   */
  handlePaginationChangeCompany(event) {
    const pagination = {
      pageSize: event.pageSize,
      offset: event.offset,
      currentPage: event.currentPage
    };
    this.paginationCompany.currentPage = event.currentPage;
    this.paginationCompany = {
      ...this.paginationCompany,
      ...pagination
    };
    this.pageChangedCompany = true;
    this.getCompanyCustomers();
  }
  /**
   * selected any filter in the dropdown
   * @param $event
   */
  selectFilter($event) {
    this.monitorService.logEvent('selectFilter', ['CustomerTableComponent', 'addenda-repair', {
      $event
    }]);
    if ($event?.name == 'filterDropdown') {
      const query = `?$filter=( OrgId eq ${this.userDetail?.organizationDetail?.id} and CompanyOrgType eq '${$event.value.label}' and IsIndividual eq false)`;
      this.dropdownModelFilter.selectedOption = $event.value;
      this.hideShowDropdown('companyName');
      this.dropdownModelCompany = {
        ...this.dropdownModelCompany,
        selectedOption: [],
        options: [],
        displayValue: 'label',
        observable: this.calendarService.getCustomer(query),
        onObservableLoad: this.onObservableLoadCompanyData.bind(this)
      };
      setTimeout(() => {
        this.companyName?.getObservable();
      }, 100);
      this.updateApplyButtonState();
    } else if ($event.name == 'filterDropdownPerson') {
      this.dropdownModelFilterPerson.selectedOption = $event.value;
      switch ($event.value[this.dropdownModelFilterPerson.displayValue]?.toLowerCase()) {
        case 'retail - individual':
          this.hideShowDropdown('personName');
          this.nameTextBox.value = '';
          break;
        default:
          this.hideShowDropdown('');
          break;
      }
    } else if ($event?.name == 'companyDropdown') {
      this.dropdownModelCompany.selectedOption = $event.value;
      this.updateApplyButtonState();
    }
  }
  /**
   *
   * @param event
   */
  updateInput(event) {
    if (event.name == 'name') {
      this.nameTextBox.value = event.value;
      this.updateApplyButtonState();
    }
  }
  /**
   *
   * @param event
   */
  updateApplyButtonState() {
    let state = 'disabled';
    if (this.activeTab === this.activeTabOptions.PERSONAL) {
      if (this.nameTextBox.value && this.nameTextBox.value.toString().length >= 3) {
        state = 'secondary';
      }
    } else if (this.activeTab === this.activeTabOptions.COMPANY) {
      if (this.dropdownModelCompany.selectedOption?.length > 0 && this.input.companyName) {
        state = 'secondary';
      }
    }
    this.applyButtonModel.type = state;
  }
  /**
   * hide show dropdown
  */
  hideShowDropdown(key) {
    this.input[key] = true;
    Object.keys(this.input).forEach(value => {
      if (value != key) {
        this.input[value] = false;
      }
    });
  }
  /**
    Navigates to the specified menu item's URL using the Angular Router.
    @param {menuItem} item - The menu item to navigate to.
    @returns {void}
  */
  navigate(item) {
    const url = item.url;
    this.router.navigate([url]);
    if (this.dropdownModelFilter?.selectedOption) {
      this.input.companyName = false;
      this.dropdownModelFilter = {
        ...this.dropdownModelFilter,
        selectedOption: {}
      };
    }
    if (this.dropdownModelCompany?.selectedOption) {
      this.dropdownModelCompany = {
        ...this.dropdownModelCompany,
        selectedOption: []
      };
    }
    if (this.dropdownModelFilterPerson?.selectedOption) {
      this.input.personName = false;
      this.dropdownModelFilterPerson = {
        ...this.dropdownModelFilterPerson,
        selectedOption: {}
      };
    }
    if (this.nameTextBox?.value) {
      this.nameTextBox = {
        ...this.nameTextBox,
        value: ''
      };
    }
  }
  /**
    Applies a filter based on the active tab selected by the user.
    If the active tab is "COMPANY", it calls the "getCompanyCustomers" function.
    If the active tab is "PERSONAL", it calls the "getCustomers" function.
    @returns {void}
  */
  applyFilter() {
    if (this.activeTab === this.activeTabOptions.COMPANY) {
      this.paginationCompany = {
        ...this.paginationCompany,
        currentPage: 1
      };
      this.selectedCompanyForFilter = [...this.dropdownModelCompany.selectedOption];
      this.getCompanyCustomers();
      this.getTotalDueAmountCompany();
    } else if (this.activeTab === this.activeTabOptions.PERSONAL) {
      this.pagination = {
        ...this.pagination,
        currentPage: 1
      };
      this.textToSearch = (this.nameTextBox.value + '').trim();
      this.getCustomers();
      this.getTotalDueAmountPerson();
    }
  }
  /**
    Reset a filter based on the active tab selected by the user.
    If the active tab is "COMPANY", it calls the "getCompanyCustomers" function.
    If the active tab is "PERSONAL", it calls the "getCustomers" function.
    @returns {void}
  */
  reSetFilter() {
    if (this.activeTab === this.activeTabOptions.COMPANY) {
      this.dropdownModelCompany = {
        ...this.dropdownModelCompany,
        selectedOption: []
      };
      this.dropdownModelFilter = {
        ...this.dropdownModelFilter,
        selectedOption: {}
      };
      this.paginationCompany = {
        ...this.paginationCompany,
        currentPage: 1
      };
      this.input.companyName = false;
      this.selectedCompanyForFilter = [];
      this.updateApplyButtonState();
      this.getCompanyCustomers();
      this.getTotalDueAmountCompany();
    } else if (this.activeTab === this.activeTabOptions.PERSONAL) {
      this.nameTextBox = {
        ...this.nameTextBox,
        value: ''
      };
      this.pagination = {
        ...this.pagination,
        currentPage: 1
      };
      this.dropdownModelFilterPerson = {
        ...this.dropdownModelFilterPerson,
        selectedOption: {}
      };
      this.input.personName = false;
      this.textToSearch = '';
      this.getCustomers();
      this.getTotalDueAmountPerson();
    }
    this.updateApplyButtonState();
  }
  /**
    @param {any} items - The compnay items to update the form model with.
    @returns {void}
  */
  onObservableLoadCompanyData(items) {
    if (items && items.length > 0) {
      items.forEach((item, i) => {
        items[i] = {
          ...items[i],
          label: `${item.CompanyName}${item.LicenseNumber ? '-' + item.LicenseNumber : ''}`,
          html: `<span class="company-name-dropdown">${item.CompanyName}${item.LicenseNumber ? '-<i>' + item.LicenseNumber + '</i>' : ''}</span>`
        };
      });
      this.dropdownModelCompany = {
        ...this.dropdownModelCompany,
        options: items,
        selectedOption: items
      };
      this.updateApplyButtonState();
    }
  }
  /**
    @param {any} items - The compnay items to update the form model with.
    @returns {void}
  */
  onObservableLoadWorkProviderData(items) {
    if (items && items.length > 0) {
      const filteredItems = items.filter((item, i) => {
        return this.workProviderFromBooking.indexOf(item.label) !== -1 ? true : false;
      });
      this.workProvider.dropdownOptions = filteredItems;
    }
  }
}
CustomerTableComponent.currentPage = 1;
CustomerTableComponent.currentPageCompnay = 1;
CustomerTableComponent.ɵfac = function CustomerTableComponent_Factory(t) {
  return new (t || CustomerTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_7__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_8__.XaCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_9__.CalendarService));
};
CustomerTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: CustomerTableComponent,
  selectors: [["add-customer-table"]],
  viewQuery: function CustomerTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.companyName = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.workProvider = _t.first);
    }
  },
  decls: 15,
  vars: 8,
  consts: [[1, "main-customer-list", "customer-list", "fx-col"], [1, "header-container", "fx-0"], [3, "mode", "menuItems", "menuItemClick"], ["class", "filter", 4, "ngIf"], [1, "pending-amount", "fx-0"], ["class", "total-due-amount", 4, "ngIf"], [1, "table-section", "fx-1"], ["class", "table-container", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "filter"], [1, "company-filter-dropdown", 3, "dropdownModel", "selected"], ["workProvider", ""], ["class", "bodyShop-filter-dropdown", 3, "dropdownModel", "selected", 4, "ngIf"], [3, "buttonModel"], [1, "bodyShop-filter-dropdown", 3, "dropdownModel", "selected"], ["companyName", ""], [1, "person-filter-dropdown", 3, "dropdownModel", "selected"], ["filterPerson", ""], [3, "inputModel", "controlOutput", 4, "ngIf"], [3, "inputModel", "controlOutput"], [1, "total-due-amount"], [3, "class", 4, "ngIf"], [4, "ngIf"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "sortChanged", "pageChanged", "cellClicked", "i18n"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "pagination-wrapper"], [3, "pagination", "paginationChange"], ["paginator", ""], ["paginatorCompany", ""]],
  template: function CustomerTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "chq-tabs", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("menuItemClick", function CustomerTableComponent_Template_chq_tabs_menuItemClick_2_listener($event) {
        return ctx.navigate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CustomerTableComponent_div_3_Template, 6, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, CustomerTableComponent_div_4_Template, 6, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, CustomerTableComponent_div_6_Template, 6, 5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, CustomerTableComponent_div_7_Template, 6, 5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, CustomerTableComponent_div_9_Template, 4, 7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, CustomerTableComponent_div_10_Template, 4, 7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("mode", "button")("menuItems", ctx.customerListMenus);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL && (ctx.tableData == null ? null : ctx.tableData.length) > 0 && ctx.showTotalDueAmountPerson);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY && (ctx.tableDataCompany == null ? null : ctx.tableDataCompany.length) > 0 && ctx.showTotalDueAmountCompany);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_10__.ChqMatTableComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__.ChqInputComponent, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_12__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_13__.ChqButtonComponent, src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_1__.ChqPaginatorComponent, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_14__.ChqTabsComponent, src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_8__.XaCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: [".main-customer-list {\n  height: calc(100vh - (5px + 1.5vw) - (5px + 1.5vw + 58px + 1.6vw) - 76px);\n}\n.main-customer-list .header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 20px;\n}\n.main-customer-list .header-container .header-content {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n}\n.main-customer-list .header-container .filter {\n  display: flex;\n  align-items: flex-end;\n}\n.main-customer-list .header-container .filter chq-dropdown,\n.main-customer-list .header-container .filter chq-input {\n  position: relative;\n  width: 150px;\n  margin-left: 16px;\n  margin-top: 4px;\n}\n.main-customer-list .header-container .filter chq-button {\n  margin-left: 16px;\n}\n.main-customer-list .header-container .filter chq-dropdown.user-dropdown {\n  width: 200px;\n}\n.main-customer-list .header-container .filter chq-dropdown.person-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.retail-company-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.bodyShop-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.dealerShip-filter-dropdown {\n  width: 200px;\n}\n.main-customer-list .header-container .filter chq-dropdown.company-filter-dropdown {\n  width: 170px;\n}\n.main-customer-list .delete-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n  margin-bottom: 25px;\n}\n.main-customer-list .delete-container chq-button {\n  width: 180px;\n  height: 30px;\n}\n.main-customer-list .table-section {\n  overflow-y: auto;\n}\n.main-customer-list .cdk-column-status mat-icon {\n  height: 17px;\n  width: 17px;\n}\n.main-customer-list .total-due-amount {\n  padding-bottom: 18px;\n  display: flex;\n  justify-content: end;\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--xa-dark-gray);\n}\n.main-customer-list .pagination-wrapper {\n  margin-top: 15px;\n}\n.main-customer-list .company-name i, .main-customer-list .company-name-dropdown i {\n  font-weight: 600;\n}\n\n.mat-sort-header-arrow {\n  margin: -2px !important;\n}\n\n.customer-list .input-wrapper {\n  position: inherit !important;\n  top: 0 !important;\n}\n\n@media (orientation: portrait) {\n  mat-cell {\n    word-break: break-word;\n  }\n  .mat-sort-header-arrow {\n    margin: 0 !important;\n  }\n}\n::-webkit-scrollbar:horizontal {\n  height: 5px;\n}\n\n.table-wrapper {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvY3VzdG9tZXIvY3VzdG9tZXItbGlzdC9jdXN0b21lci10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlFQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUFRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQUNRO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBQ1o7QUFHWTs7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFEaEI7QUFZWTtFQUNJLGlCQUFBO0FBVmhCO0FBYVk7RUFDSSxZQUFBO0FBWGhCO0FBY1k7RUFDSSxZQUFBO0FBWmhCO0FBZVk7RUFDSSxZQUFBO0FBYmhCO0FBa0JJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWhCUjtBQWtCUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBaEJaO0FBb0JJO0VBQ0ksZ0JBQUE7QUFsQlI7QUFzQlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXBCWjtBQXdCSTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUF0QlI7QUF5Qkk7RUFDSSxnQkFBQTtBQXZCUjtBQTBCUTtFQUNJLGdCQUFBO0FBeEJaOztBQTZCQTtFQUNJLHVCQUFBO0FBMUJKOztBQThCSTtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7QUEzQlI7O0FBK0JBO0VBQ0k7SUFDSSxzQkFBQTtFQTVCTjtFQStCRTtJQUNJLG9CQUFBO0VBN0JOO0FBQ0Y7QUFnQ0E7RUFDSSxXQUFBO0FBOUJKOztBQWlDQTtFQUNJLDBDQUFBO0FBOUJKIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY3VzdG9tZXItbGlzdCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoNXB4ICsgMS41dncpIC0gKDVweCArIDEuNXZ3ICsgNThweCArIDEuNnZ3KSAtIDc2cHgpO1xyXG4gICAgLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOztcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWx0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICBjaHEtZHJvcGRvd24sXHJcbiAgICAgICAgICAgIGNocS1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gLmRhdGUtZmlsdGVyIHtcclxuICAgICAgICAgICAgLy8gICAgIHRvcDogLTdweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY2hxLWRyb3Bkb3due1xyXG4gICAgICAgICAgICAvLyAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGNocS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNocS1kcm9wZG93bi51c2VyLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hxLWRyb3Bkb3duLnBlcnNvbi1maWx0ZXItZHJvcGRvd24sICBjaHEtZHJvcGRvd24ucmV0YWlsLWNvbXBhbnktZmlsdGVyLWRyb3Bkb3duLCBjaHEtZHJvcGRvd24uYm9keVNob3AtZmlsdGVyLWRyb3Bkb3duLCAgY2hxLWRyb3Bkb3duLmRlYWxlclNoaXAtZmlsdGVyLWRyb3Bkb3due1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjaHEtZHJvcGRvd24uY29tcGFueS1maWx0ZXItZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZWxldGUtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAgICAgICBjaHEtYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1zZWN0aW9uIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jZGstY29sdW1uLXN0YXR1cyB7XHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxN3B4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbC1kdWUtYW1vdW50IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5jb21wYW55LW5hbWUsIC5jb21wYW55LW5hbWUtZHJvcGRvd257XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcclxuICAgIG1hcmdpbjogLTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tZXItbGlzdCB7XHJcbiAgICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIG1hdC1jZWxsIHtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 922:
/*!************************************************************!*\
  !*** ./src/app/modules/repair/customer/customer.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerTableModule": () => (/* binding */ CustomerTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var _customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-list/customer-table.component */ 85537);
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ 89179);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);














const route = [{
  path: ':userType',
  component: _customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomerTableComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
  }
}, {
  path: ':userType/:contactId/:id/:orderType',
  component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__.CustomerDetailsComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver
  }
}];
class CustomerTableModule {}
CustomerTableModule.ɵfac = function CustomerTableModule_Factory(t) {
  return new (t || CustomerTableModule)();
};
CustomerTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: CustomerTableModule
});
CustomerTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(route), _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomerTableModule, {
    declarations: [_customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomerTableComponent, _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__.CustomerDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ }),

/***/ 74743:
/*!******************************************************!*\
  !*** ./src/app/resolvers/versionControl.resolver.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionControlResolver": () => (/* binding */ VersionControlResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
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
    return this.commonService.checkVersion().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      this.commonService.hideLoading();
      const localVersion = localStorage.getItem('appVersion');
      const appVersion = res.buildRevision;
      if (localVersion && localVersion != appVersion) {
        localStorage.setItem('appVersion', appVersion);
        setTimeout(() => {
          location.reload();
        }, 10);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version available');
      } else {
        localStorage.setItem('appVersion', appVersion);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('new version is not available');
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
      this.commonService.hideLoading();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('data not available at this time');
    }));
  }
}
VersionControlResolver.ɵfac = function VersionControlResolver_Factory(t) {
  return new (t || VersionControlResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
VersionControlResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: VersionControlResolver,
  factory: VersionControlResolver.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 72541:
/*!*******************************************************!*\
  !*** ./src/app/services/customer/customer.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class CustomerService {
  /**
   * constructor
   * @param http
   */
  constructor(http) {
    this.http = http;
  }
  /**
   *
   * @param getCustomers
   * @returns observable
   * fake data have to remove once api is implemented
   */
  getCustomers(pagination, queryParams = null) {
    const skip = (pagination.currentPage - 1) * pagination.pageSize;
    queryParams = !queryParams ? `$top=${pagination.pageSize}&$skip=${skip}` : `$top=${pagination.pageSize}&$skip=${skip}&${queryParams}`;
    const orderBy = `&$orderby=${pagination.orderBy} ${pagination.sortDirection}`;
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/customerinvoice?${queryParams}${orderBy}&count=true`;
    return this.http.get(url);
  }
  /**
   *
   * @param   getCompanyCustomers
   * @returns observable
   * fake data have to remove once api is implemented
   */
  getCompanyCustomers(pagination, queryParams = '') {
    const skip = (pagination.currentPage - 1) * pagination.pageSize;
    queryParams = !queryParams ? `$top=${pagination.pageSize}&$skip=${skip}` : `$top=${pagination.pageSize}&$skip=${skip}&${queryParams}`;
    const orderBy = `&$orderby=${pagination.orderBy} ${pagination.sortDirection}`;
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/companyinvoice?${queryParams}${orderBy}&count=true`;
    return this.http.get(url);
  }
  /**
   *
   * @param   getCompanyCustomers
   * @returns observable
   * fake data have to remove once api is implemented
   */
  getCompanyWorkProviders(queryParams = '') {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/companyinvoice?${queryParams}`;
    return this.http.get(url);
  }
  /**
    Retrieves repair orders from a mock data source.
    @param {ApiPagination} pagination - The pagination object containing the page number and page size.
    @param {string} [queryParams] - Optional query parameters to filter the results.
    @returns {Observable} - An observable that emits the retrieved repair orders.
  */
  getReapirOrders(customerId, userType, pagination) {
    const skip = (pagination.currentPage - 1) * pagination.pageSize;
    const queryParams = `$top=${pagination.pageSize}&$skip=${skip}`;
    const orderBy = `&$orderby=${pagination.orderBy} ${pagination.sortDirection}`;
    let filter = '';
    if (userType === 'company') {
      filter = `&$filter=(companyId eq ${customerId})&companyIndividualType=1`;
    } else {
      filter = `&$filter=(contactId eq ${customerId})&companyIndividualType=2`;
    }
    // const filter = ''
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/repairorder?${queryParams}${orderBy}${filter}&count=true`;
    return this.http.get(url);
  }
  /**
    Retrieves a list of cases based on the provided pagination and query parameters.
    @param {ApiPagination} pagination - An object containing information about the pagination to be applied to the results.
    @param {string} [queryParams] - An optional string containing any additional query parameters to be included in the request.
    @returns {Observable} - An Observable that emits the retrieved list of cases.
  */
  getCases(customerId, userType, pagination) {
    const skip = (pagination.currentPage - 1) * pagination.pageSize;
    const queryParams = `$top=${pagination.pageSize}&$skip=${skip}`;
    const orderBy = `&$orderby=${pagination.orderBy} ${pagination.sortDirection}`;
    let filter = '';
    if (userType === 'company') {
      filter = `&$filter=(companyId eq ${customerId})&companyIndividualType=1`;
    } else {
      filter = `&$filter=(contactId eq ${customerId})&companyIndividualType=2`;
    }
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/repairestimation?${queryParams}${orderBy}${filter}&count=true`;
    return this.http.get(url);
  }
  /**
    Retrieves total due amount compnay, provided query parameters.
    @param {string} [queryParams] - An optional string containing any additional query parameters to be included in the request.
    @returns {Observable} - An Observable that emits the retrieved list of cases.
  */
  getTotalDueAmountCompany(queryParams = '') {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/companyinvoice?${queryParams}`);
  }
  /**
    Retrieves total due amount compnay, provided query parameters.
    @param {string} [queryParams] - An optional string containing any additional query parameters to be included in the request.
    @returns {Observable} - An Observable that emits the retrieved list of cases.
  */
  getTotalDueAmountPerson(queryParams = '') {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/customerinvoice?${queryParams}`);
  }
  /**
    Retrieves company details
    @returns {Observable} - An Observable that emits the retrieved list of cases.
  */
  getCompanyDetails(companyId) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/companyinvoice/${companyId}`);
  }
  /**
    Retrieves Customer details
    @returns {Observable} - An Observable that emits the retrieved list of cases.
  */
  getCustomerDetails(customerId) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/customerinvoice/${customerId}`);
  }
}
CustomerService.ɵfac = function CustomerService_Factory(t) {
  return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CustomerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustomerService,
  factory: CustomerService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_repair_customer_customer_module_ts.js.map