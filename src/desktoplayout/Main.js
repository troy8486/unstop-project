import React from "react";
import NewAssesmentCard from "../components/NewAssessmentCard"
import AssignedAssesmentDesktopCard from "../components/AssignedAssesmentDesktopCard";
import NewAssessmentModal from "../components/NewAssessmentModal";
import { useSelector } from "react-redux";
import AssesmentCandidates from "../components/AssesmentCandidates";

const Main = () => {
  const isModalOpen = useSelector((store) => store.app?.isModalOpen);
  const assessments = useSelector((store) => store.app?.assessments);
  return (
    <div className="w-[97%] mx-5 h-[87%] bg-white rounded-b-xl">
      <div className="p-4">
        <h1 className="text-xl text-sky-900 font-semibol mb-4">
          Assessments Overview
        </h1>
        <AssesmentCandidates />
      </div>

      <div>
        <div className="p-4">
          <h1 className="text-xl text-sky-900 font-semibold mb-2">
            My Assessment
          </h1>
        </div>
        <div className="flex flex-wrap mx-4">
          <NewAssesmentCard />
          {assessments.map((assessment) => (
            <AssignedAssesmentDesktopCard
              key={assessment.id}
              assessment={assessment}
            />
          ))}
        </div>
      </div>
      {isModalOpen && <NewAssessmentModal />}
    </div>
  );
};

export default Main;
