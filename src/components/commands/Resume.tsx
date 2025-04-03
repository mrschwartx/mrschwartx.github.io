import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "resume") {
    return (
      <iframe
        src="/resume.pdf"
        width="100%"
        height="600px"
        title="Resume"
      />
    );
  }

  return <span></span>;
};

export default Resume;
