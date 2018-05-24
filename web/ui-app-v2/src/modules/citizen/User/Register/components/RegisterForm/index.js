import React from "react";
import Field from "utils/field";
import { Button, TextField, MobileNumberField, Card } from "components";
import { Link } from "react-router-dom";
import Label from "utils/translationNode";
import CityPicker from "modules/common/common/CityPicker";
import { startSMSRecevier } from "utils/commons";
import "./index.css";

const RegisterForm = ({ handleFieldChange, form }) => {
  const fields = form.fields || {};
  const submit = form.submit;
  return (
    <Card
      className="user-screens-card"
      textChildren={
        <div>
          <Label className="heading text-center" bold={true} dark={true} fontSize={16} label="CORE_REGISTER_HEADING" />
          <Field type="mobilenumber" form={form} handleFieldChange={handleFieldChange} fieldKey="phone" />
          <Field type="textfield" form={form} handleFieldChange={handleFieldChange} fieldKey="name" />
          <CityPicker onChange={handleFieldChange} fieldKey="city" field={fields.city} />
          <div style={{ marginBottom: "24px" }} className="text-right">
            <Label id="otp-trigger" className="otp-prompt" label="CORE_REGISTER_HAVE_ACCOUNT" />
            <Link to="/citizen/user/login">
              <div style={{ display: "inline-block" }}>
                <Label containerStyle={{ cursor: "pointer" }} id="otp-resend" className="otp-resend" label="CORE_COMMON_LOGIN" />
              </div>
            </Link>
          </div>
          <Button
            primary={true}
            fullWidth={true}
            {...submit}
            onClick={(e) => {
              startSMSRecevier();
            }}
          />
        </div>
      }
    />
  );
};

export default RegisterForm;
