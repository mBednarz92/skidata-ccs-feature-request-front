import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { connect } from "react-redux";
import styles from "./userDropdown.module.scss";

function UserDropdown(props: any) {
  const [userType, setUserType] = useState<string>("Service Technician");
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const userTypesArray = [
    "Service Technician",
    "Stadium Operator",
    "Fan/Guest",
    "Sales Representative",
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
        {userTypesArray.map((user) => (
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

export default connect(mapStateToProps)(UserDropdown);
