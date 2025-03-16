import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";

const ProgressBar = ({ page, totalPages }) => {
  // Calculate progress percentage
  const progress = (page / totalPages) * 100;

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full">
      {/* Progress Bar */}
      <div className="w-[80vw] bg-gray-200 rounded-full h-[0.35rem]">
        <div
          className="bg-[#F86F0A] h-[0.35rem] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Page Display */}
      {/* <p className="text-lg text-[#8B8A8F] font-semibold">Page {page} of {totalPages}</p> */}
    </div>
  );
};

const First = () => {
  const [page, setPage] = useState(1);
  const totalPages = 6;

  return (
    <div className="bg-[#FFFFFF] w-full h-[80vh] flex flex-col items-center justify-center gap-3 ">
      <div className="text-5xl pb-10 text-center font-arsenal italic">
        AI <span className="text-[#EA6100] font-arsenal font-[700]">trip</span> planner
      </div>

      {/* Step Indicator */}
      <div className="text-[#8B8A8F]">Step {page} of {totalPages}</div>

      {/* Progress Bar Component */}
      <ProgressBar page={page} totalPages={totalPages} />

      {/* <Page1/> */}
      {/* <Page2/> */}
      {/* <Page3/> */}
      {/* <Page4 /> */}
      {/* <Page5/> */}
      <Page6/>

      {/* Navigation Buttons */}
      <div className="flex justify-between space-x-4 w-[80vw]">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-400 translate-y-10 text-white rounded-lg disabled:opacity-50"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-[#F86F0A] translate-y-10 text-white rounded-lg disabled:opacity-50"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default First;


