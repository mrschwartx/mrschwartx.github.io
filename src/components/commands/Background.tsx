import { BkgIntro, BkgList, Link } from "../styles/Background.styled";
import { Wrapper } from "../styles/Output.styled";

const Background: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <BkgIntro>Education background:</BkgIntro>
      {eduBg.map(({ title, place, years, desc }) => (
        <BkgList key={title}>
          <div>
            <span className="title">- {title}</span>,{" "}
            <span className="place">{place} | </span>
            <span className="years">{years}</span>
          </div>
          <div className="desc">{desc}</div>
        </BkgList>
      ))}
      <br />
      <BkgIntro>Where I've Worked:</BkgIntro>
      {workBg.map(({ title, place, years, desc }) => (
        <BkgList key={title}>
          <div>
            <span className="title">- {title}</span>,{" "}
            <span className="place">{place} | </span>
            <span className="years">{years}</span>
          </div>
          <div>
            <div className="desc">{desc}</div>
          </div>
        </BkgList>
      ))}
      <br />
      <BkgIntro>I have certificate:</BkgIntro>
      {certBg.map(({ title, url }) => (
        <BkgList key={title}>
          <div>
            <span className="title">
              -{" "}
              <Link href={url} target="_blank">
                {title}
              </Link>
            </span>
          </div>
          <div></div>
        </BkgList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc (Hons) in Computing",
    place: "Universitas Islam Al-Ihya Kuningan",
    years: "2020 - 2024",
    desc: "",
  },
  {
    title: "Diploma High School",
    place: "SMK Pertiwi Kuningan",
    years: "2014 - 2017",
    desc: "",
  },
];

const workBg = [
  {
    title: "Monitoring Engineer",
    place: "Hand Solutions Indonesia",
    years: "Aug 2024 - Present",
    desc: "Responsible for monitoring systems, analyzing data, reporting issues promptly, and supporting business and technology teams in improving and developing solutions.",
  },
  {
    title: "Mobile Development Cohort",
    place: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    years: "Feb - Jul 2024",
    desc: "As a participant in the Mobile Development Cohort at Bangkit Academy, led by Google, Tokopedia, Gojek, and Traveloka, I enhanced my skills in mobile app development, including Android SDK Native, UI/UX design, collaborative teamwork, and full-cycle mobile app project management.",
  },
  {
    title: "Research Intership",
    place: "Dinas Lingkungan Hidup (DLH) Kuningan",
    years: "Oct - Dec 2023",
    desc: "Develop a machine learning model for waste classification using Convolutional Neural Network and Xception architecture, and collect and preprocess waste images.",
  },
  {
    title: "Software Engineer",
    place: "MZS Software House",
    years: "Dec 2021 - Oct 2023",
    desc: "Creating, integrating, and managing databases (MySQL, MongoDB); writing code with Java and PHP; working with frameworks like Spring and Laravel; developing web services like REST and GraphQL; integrating with payment gateways; managing and developing content management systems; and implementing test-driven development and utilizing CI/CD tools.",
  },
  {
    title: "Machine Operator",
    place: "PT Astra Honda Motor",
    years: "Dec 2017 - Oct 2019",
    desc: "Responsible for managing sudden machinery breakdowns, liaising between the production team and overseas machinery manufacturers to solve problems, constructing all panels and pass bars in the factory, performing efficiency testing to ensure peak system performance, preparing and implementing a plan for material and spare parts consumption for annual overall repairs, and establishing and maintaining standard operating procedures for maintenance activities.",
  },
  {
    title: "IT Internship",
    place: "Axio Class Program",
    years: "Sep - Nov 2016",
    desc: "Provided complete IT technical support services and assisted global management teams to ensure efficient business processes.",
  },
];

const certBg = [
  {
    title: "Android Development",
    url: "https://www.dicoding.com/certificates/4EXGQJ4D1ZRL",
  },
  {
    title: "Machine Learning for Android",
    url: "https://www.dicoding.com/certificates/ERZRWQNM2XYV",
  },
  {
    title: "NodeJS Backend Developer",
    url: "https://www.dicoding.com/certificates/GRX5220VVX0M",
  },
  {
    title: "Cloud Practitioner Essentials (AWS)",
    url: "https://www.dicoding.com/certificates/81P234J18XOY",
  },
  {
    title: "Scalable Web Service with Go",
    url: "https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=1955617840-152",
  },
];

export default Background;
