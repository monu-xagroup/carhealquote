"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_user-profile_user-profile_module_ts"],{

/***/ 48403:
/*!****************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs/edit-mobile-dialog/edit-mobile-dialog.component */ 26545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_core_core_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/core/core.service.service */ 85567);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











const _c0 = ["uploader"];
function UserProfileComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function UserProfileComponent_img_5_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.hasAvatar = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.userDetail == null ? null : ctx_r0.userDetail.userProfileImageBlobUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function UserProfileComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.avatarText);
  }
}
function UserProfileComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_div_12_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "delete");
  }
}
function UserProfileComponent_div_17_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 44);
  }
}
function UserProfileComponent_div_17_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 45);
  }
}
function UserProfileComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UserProfileComponent_div_17_img_3_Template, 1, 0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UserProfileComponent_div_17_img_4_Template, 1, 0, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", role_r15.name, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", role_r15.automotiveServiceName === "Carheal Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", role_r15.automotiveServiceName === "Addenda Repair");
  }
}
function UserProfileComponent_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r18.userDetail == null ? null : ctx_r18.userDetail.countryCode, "-");
  }
}
function UserProfileComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UserProfileComponent_div_19_span_3_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.userDetail == null ? null : ctx_r6.userDetail.countryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.userDetail == null ? null : ctx_r6.userDetail.phoneNumber == null ? null : ctx_r6.userDetail.phoneNumber.replace(ctx_r6.userDetail == null ? null : ctx_r6.userDetail.countryCode, ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 5, "verified"));
  }
}
function UserProfileComponent_div_21_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.userDetail == null ? null : ctx_r19.userDetail.organizationDetail == null ? null : ctx_r19.userDetail.organizationDetail.name);
  }
}
function UserProfileComponent_div_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](", ", ctx_r20.userDetail == null ? null : ctx_r20.userDetail.organizationDetail == null ? null : ctx_r20.userDetail.organizationDetail.cityName, "");
  }
}
function UserProfileComponent_div_21_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](", ", ctx_r21.userDetail == null ? null : ctx_r21.userDetail.organizationDetail == null ? null : ctx_r21.userDetail.organizationDetail.countryName, "");
  }
}
function UserProfileComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UserProfileComponent_div_21_span_6_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, UserProfileComponent_div_21_span_7_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, UserProfileComponent_div_21_span_8_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, "organization")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.userDetail == null ? null : ctx_r7.userDetail.organizationDetail == null ? null : ctx_r7.userDetail.organizationDetail.countryName);
  }
}
function UserProfileComponent_div_22_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 55);
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r22.userDetail == null ? null : ctx_r22.userDetail.managerDetail == null ? null : ctx_r22.userDetail.managerDetail.userProfileImageBlobUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function UserProfileComponent_div_22_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r24.userDetail == null ? null : ctx_r24.userDetail.managerDetail == null ? null : ctx_r24.userDetail.managerDetail.avatarText);
  }
}
function UserProfileComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, UserProfileComponent_div_22_img_8_Template, 1, 1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, UserProfileComponent_div_22_ng_template_9_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, "direct_manager"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.firstName, " ", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.userDetail == null ? null : ctx_r8.userDetail.managerDetail == null ? null : ctx_r8.userDetail.managerDetail.userProfileImageBlobUrl)("ngIfElse", _r23);
  }
}
function UserProfileComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_div_50_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.openOtpPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, "add_mobile_number"));
  }
}
function UserProfileComponent_label_51_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r27.userDetail == null ? null : ctx_r27.userDetail.countryCode, "-");
  }
}
function UserProfileComponent_label_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserProfileComponent_label_51_span_1_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_label_51_Template_mat_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.changePhoneNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.userDetail == null ? null : ctx_r10.userDetail.countryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r10.userDetail == null ? null : ctx_r10.userDetail.phoneNumber == null ? null : ctx_r10.userDetail.phoneNumber.replace(ctx_r10.userDetail == null ? null : ctx_r10.userDetail.countryCode, ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "edit");
  }
}
const _c1 = function (a0) {
  return {
    "centered-edit": a0
  };
};
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
    this.commonService.reloadUser.subscribe(reload => {
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
        next: res => {
          if (res) {
            this.handleUserProfileData(res);
            this.commonService.hideLoading();
          }
        },
        error: () => {
          this.getProfile();
        }
      });
    } else {
      this.getProfile();
    }
  }
  /**
   * handle user profile data
   */
  handleUserProfileData(res) {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (res?.data.userProfileImageBlobUrl) {
        _this.commonService.avatar.next({
          image: res?.data.userProfileImageBlobUrl
        });
      }
      _this.userDetail = res.data;
      if (!_this.userDetail.phoneNumber) {
        _this.editMobileNumber.type = 'disabled-outline';
      }
      if (_this.userDetail?.managerDetail) {
        const avatarText = `${_this.userDetail?.managerDetail?.firstName.charAt(0)}${_this.userDetail?.managerDetail?.lastName.charAt(0)}`;
        _this.userDetail.managerDetail.avatarText = avatarText;
      }
      _this.avatarText = `${_this.userDetail?.firstName.charAt(0)}${_this.userDetail?.lastName.charAt(0)}`;
    })();
  }
  /**
   * open change phonenumber dialog
   */
  changePhoneNumber() {
    this.monitorService.logEvent('changePhoneNumber', ['ChqUserProfileComponent', 'addenda-quote']);
    const dialogRef = this.dialog.open(src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EditMobileDialogComponent, {
      data: this.userDetail,
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe();
  }
  /**
   * get user profile info
   */
  getProfile() {
    var _this2 = this;
    this.commonService.showLoading();
    this.monitorService.logEvent('getProfile', ['ChqUserProfileComponent', 'addenda-quote']);
    this.coreService.getUserProfile().subscribe({
      next: function () {
        var _ref = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (res?.data.userProfileImageBlobUrl) {
            _this2.commonService.avatar.next({
              image: res?.data.userProfileImageBlobUrl
            });
          }
          _this2.userDetail = res.data;
          if (!_this2.userDetail.phoneNumber) {
            _this2.editMobileNumber.type = 'disabled-outline';
          }
          if (_this2.userDetail?.managerDetail) {
            const avatarText = `${_this2.userDetail?.managerDetail?.firstName.charAt(0)}${_this2.userDetail?.managerDetail?.lastName.charAt(0)}`;
            _this2.userDetail.managerDetail.avatarText = avatarText;
          }
          _this2.avatarText = `${_this2.userDetail?.firstName.charAt(0)}${_this2.userDetail?.lastName.charAt(0)}`;
          _this2.commonService.hideLoading();
          _this2.commonService.userProfileData.next(res);
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
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
    const dialogRef = this.dialog.open(src_app_dialogs_edit_mobile_dialog_edit_mobile_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EditMobileDialogComponent, {
      data: {
        'phoneNumber': '',
        'isPhoneNumberAddition': true
      },
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
      reader.onload = _event => {
        this.uploadImage(reader.result, currentFile[0].name, currentFile[0]);
      };
    } else {
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
      return this.commonService.allowExtension.includes(extension?.toLowerCase());
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
    var _this3 = this;
    this.monitorService.logEvent('uploadImage', ['ChqNewPhotosComponent', 'addenda-quote', {
      fileName: fileName
    }]);
    this.commonService.showLoading();
    this.coreService.uploadProfileImage(file).subscribe({
      next: function () {
        var _ref2 = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (res) {
            _this3.userDetail.userProfileImageBlobUrl = res?.data.userImageBlobUrl;
            _this3.hasAvatar = true;
            _this3.commonService.avatar.next({
              image: res?.data.userImageBlobUrl
            });
          }
          _this3.uploader.nativeElement.value = null;
          _this3.commonService.hideLoading();
        });
        return function next(_x2) {
          return _ref2.apply(this, arguments);
        };
      }(),
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
    this.commonService.openDeleteDialog().afterClosed().subscribe(data => {
      if (data) {
        this.deleteProfilePic();
      }
    });
  }
  /**
  * delete profile picutre
  */
  deleteProfilePic() {
    var _this4 = this;
    this.monitorService.logEvent('deleteProfilePic', ['ChqNewPhotosComponent', 'addenda-quote']);
    this.commonService.showLoading();
    this.coreService.deleteUserProfile().subscribe({
      next: function () {
        var _ref3 = (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this4.userDetail.userProfileImageBlobUrl = null;
          _this4.commonService.avatar.next({
            image: null,
            avatar: _this4.avatarText
          });
          _this4.commonService.hideLoading();
        });
        return function next(_x3) {
          return _ref3.apply(this, arguments);
        };
      }(),
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
  return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_core_core_service_service__WEBPACK_IMPORTED_MODULE_3__.CoreService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_5__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
};
UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: UserProfileComponent,
  selectors: [["user-profile"]],
  viewQuery: function UserProfileComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.uploader = _t.first);
    }
  },
  decls: 62,
  vars: 37,
  consts: [[1, "main"], [1, "user-container"], [1, "user-info"], [1, "user-profile"], [1, "user-profile-image"], [3, "src", "error", 4, "ngIf", "ngIfElse"], ["text", ""], ["hidden", "", "type", "file", "accept", "image/png, image/jpg, image/jpeg", 3, "change"], ["uploader", ""], [1, "edit-profile-picture", 3, "ngClass"], ["aria-hidden", "false", "aria-label", "edit icon", 3, "svgIcon", "click"], ["class", "delete-profile-picture", 4, "ngIf"], [1, "user-desc"], [1, "role-container", "fx-row"], ["class", "role fx-col", 4, "ngFor", "ngForOf"], [1, "user-contact"], ["class", "contact-item no-gap", 4, "ngIf"], [1, "organisation-info"], ["class", "organisation", 4, "ngIf"], ["class", "manager", 4, "ngIf"], [1, "detail-container"], [1, "div-row"], [1, "contact-item", "new-call-button", "no-gap", 3, "click"], ["aria-hidden", "false", "aria-label", "call icon", 3, "svgIcon"], [1, "detail-info"], [1, "info-item", "first"], [1, "title"], [1, "value"], [1, "info-item", "second"], [1, "info-item", "third"], ["class", "contact-item new-call-button no-gap", 3, "click", 4, "ngIf"], ["class", "value", 4, "ngIf"], [1, "info-item", "fourth"], [1, "footer-full-wrapper"], [1, "footer-image-wrapper"], [1, "image-wrapper"], ["src", "assets/img/addenda.png"], [3, "src", "error"], [1, "delete-profile-picture"], ["aria-hidden", "false", "aria-label", "delete icon", 3, "svgIcon", "click"], [1, "role", "fx-col"], [1, "user-post"], ["src", "assets/img/addenda-quote.png", 4, "ngIf"], ["src", "assets/img/addenda-repair.png", 4, "ngIf"], ["src", "assets/img/addenda-quote.png"], ["src", "assets/img/addenda-repair.png"], [1, "contact-item", "no-gap"], [4, "ngIf"], ["aria-hidden", "false", "aria-label", "call icon", 1, "icon-left", 3, "svgIcon"], [1, "verify"], [1, "organisation"], [1, "manager"], [1, "manager-post"], [1, "manager-profile"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], ["aria-hidden", "false", "aria-label", "call icon", 1, "plus-icon", 3, "svgIcon"], ["aria-hidden", "false", "aria-label", "call icon", 1, "edit-icon", 3, "svgIcon", "click"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, UserProfileComponent_img_5_Template, 1, 1, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UserProfileComponent_ng_template_6_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserProfileComponent_Template_input_change_8_listener($event) {
        return ctx.handleUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9)(11, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_Template_mat_icon_click_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r3.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, UserProfileComponent_div_12_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12)(14, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, UserProfileComponent_div_17_Template, 5, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, UserProfileComponent_div_19_Template, 9, 7, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, UserProfileComponent_div_21_Template, 9, 8, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, UserProfileComponent_div_22_Template, 11, 7, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "section", 20)(24, "div", 21)(25, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_28_listener() {
        return ctx.resetPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "mat-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 24)(34, "div", 25)(35, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 28)(41, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 29)(47, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, UserProfileComponent_div_50_Template, 5, 4, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, UserProfileComponent_label_51_Template, 5, 3, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 32)(53, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 33)(59, "div", 34)(60, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl) && ctx.hasAvatar)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](35, _c1, !(ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.userProfileImageBlobUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.userDetail == null ? null : ctx.userDetail.firstName, " ", ctx.userDetail == null ? null : ctx.userDetail.lastName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.userDetail == null ? null : ctx.userDetail.roleDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) && (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) !== "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.organizationDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetail == null ? null : ctx.userDetail.managerDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 23, "personal_details"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 25, "reset_password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 27, "first_name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.firstName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](43, 29, "last_name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.lastName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 31, "mobile_number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) || (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) === "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) && (ctx.userDetail == null ? null : ctx.userDetail.phoneNumber) !== "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 33, "email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userDetail == null ? null : ctx.userDetail.email);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".main[_ngcontent-%COMP%] {\n  padding: 32px 0;\n}\n\n.user-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid rgba(26, 34, 51, 0.2);\n  padding-bottom: 20px;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  align-items: center;\n  position: relative;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture.centered-edit[_ngcontent-%COMP%] {\n  left: 45px;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -7px;\n  left: 30px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .edit-profile-picture[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  height: 15px !important;\n  width: 15px !important;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .delete-profile-picture[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -7px;\n  left: 55px;\n  background: var(--xa-red);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .delete-profile-picture[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-white) !important;\n  height: 12px !important;\n  width: 12px !important;\n  display: flex;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 110px;\n  height: 110px;\n  background: rgba(26, 34, 51, 0.1);\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 110px;\n  width: 110px;\n  border-radius: 50%;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 35px;\n  margin-bottom: 8px;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .user-post[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--xa-dark-gray);\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 45px;\n  margin-top: 18px;\n}\n.user-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-desc[_ngcontent-%COMP%]   .no-gap[_ngcontent-%COMP%] {\n  gap: 5px;\n}\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .organisation[_ngcontent-%COMP%] {\n  text-align: end;\n  margin-bottom: 36px;\n}\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .organisation[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  text-align: end;\n  justify-content: flex-end;\n}\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-post[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-post[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: rgba(26, 34, 51, 0.1);\n}\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n}\n.user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%]   .manager[_ngcontent-%COMP%]   .manager-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  object-fit: cover;\n}\n\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.contact-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--xa-dark-gray);\n}\n.contact-item[_ngcontent-%COMP%]   .icon-left[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.contact-item[_ngcontent-%COMP%]   .verify[_ngcontent-%COMP%] {\n  color: var(--xa-blue);\n  cursor: pointer;\n}\n\n.new-call-button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 12px;\n  margin-top: 4px;\n  gap: 10px;\n  height: 30px;\n  border: 1px solid var(--xa-light-gray);\n  filter: drop-shadow(0px 1px 3px var(--xa-box-shadow));\n  border-radius: 8px;\n}\n.new-call-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-black) !important;\n}\n.new-call-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: var(--xa-black) !important;\n}\n\n.detail-container[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  border-bottom: 1px solid rgba(26, 34, 51, 0.2);\n}\n.detail-container[_ngcontent-%COMP%]   .div-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.detail-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 120px;\n}\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 14px;\n  display: flex;\n  margin-top: 4px;\n  justify-content: inherit;\n  align-items: center;\n}\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--xa-black) !important;\n}\n.detail-container[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  margin-left: 26px;\n}\n\n@media (max-width: 850px) {\n  .new-call-button[_ngcontent-%COMP%] {\n    border: 1px solid var(--xa-gray);\n  }\n  .detail-info[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    gap: 30px !important;\n  }\n  .detail-info[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .detail-info[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%] {\n    min-width: 200px;\n  }\n  .detail-info[_ngcontent-%COMP%]   .fourth[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n}\n@media (max-width: 840px) {\n  .user-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .user-container[_ngcontent-%COMP%]   .organisation-info[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    width: 100%;\n  }\n}\n.role-container[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n.role-container[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 29px;\n}\n\n.role[_ngcontent-%COMP%]:not(:first-child) {\n  border-left: 1px solid var(--xa-light-gray);\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSxVQUFBO0FBQ1o7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFBWjtBQUVZO0VBQ0ksZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQWhCO0FBSVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBRlo7QUFJWTtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFGaEI7QUFPWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTGhCO0FBT2dCO0VBQ0ksZUFBQTtBQUxwQjtBQVFnQjtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU5wQjtBQVlZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWaEI7QUFhWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFYaEI7QUFjWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQVpoQjtBQWVZO0VBQ0ksUUFBQTtBQWJoQjtBQW1CUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQWpCWjtBQW1CWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQWpCaEI7QUFzQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBcEJaO0FBdUJnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQXJCcEI7QUF3QmdCO0VBQ0ksZUFBQTtBQXRCcEI7QUEwQlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBeEJoQjtBQTBCZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXhCcEI7QUEyQmdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBekJwQjs7QUFnQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBN0JKO0FBK0JJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQTdCUjtBQWdDSTtFQUNJLGlCQUFBO0FBOUJSO0FBaUNJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBL0JSOztBQW1DQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtBQWhDSjtBQWtDSTtFQUNJLGdDQUFBO0FBaENSO0FBbUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQWpDUjs7QUFzQ0E7RUFDSSxlQUFBO0VBQ0EsOENBQUE7QUFuQ0o7QUFxQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQW5DUjtBQXNDSTtFQUNJLG1CQUFBO0FBcENSO0FBdUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQXJDUjtBQXVDUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQXJDWjtBQXVDWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQXJDaEI7QUF3Q1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUF0Q2hCO0FBd0NnQjtFQUNJLGdDQUFBO0FBdENwQjtBQXlDZ0I7RUFDSSxpQkFBQTtBQXZDcEI7O0FBOENBO0VBQ0k7SUFDSSxnQ0FBQTtFQTNDTjtFQThDRTtJQUNJLDhCQUFBO0lBQ0Esb0JBQUE7RUE1Q047RUE4Q007SUFDSSxlQUFBO0VBNUNWO0VBK0NNO0lBQ0ksZ0JBQUE7RUE3Q1Y7RUFnRE07SUFDSSxnQkFBQTtFQTlDVjtBQUNGO0FBa0RBO0VBQ0k7SUFDSSxzQkFBQTtFQWhETjtFQWtETTtJQUNJLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VBaERWO0FBQ0Y7QUFvREE7RUFDSSxTQUFBO0FBbERKO0FBb0RRO0VBQ0ksZ0JBQUE7QUFsRFo7O0FBdURBO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtBQXBESiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIHBhZGRpbmc6IDMycHggMDtcclxufVxyXG5cclxuLnVzZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAudXNlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogMzJweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmVkaXQtcHJvZmlsZS1waWN0dXJlLmNlbnRlcmVkLWVkaXQge1xyXG4gICAgICAgICAgICBsZWZ0OiA0NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVkaXQtcHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IC03cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLXhhLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVsZXRlLXByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtN3B4O1xyXG4gICAgICAgICAgICBsZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1yZWQpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0teGEtd2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci1wcm9maWxlIHtcclxuICAgICAgICAgICAgLnVzZXItcHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAzNCwgNTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLWRlc2Mge1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItcG9zdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogNDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uby1nYXAge1xyXG4gICAgICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZ2FuaXNhdGlvbi1pbmZvIHtcclxuICAgICAgICAub3JnYW5pc2F0aW9uIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG5cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hbmFnZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgIC5tYW5hZ2VyLXBvc3Qge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hbmFnZXItcHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNiwgMzQsIDUxLCAwLjEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE1cHg7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uLWxlZnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJpZnkge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZXctY2FsbC1idXR0b24ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggM3B4IHZhcigtLXhhLWJveC1zaGFkb3cpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgZmlsbDogdmFyKC0teGEtYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjaykgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5kZXRhaWwtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcblxyXG4gICAgLmRpdi1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbC1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZ2FwOiAxMjBweDtcclxuXHJcbiAgICAgICAgLmluZm8taXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0teGEtYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmVkaXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLm5ldy1jYWxsLWJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teGEtZ3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbC1pbmZvIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZ2FwOiAzMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5zZWNvbmQge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGhpcmQge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm91cnRoIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gICAgLnVzZXItY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAub3JnYW5pc2F0aW9uLWluZm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucm9sZS1jb250YWluZXIge1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgLnJvbGUgeyAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.component */ 48403);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [{
  path: '',
  component: _user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_3__.VersionControlResolver
  }
}];
class UserProfileModule {}
UserProfileModule.ɵfac = function UserProfileModule_Factory(t) {
  return new (t || UserProfileModule)();
};
UserProfileModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: UserProfileModule
});
UserProfileModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserProfileModule, {
    declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_2__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]
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

/***/ })

}]);
//# sourceMappingURL=src_app_modules_user-profile_user-profile_module_ts.js.map