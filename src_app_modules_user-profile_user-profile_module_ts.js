"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_user-profile_user-profile_module_ts"],{

/***/ 98625:
/*!****************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialogs/edit-mobile-dialog/edit-mobile-dialog.component */ 26545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_core_core_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/core/core.service.service */ 85567);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











const _c0 = ["uploader"];
function UserProfileComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function UserProfileComponent_img_5_Template_img_error_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.hasAvatar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.userDetail == null ? null : ctx_r0.userDetail.userProfileImageBlobUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function UserProfileComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.avatarText);
} }
function UserProfileComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_div_12_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "delete");
} }
function UserProfileComponent_div_17_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 44);
} }
function UserProfileComponent_div_17_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 45);
} }
function UserProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UserProfileComponent_div_17_img_3_Template, 1, 0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UserProfileComponent_div_17_img_4_Template, 1, 0, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", role_r15.name, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", role_r15.automotiveServiceName === "Carheal Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", role_r15.automotiveServiceName === "Addenda Repair");
} }
function UserProfileComponent_div_19_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r18.userDetail == null ? null : ctx_r18.userDetail.countryCode, "-");
} }
function UserProfileComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UserProfileComponent_div_19_span_3_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.userDetail == null ? null : ctx_r6.userDetail.countryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.userDetail == null ? null : ctx_r6.userDetail.phoneNumber == null ? null : ctx_r6.userDetail.phoneNumber.replace(ctx_r6.userDetail == null ? null : ctx_r6.userDetail.countryCode, ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "verified"));
} }
function UserProfileComponent_div_21_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r19.userDetail == null ? null : ctx_r19.userDetail.organizationDetail == null ? null : ctx_r19.userDetail.organizationDetail.name);
} }
function UserProfileComponent_div_21_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](", ", ctx_r20.userDetail == null ? null : ctx_r20.userDetail.organizationDetail == null ? null : ctx_r20.userDetail.organizationDetail.cityName, "");
} }
function UserProfileComponent_div_21_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](", ", ctx_r21.userDetail == null ? null : ctx_r21.userDetail.organizationDetail == null ? null : ctx_r21.userDetail.organizationDetail.countryName, "");
} }
function UserProfileComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserProfileComponent_div_21_span_6_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UserProfileComponent_div_21_span_7_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UserProfileComponent_div_21_span_8_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, "organization")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.countryName);
} }
function UserProfileComponent_div_22_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r22.userDetail == null ? null : ctx_r22.userDetail.managerDetail == null ? null : ctx_r22.userDetail.managerDetail.userProfileImageBlobUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function UserProfileComponent_div_22_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r24.userDetail == null ? null : ctx_r24.userDetail.managerDetail == null ? null : ctx_r24.userDetail.managerDetail.avatarText);
} }
function UserProfileComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UserProfileComponent_div_22_img_8_Template, 1, 1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, UserProfileComponent_div_22_ng_template_9_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "direct_manager"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.firstName, " ", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.userProfileImageBlobUrl)("ngIfElse", _r23);
} }
function UserProfileComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_div_50_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.openOtpPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "add_mobile_number"));
} }
function UserProfileComponent_label_51_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r27.userDetail == null ? null : ctx_r27.userDetail.countryCode, "-");
} }
function UserProfileComponent_label_51_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserProfileComponent_label_51_span_1_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_label_51_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.changePhoneNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.userDetail == null ? null : ctx_r10.userDetail.countryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.userDetail == null ? null : ctx_r10.userDetail.phoneNumber == null ? null : ctx_r10.userDetail.phoneNumber.replace(ctx_r10.userDetail == null ? null : ctx_r10.userDetail.countryCode, ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "edit");
} }
const _c1 = function (a0) { return { "centered-edit": a0 }; };
class UserProfileComponent {
    /**
     * constructor
     * @param commonService
     */
    constructor(commonService, coreService, authService, monitorService, dialog) {
        this.commonService = commonService;
        this.coreService = coreService;
        this.authService = authService;
        this.monitorService = monitorService;
        this.dialog = dialog;
        this.resetButtonModel = {
            label: '',
            type: 'primary'
        };
        this.editMobileNumber = {
            label: '',
            type: 'outline'
        };
        this.hasAvatar = true;
        this.commonService.reloadUser.subscribe((reload) => {
            if (reload) {
                this.getProfile();
            }
        });
    }
    /**
     * on init
     */
    ngOnInit() {
        this.monitorService.logEvent('ngOnInit', ['ChqUserProfileComponent', 'addenda-quote']);
        this.resetButtonModel = {
            label: 'Reset Password',
            type: 'primary',
            icon: 'refresh',
            onclick: this.resetPassword.bind(this)
        };
        this.editMobileNumber = {
            label: 'Edit mobile number',
            type: 'outline',
            icon: 'edit',
            onclick: this.changePhoneNumber.bind(this)
        };
        if (this.commonService.userProfileLoading) {
            this.commonService.showLoading();
            this.commonService.userProfileData.subscribe({
                next: (res) => {
                    if (res) {
                        this.handleUserProfileData(res);
                        this.commonService.hideLoading();
                    }
                },
                error: () => {
                    this.getProfile();
                }
            });
        }
        else {
            this.getProfile();
        }
    }
    /**
     * handle user profile data
     */
    handleUserProfileData(res) {
        var _a, _b, _c, _d, _e, _f, _g;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (res === null || res === void 0 ? void 0 : res.data.userProfileImageBlobUrl) {
                this.commonService.avatar.next({
                    image: res === null || res === void 0 ? void 0 : res.data.userProfileImageBlobUrl
                });
            }
            this.userDetail = res.data;
            if (!this.userDetail.phoneNumber) {
                this.editMobileNumber.type = 'disabled-outline';
            }
            if ((_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.managerDetail) {
                const avatarText = `${(_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.managerDetail) === null || _c === void 0 ? void 0 : _c.firstName.charAt(0)}${(_e = (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.managerDetail) === null || _e === void 0 ? void 0 : _e.lastName.charAt(0)}`;
                this.userDetail.managerDetail.avatarText = avatarText;
            }
            this.avatarText = `${(_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.firstName.charAt(0)}${(_g = this.userDetail) === null || _g === void 0 ? void 0 : _g.lastName.charAt(0)}`;
        });
    }
    /**
     * open change phonenumber dialog
     */
    changePhoneNumber() {
        this.monitorService.logEvent('changePhoneNumber', ['ChqUserProfileComponent', 'addenda-quote']);
        const dialogRef = this.dialog.open(src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EditMobileDialogComponent, {
            data: this.userDetail,
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe();
    }
    /**
     * get user profile info
     */
    getProfile() {
        this.commonService.showLoading();
        this.monitorService.logEvent('getProfile', ['ChqUserProfileComponent', 'addenda-quote']);
        this.coreService.getUserProfile().subscribe({
            next: (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                var _a, _b, _c, _d, _e, _f, _g;
                if (res === null || res === void 0 ? void 0 : res.data.userProfileImageBlobUrl) {
                    this.commonService.avatar.next({
                        image: res === null || res === void 0 ? void 0 : res.data.userProfileImageBlobUrl
                    });
                }
                this.userDetail = res.data;
                if (!this.userDetail.phoneNumber) {
                    this.editMobileNumber.type = 'disabled-outline';
                }
                if ((_a = this.userDetail) === null || _a === void 0 ? void 0 : _a.managerDetail) {
                    const avatarText = `${(_c = (_b = this.userDetail) === null || _b === void 0 ? void 0 : _b.managerDetail) === null || _c === void 0 ? void 0 : _c.firstName.charAt(0)}${(_e = (_d = this.userDetail) === null || _d === void 0 ? void 0 : _d.managerDetail) === null || _e === void 0 ? void 0 : _e.lastName.charAt(0)}`;
                    this.userDetail.managerDetail.avatarText = avatarText;
                }
                this.avatarText = `${(_f = this.userDetail) === null || _f === void 0 ? void 0 : _f.firstName.charAt(0)}${(_g = this.userDetail) === null || _g === void 0 ? void 0 : _g.lastName.charAt(0)}`;
                this.commonService.hideLoading();
                this.commonService.userProfileData.next(res);
            }),
            error: () => {
                this.commonService.hideLoading();
            }
        });
    }
    /**
     * open labour rate popup
     */
    openOtpPopup() {
        this.monitorService.logEvent('openOtpPopup', ['ChqUserProfileComponent', 'addenda-quote']);
        const dialogRef = this.dialog.open(src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EditMobileDialogComponent, {
            data: { 'phoneNumber': '', 'isPhoneNumberAddition': true },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe();
    }
    /**
     * handles reset button click
     * returns void
     */
    resetPassword() {
        this.monitorService.logEvent('resetPassword', ['ChqUserProfileComponent', 'addenda-quote']);
        window.location.href = this.authService.resetPasswordRoute();
    }
    /**
     * handle file upload
     * @param event
     */
    handleUpload(event) {
        const currentFile = event.target.files || event.srcElement.files;
        this.monitorService.logEvent('handleUpload', ['ChqUserProfileComponent', 'addenda-quote', {
                event
            }]);
        if (currentFile !== null && currentFile !== '' && currentFile.length > 0) {
            if (!this.checkFileSize(currentFile[0])) {
                const message = 'Image size is above the allowed 5MB limit, try again with a smaller image';
                this.commonService.showToast(0, message);
                this.uploader.nativeElement.value = null;
                return;
            }
            if (!this.isValidImageFile(currentFile[0].name)) {
                const message = 'Uploaded file type is not supported';
                this.commonService.showToast(0, message);
                this.uploader.nativeElement.value = null;
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(currentFile[0]);
            reader.onload = (_event) => {
                this.uploadImage(reader.result, currentFile[0].name, currentFile[0]);
            };
        }
        else {
            this.uploader.nativeElement.value = null;
            return;
        }
    }
    /**
     * checks file size
     * @param blob
     * @returns boolean
     */
    checkFileSize(img) {
        this.monitorService.logEvent('checkFileSize', ['ChqUserProfileComponent', 'addenda-quote', {
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
        this.monitorService.logEvent('isValidImageFile', ['ChqUserProfileComponent', 'addenda-quote', {
                fileName: filename
            }]);
        if (regex.test(filename)) {
            const extension = filename.split('.').pop();
            return this.commonService.allowExtension.includes(extension === null || extension === void 0 ? void 0 : extension.toLowerCase());
        }
        return false;
    }
    /**
     * upload image to server
     * @param image
     * @param fileName
     * @param file
     */
    uploadImage(image, fileName, file) {
        this.monitorService.logEvent('uploadImage', ['ChqNewPhotosComponent', 'addenda-quote', {
                fileName: fileName
            }]);
        this.commonService.showLoading();
        this.coreService.uploadProfileImage(file).subscribe({
            next: (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (res) {
                    this.userDetail.userProfileImageBlobUrl = res === null || res === void 0 ? void 0 : res.data.userImageBlobUrl;
                    this.hasAvatar = true;
                    this.commonService.avatar.next({
                        image: res === null || res === void 0 ? void 0 : res.data.userImageBlobUrl
                    });
                }
                this.uploader.nativeElement.value = null;
                this.commonService.hideLoading();
            }),
            error: () => {
                this.uploader.nativeElement.value = null;
                this.commonService.hideLoading();
            }
        });
    }
    /**
     * delete dialog
     */
    delete() {
        this.monitorService.logEvent('delete', ['ChqNewPhotosComponent', 'addenda-quote']);
        this.commonService.openDeleteDialog()
            .afterClosed().subscribe((data) => {
            if (data) {
                this.deleteProfilePic();
            }
        });
    }
    /**
   * delete profile picutre
   */
    deleteProfilePic() {
        this.monitorService.logEvent('deleteProfilePic', ['ChqNewPhotosComponent', 'addenda-quote']);
        this.commonService.showLoading();
        this.coreService.deleteUserProfile().subscribe({
            next: (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.userDetail.userProfileImageBlobUrl = null;
                this.commonService.avatar.next({
                    image: null,
                    avatar: this.avatarText
                });
                this.commonService.hideLoading();
            }),
            error: () => {
                this.commonService.hideLoading();
            }
        });
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_core_core_service_service__WEBPACK_IMPORTED_MODULE_2__.CoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
UserProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["user-profile"]], viewQuery: function UserProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.uploader = _t.first);
    } }, decls: 62, vars: 37, consts: [[1, "main"], [1, "user-container"], [1, "user-info"], [1, "user-profile"], [1, "user-profile-image"], [3, "src", "error", 4, "ngIf", "ngIfElse"], ["text", ""], ["hidden", "", "type", "file", "accept", "image/png, image/jpg, image/jpeg", 3, "change"], ["uploader", ""], [1, "edit-profile-picture", 3, "ngClass"], ["aria-hidden", "false", "aria-label", "edit icon", 3, "svgIcon", "click"], ["class", "delete-profile-picture", 4, "ngIf"], [1, "user-desc"], [1, "role-container", "fx-row"], ["class", "role fx-col", 4, "ngFor", "ngForOf"], [1, "user-contact"], ["class", "contact-item no-gap", 4, "ngIf"], [1, "organisation-info"], ["class", "organisation", 4, "ngIf"], ["class", "manager", 4, "ngIf"], [1, "detail-container"], [1, "div-row"], [1, "contact-item", "new-call-button", "no-gap", 3, "click"], ["aria-hidden", "false", "aria-label", "call icon", 3, "svgIcon"], [1, "detail-info"], [1, "info-item", "first"], [1, "title"], [1, "value"], [1, "info-item", "second"], [1, "info-item", "third"], ["class", "contact-item new-call-button no-gap", 3, "click", 4, "ngIf"], ["class", "value", 4, "ngIf"], [1, "info-item", "fourth"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda.png"], [3, "src", "error"], [1, "delete-profile-picture"], ["aria-hidden", "false", "aria-label", "delete icon", 3, "svgIcon", "click"], [1, "role", "fx-col"], [1, "user-post"], ["src", "assets/img/addenda-quote.png", 4, "ngIf"], ["src", "assets/img/addenda-repair.png", 4, "ngIf"], ["src", "assets/img/addenda-quote.png"], ["src", "assets/img/addenda-repair.png"], [1, "contact-item", "no-gap"], [4, "ngIf"], ["aria-hidden", "false", "aria-label", "call icon", 1, "icon-left", 3, "svgIcon"], [1, "verify"], [1, "organisation"], [1, "manager"], [1, "manager-post"], [1, "manager-profile"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], ["aria-hidden", "false", "aria-label", "call icon", 1, "plus-icon", 3, "svgIcon"], ["aria-hidden", "false", "aria-label", "call icon", 1, "edit-icon", 3, "svgIcon", "click"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UserProfileComponent_img_5_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserProfileComponent_ng_template_6_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UserProfileComponent_Template_input_change_8_listener($event) { return ctx.handleUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, UserProfileComponent_div_12_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, UserProfileComponent_div_17_Template, 5, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, UserProfileComponent_div_19_Template, 9, 7, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, UserProfileComponent_div_21_Template, 9, 8, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, UserProfileComponent_div_22_Template, 11, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_28_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, UserProfileComponent_div_50_Template, 5, 4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, UserProfileComponent_label_51_Template, 5, 3, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl) && ctx.hasAvatar)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](35, _c1, !(ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.userDetail == null ? null : ctx.userDetail.firstName, " ", ctx.userDetail == null ? null : ctx.userDetail.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.userDetail == null ? null : ctx.userDetail.roleDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) && (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.organizationDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.managerDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 23, "personal_details"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 25, "reset_password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 27, "first_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](43, 29, "last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 31, "mobile_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) || (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) && (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 33, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.email);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe], styles: [".main[_ngcontent-%COMP%] {\n  padding: 32px 0;\n}\n\n.user-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid rgba(26, 34, 51, 0.2);\n  padding-bottom: 20px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 32px;\n  gap: 32px;\n  align-items: center;\n  position: relative;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture.centered-edit[_ngcontent-%COMP%] {\n  left: 45px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -7px;\n  left: 30px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  height: 15px !important;\n  width: 15px !important;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .delete-profile-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -7px;\n  left: 55px;\n  background: var(--xa-red);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .delete-profile-picture[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  height: 12px !important;\n  width: 12px !important;\n  display: flex;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 110px;\n  height: 110px;\n  background: rgba(26, 34, 51, 0.1);\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 110px;\n  width: 110px;\n  border-radius: 50%;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 35px;\n  margin-bottom: 8px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .user-post[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--xa-dark-gray);\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  grid-gap: 45px;\n  gap: 45px;\n  margin-top: 18px;\n}\n\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .no-gap[_ngcontent-%COMP%] {\n  grid-gap: 5px;\n  gap: 5px;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .organisation[_ngcontent-%COMP%] {\n  text-align: end;\n  margin-bottom: 36px;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .organisation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  grid-gap: 15px;\n  gap: 15px;\n  text-align: end;\n  justify-content: flex-end;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-post[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-post[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: rgba(26, 34, 51, 0.1);\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  object-fit: cover;\n}\n\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  grid-gap: 15px;\n  gap: 15px;\n}\n\n.contact-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--xa-dark-gray);\n}\n\n.contact-item[_ngcontent-%COMP%]   .icon-left[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.contact-item[_ngcontent-%COMP%]   .verify[_ngcontent-%COMP%] {\n  color: var(--xa-blue);\n  cursor: pointer;\n}\n\n.new-call-button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 12px;\n  margin-top: 4px;\n  grid-gap: 10px;\n  gap: 10px;\n  height: 30px;\n  border: 1px solid var(--xa-light-gray);\n  filter: drop-shadow(0px 1px 3px var(--xa-box-shadow));\n  border-radius: 8px;\n}\n\n.new-call-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-black) !important;\n}\n\n.new-call-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: var(--xa-black) !important;\n}\n\n.detail-container[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  border-bottom: 1px solid rgba(26, 34, 51, 0.2);\n}\n\n.detail-container[_ngcontent-%COMP%]   .div-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n}\n\n.detail-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  grid-gap: 120px;\n  gap: 120px;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 14px;\n  display: flex;\n  margin-top: 4px;\n  justify-content: inherit;\n  align-items: center;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-black) !important;\n}\n\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  margin-left: 26px;\n}\n\n@media (max-width: 850px) {\n  .new-call-button[_ngcontent-%COMP%] {\n    border: 1px solid var(--xa-gray);\n  }\n\n  .detail-info[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    grid-gap: 30px !important;\n    gap: 30px !important;\n  }\n  .detail-info[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .detail-info[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%] {\n    min-width: 200px;\n  }\n  .detail-info[_ngcontent-%COMP%]   .fourth[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n}\n\n@media (max-width: 840px) {\n  .user-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    width: 100%;\n  }\n}\n\n.role-container[_ngcontent-%COMP%] {\n  grid-gap: 20px;\n  gap: 20px;\n}\n\n.role-container[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 29px;\n}\n\n.role[_ngcontent-%COMP%]:not(:first-child) {\n  border-left: 1px solid var(--xa-light-gray);\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUNRO0VBQ0ksVUFBQTtBQUNaOztBQUVRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUFaOztBQUVZO0VBQ0ksZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQWhCOztBQUlRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUZaOztBQUlZO0VBQ0ksZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUZoQjs7QUFPWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTGhCOztBQU9nQjtFQUNJLGVBQUE7QUFMcEI7O0FBUWdCO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTnBCOztBQVlZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWaEI7O0FBYVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBWGhCOztBQWNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQVpoQjs7QUFlWTtFQUNJLGFBQUE7RUFBQSxRQUFBO0FBYmhCOztBQW1CUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQWpCWjs7QUFtQlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFqQmhCOztBQXNCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBcEJaOztBQXVCZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFyQnBCOztBQXdCZ0I7RUFDSSxlQUFBO0FBdEJwQjs7QUEwQlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBeEJoQjs7QUEwQmdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF4QnBCOztBQTJCZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF6QnBCOztBQWdDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBN0JKOztBQStCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUE3QlI7O0FBZ0NJO0VBQ0ksaUJBQUE7QUE5QlI7O0FBaUNJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBL0JSOztBQW1DQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7O0FBa0NJO0VBQ0ksZ0NBQUE7QUFoQ1I7O0FBbUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQWpDUjs7QUFzQ0E7RUFDSSxlQUFBO0VBQ0EsOENBQUE7QUFuQ0o7O0FBcUNJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFuQ1I7O0FBc0NJO0VBQ0ksbUJBQUE7QUFwQ1I7O0FBdUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUFBLFVBQUE7QUFyQ1I7O0FBdUNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBckNaOztBQXVDWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQXJDaEI7O0FBd0NZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBdENoQjs7QUF3Q2dCO0VBQ0ksZ0NBQUE7QUF0Q3BCOztBQXlDZ0I7RUFDSSxpQkFBQTtBQXZDcEI7O0FBOENBO0VBQ0k7SUFDSSxnQ0FBQTtFQTNDTjs7RUE4Q0U7SUFDSSw4QkFBQTtJQUNBLHlCQUFBO0lBQUEsb0JBQUE7RUEzQ047RUE2Q007SUFDSSxlQUFBO0VBM0NWO0VBOENNO0lBQ0ksZ0JBQUE7RUE1Q1Y7RUErQ007SUFDSSxnQkFBQTtFQTdDVjtBQUNGOztBQWlEQTtFQUNJO0lBQ0ksc0JBQUE7RUEvQ047RUFpRE07SUFDSSxpQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtFQS9DVjtBQUNGOztBQW1EQTtFQUNJLGNBQUE7RUFBQSxTQUFBO0FBakRKOztBQW1EUTtFQUNJLGdCQUFBO0FBakRaOztBQXNEQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7QUFuREoiLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG59XHJcblxyXG4udXNlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjYsIDM0LCA1MSwgMC4yKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAzMnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuZWRpdC1wcm9maWxlLXBpY3R1cmUuY2VudGVyZWQtZWRpdCB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZWRpdC1wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTdweDtcclxuICAgICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0teGEtd2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZWxldGUtcHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IC03cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDU1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXJlZCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS14YS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLXByb2ZpbGUge1xyXG4gICAgICAgICAgICAudXNlci1wcm9maWxlLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDM0LCA1MSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXItZGVzYyB7XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1wb3N0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1jb250YWN0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5vLWdhcCB7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3JnYW5pc2F0aW9uLWluZm8ge1xyXG4gICAgICAgIC5vcmdhbmlzYXRpb24ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcblxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFuYWdlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMTVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgLm1hbmFnZXItcG9zdCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWFuYWdlci1wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAzNCwgNTEsIDAuMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTVweDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24tbGVmdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcmlmeSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsdWUpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLm5ldy1jYWxsLWJ1dHRvbiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAzcHggdmFyKC0teGEtYm94LXNoYWRvdykpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgICBmaWxsOiB2YXIoLS14YS1ibGFjaykgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmRldGFpbC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjRweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjYsIDM0LCA1MSwgMC4yKTtcclxuXHJcbiAgICAuZGl2LXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBnYXA6IDEyMHB4O1xyXG5cclxuICAgICAgICAuaW5mby1pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS14YS1ibGFjaykgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZWRpdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAubmV3LWNhbGwtYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS14YS1ncmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsLWluZm8ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBnYXA6IDMwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgLnNlY29uZCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aGlyZCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3VydGgge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgICAudXNlci1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC5vcmdhbmlzYXRpb24taW5mbyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb2xlLWNvbnRhaW5lciB7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICAucm9sZSB7ICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJvbGU6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS14YS1saWdodC1ncmF5KTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 85745:
/*!*************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileModule": () => (/* binding */ UserProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.component */ 98625);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    {
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent,
        resolve: { version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__.VersionControlResolver }
    }
];
class UserProfileModule {
}
UserProfileModule.ɵfac = function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); };
UserProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserProfileModule });
UserProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule] }); })();


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


/***/ })

}]);
//# sourceMappingURL=src_app_modules_user-profile_user-profile_module_ts.js.map