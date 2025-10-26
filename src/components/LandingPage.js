import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Conference Expense Planner</h1>
        <h2>Plan your next major event with us!</h2>
        <button className="get-started-btn" onClick={() => navigate("/rooms")}>
          Get Started
        </button>

        <div className="company-info">
          <p>
            Welcome to BudgetEase Solutions, your trusted partner in simplifying
            budget management and financial solutions. At BudgetEase, we
            understand the importance of effective budget planning and strive to
            provide intuitive, user-friendly solutions to meet the diverse needs
            of our clients.
          </p>
          <p>
            With a commitment to efficiency and innovation, we empower
            individuals and businesses to take control of their finances and
            achieve their goals with ease.
          </p>
          <p>
            At BudgetEase Solutions, our mission is to make budgeting effortless
            and accessible for everyone. Whether you're a small business owner,
            a busy professional, or an individual looking to manage your
            personal finances, we offer tailored solutions to streamline your
            budgeting process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
