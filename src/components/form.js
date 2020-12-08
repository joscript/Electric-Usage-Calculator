import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { compute, reset } from "../redux/actions";
import { useFormik } from "formik";

const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
};

function Form() {
  const dispatch = useDispatch();

  //   const [watts, setWatts] = useState("");
  //   const [hoursPerDay, setHoursPerDay] = useState("");
  //   const [priceKwh, setPriceKwh] = useState("");
  const [isComputed, setIsComputed] = useState(false);

  //   const handleCompute = () => {
  //     const wh = watts * hoursPerDay;
  //     const kw = wh / 1000;
  //     const usagePerDay = formatMoney(kw * priceKwh);
  //     const usagePerMonth = formatMoney(kw * 30 * priceKwh);
  //     const usagePerYear = formatMoney(kw * 365 * priceKwh);

  //     setIsComputed(true);

  //     return dispatch(
  //       compute({
  //         usagePerDay,
  //         usagePerMonth,
  //         usagePerYear,
  //       })
  //     );
  //   };

  //   const handleReset = () => {
  //     setWatts("");
  //     setHoursPerDay("");
  //     setPriceKwh("");
  //     setIsComputed(false);
  //     dispatch(reset());
  //   };

  //formik
  const formik = useFormik({
    initialValues: {
      watts: "",
      hoursPerDay: "",
      priceKwh: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.watts) errors.watts = "Required";
      if (!values.hoursPerDay) errors.hoursPerDay = "Required";
      if (!values.priceKwh) errors.priceKwh = "Required";
      return errors;
    },
    onSubmit: (values) => {
      console.log("submit values: ", values);
    },
  });

  //   const { handleChange, handleSubmit, values } = formik;
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-5">
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
              value={formik.values.watts}
              onChange={formik.handleChange}
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
              value={formik.values.hoursPerDay}
              onChange={formik.handleChange}
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
              value={formik.values.priceKwh}
              onChange={formik.handleChange}
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full text-xl text-white rounded-lg font-semibold py-2 px-4 ${
                isComputed
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              //   onClick={isComputed ? () => handleReset() : () => handleCompute()}
            >
              {isComputed ? "Reset" : "Compute"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
