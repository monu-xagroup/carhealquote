"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_booking-journal_booking-journal_module_ts"],{

/***/ 53018:
/*!**************************************************************************!*\
  !*** ./src/app/modules/repair/booking-journal/booking-journal.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingJournalModule": () => (/* binding */ BookingJournalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ 9282);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular */ 46209);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ 16987);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular */ 73886);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helper/directive/directive.module */ 67798);
/* harmony import */ var src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helper/pipe.module */ 39816);
/* harmony import */ var src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/icons.module */ 25852);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/resolvers/versionControl.resolver */ 74743);
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/widgets/widgets.module */ 50546);
/* harmony import */ var _booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-journal/booking-journal.component */ 11121);
/* harmony import */ var _booking_message_booking_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking-message/booking-message.component */ 13224);
/* harmony import */ var _booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking-preview/booking-preview.component */ 72994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);

















const casesRoutes = [{
  path: '',
  component: _booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_6__.BookingJournalComponent,
  resolve: {
    version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_4__.VersionControlResolver
  }
}];
class BookingJournalModule {
  static #_ = this.ɵfac = function BookingJournalModule_Factory(t) {
    return new (t || BookingJournalModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: BookingJournalModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(casesRoutes), devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxSchedulerModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxTemplateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxDraggableModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DxScrollViewModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_17__.DxoScrollingModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](BookingJournalModule, {
    declarations: [_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_6__.BookingJournalComponent, _booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_8__.BookingPreviewComponent, _booking_message_booking_message_component__WEBPACK_IMPORTED_MODULE_7__.BookingMessageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxSchedulerModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxTemplateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxDraggableModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DxScrollViewModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_17__.DxoScrollingModule, src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_5__.WidgetsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, src_app_helper_directive_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, src_app_helper_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule]
  });
})();

/***/ }),

/***/ 13224:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/repair/booking-journal/booking-message/booking-message.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingMessageComponent": () => (/* binding */ BookingMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../widgets/chq-input/chq-input.component */ 90082);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_rich_text_editor_chq_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../widgets/chq-rich-text-editor/chq-rich-text-editor.component */ 19245);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











class BookingMessageComponent {
  constructor(dialogRef, data, formBuilder, commonService) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.formBuilder = formBuilder;
    this.commonService = commonService;
    this.messageForm = this.formBuilder.group({
      Type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      Subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      Message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.messageModal = [{
      placeHolder: 'Type',
      name: 'Type',
      label: 'type',
      value: '',
      type: 'radio',
      options: [{
        label: 'Insurance',
        value: 'Insurance',
        checked: false
      }, {
        label: 'Driver',
        value: 'Driver',
        checked: false
      }]
    }, {
      placeHolder: 'Email Address',
      label: 'email_address',
      name: 'Email',
      value: '',
      type: 'text',
      suffix: 'CC BCC'
    }, {
      placeHolder: 'Subject',
      name: 'Subject',
      label: 'subject',
      value: '',
      type: 'text'
    }, {
      placeHolder: 'Message',
      name: 'Message',
      label: 'message',
      value: '',
      type: 'textarea'
    }];
    this.attachmentButton = {
      label: 'add_attachment',
      type: 'outline',
      icon: 'attachment',
      iconColor: 'black'
    };
    this.sendButton = {
      label: 'send',
      type: this.messageForm.valid ? 'primary' : 'disabled',
      icon: 'send',
      iconColor: 'white'
    };
  }
  onFormUpdate(output) {
    this.messageForm.get(output.name).setValue(output.value);
  }
  onSubmit() {
    console.log(this.messageForm);
  }
  static #_ = this.ɵfac = function BookingMessageComponent_Factory(t) {
    return new (t || BookingMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BookingMessageComponent,
    selectors: [["chr-booking-message"]],
    decls: 38,
    vars: 20,
    consts: [[1, "booking-message-dialog", "dialog-with-header"], [1, "header"], [1, "title"], [1, "action"], ["color", "white", 3, "svgIcon", "mat-dialog-close"], [1, "mat-typography"], [1, "booking-message-wrapper"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "info"], [1, "radio-label"], [3, "inputModel", "controlOutput"], [1, "col-12", "email"], [1, "input-wrapper", "input-text"], [1, "input-label"], [3, "height", "initialValue", "currentValue"], [1, "footer"], [3, "buttonModel", "click"]],
    template: function BookingMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-content", 5)(9, "div", 6)(10, "form", 7)(11, "div", 8)(12, "div", 9)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "chq-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function BookingMessageComponent_Template_chq_input_controlOutput_21_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8)(23, "div", 13)(24, "chq-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function BookingMessageComponent_Template_chq_input_controlOutput_24_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "chq-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function BookingMessageComponent_Template_chq_input_controlOutput_27_listener($event) {
          return ctx.onFormUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 8)(29, "div", 9)(30, "div", 14)(31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "chq-rich-text-editor", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("currentValue", function BookingMessageComponent_Template_chq_rich_text_editor_currentValue_34_listener($event) {
          return $event.value;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 17)(36, "chq-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingMessageComponent_Template_chq_button_click_36_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "chq-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingMessageComponent_Template_chq_button_click_37_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 12, "send_email"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.messageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 14, "email_message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 16, "type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.messageModal[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.messageModal[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.messageModal[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 18, "message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("height", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.attachmentButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.sendButton);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_1__.ChqInputComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_2__.ChqButtonComponent, _widgets_chq_rich_text_editor_chq_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_3__.ChqRichTextEditorComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: [".booking-message-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--xa-popup-light-gray);\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 16px 25px;\n  gap: 25px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .booking-message-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 140px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--xa-black-dark);\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 8px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  float: right;\n  padding: 16px 25px;\n  gap: 15px;\n}\n\n.input-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBhaXIvYm9va2luZy1qb3VybmFsL2Jvb2tpbmctbWVzc2FnZS9ib29raW5nLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQUNKO0FBRVE7RUFDSSxzQkFBQTtBQUFaO0FBSVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZoQjtBQUlnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRnBCO0FBUUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQU5SO0FBUVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBTlo7QUFTUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBUFo7QUFVUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFSWjtBQVdnQjtFQUNJLG1CQUFBO0FBVHBCO0FBV29CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQVR4QjtBQVlvQjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQVZ4QjtBQWlCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFmUjs7QUFtQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFoQkoiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va2luZy1tZXNzYWdlLWRpYWxvZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXhhLXBvcHVwLWxpZ2h0LWdyYXkpO1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib29raW5nLW1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjVweDtcclxuICAgICAgICBnYXA6IDI1cHg7XHJcblxyXG4gICAgICAgIC5ib29raW5nLW1lc3NhZ2UtYWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleDogMSAxIDE0MHB4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgIC5jb2wtMTIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnJhZGlvLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtZGFyay1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDI1cHg7XHJcbiAgICAgICAgZ2FwOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5wdXQtbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

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
  static #_ = this.ɵfac = function VersionControlResolver_Factory(t) {
    return new (t || VersionControlResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VersionControlResolver,
    factory: VersionControlResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_repair_booking-journal_booking-journal_module_ts.js.map