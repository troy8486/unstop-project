import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewAssessment, toggleModal } from "../utlis/appSlice"; 
import CloseIcon from '@mui/icons-material/Close';
import "./NewAssessmentModal.css";

const NewAssessmentModal = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: null,
    name: "",
    purpose: "",
    description: "",
    skills: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    if (e.target.id === 'duration') {
      const duration = e.target.value;
      if (!isNaN(duration) && duration.length <= 6) {
        setForm({ ...form, duration: duration });
      }
    } else {
      setForm({ ...form, [e.target.id]: e.target.value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!form.name || !form.purpose || !form.description || !form.skills || !form.duration) {
      alert("Please fill in all fields.");
      return;
    }
    const uniqueId = Date.now().toString();
    dispatch(addNewAssessment({ ...form, id: uniqueId }));
    handleCloseModal();
  };

  const handleCloseModal = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="modal fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="flex flex-col bg-white w-full md:w-[32%]  m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <div className="flex justify-between border-b border-gray-200">
          <h1 className="text-2xl font-semibold m-2 p-4">
            Create new assessment
          </h1>
          <button className="m-2 p-2" onClick={handleCloseModal}>
            <CloseIcon/>
          </button>
        </div>

        <form className="flex flex-col m-2 p-4" onSubmit={handleSave}>
          <label className="text-xl my-2" htmlFor="name">
            Name of assessment
          </label>
          <input
            className="border rounded-xl h-10 p-4"
            placeholder="Type Here"
            id="name"
            type="text"
            value={form.name}
            onChange={handleInputChange}
          />

          <label className="text-xl my-2" htmlFor="purpose">
            Purpose of the test is
          </label>

          <select
            className="border rounded-xl h-14 p-4"
            id="purpose"
            value={form.purpose}
            onChange={handleInputChange}
          >
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
          </select>

          <label className="text-xl my-2" htmlFor="description">
            Description
          </label>
          <input
            className="border rounded-xl h-10 p-4"
            id="description"
            type="text"
            placeholder="Describe here"
            value={form.description}
            onChange={handleInputChange}
          />

          <label className="text-xl my-2" htmlFor="skills">
            Skills
          </label>
          <div className="flex flex-wrap border h-20">
            <div className="flex text-xs font-medium bg-sky-200 w-fit h-fit m-2 p-2 rounded-2xl">
              <h1 className="pr-2">UI UX</h1>
              <CloseIcon style={{fontSize: 20}}/>
              </div>
              <div className="flex text-xs font-medium bg-sky-200 w-fit h-fit m-2 p-2 rounded-2xl">
              <h1 className="pr-2">UI UX</h1>
              <CloseIcon style={{fontSize: 20}}/>
              </div>
              <div className="flex text-xs font-medium bg-sky-200 w-fit h-fit m-2 p-2 rounded-2xl">
              <h1 className="pr-2">UI UX</h1>
              <CloseIcon style={{fontSize: 20}}/>
              </div>
          </div>
          <input
            className="border rounded-b-xl h-10 p-4"
            id="skills"
            type="text"
            placeholder="List skills"
            value={form.skills}
            onChange={handleInputChange}
          />

          <label className="text-xl my-2" htmlFor="duration">
            Duration of assessment
          </label>
          <input
            className="border rounded-xl h-10 p-4"
            id="duration"
            type="text"
            placeholder="HH:MM:SS"
            value={form.duration}
            onChange={handleInputChange}
          />

          <button
            className="text-lg mt-10 mb-2 h-10 rounded-lg bg-blue-400 text-white font-normal"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAssessmentModal;
