import React from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShareIcon from "@mui/icons-material/Share";

const AssignedAssesmentDesktopCard = ({ assessment }) => {
  const opacity = 1;
  const durationDisplay = assessment.duration.slice(0, 2);
  return (
    <div className="flex flex-col bg-white border-2 w-[98%] md:w-[32%] h-60 rounded-2xl cursor-pointer pt-4 mx-2 my-2">
      <div className="flex justify-between px-4">
        <div className="flex">
          <div className="flex justify-center items-center bg-violet-300 w-16 h-16 rounded-xl">
            <WorkOutlineOutlinedIcon style={{ fontSize: 30 }} />
          </div>
        </div>

        <MoreVertIcon />
      </div>

      <div>
        <h1 className="text-2xl text-sky-900 font-semibold mx-4">
          {assessment.name}
        </h1>

        <div className="flex px-2">
          <h1 className="text-base text-sky-900 font-semibold px-2">
            {assessment.purpose}
          </h1>

          <div className="flex justify-center items-center border-l border-gray-300 px-2 h-5">
            <CalendarMonthIcon
              style={{
                fontSize: 25,
                marginRight: 5,
                color: `rgba(55, 65, 81, ${opacity})`,
              }}
            />
            <h1 className="text-base text-gray-700 font-semibold">
              20 Apr 2023
            </h1>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 mt-4 mx-4"></div>

      <div className="flex justify-between items-center px-4 mt-2">
        <div className="flex">
          <div className="mr-2">
            <h1 className="text-base font-semibold">{durationDisplay}</h1>
            <h1 className="text-sm font-normal">Duration</h1>
          </div>
          <div className="text-sm">
            <h1 className="text-base font-semibold">00</h1>
            <h1 className="text-sm font-normal">Questions</h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center border border-black rounded-2xl text-sm font-medium p-2 m-2">
            <ShareIcon />
            <h1 className="mx-2">Share</h1>
          </div>
          <div className="flex justify-center items-center bg-sky-600 text-white rounded-full w-10 h-10">
            LP
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedAssesmentDesktopCard;
