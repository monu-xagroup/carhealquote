(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_repair_module_ts"],{

/***/ 21299:
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/timezone.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,o){var r,a=function(t,n,i){void 0===i&&(i={});var o=new Date(t),r=function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",o=t+"|"+i,r=e[o];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[o]=r),r}(n,i);return r.formatToParts(o)},u=function(e,n){for(var i=a(e,n),r=[],u=0;u<i.length;u+=1){var f=i[u],s=f.type,m=f.value,c=t[s];c>=0&&(r[c]=parseInt(m,10))}var d=r[3],l=24===d?0:d,h=r[0]+"-"+r[1]+"-"+r[2]+" "+l+":"+r[4]+":"+r[5]+":000",v=+e;return(o.utc(h).valueOf()-(v-=v%1e3))/6e4},f=i.prototype;f.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:t}),u=Math.round((i-new Date(a))/1e3/60),f=o(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-u,!0);if(e){var s=f.utcOffset();f=f.add(n-s,"minute")}return f.$x.$timezone=t,f},f.offsetName=function(t){var e=this.$x.$timezone||o.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=f.startOf;f.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,t,e).tz(this.$x.$timezone,!0)},o.tz=function(t,e,n){var i=n&&e,a=n||e||r,f=u(+o(),a);if("string"!=typeof t)return o(t).tz(a);var s=function(t,e,n){var i=t-60*e*1e3,o=u(i,n);if(e===o)return[i,e];var r=u(i-=60*(o-e)*1e3,n);return o===r?[i,o]:[t-60*Math.min(o,r)*1e3,Math.max(o,r)]}(o.utc(t,i).valueOf(),f,a),m=s[0],c=s[1],d=o(m).utcOffset(c);return d.$x.$timezone=a,d},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(t){r=t}}}));

/***/ }),

/***/ 93620:
/*!*************************************************************!*\
  !*** ./src/app/config/route-mapper/repair-status-mapper.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepairStatusMapper": function() { return /* binding */ RepairStatusMapper; },
/* harmony export */   "CaseStatusMapper": function() { return /* binding */ CaseStatusMapper; }
/* harmony export */ });
const RepairStatusMapper = {
    'draft': 'repair/booking/{{repairGUID}}',
    'vehicledetails': 'repair/booking/{{repairGUID}}',
    'uploaddocuments': 'repair/booking/{{repairGUID}}/document',
    'uploadphotos': 'repair/booking/{{repairGUID}}/photos',
    'repairestimation': 'repair/booking/{{repairGUID}}/estimate',
    'pendingapproval': 'repair/booking/{{repairGUID}}/estimate',
    'approved': 'repair/booking/{{repairGUID}}/estimate',
    'reject': 'repair/booking/{{repairGUID}}/estimate',
    'rejected': 'repair/booking/{{repairGUID}}/estimate',
    'closed': 'repair/booking/{{repairGUID}}/invoices',
    'complete': 'repair/booking/{{repairGUID}}/invoices',
    'partsorderedpartially': 'repair/booking/{{repairGUID}}/parts',
    'partsordered': 'repair/booking/{{repairGUID}}/parts',
    'repairinprogress': 'repair/booking/{{repairGUID}}/repair-stages',
    'readytoinvoice': 'repair/booking/{{repairGUID}}/invoices',
    'invoiced': 'repair/booking/{{repairGUID}}/invoices',
    'paid': 'repair/booking/{{repairGUID}}/invoices',
    'others': 'repair/booking/{{repairGUID}}',
};
const CaseStatusMapper = {
    'draft': 'quote/case/{{caseGUID}}',
    'vehicledetails': 'quote/case/{{caseGUID}}/vehicle',
    'uploaddocuments': 'quote/case/{{caseGUID}}/document',
    'uploadphotos': 'quote/case/{{caseGUID}}/photos',
    'aianalysis': 'quote/case/{{caseGUID}}/ai',
    'repairestimation': 'quote/case/{{caseGUID}}/estimate',
    'approved': 'quote/case/{{caseGUID}}/estimate',
    'reject': 'quote/case/{{caseGUID}}/estimate',
    'rejected': 'quote/case/{{caseGUID}}/estimate',
    'closed': 'quote/case/{{caseGUID}}/estimate',
    'complete': 'quote/case/{{caseGUID}}/estimate',
    'others': 'quote/case/{{caseGUID}}/estimate'
};


/***/ }),

/***/ 88271:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/repair/add-customers/customer-layout/customer-layout.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerLayoutComponent": function() { return /* binding */ CustomerLayoutComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 39754);
/* harmony import */ var src_app_dialogs_labour_rate_labour_rate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/labour-rate/labour-rate.component */ 35235);
/* harmony import */ var src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/chq-upload-model */ 75983);
/* harmony import */ var src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/menu */ 38588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/inspection-service/inspection.service */ 13975);
/* harmony import */ var src_app_services_message_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message/messages.service */ 35493);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/repair-estimate/repair-estimate.service */ 87855);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../widgets/chq-tabs/chq-tabs/chq-tabs.component */ 77782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 52529);

















const _c0 = ["tabs"];
const _c1 = ["tabMain"];
const _c2 = ["userDetail"];
function CustomerLayoutComponent_ng_container_6_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "make"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r9.caseData.vehicleMake, " ");
} }
function CustomerLayoutComponent_ng_container_6_div_1_div_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r11.caseData.vehicleModel);
} }
function CustomerLayoutComponent_ng_container_6_div_1_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "license_plate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r12.caseData.licensePlate);
} }
function CustomerLayoutComponent_ng_container_6_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_container_6_div_1_div_22_span_1_Template, 7, 4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CustomerLayoutComponent_ng_container_6_div_1_div_22_span_2_Template, 7, 4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.caseData == null ? null : ctx_r10.caseData.vehicleModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.caseData == null ? null : ctx_r10.caseData.licensePlate);
} }
const _c3 = function (a0) { return { "expand-main-wrapper": a0 }; };
const _c4 = function (a0) { return { "width": a0 }; };
function CustomerLayoutComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, CustomerLayoutComponent_ng_container_6_div_1_div_15_Template, 6, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CustomerLayoutComponent_ng_container_6_div_1_div_22_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_container_6_div_1_Template_mat_icon_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r13.expand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](15, _c3, ctx_r7.expandUserDetail))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](17, _c4, ctx_r7.expandUserDetail ? ctx_r7.containerWidth : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r7.customerData.firstName, " ", ctx_r7.customerData.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 11, "booking_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r7.bookingId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.caseData == null ? null : ctx_r7.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 13, "status"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r7.statusDesc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.caseData == null ? null : ctx_r7.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", !ctx_r7.expandUserDetail ? "dropdown" : "dropdown-up");
} }
function CustomerLayoutComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_container_6_div_1_Template, 25, 19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.showUserSection);
} }
function CustomerLayoutComponent_ng_template_7_div_1_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "status"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r17.status);
} }
function CustomerLayoutComponent_ng_template_7_div_1_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "make"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r18.caseData.vehicleMake);
} }
function CustomerLayoutComponent_ng_template_7_div_1_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "year"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r19.caseData.year);
} }
function CustomerLayoutComponent_ng_template_7_div_1_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "model"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r20.caseData.vehicleModel);
} }
function CustomerLayoutComponent_ng_template_7_div_1_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "license_plate"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r21.caseData.licensePlate);
} }
const _c5 = function (a0) { return { "expand": a0 }; };
function CustomerLayoutComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_template_7_div_1_Template_mat_icon_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r22.expand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CustomerLayoutComponent_ng_template_7_div_1_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r24.openLabourRate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, CustomerLayoutComponent_ng_template_7_div_1_span_23_Template, 5, 4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, CustomerLayoutComponent_ng_template_7_div_1_span_24_Template, 5, 4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, CustomerLayoutComponent_ng_template_7_div_1_span_25_Template, 5, 4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, CustomerLayoutComponent_ng_template_7_div_1_span_26_Template, 5, 4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, CustomerLayoutComponent_ng_template_7_div_1_span_27_Template, 5, 4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c3, ctx_r15.expandUserDetail))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](20, _c4, ctx_r15.expandUserDetail ? ctx_r15.containerWidth : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r15.customerData.firstName, " ", ctx_r15.customerData.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 14, "booking_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r15.bookingId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", !ctx_r15.expandUserDetail ? "dropdown" : "dropdown-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](22, _c5, ctx_r15.expandUserDetail));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 16, "labour_rate_discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.caseData == null ? null : ctx_r15.caseData.vehicleMake);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.caseData == null ? null : ctx_r15.caseData.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.caseData == null ? null : ctx_r15.caseData.vehicleModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.caseData == null ? null : ctx_r15.caseData.licensePlate);
} }
function CustomerLayoutComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CustomerLayoutComponent_ng_template_7_div_1_Template, 28, 24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.showUserSection);
} }
function CustomerLayoutComponent_chq_tabs_10_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-tabs", 3, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_chq_tabs_10_Template_chq_tabs_menuItemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r26.navigate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "default")("menuItems", ctx_r4.menuItems);
} }
function CustomerLayoutComponent_chq_tabs_11_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-tabs", 3, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_chq_tabs_11_Template_chq_tabs_menuItemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r29.navigate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "default")("menuItems", ctx_r5.menuRepairItems);
} }
function CustomerLayoutComponent_history_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "history", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("toggleExpand", function CustomerLayoutComponent_history_15_Template_history_toggleExpand_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r31.onHistoryExpand($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("history", ctx_r6.history)("isLoading", ctx_r6.isHistoryLoading);
} }
class CustomerLayoutComponent {
    /**
     * constructor
     * @param router
     */
    constructor(router, caseService, route, commonService, cdr, inspectionService, messageService, translateService, repairEstimateService, monitorService, dialog) {
        this.router = router;
        this.caseService = caseService;
        this.route = route;
        this.commonService = commonService;
        this.cdr = cdr;
        this.inspectionService = inspectionService;
        this.messageService = messageService;
        this.translateService = translateService;
        this.repairEstimateService = repairEstimateService;
        this.monitorService = monitorService;
        this.dialog = dialog;
        this.activeItem = 'Booking';
        this.bookingId = '';
        this.repairGuid = '0';
        this.repairObjectId = 0;
        this.domainId = 3100;
        this.repairTypes = [];
        this.showUserSection = false;
        this.expandUserDetail = false;
        this.status = '';
        this.statusDesc = '';
        this.stepInProgress = false;
        this.vehicleId = 0;
        this.caseId = '0';
        this.estimationOperationLength = false;
        this.caseData = {
            'vehicleMake': '',
            'vehicleModel': ''
        };
        this.customerData = {
            'firstName': '',
            'lastName': '',
            'countryCode': '',
            'mobileNumber': '',
            'email': ''
        };
        // sample history data
        this.history = [];
        this.workProvider = '';
        this.isCompany = false;
        this.isHistoryLoading = false;
        this.subscriptions = [];
        this.isNoShow = false;
        this.repairType = '';
        this.roleName = '';
        this.menuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.customerMenus;
        this.repairMenuItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.repairMenus;
        this.menuRepairItems = src_app_model_menu__WEBPACK_IMPORTED_MODULE_2__.menuRepairItems;
        this.commonService.inProgressSteps.subscribe((length) => {
            this.stepInProgress = length > 0;
        });
    }
    /**
     * get current status
     */
    get currentStatus() {
        var _a;
        if (this.status && ['draft', 'uploaddocuments', 'uploadphotos'].indexOf((_a = this.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === -1) {
            return true;
        }
        return false;
    }
    /**
     * map inspection from api
     */
    onHistoryExpand(event) {
        // Get latest History when history is expanded
        if (event) {
            this.getCaseHistory(this.repairGuid, this.domainId);
        }
    }
    /**
     * map inspection from api
     * @param inspectionData
     */
    mapInspection(inspectionData, item) {
        var _a, _b, _c;
        if (inspectionData) {
            try {
                const inspection = inspectionData;
                if (this.commonService.repairInspectionTemplate) {
                    const template = this.commonService.repairInspectionTemplate;
                    if (inspection === null || inspection === void 0 ? void 0 : inspection.uploadType) {
                        if ((inspection === null || inspection === void 0 ? void 0 : inspection.uploadType.toLowerCase()) === 'spi') {
                            const minimumPhotosRequired = (_a = inspection.inspectionItems) === null || _a === void 0 ? void 0 : _a.filter((value) => {
                                return value.isSkipEnabled !== true;
                            }).length;
                            const currentPhotos = (_b = inspection.inspectionItems) === null || _b === void 0 ? void 0 : _b.filter((currentStep) => {
                                return currentStep.rawAzureBlobUrl;
                            });
                            if (currentPhotos.length < minimumPhotosRequired) {
                                this.commonService.showToast(0, `All ${minimumPhotosRequired} sides images are mandatory and cannot skip to next section.`);
                                return;
                            }
                        }
                        else {
                            const minimumBulkPhotosRequired = template === null || template === void 0 ? void 0 : template.minImageLimit;
                            const bulkUploadedItemsWithImages = inspection.inspectionItems
                                .filter((step) => {
                                return step.rawAzureBlobUrl != null && step.rawAzureBlobUrl != '';
                            });
                            if (bulkUploadedItemsWithImages.length < minimumBulkPhotosRequired) {
                                this.commonService.showToast(0, `All ${minimumBulkPhotosRequired} sides images are mandatory and cannot skip to next section.`);
                                return;
                            }
                        }
                    }
                    const queryParam = location.search;
                    const url = item.url;
                    (_c = this.tabs) === null || _c === void 0 ? void 0 : _c.setActiveMenu(item);
                    if ((queryParam.indexOf('mode=edit') !== -1)) {
                        this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')], { queryParams: { mode: 'edit' } });
                    }
                    else {
                        this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')]);
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    /**
     * Get Case History
     */
    getCaseHistory(caseId, domainId) {
        this.history = [];
        this.isHistoryLoading = true;
        this.caseService.getCaseHistory(caseId, domainId).subscribe({
            next: (response) => {
                this.history = response;
            },
            complete: () => {
                this.isHistoryLoading = false;
            }
        });
    }
    /**
     * get current inspectionitems length
     */
    getInspectionItems(id, item) {
        this.commonService.showLoading();
        this.inspectionService.getInspection(id).subscribe({
            next: (inspectionDetailResponse) => {
                if (inspectionDetailResponse) {
                    this.mapInspection(inspectionDetailResponse, item);
                }
                this.commonService.hideLoading();
            },
            complete: () => {
                this.commonService.hideLoading();
            },
        });
    }
    /**
     * on init
     */
    ngOnInit() {
        var _a;
        const urlSegments = this.router.url.split('/');
        let lastSegment = (urlSegments.length > 0) ? urlSegments[urlSegments.length - 1] : '';
        if (lastSegment.indexOf('?') != -1) {
            lastSegment = lastSegment.substring(0, lastSegment.indexOf('?'));
        }
        const repairSegments = ['parts', 'invoices', 'repair-stages', 'invoicesEdit'];
        if (repairSegments.includes(lastSegment)) {
            this.activeItem = 'Repair';
        }
        (_a = this.route) === null || _a === void 0 ? void 0 : _a.params.subscribe((value) => {
            if (value && value['id']) {
                this.repairGuid = value['id'];
                if (this.repairGuid !== '0') {
                    // Get Case History when domainId is available
                    const idSub$ = this.commonService.domainId.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(value => value !== null)).subscribe({
                        next: (data) => {
                            this.getCaseHistory(this.repairGuid, data);
                            this.domainId = data;
                        }
                    });
                    this.subscriptions.push(idSub$);
                }
            }
        });
        const bookingId$ = this.commonService.bookingId.subscribe({
            next: (bookingId) => {
                this.bookingId = bookingId;
                this.cdr.detectChanges();
            }
        });
        const activeItem$ = this.commonService.activeItem.subscribe({
            next: (activeItem) => {
                if (activeItem) {
                    this.activeItem = activeItem;
                }
            }
        });
        const repairDetails$ = this.commonService.repairDetails.subscribe({
            next: (repairDetails) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
                this.showHideTopHeader();
                if (repairDetails) {
                    this.status = repairDetails.status;
                    this.statusDesc = repairDetails === null || repairDetails === void 0 ? void 0 : repairDetails.statusDescription;
                    this.customerData.firstName = ((_a = repairDetails.customer) === null || _a === void 0 ? void 0 : _a.firstName) || '';
                    this.customerData.lastName = ((_b = repairDetails.customer) === null || _b === void 0 ? void 0 : _b.lastName) || '';
                    this.customerData.mobileNumber = (((_c = repairDetails.customer) === null || _c === void 0 ? void 0 : _c.countryCode) || '') + ' ' + ((_d = repairDetails.customer) === null || _d === void 0 ? void 0 : _d.mobileNumber) || '';
                    this.customerData.email = ((_e = repairDetails.customer) === null || _e === void 0 ? void 0 : _e.email) || '';
                    this.workProvider = ((_f = repairDetails.customer) === null || _f === void 0 ? void 0 : _f.companyOrgType) || '';
                    this.isCompany = ((_g = repairDetails.customer) === null || _g === void 0 ? void 0 : _g.customerTypeName) !== 'Person' || false;
                    this.caseData.vehicleMake = ((_h = repairDetails.vehicle) === null || _h === void 0 ? void 0 : _h.vehicleMake) || '';
                    this.caseData.vehicleModel = ((_j = repairDetails.vehicle) === null || _j === void 0 ? void 0 : _j.vehicleModel) || '';
                    this.caseData.licensePlate = ((_k = repairDetails.vehicle) === null || _k === void 0 ? void 0 : _k.licensePlateNumber) || '';
                    this.caseData.year = ((_l = repairDetails.vehicle) === null || _l === void 0 ? void 0 : _l.modelYearRange) || '';
                    this.inspectionId = (_m = repairDetails.vehicle) === null || _m === void 0 ? void 0 : _m.inspectionId;
                    this.repairTypes = repairDetails.repairServiceTypes;
                    this.repairType = repairDetails.repairType;
                    this.domainId = repairDetails.domainId;
                    if (this.currentOrganizationId != ((_o = repairDetails.organizationDetail) === null || _o === void 0 ? void 0 : _o.organizationId)) {
                        this.commonService.isViewOnly = true;
                    }
                    else {
                        this.commonService.isViewOnly = false;
                    }
                    const urlSegments = this.router.url.split('/');
                    let currentLastSegment = (urlSegments.length > 0) ? urlSegments[urlSegments.length - 1] : '';
                    if (currentLastSegment.includes('photos')) {
                        if (!this.inspectionId) {
                            this.displayMissingInspectionMessage(this.repairGuid);
                            return;
                        }
                    }
                    const queryParam = location.search;
                    if (currentLastSegment === 'invoices' && !queryParam.includes('isBack=true')) {
                        const isGenerated = ((_p = this.status) === null || _p === void 0 ? void 0 : _p.toLowerCase()) === 'paid' || ((_q = this.status) === null || _q === void 0 ? void 0 : _q.toLowerCase()) === 'invoiced' || ((_r = this.status) === null || _r === void 0 ? void 0 : _r.toLowerCase())
                            === 'complete';
                        let type = 1;
                        if (isGenerated) {
                            if (this.workProvider === 'Retail' && !this.isCompany) {
                                type = 2;
                            }
                            this.router.navigate([`/repair/booking/${this.repairGuid}/invoicesEdit`], { queryParams: { formType: type } });
                            return;
                        }
                    }
                    this.vehicleId = (_s = repairDetails.vehicle) === null || _s === void 0 ? void 0 : _s.vehicleId;
                    this.caseId = repairDetails.quoteId;
                    this.domainId = repairDetails.domainId;
                    this.repairObjectId = repairDetails.id;
                    if (((_t = this.repairType) === null || _t === void 0 ? void 0 : _t.toLowerCase()) === 'assessment') {
                        this.repairMenuItems[1].disabled = true;
                    }
                    else {
                        this.repairMenuItems[1].disabled = false;
                    }
                    this.isNoShow = (_u = repairDetails === null || repairDetails === void 0 ? void 0 : repairDetails.booking) === null || _u === void 0 ? void 0 : _u.isNoShow;
                    if (currentLastSegment.indexOf('?') != -1) {
                        currentLastSegment = currentLastSegment.substring(0, currentLastSegment.indexOf('?'));
                    }
                    if (((_v = this.roleName) === null || _v === void 0 ? void 0 : _v.toLowerCase()) === 'technician' && currentLastSegment === 'invoices') {
                        this.router.navigate([`/repair/booking/${this.repairGuid}/repair-stages`]);
                        return;
                    }
                    const repairSegments = ['parts', 'invoices', 'repair-stages', 'invoicesEdit'];
                    if (repairSegments.includes(currentLastSegment)) {
                        this.getEstimationDetail(repairDetails.estimateSource);
                    }
                    this.cdr.detectChanges();
                }
            }
        });
        const userPermission$ = this.commonService.userProfileData.subscribe((res) => {
            var _a, _b, _c;
            if (res === null || res === void 0 ? void 0 : res.data) {
                const automotiveServices = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.userPermission) === null || _b === void 0 ? void 0 : _b.automotiveServices;
                const automotiveService = automotiveServices === null || automotiveServices === void 0 ? void 0 : automotiveServices.find(x => x.automotiveServiceName.toLowerCase() === 'addenda repair');
                this.roleName = automotiveService.roleName.toLowerCase();
                this.commonService.roleName = this.roleName;
                if (((_c = this.roleName) === null || _c === void 0 ? void 0 : _c.toLowerCase()) == 'technician') {
                    this.menuRepairItems = this.menuRepairItems.filter(q => q.name != 'Invoices');
                }
                const organizationDetail = res.data.organizationDetail;
                if (organizationDetail) {
                    this.currentOrganizationId = organizationDetail.id;
                }
            }
        });
        this.subscriptions.push(bookingId$);
        this.subscriptions.push(activeItem$);
        this.subscriptions.push(repairDetails$);
        this.subscriptions.push(userPermission$);
    }
    /**
   * estimate
   */
    getEstimationDetail(source) {
        if (source === 'GTMotive') {
            this.getGTEstimationDetail();
        }
        else {
            this.getManualEstimationDetail();
        }
    }
    /**
     * get estimation detail
     */
    getGTEstimationDetail() {
        if (this.vehicleId && this.inspectionId) {
            this.monitorService.logEvent('getGTEstimationDetail', ['CustomerLayoutComponent', 'addenda-repair'], {
                repairGuid: this.repairGuid,
                caseGuid: this.caseId,
                inspectionId: this.inspectionId,
                vehicleId: this.vehicleId
            });
            this.commonService.showLoading();
            this.repairEstimateService.getEstimate(this.caseId, this.inspectionId, this.vehicleId, this.domainId).subscribe({
                next: (response) => {
                    var _a, _b;
                    if (((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.estimateCharges) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                        this.estimationOperationLength = true;
                    }
                    this.commonService.hideLoading();
                },
                error: () => {
                    this.commonService.hideLoading();
                }
            });
        }
    }
    /**
     * get manual estimate
     */
    getManualEstimationDetail() {
        if (this.vehicleId && this.inspectionId) {
            this.monitorService.logEvent('getManualEstimationDetail', ['EstimateComponent', 'addenda-repair'], {
                repairGuid: this.repairGuid,
                inspectionId: this.inspectionId,
                vehicleId: this.vehicleId
            });
            this.commonService.showLoading();
            this.repairEstimateService.getRepairEstimate(this.repairGuid, this.inspectionId, this.vehicleId).subscribe({
                next: (response) => {
                    var _a;
                    if ((_a = response === null || response === void 0 ? void 0 : response.estimateCharges) === null || _a === void 0 ? void 0 : _a.length) {
                        this.estimationOperationLength = true;
                    }
                    this.commonService.hideLoading();
                },
                error: () => {
                    this.commonService.hideLoading();
                }
            });
        }
    }
    /**
     * navigate to selected route
     * @param item
     */
    navigate(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const queryParam = location.search;
        const url = item.url;
        const currentUrl = location.pathname;
        if (url.includes('/repair-stages')) {
            const statusList = ['draft', 'uploaddocuments', 'uploadphotos', 'repairestimation', 'pendingapproval', 'rejected'];
            if (statusList.includes((_a = this.status) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                this.commonService.hideLoading();
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('start_job'));
                return;
            }
            if (this.isNoShow) {
                this.commonService.hideLoading();
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('stages_no_allowed'));
                return;
            }
            if (((_b = this.repairType) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== 'repair') {
                this.commonService.hideLoading();
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('stages_repair'));
                return;
            }
        }
        if (url.includes('/invoices')) {
            if (!this.estimationOperationLength) {
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('no_charges'));
                return;
            }
            if (((_c = this.status) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'rejected') {
                this.commonService.openAlertDialog(this.translateService.instant('warning'), this.translateService.instant('invoice_access'));
                return;
            }
        }
        if (currentUrl.includes('/document')) {
            if (this.stepInProgress) {
                const module = currentUrl.includes('/photos') ? 'images' : 'documents';
                this.commonService.showToast(0, `Please wait until all ${module} are uploaded.`);
                return;
            }
        }
        if (currentUrl.includes('/photos')) {
            if (this.stepInProgress) {
                const module = currentUrl.includes('/photos') ? 'images' : 'documents';
                this.commonService.showToast(0, `Please wait until all ${module} are uploaded.`);
                return;
            }
            if (url.includes('/estimate')) {
                this.getInspectionItems(this.inspectionId, item);
                return;
            }
        }
        if (url.includes('invoices')) {
            const isGenerated = ((_d = this.status) === null || _d === void 0 ? void 0 : _d.toLowerCase()) === 'paid' || ((_e = this.status) === null || _e === void 0 ? void 0 : _e.toLowerCase()) === 'invoiced' || ((_f = this.status) === null || _f === void 0 ? void 0 : _f.toLowerCase())
                === 'complete';
            let type = 1;
            if (isGenerated) {
                if (this.workProvider === 'Retail' && !this.isCompany) {
                    type = 2;
                }
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '').replace('invoices', 'invoicesEdit')], { queryParams: { formType: type } });
                return;
            }
        }
        if (url === '/repair/booking/{bookingId}') {
            if ((queryParam.indexOf('mode=edit') !== -1)) {
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')], { queryParams: { mode: 'edit' } });
            }
            else {
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')]);
            }
        }
        else if (currentUrl === '/repair/booking' || currentUrl === '/repair/booking/0' || currentUrl === `/repair/booking/${this.repairGuid}`) {
            if (url === '/repair/booking/{bookingId}') {
                return;
            }
            if (((_g = this.roleName) === null || _g === void 0 ? void 0 : _g.toLowerCase()) === 'technician' || ((_h = this.status) === null || _h === void 0 ? void 0 : _h.toLowerCase()) === 'complete') {
                this.commonService.viewActionTriggeredBooking.next((queryParam.indexOf('mode=edit') !== -1) ? url + queryParam : url);
            }
            else {
                this.commonService.actionTriggered.next((queryParam.indexOf('mode=edit') !== -1) ? url + queryParam : url);
            }
        }
        else {
            if (url.includes('/photos') || url.includes('/estimate')) {
                if (!this.inspectionId) {
                    this.displayMissingInspectionMessage(this.repairGuid);
                    return;
                }
            }
            (_j = this.tabs) === null || _j === void 0 ? void 0 : _j.setActiveMenu(item);
            if ((queryParam.indexOf('mode=edit') !== -1)) {
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')], { queryParams: { mode: 'edit' } });
            }
            else {
                this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')]);
            }
        }
    }
    /**
     * change tab
     */
    changeTab(item) {
        let url = '';
        const queryParam = location.search;
        if (item.disabled) {
            return;
        }
        if (item.name == 'Booking') {
            url = '/repair/booking/' + this.repairGuid;
            this.repairMenuItems.filter(q => q.name == 'Repair')[0].active = false;
        }
        else {
            if (!this.currentStatus) { // && !this.estimationOperationLength) {
                return;
            }
            url = '/repair/booking/' + this.repairGuid + '/parts';
            this.repairMenuItems.filter(q => q.name == 'Booking')[0].active = false;
        }
        item.active = true;
        this.repairMenuItems = [...this.repairMenuItems];
        if ((queryParam.indexOf('?mode=edit') !== -1)) {
            this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')], { queryParams: { mode: 'edit' } });
        }
        else {
            this.router.navigate([url.replace('{bookingId}', this.repairGuid || '')]);
        }
        this.activeItem = item.name;
    }
    /**
     * show error dialog
     */
    displayMissingInspectionMessage(bookingId) {
        this.commonService.openAlertDialog('Notification', 'Please add your vehicle in order to add car images.').afterClosed().subscribe({
            next: (result) => {
                if (result) {
                    this.router.navigate([`repair/booking/${bookingId}`]);
                }
            },
            error: () => {
                this.commonService.hideLoading();
            }
        });
    }
    /**
     * expand user -detail
    */
    expand() {
        this.containerWidth = `${this.userDetail.nativeElement.offsetWidth}px`;
        this.expandUserDetail = !this.expandUserDetail;
    }
    /**
     * Show Hide User section based on active menu item
     */
    showHideTopHeader() {
        if (this.repairGuid && this.repairGuid != '0') {
            this.showUserSection = true;
        }
        else {
            this.showUserSection = false;
        }
    }
    /**
     * open labour rate popup
     */
    openLabourRate() {
        this.monitorService.logEvent('openLabourRate', ['CustomerLayoutComponent', 'addenda-repair']);
        let dialogRef = this.dialog.open(src_app_dialogs_labour_rate_labour_rate_component__WEBPACK_IMPORTED_MODULE_0__.ChqLabourRateComponent, {
            data: { 'repairId': this.repairGuid, 'from': src_app_model_chq_upload_model__WEBPACK_IMPORTED_MODULE_1__.Modules.repair },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe((result) => {
            dialogRef = null;
            if (result) {
                this.commonService.labourData.next(result);
                this.commonService.isRefreshRepairEstimateDetails.next(true);
            }
        });
    }
    /**
     * on destroy
     */
    ngOnDestroy() {
        this.monitorService.logEvent('ngOnDestroy', ['CustomerLayoutComponent', 'addenda-repair', {
                repairId: this.repairGuid
            }]);
        if (this.subscriptions)
            this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.commonService.activeItem.next(null);
        this.commonService.repairDetails.next(null);
        this.commonService.isViewOnly = false;
    }
}
CustomerLayoutComponent.ɵfac = function CustomerLayoutComponent_Factory(t) { return new (t || CustomerLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_5__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_message_messages_service__WEBPACK_IMPORTED_MODULE_6__.MessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_7__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_8__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog)); };
CustomerLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CustomerLayoutComponent, selectors: [["app-customer-layout"]], viewQuery: function CustomerLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.tabMain = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.userDetail = _t.first);
    } }, decls: 16, vars: 7, consts: [[1, "page-container", "mh-0", "mt-0", "fx-col"], [1, "tab-container", "fx-0"], [1, "main-tab-wrapper"], [3, "mode", "menuItems", "menuItemClick"], ["tabMain", ""], [1, "user-wrapper"], [4, "ngIf", "ngIfElse"], ["expanding", ""], [1, "tab-wrapper"], [3, "mode", "menuItems", "menuItemClick", 4, "ngIf"], [1, "tab-content", "fx-1"], ["serviceType", "repair", 3, "history", "isLoading", "toggleExpand", 4, "ngIf"], ["class", "user-detail-container fx-col", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "user-detail-container", "fx-col", 3, "ngClass", "ngStyle"], [1, "user-detail-wrapper"], ["userDetail", ""], [1, "user-detail"], [1, "heading-text"], [2, "font-weight", "500"], [1, "title"], [1, "vehicle-detail"], [1, "make-status", "fx-row"], ["class", "fx-row align-center", 4, "ngIf"], [1, "fx-row", "align-center"], [1, "heading-label"], ["class", "fx-row", 4, "ngIf"], [1, "arrow-drop"], [3, "svgIcon", "click"], [1, "fx-row"], ["style", "font-weight: 500;", 4, "ngIf"], [1, "user-detail-expand-wrapper", 3, "ngClass"], [1, "user-detail-more", "fx-col"], [1, "labour-container", 3, "click"], [1, "vehicle-detail-expand", "fx-col"], [4, "ngIf"], ["tabs", ""], ["serviceType", "repair", 3, "history", "isLoading", "toggleExpand"]], template: function CustomerLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "chq-tabs", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("menuItemClick", function CustomerLayoutComponent_Template_chq_tabs_menuItemClick_3_listener($event) { return ctx.changeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CustomerLayoutComponent_ng_container_6_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, CustomerLayoutComponent_ng_template_7_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CustomerLayoutComponent_chq_tabs_10_Template, 2, 2, "chq-tabs", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CustomerLayoutComponent_chq_tabs_11_Template, 2, 2, "chq-tabs", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, CustomerLayoutComponent_history_15_Template, 1, 2, "history", 11);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "underline")("menuItems", ctx.repairMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.expandUserDetail)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeItem === "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeItem === "Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.repairGuid !== "0");
    } }, directives: [_widgets_chq_tabs_chq_tabs_chq_tabs_component__WEBPACK_IMPORTED_MODULE_9__.ChqTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".page-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (calc(58px + 1.6vw)));\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\n  background-color: var(--xa-popup-light-gray);\n  padding-top: 0.5vw;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   chq-tabs[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 82px;\n  margin-right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%] {\n  background: var(--xa-bold-gray);\n  border-radius: 10px;\n  margin: 2px calc(5px + 1.5vw);\n  padding: 10px;\n  z-index: 1;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container.expand-main-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .fx-row[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .fx-row[_ngcontent-%COMP%] {\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .arrow-drop[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  overflow: hidden;\n  margin-top: 5px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%] {\n  grid-gap: 10px;\n  gap: 10px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .labour-container[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--xa-blue);\n  cursor: pointer;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .labour-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .phone-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 8px;\n  grid-gap: 5px;\n  gap: 5px;\n  width: 198px;\n  height: 40px;\n  cursor: pointer;\n  border: 0.4px solid #1B03A3;\n  border-radius: 39px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  font-size: 12px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .email-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .email-phone-container-wrapper[_ngcontent-%COMP%]   .phone-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 14px;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .vehicle-detail-expand[_ngcontent-%COMP%] {\n  grid-gap: 8px;\n  gap: 8px;\n  font-size: 12px;\n  line-height: 20px;\n  color: var(--xa-dark-gray);\n  font-weight: 500;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper[_ngcontent-%COMP%]   .user-detail-more[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%]   .vehicle-detail-expand[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .main-tab-wrapper[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-detail-container[_ngcontent-%COMP%]   .user-detail-expand-wrapper.expand[_ngcontent-%COMP%] {\n  display: block;\n}\n.page-container[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.page-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  background: var(--xa-tab-background);\n  overflow: auto;\n}\n.heading-text[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  font-weight: 700;\n  line-height: 20px;\n  max-width: 20ch;\n  word-break: break-all;\n}\n.heading-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--xa-dark-gray);\n  font-size: 16px !important;\n}\nchq-tabs[_ngcontent-%COMP%]     button {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n}\n@media screen and (min-device-width: 700px) and (max-device-width: 940px) {\n  .main-tab-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 6px;\n  }\n\n  .user-detail-container[_ngcontent-%COMP%] {\n    padding: 12px !important;\n  }\n  .user-detail-container[_ngcontent-%COMP%]   .user-detail-wrapper[_ngcontent-%COMP%]   .vehicle-detail[_ngcontent-%COMP%] {\n    grid-gap: 5px;\n    gap: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlEQUFBO0FBQ0o7QUFDSTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNRO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBWjtBQUVZO0VBQ0ksaUJBQUE7QUFBaEI7QUFHWTtFQUNJLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FBRmhCO0FBSWdCO0VBU0ksK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUVBLFVBQUE7QUFYcEI7QUFEb0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFHeEI7QUFTb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBUHhCO0FBU3dCOztFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBUDVCO0FBUzRCOztFQUNJLGVBQUE7QUFOaEM7QUFTNEI7O0VBQ0ksY0FBQTtFQUFBLFNBQUE7QUFOaEM7QUFhd0I7RUFDSSwwQkFBQTtBQVg1QjtBQWN3QjtFQUNJLGtCQUFBO0FBWjVCO0FBZ0JvQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFkeEI7QUFnQndCO0VBQ0ksY0FBQTtFQUFBLFNBQUE7QUFkNUI7QUFnQjRCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQWRoQztBQWdCZ0M7RUFDSSx1Q0FBQTtVQUFBLCtCQUFBO0FBZHBDO0FBb0JnQzs7RUFFSSxzQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FBeEJwQztBQTBCb0M7O0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF2QnhDO0FBNkJnQztFQUNJLGFBQUE7RUFBQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQTNCcEM7QUE2Qm9DO0VBQ0ksc0JBQUE7QUEzQnhDO0FBa0N3QjtFQUNJLGNBQUE7QUFoQzVCO0FBeUNRO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXZDWjtBQTJDSTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQXpDUjtBQTZDQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQTFDSjtBQTZDQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQTFDSjtBQThDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBM0NSO0FBK0NBO0VBQ0k7SUFDSSxrQkFBQTtFQTVDTjs7RUErQ0U7SUFDSSx3QkFBQTtFQTVDTjtFQStDVTtJQUNJLGFBQUE7SUFBQSxRQUFBO0VBN0NkO0FBQ0YiLCJmaWxlIjoiY3VzdG9tZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NnB4IC0gKGNhbGMoNThweCArIDEuNnZ3KSkpO1xuXG4gICAgLnRhYi1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNXZ3O1xuXG4gICAgICAgIC5tYWluLXRhYi13cmFwcGVyIHtcbiAgICAgICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBjaHEtdGFicyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAvL21pbi13aWR0aDogY2FsYygyOTZweCArIDEwdncpO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgICAgICAgICAgICAgLnVzZXItZGV0YWlsLWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAgICAgICAgICAgJi5leHBhbmQtbWFpbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ib2xkLWdyYXkpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweCBjYWxjKDVweCArIDEuNXZ3KTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLy9taW4td2lkdGg6IGNhbGMoMjk2cHggKyAxMHZ3KTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIC8vcmlnaHQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgLnVzZXItZGV0YWlsLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC51c2VyLWRldGFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC52ZWhpY2xlLWRldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZngtcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmFycm93LWRyb3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLWRldGFpbC1leHBhbmQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLnVzZXItZGV0YWlsLW1vcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJvdXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW1haWwtcGhvbmUtY29udGFpbmVyLXdyYXBwZXIge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbWFpbC1jb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waG9uZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTk4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjMUIwM0EzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzlweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVoaWNsZS1kZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVoaWNsZS1kZXRhaWwtZXhwYW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJi5leHBhbmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWItd3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg2cHggKyAxLjV2dyk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50YWItY29udGVudCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXRhYi1iYWNrZ3JvdW5kKTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG4uaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1heC13aWR0aDogMjBjaDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5oZWFkaW5nLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuXG5jaHEtdGFicyB7XG4gICAgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogOTQwcHgpIHtcbiAgICAubWFpbi10YWItd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG5cbiAgICAudXNlci1kZXRhaWwtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIC51c2VyLWRldGFpbC13cmFwcGVyIHtcbiAgICAgICAgICAgIC52ZWhpY2xlLWRldGFpbCB7XG4gICAgICAgICAgICAgICAgZ2FwOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAuZngtcm93IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDkwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGIge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ 11121:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/repair/booking-journal/booking-journal/booking-journal.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingJournalComponent": function() { return /* binding */ BookingJournalComponent; }
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/timezone */ 21299);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 4557);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! devextreme-angular/ui/scheduler */ 20330);
/* harmony import */ var devextreme_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/localization */ 14329);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 34122);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 82426);
/* harmony import */ var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/route-mapper/repair-status-mapper */ 93620);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../booking-preview/booking-preview.component */ 72994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helper/directive/has-permission.directive */ 22406);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! devextreme-angular/core */ 55643);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 83203);
/* harmony import */ var devextreme_angular_ui_draggable__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! devextreme-angular/ui/draggable */ 38757);































const _c0 = ["filter"];
const _c1 = ["draftcustomer"];
function BookingJournalComponent_chq_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "chq-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_chq_button_2_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r18.newBooking(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx_r0.newBookingButton);
} }
function BookingJournalComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "no_of_booking"), " ");
} }
function BookingJournalComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, "no_of_bookings"), " ");
} }
const _c2 = function (a0, a1, a2, a3) { return { "disable-date": a0, "weekend": a1, "readonly": a2, "dinner": a3 }; };
function BookingJournalComponent_dx_scheduler_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataCell_r25 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction4"](2, _c2, ctx_r20.disabledDate[dataCell_r25.startDate.toDateString()], ctx_r20.weekendDate[dataCell_r25.startDate.toDateString()], ctx_r20.isReadOnlyPermission, ctx_r20.lunchTime[dataCell_r25.startDate.toString()]));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r20.currentView === "month" ? dataCell_r25.startDate.getDate() : "", " ");
} }
const _c3 = function (a0) { return { "flex-column": a0 }; };
function BookingJournalComponent_dx_scheduler_29_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "p", 50);
} if (rf & 2) {
    const dateCell_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](2, _c3, ctx_r27.getDateText(dateCell_r26.date).length > 105))("innerHtml", ctx_r27.getDateText(dateCell_r26.date), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function BookingJournalComponent_dx_scheduler_29_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateCell_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, dateCell_r26.date, "d EEE"), " ");
} }
function BookingJournalComponent_dx_scheduler_29_div_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateCell_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", dateCell_r26.text, " ");
} }
const _c4 = function (a0) { return { "disable-date": a0 }; };
function BookingJournalComponent_dx_scheduler_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, BookingJournalComponent_dx_scheduler_29_div_2_p_1_Template, 1, 4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BookingJournalComponent_dx_scheduler_29_div_2_p_2_Template, 3, 4, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, BookingJournalComponent_dx_scheduler_29_div_2_p_3_Template, 2, 1, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateCell_r26 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](4, _c4, ctx_r21.disabledDate[dateCell_r26.date.toDateString()]));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.currentView !== "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.currentView !== "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.currentView === "month");
} }
function BookingJournalComponent_dx_scheduler_29_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeCell_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", timeCell_r33.text ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, timeCell_r33.date, "HH:mm") : "", " ");
} }
function BookingJournalComponent_dx_scheduler_29_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background", model_r34.targetedAppointmentData.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", model_r34.targetedAppointmentData.Customer == null ? null : model_r34.targetedAppointmentData.Customer.FirstName, " ", model_r34.targetedAppointmentData.Customer == null ? null : model_r34.targetedAppointmentData.Customer.LastName, "");
} }
function BookingJournalComponent_dx_scheduler_29_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_dx_scheduler_29_div_5_Template_button_click_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const model_r35 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r36.handleContextMenu("preview", $event, model_r35.targetedAppointmentData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("border-left", "12px solid " + model_r35.targetedAppointmentData.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", model_r35.targetedAppointmentData.Customer == null ? null : model_r35.targetedAppointmentData.Customer.FirstName, " ", model_r35.targetedAppointmentData.Customer == null ? null : model_r35.targetedAppointmentData.Customer.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Work Provider: ", model_r35.targetedAppointmentData.WorkProviderDto == null ? null : model_r35.targetedAppointmentData.WorkProviderDto.CompanyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Status: ", model_r35.targetedAppointmentData.DisplayStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "show");
} }
const _c5 = function () { return ["day", "week", "month"]; };
function BookingJournalComponent_dx_scheduler_29_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dx-scheduler", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onAppointmentFormOpening", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentFormOpening_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r38.onAppointmentFormOpening($event); })("onAppointmentUpdating", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentUpdating_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r40.onAppointmentUpdating($event); })("onAppointmentUpdated", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentUpdated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r41.onAppointmentUpdated($event); })("onAppointmentClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r42.onAppointmentClick($event); })("onAppointmentDblClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onAppointmentDblClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r43.onAppointmentDblClick($event); })("onOptionChanged", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onOptionChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r44.onOptionChanged($event); })("onCellClick", function BookingJournalComponent_dx_scheduler_29_Template_dx_scheduler_onCellClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r45.onCellClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, BookingJournalComponent_dx_scheduler_29_div_1_Template, 2, 7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BookingJournalComponent_dx_scheduler_29_div_2_Template, 4, 6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, BookingJournalComponent_dx_scheduler_29_div_3_Template, 3, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, BookingJournalComponent_dx_scheduler_29_div_4_Template, 6, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, BookingJournalComponent_dx_scheduler_29_div_5_Template, 14, 7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "dxo-appointment-dragging", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "dxo-scrolling", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("width", ctx_r4.calendarWidth)("height", ctx_r4.calendarHeight)("editing", true)("dataSource", ctx_r4.calendarData)("views", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](23, _c5))("currentView", ctx_r4.currentView)("adaptivityEnabled", ctx_r4.isSmallScreen)("firstDayOfWeek", 1)("startDayHour", 0)("endDayHour", 24)("currentDate", ctx_r4.currentDate)("cellDuration", 30)("useDropDownViewSwitcher", false)("crossScrollingEnabled", true)("showCurrentTimeIndicator", true)("maxAppointmentsPerCell", ctx_r4.maxAppointmentsPerCell);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "dataCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "dateCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "timeCellTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "appointment-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dxTemplateOf", "appointment-tooltip-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("group", "customer")("onAdd", ctx_r4.onAppointmentAdd);
} }
function BookingJournalComponent_hr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 23);
} }
function BookingJournalComponent_hr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr");
} }
function BookingJournalComponent_hr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 23);
} }
function BookingJournalComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "chq-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_58_Template_chq_input_controlOutput_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r46.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r9.filterModal[7]);
} }
function BookingJournalComponent_hr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 23);
} }
function BookingJournalComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "chq-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_60_Template_chq_input_controlOutput_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r48.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r11.filterModal[4]);
} }
function BookingJournalComponent_hr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr");
} }
function BookingJournalComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "chq-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_div_62_Template_chq_input_controlOutput_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r50.onFormUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx_r13.filterModal[5]);
} }
function BookingJournalComponent_hr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr");
} }
function BookingJournalComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
} }
function BookingJournalComponent_dx_draggable_85_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " License Plate: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](customer_r52.licensePlateNumber);
} }
const _c6 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function BookingJournalComponent_dx_draggable_85_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](4, 1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](7, _c6, customer_r52.cost, ctx_r54.i18n.currencySymbol, ctx_r54.i18n.digitsInfo, ctx_r54.i18n.locale, ctx_r54.i18n.position)), " ");
} }
function BookingJournalComponent_dx_draggable_85_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_dx_draggable_85_a_19_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60); const customer_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r58.handleDraftAction("delete", $event, customer_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "trash");
} }
const _c7 = function (a0) { return { "disabled": a0 }; };
const _c8 = function (a0) { return [a0]; };
function BookingJournalComponent_dx_draggable_85_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dx-draggable", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onDragStart", function BookingJournalComponent_dx_draggable_85_Template_dx_draggable_onDragStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r61.onItemDragStart($event); })("onDragEnd", function BookingJournalComponent_dx_draggable_85_Template_dx_draggable_onDragEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r63.onItemDragEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, BookingJournalComponent_dx_draggable_85_span_11_Template, 4, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, BookingJournalComponent_dx_draggable_85_span_12_Template, 5, 13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, BookingJournalComponent_dx_draggable_85_a_19_Template, 2, 1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r52 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("clone", true)("group", "customer")("data", customer_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", customer_r52.firstName, " ", customer_r52.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](10, 17, customer_r52.createdDate, "dd/MM/yyyy hh:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", customer_r52.statusClass === "RepairEstimation");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", customer_r52.statusClass === "RepairEstimation");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("status ", customer_r52.statusClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", customer_r52.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](20, _c7, !ctx_r17.hasQuotePermission && customer_r52.draftCustomerType === "Quote"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](22, _c8, customer_r52.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqPermission", "bookingJournal");
} }
const _c9 = function (a0) { return { "margin-right": a0 }; };
const _c10 = function (a0) { return { "two-per-row": a0 }; };
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
(0,devextreme_localization__WEBPACK_IMPORTED_MODULE_3__.locale)('en');
class BookingJournalComponent {
    /**
     * Constructor
     */
    constructor(router, route, formBuilder, dialog, calendarService, commonService, datePipe, cdr, bookingService, caseService, xaCurrencyPipe, translateService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.commonService = commonService;
        this.datePipe = datePipe;
        this.cdr = cdr;
        this.bookingService = bookingService;
        this.caseService = caseService;
        this.xaCurrencyPipe = xaCurrencyPipe;
        this.translateService = translateService;
        this.currentDate = new Date();
        this.startHour = 0;
        this.endHour = 24;
        this.filterButton = {
            label: 'filter',
            type: 'outline',
            icon: 'filter'
        };
        this.draftButton = {
            label: 'draft_customer',
            type: 'outline',
            icon: 'person-add'
        };
        this.newBookingButton = {
            label: 'new_booking',
            type: 'primary',
            icon: 'plus'
        };
        this.applyButton = {
            label: 'apply',
            type: 'primary'
        };
        this.resetButton = {
            label: 'reset_all',
            type: 'outline'
        };
        this.calendarData = [];
        this.draftData = [];
        this.currentView = localStorage.getItem('currentView') || 'week';
        this.calendarWidth = '100%';
        this.defaultHeight = 'calc(100vh - (5px + 0.8vw + 5px + 1.5vw + 50px))';
        this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight;
        // calc(((((100vh - (50px + 2 * (5px + 0.8vw))) - (5px + 1.5vw)) - 1.5vw) - 90px))
        this.filterForm = this.formBuilder.group({
            TypeName: [],
            Booking: [],
            WorkProviderDto: [],
            WorkProviderName: [],
            CustomerName: [],
            OrgName: '',
            Assignees: [],
            RepairType: []
        });
        this.filterModal = [
            {
                placeHolder: 'booking_type',
                name: 'TypeName',
                label: 'booking_type',
                value: '',
                type: 'checkbox',
                options: []
            },
            {
                placeHolder: 'select_organization',
                label: 'organization',
                name: 'OrgName',
                value: '',
                type: 'select',
                displayValue: 'label',
                fieldValue: 'value',
                options: [],
                isMultiSelect: false
            },
            {
                placeHolder: 'booking',
                name: 'Booking',
                label: 'booking',
                value: '',
                type: 'checkbox',
                options: [
                    { label: 'Start Date', value: 'bookingIn', checked: false },
                    { label: 'End Date', value: 'bookingOut', checked: false }
                ]
            },
            {
                placeHolder: 'work_provider',
                name: 'WorkProviderDto',
                label: 'work_provider',
                value: '',
                type: 'checkbox',
                options: []
            },
            {
                placeHolder: 'driver_name',
                name: 'CustomerName',
                label: 'driver_name',
                value: '',
                type: 'select',
                displayValue: 'label',
                fieldValue: 'value',
                options: [],
                isMultiSelect: true
            },
            {
                placeHolder: 'assigned_to',
                label: 'assigned_to',
                name: 'Assignees',
                value: '',
                type: 'select',
                displayValue: 'label',
                fieldValue: 'value',
                options: [],
                isMultiSelect: true
            },
            {
                placeHolder: 'repair_type',
                name: 'RepairType',
                label: 'repair_type',
                value: '',
                type: 'checkbox',
                options: []
            },
            {
                placeHolder: 'work_provider_name',
                name: 'WorkProviderName',
                label: 'work_provider_name',
                value: '',
                type: 'select',
                displayValue: 'label',
                fieldValue: 'value',
                options: [],
                isMultiSelect: true
            },
        ];
        this.filterDataLoaded = false;
        this.draftDataLoaded = false;
        this.isFromCalendar = false;
        this.calendarCurrentStartDate = null;
        this.calendarCurrentEndDate = null;
        this.isSmallScreen = false;
        this.isTouchScreen = false;
        this.maxAppointmentsPerCell = 2;
        this.userIsBM = false;
        this.i18n = this.commonService.geti18nInfo();
        this.isReadOnlyPermission = true;
        this.showCalendar = true;
        this.hasQuotePermission = false;
        this.windowInnerWidth = 0;
        this.lunchTime = {};
        this.bookingIdList = [];
        this.totalEstimate = 0;
        this.totalLabour = 0;
        this.totalBooking = 0;
        this.isDoubleClick = false;
        this.previewOpen = false;
        this.noPermissionRoles = {
            bookingJournal: ['bodyshop manager', 'service advisor']
        };
        this.showProviderChild = false;
        this.disabledDate = {};
        this.weekendDate = {};
        this.onAppointmentAdd = this.onAppointmentAdd.bind(this);
        this.getScreenSize();
        this.isTouchScreen = ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.maxTouchPoints > 0);
    }
    /**
     *
     * @returns
     */
    get isiOS() {
        return false;
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
    }
    /**
     * detect change in windows resize
     */
    getScreenSize() {
        var _a;
        this.windowInnerWidth = window.innerWidth;
        if (window.innerWidth < 1024) {
            this.maxAppointmentsPerCell = 1;
        }
        else {
            this.maxAppointmentsPerCell = 2;
        }
        if (window.innerWidth < 500) {
            this.isSmallScreen = true;
            this.maxAppointmentsPerCell = 0;
        }
        (_a = this.scheduler) === null || _a === void 0 ? void 0 : _a.instance.getDataSource().reload();
    }
    /**
     * on init
     */
    ngOnInit() {
        this.windowInnerWidth = window.innerWidth;
        this.commonService.userProfileData.subscribe((res) => {
            var _a, _b, _c, _d, _e, _f;
            this.userDetail = res === null || res === void 0 ? void 0 : res.data;
            const automotiveServices = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.userPermission) === null || _b === void 0 ? void 0 : _b.automotiveServices;
            this.hasQuotePermission = automotiveServices === null || automotiveServices === void 0 ? void 0 : automotiveServices.some(x => x.automotiveServiceName === 'Carheal Quote');
            this.userIsBM = (_c = this.userDetail) === null || _c === void 0 ? void 0 : _c.roleDetail.some(x => x.name == 'Bodyshop Manager');
            if ((_e = (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail) === null || _e === void 0 ? void 0 : _e.id) {
                this.filterForm.get('OrgName').setValue((_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id);
            }
            const automotiveService = automotiveServices === null || automotiveServices === void 0 ? void 0 : automotiveServices.find(x => x.automotiveServiceName.toLowerCase() === 'addenda repair');
            if (automotiveService && this.noPermissionRoles['bookingJournal'].includes(automotiveService.roleName.toLowerCase())) {
                this.isReadOnlyPermission = false;
            }
            else {
                this.isReadOnlyPermission = true;
            }
        });
        this.route.queryParams.subscribe((params) => {
            if (params['bookInDate']) {
                this.currentDate = new Date(params['bookInDate']);
            }
        });
    }
    /**
  * function
  */
    ngAfterViewInit() {
        this.getCalendarData(this.generateFilterQuery());
        this.cdr.detectChanges();
    }
    /**
     * Check and pull draft customer data
     */
    openDraftCustomer() {
        var _a;
        if (this.draftDataLoaded) {
            this.showDraftCustomer();
        }
        else {
            this.commonService.showLoading();
            (_a = this.calendarService.getDraftCustomer()) === null || _a === void 0 ? void 0 : _a.subscribe({
                next: (result) => {
                    this.draftData = result.data
                        // .filter(x => !this.bookingIdList.some(y => y === x.bookingGuid))
                        .map(((x) => {
                        var _a;
                        const statusTrimmed = (_a = x.status) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '');
                        let routeToRedirect = '/';
                        if (x.draftCustomerType === 'Repair') {
                            routeToRedirect += src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper[statusTrimmed === null || statusTrimmed === void 0 ? void 0 : statusTrimmed.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper.others;
                            routeToRedirect = routeToRedirect.replace('{{repairGUID}}', x.repairGuid);
                        }
                        else if (x.draftCustomerType === 'Quote') {
                            routeToRedirect += src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper[statusTrimmed === null || statusTrimmed === void 0 ? void 0 : statusTrimmed.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.CaseStatusMapper.others;
                            routeToRedirect = routeToRedirect.replace('{{caseGUID}}', x.caseGuid);
                        }
                        return Object.assign(Object.assign({}, x), { url: routeToRedirect, statusClass: statusTrimmed });
                    }))
                        .sort(function (a, b) {
                        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
                    });
                    this.commonService.hideLoading();
                    this.draftDataLoaded = true;
                    this.showDraftCustomer();
                }
            });
        }
    }
    /**
     * open draft customer panel
     */
    showDraftCustomer(open = true) {
        if (open) {
            this.draftCustomer.open();
        }
        this.calendarWidth = (window.innerWidth - 400) + 'px';
        this.calendarHeight = this.defaultHeight;
        this.showCalendar = false;
        setTimeout(() => {
            this.showCalendar = true;
            setTimeout(() => {
                this.scrollToCurrentTime();
            }, 0);
        }, 0);
    }
    /**
     * Check if user is bm , then call api otherwise return observable
     */
    getOrgIfBM() {
        if (this.userIsBM) {
            return this.caseService.getOrganizations();
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null);
        }
    }
    /**
     * pull data and open filter panel
     */
    openFilter() {
        var _a, _b, _c;
        if (this.filterDataLoaded) {
            this.filter.toggle();
        }
        else {
            this.commonService.showLoading();
            (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([
                this.bookingService.getBookingRepairTypes(`?orgIds=${(_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail.id}`),
                this.getOrgIfBM(),
                this.caseService.getProvidersByOrgId(`?orgIds=${(_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail.id}`),
                this.caseService.getCaseUsers(`?orgId=${(_c = this.userDetail) === null || _c === void 0 ? void 0 : _c.organizationDetail.id}`)
            ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([bookingRepairType, orgList, workProvider, employeeList]) => {
                return { bookingRepairType, orgList, workProvider, employeeList };
            })).subscribe((result) => {
                var _a, _b, _c, _d, _e, _f;
                this.filterModal[0].options = result.bookingRepairType.data.BookingTypes.map((x) => { return { label: x.name, value: x.name }; });
                if (this.userIsBM) {
                    this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { selectedOption: { 'label': (_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail.name, 'value': (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail.id }, options: result.orgList.data.map((x) => { return { label: x.name, value: x.id }; }) });
                }
                else {
                    this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { selectedOption: { 'label': (_c = this.userDetail) === null || _c === void 0 ? void 0 : _c.organizationDetail.name, 'value': (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.id }, options: [{ 'label': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.name, 'value': (_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id }], disabled: true });
                }
                this.filterModal[3].options = result.workProvider.data.map((x) => { return { label: x, value: x }; });
                this.filterModal[5] = Object.assign(Object.assign({}, this.filterModal[5]), { options: result.employeeList.data.map((x) => { return { label: x.name, value: x.id }; }) });
                if (result.bookingRepairType.data.RepairType && result.bookingRepairType.data.RepairType.length > 0) {
                    this.filterModal[6].options = result.bookingRepairType.data.RepairType[0].RepairTypes.map((x) => {
                        return { label: x.name, value: x.id, icon: this.getRepairTpeIcon(x.name) };
                    });
                }
                this.filter.toggle();
                this.commonService.hideLoading();
                this.filterDataLoaded = true;
            });
        }
    }
    /**
   * getRepairTpeIcon
   */
    getRepairTpeIcon(name) {
        const iconMapper = {
            Body: 'car',
            Maintenance: 'house',
            Paint: 'paint',
            Tires: 'tire',
            Electric: 'bolt-car',
            Electrical: 'bolt-car',
            Mechanical: 'mechanical',
            Diagnosis: 'diagnosis',
            Others: 'gears'
        };
        return iconMapper[name];
    }
    /**
  * getDisplayStatus
  */
    getDisplayStatus(status) {
        const statusMapper = {
            draft: 'Draft',
            vehicledetails: 'Vehicle Details',
            uploaddocuments: 'Upload Documents',
            uploadphotos: 'Upload Photos',
            repairestimation: 'Repair Estimation',
            pendingapproval: 'Pending Approval',
            approved: 'Approved',
            reject: 'Reject',
            rejected: 'Rejected',
            closed: 'Closed',
            complete: 'Complete',
            partsorderedpartially: 'Parts Ordered Partially',
            partsordered: 'Parts Ordered',
            repairinprogress: 'Repair In Progress',
            readytoinvoice: 'Ready To Invoice',
            invoiceready: 'Invoice Ready',
            invoiced: 'Invoiced',
            paid: 'Paid',
            others: 'Others'
        };
        return statusMapper[status.replace(/\s/g, '').toLowerCase()] || status;
    }
    /**
    * function
    */
    refreshCalendarData() {
        this.calendarData = [];
        this.getCalendarData(this.generateFilterQuery());
    }
    /**
    * function
    */
    generateFilterQuery() {
        this.calendarCurrentStartDate = this.calendarCurrentStartDate
            || new Date(this.scheduler.instance.getStartViewDate().toDateString()).toISOString();
        this.calendarCurrentEndDate = this.calendarCurrentEndDate
            || new Date(new Date(this.scheduler.instance.getEndViewDate().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
        let startDate = this.calendarCurrentStartDate;
        let endDate = this.calendarCurrentEndDate;
        if (this.isFromCalendar) {
            startDate = new Date(this.scheduler.instance.getStartViewDate().toDateString()).toISOString();
            endDate = new Date(new Date(this.scheduler.instance.getEndViewDate().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
            this.calendarCurrentStartDate = startDate;
            this.calendarCurrentEndDate = endDate;
            this.isFromCalendar = false;
        }
        const filterValue = this.filterForm.value;
        let query = `?$filter=((StartDate ge ${startDate} and StartDate le ${endDate}) or (EndDate ge ${startDate} and EndDate le ${endDate}) or (StartDate le ${startDate} and EndDate ge ${endDate}))`;
        if (filterValue['Booking']) {
            if (filterValue['Booking'].includes('bookingIn') && filterValue['Booking'].includes('bookingOut')) {
                query = `?$filter=((StartDate ge ${startDate} and StartDate le ${endDate}) and (EndDate ge ${startDate} and EndDate le ${endDate}))`;
            }
            else if (filterValue['Booking'].includes('bookingIn')) {
                query = `?$filter=((StartDate ge ${startDate} and StartDate le ${endDate}))`;
            }
            else if (filterValue['Booking'].includes('bookingOut')) {
                query = `?$filter=((EndDate ge ${startDate} and EndDate le ${endDate}))`;
            }
        }
        Object.keys(filterValue).forEach((key) => {
            switch (key) {
                case 'OrgName':
                    if (filterValue[key]) {
                        query += ` and (OrgId eq ${filterValue[key]})`;
                    }
                    break;
                case 'TypeName':
                    if (filterValue[key] && filterValue[key].length > 0) {
                        query += ` and (${filterValue[key].map(x => key + ' eq \'' + x + '\'').join(' or ')})`;
                    }
                    break;
                case 'WorkProviderDto':
                    if (filterValue[key] && filterValue[key].length > 0) {
                        query += ` and (${filterValue[key].map(x => 'WorkProviderDto/CompanyOrgType eq \'' + x + '\'').join(' or ')})`;
                    }
                    break;
                case 'WorkProviderName':
                    if (filterValue[key] && filterValue[key].length > 0) {
                        query += ` and (${filterValue[key].map(x => 'WorkProviderDto/CompanyName eq \'' + x + '\'').join(' or ')})`;
                    }
                    break;
                case 'CustomerName':
                    if (filterValue[key] && filterValue[key].length > 0) {
                        query += ` and (${filterValue[key].map(x => 'Customer/Email eq \'' + x + '\'').join(' or ')})`;
                    }
                    break;
                case 'Assignees':
                    if (filterValue[key] && filterValue[key].length > 0) {
                        const partialQuery = `${filterValue[key].map(x => 'c/AssigneeId eq ' + x).join(' or ')}`;
                        query += ` and Assignees/any(c: (${partialQuery}))`;
                    }
                    break;
                case 'RepairType':
                    if (filterValue[key] && filterValue[key].length > 0) {
                        const partialQuery = `${filterValue[key].map(x => 'c/RepairServiceTypeId eq ' + x).join(' or ')}`;
                        query += ` and RepairServiceTypes/any(c: (${partialQuery}))`;
                    }
                    break;
                default:
                    break;
            }
        });
        return query + '&$count=true';
    }
    /**
     *
     * @param arr
     * @returns
     */
    calculateSum(arr, key) {
        return arr.reduce((total, current) => {
            return total + current[key];
        }, 0);
    }
    /**
     * getCalendarData
     * @param query
     */
    getCalendarData(query) {
        var _a;
        this.totalEstimate = 0;
        this.totalLabour = 0;
        this.totalBooking = 0;
        // this.setDisabledCell();
        this.bookingIdList = [];
        this.disabledDate = {};
        this.weekendDate = {};
        this.startHour = 0;
        this.endHour = 24;
        this.commonService.showLoading();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([
            this.calendarService.getCalendarData(query),
            this.calendarService.getSchedule((_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.userId, this.calendarCurrentStartDate, this.calendarCurrentEndDate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null)))
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([calendarData, scheduleData]) => {
            const updatedValue = [];
            calendarData.value.forEach((orgValue) => {
                const mappedData = Object.assign(Object.assign({}, orgValue), { StartDate: dayjs__WEBPACK_IMPORTED_MODULE_0__(orgValue.StartDate).toDate(), EndDate: dayjs__WEBPACK_IMPORTED_MODULE_0__(orgValue.EndDate).toDate(), Color: orgValue.BookingTypeColor, Icon: (orgValue.TypeName === 'Assessment' ? 'booking-type-assessment' : 'booking-type-repair'), DisplayStatus: this.getDisplayStatus(orgValue.StatusName) });
                if (!this.isSameDay(mappedData.StartDate, mappedData.EndDate)) {
                    mappedData.allDay = true;
                }
                updatedValue.push(mappedData);
                this.bookingIdList.push(mappedData.BookingGuid);
                const startDate = this.currentView === 'month' ? new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1) : new Date(this.calendarCurrentStartDate);
                const endDate = this.currentView === 'month' ? new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0, 11, 59, 59) : new Date(this.calendarCurrentEndDate);
                if (this.checkDateRange(startDate, endDate, mappedData.StartDate)) {
                    this.totalEstimate += mappedData.EstimateCost || 0;
                    this.totalLabour += mappedData.LabourCost || 0;
                    this.totalBooking++;
                }
            });
            return { calendarData: updatedValue, scheduleData };
        })).subscribe((result) => {
            this.calendarData = [...result.calendarData];
            this.commonService.hideLoading();
            this.checkSchedule(result.scheduleData);
            this.scrollToCurrentTime();
        });
    }
    /**
     *
     */
    scrollToCurrentTime() {
        const currentDate = new Date();
        let scrollToHour = currentDate.getHours() > 0 ? currentDate.getHours() - 1 : currentDate.getHours();
        if (scrollToHour < this.startHour) {
            scrollToHour = this.startHour;
        }
        if (scrollToHour > this.endHour) {
            scrollToHour = this.endHour - 1;
        }
        this.scheduler.instance.scrollToTime(scrollToHour, currentDate.getMinutes());
    }
    /**
     *
     * @param data
     */
    checkSchedule(scheduleData) {
        var _a, _b;
        let startHour;
        let endHour;
        (_b = (_a = scheduleData === null || scheduleData === void 0 ? void 0 : scheduleData.data) === null || _a === void 0 ? void 0 : _a.calenderDays) === null || _b === void 0 ? void 0 : _b.forEach((element) => {
            if (element.breaks && element.breaks.length > 0) {
                let startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} ${element.breaks[0].startTime} Z`, 'YYYY-MM-DD hh:mm A Z');
                const endTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} ${element.breaks[0].endTime} Z`, 'YYYY-MM-DD hh:mm A Z');
                do {
                    const stringDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(startTime.toDate()).toDate().toString();
                    this.lunchTime[stringDate] = true;
                    startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(startTime.toDate()).add(30, 'm');
                } while (startTime < endTime);
            }
            const date = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} 00:00 AM Z`, 'YYYY-MM-DD hh:mm A Z');
            if (element.isOff) {
                this.disabledDate[date.toDate().toDateString()] = true;
            }
            if (element.isWeekend) {
                this.weekendDate[date.toDate().toDateString()] = true;
            }
            if (element.timeSlots && element.timeSlots.length > 0) {
                const startTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} ${element.timeSlots[0].startTime} Z`, 'YYYY-MM-DD HH:mm Z');
                const endTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(`${element.date} ${element.timeSlots[0].endTime} Z`, 'YYYY-MM-DD HH:mm Z');
                if (!startHour || startHour > startTime.toDate().getHours()) {
                    startHour = startTime.toDate().getHours();
                }
                if (!endHour || endHour < endTime.toDate().getHours()) {
                    endHour = endTime.toDate().getHours();
                    if (endTime.toDate().getMinutes() > 0 && endHour < 24) {
                        endHour = endHour + 1;
                    }
                }
            }
        });
        this.startHour = startHour || 0;
        this.endHour = endHour || 24;
        // this.showCalendar = false;
        // setTimeout(() => {
        //   this.showCalendar = true;
        // }, 0);
    }
    /**
     *
     * @param date
     * @returns
     */
    getStringDate(date) {
        return dayjs__WEBPACK_IMPORTED_MODULE_0__(date).format('YYYYMMDDHHmm');
    }
    /**
     * isSameDay
     * @param startDate
     * @param endDate
     * @returns
     */
    isSameDay(startDate, endDate) {
        const formattedStartDate = this.datePipe.transform(startDate, 'yyyy-MM-dd');
        const formattedEndDate = this.datePipe.transform(endDate, 'yyyy-MM-dd');
        return formattedStartDate === formattedEndDate;
    }
    /**
     * newBooking
     */
    newBooking() {
        this.router.navigate(['/repair/booking/0']);
    }
    /**
     * handleContextMenu
     * @param type
     * @param e
     * @param appointment
     */
    handleContextMenu(type, e, appointment) {
        if (type === 'preview') {
            if (!this.previewOpen) {
                this.openPreview(appointment);
            }
        }
        else if (type === 'delete') {
            this.scheduler.instance.deleteAppointment(this.calendarData[this.calendarData.findIndex(x => x.Id == appointment.Id)]);
        }
    }
    /**
     * cancelEvent
     * @param e
     */
    cancelEvent(e) {
        e.cancel = true;
    }
    /**
     *
     * @param appointment
     */
    openPreview(appointment) {
        this.previewOpen = true;
        appointment.isReadOnlyPermission = this.isReadOnlyPermission;
        const dialogRef = this.dialog.open(_booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__.BookingPreviewComponent, { data: appointment, maxHeight: '90vh' });
        dialogRef.afterClosed().subscribe((result) => {
            this.previewOpen = false;
            if ((result === null || result === void 0 ? void 0 : result.success) && (result.type === 'delete' || result.type === 'refresh')) {
                this.refreshCalendarData();
                this.draftClose();
                this.draftData = [];
                this.draftDataLoaded = false;
            }
        });
    }
    /**
       * onAppointmentClick
       * @param e
       */
    onAppointmentClick(e) {
        setTimeout(() => {
            if (!this.isDoubleClick && !this.previewOpen) {
                this.openPreview(e.appointmentData);
            }
        }, 500);
        this.isDoubleClick = false;
        e.cancel = true;
    }
    /**
       * onAppointmentDblClick
       * @param e
       */
    onAppointmentDblClick(e) {
        var _a;
        this.isDoubleClick = true;
        const routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper[(_a = e.appointmentData.StatusName) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '').toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper.others;
        this.router.navigate([routeToRedirect.replace('{{repairGUID}}', e.appointmentData.ObjectGuid)]);
        e.cancel = true;
    }
    /**
     * onOptionChanged
     * @param e
     */
    onOptionChanged(e) {
        if (e.name === 'currentView') {
            this.currentView = e.value;
            localStorage.setItem('currentView', this.currentView);
            this.isFromCalendar = true;
            setTimeout(() => {
                this.draftClose();
                this.draftData = [];
                this.draftDataLoaded = false;
                this.refreshCalendarData();
            }, 100);
            this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight;
        }
        else if (e.name === 'currentDate') {
            this.currentDate = e.value;
            this.isFromCalendar = true;
            setTimeout(() => {
                this.draftClose();
                this.draftData = [];
                this.draftDataLoaded = false;
                this.refreshCalendarData();
            }, 100);
        }
    }
    /**
     * onCellClick
     * @param e
     */
    onCellClick(e) {
        if (!this.previewOpen) {
            if (this.isReadOnlyPermission) {
                e.cancel = true;
                this.commonService.showInfoToast(5000, 'msg_gt_permission');
            }
            else {
                this.checkDateAndOpen(e);
            }
        }
    }
    /**
     *
     * @param e
     */
    checkDateAndOpen(e) {
        if (this.isPastDate(e.cellData.startDate)) {
            e.cancel = true;
            this.commonService.showInfoToast(5000, 'cannot_past_date');
        }
        else {
            const isValidAppointment = this.isValidAppointment(e.component, e.cellData);
            if (!isValidAppointment) {
                e.cancel = true;
                this.notifyDisableDate();
            }
            else {
                const startDate = this.datePipe.transform(e.cellData.startDate, 'yyyy-MM-ddTHH:mm:ss');
                const endDate = this.datePipe.transform(e.cellData.endDate, 'yyyy-MM-ddTHH:mm:ss');
                this.router.navigate(['/repair/booking/0'], { queryParams: { startDate: startDate, endDate: endDate } });
            }
        }
    }
    /**
     *
     * @param e
     */
    onAppointmentFormOpening(e) {
        e.cancel = true;
        const startDate = e.appointmentData.startDate;
        if (!this.isValidAppointmentDate(startDate)) {
            e.cancel = true;
            this.notifyDisableDate();
        }
    }
    /**
     *
     * @param e
     */
    onAppointmentAdding(e) {
        const isValidAppointment = this.isValidAppointment(e.component, e.appointmentData);
        if (!isValidAppointment) {
            e.cancel = true;
            this.notifyDisableDate();
        }
    }
    /**
     *
     * @param e
     */
    onAppointmentUpdating(e) {
        const allowedStatus = ['draft', 'vehicledetails', 'uploaddocuments', 'uploadphotos', 'repairestimation', 'pendingapproval', 'approved', 'reject', 'rejected', 'repairinprogress'];
        const statusTrimmed = e.oldData.StatusName.toLowerCase().replace(/\s/g, '');
        if (!this.isReadOnlyPermission && allowedStatus.includes(statusTrimmed)) {
            const isValidAppointment = this.isValidAppointment(e.component, e.newData);
            if (!isValidAppointment) {
                e.cancel = true;
                this.notifyDisableDate();
            }
            if (e.newData.TypeName === 'Assessment') {
                if ((e.newData.StartDate.getTime() === e.oldData.StartDate.getTime() && e.newData.EndDate.getTime() !== e.oldData.EndDate.getTime())
                    || (e.newData.StartDate.getTime() !== e.oldData.StartDate.getTime() && e.newData.EndDate.getTime() === e.oldData.EndDate.getTime())) {
                    //This means that the appointment is resized and you can cancel it.  
                    e.cancel = true;
                }
            }
        }
        else {
            e.cancel = true;
            if (!allowedStatus.includes(statusTrimmed)) {
                const message = this.translateService.instant('cannot_update_datetime_for_status', { status: this.getDisplayStatus(statusTrimmed) });
                this.commonService.showInfoToast(5000, message);
            }
        }
    }
    /**
     *
     * @param e
     */
    onAppointmentUpdated(e) {
        if (!this.isReadOnlyPermission) {
            const startDate = new Date(e.appointmentData.StartDate.getTime());
            let endDate = new Date(e.appointmentData.EndDate.getTime());
            if (e.appointmentData.allDay && startDate.getDate() == endDate.getDate()) {
                endDate = new Date(e.appointmentData.StartDate.getTime());
                endDate.setDate(endDate.getDate() + 1);
            }
            this.patchBooking(startDate, endDate, e.appointmentData.BookingGuid).subscribe({
                next: () => {
                    this.commonService.hideLoading();
                    this.refreshCalendarData();
                }
            });
        }
        else {
            e.cancel = true;
        }
    }
    /**
     *
     * @param startDate
     * @param endDate
     * @param bookingGuid
     * @returns
     */
    patchBooking(startDate, endDate, bookingGuid) {
        const patchValue = [
            {
                op: 'replace',
                path: 'StartDate',
                value: dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(startDate).format('YYYY-MM-DDTHH:mm:ss.000') + 'Z'
            },
            {
                op: 'replace',
                path: 'EndDate',
                value: dayjs__WEBPACK_IMPORTED_MODULE_0__.utc(endDate).format('YYYY-MM-DDTHH:mm:ss.000') + 'Z'
            },
            {
                op: 'replace',
                path: 'IsArrived',
                value: 'False'
            },
            {
                op: 'replace',
                path: 'IsNoShow',
                value: 'False'
            },
        ];
        this.commonService.showLoading();
        return this.calendarService.updateBooking(bookingGuid, patchValue);
    }
    /**
     *
     */
    notifyDisableDate() {
        this.commonService.showInfoToast(5000, 'cannot_disabled_date');
    }
    /**
     *
     * @param date
     * @returns
     */
    isHoliday(date) {
        const localeDate = date.toLocaleDateString();
        const holidays = this.calendarService.getHolidays();
        return holidays.filter(holiday => holiday.toLocaleDateString() === localeDate).length > 0;
    }
    /**
     *
     * @param date
     * @returns
     */
    isWeekend(date) {
        const day = date.getDay();
        return day === 0;
    }
    /**
     *
     * @param date
     * @returns
     */
    isDisableDate(date) {
        return this.isHoliday(date); // || this.isWeekend(date) || this.isPastDate(date);
    }
    /**
     *
     * @param date
     * @returns
     */
    isPastDate(date) {
        return date < new Date();
    }
    /**
     *
     * @param date
     * @returns
     */
    isDisabledDateCell(date) {
        return this.currentView === 'month'
            ? this.isWeekend(date)
            : this.isDisableDate(date);
    }
    /**
     *
     * @param date
     * @returns
     */
    // hasCoffeeCupIcon(date: Date): boolean {
    //   const hours = date.getHours();
    //   const minutes = date.getMinutes();
    //   const dinnerTime = this.lunchTime;
    //   return hours === dinnerTime.from && minutes === 0;
    // }
    /**
     *
     * @param component
     * @param appointmentData
     * @returns
     */
    isValidAppointment(component, appointmentData) {
        const startDate = new Date(appointmentData.StartDate || appointmentData.startDate);
        const endDate = new Date(appointmentData.EndDate || appointmentData.endDate);
        return this.isValidAppointmentInterval(startDate, endDate, 30);
    }
    /**
     *
     * @param startDate
     * @param endDate
     * @param cellDuration
     * @returns
     */
    isValidAppointmentInterval(startDate, endDate, cellDuration) {
        const edgeEndDate = new Date(endDate.getTime());
        if (!this.isValidAppointmentDate(edgeEndDate)) {
            return false;
        }
        return true;
    }
    /**
     *
     * @param date
     * @returns
     */
    isValidAppointmentDate(date) {
        // return !this.isHoliday(date) &&
        //   !(date.getHours() >= this.lunchTime.from &&
        //     date.getHours() < this.lunchTime.to) &&
        //   !this.isWeekend(date) && !this.isPastDate(date);
        // return !this.isHoliday(date) &&
        //   !this.isWeekend(date) && !this.isPastDate(date);
        return !this.isPastDate(date);
    }
    /**
     *
     * @param form
     */
    applyDisableDatesToDateEditors(form) {
        const holidays = this.calendarService.getHolidays();
        const startDateEditor = form.getEditor('startDate');
        startDateEditor.option('disabledDates', holidays);
        const endDateEditor = form.getEditor('endDate');
        endDateEditor.option('disabledDates', holidays);
    }
    /**
     *
     * @param currentDate
     * @returns
     */
    getDateText(currentDate) {
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
        const filteredData = this.calendarData.filter(x => this.checkDateRange(startDate, endDate, x.StartDate)).map(a => a);
        if (filteredData.length > 0) {
            return '<span>' + this.xaCurrencyPipe.transform(this.calculateSum(filteredData, 'EstimateCost'), this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '<span>E</span></span>' +
                '<span>' + this.xaCurrencyPipe.transform(this.calculateSum(filteredData, 'LabourCost'), this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '<span>L</span></span>' +
                '<span class="has-background">' + filteredData.length + '</span>';
        }
        else {
            return '<span>' + this.xaCurrencyPipe.transform(0, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '<span>E</span></span>' +
                '<span>' + this.xaCurrencyPipe.transform(0, this.i18n.currencySymbol, this.i18n.digitsInfo, this.i18n.locale, this.i18n.position) + '<span>L</span></span>' +
                '<span class="has-background">0</span>';
        }
    }
    /**
     *
     * @param start
     * @param end
     * @param current
     * @returns
     */
    checkDateRange(start, end, current) {
        if (start <= current && current <= end) {
            return true;
        }
        return false;
    }
    /**
     *
     * @param output
     */
    onFormUpdate(output) {
        if (output.name === 'TypeName' || output.name === 'Booking' || output.name === 'WorkProviderDto' || output.name === 'RepairType') {
            // eslint-disable-next-line prefer-const
            let prevValue = this.filterForm.get(output.name).value || [];
            if (output.value) {
                if (prevValue.indexOf(output.keyFieldValue) === -1) {
                    prevValue.push(output.keyFieldValue);
                }
            }
            else {
                const index = prevValue.indexOf(output.keyFieldValue);
                prevValue.splice(index, 1);
            }
            this.filterForm.get(output.name).setValue(prevValue);
            if (output.name === 'WorkProviderDto') {
                this.showProviderChild = (prevValue.length > 1 || (prevValue.length == 1 && !prevValue.includes('Retail')));
            }
            if (prevValue.length > 0 && output.name === 'WorkProviderDto') {
                this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), { value: '', selectedOption: '' });
                this.filterForm.get('CustomerName').setValue('');
                this.filterModal[7] = Object.assign(Object.assign({}, this.filterModal[7]), { value: '', options: [], selectedOption: '' });
                this.filterForm.get('WorkProviderName').setValue('');
                this.commonService.showLoading();
                let query = `?$filter= (OrgId eq ${this.filterForm.get('OrgName').value})`;
                query += `and (${prevValue.map((x) => { return `CompanyOrgType eq '${x}'`; }).join(' or ')})`;
                const orgQuery = `?orgId=${this.filterForm.get('OrgName').value}`;
                prevValue.forEach((value) => {
                    this.caseService.getCompanyData(value, orgQuery).subscribe({
                        next: (result) => {
                            const concatArray = this.filterModal[7].options.concat(result.data.map((x) => {
                                return { label: x.companyName || x.partnershipName, value: x.companyName || x.partnershipName };
                            }));
                            this.filterModal[7] = Object.assign(Object.assign({}, this.filterModal[7]), { options: concatArray });
                        }
                    });
                });
                this.calendarService.getCustomer(query).subscribe({
                    next: (result) => {
                        this.commonService.hideLoading();
                        if (result) {
                            this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), { options: result.value.filter((value, index, self) => {
                                    return self.findIndex(o => o.ContactId === value.ContactId) === index;
                                }).map((x) => {
                                    return {
                                        label: x.FirstName + ' ' + x.LastName,
                                        value: x.Email,
                                        html: `<div class='workflow-customer-item'><span class='name'>${x.FirstName + ' ' + x.LastName}</span><span class='email'>${x.Email}</span></div>`
                                    };
                                }) });
                        }
                        else {
                            this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), { options: [] });
                        }
                    },
                    error: () => {
                        this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), { options: [] });
                        this.commonService.hideLoading();
                    }
                });
            }
            else {
                this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), { options: [] });
            }
        }
        else if (output.name === 'Assignees') {
            this.filterModal[5] = Object.assign(Object.assign({}, this.filterModal[5]), { selectedOption: output.value });
            this.filterForm.get(output.name).setValue(output.value.map((x) => { return x.value; }));
        }
        else if (output.name === 'CustomerName') {
            this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), { selectedOption: output.value });
            this.filterForm.get(output.name).setValue(output.value.map((x) => { return x.value; }));
        }
        else if (output.name === 'WorkProviderName') {
            this.filterModal[7] = Object.assign(Object.assign({}, this.filterModal[7]), { selectedOption: output.value });
            this.filterForm.get(output.name).setValue(output.value.map((x) => { return x.value; }));
        }
        else if (output.name === 'OrgName') {
            this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { selectedOption: output.value });
            this.filterForm.get(output.name).setValue(output.value.value);
            this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { options: [] });
            this.filterModal[3] = Object.assign(Object.assign({}, this.filterModal[3]), { options: [] });
            this.filterModal[4] = Object.assign(Object.assign({}, this.filterModal[4]), { options: [] });
            this.filterModal[5] = Object.assign(Object.assign({}, this.filterModal[5]), { options: [] });
            this.filterModal[6] = Object.assign(Object.assign({}, this.filterModal[6]), { options: [] });
            this.filterModal[7] = Object.assign(Object.assign({}, this.filterModal[7]), { options: [] });
            this.filterForm.get('WorkProviderDto').setValue('');
            this.filterForm.get('WorkProviderName').setValue('');
            this.filterForm.get('CustomerName').setValue('');
            if (this.filterForm.get(output.name).value) {
                this.getWorkProviders(this.filterForm.get(output.name).value);
                this.applyButton = Object.assign(Object.assign({}, this.applyButton), { type: 'primary' });
            }
            else {
                this.applyButton = Object.assign(Object.assign({}, this.applyButton), { type: 'disabled' });
            }
            this.showProviderChild = false;
        }
        else {
            this.filterForm.get(output.name).setValue(output.value);
        }
    }
    /**
     *
     * @param value
     * @returns
     */
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return `${value} `;
    }
    /**
     *
     */
    // setDisabledCell(): void {
    //   const startDate = this.scheduler.instance.getStartViewDate();
    //   const endDate = this.scheduler.instance.getEndViewDate();
    //   for (const date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    //     // if (this.isPastDate(startDate)) {
    //     //   this.disabledDate[startDate.toDateString()] = true;
    //     //   continue;
    //     // }
    //     if (this.isDisableDate(date)) {
    //       this.disabledDate[date.toDateString()] = true;
    //     } else {
    //       if (this.isWeekend(date)) {
    //         this.weekendDate[date.toDateString()] = true;
    //       }
    //     }
    //   }
    // }
    /**
     *
     */
    applyFilter() {
        this.refreshCalendarData();
        this.filter.close();
    }
    /**
     *
     */
    resetFilter() {
        var _a, _b, _c, _d, _e, _f;
        this.filterForm.reset();
        for (let index = 0; index < this.filterModal.length; index++) {
            if (!this.filterModal[index].disabled) {
                this.filterModal[index] = Object.assign(Object.assign({}, this.filterModal[index]), { value: '', selectedOption: '', options: (_a = this.filterModal[index].options) === null || _a === void 0 ? void 0 : _a.map((x) => { x.checked = false; return x; }) });
            }
        }
        this.showProviderChild = false;
        if ((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
            this.filterForm.get('OrgName').setValue((_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.id);
            this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { selectedOption: { 'label': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.name, 'value': (_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id } });
            if (this.filterForm.get('OrgName').value) {
                this.getWorkProviders(this.filterForm.get('OrgName').value);
            }
        }
        this.applyButton = Object.assign(Object.assign({}, this.applyButton), { type: 'primary' });
        // this.refreshCalendarData();
        // this.filter.close();
    }
    /*Draft customer*/
    /**
     *
     * @param e
     */
    onItemDragStart(e) {
        e.itemData = e.fromData;
    }
    /**
     *
     * @param e
     */
    onItemDragEnd(e) {
        if (e.toData) {
            e.cancel = true;
        }
    }
    /**
     *
     * @param e
     */
    onAppointmentAdd(e) {
        if (this.isReadOnlyPermission) {
            this.commonService.showInfoToast(5000, 'msg_gt_permission');
        }
        else {
            this.addAppointmentFromDraft(e);
        }
    }
    /**
     *
     * @param e
     */
    addAppointmentFromDraft(e) {
        if (this.isPastDate(e.itemData.StartDate)) {
            e.cancel = true;
            this.commonService.showInfoToast(5000, 'cannot_past_date');
        }
        else {
            const isValidAppointment = this.isValidAppointment(e.component, e.itemData);
            if (!isValidAppointment) {
                e.cancel = true;
                this.notifyDisableDate();
            }
            else {
                if (e.itemData.draftCustomerType === 'Quote') {
                    if (e.itemData.status == 'Repair Estimation') {
                        const startDate = this.datePipe.transform(e.itemData.StartDate, 'yyyy-MM-ddTHH:mm:ss');
                        const endDate = this.datePipe.transform(e.itemData.EndDate, 'yyyy-MM-ddTHH:mm:ss');
                        this.router.navigate(['repair/booking/0'], {
                            queryParams: { 'caseId': e.itemData.caseGuid, 'startDate': startDate, 'endDate': endDate }
                        });
                    }
                    else {
                        this.router.navigate([`/quote/case/${e.itemData.caseGuid}`]);
                    }
                }
                else if (e.itemData.draftCustomerType === 'Repair') {
                    this.patchBooking(e.itemData.StartDate, e.itemData.EndDate, e.itemData.bookingGuid).subscribe({
                        next: () => {
                            this.commonService.hideLoading();
                            this.draftDataLoaded = false;
                            this.refreshCalendarData();
                            this.openDraftCustomer();
                        }
                    });
                }
                else {
                    this.commonService.showInfoToast(1000, 'draft_type_not_defined');
                }
            }
        }
    }
    /**
     *
     * @param type
     * @param e
     * @param customer
     */
    handleDraftAction(type, e, customer) {
        if (type === 'preview') {
            if (customer.draftCustomerType == 'Repair') {
                this.router.navigate([`/repair/booking/${customer.repairGuid}`]);
            }
            else if (customer.draftCustomerType == 'Quote') {
                this.router.navigate([`/quote/case/${customer.caseGuid}`]);
            }
        }
        else if (type === 'delete') {
            this.commonService.openDeleteDialog('customer')
                .afterClosed().subscribe((data) => {
                if (data) {
                    this.commonService.showLoading();
                    this.calendarService.deleteDraftCustomer(customer.id).subscribe({
                        next: () => {
                            this.commonService.hideLoading();
                            this.draftDataLoaded = false;
                            this.openDraftCustomer();
                        }
                    });
                }
            });
        }
    }
    /**
     *
     */
    draftClose() {
        this.draftCustomer.close();
        this.calendarWidth = '100%';
        this.calendarHeight = this.currentView === 'month' ? '100%' : this.defaultHeight;
    }
    /**
     * get work providers
     * @param orgId
     */
    getWorkProviders(orgId) {
        this.commonService.showLoading();
        // this.caseService.getProvidersByOrgId(`?orgIds=${orgId}`).subscribe({
        //   next: (result) => {
        //     this.commonService.hideLoading();
        //     this.filterModal[3].options = result.data.map((x) => { return { label: x, value: x } });
        //   },
        //   error: (err) => {
        //     this.commonService.hideLoading();
        //   }
        // });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([
            this.bookingService.getBookingRepairTypes(`?orgIds=${orgId}`),
            this.caseService.getProvidersByOrgId(`?orgIds=${orgId}`),
            this.caseService.getCaseUsers(`?orgId=${orgId}`)
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([bookingRepairType, workProvider, employeeList]) => {
            return { bookingRepairType, workProvider, employeeList };
        })).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if ((_a = result === null || result === void 0 ? void 0 : result.bookingRepairType) === null || _a === void 0 ? void 0 : _a.data)
                this.filterModal[0].options = (_b = result === null || result === void 0 ? void 0 : result.bookingRepairType) === null || _b === void 0 ? void 0 : _b.data.BookingTypes.map((x) => { return { label: x.name, value: x.name }; });
            if ((_c = result === null || result === void 0 ? void 0 : result.workProvider) === null || _c === void 0 ? void 0 : _c.data)
                this.filterModal[3].options = (_d = result === null || result === void 0 ? void 0 : result.workProvider) === null || _d === void 0 ? void 0 : _d.data.map((x) => { return { label: x, value: x }; });
            if ((_e = result === null || result === void 0 ? void 0 : result.employeeList) === null || _e === void 0 ? void 0 : _e.data) {
                this.filterModal[5] = Object.assign(Object.assign({}, this.filterModal[5]), { options: (_g = (_f = result === null || result === void 0 ? void 0 : result.employeeList) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.map((x) => { return { label: x.name, value: x.id }; }) });
            }
            if (result.bookingRepairType.data.RepairType && result.bookingRepairType.data.RepairType.length > 0) {
                this.filterModal[6].options = result.bookingRepairType.data.RepairType[0].RepairTypes.map((x) => {
                    return { label: x.name, value: x.id, icon: this.getRepairTpeIcon(x.name) };
                });
            }
            this.commonService.hideLoading();
        });
    }
}
BookingJournalComponent.ɵfac = function BookingJournalComponent_Factory(t) { return new (t || BookingJournalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_8__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_9__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.XaCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService)); };
BookingJournalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: BookingJournalComponent, selectors: [["chr-booking-journal"]], viewQuery: function BookingJournalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_24__.DxSchedulerComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.scheduler = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.draftCustomer = _t.first);
    } }, hostBindings: function BookingJournalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("resize", function BookingJournalComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService])], decls: 90, vars: 81, consts: [[1, "calendar-header-container", 3, "ngClass"], [1, "filter"], [3, "buttonModel", "click", 4, "chqPermission"], [3, "buttonModel", "click"], [1, "total"], [1, "has-background"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "booking-calendar", "mh-0", 3, "ngClass"], ["startDateExpr", "StartDate", "endDateExpr", "EndDate", "dateCellTemplate", "dateCellTemplate", "timeCellTemplate", "timeCellTemplate", "dataCellTemplate", "dataCellTemplate", "appointmentTemplate", "appointment-template", "appointmentTooltipTemplate", "appointment-tooltip-template", 3, "width", "height", "editing", "dataSource", "views", "currentView", "adaptivityEnabled", "firstDayOfWeek", "startDayHour", "endDayHour", "currentDate", "cellDuration", "useDropDownViewSwitcher", "crossScrollingEnabled", "showCurrentTimeIndicator", "maxAppointmentsPerCell", "onAppointmentFormOpening", "onAppointmentUpdating", "onAppointmentUpdated", "onAppointmentClick", "onAppointmentDblClick", "onOptionChanged", "onCellClick", 4, "ngIf"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [3, "inputModel", "controlOutput"], [1, "no-line"], [1, "row", "custom-checkbox"], [3, "ngClass", "inputModel", "controlOutput"], ["class", "no-line", 4, "ngIf"], [1, "two-per-row", 3, "inputModel", "controlOutput"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "footer"], [1, "col-6"], [1, "draft-sidenav-container", 3, "hasBackdrop"], [1, "draft-sidenav", 3, "mode", "position"], ["draftcustomer", ""], [1, "draft-container"], ["class", "no-data-wrapper", 4, "ngIf"], ["class", "item dx-card dx-theme-text-color dx-theme-background-color", "handle", ".draggable", 3, "clone", "group", "data", "onDragStart", "onDragEnd", 4, "ngFor", "ngForOf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png"], ["startDateExpr", "StartDate", "endDateExpr", "EndDate", "dateCellTemplate", "dateCellTemplate", "timeCellTemplate", "timeCellTemplate", "dataCellTemplate", "dataCellTemplate", "appointmentTemplate", "appointment-template", "appointmentTooltipTemplate", "appointment-tooltip-template", 3, "width", "height", "editing", "dataSource", "views", "currentView", "adaptivityEnabled", "firstDayOfWeek", "startDayHour", "endDayHour", "currentDate", "cellDuration", "useDropDownViewSwitcher", "crossScrollingEnabled", "showCurrentTimeIndicator", "maxAppointmentsPerCell", "onAppointmentFormOpening", "onAppointmentUpdating", "onAppointmentUpdated", "onAppointmentClick", "onAppointmentDblClick", "onOptionChanged", "onCellClick"], [3, "ngClass", 4, "dxTemplate", "dxTemplateOf"], [4, "dxTemplate", "dxTemplateOf"], [3, "group", "onAdd"], ["mode", "virtual"], [3, "ngClass"], ["class", "calendar-header header-info", 3, "ngClass", "innerHtml", 4, "ngIf"], ["class", "calendar-header date-info", 4, "ngIf"], [1, "calendar-header", "header-info", 3, "ngClass", "innerHtml"], [1, "calendar-header", "date-info"], [1, "template-wrap"], [1, "template-content-wrap"], [1, "subject"], [1, "tooltip-template-wrap"], [1, "tooltip-content-wrap"], [1, "booking-detail"], [1, "assigned"], [1, "status"], [1, "context-menu"], ["color", "black", 3, "svgIcon"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""], ["handle", ".draggable", 1, "item", "dx-card", "dx-theme-text-color", "dx-theme-background-color", 3, "clone", "group", "data", "onDragStart", "onDragEnd"], [1, "draft-wrap"], ["color", "light-gray", 1, "draggable", 3, "svgIcon"], [1, "draft-content-wrap"], [1, "value"], [1, "draft-action-menu"], [3, "ngClass", "routerLink"], [3, "click", 4, "chqPermission"], ["color", "red", 3, "svgIcon"]], template: function BookingJournalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, BookingJournalComponent_chq_button_2_Template, 1, 1, "chq-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_3_listener() { return ctx.openDraftCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_4_listener() { return ctx.openFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "xaCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "xaCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, BookingJournalComponent_ng_container_25_Template, 3, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, BookingJournalComponent_ng_template_26_Template, 2, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, BookingJournalComponent_dx_scheduler_29_Template, 8, 24, "dx-scheduler", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "mat-sidenav-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "mat-sidenav", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r64); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](32); return _r5.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "chq-input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_44_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "chq-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_48_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, BookingJournalComponent_hr_49_Template, 1, 0, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_52_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, BookingJournalComponent_hr_53_Template, 1, 0, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_56_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, BookingJournalComponent_hr_57_Template, 1, 0, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, BookingJournalComponent_div_58_Template, 3, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, BookingJournalComponent_hr_59_Template, 1, 0, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, BookingJournalComponent_div_60_Template, 3, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, BookingJournalComponent_hr_61_Template, 1, 0, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](62, BookingJournalComponent_div_62_Template, 3, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, BookingJournalComponent_hr_63_Template, 1, 0, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("controlOutput", function BookingJournalComponent_Template_chq_input_controlOutput_66_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_70_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_chq_button_click_72_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "mat-sidenav-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "mat-sidenav", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BookingJournalComponent_Template_button_click_82_listener() { return ctx.draftClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](83, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](84, BookingJournalComponent_div_84_Template, 9, 6, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](85, BookingJournalComponent_dx_draggable_85_Template, 20, 24, "dx-draggable", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](89, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](63, _c9, ctx.isiOS));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("chqPermission", "bookingJournal");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx.draftButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx.filterButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](11, 43, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](65, _c6, ctx.totalEstimate, ctx.i18n.currencySymbol, ctx.i18n.digitsInfo, ctx.i18n.locale, ctx.i18n.position)));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 49, "total_estimated"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBindV"](19, 51, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction5"](71, _c6, ctx.totalLabour, ctx.i18n.currencySymbol, ctx.i18n.digitsInfo, ctx.i18n.locale, ctx.i18n.position)));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](21, 57, "total_labour"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.totalBooking);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.totalBooking === 1)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](77, _c9, ctx.isiOS));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](37, 59, "filters"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx.filterModal[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](79, _c10, ctx.filterModal[0].options.length < 3 || (ctx.filterModal[0].options[2] == null ? null : ctx.filterModal[0].options[2].label.length) > 12))("inputModel", ctx.filterModal[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[0].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx.filterModal[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[3].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx.filterModal[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showProviderChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showProviderChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterForm.get("WorkProviderDto").value && ctx.filterForm.get("WorkProviderDto").value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterForm.get("WorkProviderDto").value && ctx.filterForm.get("WorkProviderDto").value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[5].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[5].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterModal[6].options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inputModel", ctx.filterModal[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx.applyButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("buttonModel", ctx.resetButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](80, 61, "draft_customers"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.draftData || ctx.draftData.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.draftData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__.HasPermissionDirective, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_12__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenav, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_13__.ChqInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, devextreme_angular__WEBPACK_IMPORTED_MODULE_24__.DxSchedulerComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_27__.DxTemplateDirective, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_28__.DxoAppointmentDraggingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_28__.DxoScrollingComponent, devextreme_angular_ui_draggable__WEBPACK_IMPORTED_MODULE_29__.DxDraggableComponent, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkWithHref], pipes: [src_app_helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.XaCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], styles: ["[_nghost-%COMP%]  .mat-drawer-container {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-drawer-backdrop {\n  position: fixed;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav {\n  position: fixed;\n  width: 300px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav.filter-sidenav {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .mat-drawer-inner-container {\n  overflow-x: hidden;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .filter-container {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .title {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action button {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .header .action button .mat-icon {\n  height: 16px;\n  width: 16px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .checkbox {\n  align-items: center !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .input-label {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper {\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper label {\n  min-width: 74px;\n  max-width: 95%;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .checkbox-wrapper label .span-label {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .custom-checkbox .input-wrapper .dropdown-item .checkbox-wrapper label {\n  width: 100%;\n  height: auto;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container hr {\n  margin: 20px 0;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container hr.no-line {\n  border: none;\n  margin: 10px 0;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container mat-slider {\n  width: 100%;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .form-container .two-per-row label {\n  min-width: 133px !important;\n  width: auto !important;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]  .mat-drawer-container .mat-sidenav .footer .row {\n  width: 92%;\n}\n.calendar-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n.calendar-header-container[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n}\n.calendar-header-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-left: auto;\n  flex-wrap: wrap;\n  grid-gap: 20px;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n.approved[_ngcontent-%COMP%], .Approved[_ngcontent-%COMP%] {\n  color: var(--xa-approve);\n}\n.PendingApproval[_ngcontent-%COMP%], .pendingapproval[_ngcontent-%COMP%] {\n  color: var(--xa-pending-approval);\n}\n.rejected[_ngcontent-%COMP%], .Rejected[_ngcontent-%COMP%], .reject[_ngcontent-%COMP%], .Reject[_ngcontent-%COMP%] {\n  color: var(--xa-red);\n}\n.closed[_ngcontent-%COMP%], .Closed[_ngcontent-%COMP%], .Complete[_ngcontent-%COMP%], .complete[_ngcontent-%COMP%] {\n  color: var(--xa-blue);\n}\n.draft[_ngcontent-%COMP%], .Draft[_ngcontent-%COMP%] {\n  color: var(--xa-draft);\n}\n.noshow[_ngcontent-%COMP%], .NoShow[_ngcontent-%COMP%] {\n  color: var(--xa-noshow);\n}\n.repairestimation[_ngcontent-%COMP%], .RepairEstimation[_ngcontent-%COMP%] {\n  color: var(--xa-repair-estimate);\n}\n.uploaddocuments[_ngcontent-%COMP%], .UploadDocuments[_ngcontent-%COMP%] {\n  color: var(--xa-upload-document);\n}\n.addphotos[_ngcontent-%COMP%], .AddPhotos[_ngcontent-%COMP%], .uploadPhotos[_ngcontent-%COMP%], .UploadPhotos[_ngcontent-%COMP%] {\n  color: var(--xa-upload-photo);\n}\n.vehicledetails[_ngcontent-%COMP%], .VehicleDetails[_ngcontent-%COMP%] {\n  color: var(--xa-vehicle-detail);\n}\n.total[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  grid-gap: 0.2vw;\n  gap: 0.2vw;\n  font-size: 0.8rem;\n}\n@media (max-width: 1250px) {\n  .total[_ngcontent-%COMP%] {\n    top: 90px;\n  }\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 3px 6px;\n  grid-gap: 0.4vw;\n  gap: 0.4vw;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .has-background[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-gray);\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 14px;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.has-background) {\n  background: black;\n  color: white;\n}\n.total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span.has-background[_ngcontent-%COMP%] {\n  background-color: var(--xa-lighter-gray);\n}\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n.no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: calc(50vh - 170px);\n}\n.no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctam91cm5hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRVE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFBWjtBQUdRO0VBQ0ksa0JBQUE7QUFEWjtBQUlRO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSFo7QUFLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSGhCO0FBT2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMcEI7QUFPb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUx4QjtBQWFZO0VBQ0ksOEJBQUE7QUFYaEI7QUFnQm9CO0VBQ0ksbUJBQUE7QUFkeEI7QUFpQm9CO0VBQ0ksZUFBQTtBQWZ4QjtBQWlCd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQWY1QjtBQWlCNEI7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQWZoQztBQXNCNEI7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXBCaEM7QUEyQlk7RUFDSSxjQUFBO0FBekJoQjtBQTJCZ0I7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQXpCcEI7QUE2Qlk7RUFDSSxXQUFBO0FBM0JoQjtBQStCZ0I7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0FBN0JwQjtBQWtDUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFoQ1o7QUFrQ1k7RUFDSSxVQUFBO0FBaENoQjtBQWlEQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE5Q0o7QUFnREk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTlDUjtBQWlESTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7QUEvQ1I7QUFvRUE7O0VBRUksd0JBQUE7QUFqRUo7QUFvRUE7O0VBRUksaUNBQUE7QUFqRUo7QUFvRUE7Ozs7RUFJSSxvQkFBQTtBQWpFSjtBQW9FQTs7OztFQUlJLHFCQUFBO0FBakVKO0FBb0VBOztFQUVJLHNCQUFBO0FBakVKO0FBb0VBOztFQUVJLHVCQUFBO0FBakVKO0FBb0VBOztFQUVJLGdDQUFBO0FBakVKO0FBb0VBOztFQUVJLGdDQUFBO0FBakVKO0FBb0VBOzs7O0VBSUksNkJBQUE7QUFqRUo7QUFvRUE7O0VBRUksK0JBQUE7QUFqRUo7QUFxRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUFBLFVBQUE7RUFDQSxpQkFBQTtBQWxFSjtBQW9FSTtFQVRKO0lBVVEsU0FBQTtFQWpFTjtBQUNGO0FBbUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFBQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakVSO0FBbUVRO0VBQ0ksd0NBQUE7QUFqRVo7QUFvRVE7RUFDSSxpQkFBQTtBQWxFWjtBQW9FWTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQWxFaEI7QUFxRVk7RUFDSSx3Q0FBQTtBQW5FaEI7QUF5RUE7RUFDSSxrQkFBQTtBQXRFSjtBQXlFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBdEVKO0FBd0VJO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUF0RVIiLCJmaWxlIjoiYm9va2luZy1qb3VybmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB6LWluZGV4OiA1MDEgIWltcG9ydGFudDtcblxuICAgIC5tYXQtZHJhd2VyLWJhY2tkcm9wIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIH1cblxuICAgIC5tYXQtc2lkZW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuXG4gICAgICAgICYuZmlsdGVyLXNpZGVuYXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJGNjtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKDE1cHggKyAwLjh2dyk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg1NXB4ICsgMC44dncpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hY3Rpb24ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ibGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAgIC5jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dC1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwYW4tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuXG4gICAgICAgICAgICAgICAgJi5uby1saW5lIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zbGlkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHdvLXBlci1yb3cge1xuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMzNweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xuICAgICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICAgICAgaGVpZ2h0OiA2OHB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4vLyAgICAgLmNhbGVuZGFyLWhlYWRlci1jb250YWluZXIge1xuLy8gICAgICAgICAuZmlsdGVyIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgIHJpZ2h0OiAwO1xuLy8gICAgICAgICAgICAgdG9wOiAtMTBweDtcbi8vICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi5jYWxlbmRhci1oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5maWx0ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAvLyBjaHEtYnV0dG9uIHtcbiAgICAgICAgLy8gICAgIGJ1dHRvbiB7XG4gICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgICAgIC8vICAgICAgICAgbGFiZWwge1xuICAgICAgICAvLyAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgLy8gICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG4vLyBTdGF0dXMgY29sb3IgZm9yIGRyYWZ0IGN1c3RvbWVyXG4uYXBwcm92ZWQsXG4uQXBwcm92ZWQge1xuICAgIGNvbG9yOiB2YXIoLS14YS1hcHByb3ZlKTtcbn1cblxuLlBlbmRpbmdBcHByb3ZhbCxcbi5wZW5kaW5nYXBwcm92YWwge1xuICAgIGNvbG9yOiB2YXIoLS14YS1wZW5kaW5nLWFwcHJvdmFsKTtcbn1cblxuLnJlamVjdGVkLFxuLlJlamVjdGVkLFxuLnJlamVjdCxcbi5SZWplY3Qge1xuICAgIGNvbG9yOiB2YXIoLS14YS1yZWQpO1xufVxuXG4uY2xvc2VkLFxuLkNsb3NlZCxcbi5Db21wbGV0ZSxcbi5jb21wbGV0ZSB7XG4gICAgY29sb3I6IHZhcigtLXhhLWJsdWUpO1xufVxuXG4uZHJhZnQsXG4uRHJhZnQge1xuICAgIGNvbG9yOiB2YXIoLS14YS1kcmFmdCk7XG59XG5cbi5ub3Nob3csXG4uTm9TaG93IHtcbiAgICBjb2xvcjogdmFyKC0teGEtbm9zaG93KTtcbn1cblxuLnJlcGFpcmVzdGltYXRpb24sXG4uUmVwYWlyRXN0aW1hdGlvbiB7XG4gICAgY29sb3I6IHZhcigtLXhhLXJlcGFpci1lc3RpbWF0ZSk7XG59XG5cbi51cGxvYWRkb2N1bWVudHMsXG4uVXBsb2FkRG9jdW1lbnRzIHtcbiAgICBjb2xvcjogdmFyKC0teGEtdXBsb2FkLWRvY3VtZW50KTtcbn1cblxuLmFkZHBob3Rvcyxcbi5BZGRQaG90b3MsXG4udXBsb2FkUGhvdG9zLFxuLlVwbG9hZFBob3RvcyB7XG4gICAgY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XG59XG5cbi52ZWhpY2xlZGV0YWlscyxcbi5WZWhpY2xlRGV0YWlscyB7XG4gICAgY29sb3I6IHZhcigtLXhhLXZlaGljbGUtZGV0YWlsKTtcbn1cblxuXG4udG90YWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMC4ydnc7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgIHRvcDogOTBweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgICAgIGdhcDogMC40dnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmhhcy1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuXG4gICAgICAgICAgICAmOm5vdCguaGFzLWJhY2tncm91bmQpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuaGFzLWJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYXJnaW4tcmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLm5vLWRhdGEtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAxNzBweCk7XG5cbiAgICAubm8tZGF0YS1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 72994:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/repair/booking-journal/booking-preview/booking-preview.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPreviewComponent": function() { return /* binding */ BookingPreviewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 39754);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7048);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84608);
/* harmony import */ var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config/route-mapper/repair-status-mapper */ 93620);
/* harmony import */ var src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/calendar/calendar.service */ 56785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helper/directive/has-permission.directive */ 22406);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/chq-toggle/chq-toggle.component */ 65513);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
















function BookingPreviewComponent_ng_container_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.joinAssignees(ctx_r0.data.Assignees));
} }
function BookingPreviewComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function BookingPreviewComponent_div_92_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const repairType_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", ctx_r10.iconMapper[repairType_r11.RepairServiceTypeName])("matTooltip", repairType_r11.RepairServiceTypeName);
} }
function BookingPreviewComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, BookingPreviewComponent_div_92_ng_container_5_Template, 2, 2, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "repair_type"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.data.RepairServiceTypes);
} }
function BookingPreviewComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "stage"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.data.Stage || "-");
} }
function BookingPreviewComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "parts"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r5.data.RepairPartsGeneralStatus || "Not Ordered");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", ctx_r5.partsIconMapper[ctx_r5.data.RepairPartsGeneralStatus || "Not Ordered"]);
} }
function BookingPreviewComponent_a_120_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "edit_booking"));
} }
function BookingPreviewComponent_a_120_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "view_booking"));
} }
const _c0 = function () { return { mode: "edit" }; };
function BookingPreviewComponent_a_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BookingPreviewComponent_a_120_label_2_Template, 3, 3, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BookingPreviewComponent_a_120_label_3_Template, 3, 3, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r6.bookingStatusUrl)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.data.isReadOnlyPermission);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.data.isReadOnlyPermission);
} }
function BookingPreviewComponent_div_121_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingPreviewComponent_div_121_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.deleteBooking(ctx_r15.data.BookingGuid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "cancel_booking"));
} }
function BookingPreviewComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BookingPreviewComponent_div_121_button_2_Template, 5, 4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chqPermission", "newBooking");
} }
function BookingPreviewComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "chq-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ToggleChange", function BookingPreviewComponent_div_122_Template_chq_toggle_ToggleChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.onToggleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "arrived"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r8.isArrived)("name", "arrived");
} }
function BookingPreviewComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "chq-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ToggleChange", function BookingPreviewComponent_div_123_Template_chq_toggle_ToggleChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.onToggleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "no_show"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r9.isNoShow)("name", "noshow");
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
class BookingPreviewComponent {
    constructor(dialog, dialogRef, data, router, calendarService, commonService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.calendarService = calendarService;
        this.commonService = commonService;
        this.iconMapper = {
            Body: 'car',
            Maintenance: 'house',
            Paint: 'paintbrush',
            Tyres: 'tire',
            Electric: 'bolt-car',
            Tires: 'tire',
            Electrical: 'bolt-car',
            Mechanical: 'mechanical',
            Diagnosis: 'diagnosis',
            Others: 'gears'
        };
        this.isArrived = false;
        this.isNoShow = false;
        this.isArrivedVisible = false;
        this.isNoShowVisible = false;
        this.isRepairCreatedFromCase = false;
        this.status = '';
        this.changesMade = false;
        this.partsIconMapper = {
            'Ordered': 'parts-ordered',
            'Arrived Partially': 'parts-arrived-partial',
            'Arrived': 'parts-arrived',
            'Ordered Partially': 'parts-ordered-partial',
            'Not Ordered': 'parts-not-ordered'
        };
        // Close dialog ref on route changes
        router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationStart), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.dialogRef.close()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe();
    }
    /**
     * booking url
     */
    get bookingStatusUrl() {
        var _a;
        const { StatusName, ObjectGuid } = this.data;
        let routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__.RepairStatusMapper[(_a = StatusName === null || StatusName === void 0 ? void 0 : StatusName.replace(/\s/g, '')) === null || _a === void 0 ? void 0 : _a.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_0__.RepairStatusMapper.others;
        routeToRedirect = routeToRedirect.replace('{{repairGUID}}', ObjectGuid);
        return routeToRedirect;
    }
    /**
     * show delete
     */
    get showDelete() {
        var _a, _b;
        if (((_a = this.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'draft') {
            return true;
        }
        else if (this.isRepairCreatedFromCase == true && ((_b = this.status) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == 'repairestimation') {
            return true;
        }
        return false;
    }
    /**
     * detects changes in input attributes
     * @param changes
     */
    ngOnInit() {
        this.isArrived = this.data.IsArrived;
        this.isNoShow = this.data.IsNoShow;
        this.status = this.data.StatusName;
        this.isRepairCreatedFromCase = this.data.IsRepairCreatedFromCase;
        this.calculateTimeDifference();
        this.dialogRef.beforeClosed().subscribe(() => this.dialogRef.close({ 'success': this.changesMade, 'type': 'refresh' }));
    }
    /**
   * detects changes in input attributes
   * @param changes
   */
    ngOnChanges() {
        this.isArrived = this.data.IsArrived;
        this.isNoShow = this.data.IsNoShow;
        this.status = this.data.StatusName;
        this.isRepairCreatedFromCase = this.data.IsRepairCreatedFromCase;
        this.calculateTimeDifference();
    }
    calculateTimeDifference() {
        const currentDate = new Date();
        const bookingInDate = this.data.StartDate;
        const canActivateDate = new Date(bookingInDate.getTime() - 30 * 60000);
        if (currentDate > canActivateDate) {
            this.isArrivedVisible = true;
        }
        if (currentDate > bookingInDate) {
            this.isNoShowVisible = true;
            this.isArrivedVisible = false;
        }
    }
    deleteBooking(id) {
        this.commonService.openDeleteDialog()
            .afterClosed().subscribe((data) => {
            if (data) {
                this.commonService.showLoading();
                this.calendarService.deleteBooking(id).subscribe({
                    next: () => {
                        this.dialogRef.close({ 'success': true, 'type': 'delete', 'id': id });
                        this.commonService.hideLoading();
                    }
                });
            }
        });
    }
    onToggleChange(e) {
        if (e.checked && e.name == 'noshow') {
            this.isNoShow = true;
            this.isArrived = false;
        }
        else if (e.checked && e.name == 'arrived') {
            this.isNoShow = false;
            this.isArrived = true;
        }
        else {
            this.isNoShow = false;
            this.isArrived = false;
        }
        const patchValue = [
            {
                op: 'replace',
                path: 'IsArrived',
                value: this.isArrived ? 'True' : 'False'
            },
            {
                op: 'replace',
                path: 'IsNoShow',
                value: this.isNoShow ? 'True' : 'False'
            },
        ];
        this.commonService.showLoading();
        this.calendarService.updateBooking(this.data.BookingGuid, patchValue).subscribe({
            next: () => {
                this.commonService.hideLoading();
                this.changesMade = true;
            },
            error: () => {
                e.cancel = true;
            }
        });
    }
    joinAssignees(Assignees) {
        return Assignees === null || Assignees === void 0 ? void 0 : Assignees.map(x => x.AssigneeName).join(', ');
    }
}
BookingPreviewComponent.ɵfac = function BookingPreviewComponent_Factory(t) { return new (t || BookingPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
BookingPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BookingPreviewComponent, selectors: [["booking-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 124, vars: 81, consts: [[1, "dialog-with-header", "large-width"], [1, "header", 3, "ngStyle"], [1, "title"], [1, "action"], ["color", "white", 3, "svgIcon", "mat-dialog-close"], [1, "mat-typography"], [1, "booking-preview-wrapper"], [1, "booking-preview-content"], [1, "section-header"], [1, "section-title"], ["color", "black-medium", 3, "svgIcon"], [1, "detail-row"], [1, "detail-col"], [1, "info-content", "short-text"], [1, "info-content"], [4, "ngIf", "ngIfElse"], ["emptyAssignee", ""], ["class", "detail-row", 4, "ngIf"], ["class", "detail-col", 4, "ngIf"], [1, "booking-preview-action"], [1, "section-header", "transparent"], ["class", "button button-outline", 3, "routerLink", "queryParams", 4, "chqPermission"], ["inner", "", 1, "info-content"], [4, "ngFor", "ngForOf"], [3, "svgIcon", "matTooltip"], [1, "icon-container"], ["matTooltipPosition", "above", 1, "icon-wrapper", 3, "matTooltip"], [3, "svgIcon"], [1, "button", "button-outline", 3, "routerLink", "queryParams"], ["aria-hidden", " false", "aria-label", "edit icon", 3, "svgIcon"], ["class", "action-btn", 4, "ngIf"], [1, "action-btn"], ["class", "button-outline-danger", 3, "click", 4, "chqPermission"], [1, "button-outline-danger", 3, "click"], [1, "toggle"], [1, "label-toggle"], [1, "toggle-button"], [3, "checked", "name", "ToggleChange"]], template: function BookingPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, BookingPreviewComponent_ng_container_82_Template, 3, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, BookingPreviewComponent_ng_template_83_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, BookingPreviewComponent_div_92_Template, 6, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, BookingPreviewComponent_div_93_Template, 7, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](101, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](109, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, BookingPreviewComponent_div_111_Template, 7, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, BookingPreviewComponent_a_120_Template, 4, 6, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](121, BookingPreviewComponent_div_121_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, BookingPreviewComponent_div_122_Template, 8, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, BookingPreviewComponent_div_123_Template, 8, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](79, _c1, ctx.data.Color));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 41, "booking_details"), " - ", ctx.data.TypeName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "person-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 43, "customer_details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 45, "first_name"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Customer == null ? null : ctx.data.Customer.FirstName) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 47, "last_name"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Customer == null ? null : ctx.data.Customer.LastName) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 49, "work_provider"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.WorkProviderDto == null ? null : ctx.data.WorkProviderDto.CompanyName) || (ctx.data.WorkProviderDto == null ? null : ctx.data.WorkProviderDto.CompanyOrgType) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "car");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 51, "vehicle_detail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 53, "car_make"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Vehicle == null ? null : ctx.data.Vehicle.Make) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 55, "car_model"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Vehicle == null ? null : ctx.data.Vehicle.Model) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 57, "license_plate"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.data.Vehicle == null ? null : ctx.data.Vehicle.LicensePlate) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](68, 59, "import_interval"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx.data.Vehicle == null ? null : ctx.data.Vehicle.VehicleId) ? (ctx.data.Vehicle == null ? null : ctx.data.Vehicle.ModelInterval) || "-" : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "magazine");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 61, "booking_details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](81, 63, "assigned_to"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.data.Assignees == null ? null : ctx.data.Assignees.length) > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 65, "status"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.data.DisplayStatus || "-", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](98, 67, "booking_in"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](101, 69, ctx.data.StartDate, "EE d MMM y h:mm:ss a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](106, 72, "booking_out"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](109, 74, ctx.data.EndDate, "EE d MMM y h:mm:ss a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](117, 77, "actions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chqPermission", "viewBooking");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.data.isReadOnlyPermission && ctx.showDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair" && ctx.isArrivedVisible && !ctx.data.isReadOnlyPermission);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data.TypeName === "Repair" && ctx.data.StatusName === "Draft" && ctx.isNoShowVisible && !ctx.data.isReadOnlyPermission);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_3__.HasPermissionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _widgets_chq_toggle_chq_toggle_component__WEBPACK_IMPORTED_MODULE_4__.ChqToggleComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".booking-preview-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 16px 25px;\n  grid-gap: 25px;\n  gap: 25px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 calc(100% - 140px);\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 16px;\n  gap: 16px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 5px;\n  gap: 5px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--xa-black);\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   .booking-preview-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 140px;\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.booking-preview-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  width: 100%;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-col[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-col[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  grid-gap: 5px;\n  gap: 5px;\n}\n.toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex: 1 1 auto;\n}\n.toggle[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.button-outline[_ngcontent-%COMP%], .button-outline-danger[_ngcontent-%COMP%] {\n  width: 155px !important;\n  height: 33px !important;\n  justify-content: flex-start !important;\n  -webkit-filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n          filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n}\n.button-outline[_ngcontent-%COMP%]:hover, .button-outline-danger[_ngcontent-%COMP%]:hover {\n  -webkit-filter: drop-shadow(10px 1px 3px rgba(96, 108, 128, 0.05));\n          filter: drop-shadow(10px 1px 3px rgba(96, 108, 128, 0.05));\n}\na.button-outline[_ngcontent-%COMP%] {\n  height: 11px !important;\n  width: 128px !important;\n  text-decoration: none;\n}\n.icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  background: var(--xa-lighter-gray);\n  padding: 6px 4px;\n  height: 25px;\n  width: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBQ1o7QUFFUTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFBWjtBQUlJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFGUjtBQUtJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFIUjtBQU9BO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSko7QUFNSTtFQUNJLGNBQUE7QUFKUjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQUEsUUFBQTtBQUxaO0FBVUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBUEo7QUFTSTtFQUNJLGVBQUE7QUFQUjtBQVdBOztFQUVJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7QUFSSjtBQVVJOztFQUNJLGtFQUFBO1VBQUEsMERBQUE7QUFQUjtBQVdBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBUko7QUFVQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQVBKO0FBU0E7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTkoiLCJmaWxlIjoiYm9va2luZy1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmctcHJldmlldy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMTZweCAyNXB4O1xuICAgIGdhcDogMjVweDtcblxuICAgIC5ib29raW5nLXByZXZpZXctY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDEgMSBjYWxjKDEwMCUgLSAxNDBweCk7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBnYXA6IDE2cHg7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcbiAgICAgICAgICAgIGdhcDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8tY29udGVudCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib29raW5nLXByZXZpZXctYWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMSAxIDE0MHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgIG1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICB9XG59XG5cbi5kZXRhaWwtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmRldGFpbC1jb2wge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XG4gICAgICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRvZ2dsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleDogMSAxIGF1dG87XG5cbiAgICAudG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5idXR0b24tb3V0bGluZSxcbi5idXR0b24tb3V0bGluZS1kYW5nZXIge1xuICAgIHdpZHRoOiAxNTVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAzcHggcmdiYSg5NiwgMTA4LCAxMjgsIDAuMDUpKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMXB4IDNweCByZ2JhKDk2LCAxMDgsIDEyOCwgMC4wNSkpO1xuICAgIH1cbn1cblxuYS5idXR0b24tb3V0bGluZSB7XG4gICAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEyOHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmljb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cbi5pY29uLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWxpZ2h0ZXItZ3JheSk7XG4gICAgcGFkZGluZzogNnB4IDRweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 94526:
/*!*********************************************************************!*\
  !*** ./src/app/modules/repair/lounge-list/lounge-list.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoungeListComponent": function() { return /* binding */ LoungeListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/outbound/outbound.service */ 23864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);












function LoungeListComponent_div_4_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function LoungeListComponent_div_4_img_5_Template_img_error_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.avatar = ""; })("load", function LoungeListComponent_div_4_img_5_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.orgImageLoading = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.orgLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function LoungeListComponent_div_4_ng_template_6_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.orgName);
} }
function LoungeListComponent_div_4_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LoungeListComponent_div_4_ng_template_6_label_0_Template, 2, 1, "label", 25);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.orgName);
} }
function LoungeListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoungeListComponent_div_4_img_5_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoungeListComponent_div_4_ng_template_6_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "chq-custom-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.orgLogoUrl)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showLoading", ctx_r0.orgImageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 7, "outbound_dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 9, "last_refreshed"), ": ", ctx_r0.LastRefreshed, "");
} }
function LoungeListComponent_mat_card_6_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r12.getHeaderTableDarkClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.CustomerName);
} }
function LoungeListComponent_mat_card_6_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Customer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.CompanyName);
} }
function LoungeListComponent_mat_card_6_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r17 = ctx.$implicit;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r14.getHeaderTableClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", job_r17.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", job_r17.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](job_r17.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", job_r17.CompletePercentage, "%");
} }
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function LoungeListComponent_mat_card_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoungeListComponent_mat_card_6_th_7_Template, 3, 2, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Make & Model:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Plate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, LoungeListComponent_mat_card_6_th_21_Template, 4, 1, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function LoungeListComponent_mat_card_6_Template_img_load_36_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const item_r10 = restoredCtx.$implicit; return item_r10.ImageUrlFirstLoad = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "chq-custom-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, LoungeListComponent_mat_card_6_th_38_Template, 9, 6, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r10.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.VehicleMake + " " + item_r10.VehicleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.VehicleLicensePlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBindV"](20, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](24, _c0, item_r10.TotalAmount, ctx_r1.i18n.currencySymbol, ctx_r1.i18n.digitsInfo, ctx_r1.i18n.locale, ctx_r1.i18n.position)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r10.CompanyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableDarkClass(item_r10, "text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 22, item_r10.IsDeliveryTypeEnable && item_r10.DeliveryDTO ? "picked_up" : item_r10.OutboundStatus.split(" ").join(""))));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getHeaderTableClass(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r10.ImageUrlFirst === null ? "assets/img/front-left.png" : item_r10.ImageUrlFirst, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showLoading", item_r10.ImageUrlFirstLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r10.Jobs);
} }
function LoungeListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
} }
class LoungeListComponent {
    /**
       * Creates an instance.
       * @constructor
       * @param {DatePipe} datePipe
       * @param {CommonService} CommonService
       * @param {OutboundService} OutboundService
       */
    constructor(datePipe, commonService, OutboundService, document) {
        this.datePipe = datePipe;
        this.commonService = commonService;
        this.OutboundService = OutboundService;
        this.document = document;
        this.FullscreenButton = {
            label: 'view_full_screen',
            type: 'outline',
            icon: 'fullscreen'
        };
        this.jobIconDictionary = {
            'Body': 'car',
            'Paint': 'paint-nozzle',
            'Mechanical': 'mechanical',
            'Electrical': 'electric',
            'Tires': 'tire',
            'Preparation': 'car-roof',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Check In': 'checkbox-open',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Repair': 'door-panel',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Fitup': 'door-panel',
            'Polish': 'car-paint',
            'Detailing': 'car-cleaning',
            'Maintenance': 'maintenance',
            'Diagnosis': 'diagnosis',
            'Others': 'gears',
        };
        this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
        this.LastRefreshed = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
        this.loungeTimeout = null;
        this.currentDateTimeout = null;
        this.subs = [];
        this.CallingAPI = false;
        this.outboundData = [];
        this.FocusedRepairIndex = 0;
        this.orgImageLoading = true;
        this.orgLogoUrl = '';
        this.orgName = '';
        this.timeInterval = null;
        this.i18n = this.commonService.geti18nInfo();
        this.commonService.userProfileData.subscribe({
            next: (res) => {
                var _a, _b;
                if (res) {
                    this.orgLogoUrl = (_a = res === null || res === void 0 ? void 0 : res.data.organizationDetail) === null || _a === void 0 ? void 0 : _a.logoUrl;
                    this.orgName = (_b = res === null || res === void 0 ? void 0 : res.data.organizationDetail) === null || _b === void 0 ? void 0 : _b.name;
                    if (!this.orgLogoUrl) {
                        this.orgImageLoading = false;
                    }
                }
            }
        });
    }
    /**
     * ngOnInit
     */
    ngOnInit() {
        this.chkScreenMode();
        this.elem = document.documentElement;
        this.getOutboundData(true);
        this.timeInterval = setInterval(() => {
            this.updateDate();
        }, 1000);
    }
    /**
       * getCardTableClass
       */
    getCardTableClass(repairs) {
        if (repairs.OutboundStatus === null ||
            repairs.OutboundStatus === 'Repair Not Started' ||
            repairs.OutboundStatus === 'Repair In Progress') {
            return 'card-table-gray';
        }
        else if ((!repairs.IsDeliveryTypeEnable ||
            (repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null)) &&
            repairs.OutboundStatus === 'Ready To PickUp') {
            return 'card-table-yellow';
        }
        else if (repairs.OutboundStatus === 'Picked Up' ||
            repairs.DeliveryDTO !== null) {
            return 'card-table-green';
        }
        else {
            return 'card-table-gray';
        }
    }
    /**
         * getHeaderTableDarkClass
         */
    getHeaderTableDarkClass(repairs, type = 'background') {
        if (type === 'background') {
            if (repairs.OutboundStatus === null ||
                repairs.OutboundStatus === 'Repair Not Started' ||
                repairs.OutboundStatus === 'Repair In Progress') {
                return 'header-table-gray-dark';
            }
            else if ((!repairs.IsDeliveryTypeEnable ||
                (repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null)) &&
                repairs.OutboundStatus === 'Ready To PickUp') {
                return 'header-table-yellow-dark';
            }
            else if (repairs.OutboundStatus === 'Picked Up' ||
                repairs.DeliveryDTO !== null) {
                return 'header-table-green-dark';
            }
            else {
                return 'card-table-gray-dark';
            }
        }
        else if (type === 'text') {
            if (repairs.OutboundStatus === null ||
                repairs.OutboundStatus === 'Repair Not Started' ||
                repairs.OutboundStatus === 'Repair In Progress') {
                return 'header-table-gray-dark-text';
            }
            else if ((!repairs.IsDeliveryTypeEnable ||
                (repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null)) &&
                repairs.OutboundStatus === 'Ready To PickUp') {
                return 'header-table-yellow-dark-text';
            }
            else if (repairs.OutboundStatus === 'Picked Up' ||
                repairs.DeliveryDTO !== null) {
                return 'header-table-green-dark-text';
            }
            else {
                return 'header-table-gray-dark-text';
            }
        }
        else
            return '';
    }
    /**
         * getHeaderTableClass
         */
    getHeaderTableClass(repairs) {
        if (repairs.OutboundStatus === null ||
            repairs.OutboundStatus === 'Repair Not Started' ||
            repairs.OutboundStatus === 'Repair In Progress') {
            return 'header-table-gray';
        }
        else if ((!repairs.IsDeliveryTypeEnable ||
            (repairs.IsDeliveryTypeEnable && repairs.DeliveryDTO === null)) &&
            repairs.OutboundStatus === 'Ready To PickUp') {
            return 'header-table-yellow';
        }
        else if (repairs.OutboundStatus === 'Picked Up' ||
            repairs.DeliveryDTO !== null) {
            return 'header-table-green';
        }
        else {
            return 'card-table-gray';
        }
    }
    /**
     * update Date
     */
    updateDate() {
        this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
    }
    /**
     * getOutboundData
     */
    getOutboundData(flag) {
        this.CallingAPI = true;
        if (flag)
            this.commonService.showLoading();
        const StartDate = new Date(new Date().toDateString()).toISOString();
        const EndDate = new Date(new Date(new Date().toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
        const query = `$filter=RepairEndDate ge ${StartDate} and RepairEndDate lt ${EndDate} or PickUpDate ge ${StartDate} and PickUpDate lt ${EndDate}`;
        this.subs.push(this.OutboundService.getDeparturesDetails(query).subscribe({
            next: (data) => {
                this.CallingAPI = false;
                this.outboundData = [];
                data.value.forEach((item) => {
                    var _a;
                    if (((_a = item === null || item === void 0 ? void 0 : item.Jobs) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        if (item.PickUpDate !== null) {
                            if (!(new Date(StartDate) < new Date(item.PickUpDate) && new Date(EndDate) > new Date(item.PickUpDate))) {
                                return;
                            }
                        }
                        item['ImageUrlFirstLoad'] = true;
                        item['ImageUrlLastLoad'] = true;
                        this.outboundData.push(item);
                    }
                });
                this.LastRefreshed = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
                this.commonService.hideLoading();
                clearTimeout(this.currentDateTimeout);
                this.currentDateTimeout = setTimeout(() => {
                    this.updateCurrentDateTime();
                }, 60 * 1000);
                setTimeout(() => {
                    const nodes = document.querySelectorAll('.card');
                    if (this.FocusedRepairIndex == 0) {
                        document.querySelector('.lounge-content').scrollTop = 0;
                    }
                    else {
                        nodes[this.FocusedRepairIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 500);
                clearTimeout(this.loungeTimeout);
                this.loungeTimeout = setTimeout(() => {
                    this.getOutboundData(false);
                }, 300000);
            },
            error: (error) => {
                this.CallingAPI = false;
                clearTimeout(this.loungeTimeout);
            }
        }));
    }
    /**
     * updateCurrentDateTime
     */
    updateCurrentDateTime() {
        this.autoScrollLastVisibleNode();
        clearTimeout(this.currentDateTimeout);
        this.currentDateTimeout = setTimeout(() => {
            this.updateCurrentDateTime();
        }, 60 * 1000);
    }
    /**
     * autoScrollLastVisibleNode
     */
    autoScrollLastVisibleNode() {
        const container = document.querySelector('.lounge-content');
        const nodes = document.querySelectorAll('.card');
        if (container === null || container === undefined || nodes === null || nodes === undefined) {
            return;
        }
        if (this.FocusedRepairIndex == nodes.length - 1) {
            this.FocusedRepairIndex = 0;
            container.scrollTop = 0;
            return;
        }
        let visibleHeight = 0;
        const totalHeight = container.clientHeight;
        for (let i = this.FocusedRepairIndex; i < nodes.length; i++) {
            visibleHeight += nodes[i].clientHeight;
            if (visibleHeight >= totalHeight) {
                this.FocusedRepairIndex = i;
                nodes[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }
            if (i === nodes.length - 1) {
                this.FocusedRepairIndex = 0;
                container.scrollTop = 0;
            }
        }
    }
    /**
     *
     * @param event
     */
    fullscreenmodes(event) {
        this.chkScreenMode();
    }
    /**
     * check screen mode
     */
    chkScreenMode() {
        if (document.fullscreenElement || document['webkitIsFullScreen']) {
            //fullscreen
            this.isFullScreen = true;
        }
        else {
            //not in full screen
            this.isFullScreen = false;
        }
    }
    /**
     * open in full screen
     */
    openFullscreen() {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    }
    /**
     * OnDestroy
     */
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        clearTimeout(this.loungeTimeout);
        clearInterval(this.timeInterval);
    }
}
LoungeListComponent.ɵfac = function LoungeListComponent_Factory(t) { return new (t || LoungeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
LoungeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoungeListComponent, selectors: [["app-lounge-list"]], hostBindings: function LoungeListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fullscreenchange", function LoungeListComponent_fullscreenchange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("webkitfullscreenchange", function LoungeListComponent_webkitfullscreenchange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("mozfullscreenchange", function LoungeListComponent_mozfullscreenchange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("MSFullscreenChange", function LoungeListComponent_MSFullscreenChange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("onwebkitfullscreenchange", function LoungeListComponent_onwebkitfullscreenchange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService])], decls: 12, vars: 4, consts: [[1, "page-container", "lounge-list-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "lounge-list-header"], [1, "header-content", "fx-row", "justify-space-between", "align-center"], [2, "margin-left", "auto", 3, "buttonModel", "click"], ["class", "fullscreen", 4, "ngIf"], [1, "lounge-content"], ["class", "card block", 4, "ngFor", "ngForOf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], [1, "fullscreen"], [1, "lounge-header", "fx-0", "fx-col", "justify-center"], [1, "lounge-header-content", "align-center", "fx-row"], [1, "xa-logo-wrapper"], [1, "menu-image"], [3, "src", "error", "load", 4, "ngIf", "ngIfElse"], ["name", ""], [3, "showLoading"], [1, "lounge-title-wrapper"], [1, "date-container"], [1, "lounge-date-wrapper"], [1, "lounge-last-refresh"], [3, "src", "error", "load"], ["class", "org-name", 4, "ngIf"], [1, "org-name"], [1, "card", "block"], [1, "card-container"], [1, "card-header"], [1, "card-header-container", "align-center", "fx-row"], [1, "card-head-table", 3, "ngClass"], [1, "head-row", 3, "ngClass"], [1, "head-row-col-1"], ["class", "header-customerName", 3, "ngClass", 4, "ngIf"], [1, "sub-text"], [1, "header-amount", "tv-hide"], [4, "ngIf"], [1, "head-item", 2, "margin-left", "auto"], [1, "repair-state"], [1, "repair-state-btn"], [3, "ngClass"], [1, "card-content", 3, "ngClass"], [1, "job-list-container", "fx-row", "align-center"], [1, "jobs-list"], [1, "card-table"], [1, "card-row"], [1, "card-job", 3, "ngClass"], [1, "outbound-header-card", 2, "justify-content", "center"], ["alt", "", 1, "rapair-car-img", 3, "src", "load"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "header-customerName", 3, "ngClass"], [1, "header-content-data"], [1, "outbound-header-card", 3, "matTooltip"], [1, "outbound-content"], ["svgIcon", "checked", 2, "width", "15px", "height", "15px"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]], template: function LoungeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "chq-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoungeListComponent_Template_chq_button_click_3_listener() { return ctx.openFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LoungeListComponent_div_4_Template, 18, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoungeListComponent_mat_card_6_Template, 39, 30, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoungeListComponent_div_7_Template, 9, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.FullscreenButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.outboundData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.outboundData.length === 0 && !ctx.CallingAPI);
    } }, directives: [_widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_4__.XaCurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.LowerCasePipe], styles: [".lounge-list-container[_ngcontent-%COMP%] {\n  background: #F1F2F6;\n  height: calc(100vh - 110px);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--xa-gray);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  overflow-y: auto;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 2vh 1vw;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: none;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n  border-radius: 10px 10px 0px 0px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px 10px 0px 0px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  text-align: left;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 0.625rem;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-row-col-1[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  align-items: center;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-row-col-1[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n  font-weight: 400;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .header-content-data[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  font-size: 16px;\n  font-weight: 700;\n  display: inline-block;\n  word-break: break-all;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  margin: 0px 2px;\n  max-width: 45px;\n  max-height: 35px;\n  background: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .repair-state[_ngcontent-%COMP%]   .repair-state-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 12px;\n  font-family: \"Inter\";\n  font-style: normal;\n  pointer-events: none;\n  border-radius: 22px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-container[_ngcontent-%COMP%]   .card-head-table[_ngcontent-%COMP%]   .head-row[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]   .repair-state[_ngcontent-%COMP%]   .lap-btn[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n  border: 2px solid var(--xa-white);\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .card-job-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  padding: 10px 9px;\n  height: 100px;\n  width: 128px;\n  border-radius: 10px;\n  border: 2px solid var(--xa-white);\n  font-size: 12px;\n  font-weight: 400;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .card-job-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  word-break: break-all;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  width: 124px;\n  border-radius: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-list[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   .card-job[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 100px;\n  border-radius: 10px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .job-list-container[_ngcontent-%COMP%]   .jobs-move-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%] {\n  border: 1px solid #03A31B;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-green[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #1B9235;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%] {\n  border: 1px solid #D2A120;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-yellow[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #D2A600;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%] {\n  border: 1px solid #1a2233;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .card-gray[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .lounge-content[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  grid-gap: 0.4375rem;\n  gap: 0.4375rem;\n  flex-direction: column;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-date-wrapper[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-last-refresh[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%] {\n  background-color: #1B03A3;\n  color: var(--xa-white);\n  min-height: 81px;\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: transparent;\n  padding: 0px 15px 0px 40px;\n  height: 100%;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .lounge-title-wrapper[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  position: relative;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  max-height: 60px;\n}\n.lounge-list-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 14px;\n  color: var(--xa-black-dark);\n  padding: 8px 4px;\n  text-align: center;\n  border: 1px solid var(--xa-light-gray);\n  border-radius: 8px;\n  display: flex;\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: var(--xa-white);\n}\n.border-right-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 1px;\n  height: 30px;\n  background: #0B0E15;\n}\n.header-customerName[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border-radius: 0.625rem;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  padding: 16px;\n}\n.header-table-gray[_ngcontent-%COMP%] {\n  background-color: #E1E0E5;\n}\n.header-table-gray-dark[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.header-table-gray-dark-text[_ngcontent-%COMP%] {\n  color: #78777D;\n}\n.header-table-green[_ngcontent-%COMP%] {\n  background-color: #85E194;\n}\n.header-table-green-dark[_ngcontent-%COMP%] {\n  background-color: #03A31B;\n}\n.header-table-green-dark[_ngcontent-%COMP%]:is(button) {\n  border: 2px solid #FFF;\n}\n.header-table-green-dark-text[_ngcontent-%COMP%] {\n  color: #03A31B;\n}\n.header-table-yellow[_ngcontent-%COMP%] {\n  background-color: #E0C173;\n}\n.header-table-yellow-dark[_ngcontent-%COMP%] {\n  background-color: #D2A120;\n}\n.header-table-yellow-dark[_ngcontent-%COMP%]:is(button) {\n  border: 2px solid #FFF;\n}\n.header-table-yellow-dark-text[_ngcontent-%COMP%] {\n  color: #D2A120;\n}\n.outbound-header-card[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 74px;\n  border-radius: 0.625rem;\n  background-color: #F1F2F6;\n  font-size: 12px;\n  font-weight: normal;\n  margin: 16px auto;\n  color: #0B0E15;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 16px 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  grid-gap: 4px;\n  gap: 4px;\n  align-items: center;\n  border-radius: 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #F9FAFB;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .outbound-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  font-weight: 800;\n  font-size: 16px;\n  text-align: left;\n}\n.outbound-header-card[_ngcontent-%COMP%]   .color-block[_ngcontent-%COMP%] {\n  display: block;\n  height: 10px;\n  border-top-right-radius: 0.625rem;\n  border-top-left-radius: 0.625rem;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 8px;\n  gap: 8px;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.outbound-header-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin: 0;\n}\n.outbound-header-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sub-text[_ngcontent-%COMP%] {\n  color: #E5E7EB;\n  font-size: 12px;\n  font-weight: 500;\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdW5nZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBQUNKO0FBR1E7RUFDSSxlQUFBO0FBRFo7QUFHWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFEaEI7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9RO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxaO0FBVWdCO0VBRUksbUJBQUE7RUFDQSxnQ0FBQTtBQVRwQjtBQVdvQjtFQUNJLDhCQUFBO0FBVHhCO0FBV3dCO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0FBVDVCO0FBVTRCO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7QUFSaEM7QUFTZ0M7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFBQSxXQUFBO0VBQ0EsbUJBQUE7QUFQbEM7QUFRa0M7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTnBDO0FBU2dDO0VBQ0ksZ0JBQUE7QUFQcEM7QUFTb0M7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFQeEM7QUFVb0M7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFSeEM7QUFZb0M7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFWeEM7QUFZd0M7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVY1QztBQWdCd0M7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUFmNUM7QUFrQndDO0VBQ0ksK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBaEI1QztBQXlCZ0I7RUFDSSxnQ0FBQTtBQXZCcEI7QUF5Qm9CO0VBQ0ksV0FBQTtBQXZCeEI7QUEwQndCO0VBQ0ksaUJBQUE7QUF4QjVCO0FBNEJnQztFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUExQnBDO0FBNEJvQztFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQTFCeEM7QUE0QndDO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTFCNUM7QUE0QjRDO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQTFCaEQ7QUE4QndDO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBNUI1QztBQThCNEM7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBNUJoRDtBQXFDd0I7RUFDSSw2QkFBQTtBQW5DNUI7QUEwQ1E7RUFDSSxhQUFBO0FBeENaO0FBMENRO0VBQ0kseUJBQUE7QUF4Q1o7QUF5Q1k7RUFDSSw2QkFBQTtBQXZDaEI7QUEwQ1k7RUFDSSx5QkFBQTtBQXhDaEI7QUE0Q1E7RUFDSSx5QkFBQTtBQTFDWjtBQTJDWTtFQUNJLDZCQUFBO0FBekNoQjtBQTRDWTtFQUNJLHlCQUFBO0FBMUNoQjtBQThDUTtFQUNJLHlCQUFBO0FBNUNaO0FBNkNZO0VBQ0ksNkJBQUE7QUEzQ2hCO0FBOENZO0VBQ0kseUJBQUE7QUE1Q2hCO0FBZ0RRO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQTlDWjtBQWdEWTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBOUNoQjtBQW9EUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFBQSxjQUFBO0VBQ0Esc0JBQUE7QUFsRFo7QUFvRFk7RUFDRSxnQkFBQTtBQWxEZDtBQXFEWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQW5EZDtBQXVEUTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFyRFo7QUF1RFk7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBckRoQjtBQXVEZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFyRHBCO0FBd0RnQjtFQUNJLHFCQUFBO0FBdERwQjtBQXdEb0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdER4QjtBQXdEd0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUF0RDVCO0FBeUR3QjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBdkQ1QjtBQWtFQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBL0RGO0FBaUVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQTlERjtBQWdFQTtFQUNFLHlCQUFBO0FBN0RGO0FBK0RBO0VBQ0UseUJBQUE7QUE1REY7QUE4REE7RUFDRSxjQUFBO0FBM0RGO0FBNkRBO0VBQ0UseUJBQUE7QUExREY7QUE0REE7RUFDRSx5QkFBQTtBQXpERjtBQTBERTtFQUNFLHNCQUFBO0FBeERKO0FBMkRBO0VBQ0UsY0FBQTtBQXhERjtBQTBEQTtFQUNFLHlCQUFBO0FBdkRGO0FBeURBO0VBQ0UseUJBQUE7QUF0REY7QUF1REU7RUFDRSxzQkFBQTtBQXJESjtBQXdEQTtFQUNFLGNBQUE7QUFyREY7QUF1REE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFyREY7QUF1REU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBckRKO0FBc0RJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFwRE47QUFxRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFuRFI7QUFzREk7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBcEROO0FBdURFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0FBckRKO0FBdURFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUFyREo7QUFzREk7RUFDRSxrQkFBQTtBQXBETjtBQXNESTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQXBETjtBQXVERTtFQUNFLFlBQUE7QUFyREo7QUF3REE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFyREYiLCJmaWxlIjoibG91bmdlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG91bmdlLWxpc3QtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMkY2O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcblxuICAgIC5sb3VuZ2UtbGlzdC1oZWFkZXIge1xuXG4gICAgICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW46IDJ2aCAxdnc7XG5cbiAgICAgICAgICAgIC5sYXN0LXVwZGF0ZWQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ncmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmxvdW5nZS1jb250ZW50IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBtYXJnaW46IDJ2aCAxdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cblxuICAgICAgICAgICAgLmNhcmQtY29udGFpbmVye1xuXG4gICAgICAgICAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcblxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtaGVhZC10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWQtcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkLXJvdy1jb2wtMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWQtaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXItdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXItY29udGVudC1kYXRhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtaWNvbi1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwYWlyLXN0YXRle1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpci1zdGF0ZS1idG57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW4td2lkdGg6IDE2OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYXAtYnRue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS14YS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5qb2ItbGlzdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2JzLWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGFibGUge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC1qb2Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtam9iLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0teGEtd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvYi1uYW1le1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9icy1tb3ZlLWJ0bntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtZ3JlZW4ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAzQTMxQjtcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCOTIzNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLXllbGxvdyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJBMTIwO1xuICAgICAgICAgICAgLmNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJBNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtZ3JheSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWEyMjMzO1xuICAgICAgICAgICAgLmNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3NzdEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5vLWRhdGEtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG5cbiAgICAgICAgICAgIC5uby1kYXRhLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcbiAgICAgICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mdWxsc2NyZWVuIHtcbiAgICAgICAgLmRhdGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDAuNDM3NXJlbTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5sb3VuZ2UtZGF0ZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvdW5nZS1sYXN0LXJlZnJlc2gge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIC5sb3VuZ2UtaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjAzQTM7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xuICAgICAgICAgICAgbWluLWhlaWdodDogODFweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XG5cbiAgICAgICAgICAgIC5sb3VuZ2UtaGVhZGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAubG91bmdlLXRpdGxlLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC54YS1sb2dvLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAgICAgLm1lbnUtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAub3JnLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLWRhcmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4uYm9yZGVyLXJpZ2h0LWxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMEIwRTE1O1xufVxuLmhlYWRlci1jdXN0b21lck5hbWUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmhlYWRlci10YWJsZS1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTBFNTtcbn1cbi5oZWFkZXItdGFibGUtZ3JheS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzc3RDtcbn1cbi5oZWFkZXItdGFibGUtZ3JheS1kYXJrLXRleHQge1xuICBjb2xvcjogIzc4Nzc3RDtcbn1cbi5oZWFkZXItdGFibGUtZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVFMTk0O1xufVxuLmhlYWRlci10YWJsZS1ncmVlbi1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzQTMxQjtcbiAgJjppcyhidXR0b24pIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuICB9XG59XG4uaGVhZGVyLXRhYmxlLWdyZWVuLWRhcmstdGV4dCB7XG4gIGNvbG9yOiAjMDNBMzFCO1xufVxuLmhlYWRlci10YWJsZS15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBDMTczO1xufVxuLmhlYWRlci10YWJsZS15ZWxsb3ctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkExMjA7XG4gICY6aXMoYnV0dG9uKSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbiAgfVxufVxuLmhlYWRlci10YWJsZS15ZWxsb3ctZGFyay10ZXh0IHtcbiAgY29sb3I6ICNEMkExMjA7XG59XG4ub3V0Ym91bmQtaGVhZGVyLWNhcmQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNzRweDtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAxNnB4IGF1dG87XG4gIC8vbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjojMEIwRTE1IDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLm91dGJvdW5kLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICBzcGFuIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI0Y5RkFGQjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIHAge1xuICAgICAgY29sb3I6IHJnYmEoMjYsIDM0LCA1MSwgMC43MCk7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbiAgLmNvbG9yLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNjI1cmVtO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNjI1cmVtO1xuICB9XG4gIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4uc3ViLXRleHQge1xuICBjb2xvcjogI0U1RTdFQjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuIl19 */"] });


/***/ }),

/***/ 79666:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/repair/outbound/check-in-task/check-in-task.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckInTaskComponent": function() { return /* binding */ CheckInTaskComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 39754);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7048);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84608);
/* harmony import */ var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/outbound/outbound.service */ 23864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













function CheckInTaskComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "label_mandatory"));
} }
function CheckInTaskComponent_tr_29_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckInTaskComponent_tr_29_span_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckInTaskComponent_tr_29_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckInTaskComponent_tr_29_span_6_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repair_r10 = ctx.$implicit;
    const ind_r11 = ctx.index;
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", repair_r10.repairServiceTypeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ind_r11 !== task_r3.repairJobMappings.length - 1);
} }
function CheckInTaskComponent_tr_29_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, task_r3.completedDate, "dd/MM/yyyy hh:mm:ss"));
} }
function CheckInTaskComponent_tr_29_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 38);
} }
function CheckInTaskComponent_tr_29_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 39);
} }
function CheckInTaskComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CheckInTaskComponent_tr_29_span_4_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CheckInTaskComponent_tr_29_span_6_Template, 3, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CheckInTaskComponent_tr_29_div_11_Template, 3, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CheckInTaskComponent_tr_29_span_17_Template, 1, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CheckInTaskComponent_tr_29_span_18_Template, 1, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r3.isMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", task_r3.repairJobMappings);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r3.modifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r3.completedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "comment")("color", "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r3.completedBy !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", task_r3.completedBy === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 10, "task_done"), " ");
} }
function CheckInTaskComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "no_task_found"));
} }
class CheckInTaskComponent {
    /**
    * constructor
    */
    constructor(dialog, dialogRef, data, router, OutboundService, commonService) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.OutboundService = OutboundService;
        this.commonService = commonService;
        this.subs = [];
        this.ListOfRepairs = [];
        this.CallingAPI = false;
        this.allMandatoryTasks = 0;
        // Close dialog ref on route changes
        router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.dialogRef.close()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe();
    }
    /**
    * ngOnInit
    */
    ngOnInit() {
        this.getTaskDetails();
    }
    /**
    * getTaskDetails
    */
    getTaskDetails() {
        const repairId = this.data.repair.RepairGuid;
        const jobId = this.data.job.JobGuid;
        this.CallingAPI = true;
        this.commonService.showLoading();
        this.subs.push(this.OutboundService.getTaskDetails(repairId, jobId).subscribe({
            next: (data) => {
                this.ListOfRepairs = data;
                this.allMandatoryTasks = this.ListOfRepairs.filter((task) => {
                    return task.isMandatory === true;
                }).length;
                this.CallingAPI = false;
                this.commonService.hideLoading();
            },
            error: (error) => {
                this.CallingAPI = false;
            }
        }));
    }
    /**
       * ngOnDestroy
       */
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
}
CheckInTaskComponent.ɵfac = function CheckInTaskComponent_Factory(t) { return new (t || CheckInTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
CheckInTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckInTaskComponent, selectors: [["app-check-in-task"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_0__.OutboundService])], decls: 31, vars: 20, consts: [[1, "dialog-with-header"], [1, "header"], [1, "title"], [1, "action"], [1, "close-dailog-btn"], ["color", "white", 3, "svgIcon", "mat-dialog-close"], [1, "mat-content-dialog"], [1, "repair-card", "border-10"], [1, "repair-table-header"], ["class", "mandatory-div", 4, "ngIf"], [1, "repair-dialog-table"], [1, "task-hearder"], [1, "task-hearder-item", "task_Name_column"], [1, "task-hearder-item", "repair_type_column"], [1, "task-hearder-item", "modified_column"], [1, "task-hearder-item", "note_column"], [1, "task-hearder-item", "status_column"], ["class", "task-data-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mandatory-div"], [1, "mandatory-text", "text-danger"], [1, "task-data-row"], [1, "task-data-item", "task_Name_column"], [1, "task-data"], ["class", "text-danger", 4, "ngIf"], [1, "task-data-item", "repair_type_column"], ["class", "task-data", 4, "ngFor", "ngForOf"], [1, "task-data-item", "modified_column"], [1, "modified_name"], ["class", "span-date", 4, "ngIf"], [1, "task-data-item", "note_column"], [3, "svgIcon", "color"], [1, "task-data-item", "status_column"], [1, "col-2", "relate-spinner"], ["class", "checked", 4, "ngIf"], ["class", "circle", 4, "ngIf"], [1, "text-danger"], [1, "span-date"], [1, "checked"], [1, "circle"], [1, "not-found-task"]], template: function CheckInTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CheckInTaskComponent_div_10_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CheckInTaskComponent_tr_29_Template, 21, 12, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CheckInTaskComponent_div_30_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.job.JobName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allMandatoryTasks > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, "item_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 12, "repair_type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 14, "modified_by"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 16, "notes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 18, "done"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ListOfRepairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ListOfRepairs.length === 0 && !ctx.CallingAPI);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".dialog-with-header[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 1015px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #4c6bd2;\n  color: var(--xa-white);\n}\n.dialog-with-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .close-dailog-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #0000007a;\n  width: 40px;\n  height: 40px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n  height: 30px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   .ml-25[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 18px;\n  vertical-align: sub;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%] {\n  background-color: #eff1ff;\n  height: 30px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .task-hearder-item[_ngcontent-%COMP%] {\n  text-align: left;\n  color: var(--xa-dark-gray);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 35px;\n  letter-spacing: -0.25px;\n  height: 36px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .task_Name_column[_ngcontent-%COMP%] {\n  width: 314px;\n  padding-left: 25px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .repair_type_column[_ngcontent-%COMP%] {\n  width: 184px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .modified_column[_ngcontent-%COMP%] {\n  width: 136px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .note_column[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-table-header[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-hearder[_ngcontent-%COMP%]   .status_column[_ngcontent-%COMP%] {\n  width: 114px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  height: 61px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task-data-item[_ngcontent-%COMP%]   .task-data[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .task_Name_column[_ngcontent-%COMP%] {\n  width: 314px;\n  padding-left: 25px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .repair_type_column[_ngcontent-%COMP%] {\n  width: 184px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .modified_column[_ngcontent-%COMP%] {\n  width: 136px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .note_column[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]   .status_column[_ngcontent-%COMP%] {\n  width: 114px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--xa-white-light);\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .repair-card[_ngcontent-%COMP%]   .repair-dialog-table[_ngcontent-%COMP%]   .task-data-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: var(--xa-table-light);\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.dialog-with-header[_ngcontent-%COMP%]   .mat-content-dialog[_ngcontent-%COMP%]   .not-found-task[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--xa-gray);\n  margin-top: 20px;\n}\n.ml-25[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n.round[_ngcontent-%COMP%] {\n  position: relative;\n}\n.checked[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--xa-repair-header);\n  background-color: var(--xa-repair-header);\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  cursor: pointer;\n  margin-right: 4px;\n}\n.circle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-light-radio-gray);\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  cursor: pointer;\n  margin-right: 4px;\n}\n.checked[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n}\n.checked[_ngcontent-%COMP%]:after {\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 10px;\n  border: solid var(--xa-white);\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.relate-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.mandatory-div[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.mandatory-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  padding-left: 20px;\n  line-height: 20px;\n}\n.span-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 14px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLWluLXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBQ1I7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFoQjtBQVNZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBUGhCO0FBU2dCO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUHBCO0FBV1k7RUFDSSx5QkFBQTtBQVRoQjtBQVdnQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQVRwQjtBQVdvQjtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQVR4QjtBQVd3QjtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQVQ1QjtBQVl3QjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQVY1QjtBQWF3QjtFQUNJLFlBQUE7QUFYNUI7QUFjd0I7RUFDSSxZQUFBO0FBWjVCO0FBZXdCO0VBQ0ksV0FBQTtBQWI1QjtBQWdCd0I7RUFDSSxZQUFBO0FBZDVCO0FBb0JZO0VBQ0kseUJBQUE7QUFsQmhCO0FBb0JnQjtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWxCcEI7QUFvQm9CO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWxCeEI7QUFzQjZCO0VBQ0csWUFBQTtFQUNBLFdBQUE7QUFwQmhDO0FBeUJvQjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQXZCeEI7QUEwQm9CO0VBQ0ksWUFBQTtBQXhCeEI7QUEyQm9CO0VBQ0ksWUFBQTtBQXpCeEI7QUE0Qm9CO0VBQ0ksV0FBQTtBQTFCeEI7QUE2Qm9CO0VBQ0ksWUFBQTtBQTNCeEI7QUErQmdCO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBN0JwQjtBQWdDZ0I7RUFDSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUE5QnBCO0FBbUNRO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWpDWjtBQXNDQTtFQUNJLGlCQUFBO0FBbkNKO0FBc0NBO0VBQ0ksa0JBQUE7QUFuQ0o7QUF3Q0U7RUFDRSxvQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxvQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0FBckNKO0FBd0NBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxnQkFBQTtBQXJDSjtBQXdDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7QUF3Q0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXJDSiIsImZpbGUiOiJjaGVjay1pbi10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy13aXRoLWhlYWRlcntcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDE1cHg7XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNmJkMjtcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcblxuICAgICAgICAuYWN0aW9uIHtcbiAgICAgICAgICAgIC5jbG9zZS1kYWlsb2ctYnRue1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwN2E7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jb250ZW50LWRpYWxvZ3tcblxuICAgICAgICAucmVwYWlyLWNhcmQge1xuXG4gICAgICAgICAgICAudGFzay1uYW1lIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZmO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcblxuICAgICAgICAgICAgICAgIC5tbC0yNSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXBhaXItdGFibGUtaGVhZGVye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZmY7XG5cbiAgICAgICAgICAgICAgICAucmVwYWlyLWRpYWxvZy10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgIC50YXNrLWhlYXJkZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhc2staGVhcmRlci1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhc2tfTmFtZV9jb2x1bW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGFpcl90eXBlX2NvbHVtbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTg0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RpZmllZF9jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vdGVfY29sdW1ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhdHVzX2NvbHVtbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXBhaXItZGlhbG9nLXRhYmxlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gICAgICAgICAgICAgICAgLnRhc2stZGF0YS1yb3cge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYxcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgLnRhc2stZGF0YS1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC50YXNrLWRhdGEge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudGFza19OYW1lX2NvbHVtbntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yZXBhaXJfdHlwZV9jb2x1bW57XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTg0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubW9kaWZpZWRfY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ub3RlX2NvbHVtbntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1c19jb2x1bW57XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGFzay1kYXRhLXJvdzpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZS1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRhc2stZGF0YS1yb3c6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS10YWJsZS1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3QtZm91bmQtdGFzayB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWdyYXkpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1sLTI1e1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4ucm91bmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgXG4gIFxuICAuY2hlY2tlZHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1yZXBhaXItaGVhZGVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZXBhaXItaGVhZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5jaXJjbGV7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtbGlnaHQtcmFkaW8tZ3JheSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uY2hlY2tlZDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jaGVja2VkOmFmdGVyIHtcbiAgICBsZWZ0OiA3cHg7XG4gICAgdG9wOiAzcHg7XG4gICAgd2lkdGg6IDRweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS14YS13aGl0ZSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnJlbGF0ZS1zcGlubmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYW5kYXRvcnktZGl2e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tYW5kYXRvcnktdGV4dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5zcGFuLWRhdGV7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59Il19 */"] });


/***/ }),

/***/ 10250:
/*!************************************************************************!*\
  !*** ./src/app/modules/repair/outbound/outbound/outbound.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboundComponent": function() { return /* binding */ OutboundComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/outbound/outbound.service */ 23864);
/* harmony import */ var _check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-in-task/check-in-task.component */ 79666);
/* harmony import */ var src_app_dialogs_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialogs/notify-dialog/notify-dialog.component */ 15058);
/* harmony import */ var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/route-mapper/repair-status-mapper */ 93620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-customloader/chq-customloader.component */ 48262);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular */ 84097);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);





















function OutboundComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_button_19_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const day_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r4.changeCurrentDate(day_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", day_r3.getDay() === ctx_r0.currentWeek.getDay() ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 3, day_r3, "dd EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 6, day_r3, "MMM"));
} }
function OutboundComponent_div_21_mat_card_20_th_27_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const assignee_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](assignee_r19.AssigneeName);
} }
function OutboundComponent_div_21_mat_card_20_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, OutboundComponent_div_21_mat_card_20_th_27_div_5_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "assigned"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", repairs_r7.Assignees);
} }
function OutboundComponent_div_21_mat_card_20_th_36_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 5, type_r22.Name === null ? "Others" : type_r22.Name)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r21.jobIconDictionary[type_r22.Name] ? ctx_r21.jobIconDictionary[type_r22.Name] : "gears");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", "black");
} }
function OutboundComponent_div_21_mat_card_20_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, OutboundComponent_div_21_mat_card_20_th_36_div_5_Template, 5, 7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "repair_types"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", repairs_r7.RepairServiceTypes);
} }
function OutboundComponent_div_21_mat_card_20_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, repairs_r7.IsTowedIn ? "towed_in" : "not_towed_in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "towing");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repairs_r7.IsTowedIn ? "black" : "dark-gray-disabled");
} }
function OutboundComponent_div_21_mat_card_20_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_div_40_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26); _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r25.move_scroll("left", _r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function OutboundComponent_div_21_mat_card_20_th_49_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_th_49_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const job_r27 = restoredCtx.$implicit; const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r29.openJobpopup(repairs_r7, job_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background-color", job_r27.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](job_r27.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", job_r27.CompletePercentage, "%");
} }
function OutboundComponent_div_21_mat_card_20_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_div_54_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33); _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r32.move_scroll("right", _r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function OutboundComponent_div_21_mat_card_20_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Pick up date cannot set as past date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function OutboundComponent_div_21_mat_card_20_chq_button_64_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_chq_button_64_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36); const repairs_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r34.openEmailForNotify(repairs_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r17.notifyButton);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function OutboundComponent_div_21_mat_card_20_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_div_21_mat_card_20_Template_div_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const repairs_r7 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r37.bookingStatusUrl(repairs_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, OutboundComponent_div_21_mat_card_20_th_27_Template, 6, 4, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, OutboundComponent_div_21_mat_card_20_th_36_Template, 6, 4, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, OutboundComponent_div_21_mat_card_20_th_37_Template, 6, 5, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, OutboundComponent_div_21_mat_card_20_div_40_Template, 3, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("load", function OutboundComponent_div_21_mat_card_20_Template_img_load_47_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const repairs_r7 = restoredCtx.$implicit; return repairs_r7.ImageUrlFirstLoad = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "chq-customloader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, OutboundComponent_div_21_mat_card_20_th_49_Template, 7, 4, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("load", function OutboundComponent_div_21_mat_card_20_Template_img_load_52_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const repairs_r7 = restoredCtx.$implicit; return repairs_r7.ImageUrlLastLoad = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "chq-customloader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, OutboundComponent_div_21_mat_card_20_div_54_Template, 3, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "dx-date-box", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onValueChanged", function OutboundComponent_div_21_mat_card_20_Template_dx_date_box_onValueChanged_62_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const repairs_r7 = restoredCtx.$implicit; const j_r8 = restoredCtx.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r41.updateInput($event, repairs_r7.RepairGuid, j_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, OutboundComponent_div_21_mat_card_20_span_63_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, OutboundComponent_div_21_mat_card_20_chq_button_64_Template, 1, 1, "chq-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repairs_r7 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", repairs_r7.OutboundStatus === null || repairs_r7.OutboundStatus === "Repair Not Started" || repairs_r7.OutboundStatus === "Repair In Progress" ? "card-table-gray" : repairs_r7.OutboundStatus === "Ready To PickUp" ? "card-table-yellow" : repairs_r7.OutboundStatus === "Picked Up" ? "card-table-green" : "card-table-gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", repairs_r7.OutboundStatus === null || repairs_r7.OutboundStatus === "Repair Not Started" || repairs_r7.OutboundStatus === "Repair In Progress" ? "header-table-gray" : repairs_r7.OutboundStatus === "Ready To PickUp" ? "header-table-yellow" : repairs_r7.OutboundStatus === "Picked Up" ? "header-table-green" : "card-table-gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 38, "booking_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repairs_r7.RepairNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 40, "work_provider"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repairs_r7.WorkProviderName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 42, "driver_owner_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](repairs_r7.CustomerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 44, "vehicle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", repairs_r7.VehicleMake, " ", repairs_r7.VehicleName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repairs_r7.Assignees.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 46, "cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](35, 48, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](60, _c0, repairs_r7.TotalAmount, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repairs_r7.RepairServiceTypes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repairs_r7.IsTowedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.checkJobWrapperScroll("left", _r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", repairs_r7.ImageUrlFirst === null ? "assets/img/front-left.png" : repairs_r7.ImageUrlFirst, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showLoading", repairs_r7.ImageUrlFirstLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", repairs_r7.Jobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", repairs_r7.ImageUrlLast === null ? "assets/img/front-left.png" : repairs_r7.ImageUrlLast, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showLoading", repairs_r7.ImageUrlLastLoad);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.checkJobWrapperScroll("right", _r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](61, 54, ctx_r6.PickUpDateTextBox.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", repairs_r7.PickUpDate)("acceptCustomValue", false)("invalidDateMessage", "")("max", ctx_r6.PickUpDateTextBox.maxDate)("min", ctx_r6.PickUpDateTextBox.minDate)("validationError", false)("validationMessageMode", "none")("disabled", !ctx_r6.isTechnician ? repairs_r7.OutboundStatus !== "Ready To PickUp" : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", repairs_r7 == null ? null : repairs_r7.PickupDateError);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r6.isTechnician ? !repairs_r7.IsPickedUp && repairs_r7.PickUpDate !== null && repairs_r7.OutboundStatus === "Ready To PickUp" && repairs_r7.CommunicationTypes.length > 0 : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](68, 56, "initial_booking_out_date"), ": ", ctx_r6.date_format(repairs_r7.BookingEndDate), " | ", repairs_r7.LagInDays, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](69, 58, "days"), "");
} }
function OutboundComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "directions_car");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, OutboundComponent_div_21_mat_card_20_Template, 70, 66, "mat-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 6, ctx_r1.currentWeek, "EEEE, d MMMM y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 9, "last_refreshed"), ": ", ctx_r1.lastUpdated, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.departures.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](19, 11, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](17, _c0, ctx_r1.TotalAmount, ctx_r1.i18n.currencySymbol, ctx_r1.i18n.digitsInfo, ctx_r1.i18n.locale, ctx_r1.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.departures);
} }
function OutboundComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
} }
class OutboundComponent {
    /**
       * Creates an instance of DeparturesComponent.
       * @constructor
       * @param {Router} router
       * @param {OutboundService} OutboundService
       *  @param {MatDialog} dialog
       *  @param {DatePipe} datePipe
       * @param {CommonService} CommonService
       */
    constructor(OutboundService, router, dialog, datePipe, bookingService, commonService) {
        this.OutboundService = OutboundService;
        this.router = router;
        this.dialog = dialog;
        this.datePipe = datePipe;
        this.bookingService = bookingService;
        this.commonService = commonService;
        this.jobIconDictionary = {
            'Body': 'car',
            'Paint': 'paint-nozzle',
            'Mechanical': 'mechanical',
            'Electrical': 'electric',
            'Tires': 'tire',
            'Preparation': 'car-roof',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Check In': 'checkbox-open',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Repair': 'door-panel',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Fitup': 'door-panel',
            'Polish': 'car-paint',
            'Detailing': 'car-cleaning',
            'Maintenance': 'maintenance',
            'Diagnosis': 'diagnosis',
            'Others': 'gears',
        };
        this.departures = [];
        this.subs = [];
        this.PickUpDateTextBox = {
            placeHolder: 'pickup_date',
            label: 'pick_up_date_time',
            name: '',
            type: 'datetime',
            maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().add(6, 'month').toDate(),
            minDate: new Date(),
            value: new Date(),
        };
        this.notifyButton = {
            label: 'notify',
            type: 'outline',
            icon: 'send'
        };
        this.currentWeek = new Date();
        this.currentWeekNumber = 1;
        this.dates = [];
        this.IntervalGetOutBound = null;
        this.lastUpdated = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
        this.CallingAPI = false;
        this.isTechnician = false;
        this.TotalAmount = 0;
        this.i18n = this.commonService.geti18nInfo();
        this.getWeekDates(new Date(this.currentWeek));
    }
    /**
       * ngOnInit
       */
    ngOnInit() {
        this.getDeparturesDetails();
        this.commonService.userProfileData.subscribe((res) => {
            var _a, _b;
            if (res === null || res === void 0 ? void 0 : res.data) {
                const automotiveServices = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.userPermission) === null || _b === void 0 ? void 0 : _b.automotiveServices;
                const automotiveService = automotiveServices === null || automotiveServices === void 0 ? void 0 : automotiveServices.find(x => x.automotiveServiceName.toLowerCase() === 'addenda repair');
                if (automotiveService && automotiveService.roleName.toLowerCase() === 'technician') {
                    this.isTechnician = true;
                }
                else {
                    this.isTechnician = false;
                }
            }
        });
    }
    /**
     * getOutBoundData
     */
    getDeparturesDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.CallingAPI = true;
            this.commonService.showLoading();
            this.departures = [];
            const StartDate = new Date(this.currentWeek.toDateString()).toISOString();
            const EndDate = new Date(new Date(this.currentWeek.toDateString()).getTime() + 1000 * 60 * 60 * 24 - 1000).toISOString();
            const query = `$filter=BookingEndDate ge ${StartDate} and BookingEndDate lt ${EndDate} or PickUpDate ge ${StartDate} and PickUpDate lt ${EndDate}`;
            this.subs.push(this.OutboundService.getDeparturesDetails(query).subscribe({
                next: (data) => {
                    this.CallingAPI = false;
                    this.TotalAmount = 0;
                    data.value.forEach((el) => {
                        if (el.PickUpDate !== null) {
                            if (!(new Date(StartDate) < new Date(el.PickUpDate) && new Date(EndDate) > new Date(el.PickUpDate))) {
                                return;
                            }
                        }
                        el['ImageUrlFirstLoad'] = true;
                        el['ImageUrlLastLoad'] = true;
                        this.TotalAmount += el.TotalAmount;
                        this.departures.push(el);
                    });
                    this.lastUpdated = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
                    this.commonService.hideLoading();
                    clearTimeout(this.IntervalGetOutBound);
                    this.IntervalGetOutBound = setTimeout(() => {
                        this.getDeparturesDetails();
                    }, 300000);
                }, error: (error) => {
                    this.CallingAPI = false;
                    clearTimeout(this.IntervalGetOutBound);
                }
            }));
        });
    }
    /**
       * date_format
       * return date format
       * example 28 Wednesday, of June 2023
       *@param date data
    
       * @returns {string}
       */
    date_format(date) {
        return dayjs__WEBPACK_IMPORTED_MODULE_0__(date).format('D dddd, of MMMM YYYY');
    }
    /**
    * updateInput
    * update pickup date
    */
    updateInput(e, repairId, repairIndex) {
        this.departures[repairIndex]['PickupDateError'] = false;
        if (new Date(e.value) < new Date()) {
            this.departures[repairIndex]['PickupDateError'] = true;
            return;
        }
        const pickupDate = new Date(e.value).toISOString();
        if (new Date(pickupDate) == new Date(this.departures[repairIndex].PickUpDate)) {
            return;
        }
        this.commonService.showLoading();
        this.subs.push(this.OutboundService.setPickupDate(repairId, pickupDate, false).subscribe({
            next: (data) => {
                this.commonService.showInfoToast(1000, data.message);
                this.commonService.hideLoading();
            }
        }));
    }
    /**
     * openJobpopup
     * @param { string } jobId
     */
    openJobpopup(repair, job) {
        this.dialog.open(_check_in_task_check_in_task_component__WEBPACK_IMPORTED_MODULE_2__.CheckInTaskComponent, { data: { 'repair': repair, 'job': job } });
    }
    /**
     * GetWeekNumber()
     *
     * @param {Date} date
     */
    getWeekNumber(date) {
        const currentDate = date;
        const startDate = new Date(currentDate.getFullYear(), 0, 1);
        const days = Math.floor((currentDate - startDate) /
            (24 * 60 * 60 * 1000));
        const weekNumber = Math.ceil(days / 7);
        return weekNumber;
    }
    /**
      * getWeekDates
      * change months as well when month about to end
      */
    getWeekDates(date) {
        const daysInWeek = 7;
        const dates = [];
        const week = date.getDay() == 0 ? daysInWeek : date.getDay();
        const start_date = new Date(date.setDate(date.getDate() - week + 1));
        for (let i = 0; i < daysInWeek; i++) {
            const temp_date = new Date(start_date);
            const new_date = new Date(temp_date.setDate(start_date.getDate() + i));
            if (new_date.getMonth() < start_date.getMonth() && new_date.getMonth() == date.getFullYear()) {
                new_date.setMonth(start_date.getMonth());
            }
            dates.push(new_date);
        }
        this.currentWeekNumber = this.getWeekNumber(this.currentWeek);
        this.dates = dates;
        return dates;
    }
    /**
    * changeCurrentWeek
    */
    changeCurrentWeek(direction) {
        if (direction === 'left') {
            const temp_date = this.dates[0];
            this.currentWeek = new Date(temp_date.setDate(temp_date.getDate() - 7));
        }
        else {
            const temp_date = this.dates[6];
            this.currentWeek = new Date(temp_date.setDate(temp_date.getDate() + 1));
        }
        this.getWeekDates(new Date(this.currentWeek));
        this.departures = [];
        this.getDeparturesDetails();
    }
    /**
    * TodayWeek
    */
    TodayWeek() {
        this.currentWeek = new Date();
        this.getWeekDates(new Date(this.currentWeek));
        this.departures = [];
        this.getDeparturesDetails();
    }
    /**
    * changeCurrentDate
    *@param day { date }
    */
    changeCurrentDate(day) {
        this.currentWeek = day;
        this.departures = [];
        this.getDeparturesDetails();
    }
    /**
     * move_scroll
     */
    move_scroll(direction, el) {
        if (direction === 'left') {
            el.scrollLeft = el.scrollLeft - 160;
        }
        else {
            el.scrollLeft = el.scrollLeft + 160;
        }
    }
    /**
     * checkJobWrapperScroll
     */
    checkJobWrapperScroll(direction, el) {
        if (direction === 'left') {
            return !(el.scrollLeft <= 0);
        }
        else {
            return !(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
        }
    }
    /**
     * openEmailForNotify
     *
     */
    openEmailForNotify(RepairData) {
        this.commonService.showLoading();
        this.bookingService.getRepairDetailByGuid(RepairData.RepairGuid).subscribe({
            next: (result) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (result === null || result === void 0 ? void 0 : result.data) {
                    this.openEmailForNotifyInner(RepairData.RepairGuid, result.data.domainId, result.data.booking.communicationTypeId, result.data.communicationEvents);
                }
                this.commonService.hideLoading();
            }),
            error: (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                this.commonService.hideLoading();
            })
        });
    }
    /**
     * openEmailForNotify
     *
     */
    openEmailForNotifyInner(RepairGuid, domainId, communicationList, communicatedList) {
        this.dialog.open(src_app_dialogs_notify_dialog_notify_dialog_component__WEBPACK_IMPORTED_MODULE_3__.NotifyDialogComponent, {
            data: {
                repairGuid: RepairGuid,
                domainId: domainId,
                templateId: 2,
                communicationList: communicationList,
                communicatedList: communicatedList
            },
            backdropClass: 'confirmation-popup-backdrop',
            maxHeight: '693px',
            maxWidth: '629px'
        });
    }
    /**
     * booking url
     */
    bookingStatusUrl(repair) {
        const { RepairStatus, RepairGuid } = repair;
        const status = RepairStatus.split(' ').join('');
        let routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper[status === null || status === void 0 ? void 0 : status.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_4__.RepairStatusMapper.others;
        routeToRedirect = routeToRedirect.replace('{{repairGUID}}', RepairGuid);
        this.router.navigate([routeToRedirect]);
    }
    /**
       * ngOnDestroy
       */
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        clearTimeout(this.IntervalGetOutBound);
    }
}
OutboundComponent.ɵfac = function OutboundComponent_Factory(t) { return new (t || OutboundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService)); };
OutboundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: OutboundComponent, selectors: [["app-outbound"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([src_app_services_outbound_outbound_service__WEBPACK_IMPORTED_MODULE_1__.OutboundService])], decls: 27, vars: 23, consts: [[1, "page-container", "outbound-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "outbound-header"], [1, "fx-row", "date-filter-wrapper", 2, "padding-bottom", "26px"], [1, "fx-row", "change-week-btn"], [1, "fx-row", "align-center", "week-days-tile"], ["type", "button", 1, "btn", "btn-left", 3, "click"], ["color", "black", "svgIcon", "arrow-left"], [1, "week-tile-content"], ["type", "button", 1, "btn", "btn-right", 3, "click"], ["color", "black", "svgIcon", "arrow-right"], ["type", "button", 1, "btn", "current-week-btn", 3, "click"], [1, "fx-row", "week-tiles"], ["type", "button", "class", "day-tile", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "outbound-container-wrapper"], ["class", "outbound-card", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], ["type", "button", 1, "day-tile", 3, "ngClass", "click"], [1, "outbound-card"], [1, "card-header", "fx-row", "justify-space-between"], [1, "fx-col", "left-content"], [1, "last-updated"], [1, "fx-row", "right-content"], [1, "fx-row", "align-center", "repair-count"], ["color", "dark-gray"], [1, "fx-row", "align-center", "total-amount"], ["svgIcon", "double-database", 2, "margin-right", "8px"], ["class", "card border-10", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", "border-10", 3, "ngClass"], [1, "header-table", "border-top-10", 2, "padding-bottom", "8px", 3, "ngClass"], [2, "text-align", "left", "padding", "10px", "display", "flex", "justify-content", "space-between"], [1, "header-type-text"], [1, "header-content", "link", 3, "click"], [1, "header-content"], [4, "ngIf"], [1, "flex", "align-center", "header-content"], [1, "outbound-card-content", "border-bottom-10"], [1, "outbound-jobs-container", "fx-row", "align-center"], ["class", "move-left-wrapper", 4, "ngIf"], [1, "outbound-jobs-wrapper"], ["job_scroll_wrapper", ""], [1, "outbound-table", "border-bottom-10"], [1, "flex", "align-center"], [1, "img-container"], ["alt", "", 1, "rapair-car-img", 3, "src", "load"], [3, "showLoading"], [4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "load"], ["class", "move-right-wrapper", 4, "ngIf"], [1, "date-card", "flex", "align-end"], [1, "date-selector"], [1, "input-wrapper", "flex", "align-end"], [1, "pickup_wrapper"], [1, "input-label", "text-muted", "uppercase"], ["type", "datetime", 3, "value", "acceptCustomValue", "invalidDateMessage", "max", "min", "validationError", "validationMessageMode", "disabled", "onValueChanged"], ["class", "pickupDate-error input-label text-muted", 4, "ngIf"], ["class", "notify-btn", 3, "buttonModel", "click", 4, "ngIf"], [1, "day-counter"], [1, "text-muted"], ["class", "flex", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "flex", "align-center", 2, "flex-wrap", "wrap"], ["class", "header-repair-type", 4, "ngFor", "ngForOf"], [1, "header-repair-type"], ["matTooltipPosition", "above", 1, "outbound-icon-btn", 3, "matTooltip"], [3, "svgIcon"], [1, "is-towing"], [1, "move-left-wrapper"], ["type", "button", 1, "jobs-move-btn", 3, "click"], [1, "outbound-header-card", 3, "click"], [1, "uppercase"], [1, "move-right-wrapper"], [1, "pickupDate-error", "input-label", "text-muted"], [1, "notify-btn", 3, "buttonModel", "click"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]], template: function OutboundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_5_listener() { return ctx.changeCurrentWeek("left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_13_listener() { return ctx.changeCurrentWeek("right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OutboundComponent_Template_button_click_15_listener() { return ctx.TodayWeek(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, OutboundComponent_button_19_Template, 7, 9, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, OutboundComponent_div_21_Template, 21, 23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, OutboundComponent_div_22_Template, 9, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate5"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 9, ctx.dates[0], "dd"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](10, 12, ctx.dates[6], "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 15, ctx.dates[0], "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 18, ctx.dates[0], "YY"), " (", ctx.currentWeekNumber, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 21, "today"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.departures.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.departures.length === 0 && !ctx.CallingAPI);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_7__.CustomloaderComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_17__.DxDateBoxComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_8__.ChqButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.XaCurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.LowerCasePipe], styles: [".outbound-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (calc(58px + 1.6vw)));\n  overflow-y: auto;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  padding-top: 5px;\n  z-index: 1;\n  background: var(--xa-popup-light-gray);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: space-around;\n  background: var(--xa-popup-light-gray);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  margin-left: 25%;\n  grid-gap: 25px;\n  gap: 25px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%] {\n  grid-gap: 20px;\n  gap: 20px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .week-tile-content[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .week-days-tile[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .change-week-btn[_ngcontent-%COMP%]   .current-week-btn[_ngcontent-%COMP%] {\n  background-color: #f4f5fd;\n  border: 1px solid var(--xa-light-gray) !important;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%] {\n  background-color: #f4f5fd;\n  border: 1px solid var(--xa-light-gray) !important;\n  display: grid;\n  height: 70px;\n  border-radius: 0px;\n  font-size: 16px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile.active[_ngcontent-%COMP%] {\n  background-color: #4c6bd2;\n  color: var(--xa-white);\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%]:first-child {\n  border-radius: 8px 0 0 8px;\n}\n.outbound-container[_ngcontent-%COMP%]   .outbound-header[_ngcontent-%COMP%]   .date-filter-wrapper[_ngcontent-%COMP%]   .week-tiles[_ngcontent-%COMP%]   .day-tile[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 8px 8px 0;\n}\n.container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n.header-type-text[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n.border-10[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.border-top-10[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.border-bottom-10[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  color: var(--xa-gray);\n  line-height: 21.23px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%] {\n  grid-gap: 34px;\n  gap: 34px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .repair-count[_ngcontent-%COMP%] {\n  grid-gap: 6px;\n  gap: 6px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .repair-count[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-height: 332.15px;\n  margin: 15px;\n  background-color: #1A22330D;\n  width: calc(100% - 30px);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%] {\n  min-height: 68px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  max-width: 240px;\n  display: inline-block;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 700;\n  word-break: break-all;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-repair-type[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .header-repair-type[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  width: 30px;\n  height: 30px;\n  background-color: #1f202314;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .is-towing[_ngcontent-%COMP%] {\n  margin: 18px 0px 0px 0px;\n  padding-right: 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .is-towing[_ngcontent-%COMP%]   .outbound-icon-btn[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n  width: 30px;\n  height: 30px;\n  background-color: #1f202314;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-gray[_ngcontent-%COMP%] {\n  background-color: #78777D;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-green[_ngcontent-%COMP%] {\n  background-color: #1B9235;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header-table-yellow[_ngcontent-%COMP%] {\n  background-color: #D2A600;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 100%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  position: relative;\n  overflow: hidden;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 126px;\n  width: 144px;\n  border-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 126px;\n  width: 144px;\n  border-radius: 10px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .outbound-jobs-wrapper[_ngcontent-%COMP%]   .outbound-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .outbound-header-card[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 100px;\n  border-radius: 10px;\n  border: 2px solid var(--xa-white);\n  font-size: 12px;\n  font-weight: normal;\n  padding: 13px 14px;\n  margin: 16px auto;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  cursor: pointer;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .outbound-jobs-container[_ngcontent-%COMP%]   .jobs-move-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin: 0px 20px 20px 20px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .pickup_wrapper[_ngcontent-%COMP%]   .pickupDate-error[_ngcontent-%COMP%] {\n  color: var(--xa-red);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .notify-btn[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%]   .date-card[_ngcontent-%COMP%]   .day-counter[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-gray[_ngcontent-%COMP%] {\n  border: 1px solid #1a2233;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-gray[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-green[_ngcontent-%COMP%] {\n  border: 1px solid #03A31B;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-green[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-yellow[_ngcontent-%COMP%] {\n  border: 1px solid #D2A120;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .outbound-card[_ngcontent-%COMP%]   .card-table-yellow[_ngcontent-%COMP%]   .outbound-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.outbound-container-wrapper[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dGJvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaURBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtBQUFSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtBQUFaO0FBRVk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFBaEI7QUFFZ0I7RUFDSSxjQUFBO0VBQUEsU0FBQTtBQUFwQjtBQUVvQjtFQUNJLDZCQUFBO0FBQXhCO0FBR29CO0VBQ0ksZUFBQTtBQUR4QjtBQUlvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRnhCO0FBTWdCO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBQUpwQjtBQVVnQjtFQUNHLHlCQUFBO0VBQ0MsaURBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJwQjtBQVdnQjtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFUcEI7QUFZZ0I7RUFDSSwwQkFBQTtBQVZwQjtBQWFnQjtFQUNJLDBCQUFBO0FBWHBCO0FBbUJBO0VBQ0ksOEJBQUE7QUFoQko7QUFtQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFoQko7QUFtQkE7RUFDSSxtQkFBQTtBQWhCSjtBQW1CQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFoQko7QUFrQkE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0FBZko7QUFxQkk7RUFDSSxtQkFBQTtBQWxCUjtBQW9CUTtFQUNJLFlBQUE7QUFsQlo7QUFxQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFuQnBCO0FBc0JnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFwQnBCO0FBd0JZO0VBQ0ksY0FBQTtFQUFBLFNBQUE7QUF0QmhCO0FBdUJnQjtFQUNJLGFBQUE7RUFBQSxRQUFBO0FBckJwQjtBQXNCb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXBCeEI7QUF5Qm9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF2QnhCO0FBOEJRO0VBQ1Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQTVCaEI7QUE4QmdCO0VBQ0ksZ0JBQUE7QUE1QnBCO0FBOEJvQjtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBNUJ4QjtBQStCb0I7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUE3QnhCO0FBZ0NvQjtFQUNJLGtCQUFBO0FBOUJ4QjtBQWdDd0I7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUE5QjVCO0FBa0NvQjtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUFoQ3hCO0FBa0N3QjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQWhDNUI7QUFxQ2dCO0VBQ0kseUJBQUE7QUFuQ3BCO0FBcUNnQjtFQUNJLHlCQUFBO0FBbkNwQjtBQXFDZ0I7RUFDSSx5QkFBQTtBQW5DcEI7QUF1Q29CO0VBQ0ksOEJBQUE7QUFyQ3hCO0FBdUN3QjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQXJDNUI7QUF1QzRCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFyQ2hDO0FBeUNvQztFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXZDeEM7QUF5Q3dDO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkM1QztBQXlDNEM7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkNoRDtBQTJDd0M7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQTFDNUM7QUFpRHdCO0VBQ0ksNkJBQUE7QUEvQzVCO0FBb0RvQjtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7QUFsRHhCO0FBd0RnQztFQUNJLGVBQUE7QUF0RHBDO0FBeURnQztFQUNJLG9CQUFBO0FBdkRwQztBQTJENEI7RUFDSSxpQkFBQTtBQXpEaEM7QUE2RHdCO0VBQ0ksMEJBQUE7QUEzRDVCO0FBZ0U0QjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQTlEaEM7QUFzRVE7RUFDSSx5QkFBQTtBQXBFWjtBQXFFWTtFQUNJLDZCQUFBO0FBbkVoQjtBQXNFUTtFQUNJLHlCQUFBO0FBcEVaO0FBcUVZO0VBQ0ksNkJBQUE7QUFuRWhCO0FBc0VRO0VBQ0kseUJBQUE7QUFwRVo7QUFxRVk7RUFDSSw2QkFBQTtBQW5FaEI7QUF3RUk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBdEVSO0FBd0VRO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUF0RVoiLCJmaWxlIjoib3V0Ym91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5vdXRib3VuZC1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCAtIChjYWxjKDU4cHggKyAxLjZ2dykpKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLm91dGJvdW5kLWhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xuXG4gICAgICAgIC5kYXRlLWZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xuXG4gICAgICAgICAgICAuY2hhbmdlLXdlZWstYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgICAgICAgZ2FwOiAyNXB4O1xuXG4gICAgICAgICAgICAgICAgLndlZWstZGF5cy10aWxlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAud2Vlay10aWxlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jdXJyZW50LXdlZWstYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53ZWVrLXRpbGVzIHtcblxuICAgICAgICAgICAgICAgIC5kYXktdGlsZXtcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWZkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5kYXktdGlsZS5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM2YmQyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5kYXktdGlsZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5kYXktdGlsZTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10eXBlLXRleHR7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJvcmRlci0xMHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYm9yZGVyLXRvcC0xMHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLmJvcmRlci1ib3R0b20tMTB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLm91dGJvdW5kLWNvbnRhaW5lci13cmFwcGVye1xuICAgIFxuXG4gICAgLm91dGJvdW5kLWNhcmQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5jYXJkLWhlYWRlcntcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcblxuICAgICAgICAgICAgLmxlZnQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sYXN0LXVwZGF0ZWQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ncmF5KTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxLjIzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmlnaHQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZ2FwOiAzNHB4O1xuICAgICAgICAgICAgICAgIC5yZXBhaXItY291bnQgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGdhcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG90YWwtYW1vdW50IHsgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMzMi4xNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUEyMjMzMEQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuXG4gICAgICAgICAgICAgICAgLmhlYWRlci10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDY4cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saW5rOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXJlcGFpci10eXBle1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtaWNvbi1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjIwMjMxNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgIFxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAuaXMtdG93aW5ne1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxOHB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDsgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1pY29uLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjAyMzE0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlLWdyYXkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3NzdEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaGVhZGVyLXRhYmxlLWdyZWVuIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCOTIzNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhlYWRlci10YWJsZS15ZWxsb3cge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJBNjAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5vdXRib3VuZC1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtam9icy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLm91dGJvdW5kLWpvYnMtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3V0Ym91bmQtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHB4OyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQ0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRib3VuZC1oZWFkZXItY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0teGEtd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvYnMtbW92ZS1idG57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlLWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBpY2t1cF93cmFwcGVye1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5wdXQtbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waWNrdXBEYXRlLWVycm9ye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLXJlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vdGlmeS1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dC1tdXRlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF5LWNvdW50ZXIge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0LW11dGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2FyZC10YWJsZS1ncmF5IHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYTIyMzM7XG4gICAgICAgICAgICAub3V0Ym91bmQtY2FyZC1jb250ZW50eyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2FyZC10YWJsZS1ncmVlbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDNBMzFCO1xuICAgICAgICAgICAgLm91dGJvdW5kLWNhcmQtY29udGVudHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtdGFibGUteWVsbG93IHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkExMjA7ICBcbiAgICAgICAgICAgIC5vdXRib3VuZC1jYXJkLWNvbnRlbnR7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5uby1kYXRhLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuXG4gICAgICAgIC5uby1kYXRhLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 86474:
/*!*************************************************!*\
  !*** ./src/app/modules/repair/repair.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepairModule": function() { return /* binding */ RepairModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @azure/msal-angular */ 84689);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helper/directive.module */ 20363);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/chq-widgets.module */ 85510);
/* harmony import */ var _add_customers_customer_layout_customer_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-customers/customer-layout/customer-layout.component */ 88271);
/* harmony import */ var _booking_journal_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-journal/booking-journal/booking-journal.component */ 11121);
/* harmony import */ var _estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimate-approval/estimate-approval.component */ 8542);
/* harmony import */ var _lounge_list_lounge_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lounge-list/lounge-list.component */ 94526);
/* harmony import */ var _outbound_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./outbound/outbound/outbound.component */ 10250);
/* harmony import */ var _workflow_lounge_workflow_lounge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workflow-lounge/workflow-lounge.component */ 31224);
/* harmony import */ var _workflow_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow/workflow/workflow.component */ 40712);
/* harmony import */ var src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/guards/repair-guard/repair.guard */ 17946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);


















const repairRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'booking-journal'
    },
    {
        path: 'booking',
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_repair_add-customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/add-customers/customers.module */ 65206)).then(m => m.AddRepairCustomersModule)
    },
    {
        path: 'booking/:id',
        component: _add_customers_customer_layout_customer_layout_component__WEBPACK_IMPORTED_MODULE_3__.CustomerLayoutComponent,
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_repair_add-customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/add-customers/customers.module */ 65206)).then(m => m.AddRepairCustomersModule)
    },
    {
        path: 'customers',
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_repair_customer_customer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../repair/customer/customer.module */ 922)).then(m => m.CustomerTableModule)
    },
    {
        path: 'booking-journal',
        component: _booking_journal_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__.BookingJournalComponent,
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-scroll-view_js-src_app-0d14e2"), __webpack_require__.e("src_app_modules_repair_booking-journal_booking-journal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/booking-journal/booking-journal.module */ 53018)).then(m => m.BookingJournalModule)
    },
    {
        path: 'workflow',
        component: _workflow_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_9__.WorkflowComponent,
        canActivate: [src_app_guards_repair_guard_repair_guard__WEBPACK_IMPORTED_MODULE_10__.RepairGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_badge_js-src_app_resolvers_versio-55ba53"), __webpack_require__.e("src_app_modules_repair_workflow_workflow_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/workflow/workflow.module */ 95885)).then(m => m.WorkflowModule)
    },
    {
        path: 'outbound',
        component: _outbound_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_7__.OutboundComponent,
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MsalGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_badge_js-src_app_resolvers_versio-55ba53"), __webpack_require__.e("src_app_modules_repair_outbound_outbound_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/outbound/outbound.module */ 73688)).then(m => m.OutboundModule)
    },
    {
        path: 'lounge',
        component: _lounge_list_lounge_list_component__WEBPACK_IMPORTED_MODULE_6__.LoungeListComponent,
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MsalGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_badge_js-src_app_resolvers_versio-55ba53"), __webpack_require__.e("src_app_modules_repair_lounge-list_lounge-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/lounge-list/lounge-list.module */ 36071)).then(m => m.LoungeListModule)
    },
    {
        path: 'workflow-lounge',
        component: _workflow_lounge_workflow_lounge_component__WEBPACK_IMPORTED_MODULE_8__.WorkflowLoungeComponent,
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MsalGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_badge_js-src_app_resolvers_versio-55ba53"), __webpack_require__.e("src_app_modules_repair_workflow-lounge_workflow-lounge_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../repair/workflow-lounge/workflow-lounge.module */ 76252)).then(m => m.WorkflowLoungeModule)
    }
];
class RepairModule {
}
RepairModule.ɵfac = function RepairModule_Factory(t) { return new (t || RepairModule)(); };
RepairModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: RepairModule });
RepairModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(repairRoutes),
            _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
            src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](RepairModule, { declarations: [_estimate_approval_estimate_approval_component__WEBPACK_IMPORTED_MODULE_5__.EstimateApprovalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
        src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule] }); })();


/***/ }),

/***/ 31224:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/repair/workflow-lounge/workflow-lounge.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowLoungeComponent": function() { return /* binding */ WorkflowLoungeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 34122);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 53399);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/workflow/workflow.service */ 71923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widgets/chq-dropdown/chq-dropdown.component */ 8851);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 52529);















const _c0 = ["filter"];
const _c1 = ["horizontalRow"];
const _c2 = ["verticalRow"];
function WorkflowLoungeComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 16);
} }
function WorkflowLoungeComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 17);
} }
function WorkflowLoungeComponent_div_8_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function WorkflowLoungeComponent_div_8_img_5_Template_img_error_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r9.avatar = ""; })("load", function WorkflowLoungeComponent_div_8_img_5_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r11.orgImageLoading = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r6.orgLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function WorkflowLoungeComponent_div_8_ng_template_6_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r12.orgName);
} }
function WorkflowLoungeComponent_div_8_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, WorkflowLoungeComponent_div_8_ng_template_6_label_0_Template, 2, 1, "label", 31);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.orgName);
} }
function WorkflowLoungeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, WorkflowLoungeComponent_div_8_img_5_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WorkflowLoungeComponent_div_8_ng_template_6_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "chq-custom-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.orgLogoUrl)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showLoading", ctx_r2.orgImageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 7, "workflow_dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 9, "last_refreshed"), ": ", ctx_r2.LastRefreshedDate, "");
} }
const _c3 = function (a0) { return { "width.px": a0 }; };
function WorkflowLoungeComponent_div_9_tr_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function WorkflowLoungeComponent_div_9_tr_4_div_12_Template_img_load_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const repair_r19 = restoredCtx.$implicit; return repair_r19.isloaded = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repair_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", repair_r19.ImageUrl !== null && repair_r19.ImageUrl !== "" ? repair_r19.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c3, ctx_r18.horizontalRowHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", ctx_r18.fontSizeDropdown.selectedOption.textSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 9, "due_out"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 13, repair_r19.RepairEndDate, "dd/MM/yy")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", ctx_r18.fontSizeDropdown.selectedOption.textSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", repair_r19.VehicleMake + " " + repair_r19.VehicleModel, " ");
} }
const _c4 = function (a0, a1, a2) { return { "min-height": a0, "height": a1, "max-height": a2 }; };
function WorkflowLoungeComponent_div_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, WorkflowLoungeComponent_div_9_tr_4_div_12_Template, 12, 18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](10, _c4, ctx_r13.calculatedHeight, ctx_r13.calculatedHeight, ctx_r13.calculatedHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", items_r14.IsJobFromMaster ? items_r14.Color : "#DCDDE2")("color", items_r14.IsJobFromMaster ? "" : "#0B0E15");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", ctx_r13.fontSizeDropdown.selectedOption.labelSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](items_r14.JobName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](items_r14.WaterfallRepairs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", items_r14.WaterfallRepairs);
} }
function WorkflowLoungeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tbody", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WorkflowLoungeComponent_div_9_tr_4_Template, 13, 14, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("fullscreen-table", ctx_r3.isFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.workflowData);
} }
const _c5 = function (a0) { return { "repair-not-started": a0 }; };
function WorkflowLoungeComponent_div_10_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", null, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", items_r25.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c5, items_r25.JobName.toLowerCase() === "repair not started"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](items_r25.WaterfallRepairs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 5, items_r25.JobName));
} }
const _c6 = function (a0) { return { "height.px": a0 }; };
function WorkflowLoungeComponent_div_10_td_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function WorkflowLoungeComponent_div_10_td_7_ng_container_1_Template_img_load_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32); const repair_r30 = restoredCtx.$implicit; return repair_r30.isloaded = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const repair_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", repair_r30.ImageUrl !== null && repair_r30.ImageUrl !== "" ? repair_r30.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](18, _c6, ctx_r29.verticalRowWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("visibility", repair_r30.RepairEndDate ? "visible" : "hidden")("font-size", ctx_r29.fontSizeDropdown.selectedOption.textSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 11, "due_out"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 15, repair_r30.RepairEndDate, "dd/MM/yy")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-size", ctx_r29.fontSizeDropdown.selectedOption.textSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", repair_r30.VehicleMake + " " + repair_r30.VehicleModel, " ");
} }
function WorkflowLoungeComponent_div_10_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WorkflowLoungeComponent_div_10_td_7_ng_container_1_Template, 12, 20, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", items_r27.WaterfallRepairs);
} }
function WorkflowLoungeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WorkflowLoungeComponent_div_10_th_4_Template, 8, 9, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WorkflowLoungeComponent_div_10_td_7_Template, 2, 1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("fullscreen-table", ctx_r4.isFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.workflowData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.workflowData);
} }
function WorkflowLoungeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
} }
class WorkflowLoungeComponent {
    /**
     * constructor.
     * @constructor
     * @param {WorkflowService} workflowService
     * @param {commonService} commonService
     * @param {caseService} caseService
     * @param {formBuilder} formBuilder
     */
    constructor(workflowService, router, commonService, caseService, translateService, formBuilder) {
        this.workflowService = workflowService;
        this.router = router;
        this.commonService = commonService;
        this.caseService = caseService;
        this.translateService = translateService;
        this.formBuilder = formBuilder;
        this.totalCost = 0;
        this.totalCount = 0;
        this.workflowData = [];
        this.CallingAPI = false;
        this.IntervalGetWorkflow = null;
        this.autoScrollInterval = null;
        this.timeInterval = null;
        this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
        this.userDetail = null;
        this.userIsBM = false;
        this.filterButton = {
            label: 'filter',
            type: 'outline',
            icon: 'filter'
        };
        this.filterForm = this.formBuilder.group({
            OrgName: [],
            CustomerId: [],
            CompanyId: []
        });
        this.applyButton = {
            label: 'apply',
            type: 'primary'
        };
        this.resetButton = {
            label: 'reset_all',
            type: 'outline'
        };
        this.statusMap = {
            'Approved': 'Approved',
            'PendingApproval': 'Pending Approval',
            'RepairEstimation': 'Repair Estimation',
            'UploadPhotos': 'Upload Photos',
            'UploadDocuments': 'Upload Documents',
            'Draft': 'Draft',
        };
        this.filterModal = [
            {
                placeHolder: 'select_organization',
                label: 'organization',
                name: 'OrgName',
                value: '',
                type: 'select',
                displayValue: 'label',
                fieldValue: 'value',
                options: [],
                isMultiSelect: false
            },
            {
                placeHolder: 'select_type',
                label: 'customer_name',
                name: 'CustomerId',
                value: '',
                type: 'select',
                displayValue: 'label',
                fieldValue: 'value',
                options: [],
                isMultiSelect: true
            }
        ];
        this.filterDataLoaded = false;
        this.repairSizeColors = {
            'sm': 'bg-light-blue',
            's': 'bg-light-blue',
            'l': 'bg-light-green text-white',
            'm': 'bg-light-pink text-white',
            'xl': 'bg-dark-red text-white'
        };
        this.settingsButtonModel = {
            label: 'filter',
            type: 'outline',
            icon: 'filter',
            width: '13px',
            height: '13px'
        };
        this.jobIconDictionary = {
            'Body': 'car',
            'Paint': 'paint-nozzle',
            'Mechanical': 'mechanical',
            'Electrical': 'electric',
            'Tires': 'tire',
            'Preparation': 'car-roof',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Check In': 'checkbox-open',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Repair': 'door-panel',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Fitup': 'door-panel',
            'Polish': 'car-paint',
            'Detailing': 'car-cleaning',
            'Maintenance': 'maintenance',
            'Diagnosis': 'diagnosis',
            'Others': 'gears',
        };
        this.fontSizeDropdown = {
            options: [
                { label: 'Small', labelSize: '12px', textSize: '10px' },
                { label: 'Medium', labelSize: '13px', textSize: '11px' },
                { label: 'Large', labelSize: '14px', textSize: '12px' },
                { label: 'X-Large', labelSize: '16px', textSize: '14px' },
            ],
            placeHolder: 'Select Font Size',
            label: '',
            name: 'fontSizeDropdown',
            displayValue: 'label',
            selectedOption: { label: 'Small', labelSize: '12px', textSize: '10px' }
        };
        this.subs = [];
        this.FullscreenButton = {
            label: 'view_full_screen',
            type: 'outline',
            icon: 'fullscreen'
        };
        this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
        this.orgImageLoading = true;
        this.orgLogoUrl = '';
        this.orgName = '';
        this.FocusedRepairIndex = 0;
        this.FocusedRepairHorizontalIndex = 0;
        this.verticalView = false;
        this.horizontalRowHeight = 0;
        this.verticalRowWidth = 0;
        this.i18n = this.commonService.geti18nInfo();
        this.commonService.userProfileData.subscribe({
            next: (res) => {
                var _a, _b;
                if (res) {
                    this.orgLogoUrl = (_a = res === null || res === void 0 ? void 0 : res.data.organizationDetail) === null || _a === void 0 ? void 0 : _a.logoUrl;
                    this.orgName = (_b = res === null || res === void 0 ? void 0 : res.data.organizationDetail) === null || _b === void 0 ? void 0 : _b.name;
                    if (!this.orgLogoUrl) {
                        this.orgImageLoading = false;
                    }
                }
            }
        });
    }
    /**
     * ngOnInit
     */
    ngOnInit() {
        this.timeInterval = setInterval(() => {
            this.updateDate();
        }, 1000);
        this.commonService.userProfileData.subscribe((res) => {
            var _a, _b, _c;
            this.userDetail = res === null || res === void 0 ? void 0 : res.data;
            this.userIsBM = (_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.roleDetail.some(x => x.name == 'Bodyshop Manager');
            if ((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
                this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
            }
        });
        this.chkScreenMode();
    }
    /**
     * update Date
     */
    updateDate() {
        this.currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('MMMM DD, YYYY hh:mm a');
    }
    /**
     * move_scroll
     */
    move_scroll(direction, el) {
        if (direction === 'left') {
            el.scrollLeft = el.scrollLeft - 250;
        }
        else {
            el.scrollLeft = el.scrollLeft + 250;
        }
    }
    /**
   * checkJobWrapperScroll
   */
    checkJobWrapperScroll(direction, el) {
        if (direction === 'left') {
            return !(el.scrollLeft <= 0);
        }
        else {
            return !(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
        }
    }
    /**
     * auto scroll horizontally
     */
    horizontalScroll() {
        var _a, _b;
        const parentContainer = document.querySelector('.workflow-table-container');
        const container = document.querySelector('.scroll-items-row');
        const nodes = container.querySelectorAll('.card-container');
        if (container === null || container === undefined || nodes === null || nodes === undefined) {
            return;
        }
        let visibleWidth = 0;
        let longestNodeIndex = 0;
        let longestNodeLength = 0;
        const totalWidth = parentContainer.clientWidth;
        for (let i = 0; i < nodes.length; i++) {
            visibleWidth = 0;
            if (longestNodeLength < nodes[i].children.length) {
                longestNodeLength = nodes[i].children.length;
                longestNodeIndex = i;
            }
        }
        for (let i = this.FocusedRepairHorizontalIndex; i < nodes[longestNodeIndex].children.length; i++) {
            if (i === nodes[longestNodeIndex].children.length - 1) {
                this.FocusedRepairHorizontalIndex = 0;
                parentContainer.scrollLeft = 0;
            }
            visibleWidth += (_b = nodes[longestNodeIndex].children[i].clientWidth + ((_a = nodes[longestNodeIndex].children[i + 1]) === null || _a === void 0 ? void 0 : _a.clientWidth)) !== null && _b !== void 0 ? _b : 0;
            if (visibleWidth >= totalWidth) {
                this.FocusedRepairHorizontalIndex = i;
                nodes[longestNodeIndex].children[i].scrollIntoView({ behavior: 'smooth', inline: 'start' });
                break;
            }
        }
    }
    /**
     * auto scroll vertically
     */
    verticalScroll() {
        const parentContainer = document.querySelector('.vertical-workflow-table');
        const container = document.querySelector('.vertical-card-container');
        const nodes = container.querySelectorAll('.vertical-card');
        if (container === null || container === undefined || nodes === null || nodes === undefined) {
            return;
        }
        let visibleHeight = 0;
        let longestNodeIndex = 0;
        let longestNodeLength = 0;
        const totalHeight = parentContainer.clientHeight;
        for (let i = 0; i < nodes.length; i++) {
            visibleHeight = 0;
            if (longestNodeLength < nodes[i].children.length) {
                longestNodeLength = nodes[i].children.length;
                longestNodeIndex = i;
            }
        }
        for (let i = this.FocusedRepairIndex; i < nodes[longestNodeIndex].children.length; i++) {
            if (i === nodes[longestNodeIndex].children.length - 1) {
                this.FocusedRepairIndex = 0;
                parentContainer.scrollTop = 0;
            }
            visibleHeight += nodes[longestNodeIndex].children[i].clientHeight;
            if (visibleHeight >= totalHeight) {
                this.FocusedRepairIndex = i;
                nodes[longestNodeIndex].children[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }
        }
    }
    /**
     * ngAfterViewInit
     */
    ngAfterViewInit() {
        //call autoScroll every 1 mins
        this.autoScrollInterval = setInterval(() => {
            if (this.isFullScreen) {
                if (this.verticalView) {
                    this.verticalScroll();
                }
                else {
                    this.horizontalScroll();
                }
            }
        }, 10000);
        this.getWorkflowDetails(this.generateFilterQuery());
        this.IntervalGetWorkflow = setInterval(() => {
            this.getWorkflowDetails(this.generateFilterQuery());
        }, 300000);
        if (localStorage.getItem('workflow-fontsize')) {
            this.fontSizeDropdown.selectedOption = JSON.parse(localStorage.getItem('workflow-fontsize'));
        }
    }
    /**
     * getWorkflowData
     */
    getWorkflowDetails(query) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoading();
            this.CallingAPI = true;
            if (query !== '?$filter=') {
                this.subs.push(this.workflowService.getWorkflowDetailsWithQuery(query).subscribe({
                    next: (data) => {
                        this.workflowData = this.getTotals(data.value);
                        if (this.workflowData) {
                            this.workflowData = this.workflowData.filter(x => x.JobName !== 'REPAIR NOT STARTED');
                            this.calculatedHeight = `${100 / this.workflowData.length}%`;
                            this.workflowData.map(value => value === null || value === void 0 ? void 0 : value.WaterfallRepairs.map(child => child.isLoaded = false));
                        }
                        this.CallingAPI = false;
                        this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
                        setTimeout(() => {
                            var _a, _b;
                            this.horizontalRowHeight = (_b = (_a = this.horizontalRow) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.offsetHeight;
                            this.commonService.hideLoading();
                        });
                    },
                    error: () => {
                        this.CallingAPI = false;
                    }
                }));
            }
            else {
                this.subs.push(this.workflowService.getWorkflowDetails().subscribe({
                    next: (data) => {
                        this.workflowData = this.getTotals(data.value);
                        if (this.workflowData) {
                            this.workflowData.map(value => value === null || value === void 0 ? void 0 : value.WaterfallRepairs.map(child => child.isLoaded = false));
                        }
                        this.CallingAPI = false;
                        this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
                        this.commonService.hideLoading();
                    },
                    error: () => {
                        this.CallingAPI = false;
                    }
                }));
            }
        });
    }
    /**
     * calculate totalCost and totalCount of all repairs
     */
    getTotals(data) {
        this.totalCost = 0;
        this.totalCount = 0;
        data.forEach((item) => {
            this.totalCount += item.WaterfallRepairs.length;
            item['ManualCost'] = 0;
            item.WaterfallRepairs.forEach((itm) => {
                this.totalCost += itm.EstimateCost;
                item.ManualCost += itm.EstimateCost;
            });
        });
        return data;
    }
    /**
     * current_date_format
     * return date format
     * example 28 Wednesday, of June 2023
     *
     * @returns {string}
     */
    current_date_format() {
        return dayjs__WEBPACK_IMPORTED_MODULE_0__().format('D dddd, of MMMM YYYY');
    }
    /**
     * pull data and open filter panel
     */
    openFilter() {
        if (this.filterDataLoaded) {
            this.filter.open();
        }
        else {
            this.commonService.showLoading();
            (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([
                this.getOrgIfBM(),
                this.workflowService.getCustomer(this.userDetail.organizationDetail.id)
            ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([orgList, CustomerList]) => {
                return { orgList, CustomerList };
            })).subscribe((result) => {
                var _a, _b, _c, _d, _e, _f;
                if (this.userIsBM) {
                    this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { selectedOption: { 'label': (_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail.name, 'value': (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail.id }, options: result.orgList.data.map((x) => { return { label: x.name, value: x.id }; }) });
                }
                else {
                    this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { selectedOption: { 'label': (_c = this.userDetail) === null || _c === void 0 ? void 0 : _c.organizationDetail.name, 'value': (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.id }, options: [{ 'label': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.name, 'value': (_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id }], disabled: true });
                }
                this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { options: result.CustomerList.filter((value, index, self) => {
                        return self.findIndex(o => o.contactId === value.contactId) === index;
                    }).map((x) => {
                        const name = x.firstName + ' ' + x.lastName;
                        const label = x.isIndividual ? name : x.companyName;
                        const subLabel = x.isIndividual ? x.email : x.licenseNumber;
                        return {
                            label: x.isIndividual ? name : x.companyName,
                            subLabel: x.isIndividual ? x.email : x.licenseNumber,
                            value: x.isIndividual ? x.contactId : x.companyId,
                            html: `<div class='workflow-customer-item'><span class='name'>${label}</span><span class='email'>${subLabel}</span></div>`
                        };
                    }) });
                this.filter.open();
                this.commonService.hideLoading();
                this.filterDataLoaded = true;
            });
        }
    }
    /**
     * Check if user is bm , then call api otherwise return observable
     */
    getOrgIfBM() {
        if (this.userIsBM) {
            return this.caseService.getOrganizations();
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
        }
    }
    /**
     * get customer list
     * @param orgId
     */
    getCustomer(orgId) {
        this.commonService.showLoading();
        this.workflowService.getCustomer(orgId).subscribe({
            next: (data) => {
                this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { options: data.filter((value, index, self) => {
                        return self.findIndex(o => o.contactId === value.contactId) === index;
                    }).map((x) => {
                        const name = x.firstName + ' ' + x.lastName;
                        const label = x.isIndividual ? name : x.companyName;
                        const subLabel = x.isIndividual ? x.email : x.licenseNumber;
                        return {
                            label: x.isIndividual ? name : x.companyName,
                            subLabel: x.isIndividual ? x.email : x.licenseNumber,
                            value: x.isIndividual ? x.contactId : x.companyId,
                            html: `<div class='workflow-customer-item'><span class='name'>${label}</span><span class='email'>${subLabel}</span></div>`
                        };
                    }) });
                console.log(this.filterModal[1]);
                this.commonService.hideLoading();
            },
            error: () => {
                this.commonService.showLoading();
            }
        });
    }
    /**
    * function
    */
    generateFilterQuery() {
        const filterValue = this.filterForm.value;
        let query = '?$filter=';
        if (filterValue.OrgName && filterValue.OrgName > 0) {
            query += `OrgId eq ${filterValue.OrgName}`;
        }
        if ((filterValue.CustomerId && filterValue.CustomerId.length > 0) || (filterValue.CompanyId && filterValue.CompanyId.length > 0)) {
            if (query !== '?$filter=') {
                query += '&';
            }
            else {
                query = '?';
            }
            query += '$expand=WaterfallRepairs($filter=(';
            if (filterValue.CustomerId.length > 0)
                query += `${filterValue.CustomerId.map(x => 'ContactId eq ' + x + '').join(' or ')}`;
            if (filterValue.CustomerId.length > 0 && filterValue.CompanyId.length > 0)
                query += ' or ';
            if (filterValue.CompanyId.length > 0)
                query += `${filterValue.CompanyId.map(x => 'CompanyId eq ' + x + '').join(' or ')}`;
            query += '))';
        }
        return query;
    }
    /**
     *
     * @param output
     */
    onFormUpdate(output) {
        if (output.name === 'CustomerId') {
            this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { selectedOption: output.value });
            this.filterForm.get(output.name).setValue(output.value.filter(x => x.isIndividual).map((x) => { return x.value; }));
            this.filterForm.get('CompanyId').setValue(output.value.filter(x => !x.isIndividual).map((x) => { return x.value; }));
        }
        else if (output.name === 'OrgName') {
            this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { selectedOption: output.value });
            if (output.value) {
                this.filterForm.get(output.name).setValue(output.value.value);
                this.getCustomer(output.value.value);
            }
            else {
                this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { value: '', selectedOption: '', options: [] });
            }
        }
    }
    /**
     *
     */
    applyFilter() {
        this.workflowData = [];
        this.getWorkflowDetails(this.generateFilterQuery());
        this.filter.close();
    }
    /**
     *
     */
    resetFilter() {
        var _a, _b, _c, _d, _e, _f;
        this.filterForm.reset();
        for (let index = 0; index < this.filterModal.length; index++) {
            this.filterModal[index] = Object.assign(Object.assign({}, this.filterModal[index]), { value: '', selectedOption: '', options: (_a = this.filterModal[index].options) === null || _a === void 0 ? void 0 : _a.map((x) => { x.checked = false; return x; }) });
        }
        if ((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
            this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
            this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { selectedOption: { 'label': (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.name, 'value': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.id } });
            this.getCustomer((_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id);
        }
    }
    /**
     * PartTypeIcon
     *  @param type {string}
     *
     *  @returns {string}
     */
    PartTypeIcon(type) {
        switch (type) {
            case 'NotOrdered':
                return 'parts-not-ordered';
            case 'Ordered':
                return 'parts-ordered';
            case 'Arrived':
                return 'parts-arrived';
            case 'OrderedPartially':
                return 'parts-ordered-partial';
            case 'ArrivedPartially':
                return 'parts-arrived-partial';
            default:
                return 'parts-not-ordered';
        }
    }
    /**
     * PartTypeIcon
     *  @param type {string}
     *
     *  @returns {string}
     */
    PartTypetoolTip(type) {
        let Tooltip = '';
        switch (type) {
            case 'NotOrdered':
                Tooltip = 'parts_not_ordered';
                break;
            case 'Ordered':
                Tooltip = 'part_ordered';
                break;
            case 'Arrived':
                Tooltip = 'part_arrived';
                break;
            case 'OrderedPartially':
                Tooltip = 'part_ordered_partial';
                break;
            case 'ArrivedPartially':
                Tooltip = 'part_arrived_partial';
                break;
            default:
                Tooltip = 'parts_not_ordered';
                break;
        }
        return this.translateService.instant(Tooltip);
    }
    /**
     *
     * @param event
     */
    fullscreenmodes(event) {
        this.chkScreenMode();
    }
    /**
   * check screen mode
   */
    chkScreenMode() {
        if (document.fullscreenElement || document['webkitIsFullScreen']) {
            //fullscreen
            this.isFullScreen = true;
        }
        else {
            //not in full screen
            this.isFullScreen = false;
        }
    }
    /**
   * open in full screen
   */
    openFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }
    /**
     * toggle view
     */
    changeView() {
        if (!this.verticalView) {
            setTimeout(() => {
                var _a, _b;
                this.verticalRowWidth = ((_b = (_a = this.verticalRow) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.offsetWidth) * 0.6;
            });
        }
        this.verticalView = !this.verticalView;
    }
    /**
     * changeFontSize
     *
     * @param {*} event
     */
    changeFontSize(event) {
        if (event.name === 'fontSizeDropdown') {
            this.fontSizeDropdown.selectedOption = event.value;
            localStorage.setItem('workflow-fontsize', JSON.stringify(event.value));
        }
    }
    /**
     * ngOnDestroy
     */
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        clearInterval(this.IntervalGetWorkflow);
        clearInterval(this.autoScrollInterval);
        clearInterval(this.timeInterval);
    }
}
WorkflowLoungeComponent.ɵfac = function WorkflowLoungeComponent_Factory(t) { return new (t || WorkflowLoungeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_1__.WorkflowService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder)); };
WorkflowLoungeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: WorkflowLoungeComponent, selectors: [["app-workflow-lounge"]], viewQuery: function WorkflowLoungeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.horizontalRow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.verticalRow = _t.first);
    } }, hostBindings: function WorkflowLoungeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fullscreenchange", function WorkflowLoungeComponent_fullscreenchange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("webkitfullscreenchange", function WorkflowLoungeComponent_webkitfullscreenchange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("mozfullscreenchange", function WorkflowLoungeComponent_mozfullscreenchange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("MSFullscreenChange", function WorkflowLoungeComponent_MSFullscreenChange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("onwebkitfullscreenchange", function WorkflowLoungeComponent_onwebkitfullscreenchange_HostBindingHandler($event) { return ctx.fullscreenmodes($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_1__.WorkflowService])], decls: 16, vars: 8, consts: [[1, "page-container", "workflow-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0", "lounge-list-header"], [1, "header-content", "fx-row", "justify-space-between", "align-center"], [2, "margin-left", "auto", "width", "140px", 3, "dropdownModel", "selected"], [3, "buttonModel", "click"], [1, "alignment-btn", 3, "click"], ["svgIcon", "horizontal-alignment", 4, "ngIf"], ["svgIcon", "vertical-alignment", 4, "ngIf"], ["class", "fullscreen", 4, "ngIf"], ["class", "workflow-table-container", 3, "fullscreen-table", 4, "ngIf"], ["class", "vertical-workflow-table", 3, "fullscreen-table", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], ["svgIcon", "horizontal-alignment"], ["svgIcon", "vertical-alignment"], [1, "fullscreen"], [1, "lounge-header", "fx-0", "fx-col", "justify-center"], [1, "lounge-header-content", "align-center", "fx-row"], [1, "xa-logo-wrapper"], [1, "menu-image"], ["alt", "", 3, "src", "error", "load", 4, "ngIf", "ngIfElse"], ["name", ""], [3, "showLoading"], [1, "lounge-title-wrapper"], [1, "date-container"], [1, "lounge-date-wrapper"], [1, "lounge-last-refresh"], ["alt", "", 3, "src", "error", "load"], ["class", "org-name", 4, "ngIf"], [1, "org-name"], [1, "workflow-table-container"], ["aria-describedby", "horizontal", 1, "horizontal-workflow-table"], [1, "d-none"], [1, "scroll-items-row"], ["class", "job-item-row", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "job-item-row", 3, "ngStyle"], [1, "job-item-cards"], [1, "workflow-row-container"], ["horizontalRow", ""], [1, "workflow-header-card"], [1, "card-content"], [1, "uppercase"], [1, "rounded-icon"], [1, "card-container"], ["cardContainer", ""], ["class", "workflow-details-card", 4, "ngFor", "ngForOf"], [1, "workflow-details-card"], [1, "detail-card-link"], [1, "img-container"], ["alt", "", 3, "src", "ngStyle", "load"], [1, "repair-items-container"], [1, "due-date-span"], [1, "info-span"], [1, "vertical-workflow-table"], ["aria-describedby", "vertical view", 1, "vertical-table"], [4, "ngFor", "ngForOf"], [1, "vertical-card-container"], ["class", "vertical-card", 4, "ngFor", "ngForOf"], ["verticalRow", ""], [1, "header-container", 3, "ngClass"], [1, "count"], [1, "title"], [1, "vertical-card"], [1, "repair-container"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]], template: function WorkflowLoungeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "chq-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selected", function WorkflowLoungeComponent_Template_chq_dropdown_selected_3_listener($event) { return ctx.changeFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "chq-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkflowLoungeComponent_Template_chq_button_click_4_listener() { return ctx.openFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkflowLoungeComponent_Template_div_click_5_listener() { return ctx.changeView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WorkflowLoungeComponent_mat_icon_6_Template, 1, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WorkflowLoungeComponent_mat_icon_7_Template, 1, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, WorkflowLoungeComponent_div_8_Template, 18, 11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, WorkflowLoungeComponent_div_9_Template, 5, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, WorkflowLoungeComponent_div_10_Template, 8, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, WorkflowLoungeComponent_div_11_Template, 9, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dropdownModel", ctx.fontSizeDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonModel", ctx.FullscreenButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0 && !ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0 && ctx.verticalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.workflowData.length === 0 || ctx.totalCost === 0 && ctx.totalCount === 0) && !ctx.CallingAPI);
    } }, directives: [_widgets_chq_dropdown_chq_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.ChqDropdownComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_5__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe], styles: [".rounded-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  min-width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  position: relative;\n  background: rgba(255, 255, 255, 0.4);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  margin: 1vh 1vw;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .lounge-list-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .due-date-span[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n  text-align: left;\n  font-size: 10px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .info-span[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n  text-align: left;\n  font-size: 10px;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px - 2vh - 40px);\n  overflow: auto;\n  margin: 0 0.5vw;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: var(--xa-popup-light-gray);\n  border-spacing: 0;\n  padding: 0;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#1A223333 40%, rgba(255, 255, 255, 0) 0%);\n  background-position: top right;\n  background-size: 2px 35px;\n  width: 195px;\n  background-repeat: repeat-y;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%]:last-child {\n  background-size: 0px;\n  padding-right: 0px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]:first-child {\n  margin-top: 0 !important;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 1vh);\n  margin: 0.5vh 0;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.5625rem;\n  gap: 0.5625rem;\n  height: 100%;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%] {\n  min-width: 205px;\n  max-width: 205px;\n  border-radius: 0.625rem;\n  font-size: 12px;\n  font-weight: normal;\n  position: sticky;\n  left: 0;\n  background-color: white;\n  z-index: 1;\n  box-shadow: inset 0px 0px 0px 3px rgba(26, 34, 51, 0.2);\n  box-shadow: inset 0px 0px 0px 3px var(--xa-light-gray, rgba(26, 34, 51, 0.2));\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 205px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 6px;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: center;\n  color: #FFFFFF;\n  color: var(--xa-white, #FFFFFF);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 0px !important;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  background: var(--xa-white, #FFFFFF);\n  border-radius: 8px;\n  overflow: hidden;\n  min-width: 205px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 10px;\n  padding: 0;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  cursor: auto;\n  color: black;\n  text-align: center;\n  height: 100%;\n  grid-gap: 5px;\n  gap: 5px;\n  padding-right: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  flex: 1;\n  justify-content: center;\n  width: 121px;\n  grid-gap: 0.25vh;\n  gap: 0.25vh;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background: rgba(26, 34, 51, 0.1);\n  background: var(--xa-lighter-gray, rgba(26, 34, 51, 0.1));\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .workflow-repair-items[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 5px;\n  gap: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 1.625rem;\n  height: 1.625rem;\n  font-size: 16px;\n  line-height: 4px;\n  padding: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .due-date-span-customer[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n  float: left;\n  padding-left: 3px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .job-item-row[_ngcontent-%COMP%]   .job-item-cards[_ngcontent-%COMP%]   .workflow-row-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .workflow-details-card[_ngcontent-%COMP%]   .status-span[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  min-width: 16px;\n  min-height: 16px;\n  max-width: 16px;\n  max-height: 16px;\n  background: rgba(26, 34, 51, 0.05);\n  background: var(--xa-bold-gray, rgba(26, 34, 51, 0.05));\n  border-radius: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .workflow-table-container[_ngcontent-%COMP%]   .horizontal-workflow-table[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n  grid-gap: 8px;\n  gap: 8px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%] {\n  color: #FFF;\n  background: #1B03A3;\n  background: var(--xa-primary, #1B03A3);\n  margin-bottom: 0.75vw;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%] {\n  height: 5.0625rem;\n  padding: 0px 30px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  position: relative;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  max-height: 60px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .xa-logo-wrapper[_ngcontent-%COMP%]   .menu-image[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 14px;\n  color: #000;\n  color: var(--xa-black-dark, #000);\n  padding: 8px 4px;\n  text-align: center;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  border: 1px solid var(--xa-light-gray, rgba(26, 34, 51, 0.2));\n  border-radius: 8px;\n  display: flex;\n  cursor: pointer;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: #FFFFFF;\n  background-color: var(--xa-white, #FFFFFF);\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .lounge-title-wrapper[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  letter-spacing: -0.01563rem;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  grid-gap: 0.4375rem;\n  gap: 0.4375rem;\n  flex-direction: column;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-date-wrapper[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]   .lounge-header[_ngcontent-%COMP%]   .lounge-header-content[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%]   .lounge-last-refresh[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px - 2vh - 40px);\n  overflow: auto;\n  padding: 0 0.375vw;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  height: 100%;\n  width: 100%;\n  border-spacing: 0;\n  padding: 0;\n  background: #F4F5FD;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: #F4F5FD;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 0.375vw 0.75vw 0.375vw;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 10px 11px;\n  display: flex;\n  height: 96px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  grid-gap: 12px;\n  gap: 12px;\n  color: #FFFFFF;\n  color: var(--xa-white, #FFFFFF);\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container.repair-not-started[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.2);\n  background: var(--xa-light-gray, rgba(26, 34, 51, 0.2));\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  position: relative;\n  background: #FFFFFF;\n  background: var(--xa-white, #FFFFFF);\n  color: #000;\n  color: var(--xa-black, #000);\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  background: var(--xa-white, #FFFFFF);\n  border-radius: 10px;\n  padding: 0.5vw;\n  margin-bottom: 10px;\n  scroll-margin-top: 130px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.1);\n  background: var(--xa-lighter-gray, rgba(26, 34, 51, 0.1));\n  border-radius: 10px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  object-fit: contain;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.25vw;\n  gap: 0.25vw;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  min-width: 26px;\n  min-height: 26px;\n  max-width: 26px;\n  max-height: 26px;\n  background: rgba(26, 34, 51, 0.05);\n  background: var(--xa-bold-gray, rgba(26, 34, 51, 0.05));\n  border-radius: 5px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .vertical-workflow-table[_ngcontent-%COMP%]   .repair-container[_ngcontent-%COMP%]   .repair-items-container[_ngcontent-%COMP%]   .repair-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n\n.workflow-container[_ngcontent-%COMP%]   .fullscreen-table[_ngcontent-%COMP%] {\n  height: calc(100vh - 50px);\n}\n\n.svg-17px[_ngcontent-%COMP%] {\n  width: 17px;\n}\n\n.main-content[_ngcontent-%COMP%]   .addenda-container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\n\nspan.text-muted[_ngcontent-%COMP%] {\n  color: rgba(26, 34, 51, 0.7);\n  color: var(--xa-dark-gray, rgba(26, 34, 51, 0.7));\n}\n\n.Approved[_ngcontent-%COMP%] {\n  color: var(--xa-approve);\n}\n\n.PendingApproval[_ngcontent-%COMP%] {\n  color: var(--xa-pending-approval);\n}\n\n.RepairEstimation[_ngcontent-%COMP%] {\n  color: var(--xa-repair-estimate);\n}\n\n.UploadPhotos[_ngcontent-%COMP%] {\n  color: var(--xa-upload-photo);\n}\n\n.UploadDocuments[_ngcontent-%COMP%] {\n  color: var(--xa-upload-document);\n}\n\n.Draft[_ngcontent-%COMP%] {\n  color: var(--xa-draft);\n}\n\n.card-container-fs[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex-wrap: wrap;\n}\n\n.scroll-btn-fs[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.workflow-header-card-fs[_ngcontent-%COMP%] {\n  height: auto !important;\n  justify-content: flex-start !important;\n}\n\n.workflow-row-container-fs[_ngcontent-%COMP%] {\n  align-items: stretch !important;\n}\n\n.fullscreen-tbody[_ngcontent-%COMP%] {\n  height: calc(100vh - 140px) !important;\n}\n\n.fullscreen-tbody[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 0.5625rem;\n  gap: 0.5625rem;\n  width: calc(100vw - 120px);\n}\n\n.alignment-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  display: flex;\n  background: #FFF;\n  box-shadow: 0px 1px 3px 0px rgba(26, 34, 51, 0.2);\n  box-shadow: 0px 1px 3px 0px var(--xa-light-gray, rgba(26, 34, 51, 0.2));\n}\n\n.alignment-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LWxvdW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFLSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUZOOztBQUdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFPRTtFQUNFLDRCQUFBO0VBQUEsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBTEo7O0FBUUU7RUFDRSw0QkFBQTtFQUFBLGlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0U7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUEo7O0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBTk47O0FBbUNNO0VBQ0UsbUJBQUE7QUFqQ1I7O0FBb0NNO0VBQ0UsMkVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBbENSOztBQXFDTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFuQ1I7O0FBdUNRO0VBQ0Usd0JBQUE7QUFyQ1Y7O0FBdUNRO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQXJDVjs7QUFzQ1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFBQSxjQUFBO0VBQ0EsWUFBQTtBQXBDWjs7QUFzQ1k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSx1REFBQTtFQUFBLDZFQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBcENkOztBQXFDYztFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0FBbkNoQjs7QUFvQ2dCO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFBQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbENsQjs7QUFzQ2M7RUFDRSxZQUFBO0FBcENoQjs7QUF1Q2M7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQXJDaEI7O0FBeUNZO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBdkNkOztBQXdDYztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUF0Q2hCOztBQXlDYztFQUNFLG1CQUFBO0VBQUEsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdkNoQjs7QUEwQ2dCO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLGtCQUFBO0FBeENsQjs7QUEwQ2tCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7QUF4Q3BCOztBQTRDZ0I7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7RUFBQSx5REFBQTtBQTFDbEI7O0FBMkNrQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF6Q3BCOztBQStDZ0I7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUE3Q2xCOztBQWdEZ0I7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBOUNsQjs7QUFnRGtCO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUE5Q3BCOztBQW1EZ0I7RUFDRSw0QkFBQTtFQUFBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqRGxCOztBQW9EZ0I7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFsRGxCOztBQTJETTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFBQSx1REFBQTtFQUNBLGtCQUFBO0FBekRWOztBQTJEVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBekRaOztBQWlFRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUEvREo7O0FBaUVJO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsaURBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQS9ETjs7QUFtRUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFBQSxzQ0FBQTtFQUNBLHFCQUFBO0FBakVKOztBQWtFSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFoRU47O0FBa0VNO0VBQ0UsOEJBQUE7QUFoRVI7O0FBa0VRO0VBQ0UscUJBQUE7QUFoRVY7O0FBa0VVO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWhFZDs7QUFrRWM7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFoRWxCOztBQW1FYztFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUFBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQUEsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQUEsMENBQUE7QUFqRWxCOztBQXNFUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQXBFVjs7QUF1RVE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtFQUNBLHNCQUFBO0FBckVWOztBQXVFVTtFQUNFLGdCQUFBO0FBckVaOztBQXdFVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXRFWjs7QUE2RUU7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTNFSjs7QUE0RUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUExRU47O0FBNEVNO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBMUVSOztBQTZFTTtFQUNFLGlDQUFBO0FBM0VSOztBQWdGSTtFQUNFLGVBQUE7QUE5RU47O0FBaUZJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQS9FTjs7QUFrRkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGNBQUE7RUFBQSwrQkFBQTtBQWhGTjs7QUFrRk07RUFDRSxpQ0FBQTtFQUFBLHVEQUFBO0FBaEZSOztBQW1GTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFBQSxvQ0FBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFqRlI7O0FBb0ZNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsRlI7O0FBc0ZJO0VBQ0ksbUJBQUE7RUFBQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFwRlI7O0FBcUZRO0VBQ0UsaUNBQUE7RUFBQSx5REFBQTtFQUNBLG1CQUFBO0FBbkZWOztBQW9GVTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbEZaOztBQXNGUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFwRlo7O0FBcUZZO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUFBLHVEQUFBO0VBQ0Esa0JBQUE7QUFuRmhCOztBQXFGZ0I7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQW5GbEI7O0FBMEZFO0VBQ0UsMEJBQUE7QUF4Rko7O0FBNEZBO0VBQ0UsV0FBQTtBQXpGRjs7QUE0RkE7RUFDRSw4QkFBQTtBQXpGRjs7QUE0RkE7RUFDRSw0QkFBQTtFQUFBLGlEQUFBO0FBekZGOztBQTRGQTtFQUNFLHdCQUFBO0FBekZGOztBQTRGQTtFQUNFLGlDQUFBO0FBekZGOztBQTRGQTtFQUNFLGdDQUFBO0FBekZGOztBQTRGQTtFQUNFLDZCQUFBO0FBekZGOztBQTRGQTtFQUNFLGdDQUFBO0FBekZGOztBQTRGQTtFQUNFLHNCQUFBO0FBekZGOztBQTZGQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTFGRjs7QUE2RkE7RUFDRSx3QkFBQTtBQTFGRjs7QUE2RkE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FBMUZGOztBQTZGQTtFQUNFLCtCQUFBO0FBMUZGOztBQTZGQTtFQUNFLHNDQUFBO0FBMUZGOztBQTRGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUFBLGNBQUE7RUFDQSwwQkFBQTtBQTFGSjs7QUE4RkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQUEsdUVBQUE7QUEzRko7O0FBNEZJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUExRk4iLCJmaWxlIjoid29ya2Zsb3ctbG91bmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kZWQtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29ya2Zsb3ctY29udGFpbmVyIHtcblxuICAubG91bmdlLWxpc3QtaGVhZGVyIHtcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgbWFyZ2luOiAxdmggMXZ3O1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgLmxhc3QtdXBkYXRlZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHhcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5kdWUtZGF0ZS1zcGFuIHtcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuNykpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5pbmZvLXNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC43KSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLndvcmtmbG93LXRhYmxlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHggLSAydmggLSA0MHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXJnaW46IDAgMC41dnc7XG4gICAgLmhvcml6b250YWwtd29ya2Zsb3ctdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIC8vIHRib2R5IHtcbiAgICAgIC8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC8vICAgZGlzcGxheTogZmxleDtcbiAgICAgIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLy8gICB0cjpsYXN0LWNoaWxkIHtcbiAgICAgIC8vICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIC8vICAgfVxuXG4gICAgICAvLyAgIHRyOmZpcnN0LWNoaWxkIHtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICAvLyB0ciB7XG4gICAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC8vICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcbiAgICAgIC8vIH1cblxuICAgICAgLy8gdGguR3JlZW4ge1xuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ncmVlbi1tZWRpdW0pO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyB0aC5SZWQge1xuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ncmVlbi1tZWRpdW0pO1xuICAgICAgLy8gfVxuXG4gICAgICB0ZCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodC1ib3JkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzFBMjIzMzMzIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSk7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAycHggMzVweDtcbiAgICAgICAgd2lkdGg6IDE5NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodC1ib3JkZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5qb2ItaXRlbS1yb3cge1xuICAgICAgICAuam9iLWl0ZW0tY2FyZHM6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuam9iLWl0ZW0tY2FyZHMge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMXZoKTtcbiAgICAgICAgICBtYXJnaW46IDAuNXZoIDA7XG4gICAgICAgICAgLndvcmtmbG93LXJvdy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogMC41NjI1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAud29ya2Zsb3ctaGVhZGVyLWNhcmQge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwNXB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggM3B4IHZhcigtLXhhLWxpZ2h0LWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC4yKSk7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMjA1cHg7XG4gICAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUsICNGRkZGRkYpO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLndvcmtmbG93LWRldGFpbHMtY2FyZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUsICNGRkZGRkYpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjA1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgICAgICAgLmRldGFpbC1jYXJkLWxpbmsge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGdhcDogNXB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAucmVwYWlyLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMXB4O1xuICAgICAgICAgICAgICAgICAgICBnYXA6IDAuMjV2aDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodGVyLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC4xKSk7XG4gICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAud29ya2Zsb3ctcmVwYWlyLWl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuNjI1cmVtO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjYyNXJlbTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZHVlLWRhdGUtc3Bhbi1jdXN0b21lciB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuNykpO1xuICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zdGF0dXMtc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZXBhaXItaXRlbXMge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTZweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDE2cHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ib2xkLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC4wNSkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbn1cblxuXG4gIC5uby1kYXRhLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuXG4gICAgLm5vLWRhdGEtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC43KSk7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG4gIH1cblxuICAuZnVsbHNjcmVlbiB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtcHJpbWFyeSwgIzFCMDNBMyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXZ3O1xuICAgIC5sb3VuZ2UtaGVhZGVyIHtcbiAgICAgIGhlaWdodDogNS4wNjI1cmVtO1xuICAgICAgcGFkZGluZzogMHB4IDMwcHg7XG5cbiAgICAgIC5sb3VuZ2UtaGVhZGVyLWNvbnRlbnQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLnhhLWxvZ28td3JhcHBlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgLm1lbnUtaW1hZ2Uge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm9yZy1uYW1lIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLWRhcmssICMwMDApO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDRweDtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC4yKSk7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS13aGl0ZSwgI0ZGRkZGRik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICAgLmxvdW5nZS10aXRsZS13cmFwcGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuODc1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNTYzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtY29udGFpbmVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDAuNDM3NXJlbTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgLmxvdW5nZS1kYXRlLXdyYXBwZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG91bmdlLWxhc3QtcmVmcmVzaCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC52ZXJ0aWNhbC13b3JrZmxvdy10YWJsZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHggLSAydmggLSA0MHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAwIDAuMzc1dnc7XG4gICAgdGFibGUge1xuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYmFja2dyb3VuZDogI0Y0RjVGRDtcblxuICAgICAgdGhlYWQge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNEY1RkQ7XG4gICAgICB9XG5cbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMC4zNzV2dyAwLjc1dncgMC4zNzV2dztcbiAgICAgIH1cblxuICAgIH1cblxuICAgICoge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTFweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLXhhLXdoaXRlLCAjRkZGRkZGKTtcblxuICAgICAgJi5yZXBhaXItbm90LXN0YXJ0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodC1ncmF5LCByZ2JhKDI2LCAzNCwgNTEsIDAuMikpO1xuICAgICAgfVxuXG4gICAgICAuY291bnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUsICNGRkZGRkYpO1xuICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2ssICMwMDApO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVwYWlyLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXdoaXRlLCAjRkZGRkZGKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMC41dnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHNjcm9sbC1tYXJnaW4tdG9wOiAxMzBweDtcbiAgICAgICAgLmltZy1jb250YWluZXIgeyAgICAgICAgICBcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1saWdodGVyLWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC4xKSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVwYWlyLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiAwLjI1dnc7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLnJlcGFpci1pdGVtcyB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjZweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjZweDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJvbGQtZ3JheSwgcmdiYSgyNiwgMzQsIDUxLCAwLjA1KSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZ1bGxzY3JlZW4tdGFibGUge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICB9XG59XG5cbi5zdmctMTdweCB7XG4gIHdpZHRoOiAxN3B4O1xufVxuXG4ubWFpbi1jb250ZW50IC5hZGRlbmRhLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuc3Bhbi50ZXh0LW11dGVkIHtcbiAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSwgcmdiYSgyNiwgMzQsIDUxLCAwLjcpKTtcbn1cblxuLkFwcHJvdmVkIHtcbiAgY29sb3I6IHZhcigtLXhhLWFwcHJvdmUpO1xufVxuXG4uUGVuZGluZ0FwcHJvdmFsIHtcbiAgY29sb3I6IHZhcigtLXhhLXBlbmRpbmctYXBwcm92YWwpO1xufVxuXG4uUmVwYWlyRXN0aW1hdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS14YS1yZXBhaXItZXN0aW1hdGUpO1xufVxuXG4uVXBsb2FkUGhvdG9zIHtcbiAgY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XG59XG5cbi5VcGxvYWREb2N1bWVudHMge1xuICBjb2xvcjogdmFyKC0teGEtdXBsb2FkLWRvY3VtZW50KTtcbn1cblxuLkRyYWZ0IHtcbiAgY29sb3I6IHZhcigtLXhhLWRyYWZ0KTtcbn1cblxuLy8gRnVsbHNjcmVlbiBDbGFzc2VzXG4uY2FyZC1jb250YWluZXItZnMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zY3JvbGwtYnRuLWZzIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud29ya2Zsb3ctaGVhZGVyLWNhcmQtZnMge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi53b3JrZmxvdy1yb3ctY29udGFpbmVyLWZzIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmZ1bGxzY3JlZW4tdGJvZHkge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCkgIWltcG9ydGFudDtcblxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjU2MjVyZW07XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMjBweCk7XG4gIH1cbn1cblxuLmFsaWdubWVudC1idG4ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHZhcigtLXhhLWxpZ2h0LWdyYXksIHJnYmEoMjYsIDM0LCA1MSwgMC4yKSk7XG4gICAgbWF0LWljb24ge1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgfVxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 40712:
/*!************************************************************************!*\
  !*** ./src/app/modules/repair/workflow/workflow/workflow.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowComponent": function() { return /* binding */ WorkflowComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 34122);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 53399);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/route-mapper/repair-status-mapper */ 93620);
/* harmony import */ var src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/workflow/workflow.service */ 71923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helper/directive/has-permission.directive */ 22406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../widgets/chq-customloader/chq-customloader.component */ 48262);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helper/pipe/xa-currency/xa-currency.pipe */ 93077);






















const _c0 = ["filter"];
function WorkflowComponent_chq_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "chq-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_chq_button_24_Template_chq_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r4.openFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx_r0.filterButton);
} }
const _c1 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function WorkflowComponent_div_25_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "xaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background-color", items_r8.Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](items_r8.WaterfallRepairs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](8, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](11, _c1, items_r8.TotalAmount, ctx_r6.i18n.currencySymbol, ctx_r6.i18n.digitsInfo, ctx_r6.i18n.locale, ctx_r6.i18n.position)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](items_r8.JobName);
} }
function WorkflowComponent_div_25_td_7_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_div_25_td_7_mat_card_1_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16); const repair_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r15.bookingStatusUrl(repair_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("load", function WorkflowComponent_div_25_td_7_mat_card_1_Template_img_load_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16); const repair_r13 = restoredCtx.$implicit; return repair_r13.isloaded = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "chq-customloader", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repair_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", repair_r13.ImageUrl !== null && repair_r13.ImageUrl !== "" ? repair_r13.ImageUrl : "assets/img/front-left.png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showLoading", !repair_r13.isloaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 19, repair_r13.Assignees.length === 0 ? "No Assignee" : repair_r13.Assignees.length > 1 ? "Multi Assignees" : "Single Assignee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", repair_r13.Assignees.length > 1 ? "multi-users" : "single-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r13.Assignees.length === 0 ? "dark-gray-disabled" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 21, repair_r13.JobStatusColor === "Transparent" ? "job_not_started" : repair_r13.JobStatusColor === "Green" ? "job_start_today" : "job_start_in_past"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r13.JobStatusColor === "Transparent" ? "dark-gray-disabled" : repair_r13.JobStatusColor === "Green" ? "green-medium" : "dark-red2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", ctx_r12.PartTypetoolTip(repair_r13.PartGeneralStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r12.PartTypeIcon(repair_r13.PartGeneralStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 23, repair_r13.IsAttentionRequired ? "attention_required" : "attention_not_required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r13.IsAttentionRequired === null ? "dark-gray-disabled" : repair_r13.IsAttentionRequired ? "dark-red2" : "dark-gray-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 25, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 27, repair_r13.LastestTaskUpdatedRepairType ? repair_r13.LastestTaskUpdatedRepairType : "Others")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", ctx_r12.jobIconDictionary[repair_r13.LastestTaskUpdatedRepairType] ? ctx_r12.jobIconDictionary[repair_r13.LastestTaskUpdatedRepairType] : "gears");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 29, repair_r13.IsTowedIn ? "towed_in" : "not_towed_in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "towing");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("color", repair_r13.IsTowedIn ? "black" : "dark-gray-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 31, "due_out"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 33, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](30, 35, repair_r13.BookingOutDate, "dd/MM/yy HH:mm")));
} }
function WorkflowComponent_div_25_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, WorkflowComponent_div_25_td_7_mat_card_1_Template, 31, 38, "mat-card", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", items_r10.WaterfallRepairs);
} }
function WorkflowComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "thead", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, WorkflowComponent_div_25_th_4_Template, 11, 17, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, WorkflowComponent_div_25_td_7_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.workflowData);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.workflowData);
} }
function WorkflowComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 2, "no_result_found"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, "could_not_find_any_data"), ".");
} }
class WorkflowComponent {
    /**
     * constructor.
     * @constructor
     * @param {WorkflowService} workflowService
     * @param {commonService} commonService
     * @param {caseService} caseService
     * @param {formBuilder} formBuilder
     */
    constructor(workflowService, router, commonService, caseService, translateService, formBuilder) {
        this.workflowService = workflowService;
        this.router = router;
        this.commonService = commonService;
        this.caseService = caseService;
        this.translateService = translateService;
        this.formBuilder = formBuilder;
        this.totalCost = 0;
        this.totalCount = 0;
        this.workflowData = [];
        this.CallingAPI = false;
        this.IntervalGetWorkflow = null;
        this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
        this.userIsBM = false;
        this.filterButton = {
            label: 'filter',
            type: 'outline',
            icon: 'filter'
        };
        this.filterForm = this.formBuilder.group({
            OrgName: [],
            CustomerId: []
        });
        this.applyButton = {
            label: 'apply',
            type: 'primary'
        };
        this.resetButton = {
            label: 'reset_all',
            type: 'outline'
        };
        this.filterModal = [
            {
                placeHolder: 'select_organization',
                label: 'organization',
                name: 'OrgName',
                value: '',
                type: 'select',
                displayValue: 'label',
                fieldValue: 'value',
                options: [],
                isMultiSelect: false
            },
            {
                placeHolder: 'select_type',
                label: 'customer_name',
                name: 'CustomerId',
                value: '',
                type: 'select',
                displayValue: 'label',
                fieldValue: 'value',
                options: [],
                isMultiSelect: true
            }
        ];
        this.filterDataLoaded = false;
        this.repairSizeColors = {
            'sm': 'bg-light-blue',
            's': 'bg-light-blue',
            'l': 'bg-light-green text-white',
            'm': 'bg-light-pink text-white',
            'xl': 'bg-dark-red text-white'
        };
        this.settingsButtonModel = {
            label: 'filter',
            type: 'outline',
            icon: 'filter',
            width: '13px',
            height: '13px'
        };
        this.jobIconDictionary = {
            'Body': 'car',
            'Paint': 'paint-nozzle',
            'Mechanical': 'mechanical',
            'Electrical': 'electric',
            'Tires': 'tire',
            'Preparation': 'car-roof',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Check In': 'checkbox-open',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Repair': 'door-panel',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Panel Fitup': 'door-panel',
            'Polish': 'car-paint',
            'Detailing': 'car-cleaning',
            'Maintenance': 'maintenance',
            'Diagnosis': 'diagnosis',
            'Others': 'gears',
        };
        this.subs = [];
        this.i18n = this.commonService.geti18nInfo();
    }
    /**
     * ngOnInit
     */
    ngOnInit() {
        this.commonService.userProfileData.subscribe((res) => {
            var _a, _b, _c;
            this.userDetail = res === null || res === void 0 ? void 0 : res.data;
            this.userIsBM = (_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.roleDetail.some(x => x.name == 'Bodyshop Manager');
            if ((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
                this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
            }
        });
    }
    /**
     * ngAfterViewInit
     */
    ngAfterViewInit() {
        this.getWorkflowDetails(this.generateFilterQuery());
        this.IntervalGetWorkflow = setInterval(() => {
            this.getWorkflowDetails(this.generateFilterQuery());
        }, 300000);
    }
    /**
     * getWorkflowData
     */
    getWorkflowDetails(query) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.commonService.showLoading();
            this.CallingAPI = true;
            if (query !== '?$filter=') {
                this.subs.push(this.workflowService.getWorkflowDetailsWithQuery(query).subscribe({
                    next: (data) => {
                        this.workflowData = data.value;
                        if (this.workflowData) {
                            this.workflowData.map(value => value === null || value === void 0 ? void 0 : value.WaterfallRepairs.map(child => child.isLoaded = false));
                        }
                        this.CallingAPI = false;
                        this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
                        this.getTotals();
                        this.commonService.hideLoading();
                    },
                    error: () => {
                        this.CallingAPI = false;
                    }
                }));
            }
            else {
                this.subs.push(this.workflowService.getWorkflowDetails().subscribe({
                    next: (data) => {
                        this.workflowData = data.value;
                        if (this.workflowData) {
                            this.workflowData.map(value => value === null || value === void 0 ? void 0 : value.WaterfallRepairs.map(child => child.isLoaded = false));
                        }
                        this.CallingAPI = false;
                        this.LastRefreshedDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('DD/MM/YYYY HH:mm:ss');
                        this.getTotals();
                        this.commonService.hideLoading();
                    },
                    error: () => {
                        this.CallingAPI = false;
                    }
                }));
            }
        });
    }
    /**
     * calculate totalCost and totalCount of all repairs
     */
    getTotals() {
        this.totalCost = 0;
        this.totalCount = 0;
        this.workflowData.forEach((item) => {
            this.totalCount += item.WaterfallRepairs.length;
            item.WaterfallRepairs.forEach((itm) => {
                this.totalCost += itm.EstimateCost;
            });
        });
    }
    /**
     * current_date_format
     * return date format
     * example 28 Wednesday, of June 2023
     *
     * @returns {string}
     */
    current_date_format() {
        return dayjs__WEBPACK_IMPORTED_MODULE_0__().format('D dddd, of MMMM YYYY');
    }
    /**
     * pull data and open filter panel
     */
    openFilter() {
        if (this.filterDataLoaded) {
            this.filter.open();
        }
        else {
            this.commonService.showLoading();
            (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([
                this.getOrgIfBM(),
                this.workflowService.getCustomer(this.userDetail.organizationDetail.id)
            ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(([orgList, CustomerList]) => {
                return { orgList, CustomerList };
            })).subscribe((result) => {
                var _a, _b, _c, _d, _e, _f;
                if (this.userIsBM) {
                    this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { selectedOption: { 'label': (_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.organizationDetail.name, 'value': (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail.id }, options: result.orgList.data.map((x) => { return { label: x.name, value: x.id }; }) });
                }
                else {
                    this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { selectedOption: { 'label': (_c = this.userDetail) === null || _c === void 0 ? void 0 : _c.organizationDetail.name, 'value': (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.id }, options: [{ 'label': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.name, 'value': (_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id }], disabled: true });
                }
                this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { options: result.CustomerList.filter((value, index, self) => {
                        return self.findIndex(o => o.contactId === value.contactId) === index;
                    }).map((x) => {
                        const name = x.firstName + ' ' + x.lastName;
                        const label = x.isIndividual ? name : x.companyName;
                        const subLabel = x.isIndividual ? x.email : x.licenseNumber;
                        return {
                            label: x.isIndividual ? name : x.companyName,
                            subLabel: x.isIndividual ? x.email : x.licenseNumber,
                            value: x.id,
                            html: `<div class='workflow-customer-item'><span class='name'>${label}</span><span class='email'>${subLabel}</span></div>`
                        };
                    }) });
                this.filter.open();
                this.commonService.hideLoading();
                this.filterDataLoaded = true;
            });
        }
    }
    /**
     * Check if user is bm , then call api otherwise return observable
     */
    getOrgIfBM() {
        if (this.userIsBM) {
            return this.caseService.getOrganizations();
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(null);
        }
    }
    /**
     * get customer list
     * @param orgId
     */
    getCustomer(orgId) {
        this.commonService.showLoading();
        this.workflowService.getCustomer(orgId).subscribe({
            next: (data) => {
                this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { options: data.filter((value, index, self) => {
                        return self.findIndex(o => o.contactId === value.contactId) === index;
                    }).map((x) => {
                        const name = x.firstName + ' ' + x.lastName;
                        const label = x.isIndividual ? name : x.companyName;
                        const subLabel = x.isIndividual ? x.email : x.licenseNumber;
                        return {
                            label: x.isIndividual ? name : x.companyName,
                            subLabel: x.isIndividual ? x.email : x.licenseNumber,
                            value: x.id,
                            html: `<div class='workflow-customer-item'><span class='name'>${label}</span><span class='email'>${subLabel}</span></div>`
                        };
                    }) });
                console.log(this.filterModal[1]);
                this.commonService.hideLoading();
            },
            error: () => {
                this.commonService.showLoading();
            }
        });
    }
    /**
    * function
    */
    generateFilterQuery() {
        const filterValue = this.filterForm.value;
        let query = '?$filter=';
        if (filterValue.OrgName && filterValue.OrgName > 0) {
            query += `OrgId eq ${filterValue.OrgName}`;
        }
        if (filterValue.CustomerId && filterValue.CustomerId.length > 0) {
            if (query !== '?$filter=') {
                query += '&';
            }
            else {
                query = '?';
            }
            query += '$expand=WaterfallRepairs($filter=';
            query += `(${filterValue.CustomerId.map(x => 'CustomerId eq ' + x + '').join(' or ')}))`;
        }
        return query;
    }
    /**
     *
     * @param output
     */
    onFormUpdate(output) {
        if (output.name === 'CustomerId') {
            this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { selectedOption: output.value });
            this.filterForm.get(output.name).setValue(output.value.map((x) => { return x.value; }));
        }
        else if (output.name === 'OrgName') {
            this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { selectedOption: output.value });
            this.filterForm.get(output.name).setValue(output.value.value);
            if (output.value) {
                this.getCustomer(output.value.value);
            }
            else {
                this.filterModal[1] = Object.assign(Object.assign({}, this.filterModal[1]), { value: '', selectedOption: '', options: [] });
            }
        }
    }
    /**
     *
     */
    applyFilter() {
        this.workflowData = [];
        this.getWorkflowDetails(this.generateFilterQuery());
        this.filter.close();
    }
    /**
     *
     */
    resetFilter() {
        var _a, _b, _c, _d, _e, _f;
        this.filterForm.reset();
        for (let index = 0; index < this.filterModal.length; index++) {
            this.filterModal[index] = Object.assign(Object.assign({}, this.filterModal[index]), { value: '', selectedOption: '', options: (_a = this.filterModal[index].options) === null || _a === void 0 ? void 0 : _a.map((x) => { x.checked = false; return x; }) });
        }
        if ((_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.organizationDetail) === null || _c === void 0 ? void 0 : _c.id) {
            this.filterForm.get('OrgName').setValue(this.userDetail.organizationDetail.id);
            this.filterModal[0] = Object.assign(Object.assign({}, this.filterModal[0]), { selectedOption: { 'label': (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.organizationDetail.name, 'value': (_e = this.userDetail) === null || _e === void 0 ? void 0 : _e.organizationDetail.id } });
            this.getCustomer((_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.organizationDetail.id);
        }
    }
    /**
     * PartTypeIcon
     *  @param type {string}
     *
     *  @returns {string}
     */
    PartTypeIcon(type) {
        switch (type) {
            case 'NotOrdered':
                return 'parts-not-ordered';
            case 'Ordered':
                return 'parts-ordered';
            case 'Arrived':
                return 'parts-arrived';
            case 'OrderedPartially':
                return 'parts-ordered-partial';
            case 'ArrivedPartially':
                return 'parts-arrived-partial';
            default:
                return 'parts-not-ordered';
        }
    }
    /**
     * PartTypeIcon
     *  @param type {string}
     *
     *  @returns {string}
     */
    PartTypetoolTip(type) {
        let Tooltip = '';
        switch (type) {
            case 'NotOrdered':
                Tooltip = 'parts_not_ordered';
                break;
            case 'Ordered':
                Tooltip = 'part_ordered';
                break;
            case 'Arrived':
                Tooltip = 'part_arrived';
                break;
            case 'OrderedPartially':
                Tooltip = 'part_ordered_partial';
                break;
            case 'ArrivedPartially':
                Tooltip = 'part_arrived_partial';
                break;
            default:
                Tooltip = 'parts_not_ordered';
                break;
        }
        return this.translateService.instant(Tooltip);
    }
    /**
     * booking url
     */
    bookingStatusUrl(repair) {
        const { Status, RepairGuid } = repair;
        let routeToRedirect = src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_1__.RepairStatusMapper[Status === null || Status === void 0 ? void 0 : Status.toLowerCase()] || src_app_config_route_mapper_repair_status_mapper__WEBPACK_IMPORTED_MODULE_1__.RepairStatusMapper.others;
        routeToRedirect = routeToRedirect.replace('{{repairGUID}}', RepairGuid);
        this.router.navigate([routeToRedirect]);
    }
    /**
     * ngOnDestroy
     */
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        clearInterval(this.IntervalGetWorkflow);
    }
}
WorkflowComponent.ɵfac = function WorkflowComponent_Factory(t) { return new (t || WorkflowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__.WorkflowService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder)); };
WorkflowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: WorkflowComponent, selectors: [["app-workflow"]], viewQuery: function WorkflowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([src_app_services_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__.WorkflowService])], decls: 54, vars: 34, consts: [[1, "page-container", "workflow-container", "mh-0", "mt-0", "fx-col"], [1, "fx-0"], [1, "fx-row", "date-filter-container"], [1, "text-muted", 2, "display", "block"], [1, "current-data"], [1, "", 3, "innerHTML"], [1, "updated-date"], [1, "flex", "align-center", 2, "gap", "25px", "margin-left", "auto"], [1, "flex", "align-center"], ["color", "dark-gray", 2, "margin-right", "8px"], ["svgIcon", "double-database", 2, "margin-right", "8px"], [3, "buttonModel", "click", 4, "chqPermission"], ["class", "fx-1", "style", "overflow: auto;", 4, "ngIf"], ["class", "no-data-wrapper", 4, "ngIf"], [3, "hasBackdrop"], [1, "filter-sidenav", 3, "mode", "position"], ["filter", ""], [1, "filter-container"], [1, "header"], [1, "title"], [1, "action"], [3, "click"], ["color", "white", 3, "svgIcon"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [3, "inputModel", "controlOutput"], [1, "customer-list-w", 3, "inputModel", "controlOutput"], [1, "footer"], [1, "col-6"], [3, "buttonModel", "click"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda-repair.png", "alt", ""], [1, "fx-1", 2, "overflow", "auto"], [1, "workflow-table"], [1, "workflow-table-thead"], ["class", "right-border", 4, "ngFor", "ngForOf"], [1, "right-border"], [1, "workflow-header-card"], [1, ""], [1, "bg-white", "rounded-icon"], [1, "uppercase"], ["class", "workflow-details-card", 4, "ngFor", "ngForOf"], [1, "workflow-details-card"], [1, "detail-card-link", 3, "click"], [1, "img-container"], ["alt", "", 3, "src", "load"], [3, "showLoading"], [1, "workflow-repair-items", "flex", 2, "padding", "5px 0px", "gap", "5px"], ["matTooltipPosition", "above", 1, "repair-items", 2, "padding", "1px 6px", 3, "matTooltip"], [1, "svg-17px", 3, "svgIcon"], ["svgIcon", "clock2"], ["svgIcon", "flag-circle", 1, "svg-17px"], [1, "repairType-custom-class", 3, "svgIcon"], [3, "svgIcon"], [1, "due-date-span", 2, "margin-top", "6px"], [1, "no-data-wrapper"], [1, "no-data-content"], ["src", "assets/img/no-data.png", "alt", ""]], template: function WorkflowComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "directions_car");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "xaCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, WorkflowComponent_chq_button_24_Template, 1, 1, "chq-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, WorkflowComponent_div_25_Template, 8, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, WorkflowComponent_div_26_Template, 9, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-sidenav-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-sidenav", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, " Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](29); return _r3.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "chq-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function WorkflowComponent_Template_chq_input_controlOutput_40_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "chq-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("controlOutput", function WorkflowComponent_Template_chq_input_controlOutput_43_listener($event) { return ctx.onFormUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "chq-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_chq_button_click_47_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "chq-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function WorkflowComponent_Template_chq_button_click_49_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 18, "current_date"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx.current_date_format(), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 20, "last_refreshed"), ": ", ctx.LastRefreshedDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.totalCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBindV"](23, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](28, _c1, ctx.totalCost, ctx.i18n.currencySymbol, ctx.i18n.digitsInfo, ctx.i18n.locale, ctx.i18n.position)));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chqPermission", "workflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.totalCost > 0 && ctx.totalCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.workflowData.length === 0 || ctx.totalCost === 0 && ctx.totalCount === 0) && !ctx.CallingAPI);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", "over")("position", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx.filterModal[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("inputModel", ctx.filterModal[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx.applyButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonModel", ctx.resetButton);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_5__.HasPermissionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenav, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_6__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_8__.CustomloaderComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _helper_pipe_xa_currency_xa_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.XaCurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe], styles: [".mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  z-index: 501 !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .mat-drawer-backdrop {\n  position: fixed;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav.filter-sidenav[_ngcontent-%COMP%] {\n  background-color: #F1F2F6;\n  width: 400px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  padding: calc(15px + 0.8vw);\n  padding-bottom: calc(55px + 0.8vw);\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 20px;\n  gap: 20px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 74px;\n  width: 74px;\n  max-width: 95%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .span-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 14px;\n  line-height: 14px;\n  color: var(--xa-black-medium);\n  text-transform: none;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   hr.no-line[_ngcontent-%COMP%] {\n  border: none;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .two-per-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 133px !important;\n  width: auto !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 400px;\n  background-color: #F1F2F6;\n  z-index: 500;\n  height: 68px;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 92%;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   .customer-list-w[_ngcontent-%COMP%]     .checkbox-wrapper label {\n  display: flex;\n  align-items: center;\n}\n.mat-drawer-container[_ngcontent-%COMP%]     .workflow-customer-item .email {\n  display: block;\n  font-style: italic;\n  opacity: 0.7;\n}\n.workflow-table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -25px;\n  background-color: var(--xa-popup-light-gray);\n  display: contents;\n}\n.workflow-table[_ngcontent-%COMP%]   .workflow-table-thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n  background-color: var(--xa-popup-light-gray);\n}\n.workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#1A223333 40%, rgba(255, 255, 255, 0) 0%);\n  background-position: top right;\n  background-size: 2px 35px;\n  width: 195px;\n  background-repeat: repeat-y;\n}\n.workflow-table[_ngcontent-%COMP%]   .right-border[_ngcontent-%COMP%]:last-child {\n  background-size: 0px;\n  padding-right: 0px;\n}\n.workflow-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  min-height: 330px;\n}\n.workflow-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 100px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 13px 14px;\n  margin: 16px auto;\n  margin-top: 0px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n.workflow-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .workflow-header-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0px;\n}\n.workflow-table[_ngcontent-%COMP%]   th.Green[_ngcontent-%COMP%] {\n  background-color: var(--xa-green-medium);\n}\n.workflow-table[_ngcontent-%COMP%]   th.Red[_ngcontent-%COMP%] {\n  background-color: var(--xa-green-medium);\n}\n.workflow-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.workflow-details-card[_ngcontent-%COMP%] {\n  width: 160px;\n  border-radius: 10px;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  font-size: 10px;\n  margin: auto;\n  margin-bottom: 20px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .detail-card-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: auto;\n  color: black;\n  text-align: center;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.workflow-details-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  max-height: 77px;\n  min-height: 77px;\n  object-fit: contain;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .workflow-repair-items[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n  line-height: 4px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .repairType-custom-class[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 18px;\n}\n.workflow-details-card[_ngcontent-%COMP%]   .due-date-span[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n  float: left;\n  padding-left: 3px;\n}\n.rounded-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 2px;\n  font-weight: bold;\n  margin-right: 10px;\n  position: relative;\n  left: 40%;\n}\n.workflow-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 76px - (calc(58px + 1.6vw)));\n}\n.workflow-container[_ngcontent-%COMP%]   .fx-0[_ngcontent-%COMP%]   .date-filter-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 15px 30px;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n.workflow-container[_ngcontent-%COMP%]   .no-data-wrapper[_ngcontent-%COMP%]   .no-data-content[_ngcontent-%COMP%] {\n  display: inline-grid;\n  justify-items: center;\n  color: var(--xa-dark-gray);\n  grid-gap: 8px;\n  gap: 8px;\n}\n.svg-17px[_ngcontent-%COMP%] {\n  width: 17px;\n}\n.main-content[_ngcontent-%COMP%]   .addenda-container[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n}\nspan.text-muted[_ngcontent-%COMP%] {\n  color: var(--xa-dark-gray);\n}\n.current-data[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.updated-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFHSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBRFI7QUFHUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQURaO0FBSVE7RUFDSSxrQkFBQTtBQUZaO0FBS1E7RUFDSSwyQkFBQTtFQUNBLGtDQUFBO0FBSFo7QUFNUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQU1ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKaEI7QUFRZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU5wQjtBQVFvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTnhCO0FBWVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQVZaO0FBWWdCO0VBQ0ksbUJBQUE7QUFWcEI7QUFhZ0I7RUFDSSxlQUFBO0FBWHBCO0FBYW9CO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBWHhCO0FBYXdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFYNUI7QUFrQndCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFoQjVCO0FBc0JZO0VBQ0ksY0FBQTtBQXBCaEI7QUFzQmdCO0VBQ0ksWUFBQTtBQXBCcEI7QUF3Qlk7RUFDSSxXQUFBO0FBdEJoQjtBQTBCZ0I7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0FBeEJwQjtBQTZCUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUEzQlo7QUE2Qlk7RUFDSSxVQUFBO0FBM0JoQjtBQWdDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQTlCWjtBQW9DUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFsQ1o7QUF3Q0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FBckNKO0FBdUNJO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0FBckNSO0FBeUNJO0VBQ0ksMkVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBdkNSO0FBMENJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQXhDUjtBQTZDUTtFQUNJLGlCQUFBO0FBM0NaO0FBK0NJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBN0NSO0FBZ0RJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBOUNSO0FBZ0RRO0VBQ0ksWUFBQTtBQTlDWjtBQWlEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBL0NaO0FBbURJO0VBQ0ksd0NBQUE7QUFqRFI7QUFvREk7RUFDSSx3Q0FBQTtBQWxEUjtBQXFESTtFQUNJLG1CQUFBO0FBbkRSO0FBdURBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFwREo7QUFzREk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFwRFI7QUF1REk7RUFDSSxrQkFBQTtBQXJEUjtBQXdESTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBdERSO0FBeURJO0VBQ0ksZUFBQTtBQXZEUjtBQTBESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBeERSO0FBMERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF4RFo7QUEyRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXpEWjtBQTZESTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBM0RSO0FBK0RBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUE1REo7QUFnRUE7RUFDSSxpREFBQTtBQTdESjtBQWlFUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUEvRFo7QUFtRUk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBakVSO0FBbUVRO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUFqRVo7QUFzRUE7RUFDSSxXQUFBO0FBbkVKO0FBcUVBO0VBQ0ksOEJBQUE7QUFsRUo7QUFxRUE7RUFDSSwwQkFBQTtBQWxFSjtBQXFFQTtFQUNJLGVBQUE7QUFsRUo7QUFxRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFsRUoiLCJmaWxlIjoid29ya2Zsb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgei1pbmRleDogNTAxICFpbXBvcnRhbnQ7XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItYmFja2Ryb3B7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB9XG5cbiAgICAubWF0LXNpZGVuYXYge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcblxuICAgICAgICAmLmZpbHRlci1zaWRlbmF2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjY7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogY2FsYygxNXB4ICsgMC44dncpO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNTVweCArIDAuOHZ3KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcblxuICAgICAgICAgICAgICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgLmlucHV0LWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDc0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Bhbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcblxuICAgICAgICAgICAgICAgICYubm8tbGluZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zbGlkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHdvLXBlci1yb3cge1xuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMzNweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkY2O1xuICAgICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICAgICAgaGVpZ2h0OiA2OHB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY3VzdG9tZXItbGlzdC13IHtcbiAgICAgICAgOjpuZy1kZWVwIC5jaGVja2JveC13cmFwcGVyIGxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIDo6bmctZGVlcCAud29ya2Zsb3ctY3VzdG9tZXItaXRlbSBcbiAgICB7XG4gICAgICAgIC5lbWFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi53b3JrZmxvdy10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XG4gICAgZGlzcGxheTogY29udGVudHM7XG5cbiAgICAud29ya2Zsb3ctdGFibGUtdGhlYWR7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1wb3B1cC1saWdodC1ncmF5KTtcbiAgICB9XG5cbiAgICBcbiAgICAucmlnaHQtYm9yZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxQTIyMzMzMyA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMnB4IDM1cHg7XG4gICAgICAgIHdpZHRoOiAxOTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIH1cblxuICAgIC5yaWdodC1ib3JkZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgfVxuXG5cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgdGggLndvcmtmbG93LWhlYWRlci1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDExNnB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTRweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoLkdyZWVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtZ3JlZW4tbWVkaXVtKTtcbiAgICB9XG5cbiAgICB0aC5SZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ncmVlbi1tZWRpdW0pO1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG59XG5cbi53b3JrZmxvdy1kZXRhaWxzLWNhcmQge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmRldGFpbC1jYXJkLWxpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmltZy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA3N3B4O1xuICAgICAgICBtaW4taGVpZ2h0OiA3N3B4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgIC53b3JrZmxvdy1yZXBhaXItaXRlbXN7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0cHg7XG5cbiAgICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlcGFpclR5cGUtY3VzdG9tLWNsYXNze1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZHVlLWRhdGUtc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgfVxufVxuXG4ucm91bmRlZC1pY29uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNDAlO1xufVxuXG5cbi53b3JrZmxvdy1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCAtIChjYWxjKDU4cHggKyAxLjZ2dykpKTtcblxuICAgIC5meC0wIHtcblxuICAgICAgICAuZGF0ZS1maWx0ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5vLWRhdGEtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG5cbiAgICAgICAgLm5vLWRhdGEtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdmctMTdweHtcbiAgICB3aWR0aDogMTdweDtcbn1cbi5tYWluLWNvbnRlbnQgLmFkZGVuZGEtY29udGFpbmVye1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuc3Bhbi50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcbn1cblxuLmN1cnJlbnQtZGF0YSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4udXBkYXRlZC1kYXRlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 35493:
/*!******************************************************!*\
  !*** ./src/app/services/message/messages.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesService": function() { return /* binding */ MessagesService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _file_service_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file-service/file.service */ 25001);




class MessagesService {
    /**
     * constructor
     * @param http
     */
    constructor(http, fileService) {
        this.http = http;
        this.fileService = fileService;
    }
    /**
     * send approval message
     */
    sendApprovalMessage(data, repairGuid) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/message/${repairGuid}/estimate-approval`;
        return this.http.post(url, data);
    }
    /**
     * get message template
     */
    getMessageTemplate(repairId, domainId, id) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.xaAggregationApi}/repaircommunicationtemplate/${repairId}/${domainId}/${id}`;
        return this.http.get(url);
    }
    /**
     * set message
     */
    setMessage(body, repairId) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/message/${repairId}/send-message`;
        return this.http.post(url, body);
    }
    /**
     * send customer message
     */
    sendFreeCommunicationMessage(emailBody, reportProgress, observe) {
        var _a;
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.messageApi}/Message/email`;
        const formData = new FormData();
        formData.append('ToEmail', (_a = emailBody.email) === null || _a === void 0 ? void 0 : _a.join(','));
        if (emailBody.cc) {
            formData.append('CCEmail', emailBody.cc);
        }
        formData.append('Content', emailBody.message);
        formData.append('Subject', emailBody.subject);
        formData.append('ObjectId', emailBody.objectId);
        if (emailBody.files && emailBody.files.length > 0) {
            emailBody.files.forEach((file) => {
                formData.append('files', file);
            });
        }
        return this.fileService.uploadFile(url, formData, reportProgress, observe);
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_file_service_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService)); };
MessagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 23864:
/*!*******************************************************!*\
  !*** ./src/app/services/outbound/outbound.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutboundService": function() { return /* binding */ OutboundService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class OutboundService {
    /**
     * @constructor
     * @param {HttpClient} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * getDeparturesDetails
     * @param {string} query
     */
    getDeparturesDetails(query) {
        //return of(departuresData)
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/departures?${query}`;
        return this.http.get(url);
    }
    /**
     * setPickupDate
     * @param {string} date
     * @param {string} repairId
     */
    setPickupDate(repairId, date, isPickedup) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/departures/${repairId}/pickupdate`;
        return this.http.put(url, { 'pickUpDate': date, 'isPickedUp': isPickedup });
    }
    /**
    * setPickupDate
    * @param {string} date
    * @param {string} repairId
    */
    getTaskDetails(repairId, jobId) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/departures/tasks/${repairId}/${jobId}`;
        return this.http.get(url);
    }
    /**
     * setRepairStatusComplete
     * @param {string} repairId
     */
    setRepairStatusComplete(repairId) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/repair/${repairId}/status`;
        return this.http.put(url, { 'status': 'Complete', 'reason': 'repair complete' });
    }
}
OutboundService.ɵfac = function OutboundService_Factory(t) { return new (t || OutboundService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
OutboundService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OutboundService, factory: OutboundService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71923:
/*!*******************************************************!*\
  !*** ./src/app/services/workflow/workflow.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowService": function() { return /* binding */ WorkflowService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class WorkflowService {
    /**
     * @constructor
     * @param {HttpClient} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
       * getWaterfallDetails
       * @returns {Observable<any>}
       */
    getWorkflowDetails() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/waterfall`;
        return this.http.get(url);
    }
    // eslint-disable-next-line require-jsdoc
    getWorkflowDetailsWithQuery(query) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/odata/waterfall${query}`;
        return this.http.get(url);
    }
    /**
   * getDraftCustomer
   * @returns Observable
   */
    getCustomer(id) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/waterfallcustomer?$filter=OrgId eq ${id}`;
        return this.http.get(url);
    }
    /**
     * update attention
     * @param repairguid
     * @param obj
     * @returns
     */
    updateAttentionRequired(repairguid) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/repair/${repairguid}`;
        const obj = [{
                'path': 'isAttentionRequired',
                'op': 'replace',
                'value': 'false'
            }];
        return this.http.patch(url, obj);
    }
}
WorkflowService.ɵfac = function WorkflowService_Factory(t) { return new (t || WorkflowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
WorkflowService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WorkflowService, factory: WorkflowService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_repair_repair_module_ts-es2015.js.map