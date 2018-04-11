import React, { Component } from "react";
import { Button, Icon } from "../../../components";
import Label from "utils/translationNode";
import SuccessMessage from "../../common/SuccessMessage/components/successmessage";
import "modules/common/SuccessMessage/components/successmessage/index.css";

class ReassignSuccess extends Component {
  continueComplaintSubmit = () => {
    this.props.history.push("/employee/all-complaints");
  };
  render() {
    return (
      <div className="reassign-success-main-screen">
        <SuccessMessage
          successmessage="Your Re-Assign request has been sent."
          icon={<Icon action="navigation" name="check" />}
          backgroundColor={"#22b25f"}
        />
        <div className="reassign-success-continue">
          <Button
            id="resolve-success-continue"
            primary={true}
            label={<Label buttonLabel={true} label="CORE_COMMON_GOTOHOME" />}
            fullWidth={true}
            onClick={this.continueComplaintSubmit}
          />
        </div>
      </div>
    );
  }
}

export default ReassignSuccess;
