import {
  getCommonHeader,
  getLabel,
  getBreak,
  getTextField,
  getCommonTitle,
  getCommonCard
} from "egov-ui-framework/ui-config/screens/specs/utils";

const testDemoPage = {
  uiFramework: "material-ui",
  name: "search",
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      children: {
        testCard: getCommonCard({
          subHeader: getCommonTitle({
            labelName: "Search Trade License Application",
            labelKey: "TL_HOME_SEARCH_RESULTS_HEADING"
          }),
          applicationNo: getTextField({
            label: {
              labelName: "Application No.",
              labelKey: "TL_HOME_SEARCH_RESULTS_APP_NO_LABEL"
            },
            placeholder: {
              labelName: "Enter Application No.",
              labelKey: "TL_HOME_SEARCH_RESULTS_APP_NO_PLACEHOLDER"
            },
            gridDefination: {
              xs: 12,
              sm: 4
            },
            required: true,
            pattern: /^[a-zA-Z0-9-]*$/i,
            errorMessage: "ERR_INVALID_APPLICATION_NO",
            jsonPath: "test.applicationNumber"
          })
        })
      }
    }
  }
};

export default testDemoPage;
