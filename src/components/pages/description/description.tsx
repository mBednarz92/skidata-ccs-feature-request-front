import * as React from "react";
import { connect } from "react-redux";
import {
  setCustomer,
  setDescription,
  setMain,
} from "../../../redux/actions/requestStage.actions";
import NextBackButtons from "../../molecules/nextBackButtons/nextBackButtons";
import styles from "./description.module.scss";

function Description(props: any) {
  return (
    <>
      <div className={styles.main__header__container}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo
          maiores tenetur totam eum deleniti maxime illo repellat. Placeat
          labore vero deserunt? Voluptates amet ea possimus corrupti dicta est
          quibusdam.
        </p>
      </div>
      <div className={styles.main__content__container}>
        <div>
          <h3>Request ID</h3>
          <input type="text" />
          <h3>Request Date</h3>
          <input type="text" />
          <h3>Requester Name</h3>
          <input type="text" />
        </div>
        <div>
          <h3>SD Unit</h3>
          <input type="text" />
          <h3>Department</h3>
          <input type="text" />
        </div>
      </div>
      <NextBackButtons
        next={() => props.setCustomer()}
        back={() => props.setMain()}
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
    setCustomer: () => dispatch(setCustomer()),
    setMain: () => dispatch(setMain()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);