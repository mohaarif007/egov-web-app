var ownerDetails ={
  "name": "ownerDetailsCol",
  "version": "v1",
  "level": 2,
  "jsonPath": "Connection.connectionOwners",
  "groups":[{
    "name": "details",
    "multiple":true,
    "fields": [
      {
        "name": "NameOfApplicant",
        "jsonPath": "Connection.connectionOwners[0].name",
        "label": "wc.create.groups.applicantDetails.nameOfApplicant",
        "pattern": "^([a-zA-Z0-9_-\\s]){3,100}$",
        "type": "text",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "MobileNumber",
        "jsonPath": "Connection.connectionOwners[0].mobileNumber",
        "label": "wc.create.groups.applicantDetails.mobileNumber",
        "pattern": "",
        "type": "mobileNumber",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "Email",
        "jsonPath": "Connection.connectionOwners[0].emailId",
        "label": "wc.create.groups.applicantDetails.email",
        "pattern": "",
        "type": "email",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": "",
        "defaultValue": ""
      },
      {
        "name": "AadharNumber",
        "jsonPath": "Connection.connectionOwners[0].aadhaarNumber",
        "label": "wc.create.groups.applicantDetails.adharNumber",
        "pattern": "",
        "type": "aadhar",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "gender",
        "jsonPath": "Connection.connectionOwners[0].gender",
        "label": "employee.Employee.fields.User.gender",
        "pattern": "",
        "type": "singleValueList",
        "url": "/egov-common-masters/genders/_search?|$.Gender.*|$.Gender.*",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "PrimaryOwner",
        "jsonPath": "Connection.connectionOwners[0].primaryOwner",
        "label": "pt.create.groups.ownerDetails.fields.primaryOwner",
        "pattern": "",
        "type": "checkbox",
        "isRequired": false,
        "defaultValue":true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      }
    ]
  }]
}


var addressDetails ={
  "name": "addressDetailsCol",
  "version": "v1",
  "level": 2,
  "groups":[{
    "name": "showDetails",
    "multiple":false,
    "fields":[
      {
        "name": "AddressNo",
        "jsonPath": "Connection.houseNumber",
        "label": "wc.create.groups.applicantDetails.addressNumber",
        "pattern": "^[\s.]*([^\s.][\s.]*){0,16}$",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "Address",
        "jsonPath": "Connection.address.addressLine1",
        "label": "wc.create.groups.applicantDetails.address",
        "pattern": "^.{3,255}$",
        "type": "text",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "City",
        "jsonPath": "Connection.address.city",
        "label": "employee.Employee.fields.city",
        "pattern": "^([a-zA-Z0-9_-\\s]){2,50}$",
        "type": "text",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "PinCode",
        "jsonPath": "Connection.address.pinCode",
        "label": "pt.create.groups.propertyAddress.fields.pin",
        "pattern": "",
        "type": "pinCode",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "zoneName",
        "jsonPath": "Connection.connectionLocation.revenueBoundary.code",
        "label": "wc.create.groups.fields.zone",
        "pattern": "",
        "type": "singleValueList",
        "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=ZONE&hierarchyTypeName=REVENUE|$.Boundary.*.code|$.Boundary.*.name",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "wardName",
        "jsonPath": "Connection.connectionLocation.adminBoundary.code",
        "label": "wc.create.groups.fields.ward",
        "pattern": "",
        "type": "singleValueList",
        "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=WARD&hierarchyTypeName=ADMINISTRATION|$.Boundary.*.code|$.Boundary.*.name",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      },
      {
        "name": "Locality",
        "jsonPath": "Connection.connectionLocation.locationBoundary.code",
        "label": "wc.create.groups.applicantDetails.locality",
        "pattern": "",
        "type": "singleValueList",
        "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=LOCALITY&hierarchyTypeName=LOCATION|$.Boundary.*.code|$.Boundary.*.name",
        "isRequired": true,
        "isDisabled": false,
        "requiredErrMsg": "",
        "patternErrMsg": ""
      }
    ]
  }]
}

var dat = {
  "wc.create": {
    "numCols": 12 / 3,
    "version": "v1",
    "url": "/wcms-connection/connection/_create",
    "idJsonPath": "Connection[0].acknowledgementNumber",
    "ackUrl":"/waterConnection/view",
    "useTimestamp": true,
    "tenantIdRequired": true, //Instead of boolean value give json path
    "objectName": "Connection",
    "level": 0,
    "groups": [{
          "label": "wc.create.groups.applicationParticular.title", //Cut short labels by taking initial path from parent
          "name": "applicationParticular", //Follow Title case pattern
          "children": [],
          "multiple": false,
          "fields": [
            {
          "name": "With Property",
          "jsonPath": "Connection.withProperty",
          "label": "",
          "pattern": "",
          "type": "radio",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": "",
    			"values": [{"label":"wc.group.withProperty", "value":true},{"label":"wc.group.withoutProperty", "value":false}],
    			"defaultValue":false,
          "showHideFields": [{
               "ifValue": false,
               "hide": [{
                "name": "applicantDetails",
                "isGroup": true,
                "isField": false
               }],
               "show": [{
                "name": "NoOfFlats",
                "isGroup": false,
                "isField": true
              },
              {
               "name": "applicantDetailsWithProp",
               "isGroup": true,
               "isField": false
             }]
              }]
            }
          ]
        },
      {
        "label": "wc.create.groups.applicantDetails.title", //Cut short labels by taking initial path from parent
        "name": "applicantDetailsWithProp", //Follow Title case pattern
        "children":[ownerDetails,addressDetails],
        "multiple":false,
        "fields": [{
          }]
      },
      {
        "label": "wc.create.groups.applicantDetails.title", //Cut short labels by taking initial path from parent
        "name": "applicantDetails", //Follow Title case pattern
        "children": [],
        "hide":true,
        "multiple": false,
        "fields": [{
            "name": "AssessmentNumber",
            "jsonPath": "Connection.property.propertyIdentifier",
            "label": "wc.create.groups.applicantDetails.propertyIdentifier",
            "pattern": "",
            "type": "textSearch",
            "isRequired": true,
            "isDisabled": false,
            "autoCompleteDependancy": {
              "autoCompleteUrl": "/pt-property/properties/_search?upicNumber={value}&tenantId=default",
              "autoFillFields": {
                "Connection.property.mobileNumber": "properties[0].owners[0].mobileNumber",
                "Connection.property.nameOfApplicant": "properties[0].owners[0].name",
                "Connection.property.email": "properties[0].owners[0].emailId",
                "Connection.property.aadhaarNumber": "properties[0].owners[0].aadhaarNumber",
                "Connection.property.pinCode":"properties[0].address.pincode",
                "Connection.property.noOfFloors": "properties[0].propertyDetail.noOfFloors",
                "Connection.property.locality":"properties[0].boundary.locationBoundary.id",
                "Connection.property.zone":"properties[0].boundary.revenueBoundary.id",
                "Connection.property.ward":"properties[0].boundary.adminBoundary.id",
                "Connection.property.address":"properties[0].address.addressLine1",
                "Connection.property.property":"properties[0].propertyDetail.propertyType"
              }
            },
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "NameOfApplicant",
            "jsonPath": "Connection.property.nameOfApplicant",
            "label": "wc.create.groups.applicantDetails.nameOfApplicant",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "MobileNumber",
            "jsonPath": "Connection.property.mobileNumber",
            "label": "wc.create.groups.applicantDetails.mobileNumber",
            "pattern": "",
            "type": "mobileNumber",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Email",
            "jsonPath": "Connection.property.email",
            "label": "wc.create.groups.applicantDetails.email",
            "pattern": "",
            "type": "email",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "isHidden": false,
            "defaultValue": ""
          },
          {
            "name": "AadharNumber",
            "jsonPath": "Connection.property.adharNumber",
            "label": "wc.create.groups.applicantDetails.adharNumber",
            "pattern": "",
            "type": "aadhar",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Address",
            "jsonPath": "Connection.property.address",
            "label": "wc.create.groups.applicantDetails.address",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,250}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "PinCode",
            "jsonPath": "Connection.property.pinCode",
            "label": "pt.create.groups.propertyAddress.fields.pin",
            "pattern": "",
            "type": "pinCode",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Zone",
            "jsonPath": "Connection.property.zone",
            "label": "wc.create.groups.applicantDetails.zone",
            "pattern": "",
            "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=ZONE&hierarchyTypeName=REVENUE|$.Boundary.*.id|$.Boundary.*.name",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "convertToNumber":true
          },
          {
            "name": "Locality",
            "jsonPath": "Connection.property.locality",
            "label": "wc.create.groups.applicantDetails.locality",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=LOCALITY&hierarchyTypeName=LOCATION|$.Boundary.*.id|$.Boundary.*.name",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "convertToNumber":true
          },
          {
            "name": "noOfFloors",
            "jsonPath": "Connection.property.noOfFloors",
            "label": "wc.create.groups.applicantDetails.noOfFloors",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "propertyTaxDue",
            "jsonPath": "Connection.property.propertyTaxDue",
            "label": "wc.create.groups.applicantDetails.propertyTaxDue",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
        ]
      },
      {
        "label": "wc.create.groups.connectionDetails.title",
        "name": "connectionDetails",
        "multiple": false,
        "fields": [
          // {
          //   "name": "PropertyType",
          //   "jsonPath": "Connection.property.propertyType",
          //   "label": "wc.create.groups.connectionDetails.propertyType",
          //   "isHidden":true,
          //   "pattern": "",
          //   "type": "text",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   // "url": "/pt-property/property/propertytypes/_search?|$..name|$..name",
          //   "defaultValue": "Others",
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "CategoryType",
          //   "jsonPath": "Connection.categoryType",
          //   "label": "wc.create.groups.connectionDetails.categoryType",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": "",
      		// 	"defaultValue": [],
      		// 	"url":"/wcms/masters/categorytype/_search?|$..name|$..name"
          // },
          {
            "name": "UsageType",
            "jsonPath": "Connection.usageType",
            "label": "wc.create.groups.connectionDetails.usageType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
      			"defaultValue": [],
      			"url":"/wcms/masters/usagetypes/_search?|$..code|$..name",
            "depedants": [{
                "jsonPath": "Connection.subUsageType",
                "type": "dropDown",
                "pattern": "/wcms/masters/usagetypes/_search?&parent={Connection.usageType}&isSubUsageType=true|$..code|$..name"
              }]
          },
          {
            "name": "subUsageType",
            "jsonPath": "Connection.subUsageType",
            "label": "wc.create.groups.connectionDetails.subUsageType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
      			"defaultValue": [],
      			"url":""
          },
          {
            "name": "hscPipeSizeType",
            "jsonPath": "Connection.hscPipeSizeType",
            "label": "wc.create.groups.connectionDetails.hscPipeSizeType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
      			"defaultValue": [],
      			"url":"/wcms/masters/pipesizes/_search?|$..sizeInMilimeter|$..sizeInInch"
          },
          {
            "name": "applicationType",
            "jsonPath": "Connection.applicationType",
            "label": "wc.create.groups.connectionDetails.applicationType",
            "pattern": "",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "isHidden": true,
            "defaultValue": "NEWCONNECTION",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "connectionStatus",
            "jsonPath": "Connection.connectionStatus",
            "label": "wc.create.groups.connectionDetails.applicationType",
            "pattern": "",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "isHidden": true,
            "defaultValue": "INPROGRESS",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "billingType",
            "jsonPath": "Connection.billingType",
            "label": "wc.create.groups.connectionDetails.billingType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "url": "/wcms-connection/connection/_getbillingtypes?|$..key|$..object",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "ConnectionType",
            "jsonPath": "Connection.connectionType",
            "label": "wc.create.groups.connectionDetails.connectionType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "url": "/wcms-connection/connection/_getconnectiontypes?|$..key|$..object",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "SourceType",
            "jsonPath": "Connection.sourceType",
            "label": "wc.create.groups.connectionDetails.sourceType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "url": "/wcms/masters/sourcetypes/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "supplyType",
            "jsonPath": "Connection.supplyType",
            "label": "wc.create.groups.connectionDetails.supplyType",
            "isHidden": true,
            "pattern": "",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            // "url": "/wcms/masters/supplytype/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "defaultValue":"Semi Bulk Type",
            "patternErrMsg": ""
          },
          {
            "name": "StorageReservoir",
            "jsonPath": "Connection.storageReservoir",
            "label": "wc.create.groups.fields.storageType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "url": "/wcms/masters/storagereservoirs/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "waterTreatment",
            "jsonPath": "Connection.waterTreatment",
            "label": "wc.create.groups.connectionDetails.waterTreatment",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms/masters/treatmentplants/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "sumpCapacity",
            "jsonPath": "Connection.sumpCapacity",
            "label": "wc.create.groups.connectionDetails.fields.sumpCapacity",
            "pattern": "^\\d{1,15}$",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Sequence No",
            "jsonPath": "Connection.billSequenceNumber",
            "label": "wc.create.groups.connectionDetails.fields.billingNumber",
            "pattern": "^[1-9]\\d{0,3}(\\.\\d{0,3})*(,\\d+)?$",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "PlumberName",
            "jsonPath": "Connection.plumberName",
            "label": "wc.create.groups.connectionDetails.fields.plumberName",
            "pattern": "^([a-zA-Z0-9_-\\s]){3,50}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "NoOfTaps",
            "jsonPath": "Connection.numberOfTaps",
            "label": "wc.create.groups.connectionDetails.fields.noOfTaps",
            "pattern": "^[1-9]\\d{0,3}?$",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "BuildingName",
            "jsonPath": "Connection.connectionLocation.buildingName",
            "label": "wc.create.groups.connectionDetails.fields.buildingName",
            "pattern": "^([a-zA-Z0-9_-\\s]){0,24}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "BuildingAddress",
            "jsonPath": "Connection.connectionLocation.billingAddress",
            "label": "wc.create.groups.connectionDetails.fields.buildingAddress",
            "pattern": "^([a-zA-Z0-9_-\\s]){0,256}$",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "RoadName",
            "jsonPath": "Connection.connectionLocation.roadName",
            "label": "wc.create.groups.connectionDetails.fields.roadName",
            "pattern": "^([a-zA-Z0-9_-\\s]){0,32}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "GISNo",
            "jsonPath": "Connection.connectionLocation.gisNumber",
            "label": "wc.create.groups.connectionDetails.fields.gISNo",
            "pattern": "^([a-zA-Z0-9_-\\s]){0,15}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "numberOfPersons",
            "jsonPath": "Connection.numberOfPersons",
            "label": "wc.create.groups.connectionDetails.fields.numberOfPersons",
            "type": "number",
            "pattern":"^[1-9]\\d{0,3}?$",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "depedants":[{
                "jsonPath":"Connection.numberOfFamily",
                "type":"textField",
                "pattern":"getVal('Connection.numberOfPersons')!=''? (Math.ceil(getVal('Connection.numberOfPersons')/4)):0",
                "rg":"",
                "isRequired": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              }]
          },
          {
            "name": "numberOfFamily",
            "jsonPath": "Connection.numberOfFamily",
            "label": "wc.create.numberOfFamily",
            "pattern": "^(0|[1-9][0-9]*)$",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Outside ULB",
            "jsonPath": "Connection.outsideULB",
            "label": "wc.create.groups.connectionDetails.fields.outSide",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "defaultValue":false
          }
        ]
      },
      {
        "label": "wc.create.groups.fileDetails.title",
        "name": "Documents",
        "fields": [{
          "name": "File",
          "jsonPath": "Connection.documents",
          "type": "documentList",
          "pathToArray": "DocumentTypeApplicationTypes",
          "displayNameJsonPath": "documentType",
          "url": "/wcms/masters/documenttypes-applicationtypes/_search?applicationType=NEWCONNECTION",
          "autoFillFields": [{
            "name": "document",
            "jsonPath": "documentTypeId"
          }]
        }]
      },
      {
        "label": "wc.create.groups.approvalDetails.title",
        "name": "ApprovalDetails",
        "multiple": false,
        "fields": [{
            "name": "department",
            "jsonPath": "Connection.workflowDetails.department",
            "label": "wc.create.groups.approvalDetails.fields.department",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "url": "/egov-common-masters/departments/_search?|$..id|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "depedants": [{
              "name": "Connection.workflowDetails.assignee",
              "type": "dropDown",
              "pattern": "/hr-employee/employees/_search?tenantId=default&departmentId={Connection.workflowDetails.department}&designationId={Connection.workflowDetails.designation}|$..position|$..name"
            }]
          },
          {
            "name": "designation",
            "jsonPath": "Connection.workflowDetails.designation",
            "label": "wc.create.groups.approvalDetails.fields.designation",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-common-workflows/designations/_search?tenantId=default&businessKey=WaterConnection&approvalDepartmentName=&departmentRule=&currentStatus=&additionalRule=&pendingAction=&designation=&amountRule=|$..id|$..name",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "depedants": [{
              "jsonPath": "Connection.workflowDetails.assignee",
              "type": "dropDown",
              "pattern": "/hr-employee/employees/_search?tenantId=default&departmentId={Connection.workflowDetails.department}&designationId={Connection.workflowDetails.designation}|$..position|$..name"
            }]
          },
          {
            "name": "assignee",
            "jsonPath": "Connection.workflowDetails.assignee",
            "label": "wc.create.groups.approvalDetails.fields.Assignee",
            "pattern": "",
            "type": "singleValueList",
            "url": "/hr-employee/employees/_search?tenantId=default&departmentId={Connection.workflowDetails.department}&designationId={Connection.workflowDetails.designation}|$..position|$.Employee.*.name",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "comments",
            "jsonPath": "Connection.workflowDetails.comments",
            "label": "wc.create.groups.approvalDetails.fields.comments",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "initiatorPosition",
            "jsonPath": "Connection.workflowDetails.initiatorPosition",
            "label": "wc.create.groups.approvalDetails.fields",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "isHidden": true,
            "defaultValue": "2",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Status",
            "jsonPath": "Connection.workflowDetails.status",
            "label": "wc.create.groups.approvalDetails.fields.status",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "isHidden": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
        ]
      }
    ]
  },
  "wc.view": {
    "numCols": 12 / 3,
    "version": "v1",
    "url": "/wcms-connection/connection/_search?acknowledgementNumber={acknowledgementNumber}",
    "useTimestamp": true,
    "tenantIdRequired": true, //Instead of boolean value give json path
    "objectName": "Connection",
    "level": 0,
    "groups": [{
          "label": "wc.create.groups.applicationParticular.title", //Cut short labels by taking initial path from parent
          "name": "applicationParticular", //Follow Title case pattern
          "children": [],
          "multiple": false,
          "fields": [
            {
              "name": "With Property",
              "jsonPath": "Connection[0].withProperty",
              "label": "wc.group.withProperty",
              "pattern": "",
              "type": "radio",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
        			"values": [{"label":"wc.group.withProperty", "value":true},{"label":"wc.group.withoutProperty", "value":false}],
        			"defaultValue":false,
              "showHideFields": [{
               "ifValue": false,
               "hide": [{
                "name": "applicantDetails",
                "isGroup": true,
                "isField": false
              },
              {
               "name": "propertyAddressDetails",
               "isGroup": true,
               "isField": false
             }],
               "show": [{
                "name": "applicantDetailsWithProp",
                "isGroup": true,
                "isField": false
              },
              {
               "name": "addressDetails",
               "isGroup": true,
               "isField": false
             }]
              }]
            }
          ]
        },
        {
          "label": "wc.create.groups.applicantDetails.title", //Cut short labels by taking initial path from parent
          "name": "applicantDetailsWithProp", //Follow Title case pattern,
          "hide":false,
          "jsonPath":"Connection[0].connectionOwners",
          "multiple":true,
          "fields": [
            {
              "name": "NameOfApplicant",
              "jsonPath": "Connection[0].connectionOwners[0].name",
              "label": "wc.create.groups.applicantDetails.nameOfApplicant",
              "pattern": "^([a-zA-Z0-9_-\\s]){3,100}$",
              "type": "text",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "MobileNumber",
              "jsonPath": "Connection[0].connectionOwners[0].mobileNumber",
              "label": "wc.create.groups.applicantDetails.mobileNumber",
              "pattern": "",
              "type": "mobileNumber",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Email",
              "jsonPath": "Connection[0].connectionOwners[0].emailId",
              "label": "wc.create.groups.applicantDetails.email",
              "pattern": "",
              "type": "email",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "defaultValue": ""
            },
            {
              "name": "AadharNumber",
              "jsonPath": "Connection[0].connectionOwners[0].aadhaarNumber",
              "label": "wc.create.groups.applicantDetails.adharNumber",
              "pattern": "",
              "type": "aadhar",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "gender",
              "jsonPath": "Connection[0].connectionOwners[0].gender",
              "label": "employee.Employee.fields.User.gender",
              "pattern": "",
              "type": "singleValueList",
              "url": "/egov-common-masters/genders/_search?|$.Gender.*|$.Gender.*",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Primary Owner",
              "jsonPath": "Connection[0].connectionOwners[0].primaryOwner",
              "label": "pt.create.groups.ownerDetails.fields.primaryOwner",
              "pattern": "",
              "type": "checkbox",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "defaultValue":true
            }
          ]
        },
        {
          "name": "addressDetails",
          "multiple": false,
          "hide":false,
            "fields": [
              {
                "name": "acknowledgementNumber",
                "jsonPath": "Connection[0].acknowledgementNumber",
                "label": "wc.create.groups.applicantDetails.acknowledgementNumber",
                "pattern": "",
                "type": "text",
                "isRequired": false,
                "isDisabled": true,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              },
              {
                "name": "AddressNo",
                "jsonPath": "Connection[0].houseNumber",
                "label": "wc.create.groups.applicantDetails.addressNumber",
                "pattern": "^[\s.]*([^\s.][\s.]*){0,16}$",
                "type": "text",
                "isRequired": false,
                "isDisabled": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              },
              {
                "name": "Address",
                "jsonPath": "Connection[0].address.addressLine1",
                "label": "wc.create.groups.applicantDetails.address",
                "pattern": "^.{3,255}$",
                "type": "text",
                "isRequired": true,
                "isDisabled": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              },
              {
                "name": "City",
                "jsonPath": "Connection[0].address.city",
                "label": "employee.Employee.fields.city",
                "pattern": "^([a-zA-Z0-9_-\\s]){2,50}$",
                "type": "text",
                "isRequired": true,
                "isDisabled": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              },
              {
                "name": "PinCode",
                "jsonPath": "Connection[0].address.pinCode",
                "label": "pt.create.groups.propertyAddress.fields.pin",
                "pattern": "",
                "type": "pinCode",
                "isRequired": true,
                "isDisabled": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              },
              {
                "name": "zoneName",
                "jsonPath": "Connection[0].connectionLocation.revenueBoundary.code",
                "label": "wc.create.groups.fields.zone",
                "pattern": "",
                "type": "singleValueList",
                "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=ZONE&hierarchyTypeName=REVENUE|$.Boundary.*.code|$.Boundary.*.name",
                "isRequired": true,
                "isDisabled": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              },
              {
                "name": "wardName",
                "jsonPath": "Connection[0].connectionLocation.adminBoundary.code",
                "label": "wc.create.groups.fields.ward",
                "pattern": "",
                "type": "singleValueList",
                "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=WARD&hierarchyTypeName=ADMINISTRATION|$.Boundary.*.code|$.Boundary.*.name",
                "isRequired": true,
                "isDisabled": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              },
              {
                "name": "Locality",
                "jsonPath": "Connection[0].connectionLocation.locationBoundary.code",
                "label": "wc.create.groups.applicantDetails.locality",
                "pattern": "",
                "type": "singleValueList",
                "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=LOCALITY&hierarchyTypeName=LOCATION|$.Boundary.*.code|$.Boundary.*.name",
                "isRequired": true,
                "isDisabled": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              }
            ]
        },
        {
        "label": "wc.create.groups.applicantDetails.title", //Cut short labels by taking initial path from parent
        "name": "applicantDetails", //Follow Title case pattern
        "children": [],
        "multiple": false,
        "hide":true,
        "fields": [{
            "name": "acknowledgementNumber",
            "jsonPath": "Connection[0].acknowledgementNumber",
            "label": "wc.create.groups.applicantDetails.acknowledgementNumber",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "AssessmentNumber",
            "jsonPath": "Connection[0].property.propertyIdentifier",
            "label": "wc.create.groups.applicantDetails.propertyIdentifier",
            "pattern": "",
            "type": "textSearch",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          // {
          // 	"name": "AssessmentNumber",
          // 	"jsonPath": "Connection.property.propertyIdentifier",
          // 	"label": "wc.create.groups.applicantDetails.propertyIdentifier",
          // 	"pattern": "",
          // 	"type": "number",
          // 	"isRequired": true,
          // 	"isDisabled": false,
          // 	"autoCompleteUrl": "",
          // 	"autoFillFields": {
          // 		"NameOfApplicant": "",
          // 		"MobileNumber": "",
          // 		"Email": "",
          // 		"AadharNumber": ""
          // 	},
          // 	"requiredErrMsg": "",//Remove required messages
          // 	"patternErrMsg": ""
          // },
          {
            "name": "NameOfApplicant",
            "jsonPath": "Connection[0].property.nameOfApplicant",
            "label": "wc.create.groups.applicantDetails.nameOfApplicant",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "MobileNumber",
            "jsonPath": "Connection[0].property.mobileNumber",
            "label": "wc.create.groups.applicantDetails.mobileNumber",
            "pattern": "",
            "type": "mobileNumber",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Email",
            "jsonPath": "Connection[0].property.email",
            "label": "wc.create.groups.applicantDetails.email",
            "pattern": "",
            "type": "email",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "isHidden": false,
            "defaultValue": ""
          },
          {
            "name": "AadharNumber",
            "jsonPath": "Connection[0].property.adharNumber",
            "label": "wc.create.groups.applicantDetails.adharNumber",
            "pattern": "",
            "type": "aadhar",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Address",
            "jsonPath": "Connection[0].property.address",
            "label": "wc.create.groups.applicantDetails.address",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "PinCode",
            "jsonPath": "Connection[0].property.pinCode",
            "label": "pt.create.groups.propertyAddress.fields.pin",
            "pattern": "",
            "type": "pinCode",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Zone",
            "jsonPath": "Connection[0].property.zone",
            "label": "wc.create.groups.applicantDetails.zone",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=ZONE&hierarchyTypeName=REVENUE|$.Boundary.*.id|$.Boundary.*.name",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "convertToNumber":true
          },
          {
            "name": "Locality",
            "jsonPath": "Connection[0].property.locality",
            "label": "wc.create.groups.applicantDetails.locality",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": true,
            "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=LOCALITY&hierarchyTypeName=LOCATION|$.Boundary.*.id|$.Boundary.*.name",
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "convertToNumber":true
          },
          {
            "name": "propertyTaxDue",
            "jsonPath": "Connection[0].property.propertyTaxDue",
            "label": "wc.create.groups.applicantDetails.propertyTaxDue",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
        ]
      },
      {
        "label": "wc.create.groups.connectionDetails.title",
        "name": "connectionDetails",
        "multiple": false,
        "fields": [
          // {
          //   "name": "PropertyType",
          //   "jsonPath": "Connection[0].property.propertyType",
          //   "label": "wc.create.groups.connectionDetails.propertyType",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "url": "/pt-property/property/propertytypes/_search?|$..name|$..name",
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "CategoryType",
          //   "jsonPath": "Connection[0].categoryType",
          //   "label": "wc.create.groups.connectionDetails.categoryType",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          {
            "name": "UsageType",
            "jsonPath": "Connection[0].usageTypeName",
            "label": "wc.create.groups.connectionDetails.usageType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms/masters/usagetypes/_search?|$..code|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "depedants": [{
                "jsonPath": "Connection[0].subUsageTypeName",
                "type": "dropDown",
                "pattern": "/wcms/masters/usagetypes/_search?&parent={Connection.usageTypeName}&isSubUsageType=true|$..code|$..name"
              }]
          },
          {
            "name": "subUsageType",
            "jsonPath": "Connection[0].subUsageTypeName",
            "label": "wc.create.groups.connectionDetails.subUsageType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
      			"defaultValue":""
          },
          {
            "name": "hscPipeSizeType",
            "jsonPath": "Connection[0].hscPipeSizeType",
            "label": "wc.create.groups.connectionDetails.hscPipeSizeType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "url":"/wcms/masters/pipesizes/_search?|$..sizeInMilimeter|$..sizeInInch"
          },
          {
            "name": "applicationType",
            "jsonPath": "Connection[0].applicationType",
            "label": "wc.create.groups.connectionDetails.applicationType",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "isHidden": true,
            "defaultValue": "NEWCONNECTION",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "connectionStatus",
            "jsonPath": "Connection[0].connectionStatus",
            "label": "wc.create.groups.connectionDetails.applicationType",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "isHidden": true,
            "defaultValue": "INPROGRESS",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "billingType",
            "jsonPath": "Connection[0].billingType",
            "label": "wc.create.groups.connectionDetails.billingType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms-connection/connection/_getbillingtypes?|$..key|$..object",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "ConnectionType",
            "jsonPath": "Connection[0].connectionType",
            "label": "wc.create.groups.connectionDetails.connectionType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms-connection/connection/_getconnectiontypes?|$..key|$..object",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "SourceType",
            "jsonPath": "Connection[0].sourceType",
            "label": "wc.create.groups.connectionDetails.sourceType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms/masters/sourcetypes/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          // {
          //   "name": "supplyType",
          //   "jsonPath": "Connection[0].supplyType",
          //   "label": "wc.create.groups.connectionDetails.supplyType",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "url": "/wcms/masters/supplytype/_search?|$..name|$..name",
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          {
            "name": "StorageReservoir",
            "jsonPath": "Connection[0].storageReservoir",
            "label": "wc.create.groups.fields.storageType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "url": "/wcms/masters/storagereservoirs/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "waterTreatment",
            "jsonPath": "Connection[0].waterTreatment",
            "label": "wc.create.groups.connectionDetails.waterTreatment",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms/masters/treatmentplants/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "sumpCapacity",
            "jsonPath": "Connection[0].sumpCapacity",
            "label": "wc.create.groups.connectionDetails.fields.sumpCapacity",
            "pattern": "^(0|[1-9][0-9]*)$",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "numberOfPersons",
            "jsonPath": "Connection[0].numberOfPersons",
            "label": "wc.create.groups.connectionDetails.fields.numberOfPersons",
            "type": "number",
            "pattern":"^(0|[1-9][0-9]*)$",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "depedants":[{
                "jsonPath":"Connection.numberOfFamily",
                "type":"textField",
                "pattern":"getVal('Connection.numberOfPersons')!=''? (Math.ceil(getVal('Connection.numberOfPersons')/4)):0",
                "rg":"",
                "isRequired": false,
                "requiredErrMsg": "",
                "patternErrMsg": ""
              }]
          },
          {
            "name": "numberOfFamily",
            "jsonPath": "Connection[0].numberOfFamily",
            "label": "wc.create.numberOfFamily",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Sequence No",
            "jsonPath": "Connection[0].billSequenceNumber",
            "label": "wc.create.groups.connectionDetails.fields.billingNumber",
            "pattern": "^(0|[1-9][0-9]*)$",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "PlumberName",
            "jsonPath": "Connection[0].plumberName",
            "label": "wc.create.groups.connectionDetails.fields.plumberName",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "NoOfTaps",
            "jsonPath": "Connection[0].numberOfTaps",
            "label": "wc.create.groups.connectionDetails.fields.noOfTaps",
            "pattern": "^(0|[1-9][0-9]*)$",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "BuildingName",
            "jsonPath": "Connection[0].connectionLocation.buildingName",
            "label": "wc.create.groups.connectionDetails.fields.buildingName",
            "pattern": "^([a-zA-Z0-9_-\\s]){0,24}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "BuildingAddress",
            "jsonPath": "Connection[0].connectionLocation.billingAddress",
            "label": "wc.create.groups.connectionDetails.fields.buildingAddress",
            "pattern": "^([a-zA-Z0-9_-\\s]){0,256}$",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "RoadName",
            "jsonPath": "Connection[0].connectionLocation.roadName",
            "label": "wc.create.groups.connectionDetails.fields.roadName",
            "pattern": "^([a-zA-Z0-9_-\\s]){0,32}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "GISNo",
            "jsonPath": "Connection[0].connectionLocation.gisNumber",
            "label": "wc.create.groups.connectionDetails.fields.gISNo",
            "pattern": "^([a-zA-Z0-9_-\\s]){0,15}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Outside ULB",
            "jsonPath": "Connection[0].outsideULB",
            "label": "wc.create.groups.connectionDetails.fields.outSide",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
        ]
      },
      // {
      //   "label": "wc.create.groups.fileDetails.title",
      //   "name": "Documents",
      //   "multiple": false,
      //   "fields": [
      //     // {
      //     // 	"name": " ",
      //     // 	"jsonPath": "Connection.documents[0].fileStoreId",
      //     // 	"label": "wc.create.groups.fileDetails.fields.PTaxReciept",
      //     // 	"pattern": "",
      //     // 	"type": "singleFileUpload",
      //     // 	"isRequired": true,
      //     // 	"isDisabled": false,
      //     // 	"requiredErrMsg": "",
      //     // 	"patternErrMsg": "",
      //     // 	"defaultValue": "4567"
      //     // },
      //     {
      //       "name": " ",
      //       "jsonPath": "Connection[0].documents[0].fileStoreId",
      //       "label": "wc.create.groups.fileDetails.fields.PTaxReciept",
      //       "pattern": "",
      //       "type": "text",
      //       "isRequired": true,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": "",
      //       "defaultValue": "4567",
      //       "isHidden": true
      //     },
      //     {
      //       "name": " ",
      //       "jsonPath": "Connection[0].documents[0].document",
      //       "label": "wc.create.groups.fileDetails.fields.PTaxReciept",
      //       "pattern": "",
      //       "isHidden": true,
      //       "type": "singleFileUpload",
      //       "isRequired": true,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": "",
      //       "defaultValue": "1"
      //     },
      //     {
      //       "name": " ",
      //       "jsonPath": "Connection[0].documents[0].name",
      //       "label": "wc.create.groups.fileDetails.fields.PTaxReciept",
      //       "pattern": "",
      //       "type": "singleFileUpload",
      //       "isRequired": true,
      //       "isHidden": true,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": "",
      //       "defaultValue": "Test"
      //     },
      //     {
      //       "name": " ",
      //       "jsonPath": "Connection[0].documents[1]",
      //       "label": "wc.create.groups.fileDetails.fields.DistributionLineLocationMap",
      //       "pattern": "",
      //       "type": "singleFileUpload",
      //       "isRequired": true,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": ""
      //     },
      //     {
      //       "name": " ",
      //       "jsonPath": "Connection[0].documents[2]",
      //       "label": "wc.create.groups.fileDetails.fields.WhiteRationCard",
      //       "pattern": "",
      //       "type": "singleFileUpload",
      //       "isRequired": true,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": ""
      //     },
      //     {
      //       "name": " ",
      //       "jsonPath": "Connection[0].documents[3]",
      //       "label": "wc.create.groups.fileDetails.fields.CourtFeeStamp",
      //       "pattern": "",
      //       "type": "singleFileUpload",
      //       "isRequired": true,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": ""
      //     }
      //   ]
      // },
      // {
      //   "label": "wc.create.groups.approvalDetails.title",
      //   "name": "ApprovalDetails",
      //   "multiple": false,
      //   "fields": [{
      //       "name": "department",
      //       "jsonPath": "Connection.workflowDetails.department",
      //       "label": "wc.create.groups.approvalDetails.fields.department",
      //       "pattern": "",
      //       "type": "singleValueList",
      //       "isRequired": false,
      //       "isDisabled": false,
      //       "url": "/egov-common-masters/departments/_search?tenantId=default|$..id|$..name",
      //       "requiredErrMsg": "",
      //       "patternErrMsg": "",
      //       "depedants": [{
      //         "name": "Connection.workflowDetails.approver",
      //         "type": "dropDown",
      //         "pattern": "/hr-employee/employees/_search?tenantId=default&departmentId={connection.workflowDetails.department}&designationId={connection.workflowDetails.designation}|$..id|$..name"
      //       }]
      //     },
      //     {
      //       "name": "designation",
      //       "jsonPath": "Connection.workflowDetails.designation",
      //       "label": "wc.create.groups.approvalDetails.fields.designation",
      //       "pattern": "",
      //       "type": "singleValueList",
      //       "url": "/egov-common-workflows/designations/_search?tenantId=default&businessKey=WaterConnection&approvalDepartmentName=&departmentRule=&currentStatus=&additionalRule=&pendingAction=&designation=&amountRule=|$..id|$..name",
      //       "isRequired": false,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": "",
      //       "depedants": [{
      //         "jsonPath": "Connection.workflowDetails.approver",
      //         "type": "dropDown",
      //         "pattern": "/hr-employee/employees/_search?tenantId=default&departmentId={connection.workflowDetails.department}&designationId={connection.workflowDetails.designation}|$..id|$..name"
      //       }]
      //     },
      //     {
      //       "name": "assignee",
      //       "jsonPath": "Connection.workflowDetails.assignee",
      //       "label": "wc.create.groups.approvalDetails.fields.Assignee",
      //       "pattern": "",
      //       "type": "singleValueList",
      //       "url": "/hr-employee/employees/_search?tenantId=default&departmentId={connection.workflowDetails.department}&designationId={connection.workflowDetails.designation}|$..id|$..name",
      //       "isRequired": false,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": ""
      //     },
      //     {
      //       "name": "comments",
      //       "jsonPath": "Connection.workflowDetails.comments",
      //       "label": "wc.create.groups.approvalDetails.fields.comments",
      //       "pattern": "",
      //       "type": "textarea",
      //       "isRequired": false,
      //       "isDisabled": false,
      //       "requiredErrMsg": "",
      //       "patternErrMsg": ""
      //     },
      //     {
      //       "name": "initiatorPosition",
      //       "jsonPath": "Connection.workflowDetails.initiatorPosition",
      //       "label": "wc.create.groups.approvalDetails.fields.comments",
      //       "pattern": "",
      //       "type": "number",
      //       "isRequired": false,
      //       "isDisabled": false,
      //       "isHidden": true,
      //       "defaultValue": "2",
      //       "requiredErrMsg": "",
      //       "patternErrMsg": ""
      //     }
      //
      //
      //
      //
      //   ]
      // }
    ]
  }

}

export default dat;
