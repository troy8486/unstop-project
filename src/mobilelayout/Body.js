import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewAssesmentCard from "../components/NewAssessmentCard";
import NewAssessmentModal from "../components/NewAssessmentModal";
import AssignedAssesmentCard from "../components/AssignedAssesmentCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import { toggleGraph } from "../utlis/appSlice";
import TotalAssessment from "../components/TotalAssessment";
import TotalPurpose from "../components/TotalPurpose";
import Candidates from "../components/Candidates";
import CandidateSource from "../components/CandidateSource";
const Body = () => {
  const isModalOpen = useSelector((store) => store.app?.isModalOpen);
  const isGraphOpen = useSelector((store) => store.app?.isGraphOpen);
  const assessments = useSelector((store) => store.app?.assessments);
  const dispatch = useDispatch();
  const handleBarGraphClick = () => {
    dispatch(toggleGraph());
  };
  return (
    <div className="">
      {isGraphOpen && (
        <div className="flex flex-col justify-center items-center">
          <div className="flex border w-[98%] mt-4 rounded-t-xl">
            <div className="w-1/2">
              {" "}
              <TotalAssessment />
            </div>
            <div className="w-1/2">
              {" "}
              <TotalPurpose />
            </div>
          </div>
          <div className=" w-[98%] border-l border-r">
            <Candidates />
          </div>
          <div className="w-[98%] border rounded-b-xl">
            <CandidateSource />
          </div>
        </div>
      )}
      <div className="flex justify-between mt-8 px-2 mx-2">
        <h1 className="text-2xl text-sky-900 font-semibold">My Assessment</h1>
        <div className="flex">
          <SearchOutlinedIcon
            style={{ marginTop: 2, marginRight: 6, fontSize: 30 }}
          />
          <FilterAltIcon
            style={{ marginTop: 2, marginRight: 6, fontSize: 30 }}
          />
          <BarChartIcon
            onClick={handleBarGraphClick}
            style={{ marginTop: 2, fontSize: 30 }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <NewAssesmentCard />
      </div>
      <div className="flex justify-center">
      {assessments.map((assessment) => (
        <AssignedAssesmentCard key={assessment.id} assessment={assessment} />
      ))}
      </div>

      {isModalOpen && <NewAssessmentModal />}
    </div>
  );
};

export default Body;
