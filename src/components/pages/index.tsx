import * as React from "react";
import { connect } from "react-redux";
import styles from "./index.module.scss";

import SkidataLogo from "../../assets/skidata-logo.png";

function FeatureRequest(props: any) {
  return (
    <div className={styles.request__container}>
      <div className={styles.logo__container}>
        <img
          alt="skidata_logo"
          src={SkidataLogo}
          className={styles.welcomeImage}
        />
        <h1 className={styles.logo__container__title}>Feature Request</h1>
      </div>
      <div className={styles.request__content__container}>
        {props.requestStage === "main" && <p>main</p>}
        {props.requestStage === "description" && <p>description</p>}
        {props.requestStage === "customer" && <p>customer</p>}
      </div>
    </div>
  );
}

const mapStateToProps: any = (state: any) => {
  return {
    requestStage: state.requestStage,
  };
};

export default connect(mapStateToProps)(FeatureRequest);
