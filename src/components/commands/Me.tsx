import {
  HighlightAlt,
  HighlightSpan,
  Link,
  MeWrapper,
} from "../styles/Me.styled";
import { Cmd } from "../styles/Welcome.styled";

const Me: React.FC = () => {
  return (
    <MeWrapper data-testid="me">
      <div>
        <p style={{ textAlign: "justify" }}>Hi, there 👋</p>
        <p style={{ textAlign: "justify" }}>
          👨‍💻I'm <HighlightSpan>Agus</HighlightSpan> as{" "}
          <HighlightSpan>software engineer</HighlightSpan> based in{" "}
          <HighlightAlt>Jakarta</HighlightAlt>, Indonesia 🇮🇩. Just a human
          interested in <HighlightAlt>Computer Engineering</HighlightAlt>,{" "}
          <HighlightAlt>Machine Learning</HighlightAlt>,{" "}
          <HighlightAlt>Internet of Things</HighlightAlt>. As a Software
          Engineer with a strong background in software development, system
          architecture, and cloud computing, I have experience in building and
          optimizing production-grade applications. My focus is on improving
          development workflows, enhancing system reliability, and automating
          infrastructure to increase efficiency, scalability, and performance.
        </p>
        <p style={{ textAlign: "justify", paddingTop: "10px" }}>
          🌱Build{" "}
          <Link href="https://github.com/go-kratos/kratos" target="_blank">
            Kratos
          </Link>{" "}
          (Go Microservice Framework). 🔋 Learn DevOps Course on{" "}
          <Link href="https://fastcampus.com/id" target="_blank">
            Fast Campus
          </Link>
          . Read Book🏷️: How to Create World-Class Agility, Reliability, and
          Security in Technology Organization by Gene Kim, Patrick Debois, John
          Willis, Jez Humble. Systems Performance: Enterprise and the Cloud, 2nd
          Edition (2020) by Brendan Gregg.
        </p>
        <p style={{ textAlign: "justify" }}>
          🔧<b>Tech stack I'm familiar with:</b>
        </p>
        <p style={{ textAlign: "justify" }}>
          {devIcons.map(slug => (
            <img
              key={slug}
              style={{
                display: "inline-block",
                margin: "4px",
                height: "30px",
                width: "30px",
              }}
              src={`https://cdn.simpleicons.org/${slug}/white`}
              onMouseEnter={e => {
                (
                  e.currentTarget as HTMLImageElement
                ).src = `https://cdn.simpleicons.org/${slug}`;
              }}
              onMouseLeave={e => {
                (
                  e.currentTarget as HTMLImageElement
                ).src = `https://cdn.simpleicons.org/${slug}/white`;
              }}
            />
          ))}
        </p>
      </div>
      <br />
      <div>
        First you have to type `<Cmd>help</Cmd>`!
      </div>
    </MeWrapper>
  );
};

const devIcons = [
  "linux",
  "ubuntu",
  "go",
  "python",
  "openjdk",
  "spring",
  "git",
  "docker",
  "kubernetes",
  "amazonwebservices",
  "googlecloud",
  "prometheus",
  "grafana",
  "graylog",
  "elasticstack",
  "ansible",
  "terraform",
  "jira",

  "php",
  "laravel",
  "javascript",
  "typescript",
  "node.js",
  "react",
  "apachemaven",
  "gradle",
  "kotlin",
  "android",

  "openstack",
  "xcode",
  "intellijidea",
  "androidstudio",
  "nginx",
  "express",
  "postgresql",
  "mongodb",
  "firebase",
  "jupyter",
  "keras",
  "tensorflow",
  "arduino",
  "spotify",
];

export default Me;
