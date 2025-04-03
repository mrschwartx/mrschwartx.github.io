import { BkgList, Link } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <div>
        <div style={{ textAlign: "justify", paddingTop: "20px" }}>
          🏫 <b>Education</b>
          <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
            {educations.map((education, index) => (
              <BkgList>
                <li key={index} style={{ marginBottom: "5px" }}>
                  <p>
                    <Link href={education.link} target="_blank">
                      {education.name}
                    </Link>{" "}
                    | {education.major} <br />
                    <i>{education.duration}</i> <br />
                    <span className="desc">{education.description}</span>
                  </p>
                </li>
              </BkgList>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const educations = [
  {
    name: "Universitas Islam Al-Ihya Kuningan",
    duration: "Sep 2020 - Jun 2024",
    major: "Informatics ( S.Kom ) - GPA. 3.88",
    description:
      "Thesis: Development of Prototype Automatic Waste Classification System based on Robotics with Machine Learning.",
    link: "https://unisa.ac.id/",
  },
  {
    name: "SMK Pertiwi Kuningan",
    duration: "Jul 2014 - Jun 2017",
    major: "Computer and Network Engineering",
    description:
      "Final Project: IoT-based Smart School System: Design and Implementation",
    link: "https://smkpertiwikng.sch.id/",
  },
];

export default Education;
