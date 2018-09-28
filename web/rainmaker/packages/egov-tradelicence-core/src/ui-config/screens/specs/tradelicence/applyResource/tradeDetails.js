import {
  getCommonCard,
  getCommonGrayCard,
  getCommonTitle,
  getCommonSubHeader,
  getCommonParagraph,
  getTextField,
  getSelectTextField,
  getCommonContainer,
  getPattern,
  getLabel
} from "mihy-ui-framework/ui-config/screens/specs/utils";
import { getIconStyle } from "../../utils";

const multipleTradeUnitCard =
  // {
  //   uiFramework: "custom-molecules",
  //   componentPath: "MultiItem",
  //   props: {
  //     scheama:
  getCommonGrayCard({
    header: getCommonSubHeader("Trade Unit  "),
    tradeUnitCardContainer: getCommonContainer({
      tradeCategory: getSelectTextField(
        "Trade Category",
        "Select Trade Category",
        true,
        "",
        "Licences[0].tradeType",
        "applyScreenMdmsData.TradeLicense.TradeType",
        [],
        "code",
        "code",
        {},
        {
          xs: 12,
          sm: 4
        }
      ),
      tradeType: getSelectTextField(
        "Trade  Type",
        "Select Trade Type",
        true,
        "",
        "",
        "",
        [],
        "",
        "",
        {},
        {
          xs: 12,
          sm: 4
        }
      ),
      tradeSubType: getSelectTextField(
        "Trade Sub-Type",
        "Select Trade Sub-Type",
        true,
        "",
        "",
        "",
        [],
        "",
        "",
        {},
        {
          xs: 12,
          sm: 4
        }
      ),
      tradeUOM: getTextField(
        "UOM (Unit of Measurement)",
        "",
        true,
        "",
        "",
        {},
        {
          xs: 12,
          sm: 4
        }
      ),
      tradeUOMValue: getTextField(
        "UOM Value",
        "Enter UOM Value",
        true,
        getPattern("UOMValue"),
        "",
        {},
        {
          xs: 12,
          sm: 4
        }
      )
    })
  });
//     ,
//     items: [],
//     addItemLabel: "ADD TRADE UNIT"
//   },
//   type:"array"
// };

const accessoriesCard = {
  uiFramework: "custom-molecules",
  componentPath: "MultiItem",
  props: {
    scheama: getCommonGrayCard({
      header: {
        uiFramework: "custom-atoms",
        componentPath: "Container",
        children: {
          head: getCommonSubHeader("Accessories"),
          ico: {
            uiFramework: "custom-molecules-local",
            componentPath: "Tooltip",
            props: {
              val: "Accessories Information",
              style: getIconStyle("headerIcon")
            }
          }
        }
      },
      accessoriesCardContainer: getCommonContainer({
        accessoriesName: getSelectTextField(
          "Accessories",
          "Select Accessories",
          false,
          "",
          "",
          {},
          {
            xs: 12,
            sm: 4
          }
        ),
        accessoriesUOM: getTextField(
          "UOM (Unit of Measurement)",
          "UOM",
          true,
          "",
          "tradeDetails[0].unit",
          {},
          {
            xs: 12,
            sm: 4
          }
        ),
        accessoriesUOMValue: getTextField(
          "UOM Value",
          "Enter UOM Value",
          false,
          getPattern("UOMValue"),
          "",
          {},
          {
            xs: 12,
            sm: 4
          }
        )
      })
    }),

    items: [],
    addItemLabel: "ADD ACCESSORIES",
    headerName: "Accessory",
    headerJsonPath:
      "children.cardContent.children.header.children.head.children.Accessories.props.label"
  },
  type: "array"
};

export const tradeDetails = getCommonCard({
  header: getCommonTitle("Please Provide Trade Details"),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  tradeDetailsConatiner: getCommonContainer({
    tradeLicenseType: getSelectTextField(
      "License Type",
      "Select License Type",
      true,
      "",
      "Licences[0].licenseType",
      "",
      [
        {
          code: "Temprovory",
          code: "Temprovory"
        },
        {
          code: "Permanant",
          code: "Permanant"
        }
      ],
      "code",
      "code"
    ),
    tradeName: getTextField(
      "Name of Trade",
      "Example Diljit Da Dhaba",
      true,
      getPattern("TradeName"),
      "Licenses[0].tradeName"
    ),
    tradeFromDate: getTextField(
      "From Date",
      "Trade License From Date",
      true,
      getPattern("Date"),
      "",
      {
        position: "end",
        iconName: "date_range"
      }
    ),
    tradeToDate: getTextField(
      "To Date",
      "Trade License From Date",
      true,
      getPattern("Date"),
      "",
      {
        position: "end",
        iconName: "date_range"
      }
    ),
    tradeStructureType: getSelectTextField(
      "Structure Type",
      "Select Structure Type",
      true,
      ""
    ),
    tradeStructureSubType: getSelectTextField(
      "Structure Sub Type",
      "Select Structure Sub Type",
      true,
      ""
    ),
    tradeCommencementDate: getTextField(
      "Trade Commencement Date",
      "Enter Trade Commencement Date",
      true,
      getPattern("Date"),
      "",
      {
        position: "end",
        iconName: "date_range"
      }
    ),
    tradeGSTNo: getTextField(
      "Trade GST No.",
      "Enter Trade GST No.",
      false,
      getPattern("GSTNo")
    ),
    tradeOperationalArea: getTextField(
      "Operatonal Area (Sq Ft)",
      "Enter Operatonal Area in Sq Ft",
      false,
      getPattern("OperationalArea")
    ),
    tradeNoOfEmployee: getTextField(
      "No. Of Employee",
      "Enter No. Of Employee",
      false,
      getPattern("NoOfEmp")
    )
  }),
  multipleTradeUnitCard,
  accessoriesCard
});
