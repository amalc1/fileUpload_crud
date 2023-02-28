import React, { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import { fileUpload } from "../api/fileUploadRequests";

const Main = () => {
  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fileUpload(formData);
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleChange = (e) => {
    handleUpload(e.target.files[0]);
  };

  return (
    <>
      <div className="w-full  flex items-start ">
        <div className="h-20 mt-20 ml-20 flex items-center w-60 gap-5">
          <input type="file" id="fileUpload" onChange={handleChange} hidden />
          <label htmlFor="fileUpload">
            <span className="border w-max px-5 py-1 bg-blue-600 text-white flex items-center gap-2 rounded-md cursor-pointer">
              <div className="flex gap-2 items-center">
                <span className="text-2xl">
                  <MdFileUpload />
                </span>
                <span>Upload File</span>
              </div>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Main;
