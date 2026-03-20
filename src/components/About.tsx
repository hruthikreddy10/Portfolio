import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI Safety & Validation Engineer at the intersection of LLMs, QA engineering,
          and enterprise AI systems. I design end-to-end validation strategies to evaluate
          hallucinations, improve output accuracy, and ensure consistent behavior in
          non-deterministic AI systems — contributing to 30%+ improvements in defect
          detection and output reliability in high-impact production environments.
          I think in platforms, not scripts: building reusable, configurable AI QA systems
          that scale across products using LangChain, LangGraph, RAG-based validation
          workflows, and MCP integrations. My work bridges traditional QA rigor with
          next-generation AI validation — embedding safety and trust into every layer
          of the AI Development Lifecycle.
        </p>
      </div>
    </div>
  );
};

export default About;
