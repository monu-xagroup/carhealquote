(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["common"], {
    /***/
    65635:
    /*!********************************************************!*\
      !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
      \********************************************************/

    /***/
    function _(module) {
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
            s = function s(e) {
          return (e = +e) + (e > 68 ? 1900 : 2e3);
        };

        var a = function a(e) {
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
            h = function h(e) {
          var t = o[e];
          return t && (t.indexOf ? t : t.s.concat(t.f));
        },
            u = function u(e, t) {
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
      /***/
    },

    /***/
    8472:
    /*!**********************************************!*\
      !*** ./node_modules/dayjs/plugin/weekday.js ***!
      \**********************************************/

    /***/
    function _(module) {
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
      /***/
    },

    /***/
    60562:
    /*!****************************************************!*\
      !*** ./src/app/helper/form/vehicle-form.helper.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "newVehicleForm": function newVehicleForm() {
          return (
            /* binding */
            _newVehicleForm
          );
        },

        /* harmony export */
        "newVehicleHeader": function newVehicleHeader() {
          return (
            /* binding */
            _newVehicleHeader
          );
        },

        /* harmony export */
        "carMileageValidator": function carMileageValidator() {
          return (
            /* binding */
            _carMileageValidator
          );
        },

        /* harmony export */
        "licensePlateValidator": function licensePlateValidator() {
          return (
            /* binding */
            _licensePlateValidator
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _newVehicleForm = function _newVehicleForm() {
        return {
          vin: {
            placeHolder: 'search_vin',
            name: 'vin',
            label: 'vin_number',
            type: 'text',
            value: 0,
            icon: 'search',
            maxLength: 17,
            validation: {
              name: 'vin',
              validationFunction: function validationFunction() {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-hA-Hj-nJ-NpPr-zR-Z0-9]+$')]);
              },
              validationMessage: function validationMessage(error) {
                if (error['pattern']) {
                  return 'pattern_vin';
                }

                if (error['minlength']) {
                  return 'min_length_vin';
                }

                return '';
              }
            }
          },
          make: {
            placeHolder: 'make',
            name: 'make',
            label: 'make',
            options: [{}],
            displayValue: 'name',
            fieldValue: 'name',
            type: 'select',
            value: 0,
            validation: {
              name: 'make',
              validationFunction: function validationFunction() {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
              },
              validationMessage: function validationMessage(error) {
                if (error['required']) {
                  return 'required_make';
                }

                return '';
              }
            }
          },
          model: {
            placeHolder: 'model',
            name: 'model',
            label: 'model',
            options: [{}],
            displayValue: 'modelDescription',
            fieldValue: 'modelDescription',
            type: 'select',
            value: 0,
            validation: {
              name: 'model',
              validationFunction: function validationFunction() {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
              },
              validationMessage: function validationMessage(error) {
                if (error['required']) {
                  return 'required_model';
                }

                return '';
              }
            }
          },
          year: {
            placeHolder: 'import_interval',
            label: 'import_interval',
            name: 'year',
            //selectedOption: '',
            options: [{}],
            displayValue: 'name',
            fieldValue: 'name',
            type: 'select',
            value: 0,
            validation: {
              name: 'year',
              validationFunction: function validationFunction() {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
              },
              validationMessage: function validationMessage(error) {
                if (error['required']) {
                  return 'required_year';
                }

                return '';
              }
            }
          },
          licensePlate: {
            placeHolder: 'license_plate',
            label: 'license_plate',
            name: 'licensePlate',
            value: 0,
            type: 'text',
            maxLength: 12,
            validation: {
              name: 'licensePlate',
              validationFunction: function validationFunction() {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-zA-Z0-9]*$'), _licensePlateValidator()]);
              },
              validationMessage: function validationMessage(error) {
                if (error['required']) {
                  return 'required_license_plate';
                }

                if (error['maxlength']) {
                  return 'max_length_license_plate';
                }

                if (error['pattern']) {
                  return 'pattern_digit_alphabets';
                }

                if (error['invalidLicensePlate']) {
                  return 'invalid_license_plate';
                }

                return '';
              }
            }
          },
          carMilege: {
            placeHolder: 'car_mileage',
            label: 'mileage',
            name: 'carMilege',
            value: 0,
            type: 'text',
            maxLength: 7,
            validation: {
              name: 'carMilege',
              validationFunction: function validationFunction() {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]+$'), _carMileageValidator()]);
              },
              validationMessage: function validationMessage(error) {
                if (error['required']) {
                  return 'required_car_mileage';
                }

                if (error['maxlength']) {
                  return 'max_length_car_mileage';
                }

                if (error['pattern']) {
                  return 'pattern_numeric';
                }

                if (error['invalidCarMileage']) {
                  return 'invalid_car_mileage';
                }

                return '';
              }
            }
          },
          registrationDate: {
            placeHolder: 'first_reg_mfg_date',
            label: 'reg_mfg_date',
            name: 'registrationDate',
            value: '',
            type: 'date',
            maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
            minDate: new Date('1980-01-01'),
            disabled: true,
            validation: {
              name: 'registrationDate',
              validationFunction: function validationFunction() {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
              },
              validationMessage: function validationMessage(error) {
                if (error['required']) {
                  return 'required_date';
                }

                return '';
              }
            }
          }
        };
      };

      var _newVehicleHeader = {
        title: 'add_vehicle',
        step: 2,
        description: 'add_vehicle_msg',
        stepName: 'step_two'
      };
      /**
       *
       * @returns
       */

      function _carMileageValidator() {
        var result = {
          'invalidCarMileage': false
        };
        return function (control) {
          if (control.value < 1 && control.value != '') {
            result['invalidCarMileage'] = true;
            return result;
          }

          return null;
        };
      }
      /**
       * License plate Validator
       * @returns
       */


      function _licensePlateValidator() {
        var result = {
          'invalidLicensePlate': false
        };
        return function (control) {
          if (control.value === '0') {
            result['invalidLicensePlate'] = true;
            return result;
          }

          return null;
        };
      }
      /***/

    },

    /***/
    11145:
    /*!*******************************************************!*\
      !*** ./src/app/services/settings/settings.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsService": function SettingsService() {
          return (
            /* binding */
            _SettingsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _SettingsService = /*#__PURE__*/function () {
        /**
           * constructor
           * @param http
          */
        function _SettingsService(http) {
          _classCallCheck(this, _SettingsService);

          this.http = http;
          this.isRepairChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
          this.isJobTasksEnabled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
          this.apiUrl = 'setting';
        }
        /**
         * getEmployeeOffTimeType
         * @returns {Observable<any>}
         */


        _createClass(_SettingsService, [{
          key: "getEmployeeOffTimeType",
          value: function getEmployeeOffTimeType() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/lookup?type=employeeOffTimeType");
            return this.http.get(url);
          }
          /**
           * get employee Details
           */

        }, {
          key: "getEmployeeDetails",
          value: function getEmployeeDetails(id) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(id);
            return this.http.get(url); // const url = `${environment.bookingMgmtUrl}/api/employee/getorcreate`;
            // return this.http.post(url, id);
            //return of(data.value[0]);
          }
          /**
           * update employee Details
           */

        }, {
          key: "updateEmployeeDetails",
          value: function updateEmployeeDetails(EmployeeGuid, data) {
            // const url = `${environment.bookingMgmtUrl}/api/employee/${id}`;
            // return this.http.get(url);
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(EmployeeGuid);
            return this.http.put(url, data); //return of(data.value[0]);
          }
          /**
           * add new work schedule
           */

        }, {
          key: "addNewWorkHours",
          value: function addNewWorkHours(EmployeeGuid, data) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(EmployeeGuid, "/workschedule");
            return this.http.post(url, data);
          }
          /**
           * add new off time
           */

        }, {
          key: "addNewOffTime",
          value: function addNewOffTime(EmployeeGuid, data) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(EmployeeGuid, "/offtime");
            return this.http.post(url, data);
          }
          /**
          * add new work schedule for Team
          */

        }, {
          key: "addNewWorkHoursForTeam",
          value: function addNewWorkHoursForTeam(EmployeeGuid, data) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(EmployeeGuid, "/employees/workschedule");
            return this.http.post(url, {
              workSchedule: data
            });
          }
          /**
           * add new off time for Team
           */

        }, {
          key: "addNewOffTimeForTeam",
          value: function addNewOffTimeForTeam(EmployeeGuid, data) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(EmployeeGuid, "/employees/offtime");
            return this.http.post(url, {
              offtime: data
            });
          }
          /**
           * delete work schedule
           */

        }, {
          key: "deleteWorkHours",
          value: function deleteWorkHours(EmployeeGuid, workScheduleGuid) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(EmployeeGuid, "/workschedule/").concat(workScheduleGuid);
            return this.http["delete"](url);
          }
          /**
           * add new off time
           */

        }, {
          key: "deleteOffTime",
          value: function deleteOffTime(EmployeeGuid, offTimeGuid) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(EmployeeGuid, "/offtime/").concat(offTimeGuid);
            return this.http["delete"](url);
          }
          /**
           * getEmployeeCalendar
           */

        }, {
          key: "getEmployeeCalendar",
          value: function getEmployeeCalendar(EmployeeGuid, fromDate) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bookingMgmtUrl, "/api/employee/").concat(EmployeeGuid, "/").concat(fromDate);
            return this.http.get(url);
          }
          /**
           * getCompetencies
           */

        }, {
          key: "getCompetencies",
          value: function getCompetencies() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.autoCoreApi, "/api/Competencies");
            return this.http.get(url);
          }
          /**
           * updateCompetencies
           */

        }, {
          key: "updateCompetencies",
          value: function updateCompetencies(_ref) {
            var competenciesIDs = _ref.competenciesIDs,
                userID = _ref.userID;
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.autoCoreApi, "/api/Employees/user-competencies");
            return this.http.post(url, {
              competenciesIDs: competenciesIDs,
              userID: userID
            });
          }
          /**
           * get booking types
           * @returns Observable
           */

        }, {
          key: "getEmployees",
          value: function getEmployees(pagination, filter) {
            var url = '';

            if (pagination) {
              filter = !filter ? '' : "&$filter=(".concat(filter, ")");
              var orderBy = pagination.orderBy ? "&$orderby=".concat(pagination.orderBy, " ").concat(pagination.sortDirection) : '';
              var skip = (pagination.currentPage - 1) * pagination.pageSize;
              url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.autoCoreApi, "/odata/Employees?$top=").concat(pagination.pageSize, "&$skip=").concat(skip).concat(filter).concat(orderBy, "&$count=true");
            } else {
              url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.autoCoreApi, "/odata/Employees");
            }

            return this.http.get(url);
          }
          /**
           * Save new Booking Type
           * @returns Observable
           */

        }, {
          key: "saveNewBookingType",
          value: function saveNewBookingType(bookingTypeFormData) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/").concat(this.apiUrl, "/bookingtype");
            return this.http.post(url, bookingTypeFormData);
          }
          /**
           * Save new repair Type
           * @returns Observable
           */

        }, {
          key: "saveNewRepairType",
          value: function saveNewRepairType(repairTypeFormData) {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/").concat(this.apiUrl, "/repairtype");
            return this.http.post(url, repairTypeFormData);
          }
          /**
          * Get settings
          * @returns Observable
          */

        }, {
          key: "getSettings",
          value: function getSettings() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/").concat(this.apiUrl);
            return this.http.get(url);
          }
          /**
           * Get all settings
           * @returns Observable
           */

        }, {
          key: "getAllSettings",
          value: function getAllSettings() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/").concat(this.apiUrl, "/get-all");
            return this.http.get(url);
          }
          /**
          * Get booking repair types from setting
          * @returns Observable
          */

        }, {
          key: "getBookingRepairType",
          value: function getBookingRepairType() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/").concat(this.apiUrl, "/booking-repair-type");
            return this.http.get(url);
          }
          /**
           * getBookingTypeColors
           * @returns {Observable<any>}
           */

        }, {
          key: "getBookingTypeColors",
          value: function getBookingTypeColors() {
            var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.caseMgmtUrl, "/api/lookup?type=BookingTypeColor");
            return this.http.get(url);
          }
        }]);

        return _SettingsService;
      }();

      _SettingsService.ɵfac = function SettingsService_Factory(t) {
        return new (t || _SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _SettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _SettingsService,
        factory: _SettingsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map