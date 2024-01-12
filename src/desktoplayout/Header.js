import React from "react";
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';

const Header = () => {
  return (
    <div className="flex justify-between bg-white w-[97%] h-20 mx-5 rounded-t-xl border-b-2 border-gray-300">
      <div className="flex items-center">
        <div className="text-2xl text-sky-900 font-semibold px-4 py-2 border-r-2 border-gray-200">
          Assessment
        </div>
        <div className="flex justify-center items-center text-sky-600 font-semibold h-full border-b-4 border-sky-700 mx-4 pt-2">
          <div>My Assessments</div>
        </div>
      </div>
      <div className="flex items-center m-2 p-2"><StayCurrentPortraitOutlinedIcon/></div>
    </div>
  );
};

export default Header;
