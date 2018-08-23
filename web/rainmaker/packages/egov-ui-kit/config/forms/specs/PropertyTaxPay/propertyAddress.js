"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _endPoints = require("egov-ui-kit/utils/endPoints");

var _reusableFields = require("egov-ui-kit/config/forms/specs/PropertyTaxPay/utils/reusableFields");

var _actions = require("egov-ui-kit/redux/common/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formConfig = {
  name: "propertyAddress",
  fields: (0, _extends3.default)({
    city: {
      id: "city",
      jsonPath: "Properties[0].address.city",
      required: true,
      type: "singleValueList",
      floatingLabelText: "CORE_COMMON_CITY",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      fullWidth: true,
      hintText: "PT_COMMONS_SELECT_PLACEHOLDER",
      numcols: 6,
      dataFetchConfig: {
        url: _endPoints.CITY.GET.URL,
        action: _endPoints.CITY.GET.ACTION,
        queryParams: [],
        requestBody: {
          MdmsCriteria: {
            tenantId: "pb",
            moduleDetails: [{
              moduleName: "tenant",
              masterDetails: [{
                name: "tenants"
              }]
            }]
          }
        },
        dataPath: ["MdmsRes.tenant.tenants"],
        dependants: [{
          fieldKey: "mohalla"
        }]
      },
      updateDependentFields: function updateDependentFields(_ref) {
        var formKey = _ref.formKey,
            field = _ref.field,
            dispatch = _ref.dispatch,
            state = _ref.state;

        dispatch((0, _actions.prepareFormData)("Properties[0].tenantId", field.value));
        var requestBody = {
          MdmsCriteria: {
            tenantId: field.value,
            moduleDetails: [{
              moduleName: "PropertyTax",
              masterDetails: [{
                name: "Floor"
              }, {
                name: "OccupancyType"
              }, {
                name: "OwnerShipCategory"
              }, {
                name: "OwnerType"
              }, {
                name: "PropertySubType"
              }, {
                name: "PropertyType"
              }, {
                name: "SubOwnerShipCategory"
              }, {
                name: "UsageCategoryDetail"
              }, {
                name: "UsageCategoryMajor"
              }, {
                name: "UsageCategoryMinor"
              }, {
                name: "UsageCategorySubMinor"
              }]
            }]
          }
        };

        dispatch((0, _actions.fetchGeneralMDMSData)(requestBody, "PropertyTax", ["Floor", "OccupancyType", "OwnerShipCategory", "OwnerType", "PropertySubType", "PropertyType", "SubOwnerShipCategory", "UsageCategoryDetail", "UsageCategoryMajor", "UsageCategoryMinor", "UsageCategorySubMinor", "Rebate", "Penalty", "Interest", "FireCess"]));
      }
    },
    dummy: {
      numcols: 6,
      type: "dummy"
    },
    houseNumber: {
      id: "house-number",
      jsonPath: "Properties[0].address.doorNo",
      type: "textfield",
      floatingLabelText: "PT_PROPERTY_DETAILS_DOOR_NUMBER",
      hintText: "PT_PROPERTY_DETAILS_DOOR_NUMBER_PLACEHOLDER",
      numcols: 6,
      errorMessage: "PT_PROPERTY_DETAILS_DOOR_NUMBER_ERRORMSG",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      maxLength: 64
    },
    colony: {
      id: "property-colony",
      jsonPath: "Properties[0].address.buildingName",
      type: "textfield",
      floatingLabelText: "PT_PROPERTY_DETAILS_BUILDING_COLONY_NAME",
      hintText: "PT_PROPERTY_DETAILS_BUILDING_COLONY_NAME_PLACEHOLDER",
      numcols: 6,
      errorMessage: "PT_PROPERTY_DETAILS_COLONY_NAME_ERRORMSG",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      maxLength: 64
    },
    street: {
      id: "property-street",
      jsonPath: "Properties[0].address.street",
      type: "textfield",
      floatingLabelText: "PT_PROPERTY_DETAILS_STREET_NAME",
      hintText: "PT_PROPERTY_DETAILS_STREET_NAME_PLACEHOLDER",
      numcols: 6,
      errorMessage: "PT_PROPERTY_DETAILS_STREET_ERRORMSG",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      maxLength: 64
    }
  }, _reusableFields.mohalla, {
    pincode: {
      id: "pincode",
      type: "number",
      jsonPath: "Properties[0].address.pincode",
      floatingLabelText: "PT_PROPERTY_DETAILS_PINCODE",
      hintText: "PT_PROPERTY_DETAILS_PINCODE_PLACEHOLDER",
      numcols: 6,
      //errorMessage: "PT_PROPERTY_DETAILS_PINCODE_ERRORMSG",
      errorMessage: "Pincode should be 6 digits",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      pattern: "^([0-9]){6}$"
    },
    oldPID: {
      id: "oldpid",
      type: "textFieldIcon",
      className: "pt-old-pid-text-field",
      text: "SEARCH",
      iconRedirectionURL: "https://pmidc.punjab.gov.in/propertymis/search.php",
      jsonPath: "Properties[0].oldPropertyId",
      floatingLabelText: "PT_PROPERTY_ADDRESS_EXISTING_PID",
      hintText: "PT_PROPERTY_ADDRESS_EXISTING_PID_PLACEHOLDER",
      numcols: 6,
      errorMessage: "PT_PROPERTY_DETAILS_PINCODE_ERRORMSG",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      toolTip: true,
      pattern: /^[a-zA-Z0-9\\\/\-_\s]{1,64}$/i,
      toolTipMessage: "PT_OLDPID_TOOLTIP_MESSAGE",
      maxLength: 64
    }
  }),

  action: "",
  redirectionRoute: "",
  saveUrl: "",
  isFormValid: false
};

exports.default = formConfig;