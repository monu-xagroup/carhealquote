"use strict";
(self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["default-src_app_helper_form_claim-form_helper_ts"],{

/***/ 43941:
/*!**************************************************!*\
  !*** ./src/app/helper/form/claim-form.helper.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hourValidator": () => (/* binding */ hourValidator),
/* harmony export */   "minutesValidator": () => (/* binding */ minutesValidator),
/* harmony export */   "newCustomerDriverDetailsForm": () => (/* binding */ newCustomerDriverDetailsForm),
/* harmony export */   "newCustomerPolicyDetailsForm": () => (/* binding */ newCustomerPolicyDetailsForm),
/* harmony export */   "newCustomerVehicleDetailsForm": () => (/* binding */ newCustomerVehicleDetailsForm),
/* harmony export */   "newLossDetailsForm": () => (/* binding */ newLossDetailsForm),
/* harmony export */   "newSettingsGarageForm": () => (/* binding */ newSettingsGarageForm),
/* harmony export */   "newVehicleDetailsForm": () => (/* binding */ newVehicleDetailsForm),
/* harmony export */   "vehicleRegNumberValidator": () => (/* binding */ vehicleRegNumberValidator),
/* harmony export */   "viewClaimDetailsForm": () => (/* binding */ viewClaimDetailsForm),
/* harmony export */   "viewPolicyDetailsForm": () => (/* binding */ viewPolicyDetailsForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vehicle_form_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-form.helper */ 60562);



const newCustomerPolicyDetailsForm = policyData => {
  return {
    policyNumber: {
      placeHolder: 'Policy Number',
      label: 'Policy Number',
      name: 'policyNumber',
      value: policyData ? policyData.policyNo : '',
      type: 'text',
      required: true,
      validation: {
        name: 'policyNumber',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'policy_number_required';
          }
          return '';
        }
      }
    },
    policyExpiryDate: {
      placeHolder: 'Policy Expiry Date',
      label: 'Policy Expiry Date',
      name: 'policyExpiryDate',
      value: policyData ? policyData.expiryDate : '',
      type: 'date',
      //maxDate: dayjs().toDate(),
      required: true,
      validation: {
        name: 'policyExpiryDate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'policy_expiry_date_required';
          }
          return '';
        }
      }
    },
    policyCategory: {
      placeHolder: 'Policy Category',
      name: 'policyCategory',
      label: 'Policy Category',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'policyCategory',
      fieldValue: 'id',
      options: [],
      errorWhenEmpty: true,
      required: true,
      validation: {
        name: 'policyCategory',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'policy_category_required';
          }
          return '';
        }
      }
    },
    claimIntimationDate: {
      placeHolder: 'select_dot',
      name: 'claimIntimationDate',
      label: 'Claim Intimation Date',
      value: policyData ? policyData.claimIntimationDate : '',
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      type: 'date',
      required: true,
      validation: {
        name: 'claimIntimationDate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'claim_intimation_date_required';
          }
          return '';
        }
      }
    },
    insurerFirstName: {
      placeHolder: 'Insurer First Name',
      label: 'Insurer First Name',
      name: 'insurerFirstName',
      value: policyData ? policyData.policyHolderFirstName : '',
      type: 'text',
      required: true,
      validation: {
        name: 'insurerFirstName',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'insurer_first_name_required';
          }
          return '';
        }
      }
    },
    insurerLastName: {
      placeHolder: 'Insurer Last Name',
      label: 'Insurer Last Name',
      name: 'insurerLastName',
      value: policyData ? policyData.policyHolderLastName : '',
      type: 'text',
      required: true,
      validation: {
        name: 'insurerLastName',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'insurer_last_name_required';
          }
          return '';
        }
      }
    },
    email: {
      placeHolder: 'Email Address',
      label: 'Email Address',
      name: 'email',
      value: policyData ? policyData.policyHolderEmail : '',
      type: 'text',
      required: true,
      disabled: policyData ? policyData.policyHolderEmail ? true : false : true,
      validation: {
        name: 'email',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'email_required';
          }
          if (error['maxlength']) {
            return 'email_length';
          }
          if (error['pattern'] || error['email']) {
            return 'email_valid';
          }
          return '';
        }
      }
    },
    driverCode: {
      placeHolder: 'select_dot',
      name: 'driverCode',
      label: 'Code',
      value: 0,
      type: 'select',
      displayValue: 'phoneCountryCode',
      idField: 'phoneCountryCode',
      fieldValue: 'phoneCountryCode',
      options: [],
      errorWhenEmpty: true,
      required: true,
      disabled: policyData ? policyData.policyMobileCountryCode ? true : false : true,
      validation: {
        name: 'phoneCountryCode',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'required_code';
          }
          return '';
        }
      }
    },
    mobNumber: {
      placeHolder: 'Mobile Number',
      label: 'Mobile Number',
      name: 'mobNumber',
      value: policyData ? policyData.policyHolderMobileNumber : 0,
      type: 'text',
      required: true,
      disabled: policyData ? policyData.policyHolderMobileNumber ? true : false : true,
      validation: {
        name: 'mobNumber',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]+[0-9 ,.\'-]+$')]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'required_mobile_number';
          }
          if (error['pattern']) {
            return 'valid_mobile_number';
          }
          return '';
        }
      }
    },
    sumInsured: {
      placeHolder: 'Sum Insured',
      label: 'Sum Insured',
      name: 'sumInsured',
      value: policyData ? policyData.sumAssured : 0,
      type: 'text',
      disabled: policyData ? policyData.sumAssured ? true : false : true
    },
    insuranceOrgName: {
      placeHolder: 'Insurance Org Name',
      label: 'Insurance Org Name',
      name: 'insuranceOrgName',
      value: policyData ? policyData.insuranceOrganizationName : '',
      type: 'text',
      required: true,
      validation: {
        name: 'insuranceOrgName',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'insurance_org_name_required';
          }
          return '';
        }
      }
    },
    lossJurisdiction: {
      placeHolder: 'Loss Jurisdiction',
      label: 'Loss Jurisdiction',
      name: 'lossJurisdiction',
      value: policyData ? policyData.lossJurisdiction : 0,
      type: 'text'
    },
    policyHolderAddPermanent: {
      placeHolder: 'Policy Holder Address (Permanent)',
      label: 'Policy Holder Address (Permanent)',
      name: 'policyHolderAddPermanent',
      value: policyData ? policyData.policyHolderPermanentAddress : '',
      type: 'text',
      maxLength: 200
    },
    policyHolderAddCurrent: {
      placeHolder: 'Policy Holder Address (Current)',
      label: 'Policy Holder Address (Current)',
      name: 'policyHolderAddCurrent',
      value: policyData ? policyData.policyHolderCurrentAddress : '',
      type: 'text',
      maxLength: 201
    },
    insuranceProductName: {
      placeHolder: 'Insurance Product Name',
      label: 'Insurance Product Name',
      name: 'insuranceProductName',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'insuranceProductName',
      fieldValue: 'name',
      options: [],
      errorWhenEmpty: true
    },
    isPermanentAddSameAsCurrent: {
      placeHolder: '',
      label: '',
      name: 'isPermanentAddSameAsCurrent',
      idField: 'isPermanentAddSameAsCurrentId',
      value: policyData ? policyData.isPermanentAddSameAsCurrent : '',
      type: 'checkbox',
      options: [{
        label: '',
        id: 1,
        checked: false
      }]
    },
    driverDetails: {
      placeHolder: '',
      label: '',
      name: 'driverDetails',
      idField: 'driverDetails',
      value: 'Owner',
      type: 'radio',
      options: [{
        label: 'Owner',
        id: 1
      }, {
        label: 'Other',
        id: 2
      }]
    },
    selectAndSearchDetails: {
      placeHolder: '',
      label: '',
      name: 'selectAndSearchDetails',
      idField: 'selectAndSearchDetails',
      value: 'Policy Number',
      type: 'radio',
      options: [{
        label: 'Policy Number',
        id: 1
      }, {
        label: 'Chasis Number',
        id: 2
      }, {
        label: 'Plate Number',
        id: 3
      }],
      required: true,
      validation: {
        name: 'selectAndSearchDetails',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'policy_number_required';
          }
          return '';
        }
      }
    },
    searchInputData: {
      placeHolder: 'search_data',
      label: '',
      name: 'searchInputData',
      value: '',
      type: 'text',
      icon: 'search',
      validation: {
        name: 'searchInputData',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'policy_number_required';
          }
          return '';
        }
      }
    },
    gracePeriodDays: {
      placeHolder: 'Grace Period Days',
      label: 'Grace Period Days',
      name: 'gracePeriodDays',
      value: policyData ? policyData.gracePeriodDays : '',
      type: 'text',
      validation: {
        name: 'gracePeriodDays',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]+$')]);
        },
        validationMessage: error => {
          if (error['pattern']) {
            return 'Only numeric characters are allowed';
          }
          return '';
        }
      }
    },
    driverFirstName: {
      placeHolder: 'Driver First Name',
      label: 'Driver First Name',
      name: 'driverFirstName',
      value: policyData ? policyData.policyHolderFirstName : '',
      type: 'text'
    },
    driverLastName: {
      placeHolder: 'Driver Last Name',
      label: 'Driver Last Name',
      name: 'driverLastName',
      value: policyData ? policyData.policyHolderLastName : '',
      type: 'text'
    },
    driverDLNumber: {
      placeHolder: 'Driver DL Number',
      label: 'Driver DL Number',
      name: 'driverDLNumber',
      value: policyData ? policyData.policyHolderFirstName : '',
      type: 'text'
    },
    driverDetailsCode: {
      placeHolder: 'select_dot',
      name: 'driverDetailsCode',
      label: 'Code',
      value: 0,
      type: 'select',
      displayValue: 'phoneCountryCode',
      idField: 'phoneCountryCode',
      fieldValue: 'phoneCountryCode',
      options: [],
      errorWhenEmpty: true,
      required: true,
      disabled: policyData ? policyData.policyMobileCountryCode ? true : false : true,
      validation: {
        name: 'phoneCountryCode',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'required_code';
          }
          return '';
        }
      }
    },
    driverMobNumber: {
      placeHolder: 'Mobile Number',
      label: 'Mobile Number',
      name: 'driverMobNumber',
      value: policyData ? policyData.policyHolderMobileNumber : 0,
      type: 'text',
      required: true,
      disabled: policyData ? policyData.policyHolderMobileNumber ? true : false : true,
      validation: {
        name: 'driverMobNumber',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]+[0-9 ,.\'-]+$')]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'required_mobile_number';
          }
          if (error['pattern']) {
            return 'valid_mobile_number';
          }
          return '';
        }
      }
    }
  };
};
const newCustomerVehicleDetailsForm = vehicleData => {
  return {
    vehicleRegistrationNum: {
      placeHolder: 'Vehicle Registration / Plate Number',
      label: 'Vehicle Registration / Plate Number',
      name: 'vehicleRegistrationNum',
      value: 0,
      type: 'text',
      maxLength: 12,
      required: true,
      validation: {
        name: 'vehicleRegistrationNum',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z0-9-/]*$'), (0,_vehicle_form_helper__WEBPACK_IMPORTED_MODULE_1__.licensePlateValidator)()]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter Vehicle Registration / Plate Number.';
          }
          if (error['maxlength']) {
            return 'Vehicle Registration / Plate Number should have not more than 12 characters';
          }
          if (error['pattern']) {
            return 'Only alphanumberic characters are allowed';
          }
          if (error['invalidLicensePlate']) {
            return 'Vehicle Registration / Plate Number should not be 0';
          }
          return '';
        }
      }
    },
    vin: {
      placeHolder: 'Vehicle Chasis Number',
      label: 'Vehicle Chasis Number',
      name: 'vin',
      value: 0,
      type: 'text',
      required: true,
      maxLength: 17,
      validation: {
        name: 'vin',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-hA-Hj-nJ-NpPr-zR-Z0-9]+$')]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'vehiclechasis_num_required';
          }
          if (error['pattern']) {
            return 'Invalid characters';
          }
          if (error['minlength']) {
            return 'Vin should have 17 characters';
          }
          return '';
        }
      }
    },
    make: {
      placeHolder: 'Make',
      label: 'Make',
      name: 'make',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'make',
      fieldValue: 'id',
      options: [],
      errorWhenEmpty: true,
      required: true,
      validation: {
        name: 'make',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'make_required';
          }
          return '';
        }
      }
    },
    model: {
      placeHolder: 'model',
      label: 'model',
      name: 'model',
      value: 0,
      type: 'select',
      displayValue: 'modelDescription',
      idField: 'modelDescription',
      fieldValue: 'id',
      options: [],
      errorWhenEmpty: true,
      required: true,
      validation: {
        name: 'model',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'model_required';
          }
          return '';
        }
      }
    },
    year: {
      placeHolder: 'year',
      label: 'year',
      name: 'year',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'name',
      fieldValue: 'id',
      options: [],
      errorWhenEmpty: true,
      validation: {
        name: 'year',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'year_required';
          }
          return '';
        }
      }
    },
    vehicleType: {
      placeHolder: 'type',
      label: 'type',
      name: 'vehicleType',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'vehicleType',
      fieldValue: 'name',
      options: [],
      errorWhenEmpty: true,
      required: true,
      validation: {
        name: 'vehicleType',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'type_required';
          }
          return '';
        }
      }
    },
    registrationDate: {
      placeHolder: 'Registration Date',
      label: 'Registration Date',
      name: 'registrationDate',
      value: '',
      type: 'date',
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
      minDate: new Date('1980-01-01'),
      required: true,
      validation: {
        name: 'registrationDate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'registration_date_required';
          }
          return '';
        }
      }
    },
    manufacturingDate: {
      placeHolder: 'Manufacturing Date',
      label: 'Manufacturing Date',
      name: 'manufacturingDate',
      value: '',
      type: 'date',
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
      minDate: new Date('1980-01-01'),
      required: true,
      validation: {
        name: 'manufacturingDate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'manufacturing_date_required';
          }
          return '';
        }
      }
    }
  };
};
const newCustomerDriverDetailsForm = driverData => {
  return {
    isOwner: {
      placeHolder: '',
      label: '',
      name: 'isOwner',
      idField: 'isOwner',
      value: 'Owner',
      type: 'radio',
      options: [{
        label: 'Owner',
        id: 1
      }, {
        label: 'Other',
        id: 2
      }]
    },
    driverFirstName: {
      placeHolder: 'Driver First Name',
      label: 'Driver First Name',
      name: 'driverFirstName',
      value: driverData ? driverData.firstName : '',
      type: 'text'
    },
    driverLastName: {
      placeHolder: 'Driver Last Name',
      label: 'Driver Last Name',
      name: 'driverLastName',
      value: driverData ? driverData.lastName : '',
      type: 'text'
    },
    driverDLNumber: {
      placeHolder: 'Driver DL Number',
      label: 'Driver DL Number',
      name: 'driverDLNumber',
      value: driverData ? driverData.licenseNumber : '',
      type: 'text'
    },
    driverDetailsCode: {
      placeHolder: 'select_dot',
      name: 'driverDetailsCode',
      label: 'Code',
      value: 0,
      type: 'select',
      displayValue: 'phoneCountryCode',
      idField: 'phoneCountryCode',
      fieldValue: 'phoneCountryCode',
      options: []
    },
    driverMobNumber: {
      placeHolder: 'Mobile Number',
      label: 'Mobile Number',
      name: 'driverMobNumber',
      value: driverData ? driverData.phoneNumber : 0,
      type: 'text'
    }
  };
};
const newLossDetailsForm = () => {
  return {
    lossDateTime: {
      placeHolder: 'loss_date_time',
      label: 'loss_date_time',
      name: 'lossDateTime',
      type: 'datetime',
      value: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      required: true,
      validation: {
        name: 'lossDateTime',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'loss_date_time_required';
          }
          return '';
        }
      }
    },
    claimCreationDate: {
      placeHolder: 'claim_creation_date',
      label: 'claim_creation_date',
      name: 'claimCreationDate',
      value: '',
      type: 'date',
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      mode: 'text'
    },
    country: {
      placeHolder: 'select_dot',
      name: 'country',
      label: 'country',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'country',
      fieldValue: 'id',
      options: []
    },
    state: {
      placeHolder: 'select_dot',
      name: 'state',
      label: 'state',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'state',
      fieldValue: 'id',
      options: []
    },
    intimationType: {
      placeHolder: 'select_dot',
      name: 'intimationType',
      label: 'intimator_type',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'intimationType',
      fieldValue: 'name',
      options: [],
      required: true,
      validation: {
        name: 'intimationType',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'intimator_type_required';
          }
          return '';
        }
      }
    },
    subIntimationType: {
      placeHolder: 'select_dot',
      name: 'subIntimationType',
      label: 'intimation_type',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'subIntimationType',
      fieldValue: 'name',
      options: [],
      required: true,
      validation: {
        name: 'subIntimationType',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'intimation_type_required';
          }
          return '';
        }
      }
    },
    damageType: {
      placeHolder: 'select_dot',
      name: 'damageType',
      label: 'damage_type',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'damageType',
      fieldValue: 'id',
      options: []
    },
    natureofLoss: {
      placeHolder: 'select_dot',
      name: 'natureofLoss',
      label: 'nature_of_loss',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'natureofLoss',
      fieldValue: 'id',
      options: [],
      required: true,
      validation: {
        name: 'natureofLoss',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'nature_of_loss_required';
          }
          return '';
        }
      }
    },
    lossSeverity: {
      placeHolder: 'select_dot',
      name: 'lossSeverity',
      label: 'loss_severity',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'lossSeverity',
      fieldValue: 'id',
      options: [],
      mode: 'text',
      hintIcon: 'information-operation',
      hintText: 'Severity recommendation will be provided based on the vehicle image ai analysis results.'
    },
    lossImpactZone: {
      placeHolder: 'select_dot',
      name: 'lossImpactZone',
      label: 'loss_impact_zone_optional',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'lossImpactZone',
      fieldValue: 'id',
      options: []
    },
    lossLocation: {
      placeHolder: 'Loss Location',
      label: 'loss_location',
      name: 'lossLocation',
      value: '',
      type: 'placesearch',
      required: true,
      validation: {
        name: 'lossLocation',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'loss_location_required';
          }
          return '';
        }
      }
    },
    causeOfLoss: {
      placeHolder: 'select_dot',
      label: 'cause_of_loss',
      name: 'causeOfLoss',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'causeOfLoss',
      fieldValue: 'id',
      options: [],
      required: true,
      validation: {
        name: 'causeOfLoss',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'cause_of_loss_required';
          }
          return '';
        }
      }
    },
    totalLoss: {
      placeHolder: '',
      label: 'is_total_loss',
      name: 'totalLoss',
      idField: 'totalLoss',
      value: 'No',
      type: 'radio',
      options: [{
        label: 'Yes',
        id: 1
      }, {
        label: 'No',
        id: 2
      }]
    },
    salvageAmount: {
      placeHolder: 'salvage_amount',
      label: 'salvage_amount',
      name: 'salvageAmount',
      value: 0,
      type: 'text',
      disabled: true,
      validation: {
        name: 'salvageAmount',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'salvage_amount_required';
          }
          if (error['pattern']) {
            return 'salvage_amount_two_decimal_places';
          }
          return '';
        }
      }
    },
    repairType: {
      placeHolder: 'select_dot',
      name: 'repairType',
      label: 'repair_type',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'repairType',
      fieldValue: 'id',
      options: []
    },
    lossDescription: {
      placeHolder: 'Loss Description',
      label: 'loss_description',
      name: 'lossDescription',
      value: '',
      type: 'textarea',
      maxLength: 200
    },
    claimantAtFault: {
      placeHolder: '',
      label: 'is_claimant_at_fault',
      name: 'claimantAtFault',
      idField: 'claimantAtFault',
      value: '',
      type: 'radio',
      options: [{
        label: 'Non Fault',
        id: 1
      }, {
        label: 'At Fault',
        id: 2
      }]
    },
    isCarLocationDifferent: {
      placeHolder: '',
      label: 'is_car_location_different_than_loss',
      name: 'isCarLocationDifferent',
      idField: 'isCarLocationDifferent',
      value: '',
      type: 'radio',
      options: [{
        label: 'Yes',
        id: 1
      }, {
        label: 'No',
        id: 2
      }]
    },
    vehicleLocation: {
      placeHolder: 'enter_car_location',
      label: 'enter_car_location',
      name: 'vehicleLocation',
      value: '',
      type: 'placesearch',
      disabled: true,
      validation: {
        name: 'vehicleLocation',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'car_location_required';
          }
          return '';
        }
      }
    },
    policeReferenceNumber: {
      placeHolder: 'police_reference_number',
      label: 'police_reference_number',
      name: 'policeReferenceNumber',
      value: '',
      type: 'text',
      required: true,
      validation: {
        name: 'policeReferenceNumber',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z0-9]*$')]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'loss_details_police_reference_number_required';
          }
          if (error['pattern']) {
            return 'only_alphanumeric_characters_are_allowed';
          }
          if (error['minlength']) {
            return 'loss_details_police_reference_number_min';
          }
          if (error['maxlength']) {
            return 'loss_details_police_reference_number_max';
          }
          return '';
        }
      }
    }
  };
};
const newVehicleDetailsForm = () => {
  return {
    vehicleOwnerName: {
      placeHolder: 'vehicle_owner_name_placeholder',
      label: 'vehicle_owner_name_label',
      name: 'vehicleOwnerName',
      value: '',
      type: 'text',
      maxLength: 40,
      validation: {
        name: 'vehicleRegistrationNum',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z ]*$')]);
        },
        validationMessage: error => {
          if (error['pattern']) {
            return 'only_alphabets_allowed';
          }
          return '';
        }
      }
    },
    insuranceCompany: {
      placeHolder: 'select_dot',
      label: 'insurance_company_third_party',
      name: 'insuranceCompany',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'id',
      fieldValue: 'id',
      options: []
    },
    vehicleRegistrationNum: {
      placeHolder: 'vehicle_registration_plate_number',
      label: 'vehicle_registration_plate_number',
      name: 'vehicleRegistrationNum',
      value: '',
      type: 'text',
      maxLength: 12,
      validation: {
        name: 'vehicleRegistrationNum',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z0-9]*$')]);
        },
        validationMessage: error => {
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
    vehicleChasisNumber: {
      placeHolder: 'VIN_number_chassis_number',
      label: 'VIN_number_chassis_number',
      name: 'vehicleChasisNumber',
      value: '',
      type: 'text',
      maxLength: 17,
      validation: {
        name: 'vehicleChasisNumber',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-hA-Hj-nJ-NpPr-zR-Z0-9]+$')]);
        },
        validationMessage: error => {
          if (error['maxlength'] || error['minlength']) {
            return 'chassis_number_17_digits';
          }
          if (error['pattern']) {
            return 'loss_details_vin_validation';
          }
          return '';
        }
      }
    },
    make: {
      placeHolder: 'Make',
      label: 'make',
      name: 'make',
      value: '',
      type: 'select',
      displayValue: 'name',
      idField: 'make',
      fieldValue: 'id',
      options: []
    },
    model: {
      placeHolder: 'model',
      label: 'model',
      name: 'model',
      value: '',
      type: 'select',
      displayValue: 'modelDescription',
      idField: 'modelDescription',
      fieldValue: 'id',
      options: []
    },
    year: {
      placeHolder: 'year',
      label: 'year',
      name: 'year',
      options: [{}],
      displayValue: 'name',
      fieldValue: 'name',
      type: 'select',
      value: ''
    },
    faultType: {
      placeHolder: '',
      label: '',
      name: 'faultType',
      idField: 'faultType',
      value: 'Non Fault',
      type: 'radio',
      options: [{
        label: 'Non Fault',
        id: 1
      }, {
        label: 'At Fault',
        id: 2
      }]
    },
    policyNumber: {
      placeHolder: 'policy_number',
      label: 'policy_number',
      name: 'policyNumber',
      value: '',
      type: 'text',
      validation: {
        name: 'policyNumber',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(4)]);
        },
        validationMessage: error => {
          console.log('error', error);
          if (error['pattern']) {
            return 'only_alphanumeric_characters_are_allowed';
          }
          if (error['minlength']) {
            return 'loss_details_min_policy_number';
          }
          return '';
        }
      }
    }
  };
};
const viewClaimDetailsForm = () => {
  return {
    status: {
      placeHolder: 'Status',
      label: 'Status',
      name: 'status',
      value: 0,
      type: 'text',
      mode: 'text'
    },
    vehicleRegistrationNum: {
      placeHolder: 'Vehicle Registration / Plate Number',
      label: 'Vehicle Registration / Plate Number',
      name: 'vehicleRegistrationNum',
      value: 0,
      type: 'text',
      maxLength: 12,
      mode: 'text',
      validation: {
        name: 'vehicleRegistrationNum',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z0-9]*$'), vehicleRegNumberValidator()]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter Vehicle Registration Number';
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
    vehicleChasisNum: {
      placeHolder: 'Vehicle Chasis Number',
      label: 'Vehicle Chasis Number',
      name: 'vehicleChasisNum',
      value: 0,
      type: 'text',
      maxLength: 17,
      mode: 'text'
    },
    make: {
      placeHolder: 'Make',
      label: 'Make',
      name: 'make',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'make',
      fieldValue: 'id',
      options: [],
      errorWhenEmpty: true,
      mode: 'text'
    },
    model: {
      placeHolder: 'model',
      label: 'model',
      name: 'model',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'model',
      fieldValue: 'id',
      options: [],
      errorWhenEmpty: true,
      mode: 'text'
    },
    registrationDate: {
      placeHolder: 'Registration Date',
      label: 'Registration Date',
      name: 'registrationDate',
      value: '',
      type: 'date',
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      mode: 'text'
    },
    manufacturingDate: {
      placeHolder: 'Manufacturing Date',
      label: 'Manufacturing Date',
      name: 'manufacturingDate',
      value: '',
      type: 'date',
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      mode: 'text'
    },
    repairEstimatedCost: {
      placeHolder: 'Repair Estimated Cost',
      label: 'Repair Estimated Cost',
      name: 'repairEstimatedCost',
      value: 0,
      type: 'text',
      maxLength: 17,
      mode: 'text'
    },
    repairApprovedCost: {
      placeHolder: 'Repair Approved Cost',
      label: 'Repair Approved Cost',
      name: 'repairApprovedCost',
      value: 0,
      type: 'text',
      maxLength: 17,
      mode: 'text'
    }
  };
};
const viewPolicyDetailsForm = () => {
  return {
    expires: {
      placeHolder: 'Expires',
      label: 'Expires',
      name: 'expires',
      value: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      type: 'datetime',
      maxDate: dayjs__WEBPACK_IMPORTED_MODULE_0__().toDate(),
      mode: 'text'
    },
    insurerFirstName: {
      placeHolder: 'Insurer First Name',
      label: 'Insurer First Name',
      name: 'insurerFirstName',
      value: 0,
      type: 'text',
      maxLength: 12,
      mode: 'text'
    },
    insurerLastName: {
      placeHolder: 'Insurer Last Name',
      label: 'Insurer Last Name',
      name: 'insurerLastName',
      value: 0,
      type: 'text',
      maxLength: 12,
      mode: 'text'
    },
    insuranceOrgName: {
      placeHolder: 'Insurance Org Name',
      label: 'Insurance Org Name',
      name: 'insuranceOrgName',
      value: 0,
      type: 'text',
      maxLength: 12,
      mode: 'text'
    },
    lossJurisdiction: {
      placeHolder: 'Loss Jurisdiction',
      label: 'Loss Jurisdiction',
      name: 'lossJurisdiction',
      value: 0,
      type: 'text',
      maxLength: 12,
      mode: 'text'
    },
    email: {
      placeHolder: 'Email Address',
      label: 'Email Address',
      name: 'email',
      value: 0,
      type: 'text',
      maxLength: 12,
      mode: 'text'
    },
    driverCode: {
      placeHolder: 'select_dot',
      name: 'driverCode',
      label: 'Code',
      value: 0,
      type: 'select',
      displayValue: 'name',
      idField: 'driverCode',
      fieldValue: 'id',
      options: [],
      errorWhenEmpty: true,
      mode: 'text'
    },
    mobNumber: {
      placeHolder: 'Mobile Number',
      label: 'Mobile Number',
      name: 'mobNumber',
      value: 0,
      type: 'text',
      maxLength: 12,
      mode: 'text'
    }
  };
};
const newSettingsGarageForm = () => {
  return {
    assignment: {
      placeHolder: '',
      label: '',
      name: 'assignment',
      idField: 'assignment',
      value: 'Manual',
      type: 'radio',
      options: [{
        label: 'Manual',
        id: 1
      }]
    }
  };
};
/**
   * hours validator
   * @returns
   */
function hourValidator() {
  return control => {
    const regex = /^([01][0-9]|2[0-3])$/;
    const value = control.value;
    if (!value || regex.test(value)) {
      return null;
    } else {
      return {
        'invalidTimeFormat': true
      };
    }
  };
}
/**
   * minutes  validator
   * @returns
   */
function minutesValidator() {
  return control => {
    const regex = /^([0-5][0-9])$/;
    const value = control.value;
    if (!value || regex.test(value)) {
      return null;
    } else {
      return {
        'invalidTimeFormat': true
      };
    }
  };
}
/**
   * License plate Validator
   * @returns
   */
function vehicleRegNumberValidator() {
  const result = {
    'invalidLicensePlate': false
  };
  return control => {
    if (control.value === '0') {
      result['Vehicle Registration Number should not be 0'] = true;
      return result;
    }
    return null;
  };
}

/***/ }),

/***/ 60562:
/*!****************************************************!*\
  !*** ./src/app/helper/form/vehicle-form.helper.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carMileageValidator": () => (/* binding */ carMileageValidator),
/* harmony export */   "licensePlateValidator": () => (/* binding */ licensePlateValidator),
/* harmony export */   "newVehicleForm": () => (/* binding */ newVehicleForm),
/* harmony export */   "newVehicleHeader": () => (/* binding */ newVehicleHeader)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);

const newVehicleForm = () => {
  const model = {
    vin: {
      placeHolder: 'Search VIN',
      name: 'vin',
      label: 'Vin Number',
      type: 'text',
      value: 0,
      icon: 'search',
      maxLength: 17,
      validation: {
        name: 'vin',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-hA-Hj-nJ-NpPr-zR-Z0-9]+$')]);
        },
        validationMessage: error => {
          if (error['pattern']) {
            return 'Invalid characters';
          }
          if (error['minlength']) {
            return 'Vin should have 17 characters';
          }
          return '';
        }
      }
    },
    make: {
      placeHolder: 'Make',
      name: 'make',
      label: 'Make',
      options: [{}],
      displayValue: 'name',
      fieldValue: 'name',
      type: 'select',
      value: 0,
      validation: {
        name: 'make',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please select make';
          }
          return '';
        }
      }
    },
    model: {
      placeHolder: 'Model',
      name: 'model',
      label: 'Model',
      options: [{}],
      displayValue: 'modelDescription',
      fieldValue: 'modelDescription',
      type: 'select',
      value: 0,
      validation: {
        name: 'model',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please select model';
          }
          return '';
        }
      }
    },
    year: {
      placeHolder: 'Import Interval',
      label: 'Import Interval',
      name: 'year',
      //selectedOption: '',
      options: [{}],
      displayValue: 'name',
      fieldValue: 'name',
      type: 'select',
      value: 0,
      validation: {
        name: 'year',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please select year';
          }
          return '';
        }
      }
    },
    licensePlate: {
      placeHolder: 'License Plate',
      label: 'License Plate',
      name: 'licensePlate',
      value: 0,
      type: 'text',
      maxLength: 12,
      validation: {
        name: 'licensePlate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-zA-Z0-9]*$'), licensePlateValidator()]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter license plate';
          }
          if (error['maxlength']) {
            return 'License plate should have not more than 12 characters';
          }
          if (error['pattern']) {
            return 'Only alphanumberic characters are allowed';
          }
          if (error['invalidLicensePlate']) {
            return 'License plate should not be 0';
          }
          return '';
        }
      }
    },
    carMilege: {
      placeHolder: 'Car Mileage',
      label: 'Car Mileage',
      name: 'carMilege',
      value: 0,
      type: 'text',
      maxLength: 7,
      validation: {
        name: 'carMilege',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[0-9]*$')]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter car mileage';
          }
          if (error['maxlength']) {
            return 'Car mileage should have not more than 7 characters';
          }
          if (error['pattern']) {
            return 'Only numeric characters are allowed';
          }
          if (error['invalidCarMileage']) {
            return 'Car mileage should be greater than 0';
          }
          return '';
        }
      }
    },
    registrationDate: {
      placeHolder: 'Registration date',
      label: 'Registration date',
      name: 'registrationDate',
      value: '',
      type: 'date',
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
      minDate: new Date('1980-01-01'),
      validation: {
        name: 'registrationDate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter date';
          }
          return '';
        }
      }
    },
    manufacturingDate: {
      placeHolder: 'Manufacturing  date',
      label: 'Manufacturing  date',
      name: 'manufacturingDate',
      value: '',
      type: 'date',
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
      minDate: new Date('1980-01-01'),
      validation: {
        name: 'manufacturingDate',
        validationFunction: () => {
          return _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]);
        },
        validationMessage: error => {
          if (error['required']) {
            return 'Please enter date';
          }
          return '';
        }
      }
    }
  };
  return model;
};
const newVehicleHeader = {
  title: 'Add vehicle',
  step: 2,
  description: 'Add your customers vehicle below',
  stepName: 'Step Two'
};
/**
 *
 * @returns
 */
function carMileageValidator() {
  const result = {
    'invalidCarMileage': false
  };
  return control => {
    if (control.value && control.value < 1) {
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
function licensePlateValidator() {
  const result = {
    'invalidLicensePlate': false
  };
  return control => {
    if (control.value === '0') {
      result['invalidLicensePlate'] = true;
      return result;
    }
    return null;
  };
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_helper_form_claim-form_helper_ts.js.map