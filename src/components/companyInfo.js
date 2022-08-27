import React from "react";
import { useHistory } from "react-router-dom";

const CompanyInfo = () => {
  const history = useHistory();
  return (
    <div>
      <button
        className="relative top-1 bg-cyan-500 px-4 py-2 rounded-md"
        onClick={() => history.goBack()}
      >
        Back
      </button>
      <div className="container mx-auto h-[500px] w-full flex justify-center items-center">
        <div className="shadow-lg rounded-lg card w-[400px] h-[200px] border border-gray-400 p-5">
          <div>
            <span className="text-xl font-extrabold">Company: </span>
            <span>Geeksynergy Technologies Pvt Ltd</span>
          </div>
          <div>
            <span className="text-xl font-extrabold">Address: </span>
            <span>Sanjayanagar, Bengaluru-56</span>
          </div>
          <div>
            <span className="text-xl font-extrabold">Phone: </span>
            <span>XXXXXXXXX09</span>
          </div>
          <div>
            <span className="text-xl font-extrabold">Email: </span>
            <span>xxxx@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
