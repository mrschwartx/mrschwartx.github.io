import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>What I'v worked:</ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Fos Motor",
    desc: "Tech: PHP, Laravel, MySQL",
    url: "https://fosmotor.com",
  },
  {
    id: 2,
    title: "MZS Computer Based Test",
    desc: "Tech: PHP, Laravel, MySQL",
    url: "https://cbt.mzs.com",
  },
  {
    id: 3,
    title: "Permata Hospital Management System",
    desc: "Tech: PHP, Laravel, MySQL",
    url: "https://rspermatakuningan.com",
  },
  {
    id: 4,
    title: "Waste Classification Model",
    desc: "Tech: Python, TensorFlow, CNN",
    url: "https://github.com/agussmkertjhaan/TA-ML",
  },
  {
    id: 5,
    title: "Robotic Waste Classification",
    desc: "Tech: C/C++, espresif, ESP32",
    url: "https://github.com/agussmkertjhaan/TA-Firmware",
  },
  {
    id: 6,
    title: "BinIQ",
    desc: "Tech: Kotlin, Compose, Firebase",
    url: "https://github.com/agussmkertjhaan/TA-Android",
  },
  {
    id: 7,
    title: "CocoDiag",
    desc: "Tech: Kotlin, Compose, Firebase",
    url: "https://github.com/agussmkertjhaan/CocoDiag",
  },
];

export default Projects;
