"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["default-src_app_shared_history_history_component_ts"],{

/***/ 65504:
/*!*****************************************************!*\
  !*** ./src/app/shared/history/history.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ 21859);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_widgets_chq_repair_dialog_chq_repair_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/widgets/chq-repair-dialog/chq-repair-dialog.component */ 25015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/chq-button/chq-button.component */ 36978);
/* harmony import */ var _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/chq-customloader/chq-customloader.component */ 48262);






















const _c0 = ["sidenav"];
function HistoryComponent_aside_10_div_2_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const block_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Repair Estimate ", ctx_r6.currencySymbol, " ", block_r5.oldValue, " ");
  }
}
function HistoryComponent_aside_10_div_2_div_4_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", block_r5 == null ? null : block_r5.newValue, " ");
  }
}
function HistoryComponent_aside_10_div_2_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HistoryComponent_aside_10_div_2_div_4_div_21_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const block_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.downloadPdfHistory(block_r5.referenceId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Repair Estimate Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
}
function HistoryComponent_aside_10_div_2_div_4_span_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HistoryComponent_aside_10_div_2_div_4_span_23_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const block_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.showImageDialog(block_r5.blobUrls, block_r5.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "View Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HistoryComponent_aside_10_div_2_div_4_span_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HistoryComponent_aside_10_div_2_div_4_span_24_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      const block_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.showCommentDialog(block_r5.comment, block_r5 == null ? null : block_r5.caseStatus == null ? null : block_r5.caseStatus.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "View Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HistoryComponent_aside_10_div_2_div_4_chq_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "chq-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HistoryComponent_aside_10_div_2_div_4_chq_button_25_Template_chq_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const block_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.showCommentDialog(null, block_r5 == null ? null : block_r5.name, block_r5.messageContent));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("buttonModel", ctx_r11.viewMessage);
  }
}
function HistoryComponent_aside_10_div_2_div_4_a_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "View Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", block_r5.blobUrls, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function HistoryComponent_aside_10_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 16)(4, "div", 17)(5, "div", 18)(6, "div", 19)(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 21)(11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, HistoryComponent_aside_10_div_2_div_4_div_13_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, HistoryComponent_aside_10_div_2_div_4_p_19_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, HistoryComponent_aside_10_div_2_div_4_div_21_Template, 6, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, HistoryComponent_aside_10_div_2_div_4_span_23_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, HistoryComponent_aside_10_div_2_div_4_span_24_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, HistoryComponent_aside_10_div_2_div_4_chq_button_25_Template, 1, 1, "chq-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, HistoryComponent_aside_10_div_2_div_4_a_26_Template, 2, 1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-blue", (block_r5 == null ? null : block_r5.addendaSystem) === "Repair")("bg-yellow", (block_r5 == null ? null : block_r5.addendaSystem) === "Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("border-repair", (block_r5 == null ? null : block_r5.addendaSystem) === "Repair")("border-quote", (block_r5 == null ? null : block_r5.addendaSystem) === "Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", block_r5.caseStatus.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 20, block_r5.caseStatus.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](block_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", block_r5.name.toLowerCase().indexOf("repair") > -1 && block_r5.referenceId > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](block_r5 == null ? null : block_r5.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](18, 22, block_r5.actionedOn, "hh:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", block_r5.newValue !== null && block_r5.name.toLowerCase().indexOf("repair estim") === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", block_r5.name.toLowerCase().indexOf("repair") > -1 && block_r5.referenceId > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((block_r5.name == null ? null : block_r5.name.toLowerCase().indexOf("photo")) !== -1 || (block_r5.name == null ? null : block_r5.name.toLowerCase().indexOf("document")) !== -1) && block_r5.blobUrls !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", block_r5.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", block_r5.messageContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (block_r5.name == null ? null : block_r5.name.toLowerCase().indexOf("invoice paid amount")) !== -1 && block_r5.blobUrls);
  }
}
function HistoryComponent_aside_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HistoryComponent_aside_10_div_2_div_4_Template, 27, 25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r3.auditDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r3.auditTrailResponseDetails);
  }
}
function HistoryComponent_aside_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "aside", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HistoryComponent_aside_10_div_2_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.history);
  }
}
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
    this.toggleExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.history = [];
    this.isMenuOpen = false;
    this.isLoading = false;
    this.currencySymbol = '';
    this.viewMessage = {
      label: 'View message',
      icon: 'show',
      type: 'outline'
    };
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationStart)).subscribe({
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
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) {
  return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};
HistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HistoryComponent,
  selectors: [["history"]],
  viewQuery: function HistoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
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
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
  decls: 11,
  vars: 12,
  consts: [[1, "toggle-button", 3, "ngStyle", "click"], [1, "btn-wrapper"], [1, "history-sidenav", 3, "hasBackdrop", "backdropClick"], ["mode", "over", "position", "end", "fixedInViewport", "true", "disableClose", "", 3, "opened", "keydown.escape"], ["sidenav", ""], [3, "showLoading"], ["class", "history-slide-panel", 4, "ngIf"], [1, "history-slide-panel"], [1, "history-items"], ["class", "history-block", 4, "ngFor", "ngForOf"], [1, "history-block"], [1, "history-date"], [1, "date-pill"], ["class", "history-block-container", 4, "ngFor", "ngForOf"], [1, "history-block-container"], [1, "vertical-line"], [1, "history-details-wrapper"], [1, "history-details"], [1, "history-info"], [1, "action-status-pill"], [3, "ngClass"], [1, "history-info-title"], ["class", "repair-pdf-text", 4, "ngIf"], [4, "ngIf"], [1, "sub-content-pdf"], ["class", "data-history", 4, "ngIf"], [1, "view-btn-container"], ["class", "view-image", 3, "click", 4, "ngIf"], [3, "buttonModel", "click", 4, "ngIf"], ["class", "view-attachment", "target", "_blank", 3, "href", 4, "ngIf"], [1, "repair-pdf-text"], [1, "data-history-span"], [1, "data-history"], [1, "data-history-content"], [1, "content-file", 3, "click"], [1, "folder-icon"], [1, "view-image", 3, "click"], [3, "buttonModel", "click"], ["target", "_blank", 1, "view-attachment", 3, "href"]],
  template: function HistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HistoryComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-sidenav-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("backdropClick", function HistoryComponent_Template_mat_sidenav_container_backdropClick_6_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-sidenav", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown.escape", function HistoryComponent_Template_mat_sidenav_keydown_escape_7_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "chq-customloader", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, HistoryComponent_aside_10_Template, 3, 1, "aside", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx.isMenuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](11, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isMenuOpen ? "keyboard_arrow_down" : "keyboard_arrow_up");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasBackdrop", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("menu-open", ctx.isMenuOpen)("menu-close", !ctx.isMenuOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("opened", ctx.isMenuOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("showLoading", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    }
  },
  dependencies: [src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_6__.ChqButtonComponent, _widgets_chq_customloader_chq_customloader_component__WEBPACK_IMPORTED_MODULE_7__.CustomloaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon],
  styles: [".history-slide-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  width: 100%;\n  overflow: scroll;\n  background: #fff;\n}\n.history-slide-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%] {\n  padding: 2.24856rem 0.01269rem 0.00144rem 0.73731rem;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-date[_ngcontent-%COMP%] {\n  display: flex;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-date[_ngcontent-%COMP%]   .date-pill[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.3875rem 0.5rem;\n  justify-content: center;\n  align-items: center;\n  gap: 0.375rem;\n  border-radius: 0.875rem;\n  border: 2px solid rgba(26, 34, 51, 0.2);\n  background: #fff;\n  color: #3b82f6;\n  font-size: 0.6rem;\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%]   .action-status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.75rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-block-container[_ngcontent-%COMP%]   .action-status-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  border-radius: 0.625rem;\n  padding: 0.28rem 0.7rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 0.625rem;\n  border: none;\n  padding: 0.625rem 1.375rem;\n  margin: 10px 0;\n  margin-left: -22px;\n  width: 17.25rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  display: flex;\n  width: 4.6rem;\n  justify-content: center;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  height: 100%;\n  background: #1b03a3;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.4375rem;\n  border-radius: 0.625rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .history-info-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap-reverse;\n  gap: 0.5rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .repair-pdf-text[_ngcontent-%COMP%]   .data-history-span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--xa-dark-gray);\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  margin-top: 0.5rem;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .data-history-span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  cursor: pointer;\n  \n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 4px 8px;\n  gap: 10px;\n  max-width: 186px;\n  min-width: 186px;\n  border: 1px solid rgba(26, 34, 51, 0.2);\n  filter: drop-shadow(0px 1px 3px rgba(96, 108, 128, 0.05));\n  border-radius: 5px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%]   .folder-icon[_ngcontent-%COMP%] {\n  background: url(/assets/icons/pdf.svg) no-repeat;\n  height: 20px;\n  width: 20px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .sub-content-pdf[_ngcontent-%COMP%]   .data-history[_ngcontent-%COMP%]   .data-history-content[_ngcontent-%COMP%]   .content-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .view-btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.history-slide-panel[_ngcontent-%COMP%]   .history-items[_ngcontent-%COMP%]   .history-block[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .view-btn-container[_ngcontent-%COMP%]   .view-image[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.menu-close[_ngcontent-%COMP%] {\n  width: 0.9px !important;\n  transform: none !important;\n  visibility: visible !important;\n  display: block !important;\n}\n\n.menu-open[_ngcontent-%COMP%] {\n  width: 25rem !important;\n  transition: width 0.3s ease-in;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate3d(0, 0, 0);\n  top: 38%;\n  right: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  background: var(--xa-white);\n  z-index: 999;\n  border-radius: 0.375rem;\n}\n.toggle-button[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 2.74794rem;\n  height: 5.33056rem;\n  writing-mode: tb-rl;\n  transform: rotate(-180deg);\n  background-color: #fff;\n  border-radius: 0.375rem;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.toggle-button[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\n.disable-scroll[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n .history-sidenav.mat-drawer-container {\n  background-color: transparent;\n  z-index: 503 !important;\n}\n .history-sidenav.mat-drawer-container .mat-drawer-backdrop {\n  position: fixed;\n}\n\n.border-repair[_ngcontent-%COMP%] {\n  background-color: rgba(27, 3, 163, 0.05);\n}\n\n.bg-blue[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.2) !important;\n}\n\n.border-quote[_ngcontent-%COMP%] {\n  background-color: rgba(211, 205, 40, 0.2);\n}\n\n.bg-yellow[_ngcontent-%COMP%] {\n  background: #d3cd28 !important;\n}\n\n.bg-grey[_ngcontent-%COMP%] {\n  background: rgba(26, 34, 51, 0.05);\n}\n\n.RepairEstimation[_ngcontent-%COMP%] {\n  background-color: var(--xa-repair-estimate);\n  color: var(--xa-black-medium);\n}\n\n.UploadDocuments[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-document);\n  color: var(--xa-white);\n}\n\n.AddPhotos[_ngcontent-%COMP%], .UploadPhotos[_ngcontent-%COMP%] {\n  background-color: var(--xa-upload-photo);\n  color: var(--xa-white);\n}\n\n.VehicleDetails[_ngcontent-%COMP%] {\n  background-color: var(--xa-vehicle-detail);\n  color: var(--xa-white);\n}\n\n.Approved[_ngcontent-%COMP%] {\n  background-color: var(--xa-green);\n  color: var(--xa-black);\n}\n\n.Rejected[_ngcontent-%COMP%] {\n  background-color: var(--xa-red);\n  color: var(--xa-white);\n}\n\n.Closed[_ngcontent-%COMP%], .Complete[_ngcontent-%COMP%] {\n  background-color: var(--xa-blue);\n  color: var(--xa-white);\n}\n\n.Draft[_ngcontent-%COMP%] {\n  background-color: var(--xa-draft);\n  color: var(--xa-white);\n}\n\n.PendingApproval[_ngcontent-%COMP%] {\n  background-color: var(--xa-orange);\n  color: var(--xa-black);\n}\n\n.ReadytoInvoice[_ngcontent-%COMP%] {\n  background-color: #93BCE1;\n  color: var(--xa-black);\n}\n\n.RepairInProgress[_ngcontent-%COMP%] {\n  background-color: #4301FE;\n  color: var(--xa-white);\n}\n\n.Hold[_ngcontent-%COMP%] {\n  background-color: #CE6DD0;\n  color: var(--xa-white);\n}\n\n.Invoiced[_ngcontent-%COMP%] {\n  background-color: #B463EE;\n  color: var(--xa-white);\n}\n\n.view-attachment[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-weight: 500;\n  font-size: 0.75rem !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7QUFFSjtBQUFFO0VBQ0Usb0RBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFJO0VBR0UsYUFBQTtFQUNBLHNCQUFBO0FBQU47QUFFTTtFQUNFLGFBQUE7QUFBUjtBQUNRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNWO0FBR007RUFDRSxhQUFBO0FBRFI7QUFJUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRlY7QUFLVTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBSFo7QUFPTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBUU07RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBTlI7QUFRUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFOVjtBQVVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFSUjtBQVNRO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQVBWO0FBUVU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQU5aO0FBUVU7RUFDRSxrQkFBQTtBQU5aO0FBUVU7RUFDRSxnQkFBQTtBQU5aO0FBU1k7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQVBkO0FBVVU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQVJaO0FBV2M7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVGhCO0FBV2dCO0VBQ0UsZ0JBQUE7QUFUbEI7QUFZZ0I7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBR0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLHVDQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQWZsQjtBQWlCa0I7RUFDRSxnREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZnBCO0FBa0JrQjtFQUNFLGVBQUE7QUFoQnBCO0FBdUJVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQXJCWjtBQXNCWTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQXBCZDs7QUE2QkE7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0VBRUEsOEJBQUE7RUFDQSx5QkFBQTtBQTNCRjs7QUE2QkE7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FBMUJGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUExQkY7QUE0QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBMUJKO0FBMkJJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQXpCTjs7QUE2QkE7RUFDRSwyQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0FBMUJGO0FBNEJFO0VBQ0UsZUFBQTtBQTFCSjs7QUE4QkE7RUFDRSx3Q0FBQTtBQTNCRjs7QUE2QkE7RUFDRSw0Q0FBQTtBQTFCRjs7QUE0QkE7RUFDRSx5Q0FBQTtBQXpCRjs7QUEyQkE7RUFDRSw4QkFBQTtBQXhCRjs7QUEwQkE7RUFDRSxrQ0FBQTtBQXZCRjs7QUEyQkE7RUFDRSwyQ0FBQTtFQUNBLDZCQUFBO0FBeEJGOztBQTBCQTtFQUNFLDJDQUFBO0VBQ0Esc0JBQUE7QUF2QkY7O0FBMEJBOztFQUVFLHdDQUFBO0VBQ0Esc0JBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0FBdkJGOztBQTBCQTtFQUNFLCtCQUFBO0VBQ0Esc0JBQUE7QUF2QkY7O0FBMEJBOztFQUVFLGdDQUFBO0VBQ0Esc0JBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtBQXZCRjs7QUF5QkE7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0FBdEJGOztBQXdCQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFyQkY7O0FBdUJBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQXBCRjs7QUFzQkE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBbkJGOztBQXFCQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFsQkYiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdG9yeS1zbGlkZS1wYW5lbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaGlzdG9yeS1pdGVtcyB7XHJcbiAgICBwYWRkaW5nOiAyLjI0ODU2cmVtIDAuMDEyNjlyZW0gMC4wMDE0NHJlbSAwLjczNzMxcmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5oaXN0b3J5LWJsb2NrIHtcclxuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAvLyBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5oaXN0b3J5LWRhdGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmRhdGUtcGlsbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC4zODc1cmVtIDAuNXJlbTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogMC4zNzVyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjg3NXJlbTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjYsIDM0LCA1MSwgMC4yKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBjb2xvcjogIzNiODJmNjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oaXN0b3J5LWJsb2NrLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBnYXA6IDFyZW07XHJcblxyXG4gICAgICAgIC5hY3Rpb24tc3RhdHVzLXBpbGwge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZ2FwOiAwLjYyNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07O1xyXG4gICAgICAgICAgLy8gcGFkZGluZzogMHJlbSAwLjYyNXJlbTtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI4cmVtIDAuN3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmhpc3RvcnktZGV0YWlscy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDEuMzc1cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjJweDtcclxuICAgICAgICB3aWR0aDogMTcuMjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52ZXJ0aWNhbC1saW5lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiA0LjZyZW07XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDAuMTI1cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFiMDNhMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oaXN0b3J5LWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDAuNDM3NXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICAgICAgICAuaGlzdG9yeS1pbmZvIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIC5oaXN0b3J5LWluZm8tdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG4gICAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwYWlyLXBkZi10ZXh0IHtcclxuICAgICAgICAgICAgLmRhdGEtaGlzdG9yeS1zcGFuIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1jb250ZW50LXBkZiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgIC5kYXRhLWhpc3Rvcnkge1xyXG4gICAgICAgICAgICAgIC5kYXRhLWhpc3RvcnktY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgLmRhdGEtaGlzdG9yeS1zcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGVudC1maWxlIHtcclxuICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAvKiBBdXRvIGxheW91dCAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxODZweDtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxODZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjYsIDM0LCA1MSwgMC4yKTtcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDNweCByZ2JhKDk2LCAxMDgsIDEyOCwgMC4wNSkpO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgLmZvbGRlci1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy9wZGYuc3ZnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudmlldy1idG4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIC52aWV3LWltYWdlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzNiODJmNjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtY2xvc2Uge1xyXG4gIHdpZHRoOiAwLjlweCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgIWltcG9ydGFudDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4ubWVudS1vcGVuIHtcclxuICB3aWR0aDogMjVyZW0gIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgdG9wOiAzOCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXhhLXdoaXRlKTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcblxyXG4gIC5idG4td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi43NDc5NHJlbTtcclxuICAgIGhlaWdodDogNS4zMzA1NnJlbTtcclxuICAgIHdyaXRpbmctbW9kZTogdGItcmw7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZGlzYWJsZS1zY3JvbGwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLmhpc3Rvcnktc2lkZW5hdi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgei1pbmRleDogNTAzICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXItcmVwYWlyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAzLCAxNjMsIDAuMDUpO1xyXG59XHJcbi5iZy1ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAzNCwgNTEsIDAuMjApICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvcmRlci1xdW90ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIwNSwgNDAsIDAuMjApO1xyXG59XHJcbi5iZy15ZWxsb3cge1xyXG4gIGJhY2tncm91bmQ6ICNkM2NkMjggIWltcG9ydGFudDtcclxufVxyXG4uYmctZ3JleSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNiwgMzQsIDUxLCAwLjA1KTtcclxufVxyXG5cclxuLy8gUGlsbCBTdGF0dXMgY29sb3JzXHJcbi5SZXBhaXJFc3RpbWF0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1yZXBhaXItZXN0aW1hdGUpO1xyXG4gIGNvbG9yOiB2YXIoLS14YS1ibGFjay1tZWRpdW0pO1xyXG59XHJcbi5VcGxvYWREb2N1bWVudHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXVwbG9hZC1kb2N1bWVudCk7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkFkZFBob3RvcyxcclxuLlVwbG9hZFBob3RvcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtdXBsb2FkLXBob3RvKTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uVmVoaWNsZURldGFpbHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXZlaGljbGUtZGV0YWlsKTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uQXBwcm92ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG59XHJcblxyXG4uUmVqZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLXJlZCk7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLkNsb3NlZCxcclxuLkNvbXBsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14YS1ibHVlKTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcblxyXG4uRHJhZnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLWRyYWZ0KTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcbi5QZW5kaW5nQXBwcm92YWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXhhLW9yYW5nZSk7XHJcbiAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxufVxyXG4uUmVhZHl0b0ludm9pY2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M0JDRTE7XHJcbiAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxufVxyXG4uUmVwYWlySW5Qcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzMDFGRTtcclxuICBjb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG59XHJcbi5Ib2xkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0U2REQwO1xyXG4gIGNvbG9yOiB2YXIoLS14YS13aGl0ZSk7XHJcbn1cclxuLkludm9pY2Vke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCNDYzRUU7XHJcbiAgY29sb3I6IHZhcigtLXhhLXdoaXRlKTtcclxufVxyXG5cclxuLnZpZXctYXR0YWNobWVudCB7XHJcbiAgY29sb3I6ICMzYjgyZjY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_history_history_component_ts.js.map