"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_customer_customer_module_ts"],{

/***/ 47941:
/*!***********************************************************!*\
  !*** ./src/app/config/display/customer-details-config.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReapirTableConfig": () => (/* binding */ ReapirTableConfig),
/* harmony export */   "CasesTableConfig": () => (/* binding */ CasesTableConfig)
/* harmony export */ });
const ReapirTableConfig = {
    columns: [
        {
            id: 'Id',
            sortable: true,
            header: {
                text: 'booking_id',
                tooltip: '',
            },
            selector: {
                field: 'RepairNumber',
            },
            widget: {
                type: 'text'
            },
            cellStyle: 'text-decoration: underline; color: var(--xa-primary);',
        },
        {
            id: 'CreatedDate',
            sortable: true,
            header: {
                text: 'creation_date',
                tooltip: '',
            },
            selector: {
                field: 'CreatedDate',
            },
            widget: {
                type: 'dateTime'
            },
        },
        {
            id: 'VehicleMake',
            sortable: true,
            header: {
                text: 'vehicle_make',
                tooltip: '',
            },
            selector: {
                field: 'VehicleMake',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'VehicleModel',
            sortable: true,
            header: {
                text: 'vehicle_model',
                tooltip: '',
            },
            selector: {
                field: 'VehicleModel',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'LicensePlateNumber',
            sortable: true,
            header: {
                text: 'license_plate',
                tooltip: '',
            },
            selector: {
                field: 'LicensePlateNumber',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'BookingType',
            sortable: true,
            header: {
                text: 'booking_type',
                tooltip: '',
            },
            selector: {
                field: 'BookingType',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'RepairType',
            sortable: true,
            header: {
                text: 'repair_type',
                tooltip: '',
            },
            selector: {
                field: 'RepairType',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'TotalInvoiceAmount',
            sortable: true,
            header: {
                text: 'total_amount_invoiced',
                tooltip: '',
            },
            selector: {
                field: 'FormattedTotalAmount',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'PaidAmount',
            sortable: true,
            header: {
                text: 'paid_amount',
                tooltip: '',
            },
            selector: {
                field: 'FormattedPaidAmount',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'AmountDue',
            sortable: true,
            header: {
                text: 'due_amount',
                tooltip: '',
            },
            selector: {
                field: 'FormattedDueAmount',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'Status',
            sortable: true,
            header: {
                text: 'status',
                tooltip: '',
            },
            selector: {
                field: 'Status',
            },
            widget: {
                type: 'text'
            }
        },
    ]
};
const CasesTableConfig = {
    columns: [
        {
            id: 'Id',
            sortable: true,
            header: {
                text: 'estimate_id',
                tooltip: '',
            },
            selector: {
                field: 'EstimateNumber',
            },
            widget: {
                type: 'text'
            },
            cellStyle: 'text-decoration: underline; color: var(--xa-primary);',
        },
        {
            id: 'CreatedDate',
            sortable: true,
            header: {
                text: 'creation_date',
                tooltip: '',
            },
            selector: {
                field: 'CreatedDate',
            },
            widget: {
                type: 'dateTime'
            },
        },
        {
            id: 'VehicleMake',
            sortable: true,
            header: {
                text: 'vehicle_make',
                tooltip: '',
            },
            selector: {
                field: 'VehicleMake',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'VehicleModel',
            sortable: true,
            header: {
                text: 'vehicle_model',
                tooltip: '',
            },
            selector: {
                field: 'VehicleModel',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'LicensePlateNumber',
            sortable: true,
            header: {
                text: 'license_plate',
                tooltip: '',
            },
            selector: {
                field: 'LicensePlateNumber',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'TotalEstimateAmount ',
            sortable: true,
            header: {
                text: 'total_estimate_amount',
                tooltip: '',
            },
            selector: {
                field: 'FormattedTotalEstimateAmount',
            },
            widget: {
                type: 'text'
            }
        },
        {
            id: 'EstimationStatus',
            sortable: true,
            header: {
                text: 'estimation_status',
                tooltip: '',
            },
            selector: {
                field: 'EstimationStatus',
            },
            widget: {
                type: 'text'
            }
        },
    ]
};


/***/ }),

/***/ 18869:
/*!*********************************************************!*\
  !*** ./src/app/config/display/customer-table-config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerTableConfig": () => (/* binding */ CustomerTableConfig),
/* harmony export */   "CustomerCompanyTableConfig": () => (/* binding */ CustomerCompanyTableConfig)
/* harmony export */ });
const CustomerTableConfig = {
    columns: [
        {
            id: 'ContactId',
            sortable: true,
            header: {
                text: 'id',
                tooltip: '',
            },
            selector: {
                field: 'ContactId',
            },
            widget: {
                type: 'text'
            },
            cellStyle: 'text-decoration: underline; color: var(--xa-primary);',
        },
        {
            id: 'CreatedDate',
            sortable: true,
            header: {
                text: 'creation_date',
                tooltip: '',
            },
            selector: {
                field: 'CreatedDate',
            },
            widget: {
                type: 'dateTime'
            }
        },
        {
            id: 'FirstName',
            sortable: true,
            selector: {
                field: 'FirstName',
            },
            header: {
                text: 'first_name',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'LastName',
            sortable: true,
            selector: {
                field: 'LastName',
            },
            header: {
                text: 'last_name',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'MobileNumber',
            sortable: true,
            selector: {
                field: 'MobileNumber',
            },
            header: {
                text: 'mobile_number',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'Email',
            sortable: true,
            selector: {
                field: 'Email',
            },
            header: {
                text: 'email_address',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'Amount',
            sortable: true,
            selector: {
                field: 'FormattedTotalAmount',
            },
            cellStyle: 'justify-content:center;',
            header: {
                text: 'total_amount_invoiced',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'AmountReceived',
            sortable: true,
            cellStyle: 'justify-content:center;',
            selector: {
                field: 'FormattedPaidAmount',
            },
            header: {
                text: 'paid_amount',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
        },
        {
            id: 'AmountDue',
            sortable: true,
            cellStyle: 'justify-content:center;',
            selector: {
                field: 'FormattedDueAmount',
            },
            header: {
                text: 'due_amount',
                tooltip: '',
            },
            widget: {
                type: 'html',
            },
        }
    ]
};
const CustomerCompanyTableConfig = {
    columns: [
        {
            id: 'ContactId',
            sortable: true,
            header: {
                text: 'id',
                tooltip: '',
            },
            selector: {
                field: 'ContactId',
            },
            widget: {
                type: 'text'
            },
            cellStyle: 'text-decoration: underline; color: var(--xa-primary);',
        },
        {
            id: 'CreatedDate',
            sortable: true,
            header: {
                text: 'creation_date',
                tooltip: '',
            },
            selector: {
                field: 'CreatedDate',
            },
            widget: {
                type: 'dateTime'
            }
        },
        {
            id: 'CompanyName',
            sortable: true,
            selector: {
                field: 'FormattedCompanyName',
            },
            header: {
                text: 'company_name',
                tooltip: '',
            },
            widget: {
                type: 'html',
            },
        },
        {
            id: 'Amount',
            sortable: true,
            selector: {
                field: 'FormattedTotalAmount',
            },
            header: {
                text: 'total_amount_invoiced',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
            cellStyle: 'justify-content:center;',
        },
        {
            id: 'AmountReceived',
            sortable: true,
            selector: {
                field: 'FormattedPaidAmount',
            },
            header: {
                text: 'paid_amount',
                tooltip: '',
            },
            widget: {
                type: 'text',
            },
            cellStyle: 'justify-content:center;',
        },
        {
            id: 'AmountDue',
            sortable: true,
            selector: {
                field: 'FormattedDueAmount',
            },
            header: {
                text: 'due_amount',
                tooltip: '',
            },
            widget: {
                type: 'html',
            },
            cellStyle: 'justify-content:center;',
        }
    ]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 74672);
/* harmony import */ var src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../widgets/chq-paginator/chq-paginator.component */ 7772);
/* harmony import */ var src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/display/customer-details-config */ 47941);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 72934);
/* harmony import */ var src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/route-mapper/reapir-status-mapper */ 17771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/customer/customer.service */ 72541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-mat-table/chq-mat-table.component */ 63298);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function CustomerDetailsComponent_chq_tabs_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-tabs", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("menuItemClick", function CustomerDetailsComponent_chq_tabs_9_Template_chq_tabs_menuItemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r4.navigate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "button")("menuItems", ctx_r0.customerDetailsMenus);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function CustomerDetailsComponent_div_10_mat_accordion_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-expansion-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("opened", function CustomerDetailsComponent_div_10_mat_accordion_1_Template_mat_expansion_panel_opened_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r8.panelOpenState = true; })("closed", function CustomerDetailsComponent_div_10_mat_accordion_1_Template_mat_expansion_panel_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r10.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.userDetails == null ? null : ctx_r6.userDetails.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 17, "contact_id"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 19, "creation_date"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](17, 21, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.createdDate, "dd/MM/YYYY hh:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 24, "total_invoiced"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](23, 26, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](54, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amount, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 32, "paid_amount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](29, 34, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](60, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amountReceived, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 40, "due_amount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](35, 42, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](66, _c0, ctx_r6.userDetails == null ? null : ctx_r6.userDetails.amountDue, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 48, "contact_name"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](44, 50, "contact_phone"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactPhoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 52, "contact_email"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.contactEmail, "");
} }
function CustomerDetailsComponent_div_10_mat_accordion_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-expansion-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("opened", function CustomerDetailsComponent_div_10_mat_accordion_2_Template_mat_expansion_panel_opened_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r11.panelOpenState = true; })("closed", function CustomerDetailsComponent_div_10_mat_accordion_2_Template_mat_expansion_panel_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r13.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.firstName, " ", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 8, "contact_id"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails == null ? null : ctx_r7.userDetails.contactId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 10, "email"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 12, "phone_number"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.userDetails.mobileNumber, "");
} }
function CustomerDetailsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CustomerDetailsComponent_div_10_mat_accordion_1_Template, 51, 72, "mat-accordion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CustomerDetailsComponent_div_10_mat_accordion_2_Template, 22, 14, "mat-accordion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.userType === "company");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.userType === "individual");
} }
function CustomerDetailsComponent_section_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "chq-paginator", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("paginationChange", function CustomerDetailsComponent_section_12_div_4_Template_chq_paginator_paginationChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r16.handlePaginationChangeReapir($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pagination", ctx_r14.paginationRepair);
} }
function CustomerDetailsComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "chq-mat-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CustomerDetailsComponent_section_12_div_4_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx_r2.tableConfigRepair)("tableData", ctx_r2.tableDataRepair)("cellClicked", ctx_r2.handleCellClickRepair)("sortChanged", ctx_r2.handleSortChangeRepair)("pageChanged", ctx_r2.pageChangedRepair)("i18n", ctx_r2.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r2.tableDataRepair == null ? null : ctx_r2.tableDataRepair.length) > 0 && ctx_r2.paginationRepair.count > ctx_r2.paginationRepair.pageSize);
} }
function CustomerDetailsComponent_section_13_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "chq-paginator", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("paginationChange", function CustomerDetailsComponent_section_13_div_4_Template_chq_paginator_paginationChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r20.handlePaginationChangeCase($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pagination", ctx_r18.paginationCase);
} }
function CustomerDetailsComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "chq-mat-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CustomerDetailsComponent_section_13_div_4_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx_r3.tableConfigCase)("tableData", ctx_r3.tableDataCase)("cellClicked", ctx_r3.handleCellClickCase)("sortChanged", ctx_r3.handleSortChangeCase)("pageChanged", ctx_r3.pageChangedCase)("i18n", ctx_r3.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r3.tableDataCase == null ? null : ctx_r3.tableDataCase.length) > 0 && ctx_r3.paginationCase.count > ctx_r3.paginationCase.pageSize);
} }
const PATHS = {
    repair: 'repair-order',
    cases: 'estimates'
};
const caseStatusMapper = src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_3__.CaseStatusMapper;
const reapirStatusMapper = src_app_config_route_mapper_reapir_status_mapper__WEBPACK_IMPORTED_MODULE_3__.ReapirStatusMapper;
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
        this.paginationRepair = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.defaultPagination;
        this.totalCountRepair = 0;
        this.configDataRepair = src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_1__.ReapirTableConfig;
        this.pageChangedCase = false;
        this.paginationCase = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.defaultPagination;
        this.totalCountCase = 0;
        this.configDataCase = src_app_config_display_customer_details_config__WEBPACK_IMPORTED_MODULE_1__.CasesTableConfig;
        this.userDetails = {};
        this.customerId = '';
        this.uniqueId = '';
        this.userType = '';
        this.haveQuotePermissions = false;
        this.userDetailsLoading = false;
        // Tabs Menu
        this.customerDetailsMenus = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerDetailsMenus;
        this.activeTab = '';
        this.tabOptions = PATHS;
        /**
          @description Handles a cell click event for a repair table.
          @param {TableRowData} row - The row data for the clicked cell.
          @param {Partial} column - The column data for the clicked cell.
          @returns {void}
        */
        this.handleCellClickRepair = (row, column) => {
            var _a, _b;
            if (column.id === 'Id') {
                const id = (_b = (_a = row.find(ele => ele.id === column.id)) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.value;
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
            var _a, _b;
            if (column.id === 'Id') {
                const id = (_b = (_a = row.find(ele => ele.id === column.id)) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.value;
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
        this.handleSortChangeRepair = (sort) => {
            if (sort) {
                this.paginationRepair = Object.assign(Object.assign({}, this.paginationRepair), { orderBy: sort.active, sortDirection: sort.direction });
                this.getRepairOrders();
            }
        };
        /**
          @description Handles a change in the sorting of data for a case table.
          @param {Sort} sort - The new sorting criteria.
          @returns {void}
        */
        this.handleSortChangeCase = (sort) => {
            if (sort) {
                this.paginationCase = Object.assign(Object.assign({}, this.paginationCase), { orderBy: sort.active, sortDirection: sort.direction });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.monitorService.logEvent('ngOnInit', ['CustomerDetailsComponent', 'addenda-repair']);
            this.commonService.userProfileData.subscribe((res) => {
                var _a, _b;
                const automotiveServices = ((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.userPermission) === null || _b === void 0 ? void 0 : _b.automotiveServices) || [];
                this.haveQuotePermissions = automotiveServices.find(ele => ele.automotiveServiceName === 'Carheal Quote');
            });
            this.route.params.subscribe((params) => {
                this.customerId = params['contactId'];
                this.uniqueId = params['id'];
                this.userType = params['userType'];
                this.activeTab = params['orderType'];
                this.tableConfigRepair = this.configDataRepair;
                this.tableConfigCase = this.configDataCase;
                this.paginationRepair = Object.assign(Object.assign({}, this.paginationRepair), {
                    count: this.totalCountRepair,
                    currentPage: CustomerDetailsComponent.currentPageRepair,
                    orderBy: 'CreatedDate',
                    sortDirection: 'desc'
                });
                this.paginationCase = Object.assign(Object.assign({}, this.paginationCase), {
                    count: this.totalCountCase,
                    currentPage: CustomerDetailsComponent.currentPageCase,
                    orderBy: 'CreatedDate',
                    sortDirection: 'desc'
                });
                if (this.activeTab === PATHS.repair)
                    this.getRepairOrders();
                else
                    this.getCases();
                this.getUserDetails();
            });
        });
    }
    /**
      Get Customer details
      @returns {Promise} A promise that resolves when the repair orders are retrieved and the table data is updated.
    */
    getUserDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.userType === 'company') {
                this.userDetailsLoading = true;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(this.customerService.getCompanyDetails(this.customerId)).then((response) => {
                    if (response === null || response === void 0 ? void 0 : response.data) {
                        this.userDetails = response.data;
                        if (!this.userDetails.amount)
                            this.userDetails.amount = 0;
                        if (!this.userDetails.amountReceived)
                            this.userDetails.amountReceived = 0;
                        if (!this.userDetails.amountDue)
                            this.userDetails.amountDue = 0;
                        this.userDetailsLoading = false;
                    }
                }).catch((err) => {
                    this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
                });
            }
            else {
                this.userDetailsLoading = true;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(this.customerService.getCustomerDetails(this.uniqueId)).then((response) => {
                    if (response === null || response === void 0 ? void 0 : response.data) {
                        this.userDetails = response.data;
                        this.userDetailsLoading = false;
                    }
                }).catch((err) => {
                    this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
                });
            }
        });
    }
    /**
      Retrieves repair orders from the customer service and updates the table data for the repair orders.
      @returns {Promise} A promise that resolves when the repair orders are retrieved and the table data is updated.
    */
    getRepairOrders() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoading();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(this.customerService.getReapirOrders(this.customerId, this.userType, this.paginationRepair)).then((response) => {
                const result = response.value;
                result.map((ele) => {
                    ele.AmountDue = ele.TotalInvoiceAmount - ele.PaidAmount;
                    ele.FormattedTotalAmount = ele.TotalInvoiceAmount ? this.xaCurrencyPipe.transform(ele.TotalInvoiceAmount, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-';
                    ele.FormattedPaidAmount = ele.PaidAmount ? this.xaCurrencyPipe.transform(ele.PaidAmount, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-';
                    ele.FormattedDueAmount = ele.TotalInvoiceAmount ? this.xaCurrencyPipe.transform(ele.AmountDue, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-';
                });
                this.tableDataRepair = result;
                this.paginationRepair = Object.assign(Object.assign({}, this.paginationRepair), { count: response['@odata.count'] || 0 });
                this.commonService.hideLoading();
            }).catch((err) => {
                this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
                this.commonService.hideLoading();
            });
        });
    }
    /**
      Retrieves cases from the customer service and updates the table data with the response.
      @returns {Promise} A promise that resolves when the cases are retrieved and the table data is updated.
    */
    getCases() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoading();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.firstValueFrom)(this.customerService.getCases(this.customerId, this.userType, this.paginationCase)).then((response) => {
                const result = response.value;
                result.map((ele) => {
                    ele.FormattedTotalEstimateAmount = ele.TotalEstimateAmount ? this.xaCurrencyPipe.transform(ele.TotalEstimateAmount, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-';
                });
                this.tableDataCase = result;
                this.paginationCase = Object.assign(Object.assign({}, this.paginationCase), { count: response['@odata.count'] || 0 });
                this.commonService.hideLoading();
            }).catch((err) => {
                this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_13__.SeverityLevel.Error);
                this.commonService.hideLoading();
            });
        });
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
        this.paginationRepair = Object.assign(Object.assign({}, this.paginationRepair), pagination);
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
        this.paginationCase = Object.assign(Object.assign({}, this.paginationCase), pagination);
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
CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) { return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.XaCurrencyPipe)); };
CustomerDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CustomerDetailsComponent, selectors: [["customer-details"]], decls: 19, vars: 11, consts: [[1, "main-customer-details", "fx-col"], [1, "header", "d-flex", "align-center", "position-relative", "fx-0"], [1, ""], [1, "back-section", "d-flex", "align-center", 3, "click"], [1, "cross", 3, "svgIcon"], [3, "mode", "menuItems", "menuItemClick", 4, "ngIf"], ["class", "user-details", 4, "ngIf"], [1, "table-section", "fx-1"], [4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [3, "mode", "menuItems", "menuItemClick"], [1, "user-details"], [3, "opened", "closed"], [1, "sub-heading"], [1, "expanded-sub-heading"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "cellClicked", "sortChanged", "pageChanged", "i18n"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "pagination-wrapper"], [3, "pagination", "paginationChange"], ["paginator", ""]], template: function CustomerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CustomerDetailsComponent_Template_div_click_3_listener() { return ctx.handleBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, CustomerDetailsComponent_chq_tabs_9_Template, 1, 2, "chq-tabs", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CustomerDetailsComponent_div_10_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, CustomerDetailsComponent_section_12_Template, 5, 7, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CustomerDetailsComponent_section_13_Template, 5, 7, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "left-arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 7, "back"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 9, ctx.userType), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.haveQuotePermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userDetails && !ctx.userDetailsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.tabOptions.repair);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.tabOptions.cases);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_8__.ChqTabsComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelTitle, _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_9__.ChqMatTableComponent, src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.ChqPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.XaCurrencyPipe], styles: [".main-customer-details[_ngcontent-%COMP%] {\n  height: calc(100vh - (5px + 1.5vw) - (5px + 1.5vw + 58px + 1.6vw) - 76px);\n}\n.main-customer-details[_ngcontent-%COMP%]   .table-section[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.main-customer-details[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--xa-gray);\n}\n.main-customer-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  min-height: 64px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .pagination-wrapper[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .back-section[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n  text-transform: capitalize;\n  cursor: pointer;\n}\n.main-customer-details[_ngcontent-%COMP%]   .back-section[_ngcontent-%COMP%]     mat-icon {\n  margin-left: 5px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  width: 32%;\n  position: absolute;\n  right: 0;\n  top: 9px;\n  z-index: 1;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 9px;\n  color: var(--xa-black-medium);\n  margin-bottom: 0px;\n  margin-top: 5px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  opacity: 0.6;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .expanded-sub-heading[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 10px;\n  color: var(--xa-black-medium);\n  margin-bottom: 0px;\n  margin-top: 8px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .expanded-sub-heading[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  opacity: 0.6;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 11px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0 20px 16px;\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]     .mat-expansion-indicator::after {\n  color: var(--xa-black);\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  background: var(--xa-bold-gray);\n}\n.main-customer-details[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .mat-expanded[_ngcontent-%COMP%] {\n  background: var(--xa-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5RUFBQTtBQUNKO0FBQUk7RUFDSSxnQkFBQTtBQUVSO0FBQUk7RUFDSSx1Q0FBQTtBQUVSO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7QUFHSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQURSO0FBRVE7RUFDSSxnQkFBQTtBQUFaO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFaO0FBQ1k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFDaEI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQVo7QUFDWTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUNoQjtBQUdRO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQURaO0FBR1E7RUFDSSxpQkFBQTtBQURaO0FBR1E7RUFDSSxtQkFBQTtBQURaO0FBR1E7RUFDSSxvQkFBQTtBQURaO0FBR1E7RUFDSSxzQkFBQTtBQURaO0FBR1E7RUFDSSwrQkFBQTtBQURaO0FBR1E7RUFDSSwyQkFBQTtBQURaIiwiZmlsZSI6ImN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jdXN0b21lci1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICg1cHggKyAxLjV2dykgLSAoNXB4ICsgMS41dncgKyA1OHB4ICsgMS42dncpIC0gNzZweCk7XHJcbiAgICAudGFibGUtc2VjdGlvbiB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuICAgIC5ib3JkZXItYm90dG9tIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0teGEtZ3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYmFjay1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICA6Om5nLWRlZXAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlci1kZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Yi1oZWFkaW5nIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhwYW5kZWQtc3ViLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0LXBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ib2xkLWdyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWV4cGFuZGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 74672);
/* harmony import */ var src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../widgets/chq-paginator/chq-paginator.component */ 7772);
/* harmony import */ var src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/display/customer-table-config */ 18869);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @microsoft/applicationinsights-web */ 72934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/customer/customer.service */ 72541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../widgets/chq-mat-table/chq-mat-table.component */ 63298);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);























const _c0 = ["companyName"];
const _c1 = ["workProvider"];
function CustomerTableComponent_div_3_chq_dropdown_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-dropdown", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function CustomerTableComponent_div_3_chq_dropdown_3_Template_chq_dropdown_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r9.selectFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dropdownModel", ctx_r7.dropdownModelCompany);
} }
function CustomerTableComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "chq-dropdown", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function CustomerTableComponent_div_3_Template_chq_dropdown_selected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r11.selectFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_3_chq_dropdown_3_Template, 2, 1, "chq-dropdown", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dropdownModel", ctx_r0.dropdownModelFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.input.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r0.applyButtonModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r0.resetButtonModel);
} }
function CustomerTableComponent_div_4_chq_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function CustomerTableComponent_div_4_chq_input_3_Template_chq_input_controlOutput_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r15.updateInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r14.nameTextBox);
} }
function CustomerTableComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "chq-dropdown", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function CustomerTableComponent_div_4_Template_chq_dropdown_selected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r17.selectFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_4_chq_input_3_Template, 1, 1, "chq-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "chq-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dropdownModel", ctx_r1.dropdownModelFilterPerson);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.input.personName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r1.applyButtonModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r1.resetButtonModel);
} }
const _c2 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function CustomerTableComponent_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx_r19.dueAmountPersonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](10, _c2, ctx_r19.totalDueAmountPerson, ctx_r19.i18n.currencySymbol, ctx_r19.i18n.digitsInfo, ctx_r19.i18n.locale, ctx_r19.i18n.position)));
} }
function CustomerTableComponent_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r20.totalDueAmountPerson);
} }
function CustomerTableComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CustomerTableComponent_div_6_span_4_Template, 3, 16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, CustomerTableComponent_div_6_span_5_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, "total_due_amount"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.totalDueAmountPerson !== "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.totalDueAmountPerson === "-");
} }
function CustomerTableComponent_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx_r21.dueAmountCompanyClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](10, _c2, ctx_r21.totalDueAmountCompany, ctx_r21.i18n.currencySymbol, ctx_r21.i18n.digitsInfo, ctx_r21.i18n.locale, ctx_r21.i18n.position)));
} }
function CustomerTableComponent_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r22.totalDueAmountCompany);
} }
function CustomerTableComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CustomerTableComponent_div_7_span_4_Template, 3, 16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, CustomerTableComponent_div_7_span_5_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, "total_due_amount"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.totalDueAmountCompany !== "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.totalDueAmountCompany === "-");
} }
function CustomerTableComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "chq-paginator", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("paginationChange", function CustomerTableComponent_div_9_div_3_Template_chq_paginator_paginationChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r25.handlePaginationChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pagination", ctx_r23.pagination);
} }
function CustomerTableComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "chq-mat-table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_9_div_3_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r4.tableConfig)("tableData", ctx_r4.tableData)("sortChanged", ctx_r4.handleSortChange)("pageChanged", ctx_r4.pageChanged)("cellClicked", ctx_r4.handleCellClick)("i18n", ctx_r4.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r4.tableData == null ? null : ctx_r4.tableData.length) > 0 && ctx_r4.pagination.count > ctx_r4.pagination.pageSize);
} }
function CustomerTableComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "chq-paginator", 31, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("paginationChange", function CustomerTableComponent_div_10_div_3_Template_chq_paginator_paginationChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r29.handlePaginationChangeCompany($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pagination", ctx_r27.paginationCompany);
} }
function CustomerTableComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "chq-mat-table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_10_div_3_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r5.tableConfigCompany)("tableData", ctx_r5.tableDataCompany)("sortChanged", ctx_r5.handleSortChangeCompany)("pageChanged", ctx_r5.pageChangedCompany)("cellClicked", ctx_r5.handleCellClickCompany)("i18n", ctx_r5.i18n);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r5.tableDataCompany == null ? null : ctx_r5.tableDataCompany.length) > 0 && ctx_r5.paginationCompany.count > ctx_r5.pagination.pageSize);
} }
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
        this.pagination = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.defaultPagination;
        this.configData = src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_1__.CustomerTableConfig;
        this.textToSearch = '';
        this.input = { personName: false, companyName: false };
        // Tabs Menu
        this.customerListMenus = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerListMenus;
        this.activeTab = '';
        this.activeTabOptions = ACTIVE_PATHS;
        // Company Customer list variables
        this.pageChangedCompany = false;
        this.paginationCompany = src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.defaultPagination;
        this.configDataCompany = src_app_config_display_customer_table_config__WEBPACK_IMPORTED_MODULE_1__.CustomerCompanyTableConfig;
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
            selectedOption: { label: '' }
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
            options: [{ label: 'Retail - Individual' }],
            placeHolder: 'select_type',
            label: 'select_type',
            name: 'filterDropdownPerson',
            displayValue: 'label',
            selectedOption: { label: '' }
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
        this.handleSortChange = (sort) => {
            if (sort) {
                this.pagination = Object.assign(Object.assign({}, this.pagination), { orderBy: sort.active, sortDirection: sort.direction });
                this.getCustomers();
            }
        };
        /**
          Handles a change in the sorting of company customers.
          @param {Sort} sort - The new sorting criteria.
          @returns {void}
        */
        this.handleSortChangeCompany = (sort) => {
            if (sort) {
                this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), { orderBy: sort.active, sortDirection: sort.direction });
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
            var _a, _b;
            if (column.id === 'ContactId') {
                const customerId = (_b = (_a = row.find(ele => ele.id === column.id)) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.value;
                if (customerId) {
                    const customerDetails = this.tableData.find(ele => ele.ContactId === customerId);
                    if (customerDetails)
                        this.commonService.customerDetails.next(customerDetails);
                    if (customerId)
                        this.router.navigate([`/repair/customers/individual/${customerId}/${customerDetails.Id}/repair-order`]);
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
            var _a, _b;
            if (column.id === 'ContactId') {
                const companyId = (_b = (_a = row.find(ele => ele.id === column.id)) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.value;
                if (companyId) {
                    const customerDetails = this.tableDataCompany.find(ele => ele.ContactId === companyId);
                    if (customerDetails)
                        this.commonService.customerDetails.next(customerDetails);
                    if (companyId)
                        this.router.navigate([`/repair/customers/company/${companyId}/${customerDetails.Id}/repair-order`]);
                }
            }
        };
        this.i18n = this.commonService.geti18nInfo();
    }
    /**
     * on init
     */
    ngOnInit() {
        this.monitorService.logEvent('ngOnInit', ['CustomerTableComponent', 'addenda-repair']);
        this.tableConfig = this.configData;
        this.tableConfigCompany = this.configDataCompany;
        this.route.params.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.activeTab = params['userType'];
            if (this.activeTab === ACTIVE_PATHS.PERSONAL) {
                this.pagination = Object.assign(Object.assign({}, this.pagination), {
                    count: 0,
                    currentPage: CustomerTableComponent.currentPage,
                    orderBy: 'CreatedDate',
                    sortDirection: 'desc'
                });
                const paginationInfo = {
                    currentPage: CustomerTableComponent.currentPage,
                    offset: this.pagination.pageSize * (CustomerTableComponent.currentPage - 1),
                    pageSize: this.pagination.pageSize
                };
                this.handlePaginationChange(paginationInfo);
                this.getTotalDueAmountPerson();
            }
            else {
                this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), {
                    count: 0,
                    currentPage: CustomerTableComponent.currentPageCompnay,
                    orderBy: 'CreatedDate',
                    sortDirection: 'desc'
                });
                this.commonService.showLoading();
                const responseB = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getCompanyWorkProviders('$apply=groupby((CompanyOrgType))'));
                if (responseB && responseB.length > 0) {
                    this.workProviderFromBooking = responseB.map(ele => ele.CompanyOrgType);
                }
                this.getCompanyCustomers();
                this.getTotalDueAmountCompany();
                if (!this.dropdownModelFilter.observable) {
                    this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), { observable: this.caseService.getProviders(), onObservableLoad: this.onObservableLoadWorkProviderData.bind(this) });
                    this.workProvider.dropdownModel.observable = this.caseService.getProviders();
                    this.workProvider.getObservable();
                }
            }
        }));
        this.subscription = this.commonService.userProfileData.subscribe((res) => {
            this.userDetail = res === null || res === void 0 ? void 0 : res.data;
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
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoading();
            let queryParams = '';
            if (((_a = this.selectedCompanyForFilter) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                queryParams = `$filter=(${this.selectedCompanyForFilter.map((x) => { return `ContactId eq ${x.CompanyId}`; }).join(' or ')})`;
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getCompanyCustomers(this.paginationCompany, queryParams)).then((response) => {
                const result = response.value;
                result.map((ele) => {
                    let dueAmountClass = '';
                    ele.AmountDue = ele.Amount - ele.AmountReceived;
                    if (ele.Amount && ele.AmountDue !== undefined) {
                        const dueAmountPrecent = (ele.AmountDue * 100) / ele.Amount;
                        if (dueAmountPrecent >= 30)
                            dueAmountClass = 'color-xa-dark-red';
                        if (dueAmountPrecent <= 10 && dueAmountPrecent > 0)
                            dueAmountClass = 'col-xa-orange2';
                        if (dueAmountPrecent == 0)
                            dueAmountClass = 'color-xa-repair-header';
                    }
                    ele.FormattedTotalAmount = ele.Amount ? this.xaCurrencyPipe.transform(ele.Amount, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-';
                    ele.FormattedPaidAmount = ele.AmountReceived ? this.xaCurrencyPipe.transform(ele.AmountReceived, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-';
                    ele.FormattedDueAmount = ele.Amount ?
                        '<span class="' + dueAmountClass + '">' + this.xaCurrencyPipe.transform(ele.AmountDue, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-' + '</span>';
                    ele.FormattedCompanyName = ele.CompanyName ? `<span class="company-name">${ele.CompanyName}${ele.LicenseNumber ? '-<i>' + ele.LicenseNumber + '</i>' : ''}</span>` : '';
                });
                this.tableDataCompany = result;
                this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), { count: response['@odata.count'] || 0 });
                this.commonService.hideLoading();
            }).catch((err) => {
                this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
                this.commonService.hideLoading();
            });
        });
    }
    /**
      Retrieves customer data from a table data service and sets it to the table data property.
      If an error occurs, the apply button type is set to primary and the loading spinner is hidden.
      @returns {Promise} A promise that resolves to the customer data or rejects with an error.
    */
    getCustomers() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const selectedFilter = (_a = this.dropdownModelFilterPerson.selectedOption) === null || _a === void 0 ? void 0 : _a.label;
            let queryParams = '';
            switch (selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.toLowerCase()) {
                case 'retail - individual':
                    if (this.textToSearch != '') {
                        // To Fix typescript error convert the value to string by appending ''
                        const empName = this.textToSearch + '';
                        queryParams = `$filter=(contains(tolower(FirstName),'${empName.toLowerCase()}')) or (contains(tolower(LastName),'${empName.toLowerCase()}'))`;
                    }
                    break;
                default:
                    break;
            }
            this.commonService.showLoading();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getCustomers(this.pagination, queryParams)).then((response) => {
                const result = response.value;
                result.map((ele) => {
                    let dueAmountClass = '';
                    ele.AmountDue = ele.Amount - ele.AmountReceived;
                    if (ele.Amount && ele.AmountDue !== undefined) {
                        const dueAmountPrecent = (ele.AmountDue * 100) / ele.Amount;
                        if (dueAmountPrecent >= 30)
                            dueAmountClass = 'color-xa-dark-red';
                        if (dueAmountPrecent <= 10 && dueAmountPrecent > 0)
                            dueAmountClass = 'col-xa-orange2';
                        if (dueAmountPrecent == 0)
                            dueAmountClass = 'color-xa-repair-header';
                    }
                    ele.FormattedTotalAmount = ele.Amount ? this.xaCurrencyPipe.transform(ele.Amount, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-';
                    ele.FormattedPaidAmount = ele.AmountReceived ? this.xaCurrencyPipe.transform(ele.AmountReceived, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) : '-';
                    ele.FormattedDueAmount = ele.Amount && ele.AmountDue !== undefined ?
                        '<span class="' + dueAmountClass + '">' + this.xaCurrencyPipe.transform(ele.AmountDue, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '</span>' : '-';
                });
                this.tableData = result;
                this.pagination = Object.assign(Object.assign({}, this.pagination), { count: response['@odata.count'] || 0 });
                this.commonService.hideLoading();
            }).catch((err) => {
                this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
                this.commonService.hideLoading();
            });
        });
    }
    /**
      @returns {Promise} A promise that resolves to the customer data or rejects with an error.
    */
    getTotalDueAmountCompany() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.showTotalDueAmountCompany = false;
            let query = '$apply=';
            if (((_a = this.selectedCompanyForFilter) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                query += `filter(${this.selectedCompanyForFilter.map((x) => { return `ContactId eq ${x.CompanyId}`; }).join(' or ')})/`;
            }
            query += 'aggregate(Amount with sum as TotalAmount, AmountReceived with sum as TotalAmountReceived)';
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getTotalDueAmountCompany(query)).then((response) => {
                if (response && response[0]) {
                    this.showTotalDueAmountCompany = true;
                    this.dueAmountCompanyClass = '';
                    this.totalDueAmountCompany = response[0].TotalAmount ? response[0].TotalAmount - response[0].TotalAmountReceived : '-';
                    if (response[0].TotalAmount) {
                        const dueAmountPrecent = (this.totalDueAmountCompany * 100) / response[0].TotalAmount;
                        if (dueAmountPrecent >= 30)
                            this.dueAmountCompanyClass = 'color-xa-dark-red';
                        if (dueAmountPrecent <= 10 && dueAmountPrecent > 0)
                            this.dueAmountCompanyClass = 'col-xa-orange2';
                        if (dueAmountPrecent == 0)
                            this.dueAmountCompanyClass = 'color-xa-repair-header';
                    }
                }
            }).catch((err) => {
                this.showTotalDueAmountCompany = true;
                this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
            });
        });
    }
    /**
      @returns {Promise} A promise that resolves to the customer data or rejects with an error.
    */
    getTotalDueAmountPerson() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.showTotalDueAmountPerson = false;
            let query = '$apply=';
            const selectedFilter = (_a = this.dropdownModelFilterPerson.selectedOption) === null || _a === void 0 ? void 0 : _a.label;
            switch (selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.toLowerCase()) {
                case 'retail - individual':
                    if (this.textToSearch != '') {
                        // To Fix typescript error convert the value to string by appending ''
                        const empName = this.textToSearch + '';
                        query += `filter(contains(tolower(FirstName),'${empName.toLowerCase()}') or contains(tolower(LastName),'${empName.toLowerCase()}'))/`;
                    }
                    break;
                default:
                    break;
            }
            query += 'aggregate(Amount with sum as TotalAmount, AmountReceived with sum as TotalAmountReceived)';
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.tableDataSer.getTotalDueAmountPerson(query)).then((response) => {
                if (response && response[0]) {
                    this.showTotalDueAmountPerson = true;
                    this.dueAmountPersonClass = '';
                    this.totalDueAmountPerson = response[0].TotalAmount ? response[0].TotalAmount - response[0].TotalAmountReceived : '-';
                    if (response[0].TotalAmount) {
                        const dueAmountPrecent = (this.totalDueAmountPerson * 100) / response[0].TotalAmount;
                        if (dueAmountPrecent >= 30)
                            this.dueAmountPersonClass = 'color-xa-dark-red';
                        if (dueAmountPrecent <= 10 && dueAmountPrecent > 0)
                            this.dueAmountPersonClass = 'col-xa-orange2';
                        if (dueAmountPrecent == 0)
                            this.dueAmountPersonClass = 'color-xa-repair-header';
                    }
                }
            }).catch((err) => {
                this.showTotalDueAmountPerson = true;
                this.monitorService.logException(err, _microsoft_applicationinsights_web__WEBPACK_IMPORTED_MODULE_17__.SeverityLevel.Error);
            });
        });
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
        this.pagination = Object.assign(Object.assign({}, this.pagination), pagination);
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
        this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), pagination);
        this.pageChangedCompany = true;
        this.getCompanyCustomers();
    }
    /**
     * selected any filter in the dropdown
     * @param $event
     */
    selectFilter($event) {
        var _a, _b, _c;
        this.monitorService.logEvent('selectFilter', ['CustomerTableComponent', 'addenda-repair', {
                $event
            }]);
        if (($event === null || $event === void 0 ? void 0 : $event.name) == 'filterDropdown') {
            const query = `?$filter=( OrgId eq ${(_b = (_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail) === null || _b === void 0 ? void 0 : _b.id} and CompanyOrgType eq '${$event.value.label}' and IsIndividual eq false)`;
            this.dropdownModelFilter.selectedOption = $event.value;
            this.hideShowDropdown('companyName');
            this.dropdownModelCompany = Object.assign(Object.assign({}, this.dropdownModelCompany), { selectedOption: [], options: [], displayValue: 'label', observable: this.calendarService.getCustomer(query), onObservableLoad: this.onObservableLoadCompanyData.bind(this) });
            setTimeout(() => {
                var _a;
                (_a = this.companyName) === null || _a === void 0 ? void 0 : _a.getObservable();
            }, 100);
            this.updateApplyButtonState();
        }
        else if ($event.name == 'filterDropdownPerson') {
            this.dropdownModelFilterPerson.selectedOption = $event.value;
            switch ((_c = $event.value[this.dropdownModelFilterPerson.displayValue]) === null || _c === void 0 ? void 0 : _c.toLowerCase()) {
                case 'retail - individual':
                    this.hideShowDropdown('personName');
                    this.nameTextBox.value = '';
                    break;
                default:
                    this.hideShowDropdown('');
                    break;
            }
        }
        else if (($event === null || $event === void 0 ? void 0 : $event.name) == 'companyDropdown') {
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
        var _a;
        let state = 'disabled';
        if (this.activeTab === this.activeTabOptions.PERSONAL) {
            if (this.nameTextBox.value && this.nameTextBox.value.toString().length >= 3) {
                state = 'secondary';
            }
        }
        else if (this.activeTab === this.activeTabOptions.COMPANY) {
            if (((_a = this.dropdownModelCompany.selectedOption) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.input.companyName) {
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
        Object.keys(this.input).forEach((value) => {
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
        var _a, _b, _c, _d;
        const url = item.url;
        this.router.navigate([url]);
        if ((_a = this.dropdownModelFilter) === null || _a === void 0 ? void 0 : _a.selectedOption) {
            this.input.companyName = false;
            this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), { selectedOption: {} });
        }
        if ((_b = this.dropdownModelCompany) === null || _b === void 0 ? void 0 : _b.selectedOption) {
            this.dropdownModelCompany = Object.assign(Object.assign({}, this.dropdownModelCompany), { selectedOption: [] });
        }
        if ((_c = this.dropdownModelFilterPerson) === null || _c === void 0 ? void 0 : _c.selectedOption) {
            this.input.personName = false;
            this.dropdownModelFilterPerson = Object.assign(Object.assign({}, this.dropdownModelFilterPerson), { selectedOption: {} });
        }
        if ((_d = this.nameTextBox) === null || _d === void 0 ? void 0 : _d.value) {
            this.nameTextBox = Object.assign(Object.assign({}, this.nameTextBox), { value: '' });
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
            this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), { currentPage: 1 });
            this.selectedCompanyForFilter = [...this.dropdownModelCompany.selectedOption];
            this.getCompanyCustomers();
            this.getTotalDueAmountCompany();
        }
        else if (this.activeTab === this.activeTabOptions.PERSONAL) {
            this.pagination = Object.assign(Object.assign({}, this.pagination), { currentPage: 1 });
            this.textToSearch = this.nameTextBox.value + '';
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
            this.dropdownModelCompany = Object.assign(Object.assign({}, this.dropdownModelCompany), { selectedOption: [] });
            this.dropdownModelFilter = Object.assign(Object.assign({}, this.dropdownModelFilter), { selectedOption: {} });
            this.paginationCompany = Object.assign(Object.assign({}, this.paginationCompany), { currentPage: 1 });
            this.input.companyName = false;
            this.selectedCompanyForFilter = [];
            this.updateApplyButtonState();
            this.getCompanyCustomers();
            this.getTotalDueAmountCompany();
        }
        else if (this.activeTab === this.activeTabOptions.PERSONAL) {
            this.nameTextBox = Object.assign(Object.assign({}, this.nameTextBox), { value: '' });
            this.pagination = Object.assign(Object.assign({}, this.pagination), { currentPage: 1 });
            this.dropdownModelFilterPerson = Object.assign(Object.assign({}, this.dropdownModelFilterPerson), { selectedOption: {} });
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
                items[i] = Object.assign(Object.assign({}, items[i]), { label: `${item.CompanyName}${item.LicenseNumber ? '-' + item.LicenseNumber : ''}`, html: `<span class="company-name-dropdown">${item.CompanyName}${item.LicenseNumber ? '-<i>' + item.LicenseNumber + '</i>' : ''}</span>` });
            });
            this.dropdownModelCompany = Object.assign(Object.assign({}, this.dropdownModelCompany), { options: items, selectedOption: items });
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
CustomerTableComponent.ɵfac = function CustomerTableComponent_Factory(t) { return new (t || CustomerTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_3__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_6__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.XaCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__.CalendarService)); };
CustomerTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: CustomerTableComponent, selectors: [["add-customer-table"]], viewQuery: function CustomerTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.companyName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.workProvider = _t.first);
    } }, decls: 15, vars: 8, consts: [[1, "main-customer-list", "customer-list", "fx-col"], [1, "header-container", "fx-0"], [3, "mode", "menuItems", "menuItemClick"], ["class", "filter", 4, "ngIf"], [1, "pending-amount", "fx-0"], ["class", "total-due-amount", 4, "ngIf"], [1, "table-section", "fx-1"], ["class", "table-container", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], [1, "filter"], [1, "company-filter-dropdown", 3, "dropdownModel", "selected"], ["workProvider", ""], ["class", "bodyShop-filter-dropdown", 3, "dropdownModel", "selected", 4, "ngIf"], [3, "buttonModel"], [1, "bodyShop-filter-dropdown", 3, "dropdownModel", "selected"], ["companyName", ""], [1, "person-filter-dropdown", 3, "dropdownModel", "selected"], ["filterPerson", ""], [3, "inputModel", "controlOutput", 4, "ngIf"], [3, "inputModel", "controlOutput"], [1, "total-due-amount"], [3, "class", 4, "ngIf"], [4, "ngIf"], [1, "table-container"], [1, "table-wrapper"], [3, "config", "tableData", "sortChanged", "pageChanged", "cellClicked", "i18n"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "pagination-wrapper"], [3, "pagination", "paginationChange"], ["paginator", ""], ["paginatorCompany", ""]], template: function CustomerTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "chq-tabs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("menuItemClick", function CustomerTableComponent_Template_chq_tabs_menuItemClick_2_listener($event) { return ctx.navigate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, CustomerTableComponent_div_3_Template, 6, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CustomerTableComponent_div_4_Template, 6, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, CustomerTableComponent_div_6_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, CustomerTableComponent_div_7_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, CustomerTableComponent_div_9_Template, 4, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, CustomerTableComponent_div_10_Template, 4, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mode", "button")("menuItems", ctx.customerListMenus);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL && (ctx.tableData == null ? null : ctx.tableData.length) > 0 && ctx.showTotalDueAmountPerson);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY && (ctx.tableDataCompany == null ? null : ctx.tableDataCompany.length) > 0 && ctx.showTotalDueAmountCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.PERSONAL);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeTab === ctx.activeTabOptions.COMPANY);
    } }, directives: [_widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__.ChqTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_11__.ChqButtonComponent, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_12__.ChqInputComponent, _widgets_chq_mat_table_chq_mat_table_component__WEBPACK_IMPORTED_MODULE_13__.ChqMatTableComponent, src_app_widgets_chq_paginator_chq_paginator_component__WEBPACK_IMPORTED_MODULE_0__.ChqPaginatorComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.XaCurrencyPipe], styles: [".main-customer-list {\n  height: calc(100vh - (5px + 1.5vw) - (5px + 1.5vw + 58px + 1.6vw) - 76px);\n}\n.main-customer-list .header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 20px;\n}\n.main-customer-list .header-container .header-content {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n}\n.main-customer-list .header-container .filter {\n  display: flex;\n  align-items: flex-end;\n}\n.main-customer-list .header-container .filter chq-dropdown,\n.main-customer-list .header-container .filter chq-input {\n  position: relative;\n  width: 150px;\n  margin-left: 16px;\n  margin-top: 4px;\n}\n.main-customer-list .header-container .filter chq-button {\n  margin-left: 16px;\n}\n.main-customer-list .header-container .filter chq-dropdown.user-dropdown {\n  width: 200px;\n}\n.main-customer-list .header-container .filter chq-dropdown.person-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.retail-company-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.bodyShop-filter-dropdown, .main-customer-list .header-container .filter chq-dropdown.dealerShip-filter-dropdown {\n  width: 200px;\n}\n.main-customer-list .header-container .filter chq-dropdown.company-filter-dropdown {\n  width: 170px;\n}\n.main-customer-list .delete-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n  margin-bottom: 25px;\n}\n.main-customer-list .delete-container chq-button {\n  width: 180px;\n  height: 30px;\n}\n.main-customer-list .table-section {\n  overflow-y: auto;\n}\n.main-customer-list .cdk-column-status mat-icon {\n  height: 17px;\n  width: 17px;\n}\n.main-customer-list .total-due-amount {\n  padding-bottom: 18px;\n  display: flex;\n  justify-content: end;\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--xa-dark-gray);\n}\n.main-customer-list .pagination-wrapper {\n  margin-top: 15px;\n}\n.main-customer-list .company-name i, .main-customer-list .company-name-dropdown i {\n  font-weight: 600;\n}\n.mat-sort-header-arrow {\n  margin: -2px !important;\n}\n.customer-list .input-wrapper {\n  position: inherit !important;\n  top: 0 !important;\n}\n@media (orientation: portrait) {\n  mat-cell {\n    word-break: break-word;\n  }\n\n  .mat-sort-header-arrow {\n    margin: 0 !important;\n  }\n}\n::-webkit-scrollbar:horizontal {\n  height: 5px;\n}\n.table-wrapper {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUVBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVaO0FBQ1E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFDWjtBQUdZOztFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURoQjtBQVlZO0VBQ0ksaUJBQUE7QUFWaEI7QUFhWTtFQUNJLFlBQUE7QUFYaEI7QUFjWTtFQUNJLFlBQUE7QUFaaEI7QUFlWTtFQUNJLFlBQUE7QUFiaEI7QUFrQkk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaEJSO0FBa0JRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFoQlo7QUFvQkk7RUFDSSxnQkFBQTtBQWxCUjtBQXNCUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBcEJaO0FBd0JJO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQXRCUjtBQXlCSTtFQUNJLGdCQUFBO0FBdkJSO0FBMEJRO0VBQ0ksZ0JBQUE7QUF4Qlo7QUE2QkE7RUFDSSx1QkFBQTtBQTFCSjtBQThCSTtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7QUEzQlI7QUErQkE7RUFDSTtJQUNJLHNCQUFBO0VBNUJOOztFQStCRTtJQUNJLG9CQUFBO0VBNUJOO0FBQ0Y7QUErQkE7RUFDSSxXQUFBO0FBN0JKO0FBZ0NBO0VBQ0ksMENBQUE7QUE3QkoiLCJmaWxlIjoiY3VzdG9tZXItdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jdXN0b21lci1saXN0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICg1cHggKyAxLjV2dykgLSAoNXB4ICsgMS41dncgKyA1OHB4ICsgMS42dncpIC0gNzZweCk7XHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpbHRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgIGNocS1kcm9wZG93bixcclxuICAgICAgICAgICAgY2hxLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAuZGF0ZS1maWx0ZXIge1xyXG4gICAgICAgICAgICAvLyAgICAgdG9wOiAtN3B4O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjaHEtZHJvcGRvd257XHJcbiAgICAgICAgICAgIC8vICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgY2hxLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hxLWRyb3Bkb3duLnVzZXItZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjaHEtZHJvcGRvd24ucGVyc29uLWZpbHRlci1kcm9wZG93biwgIGNocS1kcm9wZG93bi5yZXRhaWwtY29tcGFueS1maWx0ZXItZHJvcGRvd24sIGNocS1kcm9wZG93bi5ib2R5U2hvcC1maWx0ZXItZHJvcGRvd24sICBjaHEtZHJvcGRvd24uZGVhbGVyU2hpcC1maWx0ZXItZHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNocS1kcm9wZG93bi5jb21wYW55LWZpbHRlci1kcm9wZG93biB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbGV0ZS1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblxyXG4gICAgICAgIGNocS1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLXNlY3Rpb24ge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNkay1jb2x1bW4tc3RhdHVzIHtcclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE3cHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvdGFsLWR1ZS1hbW91bnQge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbXBhbnktbmFtZSwgLmNvbXBhbnktbmFtZS1kcm9wZG93bntcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xyXG4gICAgbWFyZ2luOiAtMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b21lci1saXN0IHtcclxuICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgbWF0LWNlbGwge1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59Il19 */"], encapsulation: 2 });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var _customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-list/customer-table.component */ 85537);
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ 89179);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);














const route = [
    {
        path: ':userType',
        component: _customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomerTableComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver }
    },
    {
        path: ':userType/:contactId/:id/:orderType',
        component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__.CustomerDetailsComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_0__.VersionControlResolver }
    },
];
class CustomerTableModule {
}
CustomerTableModule.ɵfac = function CustomerTableModule_Factory(t) { return new (t || CustomerTableModule)(); };
CustomerTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CustomerTableModule });
CustomerTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(route),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomerTableModule, { declarations: [_customer_list_customer_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomerTableComponent, _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__.CustomerDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



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
        queryParams = (!queryParams) ? `$top=${pagination.pageSize}&$skip=${skip}` : `$top=${pagination.pageSize}&$skip=${skip}&${queryParams}`;
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
        queryParams = (!queryParams) ? `$top=${pagination.pageSize}&$skip=${skip}` : `$top=${pagination.pageSize}&$skip=${skip}&${queryParams}`;
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
        }
        else {
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
        }
        else {
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
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_repair_customer_customer_module_ts.js.map