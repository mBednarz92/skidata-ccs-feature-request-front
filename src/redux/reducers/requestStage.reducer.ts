import {
  setCUSTOMER,
  setDESCRIPTION,
  setMAIN,
  setSUMMARY,
} from "../constants/requestStage.types";

const INITIAL_STATE: string = "main";

const RequestStageReducer = function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    //ADMIN
    case setMAIN:
      return "main";
    case setDESCRIPTION:
      return "description";
    case setCUSTOMER:
      return "customer";
    case setSUMMARY:
      return "summary";
    default:
      return state;
  }
};

export default RequestStageReducer;
