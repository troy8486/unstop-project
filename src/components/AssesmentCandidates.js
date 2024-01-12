import React from "react";
import TotalAssessment from "./TotalAssessment";
import Candidates from "./Candidates";
import CandidateSource from "./CandidateSource";
import TotalPurpose from "./TotalPurpose";

const AssesmentCandidates = () => {
  return (
    <div className="grid grid-flow-col border-2 border-gray-200 rounded-xl my-2">
      <TotalAssessment />
      <Candidates />
      <CandidateSource />
      <TotalPurpose />
    </div>
  );
};

export default AssesmentCandidates;
