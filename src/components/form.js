import React from "react";

function Form() {
  const handleCompute = () => {
    alert("ukinam");
  };

  return (
    <>
      <div className="mt-5">
        {/* <form> */}
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
            for="watts"
          >
            Watts
          </label>
          <input
            className="appearance-none shadow-lg block w-full bg-white text-gray-700 border rounded-lg py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="watts"
            type="text"
          ></input>
        </div>

        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
            for="hours-use-per-day"
          >
            Hours use per day
          </label>
          <input
            className="appearance-none shadow-lg block w-full bg-white text-gray-700 border rounded-lg py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="hours-use-per-day"
            type="text"
          ></input>
        </div>

        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
            for="pkwh"
          >
            Price kWh
          </label>
          <input
            className="appearance-none shadow-lg block w-full bg-white text-gray-700 border rounded-lg py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="pkwh"
            type="text"
          ></input>
        </div>
        <div>
          <button
            className="bg-red-500 w-full text-xl text-white rounded-lg font-semibold py-2 px-4 hover:bg-red-600"
            onClick={() => handleCompute()}
          >
            Compute
          </button>
        </div>
        {/* </form> */}
      </div>
    </>
  );
}

export default Form;
