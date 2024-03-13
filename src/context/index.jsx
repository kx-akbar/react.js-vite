import { StudentProvider } from "./Student";

export const RootContext = (props) => {
  return <StudentProvider>{props.children}</StudentProvider>;
};
