import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>QA Analyst</h4>
                <h5>Unacademy</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Drove quality across fast-paced product releases — owning test planning,
              regression cycles, and defect triage for one of India's largest ed-tech platforms.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Quality Automation Engineer</h4>
                <h5>Labcorp</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built and maintained automated test suites for clinical and laboratory software systems,
              ensuring compliance, reliability, and accuracy in high-stakes healthcare environments.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI QA Engineer</h4>
                <h5>Centene Corporation</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pioneered AI validation workflows for enterprise LLM-powered solutions —
              designing hallucination detection strategies, RAG output evaluation pipelines,
              and structured defect triage integrated with JIRA.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Safety & Validation Engineer</h4>
                <h5>Acentra Health</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting safety-first validation frameworks for production AI systems —
              ensuring reliability, explainability, and trust at scale across enterprise healthcare workflows.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
