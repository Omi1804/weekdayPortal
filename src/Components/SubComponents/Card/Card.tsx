import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="postTime">
        <p>⏳ Posted 4 days ago</p>
      </div>
      <div className="companyHeading">
        <div className="icon">
          <img src="/comp1.jpg" alt="" />
        </div>
        <div className="nameDetails">
          <h1>FlexWash Technologies</h1>
          <p className="post">Senior Engineer</p>
          <p className="location">India | Exp: 5-5 years</p>
        </div>
      </div>
      <p className="approxSalary">Estimated Salary: ₹30 - 60 LPA ✅</p>
      <div className="jobAboutSec">
        <h3>About Company:</h3>
        <p>
          Zuma makes an automated sales agent that converses with 100% of
          inbound leads, ultimately improving the way consumers interact with
          businesses and organizations. We’ve built this from the ground up
          using AI, ML, and human support which helps increase sales conversion
          and support capacity for businesses of all kinds. Zuma is one of the
          fastest-growing startups in San Francisco, and is well-funded and
          backed by world-class investors such as Y-Combinator, Joe Montana’s
          fund (Liquid 2 Ventures), Day One Ventures, Soma Capital, and other
          notable angel investors including Austen Allred (from Lambda School),
          YC’s ex-COO Qasar Younis, among others.
        </p>
      </div>
      <div className="minExp">
        <h3>Minimum Experience</h3>
        <p>1 years</p>
      </div>
      <button>⚡️Easy Apply</button>
    </div>
  );
};

export default Card;
