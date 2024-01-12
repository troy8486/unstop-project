import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utlis/appSlice";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import CloseIcon from '@mui/icons-material/Close';


const SidebarMobile = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);
  if (!isMenuOpen) return null;

  const handleHamburgerToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="absolute z-50 bg-sky-100 w-[80%] h-full pt-8 px-4">
            <div className="flex justify-between mb-8">
              <h1 className="font-medium">Menu</h1>
              <h3 onClick={handleHamburgerToggle}><CloseIcon/></h3>
            </div>
            <div className="flex p-2">
              <DashboardOutlinedIcon />
              <h1 className="mx-2">Dashboard</h1>
            </div>
            <div className="flex p-2">
              <NoteAltOutlinedIcon />
              <h1 className="mx-2">Assessment</h1>
            </div>
            <div className="flex p-2 border-b border-black border-dotted pb-6">
              <QuizOutlinedIcon />
              <h1 className="mx-2">My Library</h1>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex p-2">
                <ContentPasteOutlinedIcon />
                <h1 className="mx-2">Round Status</h1>
              </div>
              <h3 className="flex justify-center items-center bg-red-200 text-center border-red-700 border-2 text-sm font-normal text-red-700 rounded-xl w-16 h-8">
                Admin
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarMobile;
