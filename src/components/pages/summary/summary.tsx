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
      <h2>Requester</h2>
      <div>
        <h3>Requester Name:</h3>
        <p>{props.requester.requesterName}</p>
        <h3>RequestID:</h3>
        <p>{props.requester.requestID}</p>
        <h3>Request Date:</h3>
        <p>{props.requester.requestDate}</p>
        <h3>SD Unit:</h3>
        <p>{props.requester.sdUnit}</p>
        <h3>Departement:</h3>
        <p>{props.requester.department}</p>
      </div>
      <h2>Description</h2>
      <h2>Customer</h2>
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
