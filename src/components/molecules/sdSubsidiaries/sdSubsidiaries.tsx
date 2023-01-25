import { useState } from "react";
import { connect } from "react-redux";
import styles from "./sdSubsidiaries.module.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function SdSubsidiaries(props: any) {
  const [userType, setUserType] = useState<string>("...");
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const sdSubsidiary = [
    "SKIDATA HQ",
    "SKIDATA Austria GmbH",
    "SKIDATA Deutschland",
    "SKIDATA Benelux",
    "SKIDATA Scandinavia AB",
    "SKIDATA Inc. (USA)",
    "SKIDATA S.A./N.V. (Belgium)",
    "SKIDATA Turkey",
    "SKIDATA Mexico (Mexico)",
    "SKIDATA France S.A.S.",
    "SKIDATA Japan",
    "SKIDATA Service Tunisia Sarl",
    "SKIDATA Australasia Pty Ltd",
    "SKIDATA Italy",
    "SKIDATA Chile SpA",
    "SKIDATA South Africa (Pty) Ltd",
    "SKIDATA (Schweiz) GmbH",
    "SKIDATA Middle East LLC",
    "SKIDATA Ibérica, S. L.",
    "Other",
  ];

  function handleMouseLeave() {
    setIsDropdownActive(false);
  }

  return (
    <div
      className={styles.description__content__container__dropDown__container}
    >
      <button
        onClick={() => setIsDropdownActive(!isDropdownActive)}
        style={
          isDropdownActive
            ? {
                borderBottomRightRadius: "0",
                borderBottomLeftRadius: "0",
              }
            : {}
        }
      >
        {userType}
        {isDropdownActive ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div
        className={styles.description__content__container__dropDown__list}
        onMouseLeave={() => setTimeout(handleMouseLeave, 300)}
        style={
          isDropdownActive
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        {sdSubsidiary.map((user) => (
          <button
            onClick={() => {
              setIsDropdownActive(false);
              setUserType(user);
            }}
          >
            {user}
          </button>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps: any = (state: any) => {
  return {
    requestStage: state.requestStage,
  };
};

export default connect(mapStateToProps)(SdSubsidiaries);
