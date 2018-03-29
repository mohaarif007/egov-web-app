import * as actionTypes from "../actionTypes";
import { getTranslatedLabel } from "../../../utils/commons";

const translateFieldText = (store) => (next) => (action) => {
  const { type, form } = action;
  const state = store.getState();
  const { localizationLabels } = state.app;

  if (type === actionTypes.INIT_FORM) {
    let { fields } = form;
    fields = Object.keys(fields).reduce((translatedField, fieldKey) => {
      const field = Object.keys(fields[fieldKey]).reduce((field, fieldName) => {
        let fieldValue = fields[fieldKey][fieldName];
        if (fieldName === "hintText" || fieldName === "floatingLabelText" || fieldName === "errorMessage") {
          fieldValue = getTranslatedLabel(fieldValue, localizationLabels);
        }
        field[fieldName] = fieldValue;
        return field;
      }, {});

      // a bit hacky; instead of asking user to write it in config putting it here
      field["requiredMessage"] = getTranslatedLabel("CORE_COMMON_REQUIRED_ERRMSG", localizationLabels);
      translatedField[fieldKey] = field;

      return translatedField;
    }, {});

    let submit = {};

    if (form.submit && form.submit.label) {
      const label = getTranslatedLabel(form.submit.label, localizationLabels);
      submit = { ...form.submit, label };
    }
    action.form = { ...form, fields, submit };
  }

  next(action);
};

export default translateFieldText;
