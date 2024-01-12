import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
const Sidebar = () => {
  return (
    <div className="col-span-1 w-full px-4 bg-white text-center ">
      <div className="flex flex-col mt-4 border-b pb-8 border-black border-dotted">
        <div className="flex md:flex-col md:items-center my-4">
          <DashboardOutlinedIcon />
          <label>Dashboard</label>
        </div>
        <div className="flex md:flex-col md:items-center my-4">
          <NoteAltOutlinedIcon />
          <label>Assessment</label>
        </div>
        <div className="flex md:flex-col md:items-center my-4">
          <QuizOutlinedIcon />
          <label>My Library</label>
        </div>
      </div >
      <div className="flex md:flex-col justify-center items-center mt-4">
        <h3 className="bg-red-200 border-red-700 border-2 text-sm font-normal text-red-700 rounded-xl w-16">Admin</h3>
        <div className="flex md:flex-col md:items-center text-center my-6">
          <ContentPasteOutlinedIcon />
          <label className="text-wrap w-10">Round Status</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
