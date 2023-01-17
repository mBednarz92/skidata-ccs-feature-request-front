import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { setRequester } from "../../../redux/actions/requester.actions";
import { setDescription } from "../../../redux/actions/requestStage.actions";
import { Requester } from "../../interfaces/requester";
import NextBackButtons from "../../molecules/nextBackButtons/nextBackButtons";
import styles from "./main.module.scss";

function Main(props: any) {
  const [requesterId, setRequesterId] = useState<string>("87654321-TEST");
  const [requestDate, setRequestDate] = useState<string>("");
  const [requesterName, setRequesterName] = useState<string>("");
  const [sdUnit, setSdUnit] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

  return (
    <>
      <div className={styles.main__header__container}>
        <h2>Requester</h2>
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
          <input
            type="text"
            value={requesterId}
            onChange={(e: any) => setRequesterId(e.target.value)}
          />
          <h3>Request Date</h3>
          <input type="text" value={requestDate} />
          <h3>Requester Name</h3>
          <input type="text" value={requesterName} />
        </div>
        <div>
          <h3>SD Unit</h3>
          <input type="text" value={sdUnit} />
          <h3>Department</h3>
          <input type="text" value={department} />
        </div>
      </div>
      <NextBackButtons
        next={() => {
          props.setDescription();
          props.setRequester({
            requestID: requesterId,
            requestDate: requestDate,
            requesterName: requesterName,
            sdUnit: sdUnit,
            department: department,
          });
        }}
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
    setDescription: () => dispatch(setDescription()),
    setRequester: (requesterObject: Requester) =>
      dispatch(setRequester(requesterObject)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
