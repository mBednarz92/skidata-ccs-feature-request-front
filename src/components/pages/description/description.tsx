import * as React from "react";

import { connect } from "react-redux";
import {
  setCustomer,
  setMain,
} from "../../../redux/actions/requestStage.actions";
import NextBackButtons from "../../molecules/nextBackButtons/nextBackButtons";
import Userdropdown from "../../molecules/userDropdown/userdropdown";
import styles from "./description.module.scss";

function Description(props: any) {
  return (
    <>
      <div className={styles.main__header__container}>
        <h2>Description</h2>
        <p>
          Add a title to your request. Try to describe the feature / issue in
          form of a user story. If none of the roles fit your user, just add As
          a f.i. Software Trainer in the ‚I want‘ box and we will add the user
          to the drop down list. The ‚to‘ box shall explain what it is you are
          trying to achieve/solve. If you have an example of a solution in mind,
          you can mention this in the description. If you have specific
          documents, screenshots, photos or sketches that help to understand the
          issue, feel free to upload these documents here.
        </p>
      </div>
      <div className={styles.description__content__container}>
        <div>
          <h3>
            Request Headline<span> *</span>
          </h3>
          <input
            placeholder="For e.g. Flag unwanted guest entries"
            type="text"
            className={styles.description__content__container__requestHeadline}
          />
        </div>
        <div>
          <h3>
            As a...<span> *</span>
          </h3>
          <Userdropdown />
          <h3>
            I want<span> *</span>
          </h3>
          <textarea placeholder="For e.g. HSH.Logic / Monitor (?) to inform me about flagged people of interest, when they try to enter the stadium." />
          <h3>
            to<span> *</span>
          </h3>
          <textarea placeholder="For e.g. Increase stadium security and be able to react to potential threats." />
        </div>
        <div>
          <h3>
            Description<span> *</span>
          </h3>
          <textarea placeholder="For e.g. Ideally the system sends me a Whatsapp message, but any kind of instant notification will do" />
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
