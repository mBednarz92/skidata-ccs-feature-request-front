import { Person } from "@microsoft/mgt-react";
import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { setRequester } from "../../../redux/actions/requester.actions";
import { setDescription } from "../../../redux/actions/requestStage.actions";
import { Requester } from "../../interfaces/requester";
import NextBackButtons from "../../molecules/nextBackButtons/nextBackButtons";
import SdSubsidiaries from "../../molecules/sdSubsidiaries/sdSubsidiaries";
import styles from "./main.module.scss";
import { Providers } from "@microsoft/mgt-element";

function Main(props: any) {
  let date = new Date(Date.now());

  const [requesterId, setRequesterId] = useState<string>("87654321-TEST");
  const [requestDate] = useState(date.toLocaleDateString());
  const [requesterName, setRequesterName] = useState(null);
  const [sdUnit, setSdUnit] = useState<string>("...");
  const [department, setDepartment] = useState<string>("");

  if (requesterName == null) {
    Providers.globalProvider.graph.client
      .api("me")
      .get()
      .then((gotMe) => {
        setRequesterName(gotMe.displayName);
      });
  }

  return (
    <>
      <div className={styles.main__header__container}>
        <h2>Requester</h2>
        <p>
          Please use this form to request product changes, additions, features
          for Event specific topics and software. This could be Handshake.Logic,
          sweb.eTicket (wallet functionality), mobile.gate, etc. All other
          request can currently not be handled within this tool. Please refer to
          the according processes of the responsible development teams. You can
          change the field entries in case you are requesting for a third party.
        </p>
      </div>
      <div className={styles.main__content__container}>
        <div>
          <h3>Requester Name</h3>
          <div className={styles.person__wraper}>
            <Person personQuery="me" view={5} />
          </div>
          <h3>Request ID</h3>
          <input
            type="text"
            value={requesterId}
            onChange={(e: any) => setRequesterId(e.target.value)}
            style={{ color: "gray" }}
          />
          <h3>Request Date</h3>
          <input type="text" value={requestDate} style={{ color: "gray" }} />
        </div>
        <div>
          <h3>
            SD Unit<span> *</span>
          </h3>
          <SdSubsidiaries sdUnit={sdUnit} setSdUnit={setSdUnit} />
          <h3>
            Department<span> *</span>
          </h3>
          <input
            type="text"
            value={department}
            onChange={(e: any) => setDepartment(e.target.value)}
          />
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
