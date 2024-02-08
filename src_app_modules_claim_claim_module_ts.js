"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_claim_claim_module_ts"],{

/***/ 69281:
/*!*******************************************************!*\
  !*** ./src/app/config/display/claims-table-config.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimAGarageTableConfig": () => (/* binding */ ClaimAGarageTableConfig),
/* harmony export */   "ClaimALLTableConfig": () => (/* binding */ ClaimALLTableConfig),
/* harmony export */   "ClaimAssignedTableConfig": () => (/* binding */ ClaimAssignedTableConfig),
/* harmony export */   "ClaimDashboardTableConfig": () => (/* binding */ ClaimDashboardTableConfig)
/* harmony export */ });
const ClaimALLTableConfig = {
  columns: [{
    id: 'sno',
    width: '60px',
    header: {
      text: 'sno',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    selector: {
      field: 'sno'
    },
    widget: {
      type: 'text'
      /*config: {
              style: 'color: #3B82F6; cursor: pointer;',
            }*/
    }
  }, {
    id: 'ClaimGuid',
    width: '0px',
    style: 'display: none',
    header: {
      text: 'ClaimGuid',
      tooltip: '',
      style: 'display: none; max-width: 0'
    },
    cellStyle: 'display: none; max-width: 0',
    selector: {
      field: 'ClaimGuid'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'ClaimId',
    width: '0px',
    style: 'display: none',
    header: {
      text: 'ClaimId',
      tooltip: '',
      style: 'display: none; max-width: 0'
    },
    cellStyle: 'display: none; max-width: 0',
    selector: {
      field: 'Id'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'CustomerName',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'CustomerName'
    },
    header: {
      text: 'customer_name',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'ClaimNo',
    sortable: true,
    width: 'auto',
    header: {
      text: 'claim_no',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    selector: {
      field: 'ClaimNo'
    },
    widget: {
      type: 'text'
      /*config: {
              style: 'color: #3B82F6; cursor: pointer;',
            }*/
    }
  }, {
    id: 'FnolId',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'FnolId'
    },
    header: {
      text: 'fnol_id',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'PolicyNo',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'PolicyNo'
    },
    header: {
      text: 'policy_number',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'VehicleName',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'VehicleName'
    },
    header: {
      text: 'vehicle_name',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'VehicleNumber',
    sortable: true,
    width: '100px',
    selector: {
      field: 'VehicleNumber'
    },
    header: {
      text: 'vehicle_number',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'CreatedDate',
    sortable: true,
    width: '105px',
    selector: {
      field: 'CreatedDate'
    },
    header: {
      text: 'creation_date',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'date'
    }
  }, {
    id: 'AssigneeName',
    sortable: true,
    width: '220px',
    selector: {
      field: 'dropDownModel'
    },
    header: {
      text: 'assigned',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'dropdown',
      config: {
        style: 'width: 100%;'
      }
    }
  }, {
    id: 'Status',
    sortable: true,
    width: '180px',
    selector: {
      field: 'Status'
    },
    header: {
      text: 'status',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'status'
    }
  }, {
    id: 'action',
    width: '0px',
    style: 'display: none',
    selector: {
      field: 'mode'
    },
    header: {
      text: 'action',
      tooltip: '',
      style: 'display: none; max-width: 0'
    },
    cellStyle: 'display: none; max-width: 0',
    widget: {
      type: 'action',
      config: {
        svgIcon: 'edit',
        style: 'fill: var(--xa-black) !important'
      }
    }
  }]
};
const ClaimAssignedTableConfig = {
  columns: [{
    id: 'sno',
    width: '60px',
    header: {
      text: 'sno',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    selector: {
      field: 'sno'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'ClaimGuid',
    width: '0px',
    style: 'display: none',
    header: {
      text: 'ClaimGuid',
      tooltip: '',
      style: 'display: none; max-width: 0'
    },
    cellStyle: 'display: none; max-width: 0',
    selector: {
      field: 'ClaimGuid'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'CustomerName',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'CustomerName'
    },
    header: {
      text: 'customer_name',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'ClaimNo',
    sortable: true,
    width: 'auto',
    header: {
      text: 'claim_no',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    selector: {
      field: 'ClaimNo'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'FnolId',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'FnolId'
    },
    header: {
      text: 'fnol_id',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'PolicyNo',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'PolicyNo'
    },
    header: {
      text: 'policy_number',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'VehicleName',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'VehicleName'
    },
    header: {
      text: 'vehicle_name',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'VehicleNumber',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'VehicleNumber'
    },
    header: {
      text: 'vehicle_number',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'CreatedDate',
    sortable: true,
    width: '105px',
    selector: {
      field: 'CreatedDate'
    },
    header: {
      text: 'creation_date',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'date',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'Severity',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'Severity'
    },
    header: {
      text: 'damage_severity',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'Status',
    sortable: true,
    width: '180px',
    selector: {
      field: 'Status'
    },
    header: {
      text: 'status',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'status',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }]
};
const ClaimDashboardTableConfig = {
  columnSpacing: '0px',
  columns: [{
    id: 'ClaimGuid',
    width: '0px',
    style: 'display: none',
    header: {
      text: 'ClaimGuid',
      tooltip: '',
      style: 'display: none; max-width: 0'
    },
    cellStyle: 'display: none; max-width: 0',
    selector: {
      field: 'ClaimGuid'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'ClaimNo',
    sortable: false,
    style: 'padding-left: 0px !important;',
    header: {
      text: 'claim_no',
      tooltip: '',
      style: 'padding-left: 10px;'
    },
    selector: {
      field: 'ClaimNo'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'FnolId',
    sortable: false,
    selector: {
      field: 'FnolId'
    },
    header: {
      text: 'fnol_id',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'PolicyNo',
    sortable: false,
    selector: {
      field: 'PolicyNo'
    },
    header: {
      text: 'policy_number',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'Vehicle(Make, Model, License Plate)',
    sortable: false,
    width: '139px',
    selector: {
      field: 'VehicleName'
    },
    header: {
      text: 'vehicle_name',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'text',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'CreatedDate',
    sortable: false,
    selector: {
      field: 'CreatedDate'
    },
    header: {
      text: 'creation_date',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'date',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }, {
    id: 'Status',
    sortable: false,
    selector: {
      field: 'Status'
    },
    header: {
      text: 'status',
      tooltip: '',
      style: 'padding-left: 5px;'
    },
    widget: {
      type: 'status',
      config: {
        style: 'padding-left: 5px;'
      }
    }
  }]
};
const ClaimAGarageTableConfig = {
  columns: [{
    id: 'sno',
    width: '60px',
    header: {
      text: 'sno',
      tooltip: ''
    },
    selector: {
      field: 'sno'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'ClaimGuid',
    width: '0px',
    style: 'display: none',
    header: {
      text: 'ClaimGuid',
      tooltip: '',
      style: 'display: none; max-width: 0'
    },
    cellStyle: 'display: none; max-width: 0',
    selector: {
      field: 'ClaimGuid'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'ClaimId',
    width: '0px',
    style: 'display: none',
    header: {
      text: 'ClaimId',
      tooltip: '',
      style: 'display: none; max-width: 0'
    },
    cellStyle: 'display: none; max-width: 0',
    selector: {
      field: 'Id'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'ClaimNo',
    sortable: true,
    width: 'auto',
    header: {
      text: 'claim_no',
      tooltip: ''
    },
    selector: {
      field: 'ClaimNo'
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'ApprovedClaimAmount',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'ApprovedClaimAmount'
    },
    header: {
      text: 'Approved Claim Amount',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'Status',
    sortable: true,
    selector: {
      field: 'Status'
    },
    header: {
      text: 'status',
      tooltip: ''
    },
    widget: {
      type: 'html'
    }
  }, {
    id: 'InvoicedAmount',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'InvoicedAmount'
    },
    header: {
      text: 'Invoiced Amount',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'VehicleName',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'VehicleName'
    },
    header: {
      text: 'Vehicle',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'PhoneNumber',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'PhoneNumber'
    },
    header: {
      text: 'Phone number',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'ExcessPayable',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'ExcessPayable'
    },
    header: {
      text: 'Excess payable',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'DamagesSeverity',
    sortable: true,
    width: 'auto',
    selector: {
      field: 'DamagesSeverity'
    },
    header: {
      text: 'Damage severity',
      tooltip: ''
    },
    widget: {
      type: 'text'
    }
  }, {
    id: 'Action',
    sortable: false,
    width: '150px',
    selector: {
      field: 'Action'
    },
    header: {
      text: 'Action',
      tooltip: ''
    },
    widget: {
      type: 'html'
    }
  }]
};

/***/ }),

/***/ 73231:
/*!****************************************************************************!*\
  !*** ./src/app/modules/claim/claim-dashboard/claim-dashboard.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimDashboardComponent": () => (/* binding */ ClaimDashboardComponent)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/display/claims-table-config */ 69281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _widgets_chq_chart_chq_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../widgets/chq-chart/chq-chart.component */ 4501);
/* harmony import */ var _widgets_xa_table_xa_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../widgets/xa-table/xa-table.component */ 26435);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);




















const _c0 = ["filter"];
const _c1 = ["chart"];
function ClaimDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 49)(6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 52)(9, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 9, "total_fnol_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "setting-round-fnol");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.fnolDetails == null ? null : ctx_r1.fnolDetails.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("FNOL ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 11, "today"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.fnolDetails == null ? null : ctx_r1.fnolDetails.todayCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("FNOL ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 13, "this_week"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.fnolDetails == null ? null : ctx_r1.fnolDetails.weekCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("FNOL ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](23, 15, "this_month"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.fnolDetails == null ? null : ctx_r1.fnolDetails.monthCount);
  }
}
function ClaimDashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 49)(6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 52)(9, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 9, "total_active_claims"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r2.claimDetails == null ? null : ctx_r2.claimDetails.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claims ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 11, "today"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r2.claimDetails == null ? null : ctx_r2.claimDetails.todayCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claims ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 13, "this_week"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r2.claimDetails == null ? null : ctx_r2.claimDetails.weekCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Claims ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](23, 15, "this_month"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r2.claimDetails == null ? null : ctx_r2.claimDetails.monthCount);
  }
}
const _c2 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function ClaimDashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 49)(6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 52)(9, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, "total_claim_approved_cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "skate-round");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBindV"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](11, _c2, ctx_r3.dashboardData == null ? null : ctx_r3.dashboardData.claimEstimateDetail == null ? null : ctx_r3.dashboardData.claimEstimateDetail.totalCost, ctx_r3.i18n.currencySymbol, ctx_r3.i18n.digitsInfo, ctx_r3.i18n.locale, ctx_r3.i18n.position)), " ");
  }
}
function ClaimDashboardComponent_div_20_chq_chart_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "chq-chart", 60, 61);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("series", ctx_r10.fnolChartOptions.series)("chart", ctx_r10.fnolChartOptions.chart)("labels", ctx_r10.fnolChartOptions.labels)("responsive", ctx_r10.fnolChartOptions.responsive)("colors", ctx_r10.fnolChartOptions.colors)("stroke", ctx_r10.fnolChartOptions.stroke)("dataLabels", ctx_r10.fnolChartOptions.dataLabels)("plotOptions", ctx_r10.fnolChartOptions.plotOptions)("states", ctx_r10.fnolChartOptions.states)("tooltip", ctx_r10.fnolChartOptions.tooltip);
  }
}
function ClaimDashboardComponent_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "estimate-no-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, "no_result_dashboard"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 5, "no_repair_type_dashboard"), " ");
  }
}
function ClaimDashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ClaimDashboardComponent_div_20_chq_chart_5_Template, 2, 10, "chq-chart", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ClaimDashboardComponent_div_20_div_6_Template, 8, 7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, "claim_approval_rate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r4.dashboardData == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail) && !((ctx_r4.dashboardData == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail.approvePercentage) === 0 && (ctx_r4.dashboardData == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail.otherPercentage) === 0 && (ctx_r4.dashboardData == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail.unApprovePercentage) === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx_r4.dashboardData == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail) || (ctx_r4.dashboardData == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail.approvePercentage) === 0 && (ctx_r4.dashboardData == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail.otherPercentage) === 0 && (ctx_r4.dashboardData == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail == null ? null : ctx_r4.dashboardData.claimapproveRejectDetail.unApprovePercentage) === 0);
  }
}
function ClaimDashboardComponent_div_23_chq_chart_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "chq-chart", 68, 61);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("series", ctx_r13.fnolApprovedRejectedOptions.series)("chart", ctx_r13.fnolApprovedRejectedOptions.chart)("labels", ctx_r13.fnolApprovedRejectedOptions.labels)("responsive", ctx_r13.fnolApprovedRejectedOptions.responsive)("colors", ctx_r13.fnolApprovedRejectedOptions.colors)("stroke", ctx_r13.fnolApprovedRejectedOptions.stroke)("dataLabels", ctx_r13.fnolApprovedRejectedOptions.dataLabels)("plotOptions", ctx_r13.fnolApprovedRejectedOptions.plotOptions)("states", ctx_r13.fnolApprovedRejectedOptions.states)("legend", ctx_r13.fnolApprovedRejectedOptions.legend)("tooltip", ctx_r13.fnolApprovedRejectedOptions.tooltip);
  }
}
function ClaimDashboardComponent_div_23_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "estimate-no-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, "no_result_dashboard"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 5, "no_repair_type_dashboard"), " ");
  }
}
function ClaimDashboardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ClaimDashboardComponent_div_23_chq_chart_5_Template, 2, 11, "chq-chart", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ClaimDashboardComponent_div_23_div_6_Template, 8, 7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, "fnol_approved_rejected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r5.dashboardData == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail) && !((ctx_r5.dashboardData == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail.approvePercentage) === 0 && (ctx_r5.dashboardData == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail.otherPercentage) === 0 && (ctx_r5.dashboardData == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail.unApprovePercentage) === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx_r5.dashboardData == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail) || (ctx_r5.dashboardData == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail.approvePercentage) === 0 && (ctx_r5.dashboardData == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail.otherPercentage) === 0 && (ctx_r5.dashboardData == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail == null ? null : ctx_r5.dashboardData.fNOLapproveRejectDetail.unApprovePercentage) === 0);
  }
}
function ClaimDashboardComponent_div_26_chq_chart_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "chq-chart", 68, 61);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("series", ctx_r16.fnolFraudDetectedOptions.series)("chart", ctx_r16.fnolFraudDetectedOptions.chart)("labels", ctx_r16.fnolFraudDetectedOptions.labels)("responsive", ctx_r16.fnolFraudDetectedOptions.responsive)("colors", ctx_r16.fnolFraudDetectedOptions.colors)("stroke", ctx_r16.fnolFraudDetectedOptions.stroke)("dataLabels", ctx_r16.fnolFraudDetectedOptions.dataLabels)("plotOptions", ctx_r16.fnolFraudDetectedOptions.plotOptions)("states", ctx_r16.fnolFraudDetectedOptions.states)("legend", ctx_r16.fnolFraudDetectedOptions.legend)("tooltip", ctx_r16.fnolFraudDetectedOptions.tooltip);
  }
}
function ClaimDashboardComponent_div_26_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "estimate-no-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, "no_result_dashboard"), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 5, "no_repair_type_dashboard"), " ");
  }
}
function ClaimDashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ClaimDashboardComponent_div_26_chq_chart_5_Template, 2, 11, "chq-chart", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ClaimDashboardComponent_div_26_div_6_Template, 8, 7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, "fraud_against_total_case"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r6.dashboardData == null ? null : ctx_r6.dashboardData.claimFraudDetail) && !((ctx_r6.dashboardData == null ? null : ctx_r6.dashboardData.claimFraudDetail == null ? null : ctx_r6.dashboardData.claimFraudDetail.totalReceived) === 0 && (ctx_r6.dashboardData == null ? null : ctx_r6.dashboardData.claimFraudDetail == null ? null : ctx_r6.dashboardData.claimFraudDetail.detected) === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx_r6.dashboardData == null ? null : ctx_r6.dashboardData.claimFraudDetail) || (ctx_r6.dashboardData == null ? null : ctx_r6.dashboardData.claimFraudDetail == null ? null : ctx_r6.dashboardData.claimFraudDetail.totalReceived) === 0 && (ctx_r6.dashboardData == null ? null : ctx_r6.dashboardData.claimFraudDetail == null ? null : ctx_r6.dashboardData.claimFraudDetail.detected) === 0);
  }
}
function ClaimDashboardComponent_ng_template_69_Template(rf, ctx) {}
const colorsClaimStatus = {
  'Approved': '#0FCA7A',
  'UnApproved': '#00C7F2',
  'Others': '#F7A23B'
};
const colorsApprovedRejected = {
  'Approved': '#00C7F2',
  'Rejected': '#F75D5F',
  'Others': '#F7A23B'
};
class ClaimDashboardComponent {
  /**
   * constructor
   */
  constructor(commonService, router, claimService, caseService, formBuilder) {
    this.commonService = commonService;
    this.router = router;
    this.claimService = claimService;
    this.caseService = caseService;
    this.formBuilder = formBuilder;
    this.dashboardMenuItems = [{
      name: 'KPI Dashboard',
      displayName: 'KPI Dashboard',
      icon: '',
      url: '',
      title: '',
      subTitle: ''
    }];
    //filter
    this.filterDataLoaded = false;
    this.userDetail = null;
    this.filterForm = this.formBuilder.group({
      org: [],
      policyCoverType: []
    });
    this.filterModal = [{
      placeHolder: 'select_type',
      label: 'organization',
      name: 'org',
      value: '',
      type: 'select',
      displayValue: 'label',
      fieldValue: 'value',
      options: []
    }, {
      placeHolder: 'All',
      name: 'policyCoverType',
      label: 'policy_cover_type',
      value: '',
      type: 'select',
      displayValue: 'label',
      fieldValue: 'value',
      options: []
    }];
    this.creationStartDateTextBox = {
      placeHolder: 'creation_date_from',
      label: 'creation_date_from',
      name: 'fromDate',
      value: dayjs__WEBPACK_IMPORTED_MODULE_0__().subtract(6, 'month').toISOString(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'year').toDate(),
      type: 'date'
    };
    this.creationEndDateTextBox = {
      placeHolder: 'creation_date_to',
      label: 'creation_date_to',
      name: 'toDate',
      value: dayjs__WEBPACK_IMPORTED_MODULE_0__().toISOString(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'year').toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      type: 'date'
    };
    this.applyButton = {
      label: 'apply',
      type: 'primary'
    };
    this.resetButton = {
      label: 'reset_all',
      type: 'outline'
    };
    //
    this.isSummaryLoading = false;
    this.configData = src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_2__.ClaimDashboardTableConfig;
    this.fileClaimButton = {
      label: 'file_a_claim',
      type: 'primary',
      icon: 'file-claim',
      iconColor: 'white',
      onclick: this.fileClaim.bind(this)
    };
    this.donotChartOptions = () => {
      return {
        series: [],
        chart: {
          type: 'donut',
          height: 250
        },
        labels: [],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        colors: [],
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#fff'],
            fontSize: '8px'
          },
          formatter: function (val) {
            return val.toFixed(2) + '%';
          }
        },
        stroke: {
          width: 0
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false
              }
            }
          }
        },
        states: {
          hover: {
            filter: {
              type: 'none'
            }
          },
          active: {
            filter: {
              type: 'darken',
              value: 0.75
            }
          }
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'left'
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: function (val) {
              return val.toFixed(2) + '%';
            }
          }
        }
      };
    };
    /**
     * handle cell click
     * @param row
     * @param column
     * @param event
     * @returns
     */
    this.handleCellClick = (row, column) => {
      if (column.id !== 'ClaimNo') {
        return;
      }
      const claimId = row.find(c => c.id === 'ClaimGuid')?.result?.value;
      this.router.navigate(['claim/claim-detail/' + claimId + '/customer-view']);
    };
    this.fnolChartOptions = this.donotChartOptions();
    this.fnolApprovedRejectedOptions = this.donotChartOptions();
    this.fnolFraudDetectedOptions = this.donotChartOptions();
    this.i18n = this.commonService.geti18nInfo();
    this.commonService.userProfileData.subscribe(res => {
      this.userDetail = res?.data;
      if (this.userDetail) {
        this.organizationId = this.userDetail.organizationDetail?.id;
      }
    });
  }
  /**
   * ng on init
   */
  ngOnInit() {
    //this.isSummaryLoading = true;
    this.tableConfig = this.configData;
    this.getClaims();
    this.getDashboardData();
  }
  /**
   * get dashboard data
   */
  getDashboardData(payload) {
    if (!payload) {
      payload = {
        'orgnization': this.organizationId?.toString(),
        'startDate': null,
        'endDate': null,
        'policyType': ''
      };
    }
    this.claimService.getDashboardData(payload).subscribe({
      next: resp => {
        console.log(resp);
        if (resp?.data) {
          this.dashboardData = resp.data;
          this.fnolDetails = this.dashboardData?.fNOLDetail;
          this.claimDetails = this.dashboardData?.claimDetail;
          this.getDashboardClaimApprovalRateInformation();
          this.getDashboardFNOLApprovedRejectedInformation();
          this.getDashboardFNOLFraudDetectionInformation();
        }
        this.commonService.hideLoading();
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * file a claim
   */
  fileClaim() {
    this.router.navigate(['claim/claim-detail/0']);
  }
  /**
   * navigate to other tab
   * @param $event
   */
  navigate($event) {
    //navigate to other tab
  }
  /**
   * getClaims
   */
  getClaims() {
    this.commonService.showLoading();
    this.claimService.getTopFiveClaimList().subscribe({
      next: resp => {
        this.tableData = resp?.value.map(x => {
          x.Status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.STATUS_TEXT_DICT[x.Status];
          return x;
        });
        this.commonService.hideLoading();
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
    Retrieves dashboard information.
    @returns {void}
  */
  getDashboardClaimApprovalRateInformation() {
    const data = this.dashboardData.claimapproveRejectDetail;
    const claimapproveRejectDetail = [];
    Object.keys(data).forEach(element => {
      let status = '';
      if (element === 'approvePercentage') {
        status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Approved;
      } else if (element === 'unApprovePercentage') {
        status = 'UnApproved';
      } else {
        status = 'Others';
      }
      claimapproveRejectDetail.push({
        claimStatusPercentage: data[element],
        claimStatusName: status
      });
    });
    this.fnolChartOptions = {
      ...this.fnolChartOptions,
      series: claimapproveRejectDetail.map(ele => ele.claimStatusPercentage),
      labels: claimapproveRejectDetail.map(ele => ele.claimStatusName),
      colors: claimapproveRejectDetail.map(ele => colorsClaimStatus[ele.claimStatusName] || '#000')
    };
  }
  /**
   * get FNOL approved rejected information
   */
  getDashboardFNOLApprovedRejectedInformation() {
    const data = this.dashboardData.fNOLapproveRejectDetail;
    const fnolapproveRejectDetail = [];
    Object.keys(data).forEach(element => {
      let status = '';
      if (element === 'approvePercentage') {
        status = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Approved;
      } else if (element === 'otherPercentage') {
        status = 'Others';
      } else {
        status = 'Rejected';
      }
      fnolapproveRejectDetail.push({
        fnolApprovalRejectionPercentage: data[element],
        //fnolApprovalRejectionPercentage: status === CLAIM_STATUS.Approved ? 60 : 40,
        fnolStatus: status
      });
    });
    this.fnolApprovedRejectedOptions = {
      ...this.fnolApprovedRejectedOptions,
      series: fnolapproveRejectDetail.map(ele => ele.fnolApprovalRejectionPercentage),
      labels: fnolapproveRejectDetail.map(ele => ele.fnolStatus),
      colors: fnolapproveRejectDetail.map(ele => colorsApprovedRejected[ele.fnolStatus] || '#000')
    };
  }
  /**
   * get FNOL Fraud detection information
   */
  getDashboardFNOLFraudDetectionInformation() {
    const data = this.dashboardData.claimFraudDetail;
    const claimFraudDetail = [];
    Object.keys(data).forEach(element => {
      let status = '';
      let color = '';
      if (element === 'detected') {
        status = 'Fraud Detected';
        color = '#F7A23B';
      } else {
        status = 'Total Cases Received';
        color = '#5598EB';
      }
      claimFraudDetail.push({
        fraudDetectPercent: data[element],
        label: status,
        color: color
      });
    });
    this.fnolFraudDetectedOptions = {
      ...this.fnolFraudDetectedOptions,
      series: claimFraudDetail.map(ele => ele.fraudDetectPercent),
      labels: claimFraudDetail.map(ele => ele.label),
      colors: claimFraudDetail.map(ele => ele.color || '#000')
    };
  }
  /**
   * open filter
   */
  openFilter() {
    if (!this.filterDataLoaded) {
      this.commonService.showLoading();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.forkJoin)([this.caseService.getOrganizations(), this.claimService.getClaimLookups('CLMPolicyType')]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(([orgList, policyTypes]) => {
        return {
          orgList,
          policyTypes
        };
      })).subscribe(result => {
        this.filterModal[0] = {
          ...this.filterModal[0],
          selectedOption: {
            'label': this.userDetail?.organizationDetail.name,
            'value': this.userDetail?.organizationDetail.id
          },
          options: result.orgList?.data.map(x => {
            return {
              label: x.name,
              value: x.id
            };
          })
        };
        this.filterModal[1] = {
          ...this.filterModal[1],
          options: result.policyTypes?.data.map(x => {
            return {
              label: x.name,
              value: x.id
            };
          })
        };
        this.filterDataLoaded = true;
        this.commonService.hideLoading();
        this.filter.open();
      });
    } else {
      this.filter.open();
    }
  }
  /**
  * onFormUpdate
  */
  onFormUpdate(output) {
    if (output.name === 'org') {
      this.filterModal[0] = {
        ...this.filterModal[0],
        selectedOption: output.value
      };
      if (output.value) {
        this.filterForm.get(output.name).setValue(output.value?.value);
      }
    } else if (output.name === 'policyCoverType') {
      this.filterModal[1] = {
        ...this.filterModal[1],
        selectedOption: output.value
      };
      this.filterForm.get(output.name).setValue(output.value?.label);
    } else if (output.name == 'fromDate') {
      this.creationStartDateTextBox.value = output.value;
      this.creationEndDateTextBox.minDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(output.value).toDate();
    } else if (output.name == 'toDate') {
      this.creationEndDateTextBox.value = output.value;
    }
  }
  /**
  *applyFilter
  */
  applyFilter() {
    this.filter.close();
    const payload = this.getFilterQuery();
    if (!Object.hasOwn(payload, 'orgnization')) {
      payload['orgnization'] = this.filterModal[0].selectedOption?.value?.toString();
    }
    this.getDashboardData(payload);
  }
  /**
  *resetFilter
  */
  resetFilter() {
    this.filterModal[0] = {
      ...this.filterModal[0],
      selectedOption: ''
    };
    if (this.userDetail?.organizationDetail?.id) {
      this.filterForm.get('org').setValue(this.userDetail?.organizationDetail.id);
      this.filterModal[0] = {
        ...this.filterModal[0],
        selectedOption: {
          'label': this.userDetail?.organizationDetail.name,
          'value': this.userDetail?.organizationDetail.id
        }
      };
    }
    this.filterModal[1] = {
      ...this.filterModal[1],
      selectedOption: []
    };
    this.creationEndDateTextBox = {
      ...this.creationEndDateTextBox,
      value: dayjs__WEBPACK_IMPORTED_MODULE_0__().toISOString(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'year').toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate()
    };
    this.creationStartDateTextBox = {
      ...this.creationStartDateTextBox,
      value: dayjs__WEBPACK_IMPORTED_MODULE_0__().subtract(6, 'month').toISOString(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'year').toDate()
    };
    this.filterForm.reset();
  }
  /**
  *
  * @returns
  */
  getFilterQuery() {
    const filterPayLoad = {};
    if (this.filterDataLoaded) {
      const filterValue = this.filterForm?.value;
      Object.keys(filterValue).forEach(key => {
        switch (key) {
          case 'org':
            if (filterValue.org) {
              filterPayLoad['orgnization'] = filterValue.org.toString();
            }
            break;
          case 'policyCoverType':
            if (filterValue.policyCoverType) {
              filterPayLoad['policyType'] = filterValue.policyCoverType;
            }
            break;
        }
      });
      //creation start to end date range
      if (this.creationStartDateTextBox.value && this.creationEndDateTextBox.value) {
        const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(this.creationStartDateTextBox.value).format('YYYY-MM-DDT00:00:00');
        const endDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(this.creationEndDateTextBox.value).format('YYYY-MM-DDT00:00:00');
        filterPayLoad['startDate'] = startDate;
        filterPayLoad['endDate'] = endDate;
      }
    }
    return filterPayLoad;
  }
  static #_ = this.ɵfac = function ClaimDashboardComponent_Factory(t) {
    return new (t || ClaimDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_4__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_5__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: ClaimDashboardComponent,
    selectors: [["app-claim-dashboard"]],
    viewQuery: function ClaimDashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    decls: 71,
    vars: 34,
    consts: [[1, "claim-summary", "fx-col", "mt-0"], [1, "row", "filter-section", "fx-0", "fx-row"], [1, "tab-wrapper"], [3, "mode", "menuItems", "menuItemClick"], ["tabs", ""], [1, "filter"], [3, "svgIcon", "click"], [1, "fx-1", "dashboard-container"], [1, "row"], [1, "col-4"], [1, "card", "card-text"], ["class", "fnol-data fx-col", 4, "ngIf", "ngIfElse"], [1, "col-4", "mt-30"], [1, "card"], [4, "ngIf", "ngIfElse"], [1, "claim-list-wrapper", "fx-col"], [1, "claim-list-header", "fx-row"], [1, "header-text"], [1, "btn-file-claim", 3, "buttonModel"], [1, "claim-list-content"], [1, "tab-content", "fx-1"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "cellClicked", "i18n"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "col-12"], [3, "inputModel", "controlOutput"], [1, "col-12", "flex", 2, "gap", "10px"], [1, "date-filter", 3, "inputModel", "controlOutput"], [1, "footer"], [1, "col-6"], [3, "buttonModel", "click"], [1, "footer-full-wrapper", "estimate-details-footer"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png", "alt", ""], ["loading", ""], [1, "fnol-data", "fx-col"], [1, "fnol-data-details", "fx-row"], [1, "fnol-data-header"], [1, "fnol-icon"], [1, "div-fnol"], [3, "svgIcon"], [1, "fnol-data-summary", "fx-col"], [1, "card-description"], [1, "div-claim"], [1, "div-total"], [1, "graph-title"], [1, "mt-30"], [3, "series", "chart", "labels", "responsive", "colors", "stroke", "dataLabels", "plotOptions", "states", "tooltip", 4, "ngIf"], ["class", "dashboard-no-data-found  mt-30", 4, "ngIf"], [3, "series", "chart", "labels", "responsive", "colors", "stroke", "dataLabels", "plotOptions", "states", "tooltip"], ["chart", ""], [1, "dashboard-no-data-found", "mt-30"], [1, "no-data-svg", 3, "svgIcon"], [1, "no-data-text"], [1, ""], [3, "series", "chart", "labels", "responsive", "colors", "stroke", "dataLabels", "plotOptions", "states", "legend", "tooltip", 4, "ngIf"], ["class", "dashboard-no-data-found mt-30", 4, "ngIf"], [3, "series", "chart", "labels", "responsive", "colors", "stroke", "dataLabels", "plotOptions", "states", "legend", "tooltip"]],
    template: function ClaimDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "chq-tabs", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("menuItemClick", function ClaimDashboardComponent_Template_chq_tabs_menuItemClick_3_listener($event) {
          return ctx.navigate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5)(6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClaimDashboardComponent_Template_mat_icon_click_6_listener() {
          return ctx.openFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, ClaimDashboardComponent_div_11_Template, 26, 17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ClaimDashboardComponent_div_14_Template, 26, 17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ClaimDashboardComponent_div_17_Template, 12, 17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, ClaimDashboardComponent_div_20_Template, 7, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 12)(22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, ClaimDashboardComponent_div_23_Template, 7, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 12)(25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, ClaimDashboardComponent_div_26_Template, 7, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 15)(28, "div", 16)(29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "chq-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 19)(34, "div", 20)(35, "div", 21)(36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](37, "xa-table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "mat-sidenav-container", 24)(39, "mat-sidenav", 25, 26)(41, "div", 27)(42, "div", 28)(43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, " Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 30)(46, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClaimDashboardComponent_Template_button_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](40);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r7.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](47, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "form", 33)(49, "div", 8)(50, "div", 34)(51, "chq-input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ClaimDashboardComponent_Template_chq_input_controlOutput_51_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 8)(53, "div", 34)(54, "chq-input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ClaimDashboardComponent_Template_chq_input_controlOutput_54_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 8)(56, "div", 36)(57, "chq-input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ClaimDashboardComponent_Template_chq_input_controlOutput_57_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "chq-input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("controlOutput", function ClaimDashboardComponent_Template_chq_input_controlOutput_58_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 38)(60, "div", 8)(61, "div", 39)(62, "chq-button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClaimDashboardComponent_Template_chq_button_click_62_listener() {
          return ctx.applyFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 39)(64, "chq-button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClaimDashboardComponent_Template_chq_button_click_64_listener() {
          return ctx.resetFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 41)(66, "div", 42)(67, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](68, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, ClaimDashboardComponent_ng_template_69_Template, 0, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", "underline")("menuItems", ctx.dashboardMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "filter-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isSummaryLoading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](31, 32, "most_recent_claims"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("buttonModel", ctx.fileClaimButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.tableConfig)("tableData", ctx.tableData)("cellClicked", ctx.handleCellClick)("i18n", ctx.i18n);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx.filterModal[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx.filterModal[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx.creationStartDateTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("inputModel", ctx.creationEndDateTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("buttonModel", ctx.applyButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("buttonModel", ctx.resetButton);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavContainer, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_8__.ChqTabsComponent, _widgets_chq_chart_chq_chart_component__WEBPACK_IMPORTED_MODULE_9__.ChqChartComponent, _widgets_xa_table_xa_table_component__WEBPACK_IMPORTED_MODULE_10__.XaTable, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_11__.XaCurrencyPipe],
    styles: [".claim-summary {\n  height: calc(100vh - (58px + 1.6vw) - 28px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n  .claim-summary .filter-section {\n  margin-top: 20px;\n  justify-content: space-between;\n}\n  .claim-summary .filter-section .filter {\n  border-radius: 20px;\n  background: var(--xa-white);\n  box-shadow: 0px 2px 5px 0px rgba(89, 96, 120, 0.1), 0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0.1);\n  display: flex;\n  padding: 8px 12px;\n  align-items: center;\n  gap: 8px;\n}\n  .claim-summary .card-btn {\n  margin-top: 10px;\n  margin-right: 8px;\n}\n  .claim-summary .card-btn   button {\n  width: auto !important;\n  padding: 6px 12px;\n  height: 32px !important;\n  margin-right: 6px;\n  margin-bottom: 10px;\n}\n  .claim-summary .card-btn   .button-secondary {\n  color: #fff;\n}\n  .claim-summary .mat-content {\n  flex: initial;\n}\n  .claim-summary .dashbord-filter-dropdown > div {\n  margin-bottom: 15px;\n}\n  .claim-summary .dashbord-filter-dropdown > div .ml-10 {\n  margin-left: 10px;\n}\n  .claim-summary .action-btn button {\n  margin-top: 25px;\n  width: auto !important;\n}\n  .claim-summary .card {\n  padding: 16px;\n  background-color: var(--xa-white);\n  border-radius: 8px;\n  height: 100%;\n  min-height: 180px;\n  box-sizing: border-box;\n}\n  .claim-summary .card .fnol-data {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-self: stretch;\n  color: rgba(26, 34, 51, 0.7);\n}\n  .claim-summary .card .fnol-data .fnol-data-details {\n  width: 100%;\n  justify-content: space-between;\n}\n  .claim-summary .card .fnol-data .fnol-data-details .fnol-data-header {\n  align-self: center;\n}\n  .claim-summary .card .fnol-data .fnol-data-details .fnol-icon div {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n  .claim-summary .card .fnol-data .fnol-data-details .fnol-icon div.div-fnol {\n  background-color: #DDECFF;\n}\n  .claim-summary .card .fnol-data .fnol-data-details .fnol-icon div.div-claim {\n  background-color: #B7F3FF;\n}\n  .claim-summary .card .fnol-data .fnol-data-details .fnol-icon div.div-total {\n  background-color: #D4CFFC;\n}\n  .claim-summary .card .fnol-data .fnol-data-details .fnol-icon div mat-icon {\n  flex-grow: 1;\n  width: 20px;\n  height: 20px;\n}\n  .claim-summary .card .fnol-data .fnol-data-summary p {\n  color: #1B03A3;\n}\n  .claim-summary .card .fnol-data mat-icon {\n  height: 43px;\n  width: 43px;\n}\n  .claim-summary .card-text {\n  height: auto;\n  min-height: 192px;\n}\n  .claim-summary .card-title {\n  font-weight: 800;\n  font-size: 23px;\n  color: var(--xa-primary);\n  display: block;\n  margin: 10px 0;\n}\n@media (max-width: 1200px) {\n    .claim-summary .card-title {\n    font-size: 20px;\n  }\n}\n  .claim-summary .graph-title {\n  font-weight: 700;\n  font-size: 18px;\n  display: block;\n}\n  .claim-summary .card-action {\n  color: var(--colors-gray-70, --xa-dark-gray);\n  font-size: 20px;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  margin: 0;\n}\n  .claim-summary .card-description {\n  color: var(--colors-gray-70, --xa-dark-gray);\n  font-size: 32px;\n  letter-spacing: 0.5px;\n  font-weight: 700;\n  margin: 0;\n}\n  .claim-summary .card-description span {\n  color: var(--xa-primary);\n}\n  .claim-summary .mt-30 {\n  margin-top: 30px;\n}\n  .claim-summary .repair-details-total {\n  margin-left: 50px;\n}\n  .claim-summary .repair-details-total .bottom-total {\n  color: var(--colors-gray-60, rgba(26, 34, 51, 0.6));\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n  .claim-summary .repair-details-total .bottom-title {\n  color: var(--primary-color, var(--xa-primary));\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n  display: block;\n}\n  .claim-summary .customers-graph {\n  margin-left: -10px;\n  position: relative;\n}\n  .claim-summary .customer-graph-container {\n  overflow-y: auto;\n  padding-left: 30px;\n}\n  .claim-summary .customer-graph-container .graph-title {\n  margin-bottom: 41px;\n}\n  .claim-summary .customer-graph-container-hori {\n  overflow: auto;\n  padding-left: 30px;\n  height: 400px;\n  min-height: 100%;\n}\n  .claim-summary .customer-graph-container-hori .graph-title {\n  margin-bottom: 41px;\n}\n  .claim-summary .inner-loading {\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  height: 30px !important;\n  width: 30px !important;\n}\n  .claim-summary .filter-section .mat-expansion-panel-header {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  max-height: 48px !important;\n  padding: 0 10px;\n  background: var(--colors-background, --xa-popup-light-gray) !important;\n}\n  .claim-summary .filter-section .mat-expansion-panel-body {\n  padding: 0 14px 16px;\n}\n  .claim-summary .filter-section mat-accordion {\n  width: 100%;\n  padding: 0px 14px;\n}\n  .claim-summary .filter-section .mat-expansion-panel {\n  box-shadow: none !important;\n  border-radius: 0 !important;\n  border-bottom: 0.4px solid var(--colors-gray-40, rgba(26, 34, 51, 0.4));\n  background: var(--colors-background, --xa-popup-light-gray) !important;\n}\n  .claim-summary .filter-section .mat-expansion-panel.mat-expanded {\n  border-radius: 9px;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25) !important;\n  border-bottom: 0 !important;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: #4c6bd2;\n  padding: 10px;\n  color: #fff;\n  overflow: visible;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .arrow_box {\n  min-width: 100px;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-heading {\n  font-size: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-label {\n  font-size: 10px;\n  margin-right: 8px;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .tootip-value {\n  font-size: 12px;\n}\n  .claim-summary .apexcharts-tooltip.apexcharts-theme-light .justify-content-between {\n  justify-content: space-between;\n}\n  .claim-summary .currency-value {\n  text-align: center;\n  position: absolute;\n  transform: rotate(-90deg);\n  left: -30px;\n  top: calc(50% - 25px);\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n  font-size: 12px;\n}\n  .claim-summary .search-dropdown {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  width: 100%;\n  gap: 5px;\n}\n  .claim-summary .search-dropdown .input-label {\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--xa-dark-gray);\n  padding: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n  .claim-summary .search-dropdown   .dx-texteditor.dx-editor-outlined {\n  border-radius: 8px;\n  border: none;\n}\n  .claim-summary .search-dropdown   .dx-tag-container.dx-texteditor-input-container {\n  padding: 12px 16px;\n}\n  .claim-summary .search-dropdown .dx-button-has-icon .dx-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n}\n  .claim-summary .search-dropdown .dx-widget.dx-button:hover {\n  background: none !important;\n}\n  .claim-summary .customer-name {\n  justify-content: initial !important;\n  flex-direction: initial !important;\n}\n  .claim-summary .customer-tags {\n  font-size: 16px;\n}\n  .claim-summary .dx-texteditor-container {\n  max-width: 400px;\n}\n  .claim-summary mat-icon.calendar-icon {\n  top: 33px !important;\n}\n  .claim-summary .mat-expansion-indicator {\n  line-height: 0;\n}\n  .claim-summary .mat-expansion-indicator:after {\n  vertical-align: super;\n}\n@media (max-width: 991px) {\n    .claim-summary .mt-30 {\n    margin-top: 18px;\n  }\n    .claim-summary .col-5,   .claim-summary .col-7 {\n    padding: 0;\n    flex-basis: 100%;\n    max-width: 100%;\n    margin-bottom: 12px;\n  }\n    .claim-summary .col-3 {\n    flex-basis: 50%;\n    max-width: 50%;\n    margin-bottom: 12px;\n  }\n}\n  .claim-summary .dashboard-no-data-found {\n  text-align: center;\n  font-size: 14px;\n  color: var(--colors-gray-70, rgba(26, 34, 51, 0.7));\n}\n  .claim-summary .dashboard-no-data-found .mat-icon {\n  width: 100px;\n  height: 100px;\n}\n  .claim-summary .date-filter input[readonly] {\n  opacity: 1;\n}\n  .claim-summary .claim-list-wrapper {\n  border-radius: 8px;\n  border: 1px solid #CECFD0;\n  padding: 10px;\n}\n  .claim-summary .claim-list-wrapper .claim-list-header {\n  justify-content: space-between;\n}\n  .claim-summary .claim-list-wrapper .claim-list-header .header-text {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 0.5px;\n  align-self: center;\n}\n  .claim-summary .claim-list-wrapper .claim-list-content .tab-content {\n  background-color: transparent;\n  padding: 10px 0px 0px 0px;\n}\n@media (max-width: 1090px) {\n    .claim-summary .col-4 {\n    max-width: 50%;\n    flex-basis: 50%;\n    margin-top: 30px;\n  }\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .mat-drawer-backdrop {\n  position: fixed;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav.filter-sidenav[_ngcontent-%COMP%] {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr.no-line[_ngcontent-%COMP%] {\n  border: none;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 92%;\n}\n\n.btn-file-claim[_ngcontent-%COMP%]     button {\n  border-radius: 22px;\n}\n\n  .dx-dropdownlist-popup-wrapper   .dx-list-select-all {\n  display: none;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-list-select-all-label {\n  margin-left: 20px;\n  font-size: 12px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-indeterminate .dx-checkbox-icon::before {\n  background-color: #76d672;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-checked .dx-checkbox-icon {\n  color: #fff;\n  background-color: #76d672;\n  border: 1px solid #76d672 !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-list-item-content {\n  font-size: 12px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-icon {\n  height: 16px;\n  width: 16px;\n  border-radius: 3px;\n  position: absolute;\n  left: 15px;\n  right: 0;\n  color: #fff;\n  overflow: hidden;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-checked .dx-checkbox-icon::before {\n  font-size: 12px;\n  top: 35%;\n  font-weight: 700;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-widget {\n  font-size: 16px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-overlay-content {\n  border: 1px solid #19191b !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-placeholder::before {\n  padding: 12px 16px;\n}\n  .dx-dropdownlist-popup-wrapper .dx-popup-content {\n  max-height: 300px !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-template-wrapper {\n  display: inherit;\n}\n  .dx-dropdownlist-popup-wrapper .customer-list-name,   .dx-dropdownlist-popup-wrapper .customer-list-email {\n  color: var(--xa-black);\n  word-break: break-word;\n  white-space: normal;\n}\n  .dx-dropdownlist-popup-wrapper .customer-list-email {\n  opacity: 0.7;\n  font-style: italic;\n}\n\n  .dx-placeholder {\n  font-size: 16px;\n}\n\n  .dx-placeholder::before {\n  padding: 8px 9px;\n}\n\n  .dx-texteditor-input {\n  font-size: 16px;\n  font-family: \"Inter\" !important;\n  height: 19px;\n}\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n\n.disable-input[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n  .mat-header-container {\n  min-width: auto !important;\n  align-items: center !important;\n}\n\n  .mat-sort-header-content {\n  justify-content: center !important;\n  font-size: 10px !important;\n  font-weight: 700 !important;\n  font-family: \"Inter\";\n  font-style: normal;\n  line-height: 15px;\n}\n\n  .mat-mdc-cell {\n  padding: 10px !important;\n  font-size: 14px !important;\n}\n  .mat-mdc-cell .case-status {\n  font-size: 12px !important;\n  line-height: 15px !important;\n}\n\n  .cdk-column-Status {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9jbGFpbS1kYXNoYm9hcmQvY2xhaW0tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7QUFDUjtBQUNRO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhIQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBQ1o7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUdRO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURaO0FBSVE7RUFDSSxXQUFBO0FBRlo7QUFNSTtFQUNJLGFBQUE7QUFKUjtBQU9JO0VBQ0ksbUJBQUE7QUFMUjtBQU9RO0VBQ0ksaUJBQUE7QUFMWjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQVJaO0FBWUk7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBVlI7QUFZUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBVlo7QUFXWTtFQUNJLFdBQUE7RUFDQSw4QkFBQTtBQVRoQjtBQVlnQjtFQUNJLGtCQUFBO0FBVnBCO0FBY29CO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWJ4QjtBQWV3QjtFQUNJLHlCQUFBO0FBYjVCO0FBZ0J3QjtFQUNJLHlCQUFBO0FBZDVCO0FBaUJ3QjtFQUNJLHlCQUFBO0FBZjVCO0FBa0J3QjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCNUI7QUF5QmdCO0VBQ0ksY0FBQTtBQXZCcEI7QUEyQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXpCaEI7QUE4Qkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUE1QlI7QUErQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBN0JSO0FBK0JRO0VBUEo7SUFRUSxlQUFBO0VBNUJWO0FBQ0Y7QUErQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBN0JSO0FBZ0NJO0VBQ0ksNENBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUE5QlI7QUFpQ0k7RUFDSSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQS9CUjtBQWlDUTtFQUNJLHdCQUFBO0FBL0JaO0FBbUNJO0VBQ0ksZ0JBQUE7QUFqQ1I7QUFvQ0k7RUFDSSxpQkFBQTtBQWxDUjtBQW9DUTtFQUNJLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBbENaO0FBcUNRO0VBQ0ksOENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFuQ1o7QUF1Q0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBckNSO0FBd0NJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQXRDUjtBQXdDUTtFQUNJLG1CQUFBO0FBdENaO0FBMENJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBeENSO0FBMENRO0VBQ0ksbUJBQUE7QUF4Q1o7QUE0Q0k7RUFDSSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQTFDUjtBQThDUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esc0VBQUE7QUE1Q1o7QUErQ1E7RUFDSSxvQkFBQTtBQTdDWjtBQWdEUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQTlDWjtBQWlEUTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1RUFBQTtFQUNBLHNFQUFBO0FBL0NaO0FBa0RRO0VBQ0ksa0JBQUE7RUFDQSwwREFBQTtFQUNBLDJCQUFBO0FBaERaO0FBb0RJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFsRFI7QUFtRFE7RUFDSSxnQkFBQTtBQWpEWjtBQW9EUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFsRFo7QUFxRFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFuRFo7QUFzRFE7RUFDSSxlQUFBO0FBcERaO0FBdURRO0VBQ0ksOEJBQUE7QUFyRFo7QUF5REk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7QUF2RFI7QUEwREk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBeERSO0FBMERRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBeERaO0FBMkRRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBekRaO0FBNERRO0VBQ0ksa0JBQUE7QUExRFo7QUE2RFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUEzRFo7QUErRFk7RUFDSSwyQkFBQTtBQTdEaEI7QUFrRUk7RUFDSSxtQ0FBQTtFQUNBLGtDQUFBO0FBaEVSO0FBbUVJO0VBQ0ksZUFBQTtBQWpFUjtBQW9FSTtFQUNJLGdCQUFBO0FBbEVSO0FBcUVJO0VBQ0ksb0JBQUE7QUFuRVI7QUFzRUk7RUFDSSxjQUFBO0FBcEVSO0FBc0VRO0VBQ0kscUJBQUE7QUFwRVo7QUF5RUk7RUFDSTtJQUNJLGdCQUFBO0VBdkVWO0VBMEVNOztJQUVJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQXhFVjtFQTJFTTtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUF6RVY7QUFDRjtBQTRFSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FBMUVSO0FBNEVRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUExRVo7QUErRVE7RUFDSSxVQUFBO0FBN0VaO0FBaUZJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUEvRVI7QUFnRlE7RUFDSSw4QkFBQTtBQTlFWjtBQWdGWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBOUVoQjtBQW1GWTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7QUFqRmhCO0FBc0ZJO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBcEZWO0FBQ0Y7O0FBeUZBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtBQXRGSjtBQXdGSTtFQUNJLGVBQUE7QUF0RlI7QUF5Rkk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQXZGUjtBQXlGUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQXZGWjtBQTBGUTtFQUNJLGtCQUFBO0FBeEZaO0FBMkZRO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtBQXpGWjtBQTRGUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUExRlo7QUE0Rlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTFGaEI7QUE4RmdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUE1RnBCO0FBOEZvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBNUZ4QjtBQWtHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFoR1o7QUFrR1k7RUFDSSxjQUFBO0FBaEdoQjtBQWtHZ0I7RUFDSSxZQUFBO0FBaEdwQjtBQXFHUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFuR1o7QUFxR1k7RUFDSSxVQUFBO0FBbkdoQjs7QUEwR0k7RUFDSSxtQkFBQTtBQXZHUjs7QUE0R0k7RUFDSSxhQUFBO0FBekdSO0FBNEdJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBMUdSO0FBNkdJO0VBRUkseUJBQUE7QUE1R1I7QUErR0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQTdHUjtBQWdISTtFQUNJLGVBQUE7QUE5R1I7QUFpSEk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQS9HUjtBQWtISTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFoSFI7QUFtSEk7RUFDSSxlQUFBO0FBakhSO0FBb0hJO0VBQ0ksb0NBQUE7QUFsSFI7QUFxSEk7RUFDSSxrQkFBQTtBQW5IUjtBQXNISTtFQUNJLDRCQUFBO0FBcEhSO0FBdUhJO0VBQ0ksZ0JBQUE7QUFySFI7QUF3SEk7O0VBRUksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBdEhSO0FBeUhJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBdkhSOztBQTJIQTtFQUNJLGVBQUE7QUF4SEo7O0FBMkhBO0VBQ0ksZ0JBQUE7QUF4SEo7O0FBMkhBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQXhISjs7QUEySEE7RUFDSSxlQUFBO0FBeEhKOztBQTJIQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQXhISjs7QUEySEE7RUFDSSwwQkFBQTtFQUNBLDhCQUFBO0FBeEhKOztBQTJIQTtFQUNJLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXhISjs7QUEySEE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FBeEhKO0FBMEhJO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtBQXhIUjs7QUE0SEE7RUFDSSx1QkFBQTtBQXpISiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY2xhaW0tc3VtbWFyeSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoNThweCArIDEuNnZ3KSAtIDI4cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICAgIC5maWx0ZXItc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIC5maWx0ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCByZ2JhKDg5LCA5NiwgMTIwLCAwLjEwKSwgMHB4IDBweCAwcHggMXB4IHJnYmEoNzAsIDc5LCA5NiwgMC4xNiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Om5nLWRlZXAgLmJ1dHRvbi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXNoYm9yZC1maWx0ZXItZHJvcGRvd24+ZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAubWwtMTAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1idG4ge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIC5mbm9sLWRhdGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjYsIDM0LCA1MSwgMC43MCk7XHJcbiAgICAgICAgICAgIC5mbm9sLWRhdGEtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLmZub2wtZGF0YS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm5vbC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5kaXYtZm5vbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRERFQ0ZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmRpdi1jbGFpbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjdGM0ZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmRpdi10b3RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRDRkZDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mbm9sLWRhdGEtc3VtbWFyeSB7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFCMDNBMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE5MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtcHJpbWFyeSk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3JhcGgtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWFjdGlvbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmF5LTcwLCAtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmF5LTcwLCAtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm10LTMwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBhaXItZGV0YWlscy10b3RhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gICAgICAgIC5ib3R0b20tdG90YWwge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNjAsIHJnYmEoMjYsIDM0LCA1MSwgMC42KSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvdHRvbS10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCB2YXIoLS14YS1wcmltYXJ5KSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9tZXJzLWdyYXBoIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci1ncmFwaC1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cclxuICAgICAgICAuZ3JhcGgtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9tZXItZ3JhcGgtY29udGFpbmVyLWhvcmkge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC5ncmFwaC10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbm5lci1sb2FkaW5nIHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLXNlY3Rpb24ge1xyXG4gICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3JzLWJhY2tncm91bmQsIC0teGEtcG9wdXAtbGlnaHQtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHggMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdC1hY2NvcmRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjRweCBzb2xpZCB2YXIoLS1jb2xvcnMtZ3JheS00MCwgcmdiYSgyNiwgMzQsIDUxLCAwLjQpKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3JzLWJhY2tncm91bmQsIC0teGEtcG9wdXAtbGlnaHQtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLm1hdC1leHBhbmRlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXBleGNoYXJ0cy10b29sdGlwLmFwZXhjaGFydHMtdGhlbWUtbGlnaHQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzRjNmJkMjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIC5hcnJvd19ib3gge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvb3RpcC1oZWFkaW5nIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b290aXAtbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvb3RpcC12YWx1ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1cnJlbmN5LXZhbHVlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3JheS03MCwgcmdiYSgyNiwgMzQsIDUxLCAwLjcpKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1kcm9wZG93biB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICAgIC5pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6bmctZGVlcCAuZHgtdGV4dGVkaXRvci5keC1lZGl0b3Itb3V0bGluZWQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6bmctZGVlcCAuZHgtdGFnLWNvbnRhaW5lci5keC10ZXh0ZWRpdG9yLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5keC1idXR0b24taGFzLWljb24gLmR4LWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZHgtd2lkZ2V0LmR4LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci1uYW1lIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci10YWdzIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmR4LXRleHRlZGl0b3ItY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uLmNhbGVuZGFyLWljb24ge1xyXG4gICAgICAgIHRvcDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAubXQtMzAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbC01LFxyXG4gICAgICAgIC5jb2wtNyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2wtMyB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXNoYm9hcmQtbm8tZGF0YS1mb3VuZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyYXktNzAsIHJnYmEoMjYsIDM0LCA1MSwgMC43MCkpO1xyXG5cclxuICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRlLWZpbHRlciB7XHJcbiAgICAgICAgaW5wdXRbcmVhZG9ubHldIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNsYWltLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDRUNGRDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAuY2xhaW0tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLXRleHQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbGFpbS1saXN0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAudGFiLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDkwcHgpIHtcclxuICAgICAgICAuY29sLTQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDUwMSAhaW1wb3J0YW50O1xyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWRyYXdlci1iYWNrZHJvcHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1zaWRlbmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgICAgICAmLmZpbHRlci1zaWRlbmF2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJGNjtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbHRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKDE1cHggKyAwLjh2dyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDU1cHggKyAwLjh2dyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5uby1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJGNjtcclxuICAgICAgICAgICAgei1pbmRleDogNTAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWZpbGUtY2xhaW0ge1xyXG4gICAgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC1kcm9wZG93bmxpc3QtcG9wdXAtd3JhcHBlciB7XHJcbiAgICA6Om5nLWRlZXAgLmR4LWxpc3Qtc2VsZWN0LWFsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LWxpc3Qtc2VsZWN0LWFsbC1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAuZHgtY2hlY2tib3gtaWNvbjo6YmVmb3JlIHtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2ZDY3MjtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LWNoZWNrYm94LWNoZWNrZWQgLmR4LWNoZWNrYm94LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NmQ2NzI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc2ZDY3MiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuZHgtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LWNoZWNrYm94LWljb24ge1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LWNoZWNrYm94LWNoZWNrZWQgLmR4LWNoZWNrYm94LWljb246OmJlZm9yZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC13aWRnZXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LW92ZXJsYXktY29udGVudCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5MTkxYiAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC1wbGFjZWhvbGRlcjo6YmVmb3JlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmR4LXBvcHVwLWNvbnRlbnQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC10ZW1wbGF0ZS13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21lci1saXN0LW5hbWUsXHJcbiAgICAuY3VzdG9tZXItbGlzdC1lbWFpbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbWVyLWxpc3QtZW1haWwge1xyXG4gICAgICAgIG9wYWNpdHk6IC43O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtcGxhY2Vob2xkZXI6OmJlZm9yZSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LXRleHRlZGl0b3ItaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTlweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1pbnB1dCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGVudCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1tZGMtY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAuY2FzZS1zdGF0dXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLWNvbHVtbi1TdGF0dXMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
const FNOLStatusDetails = {
  'claimApprovalDetails': [{
    'claimStatusPercentage': 35,
    'claimStatusName': 'Approved'
  }, {
    'claimStatusPercentage': 21,
    'claimStatusName': 'Received'
  }, {
    'claimStatusPercentage': 16,
    'claimStatusName': 'Pending'
  }, {
    'claimStatusPercentage': 28,
    'claimStatusName': 'Declined'
  }]
};
const FNOLApprovedRejected = {
  'FNOLApprovalRejectionDetails': [{
    'fnolApprovalRejectionPercentage': 74,
    'fnolStatus': 'Approved'
  }, {
    'fnolApprovalRejectionPercentage': 26,
    'fnolStatus': 'Rejected'
  }]
};

/***/ }),

/***/ 16340:
/*!******************************************************************!*\
  !*** ./src/app/modules/claim/claim-list/claim-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimListComponent": () => (/* binding */ ClaimListComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/display/claims-table-config */ 69281);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var src_app_widgets_xa_paginator_xa_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widgets/xa-paginator/xa-paginator.component */ 29685);
/* harmony import */ var _quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../quote/chq-cases/chq-cases-table/chq-cases-table.component */ 90733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _widgets_xa_table_xa_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../widgets/xa-table/xa-table.component */ 26435);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! devextreme-angular */ 82846);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! devextreme-angular/core */ 46209);






























const _c0 = ["customerDropdownRef"];
const _c1 = ["assignedDropdownRef"];
const _c2 = ["claimTableRef"];
const _c3 = ["searchBox"];
const _c4 = ["filter"];
function ClaimListComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 52)(2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 55)(8, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 56)(14, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "button", 57)(20, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r3.totalAssignedCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 8, "total_assigned"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r3.todayAssignedCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 10, "today_assigned"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r3.inprogressCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 12, "inprogress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r3.yetToStartCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](24, 14, "yet_to_start"));
  }
}
function ClaimListComponent_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 63)(1, "div", 47)(2, "xa-paginator", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("paginationChange", function ClaimListComponent_div_21_div_4_Template_xa_paginator_paginationChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.handlePaginationChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("pagination", ctx_r14.pagination);
  }
}
function ClaimListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "xa-table", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ClaimListComponent_div_21_div_4_Template, 4, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("config", ctx_r4.tableConfig)("tableData", ctx_r4.tableData)("cellClicked", ctx_r4.handleCellClick)("onDropdownSelect", ctx_r4.assigneeChange)("sortChanged", ctx_r4.handleSortChange)("pageChanged", ctx_r4.pageChanged)("i18n", ctx_r4.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r4.tableData == null ? null : ctx_r4.tableData.length) > 0 && ctx_r4.pagination.count > ctx_r4.pagination.pageSize);
  }
}
function ClaimListComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
  }
}
function ClaimListComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", item_r18.label, "", item_r18.index < ctx_r8.selectedCustomer.length - 1 ? "," : "", " ");
  }
}
function ClaimListComponent_dxi_button_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "dxi-button", 70);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("options", ctx_r9.dropdownopen);
  }
}
function ClaimListComponent_dxi_button_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "dxi-button", 71);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("options", ctx_r10.dropdownclose);
  }
}
function ClaimListComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](data_r20.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](data_r20.subLabel);
  }
}
function ClaimListComponent_div_55_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", item_r26.label, "", item_r26.index < ctx_r22.selectedAssigned.length - 1 ? "," : "", " ");
  }
}
function ClaimListComponent_div_55_dxi_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "dxi-button", 70);
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("options", ctx_r23.assignedDropdownopen);
  }
}
function ClaimListComponent_div_55_dxi_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "dxi-button", 71);
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("options", ctx_r24.assignedDropdownclose);
  }
}
function ClaimListComponent_div_55_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](data_r28.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](data_r28.subLabel);
  }
}
function ClaimListComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 35)(3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "dx-tag-box", 74, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("valueChange", function ClaimListComponent_div_55_Template_dx_tag_box_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.selectedAssigned = $event);
    })("onSelectionChanged", function ClaimListComponent_div_55_Template_dx_tag_box_onSelectionChanged_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r31.onAssignedValueChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ClaimListComponent_div_55_div_8_Template, 2, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ClaimListComponent_div_55_dxi_button_9_Template, 1, 1, "dxi-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, ClaimListComponent_div_55_dxi_button_10_Template, 1, 1, "dxi-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, ClaimListComponent_div_55_div_11_Template, 5, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](7);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 12, "assigned"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("items", ctx_r12.assignedList)("showSelectionControls", true)("searchEnabled", true)("showDataBeforeSearch", true)("multiline", false)("showClearButton", false)("value", ctx_r12.selectedAssigned);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "customAssignedTag");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !_r21.opened);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _r21.opened);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "item");
  }
}
class ClaimListComponent {
  // statusTextDict = {
  //   'Draft': 'Draft',
  //   'ClaimAuthenticated': 'Authenticated',
  //   'DetailsUpdated': 'Details Updated',
  //   'UploadDocuments': 'Upload Documents',
  //   'UploadPhotos': 'Upload Photos',
  //   'Submitted': 'Submitted',
  //   'Assigned': 'Assigned',
  //   'ReviewInProgress': 'Review in Progress',
  //   'ClaimSubmittedForApproval': 'Submitted for Approval',
  //   'ApprovalReviewInProgress': 'Approval in Progress',
  //   'AssignedBack': 'Assigned Back',
  //   'GarageAssignedforClaim': 'Garage Assigned',
  //   'GarageAssignmentRequestedRejected': 'Garage Rejected',
  //   'GarageAssignmentRequested': 'Garage Requested',
  //   'RepairEstimation': 'Repair Estimation',
  //   'EstimateRejected': 'Estimate Rejected',
  //   'EstimateApproved': 'Estimate Approved',
  //   'Approved': 'Approved',
  //   'Rejected': 'Rejected',
  //   'RepairInitiated': 'Repair Initiated',
  //   'RepairInvoice': 'Repair Invoice',
  //   'SettlementInitiated': 'Settlement Initiated',
  //   'Complete': 'Complete'
  // }
  /**
  * constructor
  *
  */
  constructor(commonService, claimService, caseService, router, vehicleService, formBuilder, translateService) {
    this.commonService = commonService;
    this.claimService = claimService;
    this.caseService = caseService;
    this.router = router;
    this.vehicleService = vehicleService;
    this.formBuilder = formBuilder;
    this.translateService = translateService;
    this.claimMenuTabs = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.claimListMenus;
    this.newClaimButton = {
      label: 'file_a_claim',
      type: 'primary',
      onclick: () => this.navigate()
    };
    this.filterButton = {
      label: 'filter',
      type: 'outline',
      icon: 'filter'
    };
    this.tableData = [];
    this.pagination = src_app_widgets_xa_paginator_xa_paginator_component__WEBPACK_IMPORTED_MODULE_3__.defaultPagination;
    this.pageChanged = false;
    this.configData = {
      ...src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_1__.ClaimALLTableConfig
    };
    this.queryParams = '';
    this.userDetail = null;
    this.filterForm = this.formBuilder.group({
      statusdto: [],
      org: '',
      match: '',
      vehicleNo: '',
      make: '',
      vin: ''
    });
    this.applyButton = {
      label: 'apply',
      type: 'disabled'
    };
    this.resetButton = {
      label: 'reset_all',
      type: 'outline'
    };
    this.filterModal = [{
      placeHolder: '',
      label: 'match',
      name: 'match',
      idField: 'match',
      value: 'all_claims',
      type: 'radio',
      options: [{
        label: 'active_claims',
        id: 1
      }, {
        label: 'all_claims',
        id: 2
      }]
    }, {
      placeHolder: 'select_type',
      label: 'organization',
      name: 'org',
      value: '',
      type: 'select',
      displayValue: 'label',
      fieldValue: 'value',
      options: []
    }, {
      placeHolder: 'status',
      name: 'statusdto',
      label: 'status',
      value: '',
      type: 'select',
      isMultiSelect: true,
      displayValue: 'label',
      fieldValue: 'value',
      options: []
    }, {
      placeHolder: 'vehicle_number',
      name: 'vehicleNo',
      label: 'vehicle_number',
      value: '',
      type: 'text',
      validation: {
        name: 'vehicleRegistrationNum',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('^[a-zA-Z0-9-/]*$')]);
        },
        validationMessage: error => {
          this.applyButton = {
            ...this.applyButton,
            type: 'disabled'
          };
          if (error['minlength']) {
            return 'Vehicle Number minimum have 4 characters';
          }
          if (error['maxlength']) {
            return 'Vehicle Registration / Plate Number should have not more than 12 characters';
          }
          if (error['pattern']) {
            return 'Only alphanumberic characters are allowed';
          }
          this.applyButton = {
            ...this.applyButton,
            type: 'primary'
          };
          return '';
        }
      }
    }, {
      placeHolder: 'vehicle_make',
      name: 'make',
      label: 'vehicle_make',
      value: '',
      type: 'select',
      displayValue: 'name',
      fieldValue: 'name',
      options: []
    }, {
      placeHolder: 'vin',
      name: 'vin',
      label: 'vin',
      value: '',
      type: 'text',
      validation: {
        name: 'vin',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('^[a-hA-Hj-nJ-NpPr-zR-Z0-9]+$')]);
        },
        validationMessage: error => {
          this.applyButton = {
            ...this.applyButton,
            type: 'disabled'
          };
          if (error['pattern']) {
            return 'Invalid characters';
          }
          if (error['minlength']) {
            return 'Vin minimum have 4 characters';
          }
          this.applyButton = {
            ...this.applyButton,
            type: 'primary'
          };
          return '';
        }
      }
    }];
    this.creationStartDateTextBox = {
      placeHolder: 'creation_date_from',
      label: 'creation_date_from',
      name: 'fromDate',
      value: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(6, 'month').toISOString(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().toDate(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(1, 'year').toDate(),
      type: 'date'
    };
    this.creationEndDateTextBox = {
      placeHolder: 'creation_date_to',
      label: 'creation_date_to',
      name: 'toDate',
      value: dayjs__WEBPACK_IMPORTED_MODULE_6__().toISOString(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(1, 'year').toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().toDate(),
      type: 'date'
    };
    this.effectiveDateTextBox = {
      placeHolder: 'effective_date',
      label: 'effective_date',
      name: 'effective',
      value: null,
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().toDate(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(5, 'year').toDate(),
      type: 'date'
    };
    this.expireDateTextBox = {
      placeHolder: 'expiration_date',
      label: 'expiration_date',
      name: 'expiration',
      value: null,
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(5, 'year').toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().add(5, 'year').toDate(),
      type: 'date'
    };
    this.filterDataLoaded = false;
    this.customerList = [];
    this.assignedList = [];
    this.damageSeverityDictionary = {
      'P1': 'Very High',
      'P2': 'High',
      'P3': 'Medium',
      'P4': 'Low'
    };
    this.dropdownopen = {
      icon: 'chevrondown',
      stylingMode: 'text',
      type: 'normal',
      onClick: () => {
        this.customerDropdownRef.instance.open();
      }
    };
    this.dropdownclose = {
      icon: 'chevronup',
      stylingMode: 'text',
      type: 'normal',
      onClick: () => {
        this.customerDropdownRef.instance.close();
      }
    };
    this.assignedDropdownopen = {
      icon: 'chevrondown',
      stylingMode: 'text',
      type: 'normal',
      onClick: () => {
        this.assignedDropdownRef.instance.open();
      }
    };
    this.assignedDropdownclose = {
      icon: 'chevronup',
      stylingMode: 'text',
      type: 'normal',
      onClick: () => {
        this.assignedDropdownRef.instance.close();
      }
    };
    this.activeTab = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.claimListMenus[0];
    this.dropDownModel = {
      placeHolder: 'select_assignee',
      label: '',
      name: '',
      value: '',
      type: 'select',
      displayValue: 'label',
      fieldValue: 'value'
    };
    this.subscriptions = [];
    this.fetchingAPI = false;
    this.isClaimEditor = false;
    this.isClaimManager = false;
    this.isActiveClaims = false;
    this.totalAssignedCount = 0;
    this.todayAssignedCount = 0;
    this.inprogressCount = 0;
    this.yetToStartCount = 0;
    this.ListClaimReviewers = [];
    /**
    * handleSortChange
    * @param event
    */
    this.handleSortChange = sort => {
      if (sort) {
        this.pagination = {
          ...this.pagination,
          ...{
            orderBy: sort.active === 'CreatedDate' ? sort.active + ' ' + sort.direction : sort.active + ' ' + sort.direction + ', CreatedDate ' + sort.direction,
            sortDirection: sort.direction
          }
        };
        this.commonService.showLoading();
        if (this.activeTab.name === 'assigned') {
          this.getAssignedClaims();
        } else {
          this.getClaims();
        }
      }
    };
    this.searchString = '';
    this.handleCellClick = (row, column, event) => {
      const target = event.target;
      if (column.id !== 'ClaimNo') {
        return;
      }
      const claimId = row.find(c => c.id === 'ClaimGuid')?.result.value;
      this.router.navigate(['claim/claim-detail/' + claimId + '/customer-view']);
    };
    /**
    *
    * @param event
    */
    this.assigneeChange = (event, row) => {
      if (!(event.value.label && event.value.value)) {
        return;
      }
      const claimId = row.find(c => c.id === 'ClaimId')?.result.value;
      const AssigneeObject = [{
        'claimId': claimId,
        'assigneeId': event.value.value,
        'assigneeName': event.value.label
      }];
      this.commonService.showLoading();
      this.claimService.setAssignee(AssigneeObject).subscribe({
        next: res => {
          this.commonService.hideLoading();
          this.commonService.showInfoToast(1000, res?.message);
          this.getClaims();
        },
        error: error => {
          this.commonService.hideLoading();
        }
      });
    };
    this.i18n = this.commonService.geti18nInfo();
    this.commonService.userProfileData.subscribe(res => {
      this.userDetail = res?.data;
      const workFlowPackage = this.userDetail?.userPermission?.orgPackages?.filter(orgPackage => {
        return orgPackage.automotiveServiceName === 'Addenda Claim Workflow';
      });
      if (workFlowPackage && workFlowPackage.length > 0) {
        const {
          permissions
        } = workFlowPackage[0];
        const stagePermission = permissions.filter(perm => {
          return perm.permissionName?.includes('Stage1') != -1 || perm.permissionName?.includes('Stage2') != -1 || perm.permissionName?.includes('Stage3') != -1;
        });
        if (stagePermission && stagePermission.length > 0) {
          this.commonService.claimWorkflowStage = stagePermission[0].permissionName;
        }
      }
      const automotiveServices = this.userDetail?.userPermission?.automotiveServices;
      const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda claims');
      //const claimEditor = [ 'claim manager', 'claim adjudicator', 'claim reviewer', 'claim maker', 'insurance agent', 'claim clerk' ];
      const claimEditor = ['claim.selfapproval', 'claim.submitforapproval', 'claim.submitted'];
      const permissionList = automotiveService?.permissions;
      const anyPermisson = claimEditor.some(itemP => permissionList.map(item => item.permissionName).includes(itemP));
      if (automotiveService && anyPermisson) {
        this.isClaimEditor = true;
        if (this.commonService.claimWorkflowStage.includes('1Stage')) {
          //don't show the assigned tab
          this.tableConfig = {
            ...this.configData,
            columns: this.configData.columns.filter(x => x.id !== 'AssigneeName')
          };
        } else {
          this.tableConfig = this.configData;
        }
      } else {
        this.isClaimEditor = false;
        this.claimMenuTabs = this.claimMenuTabs.filter(el => el.name === 'assigned');
        this.activeTab = this.claimMenuTabs[0];
        this.tableConfig = {
          ...src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_1__.ClaimAssignedTableConfig
        };
      }
      this.isClaimManager = this.commonService.hasPermission('claim.selfapproval', permissionList);
    });
  }
  /**
   * claim permission
   * @param permissionName
   */
  checkClaimPermission(permissionName, permissionList) {
    return this.commonService.hasPermission(permissionName, permissionList);
  }
  /**
  * ngOnInit
  *
  */
  ngOnInit() {
    this.searchFilter = {
      ...this.searchFilter,
      icon: 'search',
      label: '',
      placeHolder: 'enter_policy_number'
    };
    this.pagination = {
      ...this.pagination,
      ...{
        currentPage: _quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.currentPage,
        orderBy: 'CreatedDate desc',
        sortDirection: 'desc'
      }
    };
    //this.queryParams = this. getFilterQuery();
    if (this.isClaimManager) {
      this.getListClaimReviewers();
    } else if (this.isClaimEditor) {
      this.reloadAllClaims();
    } else {
      this.reloadAssignedClaim();
      this.getAssignedStatusCount();
    }
  }
  /**
   *
   */
  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.searchBox.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(1500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(event => {
      this.search(this.searchBox.nativeElement.value);
    })).subscribe();
  }
  /**
  * getListClaimReviewers
  *
  */
  getListClaimReviewers() {
    this.commonService.showLoading();
    this.fetchingAPI = true;
    this.claimService.getListClaimReviewers().subscribe({
      next: res => {
        this.commonService.hideLoading();
        this.ListClaimReviewers = res?.data.map(el => {
          return {
            label: el.name,
            value: el.id
          };
        });
        this.dropDownModel = {
          ...this.dropDownModel,
          options: this.ListClaimReviewers
        };
        this.reloadAllClaims();
      },
      error: error => {
        this.fetchingAPI = false;
        this.commonService.hideLoading();
      }
    });
  }
  /**
  * getClaims
  */
  getClaims() {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.fetchingAPI = true;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.firstValueFrom)(_this.claimService.getClaimList(_this.pagination, _this.queryParams)).then(response => {
        _this.fetchingAPI = false;
        _this.tableData = response?.value.map((item, ind) => {
          item['sno'] = (_this.pagination.currentPage - 1) * _this.pagination.pageSize + ind + 1;
          const editIconHide = !_this.checkEditPremision(item);
          if (item.IsAssignedBack) {
            const obj = {
              ..._this.dropDownModel,
              selectedOption: {
                label: item.CreatedByUserName,
                value: item.CreatedUserId
              },
              editHide: editIconHide,
              value: item.CreatedByUserName
            };
            item['dropDownModel'] = obj;
          } else {
            if (item.AssigneeId) {
              const obj = {
                ..._this.dropDownModel,
                selectedOption: {
                  label: item.AssigneeName,
                  value: item.AssigneeId
                },
                editHide: editIconHide,
                value: item.AssigneeName
              };
              item['dropDownModel'] = obj;
            } else {
              const obj = {
                ..._this.dropDownModel,
                selectedOption: {
                  label: editIconHide ? item.CreatedByUserName : null,
                  value: editIconHide ? item.CreatedUserId : null
                },
                editHide: editIconHide,
                value: editIconHide ? item.CreatedByUserName : _this.translateService.instant('yet_to_be_assigned')
              };
              item['dropDownModel'] = obj;
            }
          }
          item['mode'] = null;
          item['Status'] = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__.STATUS_TEXT_DICT[item['Status']];
          return item;
        });
        _this.commonService.hideLoading();
      }).catch(() => {
        _this.fetchingAPI = false;
        _this.commonService.hideLoading();
      });
    })();
  }
  /**
   * checkEditPremision(item)
   */
  checkEditPremision(item) {
    if ([src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__.CLAIM_STATUS.Draft, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__.CLAIM_STATUS.ClaimAuthenticated, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__.CLAIM_STATUS.Submitted, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__.CLAIM_STATUS.Assigned].includes(item.Status)) {
      return this.isClaimManager;
    }
    return false;
  }
  /**
  * getAssignedClaims
  *
  */
  getAssignedClaims() {
    var _this2 = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.fetchingAPI = true;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.firstValueFrom)(_this2.claimService.getAssignedClaimList(_this2.pagination, _this2.queryParams)).then(response => {
        _this2.fetchingAPI = false;
        _this2.tableData = response?.value.map((item, ind) => {
          item['sno'] = (_this2.pagination.currentPage - 1) * _this2.pagination.pageSize + ind + 1;
          item['Severity'] = _this2.damageSeverityDictionary[item['Severity']];
          item['Status'] = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__.STATUS_TEXT_DICT[item['Status']];
          return item;
        });
        _this2.commonService.hideLoading();
      }).catch(() => {
        _this2.fetchingAPI = false;
        _this2.commonService.hideLoading();
      });
    })();
  }
  /**
  * calculates total cases
  * @returns Observable
  */
  getTotalClaimCount(queryParams = '') {
    this.commonService.showLoading();
    return this.claimService.getTotalCountClaim(queryParams);
  }
  /**
   *
   * @returns
   */
  getTotalAssignedClaimCount(queryParams = '') {
    this.commonService.showLoading();
    return this.claimService.getTotalCountAssignedClaim(queryParams);
  }
  /**
   * reloadAssignedClaim
   *
   */
  reloadAssignedClaim() {
    this.getTotalAssignedClaimCount(this.queryParams).subscribe(data => {
      this.pagination = {
        ...this.pagination,
        ...{
          count: data,
          orderBy: 'Severity desc, CreatedDate desc',
          sortDirection: 'desc'
        }
      };
      const paginationInfo = {
        currentPage: _quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.currentPage,
        offset: this.pagination.pageSize * (_quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.currentPage - 1),
        pageSize: this.pagination.pageSize
      };
      this.handlePaginationChange(paginationInfo);
    });
  }
  /**
   * reloadAllClaims
   *
   */
  reloadAllClaims() {
    this.getTotalClaimCount(this.queryParams).subscribe(data => {
      this.pagination = {
        ...this.pagination,
        ...{
          count: data,
          orderBy: 'CreatedDate desc',
          sortDirection: 'desc'
        }
      };
      const paginationInfo = {
        currentPage: _quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.currentPage,
        offset: this.pagination.pageSize * (_quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.currentPage - 1),
        pageSize: this.pagination.pageSize
      };
      this.handlePaginationChange(paginationInfo);
    });
  }
  /**
   *
   *
   */
  getAssignedStatusCount() {
    this.commonService.showLoading();
    this.claimService.getAssignedStatusCount().subscribe({
      next: data => {
        this.commonService.hideLoading();
        this.totalAssignedCount = data?.data?.totalAssigned;
        this.todayAssignedCount = data?.data?.todayAssigned;
        this.inprogressCount = data?.data?.inProgress;
        this.yetToStartCount = data?.data?.yetToStart;
      },
      error: error => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
  * changeTab
  */
  changeTab(item) {
    this.claimMenuTabs.filter(q => q.active = false);
    this.activeTab = item;
    item.active = true;
    this.claimMenuTabs = [...this.claimMenuTabs];
    this.tableData = [];
    if (item.name === 'assigned') {
      this.tableConfig = {
        ...src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_1__.ClaimAssignedTableConfig
      };
      this.reloadAssignedClaim();
      this.getAssignedStatusCount();
    } else {
      this.tableConfig = {
        ...src_app_config_display_claims_table_config__WEBPACK_IMPORTED_MODULE_1__.ClaimALLTableConfig
      };
      this.reloadAllClaims();
    }
  }
  /**
  *
  * @param event
  */
  updateInput(event) {
    if (event.name == 'fromDate') {
      this.creationStartDateTextBox.value = event.value;
      this.creationEndDateTextBox.minDate = dayjs__WEBPACK_IMPORTED_MODULE_6__(event.value).toDate();
    } else if (event.name == 'toDate') {
      this.creationEndDateTextBox.value = event.value;
    } else if (event.name == 'effective') {
      this.effectiveDateTextBox.value = event.value;
    } else if (event.name == 'expiration') {
      this.expireDateTextBox.value = event.value;
    }
    this.applyButton = {
      ...this.applyButton,
      type: 'primary'
    };
  }
  /**
  * pull data and open filter panel
  */
  openFilter() {
    if (!this.filterDataLoaded) {
      this.commonService.showLoading();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.forkJoin)([this.caseService.getOrganizations(), this.claimService.getCustomerByOrgId(this.userDetail.organizationDetail.id), this.claimService.getAssignee(), this.vehicleService.getVehicleMake()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(([orgList, CustomerList, assigneeList, vehicleMake]) => {
        return {
          orgList,
          CustomerList,
          assigneeList,
          vehicleMake
        };
      })).subscribe(result => {
        this.filterModal[1] = {
          ...this.filterModal[1],
          selectedOption: {
            'label': this.userDetail?.organizationDetail.name,
            'value': this.userDetail?.organizationDetail.id
          },
          options: result.orgList?.data.map(x => {
            return {
              label: x.name,
              value: x.id
            };
          })
        };
        const customerListOptions = result.CustomerList?.map(x => {
          return {
            label: x.CustomerName,
            value: x.CustomerName
          };
        });
        const customerAllOption = {
          label: 'All',
          value: 'All',
          index: 0,
          subLabel: '',
          contactId: 0,
          companyOrgType: '',
          companyId: 0,
          isIndividual: true
        };
        customerListOptions.unshift(customerAllOption);
        this.customerList = customerListOptions;
        this.selectedCustomer = [customerAllOption.value];
        let assignedListOptions = [];
        const assignedAllOption = {
          label: 'All',
          value: 'All',
          index: 0,
          subLabel: '',
          contactId: 0,
          companyOrgType: '',
          companyId: 0,
          isIndividual: true
        };
        assignedListOptions = result.assigneeList?.data.map(x => {
          return {
            label: x.name,
            value: x.id
          };
        });
        assignedListOptions.unshift(assignedAllOption);
        this.assignedList = assignedListOptions;
        this.selectedAssigned = [assignedAllOption.value];
        this.filterModal[2] = {
          ...this.filterModal[2],
          options: Object.keys(src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__.STATUS_TEXT_DICT).map(x => {
            return {
              label: src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_7__.STATUS_TEXT_DICT[x],
              value: x
            };
          })
        };
        this.filterModal[4] = {
          ...this.filterModal[4],
          options: result.vehicleMake.sort((a, b) => a.name.localeCompare(b.name))
        };
        this.filterDataLoaded = true;
        this.commonService.hideLoading();
        this.filter.open();
      });
    } else {
      this.filter.open();
    }
  }
  /**
  * onFormUpdate
  */
  onFormUpdate(output) {
    if (output.name === 'org') {
      this.filterModal[1] = {
        ...this.filterModal[1],
        selectedOption: output.value
      };
      if (output.value) {
        this.filterForm.get(output.name).setValue(output.value.value);
        this.getCustomer(output.value.value);
      } else {
        const customerAllOption = {
          label: 'All',
          value: 'All',
          index: 0,
          subLabel: '',
          contactId: 0,
          companyOrgType: '',
          companyId: 0,
          isIndividual: true
        };
        this.customerList = [customerAllOption];
        this.selectedCustomer = [customerAllOption.value];
      }
    } else if (output.name === 'statusdto') {
      this.filterModal[2] = {
        ...this.filterModal[2],
        selectedOption: output.value
      };
      this.filterForm.get(output.name).setValue(output.value);
    } else if (output.name === 'match') {
      this.isActiveClaims = output.value === 'active_claims';
    } else if (output.name === 'vehicleNo') {
      this.filterModal[3].value = output.value;
      this.filterForm.get(output.name).setValue(output.value);
    } else if (output.name === 'make') {
      this.filterModal[4] = {
        ...this.filterModal[4],
        selectedOption: output.value
      };
      this.filterForm.get(output.name).setValue(output.value);
    } else if (output.name === 'vin') {
      this.filterModal[5].value = output.value;
      this.filterForm.get(output.name).setValue(output.value);
    }
    //this.filterForm.get(output.name).setValue(output.value);
    this.applyButton = {
      ...this.applyButton,
      type: 'primary'
    };
  }
  /**
   *
   * @param orgId
   */
  getCustomer(orgId) {
    this.commonService.showLoading();
    this.claimService.getCustomerByOrgId(orgId).subscribe({
      next: data => {
        this.commonService.hideLoading();
        const customerListOptions = data?.map(x => {
          return {
            label: x.CustomerName,
            value: x.CustomerName
          };
        });
        const customerAllOption = {
          label: 'All',
          value: 'All',
          index: 0,
          subLabel: '',
          contactId: 0,
          companyOrgType: '',
          companyId: 0,
          isIndividual: true
        };
        customerListOptions.unshift(customerAllOption);
        this.customerList = customerListOptions;
        this.selectedCustomer = [customerAllOption.value];
      }
    });
  }
  /**
  * navigate
  *
  */
  navigate() {
    this.router.navigate(['claim/claim-detail/0']);
  }
  /**
  * handlePaginationChange
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
    this.commonService.showLoading();
    if (this.activeTab.name === 'assigned') {
      this.getAssignedClaims();
    } else {
      this.getClaims();
    }
  }
  /**
  *applyFilter
  */
  applyFilter() {
    var _this3 = this;
    this.filter.close();
    this.queryParams = this.getFilterQuery();
    if (this.activeTab.name === 'assigned') {
      this.getTotalAssignedClaimCount(this.queryParams).subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (count) {
          _this3.pagination = {
            ..._this3.pagination,
            ...{
              count: count,
              currentPage: _quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.currentPage
            }
          };
          _quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.filterDetail.pagination = _this3.pagination;
          yield _this3.getAssignedClaims();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } else {
      this.getTotalClaimCount(this.queryParams).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (count) {
          _this3.pagination = {
            ..._this3.pagination,
            ...{
              count: count,
              currentPage: _quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.currentPage
            }
          };
          _quote_chq_cases_chq_cases_table_chq_cases_table_component__WEBPACK_IMPORTED_MODULE_4__.ChqCasesTableComponent.filterDetail.pagination = _this3.pagination;
          yield _this3.getClaims();
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }
  /**
  *resetFilter
  */
  resetFilter() {
    this.filterModal[0] = {
      ...this.filterModal[0],
      value: 'all_claims'
    };
    this.selectedCustomer = [this.customerList[0].value];
    this.selectedAssigned = [this.assignedList[0].value];
    this.filterModal[1] = {
      ...this.filterModal[1],
      selectedOption: ''
    };
    if (this.userDetail?.organizationDetail?.id) {
      this.filterForm.get('org').setValue(this.userDetail?.organizationDetail.id);
      this.filterModal[1] = {
        ...this.filterModal[1],
        selectedOption: {
          'label': this.userDetail?.organizationDetail.name,
          'value': this.userDetail?.organizationDetail.id
        }
      };
      this.getCustomer(this.userDetail?.organizationDetail.id);
    }
    this.filterModal[2] = {
      ...this.filterModal[2],
      selectedOption: []
    };
    this.filterModal[3] = {
      ...this.filterModal[3],
      value: ''
    };
    this.filterModal[4] = {
      ...this.filterModal[4],
      selectedOption: []
    };
    this.filterModal[5] = {
      ...this.filterModal[5],
      value: ''
    };
    this.creationEndDateTextBox = {
      ...this.creationEndDateTextBox,
      value: dayjs__WEBPACK_IMPORTED_MODULE_6__().toISOString(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(1, 'year').toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().toDate()
    };
    this.creationStartDateTextBox = {
      ...this.creationStartDateTextBox,
      value: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(6, 'month').toISOString(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().toDate(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(1, 'year').toDate()
    };
    this.expireDateTextBox = {
      ...this.expireDateTextBox,
      value: null,
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(5, 'year').toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().add(5, 'year').toDate()
    };
    this.effectiveDateTextBox = {
      ...this.effectiveDateTextBox,
      value: null,
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().toDate(),
      minDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().subtract(5, 'year').toDate()
    };
    this.filterForm.reset();
  }
  /**
  * preventSpace($event)
  * @return
  */
  preventSpace(event) {
    const pattern = /^[a-zA-Z0-9/]+$/; //regx for only number
    if (event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39) {
      if (!pattern.test(event.key)) {
        event.preventDefault();
      }
    }
  }
  /**
  *
  * @returns
  */
  getFilterQuery() {
    let query = '$filter=';
    // match radio filter
    if (this.filterDataLoaded) {
      if (this.isActiveClaims) {
        const today = new Date().toISOString();
        query += `(ExpirationDate ge ${today}) `;
      }
      //rest filter
      const filterValue = this.filterForm.value;
      Object.keys(filterValue).forEach(key => {
        switch (key) {
          case 'statusdto':
            if (filterValue[key] && filterValue[key].length > 0) {
              if (query !== '$filter=') {
                query = query + ' and ';
              }
              query += ` (${filterValue[key].map(x => 'Status' + ' eq \'' + x.value + '\'').join(' or ')})`;
            }
            break;
          case 'org':
            if (filterValue.org) {
              if (query !== '$filter=') {
                query = query + ' and ';
              }
              query += `OrgId eq ${filterValue.org}`;
            }
            break;
          case 'make':
            if (filterValue.make) {
              if (query !== '$filter=') {
                query = query + ' and ';
              }
              query += `VehicleMake eq '${filterValue.make['name']}'`;
            }
            break;
          case 'vehicleNo':
            if (filterValue.vehicleNo && filterValue.vehicleNo.length > 3) {
              if (query !== '$filter=') {
                query = query + ' and ';
              }
              query += `indexof(VehicleNumber, '${filterValue.vehicleNo.trim()}') gt -1`;
            }
            break;
          case 'vin':
            if (filterValue.vin && filterValue.vin.length > 3) {
              if (query !== '$filter=') {
                query = query + ' and ';
              }
              query += `indexof(Vin, '${filterValue.vin.trim()}') gt -1`;
            }
            break;
        }
      });
      if (this.selectedCustomer && this.selectedCustomer.length > 0 && this.selectedCustomer[0] !== 'All') {
        if (query !== '$filter=') {
          query = query + ' and ';
        }
        query += ` (${this.selectedCustomer.map(x => 'CustomerName' + ' eq \'' + x + '\'').join(' or ')})`;
      }
      if (this.selectedAssigned && this.selectedAssigned.length > 0 && this.selectedAssigned[0] !== 'All') {
        if (query !== '$filter=') {
          query = query + 'and ';
        }
        query += ` (${this.selectedAssigned.map(x => '(AssigneeId' + ' eq ' + x + ' and IsAssignedBack eq false) or (CreatedUserId eq ' + x + ' and (AssigneeId eq null or IsAssignedBack eq true))').join(' or ')})`;
      }
      //creation start to end date range
      if (this.creationStartDateTextBox.value && this.creationEndDateTextBox.value) {
        if (query !== '$filter=') {
          query = query + ' and ';
        }
        const startDate = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.creationStartDateTextBox.value).format('YYYY-MM-DD 00:00:00');
        const endDate = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.creationEndDateTextBox.value).format('YYYY-MM-DD 00:00:00');
        const startDateTimeZone = new Date(new Date(startDate)).toISOString();
        const endDateTimeZone = new Date(new Date(new Date(endDate).toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
        query += `(CreatedDate ge ${startDateTimeZone} AND CreatedDate le ${endDateTimeZone})`;
      }
      if (this.effectiveDateTextBox.value) {
        //effective date range
        if (query !== '$filter=') {
          query = query + ' and ';
        }
        const effectiveDate = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.effectiveDateTextBox.value).format('YYYY-MM-DD 00:00:00');
        const effectiveDateTimeZone = new Date(new Date(new Date(effectiveDate).toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
        query += `EffectiveDate ge ${effectiveDateTimeZone}`;
      }
      if (this.expireDateTextBox.value) {
        //expiration date range
        if (query !== '$filter=') {
          query = query + ' and ';
        }
        const expireDate = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.expireDateTextBox.value).format('YYYY-MM-DD 00:00:00');
        const expireDateTimeZone = new Date(new Date(new Date(expireDate).toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
        query += `ExpirationDate le ${expireDateTimeZone}`;
      }
    }
    if (this.searchString && this.searchString.length > 3) {
      if (query !== '$filter=') {
        query = query + ' and ';
      }
      query += ` indexof(PolicyNo, '${this.searchString.trim()}') gt -1`;
    }
    if (query === '$filter=') {
      query = '';
    }
    return query;
  }
  /**
  *
  * @param searchtext
  */
  search(searchtext) {
    if (searchtext !== '' && searchtext.trim().length < 4) {
      return;
    }
    if (this.searchString === searchtext.trim()) {
      return;
    }
    this.searchString = searchtext.trim();
    this.applyFilter();
  }
  /**
  * Value of customer dropdown changed
  */
  onValueChanged(event) {
    const customer = event.addedItems;
    // IF ALL this the current selection then mark others as unchecked
    if (customer && customer.length > 0) {
      let currentSelectionisAll = false;
      currentSelectionisAll = customer[customer.length - 1].value === 'All';
      if (currentSelectionisAll) {
        this.selectedCustomer = [customer[customer.length - 1].value];
      }
      // Unselect All if other options are selected
      const allSelectedIndex = this.selectedCustomer.findIndex(ele => ele === 'All');
      if (allSelectedIndex !== -1 && this.selectedCustomer.length > 1) {
        const cusSele = [...this.selectedCustomer];
        cusSele.splice(allSelectedIndex, 1);
        this.selectedCustomer = cusSele;
      }
    }
    this.applyButton = {
      ...this.applyButton,
      type: 'primary'
    };
  }
  /**
  * Value of Assigned dropdown changed Assigned
  */
  onAssignedValueChanged(event) {
    const assignee = event.addedItems;
    // IF ALL this the current selection then mark others as unchecked
    if (assignee && assignee.length > 0) {
      let currentSelectionisAll = false;
      currentSelectionisAll = assignee[assignee.length - 1].value === 'All';
      if (currentSelectionisAll) {
        this.selectedAssigned = [assignee[assignee.length - 1].value];
      }
      // Unselect All if other options are selected
      const allSelectedIndex = this.selectedAssigned.findIndex(ele => ele === 'All');
      if (allSelectedIndex !== -1 && this.selectedAssigned.length > 1) {
        const cusSele = [...this.selectedAssigned];
        cusSele.splice(allSelectedIndex, 1);
        this.selectedAssigned = cusSele;
      }
    }
    this.applyButton = {
      ...this.applyButton,
      type: 'primary'
    };
  }
  static #_ = this.ɵfac = function ClaimListComponent_Factory(t) {
    return new (t || ClaimListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_5__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_10__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: ClaimListComponent,
    selectors: [["app-claim-list"]],
    viewQuery: function ClaimListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c4, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.customerDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.assignedDropdownRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.claimTableRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.searchBox = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_5__.ClaimsService])],
    decls: 85,
    vars: 43,
    consts: [[1, "page-container", "mh-0", "mt-0", "fx-col"], [1, "tab-container", "fx-0"], [1, "btn-wrapper", "fx-row"], [1, "main-tab-wrapper"], [3, "mode", "menuItems", "menuItemClick"], ["tabMain", ""], [1, "new-claim-wrapper", "fx-row"], [3, "buttonModel"], [1, "row", "filter-wrapper"], [1, "col-3", "filter-search-wrapper"], [1, "input-wrapper"], ["row", ""], ["type", "text", "autocomplete", "off", "aria-describedby", "search-text", "autofocus", "", "id", "search-box", "autocapitalize", "none", 1, "", 3, "placeholder", "keydown"], ["searchBox", ""], [3, "svgIcon", "click"], [1, "col-9", "flex", 2, "justify-content", "space-between"], [1, "assigned-text-wrapper"], [4, "ngIf"], [3, "buttonModel", "click"], [1, "tab-content", "fx-1"], ["class", "table-container", 4, "ngIf"], ["class", "table-no-data", 4, "ngIf"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [3, "inputModel", "controlOutput"], [1, "search-dropdown"], [1, "input-label"], ["valueExpr", "value", "displayExpr", "label", "height", "40px", "tagTemplate", "customTag", "itemTemplate", "item", 3, "items", "showSelectionControls", "searchEnabled", "showDataBeforeSearch", "multiline", "showClearButton", "value", "valueChange", "onSelectionChanged"], ["customerDropdownRef", ""], ["class", "customer-tags", 4, "dxTemplate", "dxTemplateOf"], ["class", "multiselect-dropdown", "name", "dropdown-up", "location", "after", 3, "options", 4, "ngIf"], ["name", "dropdown-down", "location", "after", 3, "options", 4, "ngIf"], [4, "dxTemplate", "dxTemplateOf"], ["class", "row", 4, "ngIf"], [1, "col-12", "flex", 2, "gap", "10px"], [1, "date-filter", 3, "inputModel", "controlOutput"], [1, "footer"], [1, "col-6"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-claims.png", "alt", ""], ["type", "button", 1, "total-assigned"], [1, "count"], [1, "related-text"], ["type", "button", 1, "today-assigned"], ["type", "button", 1, "inprogress"], ["type", "button", 1, "not-started"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "cellClicked", "onDropdownSelect", "sortChanged", "pageChanged", "i18n"], ["claimTableRef", ""], ["class", "pagination-wrapper row justify-end", 4, "ngIf"], [1, "pagination-wrapper", "row", "justify-end"], [3, "pagination", "paginationChange"], ["paginator", ""], [1, "table-no-data"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""], [1, "customer-tags"], ["name", "dropdown-up", "location", "after", 1, "multiselect-dropdown", 3, "options"], ["name", "dropdown-down", "location", "after", 3, "options"], [1, "customer-list-name"], [1, "customer-list-email"], ["valueExpr", "value", "displayExpr", "label", "height", "40px", "tagTemplate", "customAssignedTag", "itemTemplate", "item", 3, "items", "showSelectionControls", "searchEnabled", "showDataBeforeSearch", "multiline", "showClearButton", "value", "valueChange", "onSelectionChanged"], ["assignedDropdownRef", ""], ["class", "assigned-tags", 4, "dxTemplate", "dxTemplateOf"], [1, "assigned-tags"], [1, "assigned-list-name"], [1, "assigned-list-email"]],
    template: function ClaimListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "chq-tabs", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("menuItemClick", function ClaimListComponent_Template_chq_tabs_menuItemClick_4_listener($event) {
          return ctx.changeTab($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "chq-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10, 11)(12, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ClaimListComponent_Template_input_keydown_12_listener($event) {
          return ctx.preventSpace($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ClaimListComponent_Template_mat_icon_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r32);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](13);
          return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.search(_r2.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 15)(17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, ClaimListComponent_ng_container_18_Template, 25, 16, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "chq-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ClaimListComponent_Template_chq_button_click_19_listener() {
          return ctx.openFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, ClaimListComponent_div_21_Template, 5, 8, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, ClaimListComponent_div_22_Template, 9, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "mat-sidenav-container", 22)(24, "mat-sidenav", 23, 24)(26, "div", 25)(27, "div", 26)(28, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, " Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 28)(31, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ClaimListComponent_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r32);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](25);
          return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](_r6.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "form", 31)(34, "div", 32)(35, "div", 33)(36, "chq-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_36_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 32)(38, "div", 33)(39, "chq-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_39_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 32)(41, "div", 33)(42, "chq-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_42_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 32)(44, "div", 33)(45, "div", 35)(46, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "dx-tag-box", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("valueChange", function ClaimListComponent_Template_dx_tag_box_valueChange_49_listener($event) {
          return ctx.selectedCustomer = $event;
        })("onSelectionChanged", function ClaimListComponent_Template_dx_tag_box_onSelectionChanged_49_listener($event) {
          return ctx.onValueChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, ClaimListComponent_div_51_Template, 2, 2, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](52, ClaimListComponent_dxi_button_52_Template, 1, 1, "dxi-button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](53, ClaimListComponent_dxi_button_53_Template, 1, 1, "dxi-button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, ClaimListComponent_div_54_Template, 5, 2, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, ClaimListComponent_div_55_Template, 12, 14, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 32)(57, "div", 33)(58, "chq-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_58_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div", 32)(60, "div", 33)(61, "chq-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_61_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 32)(63, "div", 33)(64, "chq-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_64_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 32)(66, "div", 44)(67, "chq-input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_67_listener($event) {
          return ctx.updateInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "chq-input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_68_listener($event) {
          return ctx.updateInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "div", 32)(70, "div", 33)(71, "chq-input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_71_listener($event) {
          return ctx.updateInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "div", 32)(73, "div", 33)(74, "chq-input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("controlOutput", function ClaimListComponent_Template_chq_input_controlOutput_74_listener($event) {
          return ctx.updateInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "div", 46)(76, "div", 32)(77, "div", 47)(78, "chq-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ClaimListComponent_Template_chq_button_click_78_listener() {
          return ctx.applyFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "div", 47)(80, "chq-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ClaimListComponent_Template_chq_button_click_80_listener() {
          return ctx.resetFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "div", 48)(82, "div", 49)(83, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](84, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("mode", "underline")("menuItems", ctx.claimMenuTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx.newClaimButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](14, 39, "enter_policy_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.activeTab.name !== "all_claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx.filterButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.tableData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.tableData.length === 0 && !ctx.fetchingAPI);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.filterModal[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.filterModal[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.filterModal[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](48, 41, "customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("items", ctx.customerList)("showSelectionControls", true)("searchEnabled", true)("showDataBeforeSearch", true)("multiline", false)("showClearButton", false)("value", ctx.selectedCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "customTag");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !_r7.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", _r7.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dxTemplateOf", "item");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.activeTab.name !== "assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.filterModal[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.filterModal[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.filterModal[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.creationStartDateTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.creationEndDateTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.effectiveDateTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputModel", ctx.expireDateTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx.applyButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx.resetButton);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavContainer, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_11__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__.ChqButtonComponent, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_13__.ChqTabsComponent, _widgets_xa_table_xa_table_component__WEBPACK_IMPORTED_MODULE_14__.XaTable, src_app_widgets_xa_paginator_xa_paginator_component__WEBPACK_IMPORTED_MODULE_3__.XaPaginator, devextreme_angular__WEBPACK_IMPORTED_MODULE_30__.DxTagBoxComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_31__.DxiButtonComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_32__.DxTemplateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe],
    styles: [".page-container[_ngcontent-%COMP%] {\n  background-color: #F4F5FD;\n  height: calc(100vh - (58px + 1.6vw) - 76px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  border-bottom-style: groove;\n  height: 12vh;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .new-claim-wrapper[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0px 15px 0px 0px;\n  align-items: center;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  display: flex;\n  align-items: end;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin: 20px 15px 5px 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]     .mat-icon {\n  top: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 12px 0px 0px;\n  position: relative;\n  border-radius: 8px;\n  background-color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  border: none !important;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 0px 12px;\n  height: 38px;\n  flex: none;\n  order: 0;\n  align-self: stretch;\n  flex-grow: 1;\n  background: transparent;\n  border: 0px !important;\n  color: var(--xa-black) !important;\n  outline: 0px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill, .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:hover, .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:focus, .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px var(--xa-white) inset !important;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  \n  color: var(--xa-gray);\n  \n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: var(--xa-gray);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: var(--xa-gray);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(.picker-open) {\n  border: 1px solid var(--xa-red);\n  color: var(--xa-red);\n  outline: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill, .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:hover, .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:focus, .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .filter-search-wrapper[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px var(--xa-white) inset !important;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding-left: 10%;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .total-assigned[_ngcontent-%COMP%] {\n  background-color: var(--xa-meadow);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .today-assigned[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-document);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .inprogress[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .not-started[_ngcontent-%COMP%] {\n  background-color: var(--xa-draft);\n  color: var(--xa-black);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .filter-wrapper[_ngcontent-%COMP%]   .assigned-text-wrapper[_ngcontent-%COMP%]   .related-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 10px 10px 0px 10px;\n  overflow: auto;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 130px);\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination-wrapper[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .table-no-data[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n  margin-top: 10%;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .table-no-data[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  gap: 8px;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .mat-drawer-backdrop {\n  position: fixed;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav.filter-sidenav[_ngcontent-%COMP%] {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 74px;\n  width: 74px;\n  max-width: 95%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .span-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr.no-line[_ngcontent-%COMP%] {\n  border: none;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .two-per-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 133px !important;\n  width: auto !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  width: 100%;\n  gap: 5px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  color: var(--xa-dark-gray);\n  padding: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]     .dx-texteditor.dx-editor-outlined {\n  border-radius: 8px;\n  border: none;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]     .dx-tag-container.dx-texteditor-input-container {\n  padding: 12px 16px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .dx-button-has-icon[_ngcontent-%COMP%]   .dx-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .dx-widget.dx-button[_ngcontent-%COMP%]:hover {\n  background: none !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 92%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .customer-list-w[_ngcontent-%COMP%]     .checkbox-wrapper label {\n  display: flex;\n  align-items: center;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .workflow-customer-item .email {\n  display: block;\n  font-style: italic;\n  opacity: 0.7;\n}\n\n  .dx-dropdownlist-popup-wrapper   .dx-list-select-all {\n  display: none;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-list-select-all-label {\n  margin-left: 20px;\n  font-size: 12px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-indeterminate .dx-checkbox-icon::before {\n  background-color: #76d672;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-checked .dx-checkbox-icon {\n  color: #fff;\n  background-color: #76d672;\n  border: 1px solid #76d672 !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-list-item-content {\n  font-size: 12px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-icon {\n  height: 16px;\n  width: 16px;\n  border-radius: 3px;\n  position: absolute;\n  left: 15px;\n  right: 0;\n  color: #fff;\n  overflow: hidden;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-checkbox-checked .dx-checkbox-icon::before {\n  font-size: 12px;\n  top: 35%;\n  font-weight: 700;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-widget {\n  font-size: 16px;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-overlay-content {\n  border: 1px solid #19191b !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-placeholder::before {\n  padding: 12px 16px;\n}\n  .dx-dropdownlist-popup-wrapper .dx-popup-content {\n  max-height: 300px !important;\n}\n  .dx-dropdownlist-popup-wrapper   .dx-template-wrapper {\n  display: inherit;\n}\n  .dx-dropdownlist-popup-wrapper .customer-list-name,   .dx-dropdownlist-popup-wrapper .customer-list-email {\n  color: var(--xa-black);\n  word-break: break-word;\n  white-space: normal;\n}\n  .dx-dropdownlist-popup-wrapper .customer-list-email {\n  opacity: 0.7;\n  font-style: italic;\n}\n\n  .dx-placeholder {\n  font-size: 16px;\n}\n\n  .dx-placeholder::before {\n  padding: 8px 9px;\n}\n\n  .dx-texteditor-input {\n  font-size: 16px;\n  font-family: \"Inter\" !important;\n  height: 19px;\n}\n\n.col-9[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n  .cell-dropdown {\n  width: 183px;\n  padding-right: 5px;\n}\n  .cell-dropdown .selected-label {\n  font-size: 14px !important;\n}\n\n  .mat-header-container {\n  min-width: auto !important;\n  align-items: center !important;\n}\n\n  .mat-sort-header-content {\n  justify-content: center !important;\n  font-size: 10px !important;\n  font-weight: 700 !important;\n  font-family: \"Inter\";\n  font-style: normal;\n  line-height: 15px;\n}\n\n  .mat-mdc-cell {\n  padding: 10px !important;\n  font-size: 14px !important;\n}\n  .mat-mdc-cell .case-status {\n  font-size: 12px !important;\n  line-height: 15px !important;\n}\n\n  .cdk-column-Status {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9jbGFpbS1saXN0L2NsYWltLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBR1E7RUFDSSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQURaO0FBSVE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQUtRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFIWjtBQU1RO0VBQ0ksOEJBQUE7RUFDQSwwQkFBQTtBQUpaO0FBUWdCO0VBQ0ksU0FBQTtBQU5wQjtBQVNnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFQcEI7QUFVb0I7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQVJ0QjtBQVdvQjs7OztFQUlFLCtEQUFBO0FBVHRCO0FBWW9CO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFWdEI7QUFhb0I7RUFDRSw0QkFBQTtFQUNBLHFCQUFBO0FBWHRCO0FBY29CO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQVp0QjtBQWVvQjtFQUNFLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBYnRCO0FBZ0JvQjs7OztFQUlFLCtEQUFBO0FBZHRCO0FBc0JZO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFwQmhCO0FBc0JnQjtFQUNJLGtDQUFBO0VBQ0Esc0JBQUE7QUFwQnBCO0FBdUJnQjtFQUNJLDJDQUFBO0VBQ0Esc0JBQUE7QUFyQnBCO0FBd0JnQjtFQUNJLGdDQUFBO0VBQ0Esc0JBQUE7QUF0QnBCO0FBeUJnQjtFQUNJLGlDQUFBO0VBQ0Esc0JBQUE7QUF2QnBCO0FBMEJnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQXhCcEI7QUEyQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBekJwQjtBQStCSTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBN0JSO0FBZ0NZO0VBQ0ksOEJBQUE7QUE5QmhCO0FBaUNZO0VBQ0ksbUJBQUE7QUEvQmhCO0FBbUNRO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWpDWjtBQW1DWTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7QUFqQ2hCOztBQXVDQTtFQUNJLDZCQUFBO0VBQ0EsdUJBQUE7QUFwQ0o7QUFzQ0k7RUFDSSxlQUFBO0FBcENSO0FBdUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFyQ1I7QUF1Q1E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFyQ1o7QUF3Q1E7RUFDSSxrQkFBQTtBQXRDWjtBQXlDUTtFQUNJLDJCQUFBO0VBQ0Esa0NBQUE7QUF2Q1o7QUEwQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBeENaO0FBMENZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF4Q2hCO0FBNENnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBMUNwQjtBQTRDb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQTFDeEI7QUFnRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBOUNaO0FBZ0RZO0VBQ0ksZ0JBQUE7QUE5Q2hCO0FBa0RnQjtFQUNJLG1CQUFBO0FBaERwQjtBQW1EZ0I7RUFDSSxlQUFBO0FBakRwQjtBQW1Eb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFqRHhCO0FBbUR3QjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBakQ1QjtBQXdEd0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXRENUI7QUE0RFk7RUFDSSxjQUFBO0FBMURoQjtBQTREZ0I7RUFDSSxZQUFBO0FBMURwQjtBQThEWTtFQUNJLFdBQUE7QUE1RGhCO0FBZ0VnQjtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7QUE5RHBCO0FBa0VZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQWhFaEI7QUFpRWdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBL0RwQjtBQWlFZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUEvRHBCO0FBaUVnQjtFQUNJLGtCQUFBO0FBL0RwQjtBQWlFZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUEvRHBCO0FBa0VvQjtFQUNJLDJCQUFBO0FBaEV4QjtBQXNFUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFwRVo7QUFzRVk7RUFDSSxVQUFBO0FBcEVoQjtBQXlFUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXZFWjtBQTZFUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUEzRVo7O0FBaUZJO0VBRUksYUFBQTtBQS9FUjtBQWtGSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQWhGUjtBQW1GSTtFQUVJLHlCQUFBO0FBbEZSO0FBcUZJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFuRlI7QUFzRkk7RUFDSSxlQUFBO0FBcEZSO0FBdUZJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF0RlI7QUF5Rkk7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBdkZSO0FBMEZJO0VBQ0ksZUFBQTtBQXhGUjtBQTJGSTtFQUNJLG9DQUFBO0FBekZSO0FBNEZJO0VBQ0ksa0JBQUE7QUExRlI7QUE0Rkk7RUFDSSw0QkFBQTtBQTFGUjtBQTRGSTtFQUNJLGdCQUFBO0FBMUZSO0FBNEZJO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBMUZSO0FBNkZJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBM0ZSOztBQStGQTtFQUNJLGVBQUE7QUE1Rko7O0FBK0ZBO0VBQ0ksZ0JBQUE7QUE1Rko7O0FBK0ZBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQTVGSjs7QUErRkE7RUFDSSxVQUFBO0FBNUZKOztBQStGQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQTVGSjtBQThGSTtFQUNFLDBCQUFBO0FBNUZOOztBQWdHQTtFQUNJLDBCQUFBO0VBQ0EsOEJBQUE7QUE3Rko7O0FBZ0dBO0VBQ0ksa0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBN0ZKOztBQWdHQTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7QUE3Rko7QUErRkk7RUFDSSwwQkFBQTtFQUNBLDRCQUFBO0FBN0ZSOztBQWlHQTtFQUNJLHVCQUFBO0FBOUZKIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoNThweCArIDEuNnZ3KSAtIDc2cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICAgIC50YWItY29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgLmJ0bi13cmFwcGVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBncm9vdmU7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEydmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmV3LWNsYWltLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluLXRhYi13cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlsdGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAxNXB4IDVweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgLmZpbHRlci1zZWFyY2gtd3JhcHBlciB7XHJcblxyXG4gICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTJweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHZhcigtLXhhLXdoaXRlKSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQ6bm90KC5waWNrZXItb3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCB2YXIoLS14YS13aGl0ZSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hc3NpZ25lZC10ZXh0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRvdGFsLWFzc2lnbmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1tZWFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50b2RheS1hc3NpZ25lZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdXBsb2FkLWRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbnByb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ub3Qtc3RhcnRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtZHJhZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVsYXRlZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFiLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC50YWJsZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDEzMHB4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFibGUtbm8tZGF0YXtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuXHJcbiAgICAgICAgICAgIC5uby1kYXRhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB6LWluZGV4OiA1MDEgIWltcG9ydGFudDtcclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItYmFja2Ryb3B7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtc2lkZW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAgICAgJi5maWx0ZXItc2lkZW5hdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWx0ZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogY2FsYygxNXB4ICsgMC44dncpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg1NXB4ICsgMC44dncpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDc0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGFuLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2JveC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICYubm8tbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXQtc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudHdvLXBlci1yb3cge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTMzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VhcmNoLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAgLmR4LXRleHRlZGl0b3IuZHgtZWRpdG9yLW91dGxpbmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5keC10YWctY29udGFpbmVyLmR4LXRleHRlZGl0b3ItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZHgtYnV0dG9uLWhhcy1pY29uIC5keC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmR4LXdpZGdldC5keC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdXN0b21lci1saXN0LXcge1xyXG4gICAgICAgIDo6bmctZGVlcCAuY2hlY2tib3gtd3JhcHBlciBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICA6Om5nLWRlZXAgLndvcmtmbG93LWN1c3RvbWVyLWl0ZW0gXHJcbiAgICB7XHJcbiAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LWRyb3Bkb3dubGlzdC1wb3B1cC13cmFwcGVyIHtcclxuICAgIDo6bmctZGVlcCAuZHgtbGlzdC1zZWxlY3QtYWxsIHtcclxuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDo6bmctZGVlcCAuZHgtbGlzdC1zZWxlY3QtYWxsLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDo6bmctZGVlcCAuZHgtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAuZHgtY2hlY2tib3gtaWNvbjo6YmVmb3JlIHtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZkNjcyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA6Om5nLWRlZXAgLmR4LWNoZWNrYm94LWNoZWNrZWQgLmR4LWNoZWNrYm94LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NmQ2NzI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc2ZDY3MiFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDo6bmctZGVlcCAuZHgtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgOjpuZy1kZWVwIC5keC1jaGVja2JveC1pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWdyYXkpIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA6Om5nLWRlZXAgLmR4LWNoZWNrYm94LWNoZWNrZWQgLmR4LWNoZWNrYm94LWljb246OmJlZm9yZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5keC13aWRnZXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LW92ZXJsYXktY29udGVudCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5MTkxYiFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLmR4LXBsYWNlaG9sZGVyOjpiZWZvcmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIH1cclxuICAgIC5keC1wb3B1cC1jb250ZW50IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5keC10ZW1wbGF0ZS13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbWVyLWxpc3QtbmFtZSwgLmN1c3RvbWVyLWxpc3QtZW1haWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY3VzdG9tZXItbGlzdC1lbWFpbCB7XHJcbiAgICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC1wbGFjZWhvbGRlcjo6YmVmb3JlIHtcclxuICAgIHBhZGRpbmc6IDhweCA5cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtdGV4dGVkaXRvci1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG59XHJcblxyXG4uY29sLTkge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZWxsLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxODNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBcclxuICAgIC5zZWxlY3RlZC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWhlYWRlci1jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtbWRjLWNlbGwge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNhc2Utc3RhdHVze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLWNvbHVtbi1TdGF0dXMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 49699:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/claim/claim-management/common-layout/common-layout/common-layout.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonLayoutComponent": () => (/* binding */ CommonLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 47695);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/constants/claims.constants */ 97319);
/* harmony import */ var src_app_dialogs_registered_garage_view_estimate_registered_garage_view_estimate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/registered-garage-view-estimate/registered-garage-view-estimate.component */ 15423);
/* harmony import */ var src_app_dialogs_request_missing_information_dialog_request_missing_information_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/request-missing-information-dialog/request-missing-information-dialog.component */ 7091);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/claims/claims.service */ 68317);
/* harmony import */ var src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/monitor/monitor.service */ 11065);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/core/core.service */ 42771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../helper/directive/claim-roles.directive */ 65872);
/* harmony import */ var _shared_history_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/history/history.component */ 65504);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
























const _c0 = ["tabs"];
function CommonLayoutComponent_div_1_div_2_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "mat-icon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "fraud-detection");
  }
}
function CommonLayoutComponent_div_1_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "fraud-detect-positive");
  }
}
function CommonLayoutComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CommonLayoutComponent_div_1_div_2_mat_icon_2_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CommonLayoutComponent_div_1_div_2_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 15)(5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Fraud Detection");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r2.showFraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.showFraudDetected);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r2.showFraudDetected ? "fraud-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.fraudStatusText);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0, a1, a2, a3, a4) {
  return [a0, a1, a2, a3, a4];
};
function CommonLayoutComponent_div_1_div_3_ng_container_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBindV"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](7, _c1, ctx_r16.estimateAmount, ctx_r16.i18n.currencySymbol, ctx_r16.i18n.digitsInfo, ctx_r16.i18n.locale, ctx_r16.i18n.position)));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_11_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CommonLayoutComponent_div_1_div_3_ng_container_11_ng_template_2_Template, 3, 13, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r8.showNARegisteredGarage)("ngIfElse", _r15);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBindV"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction5"](7, _c1, ctx_r17.estimateAmount, ctx_r17.i18n.currencySymbol, ctx_r17.i18n.digitsInfo, ctx_r17.i18n.locale, ctx_r17.i18n.position)));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_12_span_1_Template, 3, 13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CommonLayoutComponent_div_1_div_3_ng_container_12_ng_template_2_Template, 2, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r9.internalGarageApprovedCost())("ngIfElse", _r18);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_15_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_3_ng_container_15_ng_container_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.navigateToEstimate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r23.repairStatus === ctx_r23.CLAIM_STATUS.RepairEstimation ? "btn-disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "save-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "view_estimate"));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_15_ng_container_1_button_1_Template, 5, 5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r20.estimateAmount !== null && ctx_r20.repairStatus !== ctx_r20.CLAIM_STATUS.RepairEstimation)("ngIfElse", _r21);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_15_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_3_ng_container_15_ng_template_2_ng_container_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.requestFor(ctx_r27.requestForEnum.requestForEstimate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r26.isDisabledRequestForEstimate ? "btn-disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "save-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 3, "request_for_estimate"));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, CommonLayoutComponent_div_1_div_3_ng_container_15_ng_template_2_ng_container_0_Template, 6, 5, "ng-container", 32);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimRequestEstimate");
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_15_ng_container_1_Template, 2, 2, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CommonLayoutComponent_div_1_div_3_ng_container_15_ng_template_2_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimViewEstimate");
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r32.viewEstimateThirdPartyRegisteredGarage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "save-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 2, "view_estimate"));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_1_button_1_Template, 5, 4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r29.showThirdPartyViewEstimateButton);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r35.requestFor(ctx_r35.requestForEnum.requestForEstimate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r34.claimStatus === ctx_r34.CLAIM_STATUS.GarageAssignedforClaim || ctx_r34.claimStatus === ctx_r34.CLAIM_STATUS.EstimateRequested ? "" : "btn-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "save-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "request_for_estimate"));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_2_button_1_Template, 5, 5, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r30.showThirdPartyViewEstimateButton);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_1_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CommonLayoutComponent_div_1_div_3_ng_container_16_ng_container_2_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimViewEstimate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimRequestEstimate");
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r40.requestFor(ctx_r40.requestForEnum.requestForInvoice));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r39.claimStatus === "Approved" && (ctx_r39.repairStatus === "RepairInProgress" || ctx_r39.repairStatus === "ReadytoInvoice") ? "" : "btn-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "save-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "request_invoice"));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_1_button_1_Template, 5, 5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r37.showInternalGarageViewInvoiceButton);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r43.viewInvoiceInternalGarage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "save-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 2, "view_invoices"));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_2_button_1_Template, 5, 4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r38.showInternalGarageViewInvoiceButton);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_1_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CommonLayoutComponent_div_1_div_3_ng_container_18_ng_container_2_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimRequestInvoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimViewInvoice");
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r48.requestFor(ctx_r48.requestForEnum.requestForInvoice));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r47.claimStatus === ctx_r47.CLAIM_STATUS.Approved ? "" : "btn-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "save-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "request_invoice"));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_1_button_1_Template, 5, 5, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r45.showThirdPartyViewInvoiceButton);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r51.viewInvoiceThirdPartyRegisteredGarage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("svgIcon", "save-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 2, "view_invoices"));
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_2_button_1_Template, 5, 4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r46.showThirdPartyViewInvoiceButton);
  }
}
function CommonLayoutComponent_div_1_div_3_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_1_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CommonLayoutComponent_div_1_div_3_ng_container_19_ng_container_2_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimRequestInvoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimViewInvoice");
  }
}
function CommonLayoutComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "div", 23)(5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 25)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, CommonLayoutComponent_div_1_div_3_ng_container_11_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, CommonLayoutComponent_div_1_div_3_ng_container_12_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 26)(14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, CommonLayoutComponent_div_1_div_3_ng_container_15_Template, 4, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, CommonLayoutComponent_div_1_div_3_ng_container_16_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, CommonLayoutComponent_div_1_div_3_ng_container_18_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, CommonLayoutComponent_div_1_div_3_ng_container_19_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 9, "repair_approved_cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r3.repairStatus ? ctx_r3.repairStatus : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r3.repairStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.isThirdPartyExternalGarage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r3.isThirdPartyExternalGarage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r3.isThirdPartyExternalGarage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.isThirdPartyExternalGarage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r3.isThirdPartyExternalGarage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.isThirdPartyExternalGarage);
  }
}
function CommonLayoutComponent_div_1_div_5_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "chq-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CommonLayoutComponent_div_1_div_5_chq_button_1_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r54.openReqMissingInfoPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("buttonModel", ctx_r53.reqMissingInfoButtonModel);
  }
}
function CommonLayoutComponent_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_div_5_chq_button_1_Template, 1, 1, "chq-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimMissingInformation");
  }
}
function CommonLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CommonLayoutComponent_div_1_div_2_Template, 9, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CommonLayoutComponent_div_1_div_3_Template, 20, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, CommonLayoutComponent_div_1_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 3)(7, "chq-tabs", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("menuItemClick", function CommonLayoutComponent_div_1_Template_chq_tabs_menuItemClick_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r56.navigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.isEstimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.isEstimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.claimId !== "0" && !ctx_r0.hideRequestMissingInfoButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("mode", "underline")("menuItems", ctx_r0.claimMenuItems);
  }
}
function CommonLayoutComponent_div_5_history_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "history", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("toggleExpand", function CommonLayoutComponent_div_5_history_1_Template_history_toggleExpand_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r59.getHistory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("history", ctx_r58.history)("isLoading", ctx_r58.isHistoryLoading);
  }
}
function CommonLayoutComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_5_history_1_Template, 1, 2, "history", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("chqClaimRoles", "claimHistory");
  }
}
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_5__);
class CommonLayoutComponent {
  /**
   * constructor
   * @param router
   */
  constructor(router, dialog, route, commonService, claimService, monitorService, translateService, coreService, datePipe) {
    this.router = router;
    this.dialog = dialog;
    this.route = route;
    this.commonService = commonService;
    this.claimService = claimService;
    this.monitorService = monitorService;
    this.translateService = translateService;
    this.coreService = coreService;
    this.datePipe = datePipe;
    this.claimMenuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_4__.claimMenuItems;
    this.claimId = '';
    this.objectId = 0; // this is actually claimId, due to unavailability of claimId variable name it's named as objectId
    this.IsEstimateView = false;
    this.subscriptions = [];
    this.roleName = '';
    this.claimStatus = '';
    this.fnolId = '';
    this.isEstimation = false;
    this.repairStatus = null;
    this.estimateAmount = 0;
    this.isThirdPartyExternalGarage = false;
    this.CLAIM_STATUS = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS;
    this.showThirdPartyViewEstimateButton = false;
    this.showThirdPartyViewInvoiceButton = false;
    this.showInternalGarageViewInvoiceButton = false;
    this.hideRequestMissingInfoButton = false;
    this.requestForEnum = {
      requestForInvoice: 1,
      requestForEstimate: 2
    };
    this.reqMissingInfoButtonModel = {
      label: 'request_missing_information',
      type: 'outline',
      icon: 'save-checked'
    };
    this.history = [];
    this.isHistoryLoading = false;
    this.showFraudDetected = false;
    this.fraudStatusText = 'No Fraud Detected';
    this.isDisabledRequestForEstimate = false;
    this.showNARegisteredGarage = true;
    this.i18n = this.commonService.geti18nInfo();
  }
  /**
   * on init
   */
  ngOnInit() {
    this.route?.params.subscribe(value => {
      if (value && value['id']) {
        this.claimId = value['id'];
      }
    });
    if (location.search?.indexOf('readonly') !== -1) {
      this.commonService.isViewOnly = true;
    }
    if (location.pathname.indexOf('estimate') > -1) {
      this.IsEstimateView = true;
    }
    const subs = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_17__.NavigationEnd)).subscribe(event => {
      if (event.url.indexOf('estimate') > -1) {
        this.IsEstimateView = true;
      } else {
        this.IsEstimateView = false;
      }
    });
    const userPermission$ = this.commonService.userProfileData.subscribe(res => {
      if (res?.data) {
        this.commonService.userId = res.data?.id;
        const automotiveServices = res?.data?.userPermission?.automotiveServices;
        const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda claims');
        const permissionList = automotiveService?.permissions;
        this.roleName = automotiveService?.roleName?.toLowerCase();
        this.commonService.roleName = this.roleName;
        const anyPermission = ['claim.selfapproval', 'claim.submitforapproval'].some(itemP => permissionList?.map(item => item?.permissionName).includes(itemP));
        //if (this.roleName?.toLowerCase() != 'claim manager' && this.roleName?.toLowerCase() != 'claim reviewer') {
        // don't show garages except manager and reviewer
        if (!anyPermission) {
          this.claimMenuItems = this.claimMenuItems.filter(q => q.name != 'Garages');
        }
        const workFlowPackage = res.data.userPermission?.orgPackages?.filter(orgPackage => {
          return orgPackage.automotiveServiceName === 'Addenda Claim Workflow';
        });
        if (workFlowPackage && workFlowPackage.length > 0) {
          const {
            permissions
          } = workFlowPackage[0];
          const stagePermission = permissions.filter(perm => {
            return perm.permissionName?.includes('1Stage') != -1 || perm.permissionName?.includes('2Stage') != -1 || perm.permissionName?.includes('3Stage') != -1;
          });
          if (stagePermission && stagePermission.length > 0) {
            this.commonService.claimWorkflowStage = stagePermission[0].permissionName;
          }
        }
        console.log(this.commonService.claimWorkflowStage);
      }
    });
    const claimStatus$ = this.commonService.claimStatus.subscribe(claimStatus => {
      if (claimStatus) {
        this.claimStatus = claimStatus;
        this.isEstimation = !this.checkEstimate();
        this.showThirdPartyViewEstimateButton = this.thirdPartyViewEstimate();
        this.showThirdPartyViewInvoiceButton = this.thirdPartyViewInvoice();
        this.showNARegisteredGarage = this.registeredGarageApprovedCost();
        this.hideRequestMissingInfoButton = this.requestMissingButtonHide();
      }
    });
    const claimDetails$ = this.commonService.claimDetails.subscribe({
      next: response => {
        if (response) {
          this.fnolId = response.fnolId || '';
          this.commonService.fnolId = this.fnolId;
          this.claimDetails = response;
          this.claimStatus = response.claimStatus;
          this.repairStatus = response.garageDetails?.status ? response.garageDetails?.status : null;
          this.isDisabledRequestForEstimate = this.repairStatus === null || this.repairStatus === 'Cancelled';
          this.estimateAmount = response.garageDetails?.estimateAmount ? response.garageDetails?.estimateAmount : null;
          this.isEstimation = !this.checkEstimate();
          this.commonService.claimAssigneeId = response.assigneeId;
          this.commonService.claimCreatedId = response.createdUserId;
          this.isThirdPartyExternalGarage = response.garageDetails?.garageStatus === 'Registered';
          this.commonService.isThirdPartyExternalGarage = this.isThirdPartyExternalGarage;
          this.objectId = response.id;
          this.domainId = response.domainId;
          this.claimNo = response.claimNo;
          this.commonService.fraudStatus = response.fraudStatus;
          if (response.fraudStatus?.toLowerCase() === 'potential fraud detected') {
            this.showFraudDetected = true;
            this.fraudStatusText = 'Fraud Detected';
          }
          this.informUserToApproveClaim();
          this.showThirdPartyViewEstimateButton = this.thirdPartyViewEstimate();
          this.showThirdPartyViewInvoiceButton = this.thirdPartyViewInvoice();
          this.showInternalGarageViewInvoiceButton = this.internalViewInvoice();
          this.hideRequestMissingInfoButton = this.requestMissingButtonHide();
        }
      }
    });
    this.subscriptions.push(subs);
    this.subscriptions.push(userPermission$);
    this.subscriptions.push(claimDetails$);
    this.subscriptions.push(claimStatus$);
  }
  /**
   * informUserToApproveClaim
   */
  informUserToApproveClaim() {
    if (this.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.EstimateApproved && (this.repairStatus.toLowerCase() === 'invoiced' || this.repairStatus.toLowerCase() === 'completed')) {
      const dialogRef = this.commonService.openConfirmYesNoDialogBig('Information', `CLaim #${this.claimNo} has an active invoice available. Please approve the claim to view the invoice.`);
      dialogRef.afterClosed().subscribe(action => {
        if (action) {
          this.commonService.showLoading();
          this.claimService.updateClaimStatus(this.claimId, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated, 'Settlement Initiated').subscribe({
            next: response => {
              if (response) {
                this.commonService.claimStatus.next(src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated);
                this.claimDetails.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated;
                location.reload();
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
  }
  /**
   * navigate to selected route
   * @param item
   */
  navigate(item) {
    const queryParam = location.search;
    const url = item.url;
    const currentUrl = location.pathname;
    if (url === '/claim/claim-detail/{claimId}') {
      if (queryParam.indexOf('mode=edit') !== -1) {
        this.router.navigate([url.replace('{claimId}', this.claimId || '')], {
          queryParams: {
            mode: 'edit'
          }
        });
      } else {
        this.router.navigate([url.replace('{claimId}', this.claimId || '')]);
      }
    } else if (currentUrl === '/claim/claim-detail' || currentUrl === '/claim/claim-detail/0' || currentUrl === `/claim/claim-detail/${this.claimId}`) {
      if (url === '/claim/claim-detail/{claim-detail}' || currentUrl === '/claim/claim-detail/0') {
        return;
      } else {
        if (['draft', 'claimauthenticated'].includes(this.claimStatus?.toLowerCase())) {
          if (this.fnolId == '') {
            if (url.toLowerCase().indexOf('document') != -1 || url.toLowerCase().indexOf('photos') != -1 || url.toLowerCase().indexOf('garage') != -1) return;
          }
        }
        this.tabs?.setActiveMenu(item);
        if (queryParam.indexOf('mode=readonly') !== -1) {
          this.commonService.isViewOnly = true;
          this.router.navigate([url.replace('{claimId}', this.claimId || '')], {
            queryParams: {
              mode: 'readonly'
            }
          });
        } else {
          this.router.navigate([url.replace('{claimId}', this.claimId || '')]);
        }
      }
    } else {
      if (['draft', 'claimauthenticated'].includes(this.claimStatus?.toLowerCase())) {
        if (this.fnolId == '') {
          if (url.toLowerCase().indexOf('document') != -1 || url.toLowerCase().indexOf('photos') != -1 || url.toLowerCase().indexOf('garage') != -1) return;
        }
      }
      this.tabs?.setActiveMenu(item);
      if (queryParam.indexOf('mode=edit') !== -1) {
        this.router.navigate([url.replace('{claimId}', this.claimId || '')], {
          queryParams: {
            mode: 'edit'
          }
        });
      } else if (queryParam.indexOf('mode=readonly') !== -1) {
        this.commonService.isViewOnly = true;
        this.router.navigate([url.replace('{claimId}', this.claimId || '')], {
          queryParams: {
            mode: 'readonly'
          }
        });
      } else {
        this.router.navigate([url.replace('{claimId}', this.claimId || '')]);
      }
    }
  }
  /**
   * navigateToEstimate
   *
   */
  navigateToEstimate() {
    this.router.navigate(['claim/claim-detail/' + this.claimId + '/estimate/']);
  }
  /**
   * requestFor
   *
   */
  requestFor(action) {
    this.monitorService.logEvent('requestFor', ['CommonLayoutComponent', 'addenda-claim', {
      action
    }]);
    this.commonService.showLoading();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.claimService.requestForEstimate(this.claimId, action)).then(response => {
      this.commonService.hideLoading();
      if (response) {
        this.commonService.showInfoToast(5000, response?.message);
      }
    }).catch(err => {
      this.commonService.hideLoading();
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
   * viewEstimateThirdPartyRegisteredGarage
   *
   */
  viewEstimateThirdPartyRegisteredGarage() {
    this.monitorService.logEvent('viewEstimateThirdPartyRegisteredGarage', ['CommonLayoutComponent', 'addenda-claim']);
    this.commonService.showLoading();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.claimService.getEstimateThirdPartyRegisteredGarage(this.claimId)).then(response => {
      this.commonService.hideLoading();
      if (response) {
        const dataToPass = [];
        if (response?.data?.length > 0) {
          response.data.forEach(ele => {
            if (ele.estimateReportName && ele.estimateReportUrl) {
              dataToPass.push({
                serialNo: dataToPass.length + 1,
                name: ele.estimateReportName,
                date: ele.createdDate ? dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(ele.createdDate).local().format() : '-',
                url: ele.estimateReportUrl
              });
            }
            ele.documents.forEach(ele1 => {
              dataToPass.push({
                serialNo: dataToPass.length + 1,
                name: ele1.name,
                date: ele1.createdDate ? dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(ele1.createdDate).local().format() : '-',
                url: ele1.documentUrl
              });
            });
          });
        }
        const dialogRef = this.dialog.open(src_app_dialogs_registered_garage_view_estimate_registered_garage_view_estimate_component__WEBPACK_IMPORTED_MODULE_2__.RegisteredGarageViewEstimateComponent, {
          data: {
            list: dataToPass,
            title: this.translateService.instant('view_estimate'),
            showRejectEstimate: this.claimDetails?.claimStatus === src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.RepairEstimation
          },
          height: 'auto',
          width: '70%',
          autoFocus: true
        });
        dialogRef.afterClosed().subscribe(action => {
          if (action === 'rejectEstimate') {
            const dialogRefReassign = this.commonService.openConfirmYesNoDialogBig('', this.translateService.instant('do_you_want_to_reassign_another_garage'), '', this.translateService.instant('yes'), this.translateService.instant('no'));
            dialogRefReassign.afterClosed().subscribe(action => {
              if (action) {
                this.router.navigate([`claim/claim-detail/${this.claimDetails.claimGuid}/garages`], {
                  queryParams: {
                    reassign: 'true'
                  }
                });
              } else {
                this.viewEstimateThirdPartyRegisteredGarage();
              }
            });
          }
        });
      }
    }).catch(err => {
      this.commonService.hideLoading();
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
   * viewEstimateThirdPartyRegisteredGarage
   *
   */
  viewInvoiceThirdPartyRegisteredGarage() {
    this.monitorService.logEvent('viewInvoiceThirdPartyRegisteredGarage', ['CommonLayoutComponent', 'addenda-claim']);
    this.commonService.showLoading();
    if (this.claimStatus != src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated && this.claimStatus != src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Complete) {
      this.claimService.updateClaimStatus(this.claimId, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated).subscribe({
        next: res => {
          if (res) {
            this.commonService.showInfoToast(0, 'Status changed to ' + src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated);
            this.commonService.claimStatus.next(src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated);
            this.claimDetails.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated;
            location.reload();
          }
        },
        error: err => {
          this.commonService.hideLoading();
          this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
        }
      });
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(this.claimService.getInvoiceThirdPartyRegisteredGarage(this.claimId)).then(response => {
      this.commonService.hideLoading();
      if (response) {
        const dataToPass = [];
        if (response.data) {
          if (response.data?.invoiceReportUrl) {
            dataToPass.push({
              serialNo: dataToPass.length + 1,
              name: 'Invoice Report',
              date: response.data.createdDate ? dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(response.data.createdDate).local().format() : '-',
              url: response.data.invoiceReportUrl
            });
          }
          response.data?.documents.forEach(ele1 => {
            dataToPass.push({
              serialNo: dataToPass.length + 1,
              name: ele1.name,
              date: ele1.createdDate ? dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(ele1.createdDate).local().format() : '-',
              url: ele1.blobUrl
            });
          });
        }
        this.openInvoiceTableDialog(dataToPass);
      }
    }).catch(err => {
      this.commonService.hideLoading();
      this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
    });
  }
  /**
   * viewInvoiceInternalGarage
   *
   */
  viewInvoiceInternalGarage() {
    this.commonService.showLoading();
    this.monitorService.logEvent('viewInvoiceInternalGarage', ['CommonLayoutComponent', 'addenda-claim']);
    if (this.claimStatus != src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated && this.claimStatus != src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Complete) {
      this.claimService.updateClaimStatus(this.claimId, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated).subscribe({
        next: res => {
          if (res) {
            this.commonService.showInfoToast(0, 'Status changed to ' + src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated);
            this.commonService.claimStatus.next(src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated);
            this.claimDetails.claimStatus = src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated;
            location.reload();
          }
        },
        error: err => {
          this.commonService.hideLoading();
          this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
        }
      });
    }
    this.claimService.getInvoiceInternalGarage(this.claimDetails.id).subscribe({
      next: response => {
        this.commonService.hideLoading();
        const dataToPass = [];
        if (response.data) {
          dataToPass.push({
            serialNo: dataToPass.length + 1,
            name: response.data.name,
            date: response.data.date ? dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(response.data.date).local().format() : '-',
            url: response.data.blobUrl
          });
        }
        this.openInvoiceTableDialog(dataToPass);
      },
      error: err => {
        this.commonService.hideLoading();
        this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_19__.SeverityLevel.Error);
      }
    });
  }
  /**
   * openInvoiceTableDialog()
   */
  openInvoiceTableDialog(data) {
    this.dialog.open(src_app_dialogs_registered_garage_view_estimate_registered_garage_view_estimate_component__WEBPACK_IMPORTED_MODULE_2__.RegisteredGarageViewEstimateComponent, {
      data: {
        list: data,
        title: this.translateService.instant('view_invoices')
      },
      height: 'auto',
      width: '70%',
      autoFocus: true
    });
  }
  /**
    Opens a dialog box for the missing information component with the specified data and panel class.
    @returns {void}
  */
  openReqMissingInfoPopup() {
    this.dialog.open(src_app_dialogs_request_missing_information_dialog_request_missing_information_dialog_component__WEBPACK_IMPORTED_MODULE_3__.RequestMissingInformationDialogComponent, {
      data: null,
      height: 'auto',
      panelClass: 'operation-panel',
      autoFocus: false
    });
  }
  /**
   * @returns {void}
  */
  checkEstimate() {
    return [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Draft.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ClaimAuthenticated.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.DetailsUpdated.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.UploadDocuments.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.UploadPhotos.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Submitted.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ReviewInProgress.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Assigned.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.AssignedBack.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.AssignedBackFromReview.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.AssignedBackFromApproval.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Rejected.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ClaimSubmittedForApproval.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.ApprovalReviewInProgress.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.GarageAssignmentRequested.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.GarageAssignmentRequestedRejected.toLowerCase()].includes(this.claimStatus?.toLowerCase()?.trim());
  }
  /**
   * @returns {void}
  */
  requestMissingButtonHide() {
    return [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Approved.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Complete.toLowerCase()].includes(this.claimStatus?.toLowerCase()?.trim());
  }
  /**
   * @returns {void}
  */
  thirdPartyViewEstimate() {
    return [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.RepairEstimation.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Approved.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Complete.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.RepairInvoice.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated.toLocaleLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.InvoiceRequested.toLocaleLowerCase()].includes(this.claimStatus?.toLowerCase()?.trim());
  }
  /**
   * @returns {void}
  */
  thirdPartyViewInvoice() {
    return [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.RepairInvoice.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Complete.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated.toLocaleLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.InvoiceRequested.toLocaleLowerCase()].includes(this.claimStatus?.toLowerCase()?.trim());
  }
  /**
   * RegisteredGarageApprovedCost
   */
  registeredGarageApprovedCost() {
    return [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.GarageAssignedforClaim.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.GarageAssignmentRequestedRejected.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.RepairEstimation.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.EstimateRejected.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.EstimateRequested.toLowerCase()].includes(this.claimStatus?.toLowerCase()?.trim());
  }
  /**
   *
   */
  internalGarageApprovedCost() {
    return [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.GarageAssignedforClaim.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.GarageAssignmentRequestedRejected.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.RepairEstimation.toLowerCase(), src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.EstimateRejected.toLowerCase()].includes(this.claimStatus?.toLowerCase()?.trim());
  }
  /**
   * internalViewInvoice
   *
   */
  internalViewInvoice() {
    return ['invoiced', 'complete'].includes(this.repairStatus?.toLowerCase()?.trim()) && [src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Approved, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.InvoiceRequested, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.SettlementInitiated, src_app_config_constants_claims_constants__WEBPACK_IMPORTED_MODULE_1__.CLAIM_STATUS.Complete].includes(this.claimStatus);
  }
  /**
   * on destroy
   */
  ngOnDestroy() {
    if (this.subscriptions) this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.commonService.userPermission.next(null);
    this.commonService.claimStatus.next(null);
    this.commonService.claimDetails.next(null);
  }
  /**
   * Get history
   */
  getHistory() {
    this.history = [];
    this.isHistoryLoading = true;
    this.coreService.getHistory(this.objectId, this.domainId).subscribe({
      next: response => {
        if (response) {
          let allHistoryData = [];
          for (let i = 0; i < response.length; i++) {
            allHistoryData = [...allHistoryData, ...response[i].auditTrailResponseDetails];
          }
          const data = allHistoryData.map(x => ({
            ...x,
            auditDate: this.datePipe.transform(x.actionedOn, 'dd/MM/YYYY')
          }));
          const mergedHistory = [];
          for (let i = 0; i < data.length; i++) {
            const isExist = mergedHistory.find(x => x.auditDate === data[i].auditDate);
            if (isExist) {
              isExist['auditTrailResponseDetails'].push(data[i]);
            } else {
              const obj = {
                auditDate: data[i].auditDate,
                claimNo: this.claimNo,
                auditTrailResponseDetails: [data[i]]
              };
              mergedHistory.push(obj);
            }
          }
          this.history = mergedHistory;
        }
      },
      complete: () => {
        this.isHistoryLoading = false;
      }
    });
  }
  static #_ = this.ɵfac = function CommonLayoutComponent_Factory(t) {
    return new (t || CommonLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_claims_claims_service__WEBPACK_IMPORTED_MODULE_7__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_monitor_monitor_service__WEBPACK_IMPORTED_MODULE_8__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_9__.CoreService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: CommonLayoutComponent,
    selectors: [["app-common-layout"]],
    viewQuery: function CommonLayoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
      }
    },
    decls: 6,
    vars: 2,
    consts: [[1, "page-container", "mh-0", "mt-0", "fx-col"], ["class", "tab-container fx-0", 4, "ngIf"], [1, "tab-content", "fx-1"], [1, "tab-wrapper"], [4, "ngIf"], [1, "tab-container", "fx-0"], [1, "page-header", "fx-row"], ["class", "header-details fx-col", 4, "ngIf"], [1, "flex-grow"], [3, "mode", "menuItems", "menuItemClick"], ["tabs", ""], [1, "header-details", "fx-col"], [1, "card-frame", "fx-row"], ["class", "fraud-detection-icon", 3, "svgIcon", 4, "ngIf"], ["class", "fraud-detection-positive", 4, "ngIf"], [1, "header"], [1, "meta-container"], [1, "no-fraud-container", 3, "ngClass"], [1, "fraud-detection-icon", 3, "svgIcon"], [1, "fraud-detection-positive"], [1, "estimate-repair-cost"], [1, "estimate-content"], [1, "left-content"], [1, "head-label", "fx-row", "align-center"], [1, "content-label"], [1, "content-status", 3, "ngClass"], [1, "btn-wrapper", "fx-row", "row"], [1, "col-6"], ["class", "content-cost", 4, "ngIf", "ngIfElse"], ["estimateAmountRef", ""], [1, "content-cost"], ["estimateNAAmountRef", ""], [4, "chqClaimRoles"], ["requestEstimationRef", ""], ["type", "button", "class", "viewEstimate-btn estimateBtn", 3, "ngClass", "click", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "viewEstimate-btn", "estimateBtn", 3, "ngClass", "click"], [3, "svgIcon"], ["type", "button", "class", "viewEstimate-btn estimateBtn", 3, "click", 4, "ngIf"], ["type", "button", 1, "viewEstimate-btn", "estimateBtn", 3, "click"], ["type", "button", "class", "viewEstimate-btn estimateBtn", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "requestInvoice-btn estimateBtn", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "requestInvoice-btn", "estimateBtn", 3, "ngClass", "click"], ["class", "missing-info-btn", 3, "buttonModel", "click", 4, "chqClaimRoles"], [1, "missing-info-btn", 3, "buttonModel", "click"], [3, "history", "isLoading", "toggleExpand", 4, "chqClaimRoles"], [3, "history", "isLoading", "toggleExpand"]],
    template: function CommonLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CommonLayoutComponent_div_1_Template, 9, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, CommonLayoutComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.IsEstimateView);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.claimId !== "0");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterOutlet, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_10__.ChqButtonComponent, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_11__.ChqTabsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _helper_directive_claim_roles_directive__WEBPACK_IMPORTED_MODULE_12__.ClaimRolesDirective, _shared_history_history_component__WEBPACK_IMPORTED_MODULE_13__.HistoryComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_14__.XaCurrencyPipe],
    styles: [".page-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 28px - (58px + 1.6vw));\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\n  background-color: var(--xa-popup-light-gray);\n  padding-top: 0.5vw;\n  border-bottom: 2px solid rgba(26, 34, 51, 0.2);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin: calc(5px + 1.5vw);\n  gap: 8px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background: #FFFFFF;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .card-frame[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 8px;\n  gap: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .card-frame[_ngcontent-%COMP%]   .fraud-detection-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .card-frame[_ngcontent-%COMP%]   .fraud-detection-positive[_ngcontent-%COMP%] {\n  display: flex;\n  width: 32px;\n  height: 32px;\n  background-color: #5598EB;\n  border-radius: 8px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .card-frame[_ngcontent-%COMP%]   .fraud-detection-positive[_ngcontent-%COMP%]   .fraud-detection-icon[_ngcontent-%COMP%] {\n  align-self: center;\n  margin: 0 auto;\n  width: 16px;\n  height: 16px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .card-frame[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%] {\n  gap: 2px;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.5px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .card-frame[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .no-fraud-container[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #1B03A3;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 375px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding-bottom: 8px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 100%;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .content-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  color: var(--xa-gray);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .content-status[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  font-weight: 500;\n  border-radius: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  min-width: 75px;\n  text-align: center;\n  font-size: 12px !important;\n  line-height: 15px !important;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .approved[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Approved[_ngcontent-%COMP%] {\n  background-color: var(--xa-approve);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .RepairEstimated[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-estimate);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .rejected[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Rejected[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .reject[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Reject[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .closed[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Closed[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Completed[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Complete[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .complete[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-header);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .draft[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Draft[_ngcontent-%COMP%] {\n  background-color: var(--xa-draft);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .repairestimation[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .RepairEstimation[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-estimate);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Authenticated[_ngcontent-%COMP%] {\n  background-color: #00B8D9;\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .uploaddocuments[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .UploadDocuments[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-document);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .addphotos[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .AddPhotos[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .uploadPhotos[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .UploadPhotos[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-photo);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .vehicledetails[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .DetailsUpdated[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .VehicleDetails[_ngcontent-%COMP%] {\n  background-color: var(--xa-vehicle-detail);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .pendingapproval[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .PendingApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ReviewinProgress[_ngcontent-%COMP%] {\n  background-color: #FFF95D;\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .readytoinvoice[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ReadytoInvoice[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ReadyToInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-ready-to-invoice);\n  color: var(--xa-black);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Assigned[_ngcontent-%COMP%] {\n  background-color: #4301FE;\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .AssignedBack[_ngcontent-%COMP%] {\n  background-color: var(--xa-secondary);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Active[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Submitted[_ngcontent-%COMP%] {\n  background-color: #09C269;\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Cancelled[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .invoiceReady[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .InvoiceReady[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .GarageAssigned[_ngcontent-%COMP%] {\n  background-color: var(--xa-bluesh-grey);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .RepairInProgress[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .RepairInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .RepairInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .SettlementInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .SubmittedforApproval[_ngcontent-%COMP%] {\n  background-color: #D2F0AB;\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ApprovalinProgress[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ApprovalReviewInProgress[_ngcontent-%COMP%] {\n  background-color: #ECDBB7;\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .GarageRejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .GarageRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .expires[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Expires[_ngcontent-%COMP%] {\n  background-color: #79bfea;\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .repairestimated[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .RepairEstimated[_ngcontent-%COMP%] {\n  background-color: --xa-repair-estimate;\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .garageassignmentrequestedfailed[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .garageassignmentrequestedrejected[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .GarageAssignmentRequestedRejected[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .rejected[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Rejected[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .reject[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Reject[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .estimaterejected[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .EstimateRejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-sunset-orange);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .estimateapproved[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .EstimateApproved[_ngcontent-%COMP%] {\n  background-color: var(--xa-dp-light-green);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .claimauthenticated[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ClaimAuthenticated[_ngcontent-%COMP%] {\n  background-color: #00B8D9;\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .addphotos[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .AddPhotos[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .uploadphotos[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .uploadPhotos[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .UploadPhotos[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-photo);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .vehicledetails[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .detailsupdated[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .DetailsUpdated[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .VehicleDetails[_ngcontent-%COMP%] {\n  background-color: var(--xa-vehicle-detail);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .reviewinprogress[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ReviewInProgress[_ngcontent-%COMP%] {\n  background-color: #FFF95D;\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .assigned[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Assigned[_ngcontent-%COMP%] {\n  background-color: var(--xa-in-progress);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .assignedback[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .AssignedBack[_ngcontent-%COMP%] {\n  background-color: var(--xa-secondary);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Active[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .submitted[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Submitted[_ngcontent-%COMP%] {\n  background-color: var(--xa-dp-medium-green);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .garageassignedforclaim[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .GarageAssignedforClaim[_ngcontent-%COMP%] {\n  background-color: var(--xa-bluesh-grey);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .repairinitiated[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .RepairInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .repairinvoice[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .RepairInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .settlementinitiated[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .SettlementInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .claimsubmittedforapproval[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ClaimSubmittedForApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-green);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .approvalreviewinprogress[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .ApprovalReviewInProgress[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-yellow);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .garageassignmentrequested[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .GarageAssignmentRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-garage-requested);\n  color: var(--xa-black-medium);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .Invoiced[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .estimate-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .head-label[_ngcontent-%COMP%]   .invoiced[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .estimateBtn[_ngcontent-%COMP%] {\n  height: 20px;\n  border: 1px solid var(--xa-gray);\n  border-radius: 8px;\n  color: var(--xa-black);\n  background-color: var(--xa-white);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .estimateBtn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 400;\n}\n@media (max-width: 850px) {\n  .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-details[_ngcontent-%COMP%]   .estimate-repair-cost[_ngcontent-%COMP%] {\n    width: 295px;\n  }\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .missing-info-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  margin-right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\nchq-tabs[_ngcontent-%COMP%]     button {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n}\n\n.flex-grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.fraud-error[_ngcontent-%COMP%] {\n  color: red !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbGFpbS9jbGFpbS1tYW5hZ2VtZW50L2NvbW1vbi1sYXlvdXQvY29tbW9uLWxheW91dC9jb21tb24tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7QUFDSjtBQUNJO0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FBQ1I7QUFDUTtFQUNJLHlCQUFBO0VBQ0EsUUFBQTtBQUNaO0FBQ1k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ2hCO0FBQ2dCO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNwQjtBQUNvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ3hCO0FBRW9CO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUF4QjtBQUV3QjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQTVCO0FBS3dCO0VBQ0ksUUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSDVCO0FBTXdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBSjVCO0FBU2dCO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFQcEI7QUFTb0I7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0FBUHhCO0FBU3dCO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FBUDVCO0FBUzRCO0VBQ0ksOEJBQUE7QUFQaEM7QUFTZ0M7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFQcEM7QUFVZ0M7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBUnBDO0FBWWdDOztFQUVJLG1DQUFBO0VBQ0EsNkJBQUE7QUFWcEM7QUFhZ0M7RUFDSSwyQ0FBQTtFQUNBLDZCQUFBO0FBWHBDO0FBY2dDOzs7O0VBSUksK0JBQUE7RUFDQSxzQkFBQTtBQVpwQztBQWVnQzs7OztFQUlJLGdDQUFBO0VBQ0EsNkJBQUE7QUFicEM7QUFnQmdDOztFQUVJLHlDQUFBO0VBQ0Esc0JBQUE7QUFkcEM7QUFpQmdDOztFQUVJLGlDQUFBO0VBQ0EsNkJBQUE7QUFmcEM7QUFrQmdDOztFQUVJLDJDQUFBO0VBQ0EsNkJBQUE7QUFoQnBDO0FBbUJnQztFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFqQnBDO0FBb0JnQzs7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0FBbEJwQztBQXFCZ0M7Ozs7RUFJSSx3Q0FBQTtFQUNBLHNCQUFBO0FBbkJwQztBQXNCZ0M7OztFQUdJLDBDQUFBO0VBQ0Esc0JBQUE7QUFwQnBDO0FBdUJnQzs7RUFFSSw0Q0FBQTtFQUNBLHNCQUFBO0FBckJwQztBQXdCZ0M7RUFDSSx5QkFBQTtFQUNBLDZCQUFBO0FBdEJwQztBQXlCZ0M7OztFQUdJLDRDQUFBO0VBQ0Esc0JBQUE7QUF2QnBDO0FBMEJnQztFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUF4QnBDO0FBMkJnQztFQUNJLHFDQUFBO0VBQ0Esc0JBQUE7QUF6QnBDO0FBNEJnQztFQUNJLGdDQUFBO0VBQ0Esc0JBQUE7QUExQnBDO0FBNkJnQztFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUEzQnBDO0FBOEJnQztFQUNJLCtCQUFBO0VBQ0Esc0JBQUE7QUE1QnBDO0FBK0JnQzs7RUFFSSx5Q0FBQTtFQUNBLHNCQUFBO0FBN0JwQztBQWdDZ0M7RUFDSSx1Q0FBQTtFQUNBLHNCQUFBO0FBOUJwQztBQWlDZ0M7O0VBRUksNENBQUE7RUFDQSw2QkFBQTtBQS9CcEM7QUFrQ2dDO0VBQ0kseUNBQUE7RUFDQSxzQkFBQTtBQWhDcEM7QUFtQ2dDO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtBQWpDcEM7QUFvQ2dDO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtBQWxDcEM7QUFxQ2dDOztFQUVJLHlCQUFBO0VBQ0EsNkJBQUE7QUFuQ3BDO0FBc0NnQztFQUNJLHlDQUFBO0VBQ0Esc0JBQUE7QUFwQ3BDO0FBdUNnQztFQUNJLDRDQUFBO0VBQ0EsNkJBQUE7QUFyQ3BDO0FBd0NnQzs7RUFFSSx5QkFBQTtFQUNBLHNCQUFBO0FBdENwQztBQXlDZ0M7O0VBRUksc0NBQUE7RUFDQSw2QkFBQTtBQXZDcEM7QUEwQ2dDOzs7Ozs7O0VBT0ksK0JBQUE7RUFDQSxzQkFBQTtBQXhDcEM7QUEyQ2dDOztFQUVJLHlDQUFBO0VBQ0Esc0JBQUE7QUF6Q3BDO0FBNENnQzs7RUFFSSwwQ0FBQTtFQUNBLHNCQUFBO0FBMUNwQztBQTZDZ0M7O0VBRUkseUJBQUE7RUFDQSxzQkFBQTtBQTNDcEM7QUE4Q2dDOzs7OztFQUtJLHdDQUFBO0VBQ0Esc0JBQUE7QUE1Q3BDO0FBK0NnQzs7OztFQUlJLDBDQUFBO0VBQ0Esc0JBQUE7QUE3Q3BDO0FBZ0RnQzs7RUFFSSx5QkFBQTtFQUNBLDZCQUFBO0FBOUNwQztBQWlEZ0M7O0VBRUksdUNBQUE7RUFDQSxzQkFBQTtBQS9DcEM7QUFrRGdDOztFQUVJLHFDQUFBO0VBQ0Esc0JBQUE7QUFoRHBDO0FBbURnQzs7RUFFSSxnQ0FBQTtFQUNBLHNCQUFBO0FBakRwQztBQW9EZ0M7O0VBRUksMkNBQUE7RUFDQSxzQkFBQTtBQWxEcEM7QUFxRGdDOztFQUVJLHVDQUFBO0VBQ0Esc0JBQUE7QUFuRHBDO0FBc0RnQzs7RUFFSSw0Q0FBQTtFQUNBLDZCQUFBO0FBcERwQztBQXVEZ0M7O0VBRUkseUNBQUE7RUFDQSxzQkFBQTtBQXJEcEM7QUF3RGdDOztFQUVJLGdDQUFBO0VBQ0Esc0JBQUE7QUF0RHBDO0FBeURnQzs7RUFFSSx5Q0FBQTtFQUNBLDZCQUFBO0FBdkRwQztBQTBEZ0M7O0VBRUksMENBQUE7RUFDQSw2QkFBQTtBQXhEcEM7QUEyRGdDOztFQUVJLDRDQUFBO0VBQ0EsNkJBQUE7QUF6RHBDO0FBNERnQzs7RUFFSSx5Q0FBQTtFQUNBLHNCQUFBO0FBMURwQztBQWtFd0I7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUFoRTVCO0FBa0U0QjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaEVoQztBQXNFZ0I7RUFDSTtJQUNJLFlBQUE7RUFwRXRCO0FBQ0Y7QUF3RVk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF0RWhCO0FBMEVRO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXhFWjtBQTRFSTtFQUVJLGNBQUE7QUEzRVI7O0FBZ0ZJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUE3RVI7O0FBaUZBO0VBQ0ksWUFBQTtBQTlFSjs7QUFpRkE7RUFDSSxxQkFBQTtBQTlFSiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyOHB4IC0gKGNhbGMoNThweCArIDEuNnZ3KSkpO1xyXG5cclxuICAgIC50YWItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC41dnc7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQTIyMzMzMztcclxuXHJcbiAgICAgICAgLnBhZ2UtaGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBjYWxjKDVweCArIDEuNXZ3KTtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1mcmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZnJhdWQtZGV0ZWN0aW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZyYXVkLWRldGVjdGlvbi1wb3NpdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTk4RUI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcmF1ZC1kZXRlY3Rpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGEtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uby1mcmF1ZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUIwM0EzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5lc3RpbWF0ZS1yZXBhaXItY29zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzc1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5lc3RpbWF0ZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxlZnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudC1zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHByb3ZlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQXBwcm92ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1hcHByb3ZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUmVwYWlyRXN0aW1hdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVwYWlyLWVzdGltYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVqZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlJlamVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlJlamVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5DbG9zZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkNvbXBsZXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29tcGxldGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkNvbXBsZXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb21wbGV0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlcGFpci1oZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRyYWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EcmFmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWRyYWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwYWlyZXN0aW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUmVwYWlyRXN0aW1hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkF1dGhlbnRpY2F0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCOEQ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVwbG9hZGRvY3VtZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuVXBsb2FkRG9jdW1lbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdXBsb2FkLWRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRwaG90b3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFkZFBob3RvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXBsb2FkUGhvdG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5VcGxvYWRQaG90b3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS11cGxvYWQtcGhvdG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZlaGljbGVkZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EZXRhaWxzVXBkYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuVmVoaWNsZURldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS12ZWhpY2xlLWRldGFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGVuZGluZ2FwcHJvdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5QZW5kaW5nQXBwcm92YWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wZW5kaW5nLWFwcHJvdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZXZpZXdpblByb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjk1RDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVhZHl0b2ludm9pY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlJlYWR5dG9JbnZvaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWFkeVRvSW52b2ljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlYWR5LXRvLWludm9pY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFzc2lnbmVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMDFGRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5Bc3NpZ25lZEJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlN1Ym1pdHRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwOUMyNjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQ2FuY2VsbGVke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmludm9pY2VSZWFkeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuSW52b2ljZVJlYWR5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtaW52b2ljZS1yZWFkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuR2FyYWdlQXNzaWduZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlc2gtZ3JleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUmVwYWlySW5Qcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUmVwYWlySW5pdGlhdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcGVuZGluZy1hcHByb3ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlJlcGFpckludm9pY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1pbnZvaWNlLXJlYWR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5TZXR0bGVtZW50SW5pdGlhdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuU3VibWl0dGVkZm9yQXBwcm92YWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJGMEFCO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5BcHByb3ZhbGluUHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFwcHJvdmFsUmV2aWV3SW5Qcm9ncmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0RCQjc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkdhcmFnZVJlamVjdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtaW52b2ljZS1yZWFkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuR2FyYWdlUmVxdWVzdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcGVuZGluZy1hcHByb3ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGlyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkV4cGlyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzliZmVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpcmVzdGltYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUmVwYWlyRXN0aW1hdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogKC0teGEtcmVwYWlyLWVzdGltYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2FyYWdlYXNzaWdubWVudHJlcXVlc3RlZGZhaWxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2FyYWdlYXNzaWdubWVudHJlcXVlc3RlZHJlamVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5HYXJhZ2VBc3NpZ25tZW50UmVxdWVzdGVkUmVqZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlamVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWplY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZWplY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVzdGltYXRlcmVqZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkVzdGltYXRlUmVqZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1zdW5zZXQtb3JhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lc3RpbWF0ZWFwcHJvdmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5Fc3RpbWF0ZUFwcHJvdmVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtZHAtbGlnaHQtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsYWltYXV0aGVudGljYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuQ2xhaW1BdXRoZW50aWNhdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjhEOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRwaG90b3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFkZFBob3RvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXBsb2FkcGhvdG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cGxvYWRQaG90b3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlVwbG9hZFBob3RvcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVoaWNsZWRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbHN1cGRhdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EZXRhaWxzVXBkYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuVmVoaWNsZURldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS12ZWhpY2xlLWRldGFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmV2aWV3aW5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUmV2aWV3SW5Qcm9ncmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY5NUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2lnbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5Bc3NpZ25lZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWluLXByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hc3NpZ25lZGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkFzc2lnbmVkQmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5BY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJtaXR0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlN1Ym1pdHRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWRwLW1lZGl1bS1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2FyYWdlYXNzaWduZWRmb3JjbGFpbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuR2FyYWdlQXNzaWduZWRmb3JDbGFpbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWJsdWVzaC1ncmV5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBhaXJpbml0aWF0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlJlcGFpckluaXRpYXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBlbmRpbmctYXBwcm92YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBhaXJpbnZvaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5SZXBhaXJJbnZvaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtaW52b2ljZS1yZWFkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0dGxlbWVudGluaXRpYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuU2V0dGxlbWVudEluaXRpYXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsYWltc3VibWl0dGVkZm9yYXBwcm92YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkNsYWltU3VibWl0dGVkRm9yQXBwcm92YWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1saWdodGVyLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwcm92YWxyZXZpZXdpbnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5BcHByb3ZhbFJldmlld0luUHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1saWdodGVyLXllbGxvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdhcmFnZWFzc2lnbm1lbnRyZXF1ZXN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkdhcmFnZUFzc2lnbm1lbnRSZXF1ZXN0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1nYXJhZ2UtcmVxdWVzdGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuSW52b2ljZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmludm9pY2VkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtaW52b2ljZS1yZWFkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVzdGltYXRlQnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmVzdGltYXRlLXJlcGFpci1jb3N0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1pc3NpbmctaW5mby1idG4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDZweCArIDEuNXZ3KTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFiLWNvbnRlbnQge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLXhhLXRhYi1iYWNrZ3JvdW5kKTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuY2hxLXRhYnMge1xyXG4gICAgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGV4LWdyb3cge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZnJhdWQtZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68042:
/*!***********************************************!*\
  !*** ./src/app/modules/claim/claim.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsModule": () => (/* binding */ ClaimsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/google-maps */ 26715);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular */ 82846);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! devextreme-angular */ 83658);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var src_app_guards_claim_guard_claim_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/claim-guard/claim.guard */ 87854);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _claim_dashboard_claim_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./claim-dashboard/claim-dashboard.component */ 73231);
/* harmony import */ var _claim_list_claim_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./claim-list/claim-list.component */ 16340);
/* harmony import */ var _claim_management_common_layout_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim-management/common-layout/common-layout/common-layout.component */ 49699);
/* harmony import */ var src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helper/pipe.module */ 39816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);




















const claimRoutes = [{
  path: '',
  canActivate: [src_app_guards_claim_guard_claim_guard__WEBPACK_IMPORTED_MODULE_0__.ClaimGuard],
  component: _claim_dashboard_claim_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.ClaimDashboardComponent
}, {
  path: 'my-claim',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_claim_claim-list_claim-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../claim/claim-list/claim-list.module */ 32434)).then(m => m.ClaimListModule)
}, {
  path: 'claim-detail/:id',
  component: _claim_management_common_layout_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__.CommonLayoutComponent,
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__.MsalGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_claim_garages_garage-details_garage-details_component_ts-src_app_modu-68e44a"), __webpack_require__.e("default-src_app_helper_form_claim-form_helper_ts"), __webpack_require__.e("src_app_modules_claim_claim-management_claim-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../claim/claim-management/claim-management.module */ 63392)).then(m => m.ClaimManagementModule)
}, {
  path: 'garages',
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__.MsalGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_claim_garages_garage-details_garage-details_component_ts-src_app_modu-68e44a"), __webpack_require__.e("src_app_modules_claim_garages_garages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../claim/garages/garages.module */ 79972)).then(m => m.GaragesModule)
}];
class ClaimsModule {
  static #_ = this.ɵfac = function ClaimsModule_Factory(t) {
    return new (t || ClaimsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: ClaimsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(claimRoutes), _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_14__.NgApexchartsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_17__.DxTagBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_18__.DevExtremeModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__.GoogleMapsModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ClaimsModule, {
    declarations: [_claim_list_claim_list_component__WEBPACK_IMPORTED_MODULE_4__.ClaimListComponent, _claim_dashboard_claim_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.ClaimDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_14__.NgApexchartsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_17__.DxTagBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_18__.DevExtremeModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__.GoogleMapsModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_6__.PipeModule]
  });
})();

/***/ }),

/***/ 26715:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/google-maps/fesm2022/google-maps.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap),
/* harmony export */   "GoogleMapsModule": () => (/* binding */ GoogleMapsModule),
/* harmony export */   "MapBaseLayer": () => (/* binding */ MapBaseLayer),
/* harmony export */   "MapBicyclingLayer": () => (/* binding */ MapBicyclingLayer),
/* harmony export */   "MapCircle": () => (/* binding */ MapCircle),
/* harmony export */   "MapDirectionsRenderer": () => (/* binding */ MapDirectionsRenderer),
/* harmony export */   "MapDirectionsService": () => (/* binding */ MapDirectionsService),
/* harmony export */   "MapEventManager": () => (/* binding */ MapEventManager),
/* harmony export */   "MapGeocoder": () => (/* binding */ MapGeocoder),
/* harmony export */   "MapGroundOverlay": () => (/* binding */ MapGroundOverlay),
/* harmony export */   "MapHeatmapLayer": () => (/* binding */ MapHeatmapLayer),
/* harmony export */   "MapInfoWindow": () => (/* binding */ MapInfoWindow),
/* harmony export */   "MapKmlLayer": () => (/* binding */ MapKmlLayer),
/* harmony export */   "MapMarker": () => (/* binding */ MapMarker),
/* harmony export */   "MapMarkerClusterer": () => (/* binding */ MapMarkerClusterer),
/* harmony export */   "MapPolygon": () => (/* binding */ MapPolygon),
/* harmony export */   "MapPolyline": () => (/* binding */ MapPolyline),
/* harmony export */   "MapRectangle": () => (/* binding */ MapRectangle),
/* harmony export */   "MapTrafficLayer": () => (/* binding */ MapTrafficLayer),
/* harmony export */   "MapTransitLayer": () => (/* binding */ MapTransitLayer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);






/** Manages event on a Google Maps object, ensuring that events are added only when necessary. */
const _c0 = ["*"];
class MapEventManager {
  /** Clears all currently-registered event listeners. */
  _clearListeners() {
    for (const listener of this._listeners) {
      listener.remove();
    }
    this._listeners = [];
  }
  constructor(_ngZone) {
    this._ngZone = _ngZone;
    /** Pending listeners that were added before the target was set. */
    this._pending = [];
    this._listeners = [];
    this._targetStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
  }
  /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */
  getLazyEmitter(name) {
    return this._targetStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(target => {
      const observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        // If the target hasn't been initialized yet, cache the observer so it can be added later.
        if (!target) {
          this._pending.push({
            observable,
            observer
          });
          return undefined;
        }
        const listener = target.addListener(name, event => {
          this._ngZone.run(() => observer.next(event));
        });
        // If there's an error when initializing the Maps API (e.g. a wrong API key), it will
        // return a dummy object that returns `undefined` from `addListener` (see #26514).
        if (!listener) {
          observer.complete();
          return undefined;
        }
        this._listeners.push(listener);
        return () => listener.remove();
      });
      return observable;
    }));
  }
  /** Sets the current target that the manager should bind events to. */
  setTarget(target) {
    const currentTarget = this._targetStream.value;
    if (target === currentTarget) {
      return;
    }
    // Clear the listeners from the pre-existing target.
    if (currentTarget) {
      this._clearListeners();
      this._pending = [];
    }
    this._targetStream.next(target);
    // Add the listeners that were bound before the map was initialized.
    this._pending.forEach(subscriber => subscriber.observable.subscribe(subscriber.observer));
    this._pending = [];
  }
  /** Destroys the manager and clears the event listeners. */
  destroy() {
    this._clearListeners();
    this._pending = [];
    this._targetStream.complete();
  }
}

/// <reference types="google.maps" />
/** default options set to the Googleplex */
const DEFAULT_OPTIONS = {
  center: {
    lat: 37.421995,
    lng: -122.084092
  },
  zoom: 17,
  // Note: the type conversion here isn't necessary for our CI, but it resolves a g3 failure.
  mapTypeId: 'roadmap'
};
/** Arbitrary default height for the map element */
const DEFAULT_HEIGHT = '500px';
/** Arbitrary default width for the map element */
const DEFAULT_WIDTH = '500px';
/**
 * Angular component that renders a Google Map via the Google Maps JavaScript
 * API.
 * @see https://developers.google.com/maps/documentation/javascript/reference/
 */
class GoogleMap {
  set center(center) {
    this._center = center;
  }
  set zoom(zoom) {
    this._zoom = zoom;
  }
  set options(options) {
    this._options = options || DEFAULT_OPTIONS;
  }
  constructor(_elementRef, _ngZone, platformId) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */
    this.height = DEFAULT_HEIGHT;
    /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */
    this.width = DEFAULT_WIDTH;
    this._options = DEFAULT_OPTIONS;
    /** Event emitted when the map is initialized. */
    this.mapInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/events#auth-errors
     */
    this.authFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
     */
    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
     */
    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
     */
    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
     */
    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
     */
    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
     */
    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
     */
    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
     */
    this.headingChanged = this._eventManager.getLazyEmitter('heading_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
     */
    this.idle = this._eventManager.getLazyEmitter('idle');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
     */
    this.maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
     */
    this.mapMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
     */
    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
     */
    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
     */
    this.projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
     */
    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
     */
    this.tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
     */
    this.tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
     */
    this.zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(platformId);
    if (this._isBrowser) {
      const googleMapsWindow = window;
      if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace google not found, cannot construct embedded google ' + 'map. Please install the Google Maps JavaScript API: ' + 'https://developers.google.com/maps/documentation/javascript/' + 'tutorial#Loading_the_Maps_API');
      }
      this._existingAuthFailureCallback = googleMapsWindow.gm_authFailure;
      googleMapsWindow.gm_authFailure = () => {
        if (this._existingAuthFailureCallback) {
          this._existingAuthFailureCallback();
        }
        this.authFailure.emit();
      };
    }
  }
  ngOnChanges(changes) {
    if (changes['height'] || changes['width']) {
      this._setSize();
    }
    const googleMap = this.googleMap;
    if (googleMap) {
      if (changes['options']) {
        googleMap.setOptions(this._combineOptions());
      }
      if (changes['center'] && this._center) {
        googleMap.setCenter(this._center);
      }
      // Note that the zoom can be zero.
      if (changes['zoom'] && this._zoom != null) {
        googleMap.setZoom(this._zoom);
      }
      if (changes['mapTypeId'] && this.mapTypeId) {
        googleMap.setMapTypeId(this.mapTypeId);
      }
    }
  }
  ngOnInit() {
    // It should be a noop during server-side rendering.
    if (this._isBrowser) {
      this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');
      this._setSize();
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.googleMap = new google.maps.Map(this._mapEl, this._combineOptions());
      });
      this._eventManager.setTarget(this.googleMap);
      this.mapInitialized.emit(this.googleMap);
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    if (this._isBrowser) {
      const googleMapsWindow = window;
      googleMapsWindow.gm_authFailure = this._existingAuthFailureCallback;
    }
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
   */
  fitBounds(bounds, padding) {
    this._assertInitialized();
    this.googleMap.fitBounds(bounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
   */
  panBy(x, y) {
    this._assertInitialized();
    this.googleMap.panBy(x, y);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
   */
  panTo(latLng) {
    this._assertInitialized();
    this.googleMap.panTo(latLng);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
   */
  panToBounds(latLngBounds, padding) {
    this._assertInitialized();
    this.googleMap.panToBounds(latLngBounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.googleMap.getBounds() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
   */
  getCenter() {
    this._assertInitialized();
    return this.googleMap.getCenter();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
   */
  getClickableIcons() {
    this._assertInitialized();
    return this.googleMap.getClickableIcons();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
   */
  getHeading() {
    this._assertInitialized();
    return this.googleMap.getHeading();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
   */
  getMapTypeId() {
    this._assertInitialized();
    return this.googleMap.getMapTypeId();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
   */
  getProjection() {
    this._assertInitialized();
    return this.googleMap.getProjection() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
   */
  getStreetView() {
    this._assertInitialized();
    return this.googleMap.getStreetView();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
   */
  getTilt() {
    this._assertInitialized();
    return this.googleMap.getTilt();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
   */
  getZoom() {
    this._assertInitialized();
    return this.googleMap.getZoom();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
   */
  get controls() {
    this._assertInitialized();
    return this.googleMap.controls;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
   */
  get data() {
    this._assertInitialized();
    return this.googleMap.data;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
   */
  get mapTypes() {
    this._assertInitialized();
    return this.googleMap.mapTypes;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
   */
  get overlayMapTypes() {
    this._assertInitialized();
    return this.googleMap.overlayMapTypes;
  }
  _setSize() {
    if (this._mapEl) {
      const styles = this._mapEl.style;
      styles.height = this.height === null ? '' : coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.width = this.width === null ? '' : coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }
  /** Combines the center and zoom and the other map options into a single object */
  _combineOptions() {
    const options = this._options || {};
    return {
      ...options,
      // It's important that we set **some** kind of `center` and `zoom`, otherwise
      // Google Maps will render a blank rectangle which looks broken.
      center: this._center || options.center || DEFAULT_OPTIONS.center,
      zoom: this._zoom ?? options.zoom ?? DEFAULT_OPTIONS.zoom,
      // Passing in an undefined `mapTypeId` seems to break tile loading
      // so make sure that we have some kind of default (see #22082).
      mapTypeId: this.mapTypeId || options.mapTypeId || DEFAULT_OPTIONS.mapTypeId
    };
  }
  /** Asserts that the map has been initialized. */
  _assertInitialized() {
    if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
  }
  static #_ = this.ɵfac = function GoogleMap_Factory(t) {
    return new (t || GoogleMap)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GoogleMap,
    selectors: [["google-map"]],
    inputs: {
      height: "height",
      width: "width",
      mapTypeId: "mapTypeId",
      center: "center",
      zoom: "zoom",
      options: "options"
    },
    outputs: {
      mapInitialized: "mapInitialized",
      authFailure: "authFailure",
      boundsChanged: "boundsChanged",
      centerChanged: "centerChanged",
      mapClick: "mapClick",
      mapDblclick: "mapDblclick",
      mapDrag: "mapDrag",
      mapDragend: "mapDragend",
      mapDragstart: "mapDragstart",
      headingChanged: "headingChanged",
      idle: "idle",
      maptypeidChanged: "maptypeidChanged",
      mapMousemove: "mapMousemove",
      mapMouseout: "mapMouseout",
      mapMouseover: "mapMouseover",
      projectionChanged: "projectionChanged",
      mapRightclick: "mapRightclick",
      tilesloaded: "tilesloaded",
      tiltChanged: "tiltChanged",
      zoomChanged: "zoomChanged"
    },
    exportAs: ["googleMap"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "map-container"]],
    template: function GoogleMap_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GoogleMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'google-map',
      exportAs: 'googleMap',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      template: '<div class="map-container"></div><ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
      }]
    }];
  }, {
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mapInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    authFailure: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    headingChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    maptypeidChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    projectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    tilesloaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    tiltChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zoomChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();
const cssUnitsPattern = /([A-Za-z%]+)$/;
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return cssUnitsPattern.test(value) ? value : `${value}px`;
}

/// <reference types="google.maps" />
class MapBaseLayer {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        this._initializeObject();
      });
      this._assertInitialized();
      this._setMap();
    }
  }
  ngOnDestroy() {
    this._unsetMap();
  }
  _assertInitialized() {
    if (!this._map.googleMap) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
  }
  _initializeObject() {}
  _setMap() {}
  _unsetMap() {}
  static #_ = this.ɵfac = function MapBaseLayer_Factory(t) {
    return new (t || MapBaseLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapBaseLayer,
    selectors: [["map-base-layer"]],
    exportAs: ["mapBaseLayer"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapBaseLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-base-layer',
      exportAs: 'mapBaseLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
 */
class MapBicyclingLayer extends MapBaseLayer {
  _initializeObject() {
    this.bicyclingLayer = new google.maps.BicyclingLayer();
  }
  _setMap() {
    this._assertLayerInitialized();
    this.bicyclingLayer.setMap(this._map.googleMap);
  }
  _unsetMap() {
    if (this.bicyclingLayer) {
      this.bicyclingLayer.setMap(null);
    }
  }
  _assertLayerInitialized() {
    if (!this.bicyclingLayer) {
      throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
    }
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMapBicyclingLayer_BaseFactory;
    return function MapBicyclingLayer_Factory(t) {
      return (ɵMapBicyclingLayer_BaseFactory || (ɵMapBicyclingLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MapBicyclingLayer)))(t || MapBicyclingLayer);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapBicyclingLayer,
    selectors: [["map-bicycling-layer"]],
    exportAs: ["mapBicyclingLayer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-bicycling-layer',
      exportAs: 'mapBicyclingLayer'
    }]
  }], null, null);
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
 * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
 */
class MapCircle {
  set options(options) {
    this._options.next(options || {});
  }
  set center(center) {
    this._center.next(center);
  }
  set radius(radius) {
    this._radius.next(radius);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._center = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._radius = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
     */
    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
     */
    this.circleClick = this._eventManager.getLazyEmitter('click');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
     */
    this.circleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
     */
    this.circleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
     */
    this.circleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
     */
    this.circleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
     */
    this.circleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
     */
    this.circleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
     */
    this.circleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
     */
    this.circleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
     */
    this.circleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
     */
    this.radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
     */
    this.circleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.circle = new google.maps.Circle(options);
        });
        this._assertInitialized();
        this.circle.setMap(this._map.googleMap);
        this._eventManager.setTarget(this.circle);
      });
      this._watchForOptionsChanges();
      this._watchForCenterChanges();
      this._watchForRadiusChanges();
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    if (this.circle) {
      this.circle.setMap(null);
    }
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.circle.getBounds();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
   */
  getCenter() {
    this._assertInitialized();
    return this.circle.getCenter();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.circle.getDraggable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.circle.getEditable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getRadius
   */
  getRadius() {
    this._assertInitialized();
    return this.circle.getRadius();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.circle.getVisible();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._center, this._radius]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, center, radius]) => {
      const combinedOptions = {
        ...options,
        center: center || options.center,
        radius: radius !== undefined ? radius : options.radius
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.circle.setOptions(options);
    });
  }
  _watchForCenterChanges() {
    this._center.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(center => {
      if (center) {
        this._assertInitialized();
        this.circle.setCenter(center);
      }
    });
  }
  _watchForRadiusChanges() {
    this._radius.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(radius => {
      if (radius !== undefined) {
        this._assertInitialized();
        this.circle.setRadius(radius);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.circle) {
        throw Error('Cannot interact with a Google Map Circle before it has been ' + 'initialized. Please wait for the Circle to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapCircle_Factory(t) {
    return new (t || MapCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapCircle,
    selectors: [["map-circle"]],
    inputs: {
      options: "options",
      center: "center",
      radius: "radius"
    },
    outputs: {
      centerChanged: "centerChanged",
      circleClick: "circleClick",
      circleDblclick: "circleDblclick",
      circleDrag: "circleDrag",
      circleDragend: "circleDragend",
      circleDragstart: "circleDragstart",
      circleMousedown: "circleMousedown",
      circleMousemove: "circleMousemove",
      circleMouseout: "circleMouseout",
      circleMouseover: "circleMouseover",
      circleMouseup: "circleMouseup",
      radiusChanged: "radiusChanged",
      circleRightclick: "circleRightclick"
    },
    exportAs: ["mapCircle"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-circle',
      exportAs: 'mapCircle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    radiusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Directions Renderer via the Google Maps
 * JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer
 */
class MapDirectionsRenderer {
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions.directions
   */
  set directions(directions) {
    this._directions = directions;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions
   */
  set options(options) {
    this._options = options;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.directions_changed
     */
    this.directionsChanged = this._eventManager.getLazyEmitter('directions_changed');
  }
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.directionsRenderer = new google.maps.DirectionsRenderer(this._combineOptions());
      });
      this._assertInitialized();
      this.directionsRenderer.setMap(this._googleMap.googleMap);
      this._eventManager.setTarget(this.directionsRenderer);
    }
  }
  ngOnChanges(changes) {
    if (this.directionsRenderer) {
      if (changes['options']) {
        this.directionsRenderer.setOptions(this._combineOptions());
      }
      if (changes['directions'] && this._directions !== undefined) {
        this.directionsRenderer.setDirections(this._directions);
      }
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    if (this.directionsRenderer) {
      this.directionsRenderer.setMap(null);
    }
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getDirections
   */
  getDirections() {
    this._assertInitialized();
    return this.directionsRenderer.getDirections();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getPanel
   */
  getPanel() {
    this._assertInitialized();
    return this.directionsRenderer.getPanel();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getRouteIndex
   */
  getRouteIndex() {
    this._assertInitialized();
    return this.directionsRenderer.getRouteIndex();
  }
  _combineOptions() {
    const options = this._options || {};
    return {
      ...options,
      directions: this._directions || options.directions,
      map: this._googleMap.googleMap
    };
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.directionsRenderer) {
        throw Error('Cannot interact with a Google Map Directions Renderer before it has been ' + 'initialized. Please wait for the Directions Renderer to load before trying ' + 'to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapDirectionsRenderer_Factory(t) {
    return new (t || MapDirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapDirectionsRenderer,
    selectors: [["map-directions-renderer"]],
    inputs: {
      directions: "directions",
      options: "options"
    },
    outputs: {
      directionsChanged: "directionsChanged"
    },
    exportAs: ["mapDirectionsRenderer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapDirectionsRenderer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-directions-renderer',
      exportAs: 'mapDirectionsRenderer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    directions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    directionsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
 */
class MapGroundOverlay {
  /** URL of the image that will be shown in the overlay. */
  set url(url) {
    this._url.next(url);
  }
  /** Bounds for the overlay. */
  get bounds() {
    return this._bounds.value;
  }
  set bounds(bounds) {
    this._bounds.next(bounds);
  }
  /** Opacity of the overlay. */
  set opacity(opacity) {
    this._opacity.next(opacity);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    this._opacity = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /** Whether the overlay is clickable */
    this.clickable = false;
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
     */
    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.dblclick
     */
    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      // The ground overlay setup is slightly different from the other Google Maps objects in that
      // we have to recreate the `GroundOverlay` object whenever the bounds change, because
      // Google Maps doesn't provide an API to update the bounds of an existing overlay.
      this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(bounds => {
        if (this.groundOverlay) {
          this.groundOverlay.setMap(null);
          this.groundOverlay = undefined;
        }
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        if (bounds) {
          this._ngZone.runOutsideAngular(() => {
            this.groundOverlay = new google.maps.GroundOverlay(this._url.getValue(), bounds, {
              clickable: this.clickable,
              opacity: this._opacity.value
            });
          });
          this._assertInitialized();
          this.groundOverlay.setMap(this._map.googleMap);
          this._eventManager.setTarget(this.groundOverlay);
        }
      });
      this._watchForOpacityChanges();
      this._watchForUrlChanges();
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    if (this.groundOverlay) {
      this.groundOverlay.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.groundOverlay.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getOpacity
   */
  getOpacity() {
    this._assertInitialized();
    return this.groundOverlay.getOpacity();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getUrl
   */
  getUrl() {
    this._assertInitialized();
    return this.groundOverlay.getUrl();
  }
  _watchForOpacityChanges() {
    this._opacity.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(opacity => {
      if (opacity != null) {
        this._assertInitialized();
        this.groundOverlay.setOpacity(opacity);
      }
    });
  }
  _watchForUrlChanges() {
    this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(url => {
      this._assertInitialized();
      const overlay = this.groundOverlay;
      overlay.set('url', url);
      // Google Maps only redraws the overlay if we re-set the map.
      overlay.setMap(null);
      overlay.setMap(this._map.googleMap);
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.groundOverlay) {
        throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' + 'Please wait for the GroundOverlay to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapGroundOverlay_Factory(t) {
    return new (t || MapGroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapGroundOverlay,
    selectors: [["map-ground-overlay"]],
    inputs: {
      url: "url",
      bounds: "bounds",
      clickable: "clickable",
      opacity: "opacity"
    },
    outputs: {
      mapClick: "mapClick",
      mapDblclick: "mapDblclick"
    },
    exportAs: ["mapGroundOverlay"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapGroundOverlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-ground-overlay',
      exportAs: 'mapGroundOverlay'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/info-window
 */
class MapInfoWindow {
  set options(options) {
    this._options.next(options || {});
  }
  set position(position) {
    this._position.next(position);
  }
  constructor(_googleMap, _elementRef, _ngZone) {
    this._googleMap = _googleMap;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._position = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
     */
    this.closeclick = this._eventManager.getLazyEmitter('closeclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.content_changed
     */
    this.contentChanged = this._eventManager.getLazyEmitter('content_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
     */
    this.domready = this._eventManager.getLazyEmitter('domready');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.position_changed
     */
    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.zindex_changed
     */
    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      const combinedOptionsChanges = this._combineOptions();
      combinedOptionsChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.infoWindow = new google.maps.InfoWindow(options);
        });
        this._eventManager.setTarget(this.infoWindow);
      });
      this._watchForOptionsChanges();
      this._watchForPositionChanges();
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroy.next();
    this._destroy.complete();
    // If no info window has been created on the server, we do not try closing it.
    // On the server, an info window cannot be created and this would cause errors.
    if (this.infoWindow) {
      this.close();
    }
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
   */
  close() {
    this._assertInitialized();
    this.infoWindow.close();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
   */
  getContent() {
    this._assertInitialized();
    return this.infoWindow.getContent() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window
   * #InfoWindow.getPosition
   */
  getPosition() {
    this._assertInitialized();
    return this.infoWindow.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.infoWindow.getZIndex();
  }
  /**
   * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
   * then the position property of the options input is used instead.
   */
  open(anchor, shouldFocus) {
    this._assertInitialized();
    const anchorObject = anchor ? anchor.getAnchor() : undefined;
    // Prevent the info window from initializing when trying to reopen on the same anchor.
    // Note that when the window is opened for the first time, the anchor will always be
    // undefined. If that's the case, we have to allow it to open in order to handle the
    // case where the window doesn't have an anchor, but is placed at a particular position.
    if (this.infoWindow.get('anchor') !== anchorObject || !anchorObject) {
      this._elementRef.nativeElement.style.display = '';
      // The config is cast to `any`, because the internal typings are out of date.
      this.infoWindow.open({
        map: this._googleMap.googleMap,
        anchor: anchorObject,
        shouldFocus
      });
    }
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._position]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, position]) => {
      const combinedOptions = {
        ...options,
        position: position || options.position,
        content: this._elementRef.nativeElement
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(options => {
      this._assertInitialized();
      this.infoWindow.setOptions(options);
    });
  }
  _watchForPositionChanges() {
    this._position.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(position => {
      if (position) {
        this._assertInitialized();
        this.infoWindow.setPosition(position);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.infoWindow) {
        throw Error('Cannot interact with a Google Map Info Window before it has been ' + 'initialized. Please wait for the Info Window to load before trying to interact with ' + 'it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapInfoWindow_Factory(t) {
    return new (t || MapInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapInfoWindow,
    selectors: [["map-info-window"]],
    hostAttrs: [2, "display", "none"],
    inputs: {
      options: "options",
      position: "position"
    },
    outputs: {
      closeclick: "closeclick",
      contentChanged: "contentChanged",
      domready: "domready",
      positionChanged: "positionChanged",
      zindexChanged: "zindexChanged"
    },
    exportAs: ["mapInfoWindow"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-info-window',
      exportAs: 'mapInfoWindow',
      host: {
        'style': 'display: none'
      }
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    closeclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    contentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    domready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
 */
class MapKmlLayer {
  set options(options) {
    this._options.next(options || {});
  }
  set url(url) {
    this._url.next(url);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
     */
    this.kmlClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml
     * #KmlLayer.defaultviewport_changed
     */
    this.defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
     */
    this.statusChanged = this._eventManager.getLazyEmitter('status_changed');
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => this.kmlLayer = new google.maps.KmlLayer(options));
        this._assertInitialized();
        this.kmlLayer.setMap(this._map.googleMap);
        this._eventManager.setTarget(this.kmlLayer);
      });
      this._watchForOptionsChanges();
      this._watchForUrlChanges();
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    if (this.kmlLayer) {
      this.kmlLayer.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
   */
  getDefaultViewport() {
    this._assertInitialized();
    return this.kmlLayer.getDefaultViewport();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
   */
  getMetadata() {
    this._assertInitialized();
    return this.kmlLayer.getMetadata();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
   */
  getStatus() {
    this._assertInitialized();
    return this.kmlLayer.getStatus();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
   */
  getUrl() {
    this._assertInitialized();
    return this.kmlLayer.getUrl();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.kmlLayer.getZIndex();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._url]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, url]) => {
      const combinedOptions = {
        ...options,
        url: url || options.url
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      if (this.kmlLayer) {
        this._assertInitialized();
        this.kmlLayer.setOptions(options);
      }
    });
  }
  _watchForUrlChanges() {
    this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(url => {
      if (url && this.kmlLayer) {
        this._assertInitialized();
        this.kmlLayer.setUrl(url);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.kmlLayer) {
        throw Error('Cannot interact with a Google Map KmlLayer before it has been ' + 'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapKmlLayer_Factory(t) {
    return new (t || MapKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapKmlLayer,
    selectors: [["map-kml-layer"]],
    inputs: {
      options: "options",
      url: "url"
    },
    outputs: {
      kmlClick: "kmlClick",
      defaultviewportChanged: "defaultviewportChanged",
      statusChanged: "statusChanged"
    },
    exportAs: ["mapKmlLayer"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-kml-layer',
      exportAs: 'mapKmlLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    kmlClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    defaultviewportChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    statusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */
const DEFAULT_MARKER_OPTIONS = {
  position: {
    lat: 37.421995,
    lng: -122.084092
  }
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */
class MapMarker {
  /**
   * Title of the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title
   */
  set title(title) {
    this._title = title;
  }
  /**
   * Position of the marker. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
   */
  set position(position) {
    this._position = position;
  }
  /**
   * Label for the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label
   */
  set label(label) {
    this._label = label;
  }
  /**
   * Whether the marker is clickable. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable
   */
  set clickable(clickable) {
    this._clickable = clickable;
  }
  /**
   * Options used to configure the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
   */
  set options(options) {
    this._options = options;
  }
  /**
   * Icon to be used for the marker.
   * See: https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
   */
  set icon(icon) {
    this._icon = icon;
  }
  /**
   * Whether the marker is visible.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible
   */
  set visible(value) {
    this._visible = value;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
     */
    this.animationChanged = this._eventManager.getLazyEmitter('animation_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
     */
    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
     */
    this.clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
     */
    this.cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
     */
    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
     */
    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
     */
    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
     */
    this.draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
     */
    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
     */
    this.flatChanged = this._eventManager.getLazyEmitter('flat_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
     */
    this.iconChanged = this._eventManager.getLazyEmitter('icon_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
     */
    this.mapMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
     */
    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
     */
    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
     */
    this.mapMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
     */
    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
     */
    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
     */
    this.shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
     */
    this.titleChanged = this._eventManager.getLazyEmitter('title_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
     */
    this.visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
     */
    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.marker = new google.maps.Marker(this._combineOptions());
      });
      this._assertInitialized();
      this.marker.setMap(this._googleMap.googleMap);
      this._eventManager.setTarget(this.marker);
    }
  }
  ngOnChanges(changes) {
    const {
      marker,
      _title,
      _position,
      _label,
      _clickable,
      _icon,
      _visible
    } = this;
    if (marker) {
      if (changes['options']) {
        marker.setOptions(this._combineOptions());
      }
      if (changes['title'] && _title !== undefined) {
        marker.setTitle(_title);
      }
      if (changes['position'] && _position) {
        marker.setPosition(_position);
      }
      if (changes['label'] && _label !== undefined) {
        marker.setLabel(_label);
      }
      if (changes['clickable'] && _clickable !== undefined) {
        marker.setClickable(_clickable);
      }
      if (changes['icon'] && _icon) {
        marker.setIcon(_icon);
      }
      if (changes['visible'] && _visible !== undefined) {
        marker.setVisible(_visible);
      }
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    if (this.marker) {
      this.marker.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
   */
  getAnimation() {
    this._assertInitialized();
    return this.marker.getAnimation() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
   */
  getClickable() {
    this._assertInitialized();
    return this.marker.getClickable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
   */
  getCursor() {
    this._assertInitialized();
    return this.marker.getCursor() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return !!this.marker.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
   */
  getIcon() {
    this._assertInitialized();
    return this.marker.getIcon() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
   */
  getLabel() {
    this._assertInitialized();
    return this.marker.getLabel() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
   */
  getOpacity() {
    this._assertInitialized();
    return this.marker.getOpacity() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
   */
  getPosition() {
    this._assertInitialized();
    return this.marker.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
   */
  getShape() {
    this._assertInitialized();
    return this.marker.getShape() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
   */
  getTitle() {
    this._assertInitialized();
    return this.marker.getTitle() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.marker.getVisible();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.marker.getZIndex() || null;
  }
  /** Gets the anchor point that can be used to attach other Google Maps objects. */
  getAnchor() {
    this._assertInitialized();
    return this.marker;
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */
  _combineOptions() {
    const options = this._options || DEFAULT_MARKER_OPTIONS;
    return {
      ...options,
      title: this._title || options.title,
      position: this._position || options.position,
      label: this._label || options.label,
      clickable: this._clickable ?? options.clickable,
      map: this._googleMap.googleMap,
      icon: this._icon || options.icon,
      visible: this._visible ?? options.visible
    };
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.marker) {
        throw Error('Cannot interact with a Google Map Marker before it has been ' + 'initialized. Please wait for the Marker to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapMarker_Factory(t) {
    return new (t || MapMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapMarker,
    selectors: [["map-marker"]],
    inputs: {
      title: "title",
      position: "position",
      label: "label",
      clickable: "clickable",
      options: "options",
      icon: "icon",
      visible: "visible"
    },
    outputs: {
      animationChanged: "animationChanged",
      mapClick: "mapClick",
      clickableChanged: "clickableChanged",
      cursorChanged: "cursorChanged",
      mapDblclick: "mapDblclick",
      mapDrag: "mapDrag",
      mapDragend: "mapDragend",
      draggableChanged: "draggableChanged",
      mapDragstart: "mapDragstart",
      flatChanged: "flatChanged",
      iconChanged: "iconChanged",
      mapMousedown: "mapMousedown",
      mapMouseout: "mapMouseout",
      mapMouseover: "mapMouseover",
      mapMouseup: "mapMouseup",
      positionChanged: "positionChanged",
      mapRightclick: "mapRightclick",
      shapeChanged: "shapeChanged",
      titleChanged: "titleChanged",
      visibleChanged: "visibleChanged",
      zindexChanged: "zindexChanged"
    },
    exportAs: ["mapMarker"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-marker',
      exportAs: 'mapMarker'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    animationChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clickableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    cursorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    draggableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    flatChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    iconChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    shapeChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    titleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    visibleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/** Default options for a clusterer. */
const DEFAULT_CLUSTERER_OPTIONS = {};
/**
 * Angular component for implementing a Google Maps Marker Clusterer.
 *
 * See https://developers.google.com/maps/documentation/javascript/marker-clustering
 */
class MapMarkerClusterer {
  set averageCenter(averageCenter) {
    this._averageCenter = averageCenter;
  }
  set batchSizeIE(batchSizeIE) {
    this._batchSizeIE = batchSizeIE;
  }
  set calculator(calculator) {
    this._calculator = calculator;
  }
  set clusterClass(clusterClass) {
    this._clusterClass = clusterClass;
  }
  set enableRetinaIcons(enableRetinaIcons) {
    this._enableRetinaIcons = enableRetinaIcons;
  }
  set gridSize(gridSize) {
    this._gridSize = gridSize;
  }
  set ignoreHidden(ignoreHidden) {
    this._ignoreHidden = ignoreHidden;
  }
  set imageExtension(imageExtension) {
    this._imageExtension = imageExtension;
  }
  set imagePath(imagePath) {
    this._imagePath = imagePath;
  }
  set imageSizes(imageSizes) {
    this._imageSizes = imageSizes;
  }
  set maxZoom(maxZoom) {
    this._maxZoom = maxZoom;
  }
  set minimumClusterSize(minimumClusterSize) {
    this._minimumClusterSize = minimumClusterSize;
  }
  set styles(styles) {
    this._styles = styles;
  }
  set title(title) {
    this._title = title;
  }
  set zIndex(zIndex) {
    this._zIndex = zIndex;
  }
  set zoomOnClick(zoomOnClick) {
    this._zoomOnClick = zoomOnClick;
  }
  set options(options) {
    this._options = options;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._currentMarkers = new Set();
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.ariaLabelFn = () => '';
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/
     * _google_markerclustererplus.html#clusteringbegin
     */
    this.clusteringbegin = this._eventManager.getLazyEmitter('clusteringbegin');
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/_google_markerclustererplus.html#clusteringend
     */
    this.clusteringend = this._eventManager.getLazyEmitter('clusteringend');
    /** Emits when a cluster has been clicked. */
    this.clusterClick = this._eventManager.getLazyEmitter('click');
    this._canInitialize = this._googleMap._isBrowser;
  }
  ngOnInit() {
    if (this._canInitialize) {
      if (typeof MarkerClusterer !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('MarkerClusterer class not found, cannot construct a marker cluster. ' + 'Please install the MarkerClustererPlus library: ' + 'https://github.com/googlemaps/js-markerclustererplus');
      }
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.markerClusterer = new MarkerClusterer(this._googleMap.googleMap, [], this._combineOptions());
      });
      this._assertInitialized();
      this._eventManager.setTarget(this.markerClusterer);
    }
  }
  ngAfterContentInit() {
    if (this._canInitialize) {
      this._watchForMarkerChanges();
    }
  }
  ngOnChanges(changes) {
    const {
      markerClusterer: clusterer,
      ariaLabelFn,
      _averageCenter,
      _batchSizeIE,
      _calculator,
      _styles,
      _clusterClass,
      _enableRetinaIcons,
      _gridSize,
      _ignoreHidden,
      _imageExtension,
      _imagePath,
      _imageSizes,
      _maxZoom,
      _minimumClusterSize,
      _title,
      _zIndex,
      _zoomOnClick
    } = this;
    if (clusterer) {
      if (changes['options']) {
        clusterer.setOptions(this._combineOptions());
      }
      if (changes['ariaLabelFn']) {
        clusterer.ariaLabelFn = ariaLabelFn;
      }
      if (changes['averageCenter'] && _averageCenter !== undefined) {
        clusterer.setAverageCenter(_averageCenter);
      }
      if (changes['batchSizeIE'] && _batchSizeIE !== undefined) {
        clusterer.setBatchSizeIE(_batchSizeIE);
      }
      if (changes['calculator'] && !!_calculator) {
        clusterer.setCalculator(_calculator);
      }
      if (changes['clusterClass'] && _clusterClass !== undefined) {
        clusterer.setClusterClass(_clusterClass);
      }
      if (changes['enableRetinaIcons'] && _enableRetinaIcons !== undefined) {
        clusterer.setEnableRetinaIcons(_enableRetinaIcons);
      }
      if (changes['gridSize'] && _gridSize !== undefined) {
        clusterer.setGridSize(_gridSize);
      }
      if (changes['ignoreHidden'] && _ignoreHidden !== undefined) {
        clusterer.setIgnoreHidden(_ignoreHidden);
      }
      if (changes['imageExtension'] && _imageExtension !== undefined) {
        clusterer.setImageExtension(_imageExtension);
      }
      if (changes['imagePath'] && _imagePath !== undefined) {
        clusterer.setImagePath(_imagePath);
      }
      if (changes['imageSizes'] && _imageSizes) {
        clusterer.setImageSizes(_imageSizes);
      }
      if (changes['maxZoom'] && _maxZoom !== undefined) {
        clusterer.setMaxZoom(_maxZoom);
      }
      if (changes['minimumClusterSize'] && _minimumClusterSize !== undefined) {
        clusterer.setMinimumClusterSize(_minimumClusterSize);
      }
      if (changes['styles'] && _styles) {
        clusterer.setStyles(_styles);
      }
      if (changes['title'] && _title !== undefined) {
        clusterer.setTitle(_title);
      }
      if (changes['zIndex'] && _zIndex !== undefined) {
        clusterer.setZIndex(_zIndex);
      }
      if (changes['zoomOnClick'] && _zoomOnClick !== undefined) {
        clusterer.setZoomOnClick(_zoomOnClick);
      }
    }
  }
  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
    this._eventManager.destroy();
    if (this.markerClusterer) {
      this.markerClusterer.setMap(null);
    }
  }
  fitMapToMarkers(padding) {
    this._assertInitialized();
    this.markerClusterer.fitMapToMarkers(padding);
  }
  getAverageCenter() {
    this._assertInitialized();
    return this.markerClusterer.getAverageCenter();
  }
  getBatchSizeIE() {
    this._assertInitialized();
    return this.markerClusterer.getBatchSizeIE();
  }
  getCalculator() {
    this._assertInitialized();
    return this.markerClusterer.getCalculator();
  }
  getClusterClass() {
    this._assertInitialized();
    return this.markerClusterer.getClusterClass();
  }
  getClusters() {
    this._assertInitialized();
    return this.markerClusterer.getClusters();
  }
  getEnableRetinaIcons() {
    this._assertInitialized();
    return this.markerClusterer.getEnableRetinaIcons();
  }
  getGridSize() {
    this._assertInitialized();
    return this.markerClusterer.getGridSize();
  }
  getIgnoreHidden() {
    this._assertInitialized();
    return this.markerClusterer.getIgnoreHidden();
  }
  getImageExtension() {
    this._assertInitialized();
    return this.markerClusterer.getImageExtension();
  }
  getImagePath() {
    this._assertInitialized();
    return this.markerClusterer.getImagePath();
  }
  getImageSizes() {
    this._assertInitialized();
    return this.markerClusterer.getImageSizes();
  }
  getMaxZoom() {
    this._assertInitialized();
    return this.markerClusterer.getMaxZoom();
  }
  getMinimumClusterSize() {
    this._assertInitialized();
    return this.markerClusterer.getMinimumClusterSize();
  }
  getStyles() {
    this._assertInitialized();
    return this.markerClusterer.getStyles();
  }
  getTitle() {
    this._assertInitialized();
    return this.markerClusterer.getTitle();
  }
  getTotalClusters() {
    this._assertInitialized();
    return this.markerClusterer.getTotalClusters();
  }
  getTotalMarkers() {
    this._assertInitialized();
    return this.markerClusterer.getTotalMarkers();
  }
  getZIndex() {
    this._assertInitialized();
    return this.markerClusterer.getZIndex();
  }
  getZoomOnClick() {
    this._assertInitialized();
    return this.markerClusterer.getZoomOnClick();
  }
  _combineOptions() {
    const options = this._options || DEFAULT_CLUSTERER_OPTIONS;
    return {
      ...options,
      ariaLabelFn: this.ariaLabelFn ?? options.ariaLabelFn,
      averageCenter: this._averageCenter ?? options.averageCenter,
      batchSize: this.batchSize ?? options.batchSize,
      batchSizeIE: this._batchSizeIE ?? options.batchSizeIE,
      calculator: this._calculator ?? options.calculator,
      clusterClass: this._clusterClass ?? options.clusterClass,
      enableRetinaIcons: this._enableRetinaIcons ?? options.enableRetinaIcons,
      gridSize: this._gridSize ?? options.gridSize,
      ignoreHidden: this._ignoreHidden ?? options.ignoreHidden,
      imageExtension: this._imageExtension ?? options.imageExtension,
      imagePath: this._imagePath ?? options.imagePath,
      imageSizes: this._imageSizes ?? options.imageSizes,
      maxZoom: this._maxZoom ?? options.maxZoom,
      minimumClusterSize: this._minimumClusterSize ?? options.minimumClusterSize,
      styles: this._styles ?? options.styles,
      title: this._title ?? options.title,
      zIndex: this._zIndex ?? options.zIndex,
      zoomOnClick: this._zoomOnClick ?? options.zoomOnClick
    };
  }
  _watchForMarkerChanges() {
    this._assertInitialized();
    const initialMarkers = [];
    for (const marker of this._getInternalMarkers(this._markers.toArray())) {
      this._currentMarkers.add(marker);
      initialMarkers.push(marker);
    }
    this.markerClusterer.addMarkers(initialMarkers);
    this._markers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(markerComponents => {
      this._assertInitialized();
      const newMarkers = new Set(this._getInternalMarkers(markerComponents));
      const markersToAdd = [];
      const markersToRemove = [];
      for (const marker of Array.from(newMarkers)) {
        if (!this._currentMarkers.has(marker)) {
          this._currentMarkers.add(marker);
          markersToAdd.push(marker);
        }
      }
      for (const marker of Array.from(this._currentMarkers)) {
        if (!newMarkers.has(marker)) {
          markersToRemove.push(marker);
        }
      }
      this.markerClusterer.addMarkers(markersToAdd, true);
      this.markerClusterer.removeMarkers(markersToRemove, true);
      this.markerClusterer.repaint();
      for (const marker of markersToRemove) {
        this._currentMarkers.delete(marker);
      }
    });
  }
  _getInternalMarkers(markers) {
    return markers.filter(markerComponent => !!markerComponent.marker).map(markerComponent => markerComponent.marker);
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.markerClusterer) {
        throw Error('Cannot interact with a MarkerClusterer before it has been initialized. ' + 'Please wait for the MarkerClusterer to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapMarkerClusterer_Factory(t) {
    return new (t || MapMarkerClusterer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MapMarkerClusterer,
    selectors: [["map-marker-clusterer"]],
    contentQueries: function MapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MapMarker, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._markers = _t);
      }
    },
    inputs: {
      ariaLabelFn: "ariaLabelFn",
      averageCenter: "averageCenter",
      batchSize: "batchSize",
      batchSizeIE: "batchSizeIE",
      calculator: "calculator",
      clusterClass: "clusterClass",
      enableRetinaIcons: "enableRetinaIcons",
      gridSize: "gridSize",
      ignoreHidden: "ignoreHidden",
      imageExtension: "imageExtension",
      imagePath: "imagePath",
      imageSizes: "imageSizes",
      maxZoom: "maxZoom",
      minimumClusterSize: "minimumClusterSize",
      styles: "styles",
      title: "title",
      zIndex: "zIndex",
      zoomOnClick: "zoomOnClick",
      options: "options"
    },
    outputs: {
      clusteringbegin: "clusteringbegin",
      clusteringend: "clusteringend",
      clusterClick: "clusterClick"
    },
    exportAs: ["mapMarkerClusterer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MapMarkerClusterer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapMarkerClusterer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'map-marker-clusterer',
      exportAs: 'mapMarkerClusterer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    ariaLabelFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    averageCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    batchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    batchSizeIE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    calculator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clusterClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    enableRetinaIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    gridSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    ignoreHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imageExtension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imagePath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    minimumClusterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zoomOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clusteringbegin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clusteringend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clusterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    _markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [MapMarker, {
        descendants: true
      }]
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
 */
class MapPolygon {
  set options(options) {
    this._options.next(options || {});
  }
  set paths(paths) {
    this._paths.next(paths);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._paths = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
     */
    this.polygonClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
     */
    this.polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
     */
    this.polygonDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
     */
    this.polygonDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
     */
    this.polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
     */
    this.polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
     */
    this.polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
     */
    this.polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
     */
    this.polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
     */
    this.polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
     */
    this.polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.polygon = new google.maps.Polygon(options);
        });
        this._assertInitialized();
        this.polygon.setMap(this._map.googleMap);
        this._eventManager.setTarget(this.polygon);
      });
      this._watchForOptionsChanges();
      this._watchForPathChanges();
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    if (this.polygon) {
      this.polygon.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.polygon.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.polygon.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
   */
  getPath() {
    this._assertInitialized();
    return this.polygon.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
   */
  getPaths() {
    this._assertInitialized();
    return this.polygon.getPaths();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.polygon.getVisible();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._paths]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, paths]) => {
      const combinedOptions = {
        ...options,
        paths: paths || options.paths
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.polygon.setOptions(options);
    });
  }
  _watchForPathChanges() {
    this._paths.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(paths => {
      if (paths) {
        this._assertInitialized();
        this.polygon.setPaths(paths);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.polygon) {
        throw Error('Cannot interact with a Google Map Polygon before it has been ' + 'initialized. Please wait for the Polygon to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapPolygon_Factory(t) {
    return new (t || MapPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapPolygon,
    selectors: [["map-polygon"]],
    inputs: {
      options: "options",
      paths: "paths"
    },
    outputs: {
      polygonClick: "polygonClick",
      polygonDblclick: "polygonDblclick",
      polygonDrag: "polygonDrag",
      polygonDragend: "polygonDragend",
      polygonDragstart: "polygonDragstart",
      polygonMousedown: "polygonMousedown",
      polygonMousemove: "polygonMousemove",
      polygonMouseout: "polygonMouseout",
      polygonMouseover: "polygonMouseover",
      polygonMouseup: "polygonMouseup",
      polygonRightclick: "polygonRightclick"
    },
    exportAs: ["mapPolygon"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-polygon',
      exportAs: 'mapPolygon'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    polygonClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
 */
class MapPolyline {
  set options(options) {
    this._options.next(options || {});
  }
  set path(path) {
    this._path.next(path);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._path = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
     */
    this.polylineClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
     */
    this.polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
     */
    this.polylineDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
     */
    this.polylineDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
     */
    this.polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
     */
    this.polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
     */
    this.polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
     */
    this.polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
     */
    this.polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
     */
    this.polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
     */
    this.polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => this.polyline = new google.maps.Polyline(options));
        this._assertInitialized();
        this.polyline.setMap(this._map.googleMap);
        this._eventManager.setTarget(this.polyline);
      });
      this._watchForOptionsChanges();
      this._watchForPathChanges();
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    if (this.polyline) {
      this.polyline.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.polyline.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.polyline.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
   */
  getPath() {
    this._assertInitialized();
    return this.polyline.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.polyline.getVisible();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._path]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, path]) => {
      const combinedOptions = {
        ...options,
        path: path || options.path
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.polyline.setOptions(options);
    });
  }
  _watchForPathChanges() {
    this._path.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(path => {
      if (path) {
        this._assertInitialized();
        this.polyline.setPath(path);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.polyline) {
        throw Error('Cannot interact with a Google Map Polyline before it has been ' + 'initialized. Please wait for the Polyline to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapPolyline_Factory(t) {
    return new (t || MapPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapPolyline,
    selectors: [["map-polyline"]],
    inputs: {
      options: "options",
      path: "path"
    },
    outputs: {
      polylineClick: "polylineClick",
      polylineDblclick: "polylineDblclick",
      polylineDrag: "polylineDrag",
      polylineDragend: "polylineDragend",
      polylineDragstart: "polylineDragstart",
      polylineMousedown: "polylineMousedown",
      polylineMousemove: "polylineMousemove",
      polylineMouseout: "polylineMouseout",
      polylineMouseover: "polylineMouseover",
      polylineMouseup: "polylineMouseup",
      polylineRightclick: "polylineRightclick"
    },
    exportAs: ["mapPolyline"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-polyline',
      exportAs: 'mapPolyline'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    polylineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
 */
class MapRectangle {
  set options(options) {
    this._options.next(options || {});
  }
  set bounds(bounds) {
    this._bounds.next(bounds);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
     */
    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
     */
    this.rectangleClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
     */
    this.rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
     */
    this.rectangleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
     */
    this.rectangleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
     */
    this.rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
     */
    this.rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
     */
    this.rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
     */
    this.rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
     */
    this.rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
     */
    this.rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
     */
    this.rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.rectangle = new google.maps.Rectangle(options);
        });
        this._assertInitialized();
        this.rectangle.setMap(this._map.googleMap);
        this._eventManager.setTarget(this.rectangle);
      });
      this._watchForOptionsChanges();
      this._watchForBoundsChanges();
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    if (this.rectangle) {
      this.rectangle.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.rectangle.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.rectangle.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.rectangle.getEditable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.rectangle.getVisible();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._bounds]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, bounds]) => {
      const combinedOptions = {
        ...options,
        bounds: bounds || options.bounds
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.rectangle.setOptions(options);
    });
  }
  _watchForBoundsChanges() {
    this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(bounds => {
      if (bounds) {
        this._assertInitialized();
        this.rectangle.setBounds(bounds);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.rectangle) {
        throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' + 'Please wait for the Rectangle to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapRectangle_Factory(t) {
    return new (t || MapRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapRectangle,
    selectors: [["map-rectangle"]],
    inputs: {
      options: "options",
      bounds: "bounds"
    },
    outputs: {
      boundsChanged: "boundsChanged",
      rectangleClick: "rectangleClick",
      rectangleDblclick: "rectangleDblclick",
      rectangleDrag: "rectangleDrag",
      rectangleDragend: "rectangleDragend",
      rectangleDragstart: "rectangleDragstart",
      rectangleMousedown: "rectangleMousedown",
      rectangleMousemove: "rectangleMousemove",
      rectangleMouseout: "rectangleMouseout",
      rectangleMouseover: "rectangleMouseover",
      rectangleMouseup: "rectangleMouseup",
      rectangleRightclick: "rectangleRightclick"
    },
    exportAs: ["mapRectangle"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-rectangle',
      exportAs: 'mapRectangle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
 */
class MapTrafficLayer {
  /**
   * Whether the traffic layer refreshes with updated information automatically.
   */
  set autoRefresh(autoRefresh) {
    this._autoRefresh.next(autoRefresh);
  }
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        this._ngZone.runOutsideAngular(() => {
          this.trafficLayer = new google.maps.TrafficLayer(options);
        });
        this._assertInitialized();
        this.trafficLayer.setMap(this._map.googleMap);
      });
      this._watchForAutoRefreshChanges();
    }
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    if (this.trafficLayer) {
      this.trafficLayer.setMap(null);
    }
  }
  _combineOptions() {
    return this._autoRefresh.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(autoRefresh => {
      const combinedOptions = {
        autoRefresh
      };
      return combinedOptions;
    }));
  }
  _watchForAutoRefreshChanges() {
    this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.trafficLayer.setOptions(options);
    });
  }
  _assertInitialized() {
    if (!this._map.googleMap) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
    if (!this.trafficLayer) {
      throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' + 'Please wait for the Traffic Layer to load before trying to interact with it.');
    }
  }
  static #_ = this.ɵfac = function MapTrafficLayer_Factory(t) {
    return new (t || MapTrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapTrafficLayer,
    selectors: [["map-traffic-layer"]],
    inputs: {
      autoRefresh: "autoRefresh"
    },
    exportAs: ["mapTrafficLayer"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapTrafficLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-traffic-layer',
      exportAs: 'mapTrafficLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    autoRefresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();

/// <reference types="google.maps" />
/**
 * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
 */
class MapTransitLayer extends MapBaseLayer {
  _initializeObject() {
    this.transitLayer = new google.maps.TransitLayer();
  }
  _setMap() {
    this._assertLayerInitialized();
    this.transitLayer.setMap(this._map.googleMap);
  }
  _unsetMap() {
    if (this.transitLayer) {
      this.transitLayer.setMap(null);
    }
  }
  _assertLayerInitialized() {
    if (!this.transitLayer) {
      throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
    }
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMapTransitLayer_BaseFactory;
    return function MapTransitLayer_Factory(t) {
      return (ɵMapTransitLayer_BaseFactory || (ɵMapTransitLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MapTransitLayer)))(t || MapTransitLayer);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapTransitLayer,
    selectors: [["map-transit-layer"]],
    exportAs: ["mapTransitLayer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-transit-layer',
      exportAs: 'mapTransitLayer'
    }]
  }], null, null);
})();

/// <reference types="google.maps" />
/**
 * Angular directive that renders a Google Maps heatmap via the Google Maps JavaScript API.
 *
 * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
 */
class MapHeatmapLayer {
  /**
   * Data shown on the heatmap.
   * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
   */
  set data(data) {
    this._data = data;
  }
  /**
   * Options used to configure the heatmap. See:
   * developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
   */
  set options(options) {
    this._options = options;
  }
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
  }
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      if (!window.google?.maps?.visualization && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace `google.maps.visualization` not found, cannot construct heatmap. ' + 'Please install the Google Maps JavaScript API with the "visualization" library: ' + 'https://developers.google.com/maps/documentation/javascript/visualization');
      }
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.heatmap = new google.maps.visualization.HeatmapLayer(this._combineOptions());
      });
      this._assertInitialized();
      this.heatmap.setMap(this._googleMap.googleMap);
    }
  }
  ngOnChanges(changes) {
    const {
      _data,
      heatmap
    } = this;
    if (heatmap) {
      if (changes['options']) {
        heatmap.setOptions(this._combineOptions());
      }
      if (changes['data'] && _data !== undefined) {
        heatmap.setData(this._normalizeData(_data));
      }
    }
  }
  ngOnDestroy() {
    if (this.heatmap) {
      this.heatmap.setMap(null);
    }
  }
  /**
   * Gets the data that is currently shown on the heatmap.
   * See: developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer
   */
  getData() {
    this._assertInitialized();
    return this.heatmap.getData();
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */
  _combineOptions() {
    const options = this._options || {};
    return {
      ...options,
      data: this._normalizeData(this._data || options.data || []),
      map: this._googleMap.googleMap
    };
  }
  /**
   * Most Google Maps APIs support both `LatLng` objects and `LatLngLiteral`. The latter is more
   * convenient to write out, because the Google Maps API doesn't have to have been loaded in order
   * to construct them. The `HeatmapLayer` appears to be an exception that only allows a `LatLng`
   * object, or it throws a runtime error. Since it's more convenient and we expect that Angular
   * users will load the API asynchronously, we allow them to pass in a `LatLngLiteral` and we
   * convert it to a `LatLng` object before passing it off to Google Maps.
   */
  _normalizeData(data) {
    const result = [];
    data.forEach(item => {
      result.push(isLatLngLiteral(item) ? new google.maps.LatLng(item.lat, item.lng) : item);
    });
    return result;
  }
  /** Asserts that the heatmap object has been initialized. */
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.heatmap) {
        throw Error('Cannot interact with a Google Map HeatmapLayer before it has been ' + 'initialized. Please wait for the heatmap to load before trying to interact with it.');
      }
    }
  }
  static #_ = this.ɵfac = function MapHeatmapLayer_Factory(t) {
    return new (t || MapHeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MapHeatmapLayer,
    selectors: [["map-heatmap-layer"]],
    inputs: {
      data: "data",
      options: "options"
    },
    exportAs: ["mapHeatmapLayer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapHeatmapLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-heatmap-layer',
      exportAs: 'mapHeatmapLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
/** Asserts that an object is a `LatLngLiteral`. */
function isLatLngLiteral(value) {
  return value && typeof value.lat === 'number' && typeof value.lng === 'number';
}
const COMPONENTS = [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer];
class GoogleMapsModule {
  static #_ = this.ɵfac = function GoogleMapsModule_Factory(t) {
    return new (t || GoogleMapsModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: GoogleMapsModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GoogleMapsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      declarations: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})();

/// <reference types="google.maps" />
/**
 * Angular service that wraps the Google Maps DirectionsService from the Google Maps JavaScript
 * API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
 */
class MapDirectionsService {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsService.route
   */
  route(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      // Initialize the `DirectionsService` lazily since the Google Maps API may
      // not have been loaded when the provider is instantiated.
      if (!this._directionsService) {
        this._directionsService = new google.maps.DirectionsService();
      }
      this._directionsService.route(request, (result, status) => {
        this._ngZone.run(() => {
          observer.next({
            result: result || undefined,
            status
          });
          observer.complete();
        });
      });
    });
  }
  static #_ = this.ɵfac = function MapDirectionsService_Factory(t) {
    return new (t || MapDirectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: MapDirectionsService,
    factory: MapDirectionsService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapDirectionsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})();

/// <reference types="google.maps" />
/**
 * Angular service that wraps the Google Maps Geocoder from the Google Maps JavaScript API.
 * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder
 */
class MapGeocoder {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode
   */
  geocode(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      // Initialize the `Geocoder` lazily since the Google Maps API may
      // not have been loaded when the provider is instantiated.
      if (!this._geocoder) {
        this._geocoder = new google.maps.Geocoder();
      }
      this._geocoder.geocode(request, (results, status) => {
        this._ngZone.run(() => {
          observer.next({
            results: results || [],
            status
          });
          observer.complete();
        });
      });
    });
  }
  static #_ = this.ɵfac = function MapGeocoder_Factory(t) {
    return new (t || MapGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: MapGeocoder,
    factory: MapGeocoder.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_modules_claim_claim_module_ts.js.map