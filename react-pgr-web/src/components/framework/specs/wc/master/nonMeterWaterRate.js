var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url": "/wcms/masters/nonmeterwaterrates/_create",
		"tenantIdRequired": true,
		"idJsonPath": "NonMeterWaterRates[0].code",
		"useTimestamp": true,
		"objectName": "NonMeterWaterRates",
		"groups": [
			{
				"label": "wc.create.NonMeterWaterRates.title",
				"name": "meterWaterRateCreate",
				"fields": [
					{
						"name": "UsageType",
						"jsonPath": "NonMeterWaterRates[0].usageTypeCode",
						"label": "wc.create.groups.connectionDetails.usageType",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/usagetypes/_search?&active=true|$..code|$..name",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"depedants": [{
								"jsonPath": "NonMeterWaterRates[0].subUsageTypeCode",
								"type": "dropDown",
								"pattern": "/wcms/masters/usagetypes/_search?&isSubUsageType=true&parent={NonMeterWaterRates[0].usageTypeCode}|$..code|$..name"
							}]
					},
					{
						"name": "SubUsageType",
						"jsonPath": "NonMeterWaterRates[0].subUsageTypeCode",
						"label": "wc.create.groups.connectionDetails.subUsageType",
						"pattern": "",
						"type": "singleValueList",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
            {
							"name": "sourceTypeName",
							"jsonPath": "NonMeterWaterRates[0].sourceTypeName",
							"label": "wc.create.groups.fields.sourceTypeName",
							"pattern": "",
							"type": "singleValueList",
							"url": "/wcms/masters/sourcetypes/_search?&active=true|$..name|$..name",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
	            "name": "ConnectionType",
	            "jsonPath": "NonMeterWaterRates[0].connectionType",
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
  						"name": "pipeSize",
  						"jsonPath": "NonMeterWaterRates[0].pipeSize",
  						"label": "wc.create.pipeSize",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/wcms/masters/pipesizes/_search?&active=true|$..sizeInMilimeter|$..sizeInInch",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
              "name": "fromDate",
              "jsonPath": "NonMeterWaterRates[0].fromDate",
              "label": "pt.create.groups.floorDetails.fields.effectiveFromDate",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "NoOfTaps",
              "jsonPath": "NonMeterWaterRates[0].noOfTaps",
              "label": "wc.create.groups.connectionDetails.fields.noOfTaps",
              "pattern": "^\\d{1,15}$",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "donationAmount",
              "jsonPath": "NonMeterWaterRates[0].amount",
              "label": "wc.search.amount",
              "pattern": "^\\d+(\\.\\d+)?$",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
  						"name": "Active",
  						"jsonPath": "NonMeterWaterRates[0].active",
  						"label": "wc.create.active",
  						"pattern": "",
  						"type": "checkbox",
  						"isRequired": false,
  						"isDisabled": false,
  						"defaultValue":true,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
						{
	            "name": "Outside ULB",
	            "jsonPath": "NonMeterWaterRates[0].outsideUlb",
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
			}
		]
	},
	"wc.search": {
		"numCols": 12/3,
		"url": "/wcms/masters/nonmeterwaterrates/_search",
		"tenantIdRequired": true,

		"useTimestamp": true,
		"objectName": "NonMeterWaterRates",
		"groups": [
			{
				"label": "wc.search.NonMeterWaterRates.title",
				"name": "searchStorageReservoir",
				"fields": [
						{
							"name": "usageTypeCode",
							"jsonPath": "NonMeterWaterRates[0].usageTypeCode",
							"label": "wc.create.groups.connectionDetails.usageType",
							"pattern": "",
							"type": "singleValueList",
							"url": "/wcms/masters/usagetypes/_search?&active=true|$..name|$..name",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
							"name": "sourceTypeName",
							"jsonPath": "NonMeterWaterRates[0].sourceTypeName",
							"label": "wc.create.groups.fields.sourceTypeName",
							"pattern": "",
							"type": "singleValueList",
							"url": "/wcms/masters/sourcetypes/_search?&active=true|$..name|$..name",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
  						"name": "pipeSize",
  						"jsonPath": "pipeSize",
  						"label": "wc.create.pipeSize",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/wcms/masters/pipesizes/_search?&active=true|$..sizeInMilimeter|$..sizeInInch",
  						"isRequired": false,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
							"name": "Active",
							"jsonPath": "active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		],
		"result": {
			"header": [{label: "wc.create.groups.connectionDetails.usageType"},{label: "wc.create.groups.connectionDetails.subUsageType"},{label: "wc.create.groups.fields.sourceTypeName"}, {label: "wc.create.pipeSize"}],
			"values": ["usageTypeName","subUsageTypeName","sourceTypeName","pipeSize"],
			"resultPath": "NonMeterWaterRates",
			"rowClickUrlUpdate": "/update/wc/nonMeterWaterRate/{id}",
			"rowClickUrlView": "/view/wc/nonMeterWaterRate/{id}"
			}
	},
	"wc.view": {
		"numCols": 12/3,
		"url": "/wcms/masters/nonmeterwaterrates/_search?ids={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "NonMeterWaterRates",
		"groups": [
			{
				"label": "wc.view.NonMeterWaterRates.title",
				"name": "meterWaterRateCreate",
				"fields": [
					{
						"name": "UsageType",
						"jsonPath": "NonMeterWaterRates[0].usageTypeName",
						"label": "wc.create.groups.connectionDetails.usageType",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/usagetypes/_search?&active=true|$..code|$..name",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"depedants": [{
								"jsonPath": "NonMeterWaterRates[0].subUsageTypeCode",
								"type": "dropDown",
								"pattern": "/wcms/masters/usagetypes/_search?&isSubUsageType=true&parent={NonMeterWaterRates[0].usageTypeCode}|$..code|$..name"
							}]
					},
					{
						"name": "SubUsageType",
						"jsonPath": "NonMeterWaterRates[0].subUsageTypeName",
						"label": "wc.create.groups.connectionDetails.subUsageType",
						"pattern": "",
						"type": "singleValueList",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
            {
							"name": "sourceTypeName",
							"jsonPath": "NonMeterWaterRates[0].sourceTypeName",
							"label": "wc.create.groups.fields.sourceTypeName",
							"pattern": "",
							"type": "singleValueList",
							"url": "/wcms/masters/sourcetypes/_search?&active=true|$..id|$..name",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
  						"name": "pipeSize",
  						"jsonPath": "NonMeterWaterRates[0].pipeSize",
  						"label": "wc.create.pipeSize",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/wcms/masters/pipesizes/_search?&active=true|$..sizeInMilimeter|$..sizeInInch",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
						{
	            "name": "ConnectionType",
	            "jsonPath": "NonMeterWaterRates[0].connectionType",
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
              "name": "fromDate",
              "jsonPath": "NonMeterWaterRates[0].fromDate",
              "label": "pt.create.groups.floorDetails.fields.effectiveFromDate",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "NoOfTaps",
              "jsonPath": "NonMeterWaterRates[0].noOfTaps",
              "label": "wc.create.groups.connectionDetails.fields.noOfTaps",
              "pattern": "^\\d{1,15}$",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "donationAmount",
              "jsonPath": "NonMeterWaterRates[0].amount",
              "label": "wc.search.amount",
              "pattern": "^\\d+(\\.\\d+)?$",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
  						"name": "Active",
  						"jsonPath": "NonMeterWaterRates[0].active",
  						"label": "wc.create.active",
  						"pattern": "",
  						"type": "checkbox",
  						"isRequired": false,
  						"isDisabled": false,
  						"defaultValue":true,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  				},
					{
						"name": "Outside ULB",
						"jsonPath": "NonMeterWaterRates[0].outsideUlb",
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
			}
		]
	},
	"wc.update" : {
		"numCols": 12/3,
    "searchUrl": "/wcms/masters/nonmeterwaterrates/_search?ids={id}",
		"url":"/wcms/masters/nonmeterwaterrates/_update",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "NonMeterWaterRates",
		"groups": [
			{
				"label": "wc.update.NonMeterWaterRates.title",
				"name": "meterWaterRateCreate",
				"fields": [
					{
						"name": "UsageType",
						"jsonPath": "NonMeterWaterRates[0].usageTypeCode",
						"label": "wc.create.groups.connectionDetails.usageType",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/usagetypes/_search?&active=true|$..code|$..name",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"depedants": [{
								"jsonPath": "NonMeterWaterRates[0].subUsageTypeCode",
								"type": "dropDown",
								"pattern": "/wcms/masters/usagetypes/_search?&isSubUsageType=true&parent={NonMeterWaterRates[0].usageTypeCode}|$..code|$..name"
							}]
					},
					{
						"name": "SubUsageType",
						"jsonPath": "NonMeterWaterRates[0].subUsageTypeCode",
						"label": "wc.create.groups.connectionDetails.subUsageType",
						"pattern": "",
						"type": "singleValueList",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
            {
							"name": "sourceTypeName",
							"jsonPath": "NonMeterWaterRates[0].sourceTypeName",
							"label": "wc.create.groups.fields.sourceTypeName",
							"pattern": "",
							"type": "singleValueList",
							"url": "/wcms/masters/sourcetypes/_search?&active=true|$..name|$..name",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
  						"name": "pipeSize",
  						"jsonPath": "NonMeterWaterRates[0].pipeSize",
  						"label": "wc.create.pipeSize",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/wcms/masters/pipesizes/_search?&active=true|$..sizeInMilimeter|$..sizeInInch",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
						{
	            "name": "ConnectionType",
	            "jsonPath": "NonMeterWaterRates[0].connectionType",
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
              "name": "fromDate",
              "jsonPath": "NonMeterWaterRates[0].fromDate",
              "label": "pt.create.groups.floorDetails.fields.effectiveFromDate",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "NoOfTaps",
              "jsonPath": "NonMeterWaterRates[0].noOfTaps",
              "label": "wc.create.groups.connectionDetails.fields.noOfTaps",
              "pattern": "^\\d{1,15}$",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "donationAmount",
              "jsonPath": "NonMeterWaterRates[0].amount",
              "label": "wc.search.amount",
              "pattern": "^\\d+(\\.\\d+)?$",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
  						"name": "Active",
  						"jsonPath": "NonMeterWaterRates[0].active",
  						"label": "wc.create.active",
  						"pattern": "",
  						"type": "checkbox",
  						"isRequired": false,
  						"isDisabled": false,
  						"defaultValue":true,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
						{
	            "name": "Outside ULB",
	            "jsonPath": "NonMeterWaterRates[0].outsideUlb",
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
			}
		]
	}
}

export default dat;
