import React from 'react'
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";

const TotalAssessment = () => {
  return (
    <div className="col-span-1 border-r-2 border-gray-200 p-2">
    <h1 className="text-sky-900 font-semibold text-base m-2">Total Assessment</h1>
    <div className="flex justify-start items-center py-2 m-2">
      <div className="flex justify-center items-center bg-indigo-300 w-12 h-12 rounded-lg">
        <ViewAgendaOutlinedIcon />
      </div>
      <h1 className="text-2xl font-bold text-sky-900 ml-4">34</h1>
    </div>
  </div>
  )
}

export default TotalAssessment;