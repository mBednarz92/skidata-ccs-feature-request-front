import * as React from "react";
import { connect } from "react-redux";

function FeatureRequest(props: any) {
  return (
    <>
      {props.requestStage == "main" && <p>main</p>}
      {props.requestStage == "description" && <p>description</p>}
      {props.requestStage == "customer" && <p>customer</p>}
    </>
  );
}

const mapStateToProps: any = (state: any) => {
  return {
    requestStage: state.requestStage,
  };
};

export default connect(mapStateToProps)(FeatureRequest);
