import Me from "./commands/Me";
import Resume from "./commands/Resume";
import Education from "./commands/Education";
import Experience from "./commands/Experience";

import Blog from "./commands/Blog";
import Email from "./commands/Email";
import Projects from "./commands/Projects";

import GeneralOutput from "./commands/GeneralOutput";
import Links from "./commands/Links";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Help from "./commands/Help";
import History from "./commands/History";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "links", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          welcome: <Me />,
          who: <Me />,
          education: <Education />,
          experience: <Experience />,

          blog: <Blog />,
          email: <Email />,
          resume: <Resume />,
          projects: <Projects />,
          links: <Links />,
          help: <Help />,
          clear: <Clear />,
          echo: <Echo />,
          history: <History />,
          pwd: <GeneralOutput>/home/mrschwartx.github.io</GeneralOutput>,
          // themes: <Themes />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
