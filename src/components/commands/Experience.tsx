import { BkgList, Link } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <div style={{ textAlign: "justify", paddingTop: "20px" }}>
        🪴 <b>Related Experiences</b>
        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
          {experiences.map((experience, index) => (
            <BkgList>
              <li key={index} style={{ marginBottom: "10px" }}>
                <p style={{ paddingBottom: "5px" }}>
                  <Link href={experience.link} target="_blank">
                    {experience.companyName}
                  </Link>{" "}
                  | {experience.duration}
                </p>
                <p
                  className="title"
                  style={{ fontStyle: "italic", marginBottom: "5px" }}
                >
                  {experience.title}
                </p>
                <ul style={{ paddingLeft: "20px", listStyleType: "circle" }}>
                  {experience.descriptions.map((desc, i) => (
                    <li className="desc" key={i}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </li>
            </BkgList>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const experiences = [
  {
    companyName: "HAND Enterprise Solutions Indonesia",
    duration: "Sep 2024 - Present",
    title: "Software Engineer",
    descriptions: [
      "Analyze background warnings, identify potential issues, and report them promptly to ensure timely resolution.",
      "Monitor system performance, conduct initial data analysis, and work with the business team to make adjustments based on customer needs.",
      "Optimize system performance by collecting and analyzing key metrics, and collaborate with the technology team to enhance secondary systems.",
    ],
    link: "https://www.hand-global.com/",
  },
  {
    companyName: "Bangkit led by Google, Goto, and Traveloka",
    duration: "Feb 2024 - Jul 2024",
    title: "Android Developer",
    descriptions: [
      "Proficiency in Android application development using SDK Native.",
      "Ability to design and implement attractive and functional UI/UX.",
      "Experience working in a collaborative and agile team environment.",
      "Deep understanding of the mobile application lifecycle and project management from start to finish.",
    ],
    link: "https://grow.google/intl/id_id/bangkit/",
  },
  {
    companyName: "MZS Software House",
    duration: "Des 2021 - Oct 2023",
    title: "Software Engineer (Backend)",
    descriptions: [
      "Developed and optimized backend systems using Golang and PHP frameworks (Laravel, CodeIgniter).",
      "Managed and optimized databases to improve query efficiency and system performance.",
      "Wrote clean, efficient, and testable code following software engineering best practices.",
      "Monitored application performance, debugged issues, and resolved backend system errors.",
      "Implemented CI/CD pipelines and automated deployment using Docker, Kubernetes.",
      "Collaborated with cross-functional teams and conducted code reviews.",
    ],
  },
];

export default Experience;
