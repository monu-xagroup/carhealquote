"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["default-src_app_shared_history_history_component_ts"],{

/***/ 82181:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/repair/delivery-service/delivery-service.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryServiceComponent": () => (/* binding */ DeliveryServiceComponent)
/* harmony export */ });
/* harmony import */ var D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var src_app_services_file_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/file/file.service */ 93224);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_xa_signature_xa_signature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../widgets/xa-signature/xa-signature.component */ 51492);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ 30763);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);

/* eslint-disable no-prototype-builtins */
















const _c0 = ["uploader"];
function DeliveryServiceComponent_div_7_b_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Delivery details can be entered only when repair is complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DeliveryServiceComponent_div_7_b_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Delivery Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DeliveryServiceComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DeliveryServiceComponent_div_7_b_1_Template, 2, 0, "b", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DeliveryServiceComponent_div_7_b_2_Template, 2, 0, "b", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isOutbound);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isOutbound);
  }
}
function DeliveryServiceComponent_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No Delivery Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Write here the delivery date and time and a signature. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_chq_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "chq-input", 32);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx_r8.formViewModel.deliveryDate);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_dx_date_box_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "dx-date-box", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onValueChanged", function DeliveryServiceComponent_ng_template_8_div_1_dx_date_box_5_Template_dx_date_box_onValueChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.updateInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r9.formEditModel.DeliveryDate.value)("acceptCustomValue", false)("invalidDateMessage", "")("validationError", false)("validationMessageMode", "none")("showClearButton", false)("max", ctx_r9.formEditModel.DeliveryDate.maxDate)("useMaskBehavior", true)("openOnFieldClick", true)("adaptivityEnabled", true)("pickerType", "calendar");
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r10.formEditModel.DeliveryDate.errorMessage));
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "chq-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputModel", ctx_r11.formViewModel.delieveredBy);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_xa_signature_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "xa-signature", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("controlOutput", function DeliveryServiceComponent_ng_template_8_div_1_xa_signature_12_Template_xa_signature_controlOutput_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.getSignatureData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 36);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r13.formViewModel.signature[0].attachmentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 37);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "chq-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeliveryServiceComponent_ng_template_8_div_1_div_16_Template_chq_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.handleAddFileClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function DeliveryServiceComponent_ng_template_8_div_1_div_16_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.handleUpload($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r15.formEditModel.Attachments.length >= 2)("buttonModel", ctx_r15.attachmentButton);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_label_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "ATTACHMENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_div_20_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 47);
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", item_r28.attachmentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_div_20_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "pdf-file");
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DeliveryServiceComponent_ng_template_8_div_1_div_20_img_1_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DeliveryServiceComponent_ng_template_8_div_1_div_20_ng_template_2_Template, 2, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 45)(5, "button", 46)(6, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeliveryServiceComponent_ng_template_8_div_1_div_20_Template_mat_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const item_r28 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.openAttachment(item_r28.attachmentUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 46)(8, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeliveryServiceComponent_ng_template_8_div_1_div_20_Template_mat_icon_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const item_r28 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.download(item_r28.attachmentUrl, item_r28.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.isImage(item_r28.name))("ngIfElse", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "download-arrow");
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_div_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 47);
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", item_r38.base64, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "pdf-file");
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_div_1_img_1_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_div_1_ng_template_2_Template, 2, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 45)(5, "button", 46)(6, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_div_1_Template_mat_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const i_r39 = restoredCtx.index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r44.openAttachmentView(i_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 46)(8, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_div_1_Template_mat_icon_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const i_r39 = restoredCtx.index;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r46.handleFileRemove(i_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r38.type.indexOf("image") !== -1)("ngIfElse", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "trash");
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_div_1_Template, 9, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r18.formEditModel.AttachmentsView);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "chq-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r19.saveButtonModel);
  }
}
function DeliveryServiceComponent_ng_template_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DeliveryServiceComponent_ng_template_8_div_1_div_1_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 12)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DeliveryServiceComponent_ng_template_8_div_1_chq_input_4_Template, 1, 1, "chq-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DeliveryServiceComponent_ng_template_8_div_1_dx_date_box_5_Template, 1, 11, "dx-date-box", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, DeliveryServiceComponent_ng_template_8_div_1_span_6_Template, 3, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, DeliveryServiceComponent_ng_template_8_div_1_div_7_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 18)(9, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "SIGNATURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, DeliveryServiceComponent_ng_template_8_div_1_xa_signature_12_Template, 1, 0, "xa-signature", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, DeliveryServiceComponent_ng_template_8_div_1_img_13_Template, 1, 1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, DeliveryServiceComponent_ng_template_8_div_1_div_14_Template, 1, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, DeliveryServiceComponent_ng_template_8_div_1_div_16_Template, 4, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, DeliveryServiceComponent_ng_template_8_div_1_label_18_Template, 2, 0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, DeliveryServiceComponent_ng_template_8_div_1_div_20_Template, 9, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, DeliveryServiceComponent_ng_template_8_div_1_ng_container_21_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, DeliveryServiceComponent_ng_template_8_div_1_div_22_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.formEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formEditModel.DeliveryDate.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.formEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.formEditable && ctx_r6.formViewModel.signature.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.formEditable && ctx_r6.formViewModel.signature.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formEditModel.Attachments.length > 0 || ctx_r6.formViewModel.documents.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r6.formViewModel.documents);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formEditModel.Attachments.length <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.formEditable);
  }
}
function DeliveryServiceComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, DeliveryServiceComponent_ng_template_8_div_0_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DeliveryServiceComponent_ng_template_8_div_1_Template, 23, 13, "div", 9);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.deliveryDataAvailable && !ctx_r2.formEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.deliveryDataAvailable || ctx_r2.formEditable);
  }
}
class DeliveryServiceComponent {
  /**
   * Creates an instance of DeliveryServiceComponent.
   * @constructor
   * @param {*} data
   * @param {MatDialogRef<DeliveryServiceComponent>} dialogRef
   * @param {BookingService} bookingService
   * @param {CommonService} commonService
   * @param {FileService} fileService
   * @param {TranslateService} translateService,
   */
  constructor(data, dialogRef, bookingService, commonService, fileService, translateService, router) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.bookingService = bookingService;
    this.commonService = commonService;
    this.fileService = fileService;
    this.translateService = translateService;
    this.router = router;
    this.saveButtonModel = {
      label: 'Save',
      type: 'primary',
      icon: '',
      onclick: this.submitForm.bind(this)
    };
    this.attachmentButton = {
      label: 'add_attachment',
      type: 'outline',
      icon: 'attachment'
    };
    this.formViewModel = {
      deliveryDate: {
        label: 'Delivery Date And Time',
        type: 'text',
        placeHolder: '',
        name: 'deliveryDateAndTime',
        class: 'col-4',
        value: '',
        disabled: true
      },
      delieveredBy: {
        label: 'driver name',
        type: 'text',
        placeHolder: '',
        name: 'delieveredBy',
        class: 'col-4',
        value: '',
        disabled: true
      },
      signature: [],
      documents: []
    };
    this.formEditModel = {
      RepairGuid: '',
      DeliveryDate: {
        value: new Date(),
        minDate: dayjs__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'minute').toDate(),
        maxDate: dayjs__WEBPACK_IMPORTED_MODULE_1__().add(1, 'hour').toDate(),
        error: false,
        errorMessage: ''
      },
      signature: {},
      Attachments: [],
      AttachmentsView: []
    };
    this.attachmentFiles = [];
    this.deliveryDataAvailable = false;
    this.repairStatus = '';
    this.allowedRepairStatus = [''];
    this.isOutbound = false;
    if (this.router.url.indexOf('/outbound') !== -1) {
      this.isOutbound = true;
    }
    if (data !== null) {
      this.repairStatus = data.repairStatus;
      this.formEditable = data.formEditable;
      if (!this.formEditable) {
        if (data.hasOwnProperty('delieveredBy') && data.delieveredBy !== null) this.deliveryDataAvailable = true;
        for (const key in this.formViewModel) {
          if (data.hasOwnProperty(key)) {
            if (key === 'deliveryDate') {
              this.formViewModel[key].value = new _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe('en-US').transform(data[key], 'dd/MM/yyyy - hh:mm a');
            } else {
              this.formViewModel[key].value = data[key] ?? '-';
            }
          }
        }
        if (data.hasOwnProperty('deliveryAttachmentDTOs') && data.deliveryAttachmentDTOs.length > 0) {
          data.deliveryAttachmentDTOs.forEach(attachment => {
            if (attachment.name.toLowerCase().indexOf('signature') !== -1) {
              this.formViewModel.signature.push(attachment);
            } else {
              this.formViewModel.documents.push(attachment);
            }
          });
        }
      } else {
        this.formEditModel.RepairGuid = this.data.repairGuid;
      }
    }
  }
  /**
  Sets the content of the uploader element.
  @param {ElementRef} content - The content of the uploader element.
  */
  set content(content) {
    if (content) {
      // initially setter gets called with undefined
      this.uploader = content;
    }
  }
  /**
   * cancelDialog
   * @param {*} data
   */
  cancelDialog(data) {
    this.dialogRef.close();
  }
  /**
   * openAttachment
   * @param {*} link
   */
  openAttachment(link) {
    window.open(link, '_blank');
  }
  /**
   * openAttachmentView
   * @param {*} index
   */
  openAttachmentView(index) {
    const blobUrl = this.fileService.fileToDataUrl(this.formEditModel.Attachments[index]);
    window.open(blobUrl, '_blank');
  }
  /**
   * isImage
   * @param {*} name
   */
  isImage(name) {
    const imageFileFormats = ['.jpg', '.jpeg', '.png'];
    let isImage = false;
    imageFileFormats.forEach(item => {
      if (name.toLowerCase().indexOf(item) !== -1) isImage = true;
    });
    return isImage;
  }
  /**
   * download
   * @async
   * @param {*} url
   * @param {*} name
   * @returns {*}
   */
  download(url, name) {
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield fetch(url);
      const imageBlog = yield image.blob();
      const imageURL = URL.createObjectURL(imageBlog);
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })();
  }
  /**
   * Description placeholder
   * @date 12/19/2023 - 6:50:20 PM
   *
   * @async
   * @param {*} data
   * @returns {*}
   */
  getSignatureData(data) {
    var _this = this;
    return (0,D_Addenda_carhealquote_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.formEditModel.signature = yield _this.fileService.dataURLtoFile(data, 'signature.png', 'image/png');
    })();
  }
  /**
   * Description placeholder
   * @date 12/19/2023 - 6:50:27 PM
   */
  submitForm() {
    this.commonService.showLoading();
    const body = new FormData();
    for (const key in this.formEditModel) {
      if (key === 'AttachmentsView') continue;
      if (key === 'Attachments') {
        for (const index in this.formEditModel['Attachments']) {
          body.append('Attachments', this.formEditModel['Attachments'][index]);
        }
      } else {
        body.append(key, key === 'DeliveryDate' ? this.formEditModel[key].value.toISOString() : this.formEditModel[key]);
      }
    }
    this.bookingService.createDeliveryServiceDetails(body).subscribe({
      next: data => {
        this.commonService.hideLoading();
        if (data.success) {
          this.commonService.showInfoToast(5000, data.message);
          this.dialogRef.close(true);
        }
      }
    });
  }
  /**
   * handle file upload
   * @param event
  */
  handleUpload(event) {
    const currentFile = event.target.files || event.srcElement.files;
    console.log(currentFile);
    if (currentFile !== null && currentFile !== '' && currentFile.length > 0) {
      if (currentFile.length + this.formEditModel.Attachments.length > 2) {
        const message = 'Max 2 Files Allowed';
        this.commonService.showToast(0, message);
        this.uploader.nativeElement.value = null;
        return;
      }
      for (const index in currentFile) {
        if (!this.checkFileSize(currentFile[index])) {
          const message = this.translateService.instant('file_size_5mb_error_message');
          this.commonService.showToast(0, message);
          this.uploader.nativeElement.value = null;
          continue;
        }
        if (currentFile[index].name && !this.isValidImageFile(currentFile[index].name)) {
          const message = this.translateService.instant('upload_type_not_supported');
          this.commonService.showToast(0, message);
          this.uploader.nativeElement.value = null;
          continue;
        }
        const reader = new FileReader();
        reader.readAsDataURL(currentFile[index]);
        reader.onload = _event => {
          this.formEditModel.AttachmentsView.push({
            base64: _event.srcElement.result,
            type: _event.srcElement.result.split(';base64,')[0]
          });
          this.formEditModel.Attachments.push(currentFile[index]);
          console.log(_event, this.formEditModel.Attachments);
        };
      }
    }
  }
  /**
    Removes a file from the component's state.
    @param {any} event - The event object that triggered the function.
    @returns {void}
  */
  handleFileRemove(index) {
    this.formEditModel.Attachments.splice(index, 1);
    this.formEditModel.AttachmentsView.splice(index, 1);
  }
  /**
  Handles the click event for the "Add File" button.
  @param {Event} event - The click event.
  @returns {void}
  */
  handleAddFileClick(event) {
    this.uploader.nativeElement.click();
  }
  /**
  * checkx filename
  * @param filename
  * @returns
  */
  isValidImageFile(filename) {
    const regex = new RegExp('^.*\\.[a-zA-Z]+$', 'gm');
    if (regex.test(filename)) {
      const extension = filename.split('.').pop();
      return this.commonService.allowFilesExtension.includes(extension?.toLowerCase());
    }
    return false;
  }
  /**
  * checks file size
  * @param blob
  * @returns boolean
  */
  checkFileSize(img) {
    if (img.size > this.commonService.maxileSize) {
      return false;
    }
    return true;
  }
  /**
   * repairNotInvoiced
   * checks whether to show/allow edit
   * @param blob
   * @returns boolean
   */
  repairNotInvoiced() {
    if (this.repairStatus?.replaceAll(' ', '').toLowerCase() === 'invoiced' || this.repairStatus?.replaceAll(' ', '').toLowerCase() === 'paid' || this.repairStatus?.replaceAll(' ', '').toLowerCase() === 'closed' || this.repairStatus?.replaceAll(' ', '').toLowerCase() === 'complete' || this.repairStatus?.replaceAll(' ', '').toLowerCase() === 'readytoinvoice') {
      return false;
    }
    return true;
  }
  /**
   * updateInput
   *
   */
  updateInput({
    value
  }) {
    this.formEditModel.DeliveryDate.error = false;
    if (new Date(value) > dayjs__WEBPACK_IMPORTED_MODULE_1__().add(1, 'hour').toDate()) {
      if (dayjs__WEBPACK_IMPORTED_MODULE_1__(new Date(value)).format('YYYY-MM-DD hh:mm') == dayjs__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD hh:mm')) {
        this.formEditModel.DeliveryDate.error = false;
        this.saveButtonModel = {
          ...this.saveButtonModel,
          type: 'primary'
        };
        return;
      }
      this.formEditModel.DeliveryDate.error = true;
      this.formEditModel.DeliveryDate.errorMessage = 'delivery_date_cannot_set_as_future_date';
      this.saveButtonModel = {
        ...this.saveButtonModel,
        type: 'disabled'
      };
      return;
    } else if (new Date(value) < new Date()) {
      if (dayjs__WEBPACK_IMPORTED_MODULE_1__(new Date(value)).format('YYYY-MM-DD hh:mm') == dayjs__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD hh:mm')) {
        this.formEditModel.DeliveryDate.error = false;
        this.saveButtonModel = {
          ...this.saveButtonModel,
          type: 'primary'
        };
        return;
      }
      this.formEditModel.DeliveryDate.error = true;
      this.formEditModel.DeliveryDate.errorMessage = 'delivery_date_cannot_set_as_past_date';
      this.saveButtonModel = {
        ...this.saveButtonModel,
        type: 'disabled'
      };
      return;
    }
    this.saveButtonModel = {
      ...this.saveButtonModel,
      type: 'primary'
    };
  }
  static #_ = this.ɵfac = function DeliveryServiceComponent_Factory(t) {
    return new (t || DeliveryServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_file_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DeliveryServiceComponent,
    selectors: [["app-delivery-service"]],
    viewQuery: function DeliveryServiceComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      }
    },
    decls: 10,
    vars: 6,
    consts: [[1, "delivery-service-container"], [1, "header"], [1, "close-icon"], [3, "svgIcon", "click"], ["class", "content", "style", "margin-top: 15px", 4, "ngIf", "ngIfElse"], ["showAllowedStage", ""], [1, "content", 2, "margin-top", "15px"], [4, "ngIf"], ["class", "content", "style", "margin-top: 15px", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "content"], ["class", "row", 4, "ngIf"], [1, "row", "input-row"], [1, "col-12"], ["class", "disable-formedit", 3, "inputModel", 4, "ngIf"], ["class", "datebox-wrapper", "displayFormat", "dd/MM/yyyy - hh:mm a", "type", "datetime", 3, "value", "acceptCustomValue", "invalidDateMessage", "validationError", "validationMessageMode", "showClearButton", "max", "useMaskBehavior", "openOnFieldClick", "adaptivityEnabled", "pickerType", "onValueChanged", 4, "ngIf"], ["class", "text-danger input-label text-muted", 4, "ngIf"], ["class", "row input-row", 4, "ngIf"], [1, "row", "input-row", 2, "gap", "5px"], [1, "col-12", "input-label"], [1, "col-12", "d-flex"], [3, "controlOutput", 4, "ngIf"], ["class", "signature-container", 3, "src", 4, "ngIf"], ["class", "signature-container", 4, "ngIf"], ["class", "col-12 d-flex", 4, "ngIf"], [1, "col-12", "d-flex", 2, "margin-top", "15px"], ["class", "input-label", 4, "ngIf"], [1, "attachment-container"], ["class", "attachment-row", 4, "ngFor", "ngForOf"], ["class", "d-flex", "style", "flex-direction: row-reverse;margin-top: 10px;", 4, "ngIf"], [1, "row"], [1, "col-12", 2, "margin-top", "10px", "font-size", "12px", "font-weight", "500"], [1, "disable-formedit", 3, "inputModel"], ["displayFormat", "dd/MM/yyyy - hh:mm a", "type", "datetime", 1, "datebox-wrapper", 3, "value", "acceptCustomValue", "invalidDateMessage", "validationError", "validationMessageMode", "showClearButton", "max", "useMaskBehavior", "openOnFieldClick", "adaptivityEnabled", "pickerType", "onValueChanged"], [1, "text-danger", "input-label", "text-muted"], [3, "controlOutput"], [1, "signature-container", 3, "src"], [1, "signature-container"], [1, "add-file", 3, "hidden", "buttonModel", "click"], ["multiple", "", "hidden", "", "type", "file", "accept", "image/png, image/jpg, image/jpeg, application/pdf", 3, "change"], ["uploader", ""], [1, "input-label"], [1, "attachment-row"], [3, "src", 4, "ngIf", "ngIfElse"], ["document", ""], [1, "row", "justify-center", "action-buttons"], ["type", "button", 1, "button-outline"], [3, "src"], [1, "text-center"], [1, "pdf-icon", 3, "svgIcon"], ["color", "red", 3, "svgIcon", "click"], [1, "d-flex", 2, "flex-direction", "row-reverse", "margin-top", "10px"], [3, "buttonModel"]],
    template: function DeliveryServiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 2)(6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DeliveryServiceComponent_Template_mat_icon_click_6_listener() {
          return ctx.cancelDialog(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, DeliveryServiceComponent_div_7_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, DeliveryServiceComponent_ng_template_8_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, "delivery_details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.repairNotInvoiced())("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_5__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_6__.ChqButtonComponent, _widgets_xa_signature_xa_signature_component__WEBPACK_IMPORTED_MODULE_7__.XaSignature, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxDateBoxComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: [".delivery-service-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 15px 20px;\n  min-width: 400px;\n  min-height: 400px;\n  background: #F1F2F6;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  cursor: pointer;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 36px !important;\n  width: 36px !important;\n  background: var(--xa-black);\n  border-radius: 50%;\n  text-align: center;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]     svg {\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative;\n  top: 7px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]     svg   path {\n  fill: var(--xa-white);\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     input[readonly] {\n  padding: 0px !important;\n  opacity: 1;\n  width: 100% !important;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     input[readonly]:focus {\n  outline: none;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .input-row[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  height: auto;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n  position: relative;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .attachment-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 5px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .attachment-row[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  width: calc(50% - 10px);\n  background-color: #f8f8fa;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .attachment-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 92%;\n  height: 120px;\n  margin: auto;\n  display: block;\n  border-radius: 5px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .attachment-row[_ngcontent-%COMP%]:first-child {\n  margin-right: 10px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .pdf-icon[_ngcontent-%COMP%] {\n  height: 115px;\n  width: 96px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .signature-container[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  height: 120px;\n  border-radius: 5px;\n  width: 100%;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .signature-container[_ngcontent-%COMP%]   xa-signature[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  margin-right: 10px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .attachment-button[_ngcontent-%COMP%] {\n  width: auto;\n  margin-bottom: 10px;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .datebox-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.delivery-service-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   xa-signature[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n  .disable-formedit input {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvZGVsaXZlcnktc2VydmljZS9kZWxpdmVyeS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDUTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDWjtBQUNZO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNoQjtBQUNnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDcEI7QUFDb0I7RUFDSSxxQkFBQTtBQUN4QjtBQU9RO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFMWjtBQU1ZO0VBQ0ksYUFBQTtBQUpoQjtBQVFRO0VBQ0ksaUJBQUE7QUFOWjtBQVNRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQVBaO0FBVVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQVJaO0FBV1E7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBVFo7QUFVWTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVJoQjtBQVlRO0VBQ0ksa0JBQUE7QUFWWjtBQWFRO0VBQ0ksdUJBQUE7QUFYWjtBQWNRO0VBQ0ksa0JBQUE7QUFaWjtBQWVRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFiWjtBQWdCUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWRaO0FBZVk7RUFDSSx1QkFBQTtBQWJoQjtBQWlCUTtFQUNJLGVBQUE7QUFmWjtBQWdCWTtFQUNJLGtCQUFBO0FBZGhCO0FBa0JRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBaEJaO0FBbUJRO0VBQ0ksV0FBQTtBQWpCWjtBQW9CUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBbEJaOztBQXVCQTtFQUNJLHdDQUFBO0FBcEJKIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGl2ZXJ5LXNlcnZpY2UtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjJGNjtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCBwYXRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0teGEtd2hpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICA6Om5nLWRlZXAgaW5wdXRbcmVhZG9ubHlde1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0LXJvd3tcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQtbGFiZWx7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmF0dGFjaG1lbnQtY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXR0YWNobWVudC1yb3d7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmYTtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dGFjaG1lbnQtcm93OmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuanVzdGlmeS1jZW50ZXJ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGRmLWljb257XHJcbiAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpZ25hdHVyZS1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweCAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHhhLXNpZ25hdHVyZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9uLWJ1dHRvbnN7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXR0YWNobWVudC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0ZWJveC13cmFwcGVye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhhLXNpZ25hdHVyZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5kaXNhYmxlLWZvcm1lZGl0IGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 65504:
/*!*****************************************************!*\
  !*** ./src/app/shared/history/history.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/widgets/chq-repair-dialog/chq-repair-dialog.component */ 25015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var src_app_modules_repair_delivery_service_delivery_service_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/repair/delivery-service/delivery-service.component */ 82181);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/chq-custom-loader/chq-custom-loader.component */ 55309);























const _c0 = ["sidenav"];
const _c1 = function () {
  return {
    "right": "25rem",
    "transition": "right 0.3s ease-in"
  };
};
const _c2 = function () {
  return {
    "right": "0"
  };
};
function HistoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HistoryComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 7)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r0.isMenuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](2, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.isMenuOpen ? "keyboard_arrow_down" : "keyboard_arrow_up");
  }
}
function HistoryComponent_aside_5_div_2_div_4_h5_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "claim_#"), "", item_r6.claimNo, "");
  }
}
function HistoryComponent_aside_5_div_2_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](block_r8.name);
  }
}
function HistoryComponent_aside_5_div_2_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 35)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" Repair Estimate ", ctx_r11.currencySymbol, " ", block_r8.oldValue, " ");
  }
}
function HistoryComponent_aside_5_div_2_div_4_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", block_r8 == null ? null : block_r8.newValue, " ");
  }
}
function HistoryComponent_aside_5_div_2_div_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HistoryComponent_aside_5_div_2_div_4_div_20_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.downloadPdfHistory(block_r8.referenceId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Repair Estimate Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function HistoryComponent_aside_5_div_2_div_4_a_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Estimate Report : ", ctx_r27.uppercaseSpacing(block_r8.blobUrls[0].split("|")[0].split("_")[0]), "");
  }
}
function HistoryComponent_aside_5_div_2_div_4_a_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HistoryComponent_aside_5_div_2_div_4_a_22_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", block_r8.blobUrls[0].split("|")[1], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", block_r8.blobUrls[0].length > 1);
  }
}
function HistoryComponent_aside_5_div_2_div_4_ng_template_23_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HistoryComponent_aside_5_div_2_div_4_ng_template_23_span_0_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.showImageDialog(block_r8.blobUrls, block_r8.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "View Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HistoryComponent_aside_5_div_2_div_4_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HistoryComponent_aside_5_div_2_div_4_ng_template_23_span_0_Template, 2, 0, "span", 31);
  }
  if (rf & 2) {
    const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((block_r8.name == null ? null : block_r8.name.toLowerCase().indexOf("photo")) !== -1 || (block_r8.name == null ? null : block_r8.name.toLowerCase().indexOf("document")) !== -1) && block_r8.blobUrls !== null);
  }
}
function HistoryComponent_aside_5_div_2_div_4_span_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HistoryComponent_aside_5_div_2_div_4_span_25_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.showCommentDialog(block_r8.comment, block_r8 == null ? null : block_r8.caseStatus == null ? null : block_r8.caseStatus.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "View Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HistoryComponent_aside_5_div_2_div_4_ng_container_26_chq_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "chq-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HistoryComponent_aside_5_div_2_div_4_ng_container_26_chq_button_1_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.showCommentDialog(null, block_r8 == null ? null : block_r8.name, block_r8.messageContent));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buttonModel", ctx_r38.viewDeliveryDetails);
  }
}
function HistoryComponent_aside_5_div_2_div_4_ng_container_26_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "chq-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HistoryComponent_aside_5_div_2_div_4_ng_container_26_ng_template_2_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r46);
      const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r44.showCommentDialog(null, block_r8 == null ? null : block_r8.name, block_r8.messageContent));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buttonModel", ctx_r40.viewMessage);
  }
}
function HistoryComponent_aside_5_div_2_div_4_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HistoryComponent_aside_5_div_2_div_4_ng_container_26_chq_button_1_Template, 1, 1, "chq-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HistoryComponent_aside_5_div_2_div_4_ng_container_26_ng_template_2_Template, 1, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
    const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (block_r8 == null ? null : block_r8.name.indexOf("delivered")) !== -1)("ngIfElse", _r39);
  }
}
function HistoryComponent_aside_5_div_2_div_4_a_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "View Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", block_r8.blobUrls, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HistoryComponent_aside_5_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 17)(4, "div", 18)(5, "div", 19)(6, "div", 20)(7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HistoryComponent_aside_5_div_2_div_4_h5_10_Template, 3, 4, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, HistoryComponent_aside_5_div_2_div_4_div_11_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, HistoryComponent_aside_5_div_2_div_4_div_12_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, HistoryComponent_aside_5_div_2_div_4_p_18_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, HistoryComponent_aside_5_div_2_div_4_div_20_Template, 6, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, HistoryComponent_aside_5_div_2_div_4_a_22_Template, 2, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HistoryComponent_aside_5_div_2_div_4_ng_template_23_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, HistoryComponent_aside_5_div_2_div_4_span_25_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, HistoryComponent_aside_5_div_2_div_4_ng_container_26_Template, 4, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, HistoryComponent_aside_5_div_2_div_4_a_27_Template, 2, 1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const block_r8 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("bg-blue", (block_r8 == null ? null : block_r8.addendaSystem) === "Repair")("bg-yellow", (block_r8 == null ? null : block_r8.addendaSystem) === "Case" || (block_r8 == null ? null : block_r8.addendaSystem) === "Addenda Claims")("bg-grey", (block_r8 == null ? null : block_r8.addendaSystem) === "Fnol");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("border-repair", (block_r8 == null ? null : block_r8.addendaSystem) === "Repair")("border-quote", (block_r8 == null ? null : block_r8.addendaSystem) === "Case")("border-fnol", (block_r8 == null ? null : block_r8.addendaSystem) === "Fnol")("border-claims", (block_r8 == null ? null : block_r8.addendaSystem) === "Addenda Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", block_r8.caseStatus.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 28, block_r8.caseStatus.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (block_r8 == null ? null : block_r8.addendaSystem) === "Addenda Claims" || (block_r8 == null ? null : block_r8.addendaSystem) === "Fnol");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (block_r8 == null ? null : block_r8.caseStatus == null ? null : block_r8.caseStatus.name) !== "GarageAssignmentRequested");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", block_r8.name.toLowerCase().indexOf("repair") > -1 && block_r8.referenceId > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](block_r8 == null ? null : block_r8.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](17, 30, block_r8.actionedOn, "hh:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", block_r8.newValue !== null && block_r8.name.toLowerCase().indexOf("repair estim") === -1 && !((block_r8 == null ? null : block_r8.addendaSystem) === "Addenda Claims" || (block_r8 == null ? null : block_r8.addendaSystem) === "Fnol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", block_r8.name.toLowerCase().indexOf("repair") > -1 && block_r8.referenceId > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", block_r8.name.toLowerCase().indexOf("estimate approval request") !== -1)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", block_r8.comment && block_r8.name.toLowerCase().indexOf("reject") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", block_r8.messageContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (block_r8.name == null ? null : block_r8.name.toLowerCase().indexOf("invoice paid amount")) !== -1 && block_r8.blobUrls);
  }
}
function HistoryComponent_aside_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, HistoryComponent_aside_5_div_2_div_4_Template, 28, 33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6.auditDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", item_r6.auditTrailResponseDetails);
  }
}
function HistoryComponent_aside_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "aside", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HistoryComponent_aside_5_div_2_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.history);
  }
}
dayjs__WEBPACK_IMPORTED_MODULE_1__.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
class HistoryComponent {
  /**
   * Creates an instance of HistoryComponent.
   * @constructor
   * @param {Router} router
   */
  constructor(router, route, commonService, dialog) {
    this.router = router;
    this.route = route;
    this.commonService = commonService;
    this.dialog = dialog;
    this.toggleExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.history = [];
    this.isMenuOpen = false;
    this.isLoading = false;
    this.showHistory = true;
    this.currencySymbol = '';
    this.viewMessage = {
      label: 'View message',
      icon: 'show',
      type: 'outline'
    };
    this.viewDeliveryDetails = {
      label: 'Delivery Details',
      type: 'outline',
      icon: 'view',
      iconColor: 'black'
    };
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationStart)).subscribe({
      next: data => {
        if (this.router.url.indexOf('?') !== -1 && this.router.url.indexOf('history=open') !== -1) {
          this.isMenuOpen = true;
          this.toggleExpand.emit(this.isMenuOpen);
        }
      }
    });
    this.route.params.subscribe({
      next: data => {
        if (this.router.url.indexOf('?') !== -1 && this.router.url.indexOf('history=open') !== -1) {
          this.isMenuOpen = true;
          this.toggleExpand.emit(this.isMenuOpen);
        }
      }
    });
    this.currencySymbol = this.commonService.getCurrencySymbol();
    this.commonService.showHistory?.subscribe(state => {
      this.showHistory = state;
    });
  }
  /**
   * Show/hide
   */
  close() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleExpand.emit(this.isMenuOpen);
  }
  /**
   * Returns class name according to status
   */
  getStatusClasses(status) {
    switch (status) {
      case 'Draft':
        return 'status-draft';
      case 'Pending Approval':
        return 'status-pending';
      case 'Upload photos':
        return 'status-upload';
      case 'Repair estimate':
        return 'status-repair-estimate';
      default:
        return '';
    }
  }
  /**
   * download pdf history
   */
  downloadPdfHistory(referenceId) {
    this.commonService.showLoading();
    this.commonService.blobObservable1(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.caseMgmtUrl}/api/casehistory/report/${referenceId}`).subscribe({
      next: data => {
        window.open(data.fileURL, '_blank');
        this.commonService.hideLoading();
      },
      error: () => {
        this.commonService.hideLoading();
      }
    });
  }
  /**
   * show image dialog
   */
  showImageDialog(blobUrls, name) {
    const gallery = [];
    blobUrls.forEach(url => {
      let title = '';
      let imageUrl = url;
      if (name.indexOf('photo') !== -1 || name.indexOf('document') !== -1) {
        title = url.substring(0, url.indexOf('|')).trim();
        imageUrl = url.substring(url.indexOf('|') + 1);
      }
      gallery.push({
        image: imageUrl,
        thumbImage: imageUrl,
        //alt: alt,
        title: title
      });
    });
    const data = {
      'imageGallery': true,
      'gallery': gallery
    };
    this.dialog.open(src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ChqRepairDialogComponent, {
      data: data
    });
  }
  /**
   * show comment dialog
   */
  showCommentDialog(comment, status, email) {
    if (email && email?.indexOf('DeliveryDetailGuid') !== -1) {
      const outboundData = {
        DeliveryDTO: JSON.parse(email)
      };
      const deliveryData = {
        deliveryDate: outboundData.DeliveryDTO.DeliveryDate,
        delieveredBy: outboundData.DeliveryDTO.DelieveredBy,
        deliveryAttachmentDTOs: outboundData.DeliveryDTO.DeliveryAttachmentDTOs.map((item, key) => {
          return {
            attachmentUrl: item.AttachmentUrl,
            deliveryAttachmentGuid: item.DeliveryAttachmentGuid,
            name: item.Name
          };
        })
      };
      const dialogRef = this.dialog.open(src_app_modules_repair_delivery_service_delivery_service_component__WEBPACK_IMPORTED_MODULE_5__.DeliveryServiceComponent, {
        data: {
          ...deliveryData,
          repairGuid: null,
          formEditable: !deliveryData,
          repairStatus: 'complete'
        },
        maxHeight: '90vh',
        minHeight: '400px',
        minWidth: '400px',
        disableClose: true
      });
      dialogRef.afterClosed();
    } else {
      const data = {
        'comment': comment,
        'status': status,
        'email': email
      };
      this.dialog.open(src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ChqRepairDialogComponent, {
        data: data
      });
    }
  }
  /**
   * uppercaseSpacing
   * @param {*} string
   * @returns {string}
   */
  uppercaseSpacing(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  static #_ = this.ɵfac = function HistoryComponent_Factory(t) {
    return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: HistoryComponent,
    selectors: [["history"]],
    viewQuery: function HistoryComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      }
    },
    inputs: {
      history: "history",
      isMenuOpen: "isMenuOpen",
      isLoading: "isLoading"
    },
    outputs: {
      toggleExpand: "toggleExpand"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 9,
    consts: [["class", "toggle-button", 3, "ngStyle", "click", 4, "ngIf"], [1, "history-sidenav", 3, "hasBackdrop", "backdropClick"], ["mode", "over", "position", "end", "fixedInViewport", "true", "disableClose", "", 3, "opened", "keydown.escape"], ["sidenav", ""], [3, "showLoading"], ["class", "history-slide-panel", 4, "ngIf"], [1, "toggle-button", 3, "ngStyle", "click"], [1, "btn-wrapper"], [1, "history-slide-panel"], [1, "history-items"], ["class", "history-block", 4, "ngFor", "ngForOf"], [1, "history-block"], [1, "history-date"], [1, "date-pill"], ["class", "history-block-container", 4, "ngFor", "ngForOf"], [1, "history-block-container"], [1, "vertical-line"], [1, "history-details-wrapper"], [1, "history-details"], [1, "history-info"], [1, "action-status-pill"], [3, "ngClass"], ["class", "mb-75", 4, "ngIf"], ["class", "history-info-title", 4, "ngIf"], ["class", "repair-pdf-text", 4, "ngIf"], [4, "ngIf"], [1, "sub-content-pdf"], ["class", "data-history", 4, "ngIf"], [1, "view-btn-container"], ["target", "_blank", 3, "href", 4, "ngIf", "ngIfElse"], ["viewImage", ""], ["class", "view-image", 3, "click", 4, "ngIf"], ["class", "view-attachment", "target", "_blank", 3, "href", 4, "ngIf"], [1, "mb-75"], [1, "history-info-title"], [1, "repair-pdf-text"], [1, "data-history-span"], [1, "data-history"], [1, "data-history-content"], [1, "content-file", 3, "click"], [1, "folder-icon"], ["target", "_blank", 3, "href"], [1, "view-image", 3, "click"], [3, "buttonModel", "click", 4, "ngIf", "ngIfElse"], ["messageButton", ""], [3, "buttonModel", "click"], ["target", "_blank", 1, "view-attachment", 3, "href"]],
    template: function HistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HistoryComponent_div_0_Template, 6, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("backdropClick", function HistoryComponent_Template_mat_sidenav_container_backdropClick_1_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown.escape", function HistoryComponent_Template_mat_sidenav_keydown_escape_2_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "chq-custom-loader", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HistoryComponent_aside_5_Template, 3, 1, "aside", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("menu-open", ctx.isMenuOpen)("menu-close", !ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("opened", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      }
    },
    dependencies: [src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_7__.ChqButtonComponent, _widgets_chq_custom_loader_chq_custom_loader_component__WEBPACK_IMPORTED_MODULE_8__.CustomLoaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon],
    styles: [".history-slide-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  width: 100%;\n  overflow: scroll;\n  background: #fff;\n}\n.history-slide-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%] {\n  padding: 2.24856rem 0.01269rem 0.00144rem 0.73731rem;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-date[_ngcontent-%COMP%] {\n  display: flex;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-date[_ngcontent-%COMP%]   .date-pill[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.3875rem 0.5rem;\n  justify-content: center;\n  align-items: center;\n  gap: 0.375rem;\n  border-radius: 0.875rem;\n  border: 2px solid rgba(26, 34, 51, 0.2);\n  background: #fff;\n  color: #3b82f6;\n  font-size: 0.6rem;\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%]   .action-status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.75rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%]   .action-status-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  border-radius: 0.625rem;\n  padding: 0.28rem 0.7rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 0.625rem;\n  border: none;\n  padding: 0.625rem 1.375rem;\n  margin: 10px 0;\n  margin-left: -22px;\n  width: 17.25rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  display: flex;\n  width: 4.6rem;\n  justify-content: center;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  height: 100%;\n  background: #1b03a3;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.4375rem;\n  border-radius: 0.625rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .history-info-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .repair-pdf-text[_ngcontent-%COMP%]   .data-history-span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--xa-dark-gray);\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  margin-top: 0.5rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .data-history-span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  cursor: pointer;\n  \n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 4px 8px;\n  gap: 10px;\n  max-width: 186px;\n  min-width: 186px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n  border-radius: 5px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%]   .folder-icon[_ngcontent-%COMP%] {\n  background: url(/assets/icons/pdf.svg) no-repeat;\n  height: 20px;\n  width: 20px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .view-btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .view-btn-container[_ngcontent-%COMP%]   .view-image[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.menu-close[_ngcontent-%COMP%] {\n  width: 0.9px !important;\n  transform: none !important;\n  visibility: visible !important;\n  display: block !important;\n}\n\n.menu-open[_ngcontent-%COMP%] {\n  width: 25rem !important;\n  transition: width 0.3s ease-in;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate3d(0, 0, 0);\n  top: 42%;\n  right: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  background: var(--xa-white);\n  z-index: 999;\n  border-radius: 0.375rem;\n}\n.toggle-button[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 2.74794rem;\n  height: 5.33056rem;\n  writing-mode: tb-rl;\n  transform: rotate(-180deg);\n  background-color: #fff;\n  border-radius: 0.375rem;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.toggle-button[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\n.disable-scroll[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n .history-sidenav.mat-drawer-container {\n  background-color: transparent;\n  z-index: 503 !important;\n}\n .history-sidenav.mat-drawer-container .mat-drawer-backdrop {\n  position: fixed;\n}\n\n.border-repair[_ngcontent-%COMP%] {\n  background-color: rgba(27, 3, 163, 0.05);\n}\n\n.bg-blue[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.2) !important;\n}\n\n.border-quote[_ngcontent-%COMP%] {\n  background-color: rgba(211, 205, 40, 0.2);\n}\n\n.border-fnol[_ngcontent-%COMP%] {\n  background-color: rgba(27, 3, 163, 0.0509803922);\n}\n\n.border-claims[_ngcontent-%COMP%] {\n  background-color: rgba(211, 205, 40, 0.2);\n}\n\n.bg-yellow[_ngcontent-%COMP%] {\n  background: #d3cd28 !important;\n}\n\n.bg-grey[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.2) !important;\n}\n\n.RepairEstimation[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-estimate);\n  color: var(--xa-black-medium);\n}\n\n.UploadDocuments[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-document);\n  color: var(--xa-white);\n}\n\n.AddPhotos[_ngcontent-%COMP%], .UploadPhotos[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-photo);\n  color: var(--xa-white);\n}\n\n.VehicleDetails[_ngcontent-%COMP%] {\n  background-color: var(--xa-vehicle-detail);\n  color: var(--xa-white);\n}\n\n.Approved[_ngcontent-%COMP%] {\n  background-color: var(--xa-green);\n  color: var(--xa-black);\n}\n\n.Rejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n\n.Closed[_ngcontent-%COMP%], .Complete[_ngcontent-%COMP%], .Completed[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n\n.Draft[_ngcontent-%COMP%] {\n  background-color: var(--xa-draft);\n  color: var(--xa-white);\n}\n\n.PendingApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-orange);\n  color: var(--xa-black);\n}\n\n.ReadytoInvoice[_ngcontent-%COMP%] {\n  background-color: #93BCE1;\n  color: var(--xa-black);\n}\n\n.RepairInProgress[_ngcontent-%COMP%] {\n  background-color: #4301FE;\n  color: var(--xa-white);\n}\n\n.Hold[_ngcontent-%COMP%] {\n  background-color: #CE6DD0;\n  color: var(--xa-white);\n}\n\n.Invoiced[_ngcontent-%COMP%] {\n  background-color: #B463EE;\n  color: var(--xa-white);\n}\n\n.view-attachment[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-weight: 500;\n  font-size: 0.75rem !important;\n}\n\n.Assigned[_ngcontent-%COMP%] {\n  background-color: #4301FE;\n  color: var(--xa-white);\n}\n\n.Submitted[_ngcontent-%COMP%] {\n  background-color: #09C269;\n  color: var(--xa-white);\n}\n\n.DetailsUpdated[_ngcontent-%COMP%] {\n  background-color: var(--xa-vehicle-detail);\n  color: var(--xa-white);\n}\n\n.ClaimAuthenticated[_ngcontent-%COMP%] {\n  background-color: #00B8D9;\n  color: var(--xa-white);\n}\n\n.ReviewInProgress[_ngcontent-%COMP%] {\n  background-color: #FFF95D;\n  color: var(--xa-black-medium);\n}\n\n.ClaimSubmittedForApproval[_ngcontent-%COMP%] {\n  background-color: #D2F0AB;\n  color: var(--xa-black-medium);\n}\n\n.ApprovalReviewInProgress[_ngcontent-%COMP%] {\n  background-color: #ECDBB7;\n  color: var(--xa-black-medium);\n}\n\n.GarageAssignmentRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-garage-requested);\n  color: var(--xa-black-medium);\n}\n\n.GarageAssignedforClaim[_ngcontent-%COMP%] {\n  background-color: var(--xa-bluesh-grey);\n  color: var(--xa-white);\n}\n\n.GarageAssignmentRequestedRejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n\n.mb-75[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n.EstimateApproved[_ngcontent-%COMP%] {\n  background-color: var(--xa-dp-light-green);\n  color: var(--xa-white);\n}\n\n.EstimateRejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-sunset-orange);\n  color: var(--xa-white);\n}\n\n.RepairInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-pending-approval);\n  color: var(--xa-black-medium);\n}\n\n.RepairInvoice[_ngcontent-%COMP%] {\n  background-color: var(--xa-invoice-ready);\n  color: var(--xa-white);\n}\n\n.SettlementInitiated[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n\n.AssignedBackFromReview[_ngcontent-%COMP%] {\n  background-color: var(--xa-assigned-back-review);\n  color: var(--xa-white);\n}\n\n.AssignedBackFromApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-assigned-back-approval);\n  color: var(--xa-black-medium);\n}\n\n.InvoiceRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-request-invoice);\n  color: var(--xa-black-medium);\n}\n\n.EstimateRequested[_ngcontent-%COMP%] {\n  background-color: var(--xa-request-estimate);\n  color: var(--xa-black-medium);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUVFO0VBQ0Usb0RBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBR0UsYUFBQTtFQUNBLHNCQUFBO0FBRk47QUFJTTtFQUNFLGFBQUE7QUFGUjtBQUlRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZWO0FBTU07RUFDRSxhQUFBO0FBSlI7QUFPUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBTFY7QUFTVTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBUFo7QUFZTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVZSO0FBYU07RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWFI7QUFhUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFYVjtBQWVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFiUjtBQWVRO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQWJWO0FBZVU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQWJaO0FBZ0JVO0VBQ0Usa0JBQUE7QUFkWjtBQWlCVTtFQUNFLGdCQUFBO0FBZlo7QUFtQlk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQWpCZDtBQXFCVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBbkJaO0FBc0JjO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXBCaEI7QUFzQmdCO0VBQ0UsZ0JBQUE7QUFwQmxCO0FBdUJnQjtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFHQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsdUNBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBMUJsQjtBQTRCa0I7RUFDRSxnREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMUJwQjtBQTZCa0I7RUFDRSxlQUFBO0FBM0JwQjtBQWtDVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFoQ1o7QUFrQ1k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFoQ2Q7O0FBeUNBO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUVBLDhCQUFBO0VBQ0EseUJBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBdkNGO0FBeUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXZDSjtBQXlDSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUF2Q047O0FBNENBO0VBQ0UsMkJBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtBQXpDRjtBQTJDRTtFQUNFLGVBQUE7QUF6Q0o7O0FBNkNBO0VBQ0Usd0NBQUE7QUExQ0Y7O0FBNkNBO0VBQ0UsNENBQUE7QUExQ0Y7O0FBNkNBO0VBQ0UseUNBQUE7QUExQ0Y7O0FBNkNBO0VBQ0UsZ0RBQUE7QUExQ0Y7O0FBNkNBO0VBQ0UseUNBQUE7QUExQ0Y7O0FBNkNBO0VBQ0UsOEJBQUE7QUExQ0Y7O0FBNkNBO0VBQ0UsNENBQUE7QUExQ0Y7O0FBK0NBO0VBQ0UsMkNBQUE7RUFDQSw2QkFBQTtBQTVDRjs7QUErQ0E7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0FBNUNGOztBQStDQTs7RUFFRSx3Q0FBQTtFQUNBLHNCQUFBO0FBNUNGOztBQStDQTtFQUNFLDBDQUFBO0VBQ0Esc0JBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtBQTVDRjs7QUErQ0E7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0FBNUNGOztBQStDQTs7O0VBR0UsZ0NBQUE7RUFDQSxzQkFBQTtBQTVDRjs7QUErQ0E7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0FBNUNGOztBQStDQTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQTVDRjs7QUErQ0E7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBNUNGOztBQStDQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQTVDRjs7QUErQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQTVDRjs7QUFnREE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBN0NGOztBQWdEQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtBQTdDSjs7QUFnREE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBN0NGOztBQWdEQTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQTdDRjs7QUFnREE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0FBN0NGOztBQWdEQTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsdUNBQUE7RUFDQSxzQkFBQTtBQTdDRjs7QUFnREE7RUFDSSwrQkFBQTtFQUNBLHNCQUFBO0FBN0NKOztBQWdEQTtFQUNFLHNCQUFBO0FBN0NGOztBQWdEQTtFQUNFLDBDQUFBO0VBQ0Esc0JBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UseUNBQUE7RUFDQSxzQkFBQTtBQTdDRjs7QUFnREE7RUFDRSw0Q0FBQTtFQUNBLDZCQUFBO0FBN0NGOztBQWdEQTtFQUNFLHlDQUFBO0VBQ0Esc0JBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsZ0NBQUE7RUFDQSxzQkFBQTtBQTdDRjs7QUFnREE7RUFDRSxnREFBQTtFQUNBLHNCQUFBO0FBN0NGOztBQWdEQTtFQUNFLGtEQUFBO0VBQ0EsNkJBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsMkNBQUE7RUFDQSw2QkFBQTtBQTdDRjs7QUFnREE7RUFDRSw0Q0FBQTtFQUNBLDZCQUFBO0FBN0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmhpc3Rvcnktc2xpZGUtcGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaGlzdG9yeS1pdGVtcyB7XHJcbiAgICBwYWRkaW5nOiAyLjI0ODU2cmVtIDAuMDEyNjlyZW0gMC4wMDE0NHJlbSAwLjczNzMxcmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5oaXN0b3J5LWJsb2NrIHtcclxuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAvLyBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5oaXN0b3J5LWRhdGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5kYXRlLXBpbGwge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMzg3NXJlbSAwLjVyZW07XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDAuMzc1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44NzVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICMzYjgyZjY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGlzdG9yeS1ibG9jay1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8gZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgICAuYWN0aW9uLXN0YXR1cy1waWxsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMC42MjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgICAgICAgO1xyXG4gICAgICAgICAgLy8gcGFkZGluZzogMHJlbSAwLjYyNXJlbTtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI4cmVtIDAuN3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oaXN0b3J5LWRldGFpbHMtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAxLjM3NXJlbTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIycHg7XHJcbiAgICAgICAgd2lkdGg6IDE3LjI1cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmVydGljYWwtbGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogNC42cmVtO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHdpZHRoOiAwLjEyNXJlbTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxYjAzYTM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGlzdG9yeS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAwLjQzNzVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcblxyXG4gICAgICAgIC5oaXN0b3J5LWluZm8ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICAgIC5oaXN0b3J5LWluZm8tdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG4gICAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVwYWlyLXBkZi10ZXh0IHtcclxuICAgICAgICAgICAgLmRhdGEtaGlzdG9yeS1zcGFuIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWItY29udGVudC1wZGYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAuZGF0YS1oaXN0b3J5IHtcclxuICAgICAgICAgICAgICAuZGF0YS1oaXN0b3J5LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIC5kYXRhLWhpc3Rvcnktc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgLyogQXV0byBsYXlvdXQgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTg2cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTg2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI2LCAzNCwgNTEsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAzcHggcmdiYSg5NiwgMTA4LCAxMjgsIDAuMDUpKTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mb2xkZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbnMvcGRmLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnZpZXctYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgICAgICAgICAgLnZpZXctaW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjM2I4MmY2O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1jbG9zZSB7XHJcbiAgd2lkdGg6IDAuOXB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVudS1vcGVuIHtcclxuICB3aWR0aDogMjVyZW0gIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB0b3A6IDQyJTtcclxuICByaWdodDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0teGEtd2hpdGUpO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuXHJcbiAgLmJ0bi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyLjc0Nzk0cmVtO1xyXG4gICAgaGVpZ2h0OiA1LjMzMDU2cmVtO1xyXG4gICAgd3JpdGluZy1tb2RlOiB0Yi1ybDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGUtc2Nyb2xsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5oaXN0b3J5LXNpZGVuYXYubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDUwMyAhaW1wb3J0YW50O1xyXG5cclxuICAubWF0LWRyYXdlci1iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVyLXJlcGFpciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgMywgMTYzLCAwLjA1KTtcclxufVxyXG5cclxuLmJnLWJsdWUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjYsIDM0LCA1MSwgMC4yMCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1xdW90ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIwNSwgNDAsIDAuMjApO1xyXG59XHJcblxyXG4uYm9yZGVyLWZub2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjAzQTMwRDtcclxufVxyXG5cclxuLmJvcmRlci1jbGFpbXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0NEMjgzMztcclxufVxyXG5cclxuLmJnLXllbGxvdyB7XHJcbiAgYmFja2dyb3VuZDogI2QzY2QyOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctZ3JleSB7XHJcbiAgYmFja2dyb3VuZDogIzFBMjIzMzMzICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogcmdiYSgyNiwgMzQsIDUxLCAwLjA1KTtcclxufVxyXG5cclxuLy8gUGlsbCBTdGF0dXMgY29sb3JzXHJcbi5SZXBhaXJFc3RpbWF0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZXBhaXItZXN0aW1hdGUpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcblxyXG4uVXBsb2FkRG9jdW1lbnRzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS11cGxvYWQtZG9jdW1lbnQpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi5BZGRQaG90b3MsXHJcbi5VcGxvYWRQaG90b3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXVwbG9hZC1waG90byk7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLlZlaGljbGVEZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS12ZWhpY2xlLWRldGFpbCk7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkFwcHJvdmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ncmVlbik7XHJcbiAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxufVxyXG5cclxuLlJlamVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZWQpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi5DbG9zZWQsXHJcbi5Db21wbGV0ZSxcclxuLkNvbXBsZXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYmx1ZSk7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkRyYWZ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1kcmFmdCk7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLlBlbmRpbmdBcHByb3ZhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtb3JhbmdlKTtcclxuICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG59XHJcblxyXG4uUmVhZHl0b0ludm9pY2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M0JDRTE7XHJcbiAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxufVxyXG5cclxuLlJlcGFpckluUHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzAxRkU7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkhvbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRTZERDA7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkludm9pY2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjQ2M0VFO1xyXG4gIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi52aWV3LWF0dGFjaG1lbnQge1xyXG4gIGNvbG9yOiAjM2I4MmY2O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uQXNzaWduZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzAxRkU7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLlN1Ym1pdHRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5QzI2OTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uRGV0YWlsc1VwZGF0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdmVoaWNsZS1kZXRhaWwpO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkNsYWltQXV0aGVudGljYXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjhEOTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uUmV2aWV3SW5Qcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjk1RDtcclxuICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLkNsYWltU3VibWl0dGVkRm9yQXBwcm92YWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMkYwQUI7XHJcbiAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5BcHByb3ZhbFJldmlld0luUHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0RCQjc7XHJcbiAgY29sb3I6IHZhcigtLXhhLWJsYWNrLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5HYXJhZ2VBc3NpZ25tZW50UmVxdWVzdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1nYXJhZ2UtcmVxdWVzdGVkKTtcclxuICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLkdhcmFnZUFzc2lnbmVkZm9yQ2xhaW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWJsdWVzaC1ncmV5KTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uR2FyYWdlQXNzaWdubWVudFJlcXVlc3RlZFJlamVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbiAgICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4ubWItNzUge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbn1cclxuXHJcbi5Fc3RpbWF0ZUFwcHJvdmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1kcC1saWdodC1ncmVlbik7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkVzdGltYXRlUmVqZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXN1bnNldC1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi5SZXBhaXJJbml0aWF0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXBlbmRpbmctYXBwcm92YWwpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcblxyXG4uUmVwYWlySW52b2ljZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLXhhLWludm9pY2UtcmVhZHkpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi5TZXR0bGVtZW50SW5pdGlhdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uQXNzaWduZWRCYWNrRnJvbVJldmlldyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtYXNzaWduZWQtYmFjay1yZXZpZXcpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuXHJcbi5Bc3NpZ25lZEJhY2tGcm9tQXBwcm92YWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWFzc2lnbmVkLWJhY2stYXBwcm92YWwpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcblxyXG4uSW52b2ljZVJlcXVlc3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtcmVxdWVzdC1pbnZvaWNlKTtcclxuICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG5cclxuLkVzdGltYXRlUmVxdWVzdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZXF1ZXN0LWVzdGltYXRlKTtcclxuICBjb2xvcjogdmFyKC0teGEtYmxhY2stbWVkaXVtKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_history_history_component_ts.js.map