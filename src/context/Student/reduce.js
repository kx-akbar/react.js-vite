import { student } from "../../utils/student.js";

export const initialValue = student;

export const reduce = (state, { type, payload }) => {
  switch (type) {
    case "delete":
      return state.filter((val) => val.id !== payload);
    case "edit":
      let { key, value } = payload;
      const res = initialValue.filter((val) =>
        String(val[key]).includes(value)
      );
      return res;
    default:
      return state;
  }
};
