import { student } from "../../utils/student.js";

export const initialValue = student;

export const reduce = (state, { type, payload }) => {
  switch (type) {
    case "delete":
      return state.filter((val) => val.id !== payload);
    case "edit":
      return state;
    default:
      return state;
  }
};
