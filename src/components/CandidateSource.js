import React from 'react'
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const CandidateSource = () => {
  return (
    <div className="col-span-5 md:border-r-2 md:border-gray-200 p-2">
    <h1 className="text-sky-900 font-semibold text-base m-2">Candidates Source</h1>
    <div className="flex justify-start items-center py-2 m-2">
      <div className="flex justify-center items-center bg-indigo-300 w-12 h-12 rounded-lg">
        <LanguageOutlinedIcon />
      </div>
      <div className="flex text-2xl font-bold text-sky-900 ml-4">
        <div className="border-r-2 border-gray-200">
            <div className="flex justify-center items-center mr-4">
                <h1>11,000</h1>
                <h2 className="text-green-600 text-xs">+89</h2>
            </div>
            <h1 className="text-xs font-medium">E-mail</h1>
        </div>
        <div className="ml-4 border-r-2 border-gray-200">
            <div className="flex items-center mr-12">
                <h1>1,14</h1>
                <h2 className="text-green-600 text-xs">+89</h2>
            </div>
            <h1 className="text-xs font-medium">Who Attempted</h1>
        </div>
        <div className="ml-4">
            <div className="flex items-center">
                <h1>1,14</h1>
                <h2 className="text-green-600 text-xs">+89</h2>
            </div>
            <h1 className="text-xs font-medium">Who Attempted</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CandidateSource