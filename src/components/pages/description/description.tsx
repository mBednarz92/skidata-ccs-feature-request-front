import * as React from "react";
import { connect } from "react-redux";
import {
  setCustomer,
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
      <div className={styles.description__content__container}>
        <div>
          <h3>Request Headline</h3>
          <input
            type="text"
            className={styles.description__content__container__requestHeadline}
          />
        </div>
        <div>
          <h3>As a...</h3>
          <input
            type="text"
            className={styles.description__content__container__userDropdown}
          />
          <h3>I want</h3>
          <textarea />
          <h3>to</h3>
          <textarea />
        </div>
        <div>
          <h3>Description</h3>
          <textarea />
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
