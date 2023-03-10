import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {
  setDescription,
  setSummary,
} from "../../../redux/actions/requestStage.actions";
import NextBackButtons from "../../molecules/nextBackButtons/nextBackButtons";
import styles from "./customer.module.scss";

function Customer(props: any) {
  const [isCustomerRelated, setIsCustomerRelated] = useState<boolean>(false);

  return (
    <>
      <div className={styles.main__header__container}>
        <h2>Customer</h2>
        <p>
          If your request is related to a specific customer or project, please
          tick the box and let us know some basic data, so we can better
          prioritize your request and plan the implementation.
        </p>
      </div>
      <div className={styles.customer__checkbox__container}>
        <input
          type="checkbox"
          onClick={() => setIsCustomerRelated(!isCustomerRelated)}
        />
        <p>Specific customer related?</p>
      </div>
      {isCustomerRelated && (
        <div className={styles.customer__content__container}>
          <div>
            <h3>
              Project / Customer Name <span> *</span>
            </h3>
            <input type="text" />
          </div>
          <div>
            <h3>
              Estimated Call for Tender Deadline <span> *</span>
            </h3>
            <input type="text" />
            <h3>
              Estimated Installation Date <span> *</span>
            </h3>
            <input type="text" />
          </div>
        </div>
      )}

      <NextBackButtons
        next={() => props.setSummary()}
        back={() => props.setDescription()}
      />
    </>
  );
}

const mapStateToProps: any = (state: any) => {
  return {
    requestStage: state.requestStage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSummary: () => dispatch(setSummary()),
    setDescription: () => dispatch(setDescription()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
