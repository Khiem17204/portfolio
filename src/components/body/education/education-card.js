import React from "react";
import "./education-card.css";

function EducationCard ({ item }) {
  return (
    <div className="education-card">
      <img alt="education" src={item.schoolLogo} className="education-logo" />
      <div className="education-info">
        <label className="education-name">{item.school}</label>
        <div className="edcation-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="education-desc">
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;