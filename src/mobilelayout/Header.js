import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utlis/appSlice";
const Header = () => {
  const opacity = 1;
  const dispatch = useDispatch();
  const handleHamburgerToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="border">
      <div className="flex justify-between items-center m-2 p-2">
        <div className="flex justify-center items-center">
          <MenuOutlinedIcon onClick={handleHamburgerToggle} style={{fontSize: 40, color: `rgba(12, 74, 110, ${opacity})`, marginRight: 10}}/>
          <h1 className="text-2xl text-sky-900 font-semibold">Assessment</h1>
        </div>
        <ComputerOutlinedIcon style={{fontSize:30, color: `rgba(12, 74, 110, ${opacity})`}}/>
      </div>
      <div className="flex justify-between text-lg">
        <h1 className="text-center border-b-2 border-sky-700 text-sky-600 font-medium py-2 px-4 w-1/2">My Assessment</h1>
        <h1 className="text-center font-medium py-2 px-4">Unstop Assessment</h1>
      </div>
    </div>
  );
};

export default Header;
