import * as React from "react";
import { connect } from "react-redux";
import styles from "./index.module.scss";

import SkidataLogo from "../../assets/skidata-logo.png";
import Main from "./main/main";
import Description from "./description/description";
import Customer from "./customer/customer";
import Summary from "./summary/summary";

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
        {props.requestStage === "main" && <Main />}
        {props.requestStage === "description" && <Description />}
        {props.requestStage === "customer" && <Customer />}
        {props.requestStage === "summary" && <Summary />}
      </div>
      <p className={styles.request__footer__text}>
        Developed by Skidata CCS team - Developement Enviroment
      </p>
    </div>
  );
}

const mapStateToProps: any = (state: any) => {
  return {
    requestStage: state.requestStage,
  };
};

export default connect(mapStateToProps)(FeatureRequest);
