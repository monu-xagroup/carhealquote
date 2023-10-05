"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["default-src_app_shared_shared_module_ts"],{

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
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/case/case.service */ 38709);
/* harmony import */ var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/inspection-service/inspection.service */ 13975);
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
        this.calendarService.deleteBooking(this.repairData?.booking?.bookingGuid).subscribe({
          next: () => {
            this.commonService.hideLoading();
            this.router.navigate(['/repair/booking-journal']);
          }
        });
      }
    });
  }
}
AddPhotosComponent.ɵfac = function AddPhotosComponent_Factory(t) {
  return new (t || AddPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_0__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_2__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_3__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_4__.RepairEstimateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService));
};
AddPhotosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
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
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.photosHeader.isRepairModule !== true || ctx.photosHeader.isHeaderOnly === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.showSPI || !ctx.hideBulk) && !ctx.repairUnapproved && !ctx.commonService.isViewOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showSPI && ctx.hideBulk || ctx.repairUnapproved || ctx.commonService.isViewOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "assets/img/", +ctx.photosHeader.isRepairModule ? "addenda-repair.png" : "addenda-quote.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
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
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var _no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);











class ErrorModule {}
ErrorModule.ɵfac = function ErrorModule_Factory(t) {
  return new (t || ErrorModule)();
};
ErrorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ErrorModule
});
ErrorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ErrorModule, {
    declarations: [_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_1__.NoAccessErrorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule],
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

class NoAccessErrorComponent {}
NoAccessErrorComponent.ɵfac = function NoAccessErrorComponent_Factory(t) {
  return new (t || NoAccessErrorComponent)();
};
NoAccessErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_mediacollection_service_mediacollection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mediacollection-service/mediacollection.service */ 74178);
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
        this.imageUploaders.updateUploadStatus('success', currentStep);
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
              booking
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
            this.footer.bookingId = booking?.bookingGuid;
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
}
NewDocumentsComponent.ɵfac = function NewDocumentsComponent_Factory(t) {
  return new (t || NewDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_3__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_4__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_mediacollection_service_mediacollection_service__WEBPACK_IMPORTED_MODULE_6__.MediacollectionService));
};
NewDocumentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
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
/* harmony import */ var src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitor-service/monitor.service */ 35196);
/* harmony import */ var src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/inspection-service/inspection.service */ 13975);
/* harmony import */ var src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/booking/booking.service */ 8985);
/* harmony import */ var src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/repair-estimate/repair-estimate.service */ 87855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/chq-images-uploader/chq-images-uploader.component */ 39912);
/* harmony import */ var _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../error-page/no-access-error/no-access-error.component */ 54135);
/* harmony import */ var _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helper/directive/has-permission.directive */ 22406);
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
                    booking,
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
                    bookingId: booking?.bookingGuid
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
}
NewPhotosComponent.ɵfac = function NewPhotosComponent_Factory(t) {
  return new (t || NewPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_case_case_service__WEBPACK_IMPORTED_MODULE_4__.CaseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_monitor_service_monitor_service__WEBPACK_IMPORTED_MODULE_5__.MonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_inspection_service_inspection_service__WEBPACK_IMPORTED_MODULE_6__.InspectionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_7__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_repair_estimate_repair_estimate_service__WEBPACK_IMPORTED_MODULE_8__.RepairEstimateService));
};
NewPhotosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _widgets_chq_images_uploader_chq_images_uploader_component__WEBPACK_IMPORTED_MODULE_9__.ChqImagesUploaderComponent, _error_page_no_access_error_no_access_error_component__WEBPACK_IMPORTED_MODULE_10__.NoAccessErrorComponent, _helper_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__.HasPermissionDirective, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_12__.AddPhotosComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_13__.DamageAnalysisComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
  styles: [".photo-container[_ngcontent-%COMP%] {\n  margin-left: calc(6px + 1.5vw);\n  margin-right: calc(5px + 1.5vw);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n}\n\n.empty-wrapper[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--xa-light-gray);\n}\n\n.step-container[_ngcontent-%COMP%] {\n  padding: 15px 11px;\n  height: 25%;\n  border-bottom: 1px solid var(--xa-light-gray);\n  background-color: var(--xa-white);\n  width: 130px;\n}\n\n.no-document-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.no-document-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 215px;\n}\n.no-document-div[_ngcontent-%COMP%]   .no-vehicle-content[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 21px;\n  text-align: center;\n  color: var(--xa-black);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25ldy1waG90b3MvbmV3LXBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLDJDQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQURSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFEUiIsInNvdXJjZXNDb250ZW50IjpbIi5waG90by1jb250YWluZXIge1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDZweCArIDEuNXZ3KTtcclxuICAgIG1hcmdpbi1yaWdodDogY2FsYyg1cHggKyAxLjV2dyk7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZW1wdHktd3JhcHBlcntcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0teGEtbGlnaHQtZ3JheSk7XHJcbn1cclxuXHJcbi5zdGVwLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDExcHg7XHJcbiAgICBoZWlnaHQ6MjUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXhhLWxpZ2h0LWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teGEtd2hpdGUpO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG4ubm8tZG9jdW1lbnQtZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjE1cHg7XHJcbiAgICB9XHJcbiAgICAubm8tdmVoaWNsZS1jb250ZW50e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2spO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/widgets/chq-widgets.module */ 85510);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var src_app_guards_deactivate_gaurd_deactivate_gaurd_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/deactivate-gaurd/deactivate-gaurd.guard */ 38080);
/* harmony import */ var src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/error-page/error.module */ 88784);
/* harmony import */ var _new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-documents/new-documents.component */ 64307);
/* harmony import */ var _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-photos/new-photos.component */ 4704);
/* harmony import */ var _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-photos/add-photos.component */ 62119);
/* harmony import */ var _icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons.module */ 25852);
/* harmony import */ var _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./damage-analysis/damage-analysis.component */ 9988);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _helper_directive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/directive.module */ 20363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);













class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [src_app_guards_deactivate_gaurd_deactivate_gaurd_guard__WEBPACK_IMPORTED_MODULE_1__.CanDeactivateGuard],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _icons_module__WEBPACK_IMPORTED_MODULE_6__.IconsModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _helper_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__.NewDocumentsComponent, _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__.NewPhotosComponent, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__.AddPhotosComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__.DamageAnalysisComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _icons_module__WEBPACK_IMPORTED_MODULE_6__.IconsModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsModule, src_app_shared_error_page_error_module__WEBPACK_IMPORTED_MODULE_2__.ErrorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _helper_directive_module__WEBPACK_IMPORTED_MODULE_8__.DirectiveModule],
    exports: [_new_documents_new_documents_component__WEBPACK_IMPORTED_MODULE_3__.NewDocumentsComponent, _new_photos_new_photos_component__WEBPACK_IMPORTED_MODULE_4__.NewPhotosComponent, _add_photos_add_photos_component__WEBPACK_IMPORTED_MODULE_5__.AddPhotosComponent, _damage_analysis_damage_analysis_component__WEBPACK_IMPORTED_MODULE_7__.DamageAnalysisComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_shared_module_ts.js.map