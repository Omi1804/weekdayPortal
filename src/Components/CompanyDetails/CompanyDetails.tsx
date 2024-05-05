import "./companyDetails.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CompanyDetails = ({ sidebar }) => {
  const navigate = useNavigate();

  const {
    state: { job },
  } = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  console.log(job);

  return (
    <div className={`jobContent ${sidebar ? "open" : ""}`}>
      <Button
        onClick={handleBack}
        className="back"
        sx={{
          marginBlock: ".5rem",
          "&:hover": {
            color: "#00ECA3",
          },
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: "1.2rem",
            fontWeight: "500",
            marginRight: ".3rem",
          }}
        >
          keyboard_backspace
        </span>
        All jobs
      </Button>

      <div className="job-container">
        <div className="job-sidebar">
          <div className="sidebar-section">
            <Typography variant="h6">Location</Typography>
            <Typography sx={{ textTransform: "capitalize" }}>
              {job.location}
            </Typography>
            <Typography variant="h6" mt={5}>
              Department
            </Typography>
            <Typography sx={{ textTransform: "capitalize" }}>
              {job.jobRole}
            </Typography>
          </div>
        </div>
        <div className="job-main">
          <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
            {job.jobRole} Developer At {job.companyName}
          </Typography>
          <div className="job-description">
            <Typography variant="h4">About the role</Typography>
            <div className="role-overview">
              <Typography variant="h6">Overview</Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Typography>Company name: {job.companyName}</Typography>
                </li>
                <li>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    HQ Location: {job.location}, California
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Salary: Rs. {job.minJdSalary || 1}-{job.maxJdSalary} lakhs
                    per year
                  </Typography>
                </li>
                <li>
                  <Typography>Experience: {job.minExp || 0}+ years</Typography>
                </li>
                <li>
                  <Typography>Location: {job.location}</Typography>
                </li>
                <li>
                  <Typography>Type: Full-time</Typography>
                </li>
              </ul>
              <Typography>
                We are a fast-growing Bay Area-based startup backed by leading
                investors like Menlo Ventures, Accel and Y-Combinator. We create
                AI and ML-powered software for the finance and lending
                industries, focused on repayment and debt recovery. We work to
                improve conversations between call center agents and customers
                and provide actionable insights. Our products use AI to create
                next-generation speech analytics that support real-time agent
                guidance, automated notes after conversations, and call analysis
                for quality assurance and compliance.
              </Typography>
              <Typography>
                The team has deep technical talent today and we believe there is
                an opportunity to build an iconic vertical software business
                that will fundamentally impact how the multi-trillion-dollar
                debt industry is managed. Debt has such a massive impact on
                consumers and prior to Prodigal, the industry was saddled with
                painful, low value manual workflows, and poor customer
                experience- our mission is to humanize the debt repayment
                process through automation and data.
              </Typography>
              <Typography>
                We are looking for a passionate and seasoned Senior Machine
                Learning (ML) Engineer to spearhead the design, development, and
                deployment of cutting-edge Machine Learning and Generative AI
                solutions towards Prodigal’s vision of building the Intelligence
                Layer for Consumer Finance.
              </Typography>
            </div>
            <div className="roleResponsibility">
              <Typography variant="h4">Responsibilities:</Typography>
              <Typography>
                1. ML Algorithm Development: Design and implement advanced ML
                algorithms leveraging traditional Machine Learning techniques
                and the modern NLP stack, including Large Language Model (LLMs)
              </Typography>
              <Typography>
                2. Data Engineering & Software Development: Architect and
                implement data pipelines for ML model training. Lead scalable
                software systems development to deploy ML models into production
                systems, ensuring high performance and reliability.
              </Typography>
              <Typography>
                3. Data Engineering & Software Development: Architect and
                implement data pipelines for ML model training. Lead scalable
                software systems development to deploy ML models into production
                systems, ensuring high performance and reliability.
              </Typography>
              <Typography>
                4. Collaboration & Leadership: Effectively collaborate with
                cross-functional teams to deliver high-quality solutions on
                time. Guide team members in contributing to ML design
                discussions for new projects.
              </Typography>
            </div>
          </div>
          <button className="applybtn">
            <a href={job.jdLink} target="_blank">
              ⚡️ Apply Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
