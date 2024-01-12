import React from 'react'
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const Candidates = () => {
  return (
    <div className="col-span-5 md:border-r-2 md:border-gray-200 p-2">
    <h1 className="text-sky-900 font-semibold text-base m-2">Candidates</h1>
    <div className="flex justify-start items-center py-2 m-2">
      <div className="flex justify-center items-center bg-indigo-300 w-12 h-12 rounded-lg">
        <PeopleAltOutlinedIcon />
      </div>
      <div className="flex text-2xl font-bold text-sky-900 ml-4">
        <div className="border-r-2 border-gray-200">
            <div className="flex justify-center items-center mr-4">
                <h1>11,145</h1>
                <h2 className="text-green-600 text-xs">+89</h2>
            </div>
            <h1 className="text-sm font-medium">Total Candidate</h1>
        </div>
        <div className="ml-4">
            <div className="flex items-center">
                <h1>1,14</h1>
                <h2 className="text-green-600 text-xs">+89</h2>
            </div>
            <h1 className="text-sm font-medium">Who Attempted</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Candidates