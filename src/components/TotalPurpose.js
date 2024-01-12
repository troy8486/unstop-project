import React from 'react'
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const TotalPurpose = () => {
  return (
    <div className="col-span-1 p-2">
    <h1 className="text-sky-900 font-semibold text-base m-2">Total Purpose</h1>
    <div className="flex justify-start items-center py-2 m-2">
      <div className="flex justify-center items-center bg-indigo-300 w-12 h-12 rounded-lg">
        <InsertLinkOutlinedIcon />
      </div>
      <h1 className="text-2xl font-bold text-sky-900 ml-4">11</h1>
    </div>
  </div>

  )
}

export default TotalPurpose