(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["common"],{

/***/ 87854:
/*!***************************************************!*\
  !*** ./src/app/guards/claim-guard/claim.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimGuard": () => (/* binding */ ClaimGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @azure/msal-angular */ 14084);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/core/core.service */ 42771);






class ClaimGuard {
  /**
   * constructor
   * @param commonService
   * @param msalGuard
   * @param router
   * @param coreService
   */
  constructor(commonService, msalGuard, router, coreService) {
    this.commonService = commonService;
    this.msalGuard = msalGuard;
    this.router = router;
    this.coreService = coreService;
  }
  /**
   * can activate
   * @param route
   * @param state
   * @returns
   */
  canActivate(next, state) {
    if (this.msalGuard.canActivate(next, state)) {
      return this.checkUserPermission(next);
    } else {
      this.router.navigate(['claim/my-claim']);
      return false;
    }
  }
  /**
  * checkUserPermission
  * @returns
  */
  checkUserPermission(route) {
    return this.commonService.userProfileData.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(res => {
      if (res) {
        const automotiveServices = res?.data?.userPermission?.automotiveServices;
        this.commonService.setPermission(automotiveServices);
        const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda claims');
        if (automotiveService) {
          if (automotiveService.roleName.toLowerCase() === 'claim manager') {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
          } else {
            this.router.navigate(['claim/my-claim']);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
          }
        } else {
          this.router.navigate(['home']);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
        }
      } else {
        this.commonService.showLoading();
        return this.coreService.getUserProfile().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(res => {
          if (res) {
            this.commonService.hideLoading();
            this.commonService.userProfileData.next(res);
            if (res?.data.userProfileImageBlobUrl) {
              this.commonService.avatar.next({
                image: res?.data.userProfileImageBlobUrl
              });
            }
            if (res?.data?.userPermission?.automotiveServices) {
              const automotiveServices = res?.data?.userPermission?.automotiveServices;
              this.commonService.setPermission(automotiveServices);
              const automotiveService = automotiveServices?.find(x => x.automotiveServiceName.toLowerCase() === 'addenda claims');
              if (automotiveService) {
                if (automotiveService.roleName.toLowerCase() === 'claim manager') {
                  return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
                } else {
                  this.router.navigate(['claim/my-claim']);
                  return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
                }
              } else {
                this.router.navigate(['home']);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
              }
            } else {
              this.router.navigate(['home']);
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
            }
          } else {
            this.commonService.hideLoading();
            this.router.navigate(['home']);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
          }
        }));
      }
    }));
  }
  static #_ = this.ɵfac = function ClaimGuard_Factory(t) {
    return new (t || ClaimGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__.MsalGuard), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_core_core_service__WEBPACK_IMPORTED_MODULE_1__.CoreService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ClaimGuard,
    factory: ClaimGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7849:
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesService": () => (/* binding */ MessagesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _file_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file/file.service */ 93224);




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
   * send Quote approval message
   */
  sendQuoteApprovalMessage(data, caseGuid) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/message/estimate-approval/case/${caseGuid}`;
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
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.messageApi}/Message/email`;
    const formData = new FormData();
    formData.append('ToEmail', emailBody.email?.join(','));
    if (emailBody.cc) {
      formData.append('CCEmail', emailBody.cc);
    }
    formData.append('Content', emailBody.message);
    formData.append('Subject', emailBody.subject);
    formData.append('ObjectId', emailBody.objectId);
    if (emailBody.files && emailBody.files.length > 0) {
      emailBody.files.forEach(file => {
        formData.append('files', file);
      });
    }
    return this.fileService.uploadFile(url, formData, reportProgress, observe);
  }
  static #_ = this.ɵfac = function MessagesService_Factory(t) {
    return new (t || MessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_file_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MessagesService,
    factory: MessagesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 11145:
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);




class SettingsService {
  /**
     * constructor
     * @param http
    */
  constructor(http) {
    this.http = http;
    this.isRepairChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
    this.isJobTasksEnabled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
    this.apiUrl = 'setting';
  }
  /**
   * getEmployeeOffTimeType
   * @returns {Observable<any>}
   */
  getEmployeeOffTimeType() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/lookup?type=employeeOffTimeType`;
    return this.http.get(url);
  }
  /**
   * get employee Details
   */
  getEmployeeDetails(id) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${id}`;
    return this.http.get(url);
    // const url = `${environment.bookingMgmtUrl}/api/employee/getorcreate`;
    // return this.http.post(url, id);
    //return of(data.value[0]);
  }
  /**
   * update employee Details
   */
  updateEmployeeDetails(EmployeeGuid, data) {
    // const url = `${environment.bookingMgmtUrl}/api/employee/${id}`;
    // return this.http.get(url);
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${EmployeeGuid}`;
    return this.http.put(url, data);
    //return of(data.value[0]);
  }
  /**
   * add new work schedule
   */
  addNewWorkHours(EmployeeGuid, data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${EmployeeGuid}/workschedule`;
    return this.http.post(url, data);
  }
  /**
   * add new off time
   */
  addNewOffTime(EmployeeGuid, data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${EmployeeGuid}/offtime`;
    return this.http.post(url, data);
  }
  /**
  * add new work schedule for Team
  */
  addNewWorkHoursForTeam(EmployeeGuid, data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${EmployeeGuid}/employees/workschedule`;
    return this.http.post(url, {
      workSchedule: data
    });
  }
  /**
   * add new off time for Team
   */
  addNewOffTimeForTeam(EmployeeGuid, data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${EmployeeGuid}/employees/offtime`;
    return this.http.post(url, {
      offtime: data
    });
  }
  /**
   * delete work schedule
   */
  deleteWorkHours(EmployeeGuid, workScheduleGuid) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${EmployeeGuid}/workschedule/${workScheduleGuid}`;
    return this.http.delete(url);
  }
  /**
   * add new off time
   */
  deleteOffTime(EmployeeGuid, offTimeGuid) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${EmployeeGuid}/offtime/${offTimeGuid}`;
    return this.http.delete(url);
  }
  /**
   * getEmployeeCalendar
   */
  getEmployeeCalendar(EmployeeGuid, fromDate) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/employee/${EmployeeGuid}/${fromDate}`;
    return this.http.get(url);
  }
  /**
   * getCompetencies
   */
  getCompetencies() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.autoCoreApi}/api/Competencies`;
    return this.http.get(url);
  }
  /**
   * updateCompetencies
   */
  updateCompetencies({
    competenciesIDs,
    userID
  }) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.autoCoreApi}/api/Employees/user-competencies`;
    return this.http.post(url, {
      competenciesIDs,
      userID
    });
  }
  /**
   * get booking types
   * @returns Observable
   */
  getEmployees(pagination, filter) {
    let url = '';
    if (pagination) {
      filter = !filter ? '' : `&$filter=(${filter})`;
      const orderBy = pagination.orderBy ? `&$orderby=${pagination.orderBy} ${pagination.sortDirection}` : '';
      const skip = (pagination.currentPage - 1) * pagination.pageSize;
      url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.autoCoreApi}/odata/Employees?$top=${pagination.pageSize}&$skip=${skip}${filter}${orderBy}&$count=true`;
    } else {
      url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.autoCoreApi}/odata/Employees`;
    }
    return this.http.get(url);
  }
  /**
   * Save new Booking Type
   * @returns Observable
   */
  saveNewBookingType(bookingTypeFormData, query = '') {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/settings/booking-types${query}`;
    return this.http.put(url, bookingTypeFormData);
  }
  /**
   * Save new repair Type
   * @returns Observable
   */
  saveNewRepairType(repairTypeFormData) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/${this.apiUrl}/repair-service-type`;
    return this.http.post(url, repairTypeFormData);
  }
  /**
  * Get settings
  * @returns Observable
  */
  getSettings() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/${this.apiUrl}`;
    return this.http.get(url);
  }
  /**
   * Get all settings
   * @returns Observable
   */
  getAllSettings() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/${this.apiUrl}/get-all`;
    return this.http.get(url);
  }
  /**
  * Get booking repair types from setting
  * @returns Observable
  */
  getBookingRepairType() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/${this.apiUrl}/booking-repair-type`;
    return this.http.get(url);
  }
  /**
  * Get booking repair types from setting
  * @returns Observable
  */
  getRepairTypes(query = '') {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/setting/repair-service-type${query}`;
    return this.http.get(url);
  }
  /**
  * Get booking repair types from setting
  * @returns Observable
  */
  getBookingTypes(query = '') {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/settings/booking-types${query}`;
    return this.http.get(url);
  }
  /**
   * getBookingTypeColors
   * @returns {Observable<any>}
   */
  getBookingTypeColors() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl}/api/lookup?type=BookingTypeColor`;
    return this.http.get(url);
  }
  /**
  * Function to fetch VehicleLocation
   * @returns
   */
  getVehicleLocation() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl}/api/lookup?type=vehicleLocation`;
    return this.http.get(url);
  }
  static #_ = this.ɵfac = function SettingsService_Factory(t) {
    return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SettingsService,
    factory: SettingsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 47509:
/*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  var e = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
    n = /\d\d/,
    r = /\d\d?/,
    i = /\d*[^-_:/,()\s\d]+/,
    o = {},
    s = function (e) {
      return (e = +e) + (e > 68 ? 1900 : 2e3);
    };
  var a = function (e) {
      return function (t) {
        this[e] = +t;
      };
    },
    f = [/[+-]\d\d:?(\d\d)?|Z/, function (e) {
      (this.zone || (this.zone = {})).offset = function (e) {
        if (!e) return 0;
        if ("Z" === e) return 0;
        var t = e.match(/([+-]|\d\d)/g),
          n = 60 * t[1] + (+t[2] || 0);
        return 0 === n ? 0 : "+" === t[0] ? -n : n;
      }(e);
    }],
    h = function (e) {
      var t = o[e];
      return t && (t.indexOf ? t : t.s.concat(t.f));
    },
    u = function (e, t) {
      var n,
        r = o.meridiem;
      if (r) {
        for (var i = 1; i <= 24; i += 1) if (e.indexOf(r(i, 0, t)) > -1) {
          n = i > 12;
          break;
        }
      } else n = e === (t ? "pm" : "PM");
      return n;
    },
    d = {
      A: [i, function (e) {
        this.afternoon = u(e, !1);
      }],
      a: [i, function (e) {
        this.afternoon = u(e, !0);
      }],
      S: [/\d/, function (e) {
        this.milliseconds = 100 * +e;
      }],
      SS: [n, function (e) {
        this.milliseconds = 10 * +e;
      }],
      SSS: [/\d{3}/, function (e) {
        this.milliseconds = +e;
      }],
      s: [r, a("seconds")],
      ss: [r, a("seconds")],
      m: [r, a("minutes")],
      mm: [r, a("minutes")],
      H: [r, a("hours")],
      h: [r, a("hours")],
      HH: [r, a("hours")],
      hh: [r, a("hours")],
      D: [r, a("day")],
      DD: [n, a("day")],
      Do: [i, function (e) {
        var t = o.ordinal,
          n = e.match(/\d+/);
        if (this.day = n[0], t) for (var r = 1; r <= 31; r += 1) t(r).replace(/\[|\]/g, "") === e && (this.day = r);
      }],
      M: [r, a("month")],
      MM: [n, a("month")],
      MMM: [i, function (e) {
        var t = h("months"),
          n = (h("monthsShort") || t.map(function (e) {
            return e.slice(0, 3);
          })).indexOf(e) + 1;
        if (n < 1) throw new Error();
        this.month = n % 12 || n;
      }],
      MMMM: [i, function (e) {
        var t = h("months").indexOf(e) + 1;
        if (t < 1) throw new Error();
        this.month = t % 12 || t;
      }],
      Y: [/[+-]?\d+/, a("year")],
      YY: [n, function (e) {
        this.year = s(e);
      }],
      YYYY: [/\d{4}/, a("year")],
      Z: f,
      ZZ: f
    };
  function c(n) {
    var r, i;
    r = n, i = o && o.formats;
    for (var s = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
        var o = r && r.toUpperCase();
        return n || i[r] || e[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, n) {
          return t || n.slice(1);
        });
      })).match(t), a = s.length, f = 0; f < a; f += 1) {
      var h = s[f],
        u = d[h],
        c = u && u[0],
        l = u && u[1];
      s[f] = l ? {
        regex: c,
        parser: l
      } : h.replace(/^\[|\]$/g, "");
    }
    return function (e) {
      for (var t = {}, n = 0, r = 0; n < a; n += 1) {
        var i = s[n];
        if ("string" == typeof i) r += i.length;else {
          var o = i.regex,
            f = i.parser,
            h = e.slice(r),
            u = o.exec(h)[0];
          f.call(t, u), e = e.replace(u, "");
        }
      }
      return function (e) {
        var t = e.afternoon;
        if (void 0 !== t) {
          var n = e.hours;
          t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
        }
      }(t), t;
    };
  }
  return function (e, t, n) {
    n.p.customParseFormat = !0, e && e.parseTwoDigitYear && (s = e.parseTwoDigitYear);
    var r = t.prototype,
      i = r.parse;
    r.parse = function (e) {
      var t = e.date,
        r = e.utc,
        s = e.args;
      this.$u = r;
      var a = s[1];
      if ("string" == typeof a) {
        var f = !0 === s[2],
          h = !0 === s[3],
          u = f || h,
          d = s[2];
        h && (d = s[2]), o = this.$locale(), !f && d && (o = n.Ls[d]), this.$d = function (e, t, n) {
          try {
            if (["x", "X"].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
            var r = c(t)(e),
              i = r.year,
              o = r.month,
              s = r.day,
              a = r.hours,
              f = r.minutes,
              h = r.seconds,
              u = r.milliseconds,
              d = r.zone,
              l = new Date(),
              m = s || (i || o ? 1 : l.getDate()),
              M = i || l.getFullYear(),
              Y = 0;
            i && !o || (Y = o > 0 ? o - 1 : l.getMonth());
            var p = a || 0,
              v = f || 0,
              D = h || 0,
              g = u || 0;
            return d ? new Date(Date.UTC(M, Y, m, p, v, D, g + 60 * d.offset * 1e3)) : n ? new Date(Date.UTC(M, Y, m, p, v, D, g)) : new Date(M, Y, m, p, v, D, g);
          } catch (e) {
            return new Date("");
          }
        }(t, a, r), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), u && t != this.format(a) && (this.$d = new Date("")), o = {};
      } else if (a instanceof Array) for (var l = a.length, m = 1; m <= l; m += 1) {
        s[1] = a[m - 1];
        var M = n.apply(this, s);
        if (M.isValid()) {
          this.$d = M.$d, this.$L = M.$L, this.init();
          break;
        }
        m === l && (this.$d = new Date(""));
      } else i.call(this, e);
    };
  };
});

/***/ }),

/***/ 18466:
/*!**********************************************!*\
  !*** ./node_modules/dayjs/plugin/weekday.js ***!
  \**********************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  return function (e, t) {
    t.prototype.weekday = function (e) {
      var t = this.$locale().weekStart || 0,
        i = this.$W,
        n = (i < t ? i + 7 : i) - t;
      return this.$utils().u(e) ? n : this.subtract(n, "day").add(e, "day");
    };
  };
});

/***/ })

}]);
//# sourceMappingURL=common.js.map