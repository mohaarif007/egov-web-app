var dat = {
  'swm.search' : {
     numCols: 4,
      useTimestamp: true,
      objectName: 'vehicleTripSheetDetails',
      url: '/swm-services/vehicletripsheetdetails/_search',
      groups: [
        {
          name:'vehicleTripEntrySearch',
          label: 'swm.vehiclestripsheet.search.vehicleTripEntrySearch',
          fields: [
            {
              name: ' tripStartdate',
              jsonPath: 'tripStartDate',
              label: 'swm.vehiclestripsheet.search.tripStartDate',
              pattern: '',
              type: 'datePicker',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              url: '',
            },
            {
              name: 'tripEndDate',
              jsonPath: 'tripEndDate',
              label: 'swm.vehiclestripsheet.search.tripEndDate',
              pattern: '',
              type: 'datePicker',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'regNumber',
              jsonPath: 'regNumber',
              label: 'swm.vehiclestripsheet.create.regNumber',
              pattern: '',
              type: 'autoCompelete',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: 'swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber',
            },
            {
              name: 'routeName',
              jsonPath: 'routeCode',
              label: 'swm.vehiclestripsheet.search.routeName',
              pattern: '',
              type: 'singleValueList',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url:'/swm-services/routes/_search?|$.routes.*.code|$.routes.*.name',
            },
          ]
        },
      ],
      result: {
        header: [
          {
            label: 'swm.vehiclestripsheet.create.regNumber',
          },
          {
            label: 'swm.vehiclestripsheet.search.routeName',
          },
          {
            label: 'swm.vehiclestripsheet.search.tripStartDate',
            isDate: true
          },
          {
            label: 'swm.vehiclestripsheet.search.tripEndDate',
            isDate: true
          },
        ],
        values: [
           'vehicle.regNumber',
           'route.name',
           'tripStartDate',
           'tripEndDate',
        ],
        resultPath: 'vehicleTripSheetDetails',
        rowClickUrlUpdate: '/update/swm/vehicletripsheetdetails/{tripNo}',
        rowClickUrlView: '/view/swm/vehicletripsheetdetails/{tripNo}',
        //isMasterScreen: true
      },
    },
  'swm.create': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'vehicleTripSheetDetails',
    title: 'swm.vehiclestripsheet.create.title',
    groups: [
      {
        name: 'VehicleDetails',
        label: '',
        fields: [
          {
            name: 'regNumber',
            jsonPath: 'vehicleTripSheetDetails[0].vehicle.regNumber',
            label: 'swm.vehiclestripsheet.create.regNumber',
            type: 'autoCompelete',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber',
            autoCompleteDependancy: {
              autoCompleteUrl: '/swm-services/vehicles/_search?regNumber={vehicleTripSheetDetails[0].vehicle.regNumber}',
              autoFillFields: {
                'vehicleTripSheetDetails[0].vendorName': 'vehicles[0].vendor.name'
              }
            }
          },
          {
            name: 'ulbOwnedVehicle',
            dependentJsonPath: 'vehicleTripSheetDetails[0].vendorName',
            label: 'swm.vehiclestripsheet.create.ulbOwnedVehicle',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'vendorName',
            jsonPath: 'vehicleTripSheetDetails[0].vendorName',
            label: 'swm.vehiclestripsheet.create.vendorName',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'route',
            jsonPath: 'vehicleTripSheetDetails[0].route.code',
            label: 'swm.vehiclestripsheet.create.route',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url:'/swm-services/routes/_search?|$.routes.*.code|$.routes.*.name',
            depedants: [
              {
                jsonPath: 'routes[0].startingCollectionPoint.name',
                type: 'autoFill',
                pattern: '/swm-services/routes/_search?code={vehicleTripSheetDetails[0].route.code}',
                autoFillFields: {
                  'vehicleTripSheetDetails[0].dumpingGroundName': 'routes[0].endingDumpingGroundPoint.name',
                },
              }
            ],
          },
          {
            name: 'scheduledDateFrom',
            jsonPath: 'vehicleTripSheetDetails[0].tripStartDate',
            label: 'swm.vehiclestripsheet.create.scheduledDateFrom',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'scheduledDateTo',
            jsonPath: 'vehicleTripSheetDetails[0].tripEndDate',
            label: 'swm.vehiclestripsheet.create.scheduledDateTo',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'dumpingGroundName',
            jsonPath: 'vehicleTripSheetDetails[0].dumpingGroundName',
            label: 'swm.vehiclestripsheet.create.dumpingGroundName',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
      // {
      //   name: 'locationsCovered',
      //   label: 'swm.vehiclestripsheet.create.group.title.locationsCovered',
      //   fields: [
      //   {
      //     type: 'tableList',
      //     actionsNotRequired: true,
      //     jsonPath: 'vehiclestripsheet[0].locationdetails',
      //     tableList: {
      //     actionsNotRequired: true,
      //     serialNoNotRequired:true,
      //       header: [
      //         {
      //           label: 'swm.processingplant.create.title.Ward',
      //         },
      //         {
      //           label: 'swm.processingplant.create.Zone',
      //         },
      //         {
      //           label: 'swm.processingplant.create.block',
      //         },
      //         {
      //           label: 'swm.processingplant.create.Colony',
      //         },
      //         {
      //           label: 'swm.processingplant.create.routestop',
      //         },
      //       ],
      //       values: [
      //         {
      //           name: 'ward',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: false,
      //           url: '',
      //         },
      //         {
      //           name: 'zone',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: false,
      //         },
      //         {
      //           name: 'block',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //         {
      //           name: 'colony',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //         {
      //           name: 'routestop',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //       ],
      //     },
      //   },
      //   ],
      // },
      {
        name: 'tripSheetDetails',
        label: 'swm.vehiclestripsheet.create.group.title.tripSheetDetails',
        fields: [
          {
            name: 'inTime',
            jsonPath: 'vehicleTripSheetDetails[0].inTime',
            label: 'swm.vehiclestripsheet.create.inTime',
            type: 'timePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'outTime',
            jsonPath: 'vehicleTripSheetDetails[0].outTime',
            label: 'swm.vehiclestripsheet.create.outTime',
            type: 'timePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'collectionType',
            jsonPath: 'vehicleTripSheetDetails[0].collectionType',
            label: 'swm.vehiclestripsheet.create.collectionType',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'totalDistanceCovered',
            jsonPath: 'vehicleTripSheetDetails[0].totalDistanceCovered',
            label: 'swm.vehiclestripsheet.create.totalDistanceCovered',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'entryWeight',
            jsonPath: 'vehicleTripSheetDetails[0].entryWeight',
            label: 'swm.vehiclestripsheet.create.entryWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
           {
            name: 'exitWeight',
            jsonPath: 'vehicleTripSheetDetails[0].exitWeight',
            label: 'swm.vehiclestripsheet.create.exitWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
           {
            name: 'garbageWeight',
            jsonPath: 'vehicleTripSheetDetails[0].garbageWeight',
            label: 'swm.vehiclestripsheet.create.garbageWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
        ],
      },
    ],
    url: '/swm-services/vehicletripsheetdetails/_create',
    tenantIdRequired: true,
  },
  'swm.update': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'vehicleTripSheetDetails',
    title: 'swm.vehiclestripsheet.create.title',
    groups: [
      {
        name: 'VehicleDetails',
        label: '',
        fields: [
          {
            name: 'regNumber',
            jsonPath: 'vehicleTripSheetDetails[0].vehicle.regNumber',
            label: 'swm.vehiclestripsheet.create.regNumber',
            type: 'autoCompelete',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url: 'swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber',
            autoCompleteDependancy: {
              autoCompleteUrl: '/swm-services/vehicles/_search?regNumber={vehicleTripSheetDetails[0].vehicle.regNumber}',
              autoFillFields: {
                'vehicleTripSheetDetails[0].vendorName': 'vehicles[0].vendor.name'
              }
            }
          },
          {
            name: 'ulbOwnedVehicle',
            dependentJsonPath: 'vehicleTripSheetDetails[0].vendorName',
            label: 'swm.vehiclestripsheet.create.ulbOwnedVehicle',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'vendorName',
            jsonPath: 'vehicleTripSheetDetails[0].vendorName',
            label: 'swm.vehiclestripsheet.create.vendorName',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'route',
            jsonPath: 'vehicleTripSheetDetails[0].route.code',
            label: 'swm.vehiclestripsheet.create.route',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url:'/swm-services/routes/_search?|$.routes.*.code|$.routes.*.name',
            depedants: [
              {
                jsonPath: 'routes[0].startingCollectionPoint.name',
                type: 'autoFill',
                pattern: '/swm-services/routes/_search?code={vehicleTripSheetDetails[0].route.code}',
                autoFillFields: {
                  'vehicleTripSheetDetails[0].dumpingGroundName': 'routes[0].endingDumpingGroundPoint.name',
                },
              }
            ],
          },
          {
            name: 'scheduledDateFrom',
            jsonPath: 'vehicleTripSheetDetails[0].tripStartDate',
            label: 'swm.vehiclestripsheet.create.scheduledDateFrom',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'scheduledDateTo',
            jsonPath: 'vehicleTripSheetDetails[0].tripEndDate',
            label: 'swm.vehiclestripsheet.create.scheduledDateTo',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'dumpingGroundName',
            jsonPath: 'vehicleTripSheetDetails[0].route.endingDumpingGroundPoint.name',
            label: 'swm.vehiclestripsheet.create.dumpingGroundName',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
      // {
      //   name: 'locationsCovered',
      //   label: 'swm.vehiclestripsheet.create.group.title.locationsCovered',
      //   fields: [
      //   {
      //     type: 'tableList',
      //     actionsNotRequired: true,
      //     jsonPath: 'vehiclestripsheet[0].locationdetails',
      //     tableList: {
      //     actionsNotRequired: true,
      //     serialNoNotRequired:true,
      //       header: [
      //         {
      //           label: 'swm.processingplant.create.title.Ward',
      //         },
      //         {
      //           label: 'swm.processingplant.create.Zone',
      //         },
      //         {
      //           label: 'swm.processingplant.create.block',
      //         },
      //         {
      //           label: 'swm.processingplant.create.Colony',
      //         },
      //         {
      //           label: 'swm.processingplant.create.routestop',
      //         },
      //       ],
      //       values: [
      //         {
      //           name: 'ward',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: false,
      //           url: '',
      //         },
      //         {
      //           name: 'zone',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: false,
      //         },
      //         {
      //           name: 'block',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //         {
      //           name: 'colony',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //         {
      //           name: 'routestop',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //       ],
      //     },
      //   },
      //   ],
      // },
      {
        name: 'tripSheetDetails',
        label: 'swm.vehiclestripsheet.create.group.title.tripSheetDetails',
        fields: [
          {
            name: 'inTime',
            jsonPath: 'vehicleTripSheetDetails[0].inTime',
            label: 'swm.vehiclestripsheet.create.inTime',
            type: 'timePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'outTime',
            jsonPath: 'vehicleTripSheetDetails[0].outTime',
            label: 'swm.vehiclestripsheet.create.outTime',
            type: 'timePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'collectionType',
            jsonPath: 'vehicleTripSheetDetails[0].route.collectionType.name',
            label: 'swm.vehiclestripsheet.create.collectionType',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'totalDistanceCovered',
            jsonPath: 'vehicleTripSheetDetails[0].route.distance',
            label: 'swm.vehiclestripsheet.create.totalDistanceCovered',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'entryWeight',
            jsonPath: 'vehicleTripSheetDetails[0].entryWeight',
            label: 'swm.vehiclestripsheet.create.entryWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
           {
            name: 'exitWeight',
            jsonPath: 'vehicleTripSheetDetails[0].exitWeight',
            label: 'swm.vehiclestripsheet.create.exitWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
           {
            name: 'garbageWeight',
            jsonPath: 'vehicleTripSheetDetails[0].route.garbageEstimate',
            label: 'swm.vehiclestripsheet.create.garbageWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
        ],
      },
    ],
    url: '/swm-services/vehicletripsheetdetails/_update',
    tenantIdRequired: true,
    searchUrl: '/swm-services/vehicletripsheetdetails/_search?tripNo={tripNo}',
  },
 'swm.view': {
    numCols: 4,
    useTimestamp: true,
    objectName: 'vehicleTripSheetDetails',
    title: 'swm.vehiclestripsheet.create.title',
    searchUrl: '/swm-services/vehicletripsheetdetails/_search?tripNo={tripNo}',
    groups: [
      {
        name: 'VehicleDetails',
        label: '',
        fields: [
          {
            name: 'regNumber',
            jsonPath: 'vehicleTripSheetDetails[0].vehicle.regNumber',
            label: 'swm.vehiclestripsheet.create.regNumber',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'ulbOwnedVehicle',
           // jsonPath: 'vehicleTripSheetDetails[0].ulbOwnedVehicle',
            dependentJsonPath:'vehicleTripSheetDetails[0].vendorName',
            label: 'swm.vehiclestripsheet.create.ulbOwnedVehicle',
            type: 'checkbox',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'vendorName',
            jsonPath: 'vehicleTripSheetDetails[0].vendorName',
            label: 'swm.vehiclestripsheet.create.vendorName',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'route',
            jsonPath: 'vehicleTripSheetDetails[0].route.name',
            label: 'swm.vehiclestripsheet.create.route',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            url:'',
          },
          {
            name: 'scheduledDateFrom',
            jsonPath: 'vehicleTripSheetDetails[0].tripStartDate',
            label: 'swm.vehiclestripsheet.create.scheduledDateFrom',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'scheduledDateTo',
            jsonPath: 'vehicleTripSheetDetails[0].tripEndDate',
            label: 'swm.vehiclestripsheet.create.scheduledDateTo',
            type: 'datePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
          {
            name: 'dumpingGroundName',
            jsonPath: 'vehicleTripSheetDetails[0].route.endingDumpingGroundPoint.name',
            label: 'swm.vehiclestripsheet.create.dumpingGroundName',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
          },
        ],
      },
      // {
      //   name: 'locationsCovered',
      //   label: 'swm.vehiclestripsheet.create.group.title.locationsCovered',
      //   fields: [
      //   {
      //     type: 'tableList',
      //     actionsNotRequired: true,
      //     jsonPath: 'vehicleTripSheetDetails[0].locationdetails',
      //     tableList: {
      //     actionsNotRequired: true,
      //     serialNoNotRequired:true,
      //       header: [
      //         {
      //           label: 'swm.processingplant.create.title.Ward',
      //         },
      //         {
      //           label: 'swm.processingplant.create.Zone',
      //         },
      //         {
      //           label: 'swm.processingplant.create.block',
      //         },
      //         {
      //           label: 'swm.processingplant.create.Colony',
      //         },
      //         {
      //           label: 'swm.processingplant.create.routestop',
      //         },
      //       ],
      //       values: [
      //         {
      //           name: 'ward',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: false,
      //           url: '',
      //         },
      //         {
      //           name: 'zone',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: false,
      //         },
      //         {
      //           name: 'block',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //         {
      //           name: 'colony',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //         {
      //           name: 'routestop',
      //           pattern: '',
      //           type: 'label',
      //           jsonPath: '',
      //           isRequired: false,
      //           isDisabled: true,
      //         },
      //       ],
      //     },
      //   },
      //   ],
      // },
      {
        name: 'tripSheetDetails',
        label: 'swm.vehiclestripsheet.create.group.title.tripSheetDetails',
        fields: [
          {
            name: 'inTime',
            jsonPath: 'vehicleTripSheetDetails[0].inTime',
            label: 'swm.vehiclestripsheet.create.inTime',
            type: 'timePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'outTime',
            jsonPath: 'vehicleTripSheetDetails[0].outTime',
            label: 'swm.vehiclestripsheet.create.outTime',
            type: 'timePicker',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'collectionType',
            jsonPath: 'vehicleTripSheetDetails[0].route.collectionType.name',
            label: 'swm.vehiclestripsheet.create.collectionType',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'totalDistanceCovered',
            jsonPath: 'vehicleTripSheetDetails[0].route.distance',
            label: 'swm.vehiclestripsheet.create.totalDistanceCovered',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
          {
            name: 'entryWeight',
            jsonPath: 'vehicleTripSheetDetails[0].entryWeight',
            label: 'swm.vehiclestripsheet.create.entryWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
           {
            name: 'exitWeight',
            jsonPath: 'vehicleTripSheetDetails[0].exitWeight',
            label: 'swm.vehiclestripsheet.create.exitWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },
           {
            name: 'garbageWeight',
            jsonPath: 'vehicleTripSheetDetails[0].route.garbageEstimate',
            label: 'swm.vehiclestripsheet.create.garbageWeight',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: '',
            defaultValue: '',
          },

        ],
      },
    ],
    tenantIdRequired: true,
    url: '/swm-services/vehicletripsheetdetails/_search?tripNo={tripNo}',
  },

};
export default dat;