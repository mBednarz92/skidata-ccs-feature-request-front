import * as React from "react";
import { connect } from "react-redux";
import {
  setCustomer,
  setSummary,
} from "../../../redux/actions/requestStage.actions";
import NextBackButtons from "../../molecules/nextBackButtons/nextBackButtons";
import styles from "./summary.module.scss";

function Summary(props: any) {
  return (
    <>
      <div className={styles.main__header__container}>
        <h2>Summary</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo
          maiores tenetur totam eum deleniti maxime illo repellat. Placeat
          labore vero deserunt? Voluptates amet ea possimus corrupti dicta est
          quibusdam.
        </p>
      </div>
      <div>
        <p>RequestID:</p>
        <p>{props.requester.requestID}</p>
      </div>
      <NextBackButtons
        next={() => props.setSummary()}
        back={() => props.setCustomer()}
      />
    </>
  );
}

const mapStateToProps: any = (state: any) => {
  return {
    requestStage: state.requestStage,
    requester: state.requester,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCustomer: () => dispatch(setCustomer()),
    setSummary: () => dispatch(setSummary()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
