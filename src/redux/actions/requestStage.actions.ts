import {
  setCUSTOMER,
  setDESCRIPTION,
  setMAIN,
} from "../constants/requestStage.types";

export const setMain = () => {
  return {
    type: setMAIN,
  };
};

export const setDescription = () => {
  return {
    type: setDESCRIPTION,
  };
};

export const setCustomer = () => {
  return {
    type: setCUSTOMER,
  };
};
