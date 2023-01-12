import * as React from "react";
import { MouseEventHandler } from "react";
import { connect } from "react-redux";
import styles from "./nextBackButton.module.scss";

interface backNextButtons {
  back: MouseEventHandler<HTMLButtonElement>;
  next: MouseEventHandler<HTMLButtonElement>;
}

function NextBackButtons(props: any) {
  return (
    <div className={styles.requestButtonsContainer}>
      <button className={styles.requestBackButton} onClick={props.back}>
        BACK
      </button>
      <button className={styles.requestNextButton} onClick={props.next}>
        {props.requestStage === "customer" ? "SEND" : "NEXT"}
      </button>
    </div>
  );
}

const mapStateToProps: any = (state: any) => {
  return {
    requestStage: state.requestStage,
  };
};

export default connect(mapStateToProps, null)(NextBackButtons);