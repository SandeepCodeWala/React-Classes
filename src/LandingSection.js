import React from "react";
import "./LandingSection.css";
import SignUpForm from "./SignUpForm";

function LandingSection() {
  return (
    <div className="landing-section">
      <div className="left-section">
        <h1>Welcome to Free React Native Classes</h1>
        <p>
          Ready to build amazing mobile apps? Join my free React Native classes
          and start from scratch! Whether you're a beginner or looking to level
          up, I’ll guide you step by step to become a pro.
        </p>

        <p>
          Enroll today and take the first step toward mastering React Native!
        </p>
      </div>
      <div className="right-section">
        <h1>Register Now</h1>

        <SignUpForm />
      </div>
    </div>
  );
}

export default LandingSection;
