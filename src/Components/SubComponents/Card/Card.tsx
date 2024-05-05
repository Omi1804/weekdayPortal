import { useState } from "react";
import "./card.css";

const Card = ({ job }: any) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="card">
        <div className="postTime">
          <p>⏳ Posted {Math.ceil(Math.random() * 10)} days ago</p>
        </div>
        <div className="companyHeading">
          <div className="icon">
            <img src={`${job.logoUrl}`} alt="" />
          </div>
          <div className="nameDetails">
            <h1>{job.companyName}</h1>
            <p className="post">{job.jobRole} </p>
            <p className="location">
              {job.location} | Exp: {job.minExp} - {job.maxExp} years
            </p>
          </div>
        </div>
        <p className="approxSalary">
          Estimated Salary: {job.minJdSalary} - {job.maxJdSalary} LPA ✅
        </p>
        <div className="jobAboutSec">
          <h3>About Company:</h3>
          <p>{job.jobDetailsFromCompany}</p>
          <button
            className="showmore"
            onClick={() => setShowMore((prev) => !prev)}
          >
            Show more
          </button>
        </div>
        <div className="minExp">
          <h3>Minimum Experience</h3>
          <p>{job.minExp ? job.minExp : 0} years</p>
        </div>
        <button className="applybtn">⚡️Easy Apply</button>
      </div>
      {showMore && (
        <div className="detailedAbout">
          <div className="content">
            <h1>Job Description</h1>
            <div className="aboutCompnayDetailed">
              <h1>About Company:</h1>
              <p>{job.jobDetailsFromCompany}</p>
            </div>
            <div className="aboutRoleDetailed">
              <h1>About Role:</h1>
              <p>
                Zuma is pioneering the future of customer interactions with our
                AI-driven leasing agent, Kelsey, transforming the rental market
                experience for consumers and property manager alike. Our
                innovative platform is crafted from the ground up, integrating
                artificial intelligence, machine learning, to boost sales
                conversions and enhance support capabilities for property
                management business across the country. As one of Los Angeles's
                fastest-growing startups, Zuma has over +17M in funding and
                support from world-renowned investors, including Andreessen
                Horowitz (a16z), Y Combinator, King River, Range Ventures, and
                distinguished angel investors like YC’s former COO, Qasar
                Younis. With our headquarters in Los Angeles, USA, Zuma sells
                its product nationally and is scaling rapidly. Achieving our
                vision requires a team of passionate, innovative individuals
                eager to leverage technology to redefine customer-business
                interactions. We're on the hunt for exceptional talent ready to
                join our mission and contribute to building a groundbreaking
                technology that reshapes how businesses engage with customers.
                Join us in our journey to revolutionize the rental industry and
                beyond, making seamless, AI-enhanced interactions the new
                standard.{" "}
              </p>
              <p>
                {" "}
                Zuma is seeking a pioneering Staff Frontend Engineer to join our
                team in Bangalore and revolutionize our frontend systems. As our
                most senior frontend developer, you will set the tone for our
                engineering culture and lead the charge in developing top-tier
                frontend practices and architecture. You will spearhead critical
                projects for our UI/UX and customer onboarding teams, focused on
                our Large Language Model (LLM) based AI leasing agent and its
                configuration. This position is a leadership role, where you
                will mentor and collaborate with a diverse group of engineers,
                contributing to their growth and enabling them to excel.{" "}
              </p>
              <p>
                {" "}
                ResponsibilitiesDesigning and developing sophisticated frontend
                software solutions to configure our Large Language models (LLMs)
                and customer third-party CRM integration experience.Creating a
                beautiful and seamless self-serve experience to onboard
                customers onto our platform and ensure all integrations are
                working smoothlyScaling frontend infrastructure with modern
                technologies and frameworksPioneering our design system
                frameworkEnsuring robustness and scalability by leading best
                practices for testing, architecture, and code quality in
                frontend developmentDriving team execution with agile or similar
                development practicesCollaborating with cross-functional teams
                to define and implement software requirements for the
                frontendProviding technical guidance and mentoring to junior and
                senior team members, including engineers based across the world
                in IndiaWorking closely with our product and design team to
                align with customer asks and solve customer problems{" "}
              </p>
              <p>
                {" "}
                <br />
                QualificationsBachelor's or master's degree in computer science
                or a related fieldMinimum of 10 years of experience in frontend
                software developmentExcellent English communication skills and
                experience collaborating with customer-facing product
                teamsExperience leading or managing technical teamsWorking
                knowledge of Javascript, HTML, CSS, and TypescriptStrong
                proficiency in frontend languages and frameworks such as
                ReactJS, NextJS, VueJS, AngularJS, and NodeJSExtensive
                experience with frontend technologies and
                architecturesExperience working with LLMs and supporting LLM
                architectures at scale is a plusExcellent problem-solving and
                debugging skillsStartup experience and a scrappy/flexible
                mindset
              </p>
            </div>
            <span
              className="material-symbols-outlined cancelAbout"
              onClick={() => {
                setShowMore(false);
              }}
            >
              close
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
