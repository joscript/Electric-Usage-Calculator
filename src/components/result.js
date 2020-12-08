import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const costs = useSelector((state) => state.costs);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl mt-10 mb-5">
      <div className="px-3 pt-3">
        <p className="text-xl font-bold text-gray-700 text-center">COST</p>
      </div>
      <div className="sm:grid grid-cols-2 gap-4 px-2 py-2 mb-3">
        <div className="border border-red-300 rounded shadow-md p-3 text-gray-600 mb-2">
          <span className="font-bold">Per Day:</span>{" "}
          <span className="font-medium text-gray-500">
            {Object.keys(costs).length !== 0
              ? "P " + costs.usagePerDay
              : "P 0.00"}
          </span>
        </div>
        <div className="border border-red-300 rounded shadow-md p-3 text-gray-600 mb-2">
          <span className="font-bold">Per Month:</span>{" "}
          <span className="font-medium text-gray-500">
            {Object.keys(costs).length !== 0
              ? "P " + costs.usagePerMonth
              : "P 0.00"}
          </span>
        </div>
        <div className="border border-red-300 rounded shadow-md p-3 text-gray-600 mb-2">
          <span className="font-bold">Per Year:</span>{" "}
          <span className="font-medium text-gray-500">
            {Object.keys(costs).length !== 0
              ? "P " + costs.usagePerYear
              : "P 0.00"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Result;
